$.fn.addChangeEvent: function(that, performLogic, timeout, eventType){
	this.one(eventType, function(){
			var that = this;
			setTimeout(function(){Dashboard.addChangeEvent(that, performLogic, timeout, eventType);}, timeout);
			performLogic(that);
		}
	)
}