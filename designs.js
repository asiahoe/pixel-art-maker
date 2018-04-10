// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let color = $('#colorPicker').val();
let startRow = "<tr>";
let endRow = "</tr>";
let cell = "<td>&nbsp;</td>";

$('#sizePicker').submit(function makeGrid () {
  let height = $('#inputHeight').val();
  let width = $('#inputWidth').val();
  for (let m = 1; m <= height; m++) {
    $('#pixelCanvas').append('<h3>Heading</h3>');
    for (let n = 1; n <= width; n++) {
      $('#pixelCanvas').append('<p>Paragraph</p>');
    }
  }
})

// $('#colorPicker').change(function () {
//   $('td').css('background-color', color);
// })
