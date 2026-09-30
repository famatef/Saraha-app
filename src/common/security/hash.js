import {hashSync,compareSync} from "bcrypt";
export const hash = async (plainText,SALT_ROUNDS=12) => {
     return  hashSync(plainText,SALT_ROUNDS);
}
export const compare = async (plainText,cipherText) => {
    return compareSync(plainText,cipherText);
}