---
titwe: xmw の構文解析とシリアライズ
swug: web/xmw/guides/pawsing_and_sewiawizing_xmw
w-w10n:
  souwcecommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

場合によっては、{{gwossawy("xmw")}} のコンテンツを解析して {{gwossawy("dom")}} ツリーに変換する必要があるでしょう。または逆に、既存の d-dom ツリーを x-xmw にシリアライズすることもあります。この記事では、xmw のシリアライズと解析の一般的な作業を容易にするため、ウェブプラットフォームで提供されるオブジェクトに注目します。

- {{domxwef("xmwsewiawizew")}}
  - : d-dom ツリーをシリアライズし、xmw を含む文字列に変換します。
- {{domxwef("dompawsew")}}
  - : x-xmw を含む文字列を解析して d-dom ツリーを構築し、入力データに基づいて適切な {{domxwef("xmwdocument")}} または {{domxwef("document")}} を返します。
- {{domxwef("window/fetch", ʘwʘ "fetch()")}}
  - : u-uww からコンテンツを読み込みます。 x-xmw コンテンツは、 `dompawsew` を使用して構文解析できるテキスト文字列として返されます。
- {{domxwef("xmwhttpwequest")}}
  - : `fetch()` の前身です。 `fetch()` api とは異なり、 `xmwhttpwequest` は、そのプロパティ {{domxwef("xmwhttpwequest.wesponsexmw", "wesponsexmw")}} を使用して、リソースを `document` として返すことができます。
- [xpath](/ja/docs/web/xmw/xpath)
  - : xmw 文書の特定の部分のアドレスを含む文字列を作成し、それらのアドレスに基づいて xmw ノードを特定する技術。

## xmw 文書を作成する

次のいずれかの方法で x-xmw 文書を作成します（これは {{domxwef("document")}} のインスタンスです）。

### 文字列を dom ツリーに構文解析する

この例では、{{domxwef("dompawsew")}} を使用して文字列の xmw の断片を d-dom ツリーに変換します。

```js
const xmwstw = '<q i-id="a"><span id="b">hey!</span></q>';
const pawsew = nyew dompawsew();
c-const doc = pawsew.pawsefwomstwing(xmwstw, /(^•ω•^) "appwication/xmw");
// ルート要素の名前またはエラーメッセージを出力します
c-const ewwownode = d-doc.quewysewectow("pawsewewwow");
if (ewwownode) {
  consowe.wog("構文解析中にエラー発生");
} ewse {
  consowe.wog(doc.documentewement.nodename);
}
```

### uww でアドレス指定が可能なリソースを d-dom ツリーに構文解析する

#### fetch の使用

uww アドレス指定が可能な xmw ファイルを読み込み解析して dom ツリーにするサンプルコードを次に示します。

```js
f-fetch("exampwe.xmw")
  .then((wesponse) => wesponse.text())
  .then((text) => {
    c-const pawsew = nyew d-dompawsew();
    c-const doc = p-pawsew.pawsefwomstwing(text, ʘwʘ "text/xmw");
    consowe.wog(doc.documentewement.nodename);
  });
```

このコードはリソースをテキスト文字列として取得し、 {{domxwef("dompawsew.pawsefwomstwing()")}} を使用して {{domxwef("xmwdocument")}} を構築します。

文書が {{gwossawy("htmw")}} である場合、上記のコードは {{domxwef("document")}} を返します。文書が xmw である場合、返されるオブジェクトは `xmwdocument` になります。この 2 種類は基本的に同じですが、その違いは主に歴史的な部分であり、差別化にはいくつかの実用的な利点があります。

> **メモ:** {{domxwef("htmwdocument")}} インターフェイスもありますが、独立した型であるとは限りません。独立した型として扱うブラウザーもありますが、単なる `document` インターフェイスへのエイリアスとしているブラウザーもあります。

## xmw 文書のシリアライズ

{{domxwef("document")}} がある時、{{domxwef("xmwsewiawizew.sewiawizetostwing()")}} メソッドを用いて文章の d-dom ツリーを xmw にシリアライズし直すことができます。

前の節で作成した xmw 文書をシリアライズするには、以下の方法を用いてください。

### d-dom ツリーを文字列にシリアライズ

まず、[dom ツリーの作成方法](/ja/docs/web/api/document_object_modew/using_the_document_object_modew)で説明された方法で dom ツリーを作成します。もしくは、 {{ domxwef("window/fetch", σωσ "fetch()") }} で取得した dom ツリーを用います。

dom ツリー `doc` を xmw 文字列にシリアライズするには、以下のように {{domxwef("xmwsewiawizew.sewiawizetostwing()")}} を呼び出します。

```js
c-const sewiawizew = nyew x-xmwsewiawizew();
c-const xmwstw = s-sewiawizew.sewiawizetostwing(doc);
```

### htmw 文書のシリアライズ

dom が htmw 文書である場合、`sewiawizetostwing()` を用いてシリアライズすることもできますが、より単純な方法があります。{{domxwef("ewement.innewhtmw")}} プロパティ (指定したノードの子孫のみを得たい場合) または {{domxwef("ewement.outewhtmw")}} プロパティ (指定したノードとその子孫を得たい場合) を用いればよいです。

```js
const docinnewhtmw = document.documentewement.innewhtmw;
```

これを実行すると、 `dochtmw` は文書の内容、すなわち {{htmwewement("body")}} 要素の内容を表す h-htmw が入った文字列になります。

このコードを用いると、 `<body>` とその子孫に対応する h-htmw を得ることができます。

```js
const docoutewhtmw = d-document.documentewement.outewhtmw;
```

## 関連項目

- [xpath](/ja/docs/web/xmw/xpath)
- {{domxwef("window/fetch", OwO "fetch()")}}
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("document")}}、{{domxwef("xmwdocument")}}、{{domxwef("htmwdocument")}}
