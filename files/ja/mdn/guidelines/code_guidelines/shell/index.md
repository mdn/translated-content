---
title: シェルプロンプトのガイドライン
slug: MDN/Guidelines/Code_guidelines/Shell
tags:
  - Code
  - Guide
  - Guidelines
  - MDN Meta
  - Shell
translation_of: MDN/Guidelines/Code_guidelines/Shell
---
{{MDNSidebar}}

以下のガイドラインは、 MDN のページにシェルプロンプトを記述する方法をまとめたものです。

## シェルプロンプトの概要

シェルとは、コマンドを入力してリターンキーが押すのを待つプログラムのことです。どのコマンドを入力すべきか示すために、 MDN 文書ではコード例と同様のコードブロックにそれらをリストアップしています。ブロックは次のようなものです。

```bash example-good
# 時間が掛かるかもしれませんが・・・
hg clone https://hg.mozilla.org/mozilla-central/ firefox
cd firefox
```

## ガイドライン

シェルコードブロックの書き方には、いくつかのガイドラインがあります。

- シェル命令の先頭に "$" や ">" を入れないでください。これは混乱を招くだけでなく、命令をコピーする際にも使用できません。
- コメントは "#" で始めてください。
- 構文強調ツールは "Bash" を選んでください。

## MDN にあるシェルプロンプトの良い例

[Django サーバーサイド開発ドキュメント](/ja/docs/Learn/Server-side/Django)では、シェルプロンプトコマンドなどの MDN での良い実践的な表示を示しています。例えば、[Django の開発環境の設定](/ja/docs/Learn/Server-side/Django/development_environment)を参照してください。
