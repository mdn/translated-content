---
title: HTMLCanvasElement.toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
tags:
  - API
  - Canvas
  - HTMLCanvasElement
  - Method
  - Reference
translation_of: Web/API/HTMLCanvasElement/toBlob
---
<div>
<div>
<div>{{APIRef("Canvas API")}}</div>
</div>
</div>

<p><strong><code>HTMLCanvasElement.toBlob()</code></strong> メソッドは、 キャンバスに含まれる画像を表す {{domxref("Blob")}} オブジェクトを生成します；このファイルは、ユーザーエージェントの裁量によって、ディスクにキャッシュされるか、メモリに保存されます。<code>type</code> が指定されてない場合、画像の type は、 <code>image/png</code> です。生成された画像の解像度は、96dpi です。<br>
 <code>image/jpeg</code> 画像と一緒に使用される 3 つ目の引数は、出力の品質を指定します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox"><var>void <em>canvas</em>.toBlob(<em>callback</em>, <em>mimeType</em>, <em>qualityArgument</em>);</var>
</pre>

<h3 id="パラメーター">パラメーター</h3>

<dl>
 <dt>callback</dt>
 <dd>引数として {{domxref("Blob")}} オブジェクトを受け取るコールバック関数。</dd>
 <dt><code>mimeType</code> {{optional_inline}}</dt>
 <dd>画像フォーマットを示す {{domxref("DOMString")}}。既定の型は <code>image/png</code>。</dd>
 <dt><code>qualityArgument</code> {{optional_inline}}</dt>
 <dd>要求した type が <code>image/jpeg </code> か <code>image/webp</code> だった場合、画像の品質を示す <code>0</code> から <code>1</code> の {{jsxref("Number")}}。type 引数がそのほかの値だった場合、既定の値が画質に使用される。ほかの引数は無視される。</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>なし。</p>

<h2 id="例">例</h2>

<h3 id="キャンバスに表示されている画像を取得する">キャンバスに表示されている画像を取得する</h3>

<p>一度キャンバスにコンテンツを描画したら、これを何らかのサポートされている画像フォーマットに変換できます。たとえば、下記のコードスニペットは、ID が "canvas" の {{HTMLElement("canvas")}} 要素を取得して、PNG 画像としてコピーしてから、ドキュメントに新しい {{HTMLElement("img")}} 要素を追加しています。この画像ソースはキャンバスを使用して生成されたものです。</p>

<pre class="brush: js">var canvas = document.getElementById("canvas");

canvas.toBlob(function(blob) {
  var newImg = document.createElement("img"),
      url = URL.createObjectURL(blob);

  newImg.onload = function() {
    // 無効化されたため、もはや blob を読み取る必要はありません。
    URL.revokeObjectURL(url);
  };

  newImg.src = url;
  document.body.appendChild(newImg);
});
</pre>

<p>ここでは、PNG 画像を生成していることに注意してください；<code>toBlob()</code> の呼び出しに 2 つ目のパラメーターを追加した場合、画像の種類を指定できます。たとえば、 JPEG フォーマットの画像を取得できます：</p>

<pre class="brush: js"> canvas.toBlob(function(blob){...}, "image/jpeg", 0.95); // JPEG at 95% quality</pre>

<div>
<h3 id="キャンバスをアイコンに変換する方法（Mozilla_のみ）">キャンバスをアイコンに変換する方法（Mozilla のみ）</h3>

<p>キャンバスをアイコンに変換するには、<code>-moz-parse</code> を使用します。Windows XP は PNG から ico への変換をサポートしていませんが、代わりに bmp を使用できます。download 属性を設定することで、ダウンロードリンクを生成できます。download 属性の値は、ファイル名として使用される名前です。</p>

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

<h3 id="OS.File（chromeadd-on_コンテクストのみ）で_toBlob_をディスクに保存する">OS.File（chrome/add-on コンテクストのみ）で toBlob をディスクに保存する</h3>

<div class="note">
<p>このテクニックは画像をデスクトップに保存しますが、Web サイトには公開されていない OS API として Firefox chrome コンテクストか add-on コードでのみ役立ちます。</p>
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

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-canvas-toblob", "HTMLCanvasElement.toBlob")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName('HTML5 W3C')}} の最新のスナップショットから変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "scripting-1.html#dom-canvas-toblob", "HTMLCanvasElement.toBlob")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "scripting-1.html#dom-canvas-toblob", "HTMLCanvasElement.toBlob")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>初期定義を含む {{SpecName('HTML WHATWG')}} のスナップショット。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.HTMLCanvasElement.toBlob")}}</p>

<h2 id="ポリフィル">ポリフィル</h2>

<p>toDataURL に基づいた低パフォーマンスのポリフィルです。</p>

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

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>これが定義されているインターフェース： {{domxref("HTMLCanvasElement")}}</li>
 <li>{{domxref("Blob")}}</li>
</ul>
