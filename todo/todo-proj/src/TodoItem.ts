class TodoItem{
    //private, public, protected

    constructor(public id: number, public task: string, public complete: boolean){
        this.id=id;
        this.task=task;
        this.complete=complete;
    }
    printDetails(): void{
        console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)":"(progress)"}`)
    }
}

export default TodoItem;