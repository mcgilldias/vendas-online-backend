import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { AddressService } from './address.service';
  import { CreateAddressDto } from './dtos/createAddress.dto';
  import { ReturnAddressDto } from './dtos/returnAddress.dto';
  import { AddressEntity } from './entities/address.entity';

  @Controller('address')
  export class AddressController {
    constructor(private readonly addressService: AddressService) {}
  
    @Post('/:userId')
    @UsePipes(ValidationPipe)
    async createAddress(
      @Body() createAddressDto: CreateAddressDto,
      @Param('userId') userId: number,
    ): Promise<AddressEntity> {
      return this.addressService.createAddress(createAddressDto, userId);
    }
  
    @Get('/:userId')
    async findAddressByUserId(
      @Param('userId') userId: number,
    ): Promise<ReturnAddressDto[]> {
      return (await this.addressService.findAddressByUserId(userId)).map(
        (address) => new ReturnAddressDto(address),
      );
    }
  }