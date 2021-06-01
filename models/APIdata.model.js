

 class apidatamodel {
     constructor(data){
        this.gender=data.gender;
        this.img=data.img;
        this.id=data._id;
        this.name=data.name;
        this.psiPowers=[];
     }
 }

 class psiPower {
    constructor(data){
      this.psiPowers=data.name;
    }
}

 module.exports={apidatamodel,psiPower};