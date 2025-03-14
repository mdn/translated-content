---
title: "History: state プロパティ"
short-title: state
slug: Web/API/History/state
l10n:
  sourceCommit: b8eb6acf2fa8e54254b1165e58adbe2378591da1
---

{{APIRef("History API")}}

**`state`** は {{DOMxRef("History")}} インターフェイスの読み取り専用プロパティで、履歴スタックの一番上の状態を表す値を返します。これは {{domxref("Window/popstate_event", "popstate")}} イベントを待つことなく、状態を見ることができる方法です。

## 値

履歴スタックの一番上の状態です。この値は {{domxref("History.pushState","pushState()")}} または {{domxref("History.replaceState","replaceState()")}} メソッドが使用されていない限り [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) です。

## 例

以下のコードでは、 `history.state` の値を {{domxref("History.pushState","pushState()")}} メソッドを使用して値を履歴にプッシュする前に、ログに記録しています。
次の行では、再びコンソールに値が記録され、 `history.state` に値があることが分かります。

```js
// まだ履歴スタックを変更していないため、 null になります
console.log("History.state before pushState: ", history.state);

// スタックに何かプッシュします
history.pushState({ name: "Example" }, "pushState example", "page3.html");

// 状態は値になりました。
console.log("History.state after pushState: ", history.state);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [履歴 API での作業](/ja/docs/Web/API/History_API/Working_with_the_History_API)
- [`History.pushState()`](/ja/docs/Web/API/History/pushState)
- [`History.replaceState()`](/ja/docs/Web/API/History/replaceState)
- [`PopStateEvent.state`](/ja/docs/Web/API/PopStateEvent/state)
