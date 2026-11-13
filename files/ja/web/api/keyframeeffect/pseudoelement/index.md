---
title: "KeyframeEffect: pseudoElement プロパティ"
short-title: pseudoElement
slug: Web/API/KeyframeEffect/pseudoElement
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ APIRef("Web Animations") }}

**`pseudoElement`** は {{domxref("KeyframeEffect")}} インターフェイスのプロパティで、アニメーションの対象となる擬似要素を表す文字列です。擬似要素を対象としないアニメーションでは `null` となる場合があります。CSS によって生成されるアニメーションおよびトランジションを除き、ゲッターおよびセッターの両方として機能します。

> [!NOTE]
> 古い単一コロンの構文である {{cssxref("::before", ":before")}}, {{cssxref("::after", ":after")}}, {{cssxref("::first-letter", ":first-letter")}}, {{cssxref("::first-line", ":first-line")}} を設定した場合、文字列は二重コロンの新しいバージョン（それぞれ {{cssxref("::before")}}, {{cssxref("::after")}}, {{cssxref("::first-letter")}}, {{cssxref("::first-line")}}）に変換されます。

## 値

文字列または `null` です。

## 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : このプロパティを要素に設定しようとした際に発生する例外です。不正な擬似要素（存在しないかスペルミス）が原因です。プロパティは変更されません。

## 例

```html
<div id="text">テキスト</div>
<pre id="log"></pre>
```

```css
#text::after {
  content: "👹";
  display: inline-block; /* `transform` プロパティはインライン要素に適用されないので、必要です */
  font-size: 2rem;
}
#text::before {
  content: "🤠";
  display: inline-block;
  font-size: 2rem;
}
```

```js
const log = document.getElementById("log");
const text = document.getElementById("text");

// キーフレームを作成し、アニメーションを開始する
const animation = text.animate([{ transform: "rotate(360deg)" }], {
  duration: 3000,
  iterations: Infinity,
  pseudoElement: "::after",
});

// KeyframeEffect.pseudoElement の値を取得する
function logPseudoElement() {
  const keyframeEffect = animation.effect;
  log.textContent = `Value of pseudoElement animated: ${keyframeEffect.pseudoElement}`;
  requestAnimationFrame(logPseudoElement);
}

// 6 秒ごとに擬似要素のアニメーションを切り替える
function switchPseudoElement() {
  const keyframeEffect = animation.effect;
  keyframeEffect.pseudoElement =
    keyframeEffect.pseudoElement === "::after" ? "::before" : "::after";
  setTimeout(switchPseudoElement, 6000);
}

switchPseudoElement();
logPseudoElement();
```

{{EmbedLiveSample("Examples", "100", "90")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}} インターフェイス
- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} コンストラクター
- {{domxref("KeyframeEffect.target", "target")}} プロパティ
