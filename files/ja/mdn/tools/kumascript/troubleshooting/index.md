---
title: KumaScript エラーのトラブルシューティング
slug: MDN/Tools/KumaScript/Troubleshooting
---

{{MDNSidebar}}

この記事では4種類の KumaScript エラーと、修正するための対策について詳しく見ます。

## DocumentParsingError

`DocumentParsingError` のエラーは KumaScript がドキュメント自体を理解できないときに表示されます。最もよくある原因は[マクロ](/ja/docs/MDN/Writing_guidelines/Page_structures)内の構文エラーです。

以下の点をチェックしてください。

- マクロ呼出しのつもりではない場合に中括弧を使った。
  - : マクロを呼び出すことなく記事中に \\{ を書く必要がある場合は、 \ でエスケープして `\\{` のように書くことができます。
- マクロ引数に特殊な文字を使った。
  - : マクロの引数内で " または \ を使う必要がある場合は、 \ でエスケープして `\\` または `\"` のように書くことができます。
- マクロ引数間にカンマがない。
  - : マクロの引数はカンマ (,) で区切る必要がありますが、引数リストの末尾には必要ありません。例えば `\{\{compat("html.elements.link", 2)}}` のようにしてください。
- マクロ呼び出し内に HTML タグがある
  - : マクロにスタイルを適用した場合、例えばソースコードのマクロコードの中に `</code>` タグが出現していることがあり、マクロが壊れてしまうことがよくあります。ソースビューで確認し、不要なスタイルは削除してください。

## TemplateLoadingError

`TemplateLoadingError` のエラーは KumaScript がページにどの[マクロ](/ja/docs/MDN/Writing_guidelines/Page_structures)を取り込むか探せないときに表示されます。

以下の点をチェックしてください。

- マクロ名が誤っているか、マクロが改名された。
  - : [Yari リポジトリー](https://github.com/mdn/yari/tree/main/kumascript/macros)で既知のマクロのリストを確認できます。

## TemplateExecutionError

`TemplateExecutionError` のエラーは KumaScript が macro 内のエラーに遭遇したときに表示されます。エラーが続く場合、ページの URL とエラーのテキストをつけて[バグを報告してください](https://github.com/mdn/yari/issues)。

## Error & Unknown

他の種類のエラーでない場合、最終的にこのカテゴリーに分類されます。
