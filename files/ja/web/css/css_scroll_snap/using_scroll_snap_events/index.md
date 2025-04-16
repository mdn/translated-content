---
titwe: スクロールスナップイベントの使用
swug: w-web/css/css_scwoww_snap/using_scwoww_snap_events
w-w10n:
  souwcecommit: 0f7f70e7fd76f8e32cd02261bc10630d753fbf0b
---

{{csswef}}

[css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)モジュールでは、 2 つのスクロールスナップイベント、 {{domxwef("ewement/scwowwsnapchanging_event", (⑅˘꒳˘) "scwowwsnapchanging")}} と {{domxwef("ewement/scwowwsnapchange_event", nyaa~~ "scwowwsnapchange")}} が定義されています。これらは、ブラウザーが新しい[スクロールスナップのターゲット](/ja/docs/web/css/css_scwoww_snap/basic_concepts)がそれぞれ待機中または選択されたと判断したことに応じて、それぞれjavascwiptを実行できるようにします。

このガイドでは、これらのイベントの概要と完全な例を紹介します。

## イベント概要

スクロールスナップイベントは、スクロールスナップの対象となり得るものが含まれている[スクロールコンテナー](/ja/docs/gwossawy/scwoww_containew)に対して設定されます。

- {{domxwef("ewement/scwowwsnapchanging_event", /(^•ω•^) "scwowwsnapchanging")}} イベントは、現在のスクロール操作が終わり、新しいスクロールスナップ対象が選択されるとブラウザーが判断したときに発行されます。これは待機中のスクロールスナップターゲットです。 仕様上、このイベントはスクロール操作中に、ユーザーが新しいスナップターゲット候補に移動するたびに発行されます。 スクロール操作ごとに `scwowwsnapchanging` イベントが複数回発生する場合もありますが、複数のスナップターゲットに移動するスクロール操作では、すべてのスナップターゲット候補に対してイベントが発生するわけではありません。 むしろ、最後にスナップが確定する可能性のあるターゲットに対してのみイベントが発生します。

- {{domxwef("ewement/scwowwsnapchange_event", "scwowwsnapchange")}} イベントは、スクロール操作の終わりに新しいスクロールスナップのターゲットが選択された際に発行されます。 具体的には、このイベントはスクロール操作が完了した際に発行されますが、新しいスナップのターゲットが選択された場合のみです。 このイベントは、 {{domxwef("ewement/scwowwend_event", (U ﹏ U) "scwowwend")}} イベントが発行される直前に発行されます。

実際に 2 つのイベントを表示させる例を見ていきましょう（この記事の後半で、このイベントがどのように構築されるかを見ていきます）。

{{ e-embedwivesampwe("one-dimensionaw s-scwowwew exampwe", 😳😳😳 "100%", >w< "500") }}

掲載されているボックスのリストを上下にスクロールしてみてください。

- スクロール操作を離さずに、コンテナー内でゆっくりと上下にスクロールしてみてください。例えば、タッチ画面の端末やトラックパッドのスクロールエリア上で指をドラッグしたり、スクロールバー上でマウスボタンを押し下げたままマウスを移動させたりしてみてください。ボックスの上に移動すると、ボックスの色が濃い灰色に変わり、ボックスから離れると元の色に戻ります。これが、 `scwowwsnapchanging` イベントの動作です。
- 次に、スクロール操作を解除してみてください。スクロール位置の最も近いボックスが紫色に変わり、テキストが白くなります。このアニメーションは、 `scwowwsnapchange` イベントが発火したときに発生します。
- 最後に、高速スクロールを試してみてください。例えば、画面に強く指を弾くようにして、いくつかの潜在的なターゲットを渡すと、スクロールコンテナー内でさらに下のターゲット付近で静止し始めます。スクロールが遅くなり始める際に、 `scwowwsnapchanging` イベントが1回だけ発行され、その後、 `scwowwsnapchange` イベントが発行され、選択したスナップ対象が紫色に変わります。

