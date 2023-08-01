---
title: 座標系
slug: Web/CSS/CSSOM_view/Coordinate_systems
---

{{CSSRef}}

グラフィックのコンテキストでピクセルの位置を指定する場合（ちょうど[代数学](https://ja.wikipedia.org/wiki/代数学)で座標系を指定する場合と同様）、その位置はコンテキスト内の固定点を基準として定義されます。この固定点は[原点](<https://ja.wikipedia.org/wiki/原点_(数学)>)と呼ばれています。位置は、コンテキストの各次元に沿った原点からのピクセル単位のオフセットで指定されます。

このガイドでは、 CSS オブジェクトモデルで使われる標準的な座標系を説明します。これらは一般に、原点がどこにあるかという点でのみ異なっています。

## 座標軸

ウェブ技術で使われる座標系では、慣例として水平方向のオフセットを *X 座標*と呼び、負の値は原点より左に、正の値は原点より右に位置することを示します。*Y 座標*は垂直方向のオフセットを指定し、負の値は原点より上、正の値は原点より下にあることを示します。

ウェブ上では、既定の原点は与えられたコンテキストの左*上*隅です（正の Y 座標の値は原点より下になります）。これは、ほとんどの数学的モデルが原点を左*下*隅に置いており、正の Y 座標の値が原点よりも上を示すのとは異なることに注意してください。

3D グラフィックスを描くとき、あるいは三次元を使ってオブジェクトを前から後ろに重ねるときには、 Z 座標も使われます。これは、正の場合は見る人から離れる方向、負の場合は見る人に近づく方向の距離を指定します。

> **メモ:** 実際には、これらの座標系の定義や方向は、 {{cssxref("transform")}} などの CSS プロパティを使って変更することができます。しかし、ここでは標準的な座標系についてだけ説明します。

## 標準 CSSOM 座標系

以下の通り、 CSS オブジェクトモデルで使用される標準座標系が 4 つあります。

### オフセット

「オフセット」モデルを用いて指定される座標は、検査される要素またはイベントが発生した要素の左上隅を使用します。

例えば、{{domxref("MouseEvent", "マウスイベント", "", 1)}}が発生すると、イベントの {{domxref("MouseEvent.offsetX", "offsetX")}} と {{domxref("MouseEvent.offsetY", "offsetY")}} 属性で指定されたマウスの位置は、イベントを配信したノードの左上の角に相対的に示されます。原点は {{cssxref("padding-left")}} と {{cssxref("padding-top")}} によって指定された距離だけ内側に置かれます。

### クライアント

「クライアント」座標系は、イベントが発生したビューポートまたは閲覧コンテキストの左上隅を原点として使用します。これは文書が表示される表示領域全体です。スクロールは加味されません。

例えばデスクトップコンピューターでは、 {{domxref("MouseEvent.clientX")}} と {{domxref("MouseEvent.clientY")}} プロパティはイベント発生時のマウスカーソルの位置を、ブラウザーウィンドウの左上角からの相対位置で示しています。ウィンドウの左上隅は、文書の内容やスクロールの有無に関わらず、常に (0, 0) です。言い換えれば、文書をスクロールすると、文書内の任意の位置のクライアント座標が変化します。

### ページ

「ページ」座標系は、ピクセルの位置を、そのピクセルが位置する {{domxref("Document")}} 全体の左上隅からの相対的な位置で指定します。つまり、文書内の要素のある点は、（直接的に位置を変えるか、間接的に他のコンテンツを追加したりサイズを変えたりすることで）その要素が移動しない限り、ページモデルにおいて同じ座標を維持することになります。

マウスイベントの {{domxref("MouseEvent.pageX", "pageX")}} と {{domxref("MouseEvent.pageY", "pageY")}} 属性は、イベントが発生した時のマウスの位置を、文書の左上隅を基準として提供するものです。

### スクリーン

最後に、「スクリーン」モデルについてです。これは、ユーザーの画面全体の左上隅を原点とする座標系であることは、おそらく明白でしょう。つまり、例えばウィンドウを移動したり、ユーザーの画面形状を変更したり（ディスプレイの解像度を変更したり、システムにモニターを追加または削除したり）すると、文書内のある点の位置が変化することになります。

{{domxref("MouseEvent.screenX")}} と {{domxref("MouseEvent.screenY")}} プロパティは、画面の原点を基準としたマウスイベントの位置の座標を示します。

## 例

では、例を見てみましょう。この単純な例では、入れ子になったボックスのセットを作成します。マウスが内側のボックスに入ったり、内側を移動したり、外側に出たりするたびに、対応するイベントがボックス内の情報メッセージのセットを更新して処理され、利用可能な 4 つの座標系それぞれにおける現在のマウス座標が一覧表示されます。

### JavaScript

スクリプトを 2 つの部分に分けて見てみましょう。まず、座標を画面に記録するコード。このコードは、私たちが見ている様々なマウスイベントのイベントハンドラーから呼ばれることになります。

#### 座標を表示

HTML を見ればわかるように、内側のボックス（イベントを監視しているボックス）には、これからレポートする 4 つの座標系ごとにいくつかの段落が含まれています。

```js
let inner = document.querySelector(".inner");
let log = document.querySelector(".log");

function setCoords(e, type) {
  let idX = type + "X";
  let idY = type + "Y";

  document.getElementById(idX).innerText = e[idX];
  document.getElementById(idY).innerText = e[idY];
}
```

座標情報を表示する段落を含む内側のボックスにある {{HTMLElement("div")}} への参照が `log` に取得されます。

`setCoords()` 関数は、入力として {{domxref("MouseEvent")}} と座標を取得するときに使用する原点の名前を受け取るように設計されています。そして、その実装は非常にシンプルです。変数 `idX` と `idY` には、指定された座標系における座標に対応するプロパティの名前が文字列として設定されます。例えば、 `type` の値が `"page"` であれば、 `idX` は `"pageX"` となり、 `idY` は `"pageY"` となります。

#### マウスイベントの取り扱い

`setCoords()` は様々なマウスイベントのイベントハンドラー、 `update()` から呼び出されます。以下のようなものです。

```js
function update(e) {
  setCoords(e, "offset");
  setCoords(e, "client");
  setCoords(e, "page");
  setCoords(e, "screen");
}

inner.addEventListener("mouseenter", update, false);
inner.addEventListener("mousemove", update, false);
inner.addEventListener("mouseleave", update, false);
```

イベントハンドラーは `update()` メソッドの中にあります。これはそれぞれの座標系ごとに、 `setCoords()` を 1 回ずつ呼び出し、発行されたイベントを渡します。

メインコードでは、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} を {{domxref("Element/mouseenter_event", "mouseenter")}}、{{domxref("Element/mousemove_event", "mousemove")}}、{{domxref("Element/mouseleave_event", "mouseleave")}} の各種別に対して呼び出し、内側のボックス上にイベントハンドラーをセットアップしています。

