---
title: File.lastModifiedDate
slug: Web/API/File/lastModifiedDate
tags:
  - API
  - 非推奨
  - File
  - File API
  - ファイル
  - プロパティ
  - 読み取り専用
  - リファレンス
  - lastModifiedDate
browser-compat: api.File.lastModifiedDate
translation_of: Web/API/File/lastModifiedDate
---
{{APIRef("File API") }} {{deprecated_header}}

**`File.lastModifiedDate`** 読み取り専用プロパティは、ファイルの最終更新日を返します。最終更新日がわからないファイルは、現在の日付を返します。

## 構文

```js
var time = instanceOfFile.lastModifiedDate
```

### 値

[`Date`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) オブジェクトで、ファイルが最後に変更された日時を表します。

## 例

```js
// fileInput は HTMLInputElement である <input type="file" multiple id="myfileinput">
var fileInput = document.getElementById("myfileinput");

// files は (NodeList に似た) FileList オブジェクト
var files = fileInput.files;

for (var i = 0; i < files.length; i++) {
  alert(files[i].name + " の最終更新日は  " + files[i].lastModifiedDate);
}
```

## 時間の精度の低下

タイミング攻撃やフィンガープリンティングに対する保護機能を提供するために、 `someFile.lastModifiedDate.getTime()` の精度がブラウザーの設定に応じて丸められることがあります。

Firefox では、`privacy.reduceTimerPrecision` 設定は既定で有効になっており、 Firefox 59 では既定で 20 us に設定されています。60 で 2 ms になります。

```js
// Firefox 60 での時間の制度の低下 (2ms)
someFile.lastModifiedDate.getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// `privacy.resistFingerprinting` が有効な場合の時間の制度の低下
someFile.lastModifiedDate.getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

Firefox では、`privacy.resistFingerprinting` を有効にすることもできます。精度は 100ms か `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` のいずれか大きい方の値になります。

## 仕様書

_File API 仕様の初期のドラフトにありますが、このプロパティは削除されており、現在は非標準です。代わりに{{domxref("File.lastModified")}} を使用してください。_

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("File")}}
