import { EntitySchema } from "typeorm";

export const TodoEntity = new EntitySchema({
    name: "Todo",
    tableName: "todos",
    columns: {
        id: {
            type: Number,
            generated: true,
            primary: true
    },
        title: {
            type: String,
            nullable: false
        },
        completed: {
            type: Boolean,
            default: false
        },
        description: {
            type: String,
            nullable: true
        },
        createdAt: {
            type: "timestamp",
            createDate: true
    },
        updatedAt: {
            type: "timestamp",
            updateDate: true
    }
    }
});