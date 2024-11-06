---
title: 交差オブザーバー API による要素の表示時間設定
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: f3fc65ee0761db2cd7e3092f67d88be328bd1660
---

{{DefaultAPISidebar("Intersection Observer API")}}

この記事では、ページのコンテンツ間に多数の広告が散在している模擬ブログを作成し、その後[交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API) を使用して、各広告がユーザーに表示される時間を追跡します。表示時間の 1 分を超えた広告は、新しい広告と置き換えられます。

この例の多くの側面は実際の使用状況とは一致しませんが（特に記事はすべて同じテキストであり、データベースからは読み込まれません。また、ほんの一握りの単なるテキストのみの広告が配列から選択されます）、これは自分のサイトに交差オブザーバー API を適用する方法をすばやく学ぶために十分な API を理解できるようにするためです。

この例で、広告の表示状況を追跡するという概念が使用されているのには、それなりの理由があります。ウェブ上の広告で Flash やその他のスクリプトを最もよく使用するのは、課金や収益の支払いのために、それぞれの広告が表示されている時間を記録することだとわかりました。交差オブザーバー API がなければ、これは個々の広告で interval や timeout、またはページが遅くなる傾向がある他の技術を使用して行われることになるでしょう。この API を使用すると、ブラウザーによってすべてが効率化され、パフォーマンスへの影響が大幅に軽減されます。

それでは、始めましょう。

## サイトの構築

### サイト構造: HTML

サイトの構成はそれほど複雑ではありません。 [CSS グリッド](/ja/docs/Web/CSS/CSS_grid_layout)を使用してスタイル設定とレイアウトを行うので、ここではかなり素直に行うことができます。

```html
<div class="wrapper">
  <header>
    <h1>A Fake Blog</h1>
    <h2>Showing Intersection Observer in action!</h2>
  </header>

  <aside>
    <nav>
      <ul>
        <li><a href="#link1">A link</a></li>
        <li><a href="#link2">Another link</a></li>
        <li><a href="#link3">One more link</a></li>
      </ul>
    </nav>
  </aside>

  <main>…</main>
</div>
```

これは、サイト全体のフレームワークです。上部にはサイトのヘッダー領域があり、 {{HTMLElement("header")}} ブロックの中に含まれています。その下に、 {{HTMLElement("aside")}}ブロック内のリンクのリストとして、サイトのサイドバーを定義しています。

最後に、本体が来ます。ここでは、空の {{HTMLElement("main")}} 要素で始めます。このボックスには、後でスクリプトを使用してデータを入力します。

### CSS によるサイトのスタイル設定

サイトの構造を定義したら、次はサイトのスタイル設定です。ここでは、ページの各構成要素のスタイルを個別に見ていきましょう。

#### 基礎

{{HTMLElement("body")}} と {{HTMLElement("main")}} 要素にスタイルを指定し、サイトの背景と、サイトの様々な部分が配置されるグリッドを定義しています。

```css
body {
  font-family: "Open Sans", "Arial", "Helvetica", sans-serif;
  background-color: aliceblue;
}

.wrapper {
  display: grid;
  grid-template-columns: auto minmax(min-content, 1fr);
  grid-template-rows: auto minmax(min-content, 1fr);
  max-width: 700px;
  margin: 0 auto;
  background-color: aliceblue;
}
```

このサイトの {{HTMLElement("body")}} は、一般的なサンセリフフォントのうちの 1 つを使用し、背景色として `"aliceblue"` を使用するように設定します。次に、 `"wrapper"` クラスを定義します。これは、ヘッダー、サイドバー、本体コンテンツ（記事と広告）を含む、ブログ全体を包みます。

wrapper は、 2 つの列と 2 つの行からなる CSS グリッドを確立します。最初の列（そのコンテンツに基づいて自動的にサイズ調整されます）はサイドバーに使用され、 2 つ目の列（本体コンテンツに使用されます）は、少なくとも列のコンテンツの幅と、最大で残りのすべての利用できる空間となるようにサイズ調整されます。