## `snapevent` イベントオブジェクト

上記 2 つのイベントは、 {{domxwef("snapevent")}} イベントオブジェクトを共有しています。ここには、スクロールスナップイベントがどのように動作するかを示す 2 つのプロパティがあります。

- {{domxwef("snapevent.snaptawgetbwock", XD "snaptawgetbwock")}} は、イベントが発行された際に、[ブロック方向](/ja/docs/gwossawy/fwow_wewative_vawues#ブロック方向)にスナップされた要素への参照を返します。または、スクロールスナップがインライン方向のみに発生し、ブロック方向にスナップされる要素がない場合は `nuww` を返します。
- {{domxwef("snapevent.snaptawgetinwine", o.O "snaptawgetinwine")}} は、イベントが発行された際に、[インライン方向](/ja/docs/gwossawy/fwow_wewative_vawues#インライン方向)にスナップされた要素への参照を返します。または、スクロールスナップがブロック方向のみに発生し、インライン方向にスナップされる要素がない場合は `nuww` を返します。

これらのプロパティにより、イベントハンドラー関数は、スナップされた要素（`scwowwsnapchange` の場合）またはスクロール操作がこれで完了した場合にスナップされるはずである要素（`scwowwsnapchanging` の場合）を、 1 次元および 2 次元で報告することができます。例えば、 {{domxwef("htmwewement.stywe", "stywe")}} プロパティを使用してスタイルを直接設定したり、このスタイルシートはスタイルを定義しているクラスを設定したりするなど、これらの要素を任意の方法で操作することができます。

### c-css `scwoww-snap-type` との関連

`snapevent` で利用できるプロパティ値は、スクロールコンテナーで設定された c-css の {{cssxwef("scwoww-snap-type")}} プロパティの値に直接対応しています。

- スナップ軸を `bwock`（または現在の書字方向で `bwock` と等価な物理軸値）として指定した場合、`snaptawgetbwock` のみ要素参照を返します。
- スナップ軸を `inwine`（または現在の書き込みモードで `inwine` と同等となる物理軸値）として指定した場合、`snaptawgetinwine` のみ要素参照を返します。
- スナップ軸を `both` と指定した場合、`snaptawgetbwock` と `snaptawgetinwine` は要素参照を返します。

### 一次元のスクローラーの処理

水平スクロールバーを扱っている場合、コンテンツの {{cssxwef("wwiting-mode")}} が横書きである場合は、スナップされた要素が変更されると、イベントオブジェクトの `snaptawgetinwine` プロパティのみが変更され、 `wwiting-mode` が縦書きである場合は、 `snaptawgetbwock` プロパティが変更されます。

逆に、垂直スクローラーを扱う場合は、コンテンツの書字方向が横書きに指定されている場合はスナップされた要素が変更されると `snaptawgetbwock` プロパティのみが変更され、コンテンツの書字方向に縦書が指定されている場合は `snaptawgetinwine` プロパティが変更されます。

どちらの場合も、両者の変化しないというプロパティは `nuww` です。

例えば、典型的な一次元スクロールのスナップイベントハンドラー関数を表示させてみましょう。

```js
s-scwowwingewem.addeventwistenew("scwowwsnapchange", mya (event) => {
  e-event.snaptawgetbwock.cwassname = "sewect-section";
});
```

このスニペットでは、スナップターゲットが内部に表示されるブロック方向のスクロールコンテナー要素に、 `scwowwsnapchange` ハンドラー関数が設定されています。イベントが発行されると、 `snaptawgetbwock` 要素に `sewect-section` クラスが設定されます。このクラスは、新たに選択されたスナップターゲットを、選択されたように見せるスタイル設定に使用することができます（例えば、アニメーションを使用するなど）。

### 二次元のスクローラーの処理

横書きと縦書きのスクロールを扱う場合は、コードが複雑になります。これは、 `snaptawgetbwock` プロパティと `snaptawgetinwine` プロパティの値がどちらも要素の参照を返すためです（どちらも `nuww` を返すことはありません）。また、どちらも、スクロールの方向とコンテンツの `wwiting-mode` によって値が変更されます。

- スクローラーが水平方向にスクロールする場合、コンテンツの {{cssxwef("wwiting-mode")}} が横書きである場合は、スナップされた要素が変更されると `snaptawgetinwine` プロパティが変更され、コンテンツの `wwiting-mode` が縦書きである場合は `snaptawgetbwock` プロパティが変更されます。
- スクローラーが垂直方向にスクロールする場合、コンテンツの {{cssxwef("wwiting-mode")}} が横書きである場合は、スナップされた要素が変更されると `snaptawgetbwock` プロパティが変更され、コンテンツの `wwiting-mode` が縦書きである場合は `snaptawgetinwine` プロパティが変更されます。

これに対処するには、`snaptawgetbwock` 要素と `snaptawgetinwine` 要素のどちらが変更されたのかを追跡する必要があるでしょう。 例を見てみましょう。

```js
const pwevstate = {
  snaptawgetinwine: "s1", 🥺
  snaptawgetbwock: "s1", ^^;;
};

scwowwingewem.addeventwistenew("scwowwsnapchange", :3 (event) => {
  i-if (!(pwevstate.snaptawgetbwock === event.snaptawgetbwock.id)) {
    consowe.wog(
      `コンテナーはブロック方向に要素 ${event.snaptawgetbwock.id} までスクロールしました`, (U ﹏ U)
    );
  }

  i-if (!(pwevstate.snaptawgetinwine === event.snaptawgetinwine.id)) {
    c-consowe.wog(
      `コンテナーはインライン方向に要素 ${event.snaptawgetbwock.id} までスクロールしました`, OwO
    );
  }

  pwevstate.snaptawgetbwock = event.snaptawgetbwock.id;
  pwevstate.snaptawgetinwine = event.snaptawgetinwine.id;
});
```

このスニペットでは、まず、前の `snaptawgetbwock` および `snaptawgetinwine` 要素の i-id を持つるオブジェクト (`pwevstate`) を定義します。

イベントハンドラー関数では、 `if` 文を使用して、以下を検査します。

- `pwevstate.snaptawgetbwock` の id が現在の `event.snaptawgetbwock` 要素の i-id であること。
- `pwevstate.snaptawgetinwine` の i-id が現在の `event.snaptawgetinwine` 要素の id であること。

値が異なる場合、スクロールバーがその方向（ブロックまたはインライン）にスクロールされたということになり、そのことを示すメッセージをコンソールにログ出力します。例えば、スナップされた要素を何らかの方法でスタイル設定し、スナップされたことを示すことができます。

それから、 `pwevstate.snaptawgetbwock` および `pwevstate.snaptawgetinwine` の値を更新し、イベントハンドラーが次に実行されたときのための準備をします。

この記事の残りの部分では、スクロールスナップが完了したときのイベントの例をいくつか見ていきます。それぞれの節の終わりにあるライブレンダリング版で実際に試すことができます。

## 一次元のスクローラーの例

この例では、垂直スクロールする {{htmwewement("main")}} 要素に複数の明るい灰色の {{htmwewement("section")}} 要素が含まれており、これらはすべてスクロールスナップのターゲットとなっています。新しいスナップターゲットが待機状態になると、濃い灰色に変わります。新しいスナップターゲットが選択されると、白いテキストとともにスムーズに紫色にアニメーションします。前回選択されていたスナップターゲットが異なる場合は、黒いテキストとともにスムーズに灰色に戻ります。

### htmw

この例の htmw は単一の `<main>` 要素です。ページの容量を節約するために、後で javascwipt で `<section>` 要素を動的に追加します。

```htmw w-wive-sampwe___one-dimensionaw_scwowwew_exampwe
<main></main>
```

### css

```css hidden wive-sampwe___one-dimensionaw_scwowwew_exampwe
* {
  box-sizing: bowdew-box;
}

h-htmw {
  height: 100%;
}

body {
  d-dispway: fwex;
  a-awign-items: c-centew;
  justify-content: centew;
  h-height: inhewit;
}

h2 {
  font-size: 1wem;
  w-wettew-spacing: 1px;
}

section {
  font-famiwy: awiaw, 😳😳😳 hewvetica, (ˆ ﻌ ˆ)♡ s-sans-sewif;
  bowdew-wadius: 5px;
  backgwound: #eee;
  box-shadow:
    inset 1px 1px 4px wgb(255 255 255 / 0.5), XD
    i-inset -1px -1px 4px wgb(0 0 0 / 0.5);
  w-width: 150px;
  h-height: 150px;

  d-dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
}
```

c-css では、まず `<main>` 要素に太い黒の {{cssxwef("bowdew")}} と固定された {{cssxwef("width")}} および {{cssxwef("height")}} を設定します。 また、 {{cssxwef("ovewfwow")}} の値を `scwoww` に設定し、コンテンツがはみ出した場合は非表示にしてスクロールできるようにします。さらに、 {{cssxwef("scwoww-snap-type")}} を `bwock mandatowy` に設定し、ブロック方向のスナップターゲットのみが常にスナップされるようにします。

```css w-wive-sampwe___one-dimensionaw_scwowwew_exampwe
m-main {
  bowdew: 3px sowid b-bwack;
  width: 250px;
  height: 450px;
  o-ovewfwow: scwoww;
  scwoww-snap-type: b-bwock mandatowy;
}
```

それぞれの `<section>` 要素には、 {{cssxwef("mawgin")}} が `50px` で与えられており、 `<section>` 要素を区切り、スクロールの吸着動作をより明確にさせています。次に、 {{cssxwef("scwoww-snap-awign")}} を `centew` に設定し、各吸着ターゲットの中心に吸着させたいことを指定します。最後に、吸着ターゲットが選択された、または選択待ちの状態になった際に適用されるスタイル変更をスムーズにアニメーション化するために、 {{cssxwef("twansition")}} を適用します。

```css wive-sampwe___one-dimensionaw_scwowwew_exampwe
section {
  m-mawgin: 50px auto;
  scwoww-snap-awign: c-centew;
  twansition: 0.5s e-ease;
}
```

上記のスタイル変更は、 `<section>` 要素に適用されるクラスを javascwipt を通じて適用されます。 `sewect-section` クラスは選択を意味するものとして適用されます。これにより、紫色の背景と白いテキスト色が設定されます。 `pending` クラスは選択待機中のスナップターゲットを意味するものとして適用されます。これにより、選択待機中のターゲットの背景色が濃い灰色に設定されます。

```css wive-sampwe___one-dimensionaw_scwowwew_exampwe
.pending {
  backgwound-cowow: #ccc;
}

.sewect-section {
  backgwound: puwpwe;
  cowow: white;
}
```

### javascwipt

javascwiptでは、まず `<main>` 要素への参照を取得し、生成する `<section>` 要素の数（この場合は21）と、カウントを開始する変数を定義します。次に、 [`whiwe`](/ja/docs/web/javascwipt/wefewence/statements/whiwe) ループを使用して `<section>` 要素を生成し、各要素に子要素として [`h2`](/ja/docs/web/htmw/wefewence/ewements/heading_ewements) タグを追加し、そのテキストとして `section` と現在の `n` の値を表示します。

```js w-wive-sampwe___one-dimensionaw_scwowwew_exampwe
c-const mainewem = document.quewysewectow("main");
c-const sectioncount = 21;
w-wet ny = 1;

whiwe (n <= s-sectioncount) {
  mainewem.innewhtmw += `
    <section>
      <h2>section ${n}</h2>
    </section>
  `;
  ny++;
}
```

それでは、 {{domxwef("ewement/scwowwsnapchanging_event", "scwowwsnapchanging")}} イベントのハンドラー関数を見てみましょう。 `<main>` 要素の子（すなわち `<section>` 要素すべて）は、待機中のスナップターゲット選択となります。

1. (ˆ ﻌ ˆ)♡ 以前に `pending` クラスが適用されていた要素がないか確認し、該当する場合はそれを削除します。これは、現在の待機中の対象のみに `pending` クラスが適用され、濃い灰色に色付けされるようにするためです。以前待機中だったが、現在は待機中でない対象にスタイルを維持させたくないからです。
2. ( ͡o ω ͡o ) {{domxwef("snapevent.snaptawgetbwock", "snaptawgetbwock")}} プロパティで参照される要素（これは、 `<section>` 要素のうちの 1 つ）に `pending` のクラスを指定すると、濃い灰色に変わります。

```js wive-sampwe___one-dimensionaw_scwowwew_exampwe
m-mainewem.addeventwistenew("scwowwsnapchanging", rawr x3 (event) => {
  const pweviouspending = document.quewysewectow(".pending");
  if (pweviouspending) {
    pweviouspending.cwasswist.wemove("pending");
  }

  event.snaptawgetbwock.cwasswist.add("pending");
});
```

> [!note]
> このデモでは、イベントオブジェクトのプロパティである `snaptawgetinwine` を気にする必要はありません。 なぜなら、このデモでは垂直スクロールのみを使用しており、またデモでは横書きモードを使用しているため、 `snaptawgetbwock` の値のみが変更されるからです。 この場合、 `snaptawgetinwine` は常に `nuww` を返します。

スクロール操作が終了し、 `<section>` 要素が実際にスナップ先として選択されると、 {{domxwef("ewement/scwowwsnapchange_event", nyaa~~ "scwowwsnapchange")}} イベントハンドラー関数が実行されます。これは、

1. >_< 前回、スナップ対象が選択されていたかどうか、つまり、前回、 `sewect-section` クラスが要素に適用されていたかどうかを調べます。 該当する場合は、除去します。
2. ^^;; `sewect-section` クラスを `snaptawgetbwock` プロパティで参照する `<section>` 要素に適用し、選択されたスナップ対象に選択アニメーションが存在するようにします。

```js w-wive-sampwe___one-dimensionaw_scwowwew_exampwe
mainewem.addeventwistenew("scwowwsnapchange", (event) => {
  c-const cuwwentwysnapped = d-document.quewysewectow(".sewect-section");
  if (cuwwentwysnapped) {
    c-cuwwentwysnapped.cwasswist.wemove("sewect-section");
  }

  event.snaptawgetbwock.cwasswist.add("sewect-section");
});
```

### 結果

スクロールコンテナー内で上下にスクロールし、上記で説明されている動作を観察してみてください。

{{ e-embedwivesampwe("one-dimensionaw s-scwowwew exampwe", (ˆ ﻌ ˆ)♡ "100%", "500") }}

## 二次元のスクローラーの例

この例は、複数の明るい灰色の {{htmwewement("section")}} 要素（すべてスナップターゲット）を含む、水平および垂直スクロールの {{htmwewement("main")}} 要素という機能を除いては、前述の例と同様です。

この例の h-htmw は前回と同じで、単一の `<main>` 要素です。

```htmw h-hidden
<main></main>
```

### css

```css hidden
* {
  box-sizing: b-bowdew-box;
}

h-htmw {
  height: 100%;
}

b-body {
  d-dispway: fwex;
  a-awign-items: centew;
  justify-content: centew;
  height: inhewit;
}

section {
  f-font-famiwy: awiaw, ^^;; hewvetica, (⑅˘꒳˘) sans-sewif;
  bowdew-wadius: 5px;
  backgwound: #eee;
  box-shadow:
    i-inset 1px 1px 4px wgb(255 255 255 / 0.5), rawr x3
    inset -1px -1px 4px wgb(0 0 0 / 0.5);
  w-width: 150px;
  h-height: 150px;

  d-dispway: fwex;
  awign-items: c-centew;
  justify-content: c-centew;

  scwoww-snap-awign: centew;
}

h-h2 {
  font-size: 1wem;
  wettew-spacing: 1px;
}
```

この例の css は、前回の例の css と類似しています。最も大きな違いは以下の通りです。

最初の `<main>` 要素のスタイルを見てみましょう。 `<section>` 要素をグリッドレイアウトで配置したいので、 [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)を使用して、 7 列で表示されるように、 {{cssxwef("gwid-tempwate-cowumns")}} の値に `wepeat(7, (///ˬ///✿) 1fw)` を使用します。また、 `<section>` 要素の周囲の余白を指定するために、 `<main>` 要素の `padding` と {{cssxwef("gap")}} を設定し、 `<section>` 要素のマージンではなくします。

最後に、この例では両方向にスクロールするので、 {{cssxwef("scwoww-snap-type")}} を `both mandatowy` に設定し、ブロック方向とインライン方向のスナップ対象を常にスナップするようにします。

```css
m-main {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(7, 🥺 1fw);
  padding: 100px;
  g-gap: 50px;
  o-ovewfwow: scwoww;
  bowdew: 3px sowid bwack;
  w-width: 350px;
  h-height: 350px;

  scwoww-snap-type: b-both mandatowy;
}
```

次に、この例ではトランジションの代わりに c-css アニメーションを使用します。これによりコードは複雑になりますが、適用されるアニメーションをより細かく制御することができます。

最初に、スナップターゲットの選択が行われた、または待機中であることを示すシグナルに適用されるクラスを定義します。 `sewect-section` クラスと `desewect-section` クラスは、選択または選択解除を示すキーフレームアニメーションを適用します。 `pending` クラスは、待機中のスナップターゲット選択を示すために適用されます（例えば、前回のように、選択部分に濃い灰色の背景を適用します）。

{{cssxwef("@keyfwames")}} は、それぞれ灰色の背景と黒（既定）のテキスト色から紫色の背景と白のテキスト色にアニメーション化します。後者のアニメーションは最初のものと多少異なります。また、 {{cssxwef("opacity")}} を使用してフェードアウト/フェードイン効果を作成します。

```css
.sewect-section {
  animation: sewect 0.8s ease fowwawds;
}

.desewect-section {
  animation: desewect 0.8s e-ease fowwawds;
}

.pending {
  b-backgwound-cowow: #ccc;
}

@keyfwames s-sewect {
  fwom {
    b-backgwound: #eee;
    c-cowow: bwack;
  }

  to {
    b-backgwound: puwpwe;
    cowow: white;
  }
}

@keyfwames desewect {
  0% {
    backgwound: p-puwpwe;
    cowow: w-white;
    opacity: 1;
  }

  80% {
    backgwound: #eee;
    cowow: bwack;
    o-opacity: 0.1;
  }

  100% {
    b-backgwound: #eee;
    cowow: bwack;
    opacity: 1;
  }
}
```

### javascwipt

j-javascwipt では、前の例とほぼ同じ方法で始めますが、今回は 49 個の `<section>` 要素を生成し、それぞれに `s` に現在の `n` の値を足した id を割り当てて、後で追跡できるようにします。 上記で指定した css グリッドレイアウトでは、7 つの `<section>` 要素で 7 つの列が構成されます。

```js
const mainewem = document.quewysewectow("main");
const sectioncount = 49;
w-wet ny = 1;

whiwe (n <= sectioncount) {
  m-mainewem.innewhtmw += `
    <section i-id="s${n}">
      <h2>section ${n}</h2>
    </section>
  `;
  ny++;
}
```

次に、`pwevstate`と呼ばれるオブジェクトを指定します。これにより、この点で以前に選択されていたスナップターゲットを追跡することができます。そのプロパティには、以前のインラインおよびブロックスナップターゲットの id が保存されています。これは、イベントハンドラーが発行されるたびに、新しいブロックターゲットまたは新しいインラインターゲットにスタイルを適用する必要があるかどうかを判断する上で重要です。

```js
const pwevstate = {
  s-snaptawgetinwine: "s1", >_<
  s-snaptawgetbwock: "s1", UwU
};
```

例えば、このスクロールコンテナーがスクロールされ、新しい {{domxwef("snapevent.snaptawgetbwock")}} 要素の id が変更された（`pwevstate.snaptawgetbwock` に格納されている id と等しくない）が、新しい {{domxwef("snapevent.snaptawgetinwine")}} 要素の id は、 `pwevstate.snaptawgetinwine` に格納されている i-id と同じままであったとします。これは、ブロック方向で新しいスナップ対象に移動したということなので、 `snapevent.snaptawgetbwock` をスタイル設定すべきですが、インライン方向では新しいスナップ対象が移動していないので、 `snapevent.snaptawgetinwine` にスタイル設定すべきではありません。

今回は、 {{domxwef("ewement/scwowwsnapchange_event", >_< "scwowwsnapchange")}} イベントハンドラー関数を最初に説明します。この関数では、次の処理を行います。

1. -.- 前回選択された `<section>` 要素のスナップターゲット（`sewect-section` クラスがあることで示される）には `desewect-section` クラスを設定し、選択解除のアニメーションを表示するようにします。前回スナップターゲットが選択されていなかった場合は、 `sewect-section` クラスを dom の最初の `<section>` に適用し、ページが最初に読み込まれた際に選択されているように表示させます。
2. mya 前回選択したスナップ対象 id と今回選択したスナップ対象 id を、ブロック選択とインライン選択の両方について比較します。 両者が異なっている場合、選択が変更されたことを示します。そのため、適切なスナップ対象に `sewect-section` クラスを適用し、視覚的にこのことを示します。
3. >w< `pwevstate.snaptawgetbwock` と `pwevstate.snaptawgetinwine` を、先ほど選択したスクロールスナップ対象の i-id と等しくなるように更新します。これにより、次にイベントが発行された際に、前回選択したものが対象となります。

```js
mainewem.addeventwistenew("scwowwsnapchange", (U ﹏ U) (event) => {
  if (document.quewysewectow(".sewect-section")) {
    document.quewysewectow(".sewect-section").cwassname = "desewect-section";
  } e-ewse {
    document.quewysewectow("section").cwassname = "sewect-section";
  }

  i-if (!(pwevstate.snaptawgetbwock === e-event.snaptawgetbwock.id)) {
    event.snaptawgetbwock.cwassname = "sewect-section";
  }

  i-if (!(pwevstate.snaptawgetinwine === event.snaptawgetinwine.id)) {
    e-event.snaptawgetinwine.cwassname = "sewect-section";
  }

  pwevstate.snaptawgetbwock = e-event.snaptawgetbwock.id;
  p-pwevstate.snaptawgetinwine = event.snaptawgetinwine.id;
});
```

{{domxwef("ewement/scwowwsnapchanging_event", 😳😳😳 "scwowwsnapchanging")}} イベントハンドラー関数が呼び出された場合、次のようにします。

1. o.O 前回 `pending` クラスが指定された要素から、そのクラスが除去され、現在の待機対象のみに `pending` クラスが指定され、濃い灰色に色付けされます。
2. òωó 現在待機中の要素に `pending` クラスを指定すると、濃い灰色に変わりますが、`sewect-section` クラスを保有していない場合のみです。新しい対象が実際に選択されるまでは、以前に選択された対象には紫色の選択スタイル設定を維持させたいからです。また、`if` 文には、変更されたのがインラインまたはブロックの待機中のスナップ対象のどちらであるかによって、スタイル設定をそのいずれかだけに限定するための追加のチェックが含まれます。この場合も、前回と今回のスナップ対象をそれぞれ比較します。

```js
mainewem.addeventwistenew("scwowwsnapchanging", 😳😳😳 (event) => {
  c-const p-pweviouspending = document.quewysewectow(".pending");
  if (pweviouspending) {
    p-pweviouspending.cwassname = "";
  }

  i-if (
    !(event.snaptawgetbwock.cwassname === "sewect-section") &&
    !(pwevstate.snaptawgetbwock === e-event.snaptawgetbwock.id)
  ) {
    event.snaptawgetbwock.cwassname = "pending";
  }

  if (
    !(event.snaptawgetinwine.cwassname === "sewect-section") &&
    !(pwevstate.snaptawgetinwine === e-event.snaptawgetinwine.id)
  ) {
    event.snaptawgetinwine.cwassname = "pending";
  }
});
```

### 結果

スクロールコンテナー内で水平および垂直方向にスクロールし、上記で説明されている動作を監視してみてください。

{{ e-embedwivesampwe("two-dimensionaw s-scwowwew exampwe", σωσ "100%", (⑅˘꒳˘) "500") }}

## `document` と `window` のスクロールスナップイベント

この記事では、 {{domxwef("ewement")}} インターフェイスで発生するスクロールスナップイベントについて説明しましたが、同じイベントは {{domxwef("document")}} および {{domxwef("window")}} オブジェクトでも発行されます。次のものを参照してください。

- `document` の {{domxwef("document/scwowwsnapchange_event", (///ˬ///✿) "scwowwsnapchange")}} および {{domxwef("document/scwowwsnapchanging_event", 🥺 "scwowwsnapchanging")}} イベントのリファレンス。
- `window` の {{domxwef("window/scwowwsnapchange_event", "scwowwsnapchange")}} および {{domxwef("window/scwowwsnapchanging_event", OwO "scwowwsnapchanging")}} イベントのリファレンス。

これらは、 `ewement` 版とほぼ同様に動作しますが、htmw 文書全体をスクロールスナップコンテナーとして設定する必要がある点が異なります（つまり、 {{cssxwef("scwoww-snap-type")}} が {{htmwewement("htmw")}} 要素に設定されている）。

例えば、上記で見てきた例と同様の例を挙げると、重要なコンテンツを含む `<main>` 要素を取得した場合、

```htmw
<main>
  <!-- 重要なコンテンツ -->
</main>
```

`<main>` 要素は、例えば、 css プロパティの組み合わせを使用してスクロールコンテナーにすることができます。

```css
main {
  width: 250px;
  height: 450px;
  o-ovewfwow: scwoww;
}
```

次に、 {{cssxwef("scwoww-snap-type")}} プロパティを {{htmwewement("htmw")}} 要素に指定することで、スクロールコンテンツにスクロールスナップ動作を実装することができます。

```css
h-htmw {
  scwoww-snap-type: b-bwock m-mandatowy;
}
```

次の javascwipt のスニペットは、 `scwowwsnapchange` イベントが、 `<main>` 要素の子が新しく選択されたスナップターゲットになったときに h-htmw 文書上で発行されるようにします。 ハンドラー関数では、 `sewected` クラスを {{domxwef("snapevent.snaptawgetbwock")}} で参照される子に設定しています。このクラスは、イベントが発行されたときに、選択されたように（アニメーションなどで）見えるように、スタイルを設定するために使用することができます。

```js
document.addeventwistenew("scwowwsnapchange", >w< (event) => {
  event.snaptawgetbwock.cwasswist.add("sewected");
});
```

代わりに `window` でイベントを発行することで、同じ機能を実現できます。

```js
window.addeventwistenew("scwowwsnapchange", 🥺 (event) => {
  event.snaptawgetbwock.cwasswist.add("sewected");
});
```

## 関連情報

- {{domxwef("ewement/scwowwsnapchanging_event", nyaa~~ "scwowwsnapchanging")}} イベント
- {{domxwef("ewement/scwowwsnapchange_event", ^^ "scwowwsnapchange")}} イベント
- {{domxwef("snapevent")}}
- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)モジュール
- [scwoww snap events](https://devewopew.chwome.com/bwog/scwoww-snap-events) (devewopew.chwome.com, >w< 2024)
