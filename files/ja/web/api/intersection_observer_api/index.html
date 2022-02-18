---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
tags:
  - API
  - Clipping
  - Intersection
  - Intersection Observer API
  - IntersectionObserver
  - Overview
  - Performance
  - Reference
  - Web
  - 交差
  - 交差監視
translation_of: Web/API/Intersection_Observer_API
---
<div>{{DefaultAPISidebar("Intersection Observer API")}}</div>

<p class="summary"><span class="seoSummary">Intersection Observer API (交差監視 API) は、ターゲットとなる要素が、祖先要素もしくは文書の最上位の{{Glossary("viewport", "ビューポート")}}と交差する変更を非同期的に監視する方法を提供します。</span></p>

<p>従来、要素の可視性や、二つの要素間で互いに相対的な可視性を検出することは難しく、どの解決方法も不確実であり、ブラウザーやユーザーがアクセスするサイトの反応を鈍くする要因の一つとなっていました。ウェブが成熟していくにつれてこのような情報の必要性は高まっていきます。 Intersection (要素間交差) についての情報は下記のような理由から必要とされています。</p>

<ul>
 <li>ページがスクロールした際の画像やその他のコンテンツの遅延読み込み。</li>
 <li>「無限スクロール」をするウェブサイトを実装し、スクロールに従って次々とコンテンツを読み込んで、ユーザーがページの切り替えをせずに済むようにすること。</li>
 <li>広告費用を計算するための広告が表示されたかどうかのレポート。</li>
 <li>ユーザーが見るかどうかによって、タスクを実行するかどうか、アニメーションを処理するかを決定すること。</li>
</ul>

<p>これまで、要素間の交差を検出する実装をするには、 {{domxref("Element.getBoundingClientRect()")}} のようなメソッドを呼び出すイベントハンドラーやループがあり、影響を受ける要素に対する情報を都度計算し集めることで構成されていました。このようなコードがメインスレッドで実行されると、いずれかはパフォーマンスの問題を引き起こす可能性があります。試しにサイトにテストとして読み込めば分かりますが、事態は完全に酷くなりえます。</p>

<p>ウェブページで無限スクロールを使用することを考えてみてください。ベンダーから提供されるライブラリを使用して、ページ全体に定期的に配置された広告を管理し、アニメーショングラフィックスを表示し、通知ボックスなどを描画するカスタムライブラリを使用します。これらのそれぞれには独自の Intersection を検出するためのルーチンがあり、すべてがメインスレッド上で実行されます。ウェブサイトの作者は、これが起こっていることを認識していないかもしれません。なぜなら、彼らは内部の働きについてほとんど知らずに2つのライブラリを使用しているからです。ユーザーがページをスクロールすると、スクロール処理中にこれらの Intersection の検出ルーチンが絶えず起動し、ユーザーはブラウザー、ウェブサイト、およびコンピュータにイライラさせられることになります。</p>

<p>Intersection Observer API を使用することで、監視したい要素が別の要素 (もしくは{{Glossary("viewport")}}) に入ってきたり出ていったりする時、まだ両要素が交差する量がある一定の量を満たす時、実行されるコールバック関数を登録するが出来ます。こういった方法を用いることで、この手の要素交差を監視するためにサイトはメインスレッド上で何もする必要がなくなり、ブラウザーは要素間交差の管理を最適化して自由に行えます。</p>

<p>Intersection Observer API を使用してできないものの1つは、重複するピクセル数または具体的なピクセル数です。ただし、「<em>N</em>％前後のどこかで交差する場合に何かしたい」という一般的な利用法はカバーされています。</p>

<h2 id="Intersection_observer_concepts_and_usage" name="Intersection_observer_concepts_and_usage">Intersection observer 概念と使い方</h2>

<p>Intersection Observer API を使用すると、ある要素が、これを<strong>ターゲット</strong>と呼びますが、端末のビューポートまたは指定された要素 - API の目的からこれを<strong>ルート要素</strong>もしくは<strong>ルート</strong>と呼びます - と交差するたびに呼び出されるコールバックを構成することができます。通常は、要素の直近のスクロール可能な祖先、または、要素がスクロール可能な要素の子孫でない場合はビューポートに関する交差状態の変更を監視したいでしょう。ルート要素に関する交差を監視するには、 <code>null</code> を指定してください。</p>

<p>ビューポートとその他の要素のどちらがルートとして使用されていても、 API は同じように動作し、ターゲット要素の表示状態が変わってルートとの間で交差の量の期待値を通るたびに、提供したコールバック関数が実行されます。</p>

