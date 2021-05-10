const ItemoModel = require("../models/mongoose/Item");

class ItemService{
    static async getAll(){
        return ItemoModel.find({}).sort({createdAt:-1}).exec(); //exec -> mongoose to return us a real promise
    }

    static async getOne(itemId){
        return ItemoModel.findById(itemId).exec();
    }

    static async create(data){
        const item = new ItemoModel(data);
        return item.save();
    }

    static async update(itemId, data){
        return ItemoModel.findByIdAndUpdate(itemId, data).exec();
    }
    
    static async remove(itemId){
        return ItemoModel.deleteOne({_id: itemId }).exec(); // _id -> the last item will be on top
    }
}

module.exports = ItemService;

