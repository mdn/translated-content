---
title: "ViewTransition: ready プロパティ"
short-title: ready
slug: Web/API/ViewTransition/ready
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

**`ready`** は {{domxref("ViewTransition")}} インターフェイスの読み取り専用プロパティで、擬似要素ツリーが作成され、ビュー遷移のアニメーションが始まるときに履行される {{jsxref("Promise")}} です。

`ready` はトランジションを始められない場合に拒否されます。これは、例えば {{cssxref("view-transition-name")}} が重複していたり、{{domxref("Document.startViewTransition()")}} に渡されたコールバックが拒否されたプロミスを発生させたり返したりするなど、設定ミスが原因である可能性があります。

## 値

プロミスです。

## 例

次の例では、 {{domxref("ViewTransition.ready")}} プロミスを使用して、クリック時のユーザーカーソルの位置から発生する独自の円形表示ビュー遷移を発生させ、 {{domxref("Web Animations API", "ウェブアニメーション API", "", "nocode")}} によってアニメーションが指定されています。

```js
// 最後のクリックイベントを保存
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // この API に対応していないブラウザーのためのフォールバック
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // クリック位置を取得するか、画面の中央へフォールバックする
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // 最も遠いコーナーまでの距離を取得
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // トランジションを作成
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // 擬似要素が作成されるのを待つ
  transition.ready.then(() => {
    // ルートの新しいビューをアニメーション
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        // アニメーションさせる擬似要素を指定
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

このアニメーションには以下の CSS も必要です。既定のアニメーションをオフにし、古いビューと新しいビューの状態が混ざり合わないようにします（新しい状態はビュー遷移の遷移ではなく、古い状態のすぐ上に「ワイプ」されます）。

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
