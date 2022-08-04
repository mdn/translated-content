---
title: コードサンプルを「ライブ」に変換するには
slug: MDN/Writing_guidelines/Page_structures/Live_samples
tags:
  - 初心者
  - Howto
  - MDN Meta
translation_of: MDN/Contribute/Howto/Convert_code_samples_to_be_live
original_slug: MDN/Contribute/Howto/Convert_code_samples_to_be_live
---
{{MDNSidebar}}

MDN には「[ライブサンプル](/ja/docs/MDN/Structures/Live_samples)」システムがあり、ここではコードサンプルが、そのサンプルの出力を直接表示するのに使われます。しかし、既存の記事にはこのシステムをまだ使っていないコードサンプルが多々あり、変換する必要があります。

ライブサンプルは、サンプルの出力がどのようなものかを見ることができ、ドキュメントをよりダイナミックで教育的なものにできます。このガイドは既存サンプルを取り上げて、「ライブ」動作を追加する方法を掲載します。

## 行う必要のあるページ

静的なコード例（単なる HTML、CSS、JavaScript のブロック）を掲載している記事で、実際に動いているところを見せた方が良いと思われるものです。

## タスクを行うのに必要な知識

- コードサンプルに応じて、 HTML, CSS, JavaScript を理解していること
- MDN 記事内の [KumaScript](/ja/docs/MDN/Tools/KumaScript) マクロを使う能力

## タスクを実行するステップ

1. 「ライブ」に変換すべきだと思うコード例を見つけてください。
2. コードサンプルが「ライブ」となるよう変換してください。
3. 以前にサンプル出力を表示するために使われていた、コードや画像を削除してください。

ライブサンプルの作成と編集についての詳細情報は、 [ライブサンプルシステムの使用](/ja/docs/MDN/Structures/Live_samples)を参照してください。