最初の 1 行目は、サイトのヘッダーに特別に使用されます。行のサイズは列と同じです。最初の行は自動的にサイズ調整され、 2 つ目の行は残りのスペースを使用しますが、少なくとも行内のすべての要素のためのスペースを提供するのに十分なスペースが必要です。

ラッパーの幅は 700px に固定されており、下記の MDN でインライン表示されたときに利用できる空間に収まるようになっています。

#### ヘッダー

この例では、ヘッダーはいくつかのテキストを含むだけなので、かなり単純なものです。そのスタイル設定は次のようになります。

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

ヘッダーをサイトのグリッドの一番上の行に配置したいので、 {{cssxref("grid-row")}} は 1 に設定しています。さらに興味深いのは、ここで {{cssxref("grid-column")}} を使用していることです。ここでは、列を最初の列から始めて、最後のグリッド行を過ぎた最初の列で終わるように指定しています。他にも、ヘッダーはグリッド内のすべての列にまたがって配置されます。私たちのニーズにぴったりです。

#### サイドバー

サイドバーは、サイト内の他のページへのリンクを表示するために使用されています。この例ではどれも動作しませんが、ブログのような体裁を整えるために存在しています。サイドバーは {{HTMLElement("aside")}} 要素を使用して表しており、以下のようにスタイルを設定しています。

```css
aside {
  grid-column: 1;
  grid-row: 2;
  background-color: cornsilk;
  padding: 5px 10px;
}

aside ul {
  padding-left: 0;
}

aside ul li {
  list-style: none;
}

aside ul li a {
  text-decoration: none;
}
```

ここで最も重要なことは、サイドバーを画面の左側へ配置するために {{cssxref("grid-column")}} を 1 に設定していることです。これを -1 に変更すると、右側に表示されます（ただし、他にも正しい間隔を取得するために余白の調整が必要な要素があります）。 {{cssxref("grid-row")}} は 2 に設定し、サイト本体と横に並んだ状態にします。

#### コンテンツ本体

サイトの本体といえば、サイトのメインコンテンツは {{HTMLElement("main")}} 要素で保持されています。それには、以下のようなスタイルが適用します。

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

ここでの一番の特徴は、本体コンテンツを 2 行目の 2 列目に配置するようグリッド位置を設定していることです。

#### 記事

各記事は {{HTMLElement("article")}} 要素に収め、このようなスタイルで表示されます。

```css
article {
  background-color: white;
  padding: 6px;
}

article:not(:last-child) {
  margin-bottom: 8px;
}

article h2 {
  margin-top: 0;
}
```

このようにして、青い背景の上に浮かぶ白い背景の記事ボックスが作成され、記事の周りに小さな余白ができます。コンテナーの最後の記事を除くすべての記事には、 8px の下マージンがあり、空間を隔てて配置されます。

#### 広告

最後に、広告には以下のような初期スタイルを設定します。後で説明するように、個々の広告でスタイルを多少カスタマイズすることがあります。

```css
.ad {
  height: 96px;
  padding: 6px;
  border-color: #555;
  border-style: solid;
  border-width: 1px;
}

.ad:not(:last-child) {
  margin-bottom: 8px;
}

.ad h2 {
  margin-top: 0;
}

.ad div {
  position: relative;
  float: right;
  padding: 0 4px;
  height: 20px;
  width: 120px;
  font-size: 14px;
  bottom: 30px;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.5);
}
```

何もマジックはありません。かなり基本的な CSS です。

### JavaScript との結合

このように、すべてをうまく動作させるための JavaScript のコードを紹介します。まず、グローバル変数から始めましょう。

```js
let contentBox;

let nextArticleID = 1;
const visibleAds = new Set();
let previouslyVisibleAds = null;

let adObserver;
let refreshIntervalID = 0;
```

これらは以下のように使用されます。

- `contentBox`
  - : DOM 内の {{HTMLElement("main")}} 要素の {{domxref("HTMLElement")}} オブジェクトへの参照です。この中に、記事や広告を挿入していきます。
- `nextArticleID`
  - : 各記事には固有の ID 番号が指定されており、この変数は 1 から順に、次に使用する ID を追跡します。
