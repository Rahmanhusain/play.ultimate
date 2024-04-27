function addRow() {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var sno=table.rows.length;
    var regno=20250+(table.rows.length);
    newRow.insertCell(0).innerHTML = sno;
    newRow.insertCell(1).innerHTML = regno;
    newRow.insertCell(2).innerHTML = "Rahman Husain";
    var button1 = document.createElement("button"); // Create a new button element
    button1.innerHTML = "Registered"; // Set the button text
    button1.className = "Registered"; 
    newRow.insertCell(3).appendChild(button1);
    var button2 = document.createElement("button"); // Create a new button element
    button2.innerHTML = "See Certificate"; // Set the button text
    button2.className = "Certificate"; 
    newRow.insertCell(4).appendChild(button2);
  }
  