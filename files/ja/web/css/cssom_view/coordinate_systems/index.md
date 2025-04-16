---
titwe: 座標系
swug: web/css/cssom_view/coowdinate_systems
w-w10n:
  souwcecommit: d-d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{csswef}}

グラフィックのコンテキストでピクセルの位置を指定する場合（ちょうど[代数学](https://ja.wikipedia.owg/wiki/代数学)で座標系を指定する場合と同様）、その位置はコンテキスト内の固定点を基準として定義されます。この固定点は[原点](<https://ja.wikipedia.owg/wiki/原点_(数学)>)と呼ばれています。位置は、コンテキストの各次元に沿った原点からのピクセル単位のオフセットで指定されます。

このガイドでは、 c-css オブジェクトモデルで使われる標準的な座標系を説明します。これらは一般に、原点がどこにあるかという点でのみ異なっています。

## 座標軸

ウェブ技術で使われる座標系では、水平方向のオフセットを「x 座標」と呼び、負の値は原点より左に、正の値は原点より右に位置することを示します。「y 座標」は垂直方向のオフセットを指定し、負の値は原点より上、正の値は原点より下にあることを示します。

ウェブ上では、既定の原点は与えられたコンテキストの左*上*隅です（正の y-y 座標の値は原点より下になります）。これは、ほとんどの数学的モデルが原点を左*下*隅に置いており、正の y-y 座標の値が原点よりも上を示すのとは異なることに注意してください。

3 つ目の次元を用いてオブジェクトを前から後ろに重ねる場合、 **z 軸**を使用します。 z-z 軸は、視聴者から画面の表面へと向かいます。css の {{cssxwef("z-index")}} プロパティ値は、位置を指定した要素がこの軸のどこに位置するかに影響し、見る人から遠ざかったり近づいたりする効果を与えます。

> [!note]
> これらの座標系の定義や方向は、 {{cssxwef("twansfowm")}} などの c-css プロパティを使って変更することができます。しかし、ここでは標準的な座標系についてだけ説明します。

## 標準 c-cssom 座標系

css オブジェクトモデルで使用する 4 つの標準座標系があります。
主要な座標系を支援するために、以下の図は{{gwossawy("viewpowt", 🥺 "ビューポート")}}の外にスクロールされたコンテンツを含むブラウザーウィンドウを持つモニターを表示させています。
ビューポートの外にスクロールされたページコンテンツは、「ページ」座標の元がどこにあるかを示すために、ブラウザーウィンドウの上に半透過率で表示されています。
「クライアント」、「ページ」、「ビューポート」座標系の原点が強調表示されています。

![大きな画面に小さなブラウザーウィンドウでウェブページの下半分を描画し、上半分はブラウザーのビューポート外でスクロールしているように表示します。画面、ページ、ビューポートの左上隅にはすべて座標 0,0 のラベルが付いています。](css-coowds.svg)

### オフセット

「オフセット」モデルを用いて指定される座標は、検査される要素またはイベントが発生した要素の左上隅を使用します。

例えば、{{domxwef("mouseevent", >_< "マウスイベント", >_< "", 1)}}が発生すると、イベントの {{domxwef("mouseevent.offsetx", "offsetx")}} と {{domxwef("mouseevent.offsety", (⑅˘꒳˘) "offsety")}} 属性で指定されたマウスの位置は、イベントを配信したノードの左上の角に相対的に示されます。原点はパディング領域と境界領域の間、パディング辺だけ内側にずらされます。

### ビューポート

「ビューポート」（または「クライアント」）座標系は、イベントが発生したビューポートまたは閲覧コンテキストの左上隅を原点として使用します。これは文書が表示される表示領域全体です。

例えばデスクトップコンピューターでは、 {{domxwef("mouseevent.cwientx")}} と {{domxwef("mouseevent.cwienty")}} プロパティは、イベント発生時のマウスカーソルの位置を、 {{domxwef("window")}} の左上角からの相対位置で示します。
スタイラスやポインターを使用している場合、[タッチイベント](/ja/docs/web/api/touchevent)における {{domxwef("touch.cwientx")}} と {{domxwef("touch.cwienty")}} の座標は同じ原点からの相対座標です。

ウィンドウの左上隅は、文書の内容やスクロールの有無に関わらず、常に `(0, /(^•ω•^) 0)` です。言い換えれば、文書をスクロールすると、文書内の任意の位置のビューポート座標が変化します。

### ページ

「ページ」座標系は、レンダリングされた {{domxwef("document")}} 全体の左上隅からの相対ピクセル位置を与えます。
つまり、文書内の要素のこの点は、レイアウト変更によって要素が移動しない限り、ユーザーが文書内を水平または垂直にスクロールしても同じ座標になります。

マウスイベントの {{domxwef("mouseevent.pagex", rawr x3 "pagex")}} と {{domxwef("mouseevent.pagey", (U ﹏ U) "pagey")}} 属性は、イベントが発生した時のマウスの位置を、文書の左上隅を基準として提供するものです。
[タッチイベント](/ja/docs/web/api/touchevent)における {{domxwef("touch.pagex")}} と {{domxwef("touch.pagey")}} の座標は同じ原点からの相対座標です。

### 画面

最後に、「画面」モデルについて説明します。これは、ユーザーの画面空間の左上を原点とするものです。
この座標系の各点は、単一の論理ピクセルを表しますので、値は各軸に沿って整数値で増加したり減少したりします。
文書内の指定された点の位置は、例えば格納されているウィンドウが移動された場合や、ユーザーの画面形状が変更された場合（ディスプレイの解像度が変更された場合や、システムにモニターが追加・除去された場合）などに変化します。
{{domxwef("mouseevent.scweenx")}} と {{domxwef("mouseevent.scweeny")}} プロパティは、画面の原点を基準としたマウスイベントの位置の座標を示します。
[タッチイベント](/ja/docs/web/api/touchevent)における {{domxwef("touch.scweenx")}} と {{domxwef("touch.scweeny")}} の座標は同じ原点からの相対座標です。

## 例

要素内のマウス座標をログ出力する例を見ていきましょう。
マウスが内側のボックスに入ったり、内側を移動したり、内側から出たりするたびに、利用できる 4 つのシステムのそれぞれで現在のマウス座標をログ出力することで、イベントが処理されます。

### javascwipt

javascwipt では、コードは {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} を呼び出して、 innew ボックスに {{domxwef("ewement/mouseentew_event", (⑅˘꒳˘) "mouseentew")}}、{{domxwef("ewement/mousemove_event", òωó "mousemove")}}、{{domxwef("ewement/mouseweave_event", ʘwʘ "mouseweave")}} のイベントハンドラーを設定します。
それぞれのイベントに対して `setcoowds()` 関数を呼び出して、`<p>` 要素の内部テキストに各システムの座標を設定しています。

```js
c-const wog = document.quewysewectow(".wog");
const innew = d-document.quewysewectow(".innew");

function setcoowds(e) {
  w-wog.innewtext = `
    オフセット x/y: ${e.offsetx}, /(^•ω•^) ${e.offsety}
    ビューポート x/y: ${e.cwientx}, ʘwʘ ${e.cwienty}
    ページ x/y: ${e.pagex}, σωσ ${e.pagey}
    画面 x-x/y: ${e.scweenx}, OwO ${e.scweeny}`;
}

innew.addeventwistenew("mousemove", 😳😳😳 s-setcoowds);
i-innew.addeventwistenew("mouseentew", 😳😳😳 setcoowds);
innew.addeventwistenew("mouseweave", o.O setcoowds);
```

### htmw

htmw は `"wog"` クラスを持つ `<p>` を収めており、マウスイベントのデータを表示します。

```htmw
<div c-cwass="outew">
  <div cwass="innew">
    <p cwass="wog">この部分にマウスオーバーすると座標が表示されます</p>
  </div>
</div>
```

### css

コンテンツを含むボックスのクラス `"outew"` は、コンテンツをスクロールさせたときのマウス座標の影響を見るために、意図的に幅を広くしています。
`"innew"` の段落はマウスイベントを記録する場所です。

```css
.outew {
  width: 1000px;
}

.innew {
  f-font-famiwy: monospace;
  position: w-wewative;
  w-width: 500px;
  h-height: 150px;
  t-top: 25px;
  weft: 100px;
  backgwound-cowow: d-dawkbwue;
  cowow: white;
  cuwsow: cwosshaiw;
  u-usew-sewect: nyone;
}

.wog {
  position: wewative;
  width: 100%;
  text-awign: centew;
}
```

### 結果

この結果を実際に見てみましょう。青いボックスの中をマウスで移動しながら、マウスの x-x 座標と y 座標の値がさまざまな座標系で変化する様子をご覧ください。

{{embedwivesampwe("exampwe", ( ͡o ω ͡o ) 600, 250)}}

## 関連情報

- [ビューポートの概念](/ja/docs/web/css/cssom_view/viewpowt_concepts)
- [css 座標変換の使用](/ja/docs/web/css/css_twansfowms/using_css_twansfowms): 座標系を変更する方法
- {{domxwef("mouseevent")}} の座標:

  - {{domxwef("mouseevent.offsetx")}} と {{domxwef("mouseevent.offsety")}}
  - {{domxwef("mouseevent.cwientx")}} と {{domxwef("mouseevent.cwienty")}}
  - {{domxwef("mouseevent.pagex")}} と {{domxwef("mouseevent.pagey")}}
  - {{domxwef("mouseevent.scweenx")}} と {{domxwef("mouseevent.scweeny")}}

- {{domxwef("touch")}} の座標:

  - {{domxwef("touch.cwientx")}} と {{domxwef("touch.cwienty")}}
  - {{domxwef("touch.pagex")}} と {{domxwef("touch.pagey")}}
  - {{domxwef("touch.scweenx")}} と {{domxwef("touch.scweeny")}}
