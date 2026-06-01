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
heroText: "Register, Track and Monitor Your Complaints Easily",

roadsTitle: "🛣 Roads",
roadsDesc: "Potholes, damaged roads, road blockages and unsafe roads.",

waterTitle: "🚰 Water Supply",
waterDesc: "Water shortages, leakage issues and supply interruptions.",

electricityTitle: "⚡ Electricity",
electricityDesc: "Power failures, transformer issues and electrical hazards.",

streetTitle: "💡 Street Lights",
streetDesc: "Non-working street lights and damaged poles.",

drainageTitle: "🌊 Drainage",
drainageDesc: "Blocked drains and overflowing drainage systems.",

trackingTitle: "📋 Complaint Tracking",
trackingDesc: "Track complaint progress from submission to resolution."
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
heroText: "మీ ఫిర్యాదులను నమోదు చేసి ట్రాక్ చేయండి",

roadsTitle: "🛣 రహదారులు",
roadsDesc: "గుంతలు, దెబ్బతిన్న రహదారులు మరియు రహదారి సమస్యలు.",

waterTitle: "🚰 నీటి సరఫరా",
waterDesc: "నీటి కొరత, పైప్ లీకేజీలు మరియు సరఫరా సమస్యలు.",

electricityTitle: "⚡ విద్యుత్",
electricityDesc: "కరెంట్ అంతరాయాలు మరియు ట్రాన్స్‌ఫార్మర్ సమస్యలు.",

streetTitle: "💡 వీధి దీపాలు",
streetDesc: "పనిచేయని వీధి దీపాలు మరియు దెబ్బతిన్న స్తంభాలు.",

drainageTitle: "🌊 డ్రైనేజ్",
drainageDesc: "మూసుకుపోయిన డ్రైన్లు మరియు మురుగు సమస్యలు.",

trackingTitle: "📋 ఫిర్యాదు ట్రాకింగ్",
trackingDesc: "ఫిర్యాదు నమోదు నుండి పరిష్కారం వరకు స్థితిని తెలుసుకోండి."
}

};

function changeLanguage(lang){

localStorage.setItem("language", lang);

applyLanguage();

}

function applyLanguage(){

let lang =
localStorage.getItem("language") || "en";

let text = translations[lang];

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

if(document.getElementById("roadsTitle"))
document.getElementById("roadsTitle").innerHTML =
text.roadsTitle;

if(document.getElementById("roadsDesc"))
document.getElementById("roadsDesc").innerHTML =
text.roadsDesc;

if(document.getElementById("waterTitle"))
document.getElementById("waterTitle").innerHTML =
text.waterTitle;

if(document.getElementById("waterDesc"))
document.getElementById("waterDesc").innerHTML =
text.waterDesc;

if(document.getElementById("electricityTitle"))
document.getElementById("electricityTitle").innerHTML =
text.electricityTitle;

if(document.getElementById("electricityDesc"))
document.getElementById("electricityDesc").innerHTML =
text.electricityDesc;

if(document.getElementById("streetTitle"))
document.getElementById("streetTitle").innerHTML =
text.streetTitle;

if(document.getElementById("streetDesc"))
document.getElementById("streetDesc").innerHTML =
text.streetDesc;

if(document.getElementById("drainageTitle"))
document.getElementById("drainageTitle").innerHTML =
text.drainageTitle;

if(document.getElementById("drainageDesc"))
document.getElementById("drainageDesc").innerHTML =
text.drainageDesc;

if(document.getElementById("trackingTitle"))
document.getElementById("trackingTitle").innerHTML =
text.trackingTitle;

if(document.getElementById("trackingDesc"))
document.getElementById("trackingDesc").innerHTML =
text.trackingDesc;

}

window.onload = function(){

applyLanguage();

};