<p>ターゲット要素とそのルート要素の交差する度合いが<strong>交差率</strong>です。これはターゲット要素のパーセンテージを 0.0 から 1.0 の間の値で表現したものです。</p>

<h3 id="Creating_an_intersection_observer" name="Creating_an_intersection_observer">Intersection observer の作成</h3>

<p>コンストラクターを呼び出して Intersection observer を作成し、閾値が一方向また他の方向に交差する度に実行されるコールバック関数を渡します。</p>

<pre class="brush: js">let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);</pre>

<p>1.0 の閾値は、 <code>root</code> オプションで指定された要素内でターゲットが100%表示された時にコールバックが呼び出されることを意味しています。</p>

<h4 id="Intersection_observer_options" name="Intersection_observer_options">Intersection observer のオプション</h4>

<p>{{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} コンストラクタに渡された <code>options</code> オブジェクトは、オブザーバーのコールバックが呼び出される状況を制御し、以下のフィールドがあります:</p>

<dl>
 <dt><code>root</code></dt>
 <dd>ターゲットが見えるかどうかを確認するためのビューポートとして使用される要素です。指定されなかった場合、もしくは <code>null</code> の場合はデフォルトでブラウザーのビューポートが使用されます。</dd>
 <dt><code>rootMargin</code></dt>
 <dd>root の周りのマージンです。CSS {{cssxref("margin")}} プロパティに似た値を持つことができます。例えば、"<code>10px 20px 30px 40px"</code> (top, right, bottom, left) のようなものです。この値はパーセント値にすることができます。この一連の値は、交差を計算する前にルート要素の範囲のボックスの各辺を拡大または縮小させることができます。既定ではすべてゼロです。</dd>
 <dt><code>threshold</code></dt>
 <dd>単一の数値もしくは数値の配列で、オブザーバーのコールバックを実行するターゲットがどのくらいの割合で見えているかを示します。 50% 通過したときのみ検出する場合は値 0.5 を使用します。 25% を超える度にコールバックを実行する場合は、 [0, 0.25, 0.5, 0.75, 1] という配列を指定します。既定値は 0 です (つまり、1ピクセルでも表示されるとコールバックが実行されます)。1.0 の値は全てのピクセルが見えるようになるまで、閾値をまたいだとみなされないことを意味します。</dd>
</dl>

<h4 id="Targeting_an_element_to_be_observed" name="Targeting_an_element_to_be_observed">監視される要素をターゲットにする</h4>

<p>オブザーバーを作成した後は、監視するターゲット要素を与える必要があります。</p>

<pre class="brush: js">var target = document.querySelector('#listItem');
observer.observe(target);
</pre>

<p>ターゲットが <code>IntersectionObserver</code> に指定された閾値を満たす度にコールバックが呼び出されます。コールバックは {{domxref("IntersectionObserverEntry")}} オブジェクトのリストとオブザーバーを受け取ります。</p>

<pre class="brush: js">let callback = (entries, observer) =&gt; {
  entries.forEach(entry =&gt; {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
</pre>

<p>コールバックはメインスレッドで実行される点に注意してください。可能な限り早く動作する必要があります。もし時間を要する処理であるなら、 {{domxref("Window.requestIdleCallback()")}} を使ったほうがいいでしょう。</p>

<p>また <code>root</code> オプションを指定した場合、target はルート要素の子要素でなければなりません。</p>

<h3 id="How_intersection_is_calculated" name="How_intersection_is_calculated">交差の計算方法</h3>

<p>Intersection Observer API によって考慮される領域は全て矩形です。不規則に整形された要素は、要素全てを囲む最小の矩形で占有しているとみなされます。同様に、要素の可視部分が矩形ではない場合、要素が交差する矩形は要素全ての可視部分を含む最小の矩形であると解釈されます。</p>

<p>{{domxref("IntersectionObserverEntry")}} オブジェクトによって提供される様々なプロパティがどのように交差を表現しているかを知るともっと役に立つでしょう。</p>

<h4 id="The_intersection_root_and_root_margin" name="The_intersection_root_and_root_margin">交差するルートと root margin</h4>

<p>要素とその入れ物との交差を監視するには、入れ物をまずは知る必要があります。ここでの入れ物とは<strong>交差ルート</strong>もしくは<strong>ルート要素</strong>です。これは監視される要素の親要素となる文書内の特定の要素になるか、文書のビューポートを入れ物として使用する際は <code>null</code> になるかいずれかになります。</p>

<p><strong><dfn>ルート交差矩形</dfn></strong>はターゲットをチェックするために使用される矩形です。この矩形は次のように決まります。</p>

<ul>
 <li>交差ルートが暗黙のルート (すなわち最上位の {{domxref("Document")}}) である場合、ルート交差矩形はビューポートの矩形になります。</li>
 <li>交差ルートのあふれた部分が切り取られていた場合、ルート交差矩形はルート要素のコンテンツ領域になります。</li>
 <li>それ以外の場合は、ルート交差矩形は交差ルートのクライアント矩形 ({{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} を呼び出して返されるもの) です。</li>
</ul>

<p>交差するルートとして使用される矩形は、<strong>ルートマージン</strong> <code>rootMargin</code> を {{domxref("IntersectionObserver")}} の作成時に設定することで調整することが可能です。 <code>rootMargin</code> の値は交差するルートの境界線各辺にオフセット追加定義して、最終的な交差のルートの境界線を作成します (コールバックが実行された際には {{domxref("IntersectionObserverEntry.rootBounds")}} で取得できるものです)。</p>

<h4 id="Thresholds" name="Thresholds">閾値</h4>

<p>Intersection Observer API はターゲット要素がどのくらい見えているのか微細な変化を全て知らせるのではなく、<ruby><strong>閾値</strong><rp> (</rp><rt>thresholds</rt><rp>) </rp></ruby>を使用します。オブザーバーを作成する際に、表示されるターゲット要素がどの程度見えているかのパーセンテージを表す1つ以上の数値を指定できます。API はこれらの閾値を超えて見えたかどうかの変更のみを知らせます。</p>

<p>例えば、ターゲット要素が25%見える度に通知を受けたい場合は、オブザーバーを作成する際の閾値のリストとして [0, 0.25, 0.5, 0.75, 1] という配列を指定します。変更の通知を受ける時にコールバック関数に渡された {{domxref("IntersectionObserverEntry")}} の {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} プロパティの値をチェックすることで、変更が感知された方向 (つまり要素が見えたかどうかを) 判断することが出来ます。<code>isIntersecting</code> が <code>true</code> であれば、ターゲットは閾値を超えて少なくとも見るようになったということですし、<code>false</code> であればターゲットは指定した閾値では表示されなくなったということです。</p>

<p>閾値の仕組みを感じ取るには、下のボックスをスクロールして見てください。その中にある各色のボックスには四隅全てにパーセンテージが表示されています。そのため、入れ物をスクロールする時にこれらのパーセンテージが変化することが分かります。各ボックスには異なる閾値がセットされています:</p>

<ul>
 <li>最初のボックスは可視点の各パーセンテージ値がセットされています; つまり{{domxref("IntersectionObserver.thresholds")}} の配列は <code>[0.00, 0.01, 0.02, ..., 0.99, 1.00]</code> となります。</li>
 <li>2つ目のボックスは50%を指定した一つの閾値しか持ちません。</li>
 <li>3つ目のボックスは10%見える毎の閾値を持っています (0%, 10%, 20%...)</li>
 <li>最後のボックスは25%の閾値です。</li>
</ul>

<div class="hidden">
<h5 id="Threshold_example">Threshold example</h5>

<pre class="brush: html">&lt;template id="boxTemplate"&gt;
  &lt;div class="sampleBox"&gt;
    &lt;div class="label topLeft"&gt;&lt;/div&gt;
    &lt;div class="label topRight"&gt;&lt;/div&gt;
    &lt;div class="label bottomLeft"&gt;&lt;/div&gt;
    &lt;div class="label bottomRight"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;main&gt;
  &lt;div class="contents"&gt;
    &lt;div class="wrapper"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/main&gt;</pre>

<pre class="brush: css">.contents {
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
</pre>

<pre class="brush: js">let observers = [];

startup = () =&gt; {
  let wrapper = document.querySelector(".wrapper");

  // Options for the observers

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: []
  };

  // An array of threshold sets for each of the boxes. The
  // first box's thresholds are set programmatically
  // since there will be so many of them (for each percentage
  // point).

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0]
  ];

  for (let i=0; i&lt;=1.0; i+= 0.01) {
    thresholdSets[0].push(i);
  }

  // Add each box, creating a new observer for each

  for (let i=0; i&lt;4; i++) {
    let template = document.querySelector("#boxTemplate").content.cloneNode(true);
    let boxID = "box" + (i+1);
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // Set up the observer for this box

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(intersectionCallback, observerOptions);
    observers[i].observe(document.querySelector("#" + boxID));
  }

  // Scroll to the starting position

  document.scrollingElement.scrollTop = wrapper.firstElementChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
}

intersectionCallback = (entries) =&gt; {
  entries.forEach((entry) =&gt; {
    let box = entry.target;
    let visiblePct = (Math.floor(entry.intersectionRatio * 100)) + "%";

    box.querySelector(".topLeft").innerHTML = visiblePct;
    box.querySelector(".topRight").innerHTML = visiblePct;
    box.querySelector(".bottomLeft").innerHTML = visiblePct;
    box.querySelector(".bottomRight").innerHTML = visiblePct;
  });
}

startup();
</pre>
</div>

<p>{{EmbedLiveSample("Threshold_example", 500, 500)}}</p>

<h4 id="Clipping_and_the_intersection_rectangle" name="Clipping_and_the_intersection_rectangle">クリッピングと交差矩形</h4>

<p>ブラウザーは次のように最終的な交差矩形を計算します。これはすべて行われることですが、交差がいつ発生するかを正確に把握するために、これらの手順を理解すると役立ちます。</p>

<ol>
 <li>ターゲット要素の境界矩形 (つまり、要素を構成するすべてのコンポーネントの境界ボックスを完全に囲む最小の矩形) は、ターゲットに対して {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} を呼び出すことによって取得されます。これは、交差する矩形の最大の大きさです。残りの手順では、交差しない部分を削除します。</li>
 <li>ターゲットの直接の親ブロックから始まり、外側に向かって移動し、それぞれの包含ブロックのクリッピングが (存在すれば) 交差する長方形に適用されます。ブロックのクリッピングは、2つのブロックの交差と、 {{cssxref("overflow")}} プロパティで (存在すれば) 指定されたクリッピングモードに基づいて決定されます。 <code>overflow</code> に <code>visible</code> 以外を設定すると、クリッピングが行われます。</li>
 <li>包含する要素の1つがネストされた閲覧コンテキストのルートである場合 ({{HTMLElement("iframe")}} に含まれる文書など)、交差する矩形は含まれているコンテキストのビューポートで切り取られ、コンテナー群を通して上方に再帰的にコンテナーの包含ブロックを続けます。ですから、最上位の <code>&lt;iframe&gt;</code> に到達したら、交差矩形はフレームのビューポートに切り取られ、フレームの親要素が次のブロックとなり、交差ルートに向けて再帰が行われます。</li>
 <li>上方への再帰が交差ルートに達すると、結果の矩形が交差ルートの座標空間に対応付けられます。</li>
 <li>結果の矩形はそれから<a href="/ja/docs/Web/API/Intersection_Observer_API#root-intersection-rectangle">ルート交差矩形</a>と交差することで更新されます。</li>
 <li>この矩形は、最終的に、ターゲットの {{domxref("document")}} の座標空間に対応付けられます。</li>
</ol>

<h3 id="Intersection_change_callbacks" name="Intersection_change_callbacks">交差状態の変化のコールバック</h3>

<p>ターゲット要素がルート要素内で見えている範囲が可視量の閾値を通過したとき、 {{domxref("IntersectionObserver")}} オブジェクトのコールバックが実行されます。コールバックは、入力引数として交差したすべての閾値を示す <code>IntersectionObserverEntry</code> オブジェクトの配列を、また参照として <code>IntersectionObserver</code> オブジェクト自身を受け取ります。</p>

<p>閾値のリスト内のそれぞれの項目は、通過した閾値を説明する {{domxref("IntersectionObserverEntry")}} オブジェクトです。つまり、それぞれの項目は指定された要素がルート要素とどれだけ交差したのか、要素が交差したと言えるのかどうか、推移が発生した方向を示します。</p>

<p>以下のコードスニペットは、要素がルート要素と交差していない状態から少なくとも75%が交差した状態まで推移した回数を数え続けて表示します。</p>

<pre class="brush: js">intersectionCallback(entries) =&gt; {
  entries.forEach(entry =&gt; {
    if (entry.isIntersecting) {
      let elem = entry.target;

      if (entry.intersectionRatio &gt;= 0.75) {
        intersectionCounter++;
      }
    }
  });
}
</pre>

<h2 id="Interfaces" name="Interfaces">インターフェイス</h2>

<dl>
 <dt>{{domxref("IntersectionObserver")}}</dt>
 <dd>Intersection Observer API のプライマリーなインターフェイスです。同一の交差設定に対して任意の数のターゲット要素を監視するオブザーバーを作成し管理するためのメソッドを提供します。各オブザーバーは1つ以上のターゲット要素と共通の親要素、もしくは最上位の{{domxref("Document")}} の {{Glossary('viewport')}} との交差における変化を非同期的に監視することが出来ます。この親要素もしくはビューポートは<strong>ルート</strong>と呼ばれます。</dd>
 <dt>{{domxref("IntersectionObserverEntry")}}</dt>
 <dd>スクロールにおける変化の特定の瞬間において、ターゲット要素とルートとなる入れ物との交差を表現します。このタイプのオブジェクトは2つの方法でのみ得られます: <code>IntersectionObserver</code> コールバックへの入力として、または {{domxref("IntersectionObserver.takeRecords()")}} を呼び出すことによって、の2つです。</dd>
</dl>

<h2 id="A_simple_example" name="A_simple_example">単純な例</h2>

<p>この単純な例では、ターゲット要素の色と透明度を要素の可視性で変化させます。<a href="/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility">Intersection Observer API を利用した時間の絡んだ要素の可視性</a>では、要素 (例えば広告など) セットがユーザーに表示される時間を測定し、統計を記録したり要素を更新したりしてその情報にユーザーどう反応したかを示す、より拡張性の高い具体例を見ることが出来るようでしょう。</p>

<h3 id="HTML">HTML</h3>

<p>この例における HTML は非常に短く、主な要素はターゲットとなるボックス (IDは <code>"box"</code> としました) とボックス内のコンテンツです。</p>

<pre class="brush: html">&lt;div id="box"&gt;
  &lt;div class="vertical"&gt;
    Welcome to &lt;strong&gt;The Box!&lt;/strong&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<p>この例では CSS はあまり重要ではありません。要素をレイアウトし{{cssxref("background-color")}} と {{cssxref("border")}} 属性を <a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>に適用させます。CSS transitions は要素の変化に多少変化が起きることを確認するために使用します。</p>

<pre class="brush: css">#box {
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
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<p>最後に、Intersection Observer API を使って何が出来るか、 JavaScript のコードを見ていきましょう。</p>

<h4 id="Setting_up" name="Setting_up">セットアップ</h4>

<p>まずは、いくつかの変数を準備してオブザーバーをインストールする必要があります。</p>

<pre class="brush: js">const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener("load", (event) =&gt; {
  boxElement = document.querySelector("#box");

  createObserver();
}, false);</pre>

<p>セットアップした定数と変数は下記の通りです。</p>

<dl>
 <dt><code>numSteps</code></dt>
 <dd>視認率が0.0から1.0の間にどのくらいの数の閾値を設定するか示す定数です。</dd>
 <dt><code>prevRatio</code></dt>
 <dd>この変数は閾値を超えた最後の視認率を記録するために使用します。これはターゲット要素が大体見えるようになったかどうかを調べることが出来ます。</dd>
 <dt><code>increasingColor</code></dt>
 <dd>視認率が増加している時にターゲット要素に適用する色を定義する文字列です。文字列の中の "比率" という単語はターゲット要素の現在の視認率に置き換えられ、要素が色を変化させるだけでなく不透明になるにつれて透明度が増していきます。</dd>
 <dt><code>decreasingColor</code></dt>
 <dd>同様に、視認率が減少していく時に適用する色を定義する文字列です。</dd>
</dl>

<p>{{domxref("EventTarget.addEventListener", "Window.addEventListener()")}} を呼び出して{{event("load")}} イベントのリスンを開始します。ページロードが完了すると、{{domxref("Document.querySelector", "querySelector()")}} を使用して ID <code>"box"</code> 要素への参照を取得し <code>createObserver()</code> メソッドを呼び出して Intersection Observer の設定・インストール処理を開始します。</p>

<h4 id="Creating_the_intersection_observer" name="Creating_the_intersection_observer">Intersection Observer の作成</h4>

<p><code>createObserver()</code> メソッドは新しい {{domxref("IntersectionObserver")}} を作成し、ターゲット要素の監視を開始するためにページが完全にロードされてから呼び出されます。</p>

<pre class="brush: js">function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}</pre>

<p>この関数ではオブザーバーの設定を含む <code>options</code> オブジェクトを設定することから始めます。ドキュメントビューポートに対してターゲット要素がどのくらい見えているかという変化を監視したいので、<code>root</code> は <code>null</code> にします。マージンは必要がないので、マージンオフセットである <code>rootMargin</code> 設定は "0px" と指定しています。これによって、オブザーバーは追加された (もしくは差し引かれた) スペースがなくてもターゲット要素の境界とビューポートの境界の交差点がどう変化するのか監視を開始することが出来ます。</p>

<p>視認率の閾値のリストである、<font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">threshold</span></font>は関数 <code>buildThresholdList()</code> によって構成されます。閾値のリストは、この例ではプログラムによって計算されています。その数が意図的に調整可能だからです。</p>

<p><code>options</code> が用意できたら、新しいオブザーバーを作成、つまり{{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} のコンストラクタを呼び出して、閾値をまたいだ際に呼ばれる関数 <code>handleIntersect()</code> を指定し、オプションを指定します。次に、返されたオブザーバーに対して {{domxref("IntersectionObserver.observe", "observe()")}} を呼び出し、必要なターゲット要素を渡します。</p>

<p><code>observer.observe()</code> をそれぞれの要素に対して呼び出すことにより、ビューポートに対して交差し変化しているかを複数の要素から監視することが出来ます。</p>

<h4 id="Building_the_array_of_threshold_ratios" name="Building_the_array_of_threshold_ratios">閾値比率の配列を組み立てる</h4>

<p>閾値のリストを作成する <code>buildThresholdList()</code> 関数は次のようになります。</p>

<pre class="brush: js">function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i&lt;=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}</pre>

<p>これは 1 と <code>numSteps</code> の間の各整数 <code>i</code> に対して、値 <code>i/numSteps</code> を閾値の配列に入れることで、それぞれが 0.0 と 1.0 の間の比率である閾値の配列を作成しています。また、0 を配列に含めます。デフォルトの <code>numSteps</code> (20) が指定された結果、以下の閾値のリストが表示れます。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>#</th>
   <th>Ratio</th>
   <th>#</th>
   <th>Ratio</th>
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

<p>もちろん、閾値の配列をハードコードすることは可能ですし、よくやりがちなことです。しかし、この例では設定を追加することで粒度を調整する余地が残っています。</p>

<h4 id="Handling_intersection_changes" name="Handling_intersection_changes">交差の変換の処理</h4>

<p>ブラウザーはターゲット要素 (このケースでは <code>"box"</code> というIDを持つ要素です) が表示されているか、またはどのくらい見えているかという比率が、閾値のリストにある値の1つをまたぐことを検出して、<code>handleIntersect()</code> が呼び出されます:</p>

<pre class="brush: js">function handleIntersect(entries, observer) {
  entries.forEach((entry) =&gt; {
    if (entry.intersectionRatio &gt; prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}</pre>

<p>リストである <code>entries</code> 内にある {{domxref("IntersectionObserverEntry")}} について、entry の {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} が上昇しているかを調べます。上昇していればターゲットの {{cssxref("background-color")}} に <code>increasingColor</code> (<code>"rgba(40, 40, 190, ratio)"</code> だったことを思い出してください) の値をセットし、その際にその中にある "ratio" という文字列を entry が持つ <code>intersectionRatio</code> と置き換えます。その結果、色が変更されるだけでなく、ターゲット要素の透明度も変更されます。交差する比率が下がるに連れて、背景色のアルファ値が下がりより透明度の高い要素となります。</p>

<p>同様に、 <code>intersectionRatio</code> が下がっている場合は <code>decreasingColor</code> を文字列として使用し "ratio" という文字列を <code>intersectionRatio</code> でもって置き換えたあとに、要素の <code>background-color</code> として適用します。</p>

<p>最後に、交差する割合が上がっているか下がっているかを追跡するために、変数 <code>prevRatio</code> に現在の比率を代入しておきます。</p>

<h3 id="Result" name="Result">結果</h3>

<p>以下がその結果内容です。ページを上下にスクロールして、ボックスの外観がどう変化するかを確認してみましょう。</p>

<p>{{EmbedLiveSample('A_simple_example', 400, 400)}}</p>

<p>より応用的な例は<a href="/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility">Timing element visibility with the Intersection Observer API</a> のセクションを見てください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('IntersectionObserver')}}</td>
   <td>{{Spec2('IntersectionObserver')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.IntersectionObserver")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://github.com/w3c/IntersectionObserver">Intersection Observer polyfill</a></li>
 <li><a href="/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility">Timing element visibility with the Intersection Observer API</a></li>
 <li>{{domxref("IntersectionObserver")}} と {{domxref("IntersectionObserverEntry")}}</li>
</ul>
