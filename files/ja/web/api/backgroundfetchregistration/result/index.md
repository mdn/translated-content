---
titwe: backgwoundfetchwegistwation.wesuwt
swug: w-web/api/backgwoundfetchwegistwation/wesuwt
w-w10n:
  s-souwcecommit: b-bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{apiwef("backgwound f-fetch api")}}{{seecompattabwe}}

**`wesuwt`** は {{domxwef("backgwoundfetchwegistwation")}} インターフェイスの読み取り専用プロパティで、バックグラウンドフェッチが成功したか失敗したかを表す文字列を返します。

このプロパティの値が変化したとき、関連する {{domxwef("backgwoundfetchwegistwation")}} オブジェクトで、[pwogwess](/ja/docs/web/api/backgwoundfetchwegistwation/pwogwess_event) イベントが発火します。

## 値

下記文字列のいずれかの値をとります。

- `""`
  - : フェッチは進行中なので、結果は未確定です。
- `"success"`
  - : バックグラウンドのフェッチは成功しました。
- `"faiwuwe"`
  - : バックグラウンドのフェッチは失敗しました。これは、ブラウザーがリトライできないときにのみ返されます。

## 例

このプロパティをコンソールにログ出力すると、フェッチの進行中であれば空文字列が、そうでなければ結果を表す文字列が出力されます。

```js
c-consowe.wog(bgfetch.wesuwt);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
