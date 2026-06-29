---
title: ViewTransition
slug: Web/API/ViewTransition
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{APIRef("View Transition API")}}

**`ViewTransition`** は{{domxref("View Transition API", "ビュー遷移 API", "", "nocode")}} のインターフェイスで、アクティブなビュー遷移を表し、遷移が様々な状態（例えば、アニメーションを実行する準備ができている、またはアニメーションが終了した）に達したときに反応する機能、または遷移を完全にスキップする機能を提供します。

このオブジェクト型は、以下の方法で利用することができます。

- {{domxref("Document.activeViewTransition")}} プロパティ経由。これにより、後で簡単にアクセスできるように保存しておく必要がなく、どのような状況でもアクティブなビュー遷移に一貫した方法でアクセスできるようになります。
- 同一文書内 (SPA) の遷移の場合、{{domxref("Document.startViewTransition()", "document.startViewTransition()")}} メソッドによっても返されます。
- 文書間 (MPA) の遷移の場合、以下のものも利用可能です。
  - 遷出元のページ内では、{{domxref("Window.pageswap_event", "pageswap")}} イベントオブジェクトの {{domxref("PageSwapEvent.viewTransition")}} プロパティ。
  - 遷入先のページ内では、{{domxref("Window.pagereveal_event", "pagereveal")}} イベントオブジェクトの {{domxref("PageRevealEvent.viewTransition")}} プロパティ。

`startViewTransition()` の呼び出し（または MPA遷移におけるページナビゲーション）によってビュー遷移が発生すると、[ビュー遷移のプロセス](/ja/docs/Web/API/View_Transition_API#ビュー遷移のプロセス)で説明されている一連の段階が続きます。ここでは、それぞれのプロミスがいつ履行されるかについても説明されています。

## インスタンスプロパティ

- {{domxref("ViewTransition.finished")}} {{ReadOnlyInline}}
  - : {{jsxref("Promise")}} で、遷移のアニメーションが完了し、新しいページビューがユーザーに表示され操作可能になると履行されます。
- {{domxref("ViewTransition.ready")}} {{ReadOnlyInline}}
  - : {{jsxref("Promise")}} で、擬似要素ツリーが作成され、遷移のアニメーションが始まろうとすると履行されます。
- {{domxref("ViewTransition.types")}} {{ReadOnlyInline}}
  - : {{domxref("ViewTransitionTypeSet")}} であり、ビュー遷移に設定された型を参照・変更することができます。
- {{domxref("ViewTransition.updateCallbackDone")}} {{ReadOnlyInline}}
  - : {{jsxref("Promise")}} で、 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} のコールバックが返すプロミスが履行されたときに履行されます。

## インスタンスメソッド

- {{domxref("ViewTransition.skipTransition", "skipTransition()")}}
  - : ビュー遷移のアニメーション部分をスキップします。ただし、 DOM を更新する {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} コールバックの実行はスキップしません。

## 例

次の SPA の例では、 {{domxref("ViewTransition.ready")}} プロミスを使用して、クリック時のユーザーカーソルの位置から発生する独自の円形表示ビュー遷移を発生させ、 {{domxref("Web Animations API", "ウェブアニメーション API", "", "nocode")}} によってアニメーションが指定されています。

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

  // 遷移を作成
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

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移 API の使用](/ja/docs/Web/API/View_Transition_API/Using)
- [ビュー遷移型の使用](/ja/docs/Web/API/View_Transition_API/Using_types)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
