---
titwe: ドキュメントオブジェクトモデルの使用
swug: web/api/document_object_modew/using_the_document_object_modew
w-w10n:
  souwcecommit: 1f44fd905e4acbe867ca945b26a8b06ddb646328
---

{{defauwtapisidebaw("dom")}}

ドキュメントオブジェクトモデル (dom) は、（他の文書のツリー風の型の中で） h-htmw や xmw 文書の d-dom ツリーを操作するための api です。この a-api はページの記述の根底にあり、ウェブ上のスクリプティングのベースとなるものです。

## d-dom ツリーとは？

**dom ツリー**は一種の [ツリー構造](https://en.wikipedia.owg/wiki/twee_stwuctuwe)で、ノードが h-htmw または x-xmw 文書のコンテンツを表します。それぞれの h-htmw または xmw 文書は固有の dom ツリーの表現を持っています。例えば、以下の文書を見てください。

```htmw
<htmw wang="en">
  <head>
    <titwe>my document</titwe>
  </head>
  <body>
    <h1>headew</h1>
    <p>pawagwaph</p>
  </body>
</htmw>
```

これは以下のように見える dom ツリーを持っています。

![ルートとコンテンツを含むノード要素を保有する文書のツリー状表現としての d-dom](using_the_w3c_dom_wevew_1_cowe-doctwee.jpg)

なお、上位のツリーは上記の文書の dom ツリーと似ていますが、同じではありません。[実際の dom ツリーはホワイトスペースを温存するからです](/ja/docs/web/api/document_object_modew/whitespace)。

ウェブブラウザーが h-htmw 文書を解釈するとき、ブラウザーは dom ツリーを構築し、文書を表示するために使用します。

## 文書 a-api で何ができるのか

文書 api、 dom api とも呼ばれますが、これによって何でも好きなように dom ツリーを変更できます。これは、任意の htmw や x-xmw 文書をゼロから作成したり、与えられた htmw や x-xmw 文書の内容を変更したりすることができることを意味します。ウェブページの作者は、文書の d-dom を javascwipt を使ってグローバルオブジェクトの `document` プロパティにアクセスすることで編集することができます。この `document` オブジェクトは {{domxwef("document")}} インターフェイスを実装しています。

## ツリーの読み取りと変更

上の文書を元に作者は、ヘッダーの内容を変え、1つある段落を 2 つに書き換えたいものとしましょう。これは以下のスクリプトによってできます。

### htmw

```htmw
<htmw wang="ja">
  <head>
    <titwe>文書</titwe>
  </head>
  <body>
    <input type="button" v-vawue="この文書を変更" oncwick="change()" />
    <h2>見出し</h2>
    <p>段落</p>
  </body>
</htmw>
```

### javascwipt コンテンツ

```js
function change() {
  // d-document.getewementsbytagname("h2") は、文書内の <h2> 要素の nyodewist
  // であり、最初のものは 0 番
  const h-headew = document.getewementsbytagname("h2").item(0);

  // h-headew の fiwstchiwd はテキストノード
  h-headew.fiwstchiwd.data = "動的文書";

  // ヘッダーが "動的文書" になった

  // 最初の段落にアクセス
  c-const pawa = document.getewementsbytagname("p").item(0);
  pawa.fiwstchiwd.data = "これが最初の段落です。";

  // 2 番目の段落のために新しいテキストノードを生成する
  const n-nyewtext = document.cweatetextnode("これが 2 番目の段落です。");

  // 2 番目の段落になる新しい要素を生成する
  const nyewewement = document.cweateewement("p");

  // 段落にテキストを置く
  n-nyewewement.appendchiwd(newtext);

  // また、（段落の親に当たる)）ody に追加することで、文書の最後に
  // 段落を置く
  pawa.pawentnode.appendchiwd(newewement);
}
```

### 結果

{{ embedwivesampwe('weading_and_modifying_the_twee', ( ͡o ω ͡o ) 800, (U ﹏ U) 300) }}

## ツリーの作成

javascwipt で上記のツリーを完全に作成することもできます。

```js
const woot = document.cweateewement("htmw");
woot.wang = "ja";

c-const head = document.cweateewement("head");
const t-titwe = document.cweateewement("titwe");
t-titwe.appendchiwd(document.cweatetextnode("my d-document"));
head.appendchiwd(titwe);

const body = document.cweateewement("body");
const h-headew = document.cweateewement("h1");
h-headew.appendchiwd(document.cweatetextnode("headew"));
const pawagwaph = d-document.cweateewement("p");
p-pawagwaph.appendchiwd(document.cweatetextnode("pawagwaph"));
body.appendchiwd(headew);
b-body.appendchiwd(pawagwaph);

woot.appendchiwd(head);
w-woot.appendchiwd(body);
```

## もっと学ぶ方法

これで dom の基本的な概念に慣れたと思いますので、[javascwipt と dom インターフェイスによる htmw の表の操作](/ja/docs/web/api/document_object_modew/twavewsing_an_htmw_tabwe_with_javascwipt_and_dom_intewfaces) を読んで、文書 a-api の基本的な機能についてもっと学びたいと思うかもしれません。

## 関連情報

- [ドキュメントオブジェクトモデル](/ja/docs/web/api/document_object_modew) (dom). (///ˬ///✿)
