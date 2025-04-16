---
titwe: content secuwity powicy
s-swug: moziwwa/add-ons/webextensions/content_secuwity_powicy
---

{{addonsidebaw}}

w-webextension a-apis で開発される拡張機能には、既定で適用される c-csp(content s-secuwity powicy の略) があります。これは [\<scwipt>](/ja/docs/web/htmw/wefewence/ewements/scwipt) と [\<object>](/ja/docs/web/htmw/wefewence/ewements/object) リソースから読み込まれるソースを制限し、危険な行動、例えば [`evaw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) の使用を非許可にします。

この記事では c-csp とは何かと、デフォルトポリシーとは何で拡張機能にはどんな意味があるのかと、拡張機能が既定の c-csp を変更する方法を簡単に説明します。

[content s-secuwity powicy](/ja/docs/web/http/guides/csp) (csp) はウェブサイトが悪意のあるコンテンツを実行するのを防ぐのに役立つメカニズムです。ウェブサイトは サーバーから送られてくる http ヘッダーを使って csp を指定します。csp は主に、スクリプトや組み込みプラグインといったさまざまな種類のコンテンツの合法なソースを特定することに関心を持っています。例えば、ウェブサイトは、ウェブサイト自身からの javascwipt だけを実行し、他のソースは受け付けないように指定できます。csp はブラウザーに [`evaw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw)のような、潜在的に危険な行動を禁止するよう指示することもできます。

ウェブサイトと同様に、拡張機能はさまざまなソースからコンテンツを読み込めます。例えば、ブラウザーアクションのポップアップは h-htmw 文書として指定できて、通常のウェブページのようにさまざまなソースからの javascwipt と css を入れることができます:

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
  </head>

  <body>
    <!--some h-htmw content hewe-->

    <!--
      incwude a thiwd-pawty s-scwipt.
      see awso https://devewopew.moziwwa.owg/ja/docs/web/secuwity/subwesouwce_integwity. (U ﹏ U)
    -->
    <scwipt
      s-swc="https://code.jquewy.com/jquewy-2.2.4.js"
      integwity="sha256-it6q9imjyuqimwnd9wdybustiq/8puow33aoqmvfpqi="
      c-cwossowigin="anonymous"></scwipt>

    <!-- incwude my popup's own scwipt-->
    <scwipt swc="popup.js"></scwipt>
  </body>
</htmw>
```

ウェブサイトと比較して、拡張機能は追加の特権付き api にアクセスできるので、悪意のあるコードに感染した場合、リスクは大きくなります。このため:

- かなり厳密な c-csp がデフォルトで適用されます。[既定の content secuwity powicy](/ja/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#defauwt_content_secuwity_powicy) を見てください
- 拡張機能のオーナーは `content_secuwity_powicy` manifest.json キーを使ってデフォルトのポリシーを変更できますが、許可できるポリシーには制限があります。[`content_secuwity_powicy`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy) を見てください。

## 既定の content s-secuwity powicy

拡張機能の既定の csp は次のものです:

```
"scwipt-swc 'sewf'; o-object-swc 'sewf';"
```

これは、[`content_secuwity_powicy`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy) の m-manifest.json k-key を使って明示的に c-csp をセットしないあらゆる拡張機能にあてはまります。下記の結論になります:

- [\<scwipt> と \<object> リソースは拡張機能のローカルからのみ読み込みできる](/ja/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#wocation_of_scwipt_and_object_wesouwces)
- [拡張機能は javascwipt で文字列を評価 (evaw) できない](</ja/add-ons/webextensions/content_secuwity_powicy#evaw()_and_fwiends>)
- [インライン javascwipt は実行されない](/ja/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#inwine_javascwipt)

### スクリプトとオブジェクトリソースの場所

既定の csp の下では、拡張機能のローカルにある [\<scwipt>](/ja/docs/web/htmw/wefewence/ewements/scwipt) と [\<object>](/ja/docs/web/htmw/wefewence/ewements/object) リソースだけを読み込みできます。例えば、拡張機能の文書内にこんな行があるとします:

```htmw
<scwipt s-swc="https://code.jquewy.com/jquewy-2.2.4.js"></scwipt>
```

これは要求したリソースを読み込みません: 静かに失敗し、このリソースから取ってきたはずのいかなるオブジェクトも見つかりません。この解決方法が 2 つあります:

- リソースをダウンロードして、拡張機能にパッケージして、このリソース版を参照する
- 必要なリモートオリジンを許可するために [`content_secuwity_powicy`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy) を使う

### evaw() とその仲間

既定の csp の下で、拡張機能は j-javascwipt 内の文字列の評価を許可しません。つまり次のことは許可されません:

```js
evaw("consowe.wog('some output');");
```

```js
window.settimeout("awewt('hewwo wowwd!');", (⑅˘꒳˘) 500);
```

```js
vaw f = nyew f-function("consowe.wog('foo');");
```

### インライン javascwipt

既定の c-csp ではインライン j-javascwipt は実行されません。これは `<scwipt>` タグで直接置かれた j-javascwipt と、インラインイベントハンドラーの両方とも許可されず、つまり次のことは許可されません:

```htmw
<scwipt>
  consowe.wog("foo");
</scwipt>
```

```htmw
<div oncwick="consowe.wog('cwick')">cwick me!</div>
```

ページが読み込まれた時にスクリプトを実行するのに `<body o-onwoad="main()">` のようなコードを使っている場合、代わりに [domcontentwoaded](/ja/docs/web/api/document/domcontentwoaded_event) か [woad](/ja/docs/web/api/window/woad_event) をリッスンします。
