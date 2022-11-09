---
title: BackgroundFetchRegistration.failureReason
slug: Web/API/BackgroundFetchRegistration/failureReason
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`failureReason`** は {{domxref("BackgroundFetchRegistration")}} インターフェイスの読み取り専用プロパティで、バックグラウンドフェッチが失敗した理由を示す値を文字列で返します。

このプロパティの値が変化したとき、関連する {{domxref("BackgroundFetchRegistration")}} オブジェクトで、[progress](/ja/docs/Web/API/BackgroundFetchRegistration/progress_event) イベントが発火します。

## 値

下記文字列のいずれかの値をとります。

- `""`
  - : バックグラウンドフェッチが完了していない、もしくは成功したとき。
- `"aborted"`
  - : ユーザーによって操作がキャンセルされたとき、または {{domxref("BackgroundFetchRegistration.abort()","abort()")}} が呼び出されたとき。
- `"bad-status"`
  - : 応答ステータスが OK ではないとき ( 200 ~ 299 の範囲外のとき)
- `"fetch-error"`
  - : その他の理由によりフェッチが失敗したとき。例えば、CORS 違反や、ネットワーク障害が理由の場合です。
- `"quota-exceeded"`
  - : 途中でストレージ容量の上限に達したとき。
- `"download-total-exceeded"`
  - : バックグラウンドフェッチの登録時に指定された `downloadTotal` を超過したとき。

## 例

このプロパティをコンソールにログ出力すると、フェッチが失敗した理由が表示されます。フェッチが進行中または成功した場合は空文字列が表示されます。

```js
console.log(bgFetch.failureReason);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
