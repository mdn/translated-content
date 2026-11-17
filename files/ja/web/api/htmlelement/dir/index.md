---
title: "HTMLElement: dir プロパティ"
short-title: dir
slug: Web/API/HTMLElement/dir
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

**`HTMLElement.dir`** プロパティは、現在の要素のコンテンツの書字方向を示します。このプロパティは、要素の [`dir`](/ja/docs/Web/HTML/Reference/Global_attributes/dir) 属性を反映します。

なお、`dir` 属性が指定されていない場合でも、要素自体は親要素から書字方向を継承することがあります。ただし、この継承された書字方向は、このプロパティの値には反映されません。

要素のテキストの書字方向とは、テキストがどちらの方向へ進むかを示すものです（さまざまな言語体系に対応するため）。アラビア語やヘブライ語は、右書きの書字方向を使用する代表的な言語です。

## 値

次のいずれかです。

- `"ltr"`
  - : 左書き
- `"rtl"`
  - : 右書き
- `"auto"`
  - : 要素の書字方向は、その内容に基づいて決定されます。
- `""`
  - : デフォルト値です。親要素から書字方向を継承します。

## 例

```js
const para = document.getElementById("para1");
para.dir = "rtl";
// "para1" で識別される段落の書字方向を変更
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.dir")}}
- HTML の [`dir`](/ja/docs/Web/HTML/Reference/Global_attributes/dir) グローバル属性
- CSS の {{cssxref("direction")}} プロパティ
- CSS の {{cssxref(":dir")}} 擬似クラス
