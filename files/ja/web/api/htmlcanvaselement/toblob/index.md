---
title: HTMLCanvasElement.toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.toBlob()`** メソッドは、 キャンバスに含まれる画像を表す {{domxref("Blob")}} オブジェクトを生成します；このファイルは、ユーザーエージェントの裁量によって、ディスクにキャッシュされるか、メモリに保存されます。`type` が指定されてない場合、画像の type は、 `image/png` です。生成された画像の解像度は、96dpi です。
`image/jpeg` 画像と一緒に使用される 3 つ目の引数は、出力の品質を指定します。

## 構文

```
void canvas.toBlob(callback, mimeType, qualityArgument);
```

### 引数

- callback
  - : 引数として {{domxref("Blob")}} オブジェクトを受け取るコールバック関数。
- `mimeType` {{optional_inline}}
  - : 画像フォーマットを示す {{domxref("DOMString")}}。既定の型は `image/png`。
- `qualityArgument` {{optional_inline}}
  - : 要求した type が `image/jpeg` か `image/webp` だった場合、画像の品質を示す `0` から `1` の {{jsxref("Number")}}。type 引数がそのほかの値だった場合、既定の値が画質に使用される。ほかの引数は無視される。

### 返値

なし。

## 例

### キャンバスに表示されている画像を取得する

一度キャンバスにコンテンツを描画したら、これを何らかのサポートされている画像フォーマットに変換できます。たとえば、下記のコードスニペットは、ID が "canvas" の {{HTMLElement("canvas")}} 要素を取得して、PNG 画像としてコピーしてから、ドキュメントに新しい {{HTMLElement("img")}} 要素を追加しています。この画像ソースはキャンバスを使用して生成されたものです。

```js
var canvas = document.getElementById("canvas");

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
```

ここでは、PNG 画像を生成していることに注意してください；`toBlob()` の呼び出しに 2 つ目の引数を追加した場合、画像の種類を指定できます。たとえば、 JPEG フォーマットの画像を取得できます：

```js
 canvas.toBlob(function(blob){...}, "image/jpeg", 0.95); // JPEG at 95% quality
```

### キャンバスをアイコンに変換する方法（Mozilla のみ）

キャンバスをアイコンに変換するには、`-moz-parse` を使用します。Windows XP は PNG から ico への変換をサポートしていませんが、代わりに bmp を使用できます。download 属性を設定することで、ダウンロードリンクを生成できます。download 属性の値は、ファイル名として使用される名前です。

```js
var canvas = document.getElementById("canvas");
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
              '-moz-parse-options:format=bmp;bpp=32');
```

### OS.File（chrome/add-on コンテクストのみ）で toBlob をディスクに保存する

> **メモ:** このテクニックは画像をデスクトップに保存しますが、Web サイトには公開されていない OS API として Firefox chrome コンテクストか add-on コードでのみ役立ちます。

```js
var canvas = document.getElementById("canvas");
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
              '-moz-parse-options:format=bmp;bpp=32');
```

## 仕様書

| 仕様                                                                                                                     | 状態                             | コメント                                                                 |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "scripting.html#dom-canvas-toblob", "HTMLCanvasElement.toBlob")}} | {{Spec2('HTML WHATWG')}} | {{SpecName('HTML5 W3C')}} の最新のスナップショットから変更なし。  |
| {{SpecName('HTML5.1', "scripting-1.html#dom-canvas-toblob", "HTMLCanvasElement.toBlob")}} | {{Spec2('HTML5.1')}}     | 変更なし。                                                               |
| {{SpecName('HTML5 W3C', "scripting-1.html#dom-canvas-toblob", "HTMLCanvasElement.toBlob")}} | {{Spec2('HTML5 W3C')}}     | 初期定義を含む {{SpecName('HTML WHATWG')}} のスナップショット。 |

## ブラウザーの互換性

{{Compat("api.HTMLCanvasElement.toBlob")}}

## ポリフィル

toDataURL に基づいた低パフォーマンスのポリフィルです。

```js
if (!HTMLCanvasElement.prototype.toBlob) {
 Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
  value: function (callback, type, quality) {

    var binStr = atob( this.toDataURL(type, quality).split(',')[1] ),
        len = binStr.length,
        arr = new Uint8Array(len);

    for (var i=0; i<len; i++ ) {
     arr[i] = binStr.charCodeAt(i);
    }

    callback( new Blob( [arr], {type: type || 'image/png'} ) );
  }
 });
}
```

## 関連情報

- これが定義されているインターフェース： {{domxref("HTMLCanvasElement")}}
- {{domxref("Blob")}}
