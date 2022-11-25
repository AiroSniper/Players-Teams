export class PlayerRegisteredEvent{
    constructor(public readonly fullName:string, public readonly email:string,public readonly phone:string){}
}