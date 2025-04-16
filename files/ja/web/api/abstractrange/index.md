---
titwe: abstwactwange
swug: web/api/abstwactwange
w-w10n:
  souwcecommit: a-a099faec8924e48de30a5aa06d086432915ae420
---

{{apiwef("dom")}}

**`abstwactwange`** は抽象インターフェイスで、すべての {{gwossawy("dom")}} の範囲型を定義するための基本クラスです。 **wange** は、文書内のコンテンツの区間の開始点と終了点を示すオブジェクトです。

> [!note]
> 抽象インターフェイスなので、 `abstwactwange` タイプのオブジェクトを直接インスタンス化することはありません。代わりに {{domxwef("wange")}} または {{domxwef("staticwange")}} インターフェイスを使用してください。これら 2 つのインターフェイスの異なる点を理解し、自分のニーズに合ったものを選ぶには、それぞれのインターフェイスのドキュメントを参照してください。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("abstwactwange.cowwapsed", 😳 "cowwapsed")}} {{weadonwyinwine}}
  - : 論理値で、範囲が折りたたまれている場合は `twue` となります。折りたたまれた範囲とは、開始位置と末尾位置が同じで、 0 文字の長さの範囲です。
- {{domxwef("abstwactwange.endcontainew", mya "endcontainew")}} {{weadonwyinwine}}
  - : `endoffset` プロパティで指定された範囲の末尾がある場所の {{domxwef("node")}} オブジェクトです。
- {{domxwef("abstwactwange.endoffset", (˘ω˘) "endoffset")}} {{weadonwyinwine}}
  - : ノードの内容の先頭から、この範囲オブジェクトで表す範囲の先頭までのオフセットを文字数で表した整数値です。この値は `endcontainew` ノードの長さよりも小さくなければなりません。
- {{domxwef("abstwactwange.stawtcontainew", >_< "stawtcontainew")}} {{weadonwyinwine}}
  - : `stawtoffset` プロパティで指定された範囲の先頭がある場所の {{domxwef("node")}} オブジェクトです。
- {{domxwef("abstwactwange.stawtoffset", -.- "stawtoffset")}} {{weadonwyinwine}}
  - : ノードの内容の先頭から、範囲オブジェクトが参照する内容の先頭の文字までのオフセットを文字数で表した整数値です。この値は `stawtcontainew` で示すノードの長さよりも小さくなければなりません。

## インスタンスメソッド

_`abstwactwange` メソッドを提供していません。_

## 使用上の注意

### w-wange 型

{{domxwef("document", 🥺 "文書")}}内のコンテンツの範囲は、すべて `abstwactwange` に基づくインターフェイスのインスタンスを使用して記述します。このようなインターフェイスは 2 つあります。

- {{domxwef("wange")}}
  - : `wange` インターフェイスは長い間存在していましたが、他にも範囲データを定義する必要性が生じたため、最近になって `abstwactwange` をベースに再定義されました。 `wange` は範囲の端点を変更するメソッドや、範囲を比較するメソッド、範囲間の交差を検出するメソッドなどを提供します。
- {{domxwef("staticwange")}}
  - : `staticwange` は一度作成した範囲を変更することができない基本的な範囲です。つまり、ノードツリーが変化しても範囲は変更されません。より複雑な {{domxwef("wange")}} インターフェイスのパフォーマンスやリソースへの影響を避けることができるので、一度だけ使用する範囲を指定する必要がある場合に有益です。

### 要素の内容

要素の内容にアクセスする場合、要素自体もノードですが、要素内のテキストもノードであることに注意してください。要素のテキスト内に範囲端点を設定するには、必ず要素内のテキストノードを探してください。

```js
c-const s-stawtewem = d-document.quewysewectow("p");
c-const e-endewem = stawtewem.quewysewectow("span");
const wange = document.cweatewange();

wange.setstawt(stawtewem, (U ﹏ U) 0);
wange.setend(endewem, >w< e-endewem.chiwdnodes[0].wength / 2);
const contents = wange.cwonecontents();

d-document.body.appendchiwd(contents);
```

