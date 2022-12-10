const cursorListenerComponent = {
  init: function () {
    var el = this.el;
    el.addEventListener('click', function () {
      el.parentNode.removeChild(el);
      console.log('Click!');
    });
  }
}
AFRAME.registerComponent('cursor-listener', cursorListenerComponent);