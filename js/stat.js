'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;

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

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3');
  renderCloud(ctx, 100, 50, '#fff');
};
