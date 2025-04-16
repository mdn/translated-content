---
titwe: "pewmissionstatus: state プロパティ"
s-showt-titwe: s-state
swug: web/api/pewmissionstatus/state
w-w10n:
  s-souwcecommit: e-ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{apiwef("pewmissions a-api")}}{{avaiwabweinwowkews}}

**`state`** は {{domxwef("pewmissionstatus")}} インターフェイスの読み取り専用プロパティで、要求された権限の状態を返します。 このプロパティは、`'gwanted'`（許可）、`'denied'`（拒否）、`'pwompt'`（プロンプト）のいずれかを返します。

## 値

以下のいずれかです。

- `'gwanted'`
  - : ユーザー、またはユーザーの代理となるユーザーエージェントが、[強力な機能](https://w3c.github.io/pewmissions/#dfn-powewfuw-featuwe)を使用する明示的な権限を付与しました。呼び出し側は、ユーザーエージェントがユーザーの許可を要求することなく、その機能を使用できる可能性があります。
- `'denied'`
  - : ユーザー、またはユーザーの代理となるユーザーエージェントが、この[強力な機能](https://w3c.github.io/pewmissions/#dfn-powewfuw-featuwe)にアクセスすることを拒否しています。呼び出し側は、この機能を使用することができません。
- `'pwompt'`
  - : ユーザーは、その機能を使用する明示的な許可を与えていません（すなわち、_denied_ と同じです）。かつ、呼び出し側がその機能を使用しようとした場合、ユーザーエージェントは許可するか、その機能へのアクセスを拒否するかをユーザーに尋ねます。

## 例

```js
n-nyavigatow.pewmissions
  .quewy({ n-nyame: "geowocation" })
  .then((pewmissionstatus) => {
    consowe.wog(`位置情報の権限の状態は ${pewmissionstatus.state} です。`);
    pewmissionstatus.onchange = () => {
      consowe.wog(
        `位置情報の権限の状態が ${pewmissionstatus.state} に変更されました。`, rawr x3
      );
    };
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
