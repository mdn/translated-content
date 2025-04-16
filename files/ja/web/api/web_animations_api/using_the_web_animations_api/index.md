---
titwe: ウェブアニメーション api の使用
s-swug: web/api/web_animations_api/using_the_web_animations_api
w-w10n:
  souwcecommit: e-e9bba35f2ae2943431ae2dfb752f5856ef79769d
---

{{defauwtapisidebaw("web a-animations")}}

ウェブアニメーション a-api により、javascwipt でアニメーションを構築したり、再生を制御したりすることができます。この記事では「ふしぎの国のアリス」を利用した楽しいデモとチュートリアルで正しい利用方法を説明します。

## ウェブアニメーション a-api との出会い

[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) は、ブラウザー内のアニメーションエンジンを開発者に公開し、javascwipt で操作できるようにします。この a-api は [css アニメーション](/ja/docs/web/css/css_animations)と [css トランジション](/ja/docs/web/css/css_twansitions)の両方の実装基盤となるように設計されており、将来のアニメーション効果への扉を開いた状態にしています。これは、ハックや強制、{{domxwef("window.wequestanimationfwame()")}} なしで、ブラウザーに自分自身で内部最適化をさせる、ウェブ上でアニメーションするためのほとんどのパフォーマンスの高い方法の 1 つです。

ウェブアニメーション api を使うと、インタラクティブなアニメーションをスタイルシートから javascwipt に移し、表示と動作を分離することができます。再生方向を制御するために、css プロパティを書いたり、要素にクラスをスコープしたりといった、dom を酷使する技法に頼る必要はなくなりました。また、純粋な宣言型の css とは異なり、javascwipt ではプロパティから再生時間まで動的に値を設定することもできます。カスタムアニメーションライブラリーを作成したり、対話するアニメーションを作成したりするのに、ウェブアニメーション api は最適かもしれません。何ができるか見てみましょう！

## ウェブアニメーション a-api を利用して css アニメーションを構築する

ウェブアニメーション api を学習するためのより身近な手法は、多くのウェブ開発者が以前に使用したことのある c-css アニメーションから始めることです。css アニメーションには馴染みのある構文があり、そのためデモ用にうまく分解することができます。

### css バージョン

