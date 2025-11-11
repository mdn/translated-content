---
title: "ViewTransition: finished プロパティ"
short-title: finished
slug: Web/API/ViewTransition/finished
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

**`finished`** は {{domxref("ViewTransition")}} インターフェイスの読み取り専用のプロパティで、ビュー遷移のアニメーションが完了し、新しいページビューがユーザーに表示され操作可能になると履行されるプロミス ({{jsxref("Promise")}}) です。

`finished` は {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} に渡されたコールバックが例外を発生するか、拒否されてページの新しい状態が作成されなかったことを示すプロミスを返した場合にのみ拒否されます。

トランジションのアニメーションが開始されなかったり、 {{domxref("ViewTransition.skipTransition()")}} を使用してアニメーション中にスキップされた場合でも、終了状態に到達しているため、 `finished` は履行されます。

## 値

プロミスです。

## 例

### 様々な操作に様々なトランジション

特定のナビゲーションで、固有のトランジションが要求されることがあります。例えば、「戻る」ナビゲーションは「進む」ナビゲーションとは異なるトランジションが必要かもしれません。このようなケースを処理する最良の方法は、 `<html>` 要素にクラス名を設定し、ビュー遷移のアニメーションを使用しながらトランジションを処理し、トランジションが完了したらクラス名を除去することです。

```js
async function handleTransition() {
  if (isBackNavigation) {
    document.documentElement.classList.add("back-transition");
  }

  const transition = document.startViewTransition(() =>
    updateTheDOMSomehow(data),
  );

  try {
    await transition.finished;
  } finally {
    document.documentElement.classList.remove("back-transition");
  }
}
```

> [!NOTE]
> `isBackNavigation` は組み込み機能ではありません。これは理論的な機能で、[ナビゲーション API](/ja/docs/Web/API/Navigation_API) などを使用して実装できるかもしれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
