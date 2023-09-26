$(document).ready(function() {
  
$('#btn-reset').click(function(){
  $('form').slideUp();
})

$('header button').click(function(){
  $('form').slideDown();
})  

$('form').on('submit', function(e) {
  
  e.preventDefault();
  const adressNewImg = $('#adress-new-img').val();
  const newItem = $('<li style="display: none;"></li>');
  $(`<img src="${adressNewImg}"/>`).appendTo(newItem);
  $(`
  <div class="overlay-img-link"/>
    <a href="${adressNewImg}" target="_blank" title="Ver imagem em tamanho real">
      Ver imagem em tamanho real
    </a>
  </div>
  `).appendTo(newItem);
  $(newItem).appendTo('ul');
  $(newItem).fadeIn(1000);
  $(adressNewImg).val(' ');
})
})

