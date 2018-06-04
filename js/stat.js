'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_SIZE = 16;
var LINE_HEIGHT = 21;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y, x + 50, CLOUD_HEIGHT / 2 + y, x, y + CLOUD_HEIGHT);
  ctx.bezierCurveTo(x, y + CLOUD_HEIGHT, CLOUD_WIDTH / 2 + x, y + CLOUD_HEIGHT - 50, x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.bezierCurveTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT, x + CLOUD_WIDTH - 50, CLOUD_HEIGHT / 2 + y, x + CLOUD_WIDTH, y);
  ctx.bezierCurveTo(x + CLOUD_WIDTH, y, CLOUD_WIDTH / 2 + x, y + 50, x , y);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

var renderMainText = function (ctx, x, y, color, text) {
  ctx.fillStyle = color;
  var textWidth = ctx.measureText(text).width;
  textWidth = Math.round(textWidth);
  ctx.fillText(text, x - textWidth / 2, y);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = FONT_SIZE+'px PT Mono';
  renderMainText(ctx, CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + 40, 'black', 'Ура вы победили!' );
  renderMainText(ctx, CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + 40 + LINE_HEIGHT, 'black', 'Список результатов:');
};
