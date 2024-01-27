// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (num,arr) => {
  return {
    _specimenNum: num,
    _dna: arr,

    mutate () {
      let value = this._dna[Math.floor(Math.random()*4)];
      let mutatedval;
      while(value === this._specimenNum){
        mutatedval = this._dna[Math.floor(Math.random()*4)];
        value = mutatedval;
      }
      return value;
      
  },

  compareDNA (pAequor){
    let check = []
    
    for (let i = 0; i < pAequor._dna.length; i++){
        if(pAequor._dna[i] === this._dna[i]){
          check.push(this._dna[i])
        }
    }
      let percentage = (check.length / this._dna.length) * 100
      console.log(`Specimen #1 and Specimen #2 have ${percentage.toFixed(2)}% DNA in common`);
  },

  willLikelySurvive (){
    let propb = [];
    for(let i = 0; i < this._dna.length; i++){
      if(this._dna[i] === 'C' || this._dna[i] === 'G'){
        propb.push(this._dna[i]);
      }
      }
    let survive = (propb.length/this._dna.length) * 100;
    if(survive >= 60){
      return true;
    }

      return false;
  }



}};

// const organism = pAequorFactory(returnRandBase(),mockUpStrand());
// console.log('Organism Creation Test:');
// console.log(organism._specimenNum);
// console.log(organism.mutate());

const specimen1 = pAequorFactory(returnRandBase(),mockUpStrand());
const specimen2 = pAequorFactory(returnRandBase(),mockUpStrand());



specimen1.compareDNA(specimen2);
console.log(specimen1.willLikelySurvive());