- `visibleAds`
  - : 画面に現在表示されている広告を追跡するために使用する {{jsxref("Set")}} です。
- `previouslyVisibleAds`
  - : 文書が表示されていない間（例えば、ユーザーが別のページにタブ移動した場合など）、表示されている広告のリストを一時的に格納するために使用されます。
- `adObserver`
  - : 広告と `<main>` 要素の境界との交差を追跡するために使用される {{domxref("IntersectionObserver")}} が格納されます。
- `refreshIntervalID`
  - : {{domxref("setInterval()")}} によって返されるインターバル ID を格納するために使用されます。このインターバルは、広告の内容を定期的に更新する際に発生させるために使用されます。

#### セットアップ

設定をするために、ページが読み込まれたときに下記の `startup()` 関数を実行します。

```js
window.addEventListener("load", startup, false);

function startup() {
  contentBox = document.querySelector("main");

  document.addEventListener("visibilitychange", handleVisibilityChange, false);

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0.0, 0.75],
  };

  adObserver = new IntersectionObserver(intersectionCallback, observerOptions);

  buildContents();
  refreshIntervalID = setInterval(handleRefreshInterval, 1000);
}
```

まず、コンテンツを包む {{HTMLElement("main")}} 要素への参照を取得し、コンテンツをそこに挿入できるようにします。次に {{domxref("document.visibilitychange_event", "visibilitychange")}} イベントに対するイベントリスナーを設定します。このイベントは、ユーザーがブラウザー内のタブを切り替えたときなど、文書が隠されたり見えるようになったりしたときに送られます。交差はページの表示状態に影響されないため、交差オブザーバー API は交差を検出する際にこれを考慮しません。したがって、ページがタブで切り替わる間、タイマーを一時停止する必要があります。

次に、 {{domxref("IntersectionObserver")}} の対象要素（この例では広告）の文書内の相対的な交差の変化を監視するためのオプションを設定します。このオプションは、文書内のビューポートとの交差を監視するように構成します（`root` を `null` に設定することで）。交差ルートの矩形を伸縮させるマージンは設定しません。交差の目的上、文書内のビューポートの境界線と正確に一致させたいからです。そして、 `threshold` には、 0.0 と 0.75 の値を含む配列を設定します。これは、対象とする要素が完全に見えなくなる、または見え始める（交差量の比 0.0）か、 75% が見える状態を（どちらの方向にも）通過する（交差量の比 0.75）たびに、コールバックが実行されるようにするものです。

オブザーバーである `adObserver` は、 `IntersectionObserver` のコンストラクターを呼び出して、コールバック関数である `intersectionCallback` とオプションを渡すことで作成します。

次に、後で定義する `buildContents()` という関数を呼び出して、表示したい記事や広告を実際に生成し、文書内に挿入しています。

最後に、必要な更新を処理するために、 1 秒に 1 回発生させるインターバルを設定します。そのため、この例では、表示されているすべての広告にタイマーを表示しているので、 1 つ目の更新が必要です。インターバルはすべて必要ないかもしれませんし、異なる形で使用したり、異なる時刻間隔を使用することもできます。

#### 文書の可視性の変更の処理

{{domxref("document.visibilitychange_event", "visibilitychange")}} イベント用のハンドラーを見てみましょう。このスクリプトは、文書自体が可視または不可視になったときに、このイベントを受け取ります。ここで最も重要なシナリオは、ユーザーがタブを切り替えたときです。交差オブザーバーは、対象となる要素と交差ルートとの間の交差にのみ関心があり、タブが可視かどうかには関心がないので（これは完全に異なる問題です）、これらのタブ切り替えを検出するために[ページ可視性 API](/ja/docs/Web/API/Page_Visibility_API) を使用して、その間のタイマーを無効にする必要があります。

