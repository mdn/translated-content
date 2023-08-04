---
title: Enumerated (列挙型)
slug: Glossary/Enumerated
l10n:
  sourceCommit: 4bd65a01204446af2254bb8864bd22ad87bc86b0
---

コンピューター科学では、**列挙**型は、名前の付いた値の限られた集合からなるデータ型です。

## HTML 列挙型属性

HTMLでは、[列挙型属性](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute)は、限定された、あらかじめ設定されたテキスト値の集合を持つ属性です。例えば、グローバル HTML の [`dir`](/ja/docs/Web/HTML/Global_attributes/dir) 属性には、3 つの有効な値、`ltr`, `rtl`, `auto` があります。

それぞれの列挙型属性には、属性が値なしで存在する（値がない）場合の既定値、及び属性に無効な値が割り当てられている場合の既定値があります。HTML の[論理](/ja/docs/Glossary/Boolean)属性が、値が存在するか、省略されるか、または無効であるかに関わらず、属性が存在する場合は常に真となるのに対して、HTML の列挙型属性では、値が省略された場合の既定値は、無効な値の場合の既定値と異なることがあります。例えば、グローバル HTML の [`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) 属性には、2 つの有効なキーワード、`true` と `false` があります。この属性が表示されているが値が設定されていない場合、その値は `true` となります。値が設定されているが、 `contenteditable="contenteditable"` のような無効な値の場合、その値は 3 つ目の状態である `inherit` が割り当てられます。

## ARIA 列挙型属性

ARIA の状態とプロパティは、HTML であるため、列挙型の属性もあります。ARIA 属性が列挙されたリストの中に `true` と `false` の両方の値を含んでいる場合、一般的に省略された属性は `false` として、無効な値は `true` として扱われ、空文字列や省略された値の既定値は属性に依存することになります。

例えば `aria-current` 属性が受け入れることができるのは、 `page`, `step`, `location`, `date`, `time`, `true`, `false` という、限られた値のリストです。この場合、属性が存在しないか、空文字列であるか、値がない状態で存在するか、または `aria-current="false"` に設定されている場合、その属性は false となり、ユーザーには公開されません。列挙された値のリストにない空文字列以外の値は、`aria-current="true"` が設定されている場合と同様に扱われます。

## JavaScript 列挙可能プロパティ

JavaScript で、列挙可能なプロパティとは、内部の列挙可能フラグが true に設定されているプロパティのことで、これは単純な割り当てやプロパティ初期化子によって作成されたプロパティの既定値です。ほとんどの反復処理機構（例えば [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループや [`Object.keys`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)）は、列挙可能なキーしか処理しません。

## 関連情報

- [論理型](/ja/docs/Glossary/Boolean)
- [JavaScript のデータ型とデータ構造](/ja/docs/Web/JavaScript/Data_structures)
- HTML 標準の [enumerated attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute)
