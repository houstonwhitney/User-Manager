export class UserService {
    listeUser = [
        new personne("djouka","whitney houston","admin",new Date(),"bafang","admin"),
        new personne("djoumissie","charlotte laFraise","user",new Date(),"bordeau","membre"),
        new personne("kanaki","ken shiro","test",new Date(),"usa","admin")
    ];

    userConnect : number = 0;

    public findByLogin(login : string){
        for (const personne of this.listeUser) {
            if(personne.getLogin() === login){
                return personne;
            }            
        }
        return null;
    }

    public addPerson(nom: string, prenom: string, login: string, dateNaiss: Date, lieuNais: string, status: string){
        this.listeUser.push(new personne(nom,prenom,login,dateNaiss,lieuNais, status));
    }

    public updatePerson(nom: string, prenom: string, login: string, dateNaiss: Date, lieuNais: string, status: string, oldLogin : string){
        const p = this.findByLogin(oldLogin);
        p.setNom(nom);
        p.setPrenom(prenom);
        p.setLogin(login);
        p.setLieuNaiss(lieuNais);
        p.setStatus(status);
        p.setDateNaiss(dateNaiss);
    }

    public deletePerson(login : string){
        let listeInterm = [];
        for (const p of this.listeUser) {
            if(p.getLogin() != login){
                listeInterm.push(p);
            }
        }
        this.listeUser = listeInterm;
    }
    
    setAmin(login : string){
        const p = this.findByLogin(login);
        if(p.getSatatus() === 'admin')
            p.setStatus('membre');
        else
            p.setStatus('admin');

    }

    findUsersByLogin(login : string){
        let listeInterm = [];
        for (const p of this.listeUser) {
            if(p.getLogin().startsWith(login,0)){
                listeInterm.push(p);
            }
        }
        return listeInterm;
    }

    createPassword(password : string, login : string) : boolean{
        if(this.findByLogin(login)=== null){
          return false;
        }
        this.findByLogin(login).setPassword(password);
        return true;
    }
}


class personne {
    private nom: string;
    private prenom: string;
    private login: string;
    private dateNaiss: Date;
    private lieuNais: string;
    private status: string;
    private password : string ="";

    constructor(nom: string, prenom: string,
                 login: string, dateNaiss: Date,
                  lieuNais: string, status: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.login = login;
        this.dateNaiss = dateNaiss;
        this.lieuNais = lieuNais;
        this.status = status;
    }

    public getNom(){
        return this.nom;
    }
    public getPrenom(){
        return this.prenom;
    }

    public getLogin(){
        return this.login;
    }
    public getDateNaiss(){
        return this.dateNaiss;
    }
    public getLieuNaiss(){
        return this.lieuNais;
    }
    public getSatatus(){
        return this.status;
    }

    public getPassword(){
        return this.password;
    }


    public setLogin(login : string){
        this.login = login;
    }

    public setNom(nom : string){
        this.nom = nom;
    }

    public setPrenom(prenom : string){
        this.prenom = prenom;
    }

    public setDateNaiss(dateNaiss : Date){
        this.dateNaiss = dateNaiss;
    }

    public setLieuNaiss(lieuNais : string){
        this.lieuNais = lieuNais;
    }

    public setStatus(status : string){
        this.status = status;
    }

    public setPassword(password : string){
        this.password = password;
    }

}