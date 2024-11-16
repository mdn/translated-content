---
title: "HTMLImageElement: decoding プロパティ"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{APIRef}}

**`decoding`** は {{domxref("HTMLImageElement")}} インターフェイスのプロパティで、画像をどのようにデコードするかのヒントをブラウザーに提供します。具体的には、他のコンテンツを表示する前に画像がデコードされるのを待つべきかどうかです。

## 値

デコードヒントを表す文字列です。使用可能な値は以下の通りです。

- `"sync"`
  - : 画像を他のコンテンツと同期してデコードし、アトミックに表示します。
- `"async"`
  - : 画像を非同期にデコードし、この処理が完全に完了する前に他にもコンテンツをレンダリングできるようにします。
- `"auto"`
  - : デコードモードに対する優先順位がないことを示します。ブラウザーが最適なものを決定します。これが既定値ですが、ブラウザーによって既定値が異なります。
    - Chromium は既定で `"sync"` です。
    - Firefox は既定で `"async"` です。
    - Safari は既定で、ごく一部の状況を除いて `"sync"` です。

## 使用上の注意

`decoding` プロパティはブラウザーに、画像のデコードを他のタスクといっしょに単一の段階で行うべきか (`"sync"`)、完全に完了する前に他のコンテンツをレンダリングさせるべきか (`"async"`) のヒントを提供します。実際には、この 2 つの値の違いを認識するのは難しいことが多く、違いがある場合には、より良い方法があることが多いです。

ビューポート内のDOMに挿入される画像の場合、 `"async"` はスタイルのないコンテンツが点滅することがあり、 `"sync"` は少量の[ジャンク](/ja/docs/Glossary/Jank)が発生することがあります。他のコンテンツを滞らせることなくアトミックな表示をするためには、 {{domxref("HTMLImageElement.decode()")}} メソッドを使用する方が通常は良い方法です。

ビューポート外の DOM に挿入された画像については、現行のブラウザーは通常、スクロールして表示される前にデコードするので、どちらの値を使用しても顕著な違いはありません。

## 例

下記の例では、画像がダウンロードされる際に、ページに空の画像が表示される可能性があります。 `decoding` を設定してもそれは防げません。

```js
const img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
document.body.appendChild(img);
```

ダウンロードした後に画像を挿入すると、 `decoding` プロパティがより重要になります。

```js
async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

const img = new Image();
await loadImage("img/logo.png", img);
// `sync` を使用することで、他のコンテンツも確実に画像を更新することができます。
img.decoding = "sync";
document.body.appendChild(img);
const p = document.createElement("p");
p.textContent = "Image is fully loaded!";
document.body.appendChild(p);
```

しかし、よりよい解決策は、 {{domxref("HTMLImageElement.decode()")}} メソッドを使用してこの問題を解決することです。これは画像を非同期にデコードする方法を提供し、完全にダウンロードされデコードされるまで画像を DOM に挿入するのを遅らせます。これは、既存の画像と新しい画像を動的に入れ替える場合に具体的な有益な方法で、画像のデコード中にこのコード以外の無関係な描画が中断されるのを防ぎます。

`img.decoding = "async"` を使用すると、デコードする時刻が長い場合に他のコンテンツが表示されなくなるのを避けることができます。

```js
const img = new Image();
img.decoding = "async";
img.src = "img/logo.png";
document.body.appendChild(img);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLImageElement.decode()")}} メソッド
- {{htmlelement("img")}} 要素の `decoding` 属性
- [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) (tunetheweb.com, 2023)
