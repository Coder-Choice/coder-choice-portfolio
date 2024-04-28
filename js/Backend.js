

const button = document.querySelector('#sub-button');
button.addEventListener('click', ()=>{
    const nameinput = document.querySelector('#sub-email');
    const name1 = nameinput.value;
    nameinput.value = ""
    console.log(name1);
    fetch  ('https://coder-choice.vercel.app/api/v1/subscribers',{

headers:{
    'Content-Type': 'application/json',
    
},
method: 'POST',
body: JSON.stringify({email:name1})
 })
 .then(response => response.json())
 .then(data => alert(data.url))
});
