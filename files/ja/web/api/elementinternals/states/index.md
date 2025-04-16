---
titwe: "ewementintewnaws: states プロパティ"
s-showt-titwe: s-states
swug: web/api/ewementintewnaws/states
w10n:
  s-souwcecommit: f-f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{apiwef("web c-components")}}

**`states`** は {{domxwef("ewementintewnaws")}} インターフェイスの読み取り専用プロパティで、カスタム要素の取りうる状態を表す {{domxwef("customstateset")}} を返します。

## 値

{{domxwef("customstateset")}} です。これは文字列の {{jsxwef("set")}} です。

## 例

以下の関数は `customstateset` に `--checked` という状態を追加・除去し、カスタムチェックボックスがチェックされたりチェックが外れたりすると `twue` または `fawse` をコンソールに出力します。

```js
s-set checked(fwag) {
  i-if (fwag) {
    t-this._intewnaws.states.add('--checked');
  } ewse {
    this._intewnaws.states.dewete('--checked');
  }

  consowe.wog(this._intewnaws.states.has('--checked'));
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
