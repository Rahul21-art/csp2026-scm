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
document.getElementById("roadsTitle").innerHTML =
"🛣 Roads";

document.getElementById("roadsDesc").innerHTML =
"Potholes, damaged roads, road blockages and unsafe roads.";

document.getElementById("waterTitle").innerHTML =
"🚰 Water Supply";

document.getElementById("waterDesc").innerHTML =
"Water shortages, leakage issues and supply interruptions.";

document.getElementById("electricityTitle").innerHTML =
"⚡ Electricity";

document.getElementById("electricityDesc").innerHTML =
"Power failures, transformer issues and electrical hazards.";

document.getElementById("streetTitle").innerHTML =
"💡 Street Lights";

document.getElementById("streetDesc").innerHTML =
"Non-working street lights and damaged poles.";

document.getElementById("drainageTitle").innerHTML =
"🌊 Drainage";

document.getElementById("drainageDesc").innerHTML =
"Blocked drains and overflowing drainage systems.";
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

  
document.getElementById("roadsTitle").innerHTML =
"🛣 రహదారులు";

document.getElementById("roadsDesc").innerHTML =
"గుంతలు, దెబ్బతిన్న రహదారులు మరియు రహదారి సమస్యలు.";

document.getElementById("waterTitle").innerHTML =
"🚰 నీటి సరఫరా";

document.getElementById("waterDesc").innerHTML =
"నీటి కొరత, పైప్ లీకేజీలు మరియు సరఫరా సమస్యలు.";

document.getElementById("electricityTitle").innerHTML =
"⚡ విద్యుత్";

document.getElementById("electricityDesc").innerHTML =
"కరెంట్ అంతరాయాలు మరియు ట్రాన్స్‌ఫార్మర్ సమస్యలు.";

document.getElementById("streetTitle").innerHTML =
"💡 వీధి దీపాలు";

document.getElementById("streetDesc").innerHTML =
"పనిచేయని వీధి దీపాలు మరియు దెబ్బతిన్న స్తంభాలు.";

document.getElementById("drainageTitle").innerHTML =
"🌊 డ్రైనేజ్";

document.getElementById("drainageDesc").innerHTML =
"మూసుకుపోయిన డ్రైన్లు మరియు మురుగు సమస్యలు.";

  document.getElementById("trackingTitle").innerHTML =
"📋 ఫిర్యాదు ట్రాకింగ్";

document.getElementById("trackingDesc").innerHTML =
"ఫిర్యాదు నమోదు నుండి పరిష్కారం వరకు స్థితిని తెలుసుకోండి.";
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
