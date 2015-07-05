//http://jsfiddle.net/handtrix/yvq5y/
/**
 * convertImgToBase64
 * @param  {String}   url
 * @param  {Function} callback
 * @param  {String}   [outputFormat='image/png']
 * @author HaNdTriX
 * @example
	convertImgToBase64('http://goo.gl/AOxHAL', function(base64Img){
		console.log('IMAGE:',base64Img);
	})
 */
function convertImgToBase64(url, callback, outputFormat){
	var img = new Image();
	img.crossOrigin = 'http://profile.ak.fbcdn.net/crossdomain.xml';
	img.onload = function(){
	    var canvas = document.createElement('CANVAS');
	    var ctx = canvas.getContext('2d');
		canvas.height = this.height;
		canvas.width = this.width;
	  	ctx.drawImage(this,0,0);
	  	var dataURL = canvas.toDataURL(outputFormat || 'image/png');
	  	callback(dataURL);
	  	canvas = null;
	};
	img.src = url;
}




