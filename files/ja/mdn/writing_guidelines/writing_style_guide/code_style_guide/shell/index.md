---
title: シェルプロンプトのコード例を整形するためのガイドライン
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
---

{{MDNSidebar}}

シェルとは、コマンドを入力してリターンキーが押すのを待つプログラムのことです。どのコマンドを入力すべきか示すために、 MDN 文書ではコード例と同様のコードブロックにそれらをリストアップしています。ブロックは次のようなものです。

```bash example-good
# 時間が掛かるかもしれませんが・・・
hg clone https://hg.mozilla.org/mozilla-central/ firefox
cd firefox
```

以下のガイドラインは、MDN Web Docs のためのシェルプロンプトコード例の書き方について述べています。

## ガイドライン

シェルコードブロックの書き方には、いくつかのガイドラインがあります。

- シェル命令の先頭に `$` や `>` を入れないでください。これは混乱を招くだけでなく、命令をコピーする際にも使用できません。
- コメントは `#` で始めてください。
- 構文強調ツールは "bash" を選んでください。

## 関連情報

[Django サーバーサイド開発ドキュメント](/ja/docs/Learn/Server-side/Django)では、シェルプロンプトコマンドなどの MDN での良い実践的な表示を示しています。
