import { Controller, Post, Body, Get, Param, Patch, Put, Delete, ParseIntPipe } from '@nestjs/common'
import { CreateUserDTO } from './dto/create-user.dto'
import { UpdatePutUserDTO } from './dto/update-put-user.dto'
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto'

@Controller("users")
export class UserController {
    @Post()
    async create(@Body() { name, email, password }: CreateUserDTO) {
        return { name, email, password }
    }

    @Get()
    async list() {
        return { users: [] }
    }

    @Get(':id')
    async show(
        @Param('id', ParseIntPipe) id: number
    ) {
        return { user: {}, id }
    }

    @Put(':id')
    async update(
        @Body() { name, email, password }: UpdatePutUserDTO,
        @Param('id', ParseIntPipe) id: number) {
        return {
            method: "PUT",
            name, email, password,
            id
        }
    }

    @Patch(':id')
    async updatePartial(@Body() { name }: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            method: "PATCH",
            name,
            id
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return {
            id
        }
    }
}
