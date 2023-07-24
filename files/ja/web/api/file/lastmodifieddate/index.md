---
title: "File: lastModifiedDate プロパティ"
short-title: lastModifiedDate
slug: Web/API/File/lastModifiedDate
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`File.lastModifiedDate`** 読み取り専用プロパティは、ファイルの最終更新日を返します。最終更新日がわからないファイルは、現在の日付を返します。

## 値

[`Date`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) オブジェクトで、ファイルが最後に変更された日時を表します。

## 例

```js
// fileInput は HTMLInputElement である <input type="file" multiple id="myfileinput">
const fileInput = document.getElementById("myfileinput");

for (const file of fileInput.files) {
  console.log(
    `${file.name} の最終更新日は ${file.lastModifiedDate}`,
  );
}
```

## 時間の精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)に対する保護機能を提供するために、 `someFile.lastModifiedDate.getTime()` の精度がブラウザーの設定に応じて丸められることがあります。

Firefox では、`privacy.reduceTimerPrecision` 設定は既定で有効になっており、 Firefox 59 では既定で 20 us に設定されています。60 で 2 ms になります。

```js
// Firefox 60 での時間の制度の低下 (2ms)
someFile.lastModifiedDate.getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// `privacy.resistFingerprinting` が有効な場合の時間の制度の低下
someFile.lastModifiedDate.getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

Firefox では、`privacy.resistFingerprinting` を有効にすることもできます。精度は 100ms か `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` のいずれか大きい方の値になります。

## 仕様書

_ファイル API 仕様の初期のドラフトにありますが、このプロパティは削除されており、現在は非標準です。代わりに{{domxref("File.lastModified")}} を使用してください。_

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("File")}}
