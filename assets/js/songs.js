const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>Realistic</p> <br> <p>I think your photo is so cute</p> <br>',

                    '<p>League</p> <br> <p>League is very communicative on the server, I like it ;) </p> <br>',

                    '<p>Baskerville Bateman</p> <br> <p>Surely he must be cold and calculating xd</p> <br>',

                    '<p>UNKNOWN</p> <br> <p>I was in doubt if it was a cat or something else, but ok kkkk xd</p> <br>',

                    '<p>Hypnotic_Eden</p> <br> <p>I really liked your photo too ;)</p> <br>',

                    '<p>Harvey</p> <br> <p>She must watch some mexican telenovelas xd</p> <br>',

                    '<p>IAmVolvic</p> <br> <p>Very good photo, would use background</p> <br>',

                    '<p>deepforce123</p> <br> <p>She is very good people, she already answered my doubts when I started here on the server =D</p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = 'Swipe and see some comments I left xd. Next time I try to put all the moderators!!';
    } )
} );



