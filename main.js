name_of_stud_array=[];

function submit()
{
    var name1 =document.getElementById("Name_of_stud_1").value;
    var name2 =document.getElementById("Name_of_stud_2").value;
    var name3 =document.getElementById("Name_of_stud_3").value;
    var name4 =document.getElementById("Name_of_stud_4").value;
    var name5 =document.getElementById("Name_of_stud_5").value;
    
    name_of_stud_array.push(name1);
    name_of_stud_array.push(name2);
    name_of_stud_array.push(name3);
    name_of_stud_array.push(name4);
    name_of_stud_array.push(name5);
    console.log(name_of_stud_array);

 
    document.getElementById("display").innerHTML=name_of_stud_array;

    document.getElementById("submit").style.display="none";
    document.getElementById("sorting").style.display="inline-block";
}

function sorting() {
name_of_stud_array.sort();
console.log(name_of_stud_array);
document.getElementById("display").innerHTML=name_of_stud_array;
}