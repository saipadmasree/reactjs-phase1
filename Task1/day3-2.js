class Character{
    constructor(firstname,lastname,age,yearsOfExperience,noOfMovies,noOfAwards,dateOfBirth)
    {
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.yearsOfExperience=yearsOfExperience;
    this.noOfMovies=noOfMovies;
    this.noOfAwards=noOfAwards;
    this.dateOfBirth=dateOfBirth;
    }
       getFullname()
       {
           return `${this.firstname} ${this.lastname}`
       }

       getBio()
       {
             return `Name-${this.firstname} ${this.lastname} \n Age-${this.age} \n Dob-${this.dateOfBirth} He is an awesome actor with perfect performance as 12 yr old actor in his debut movie`;
       }

       getCareer()
       {
           return `Experience-${this.yearsOfExperience} \n debut Movie-Taare Zameen Par`;
       }

       getAwards()
       {
         return `${this.firstname} received ${this.noOfAwards}`; 
       }
    }
    let s= new Character('Darsheel',"Safari","22","12","4","5 awards","9th March 1997");
        console.log(s.firstname);
        console.log(s.noOfMovies);
        console.log(s.yearsOfExperience);
        console.log(s.getFullname());
        console.log(s.getBio());
        console.log(s.getCareer());
        console.log(s.getAwards());

        console.log("  ");
        console.log("  ");
        console.log("QUESTIONS 5,6,7=>");
        console.log("  ");
        
        setTimeout (() =>{
            console.log("React is the best");
          },5000);
        
          setInterval (()=>{
               console.log("React is the best");
          },3000);
        
          let b=setInterval( ()=> {
              console.log("React is best")
          },1000);
          setTimeout(()=>{
              clearInterval(b);
          },11000);
           
           
             
           

