/* eslint-disable */

export default () => {
  // BEGIN SELECT
$('.select').each(function() {
  var $this = $(this),
      selectOption = $this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      dur = 100;

  $this.hide();
  $this.wrap('<div class="select"></div>');
  $('<div>', {
      class: 'select__gap',
      text: 'Выберите тип системы'
  }).insertAfter($this);

  var selectGap = $this.next('.select__gap'),
      caret = selectGap.find('.caret');
  $('<ul>', {
      class: 'select__list'
  }).insertAfter(selectGap);

  var selectList = selectGap.next('.select__list');
  // Add li - option items
  for (var i = 0; i < selectOptionLength; i++) {
      $('<li>', {
              class: 'select__item',
              html: $('<span>', {
                  text: selectOption.eq(i).text()
              })
          })
          .attr('data-value', selectOption.eq(i).val())
          .appendTo(selectList);
  }
  var selectItem = selectList.find('li');

  selectList.slideUp(0);
  selectGap.on('click', function() {
      if (!$(this).hasClass('is-active')) {
          $(this).addClass('is-active');
          selectList.slideDown(dur);

          selectItem.on('click', function() {
              var chooseItem = $(this).data('value');

              $('select').val(chooseItem).attr('selected', 'selected');
              selectGap.text($(this).find('span').text());

              selectList.slideUp(dur);
              selectGap.removeClass('is-active');
          });

      } else {
          $(this).removeClass('is-active');
          selectList.slideUp(dur);
      }
  });
});

// END SELECT
}
