---
title: "PopStateEvent: state プロパティ"
short-title: state
slug: Web/API/PopStateEvent/state
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("History API") }}

**`state`** は {{domxref("PopStateEvent")}} インターフェイスの読み取り専用プロパティで、このイベントが生成されたときに格納された状態を表します。

実質的には、 {{domxref("history.pushState()")}} または {{domxref("history.replaceState()")}} の呼び 出しによって指定された値です。

## 値

オブジェクト、または `null` です。

## 例

以下のコードでは、 {{domxref("History.pushState","pushState()")}} メソッドを使って値を履歴にプッシュしたときの `state` の値を記録しています。

```js
// Log the state of
addEventListener("popstate", (event) => {
  console.log("State received: ", event.state);
});

// Now push something on the stack
history.pushState({ name: "Example" }, "pushState example", "page1.html");
history.pushState(
  { name: "Another example" },
  "pushState example",
  "page1.html",
);
```

次のようにログ出力します。

```plain
State received: { name: "Example" }
State received: { name: "Another example" }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PopStateEvent()")}} コンストラクター
- {{domxref("History.state")}}
