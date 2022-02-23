---
title: 交差オブザーバー API
slug: Web/API/Intersection_Observer_API
tags:
  - API
  - Clipping
  - 交差
  - 交差オブザーバー API
  - IntersectionObserver
  - 概要
  - パフォーマンス
  - リファレンス
  - ウェブ
translation_of: Web/API/Intersection_Observer_API
---
{{DefaultAPISidebar("Intersection Observer API")}}

交差オブザーバー API (Intersection Observer API) は、ターゲットとなる要素が、祖先要素または文書の最上位の{{Glossary("viewport", "ビューポート")}}と交差する変化を非同期的に監視する方法を提供します。

従来、ある要素の可視状態、あるいは 2 つの要素の相対的な可視状態を検出することは困難であり、その解決策は信頼性が低く、ブラウザーやアクセスするサイトの動作が重くなる傾向がありました。ウェブが成熟していくにつれて、このような情報の必要性は高まっていきます。交差情報 (Intersection information) についての情報は次の理由から必要とされています。

- ページがスクロールした際の画像やその他のコンテンツの遅延読み込み。
- 「無限スクロール」をするウェブサイトを実装し、スクロールに従って次々とコンテンツを読み込んで、ユーザーがページの切り替えをせずに済むようにすること。
- 広告費を計算するための広告が表示されたかどうかのレポート。
- ユーザーが結果を見るかどうかで、タスクを実行するかどうか、アニメーションを処理するかどうかを決定すること。

以前は、要素同士の交差の検出を実装するには、イベントハンドラーやループで {{domxref("Element.getBoundingClientRect()")}} などのメソッドを呼び出し、影響を受けるすべての要素について必要な情報を蓄積していました。このコードはすべてメインスレッドで実行されるため、これらのうち 1 つでもあればパフォーマンスの問題を引き起こす可能性があります。サイトでこのような検出が大量に行われると、まったく醜くなる可能性があります。

ウェブページで無限スクロールを使用することを考えてみてください。ベンダーから提供されるライブラリーを使用して、ページ全体に定期的に配置された広告を管理し、アニメーショングラフィックスを表示し、通知ボックスなどを描画するカスタムライブラリーを使用します。それぞれには独自に交差を検出するためのルーチンがあり、すべてがメインスレッド上で実行されます。ウェブサイトの作者は、これが起こっていることを認識していないかもしれません。内部の働きについてほとんど知らずに 2 つのライブラリーを使用しているからです。ユーザーがページをスクロールすると、スクロール処理中にこれらの交差の検出ルーチンが絶えず起動し、ユーザーはブラウザー、ウェブサイト、およびコンピューターにイライラさせられることになります。

交差オブザーバー API では、監視したい要素が他の要素（または{{Glossary("viewport", "ビューポート")}}）に入ったり出たりしたとき、あるいは両者が交差する量が要求された量だけ変化したときに実行されるコールバック関数をコードに登録することができます。この方法により、サイトはこの種の要素の交差を監視するためにメインスレッドで何もする必要がなくなり、ブラウザーは自由に交差の管理を最適化することができます。

交差オブザーバー API は、重複したピクセルの正確な数や、それがどのピクセルであるかを具体的に示すことはできません。しかし、「_N_ % 前後のどこかで交差していたら、何かをする必要がある」という、より一般的な利用法はカバーします。

## 交差オブザーバーの概念と使い方

交差オブザーバー API を使用すると、以下のいずれかの状況が発生したときに呼び出されるコールバックを構成することができます。

- **ターゲット**要素が端末のビューポートまたは指定された要素と交差すること。この指定された要素は、交差オブザーバー API の用途では**ルート要素**または**ルート**と呼びます。
- オブザーバーがターゲット要素を監視するよう最初に指示されたとき。

通常、ターゲット要素の最も近いスクロール可能な祖先、またはターゲット要素がスクロール可能な要素の子孫でない場合は、端末のビューポートを基準にして交差の変化を監視したいと思うでしょう。端末のビューポートを基準にして交差を監視するには、 `root` オプションに `null` を指定します。交差オブザーバーのオプションについてのより詳しい説明は、このまま読み進めてください。

ビューポートとその他の要素のどちらがルートとして使用されていても、 API は同じように動作し、ターゲット要素の表示状態が変わってルートとの間で交差の量の期待値を通るたびに、提供したコールバック関数が実行されます。

