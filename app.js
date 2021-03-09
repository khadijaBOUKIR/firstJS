class Student {
    constructor(math,english,name,lastname,frensh,phisics,compterscience){
  this.math=math;
  this.english=english;
  this.frensh=frensh;
  this.phisics=phisics;
  this.name=name;
  this.lastname=lastname;
  this.compterscience=compterscience;
    }
  averedge(){
  let valeur = (this.math+this.english+this.frensh+this.phisics+this.compterscience)/5;
  if(valeur >= 10)
    console.log('success');
  else 
    console.log('faillure');
  }
  }
  let kh = new Student(20,20,"khadija","boukir",20,20,20);
  let j = new Student(6,9,"jamaldine","boukir",5,3,20);
  kh.averedge();
  j.averedge();