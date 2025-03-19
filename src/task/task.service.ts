import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { identity, NotFoundError } from 'rxjs';

@Injectable()
export class TaskService {
    private tasks: TaskDto[] = [];

    create(task: TaskDto) {
        this.tasks.push(task);
        console.log(this.tasks);
    }

    findById(id: string): TaskDto {
        const foundTask = this.tasks.find(t => t.id === id);

        if (foundTask) {
            return foundTask;
        }

        // Utilizando o NotFoundException para retornar 404
        throw new NotFoundException(`Task with ID ${id} not found`);
    }

    update(task: TaskDto) {
        let index = this.tasks.findIndex(t => t.id === task.id);

        if (index >= 0) {
            this.tasks[index] = task;
            return;
        }
        throw new HttpException(`task with ID ${task.id} not found`, HttpStatus.BAD_REQUEST);
    }

    remove(id: string) {
        let index = this.tasks.findIndex(t => t.id === id);

        if (index >= 0) {
            this.tasks.splice(index, 1) //indica o index e a quantidade de itens a ser removido em um arrey.
            return
        }

        throw new HttpException(`task with ID ${id} not found`, HttpStatus.BAD_REQUEST);
    }
}
