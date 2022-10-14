---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
---

{{HTMLSidebar("Global_attributes")}}

**`spellcheck`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、要素でスペルミスのチェックを行うかを定義する列挙型属性です。

{{EmbedInteractiveExample("pages/tabbed/attribute-spellcheck.html","tabbed-shorter")}}

以下の値を使用できます。

- `true`: 可能であればその要素でスペルチェックを行うことを示す
- `false`: その要素でスペルチェックを行わないことを示す

> **メモ:** `spellcheck` 属性は*列挙型*であり、*論理属性*ではありません。これは、 `true` または `false` のどちらかを明確に使用することが必須であり、 `<textarea spellcheck></textarea>` のような省略形は使用できないということです。正しい使い方は `<textarea spellcheck="true"></textarea>` です。

この属性を設定しなかった場合の既定値は、要素の種類やブラウザーによって定義されます。既定値は*継承*されます。つまりもっとも近い祖先要素の _spellcheck_ が `true` である場合にのみ、自身もスペルチェックを受けることがあります。

この属性は単に、ブラウザーに対する助言です。ブラウザーがスペルチェックを有効にすることを求められてはいません。一般的に編集不可能な要素は、 `spellcheck` 属性を `true` に設定してブラウザーがスペルチェックに対応していても、スペルチェックされません。

## 仕様書

| 仕様書                                                                                                                   | 状態                             | 備考                                                                       |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "interaction.html#spelling-and-grammar-checking", "spellcheck")}} | {{Spec2('HTML WHATWG')}} | 最新のスナップショットである {{SpecName('HTML5.1')}} から変更なし |
| {{SpecName('HTML5.1', "editing.html#spelling-and-grammar-checking", "spellcheck")}}         | {{Spec2('HTML5.1')}}     | {{SpecName('HTML WHATWG')}}、初回定義のスナップショット           |

## ブラウザーの互換性

{{Compat("html.global_attributes.spellcheck")}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)
