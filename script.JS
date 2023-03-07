$(document).ready(function () {
  $('#adicionar-tarefa').click(function (e) {
    var tarefa = $('#nova-tarefa').val()
    if (tarefa !== '') {
      $('#tarefas').append(tarefa)
      $('#nova-tarefa').val('')
    }
  })
})
