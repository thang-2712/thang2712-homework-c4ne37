let sheep=[5,7,300,90,24,50,25];
const sizeit=8;
console.log(`Hi, my name is Thang and  there are my sheep size : ${sheep}`);
for (let j=1;j<5;j++)
{ 
    let max=sheep[0];
    console.log (`MONTH ${j}`)
for(let i=0;i<sheep.length;i++)
{
    if (max<sheep[i])
    {
        max=sheep[i];
    }
}

console.log (`Now my biggest sheep has size ${max} and let's shear it`);
let indexofsheep=sheep.indexOf(max);
sheep.splice(indexofsheep,0,sizeit);
sheep.splice(indexofsheep+1,1)
console.log(`after shearing, there are my sheep size : ${sheep}`);
for (let i=0;i<sheep.length;i++)
{
    sheep[i]=sheep[i]+50; 
}
console.log(`One month has passed ,now here is my sheep size: ${sheep}  `)
console.log("-------------------------------------------------------");
}
let sheepcost=0;
for (let i=0;i<sheep.length;i++)
{
     sheepcost=sheepcost+sheep[i];
}
console.log(`My flock has size in total ${sheepcost}`)
sheepcost=sheepcost*2;
let cost=prompt("Cost of the sheep is")
console.log (`I would get ${sheepcost*cost} $ `);
