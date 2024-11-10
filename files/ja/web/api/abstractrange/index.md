---
title: AbstractRange
slug: Web/API/AbstractRange
l10n:
  sourceCommit: a099faec8924e48de30a5aa06d086432915ae420
---

{{APIRef("DOM")}}

**`AbstractRange`** は抽象インターフェイスで、すべての {{Glossary("DOM")}} の範囲型を定義するための基本クラスです。 **range** は、文書内のコンテンツの区間の開始点と終了点を示すオブジェクトです。

> [!NOTE]
> 抽象インターフェイスなので、 `AbstractRange` タイプのオブジェクトを直接インスタンス化することはありません。代わりに {{domxref("Range")}} または {{domxref("StaticRange")}} インターフェイスを使用してください。これら 2 つのインターフェイスの異なる点を理解し、自分のニーズに合ったものを選ぶには、それぞれのインターフェイスのドキュメントを参照してください。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("AbstractRange.collapsed", "collapsed")}} {{ReadOnlyInline}}
  - : 論理値で、範囲が折りたたまれている場合は `true` となります。折りたたまれた範囲とは、開始位置と末尾位置が同じで、 0 文字の長さの範囲です。
- {{domxref("AbstractRange.endContainer", "endContainer")}} {{ReadOnlyInline}}
  - : `endOffset` プロパティで指定された範囲の末尾がある場所の {{domxref("Node")}} オブジェクトです。
- {{domxref("AbstractRange.endOffset", "endOffset")}} {{ReadOnlyInline}}
  - : ノードの内容の先頭から、この範囲オブジェクトで表す範囲の先頭までのオフセットを文字数で表した整数値です。この値は `endContainer` ノードの長さよりも小さくなければなりません。
- {{domxref("AbstractRange.startContainer", "startContainer")}} {{ReadOnlyInline}}
  - : `startOffset` プロパティで指定された範囲の先頭がある場所の {{domxref("Node")}} オブジェクトです。
- {{domxref("AbstractRange.startOffset", "startOffset")}} {{ReadOnlyInline}}
  - : ノードの内容の先頭から、範囲オブジェクトが参照する内容の先頭の文字までのオフセットを文字数で表した整数値です。この値は `startContainer` で示すノードの長さよりも小さくなければなりません。

## インスタンスメソッド

_`AbstractRange` メソッドを提供していません。_

## 使用上の注意

### Range 型

{{domxref("Document", "文書")}}内のコンテンツの範囲は、すべて `AbstractRange` に基づくインターフェイスのインスタンスを使用して記述します。このようなインターフェイスは 2 つあります。

- {{domxref("Range")}}
  - : `Range` インターフェイスは長い間存在していましたが、他にも範囲データを定義する必要性が生じたため、最近になって `AbstractRange` をベースに再定義されました。 `Range` は範囲の端点を変更するメソッドや、範囲を比較するメソッド、範囲間の交差を検出するメソッドなどを提供します。
- {{domxref("StaticRange")}}
  - : `StaticRange` は一度作成した範囲を変更することができない基本的な範囲です。つまり、ノードツリーが変化しても範囲は変更されません。より複雑な {{domxref("Range")}} インターフェイスのパフォーマンスやリソースへの影響を避けることができるので、一度だけ使用する範囲を指定する必要がある場合に有益です。

### 要素の内容

要素の内容にアクセスする場合、要素自体もノードですが、要素内のテキストもノードであることに注意してください。要素のテキスト内に範囲端点を設定するには、必ず要素内のテキストノードを探してください。

```js
const startElem = document.querySelector("p");
const endElem = startElem.querySelector("span");
const range = document.createRange();

range.setStart(startElem, 0);
range.setEnd(endElem, endElem.childNodes[0].length / 2);
const contents = range.cloneContents();

document.body.appendChild(contents);
```

この例では、新しい範囲 `range` を作成し、その始点をクラスが `elementclass` である最初の要素の 3 つ目の子ノードに設定します。終点は span の最初の子の中央に設定し、その後、範囲のコンテンツをコピーするために使用しています。

### 範囲と DOM の階層構造

文書内の文字の範囲を定義する際に、 0 個以上のノード境界をまたぐことが可能で、 DOM の変化にできるだけ強い方法で定義するために、 {{Glossary("HTML")}} 内の最初の文字と最後の文字のオフセットを指定することはできません。それにはいくつか理由があります。

最初に、ページが読み込まれた後、ブラウザーは HTML の観点で考えていません。読み込まれた後のページは DOM の {{domxref("Node")}} オブジェクトのツリーなので、範囲の先頭とあ末尾の位置をノードとノード内の位置で指定する必要があります。

2 つ目に、 DOM ツリーの変更可能性に可能な限り対応するために、文書全体の中でのグローバルな位置ではなく、ツリー内のノードとの相対的な位置を表す方法が必要です。文書内の点を指定されたノード内のオフセットとして定義すれば、 DOM ツリー内でノードが追加されたり除去されたり移動したりしても、その位置はコンテンツと矛盾しません。かなり明白な制限がありますが（ノードが範囲の終点の後に移動された場合や、ノードのコンテンツが大きく変更された場合など）、何もしないよりははるかにましです。

3 つ目に、ノード相対位置を使用して開始位置と終了位置を定義すると、一般的にパフォーマンスが向上しやすくなります。グローバルオフセットが何を参照しているのか DOM と交渉する必要がなく、{{Glossary("user agent", "ユーザーエージェント")}}（ブラウザー）は開始位置で示されるノードに直接移動してそこから開始し、指定されたオフセットに達するまで終了ノードに進むことができます。

これを示すために、下記の HTML を考えてみましょう。

