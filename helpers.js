
mosyag_url='http://sf-pyw.mosyag.in/m04/api/forecasts'

/*$ ('#main_header').click(function(){

	$.getJSON(mosyag_url, function(data){
		advice=data["prophecies"]
		set_secret_message(advice);
	});
	
});

function set_secret_message(msg){
	p=$('#second-paragraph');

	p.html(msg)
	p.css('color', 'red')
}*/



$ ('#main_header').click(function(){

	$.getJSON(mosyag_url, function(data){
		advice=data["prophecies"]
		set_content_in_divs(advice);
	});
	
});

function set_content_in_divs(paragraphs) {
  $.each(paragraphs, function(i, d) {
    p = $("#p-" + i)
    p.html("<p>" + d + "</p>")
    p.css('color', 'orange')
})
}