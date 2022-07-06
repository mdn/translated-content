---
title: File.lastModified
slug: Web/API/File/lastModified
tags:
  - API
  - File API
  - ファイル
  - プロパティ
  - リファレンス
browser-compat: api.File.lastModified
translation_of: Web/API/File/lastModified
---
{{APIRef("File")}}

**`File.lastModified`** は読み取り専用プロパティで、ファイルの最終更新日時を UNIX 元期 (1970 年 1 月 1 日の深夜 0 時) からのミリ秒数で返します。最終更新日時が分からないファイルは、現在の日時を返します。

## 構文

```js
const time = instanceOfFile.lastModified;
```

### 値

UNIX 元気からのミリ秒数を表す数値です。

## 例

### file 入力欄からの読み込み

```html
<input type="file" multiple id="fileInput">
```

```js
const fileInput = document.querySelector('#fileInput');
fileInput.addEventListener('change', (event) => {
  // filesはFileList型オブジェクト (NodeListと似ている)
  const files = event.target.files;

  for (let file of files) {
    const date = new Date(file.lastModified);
    console.log(`${file.name} has a last modified date of ${date}`);
  }
});
```

以下の結果を試してみてください。

{{ EmbedLiveSample('Reading_from_file_input', 300, 50) }}

### 動的に生成されるファイル

ファイルが動的に生成された場合、最終更新日時は {{domxref("File.File()", "new File()")}} コンストラクター関数で指定することができます。ファイルが見つからない場合、 `lastModified` は `File` オブジェクトの作成時に {{jsxref("Date.now()")}} から現在の時刻を継承します。

```js
const fileWithDate = new File([], 'file.bin', {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); //returns 1485903600000

const fileWithoutDate = new File([], 'file.bin');
console.log(fileWithoutDate.lastModified); //returns current time
```

## 時間の精度の低下

タイミング攻撃やフィンガープリンティングに対する保護機能を提供するために、 `someFile.lastModified` の精度がブラウザーの設定に応じて丸められることがあります。
Firefox では、`privacy.reduceTimerPrecision` 設定は既定で有効になっており、 Firefox 59 では既定で 20 us に設定されています。60 で 2 ms になります。

```js
// Firefox 60 での時間の制度の低下 (2ms)
someFile.lastModified;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// `privacy.resistFingerprinting` が有効な場合の時間の制度の低下
someFile.lastModified;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

Firefox では、`privacy.resistFingerprinting` を有効にすることもできます。精度は 100ms か `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` のいずれか大きい方の値になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("File")}}