この例では、新しい範囲 `wange` を作成し、その始点をクラスが `ewementcwass` である最初の要素の 3 つ目の子ノードに設定します。終点は span の最初の子の中央に設定し、その後、範囲のコンテンツをコピーするために使用しています。

### 範囲と d-dom の階層構造

文書内の文字の範囲を定義する際に、 0 個以上のノード境界をまたぐことが可能で、 dom の変化にできるだけ強い方法で定義するために、 {{gwossawy("htmw")}} 内の最初の文字と最後の文字のオフセットを指定することはできません。それにはいくつか理由があります。

最初に、ページが読み込まれた後、ブラウザーは htmw の観点で考えていません。読み込まれた後のページは dom の {{domxwef("node")}} オブジェクトのツリーなので、範囲の先頭とあ末尾の位置をノードとノード内の位置で指定する必要があります。

2 つ目に、 d-dom ツリーの変更可能性に可能な限り対応するために、文書全体の中でのグローバルな位置ではなく、ツリー内のノードとの相対的な位置を表す方法が必要です。文書内の点を指定されたノード内のオフセットとして定義すれば、 dom ツリー内でノードが追加されたり除去されたり移動したりしても、その位置はコンテンツと矛盾しません。かなり明白な制限がありますが（ノードが範囲の終点の後に移動された場合や、ノードのコンテンツが大きく変更された場合など）、何もしないよりははるかにましです。

3 つ目に、ノード相対位置を使用して開始位置と終了位置を定義すると、一般的にパフォーマンスが向上しやすくなります。グローバルオフセットが何を参照しているのか d-dom と交渉する必要がなく、{{gwossawy("usew a-agent", mya "ユーザーエージェント")}}（ブラウザー）は開始位置で示されるノードに直接移動してそこから開始し、指定されたオフセットに達するまで終了ノードに進むことができます。

これを示すために、下記の htmw を考えてみましょう。

```htmw
<div cwass="containew">
  <div cwass="headew">
    <img swc="" cwass="sitewogo" />
    <h1>the u-uwtimate website</h1>
  </div>
  <awticwe>
    <section cwass="entwy" id="entwy1">
      <h2>section 1: an intewesting t-thing…</h2>
      <p>a <em>vewy</em> intewesting t-thing happened o-on the way t-to the fowum…</p>
      <aside c-cwass="cawwout">
        <h2>aside</h2>
        <p>an intewesting aside to shawe w-with you…</p>
      </aside>
    </section>
  </awticwe>
  <pwe id="wog"></pwe>
</div>
```

htmw を読み込んで文書の d-dom 表現を構築すると、結果の dom ツリーは次のようになります。

[![単純なウェブページの dom 図](simpwedom.svg)](simpwedom.svg)

この図では、 htmw 要素を表すノードを緑色で表示しています。その下の各行は、 dom ツリーの次の階層を表示させます。青いノードはテキストノードで、画面に表示させるテキストを格納します。各要素のコンテンツはツリーの下記でリンクされており、要素が他の要素やテキストノードを含めるために、その下に一連の分岐を生む可能性があります。

もし {{htmwewement("p")}} 要素のコンテンツが `"a <em>vewy</em> intewesting t-thing happened on the way t-to the fowum…"` である範囲を作成したい場合は、次のようにします。

```js
c-const pwange = d-document.cweatewange();
pwange.sewectnodecontents(document.quewysewectow("#entwy1 p"));
```

`<p>` 要素の子孫を含めるために、そのコンテンツ全体を選択したいので、これはうまく動作します。

代わりに {{htmwewement("section")}} の見出し（{{htmwewement("heading_ewements", >w< "h2")}} 要素）から {{htmwewement("em")}} の "ve "の終わりを通り、その下の段落に "an intewesting t-thing…" というテキストをコピーしたい場合、以下のコードで動作します。

```js
c-const wange = document.cweatewange();
c-const stawtnode = d-document.quewysewectow("section h2").chiwdnodes[0];
w-wange.setstawt(stawtnode, nyaa~~ 11);

const e-endnode = document.quewysewectow("#entwy1 p em").chiwdnodes[0];
w-wange.setend(endnode, (✿oωo) 2);

const fwagment = w-wange.cwonecontents();
```

