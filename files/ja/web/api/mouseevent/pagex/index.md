---
title: MouseEvent.pageX
slug: Web/API/MouseEvent/pageX
l10n:
  sourceCommit: a36633398f827c87eb593f9647ed00bf33fd5b34
---

{{APIRef("UI Events")}}

**`pageX`** は {{domxref("MouseEvent")}} インターフェイスの読み取り専用プロパティで、マウスがクリックされた位置の X（水平）座標を、文書全体の左端からの相対座標で返します。
これには文書の現在見えていない範囲にあるものも含みます。

文書の端をそのまま基準とするため、このプロパティは、ページの水平方向のスクロールを加味します。
例えば、文書の左側 200 ピクセルが隠れるようにページがスクロールされ、ビューの左端から 100 ピクセル内側でマウスがクリックされた場合、 `pageX` が返す値は 300 となります。

元々、このプロパティは `long` 型の整数として定義されていましたが、 [CSSOM View モジュール](/ja/docs/Web/CSS/CSSOM_View) では、 `double` 型の浮動小数点値として再定義しています。
詳しくは[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

この方法で指定された座標について詳しくは、[座標系](/ja/docs/Web/CSS/CSSOM_View/Coordinate_systems)の[ページ](/ja/docs/Web/CSS/CSSOM_View/Coordinate_systems#ページ)の節を参照してください。

## 値

マウスがクリックされた*文書*の左端からのピクセル数を示す浮動小数点値。スクロールやビューポートによる位置決めはが有効であるかに関わらず。

このプロパティは、もともと Touch Events 仕様では long 型の整数として規定されていましたが、 CSSOM View モジュールではサブピクセルの精度が利用できるようにするために倍精度浮動小数点数として再定義されました。
JavaScript では数値型はどちらも `Number` 型で表現されますが、ブラウザーのコード内部では異なる扱いを受ける可能性があり、結果として動作に差異が生じる可能性があります。

どのブラウザーが改訂されたデータ型を使用するように更新されているかは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

## 例

### ページ原点に対するマウスの位置を表示

それでは、ページの原点に対するマウスの位置を示す簡単な例を見てみましょう。
この例は {{HTMLElement("iframe")}} の中で表示されているので、その左上隅はブラウザーウィンドウではなく、フレームの左上隅になります。

#### HTML

```html
<div class="box">
  <p>このボックス内でマウスを動かして、座標の変化を確認してください。</p>
  <p><code>pageX</code>: <span id="x">n/a</span></p>
  <p><code>pageY</code>: <span id="y">n/a</span></p>
</div>
```

HTML は単純です。マウスイベントを監視するボックスには `"box"` クラスが設定されています。
ここには 2 つの `<span>` 要素があり、一つは ID が `"x"` で、もう一つは ID が `"y"` です。
これらはイベントが発生するたびに、ページに対するマウスの最新座標で更新されます。

#### CSS

この例で使用される CSS は以下の通りです。

```css
.box {
  width: 400px;
  height: 250px;
  border: 2px solid darkblue;
  background-color: blue;
  color: white;
  font:
    16px "Zilla",
    "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

#### JavaScript

```js
const box = document.querySelector(".box");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function updateDisplay(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
}

box.addEventListener("mousemove", updateDisplay, false);
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", updateDisplay, false);
```

JavaScript では、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して、 `updateDisplay()` 関数を {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mouseleave_event", "mouseleave")}} の各イベントのイベントハンドラーとして登録しています。

`updateDisplay()` は、 X と Y の座標を格納するための {{HTMLElement("span")}} 要素の内容を `pageX` と {{domxref("MouseEvent.pageY", "pageY")}} の値で置き換えます。

#### 結果

こちらで試してみてください。

{{EmbedLiveSample("Showing_the_mouse_position_relative_to_page_origin", 500, 300)}}

### その他の例

利用可能なすべての座標系における情報を示す例は、[マウス位置へのアクセス方法](/ja/docs/Web/CSS/CSSOM_View/Coordinate_systems#例)で見ることができます。

## 仕様書

{{Specifications}}

CSSOM View 仕様書に追加される前、限られた一部のブラウザーで短期間、 `pageX` と `pageY` は {{domxref("UIEvent")}} インターフェイス上で使用することができました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent.pageY")}}
