function banner_dismiss(e) {
    document.cookie = 'banner-dismiss=true; max-age=' + e + '; SameSite=Strict';
	document.querySelector('#custom-banner').classList.add('hide');
}

const hidden = document.cookie
	.split('; ')
	.find(row => row.startsWith('banner-dismiss='));

document.addEventListener('DOMContentLoaded', () => {
	if (hidden) {
		document.querySelector('#custom-banner').style.display = 'none';
	}
});