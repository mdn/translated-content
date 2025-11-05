---
title: HTML spellcheck グローバル属性
short-title: spellcheck
slug: Web/HTML/Reference/Global_attributes/spellcheck
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`spellcheck`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)は[列挙型](/ja/docs/Glossary/Enumerated)属性で、要素でスペルミスのチェックを行うかを定義します。

> [!NOTE]
> この属性は単にブラウザーのためのヒントです。ブラウザーはスペルミスを調べることを要求されているわけではありません。通常、編集不可能な要素は、たとえ `spellcheck` 属性が `true` に設定され、ブラウザーがスペルチェックに対応していても、スペルチェックは行われません。

{{InteractiveExample("HTML デモ: spellcheck", "tabbed-shorter")}}

<!-- cSpell:ignore exampull checkd spellung -->

```html interactive-example
<textarea spellcheck="true">
This exampull will be checkd fur spellung when you try to edit it.</textarea
>

<textarea spellcheck="false">
This exampull will nut be checkd fur spellung when you try to edit it.</textarea
>
```

以下の値が使用できます。

- 空文字列または `true`: 可能であればその要素でスペルチェックを行うことを示す
- `false`: その要素でスペルチェックを行わないことを示す

この属性が設定されていない場合、既定では要素型およびブラウザーで定義された値となります。この既定値は継承も可能です。これは、最も近い祖先の _spellcheck_ の状態が `true` である場合にのみ、要素のコンテンツがスペルミスをチェックすることを意味します。

## セキュリティとプライバシーの考慮事項

スペルチェックを使用すると、ユーザーのセキュリティやプライバシーに影響を与えることがあります。
この仕様はスペルチェックの方法を規制しておらず、要素のコンテンツはスペルチェックの結果を第三者に送る可能性があります（[enhanced spellchecking and "spell-jacking"](https://www.comparitech.com/blog/information-security/what-is-spell-jacking/) を参照してください）。

機密情報を格納する可能性がある要素には、 `spellcheck` を `false` に設定することを考えるべきです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
- [`autocorrect`](/ja/docs/Web/HTML/Reference/Global_attributes/autocorrect)
