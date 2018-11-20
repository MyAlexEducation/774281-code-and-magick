var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_SHIFT_X = 10;
var SHADOW_SHIFT_Y = 10;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var MESSAGE_FONT = '16px "PT Mono"';
var MARGIN_COLUMN = 50;
var PADDING_CLOUD = MARGIN_COLUMN / 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_SHIFT_X, CLOUD_Y + SHADOW_SHIFT_Y, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.font = MESSAGE_FONT;
  ctx.strokeText();
  ctx.strokeText();
};
