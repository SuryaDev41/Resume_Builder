function addNewWEField(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("wefield");
    newnode.classList.add("mt-2");
    newnode.setAttribute('placeholder','enter here');
    newnode.setAttribute("rows",3);
    let wadd=document.getElementById("we");
    let weaddbutton1=document.getElementById("weAddButton");
    wadd.insertBefore(newnode,weaddbutton1);

}


function addNewAQField(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("eqfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute('placeholder','enter here');
    newnode.setAttribute("rows",3);
    let qadd=document.getElementById("aq");
    let aqaddbutton1=document.getElementById("aqAddButton");
    qadd.insertBefore(newnode,aqaddbutton1);

}

function generateCV(){
    //console.log("printing");
    let nameField=document.getElementById('namefield').value
    let tname=document.getElementById('tname1');
    tname.innerHTML=nameField;
    document.getElementById('tname2').innerHTML=nameField;
    document.getElementById('tcontact').innerHTML=document.getElementById('contactfield').value;
    document.getElementById('taddress').innerHTML=document.getElementById('addfield').value;

    //important links
    document.getElementById('tl').innerHTML=document.getElementById('Linkedinfield').value;
    document.getElementById('tf').innerHTML=document.getElementById('FaceBook').value;
    document.getElementById('tc').innerHTML=document.getElementById('codefield').value;

    //obj
    document.getElementById('tobj').innerHTML=document.getElementById('obj').value;
    document.getElementById('tobj').innerHTML=document.getElementById('obj').value;

    //work experience
    let ex=document.getElementsByClassName('wefield');
    let s="";
    for(let e of ex){
        s=s+`<li> ${e.value} </li>`;
    }

    document.getElementById('wet').innerHTML=s;

    let aqq=document.getElementsByClassName('eqfield');
    let s1="";
    for(let e of aqq){
        s1=s1+`<li> ${e.value} </li>`;
    }
    document.getElementById('aqt').innerHTML=s1;

    
    let file=document.getElementById('imgfield').files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
   reader.onloadend=function(){
    document.getElementById('imgtemplate').src=reader.result;
   };

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

}

function printCV(){
    //console.log("workingi");
    window.print();
}