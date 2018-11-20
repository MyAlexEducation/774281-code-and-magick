var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_SHIFT_X = 10;
var SHADOW_SHIFT_Y = 10;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var MESSAGE_FONT_SIZE = 16;
var MESSAGE_FONT = '16px "PT Mono"';
var MESSAGE_LINE_HEIGHT = MESSAGE_FONT_SIZE + MESSAGE_FONT_SIZE / 4; // размер шрифта + 1/4 от его размера
var MARGIN_COLUMN = 50;
var PADDING_CLOUD = MARGIN_COLUMN / 2;
var HISTOGRAM_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_HEIGHT = HISTOGRAM_HEIGHT - MESSAGE_LINE_HEIGHT * 2;
var NAME_Y = CLOUD_Y + PADDING_CLOUD + MESSAGE_LINE_HEIGHT * 2 + HISTOGRAM_HEIGHT - MESSAGE_LINE_HEIGHT;
var MAX_BAR_HEIGHT = HISTOGRAM_HEIGHT - MESSAGE_LINE_HEIGHT * 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_SHIFT_X, CLOUD_Y + SHADOW_SHIFT_Y, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.font = MESSAGE_FONT;
  ctx.strokeText('Ура вы победили!', CLOUD_X + PADDING_CLOUD, CLOUD_Y + PADDING_CLOUD);
  ctx.strokeText('Список результатов:', CLOUD_X + PADDING_CLOUD, CLOUD_Y + PADDING_CLOUD + MESSAGE_LINE_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.strokeText(players[i], CLOUD_X + PADDING_CLOUD + (BAR_WIDTH + MARGIN_COLUMN) * i, NAME_Y);
    
  }
};
