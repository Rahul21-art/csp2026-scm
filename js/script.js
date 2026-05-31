console.log("Sachivalayam Complaint System Loaded");

function darkMode(){
document.body.classList.toggle("dark");
}

function submitComplaint(){

let complaintId =
"CMP" + Date.now();

alert(
"Complaint Submitted Successfully\nComplaint ID : "
+ complaintId
);

localStorage.setItem(
"complaintId",
complaintId
);

}