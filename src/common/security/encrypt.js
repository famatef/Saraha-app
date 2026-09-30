import crypto from 'node:crypto';
const ENCRYPTION_KEY = Buffer.from('727e6e6f646973676d6170692e636f6d', 'utf8');
const IV_LENGTH = 16;

export function Encrypt(plainText) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
  let encrypted = cipher.update(plainText);

  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}
export function Decrypt(text) {
    const[ivHex, encryptedText] = text.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


