let s={
    firstname:"Darsheel",
    lastname:"Safari",
    age:"22",
    yearsOfExperience:"12years",
    noOfMovies:"4",
    noOfAwards:['Filmfare Critics Award for Best Actor for taare  zameen par in 2008', 
                'Filmfare Award for Best Actor',
                'Zee Cine Award - Critics: Choice Best Actor',
                'Star Screen Awards-Special Jury Award',
                'V.Shantaram Awards-Best Actor in a lead role',
                'Zee Cine Awards'],
    dateOfBirth:"9th March 1997",
    debut:"Taare Zameen Par in 2007" ,
    nameOfcharacter:"Nandakishore Awasti",           
       

       getFullname()
       {
           return `${this.firstname} ${this.lastname}`
       },

       getBio()
       {
             return `Name-${this.firstname} ${this.lastname} \n Age-${this.age} \n Dob-${this.dateOfBirth} He is an awesome actor with perfect performance as 12 yr old actor in his debut movie ${this.debut}`
       },

       getCareer()
       {
           return `Experience-${this.yearsOfExperience} \n debut Movie-${this.debut}`
       },

       getAwards()
       {
         return `${this.firstname} received ${this.noOfAwards}` 
       }
    }
        console.log(s.firstname);
        console.log(s.noOfMovies);
        console.log(s.yearsOfExperience);
        console.log(s.nameOfcharacter);
        console.log(s.getFullname());
        console.log(s.getBio());
        console.log(s.getCareer());
        console.log(s.getAwards());

let b={
    firstname:"Ahsaas",
    lastname:"Channa",
    age:"25",
    yearsOfExperience:"5 years",
    noOfMovies:"4",
    noOfAwards:['first film fare for role in marathi movie Muramba'],
    dateOfBirth:"10th may 1992",
    debut:"Katti Batti in 2015 Bollywood" ,
    nameOfcharacter:"Koyal Khabra",           
       

       getFullname()
       {
           return `${this.firstname} ${this.lastname}`
       },

       getBio()
       {
             return `Name-${this.firstname} ${this.lastname} \n Age-${this.age} \n Dob-${this.dateOfBirth} He is an awesome actor with perfect performance as 12 yr old actor in his debut movie ${this.debut}`
       },

       getCareer()
       {
           return `Experience-${this.yearsOfExperience} \n debut Movie-${this.debut}`
       },

       getAwards()
       {
         return `${this.firstname} received ${this.noOfAwards}` 
       }
    }
        console.log(b.firstname);
        console.log(b.noOfMovies);
        console.log(b.yearsOfExperience);
        console.log(b.nameOfcharacter);
        console.log(b.getFullname());
        console.log(b.getBio());
        console.log(b.getCareer());
        console.log(b.getAwards());



