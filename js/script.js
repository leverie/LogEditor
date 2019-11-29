$(document).ready(() => {
	$(document).bind("paste", e => {
		// var pastedData = e.originalEvent.clipboardData.getData('text');
		// alert(pastedData);

		if (e.originalEvent.clipboardData != 0) {
			const _clipboardData = e.originalEvent.clipboardData
			const _types = _clipboardData.types
			const _targetType = 'text/html'
			const _hasHTML = _types.some((el, idx, arr) => {
				return el == _targetType
			})
			if (_hasHTML) {
				// var _frag = document.createDocumentFragment()
				// var _targetDiv = document.createElement('div')
				// _targetDiv.innerHTML = _clipboardData.getData(_targetType)
				// _frag.appendChild(_targetDiv)

				const _frag = document.createRange().createContextualFragment(_clipboardData.getData(_targetType));

				document.querySelectorAll('#editarea')[0].appendChild(_frag)

				// document.querySelectorAll('#editarea')[0].innerHTML = _clipboardData.getData(_targetType)
				// document.querySelectorAll('.Apple-interchange-newline').forEach(e => {
				// 	e.parentNode.removeChild(e)
				// })
			}
		}
	})

	// var fileInput = document.getElementById('input-file');
	// var fileDisplayArea = document.getElementById('editarea');

	// fileInput.addEventListener('change', function(e) {
	// 	var file = fileInput.files[0];
	// 	var textType = /text.*/;

	// 	if (file.type.match(textType)) {
	// var reader = new FileReader();

	// reader.onload = function(e) {
	// 	var content = reader.result;

	// 	// var el = document.createElement('div');
	// 	// el.innerHTML = content;
	// 	// console.log(el)

	// 	document.getElementById('editarea').innerHTML = content;

	// 	ConvertDiceRoll();


	// 	// // var textNode = document.createTextNode(content);
	// 	// // el.appendChild(textNode)
	// 	// // console.log(el)
	// 	// el.innerHTML = content;
	// 	// // console.log(el)
	// 	// console.log($(el).find('#textchat')[0])
	// 	// console.log($(el).find('.message'));
	// 	// // var style = window.getComputedStyle($(el).find('.message')[0])
	// 	// var style = $(el).find('.message')[0].style;
	// 	// console.log($(el).find('.message')[0])
	// 	// $(el).find('#textchat').detach().appendTo($('#editarea'))


	// 	// // var frag = document.createDocumentFragment();
	// 	// // console.log(frag)
	// 	// // frag.appendChild(content);
	// 	// // console.log(frag)

	// 	// // console.log(content)
	// 	// // alert(content);
	// }

	// reader.readAsText(file);
	// 	} else {
	// fileDisplayArea.innerText = "File not supported!"
	// 	}
	// });
});