---
title: HTML writingsuggestions グローバル属性
short-title: writingsuggestions
slug: Web/HTML/Reference/Global_attributes/writingsuggestions
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`writingsuggestions`** は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)で、{{glossary("enumerated", "列挙型")}}属性であり、ブラウザーが指定した入力補完を要素のスコープで有効にするかどうかを示します。

一部のブラウザーでは、ユーザーが編集可能なフィールドに入力する際に、入力のヒントを表示します。 通常、入力のヒントは、ユーザーの文を完成させるために、テキストカーソルの後に配置されるグレー表示のテキストとして現れます。この機能はユーザーに役立つ場合もありますが、開発者によっては、サイト固有の入力のヒントを表示する場合など、入力のヒントをオフにしたい場合もあるでしょう。

`writingsuggestions` 属性は、 {{htmlelement('input')}} や {{htmlelement('textarea')}} などの編集可能なフィールド、または他の HTML 要素に設定でき、ページの一部または全体に対するブラウザーの提案の動作を制御できます。

## 構文

対応しているブラウザーでは、入力補完機能は既定では有効になっています。無効にするには、 `writingsuggestions` 属性の値を `false` に設定します。属性の値を `true` に設定するか、値を省略すると、入力補完機能が有効になります。

入力補完を無効にするには、次のようにします。

```html
<input type="text" writingsuggestions="false" />
```

入力補完を有効にするには、次のようにします。

```html
<input type="text" />
<input type="text" writingsuggestions />
<input type="text" writingsuggestions="true" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`autocomplete`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete) 属性
- [`spellcheck`](/ja/docs/Web/HTML/Reference/Global_attributes/spellcheck) 属性
- [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性
- {{HTMLElement("textarea")}}
- {{HTMLElement("input")}}
- {{HTMLElement("datalist")}} および [`list`](/ja/docs/Web/HTML/Reference/Elements/input#list) 属性