```html
<div class="container">
  <div class="header">
    <img src="" class="sitelogo" />
    <h1>The Ultimate Website</h1>
  </div>
  <article>
    <section class="entry" id="entry1">
      <h2>Section 1: An interesting thing…</h2>
      <p>A <em>very</em> interesting thing happened on the way to the forum…</p>
      <aside class="callout">
        <h2>Aside</h2>
        <p>An interesting aside to share with you…</p>
      </aside>
    </section>
  </article>
  <pre id="log"></pre>
</div>
```

HTML を読み込んで文書の DOM 表現を構築すると、結果の DOM ツリーは次のようになります。

[![単純なウェブページの DOM 図](simpledom.svg)](simpledom.svg)

この図では、 HTML 要素を表すノードを緑色で表示しています。その下の各行は、 DOM ツリーの次の階層を表示させます。青いノードはテキストノードで、画面に表示させるテキストを格納します。各要素のコンテンツはツリーの下記でリンクされており、要素が他の要素やテキストノードを含めるために、その下に一連の分岐を生む可能性があります。

もし {{HTMLElement("p")}} 要素のコンテンツが `"A <em>very</em> interesting thing happened on the way to the forum…"` である範囲を作成したい場合は、次のようにします。

```js
const pRange = document.createRange();
pRange.selectNodeContents(document.querySelector("#entry1 p"));
```

`<p>` 要素の子孫を含めるために、そのコンテンツ全体を選択したいので、これはうまく動作します。

代わりに {{HTMLElement("section")}} の見出し（{{HTMLElement("Heading_Elements", "h2")}} 要素）から {{HTMLElement("em")}} の "ve "の終わりを通り、その下の段落に "An interesting thing…" というテキストをコピーしたい場合、以下のコードで動作します。

```js
const range = document.createRange();
const startNode = document.querySelector("section h2").childNodes[0];
range.setStart(startNode, 11);

const endNode = document.querySelector("#entry1 p em").childNodes[0];
range.setEnd(endNode, 2);

const fragment = range.cloneContents();
```

ここで興味深い問題が発生します。DOM階層の異なるレベルにある複数のノードからコンテンツをキャプチャし、そのうちの一部だけをキャプチャしているのです。結果はどのように見ていけばいいのでしょうか？

幸いなことに、 DOM 仕様はこの課題に的確に対応しています。例えば、この例では {{domxref("Range.cloneContents", "cloneContents()")}} を範囲に呼び出して、指定した範囲のコンテンツを複製する DOM サブツリーを提供する新しい {{domxref("DocumentFragment")}} オブジェクトを作成しています。これを行うために、`cloneContents()` は示す範囲の構造を保持するために必要なすべてのノードを構築しますが、必要以上のノードは構築しません。

この例では、指定する範囲の先頭は節の見出しの下のテキストノード内に得られます。つまり、新しい `DocumentFragment` は {{HTMLElement("Heading_Elements", "h2")}} を持ち、その下にテキストノードを格納する必要があります。

範囲の終わりは {{HTMLElement("p")}} 要素の下記なので、新しいフラグメント内で必要になります。 "A" という単語を格納するテキストノードも範囲に含めるために必要です。最後に、 `<em>` とその下のテキストノードが、同様に `<p>` の下に追加されます。

テキストノードの内容は {{domxref("Range.setStart", "setStart()")}} と {{domxref("Range.setEnd", "setEnd()")}} を呼び出すときに指定されたテキストノードへのオフセットによって決まります。見出しのテキストに 11 のオフセットが指定された場合、そのノードは "An interesting thing…" を格納します。同様に、終わりノードの最初の2文字のリクエストが指定された場合、最後のテキストノードには "ve" が格納されます。

できあがった文書フラグメントは次のようになります。

![複製したコンテンツを表す DocumentFragment](dom-fragment.svg)

このフラグメントの内容はすべて、その中の最上位ノードの共有された共通の親の下にあることに特に注意してください。親である `<section>` は複製された内容を複製するために必要ではないので、含まれていません。

## 例

この単純な HTML の断片を考えてみましょう。

```html
<p><strong>This</strong> is a paragraph.</p>
```

{{domxref("Range")}} を使用して、ここから "paragraph" という単語を抽出することを想像してみてください。そのためのコードは以下のようになります。

```js
const paraNode = document.querySelector("p");
const paraTextNode = paraNode.childNodes[1];

const range = document.createRange();
range.setStart(paraTextNode, 6);
range.setEnd(paraTextNode, paraTextNode.length - 1);

const fragment = range.cloneContents();
document.body.appendChild(fragment);
```

最初に、段落ノード自体への参照と、段落内の 2 番目の子ノードへの参照を取得します。最初の子は {{HTMLElement("strong")}} 要素です。 2 つ目の子はテキストノード " is a paragraph." です。

テキストノードの参照を手に入れたら、 `Document` 自体に対して {{domxref("Document.createRange", "createRange()")}} を呼び出して新しい `Range` オブジェクトを作成します。範囲の始める位置にはテキストノードの文字列の 6 文字目を設定し、終わりの位置にはテキストノードの文字列の長さから 1 を引いた値を設定します。これにより、 "paragraph" という単語を含む範囲が設定されます。

そして、 `Range` に対して {{domxref("Range.cloneContents", "cloneContents()")}} を呼び出して、範囲に含まれる文書部分を格納した新しい {{domxref("DocumentFragment")}} オブジェクトを作成して完了です。その後、 {{domxref("Node.appendChild", "appendChild()")}} を使用して、 {{domxref("document.body")}} から取得した文書本体の最後にそのフラグメントを追加します。

結果はこのようになります。

{{EmbedLiveSample("Example", 600, 80)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
