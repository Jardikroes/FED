var project = document.querySelector('input[value=project]');
var stage = document.querySelector('input[value=stage]');


project.addEventListener('click', function() {
    document.getElementById('project').classList.add('latenzien');
    document.getElementById('stage').classList.remove('latenzien');
});

stage.addEventListener('click', function() {
    document.getElementById('project').classList.remove('latenzien');
    document.getElementById('stage').classList.add('latenzien');
});
