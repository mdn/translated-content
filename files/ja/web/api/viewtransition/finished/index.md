---
title: "ViewTransition: finished プロパティ"
short-title: finished
slug: Web/API/ViewTransition/finished
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("View Transition API")}}

**`finished`** は {{domxref("ViewTransition")}} インターフェイスの読み取り専用のプロパティで、ビュー遷移のアニメーションが完了し、新しいページビューがユーザーに表示され操作可能になると履行されるプロミス ({{jsxref("Promise")}}) です。

`finished` は、同一文書 (SPA) 間の遷移においてのみ、{{domxref("Document.startViewTransition()", "document.startViewTransition()")}} に渡されたコールバックが例外を発生させるか、拒否されたプロミスを返した場合にのみ拒否されます。これは、ページの新しい状態が生成されなかったことを示します。

遷移のアニメーションが開始されなかったり、{{domxref("ViewTransition.skipTransition()")}} を使用して遷移中にスキップされた場合でも、終了状態に到達しているため、 `finished` は履行されます。

## 値

プロミス ({{jsxref("Promise")}}) です。

## 例

### 様々な操作に様々な遷移

特定のナビゲーションで、固有の遷移が要求されることがあります。例えば、「戻る」ナビゲーションは「進む」ナビゲーションとは異なる遷移が必要かもしれません。このようなケースを処理する最良の方法は、 `<html>` 要素にクラス名を設定し、ビュー遷移のアニメーションを使用しながら遷移を処理し、遷移が完了したらクラス名を除去することです。

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

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
