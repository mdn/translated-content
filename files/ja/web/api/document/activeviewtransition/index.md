---
title: "Document: activeViewTransition プロパティ"
short-title: activeViewTransition
slug: Web/API/Document/activeViewTransition
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("DOM")}}

**`activeViewTransition`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、この文書で現在アクティブな[ビュー遷移](/ja/docs/Web/API/View_Transition_API)を表す {{domxref("ViewTransition")}} インスタンスを返します。

現在の {{domxref("ViewTransition")}} は他の方法でもアクセスできます。

- 同一文書内でのビュー遷移の場合は {{domxref("Document.startViewTransition()")}} の返値。
- 文書間のビュー遷移の場合は {{domxref("Window.pagereveal_event", "pagereveal")}} および {{domxref("Window.pageswap_event", "pageswap")}} のイベントオブジェクトの `viewTransition` プロパティ。

ただし、`activeViewTransition` プロパティは、どのようなコンテキストでもアクティブなビュー遷移に一貫した方法でアクセスでき、後で簡単にアクセスできるように保存しておく必要がありません。

## 値

{{domxref("ViewTransition")}} またはアクティブなビュー遷移がない場合は `null`。

## 例

```js
// ビュー遷移を開始
document.startViewTransition(() => {
  // 新しい状態を反映するために UI を更新
  updateUI();
});

// ビュー遷移が現在アクティブかどうかを調べる
if (document.activeViewTransition) {
  console.log("ビュー遷移が現在アクティブです");
}

// ビュー遷移の終了に応答
document.activeViewTransition.finished.then(() => {
  console.log("ビュー遷移終了");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.startViewTransition()")}}
- {{domxref("Window.pagereveal_event", "pagereveal")}} イベント
- {{domxref("Window.pageswap_event", "pageswap")}} イベント
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- {{domxref("ViewTransition")}}
