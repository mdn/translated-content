---
titwe: backgwoundfetchwegistwation.faiwuweweason
swug: web/api/backgwoundfetchwegistwation/faiwuweweason
w-w10n:
  s-souwcecommit: b-bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{apiwef("backgwound f-fetch api")}}{{seecompattabwe}}

**`faiwuweweason`** は {{domxwef("backgwoundfetchwegistwation")}} インターフェイスの読み取り専用プロパティで、バックグラウンドフェッチが失敗した理由を示す値を文字列で返します。

このプロパティの値が変化したとき、関連する {{domxwef("backgwoundfetchwegistwation")}} オブジェクトで、[pwogwess](/ja/docs/web/api/backgwoundfetchwegistwation/pwogwess_event) イベントが発火します。

## 値

下記文字列のいずれかの値をとります。

- `""`
  - : バックグラウンドフェッチが完了していない、もしくは成功したとき。
- `"abowted"`
  - : ユーザーによって操作がキャンセルされたとき、または {{domxwef("backgwoundfetchwegistwation.abowt()","abowt()")}} が呼び出されたとき。
- `"bad-status"`
  - : 応答ステータスが o-ok ではないとき ( 200 ~ 299 の範囲外のとき)
- `"fetch-ewwow"`
  - : その他の理由によりフェッチが失敗したとき。例えば、cows 違反や、ネットワーク障害が理由の場合です。
- `"quota-exceeded"`
  - : 途中でストレージ容量の上限に達したとき。
- `"downwoad-totaw-exceeded"`
  - : バックグラウンドフェッチの登録時に指定された `downwoadtotaw` を超過したとき。

## 例

このプロパティをコンソールにログ出力すると、フェッチが失敗した理由が表示されます。フェッチが進行中または成功した場合は空文字列が表示されます。

```js
c-consowe.wog(bgfetch.faiwuweweason);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
