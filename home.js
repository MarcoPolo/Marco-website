startBind();

function startBind(){
    $(".item").click(linkCase);
}

function linkCase(){
    var link = $(this).children().text();
    
    switch(link) {
        case 'Projects':
            selectorBoxProjects();
            goToProjects();
            break;
        
        case 'Links':
            selectorBoxLinks();
            goToLinks();
            break;
        
        case 'About Me':
            selectorBoxAbout();
            goToAbout();
            break;
        
        default:
            break;
    }
    //console.log('the link is',link);

}

function goToProjects(){
    currentLink=$('#projects');
    document.getElementById('largeContentBox').className='first';
}

function goToLinks(){
    currentLink=$('#links');
    document.getElementById('largeContentBox').className='second';
}

function goToAbout(){
    currentLink=$('#about');
    document.getElementById('largeContentBox').className='third';
}

function selectorBoxProjects(){
    $('#selectorBox').css('left','20%');
    $('#selectorBox').animate(
        {width: '155'}
    );
}

function selectorBoxLinks(){
    $('#selectorBox').css('left','50%')
    $('#selectorBox').animate(
        {width: '100px'}
    );
}

function selectorBoxAbout(){
    $('#selectorBox').css('left','80%')
    $('#selectorBox').animate(
        {width: '185px'}
    );
}
