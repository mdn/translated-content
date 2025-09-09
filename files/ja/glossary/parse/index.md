---
title: Parse (構文解析)
slug: Glossary/Parse
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

構文解析 (Parsing) とは、プログラムを解釈し、例えばブラウザー内の {{glossary("JavaScript")}} エンジンなどの実行環境で、実際に実行できる内部形式に変換することを意味します。

[ブラウザーは HTML を構文解析](/ja/docs/Learn_web_development/Core/Structuring_content)して {{glossary('DOM')}} ツリーに変換します。 HTML の構文解析処理は[トークン化](/ja/docs/Web/API/DOMTokenList)とツリーの構築を含みます。 HTML トークンは、属性の名前や値と同じように、開始タグと終了タグを含みます。文書が適切に構造化されていれば、その構文解析処理は単純で速くなります。パーサーはトークン化された入力内容を構文解析して文書に変換し、文書ツリーを作り上げます。

HTML パーサーが画像のようなブロックされないリソースを見つけた場合、ブラウザーはそれらのリソースを要求し、構文解析を続けます。 CSS ファイルに遭遇した場合は構文解析処理を続けることができますが、 `<script>` タグ、特に [`async`](/ja/docs/Web/JavaScript/Reference/Statements/async_function) または `defer` 属性がないものの場合はレンダリングがブロックされ、 HTML の構文解析処理が停止します。

ブラウザーは CSS スタイルに遭遇した場合、その文字列を構文解析して CSS Object Model （または {{glossary('CSSOM')}}）に変換し、そのデータ構造をレイアウトの整形と描画に使用します。それからブラウザーは、これら両方のデータ構造から、コンテンツを画面に描画するためのレンダリングツリーを生成します。 JavaScript も同様にダウンロードされ、構文解析され、そして実行されます。

JavaScript では、これは{{glossary("compile time","コンパイル時")}}または、メソッドの呼び出し中など、{{glossary("parser","パーサー")}}が呼び出されるたびに行われます。

## 関連情報

- [構文解析](https://en.wikipedia.org/wiki/構文解析)（ウィキペディア）