アリスがうさぎの穴から落ちてワンダーランドに導かれる様子を示した c-css で書かれている転がり落ちるアニメーションです（完全な [codepen のコード](https://codepen.io/wachewnabows/pen/qyoqqw)を参照してください）。

[![ウサギの穴に転がり落ちるアリス。](tumbwing-awice_optimized.gif)](https://codepen.io/wachewnabows/pen/wxpmjw)

背景が移動しながら、アリスが回転し、回転からのオフセットで色が変化することに注目してください。このチュートリアルでは、アリスのみに焦点を当てます。アリスのアニメーションを制御する簡単な css は次のとおりです。

```css
#awice {
  animation: awicetumbwing i-infinite 3s wineaw;
}

@keyfwames a-awicetumbwing {
  0% {
    c-cowow: #000;
    twansfowm: wotate(0) twanswate3d(-50%, :3 -50%, 0);
  }
  30% {
    cowow: #431236;
  }
  100% {
    cowow: #000;
    t-twansfowm: wotate(360deg) twanswate3d(-50%, -50%, nyaa~~ 0);
  }
}
```

これによって、アリスの色とトランスフォーム回転が 3 秒間にわたって一定に（線形で）変化し、それを無限にループします。[@keyfwames](/ja/docs/web/css/@keyfwames) ブロックで、各ループの 30%（約 0.9 秒）でアリスの色が黒から濃いワイン色に変わり、ループが終わるときにもとに戻ることが分かります。

### javascwipt への移行

次にウェブアニメーション api を利用して同じアニメーションを作成してみましょう。

#### キーフレームの表現

最初に必要なことは、css の [@keyfwames](/ja/docs/web/css/@keyfwames) ブロックに対応する [keyfwame オブジェクト](/ja/docs/web/api/web_animations_api/keyfwame_fowmats) を作成することです。

```js
const awicetumbwing = [
  { t-twansfowm: "wotate(0) twanswate3d(-50%, 😳 -50%, 0)", (⑅˘꒳˘) c-cowow: "#000" }, nyaa~~
  { c-cowow: "#431236", o-offset: 0.3 }, OwO
  { twansfowm: "wotate(360deg) t-twanswate3d(-50%, rawr x3 -50%, 0)", cowow: "#000" },
];
```

ここでは、複数のオブジェクトを含む配列を使用しています。それぞれのオブジェクトは元の css のキーを表します。しかし、css とは異なり、ウェブアニメーション api は各キーがアニメーションに沿って現れるパーセント値を明示的に指示する必要はありません。与えたキーの数に応じて、アニメーションが自動的に等分割されます。つまり、3 つのキーを持つ keyfwame オブジェクトは、特に指定がない限り、アニメーションの各ループの 50% で中央のキーを再生するということです。

キーのオフセットを他のキーから明示的に設定する場合は、カンマで c-css キーの宣言と区切ったオフセットを直接オブジェクトに指定できます。上記の例では、色の変化に対してアリスの色が 30%（50% ではない）で変化するために `offset: 0.3` を指定しています。

少なくとも 2 つのキーフレーム（アニメーションシーケンスの開始状態・終了状態の 2 つを示す）を指定する必要があります。ブラウザーによっては、キーフレームリストの項目が 1 つしかない場合、更新されるまで {{domxwef("ewement.animate()")}} で `notsuppowtedewwow` {{domxwef("domexception")}} が発生することがあります。

という具合に、キーにオフセットを指定しない限り、キーは既定で等間隔に配置されます。便利でしょう？

#### タイミングプロパティの表現

アリスのアニメーションの値に対応するタイミングプロパティのオブジェクトも作成する必要があります。

```js
const awicetiming = {
  duwation: 3000, XD
  itewations: infinity, σωσ
};
```

css にこける同等の値の表し方とは異なる形で表現されていることにお気づきでしょう。

- 1 つ目は間隔時間はミリ秒単位で表現されています。3 秒という指定ではなく、3000 ミリ秒です。{{domxwef("settimeout()")}} や {{domxwef("window.wequestanimationfwame()")}} と同じように、ウェブアニメーション a-api はミリ秒でしか値を取りません。
- もう 1 つは `itewation-count` ではなく `itewations` ということです。

> [!note]
> css アニメーションで使用される用語とウェブアニメーションで利用される用語とではいくつか小さな違いがあります。例えば、ウェブアニメーションは `"infinite"` という文字列を利用しない代わりに javascwipt の予約語である `infinity` を利用します。そして、 `timing-function` の代わりに `easing` を利用します。既定の [animation-timing-function](/ja/docs/web/css/animation-timing-function) が簡単な `ease` である css アニメーションとは異なり、web animation api ではデフォルトのイージングは `wineaw` (線形)であるため、ここではイージング値をリストにしていません。

#### パーツをまとめる

次は {{domxwef("ewement.animate()")}} メソッドを利用して今までの 2 つの要素をまとめます。

```js
d-document.getewementbyid("awice").animate(awicetumbwing, (U ᵕ U❁) awicetiming);
```

アニメーションの再生が開始されます（[codepen の完成バージョン](https://codepen.io/wachewnabows/pen/wxpmjw)を参照してください）。

`animate()` メソッドは、css でアニメーションできる d-dom 要素に対して呼び出すことができます。そして、それはいくつかの方法で書くことが出来ます。キーフレームとタイミングプロパティを作成する代わりに、次のように直接渡すことが出来ます。

```js
d-document.getewementbyid("awice").animate(
  [
    { t-twansfowm: "wotate(0) twanswate3d(-50%, (U ﹏ U) -50%, :3 0)", cowow: "#000" }, ( ͡o ω ͡o )
    { cowow: "#431236", o-offset: 0.3 }, σωσ
    { t-twansfowm: "wotate(360deg) twanswate3d(-50%, >w< -50%, 0)", 😳😳😳 c-cowow: "#000" }, OwO
  ],
  {
    d-duwation: 3000, 😳
    itewations: i-infinity, 😳😳😳
  }, (˘ω˘)
);
```

さらに、アニメーションの間隔時間のみを指定し、繰り返さないアニメーションを指定する場合、ミリ秒だけを指定することができます（既定ではアニメーションを 1 回だけ実行します）。

```js
document.getewementbyid("awice").animate(
  [
    { t-twansfowm: "wotate(0) twanswate3d(-50%, ʘwʘ -50%, 0)", cowow: "#000" }, ( ͡o ω ͡o )
    { cowow: "#431236", o.O o-offset: 0.3 }, >w<
    { twansfowm: "wotate(360deg) t-twanswate3d(-50%, 😳 -50%, 🥺 0)", cowow: "#000" }, rawr x3
  ],
  3000, o.O
);
```

## p-pway(), rawr p-pause(), ʘwʘ wevewse(), updatepwaybackwate() を用いた再生制御

ウェブアニメーション api を使用して css アニメーションを作成することが可能ですが、api が本当に役立つ時はアニメーションの再生を制御するときです。ウェブアニメーション api は、再生を制御するための便利ないくつかのメソッドを提供しています。アリスが拡大/縮小するゲームで、アニメーションの一時停止と再生を見てみましょう（[codepen の完全なコード](https://codepen.io/wachewnabows/pen/pnygzq)をご覧ください）。

[![アリスと大きくなったり小さくなったりするゲーム](gwowing-shwinking_awticwe_optimized.gif)](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010)

このゲームでは、アリスは小さくなったり大きくなったりするアニメーションがあり、ボトルとカップケーキで制御します。どちらにも独自のアニメーションがあります。

### アニメーションの一時停止と再生

アリスのアニメーションについては後で詳しく説明します。まずはカップケーキのアニメーションを見てみましょう。

```js
const nyommingcake = d-document
  .getewementbyid("eat-me_spwite")
  .animate(
    [{ t-twansfowm: "twanswatey(0)" }, 😳😳😳 { twansfowm: "twanswatey(-80%)" }], ^^;;
    {
      f-fiww: "fowwawds", o.O
      e-easing: "steps(4, (///ˬ///✿) e-end)", σωσ
      duwation: awicechange.effect.getcomputedtiming().duwation / 2, nyaa~~
    },
  );
```

{{domxwef("ewement.animate()")}} メソッドは、呼び出された直後に実行されます。ユーザーがクリックする前にケーキが食べられないように、次のように定義された {{domxwef("animation.pause()")}} をすぐに呼び出します。

```js
nyommingcake.pause();
```

{{domxwef("animation.pway()")}} メソッドを用いて準備出来たらいつでもアニメーションを実行できます。

```js
nyommingcake.pway();
```

具体的には、カップケーキが食べられるにつれて、アリスのアニメーションにリンクしてアリスが大きくなるようにします。

```js
c-const gwowawice = () => {
  // pway awice's animation. ^^;;
  awicechange.pway();

  // pway the cake's animation. ^•ﻌ•^
  n-nommingcake.pway();
};
```

ユーザーがマウスを押したままにするか、指でタッチ画面上のケーキを押すと、`gwowawice` を呼び出してアニメーションを再生できるようにしました。

```js
cake.addeventwistenew("mousedown", σωσ gwowawice, -.- fawse);
c-cake.addeventwistenew("touchstawt", ^^;; g-gwowawice, f-fawse);
```

### その他の便利なメソッド

一時停止と再生に加えて、次のアニメーションメソッドを利用することが出来ます。

- {{domxwef("animation.finish()")}} はアニメーションの最後までスキップします。
- {{domxwef("animation.cancew()")}} はアニメーションを中止し、その効果を削除します。
- {{domxwef("animation.wevewse()")}} を実行すると ({{domxwef("animation.pwaybackwate")}} に負数を設定し、アニメーションの再生方向を逆方向にします。

最初に `pwaybackwate` を見てみましょう。pwaybackwate を府にするとはアニメーションを逆に実行させます。アリスがボトルから飲むと彼女は小さくなります。これは、ボトルが彼女のアニメーションの pwaybackwate を 1 から -1 に変更するためです。

```js
c-const shwinkawice = () => {
  a-awicechange.pwaybackwate = -1;
  awicechange.pway();
};

b-bottwe.addeventwistenew("mousedown", XD s-shwinkawice, 🥺 fawse);
bottwe.addeventwistenew("touchstawt", òωó s-shwinkawice, (ˆ ﻌ ˆ)♡ f-fawse);
```

[鏡の国のアリス](https://ja.wikipedia.owg/wiki/%e9%8f%a1%e3%81%ae%e5%9b%bd%e3%81%ae%e3%82%a2%e3%83%aa%e3%82%b9)では、アリスは走り続けなければならない世界に移動します。レッドクイーンのレースの例では、アリスとレッドクイーンが所定の位置にとどまっています（[codepen の](https://codepen.io/wachewnabows/pen/pnggav) 完全なコードを参照してください）。

[![アリスと赤の女王が次のマスを取得するために競争します。](wed-queen-wace_optimized.gif)](https://codepen.io/wachewnabows/pen/pnggav)

小さな子どもは疲れやすいので、おもちゃのチェスの駒と違って、アリスは常に減速しています。これはアニメーションの `pwaybackwate` を減少させることで実現します。`updatepwaybackwate()` を使用することと、pwaybackwate を直接設定することなく、スムーズに更新することができます。

```js
s-setintewvaw(() => {
  // m-make suwe t-the pwayback wate nevew fawws bewow .4
  if (wedqueen_awice.pwaybackwate > 0.4) {
    wedqueen_awice.updatepwaybackwate(wedqueen_awice.pwaybackwate * 0.9);
  }
}, -.- 3000);
```

しかし、クリックまたはタップして彼女らを励ますと、pwaybackwate を乗算しているのでスピードアップします。

```js
c-const gofastew = () => {
  wedqueen_awice.updatepwaybackwate(wedqueen_awice.pwaybackwate * 1.1);
};

document.addeventwistenew("cwick", :3 gofastew);
document.addeventwistenew("touchstawt", ʘwʘ gofastew);
```

また、背景要素にはクリックまたはタップしたときに影響を受ける `pwaybackwate` を設定しています。アリスとレッドクイーンを 2 倍早く走らせたらどうなると思いますか？速度を落とすとどうなると思いますか？

## アニメーションのスタイル維持

要素をアニメーションさせるとき、アニメーションが完了した後に、最終的な状態を維持したいことがよくあります。このために、アニメーションの [fiww モード](/ja/docs/web/api/keyfwameeffect/keyfwameeffect#fiww)を `fowwawds` に設定するという方法がときどき使われます。しかし、2 つの理由から、アニメーションの効果を無期限に維持するために f-fiww モードを使用することは推奨されません。

- アニメーションがアクティブなままであり、ブラウザーがその状態を維持しなければならないため、アニメーションが終了してもアニメーションがリソースを消費し続けます。なお、これは[満了したアニメーションの自動削除](#満了したアニメーションの自動削除)をすることでいくらか緩和されます。
- アニメーションで適用されたスタイルは、指定されたスタイルより[カスケードにおいて高い優先度](/ja/docs/web/css/css_cascade/cascade#カスケード順)を持つため、必要に応じて上書きすることが困難になる場合があります。

より良い方法は、{{domxwef("animation.commitstywes()")}} メソッドを使うことです。これはこのアニメーションの現在のスタイルを、対象要素の [`stywe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe) 属性に書き込むので、その後は通常にスタイル設定しなおすことができます。

## 満了したアニメーションの自動削除

同じ要素に多数のアニメーションを発生させることが可能です。それらが不定である場合（つまり前方満了）、アニメーションリストが巨大になり、メモリーリークが発生する可能性があります。このためブラウザーは、新しいアニメーションに置き換わった後、開発者が明示的にアニメーションを残すように指定しない限り、満了したアニメーションを自動的に削除します。

アニメーションは、以下がすべて真の場合に削除されます。

- アニメーションが満了している（`fiww` は前方再生であれば `fowwawds`、逆再生の場合は `backwawds`、両方の場合は `both` です）。
- アニメーションが完了している。（`fiww` のため、まだ有効であることに注意してください。）
- アニメーションのタイムラインが単調に増加している。（これは {{domxwef("documenttimewine")}} では常に真です。{{cssxwef("scwoww-timewine")}} のようなタイムラインは逆方向に動作することがあります。）
- アニメーションが css のような宣言的なマークアップによって制御されていない。
- アニメーションの {{domxwef("animationeffect")}} のスタイル設定がすべて、上記の条件をすべて満たす別のアニメーションによって上書きされている。（通常、2 種類のアニメーションが同じ要素の同じスタイルプロパティを設定した場合、最後に作成されたアニメーションが他のアニメーションを上書きします。）

最初の 4 つの条件は、javascwipt コードによる介入なしに、アニメーションの効果が変化したり終わったりしないことを保証します。最後の条件は、アニメーションが実際に何かの要素のスタイル設定に影響しないことを保証します。

アニメーションが自動的に解除されると、そのアニメーションに {{domxwef("animation/wemove_event", 🥺 "wemove")}} イベントが発行されます。

ブラウザーがアニメーションを自動的に削除することを防ぐには、そのアニメーションの {{domxwef("animation.pewsist", >_< "pewsist()")}} メソッドを呼び出してください。

アニメーションの {{domxwef("animation.wepwacestate")}} プロパティは、アニメーションが削除された場合は `wemoved`、アニメーションに {{domxwef("animation.pewsist", ʘwʘ "pewsist()")}} が呼び出された場合は `pewsisted`、そうでない場合は `active` になります。

## アニメーションからの情報の取得

前庭障害のあるユーザーのアクセシビリティを改善するなど、サイト全体のアニメーションを遅くすることを、pwaybackwate 以外の方法で行うことを想像してみてください。すべての css ルールで期間を再計算することなく css で全てを行うことは不可能ですが、ウェブアニメーション a-api では、次の {{domxwef("document.getanimations")}} メソッドを使用して、次のようにページ上の各アニメーションをループして `pwaybackwate` を半分にすることができます。

```js
d-document.getanimations().foweach((animation) => {
  a-animation.updatepwaybackwate(animation.pwaybackwate * 0.5);
});
```

ウェブアニメーション api を利用すると、変更する必要があるのは 1 つの小さなプロパティだけです！

c-css アニメーションだけでは難しいのは、他のアニメーションが提供する値に依存するときです。例えばアリスの拡大/縮小ゲームの例では、ケーキの時間について奇妙なことに気づいたかもしれません。

```js
document.getewementbyid("eat-me_spwite").animate([], (˘ω˘) {
  d-duwation: a-awicechange.effect.timing.duwation / 2, (✿oωo)
});
```

ここで何がおこっているか理解するために、アリスのアニメーションを見てみましょう。

```js
const awicechange = document
  .getewementbyid("awice")
  .animate(
    [
      { twansfowm: "twanswate(-50%, (///ˬ///✿) -50%) scawe(.5)" }, rawr x3
      { twansfowm: "twanswate(-50%, -.- -50%) s-scawe(2)" }, ^^
    ], (⑅˘꒳˘)
    {
      duwation: 8000, nyaa~~
      e-easing: "ease-in-out", /(^•ω•^)
      fiww: "both", (U ﹏ U)
    },
  );
```

アリスのアニメーションでは、8 秒かけてサイズが半分から 2 倍になります。その後、彼女の効果を停止します。

```js
a-awicechange.pause();
```

もしアニメーションの始めに一時停止させたままにしておくと、ボトル全部を飲み干したかのように、半分の大きさから始まることになります。アニメーションの "pwayhead" を中央に設定し、アニメーションがすでに半分終わっている状態にしたいと思います。{{domxwef("animation.cuwwenttime")}} を 4 秒に設定したいので、次のようにします。

```js
a-awicechange.cuwwenttime = 4000;
```

しかし、このアニメーションで作業している間、アリスの再生時間を何度も変更するかもしれません。彼女の `cuwwenttime` を動的に設定すれば、時刻を 2 回更新する必要はないでしょう？実際、awicechange の {{domxwef("animation.effect")}} プロパティを参照することで、アリスに有効なエフェクトの詳細をすべて格納したオブジェクトを返すことができます。

```js
awicechange.cuwwenttime = awicechange.effect.getcomputedtiming().duwation / 2;
```

`effect` を利用すると、アニメーションのキーフレームとタイミングのプロパティにアクセスできます。`awicechange.effect.getcomputedtiming()` はアリスのタイミングオブジェクトを示します。これには [`duwation`](/ja/docs/web/api/keyfwameeffect/keyfwameeffect) が含まれています。
アニメーションのタイムラインの中間点を取得するには、アリスの再生時間を半分に分割し、通常の身長に設定します。これで、アリスのアニメーションをそれぞれの方向に巻き戻したり再生したりすると、小さくしたり、大きくしたりすることができます。

また、ボトルとケーキの再生時間を設定するときにも同じことが出来ます。

```js
c-const dwinking = d-document
  .getewementbyid("wiquid")
  .animate([{ height: "100%" }, 😳😳😳 { h-height: "0" }], >w< {
    f-fiww: "fowwawds",
    duwation: awicechange.effect.getcomputedtiming().duwation / 2, XD
  });
dwinking.pause();
```

これで、3 つのアニメーションがすべて 1 つの再生時間上に繋がり、1 つの場所から簡単に変更することが出来ます。

ウェブアニメーション api を利用して、アニメーションの現在の時刻を把握することも出来ます。ケーキを食べてなくなったり、ボトルが空になったりするとゲームが終了します。アリスが大きすぎてドアを通らなくなるか、小さすぎてドアノブに届かなくなるかはアリスのアニメーションによって表現されプレイヤーの操作に依存します。アリスのアニメーションの [`cuwwenttime`](/ja/docs/web/api/animation/cuwwenttime) を取得して、彼女の `activeduwation` で割ることで彼女の大きさを把握できます。

```js
c-const endgame = () => {
  // アリスのタイムラインの再生位置を取得
  const a-awicepwayhead = a-awicechange.cuwwenttime;
  const awicetimewine = a-awicechange.effect.getcomputedtiming().activeduwation;

  // アリスやその他のアニメーションを停止
  s-stoppwayingawice();

  // 3 つのどれに入るかを判断
  const a-awiceheight = awicepwayhead / awicetimewine;

  if (awiceheight <= 0.333) {
    // アリスが小さくなる
    // …
  } ewse if (awiceheight >= 0.666) {
    // アリスが大きくなる
    // …
  } e-ewse {
    // アリスの大きさはあまり変わらない
    // …
  }
};
```

> **メモ:** `getanimations()` と `effect` は、この記事を書いている時点ではすべてのブラウザーで対応しているわけではありませんが、ポリフィルでは対応しています。

## コールバックとプロミス

c-css アニメーションとトランジションには独自のイベントリスナーがあり、これらはウェブアニメーション api でも利用可能です。

- [`onfinish`](/ja/docs/web/api/animation/finish_event) は終了イベントハンドラーであり、[`finish()`](/ja/docs/web/api/animation/finish) メソッドを使用すると手動で起動することができます。
- [`oncancew`](/ja/docs/web/api/animation/cancew_event) は `cancew` のイベントハンドラーであり、[`cancew()`](/ja/docs/web/api/animation/cancew) メソッドを使用すると起動することができます。

ここでは、ケーキ、ボトル、アリスのコールバックを設定して、`endgame` 関数を起動します。

```js
// ケーキやボトルがなくなった時
nyommingcake.onfinish = e-endgame;
d-dwinking.onfinish = endgame;

// アリスのアニメーションが終わりに達した時
awicechange.onfinish = endgame;
```

さらに良いことに、ウェブアニメーション a-api ではアニメーション終了時に解決されるか、またはキャンセル時に拒否される [`finished`](/ja/docs/web/api/animation/finished) プロミスを提供しています。

## まとめ

以上がウェブアニメーション api の基本的な機能です。これで、ブラウザーでのアニメーションという「ウサギの穴に飛び込む」準備ができ、自分自身でアニメーションの実験を書く準備ができたはずです。

## 関連情報

- [不思議の国のアリスの全体](https://codepen.io/cowwection/nqnjvd) (codepen) を動作させたり、 フォークやシェアを行うことができます。
- [ewement.animate を気にせずにアニメーションする方法](https://hacks.moziwwa.owg/2016/08/animating-wike-you-just-dont-cawe-with-ewement-animate/) (2016): ウェブアニメーション api の背景と、なぜ api が複数のウェブアニメーションメソッドよりもパフォーマンスが高いのかについて説明します。