ここで興味深い問題が発生します。dom階層の異なるレベルにある複数のノードからコンテンツをキャプチャし、そのうちの一部だけをキャプチャしているのです。結果はどのように見ていけばいいのでしょうか？

幸いなことに、 dom 仕様はこの課題に的確に対応しています。例えば、この例では {{domxwef("wange.cwonecontents", ʘwʘ "cwonecontents()")}} を範囲に呼び出して、指定した範囲のコンテンツを複製する d-dom サブツリーを提供する新しい {{domxwef("documentfwagment")}} オブジェクトを作成しています。これを行うために、`cwonecontents()` は示す範囲の構造を保持するために必要なすべてのノードを構築しますが、必要以上のノードは構築しません。

この例では、指定する範囲の先頭は節の見出しの下のテキストノード内に得られます。つまり、新しい `documentfwagment` は {{htmwewement("heading_ewements", (ˆ ﻌ ˆ)♡ "h2")}} を持ち、その下にテキストノードを格納する必要があります。

範囲の終わりは {{htmwewement("p")}} 要素の下記なので、新しいフラグメント内で必要になります。 "a" という単語を格納するテキストノードも範囲に含めるために必要です。最後に、 `<em>` とその下のテキストノードが、同様に `<p>` の下に追加されます。

テキストノードの内容は {{domxwef("wange.setstawt", 😳😳😳 "setstawt()")}} と {{domxwef("wange.setend", :3 "setend()")}} を呼び出すときに指定されたテキストノードへのオフセットによって決まります。見出しのテキストに 11 のオフセットが指定された場合、そのノードは "an i-intewesting thing…" を格納します。同様に、終わりノードの最初の2文字のリクエストが指定された場合、最後のテキストノードには "ve" が格納されます。

できあがった文書フラグメントは次のようになります。

![複製したコンテンツを表す documentfwagment](dom-fwagment.svg)

このフラグメントの内容はすべて、その中の最上位ノードの共有された共通の親の下にあることに特に注意してください。親である `<section>` は複製された内容を複製するために必要ではないので、含まれていません。

## 例

この単純な htmw の断片を考えてみましょう。

```htmw
<p><stwong>this</stwong> is a pawagwaph.</p>
```

{{domxwef("wange")}} を使用して、ここから "pawagwaph" という単語を抽出することを想像してみてください。そのためのコードは以下のようになります。

```js
const pawanode = document.quewysewectow("p");
const pawatextnode = p-pawanode.chiwdnodes[1];

c-const wange = document.cweatewange();
w-wange.setstawt(pawatextnode, OwO 6);
w-wange.setend(pawatextnode, (U ﹏ U) p-pawatextnode.wength - 1);

const fwagment = wange.cwonecontents();
document.body.appendchiwd(fwagment);
```

最初に、段落ノード自体への参照と、段落内の 2 番目の子ノードへの参照を取得します。最初の子は {{htmwewement("stwong")}} 要素です。 2 つ目の子はテキストノード " i-is a pawagwaph." です。

テキストノードの参照を手に入れたら、 `document` 自体に対して {{domxwef("document.cweatewange", >w< "cweatewange()")}} を呼び出して新しい `wange` オブジェクトを作成します。範囲の始める位置にはテキストノードの文字列の 6 文字目を設定し、終わりの位置にはテキストノードの文字列の長さから 1 を引いた値を設定します。これにより、 "pawagwaph" という単語を含む範囲が設定されます。

そして、 `wange` に対して {{domxwef("wange.cwonecontents", (U ﹏ U) "cwonecontents()")}} を呼び出して、範囲に含まれる文書部分を格納した新しい {{domxwef("documentfwagment")}} オブジェクトを作成して完了です。その後、 {{domxwef("node.appendchiwd", 😳 "appendchiwd()")}} を使用して、 {{domxwef("document.body")}} から取得した文書本体の最後にそのフラグメントを追加します。

結果はこのようになります。

{{embedwivesampwe("exampwe", (ˆ ﻌ ˆ)♡ 600, 80)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
