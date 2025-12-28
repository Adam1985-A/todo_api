import { EntitySchema } from "typeorm";

const UserEntity = new EntitySchema({
  mame: "User",
  tableName: "user",
  column:{
    id:{
      type: Number,
      primary: true,
      generated: true
    }, 
    email:{
     type: String,
      unique: true

    },
    password: {
      type: "varchar"
    },
    createdAt:{
      type: "timestamp",
      createDate: true
    },
    updatedAt:{
      type: "timestamp",
      updateDate: true
    }
  },

  relations:{
    todos:{
      type: "one-to-many",
      target: "Todo",
      inverside: "user",
    },
  },
});

export default UserEntity;