import { Injectable } from "@nestjs/common";
import { PrismaService } from '../../prisma/prisma.service';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from "src/product/dto/create-product.dto";
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        return this.prisma.post.create({
            data: createProductDto,
        });
    }
    
    async findAll(): Promise<Product[]> {
        return this.prisma.post.findMany({
            include: {
                Review: true
            }
        })
    }
    
    async findOne(id: number): Promise<Product> {
        return this.prisma.post.findUnique({
            where: {
                id: id
            },
            include:{
                Review: true
            }
        })
    }
    
    async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
        return this.prisma.post.update({
            where: {id:id},
            data: updateProductDto
        })
    }
    
    async remove(id: number): Promise<Product> {
        return this.prisma.post.delete({
            where: {id:id},
        })
    }
}