ターゲット要素とそのルート要素の交差する度合いが**交差率**です。これはターゲット要素のパーセント値を 0.0 から 1.0 の間の値で表現したものです。

### 交差オブザーバーの作成

交差オブザーバーは、コンストラクターを呼び出して閾値が一方向また他の方向に交差する度に実行されるコールバック関数を渡すことで生成します。

```js
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
```

閾値 (threshold) の 1.0 は、 `root` オプションで指定された要素内でターゲットが 100% 表示された時にコールバックが呼び出されることを意味しています。

#### 交差オブザーバーのオプション

`options` オブジェクトは {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} コンストラクターに渡され、オブザーバーのコールバックが呼び出される状況を制御します。以下のようなフィールドがあります。

- `root`
  - : ターゲットが見えるかどうかを確認するためのビューポートとして使用される要素です。指定されなかった場合、または `null` の場合は既定でブラウザーのビューポートが使用されます。
- `rootMargin`
  - : root の周りのマージンです。 CSS の {{cssxref("margin")}} プロパティに似た値を指定することができます。例えば、"`10px 20px 30px 40px"` (top, right, bottom, left) のようなものです。この値はパーセント値にすることができます。この一連の値は、交差を計算する前にルート要素の範囲のボックスの各辺を拡大または縮小させることができます。既定値はすべてゼロです。
- `threshold`
  - : 単一の数値または数値の配列で、ターゲットがどのくらいの割合で見えている場合にオブザーバーのコールバックを実行するかを示します。見える範囲が 50% を超えたときのみ検出する場合は値 0.5 を使用します。 25% を超える度にコールバックを実行する場合は、 \[0, 0.25, 0.5, 0.75, 1] という配列を指定します。既定値は 0 です（つまり、 1 ピクセルでも表示されるとコールバックが実行されます）。 1.0 の値は全てのピクセルが見えるようになるまで、閾値を超えたとはみなされないことを意味します。

#### 監視される要素をターゲットにする

オブザーバーを作成した後は、監視するターゲット要素を与える必要があります。

```js
let target = document.querySelector('#listItem');
observer.observe(target);

