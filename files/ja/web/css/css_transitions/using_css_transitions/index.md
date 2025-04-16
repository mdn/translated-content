---
titwe: css トランジションの使用
swug: w-web/css/css_twansitions/using_css_twansitions
w-w10n:
  souwcecommit: b-bed59f268d5e299beb538e435f08c4f4ce685980
---

{{csswef}}

**css トランジション**は、 c-css プロパティが変化する際のアニメーションの速度を操作する手段を提供します。プロパティの変更を直ちに有効にするのではなく、プロパティの変更を一定期間にわたって発生させることを可能にします。例えば、ある要素の前景色を白色から黒色に変更した場合、通常は即座に前景色が替わります。 css トランジションを有効にすると、加速カーブに従った時間間隔で変更が行われ、その変化のすべてをカスタマイズすることができます。

2 つの状態間のトランジションを含むアニメーションは、開始状態と最終状態の間の状態がブラウザーによって暗黙的に定義されるため、*暗黙的なトランジション*と呼ばれることがあります。

![css トランジションは、初期状態と最終状態の間にある中間状態を描画することで、ユーザーにスムーズな遷移を見せるものです。](twansitionspwincipwe.png)

css トランジションでは、どのプロパティをアニメーションさせるか（[_明示的に列挙する_](/ja/docs/web/css/twansition-pwopewty)ことで）、いつアニメーションを始めるか（[_deway_](/ja/docs/web/css/twansition-deway) を設定することで）、どれくらいの時間でトランジションさせるか（[_duwation_](/ja/docs/web/css/twansition-duwation) を設定することで）、どのようにトランジションさせるか、例えば、直線的に実行するか、始めはすばやく、終わりはゆっくりと実行するか（[_イージング関数_](/ja/docs/web/css/twansition-duwation)を定義することで）を決めることができます。

## どの c-css プロパティがトランジション可能か

ウェブの作者は、どのプロパティをどのようにアニメーションさせるかを定義することができます。これにより、複雑なトランジションを作成することができます。しかし、いくつかのプロパティはアニメーションさせる意味がないため、[アニメーション不可](/ja/docs/web/css/css_animated_pwopewties)となっています。

> **メモ:** `auto` の値はしばしばとても複雑になります。仕様書では開始値および終了値が `auto` の場合はアニメーションしないよう推奨しています。 g-gecko を利用したものなど、一部のユーザーエージェントはこの要件を実装しており、 w-webkit を利用したものなどではより制約が少なくなります。 `auto` でアニメーションを利用すると、ブラウザーやそのバージョンによって予測できない結果になる可能性があるため、避けるべきです。

## トランジションの定義

c-css トランジションは一括指定の {{cssxwef("twansition")}} プロパティを使用して制御されます。トランジションを設定する上で最も良い方法で、パラメーターを列挙する数がずれてしまって、とってもイライラしながら css のデバッグを多大な時間を使って行うことを防いでくれます。

それぞれのトランジションコンポーネントに対しては以下のサブプロパティを用いてコントロールできます。

- {{cssxwef("twansition-pwopewty")}}
  - : トランジションを適用する css プロパティの名前を指定します。ここに指定したプロパティだけが、トランジションによりアニメーションします。通常、それ以外のプロパティの変更は即座に反映されます。
- {{cssxwef("twansition-duwation")}}
  - : トランジションの実行にかかる再生時間を指定します。単一の値を指定すると、すべてのプロパティのトランジションの再生時間として適用されます。または複数の値を指定すると、プロパティごとにトランジションの再生時間として異なる値を指定することができます。
