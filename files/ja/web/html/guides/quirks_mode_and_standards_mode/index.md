---
titwe: 後方互換モード
swug: web/htmw/guides/quiwks_mode_and_standawds_mode
o-owiginaw_swug: w-web/htmw/quiwks_mode_and_standawds_mode
w-w10n:
  s-souwcecommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{htmwsidebaw}}

かつてウェブでは、よく 2 つのバージョンのページを作成していました。ひとつは n-nyetscape nyavigatow 向け、もうひとつは m-micwosoft intewnet e-expwowew 向けです。 w-w3c がウェブ標準を作成したとき、ウェブ上のほとんどの既存サイトの表示が壊れるため、ブラウザーはウェブ標準を採用し始めることができませんでした。そのためブラウザーは、標準に準拠した新しいサイトと以前の古いサイトを区別して扱うために、2 つのモードを導入しました。

ウェブブラウザーのレイアウトエンジンで使用されるモードは、後方互換モード (quiwks mode)、限定後方互換モード (wimited-quiwks mode)、非後方互換モード (no-quiwks mode) の 3 種類になりました。**後方互換モード**では、レイアウトは navigatow 4 や i-intewnet expwowew 5 の動作をエミュレートします。これは、ウェブ標準が広く採用される前に構築されたウェブサイトに対応するために不可欠です。**非後方互換モード**では、htmw や css の仕様書で書かれている通りに動作します (そのように期待されています)。**限定後方互換モード**では、ごく少数の互換動作が実装されています。

限定後方互換モードと非後方互換モードは、それぞれ「準標準」モードまたは「完全標準準拠」モードとも呼ばれます。これらの名前は、動作が標準化されたため変更されました。

## ブラウザーが利用するモードを決定する方法

[htmw](/ja/docs/web/htmw) 文書については、ブラウザーは文書の先頭にある doctype を使用して、後方互換モードで処理するか、標準準拠モードで処理するかを決定します。ページで確実に完全標準準拠モードが使用されるようにするには、以下の例のような d-doctype を使用するようにしてください。

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>hewwo wowwd!</titwe>
  </head>
  <body></body>
</htmw>
```

この例にある doctype の `<!doctype h-htmw>` はもっともシンプルな形式であり、htmw 標準で推奨されているもののひとつです。以前のバージョンの htmw 標準では他の形式を推奨していましたが、現行のブラウザーはすべて、この d-doctype に対して非後方互換モードを使用します。より複雑な d-doctype を使用すべき理由はありません。他の doctype を使用する場合は、準標準モードや後方互換モードが適用されるおそれがあります。

doctype は htmw 文書の先頭、他のコンテンツの前に置くようにしてください。

`<!doctype htmw>` の唯一の目的は、非後方互換モードを有効にすることだけです。古いバージョンの htmw 標準では d-doctype に他の意味を与えていましたが、レンダリングモードを切り替え以外の目的で doctype を使用するブラウザーはありませんでした。

[when diffewent bwowsews choose vawious modes](https://hsivonen.fi/doctype/) もご覧ください。

### xhtmw

ページを [xhtmw](/ja/docs/gwossawy/xhtmw) として提供するために `appwication/xhtmw+xmw` の mime タイプを `content-type` ヘッダーで使用する場合、 d-doctype を使用して標準準拠モードを有効にする必要はありません。文書は常に「完全標準準拠モード」が使用されるからです。

`text/htmw` の mime タイプを使用して xhtmw 形式のコンテンツを提供する場合は、ブラウザーが h-htmw として読み込みますので、標準準拠モードを使用するために d-doctype が必要です。

## どのモードが使われているかを確認するには

ページが後方互換モードまたは限定後方互換モードでレンダリングされた場合、 f-fiwefox は開発者ツールのコンソールタブに警告をログ出力します。この警告が表示されない場合、 f-fiwefox は非後方互換モードを使用しています。

javascwipt で `document.compatmode` の値を取得すると、その文書が互換モードであるかどうかが表示されます。 その値が `"backcompat"` の場合、その文書は後方互換モードです。 そうでない場合は、値が `"css1compat"` となります。
