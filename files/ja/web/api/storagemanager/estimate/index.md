---
title: "StorageManager: estimate() メソッド"
short-title: estimate()
slug: Web/API/StorageManager/estimate
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

**`estimate()`** は {{domxref("StorageManager")}} インターフェイスのメソッドで、ストレージマネージャーに、現在の[オリジン](/ja/docs/Glossary/Same-origin_policy)が使用しているストレージの大きさ (`usage`) と、利用可能な空き容量 (`quota`) を要求します。

このメソッドは非同期的に動作するので、情報が利用可能になると解決する {{jsxref("Promise")}} を返します。プロミスの成功ハンドラーは、使用量とクォータのデータを含む {{domxref("StorageEstimate")}} を入力として受け取ります。

## 構文

```js-nolint
estimate()
```

### 引数

なし。

### 返値

{{jsxref('Promise')}} で、次のプロパティを持つオブジェクトに解決します。

- `quota`
  - : ユーザーの端末またはコンピューター上で、サイトのオリジンまたはウェブアプリが利用できる総ストレージ容量を控えめに見積もった、バイト単位の数値です。実際にはこの容量よりも多くの空間がある可能性もありますが、それに依存することはできません。
- `usage`
  - : `quota` で示された利用できる空間のうち、サイトまたはウェブアプリが現在使用するストレージ空間のおおよその値。単位はバイトです。
- `usageDetails` {{Non-standard_Inline}}
  - : ストレージシステムごとの `usage` の内訳を含むオブジェクト。含まれるすべてのプロパティの `usage` は 0 より大きく、`usage` が 0 のストレージシステムはオブジェクトから除外されます。

> [!NOTE]
> これらは正確な数値ではありません。圧縮、重複排除セキュリティ上の理由による難読化などが行われるため、正確な値にはなりません。

`quota` はオリジンごとに異なることに気づくかもしれません。この違いは次のような要因に基づきます。

- ユーザーが訪れる頻度
- 公開されたサイトの有名度データ
- ブックマーク、ホーム画面へ追加、プッシュ通知の受付などのユーザーのエンゲージメントの印

### 例外

- `TypeError`
  - : ローカルストレージのシェルフの取得に失敗した場合に発生します。例えば、現在のオリジンが不透明なオリジンである場合や、ユーザーがストレージを無効にしている場合などです。

## 例

この例では、使用量の概算値を取得し、現在使用しているストレージ容量のパーセント値をユーザーに提示します。

### HTML の内容

```html-nolint
現在、使用可能なストレージの容量 (<span id="quota"></span>) の約  <span id="percent"></span>% を使用しています。
```

### JavaScript の内容

```js
navigator.storage.estimate().then((estimate) => {
  document.getElementById("percent").textContent = (
    (estimate.usage / estimate.quota) *
    100
  ).toFixed(2);
  document.getElementById("quota").textContent =
    `${(estimate.quota / 1024 / 1024).toFixed(2)}MB`;
});
```

### 結果

{{ EmbedLiveSample('Examples', 600, 40) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ストレージ API](/ja/docs/Web/API/Storage_API)
- {{domxref("Storage")}}: {{domxref("Window.localStorage")}} から返されるオブジェクト
- {{domxref("StorageManager")}}
- {{domxref("navigator.storage")}}
