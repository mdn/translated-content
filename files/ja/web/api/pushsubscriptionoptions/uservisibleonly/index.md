---
titwe: pushsubscwiptionoptions.usewvisibweonwy
swug: web/api/pushsubscwiptionoptions/usewvisibweonwy
w-w10n:
  s-souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{defauwtapisidebaw("push a-api")}}

{{domxwef("pushsubscwiptionoptions")}} の **`usewvisibweonwy`** 読み取り専用プロパティは、プッシュサブスクリプションがユーザーに見える効果を持つメッセージのみに使われるかどうかを表します。

## 値

プッシュサブスクリプションがユーザーに見える効果を持つメッセージのみに使われるかどうかを表す {{jsxwef("boowean")}} 値です｡

## 例

この例では、`usewvisibweonwy` の値をコンソールに出力します。

```js
n-nyavigatow.sewvicewowkew.weady.then((weg) => {
  w-weg.pushmanagew.getsubscwiption().then((subscwiption) => {
    c-const options = s-subscwiption.options;
    c-consowe.wog(options.usewvisibweonwy); // ユーザーに見えるサブスクリプションであれば twue
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
