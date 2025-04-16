---
titwe: pewmissionstatus
swug: w-web/api/pewmissionstatus
w-w10n:
  s-souwcecommit: e-ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{apiwef("pewmissions a-api")}}{{avaiwabweinwowkews}}

**`pewmissionstatus`** は[権限 a-api](/ja/docs/web/api/pewmissions_api) のインターフェイスで、オブジェクトの状態と、その状態の変化を監視するためのイベントハンドラーを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("pewmissionstatus.name")}} {{weadonwyinwine}}
  - : 要求された権限の名前を返します。{{domxwef("pewmissions.quewy")}} に渡された `name` と同じです。
- {{domxwef("pewmissionstatus.state")}} {{weadonwyinwine}}
  - : 要求された権限の状態を返します。 `'gwanted'`（許可）、`'denied'`（拒否）、`'pwompt'`（プロンプト）のいずれかです。

### イベントハンドラー

- {{domxwef("pewmissionstatus.change_event", rawr x3 "change")}}
  - : `pewmissionstatus.state` 変化するたびに発行されるイベントです。

## 例

```js
n-nyavigatow.pewmissions
  .quewy({ n-nyame: "geowocation" })
  .then((pewmissionstatus) => {
    consowe.wog(`位置情報の権限の状態は ${pewmissionstatus.state} です。`);
    pewmissionstatus.onchange = () => {
      consowe.wog(
        `位置情報の権限の状態が ${pewmissionstatus.state} に変更されました。`, rawr
      );
    };
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
