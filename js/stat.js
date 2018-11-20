var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_SHIFT_X = 10;
var SHADOW_SHIFT_Y = 10;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 50, '#fff');
};
