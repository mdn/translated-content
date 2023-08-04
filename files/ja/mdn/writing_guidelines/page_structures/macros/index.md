---
title: マクロの使用
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: aa66311219951396e7305df61eb31831360d2c79
---

{{MDNSidebar}}

MDN が動作している [Yari](https://github.com/mdn/yari/tree/main/docs/what-yari-does.md) プラットフォームは、幅広い作業の自動化を可能にする強力なマクロシステムである [KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript) を提供しています。この記事は MDN のマクロを記事中で呼び出す方法について情報を提供します。

[KumaScript ガイド](https://github.com/mdn/yari/blob/main/docs/kumascript/README.md)では MDN 上でマクロを利用する方法について詳細な情報を提供しているので、この節ではむしろ全体の簡潔なまとめをします。

## マクロはどのように実装されているか

MDN 上で動作するマクロは、サーバーで実行される [JavaScript](/ja/docs/Web/JavaScript) コードを使用して実装され、 [Node.js](https://nodejs.org/en/) によって解釈されます。さらに、マクロがプラットフォームやそのコンテンツと相互作用するためのサービスや機能を提供する、私たちが実装したいくつかのライブラリーがあります。

## コンテンツでのマクロの利用

実際にマクロを使うには、マクロの呼び出しを二重の中括弧で囲みます。引数があれば括弧で囲みます。

```plain
\{{macroname(parameter-list)}}
```

マクロ呼び出しに関するいくつかのポイント

- マクロ名は大文字と小文字を区別します。それに関するエラーはよくあるので幾つかののパターンがあります。例えば、マクロ名に大文字があるのに全て小文字で入力しているかもしれません。また、小文字から始まる所を大文字にしてしまっているのかもしれません。
- 引数はカンマで区切ります。
- 引数がなければ括弧は取ってしまって構いません。 `\{{macroname()}}` と `\{{macroname}}` はまったく同じです。
- 数値の引数は引用符で囲む必要がありませんが、囲んでも構いません (ただし、複数のピリオドを含むバージョン番号を渡す場合などは、引用符で囲む必要があります)。
- エラーが発生した場合は、コードを丁寧に読み返して下さい。何が問題なのかそれでも特定できなかった場合には、 [KumaScript エラーのトラブルシューティング](https://github.com/mdn/yari/blob/main/docs/kumascript/troubleshooting-errors.md)を参照して下さい。

マクロは高度にキャッシュ化されています。どの入力値についても (引数や、マクロを動作させる URL といった環境変数のいずれでも)、その結果は記憶され再利用されます。つまり、入力が変化した時だけマクロは実行されます。

マクロは大きなテキストブロックを挿入したり、 MDN の他記事からの内容で置き換えたりするようなシンプルなこともできますし、サイトを走査して目次をまるごと作り上げたり、出力のスタイル付けをしたり、リンクを張ったりといった複雑なこともできます。

最もよく使われるマクロについては、[よく使われるマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)のページで学習することができます。また、[すべてのマクロの完全なソース](https://github.com/mdn/yari/tree/main/kumascript/macros)もあります。そして多くのマクロには最上部のコメントとして、ソースに説明が組み込まれています。
