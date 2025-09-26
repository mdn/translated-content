---
title: 後方互換モードと標準モードを理解する
short-title: 後方互換モードと標準モード
slug: Web/HTML/Guides/Quirks_mode_and_standards_mode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

かつてウェブでは、よく 2 つのバージョンのページを作成していました。ひとつは Netscape Navigator 向け、もうひとつは Microsoft Internet Explorer 向けです。 W3C がウェブ標準を作成したとき、ウェブ上のほとんどの既存サイトの表示が壊れるため、ブラウザーはウェブ標準を採用し始めることができませんでした。そのためブラウザーは、標準に準拠した新しいサイトと以前の古いサイトを区別して扱うために、2 つのモードを導入しました。

ウェブブラウザーのレイアウトエンジンで使用されるモードは、後方互換モード (quirks mode)、限定後方互換モード (limited-quirks mode)、非後方互換モード (no-quirks mode) の 3 種類になりました。**後方互換モード**では、レイアウトは Navigator 4 や Internet Explorer 5 の動作をエミュレートします。これは、ウェブ標準が広く採用される前に構築されたウェブサイトに対応するために不可欠です。**非後方互換モード**では、HTML や CSS の仕様書で書かれている通りに動作します (そのように期待されています)。**限定後方互換モード**では、ごく少数の互換動作が実装されています。

限定後方互換モードと非後方互換モードは、それぞれ「準標準」モードまたは「完全標準準拠」モードとも呼ばれます。これらの名前は、動作が標準化されたため変更されました。

## ブラウザーが利用するモードを決定する方法

[HTML](/ja/docs/Web/HTML) 文書については、ブラウザーは文書の先頭にある doctype を使用して、後方互換モードで処理するか、標準準拠モードで処理するかを決定します。ページで確実に完全標準準拠モードが使用されるようにするには、以下の例のような doctype を使用するようにしてください。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body></body>
</html>
```

この例にある doctype の `<!doctype html>` はもっともシンプルな形式であり、HTML 標準で推奨されているもののひとつです。以前のバージョンの HTML 標準では他の形式を推奨していましたが、現行のブラウザーはすべて、この doctype に対して非後方互換モードを使用します。より複雑な doctype を使用すべき理由はありません。他の doctype を使用する場合は、準標準モードや後方互換モードが適用されるおそれがあります。

doctype は HTML 文書の先頭、他のコンテンツの前に置くようにしてください。

`<!doctype html>` の唯一の目的は、非後方互換モードを有効にすることだけです。古いバージョンの HTML 標準では doctype に他の意味を与えていましたが、レンダリングモードを切り替え以外の目的で doctype を使用するブラウザーはありませんでした。

[when different browsers choose various modes](https://hsivonen.fi/doctype/) もご覧ください。

### XHTML

ページを [XHTML](/ja/docs/Glossary/XHTML) として提供するために `application/xhtml+xml` の MIME タイプを `Content-Type` ヘッダーで使用する場合、 doctype を使用して標準準拠モードを有効にする必要はありません。文書は常に「完全標準準拠モード」が使用されるからです。

`text/html` の MIME タイプを使用して XHTML 形式のコンテンツを提供する場合は、ブラウザーが HTML として読み込みますので、標準準拠モードを使用するために doctype が必要です。

## どのモードが使われているかを確認するには

ページが後方互換モードまたは限定後方互換モードでレンダリングされた場合、 Firefox は開発者ツールのコンソールタブに警告をログ出力します。この警告が表示されない場合、 Firefox は非後方互換モードを使用しています。

JavaScript で `document.compatMode` の値を取得すると、その文書が互換モードであるかどうかが表示されます。 その値が `"BackCompat"` の場合、その文書は後方互換モードです。 そうでない場合は、値が `"CSS1Compat"` となります。
