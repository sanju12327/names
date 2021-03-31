var names = [];

function submit() {
    var name_1 = document.getElementById("input_1").value;

    var name_2 = document.getElementById("input_2").value;

    var name_3 = document.getElementById("input_3").value;

    var name_4 = document.getElementById("input_4").value;

    names.push (name_1);

    names.push (name_2);

    names.push (name_3);

    names.push (name_4);

    console.log(names)

    document.getElementById("display_name").innerHTML = names;

    document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    names.sort();
    console.log (names);

    document.getElementById("display_name").innerHTML = names;
}

