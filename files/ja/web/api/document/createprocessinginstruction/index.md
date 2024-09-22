---
title: "Document: createProcessingInstruction() メソッド"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

`createProcessingInstruction()` は新しい[処理命令](/ja/docs/Web/API/ProcessingInstruction)ノードを生成して返します。

新しいノードは {{ domxref("node.insertBefore") }} のように、あらゆることを成立させるために XML 文書に挿入されます。

## 構文

```js-nolint
createProcessingInstruction(target, data)
```

### 引数

- `piNode` は結果の {{ domxref("ProcessingInstruction") }} ノードです。
- `target` は処理命令の最初の部分 (つまり `<?target … ?>`) を含む文字列です。
- `data` は target の後に処理命令が伝えるすべての情報を含む文字列です。このデータはあなた次第ですが、 `?>` は処理命令を閉じるので含むことができません。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidCharacterError` {{domxref("DOMException")}}

  - : 以下の何れかが真になると例外が発生します。

    - 処理命令の [`target`](#target) の値が有効な [XML 名](https://www.w3.org/TR/REC-xml/#dt-name) ではない場合、例えば、数値、ハイフン、ピリオドなどで始まったり、英数字、アンダースコア、ハイフン、ピリオド以外の文字を含んでいたりする場合。
    - _closing processing instruction sequence_ (`?>`) が [`data`](#data) に含まれている場合。

## 例

```js
const doc = new DOMParser().parseFromString("<foo />", "application/xml");
const pi = doc.createProcessingInstruction(
  "xml-stylesheet",
  'href="mycss.css"',
);

doc.insertBefore(pi, doc.firstChild);

console.log(new XMLSerializer().serializeToString(doc));
// 表示結果: <?xml-stylesheet href="mycss.css" type="text/css"?><foo/>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
