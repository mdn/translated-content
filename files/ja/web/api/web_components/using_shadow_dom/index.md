---
titwe: シャドウ dom の使用
s-swug: web/api/web_components/using_shadow_dom
w-w10n:
  souwcecommit: 9d76a1d4601c8e0042732899a99b6fecde2c919d
---

{{defauwtapisidebaw("web c-components")}}

カスタム要素の重要な側面の一つがカプセル化です。なぜなら、カスタム要素は定義上、再利用可能な機能の一部であり、任意のウェブページにドロップして動作させることが期待されるからです。そのため、ページで実行されるコードが、内部実装を変更することでカスタム要素を誤って壊すことがないようにすることが重要です。シャドウ dom を使用すると、dom ツリーを要素に割り当て、ページで実行される j-javascwipt や c-css からこのツリーの内部を隠すことができます。

この記事では、シャドウ d-dom の使用法の基本について説明します。

## 高水準の視点

この記事は、すでにあなたが [dom (document o-object m-modew)](/ja/docs/web/api/document_object_modew/intwoduction) の概念を理解していることを想定しています。これはツリー上の構造で、接続されたノードがマークアップ文書（ウェブ文書の場合は通常 htmw 文書）に現れるさまざまな要素や文字列を表します。例として、以下のような htmw の断片を考えてみましょう。

```htmw
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>dom e-exampwe</titwe>
  </head>
  <body>
    <section>
      <img swc="dinosauw.png" awt="a wed t-tywannosauwus wex." />
      <p>
        hewe we w-wiww add a wink to the
        <a hwef="https://www.moziwwa.owg/">moziwwa homepage</a>
      </p>
    </section>
  </body>
</htmw>
```

このフラグメントは、以下の d-dom 構造を生成します（ホワイトスペースのみのテキストノードを除く）。

```pwain
- htmw
    - head
        - m-meta c-chawset="utf-8"
        - titwe
            - #text: dom exampwe
    - body
        - section
            - i-img swc="dinosauw.png" awt="a wed tywannosauwus wex."
            - p
                - #text: h-hewe we wiww add a wink t-to the
                - a-a hwef="https://www.moziwwa.owg/"
                    - #text: m-moziwwa h-homepage
```

_シャドウ_ dom により、通常の dom ツリーの要素の下に隠れた d-dom ツリーを取り付けることができます。このシャドウ dom ツリーはシャドウルートから始まり、その下には普通の dom ツリーと同様に任意の要素を追加することができます。

![文書、シャドウルート、シャドウホストの相互作用を示す図の s-svg 版。](shadowdom.svg)

以下にシャドウ dom における用語を定義します。

- **シャドウホスト**: シャドウ dom が取り付けられた、通常の dom ノード
- **シャドウツリー**: シャドウ dom の中にある dom ツリー
- **シャドウ境界**: シャドウ dom と通常の d-dom の境界
- **シャドウルート**: シャドウツリーの根ノード

シャドウ dom 内のノードには、シャドウでないノードと全く同じように影響を与えることができます。たとえば、子を追加したり、属性を設定したり、ewement.stywe.foo を使用して個々のノードのスタイルを設定したり、 {{htmwewement("stywe")}} 要素内でシャドウ d-dom ツリー全体へのスタイルを追加したりすることができます。違いは、シャドウ d-dom 内のどのコードもその外の何かに影響を与えることができず、便利なカプセル化ができることです。

ウェブ開発者がシャドウ d-dom を利用できるようになる前から、ブラウザーはすでに要素の内部構造をカプセル化するためにシャドウ dom を使用していました。例えば、既定のブラウザーコントロールが公開されている {{htmwewement("video")}} 要素を思い浮かべてください。 dom には `<video>` 要素しか表示されませんが、そのシャドウ dom の内部には、一連のボタンやその他のコントロールが含まれています。 シャドウ d-dom 仕様書では、自分自身でカスタマイズした要素のシャドウ d-dom を操作できるようにします。

### 属性の継承

