---
title: "File: lastModifiedDate プロパティ"
short-title: lastModifiedDate
slug: Web/API/File/lastModifiedDate
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}{{Non-standard_Header}}

**`lastModifiedDate`** は {{domxref("File")}} インターフェイスの読み取り専用プロパティで、ファイルの最終更新日を返します。最終更新日がわからないファイルは、現在の日付を返します。

## 値

{{JSXRef("Global_Objects/Date", "Date")}} オブジェクトで、ファイルが最後に変更された日時を表します。

## 例

```js
// fileInput は HTMLInputElement である <input type="file" multiple id="myfileinput">
const fileInput = document.getElementById("myfileinput");

for (const file of fileInput.files) {
  console.log(`${file.name} の最終更新日は ${file.lastModifiedDate}`);
}
```

## 時間の精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)に対する保護機能を提供するために、 `someFile.lastModified` の精度がブラウザーの設定に応じて丸められることがあります。
Firefox では、`privacy.reduceTimerPrecision` 設定は既定で有効になっており、既定で 2 ミリ秒になります。この場合、精度は 100ms または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のどちらか大きい方になります。

例えば、時刻の精度を下げた場合、`someFile.lastModified` の結果は常に 2 の倍数になり、`privacy.resistFingerprinting` を有効にした場合は 100 の倍数（または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）になります。

```js
// Firefox 60 での時間の制度の低下 (2ms)
someFile.lastModified;
// 取りうる値:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// `privacy.resistFingerprinting` が有効な場合の時間の制度の低下
someFile.lastModified;
// 取りうる値:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## 仕様書

_ファイル API 仕様の初期の草稿にありますが、このプロパティは削除されており、現在は標準外です。代わりに {{domxref("File.lastModified")}} を使用してください。_

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("File")}}
