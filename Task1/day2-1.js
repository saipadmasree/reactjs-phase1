console.log("1.a->");
let a=['0','1','2','3','4','5','6','7','8','9'];
console.log(a[5]);

console.log("1.b->");
a.push('10','11','12','13','14','15','16','17','18','19','20');
console.log(a);
let length=a.length;

console.log("1.c->");
a.pop(a[length-1]);
console.log(a);

console.log("1.d->");
a.shift(a[0]);
console.log(a);

console.log("1.e->");
a.unshift('Numbers');
console.log(a);

console.log("1.f->");
let index=a.indexOf('17');
console.log(index);

console.log("1.g->");
let pos=11 ,n1=1
let remove=a.splice(pos,1);
console.log(a);

console.log("1.h->");
let posi=4 ,n2=5
let removed=a.splice(posi,5);
console.log(a);

console.log("1.i->");
let b=[];
let l=a.length;
for(let i=0;i<a.length;i++)
{
      b[i]=[i*a[i]];
}
console.log(b);


console.log("1.j->");
for(let i=7;i<11;i++)
{
console.log(a[i]);
}

console.log("1.k->");
let c=[];
for(let j=0;j<b.length;j++)
{
    if(b[j]>30)
    {
        c[j]=b[j];
    }
}
 console.log(c);

 console.log("1.l->");
 let d=[...a,...b,...c];
console.log(d);
