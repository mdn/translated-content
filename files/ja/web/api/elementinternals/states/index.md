---
title: "ElementInternals: states プロパティ"
short-title: states
slug: Web/API/ElementInternals/states
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("Web Components")}}

**`states`** は {{domxref("ElementInternals")}} インターフェイスの読み取り専用プロパティで、カスタム要素の取りうる状態を表す {{domxref("CustomStateSet")}} を返します。

## 値

{{domxref("CustomStateSet")}} です。これは文字列の {{jsxref("Set")}} です。

## 例

以下の関数は `CustomStateSet` に `--checked` という状態を追加・除去し、カスタムチェックボックスがチェックされたりチェックが外れたりすると `true` または `false` をコンソールに出力します。

```js
set checked(flag) {
  if (flag) {
    this._internals.states.add('--checked');
  } else {
    this._internals.states.delete('--checked');
  }

  console.log(this._internals.states.has('--checked'));
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