// オブザーバーに設定したコールバックが初めて実行され、オブザーバーにターゲットが
// 割り当てられるまで待機します（ターゲットが現在表示されていない場合でも同様）。
```

ターゲットが `IntersectionObserver` に指定された閾値を満たす度にコールバックが呼び出されます。コールバックは {{domxref("IntersectionObserverEntry")}} オブジェクトのリストとオブザーバーを受け取ります。

```js
let callback = (entries, observer) => {
  entries.forEach(entry => {
    // それぞれのエントリーは、観測された 1 つの対象要素の交差状態の変化を示している。
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

コールバックが受信したエントリーのリストには、交差状態の変化を報告した各ターゲットに対して 1 つのエントリーが含まれます。 {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} プロパティの値をチェックして、そのエントリーが現在ルートと交差している要素を表しているかどうかを確認します。

コールバックはメインスレッドで実行される点に注意してください。可能な限り早く動作する必要があります。もし時間を要する処理であるなら、 {{domxref("Window.requestIdleCallback()")}} を使ったほうがいいでしょう。

また `root` オプションを指定した場合、ターゲットはルート要素の子孫でなければなりません。

### 交差の計算方法

交差オブザーバー API によって考慮される領域はすべて矩形です。不規則に整形された要素は、要素全体を囲む最小の矩形で占有しているとみなされます。同様に、要素の可視部分が矩形ではない場合、要素が交差する矩形は要素の可視部分全体を含む最小の矩形であると解釈されます。

{{domxref("IntersectionObserverEntry")}} オブジェクトによって提供される様々なプロパティがどのように交差を表現しているかを知るともっと役に立つでしょう。

#### 交差するルートとルートマージン

ある要素とそのコンテナーとの交差を監視するまえに、まずはコンテナーを知る必要があります。ここでのコンテナーとは**交差ルート**または**ルート要素**です。これは監視される要素の親要素となる文書内の特定の要素になるか、文書のビューポートをコンテナーとして使用する際は `null` になるかいずれかになります。

**ルート交差矩形**はターゲットをチェックするために使用される矩形です。この矩形は次のように決まります。

- 交差ルートが暗黙のルート（すなわち最上位の {{domxref("Document")}}）である場合、ルート交差矩形はビューポートの矩形になります。
- 交差ルートのあふれた部分が切り取られていた場合、ルート交差矩形はルート要素のコンテンツ領域になります。
- それ以外の場合は、ルート交差矩形は交差ルートのクライアント矩形（{{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} を呼び出して返されるもの）です。

交差するルートとして使用される矩形は、**ルートマージン** `rootMargin` を {{domxref("IntersectionObserver")}} の作成時に設定することで調整することが可能です。 `rootMargin` の値は交差するルートの境界ボックスの各辺にオフセットを追加定義して、最終的な交差のルートの境界を作成します（コールバックが実行された際には {{domxref("IntersectionObserverEntry.rootBounds")}} で取得できるものです）。

#### 閾値

交差オブザーバー API は、ターゲット要素が見える量の微細な変化が発生するたびに知らせるのではなく、**閾値** (threshold) を使用します。オブザーバーを作成する際に、表示されるターゲット要素がどの程度見えているかの割合を表す 1 つ以上の数値を指定できます。API はこれらの閾値を超えて見えたかどうかの変更のみを知らせます。

例えば、ターゲット要素が 25% 見える度に通知を受けたい場合は、オブザーバーを作成する際に \[0, 0.25, 0.5, 0.75, 1] という配列を閾値のリストとして指定します。

コールバックが呼び出されると、 `IntersectionObserverEntry` オブジェクトのリストを受け取ります。これは、ルートと交差する度合いが変化し、露出量がいずれかの方向に閾値を越えた観測対象ごとに 1 つずつあります。

ターゲットが*現在*ルートと交差しているかどうかは、エントリーの {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} プロパティを見ることで確認できます。これにより、そのエントリーが、要素が交差している状態から交差しなくなるまでの遷移を表すのか、交差していない状態から交差する状態への遷移を表すのかを判断することができます。

交差する矩形がゼロでないこともあり得ることに注意してください。これは、交差部分が両者の境界線にぴったり沿っているか、または {{domxref("IntersectionObserverEntry.boundingClientRect", "boundingClientRect")}} の面積がゼロの場合に起こり得ることです。このようにターゲットとルートが境界線を共有している状態は、交差した状態に遷移したとみなすには不十分です。

閾値の仕組みを感じ取るには、下のボックスをスクロールして見てください。その中にある各色のボックスには四隅全てにパーセント値が表示されています。コンテナーをスクロールする時にこれらのパーセント値が変化することが分かります。各ボックスには異なる閾値が設定されています。

- 最初のボックスは可視点の各パーセント値がセットされています。つまり{{domxref("IntersectionObserver.thresholds")}} の配列は `[0.00, 0.01, 0.02, ..., 0.99, 1.00]` となります。
- 2 つ目のボックスには単一の閾値が、 50% の位置にあります。
- 3 つ目のボックスは可視率が 10% 毎の閾値があります (0%, 10%, 20%...)
- 最後のボックスの閾値は 25% 毎です。

```html hidden
<template id="boxTemplate">
  <div class="sampleBox">
    <div class="label topLeft"></div>
    <div class="label topRight"></div>
    <div class="label bottomLeft"></div>
    <div class="label bottomRight"></div>
  </div>
</template>

<main>
  <div class="contents">
    <div class="wrapper">
    </div>
  </div>
</main>
```

```css hidden
.contents {
  position: absolute;
  width: 700px;
  height: 1725px;
}

.wrapper {
  position: relative;
  top: 600px;
}

.sampleBox {
  position: relative;
  left: 175px;
  width: 150px;
  background-color: rgb(245, 170, 140);
  border: 2px solid rgb(201, 126, 17);
  padding: 4px;
  margin-bottom: 6px;
}

#box1 {
  height: 200px;
}

#box2 {
  height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  height: 100px;
}

.label {
  font: 14px "Open Sans", "Arial", sans-serif;
  position: absolute;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.7);
  width: 3em;
  height: 18px;
  padding: 2px;
  text-align: center;
}

.topLeft {
  left: 2px;
  top: 2px;
}

.topRight {
  right: 2px;
  top: 2px;
}

.bottomLeft {
  bottom: 2px;
  left: 2px;
}

.bottomRight {
  bottom: 2px;
  right: 2px;
}
```

```js hidden
let observers = [];

startup = () => {
  let wrapper = document.querySelector(".wrapper");

  // オブザーバーのオプション

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: []
  };

  // それぞれのボックスに設定する閾値の配列。最初のボックスの
  // 閾値は、（各パーセント点対して）非常にたくさんあるため、
  // プログラムで設定します。

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0]
  ];

  for (let i=0; i<=1.0; i+= 0.01) {
    thresholdSets[0].push(i);
  }

  // それぞれのボックスを追加し、それぞれに新しいオブザーバーを生成

  for (let i=0; i<4; i++) {
    let template = document.querySelector("#boxTemplate").content.cloneNode(true);
    let boxID = "box" + (i+1);
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // このボックスのオブザーバーを設定

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(intersectionCallback, observerOptions);
    observers[i].observe(document.querySelector("#" + boxID));
  }

  // 開始位置までスクロール

  document.scrollingElement.scrollTop = wrapper.firstElementChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
}

intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    let box = entry.target;
    let visiblePct = (Math.floor(entry.intersectionRatio * 100)) + "%";

    box.querySelector(".topLeft").innerHTML = visiblePct;
    box.querySelector(".topRight").innerHTML = visiblePct;
    box.querySelector(".bottomLeft").innerHTML = visiblePct;
    box.querySelector(".bottomRight").innerHTML = visiblePct;
  });
}

startup();
```

{{EmbedLiveSample("Thresholds", 500, 500)}}

#### クリッピングと交差矩形

ブラウザーは次のように最終的な交差矩形を計算します。これはすべて完了した後の状態が見えますが、交差がいつ発生するかを正確に把握するために、これらの手順を理解すると役立ちます。

1. ターゲット要素の境界矩形（つまり、要素を構成するすべてのコンポーネントの境界ボックスを完全に囲む最小の矩形）は、ターゲットに対して {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} を呼び出すことによって取得されます。これは、交差する矩形の最大の大きさです。残りの手順では、交差しない部分を削除します。
2. ターゲットの直接の親ブロックから始まり、外側に向かって移動し、それぞれの包含ブロックのクリッピングが（存在すれば）交差する長方形に適用されます。ブロックのクリッピングは、 2 つのブロックの交差と、 {{cssxref("overflow")}} プロパティで（存在すれば）指定されたクリッピングモードに基づいて決定されます。 `overflow` に `visible` 以外を設定すると、クリッピングが行われます。
3. 包含する要素の1つがネストされた閲覧コンテキストのルートである場合 ({{HTMLElement("iframe")}} に含まれる文書など)、交差する矩形は含まれているコンテキストのビューポートで切り取られ、コンテナー群を通して上方に再帰的にコンテナーの包含ブロックを続けます。ですから、最上位の `<iframe>` に到達したら、交差矩形はフレームのビューポートに切り取られ、フレームの親要素が次のブロックとなり、交差ルートに向けて再帰が行われます。
4 上方への再帰が交差ルートに達すると、結果の矩形が交差ルートの座標空間に対応付けられます。
  5. 結果の矩形はそれから[ルート交差矩形](#root-intersection-rectangle)と交差することで更新されます。
6. この矩形は、最終的に、ターゲットの {{domxref("document")}} の座標空間に対応付けられます。

### 交差状態の変化のコールバック

ターゲット要素がルート要素内で見えている範囲が可視量の閾値を通過したとき、 {{domxref("IntersectionObserver")}} オブジェクトのコールバックが実行されます。コールバックは、入力引数として交差したすべての閾値を示す `IntersectionObserverEntry` オブジェクトの配列を、また参照として `IntersectionObserver` オブジェクト自身を受け取ります。

閾値のリスト内のそれぞれの項目は、通過した閾値を説明する {{domxref("IntersectionObserverEntry")}} オブジェクトです。つまり、それぞれの項目は指定された要素がルート要素とどれだけ交差したのか、要素が交差したと言えるのかどうか、推移が発生した方向を示します。

以下のコードスニペットでは、要素がルートと交差していない状態から 75% 以上交差する状態に遷移した回数をカウントするコールバックを示しています。しきい値 0.0 （既定値）の場合、コールバックは[およそ](https://www.w3.org/TR/intersection-observer/#dom-intersectionobserverentry-isintersecting) {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} の論理値が遷移した時に呼び出されます。このスニペットでは、まず遷移が正の値であることを確認し、次に {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} が 75% 以上かどうかを判断し、その場合はカウンターをインクリメントしています。

```js
intersectionCallback(entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let elem = entry.target;

      if (entry.intersectionRatio >= 0.75) {
        intersectionCounter++;
      }
    }
  });
}
```

## インターフェイス

- {{domxref("IntersectionObserver")}}
  - : 交差オブザーバー API の主なインターフェイスです。同一の交差設定に対して任意の数のターゲット要素を監視するオブザーバーを作成し管理するためのメソッドを提供します。各オブザーバーは 1 つ以上のターゲット要素と共通の親要素、または最上位の {{domxref("Document")}} の{{Glossary('viewport', "ビューポート")}}との交差における変化を非同期的に監視することが出来ます。この親要素またはビューポートは**ルート**と呼ばれます。
- {{domxref("IntersectionObserverEntry")}}
  - : スクロールにおける変化の特定の瞬間において、ターゲット要素とルートとなるコンテナーとの交差を表現します。この型のオブジェクトは、 `IntersectionObserver` コールバックへの入力、または {{domxref("IntersectionObserver.takeRecords()")}} の呼び出しの 2 通りの方法でのみ受け取ることができます。

## 単純な例

この単純な例では、ターゲット要素の色と透明度を要素の可視性で変化させます。[交差オブザーバー API を利用した時間の絡んだ要素の可視性](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)では、要素のセット（例えば広告など）がユーザーに表示される時間を測定し、統計を記録したり要素を更新したりしてその情報にユーザーどう反応したかを示す、より拡張性の高い具体例を見ることができるでしょう。

### HTML

この例における HTML は非常に短く、主な要素はターゲットとなるボックス（IDは `"box"` としました）とボックス内のコンテンツです。

```html
<div id="box">
  <div class="vertical">
    Welcome to <strong>The Box!</strong>
  </div>
</div>
```

### CSS

この CSS はこの例ではあまり重要ではありません。この CSS は要素をレイアウトし、 {{cssxref("background-color")}} と {{cssxref("border")}} 属性が [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)に加わることができるようにし、要素が多少見えなくなるときの変更に影響を与えるのに使用します。

```css
#box {
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition: background-color 1s, border 1s;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}
```

### JavaScript

最後に、交差オブザーバー API を使って何ができるのか、 JavaScript のコードを見ていきましょう。

#### セットアップ

まずは、いくつかの変数を準備してオブザーバーをインストールする必要があります。

```js
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener("load", (event) => {
  boxElement = document.querySelector("#box");

  createObserver();
}, false);
```

セットアップした定数と変数は下記の通りです。

- `numSteps`
  - : 可視率が 0.0 から 1.0 の間にどのくらいの数の閾値を設定するか示す定数です。
- `prevRatio`
  - : この変数は閾値を超えた最後の可視率を記録するために使用します。これはターゲット要素が大体見えるようになったかどうかを調べることが出来ます。
- `increasingColor`
  - : 可視率が増加している時にターゲット要素に適用する色を定義する文字列です。文字列の中の "比率" という単語はターゲット要素の現在の可視率に置き換えられ、要素が色を変化させるだけでなく不透明になるにつれて透明度が増していきます。
- `decreasingColor`
  - : 同様に、可視率が減少していく時に適用する色を定義する文字列です。
</dl>

{{domxref("EventTarget.addEventListener", "Window.addEventListener()")}} を呼び出して{{domxref("Window/load_event", "load")}} イベントの待ち受けを開始します。ページの読み込みが完了すると、{{domxref("Document.querySelector", "querySelector()")}} を使用して ID が `"box"` 要素への参照を取得し、 `createObserver()` メソッドを呼び出して交差オブザーバーの設定とインストール処理を開始します。

#### 交差オブザーバーの作成

`createObserver()` メソッドは新しい交差オブザーバー ({{domxref("IntersectionObserver")}}) を作成し、ターゲット要素の監視を開始するためにページが完全に読み込まれてから呼び出されます。

```js
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}
```

この関数ではオブザーバーの設定を含む `options` オブジェクトを設定することから始めます。文書のビューポートに対してターゲット要素がどのくらい見えているかという変化を監視したいので、 `root` は `null` にします。マージンは必要がないので、マージンオフセットである `rootMargin` 設定は "0px" と指定しています。これによって、オブザーバーは追加された（または差し引かれた）空間がなくてもターゲット要素の境界とビューポートの境界の交差点がどう変化するのか監視を開始することができます。

可視率の閾値のリストである、 `threshold` は関数 `buildThresholdList()` によって構成されます。閾値のリストは、この例ではプログラムによって計算されています。その数が意図的に調整可能だからです。

`options` が用意できたら、新しいオブザーバーを作成、つまり{{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} のコンストラクターを呼び出して、閾値をまたいだ際に呼ばれる関数 `handleIntersect()` を指定し、オプションを指定します。次に、返されたオブザーバーに対して {{domxref("IntersectionObserver.observe", "observe()")}} を呼び出し、必要なターゲット要素を渡します。

`observer.observe()` をそれぞれの要素に対して呼び出すことにより、ビューポートに対して交差し変化しているかを複数の要素から監視することが出来ます。

#### 閾値比率の配列を組み立てる

閾値のリストを作成する `buildThresholdList()` 関数は次のようになります。

```js
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
```

これは 1 と `numSteps` の間の各整数 `i` に対して、値 `i/numSteps` を閾値の配列に入れることで、それぞれが 0.0 と 1.0 の間の比率である閾値の配列を作成しています。また、0 を配列に含めます。既定の `numSteps` (20) が指定された結果、以下の閾値のリストが表示されます。

<table class="standard-table">
  <tbody>
    <tr>
      <th>#</th>
      <th>率</th>
      <th>#</th>
      <th>率</th>
    </tr>
    <tr>
      <th>1</th>
      <td>0.05</td>
      <th>11</th>
      <td>0.55</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.1</td>
      <th>12</th>
      <td>0.6</td>
    </tr>
    <tr>
      <th>3</th>
      <td>0.15</td>
      <th>13</th>
      <td>0.65</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0.2</td>
      <th>14</th>
      <td>0.7</td>
    </tr>
    <tr>
      <th>5</th>
      <td>0.25</td>
      <th>15</th>
      <td>0.75</td>
    </tr>
    <tr>
      <th>6</th>
      <td>0.3</td>
      <th>16</th>
      <td>0.8</td>
    </tr>
    <tr>
      <th>7</th>
      <td>0.35</td>
      <th>17</th>
      <td>0.85</td>
    </tr>
    <tr>
      <th>8</th>
      <td>0.4</td>
      <th>18</th>
      <td>0.9</td>
    </tr>
    <tr>
      <th>9</th>
      <td>0.45</td>
      <th>19</th>
      <td>0.95</td>
    </tr>
    <tr>
      <th>10</th>
      <td>0.5</td>
      <th>20</th>
      <td>1.0</td>
    </tr>
  </tbody>
</table>

もちろん、閾値の配列をハードコードすることは可能ですし、よくやりがちなことです。しかし、この例では設定を追加することで粒度を調整する余地が残っています。

#### 交差の変換の処理

ブラウザーはターゲット要素（この場合は `"box"` というIDを持つ要素です）が表示されているか、またはどのくらい見えているかという比率が、閾値のリストにある値の 1 つをまたぐことを検出して、`handleIntersect()` を呼び出します。

```js
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}
```

リストである `entries` 内にある {{domxref("IntersectionObserverEntry")}} について、entry の {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} が上昇しているかを調べます。上昇していればターゲットの {{cssxref("background-color")}} に `increasingColor` (`"rgba(40, 40, 190, ratio)"` だったことを思い出してください) の値をセットし、その際にその中にある "ratio" という文字列を entry が持つ `intersectionRatio` と置き換えます。その結果、色が変更されるだけでなく、ターゲット要素の透明度も変更されます。交差する比率が下がるに連れて、背景色のアルファ値が下がりより透明度の高い要素となります。

同様に、 `intersectionRatio` が下がっている場合は `decreasingColor` を文字列として使用し "ratio" という文字列を `intersectionRatio` でもって置き換えたあとに、要素の `background-color` として適用します。

最後に、交差する割合が上がっているか下がっているかを追跡するために、変数 `prevRatio` に現在の比率を代入しておきます。

### 結果

以下がその結果内容です。ページを上下にスクロールして、ボックスの外観がどう変化するかを確認してみましょう。

{{EmbedLiveSample('A_simple_example', 400, 400)}}

より応用的な例は[交差オブザーバー API を使用したタイミング要素の可視性](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)のセクションを見てください。

## 仕様書

| 仕様書                                    | 状態                                       | 備考 |
| ------------------------------------------------ | -------------------------------------------- | ------- |
| {{SpecName('IntersectionObserver')}} | {{Spec2('IntersectionObserver')}} |         |

## ブラウザーの互換性

{{Compat("api.IntersectionObserver")}}

## 関連情報

- [交差オブザーバーのポリフィル](https://github.com/w3c/IntersectionObserver)
- [交差オブザーバー API を使用したタイミング要素の可視性](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- {{domxref("IntersectionObserver")}} と {{domxref("IntersectionObserverEntry")}}
