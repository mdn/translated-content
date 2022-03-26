---
title: 後方互換モードと標準準拠モード
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
tags:
  - Gecko
  - Guide
  - HTML
  - NeedsUpdate
  - Web Development
  - Web Standards
  - XHTML
translation_of: Web/HTML/Quirks_Mode_and_Standards_Mode
---
{{HTMLRef}}

かつてウェブでは、よく 2 つのバージョンのページを作成していました。ひとつは Netscape Navigator 向け、もうひとつは Microsoft Internet Explorer 向けです。W3C がウェブ標準を作成したとき、ウェブ上のほとんどの既存サイトの表示が壊れるため、ブラウザーはウェブ標準を採用し始めることができませんでした。そのためブラウザーは、標準に準拠した新しいサイトと以前の古いサイトを区別して扱うために、2 つのモードを導入しました。

ウェブブラウザーのレイアウトエンジンが利用するモードは、後方互換 (Quirks) モード、準標準 (Almost Standards) モード、完全標準準拠 (Full Standards) モードの 3 種類になりました。**後方互換モード**では、レイアウトは Navigator 4 や Internet Explorer 5 のような非標準の動作をエミュレートします。これは、ウェブ標準が広く採用される前に作られたウェブサイトをサポートするために必要です。**完全標準準拠モード**では、HTML や CSS の仕様書で書かれている通りに動作します (そのように期待されています)。**準標準モード**では、準標準モードのトリガーとなる DOCTYPE を利用している実際のページについて表示を損なう可能性を考慮した、ごく少数の互換動作が実装されています。

完全標準準拠モードは、単に標準準拠モードとも呼ばれます。ただし、古いブラウザーは後方互換モードと準標準モードしか持たないものがあります。その場合は準標準モードのことを（後方互換モードに対して）標準準拠モードと呼ぶことがあります。

## ブラウザーが利用するモードを決定する方法

[HTML](/ja/docs/HTML) 文書については、ブラウザーは文書の先頭にある DOCTYPE を使用して、後方互換モードで処理するか、標準準拠モードで処理するかを決定します。ページで確実に完全標準準拠モードが使用されるようにするには、以下のサンプルのような DOCTYPE を使用するようにしてください。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset=UTF-8>
    <title>Hello World!</title>
  </head>
  <body>
  </body>
</html>
```

この例にある DOCTYPE の `<!DOCTYPE html>` はもっともシンプルな形式であり、HTML5 で推奨されているもののひとつです。以前のバージョンの HTML 標準では他の形式を推奨していましたが、現行のブラウザーはすべて（旧式の Internet Explorer 6 でさえ）、この DOCTYPE に対して完全標準準拠モードを使用します。より複雑な DOCTYPE を使用すべき理由はありません。他の DOCTYPE を使用する場合は、準標準モードや後方互換モードが適用されるおそれがあります。

DOCTYPE は HTML 文書の先頭に置くようにしてください。Internet Explorer 9 以前ではコメントや XML 宣言などが DOCTYPE の前に存在すると、後方互換モードが適用されます。

HTML5 では、DOCTYPE の用途は完全標準準拠モードを適用させることだけです。古いバージョンの HTML 標準では DOCTYPE に他の意味を与えていましたが、後方互換モードと標準準拠モードの切り替え以外の目的で DOCTYPE を使用するブラウザーはありませんでした。

[さまざまなブラウザーのモード選択の詳細な説明](https://hsivonen.iki.fi/doctype/)もご覧ください。

### XHTML

`Content-Type` HTTP ヘッダーで `application/xhtml+xml` を使用して、ページを [XHTML](/ja/docs/XHTML) として提供する場合は、文書で常に完全標準準拠モードを使用しますので、標準準拠モードを有効化するための DOCTYPE は不要です。ただし Internet Explorer 8 は `application/xhtml+xml` でページを提供すると、ページを表示せずに未知の形式のファイルを[ダウンロードするダイアログボックス](/ja/docs/XHTML#Support)を表示します。これは、最初に XHTML をサポートした Internet Explorer がバージョン 9 であるためです。

`text/html` の MIME タイプを使用して XHTML 形式のコンテンツを提供する場合は、ブラウザーが HTML として読み込みますので、標準準拠モードを使用するために DOCTYPE が必要です。

## どのモードが使われているかを確認するには

Firefox では、コンテキストメニューで*ページの情報を表示*を選択して、*描画モード*を確認してください。（[Firefox のページ情報ウィンドウ](https://support.mozilla.org/ja/kb/firefox-page-info-window)）

Internet Explorer では、*F12* を押下して、*ドキュメントモード*を確認してください。
