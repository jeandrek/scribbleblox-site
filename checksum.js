
/* Used to automagically copy the MD5 or SHA1 checksums of ScribbleBlox downloads into the
   users clipboard so they can easily check integrity of downloads, and ensure that it is
   not corrupted or modified in any way. */

function copyChecksum(digest, type) {
	if(window.clipboardData) { // Internet Explorer
		var ie = window.clipboardData.setData('Text', digest);
		if(ie) {
			alert('The ' + type + ' checksum has been copied to your clipboard.');
			return ie;
		}
	}
	if(document.queryCommandSupported('copy')) {
		textArea = document.createElement('textarea');
		textArea.value = digest;
		document.body.appendChild(textArea);
		textArea.select();
		try {
			var cmd = document.execCommand('copy');
			if(cmd) {
				document.body.removeChild(textArea);
				alert('The ' + type + ' checksum has been copied to your clipboard.');
				return cmd;
			} else {
				document.body.removeChild(textArea);
			}
		} catch(e) {
			document.body.removeChild(textArea);
		}
	}
	var copy = '';
	if (navigator.userAgent.indexOf('like Mac OS X') != -1) {
		copy = prompt('Tap and hold on the text and press Copy and then tap OK to copy the checksum', digest);
	} else if(navigator.userAgent.indexOf('Mac') != -1) {
		copy = prompt('Press Cmd+C and then ENTER or RETURN to copy the checksum', digest);
	} else {
		copy = prompt('Press CTRL+C and then ENTER or RETURN to copy the checksum', digest);
	}
	if(copy == digest) {
		return true;
	} else {
		return false;
	}
}