
function dismissCookieConsent() {
	document.cookie = "cookieconsent=hide; max-age=31557600; path=/";
	hideCookieConsent();
}

function hideCookieConsent() {
	if (document.cookie.includes("cookieconsent=hide"))
		document.getElementById("cookie-consent").style.display = 'none';
}