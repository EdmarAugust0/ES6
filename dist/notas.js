"use strict";

var alunos = [{
  nome: 'Ana',
  nota: 7
}, {
  nome: 'Beatriz',
  nota: 5
}, {
  nome: 'Edmar',
  nota: 8
}, {
  nome: 'Augusto',
  nota: 4
}, {
  nome: 'Dara',
  nota: 6
}];
function alunosAprovados(arrAlunos) {
  return arrAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var arrAlunosAprovados = alunosAprovados(alunos);
console.log(arrAlunosAprovados);