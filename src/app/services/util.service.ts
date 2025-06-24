import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
declare const CryptoJS: any;
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  Encrypt(data: any): any {
        let json = JSON.stringify(data);
        return CryptoJS.AES.encrypt(json, environment.encKey);
    }
    Decrypt(encData: any): any {
        var bytes = CryptoJS.AES.decrypt(encData.toString(), environment.encKey);
        var data = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(data);
    }
    static GenerateGUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
  }
