---
title: Element.getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
tags:
  - API
  - 境界
  - Bounding
  - Bounds
  - CSSOM View
  - Client
  - Containing
  - DOM
  - Element
  - Enclosing
  - メソッド
  - Minimum
  - 長方形
  - リファレンス
  - Smallest
  - clientHeight
  - getBoundingClientRect
  - getClientRects
  - offsetHeight
  - scrollHeight
browser-compat: api.Element.getBoundingClientRect
translation_of: Web/API/Element/getBoundingClientRect
---
{{APIRef("DOM")}}

**`Element.getBoundingClientRect()`** メソッドは、要素の寸法と、その[ビューポート](/ja/docs/Glossary/Viewport)に対する相対位置に関する情報を返します。

## 構文

```js
domRect = element.getBoundingClientRect();
```

### 値

返値は {{domxref("DOMRect")}} オブジェクトで、（パディングと境界の幅を含む）要素全体が収まる最小の長方形です。`left`, `top`, `right`, `bottom`, `x`, `y`, `width`, `height` の各プロパティは、長方形の全体の位置と大きさをピクセル数で記述します。 `width` と `height` 以外のプロパティは、ビューポートの左上を基準としています。

![](element-box-diagram.png)

このメソッドが返す {{domxref("DOMRect")}} オブジェクトの `width` と `height` プロパティは、内容物の幅や高さだけでなく、 `padding` と `border-width` も含まれます。標準的なボックスモデルでは、これは要素の `width` または `height` プロパティ + `padding` + `border-width` と同じになります。しかし、もし [`box-sizing: border-box`](/ja/docs/Web/CSS/box-sizing) が要素に設定されていれば、これは `width` または `height` と等しくなります。

返される値は、その要素に対して {{domxref("Element.getClientRects", "getClientRects()")}} が返す矩形の和、つまり、その要素に関連する CSS の border-box と見なすことができます。

空のボーダーボックスは完全に無視されます。もし要素のボーダーボックスの全てが空である場合は、 `width` と `height` が 0 で、 `top` と `left` は、要素に対する（コンテンツ順での）最初の CSS ボックスの左上である矩形を返します。

境界矩形を計算するときには、ビューポート領域（または他のスクロール可能な要素）のスクロール量が考慮されます。これは、スクロール位置が変更される度に（その値はビューポートの相対値であり、絶対値ではないため) 矩形の境界の辺 (`top`, `right`, `bottom`, `left`) が変更されることを意味しています。

もし文書の左上隅を基準とする境界矩形が必要な場合は、現在のスクロール位置から独立した境界矩形を取得する `top` と `left` プロパティに、現在のスクロール位置を加えるだけです（これらは {{domxref("window.scrollX")}} と {{domxref("window.scrollY")}} で取得できます）。

### ブラウザー間で互換性のある代替手段

高いブラウザー間の互換性を必要とするスクリプトでは、 `window.scrollX` と `window.scrollY` の代わりに {{domxref("window.pageXOffset")}} と {{domxref("window.pageYOffset")}} を使うことができます。これらのプロパティへのアクセスを使わない、次のようなスクリプトもあります。

```js
// For scrollX
(((t = document.documentElement) || (t = document.body.parentNode))
  && typeof t.scrollLeft == 'number' ? t : document.body).scrollLeft
// For scrollY
(((t = document.documentElement) || (t = document.body.parentNode))
  && typeof t.scrollTop == 'number' ? t : document.body).scrollTop
```

## 例

### 基本

この単純な例では、単純な `<div>` 要素のクライアント矩形を表す `DOMRect` オブジェクトを取得し、その下にプロパティを出力しています。

```html
<div></div>
```

```css
div {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}
```

```js
let elem = document.querySelector('div');
let rect = elem.getBoundingClientRect();
for (var key in rect) {
  if(typeof rect[key] !== 'function') {
    let para = document.createElement('p');
    para.textContent  = `${ key } : ${ rect[key] }`;
    document.body.appendChild(para);
  }
}
```

{{EmbedLiveSample('Basic', '100%', 640)}}

なお、 `width`/`height` は `width`/`height` + `padding` と等しくなります。

また、`x`/`left`, `y`/`top`, `right`, `bottom` の値は、それぞれのケースで、ビューポートの関連する辺から要素のその側までの絶対的な距離に等しいことに注意してください。

#### スクロール

この例では、文書がスクロールされたときに、クライアント矩形の境界がどのように変化するかを示しています。

```html
<div id="example"></div>
<div id="controls"></div>
```

```css
div#example {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}

body { padding-bottom: 1000px; }
p { margin: 0; }
```

```js
function update() {
  const container = document.getElementById("controls");
  const elem = document.getElementById("example");
  const rect = elem.getBoundingClientRect();

  container.innerHTML = '';
  for (let key in rect) {
    if(typeof rect[key] !== 'function') {
      let para = document.createElement('p');
      para.textContent  = `${ key } : ${ rect[key] }`;
      container.appendChild(para);
    }
  }
}

document.addEventListener('scroll', update);
update();
```

{{EmbedLiveSample('Scrolling', '100%', 640)}}

## 仕様書

{{Specifications}}

### メモ

最近のブラウザーでは返された `DOMRect` オブジェクトを変更することが可能ですが、これは `DOMRectReadOnly` を返す古いバージョンには該当しません。IE と Edge では、返された [`ClientRect`](<https://msdn.microsoft.com/library/hh826029(VS.85).aspx>) オブジェクトに対し、見過ごされたプロパティを追加することができず、`x` と `y` を補填することができません。

互換性問題 (下記参照) のため、 `left`, `top`, `right`, `bottom` のみに頼ることが最も安全です。

返された `DOMRect` オブジェクトのプロパティは、自身のプロパティではありません。`in` 演算子や `for...in` では返されたプロパティを見つけますが、他の `Object.keys()` のような API では失敗します。さらに予期しないことに、 `Object.assign()` のような ES2015 やより新しい機能では、返されるプロパティのコピーに失敗します。

```js
rect = elt.getBoundingClientRect()
// emptyObj の結果は {}
emptyObj = Object.assign({}, rect)
emptyObj = { ...rect }
{width, ...emptyObj} = rect
```

`DOMRect` の `top`, `left`, `right`, `bottom` の各プロパティは他のプロパティ値から計算されます。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.getClientRects", "getClientRects()")}}
- [MSDN: `getBoundingClientRect`](<https://msdn.microsoft.com/library/ms536433(VS.85).aspx>)
- [MSDN: `ClientRect`](<https://msdn.microsoft.com/library/hh826029(VS.85).aspx>)、初期バージョンの `DOMRect`
