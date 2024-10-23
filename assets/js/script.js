const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    let diaDaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaDaSemanaTexto = "Domingo";
            return diaDaSemanaTexto;
        case 1:
            diaDaSemanaTexto = "Segunda-Feira";
            return diaDaSemanaTexto;
        case 2:
            diaDaSemanaTexto = "Terça-Feira";
            return diaDaSemanaTexto;
        case 3:
            diaDaSemanaTexto = "Quarta-Feira";
            return diaDaSemanaTexto;
        case 4:
            diaDaSemanaTexto = "Quinta-Feira";
            return diaDaSemanaTexto;
        case 5:
            diaDaSemanaTexto = "Sexta-Feira";
            return diaDaSemanaTexto;
        case 6:
            diaDaSemanaTexto = "Sábado";
            return diaDaSemanaTexto;
        default:
            diaDaSemanaTexto = ' ';
            return diaDaSemanaTexto;
    }

}

function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = "Janeiro";
            return nomeMes;
        case 1:
            nomeMes = "Fevereiro";
            return nomeMes;
        case 2:
            nomeMes = "Março";
            return nomeMes;
        case 3:
            nomeMes = "Abril";
            return nomeMes;
        case 4:
            nomeMes = "Maio";
            return nomeMes;
        case 5:
            nomeMes = "Junho";
            return nomeMes;
        case 6:
            nomeMes = "julho";
            return nomeMes;
        case 7:
            nomeMes = "Agosto";
            return nomeMes;
        case 8:
            nomeMes = "Setembro";
            return nomeMes;
        case 9:
            nomeMes = "Outubro";
            return nomeMes;
        case 10:
            nomeMes = "Novembro";
            return nomeMes;
        case 11:
            nomeMes = "Dezembro";
            return nomeMes;
        default:
            nomeMes = ' ';
            return diaDaSemanaTexto;

    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} 
    ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
}

h1.innerHTML = criaData(data);