### HTML

この例の HTML は以下の通りです。なお、 ID が `"log"` である `<div>` の中で、それぞれの座標系ごとに段落があり、各モデルの座標を受け取って表示するための要素に {{HTMLElement("span")}} が使用されていることに注意してください。

```html
<div class="outer">
  <div class="inner">
    <div class="log">
      <p>
        Offset-relative: <span id="offsetX">0</span>,
        <span id="offsetY">0</span>
      </p>
      <p>
        Client-relative: <span id="clientX">0</span>,
        <span id="clientY">0</span>
      </p>
      <p>
        Page-relative: <span id="pageX">0</span>,
        <span id="pageY">0</span>
      </p>
      <p>
        Screen-relative: <span id="screenX">0</span>,
        <span id="screenY">0</span>
      </p>
    </div>
  </div>
</div>
```

### CSS

CSS はここではほとんど見栄えのためのものです。クラス `"outer"` は、 MDN ウィンドウで表示するために意図的に幅を広くして、水平方向にスクロールできるようにした包含ボックスに使用されています。 `"inner"` ボックスはイベントを追跡するためのもので、マウス座標を表示します。

```css
.outer {
  width: 1000px;
  height: 200px;
  background-color: red;
}

.inner {
  position: relative;
  width: 500px;
  height: 150px;
  top: 25px;
  left: 100px;
  background-color: blue;
  color: white;
  cursor: crosshair;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}

.log {
  position: relative;
  width: 100%;
  text-align: center;
}
```

### 結果

ここでは、その結果を実際に見てみましょう。青いボックスの中をマウスで移動しながら、マウスの X 座標と Y 座標の値が、値を取得できる様々な座標系で変化する様子をご覧ください。また、この例を水平方向にスクロールさせると、返される値が変化するものの、 `clientX` の値が変化しないことに注意してください。

{{EmbedLiveSample("Example", 600, 250)}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms): 座標系を変更する方法
- マウスイベントの座標:

  - {{domxref("MouseEvent.offsetX")}} と {{domxref("MouseEvent.offsetY")}}
  - {{domxref("MouseEvent.clientX")}} と {{domxref("MouseEvent.clientY")}}
  - {{domxref("MouseEvent.pageX")}} と {{domxref("MouseEvent.pageY")}}
  - {{domxref("MouseEvent.screenX")}} と {{domxref("MouseEvent.screenY")}}
