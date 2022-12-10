const raycasterAutorefreshComponent = {
  init: function () {
    console.log('Raycaster Component Loaded!')
    var el = this.el;
    this.el.addEventListener('model-loaded', function () {
      var cursorEl = el.querySelector('[raycaster]');
      cursorEl.components.raycaster.refreshObjects();
    });
  }
}
AFRAME.registerComponent('raycaster-autorefresh', raycasterAutorefreshComponent);