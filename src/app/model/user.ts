export class User {
    constructor(
        public email:string,
        public username:string,
        private password : string,
        private _token : string,
        private expiresInMins:Date
    ){}

    get token(){
        if(new Date()> this.expiresInMins){
            return null
        }
        return this._token;
    }

}