---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`spellcheck`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、要素でスペルミスのチェックを行うかを定義する[列挙型](/ja/docs/Glossary/Enumerated)属性です。

{{EmbedInteractiveExample("pages/tabbed/attribute-spellcheck.html","tabbed-shorter")}}

以下の値を使用できます。

- 空文字列または `true`: 可能であればその要素でスペルチェックを行うことを示す
- `false`: その要素でスペルチェックを行わないことを示す

この属性が設定されていない場合、既定では要素型およびブラウザーで定義された値となります。この既定値は継承も可能です。これは、最も近い祖先の _spellcheck_ の状態が `true` である場合にのみ、要素のコンテンツがスペルミスをチェックすることを意味します。

この属性は単にブラウザーのためのヒントです。ブラウザーはスペルミスを調べることを要求されているわけではありません。通常、編集不可能な要素は、たとえ `spellcheck` 属性が `true` に設定され、ブラウザーがスペルチェックに対応していても、スペルチェックは行われません。

## セキュリティとプライバシーの考慮事項

スペルチェックを使用すると、ユーザーのセキュリティやプライバシーに影響を与えることがあります。
この仕様はスペルチェックの方法を規制しておらず、要素のコンテンツはスペルチェックの結果を第三者に送る可能性があります（[enhanced spellchecking and "spell-jacking"](https://www.otto-js.com/news/article/chrome-and-edge-enhanced-spellcheck-features-expose-pii-even-your-passwords) を参照してください）。

機密情報を格納する可能性がある要素には、 `spellcheck` を `false` に設定することを考えるべきです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)
