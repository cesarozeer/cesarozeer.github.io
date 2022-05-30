window.onload = function onLoad() {
  var progressBar1 = new ProgressBar.Circle('#progress1', {
      color: '#fff',
      strokeWidth: 10,
      duration: 2000, // milliseconds
      easing: 'easeInOut'
    });

   	var progressBar2 = new ProgressBar.Circle('#progress2', {
      color: '#fff',
      strokeWidth: 10,
      duration: 2000, // milliseconds
      easing: 'easeInOut'
    });

   var progressBar3 = new ProgressBar.Circle('#progress3', {
      color: '#fff',
      strokeWidth: 10,
      duration: 2000, // milliseconds
      easing: 'easeInOut'
    });

  	progressBar1.animate(0.25); // percent
  	progressBar2.animate(0.50); // percent
  	progressBar3.animate(0.75); // percent
};