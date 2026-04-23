---
title: ResizeObserver
slug: Web/API/ResizeObserver
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Resize Observer API")}}

**`ResizeObserver`** インターフェイスは、要素 ({{domxref('Element')}}) のコンテンツまたは境界ボックス、または {{domxref('SVGElement')}} のバウンディングボックスの大きさが変化したことを報告します。

> [!NOTE]
> コンテンツボックスは、コンテンツを配置できるボックスです。つまり、境界ボックスからパディングを引いたものです。境界とパディングの説明は[ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)を参照してください。

## コンストラクター

- {{domxref("ResizeObserver.ResizeObserver", "ResizeObserver()")}}
  - : 新しい `ResizeObserver` オブジェクトを作成して返します。

## インスタンスプロパティ

なし。

## インスタンスメソッド

- {{domxref('ResizeObserver.disconnect()')}}
  - : 特定のオブザーバーの監視対象の {{domxref('Element')}} をすべて監視解除します。
- {{domxref('ResizeObserver.observe()')}}
  - : 指定された {{domxref('Element')}} の監視を開始します。
- {{domxref('ResizeObserver.unobserve()')}}
  - : 指定された {{domxref('Element')}} の監視を終了します。

## 例

[resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) （[ソースを参照](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)）の例では、スライダーの値が変更され、それを含む `<div>` の幅が変更されると、リサイズオブザーバーを使用してヘッダーと段落の {{cssxref("font-size")}} を変更します。これは、ビューポートに影響がない要素のサイズの変化にも応答することができることを示しています。

また、オブザーバーをオフやオンにするためのチェックボックスも用意しています。オフにすると、 `<div>` の幅が変化してもテキストは変化しません。

JavaScript は次のようになります。

```js
const h1Elem = document.querySelector("h1");
const pElem = document.querySelector("p");
const divElem = document.querySelector("body > div");
const slider = document.querySelector('input[type="range"]');
const checkbox = document.querySelector('input[type="checkbox"]');

divElem.style.width = "600px";

slider.addEventListener("input", () => {
  divElem.style.width = `${slider.value}px`;
});

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      const contentBoxSize = entry.contentBoxSize[0];
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        contentBoxSize.inlineSize / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(
        1,
        contentBoxSize.inlineSize / 600,
      )}rem`;
    } else {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentRect.width / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }

  console.log("Size changed");
});

resizeObserver.observe(divElem);

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    resizeObserver.observe(divElem);
  } else {
    resizeObserver.unobserve(divElem);
  }
});
```

## 監視エラー

仕様に従う実装では、描画前（つまり、フレームがユーザーに表示される前）にリサイズイベントを呼び出します。リサイズ イベントがあった場合、スタイルとレイアウトが再評価され、さらにリサイズイベントが発生する可能性があります。循環的な依存関係による無限ループは、それぞれの反復処理中に DOM のより深い要素のみを処理することで対処します。この条件を満たさないリサイズイベントは次の描画に延期され、エラーイベントが {{domxref('Window')}} オブジェクトに定義されたメッセージ文字列とともに発行されます。

**ResizeObserver loop completed with undelivered notifications.**

これはユーザーエージェントのロックを防ぐだけで、無限ループそのものを防ぐわけではないことに注意してください。例えば、次の例では divElem の幅が無限に広がり、コンソールに上記のようなエラーメッセージが毎フレーム発生します。

```js
const divElem = document.querySelector("body > div");

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    entry.target.style.width = entry.contentBoxSize[0].inlineSize + 10 + "px";
  }
});

window.addEventListener("error", function (e) {
  console.error(e.message);
});
```

エラーイベントがいつまでも発行されない限り、リサイズオブザーバーは決定し、安定した、おそらく正しいレイアウトを生成します。しかし、訪問者は、単一のフレームで起こるはずの一連の変更が、複数のフレームにわたって起こるため、壊れたレイアウトがフラッシュして見えるかもしれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)
- {{domxref('PerformanceObserver')}}
- {{domxref('IntersectionObserver')}} （[交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API) の一部）
- 今後リリースされる[コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)は、レスポンシブデザインを実装するための有効な選択肢になるかもしれません。
