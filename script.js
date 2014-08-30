// Нажатие клавиши Enter
function kp(e) {
	if (e) keyCode = e.which
	else if (event) keyCode=event.keyCode
	else return
	if (keyCode == 13 ) document.getElementById("btnsubmit").click()
}
document.onkeypress=kp;

// Добавление новой записи
function add(){
	var message = document.getElementById('message').value,
		messageWrapper = document.getElementById('messageWrapper'),
		butClose = "<span class='but-del glyphicon glyphicon-remove-sign' onclick='iClose()'></span>",
		butCheck = "<span class='but-check glyphicon glyphicon-ok' onclick='iCheck()'></span>"
		ticket = {
			mes: message,
		};
	if (message === ""){
		alert ('Введите название продукта');
	}
	else if(message === "водка"){
		alert ('Не надо(( Опять нажрешься, как в тот раз(')
	}
	else{
	messageWrapper.innerHTML += "<div id='mess' class='mess'>" + butCheck + ticket.mes + butClose + "</div>";
	};

	document.getElementById('message').value = '';
};

// Удаление записи
function iClose(){
	event.target.parentNode.remove();
};

// Выбор записи (галка)
function iCheck(){
	var ticket = event.target.parentNode;

	if (ticket.style.opacity === "0.2" ) {
		ticket.style.opacity =  1;
	}
	else {
		ticket.style.opacity =0.2;
	};
};