---
title: History.state
slug: Web/API/History/state
tags:
  - API
  - HTML DOM
  - History
  - 履歴 API
  - プロパティ
  - リファレンス
browser-compat: api.History.state
translation_of: Web/API/History/state
---
{{APIRef("History API")}}

**`History.state`** プロパティは、履歴スタックの一番上の状態を表す値を返します。これは {{domxref("Window/popstate_event", "popstate")}} イベントを待つことなく、状態を見ることができる方法です。

## 構文

```js
const currentState = history.state
```

### 値

履歴スタックの一番上の状態です。この値は {{domxref("History.pushState","pushState()")}} または {{domxref("History.replaceState","replaceState()")}} メソッドが使用されていない限り {{jsxref("null")}} です。

## 例

以下のコードでは、 `history.state` の値を {{domxref("History.pushState", "pushState()")}} メソッドを使用して値を履歴にプッシュする前に、ログに記録しています。
次の行では、再びコンソールに値が記録され、 `history.state` に値があることが分かります。

```js
// まだ履歴スタックを変更していないため、 null になります
console.log(`History.state before pushState: ${history.state}`);

// スタックに何かプッシュします
history.pushState({name: 'Example'}, "pushState example", 'page3.html');

// 状態は値になりました。
console.log('History.state after pushState: ', history.state);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [履歴 API での作業](/ja/docs/Web/API/History_API/Working_with_the_History_API)
- [`History.pushState()`](/ja/docs/Web/API/History/pushState)
- [`History.replaceState()`](/ja/docs/Web/API/History/replaceState)
