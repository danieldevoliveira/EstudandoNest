import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }
    @Post()
    create(@Body() task: TaskDto) {
        this.taskService.create(task);
    }

    @Get('/:id')
    findbyId(@Param('id') id: string): TaskDto {
        return this.taskService.findById(id);
    }

    @Put()
    update(@Body() task: TaskDto) {
        this.taskService.update(task);
    }

    @Delete('/:id')
    remove(@Param('id') id: string) {
        return this.taskService.remove(id)
    }

}