```js
function handleVisibilityChange() {
  if (document.hidden) {
    if (!previouslyVisibleAds) {
      previouslyVisibleAds = visibleAds;
      visibleAds = [];
      previouslyVisibleAds.forEach((adBox) => {
        updateAdTimer(adBox);
        adBox.dataset.lastViewStarted = 0;
      });
    }
  } else {
    previouslyVisibleAds.forEach((adBox) => {
      adBox.dataset.lastViewStarted = performance.now();
    });
    visibleAds = previouslyVisibleAds;
    previouslyVisibleAds = null;
  }
}
```

このイベント自体は、文書が可視から不可視に切り替わったか、またはその逆かを表明しないため、文書が現在表示されていないかどうかを確認するために {{domxref("document.hidden")}} プロパティをチェックします。理論的には複数回呼び出される可能性があるため、タイマーを一時停止して既存の広告の表示状態を保存していない場合にのみ処理を進めます。

タイマーを一時停止するために必要なことは、可視広告の集合 (`visibleAds`) から広告を削除し、不活性としてマークすることです。そのためには、まず、表示されている広告のセットを変数 `previouslyVisibleAds` に保存して、ユーザーがこの文書にタブで戻ったときにそれらを復元できるようにし、次に `visibleAds` セットを空にして、それらが表示されていないように扱います。次に、一時停止されている各広告について、広告の合計表示時間カウンターを更新する `updateAdTimer()` 関数を呼び出してから、その広告の `dataset.lastViewStarted` プロパティを 0 に設定し、そのタブのタイマーが実行されていないことを表します。

文書が表示されたばかりの場合は、このプロセスを逆にします。まず、 `previouslyVisibleAds`を調べて、それぞれの `dataset.lastViewStarted` に {{domxref("Performance.now", "performance.now()")}} メソッドを使用して現在の文書の時刻（文書作成後のミリ秒単位の時刻）を設定します。次に、 `visibleAds` を `previouslyVisibleAds` に設定し直し、後者を `null` に設定します。これで広告がすべて再開され、現在の時刻に表示されるようになったことがわかるように設定されました。これにより、次に広告が更新されたときに、ページがタブで移動された時間が加算されなくなります。

#### 交差状態の変化の処理

