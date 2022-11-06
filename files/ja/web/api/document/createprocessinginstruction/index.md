---
title: Document.createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
---

{{APIRef("DOM")}}

`createProcessingInstruction()` は新しい[処理命令](/ja/docs/Web/API/ProcessingInstruction)ノードを生成して返します。

新しいノードは {{ domxref("node.insertBefore") }} のように、あらゆることを成立させるために XML 文書に挿入されます。

## 構文

```js
piNode = document.createProcessingInstruction(target, data)
```

### 引数

- `piNode` は結果の {{ domxref("ProcessingInstruction") }} ノードです。
- `target` は処理命令の最初の部分 (つまり `<?target … ?>`) を含む文字列です。
- `data` は target の後に処理命令が伝えるすべての情報を含む文字列です。このデータはあなた次第ですが、 `?>` は処理命令を閉じるので含むことができません。

### 例外

- `DOM_INVALID_CHARACTER`

  - : 以下の何れかが真になると例外を投げます。

    - 処理命令の **_target_** が無効である — 有効な *[XML 名](https://www.w3.org/TR/REC-xml/#dt-name)*とは、 "xml", "XML" またはその 2 つの大文字・小文字の組み合わせであり、 `<?xml-stylesheet ?>` のような標準化されたものではないものです。
    - _closing processing instruction sequence_ (`?>`) が`data` に含まれている。

## 例

```js
var doc = new DOMParser().parseFromString('<foo />', 'application/xml');
var pi = doc.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');

doc.insertBefore(pi, doc.firstChild);

console.log(new XMLSerializer().serializeToString(doc));
// Displays: <?xml-stylesheet href="mycss.css" type="text/css"?><foo/>
```

## 仕様書

| 仕様書                                                                                                                                       | 状態                             | 備考                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-document-createprocessinginstruction', 'createProcessingInstruction()')}} | {{Spec2('DOM WHATWG')}} | 変更なし                                                                                                                                                                                             |
| {{SpecName('DOM4', '#dom-document-createprocessinginstruction', 'createProcessingInstruction()')}}         | {{Spec2('DOM4')}}         | `data` 引数の検証方法のもっと詳細な定義を追加した。                                                                                                                                                  |
| {{SpecName('DOM3 Core', 'core.html#ID-135944439', 'createProcessingInstruction()')}}                             | {{Spec2('DOM3 Core')}}     | 対象名の名前空間が正しい形式かどうかチェックされないこと、どの文字が対象名に違反するかの定義、返された {{domxref("ProcessingInstruction")}} オブジェクトのより詳細についてのメモを追加。 |
| {{SpecName('DOM2 Core', 'core.html#ID-135944439', 'createProcessingInstruction()')}}                             | {{Spec2('DOM2 Core')}}     | 変更なし                                                                                                                                                                                             |
| {{SpecName('DOM1', 'level-one-core.html#ID-135944439', 'createProcessingInstruction()')}}                     | {{Spec2('DOM1')}}         | 初回定義                                                                                                                                                                                             |

## ブラウザーの互換性

{{Compat}}
