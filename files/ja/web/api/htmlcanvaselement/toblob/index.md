---
title: "HTMLCanvasElement: toBlob() メソッド"
slug: Web/API/HTMLCanvasElement/toBlob
l10n:
  sourceCommit: b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.toBlob()`** メソッドは、 キャンバスに含まれる画像を表す {{domxref("Blob")}} オブジェクトを生成します。
このファイルは、ユーザーエージェントの裁量によって、ディスクにキャッシュされるか、メモリーに保存されたりすることがあります。

希望するファイル形式や画像品質を指定することができます。
ファイル形式を指定しない場合、または指定された形式に対応していない場合、データは `image/png` としてエクスポートされます。
ブラウザーは `image/png` に対応している必要があります。多くのブラウザーは `image/jpeg` や `image/webp` を含む他の形式にも対応しています。

作成する画像の解像度は、解像度メタデータのエンコーダーに対応しているファイル形式では 96dpi となります。

## 構文

```js-nolint
toBlob(callback)
toBlob(callback, type)
toBlob(callback, type, quality)
```

### 引数

- `callback`
  - : 単一の引数として結果の {{domxref("Blob")}} オブジェクトを受け取るコールバック関数です。何らかの理由で画像が作成できなかった場合は `null` が渡されることがあります。
- `type` {{optional_inline}}
  - : 文字列で、画像形式を表します。
    既定の形式は `image/png` です。この形式は、指定された形式に対応していない場合にも使用されます。
- `quality` {{optional_inline}}
  - : `0` から `1` の間の数値であり、作成する画像が非可逆圧縮（`image/jpeg` や `image/webp` など）であった場合の画像品質を示します。
    このオプションが指定されなかったり、許可されている範囲外の数値であったりした場合は、ユーザーエージェントは既定の品質値を使用します。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `SecurityError`
  - : キャンバスのビットマップがオリジンクリーンではありません。そのコンテンツの少なくとも一部が、文書そのものが読み込まれたサイトとは別のサイトから読み込まれたものであるか、その可能性があります。

## 例

### キャンバスに表示されている画像を取得する

一度キャンバスにコンテンツを描画したら、これを何らかのサポートされている画像フォーマットに変換できます。
たとえば、下記のコードスニペットは、ID が "canvas" の {{HTMLElement("canvas")}} 要素を取得して、PNG 画像としてコピーしてから、文書に新しい {{HTMLElement("img")}} 要素を追加しています。この画像ソースはキャンバスを使用して生成されたものです。

```js
const canvas = document.getElementById("canvas");

canvas.toBlob((blob) => {
  const newImg = document.createElement("img");
  const url = URL.createObjectURL(blob);

  newImg.onload = () => {
    // もう blob を読み取る必要は無いので、無効化します。
    URL.revokeObjectURL(url);
  };

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

ここでは、PNG 画像を生成していることに注意してください。`toBlob()` の呼び出しに 2 つ目の引数を追加した場合、ユーザーエージェントが対応している画像の種類を指定できます。たとえば、次のようにして JPEG 形式の画像を取得できます。

```js
canvas.toBlob(
  (blob) => {
    /* … */
  },
  "image/jpeg",
  0.95,
); // JPEG at 95% quality
```

### キャンバスを ico に変換（Mozilla のみ）

この例ではキャンバスをアイコンに変換するために `-moz-parse` を使用しており、Firefox でのみ動作します。Windows XP は PNG から ico への変換に対応していませんが、代わりに bmp を使用できます。download 属性を設定することで、ダウンロードリンクを生成できます。download 属性の値は、ファイル名として使用される名前です。

```js
const canvas = document.getElementById("canvas");
const d = canvas.width;
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

function blobCallback(iconName) {
  return (b) => {
    const a = document.createElement("a");
    a.textContent = "Download";
    document.body.appendChild(a);
    a.style.display = "block";
    a.download = `${iconName}.ico`;
    a.href = window.URL.createObjectURL(b);
  };
}
canvas.toBlob(
  blobCallback("passThisString"),
  "image/vnd.microsoft.icon",
  "-moz-parse-options:format=bmp;bpp=32",
);
```

### OS.File（chrome/add-on コンテキストのみ）で toBlob をディスクに保存する

> [!NOTE]
> このテクニックは画像をデスクトップに保存しますので、Firefox の chrome コンテキストか add-on コードでのみ利用できます。OS API はウェブサイトには存在しないからです。

```js
const canvas = document.getElementById("canvas");
const d = canvas.width;
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

function blobCallback(iconName) {
  return (b) => {
    const r = new FileReader();
    r.onloadend = () => {
      // r.result contains the ArrayBuffer.
      Cu.import("resource://gre/modules/osfile.jsm");
      const writePath = OS.Path.join(
        OS.Constants.Path.desktopDir,
        `${iconName}.ico`,
      );
      const promise = OS.File.writeAtomic(writePath, new Uint8Array(r.result), {
        tmpPath: `${writePath}.tmp`,
      });
      promise.then(
        () => {
          console.log("successfully wrote file");
        },
        () => {
          console.log("failure writing file");
        },
      );
    };
    r.readAsArrayBuffer(b);
  };
}

canvas.toBlob(
  blobCallback("passThisString"),
  "image/vnd.microsoft.icon",
  "-moz-parse-options:format=bmp;bpp=32",
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Blob")}}
