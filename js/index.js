window.onload = function(){
    let _mode = document.getElementById('mode');
    _mode.addEventListener('click',function(){
        let _header = document.getElementById('header');
        let _section = document.getElementById('section');
        let _footer = document.getElementById('footer');
        _header.classList.toggle('dark-header');
        _section.classList.toggle('dark-section');
        _footer.classList.toggle('dark-footer');
    })
}