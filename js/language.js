const translations = {

en: {

dashboardTitle: "User Dashboard",
register: "Register",
login: "Login",
registerComplaint: "Register Complaint",
trackComplaint: "Track Complaint",
totalComplaints: "Total Complaints",
activeComplaints: "Active Complaints",
resolvedComplaints: "Resolved Complaints",
complaintManagement: "Public Complaint Management System",
heroText: "Register, Track and Monitor Your Complaints Easily"

},

te: {

dashboardTitle: "వినియోగదారు డాష్‌బోర్డ్",
register: "నమోదు",
login: "లాగిన్",
registerComplaint: "ఫిర్యాదు నమోదు",
trackComplaint: "ఫిర్యాదు ట్రాక్ చేయండి",
totalComplaints: "మొత్తం ఫిర్యాదులు",
activeComplaints: "క్రియాశీల ఫిర్యాదులు",
resolvedComplaints: "పరిష్కరించిన ఫిర్యాదులు",
complaintManagement: "ఫిర్యాదుల నిర్వహణ వ్యవస్థ",
heroText: "మీ ఫిర్యాదులను నమోదు చేసి ట్రాక్ చేయండి"

}

};

function changeLanguage(lang){

localStorage.setItem(
"language",
lang
);

applyLanguage();

}

function applyLanguage(){

let lang =
localStorage.getItem("language")
|| "en";

let text =
translations[lang];

if(document.getElementById("heroTitle"))
document.getElementById("heroTitle").innerHTML =
text.complaintManagement;

if(document.getElementById("heroText"))
document.getElementById("heroText").innerHTML =
text.heroText;

if(document.getElementById("registerBtn"))
document.getElementById("registerBtn").innerHTML =
text.register;

if(document.getElementById("loginBtn"))
document.getElementById("loginBtn").innerHTML =
text.login;

if(document.getElementById("registerComplaintBtn"))
document.getElementById("registerComplaintBtn").innerHTML =
text.registerComplaint;

if(document.getElementById("trackComplaintBtn"))
document.getElementById("trackComplaintBtn").innerHTML =
text.trackComplaint;

if(document.getElementById("totalText"))
document.getElementById("totalText").innerHTML =
text.totalComplaints;

if(document.getElementById("activeText"))
document.getElementById("activeText").innerHTML =
text.activeComplaints;

if(document.getElementById("resolvedText"))
document.getElementById("resolvedText").innerHTML =
text.resolvedComplaints;

if(document.getElementById("dashboardTitle"))
document.getElementById("dashboardTitle").innerHTML =
text.dashboardTitle;

}

window.onload = function(){

applyLanguage();

};