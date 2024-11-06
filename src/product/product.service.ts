import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repositories/product.repository';

@Injectable()
export class ProductService {
    constructor(private readonly ProductsRepository: ProductRepository) {}
    
  create(createProductDto: CreateProductDto) {
    return this.ProductsRepository.create(createProductDto);
  }

  findAll() {
    return this.ProductsRepository.findAll()
  }

  findOne(id: number) {
    return this.ProductsRepository.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.ProductsRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.ProductsRepository.remove(id);
  }
}