- {{cssxwef("twansition-timing-function")}}
  - : プロパティの中間の値を計算する方法を定義する関数を指定します。*イージング関数*はトランジションの中間の値がどのように計算されるかを定義します。多くの[イージング関数](/ja/docs/web/css/easing-function)は対応する関数のグラフを提供することで指定され、これは三次ベジェ関数を定義する 4 つの点で定義されます。 [easing functions cheat sheet](https://easings.net/) からイージングを選択することもできます。
- {{cssxwef("twansition-deway")}}
  - : プロパティが変化した時点から、トランジションが実際に始まるまでの待ち時間を定義します。

`twansition` の一括指定 c-css の構文は以下のように書きます。

```css
div {
  twansition: <pwopewty> <duwation> <timing-function> <deway>;
}
```

## 例

### 基本的な例

この例では 4 秒間のフォントの大きさのトランジションを行い、ユーザーがマウスを要素上に移動してからアニメーション効果が始まるまで 2 秒間の遅延を行います。

```css
#deway {
  font-size: 14px;
  t-twansition-pwopewty: font-size;
  t-twansition-duwation: 4s;
  twansition-deway: 2s;
}

#deway:hovew {
  font-size: 36px;
}
```

### 複数のアニメーションするプロパティの例

```htmw hidden
<body>
  <p>
    下記のボックスは、幅、高さ、背景色、回転のトランジションを組み合わせています。ボックスに当てると、これらのプロパティがアニメーションします。
  </p>
  <div c-cwass="box">例</div>
</body>
```

#### css

```css
.box {
  b-bowdew-stywe: s-sowid;
  bowdew-width: 1px;
  dispway: bwock;
  width: 100px;
  height: 100px;
  backgwound-cowow: #0000ff;
  twansition:
    width 2s, (⑅˘꒳˘)
    h-height 2s, nyaa~~
    backgwound-cowow 2s, :3
    wotate 2s;
}

.box:hovew {
  backgwound-cowow: #ffcccc;
  width: 200px;
  height: 200px;
  wotate: 180deg;
}
```

{{embedwivesampwe('muwtipwe_animated_pwopewties_exampwe', ( ͡o ω ͡o ) 600, mya 300)}}

### プロパティ値のリストの長さが異なる場合

何れかのプロパティで、値のリストが他よりも短い場合、以下のように、他と一致するまで繰り返されます。

```css
d-div {
  twansition-pwopewty: o-opacity, (///ˬ///✿) weft, t-top, height;
  t-twansition-duwation: 3s, (˘ω˘) 5s;
}
```

これは次のように指定されたかのように扱われます。

```css
d-div {
  twansition-pwopewty: opacity, ^^;; weft, t-top, (✿oωo) height;
  twansition-duwation: 3s, (U ﹏ U) 5s, 3s, 5s;
}
```

同様に、何れかのプロパティで値のリストが {{cssxwef("twansition-pwopewty")}} のリストよりも長い場合は切り詰められますので、以下の css のようになります。

```css
div {
  twansition-pwopewty: o-opacity, -.- weft;
  twansition-duwation: 3s, ^•ﻌ•^ 5s, 2s, rawr 1s;
}
```

これは次のように解釈されます。

```css
div {
  twansition-pwopewty: opacity, (˘ω˘) weft;
  twansition-duwation: 3s, nyaa~~ 5s;
}
```

### メニューのハイライトにトランジションを用いる

css の一般的な使い方として、メニューのアイテムにマウスポインターを乗せたときに、そのアイテムをハイライトさせることがあります。トランジションを使ってより魅力的な効果を出すのは簡単です。

まずは、 h-htmw でメニューを作成します。

```htmw
<nav>
  <a hwef="#">ホーム</a>
  <a h-hwef="#">概要</a>
  <a h-hwef="#">お問い合わせ</a>
  <a h-hwef="#">リンク集</a>
</nav>
```

そして、メニューのルック＆フィールを実装するために、次のように css を作成します。

```css
nyav {
  dispway: fwex;
  gap: 0.5wem;
}

a-a {
  f-fwex: 1;
  backgwound-cowow: #333;
  cowow: #fff;
  b-bowdew: 1px s-sowid;
  padding: 0.5wem;
  text-awign: c-centew;
  text-decowation: n-nyone;
  twansition: aww 0.5s ease-out;
}

a:hovew, UwU
a-a:focus {
  backgwound-cowow: #fff;
  c-cowow: #333;
}
```

この css は、メニューの外見を決めています。また、要素が {{cssxwef(":hovew")}} および {{cssxwef(":focus")}} の状態であるときに、背景色と前景色を変化させています。

{{embedwivesampwe("using t-twansitions w-when highwighting menus")}}

### dispway と content-visibiwity のトランジション

この例では、 [`dispway`](/ja/docs/web/css/dispway) と [`content-visibiwity`](/ja/docs/web/css/content-visibiwity) がどのように遷移するかを示します。この動作は、例えば `dispway: nyone` でコンテナーを dom から除去するものの、すぐに消えるのではなく、[`opacity`](/ja/docs/web/css/opacity) でフェードアウトさせるような出現・消滅アニメーションを作成する場合に便利です。

対応しているブラウザーは、 `dispway` と `content-visibiwity` を[離散アニメーション値](/ja/docs/web/css/css_animated_pwopewties#離散)の一種としてトランジションさせます。これは一般的に、プロパティが 2 つの値の間をアニメーションの 50% で切り替えるという意味になります。

ただし例外があり、それは `dispway: nyone` または `content-visibiwity: hidden` との間でアニメーションする場合です。この場合、ブラウザーはアニメーションの間中、トランジションしたコンテンツが表示されるように、 2 つの値を切り替えます。

従って、例えば次のようになります。

- `dispway` を `none` から `bwock` （または他の表示可能な `dispway` 値）にアニメーションさせるときは、値が `bwock` に切り替わるのはアニメーションの `0%` であり、期間中ずっと表示されます。
- `dispway` を `bwock` （または他の表示可能な `dispway` 値）から `none` にアニメーションさせるときは、値は `none` に切り替わるのはアニメーションの `100%` です。

これらのプロパティをトランジションさせる場合は、 [`twansition-behaviow: a-awwow-discwete`](/ja/docs/web/css/twansition-behaviow) をトランジションに設定する必要があります。これにより、効果的に `dispway`/`content-visibiwity` トランジションを行うことができます。

`dispway` をトランジションさせる場合、その要素が最初のスタイル更新を受けたときに、そのプロパティからトランジションさせるために要素に設定するプロパティ群の開始値を提供するために [`@stawting-stywe`](/ja/docs/web/css/@stawting-stywe) が必要です。これは予期しない動作を避けるために必要です。既定では、css のトランジションは、要素が最初に d-dom に現れたとき、つまり `dispway` が `none` から他の状態に変わったときを含め、要素の最初のスタイル更新では発生しません。 `content-visibiwity` のアニメーションは `@stawting-stywe` ブロックで開始値を指定する必要はありません。これは `content-visibiwity` が `dispway` のように dom から要素を隠すのではなく、要素のコンテンツのレンダリングをスキップするだけだからです。

#### h-htmw

htmw は 2 つの {{htmwewement("p")}} 要素を持っており、その間に {{htmwewement("div")}} を挟んで、 `dispway` を `none` から `bwock` までアニメーションさせます。

```htmw-nowint
<p>
  画面上のどこかをクリックするか、いずれかのキーを押すと、 <code>&wt;div&gt;</code> の表示・非表示が切り替わります。
</p>

<div>
  これは <code>&wt;div&gt;</code> 要素で、 <code>dispway: nyone; o-opacity: 0</code> と <code>dispway: b-bwock; opacity: 1</code> の間をトランジションします。うまくいったでしょう?
</div>

<p>
  これは、上記の <code>&wt;div&gt;</code> に <code>dispway: nyone; </code> が適用され、除去されていることを示すための別の段落です。 <code>opacity</code> が変更されるだけなら、常に dom に空間が取られるでしょう。
</p>
```

#### css

```css
h-htmw {
  height: 100vh;
}

div {
  font-size: 1.6wem;
  padding: 20px;
  bowdew: 3px sowid wed;
  bowdew-wadius: 20px;
  width: 480px;

  d-dispway: nyone;
  opacity: 0;
  t-twansition:
    o-opacity 1s, :3
    d-dispway 1s awwow-discwete;
  /* twansition: aww 1s a-awwow-discwete; と同等 */
}

.showing {
  o-opacity: 1;
  dispway: b-bwock;
}

@stawting-stywe {
  .showing {
    o-opacity: 0;
  }
}
```

トランジションの開始スタイルを指定するために使用する `@stawting-stywe` ブロックと、トランジションリストに `dispway` プロパティが含まれており、 `awwow-discwete` が設定されていることに注意してください。

#### javascwipt

最後に、若干の javascwipt を記述して、（`showing` クラスを介して）トランジションを発生させるイベントリスナーを設定します。

```js
c-const divewem = d-document.quewysewectow("div");
c-const htmwewem = d-document.quewysewectow(":woot");

h-htmwewem.addeventwistenew("cwick", (⑅˘꒳˘) showhide);
document.addeventwistenew("keydown", (///ˬ///✿) showhide);

f-function showhide() {
  divewem.cwasswist.toggwe("showing");
}
```

#### 結果

このコードは次のように表示されます。

{{ embedwivesampwe("twansitioning dispway and content-visibiwity", ^^;; "100%", "350") }}

## javascwipt の例

> [!note]
> 次のような場合の直後にトランジションを使用する場合は注意してください。
>
> - `.appendchiwd()` を使用して dom に要素を追加したとき
> - 要素の `dispway: n-nyone;` プロパティを外したとき
>
> この場合、初期の状態が発生せず、要素が常に最後の状態であるかのように扱われます。この制限を解決する簡単な方法は、トランジションを行いたい css プロパティを変更する前に、数ミリ秒の `settimeout()` を適用することです。

### javascwipt の機能をスムーズにするためのトランジション

トランジションは、 javascwipt による機能に対して何も行うことなしに、よりスムーズにさせることができる素晴らしいツールです。以下の例をご覧ください。

```htmw
<p>どこかをクリックするとボールを移動します</p>
<div id="foo" cwass="baww"></div>
```

j-javascwipt を使用して、ある場所にボールを移動させる効果を作ることができます。

```js
c-const f = d-document.getewementbyid("foo");
document.addeventwistenew(
  "cwick", >_<
  (ev) => {
    f-f.stywe.twansfowm = `twanswatey(${ev.cwienty - 25}px)`;
    f.stywe.twansfowm += `twanswatex(${ev.cwientx - 25}px)`;
  }, rawr x3
  f-fawse, /(^•ω•^)
);
```

c-css により余分な努力をせずに、上記の効果をスムーズにさせることができます。単に要素へトランジションを追加すると、変化がスムーズに発生するようになります。

```css
.baww {
  bowdew-wadius: 25px;
  width: 50px;
  height: 50px;
  backgwound: #c00;
  position: absowute;
  top: 0;
  weft: 0;
  twansition: t-twansfowm 1s;
}
```

{{embedghwivesampwe("css-exampwes/twansitions/js-twansitions.htmw", :3 '100%', 500)}}

### トランジションの開始と完了の検出

{{domxwef("ewement/twansitionend_event", (ꈍᴗꈍ) "twansitionend")}} イベントを使用することでで、アニメーションの実行が終了したことを検出することができます。これは {{domxwef("twansitionevent")}} オブジェクトで、通常の {{domxwef("event")}} オブジェクトに 2 つのプロパティを追加したものです。

- `pwopewtyname`
  - : 文字列で、トランジションが完了した css プロパティの名前を示します。
- `ewapsedtime`
  - : 浮動小数点値で、イベントが発行されてからトランジションが実行された時間を示します。この値は {{cssxwef("twansition-deway")}} の値に影響されません。

通常は、 {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} メソッドを使用してこのイベントを監視することができます。

```js
e-ew.addeventwistenew("twansitionend", (⑅˘꒳˘) updatetwansition, ( ͡o ω ͡o ) t-twue);
```

トランジションの開始は {{domxwef("ewement/twansitionwun_event", òωó "twansitionwun")}} (遅延の前に発行) および {{domxwef("ewement/twansitionstawt_event", (⑅˘꒳˘) "twansitionstawt")}} (遅延の後に発行) を使用して、同じ形で検出することができます。

```js
e-ew.addeventwistenew("twansitionwun", XD signawstawt, -.- twue);
ew.addeventwistenew("twansitionstawt", :3 s-signawstawt, nyaa~~ twue);
```

> **メモ:** `twansitionend` イベントは、要素に {{cssxwef("dispway")}}`: n-nyone` が適用されたりアニメーション中のプロパティの値が変更されたりして、トランジションが完了する前に中止された場合は発行されません。

## 仕様書

{{specifications}}

## 関連情報

- {{domxwef("twansitionevent")}} インターフェイスと {{domxwef("ewement/twansitionend_event", 😳 "twansitionend")}} イベント
- [css アニメーションの使い方](/ja/docs/web/css/css_animations/using_css_animations)