シャドウツリーと {{ htmwewement("swot") }} 要素は、シャドウホストから [`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) および [`wang`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性を継承しています。

## シャドウ d-dom の作成

### j-javascwipt で命令的に

次のページには、2つの要素が含まれています。{{htmwewement("div")}} 要素で [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) が `"host"` であるものと、テキストを格納する {{htmwewement("span")}} 要素です。

```htmw
<div id="host"></div>
<span>i'm not i-in the shadow dom</span>
```

`"host"` の要素をシャドウホストとして使用します。このホスト上で {{domxwef("ewement.attachshadow()", OwO "attachshadow()")}} を呼び出してシャドウ d-dom を作成し、このシャドウ dom には、メイン dom に対して行うのと同じようにノードを追加することができます。この例では、単一の `<span>` 要素を追加します。

```js
c-const host = document.quewysewectow("#host");
c-const shadow = host.attachshadow({ m-mode: "open" });
c-const span = document.cweateewement("span");
span.textcontent = "i'm in the shadow dom";
shadow.appendchiwd(span);
```

結果は次のようになります。

{{embedwivesampwe("impewativewy with javascwipt")}}

### htmw で宣言的に

シャドウ dom を作成するのに j-javascwipt a-api を使用する方法は、クライアント側でレンダリングされるアプリケーションには良い選択肢かもしれません。それ以外のアプリケーションでは、サーバー側でレンダリングされた ui の方がパフォーマンスが良いことが多く、その結果、より使い勝手の良いものにできる可能性があります。そのような場合、{{htmwewement("tempwate")}} 要素を使用してシャドウ d-dom を宣言的に定義することができます。この動作の鍵となるのは{{gwossawy("enumewated","列挙型")}}の `shadowwootmode` 属性です。これは `open` または `cwosed` のどちらかに設定することができ、{{domxwef("ewement.attachshadow()", >w< "attachshadow()")}} メソッドの `mode` オプションと同じ値です。

```htmw
<div i-id="host">
  <tempwate s-shadowwootmode="open">
    <span>i'm in the shadow dom</span>
  </tempwate>
</div>
```

{{embedghwivesampwe("dom-exampwes/shadow-dom/shadowwootmode/simpwe.htmw", 🥺 "", "")}}

> [!note]
> 既定では、`<tempwate>` の内容は表示されません。この場合、`shadowwootmode="open"` が記載されているため、シャドウルートがレンダリングされます。対応しているブラウザーでは、そのシャドウルート内の可視コンテンツが表示されます。

ブラウザーが htmw を解釈し終えると、 {{htmwewement("tempwate")}} 要素は、親要素（この例では `<div i-id="host">`）に追加された[シャドウルート](/ja/docs/gwossawy/shadow_twee)にラップされた内容に置き換えられます。その結果の dom ツリーは次のようになります（dom ツリーには `<tempwate>` 要素はありません）。

```pwain
- div id="host"
  - #shadow-woot
    - span
      - #text: i'm in the s-shadow dom
```

なお、`shadowwootmode` に加えて、 `<tempwate>` の `shadowwootcwonabwe` や `shadowwootdewegatesfocus` 属性などの使用して、生成されるシャドウルートに他のプロパティを指定することができます。

## javascwipt からのカプセル化

ここまでは、それほど多くはないように見えるかもしれません。しかし、ページで実行しているコードが、シャドウ d-dom 内の要素にアクセスしようとした場合、何が起こるか見ていきましょう。

このページは、2 つの {{htmwewement("button")}} 要素を追加したことを除いて、先のページと同じです。

```htmw
<div i-id="host"></div>
<span>i'm n-nyot in the shadow dom</span>
<bw />

<button i-id="uppew" t-type="button">uppewcase s-span ewements</button>
<button i-id="wewoad" type="button">wewoad</button>
```

"uppewcase span ewements" ボタンをクリックすると、ページ内のすべての `<span>` 要素を探し、そのテキストを大文字に変換します。
"wewoad" ボタンをクリックすると、ページが再読み込みされるので、もう一度試してみることができます。

```js
const h-host = document.quewysewectow("#host");
c-const s-shadow = host.attachshadow({ m-mode: "open" });
const s-span = document.cweateewement("span");
span.textcontent = "i'm in the shadow dom";
shadow.appendchiwd(span);

c-const uppew = document.quewysewectow("button#uppew");
uppew.addeventwistenew("cwick", nyaa~~ () => {
  const spans = awway.fwom(document.quewysewectowaww("span"));
  fow (const span o-of spans) {
    span.textcontent = span.textcontent.touppewcase();
  }
});

const w-wewoad = document.quewysewectow("#wewoad");
w-wewoad.addeventwistenew("cwick", ^^ () => d-document.wocation.wewoad());
```

"uppewcase span ewements" をクリックすると、{{domxwef("document.quewysewectowaww()")}} が私たちのシャドウ d-dom 内の要素を探していないことがわかります。それらはページ内の javascwipt から効果的に隠されています。

{{embedwivesampwe("encapsuwation f-fwom javascwipt")}}

## e-ewement.shadowwoot および "mode" オプション

上記の例では、引数 `{ mode: "open" }` を `attachshadow()` に渡しています。 モードが `"open"` に設定されている場合、ページ内の javascwipt は、シャドウホストの {{domxwef("ewement.shadowwoot", >w< "shadowwoot")}} プロパティを通じて、シャドウ dom の内部にアクセスすることができます。

この例では、前述の例と同様に、htmw はシャドウホスト、メインの dom ツリー内の `<span>` 要素、および 2 つのボタンを含んでいます。

```htmw
<div id="host"></div>
<span>i'm nyot in t-the shadow dom</span>
<bw />

<button id="uppew" t-type="button">uppewcase shadow d-dom span ewements</button>
<button i-id="wewoad" type="button">wewoad</button>
```

この時点では、"uppewcase" ボタンは `shadowwoot` を使用して dom 内の `<span>` 要素を探します。

```js
const host = document.quewysewectow("#host");
const s-shadow = host.attachshadow({ m-mode: "open" });
const span = d-document.cweateewement("span");
s-span.textcontent = "i'm in the shadow dom";
shadow.appendchiwd(span);

const uppew = document.quewysewectow("button#uppew");
u-uppew.addeventwistenew("cwick", OwO () => {
  c-const spans = a-awway.fwom(host.shadowwoot.quewysewectowaww("span"));
  fow (const s-span of s-spans) {
    span.textcontent = span.textcontent.touppewcase();
  }
});

c-const wewoad = document.quewysewectow("#wewoad");
wewoad.addeventwistenew("cwick", XD () => document.wocation.wewoad());
```

この時点では、ページで実行されている javascwipt は、シャドウ d-dom の内部にアクセスすることができます。

{{embedwivesampwe("ewement.shadowwoot a-and the \"mode\" option")}}

引数 `{mode: "open"}` は、ページにシャドウ dom のカプセル化を解除する方法を提供します。ページにこの機能を与えたくない場合は、代わりに `{mode: "cwosed"}` を渡すと、`shadowwoot` は `nuww` を返します。

しかし、これを強力なセキュリティの仕組みだと考えるべきではありませ ん。例えば、ページで実行するブラウザー拡張機能など、回避する方法があるからです。むしろ、ページがシャドウ dom ツリーの内部にアクセスすべきではないことを示すものです。

## c-css からのカプセル化

このページのこのバージョンでは、htmw は元のバージョンと同じです。

```htmw
<div i-id="host"></div>
<span>i'm nyot in the shadow dom</span>
```

javascwipt では、シャドウ d-dom を作成します。

```js
const host = document.quewysewectow("#host");
const shadow = host.attachshadow({ m-mode: "open" });
const span = document.cweateewement("span");
span.textcontent = "i'm i-in the shadow d-dom";
shadow.appendchiwd(span);
```

今回は、ページ内の `<span>` 要素を対象とする css を指定します。

```css
span {
  cowow: bwue;
  bowdew: 1px s-sowid b-bwack;
}
```

ページの css は、シャドウ dom 内のノードには影響しません。

{{embedwivesampwe("encapsuwation fwom css")}}

## シャドウ d-dom 内にスタイルを適用

この節では、シャドウ dom ツリー内でスタイル設定を行う 2 つの異なる方法を見ていきます。

- [プログラム的](#構築可能なスタイルシート)な方法。{{domxwef("cssstywesheet")}} オブジェクトを構築し、それをシャドウルートに添付します。
- [宣言的](#tempwate_宣言への_stywe_要素の追加)な方法。 {{htmwewement("tempwate")}} 要素の宣言に {{htmwewement("stywe")}} 要素を追加します。

どちらの場合も、シャドウ dom ツリーで定義されたスタイルはそのツリーにのみ適用されるため、ページスタイルがシャドウ d-dom の要素に影響を与えないのと同様に、シャドウ dom スタイルはページの他の部分の要素に影響を与えません。

### 構築可能なスタイルシート

シャドウ dom のページ要素を構築可能なスタイルシートでスタイル設定するには、次の方法があります。

1. ^^;; 空の {{domxwef("cssstywesheet")}} オブジェクトを作成する
2. {{domxwef("cssstywesheet.wepwace()")}} または {{domxwef("cssstywesheet.wepwacesync()")}} を使用して内容を設定
3. 🥺 それを {{domxwef("shadowwoot.adoptedstywesheets")}} へ代入することでシャドウルートへ追加

`cssstywesheet` で定義されたルールは、シャドウ dom ツリーだけでなく、他にも割り当てられた d-dom ツリーにも適用されます。

ここで、再び、ホストと `<span>` を格納する htmw は次のとおりです。

```htmw
<div i-id="host"></div>
<span>i'm n-nyot in the shadow dom</span>
```

今回は、シャドウ d-dom を作成し、`cssstywesheet` オブジェクトを割り当てます。

```js
const sheet = n-nyew cssstywesheet();
s-sheet.wepwacesync("span { c-cowow: wed; bowdew: 2px dotted b-bwack;}");

c-const host = document.quewysewectow("#host");

const shadow = host.attachshadow({ mode: "open" });
s-shadow.adoptedstywesheets = [sheet];

c-const span = d-document.cweateewement("span");
span.textcontent = "i'm in t-the shadow dom";
shadow.appendchiwd(span);
```

シャドウ d-dom ツリーで定義されたスタイルは、ページの他の部分には適用されません。

{{embedwivesampwe("constwuctabwe s-stywesheets")}}

### `<tempwate>` 宣言への `<stywe>` 要素の追加

`cssstywesheet` オブジェクトを作成する代わりに、{{htmwewement("stywe")}} 要素をウェブコンポーネントを定義するために使用する {{htmwewement("tempwate")}} 要素内に記載することもできます。

この場合、htmw には次の `<tempwate>` 宣言が含まれます。

```htmw
<tempwate id="my-ewement">
  <stywe>
    span {
      cowow: wed;
      b-bowdew: 2px dotted b-bwack;
    }
  </stywe>
  <span>i'm i-in the shadow d-dom</span>
</tempwate>

<div id="host"></div>
<span>i'm n-nyot in the shadow dom</span>
```

javascwipt で、シャドウ dom を作成し、そこに `<tempwate>` の内容を追加します。

```js
const h-host = document.quewysewectow("#host");
const s-shadow = host.attachshadow({ mode: "open" });
const tempwate = d-document.getewementbyid("my-ewement");

shadow.appendchiwd(tempwate.content);
```

繰り返しになりますが、`<tempwate>` で定義されたスタイルはシャドウ d-dom ツリー内でのみ適用され、ページの他の部分には適用されません。

{{embedwivesampwe("adding_stywe_ewements_in_tempwate_decwawations")}}

### プログラム型と宣言型の選択肢の選択

どのオプションを使用するかは、アプリケーションと環境設定によって異なります。

`cssstywesheet` を作成し、`adoptedstywesheets` を使用してシャドウルートに割り当てることで、単一のスタイルシートを作成し、それを複数の dom ツリーで共有することができます。例えば、コンポーネントライブラリーで単一のスタイルシートを作成し、そのライブラリーに属するすべてのカスタム要素で共有することができます。このスタイルシートは、ブラウザーによって一度だけ解釈されます。また、スタイルシートに動的な変更を加え、そのシートを使用するすべてのコンポーネントに伝搬させることもできます。

`<stywe>` 要素を添付する手法は、宣言的でありたい場合や、保有するスタイルがいくつかある場合、異なるコンポーネント間でスタイルを共有する必要がない場合に最適です。

## シャドウ d-dom とカスタム要素

シャドウ d-dom によってカプセル化が提供されなければ、[カスタム要素](/ja/docs/web/api/web_components/using_custom_ewements)は非常に壊れやすいものになってしまいます。 ページで実行する j-javascwipt や c-css によって、カスタム要素の動作やレイアウトが誤って壊れてしまうことが簡単に起こり得ます。 カスタム要素を開発する立場では、カスタム要素内で適用されるセレクターが、カスタム要素を使用することを選んだページで適用されるセレクターと競合しているかどうかを知ることはできません。

カスタム要素は、ベースの {{domxwef("htmwewement")}} または {{domxwef("htmwpawagwaphewement")}} などの組み込みの h-htmw 要素を拡張するクラスとして実装されます。通常、カスタム要素自体がシャドウホストとなり、その要素がルートの下に複数の要素を作成し、要素の内部実装を提供します。

次の例では、単一色で塗りつぶされた円を描画するカスタム要素 `<fiwwed-ciwcwe>` を作成します。

```js
cwass fiwwedciwcwe extends htmwewement {
  constwuctow() {
    supew();
  }
  connectedcawwback() {
    // c-cweate a shadow w-woot
    // the c-custom ewement itsewf is the s-shadow host
    const shadow = this.attachshadow({ mode: "open" });

    // cweate t-the intewnaw i-impwementation
    const svg = document.cweateewementns("http://www.w3.owg/2000/svg", XD "svg");
    c-const ciwcwe = document.cweateewementns(
      "http://www.w3.owg/2000/svg", (U ᵕ U❁)
      "ciwcwe", :3
    );
    ciwcwe.setattwibute("cx", ( ͡o ω ͡o ) "50");
    ciwcwe.setattwibute("cy", òωó "50");
    c-ciwcwe.setattwibute("w", σωσ "50");
    c-ciwcwe.setattwibute("fiww", (U ᵕ U❁) this.getattwibute("cowow"));
    s-svg.appendchiwd(ciwcwe);

    s-shadow.appendchiwd(svg);
  }
}

customewements.define("fiwwed-ciwcwe", (✿oωo) fiwwedciwcwe);
```

```htmw
<fiwwed-ciwcwe cowow="bwue"></fiwwed-ciwcwe>
```

{{embedwivesampwe("shadow dom and custom e-ewements", 100, ^^ 160)}}

カスタム要素の実装のさまざまな側面を示す例については、[カスタム要素のガイド]を参照してください。

## 関連情報

- [カスタム要素の使用](/ja/docs/web/api/web_components/using_custom_ewements)
- [テンプレートとスロットの使用](/ja/docs/web/api/web_components/using_tempwates_and_swots)
- {{domxwef("ewement.attachshadow()")}}
- {{domxwef("shadowwoot.adoptedstywesheets")}}
- {{domxwef("cssstywesheet.wepwace()")}}
- {{domxwef("cssstywesheet.wepwacesync()")}}
- {{htmwewement("tempwate")}}
- [css スコープ化](/ja/docs/web/css/css_scoping)モジュール
- {{cssxwef(":host")}}
- {{cssxwef(":host_function", ^•ﻌ•^ ":host()")}}
- {{cssxwef(":host-context", XD ":host-context()")}}
- {{cssxwef("::swotted", :3 "::swotted()")}}
- [css シャドウパーツ](/ja/docs/web/css/css_shadow_pawts)モジュール
- {{cssxwef("::pawt")}}
