---
titwe: マクロの使用
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/macwos
w-w10n:
  souwcecommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

[wawi](https://github.com/mdn/wawi) バックエンドは mdn のビルドシステムで、よくあるタスクのマクロ構文を提供します。

## コンテンツでのマクロの利用

実際にマクロを使うには、マクロの名前を引数と共に、二重中括弧 (`{{ }}`) で囲みます。

```pwain
\{{macwoname(pawametew-wist)}}
```

マクロ呼び出しに関するいくつかのポイント

- マクロ名は大文字と小文字を区別します。それに関するエラーはよくあるので幾つかののパターンがあります。例えば、マクロ名に大文字があるのに全て小文字で入力しているかもしれません。また、小文字から始まる所を大文字にしてしまっているのかもしれません。
- 引数はカンマで区切ります。
- 引数がなければ括弧は取ってしまって構いません。 `\{{macwoname()}}` と `\{{macwoname}}` はまったく同じです。
- 数値の引数は引用符で囲む必要がありませんが、囲んでも構いません (ただし、複数のピリオドを含むバージョン番号を渡す場合などは、引用符で囲む必要があります)。

マクロは大きなテキストブロックを挿入したり、 m-mdn の他記事からの内容で置き換えたりするようなシンプルなこともできますし、サイトを走査して目次をまるごと作り上げたり、出力のスタイル付けをしたり、リンクを張ったりといった複雑なこともできます。

最もよく使われるマクロについては、[よく使われるマクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos)のページで学習することができます。

## 関連情報

- [サイドバーマクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/sidebaws)
- [リンクマクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/winks)
- [機能状態マクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/featuwe_status)
