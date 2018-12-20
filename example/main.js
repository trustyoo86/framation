$(function () {
  var testDiv = $('.test');
  var ani = new Framation();

  ani
    .set(testDiv[0], {time: 1500, left: '100px'})
    .set(testDiv[0], {time: 1500, left: '50px'})
    .set(testDiv[0], {time: 1500, left: '150px'});
});