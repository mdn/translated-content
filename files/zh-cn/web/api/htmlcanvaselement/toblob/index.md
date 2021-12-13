---
title: HTMLCanvasElement.toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
translation_of: Web/API/HTMLCanvasElement/toBlob
---
<div>
<div>
<div>{{APIRef("Canvas API")}}</div>
</div>
</div>

<p><strong><code>HTMLCanvasElement.toBlob()</code></strong> 方法创造{{domxref("Blob")}}对象，用以展示canvas上的图片；这个图片文件可以被缓存或保存到本地，由用户代理端自行决定。如不特别指明，图片的类型默认为 image/png，分辨率为96dpi。</p>

<p>第三个参数用于针对image/jpeg格式的图片进行输出图片的质量设置。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><var><em>canvas</em>.toBlob(<em>callback</em>, <em>type</em>, <em>encoderOptions</em>);</var>
</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>回调函数，可获得一个单独的{{domxref("Blob")}}对象参数。</dd>
 <dt><code>type</code> {{optional_inline}}</dt>
 <dd>{{domxref("DOMString")}}类型，指定图片格式，默认格式为<code>image/png</code>。</dd>
 <dt><code>encoderOptions</code> {{optional_inline}}</dt>
 <dd>{{jsxref("Number")}}类型，值在0与1之间，当请求图片格式为<code>image/jpeg</code>或者<code>image/webp</code>时用来指定图片展示质量。如果这个参数的值不在指定类型与范围之内，则使用默认值，其余参数将被忽略。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>无。</p>

<h3 id="异常">异常</h3>

<dl>
 <dt><code>SecurityError</code></dt>
 <dd>canvas“<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image">被污染</a>”的情况下不能使用此方法</dd>
</dl>

<h2 id="示例">示例</h2>

<h3 id="将canvas图像转换为文件">将canvas图像转换为文件</h3>

<p>当一个内容画到canvas上时，我们可以将它生成任何一个格式支持的图片文件。比如，下面的代码段获得了id为“canvas”的{{HTMLElement("canvas")}}元素中的图像，复制成一个PNG图，在文档中加入一个新的{{HTMLElement("img")}}元素，这个{{HTMLElement("img")}}元素的源图就是使用canvas创建的那个图像。 </p>

<pre class="brush: js">var canvas = document.getElementById("canvas");

canvas.toBlob(function(blob) {
  var newImg = document.createElement("img"),
      url = URL.createObjectURL(blob);

  newImg.onload = function() {
    // no longer need to read the blob so it's revoked
    URL.revokeObjectURL(url);
  };

  newImg.src = url;
  document.body.appendChild(newImg);
});
</pre>

<p>注意，我们这里创建的是PNG图片；如果在<code>toBlob()传入第二个参数，就可以指定图片格式。例如，生成JPEG格式的图片：</code></p>

<pre class="brush: js"> canvas.toBlob(function(blob){...}, "image/jpeg", 0.95); // JPEG at 95% quality</pre>

<div>
<h3 id="将canvas转换为ico（仅限Mozilla）">将canvas转换为ico（仅限Mozilla）</h3>

<p>使用<code>-moz-parse来将canvas转换为ico。</code>Windows XP不支持将PNG转为ico，因此转为bmp作为代替。设置下载属性，生成下载链接。下载属性的值将被用来作为文件名。</p>

<pre class="brush: js">var canvas = document.getElementById("canvas");
var d = canvas.width;
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

function blobCallback(iconName) {
  return function(b) {
    var a = document.createElement("a");
    a.textContent = "Download";
    document.body.appendChild(a);
    a.style.display = "block";
    a.download = iconName + ".ico";
    a.href = window.URL.createObjectURL(b);
  }
}
canvas.toBlob(blobCallback('passThisString'), 'image/vnd.microsoft.icon',
              '-moz-parse-options:format=bmp;bpp=32');</pre>
</div>

<h3 id="Save_toBlob_to_disk_with_OS.File_(chromeadd-on_context_only)">Save toBlob to disk with OS.File (chrome/add-on context only)</h3>

<div class="note">
<p>This technique saves it to the desktop and is only useful in Firefox chrome context or add-on code as OS APIs are not present on web sites.</p>
</div>

<pre class="brush: js">var canvas = document.getElementById("canvas");
var d = canvas.width;
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

function blobCallback(iconName) {
  return function(b) {
    var r = new FileReader();
    r.onloadend = function () {
    // r.result contains the ArrayBuffer.
    Cu.import('resource://gre/modules/osfile.jsm');
    var writePath = OS.Path.join(OS.Constants.Path.desktopDir,
                                 iconName + '.ico');
    var promise = OS.File.writeAtomic(writePath, new Uint8Array(r.result),
                                      {tmpPath:writePath + '.tmp'});
    promise.then(
      function() {
        console.log('successfully wrote file');
      },
      function() {
        console.log('failure writing file')
      }
    );
  };
  r.readAsArrayBuffer(b);
  }
}

canvas.toBlob(blobCallback('passThisString'), 'image/vnd.microsoft.icon',
              '-moz-parse-options:format=bmp;bpp=32');</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>A low performance polyfill based on toDataURL.</p>

<pre class="brush: js">if (!HTMLCanvasElement.prototype.toBlob) {
 Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
  value: function (callback, type, quality) {

    var binStr = atob( this.toDataURL(type, quality).split(',')[1] ),
        len = binStr.length,
        arr = new Uint8Array(len);

    for (var i=0; i&lt;len; i++ ) {
     arr[i] = binStr.charCodeAt(i);
    }

    callback( new Blob( [arr], {type: type || 'image/png'} ) );
  }
 });
}
</pre>

<h2 id="文档">文档</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-canvas-toblob", "HTMLCanvasElement.toBlob")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>No change since the latest snapshot, {{SpecName('HTML5 W3C')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "scripting-1.html#dom-canvas-toblob", "HTMLCanvasElement.toBlob")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>No change</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "scripting-1.html#dom-canvas-toblob", "HTMLCanvasElement.toBlob")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Snapshot of the {{SpecName('HTML WHATWG')}} containing the initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容">浏览器兼容</h2>

<p>{{Compat("api.HTMLCanvasElement.toBlob")}}</p>

<h2 id="扩展阅读">扩展阅读</h2>

<ul>
 <li>The interface defining it, {{domxref("HTMLCanvasElement")}}.</li>
 <li>{{domxref("Blob")}}</li>
</ul>
