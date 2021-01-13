import { Inject, Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Injectable()
export class UserService {
    users: {id: number, name: string, status: string}[] = [{id: 1, name: 'sinni', status: 'active'}, {id: 2, name: 'shanky', status: 'inactive'}];
    updateUsers = new EventEmitter<string>();
}