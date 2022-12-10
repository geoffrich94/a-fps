var GameManagerUtils = {
  generateRandomNumber: function (min, max) {
    return Math.floor(Math.random() * max + min);
  },
  chooseRandomPosition: function () {
    var xPos = GameManagerUtils.generateRandomNumber(-10, 10);
    console.log(xPos);
    var yPos = 0.5;
    console.log(yPos);
    var zPos = GameManagerUtils.generateRandomNumber(-15, 30);
    console.log(zPos);
    return {
      'x': xPos,
      'y': yPos,
      'z': zPos
    };
  },
  // Create a new entity/enemy
  createEnemy: function () {
    console.log('Create Enemy!');
    var newEnemy = document.createElement('a-entity');
    newEnemy.setAttribute('gltf-model', '#ghost');
    newEnemy.setAttribute('cursor-listener', '');
    var position = GameManagerUtils.chooseRandomPosition();
    var positionStr = position.x.toString() + ' ' + position.y.toString() + ' ' + position.z.toString();
    newEnemy.setAttribute('position', positionStr);
    newEnemy.setAttribute('scale', '0.0125 0.0125 0.0125');
    var destinationStr = '0 ' + position.y.toString() + ' 0';
    newEnemy.setAttribute('animation', {
      'property': 'position',
      'to': destinationStr,
      'autoplay': true,
      dur: 10000
    });
    return newEnemy;
  }
}

AFRAME.registerComponent('game-manager', {
  schema: {
    numberOfEnemies: {
      type: 'number'
    }
  },
  init: function () {
    var data = this.data;
    var sceneEl = document.querySelector('a-scene');
    var numEnemies = data.numberOfEnemies;
    var newEnemies = [];
    for (i = 0; i < numEnemies; i++) {
      newEnemies.push(GameManagerUtils.createEnemy());
      console.log(newEnemies);
    };
    sceneEl.addEventListener('loaded', function () {
      newEnemies.forEach(function (enemy) {
        sceneEl.appendChild(enemy);
      });
    });
  }
});