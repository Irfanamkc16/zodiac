function zodiacsign()
{
    let day=document.getElementById("day").value;
    console.log(day);
    let month=document.getElementById("month").value;
    console.log(month);
   
    if ((month == 1 && day>=22 )|| (month == 2&& day<=18))
    {
        console.log("aquarius");
        document.getElementById("zodiacsign").innerHTML="aquarius";
    }
    else if ((month == 2 && day>=19) || (month ==  3 && day<=19))
    {
        document.getElementById("zodiacsign").innerHTML="pisces";
        console.log("pisces");
    }
   else  if ((month == 3 && day>=21) || (month == 4 && day<=19))
    {
        document.getElementById("zodiacsign").innerHTML="aries";
        console.log("aries");
    }
   else if ((month == 4 && day>=20) || (month ==  5&& day<=20))
    {
        document.getElementById("zodiacsign").innerHTML="taurus";
        console.log("taurus");
    }
    else if ((month == 5 && day>=21)|| (month == 6&& day<=20))
    {
        document.getElementById("zodiacsign").innerHTML="gemini";
        console.log("gemini");
    }
else if ((month == 6 && day>=21)||( month == 7 && day<=22))
{
    document.getElementById("zodiacsign").innerHTML="cancer";
    console.log("cancer");
}
else if ((month == 7 && day>=23) || (month == 8 && day<=22))
    {
        document.getElementById("zodiacsign").innerHTML="leo";
        console.log("leo");
    }
   else if ((month == 8 && day>=23) || (month == 9 && day<=22))
    {
        document.getElementById("zodiacsign").innerHTML="virgo";
        console.log("virgo");
    }
   else if ((month == 9 && day>=23) || (month == 10 && day<=22))
    {
        document.getElementById("zodiacsign").innerHTML="libra";
        console.log("libra");
    }
   else if ((month == 10 && day>=23 )|| (month == 11 && day<=21))
    {
        document.getElementById("zodiacsign").innerHTML="scorpio";
        console.log("scorpio");
    }
   else if ((month == 11 && day>=22) || (month == 12 && day<=21))
    {
        document.getElementById("zodiacsign").innerHTML="capricon";
        console.log("capricon");
    }
   else if ((month == 12 && day>=22) || (month == 1 && day<=21))
    {
        document.getElementById("zodiacsign").innerHTML="sagittarius";
        console.Log("sagittarius");
    }
}
