---
title: マクロの使用
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

[rari](https://github.com/mdn/rari) バックエンドは MDN のビルドシステムで、よくあるタスクのマクロ構文を提供します。

## コンテンツでのマクロの利用

実際にマクロを使うには、マクロの名前を引数と共に、二重中括弧 (`{{ }}`) で囲みます。

```plain
\{{macroname(parameter-list)}}
```

マクロ呼び出しに関するいくつかのポイント

- マクロ名は大文字と小文字を区別しますが、よくある大文字・小文字の誤りはある程度自動的に修正されます。マクロ名に大文字が含まれていてもすべて小文字で入力したり、通常は小文字で始まるマクロ名を大文字で始めたりできます。
- 引数はカンマで区切ります。
- 引数がない場合は、括弧を省略できます。例えば、`\{{APIRef()}}` と `\{{APIRef}}` は同じです。
- 数値の引数は引用符で囲んでも囲まなくてもかまいません。ただし、複数の小数点を含むバージョン番号は引用符で囲む必要があります。

マクロは大きなテキストブロックを挿入したり、 MDN の他記事からの内容で置き換えたりするようなシンプルなこともできますし、サイトを走査して目次をまるごと作り上げたり、出力のスタイル付けをしたり、リンクを張ったりといった複雑なこともできます。

## 関連情報

- [よく使われるマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [リンクマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Links)
- [サイドバーマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [機能状態マクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [その他のマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Other)（使用頻度の低いマクロや非推奨のマクロ）
