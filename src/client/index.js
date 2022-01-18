
import {checker} from "./js/checker"

const input= document.getElementById("myarticle-url")
const mybtn= document.getElementById("mybtn")


const a={url:input.value}


const sendUrl= async ( url ,data={} )=>{
    try { 
      let response = await fetch( url , {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      });
      const resdata = await response;
      return resdata
    }catch(error) {
        // alert(`something went wrong `)
    console.log("error", error);
    }

}


const urlData=async()=>{
  try {
    const asa = await fetch("http://localhost:8081/alldata")
    const a = await asa.json()
    console.log(a)
    const { agreement, subjectivity, confidence, irony } = a;
        document.getElementById("irony").innerHTML=`irony : ${irony}`;
        document.getElementById("subjectivity").innerHTML=` subjectivity: ${subjectivity}`;
        document.getElementById("confidence").innerHTML=`confidence: ${confidence}`;
        document.getElementById("agreement").innerHTML=`agreement: ${agreement}`;
      }catch(error){
    console.log("error",error)
    document.getElementById("text").innerHTML="Error fetching date , not find data";

  }
}

mybtn.addEventListener("click",(e)=>{//event with data cheker
    e.preventDefault()
    if(checker(input.value)){
        //console.log("good")
        sendUrl("http://localhost:8081/url",{"url":input.value})
        urlData()
    }else {
      document.getElementById("irony").innerHTML=``;
      document.getElementById("subjectivity").innerHTML=``;
      document.getElementById("agreement").innerHTML=``;
      document.getElementById("confidence").innerHTML=``;
      document.getElementById("text").innerHTML="erorr";
    }
})


export {
  urlData,
  sendUrl
}