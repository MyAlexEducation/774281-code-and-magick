'use strict';

// module2-task1

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
var NAME_Y = CLOUD_Y + PADDING_CLOUD + MESSAGE_LINE_HEIGHT * 3 + HISTOGRAM_HEIGHT;
var MAX_BAR_HEIGHT = HISTOGRAM_HEIGHT - MESSAGE_LINE_HEIGHT * 2;
var THIS_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
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
    if (players[i] === 'Вы') {
      ctx.fillStyle = THIS_PLAYER_COLOR;
    } else {
      ctx.fillStyle = 'hsl(240,' + Math.random() * 100 + '%, 50%)';
    }
    ctx.strokeText(players[i], CLOUD_X + PADDING_CLOUD + (BAR_WIDTH + MARGIN_COLUMN) * i, NAME_Y);
    var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillRect(CLOUD_X + PADDING_CLOUD + (BAR_WIDTH + MARGIN_COLUMN) * i, NAME_Y - barHeight - MESSAGE_LINE_HEIGHT, BAR_WIDTH, barHeight);
    ctx.strokeText(String(Math.round(times[i])), CLOUD_X + PADDING_CLOUD + (BAR_WIDTH + MARGIN_COLUMN) * i, NAME_Y - barHeight - MESSAGE_LINE_HEIGHT * 2);
  }
};

// module3-task1

var NUMBER_WIZARDS = 4;

var userDialog = document.querySelector('.setup');

var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var randomData = function (arrayData) {
  return arrayData[getRandomInt(0, arrayData.length)];
};

var Wizard = function () {
  this.name = randomData(names) + ' ' + randomData(surname);
  this.coatColor = randomData(coatColor);
  this.eyesColor = randomData(eyesColor);
};

for (var i = 0; i < NUMBER_WIZARDS; i++) {
  wizards[i] = new Wizard();
}

userDialog.classList.remove('hidden');
