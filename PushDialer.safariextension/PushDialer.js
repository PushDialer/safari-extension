
document.addEventListener("contextmenu", handleMessage, false);

function handleMessage(msgEvent)
{
	var sel = '';
	sel = window.parent.getSelection() + '';
	sel = sel.replace(/^\s+|\s+$/g, "");
	safari.self.tab.setContextMenuEventUserInfo(msgEvent, sel);
}