ブラウザーのイベントループを通過するたびに、それぞれの {{domxref("IntersectionObserver")}} は、その対象要素のどれかがオブザーバーの交差比率の閾値のどれかを通過したかどうか調べます。それぞれのオブザーバーについて、対象のリストがコンパイルされ、オブザーバーのコールバックに {{domxref("IntersectionObserverEntry")}} オブジェクトの配列として送信されます。コールバックである `intersectionCallback()` は以下のようにしています。

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    const adBox = entry.target;

    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= 0.75) {
        adBox.dataset.lastViewStarted = entry.time;
        visibleAds.add(adBox);
      }
    } else {
      visibleAds.delete(adBox);
      if (
        entry.intersectionRatio === 0.0 &&
        adBox.dataset.totalViewTime >= 60000
      ) {
        replaceAd(adBox);
      }
    }
  });
}
```

前回述べたように、 {{domxref("IntersectionObserver")}} コールバックは、交差オブザーバーの比率の 1 つよりも可視性が高くなった、または低くなったオブザーバーの対象要素のすべての配列を入力として受け取ります。これらの各項目は {{domxref("IntersectionObserverEntry")}} 型であり、反復処理されます。対象要素がルートと交差している場合、不明瞭な状態から可視状態に遷移したことがわかります。75% 以上可視状態になった場合は、広告を可視状態とみなし、広告の `dataset.lastViewStarted` 属性を {{domxref("IntersectionObserverEntry.time", "entry.time")}} の遷移時刻に設定し、広告を `visibleAds` セットに追加して、時間の経過と共に処理することが分かるようにタイマーを開始します。

広告が交差しない状態に遷移した場合、その広告を表示可能な広告の集合から削除します。次に、1 つの特別な動作があります。{{domxref("IntersectionObserverEntry.intersectionRatio", "entry.ratio")}} が 0.0 であるかどうか調べます。0 である場合、その要素は完全に見えなくなったということを意味します。この場合、広告が少なくとも合計 1 分間表示されていれば、これから作成する `replaceAd()` という関数を呼び出して、既存の広告を新しい広告に置き換えます。こうすることで、ユーザーは時刻とともに様々な広告を目にすることになりますが、広告は見えない間だけ置き換えるので、結果的にスムーズな使い勝手になります。

#### 定期的なアクションの処理

インターバルハンドラーである `handleRefreshInterval()` は、 `startup()` 関数（[上記](#セットアップ)）の中で {{domxref("setInterval()")}} を呼び出すことにより、 1 秒に 1 回程度呼び出されるようになります。この関数の主な仕事は、 1 秒ごとにタイマーを更新し、各広告内で描画するタイマーを更新するために再描画をスケジュールすることです。

```js
function handleRefreshInterval() {
  const redrawList = [];

  visibleAds.forEach((adBox) => {
    const previousTime = adBox.dataset.totalViewTime;
    updateAdTimer(adBox);

    if (previousTime !== adBox.dataset.totalViewTime) {
      redrawList.push(adBox);
    }
  });

  if (redrawList.length) {
    window.requestAnimationFrame((time) => {
      redrawList.forEach((adBox) => {
        drawAdTimer(adBox);
      });
    });
  }
}
```

配列 `redrawList` は、この更新サイクルの間に再描画する必要があるすべての広告のリストを保持するために使用されます。システムの活動によって、または間隔を 1000 ミリ秒ごと以外に設定したために経過時間とまったく同じにならないことがあるからです。

次に、表示されている広告ごとに、 `dataset.totalViewTime` の値（前回更新された時点で広告が表示されていた総時間）を保存し、 `updateAdTimer()` を呼び出して時刻を更新します。時間が変更された場合、広告を `redrawList` にプッシュし、次のトランジションフレームで広告を更新する必要があることを知らせます。

最後に、再描画する要素が一つでもあれば、 {{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}} を使用して、次のアニメーションフレームで `redrawList` にある各要素を再描画する関数をスケジュールしています。

#### 広告の可視性タイマーの更新

前回（[文書の可視性の変更の処理](#文書の可視性の変更の処理)および[定期的なアクションの処理](#定期的なアクションの処理)を参照）、広告の「合計表示時間」カウンターを更新する必要があるときに、 `updateAdTimer()` という名前の関数を呼び出して更新することを見てきました。この関数は、広告の {{domxref("HTMLDivElement")}} オブジェクトを入力として受け取ります。これがその例です。

```js
function updateAdTimer(adBox) {
  const lastStarted = adBox.dataset.lastViewStarted;
  const currentTime = performance.now();

  if (lastStarted) {
    const diff = currentTime - lastStarted;

    adBox.dataset.totalViewTime =
      parseFloat(adBox.dataset.totalViewTime) + diff;
  }

  adBox.dataset.lastViewStarted = currentTime;
}
```

要素の表示時間を追跡するために、すべての広告で 2 つのカスタムデータ属性（[`data-*`](/ja/docs/Web/HTML/Global_attributes/data-*) を参照）を使用しています。

- `lastViewStarted`
  - : 文書が作成された時刻を基準にして、広告の表示回数が最後に更新された、または広告が最後に表示されるようになった時刻をミリ秒単位で指定します。広告を最後に調べた時刻に広告が表示されていなかった場合は 0 です。
- `totalViewTime`
  - : 広告が表示されていた総時間（ミリ秒単位）です。

この属性は、各カスタム属性の名前とその値を割り当てた {{domxref("DOMStringMap")}} を提供します。実際、JavaScript で通常は自動的に変換されますが、1 つだけ私たち自身が変換しなければならない場合があります。

まず、広告の前回の表示状態を調べる時刻 (`adBox.dataset.lastViewStarted`) をローカル変数 `lastStarted` に取り込むところから始めます。また、{{domxref("Performance.now", "performance.now()")}} を使用して作成してからの現在の時刻値を `currentTime` に取得しています。

`lastStarted` がゼロでない場合、つまりタイマーが現在実行されている場合、現在の時刻と開始時刻の差を計算し、タイマーが前回表示されてから何ミリ秒表示されていたかを判断します。この値を広告の `totalViewTime` の現在の値に追加して、合計を最新にします。ここで {{jsxref("parseFloat", "parseFloat()")}} を使用していることに注意してください。これらの値は文字列であるため、 JavaScript ではこれを使用せずに加算の代わりに文字列の連結を行おうとします。

最後に、広告の最終表示時刻を現在の時刻に更新します。これは、この関数が呼び出されたときに広告が実行されていたかどうかに関係なく行います。これにより、この関数が返すときには、広告のタイマーは常に実行されていることになります。この関数は、広告が表示されている場合にのみ呼び出され、たとえそれがたった今表示されるようになったとしても、これは理にかなっています。

#### 広告のタイマーの表示

各広告の内部では、デモのために、分と秒に変換された `totalViewTime` の現在の値を描画しています。これは、広告の要素を `drawAdTimer()` 関数に渡すことで処理しています。

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

このコードでは、広告のタイマーをその ID である `"timer"` を使用して見つけ、広告の `totalViewTime` を 1000 で割って経過した秒数を計算します。次に、タイマーの {{domxref("HTMLElement/innerText", "innerText")}} にその時刻を表す文字列を m:ss 形式で設定する前に経過した分と秒の値を計算します。 {{jsxref("String.padStart()")}} メソッドを使用して、秒数が 10 未満の場合は 2 桁になるようにパディングしています。

### ページコンテンツの構築

`buildContents()` 関数は、[スタートアップコード](#セットアップ)から呼び出され、表示する記事や広告を選択して文書内に挿入します。

```js
const loremIpsum =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing" +
  " elit. Cras at sem diam. Vestibulum venenatis massa in tincidunt" +
  " egestas. Morbi eu lorem vel est sodales auctor hendrerit placerat" +
  " risus. Etiam rutrum faucibus sem, vitae mattis ipsum ullamcorper" +
  " eu. Donec nec imperdiet nibh, nec vehicula libero. Phasellus vel" +
  " malesuada nulla. Aliquam sed magna aliquam, vestibulum nisi at," +
  " cursus nunc.</p>";

