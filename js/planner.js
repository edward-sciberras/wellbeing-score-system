function addItem() {
	let item = document.getElementById('task').value;
	let day = document.getElementById('days').value;
    let duration = document.getElementById('duration').value;

    if(item == "" || duration == ""){
        alert("Please select an activity and duration.")
        return
    }

	let newItem = document.createElement('li');
	let checkbox = document.createElement('input');
	let newLine = document.createElement('br');

	newItem.setAttribute('class', 'list-item')
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'check-box');

	newItem.textContent = item + "\t(" + duration + ")";

    document.getElementById(day).append(newItem, checkbox, newLine);
}

function removeItem() {
	let checked_list = document.querySelectorAll('#check-box');
	let checked_list_item = document.querySelectorAll('.list-item');
	let lineBreaks = document.querySelectorAll('br');
	for (i = 0; i < checked_list.length; i++) {
		if (checked_list[i].checked) {	  
			let checkbox_elemt = checked_list[i];
			let item = checked_list_item[i];
			let removeBreakLine = lineBreaks[i];

			let parent1 = checkbox_elemt.parentNode;
			let parent2 = item.parentNode;
			let parent3 = removeBreakLine.parentNode;

			parent1.removeChild(checkbox_elemt);
			parent2.removeChild(item);
			parent3.removeChild(removeBreakLine);
		}
	}
}

function showValue(sliderId, value) {
    document.getElementById(sliderId + 'Value').innerHTML = value;
}