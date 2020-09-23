$(window).on('load',function(){
    const params = new URLSearchParams(window.location.search)
    if (params.get("showModal")!=="false") {
        $('#myModal').modal('show');
    }
});

