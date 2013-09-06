function init(){
	var bookmarklet = document.getElementById('bookmarklet');

	bookmarklet.onmouseover = function(){
		var elem = document.getElementById('drag_to_bookmarkbar');
		elem.style.display = 'block';
	};
	bookmarklet.onmouseout  = function(){
		var elem = document.getElementById('drag_to_bookmarkbar');
		elem.style.display = 'none';
	}
}
