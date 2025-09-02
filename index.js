const dob=document.getElementById('dob')
const btn=document.getElementById('btn')
const para=document.getElementById('para')


function ageCalculator(){
    console.log(new Date(dob.value).getFullYear())
    console.log(new Date().getFullYear())

    const age=new Date().getFullYear() - new Date(dob.value).getFullYear();
    console.log(age);
    para.innerHTML=`You are ${age} year old`
}

btn.addEventListener('click',ageCalculator)