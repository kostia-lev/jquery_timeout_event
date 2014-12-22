$.fn.addChangeEvent = function(performLogic, timeout, eventType){
	this.one(eventType, function(){
			var that = this;
			setTimeout(function(){$(that).addChangeEvent(performLogic, timeout, eventType);}, timeout);
			performLogic(that);
		}
	)
	return this;
}