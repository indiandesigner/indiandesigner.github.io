var prem = false;
var call = false;
var portfolio = false;
var resume = false;
var job = false;
var design = false;
var college = false;
var items = [];
var link = "https://wa.me/917715030627?text=";
$("#overlay").fadeOut(1);


$('.service').click(function() {
    const service = this;
    if(service.dataset.selected=="0"){
        items.push(service.id);
        service.style.boxShadow = "0px 0px 0px 1px black inset";
        service.dataset.selected="1";
    }
    else if(service.dataset.selected=="1"){
        var index = items.indexOf(service.id);
        if (index > -1) { // only splice array when item is found
            items.splice(index, 1); // 2nd parameter means remove one item only
        }   
        service.style.backgroundColor = "#f5f5f5";
        service.style.boxShadow = "0px 0px 0px 0px black inset";
        service.style.borderColor = "#fff";
        service.dataset.selected="0";
    }
    
});

$('.checkout').click(function() {
    const checkout = this;
    if(items.includes("prem"))    {
        link = link.concat("%0A - ID Premium");
    }
    if(items.includes("call"))    {
        link = link.concat("%0A - 1 on 1 Call");
    }
    if(items.includes("portfolio"))    {
        link = link.concat("%0A - Upgrade Portfolio");
    }
    if(items.includes("resume"))    {
        link = link.concat("%0A - Upgrade Resume");
    }
    if(items.includes("job"))    {
        link = link.concat("%0A Job related Queries");
    }
    if(items.includes("design"))    {
        link = link.concat("%0A - Design related Queries");
    }
    if(items.includes("college"))    {
        link = link.concat("%0A - College Admission related Queries");
    }  
    
    if (link=="https://wa.me/917715030627?text="){
        $("#overlay").fadeIn("100");
    }
    else{
        $(".checkout").attr("href", link);
    }
});

$('#overlay').click(function() {
    $("#overlay").fadeOut("100");
});

