---
title: "Navigator: getGamepads() メソッド"
short-title: getGamepads()
slug: Web/API/Navigator/getGamepads
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

**`Navigator.getGamepads()`** メソッドは {{domxref("Gamepad")}} の配列を返します。それぞれがこの端末に接続されているゲームパッドを表します。

セッション中にゲームパッドが切断された場合、配列の要素は `null` になる可能性がありますので、残りのゲームパッドは同じインデックスを保持します。

## 構文

```js-nolint
getGamepads()
```

### 引数

なし。

### 返値

{{domxref("Gamepad")}} の配列 ({{jsxref("Array")}}) で、空になることもあります。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)によって、この機能の使用がブロックされた場合。

## 例

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    `Gamepad connected at index ${gp.index}: ${gp.id} with ${gp.buttons.length} buttons, ${gp.axes.length} axes.`,
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ゲームパッド API の使用](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [ゲームパッド API](/en-US/docs/Web/API/Gamepad_API)
