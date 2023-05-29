//your JS code here. If required.
function deleteElement(){
	let select = document.getElementsByTagName("select")[0];
	let value = select.value;
	let child = select.children;
	for(let i=0;i<select.length;i++)
		{
			if(value === child[i].value)
			{
				child[i].remove();
			}
		}
}