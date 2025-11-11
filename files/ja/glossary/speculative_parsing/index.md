---
title: Speculative parsing (投機的解析)
slug: Glossary/Speculative_parsing
---

{{GlossarySidebar}}

伝統的なブラウザーの HTML パーサーはメインスレッドで動作し、 `</script>` タグの後はスクリプトがネットワークから取得されて実行が完了するまでブロックされます。一部の HTML パーサー、たとえば Firefox 4 以降では、メインスレッドから分離された投機的解析に対応しています。これは、スクリプトがダウンロードされて実行されている間、先に解析を進めます。 HTML パーサーは、ストリーム内で先に見つかるスクリプト、スタイルシート、画像の投機的な読み込みを開始し、 HTML ツリー構築アルゴリズムを投機的に実行します。この利点は、投機が成功したときに、スクリプト、スタイルシート、画像のスキャンが完了した受信ファイルの一部を再解析する必要がないことです。欠点は、投機が失敗した場合により多くの作業が失われることです。

このドキュメントは、投機が失敗してページの読み込みが遅くなるようなことを避けるのに役立ちます。

リンクされたスクリプト、スタイルシート、画像の投機的な読み込みを成功させるためには、 {{domxref('document.write')}} を避けてください。ページのベース URI を上書きするために `<base>`要素を使用する場合は、その要素を文書のスクリプト外においてください。これを `document.write()` や {{domxref('document.createElement')}} で追加しないでください。

## ツリービルダーの出力の喪失の防止

投機的なツリー構築に失敗するのは、 `document.write()` によって挿入された内容がすべて解析されたときに、 `</script>` タグの後の投機的な状態を破棄しなければならなくなる形で、 `document.write()` によってツリービルダーの状態が変更されたときです。しかし、問題を起こすのは `document.write()` の異常な使い方だけです。避けるべきことは以下のようなものです。

- バランスの取れないツリーを出力しないでください。 `<script>document.write("<div>");</script>` は悪い例です。 `<script>document.write("<div></div>");</script>` は良い例です。
- 不完全なトークンを出力しないでください。 `<script>document.write("<div></div");</script>` は悪い例です。
- 出力をキャリッジリターン文字で終わらせないでください。 `<script>document.write("Hello World!\r");</script>` は悪い例です。 `<script>document.write("Hello World!\n");</script>` は良い例です。
- バランスの取れたタグを書いても、他のタグが推測され、バランスの悪い書き込みになってしまうことがあるので注意してください。例えば `<script>document.write("<div></div>");</script>` を `head` 要素の中で実行すると、 `<script>document.write("</head><body><div></div>");</script>` となりバランスが取れなくなります。
- 表の一部を書き込まないでください。 `<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>` は悪い例です。
