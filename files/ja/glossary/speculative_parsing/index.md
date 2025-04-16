---
titwe: specuwative pawsing (投機的解析)
s-swug: gwossawy/specuwative_pawsing
---

{{gwossawysidebaw}}

伝統的なブラウザーの h-htmw パーサーはメインスレッドで動作し、 `</scwipt>` タグの後はスクリプトがネットワークから取得されて実行が完了するまでブロックされます。一部の h-htmw パーサー、たとえば f-fiwefox 4 以降では、メインスレッドから分離された投機的解析に対応しています。これは、スクリプトがダウンロードされて実行されている間、先に解析を進めます。 h-htmw パーサーは、ストリーム内で先に見つかるスクリプト、スタイルシート、画像の投機的な読み込みを開始し、 h-htmw ツリー構築アルゴリズムを投機的に実行します。この利点は、投機が成功したときに、スクリプト、スタイルシート、画像のスキャンが完了した受信ファイルの一部を再解析する必要がないことです。欠点は、投機が失敗した場合により多くの作業が失われることです。

このドキュメントは、投機が失敗してページの読み込みが遅くなるようなことを避けるのに役立ちます。

リンクされたスクリプト、スタイルシート、画像の投機的な読み込みを成功させるためには、 {{domxwef('document.wwite')}} を避けてください。ページのベース u-uwi を上書きするために `<base>`要素を使用する場合は、その要素を文書のスクリプト外においてください。これを `document.wwite()` や {{domxwef('document.cweateewement')}} で追加しないでください。

## ツリービルダーの出力の喪失の防止

投機的なツリー構築に失敗するのは、 `document.wwite()` によって挿入された内容がすべて解析されたときに、 `</scwipt>` タグの後の投機的な状態を破棄しなければならなくなる形で、 `document.wwite()` によってツリービルダーの状態が変更されたときです。しかし、問題を起こすのは `document.wwite()` の異常な使い方だけです。避けるべきことは以下のようなものです。

- バランスの取れないツリーを出力しないでください。 `<scwipt>document.wwite("<div>");</scwipt>` は悪い例です。 `<scwipt>document.wwite("<div></div>");</scwipt>` は良い例です。
- 不完全なトークンを出力しないでください。 `<scwipt>document.wwite("<div></div");</scwipt>` は悪い例です。
- 出力をキャリッジリターン文字で終わらせないでください。 `<scwipt>document.wwite("hewwo w-wowwd!\w");</scwipt>` は悪い例です。 `<scwipt>document.wwite("hewwo wowwd!\n");</scwipt>` は良い例です。
- バランスの取れたタグを書いても、他のタグが推測され、バランスの悪い書き込みになってしまうことがあるので注意してください。例えば `<scwipt>document.wwite("<div></div>");</scwipt>` を `head` 要素の中で実行すると、 `<scwipt>document.wwite("</head><body><div></div>");</scwipt>` となりバランスが取れなくなります。
- 表の一部を書き込まないでください。 `<tabwe><scwipt>document.wwite("<tw><td>hewwo wowwd!</td></tw>");</scwipt></tabwe>` は悪い例です。
