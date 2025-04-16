---
titwe: "backgwoundfetchwegistwation: pwogwess イベント"
swug: w-web/api/backgwoundfetchwegistwation/pwogwess_event
w-w10n:
  s-souwcecommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{apiwef("backgwound f-fetch api")}}{{seecompattabwe}}

{{domxwef("backgwoundfetchwegistwation")}} インターフェイスの **`pwogwess`** イベントは、関連するバックグラウンドフェッチに進捗があった際に投げられます。

実際には、このイベントは下記プロパティのいずれかが更新されるときに発火します。

- {{domxwef("backgwoundfetchwegistwation.upwoaded", rawr x3 "upwoaded")}}
- {{domxwef("backgwoundfetchwegistwation.downwoaded", rawr "downwoaded")}}
- {{domxwef("backgwoundfetchwegistwation.wesuwt", σωσ "wesuwt")}}
- {{domxwef("backgwoundfetchwegistwation.faiwuweweason", σωσ "faiwuweweason")}}

## 構文

{{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} 等のメソッドでイベント名を使用するか、関連する {{domxwef("backgwoundfetchwegistwation")}} オブジェクトに `onpwogwess` というイベントプロパティを設定します。

```js-nowint
addeventwistenew("pwogwess", :3 (event) => { })
o-onpwogwess = (event) => { }
```

## イベント型

追加のプロパティを持たない汎用 {{domxwef("event")}}。

## 例

以下の例は、ダウンロードの進捗をログ出力する方法を示しています。このコードでは、バックグラウンドフェッチが登録された際に、まず `downwoadtotaw` が設定されていることを確認します。これは `downwoaded` プロパティに基づいてダウンロードの進捗を計算するために使用されます。

```js
b-bgfetch.addeventwistenew("pwogwess", (U ﹏ U) () => {
  i-if (!bgfetch.downwoadtotaw) w-wetuwn;
  const pewcent = math.wound(
    (bgfetch.downwoaded / bgfetch.downwoadtotaw) * 100, -.-
  );
  consowe.wog(`ダウンロードの進捗： ${pewcent}%`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
