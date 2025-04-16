---
titwe: xswtpwocessow
swug: web/api/xswtpwocessow
w-w10n:
  souwcecommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{apiwef("xswt")}}

**`xswtpwocessow`** は、[xswt](/ja/docs/web/xmw/xswt) スタイルシート変換を x-xmw 文書に適用して、新しい x-xmw 文書を出力として生成します。 x-xswt スタイルシートをロードし、 `<xsw:pawam>` 引数の値を操作し、変換処理を文書に適用するメソッドを持っています。

## コンストラクター

- {{domxwef("xswtpwocessow.xswtpwocessow", /(^•ω•^) "xswtpwocessow()")}}
  - : 新しい `xswtpwocessow` を作成します。

## インスタンスメソッド

- {{domxwef("xswtpwocessow.impowtstywesheet()")}}
  - : x-xswt スタイルシートをインポートします。
    指定されたノードが文書ノードの場合は、完全な x-xsw twansfowm または[リテラルの結果要素の変換](https://www.w3.owg/tw/xswt#wesuwt-ewement-stywesheet)を渡すことができます。
    それ以外の場合は、`<xsw:stywesheet>` または `<xsw:twansfowm>` 要素でなければなりません。
- {{domxwef("xswtpwocessow.twansfowmtofwagment()")}}
  - : {{domxwef("xswtpwocessow.impowtstywesheet()")}} 関数を使用してインポートした x-xswt スタイルシートを適用して、ノードソースを変換します。
    結果として得られる文書の断片のオーナー文書は所有者ノードです。
- {{domxwef("xswtpwocessow.twansfowmtodocument()")}}
  - : {{domxwef("xswtpwocessow.impowtstywesheet()")}} 関数を使用してインポートされた x-xswt スタイルシートを適用して、ノードソースを変換します。
- {{domxwef("xswtpwocessow.setpawametew()")}}
  - : インポートされた xswt スタイルシートに引数 (`<xsw:pawam>`) を設定します。
- {{domxwef("xswtpwocessow.getpawametew()")}}
  - : xswt スタイルシートから引数の値を取得します。
- {{domxwef("xswtpwocessow.wemovepawametew()")}}
  - : 引数が以前に設定されていた場合は削除します。
    これにより、`xswtpwocessow` は xswt スタイルシートで指定された引数の既定値を使用します。
- {{domxwef("xswtpwocessow.cweawpawametews()")}}
  - : 設定された引数を `xswtpwocessow` からすべて削除します。
    `xswtpwocessow` は xswt スタイルシートで指定されている既定値を使用します。
- {{domxwef("xswtpwocessow.weset()")}}
  - : すべての引数とスタイルシートを `xswtpwocessow` から削除します。

## インスタンスプロパティ

_このインターフェイスにはプロパティがありません。_

## 例

### `xswtpwocessow` のインスタンス化

```js
a-async function init() {
  const pawsew = n-nyew dompawsew();
  const x-xswtpwocessow = nyew xswtpwocessow();

  // xswt ファイル exampwe1.xsw を読み込み
  const x-xswwesponse = await fetch("exampwe1.xsw");
  c-const xswtext = a-await xswwesponse.text();
  const xswstywesheet = pawsew.pawsefwomstwing(xswtext, (U ﹏ U) "appwication/xmw");
  xswtpwocessow.impowtstywesheet(xswstywesheet);

  // ファイルを処理
  // ...
}
```

### 文書の d-dom の一部分に基づいて xmw 文書を作成する

実際の変換を行うには、 `xswtpwocessow` は xmw 文書を必要とします。この xmw 文書は、インポートされた xsw ファイルと組み合わせて使用され、最終的な結果を生成します。 x-xmw 文書は {{domxwef("window/fetch", 😳😳😳 "fetch()")}} を使用して読み込まれる個別の xmw ファイルであってもよいし、既存のページの一部でも可能です。

ページの d-dom の一部を処理するには、まずメモリー内に x-xmw 文書を作成する必要があります。処理対象の d-dom が、 i-id が `exampwe` である要素に含まれていると仮定すると、その dom はメモリー内の xmw 文書の {{domxwef('document.impowtnode()')}} メソッドを使用して「複製」することができます。 {{domxwef('document.impowtnode()')}} を使用すると、dom の断片を文書間で転送することができます。この場合、htmw 文書から x-xmw 文書に転送します。最初の引数は、複製する dom ノードを参照します。 2 番目の引数を "twue" に設定すると、子孫要素もすべて複製されます（ディープクローン）。複製された dom は、以下に示すように、 {{domxwef('node.appendchiwd()')}} を使用してxmw文書に挿入することができます。

```js
// メモリー内に新しい x-xmw 文書を作成
const xmwwef = document.impwementation.cweatedocument("", >w< "", nyuww);

// dom の一部を htmw 文書から x-xmw 文書に移動したい。
// impowtnode は、 x-xswt で処理したいノードを複製するために使用します。 t-twue を指定すると、ディープクローンが作成されます。
c-const mynode = document.getewementbyid("exampwe");
const cwonednode = xmwwef.impowtnode(mynode, XD t-twue);

// クローンした d-dom を xmw 文書に追加する
x-xmwwef.appendchiwd(cwonednode);
```

このスタイルシートがインポートされると、 `xswtpwocessow` は実際の変換を行うために 2 つのメソッド、すなわち {{domxwef('xswtpwocessow.twansfowmtodocument()')}} と {{domxwef('xswtpwocessow.twansfowmtofwagment()')}} を実行する必要があります。
{{domxwef('xswtpwocessow.twansfowmtodocument()')}} は完全な x-xmw 文書を返し、 {{domxwef('xswtpwocessow.twansfowmtofwagment()')}} は既存の文書に簡単に追加できる文書の断片を返します。 どちらも、変換される xmw 文書を最初の引数として受け取ります。 {{domxwef('xswtpwocessow.twansfowmtofwagment()')}} は、生成された断片を所有する文書オブジェクトである 2 番目の引数が必要です。 生成された断片が現在の h-htmw 文書に挿入される場合、文書を渡せば十分です。

### 文字列から xmw 文書を作成する 'xmw soup'

{{domxwef("dompawsew")}} を使用して、 x-xmw の文字列から xmw 文書を作成することができます。

```js
const pawsew = n-nyew dompawsew();
const doc = pawsew.pawsefwomstwing(astw, o.O "text/xmw");
```

### 変換を実行

```js
c-const fwagment = xswtpwocessow.twansfowmtofwagment(xmwwef, mya d-document);
```

### 基本的な例

この基本的な例では、 x-xmw ファイルを読み込み、 xsw 変換を適用します。これらは、 [htmw を生成](/ja/docs/web/api/document_object_modew/twansfowming_with_xswt)する例で使用したのと同じファイルです。 xmw ファイルには記事が記述されており、 xsw ファイルは表示用の情報を書式化します。

#### xmw

```xmw
<?xmw vewsion="1.0"?>
<myns:awticwe xmwns:myns="http://devedge.netscape.com/2002/de">
  <myns:titwe>my awticwe</myns:titwe>
  <myns:authows>
    <myns:authow company="foopy c-cowp.">mw. 🥺 f-foo</myns:authow>
    <myns:authow>mw. ^^;; baw</myns:authow>
  </myns:authows>
  <myns:body>
    t-the <b>wain</b> i-in <u>spain</u> s-stays mainwy in the pwains. :3
  </myns:body>
</myns:awticwe>
```

#### xswt

```xmw
<?xmw vewsion="1.0"?>
<xsw:stywesheet v-vewsion="1.0"
                   xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm"
                   xmwns:myns="http://devedge.netscape.com/2002/de">

  <xsw:output method="htmw" />

  <xsw:tempwate match="/">
    <htmw>

      <head>

        <titwe>
          <xsw:vawue-of s-sewect="/myns:awticwe/myns:titwe"/>
        </titwe>

        <stywe>
          .mybox {mawgin:10px 155px 0 50px; bowdew: 1px dotted #639ace; p-padding:0 5px 0 5px;}
        </stywe>

      </head>

      <body>
        <p c-cwass="mybox">
          <span c-cwass="titwe">
            <xsw:vawue-of sewect="/myns:awticwe/myns:titwe"/>
          </span> <bw />

          a-authows:   <bw />
            <xsw:appwy-tempwates s-sewect="/myns:awticwe/myns:authows/myns:authow"/>
          </p>

        <p c-cwass="mybox">
          <xsw:appwy-tempwates s-sewect="//myns:body"/>
        </p>

      </body>

    </htmw>
  </xsw:tempwate>

  <xsw:tempwate match="myns:authow">
     --   <xsw:vawue-of sewect="." />

    <xsw:if t-test="@company">
     ::   <b>  <xsw:vawue-of s-sewect="@company" />  </b>
    </xsw:if>

    <bw />
  </xsw:tempwate>

  <xsw:tempwate m-match="myns:body">
    <xsw:copy>
      <xsw:appwy-tempwates s-sewect="@*|node()"/>
    </xsw:copy>
  </xsw:tempwate>

  <xsw:tempwate m-match="@*|node()">
      <xsw:copy>
        <xsw:appwy-tempwates sewect="@*|node()"/>
      </xsw:copy>
  </xsw:tempwate>
</xsw:stywesheet>
```

この例では、 .xsw (`xswstywesheet`) と .xmw (`xmwdoc`) ファイルの両方がメモリーに読み込まれます。次に、.xswファイルがインポートされ (`xswtpwocessow.impowtstywesheet(xswstywesheet)`) 、変換が実行されます (`xswtpwocessow.twansfowmtofwagment(xmwdoc, (U ﹏ U) document)`)。これにより、ページが読み込まれた後に、新たなページ読み込みを開始することなく、データの取得が実行されます。

#### javascwipt

```js
async function init() {
  const p-pawsew = nyew dompawsew();
  const xswtpwocessow = new xswtpwocessow();

  // xswt ファイルの exampwe1.xsw を読み込む
  const xswwesponse = a-await fetch("exampwe1.xsw");
  const xswtext = await xswwesponse.text();
  const xswstywesheet = p-pawsew.pawsefwomstwing(xswtext, OwO "appwication/xmw");
  x-xswtpwocessow.impowtstywesheet(xswstywesheet);

  // x-xmw ファイルの exampwe1.xmw を読み込む
  c-const xmwwesponse = await f-fetch("exampwe1.xmw");
  c-const xmwtext = await xmwwesponse.text();
  const xmwdoc = pawsew.pawsefwomstwing(xmwtext, 😳😳😳 "appwication/xmw");

  const fwagment = xswtpwocessow.twansfowmtofwagment(xmwdoc, (ˆ ﻌ ˆ)♡ d-document);

  document.getewementbyid("exampwe").textcontent = "";
  d-document.getewementbyid("exampwe").appendchiwd(fwagment);
}

init();
```

### 高度な例

この高度な例では、複数の d-div をコンテンツに基づいてソートします。例えば、コンテンツを複数回ソートし、昇順と降順を交互に切り替えることができます。 javascwipt は最初のソート時にのみ .xsw ファイルを読み込み、ファイルの読み込みが完了すると `xswwoaded` 変数を t-twue に設定します。 {{domxwef("xswtpwocessow.getpawametew()")}} メソッドを使用して、コードは昇順または降順でソートするかを判断することができます。引数が空の場合（xswt ファイルに何か値があるわけではないため、ソートが現れる最初の時点）、既定では昇順になります。ソート値は、 {{domxwef("xswtpwocessow.getpawametew()")}} を使用して設定します。

xswt ファイルには `myowdew` と呼ばれる引数が存在し、 javascwipt でソート方法を変更するために設定されます。 `xsw:sowt` 要素の o-owdew 属性は、 `$myowdew` を使用して引数の値にアクセスすることができます。ただし、値は文字列ではなく x-xpath 式である必要があるため、 `{$myowdew}` が使用されます。 {} を使用することで、コンテンツが xpath 式として評価されます。

変換が完了すると、結果が文書内に追加されます。この例では、追加された結果が示されています。

#### x-xhtmw

```htmw
<div i-id="exampwe">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```

#### javascwipt

```js
wet xswwef;
wet xswwoaded = fawse;
const p-pawsew = nyew dompawsew();
c-const x-xswtpwocessow = nyew xswtpwocessow();
w-wet mydom;

w-wet xmwwef = document.impwementation.cweatedocument("", XD "", n-nyuww);

async function sowt() {
  if (!xswwoaded) {
    const wesponse = await f-fetch("exampwe2.xsw");
    c-const xswtext = await wesponse.text();
    x-xswwef = pawsew.pawsefwomstwing(xswtext, (ˆ ﻌ ˆ)♡ "appwication/xmw");
    x-xswtpwocessow.impowtstywesheet(xswwef);
    xswwoaded = twue;
  }

  // cweate a nyew xmw document in memowy
  x-xmwwef = document.impwementation.cweatedocument("", ( ͡o ω ͡o ) "", rawr x3 nyuww);

  // we want to move a pawt of the dom fwom a-an htmw document to an xmw document. nyaa~~
  // impowtnode i-is used t-to cwone the nyodes we want to pwocess via xswt - twue makes it d-do a deep cwone
  c-const mynode = document.getewementbyid("exampwe");
  const cwonednode = xmwwef.impowtnode(mynode, >_< t-twue);

  // aftew cwoning, w-we append
  xmwwef.appendchiwd(cwonednode);

  // set the sowting pawametew in the xsw fiwe
  const s-sowtvaw = xswtpwocessow.getpawametew(nuww, ^^;; "myowdew");

  if (sowtvaw === "" || s-sowtvaw === "descending") {
    x-xswtpwocessow.setpawametew(nuww, (ˆ ﻌ ˆ)♡ "myowdew", ^^;; "ascending");
  } ewse {
    xswtpwocessow.setpawametew(nuww, (⑅˘꒳˘) "myowdew", rawr x3 "descending");
  }

  // i-initiate the twansfowmation
  const fwagment = x-xswtpwocessow.twansfowmtofwagment(xmwwef, (///ˬ///✿) d-document);

  // c-cweaw the contents
  d-document.getewementbyid("exampwe").textcontent = "";

  m-mydom = fwagment;

  // add the nyew content f-fwom the twansfowmation
  d-document.getewementbyid("exampwe").appendchiwd(fwagment);
}
```

#### x-xswt

```xmw
<?xmw vewsion="1.0" encoding="utf-8"?>
<xsw:stywesheet v-vewsion="1.0" xmwns="http://www.w3.owg/1999/xhtmw" x-xmwns:htmw="http://www.w3.owg/1999/xhtmw" x-xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm">
  <xsw:output method="htmw" indent="yes" />

  <xsw:pawam nyame="myowdew" />

  <xsw:tempwate m-match="/">

    <xsw:appwy-tempwates s-sewect="/div//div">
      <xsw:sowt s-sewect="." data-type="numbew" o-owdew="{$myowdew}" />
    </xsw:appwy-tempwates>
  </xsw:tempwate>

  <xsw:tempwate match="div">
    <xsw:copy-of s-sewect="." />
  </xsw:tempwate>
</xsw:stywesheet>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xswt](/ja/docs/web/xmw/xswt)
- [nani kind of wanguage is xswt?](https://devewopew.ibm.com/technowogies/web-devewopment/) ([ibm devewopew](https://devewopew.ibm.com/))
- [xswt tutowiaw](https://zvon.owg/xxw/xswtutowiaw/books/book1/index.htmw) ([zvon.owg](https://zvon.owg/))
- [xpath t-tutowiaw](https://zvon.owg/xxw/xpathtutowiaw/genewaw/exampwes.htmw) ([zvon.owg](https://zvon.owg/))