function buildContents() {
  for (let i = 0; i < 5; i++) {
    contentBox.appendChild(createArticle(loremIpsum));

    if (!(i % 2)) {
      loadRandomAd();
    }
  }
}
```

変数 `loremIpsum` には、すべての記事のコンテナー本体に使用するテキストが収められています。もちろん、現実の世界では、データベースなどから記事を取得するためのコードを持つことになるでしょうが、この目的ではこれで十分です。すべての記事には同じテキストを使用します。もちろん、簡単に変更することができます。

`buildContents()` は 5 つの記事を持つページを作成します。奇数番目の各記事の後で、広告が「読み込まれ」、ページに挿入されます。記事は、次に見ていく `createArticle()` というメソッドで作成した後、コンテンツボックス（つまり、サイトのすべてのコンテンツを収める {{HTMLElement("main")}} 要素）に挿入します。

広告は `loadRandomAd()` と呼ばれる関数を使って作成し、広告の作成とページへの挿入を行います。この同じ関数が既存の広告を置き換えることもできることは後で説明しますが、今回は既存のコンテンツに広告を追加しています。

#### 記事の作成

記事のための {{HTMLElement("article")}} 要素（とそのすべてのコンテンツ）を作成するために、 `createArticle()` 関数を使用します。この関数はページに追加する記事の全文を入力として受け取ります。

```js
function createArticle(contents) {
  const articleElem = document.createElement("article");
  articleElem.id = nextArticleID;

  const titleElem = document.createElement("h2");
  titleElem.innerText = `Article ${nextArticleID} title`;
  articleElem.appendChild(titleElem);

  articleElem.innerHTML += contents;
  nextArticleID += 1;

  return articleElem;
}
```

まず、`<article>` 要素を作成し、その ID を固有の値 `nextArticleID` に設定します（これは 1 から始まり、各記事ごとに増えていきます）。次に、記事のタイトルのために {{HTMLElement("h2")}} 要素を作成して追加し、`contents` の HTML をこの記事に追加しています。最後に、 `nextArticleID` をインクリメントして（次の要素が新しい固有の ID を取得するように）、新しい `<article>` 要素を呼び出し元に返します。

#### 広告の作成

`loadRandomAd()` 関数は、広告を読み込んでページに追加するシミュレーションを行います。 `replaceBox` に値を渡さない場合、広告を収める新しい要素が作成されます。そして、広告がページに追加されます。 `replaceBox` を指定すると、そのボックスは既存の広告要素として扱われます。新しい要素を作成する代わりに、既存の要素を変更して新しい広告のスタイルやコンテンツ、他にもデータを収めるようにします。これは、広告を更新するときに、最初に古い要素を削除してから新しい要素を挿入した場合に起こりうる、長いレイアウト作業が行われるリスクを避けることができます。

```js
function loadRandomAd(replaceBox) {
  const ads = [
    {
      bgcolor: "#cec",
      title: "Eat Green Beans",
      body: "Make your mother proud—they're good for you!",
    },
    {
      bgcolor: "aquamarine",
      title: "MillionsOfFreeBooks.whatever",
      body: "Read classic literature online free!",
    },
    {
      bgcolor: "lightgrey",
      title: "3.14 Shades of Gray: A novel",
      body: "Love really does make the world go round…",
    },
    {
      bgcolor: "#fee",
      title: "Flexbox Florist",
      body: "When life's layout gets complicated, send flowers.",
    },
  ];
  let adBox, title, body, timerElem;

  const ad = ads[Math.floor(Math.random() * ads.length)];

  if (replaceBox) {
    adObserver.unobserve(replaceBox);
    adBox = replaceBox;
    title = replaceBox.querySelector(".title");
    body = replaceBox.querySelector(".body");
    timerElem = replaceBox.querySelector(".timer");
  } else {
    adBox = document.createElement("div");
    adBox.className = "ad";
    title = document.createElement("h2");
    body = document.createElement("p");
    timerElem = document.createElement("div");
    adBox.appendChild(title);
    adBox.appendChild(body);
    adBox.appendChild(timerElem);
  }

  adBox.style.backgroundColor = ad.bgcolor;

  title.className = "title";
  body.className = "body";
  title.innerText = ad.title;
  body.innerHTML = ad.body;

  adBox.dataset.totalViewTime = 0;
  adBox.dataset.lastViewStarted = 0;

  timerElem.className = "timer";
  timerElem.innerText = "0:00";

  if (!replaceBox) {
    contentBox.appendChild(adBox);
  }

  adObserver.observe(adBox);
}
```

最初のものは配列 `ads` です。この配列には、各広告を作成するために必要なデータが収められています。ここでは 4 つのデータを保有しており、そこからランダムに選ぶことができます。実際のシナリオでは、もちろん、広告はデータベースから、あるいは、 API を使用して広告をフェッチする広告サービスから来る可能性がより高いでしょう。背景色 (`bgcolor`)、タイトル (`title`)、本文文字列 (`body`) の 3 つのプロパティを持つオブジェクトで、各広告を表現します。

そして、いくつかの変数を定義します。

- `adBox`
  - : これを、広告を表わす要素に設定します。ページに追加される新しい広告の場合、これは {{domxref("Document.createElement()")}} で作成されます。既存の広告を置き換える場合、これは指定された広告要素 (`replaceBox`) に設定します。
- `title`
  - : 広告のタイトルを表す {{HTMLElement("h2")}} 要素を保持します。
- `body`
  - : 広告の本文を表す {{HTMLElement("p")}} を保持します。
- `timerElem`
  - : 広告がこれまでに表示された時間を格納する {{HTMLElement("div")}} 要素を保持します。

`Math.floor(Math.random() * ads.length)` の計算により、ランダムな広告が選択されます。結果は 0 から広告の数より 1 少ない値になります。これで、対応する広告が `adBox` と呼ばれるようになりました。

もし `replaceBox` に値が指定された場合、それを広告要素として使用します。そのためには、まず {{domxref("IntersectionObserver.unobserve()")}} を呼び出して要素の監視を終了させます。次に、広告を構成する各要素（広告ボックス自体、タイトル、本体、およびタイマーボックス）のローカル変数がすべて、既存の広告の対応する要素に設定されます。

replaceBox に値が指定されなかった場合は、新しい広告要素を作成します。広告の新しい {{HTMLElement("div")}} 要素を作成し、そのクラス名を `"ad"` に設定することでプロパティを確立します。次に、広告のタイトル要素を、本体や表示タイマーと共に作成します。これらは、それぞれ {{HTMLElement("h2")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}} 要素になります。これらの要素を `adBox` 要素に付加します。

その後、コードのパスは再び繰り返しになります。広告の背景色は新しい広告のレコードで指定された値に設定され、要素のクラスとコンテンツも適切に設定されます。

次に、広告の可視性データを追跡するカスタムデータプロパティを設定するため、 `adBox.dataset.totalViewTime` と `adBox.dataset.lastViewStarted` を 0 に設定します。

最後に、広告の表示時間を示すタイマーを表示している `<div>` の ID を設定し、クラス `"timer"` を指定します。 0 分 0 秒の開始時刻を表すために初期テキストを「0:00」に設定し、広告に追加します。

既存の広告を置き換えない場合は、{{domxref("Node.appendChild", "Document.appendChild()")}} を使用して、ページのコンテンツ領域に要素を追加する必要があります。広告を置き換える場合は、すでにその広告があり、そのコンテンツを新しい広告に置き換えます。次に、交差オブザーバーである `adObserver` の {{domxref("IntersectionObserver.observe", "observe()")}} メソッドを呼び出して、広告とビューポートの交差が変更されないか監視を開始します。これで、広告が 100% 見えなくなったり、 1 ピクセルでも見えるようになったり、広告が何らかの方法で 75% 見える状態を通過するたびに、[オブザーバーのコールバック](#交差状態の変化の処理)が実行されるようになります。

#### 既存の広告を置き換える

[オブザーバーのコールバック](#交差状態の変化の処理)は、広告が 100% 見えなくなり、かつ表示時間の合計が 1 分以上になった場合に目を光らせています。そうなった場合、その広告の要素を入力として `replaceAd()` 関数を呼び出し、古い広告を新しい広告に置き換えます。

```js
function replaceAd(adBox) {
  updateAdTimer(adBox);

  const visibleTime = adBox.dataset.totalViewTime;
  console.log(
    `Replacing ad: ${
      adBox.querySelector("h2").innerText
    } - visible for ${visibleTime}`,
  );

  loadRandomAd(adBox);
}
```

`replaceAd()` は、まず既存の広告の `updateAdTimer()` を呼び出して、そのタイマーが最新であることを確認します。これにより、 `totalViewTime` を読み取る際に、広告がユーザーに表示されていた時間の正確な最終値を確認することができます。この場合、コンソールにログ出力しますが、現実の世界では、広告サービスの API に情報を送信したり、データベースに保存したりすることになります。

次に、置き換える広告を引数に指定して [`loadRandomAd()`](#広告の作成) を呼び出すことで新しい広告を読み込ませています。前回見たように、 `loadRandomAd()` は、入力引数として既存の広告の要素を指定すると、新しい広告に対応したコンテンツや データで、既存の広告を置き換えます。

新しい広告の要素オブジェクトは、必要に応じて呼び出し側に返されます。

### 結果

出来上がったページは、このようになります。上下にスクロールして、可視性の変化が各広告のタイマーにどのように影響するかを試してみてください。また、各広告は表示されてから 1 分後に置き換えられること（ただし、広告を最初にスクロールして表示から外し、再び戻す必要があります）、文書内のタブがバックグラウンドにある間はタイマーが一時停止することに注意してください。ただし、ブラウザーを別のウィンドウで覆っても、タイマーは一時停止しません。

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## 関連情報

- [交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API)
- [ページ可視性 API](/ja/docs/Web/API/Page_Visibility_API)
