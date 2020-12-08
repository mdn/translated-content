---
title: Speculative parsing (投機的解析)
slug: Glossary/speculative_parsing
tags:
  - Advanced
  - HTML
  - HTML5
  - NeedsUpdate
  - Web Development
  - Web Performance
translation_of: Glossary/speculative_parsing
---
<p>伝統的なブラウザーの HTML パーサーはメインスレッドで動作し、 <code>&lt;/script&gt;</code> タグの後はスクリプトがネットワークから取得されて実行が完了するまでブロックされます。一部の HTML パーサー、たとえば Firefox 4 以降では、メインスレッドから分離された投機的解析に対応しています。これは、スクリプトがダウンロードされて実行されている間、先に解析を進めます。 HTML パーサーは、ストリーム内で先に見つかるスクリプト、スタイルシート、画像の投機的な読み込みを開始し、 HTML ツリー構築アルゴリズムを投機的に実行します。この利点は、投機が成功したときに、スクリプト、スタイルシート、画像のスキャンが完了した受信ファイルの一部を再解析する必要がないことです。欠点は、投機が失敗した場合により多くの作業が失われることです。</p>

<p>このドキュメントは、投機が失敗してページの読み込みが遅くなるようなことを避けるのに役立ちます。</p>

<p>リンクされたスクリプト、スタイルシート、画像の投機的な読み込みを成功させるためには、 {{domxref('document.write')}} を避けてください。ページのベース URI を上書きするために <code>&lt;base&gt;</code>要素を使用する場合は、その要素を文書のスクリプト外においてください。これを <code>document.write()</code> や {{domxref('document.createElement')}} で追加しないでください。</p>

<h2 id="Avoiding_losing_tree_builder_output" name="Avoiding_losing_tree_builder_output">ツリービルダーの出力の喪失の防止</h2>

<p>投機的なツリー構築に失敗するのは、 <code>document.write()</code> によって挿入された内容がすべて解析されたときに、 <code>&lt;/script&gt;</code> タグの後の投機的な状態を破棄しなければならなくなる形で、 <code>document.write()</code> によってツリービルダーの状態が変更されたときです。しかし、問題を起こすのは <code>document.write()</code> の異常な使い方だけです。避けるべきことは以下のようなものです。</p>

<ul>
 <li>バランスの取れないツリーを出力しないでください。 <code>&lt;script&gt;document.write("&lt;div&gt;");&lt;/script&gt;</code> は悪い例です。 <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> は良い例です。</li>
 <li>不完全なトークンを出力しないでください。 <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div");&lt;/script&gt;</code> は悪い例です。</li>
 <li>出力をキャリッジリターン文字で終わらせないでください。 <code>&lt;script&gt;document.write("Hello World!\r");&lt;/script&gt;</code> は悪い例です。 <code>&lt;script&gt;document.write("Hello World!\n");&lt;/script&gt;</code> は良い例です。</li>
 <li>バランスの取れたタグを書いても、他のタグが推測され、バランスの悪い書き込みになってしまうことがあるので注意してください。例えば <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> を <code>head</code> 要素の中で実行すると、 <code>&lt;script&gt;document.write("&lt;/head&gt;&lt;body&gt;&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> となりバランスが取れなくなります。</li>
 <li>表の一部を書き込まないでください。 <code>&lt;table&gt;&lt;script&gt;document.write("&lt;tr&gt;&lt;td&gt;Hello World!&lt;/td&gt;&lt;/tr&gt;");&lt;/script&gt;&lt;/table&gt;</code> は悪い例です。</li>
</ul>
