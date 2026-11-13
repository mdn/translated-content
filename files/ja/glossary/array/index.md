---
title: Array (配列)
slug: Glossary/Array
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**配列**は、データ（言語によって{{Glossary("primitive","プリミティブ")}}または{{Glossary("object","オブジェクト")}}のどちらか）が順序付けされて集まったものです。配列は 1 つの変数に複数の値を格納するために使用されます。これは 1 つしか値を格納できない変数とは対照的です。

配列内のそれぞれのアイテムには添字と呼ばれる番号が割り当てられており、それによって各アイテムにアクセスすることができます。 JavaScript では、配列の添字は 0 から始まり、さまざまな{{Glossary("Method", "メソッド")}}で操作することができます。

JavaScript における配列の利用例は以下の通りです。

```js
// JavaScript の配列は、異なる種類のデータを保持することができる
const myArray = [1, 2, 3, 4];
const barbieDollNamesArray = ["Barbie", "Ken", "Midge", "Allan", "Skipper"];

// 配列の添字は 0 から始まる
console.log(myArray[0]); // 出力: 1
console.log(barbieDollNamesArray[2]); // 出力: "Midge"
```

## 関連上表

- JavaScript の {{jsxref("Array")}}
