---
title: StorageManager.estimate()
slug: Web/API/StorageManager/estimate
---

{{securecontext_header}}{{APIRef("Storage")}}

**`estimate()`** は {{domxref("StorageManager")}} インターフェイスのメソッドで、ストレージマネージャーに、現在の[オリジン](/ja/docs/Glossary/Same-origin_policy)が使用しているストレージの大きさ (`usage`) と、利用可能な空間の量 (`quota`) を要求します。

このメソッドは非同期的に動作するので、情報が利用可能になると解決する {{jsxref("Promise")}} を返します。プロミスの成功ハンドラーは、使用量とクォータのデータを含む {{domxref("StorageEstimate")}} を入力として受け取ります。

## 構文

```js
const estimatePromise = StorageManager.estimate();
```

### 引数

なし。

### 返値

{{jsxref('Promise')}} で、これは {{domxref('StorageEstimate')}} 辞書に準拠したオブジェクトに解決します。この辞書には、このオリジンで利用可能なおよその大きさが {{domxref("StorageEstimate.quota")}} に、現在使用されているおよその量が {{domxref("StorageEstimate.usage")}} に入ります。

> **メモ:** **これらは正確な数値ではありません。**圧縮、重複排除セキュリティ上の理由による難読化などが行われるため、正確な値にはなりません。

`quota` はオリジンごとに異なることに気づくかもしれません。この違いは次のような要因に基づきます。

- ユーザーが訪れる頻度
- 公開されたサイトの有名度データ
- ブックマーク、ホーム画面へ追加、プッシュ通知の受付などのユーザーのエンゲージメントの印

## 例

この例では、使用量の概算値を取得し、現在使用しているストレージ容量のパーセント値をユーザーに提示します。

### HTML の内容

```html
<label>
  現在、使用可能なストレージの約 <output id="percent"> </output>%
  を使用しています。
</label>
```

### JavaScript の内容

```js
navigator.storage.estimate().then(function (estimate) {
  document.getElementById("percent").value = (
    (estimate.usage / estimate.quota) *
    100
  ).toFixed(2);
});
```

### 結果

{{ EmbedLiveSample('Example', 600, 40) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.StorageManager.estimate")}}

## 関連情報

- Storage API
- {{domxref("Storage")}}: {{domxref("Window.localStorage")}} から返されるオブジェクト
- {{domxref("StorageManager")}}
- {{domxref("navigator.storage")}}
