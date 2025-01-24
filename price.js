const pic=document.getElementById("pictures");
        const vid=document.getElementById("video");
        const toTal =document.getElementById("total");
        const namee =document.getElementById("name");
        const contact =document.getElementById("contact");
        const date =document.getElementById("date");
        const time =document.getElementById("time");
        const eventt =document.getElementById("event");
        const paragraphBox =document.getElementById("para");
    
        function calculator() {
            const picturesQuote=[0,220,450,900]
            const videosQuote=[0,700,1500,2200]

            let picValue= pic.value;
            let vidValue=vid.value;
            let nameValue= namee.value;
            let contactValue= contact.value;
            let dateValue= date.value;
            let timeValue= time.value;
            let eventValue= eventt.value;
            
            const pricePic=picturesQuote[picValue]
            const priceVid=videosQuote[vidValue] 

            const Total= pricePic + priceVid;
            toTal.innerHTML=  ` R${Total}`;
            console.log(nameValue)

            paragraphBox.innerHTML=`
             <p>Name    :       ${nameValue}</p>
             <p>Contact :       ${contactValue}</p>
             <p>Event   :       ${eventValue}.</p>
             <p>Picture Package : ${picValue}</p>
            <p>Video Package    : ${vidValue} </p>
             <p>Date    :       ${dateValue}</p>
             <p>Time    :       ${timeValue}PM.</p> 
            <p>                 R${Total}. </p>
            If you have confirmed this, please send it to focustripod_vz management `;
            
            paragraphBox.classList.add("confirmtext",'confirmcontainer');

        }