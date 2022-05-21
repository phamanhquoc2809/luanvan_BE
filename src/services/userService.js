import { use } from "express/lib/application";
import db from "../models/index";


let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Users.findAll();
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
};

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Users.create({

                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                pwd: data.pwd,
                phone: data.phone,
                address: data.address,
                gender: data.gender,
                id_permission: data.id_permission,
            })
            resolve({
                errCode: 0,
                errMessage: 'OK'
            })
        } catch (e) {
            reject(e)
        }
    })
}
let deleteUser = (UserID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { id: UserID },
                raw: false
            })
            if (!user) {
                resolve({
                    errCode: 2,
                    errMessage: 'User is not exist'
                })
            } else {
                await user.destroy();
            }
            resolve({
                errCode: 0,
                errMessage: 'User is delete success'
            })
        } catch (error) {
            reject(error)
        }
    })
}
let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: "Messing requited parameter"
                });
            }
            let user = await db.Users.findOne({
                where: { id: data.id },
                raw: false,
            });
            if (user) {
                user.firstname = data.firstname;
                user.lastname = data.lastname;
                user.phone = data.phone;
                user.address = data.address;
                user.gender = data.gender;

                await user.save();
                resolve({
                    errCode: 0,
                    errMessage: "Update User Success!"
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "User is not found!"
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}
let getUserByID = (UserID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { id: UserID },
                raw: false
            })
            if (!user) {
                resolve({
                    errCode: 2,
                    errMessage: 'The user is not exist'
                })
            }
            resolve(user);
        } catch (error) {
            reject(error);
        }
    })
}


module.exports = {
    getAllUser: getAllUser,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    getUserByID: getUserByID,
}