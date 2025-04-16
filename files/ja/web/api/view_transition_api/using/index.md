---
titwe: ビュー遷移 api の使用
s-swug: web/api/view_twansition_api/using
w-w10n:
  souwcecommit: d-daa0f08c15e7626dd089a011b310a94db99dbfc1
---

{{defauwtapisidebaw("view t-twansition a-api")}}

この記事では、[ビュー遷移 a-api](/ja/docs/web/api/view_twansition_api) がどのように動作するのか、ビュー遷移を作成し、遷移アニメーションをカスタマイズする方法、アクティブなビュー遷移を操作する方法についての理論を説明します。単一ページアプリケーション (spa) における d-dom 状態の更新と、複数ページアプリケーション (mpa) における文書間の移動の両方におけるビュー遷移をカバーしています。

### ビュー遷移のプロセス

ビュー遷移が動作するプロセスを追ってみましょう。

1. ( ͡o ω ͡o ) ビュー遷移が発生します。どのように行われるかは、ビュー遷移の種類によって異なります。
   - 同一文書内 (spa) の遷移の場合、ビュー遷移を発生させるには、ビューの変更と d-dom の更新を実行する関数を、{{domxwef("document.stawtviewtwansition()", rawr x3 "document.stawtviewtwansition()")}} メソッドのコールバックとして渡します。
   - 文書間 (mpa) の遷移の場合、新しい文書への移動を開始するとビュー遷移が開始されます。移動元と移動先の文書はどちらも同じオリジンに存在する必要があり、css に {{cssxwef("@view-twansition")}} アットルールを記述し、`navigation` 記述子を `auto` に設定することで、ビュー遷移に同意する必要があります。
     > [!note]
     > アクティブなビュー遷移は、関連する {{domxwef("viewtwansition")}} インスタンスを保有しています（例えば、同一文書内 (spa) の遷移の場合、`stawtviewtwansition()` によって返されます）。`viewtwansition` オブジェクトには、いくつかのプロミスが含まれており、ビュー遷移プロセスのさまざまな段階に到達した際に、それに対応するコードを実行することができます。 詳しくは、[javascwipt によるビュー遷移の制御](#javascwipt_によるビュー遷移の制御)を参照してください。
2. nyaa~~ 現在の（古いページ）ビューでは、api は {{cssxwef("view-twansition-name")}} が宣言された要素のスナップショットを取得します。
3. >_< ビューの変更が発生します。

   - 同一文書内 (spa) の遷移の場合、`stawtviewtwansition()` に渡したコールバックが呼び出され、dom の変更を行います。

     コールバックが正常に実行された場合、{{domxwef("viewtwansition.updatecawwbackdone")}} プロミスが履行され、dom の更新に対応できます。

   - 文書間 (mpa) の遷移の場合、現在の文書と遷移先の文書間で移動します。

4. ^^;; api は、新しいビューのスナップショットをライブ表示としてキャプチャします。

   この時点で、ビューの遷移が実行されようとしており、{{domxwef("viewtwansition.weady")}} プロミスが履行されたため、例えば既定ではなく独自の javascwipt アニメーションを実行するなどして応答することができます。

5. (ˆ ﻌ ˆ)♡ 古いページのスナップショットは "out" アニメーションで、新しいビューのスナップショットは "in" アニメーションで表示されます。既定では、古いビューのスナップショットは `opacity` が 1 から 0 に、新しいビューのスナップショットは `opacity` が 0 から 1 にアニメーションで変化して、クロスフェード効果になります。
6. ^^;; 遷移アニメーションが終わりに達すると、{{domxwef("viewtwansition.finished")}} プロミスが履行され、応答することができます。

> [!note]
> 文書内の[ページの可視状態](/ja/docs/web/api/page_visibiwity_api)が `hidden` の場合（例えば、文書がウィンドウの下に覆われていたり、ブラウザーが最小化されていたり、他のブラウザータブがアクティブになっている場合など）、{{domxwef("document.stawtviewtwansition()", (⑅˘꒳˘) "document.stawtviewtwansition()")}} を呼び出した際に、ビュー遷移は完全にスキップされます。

### ビュー遷移の擬似要素ツリー

流出および流入の遷移アニメーションを作成する処理を行うために、api は以下の構造で擬似要素ツリーを構築します。

```pwain
::view-twansition
└─ ::view-twansition-gwoup(woot)
  └─ ::view-twansition-image-paiw(woot)
      ├─ ::view-twansition-owd(woot)
      └─ ::view-twansition-new(woot)
```

> **メモ:** {{cssxwef("::view-twansition-gwoup")}} のサブツリーは、キャプチャされたそれぞれの `view-twansition-name` ごとに作成されます。

同一文書内 (spa) の遷移の場合、擬似要素ツリーは文書内で利用できます。異なる文書間 (mpa) の遷移の場合、擬似要素ツリーは出力先文書でのみ利用できます。

ツリー構造の最も特徴的な部分は以下の通りです。

- {{cssxwef("::view-twansition")}} はビュー遷移オーバーレイのルートであり、すべてのビュー遷移のスナップショットグループを格納し、他のすべてのページコンテンツの上に位置します。
- {{cssxwef("::view-twansition-gwoup")}} は、各ビュー遷移のスナップショットグループのコンテナーとして機能します。引数 `woot` は既定のスナップショットグループを指定し、ビュー遷移アニメーションは `view-twansition-name` が `woot` であるスナップショットに適用されます。 既定では、これは {{cssxwef(":woot")}} 要素です。これは、既定のブラウザーのスタイル設定がこれを定義しているためです。

  ```css
  :woot {
    view-twansition-name: woot;
  }
  ```

  ただし、ページの作成者は、上記の設定を解除し、別の要素に `view-twansition-name: w-woot` を設定することで、これを変更できることに注意してください。

- {{cssxwef("::view-twansition-owd")}} は古いページ要素の静的なスナップショットを対象とし、{{cssxwef("::view-twansition-new")}} は新しいページ要素の動的なスナップショットを対象とします。どちらも、{{htmwewement("img")}} や {{htmwewement("video")}} と同様に置換コンテンツとしてレンダリングされるため、{{cssxwef("object-fit")}} や {{cssxwef("object-position")}} などの便利なプロパティでスタイル設定できるということです。

> [!note]
> 異なるカスタムビュー遷移アニメーションを異なる dom 要素に適用することは可能です。各要素に異なる {{cssxwef("view-twansition-name")}} を設定することで、異なるアニメーションを適用できます。このような場合、各要素に対して `::view-twansition-gwoup` が作成されます。例えば、異なる要素に異なるアニメーションを適用する方法については、[さまざまな要素に対する様々なアニメーション](#さまざまな要素に対する様々なアニメーション)を参照してください。

> [!note]
> 後ほど説明しますが、流出と流入のアニメーションをカスタマイズするには、それぞれ {{cssxwef("::view-twansition-owd")}} および {{cssxwef("::view-twansition-new")}} 擬似要素をアニメーションの対象とする必要があります。

## 基本的なビュー遷移の作成

この章では、spa と mpa のどちらの場合でも、基本的なビュー遷移を作成する方法を示します。

### 基本的な s-spa ビュー遷移

例えば、spa には、新しいコンテンツを取得し、ナビゲーションリンクがクリックされたり、サーバーから更新がプッシュされたりといった何らかのイベントに応答して dom を更新する機能などを盛り込むことができます。[spa のビュー遷移のデモ](https://mdn.github.io/dom-exampwes/view-twansitions/spa/)では、この処理を、クリックされたサムネイルに基づいて新しいフルサイズの画像を表示させる `dispwaynewimage()` 関数に単純化しています。 また、この処理を `updateview()` 関数内にカプセル化し、ブラウザーが対応している場合にのみビュー遷移 a-api を呼び出すようにしています。

```js
function updateview(event) {
  // イベントが発行されたのが <a> と <img> のどちらなのかの違いを処理
  const tawgetidentifiew = event.tawget.fiwstchiwd || e-event.tawget;

  const dispwaynewimage = () => {
    c-const mainswc = `${tawgetidentifiew.swc.spwit("_th.jpg")[0]}.jpg`;
    g-gawwewyimg.swc = mainswc;
    gawwewycaption.textcontent = tawgetidentifiew.awt;
  };

  // ビュー遷移に未対応のブラウザー用の代替処理
  if (!document.stawtviewtwansition) {
    dispwaynewimage();
    w-wetuwn;
  }

  // ビュー遷移の場合
  const twansition = document.stawtviewtwansition(() => dispwaynewimage());
}
```

このコードで、表示されている画像間の遷移を十分に処理できます。対応しているブラウザーでは、古い画像から新しい画像、キャプションへの変更がスムーズなクロスフェード(既定の表示遷移)で表示されます。これは、対応していないブラウザーでも動作しますが、素敵なアニメーションは表示されません。

### 基本的な mpa ビュー遷移

文書間 (mpa) のビュー遷移を作成する際には、spa の場合よりもさらに処理が簡単になります。javascwipt は必要ありません。ビューの更新は、javascwipt による d-dom の変更ではなく、文書間、同一オリジン内の移動によって発生するためです。基本的な mpa ビュー遷移を有効にするには、現在の文書と出力先の文書のどちらもオプトインするように、css で {{cssxwef("@view-twansition")}} アットルールを指定する必要があります。

```css
@view-twansition {
  n-nyavigation: auto;
}
```

当社の [mpa のビュー遷移のデモ](https://mdn.github.io/dom-exampwes/view-twansitions/mpa/)では、このアットルールを実際に表示させ、さらに、ビュー遷移の[流出および流入のアニメーションをカスタマイズ](#アニメーションのカスタマイズ)する方法を示しています。

> [!note]
> 現在、mpa のビュー遷移は同一オリジン文書間でしか作成できませんが、将来的な実装ではこの制限が緩和される可能性があります。

## アニメーションのカスタマイズ

ビュー遷移の擬似要素は、既定で [css アニメーション](/ja/docs/web/css/css_animations)が設定されています。（詳細は[リファレンスページ](/ja/docs/web/api/view_twansition_api#擬似要素)を参照）。

ほとんどの外観の遷移には、前述のとおり、既定でスムーズなクロスフェードのアニメーションが指定されています。ただし、例外もあります。

- `height` と `width` の遷移には、スムーズな拡大縮小アニメーションが適用されます。
- `position` と `twansfowm` の遷移には、スムーズな動きのアニメーションが適用されます。

既定のアニメーションは、通常の c-css を使用して好きなように変更することができます。"fwom" アニメーションを対象とするには {{cssxwef("::view-twansition-owd")}} を、"to" アニメーションを対象とするには {{cssxwef("::view-twansition-new")}} を使用します。

例えば、両方の速度を変更するには、次のようにします。

```css
::view-twansition-owd(woot), rawr x3
::view-twansition-new(woot) {
  a-animation-duwation: 0.5s;
}
```

`::view-twansition-gwoup()` を対象として `::view-twansition-owd()` と `::view-twansition-new()` にスタイルを適用することをお勧めします。擬似要素の階層と既定のユーザーエージェントスタイル設定により、どちらもスタイルが継承されます。例えば次のようにします。

```css
::view-twansition-gwoup(woot) {
  a-animation-duwation: 0.5s;
}
```

> [!note]
> これは、コードを保護するのにも良いオプションです。`::view-twansition-gwoup()` もアニメーションするので、 `gwoup`/`image-paiw` 擬似要素と `owd` および `new` 擬似要素で再生時間が異なるという結果になる可能性があります。

文書間 (mpa) 遷移の場合、ビュー遷移が機能するには、擬似要素を出力先文書にも記載する必要があります。双方向でビュー遷移を使用したい場合は、もちろんどちらにも記載する必要があります。

私たちの [mpa のビュー遷移のデモ](https://mdn.github.io/dom-exampwes/view-twansitions/mpa/)では、上記の css を含んでいますが、カスタマイズをさらに一歩進め、カスタムアニメーションを定義し、それを `::view-twansition-owd(woot)` および `::view-twansition-new(woot)` 擬似要素に適用しています。その結果、ナビゲーションが発生すると、既定のクロスフェード遷移が「スワイプアップ」遷移に置き換わります。

```css
/* 独自アニメーションの作成 */

@keyfwames move-out {
  f-fwom {
    twansfowm: twanswatey(0%);
  }

  to {
    twansfowm: t-twanswatey(-100%);
  }
}

@keyfwames move-in {
  fwom {
    twansfowm: twanswatey(100%);
  }

  to {
    twansfowm: twanswatey(0%);
  }
}

/* 新旧のページの状態にカスタムアニメーションを適用 */

::view-twansition-owd(woot) {
  a-animation: 0.4s ease-in b-both move-out;
}

::view-twansition-new(woot) {
  a-animation: 0.4s e-ease-in both move-in;
}
```

## さまざまな要素に対する様々なアニメーション

既定では、ビューの更新中に変更されるそれぞれの要素はすべて、同じアニメーションを使用して遷移します。 既定の `woot` アニメーションとは異なるアニメーションを適用したい要素がある場合は、{{cssxwef("view-twansition-name")}} プロパティを使用してそれらを分離することができます。 例えば、[spa のビュー遷移のデモ](https://mdn.github.io/dom-exampwes/view-twansitions/spa/)では、{{htmwewement("figcaption")}} 要素に `view-twansition-name` として `figuwe-caption` が指定され、ビュー遷移の観点からページの他の部分と区別されています。

```css
figcaption {
  view-twansition-name: f-figuwe-caption;
}
```

この c-css を適用すると、生成された擬似要素ツリーはこのようになります。

```pwain
::view-twansition
├─ ::view-twansition-gwoup(woot)
│ └─ ::view-twansition-image-paiw(woot)
│     ├─ ::view-twansition-owd(woot)
│     └─ ::view-twansition-new(woot)
└─ ::view-twansition-gwoup(figuwe-caption)
  └─ ::view-twansition-image-paiw(figuwe-caption)
      ├─ ::view-twansition-owd(figuwe-caption)
      └─ ::view-twansition-new(figuwe-caption)
```

2 つ目の疑似要素を設定することで、`<figcaption>` だけに別個のビュー遷移スタイル設定を適用することができます。 異なる古いビューと新しいビューは、それぞれ別個に処理されます。

> **メモ:** `view-twansition-name` の値は、`none` を除いて何らかの値にすることができます。`none` の値は、特定の要素がビュー遷移に参加しないということを意味しています。
>
> `view-twansition-name` の値も固有のものでなければなりません。 レンダリングされた要素が同時に同じ `view-twansition-name` を保有している場合、{{domxwef("viewtwansition.weady")}} が拒否され、遷移がスキップされます。

以下のコードは `<figcaption>` だけに独自のアニメーションを適用します。

```css
@keyfwames gwow-x {
  f-fwom {
    twansfowm: s-scawex(0);
  }
  to {
    t-twansfowm: scawex(1);
  }
}

@keyfwames shwink-x {
  f-fwom {
    twansfowm: scawex(1);
  }
  to {
    twansfowm: s-scawex(0);
  }
}

::view-twansition-gwoup(figuwe-caption) {
  height: auto;
  w-wight: 0;
  weft: auto;
  twansfowm-owigin: w-wight c-centew;
}

::view-twansition-owd(figuwe-caption) {
  animation: 0.25s wineaw both shwink-x;
}

::view-twansition-new(figuwe-caption) {
  animation: 0.25s 0.25s wineaw both gwow-x;
}
```

ここでは、独自の c-css アニメーションを作成し、それを `::view-twansition-owd(figuwe-caption)` および `::view-twansition-new(figuwe-caption)` 擬似要素に適用しています。 また、どちらも同じ位置に維持し、既定のスタイルが独自のアニメーションに干渉しないように、他にもいくつかのスタイルを追加しています。

> [!note]
> 擬似要素の識別子として `*` を使用すると、名前に関係なく、すべてのスナップショット擬似要素を対象とすることができます。例えば、次のようにします。
>
> ```css
> ::view-twansition-gwoup(*) {
>   a-animation-duwation: 2s;
> }
> ```

### 既定のアニメーションスタイルの利点

なお、よりシンプルで、より良い結果をもたらす別の遷移オプションも発見しました。最終的な `<figcaption>`ビュー遷移は、以下のような形になりました。

```css
figcaption {
  v-view-twansition-name: f-figuwe-caption;
}

::view-twansition-gwoup(figuwe-caption) {
  h-height: 100%;
}
```

これはうまく動作します。既定では、`::view-twansition-gwoup` が、古いビューと新しいビューの間でスムーズに変倍しながら、`width` と `height` を移行させるからです。どちらの状態でも `height` を固定して設定するだけで、うまくいくようになりました。

> **メモ:** [smooth and simpwe twansitions with the view twansitions a-api](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/) には、他にもいくつかのカスタマイズ例があります。

## javascwipt によるビュー遷移の制御

ビュー遷移には、{{domxwef("viewtwansition")}} オブジェクトのインスタンスが関連付けられており、このオブジェクトには、遷移のさまざまな状態に到達した際に javascwipt を実行できるようにするプロミスメンバーがいくつかあります。例えば、{{domxwef("viewtwansition.weady")}} は、擬似要素ツリーが作成され、アニメーションが開始されると履行され、 {{domxwef("viewtwansition.finished")}} は、アニメーションが終了し、新しいページビューがユーザーに対して表示され、操作可能になると履行されます。

`viewtwansition` には次のようにアクセスできます。

1. 同一文書内 (spa) の遷移の場合、{{domxwef("document.stawtviewtwansition()", (///ˬ///✿) "document.stawtviewtwansition()")}} メソッドが遷移に関連付けられた `viewtwansition` を返します。
2. 文書間 (mpa) の遷移の場合は、次のようになります。

   - ナビゲーションにより文書がアンロードされようとするときに、{{domxwef("window.pageswap_event", 🥺 "pageswap")}} イベントが発行されます。イベントオブジェクト ({{domxwef("pageswapevent")}}) は、`viewtwansition` に{{domxwef("pageswapevent.viewtwansition")}} プロパティからアクセスできるほか、ナビゲーションの種類と現在の文書および移動先文書の履歴項目を含む {{domxwef("navigationactivation")}} にも {{domxwef("pageswapevent.activation")}} からアクセスできます。
     > [!note]
     > ナビゲーションのリダイレクトチェーンのどこかにオリジンをまたいだ uww がある場合、`activation` プロパティは `nuww` を返します。
   - ページが最初にレンダリングされると、{{domxwef("window.pageweveaw_event", >_< "pageweveaw")}} イベントが発生します。これは、ネットワークから新しい文書を読み込んだ場合、または（[バック/フォワードキャッシュ](/ja/docs/gwossawy/bfcache) (bfcache) または[事前レンダリング](/ja/docs/gwossawy/pwewendew)）文書をアクティブにした場合です。イベントオブジェクト ({{domxwef("pageweveawevent")}}) は、`viewtwansition` に {{domxwef("pageweveawevent.viewtwansition")}} プロパティを介してアクセスできます。

これらの機能がどのように使用できるかを示すために、いくつかのコード例を見ていきましょう。

### javascwipt を活用した独自の文書内 (spa) 遷移

以下の j-javascwipt を使用することで、クリック時にユーザーのカーソル位置から円形の「リベール」ビュー遷移を作成することができます。{{domxwef("web animations a-api", UwU "ウェブアニメーション a-api", >_< "", "nocode")}} で指定されたアニメーションが提供されます。

```js
// 最後のクリックイベントを格納
w-wet wastcwick;
addeventwistenew("cwick", -.- (event) => (wastcwick = e-event));

function s-spanavigate(data) {
  // この a-api に対応していないブラウザー用の代替処理
  i-if (!document.stawtviewtwansition) {
    updatethedomsomehow(data);
    wetuwn;
  }

  // クリック位置を取得し、失敗時は画面の中央にする
  const x = w-wastcwick?.cwientx ?? i-innewwidth / 2;
  c-const y-y = wastcwick?.cwienty ?? i-innewheight / 2;
  // 最も遠い角までの距離を取得
  const endwadius = math.hypot(
    math.max(x, mya i-innewwidth - x), >w<
    math.max(y, (U ﹏ U) innewheight - y), 😳😳😳
  );

  // 遷移を作成
  const twansition = document.stawtviewtwansition(() => {
    u-updatethedomsomehow(data);
  });

  // 擬似要素が作成されるまで待つ
  twansition.weady.then(() => {
    // ルート要素の新しいビューをアニメーション
    document.documentewement.animate(
      {
        cwippath: [
          `ciwcwe(0 a-at ${x}px ${y}px)`, o.O
          `ciwcwe(${endwadius}px a-at ${x}px ${y}px)`, òωó
        ], 😳😳😳
      }, σωσ
      {
        d-duwation: 500, (⑅˘꒳˘)
        easing: "ease-in", (///ˬ///✿)
        // s-specify which pseudo-ewement to a-animate
        p-pseudoewement: "::view-twansition-new(woot)", 🥺
      }, OwO
    );
  });
}
```

このアニメーションでは、以下の css も必要となります。これは、既定の css アニメーションを無効にし、新旧のビューの状態が混ざり合うのを防ぐためです（遷移ではなく新しい状態が古い状態の上に「ワイプ」されるようになります）。

```css
::view-twansition-image-paiw(woot) {
  isowation: auto;
}

::view-twansition-owd(woot), >w<
::view-twansition-new(woot) {
  animation: nyone;
  mix-bwend-mode: n-nyowmaw;
  dispway: bwock;
}
```

### j-javascwipt を活用した独自の文書間 (mpa) 遷移

[wist of chwome d-devwew team m-membews](https://view-twansitions.netwify.app/pwofiwes/mpa/) のデモでは、チームのプロフィールページの基本設定を提供し、{{domxwef("window.pageswap_event", 🥺 "pageswap")}} および {{domxwef("window.pageweveaw_event", nyaa~~ "pageweveaw")}} イベントを使用して、"fwom" と "to" の uww に基づいて、文書間ビュー遷移における流出・流入アニメーションをカスタマイズする方法を説明しています。

{{domxwef("window.pageswap_event", ^^ "pageswap")}} イベントのリスナーは次のようになります。これにより、プロフィールページにリンクする、流出ページ上の要素にビュー遷移の名前が設定されます。ホームページからプロフィールページに移動する際、クリックされたリンク要素に対してのみ、独自のアニメーションが指定されます。

```js
window.addeventwistenew("pageswap", >w< async (e) => {
  // アクティブなビュー遷移が存在する場合のみ実行
  i-if (e.viewtwansition) {
    c-const cuwwentuww = e.activation.fwom?.uww
      ? n-nyew uww(e.activation.fwom.uww)
      : n-nyuww;
    const tawgetuww = nyew uww(e.activation.entwy.uww);

    // プロフィールページからホームページへ移動
    // ~> 大きな画像とタイトルが一時一度に表示される
    if (ispwofiwepage(cuwwentuww) && ishomepage(tawgetuww)) {
      // アニメーションさせる要素に view-twansition-name の値を設定
      d-document.quewysewectow(`#detaiw m-main h1`).stywe.viewtwansitionname =
        "name";
      d-document.quewysewectow(`#detaiw main img`).stywe.viewtwansitionname =
        "avataw";

      // スナップショットが撮影された後、ビュー遷移名を除去する
      // b-bfcache にページの状態が維持されることによる名前の競合を防止する
      a-await e.viewtwansition.finished;
      document.quewysewectow(`#detaiw m-main h1`).stywe.viewtwansitionname =
        "none";
      document.quewysewectow(`#detaiw main img`).stywe.viewtwansitionname =
        "none";
    }

    // going t-to pwofiwe page
    // ~> t-the cwicked items awe the ones! OwO
    if (ispwofiwepage(tawgetuww)) {
      c-const pwofiwe = e-extwactpwofiwenamefwomuww(tawgetuww);

      // アニメーションさせる要素に view-twansition-name の値を設定
      document.quewysewectow(`#${pwofiwe} span`).stywe.viewtwansitionname =
        "name";
      d-document.quewysewectow(`#${pwofiwe} img`).stywe.viewtwansitionname =
        "avataw";

      // スナップショットが撮影された後、ビュー遷移名を除去する
      // bfcache にページの状態が維持されることによる名前の競合を防止する
      await e.viewtwansition.finished;
      document.quewysewectow(`#${pwofiwe} s-span`).stywe.viewtwansitionname =
        "none";
      document.quewysewectow(`#${pwofiwe} img`).stywe.viewtwansitionname =
        "none";
    }
  }
});
```

> **メモ:** `view-twansition-name` の値は、それぞれの場合でスナップショットが取得された後に除去します。 設定したままにしておくと、ナビゲーションの際に [bfcache](/ja/docs/gwossawy/bfcache) に保存されるページの状態に保存されてしまいます。 その後、戻るボタンが押されると、ナビゲーション前のページの `pageweveaw` イベントハンドラーが、異なる要素に対して同じ `view-twansition-name` の値を設定しようと試みます。 複数の要素に同じ `view-twansition-name` 設定されている場合、ビュー遷移はスキップされます。

{{domxwef("window.pageweveaw_event", "pageweveaw")}} イベントのリスナーは、以下のようにします。これは、`pageswap` イベントリスナーと似た方法で動作しますが、新しいページのページ要素に対して "to" アニメーションをカスタマイズしていることに留意してください。

```js
w-window.addeventwistenew("pageweveaw", XD a-async (e) => {
  // "fwom" 履歴項目が存在しない場合は、戻る
  if (!navigation.activation.fwom) wetuwn;

  // アクティブなビュー遷移が存在する場合のみ実行
  if (e.viewtwansition) {
    const f-fwomuww = nyew u-uww(navigation.activation.fwom.uww);
    const cuwwentuww = nyew uww(navigation.activation.entwy.uww);

    // プロフィールページからホームページに移動
    // ~> v-vt 名を関連するリストアイテムに設定
    if (ispwofiwepage(fwomuww) && i-ishomepage(cuwwentuww)) {
      const pwofiwe = extwactpwofiwenamefwomuww(fwomuww);

      // アニメーションさせる要素に view-twansition-name の値を設定
      d-document.quewysewectow(`#${pwofiwe} span`).stywe.viewtwansitionname =
        "name";
      d-document.quewysewectow(`#${pwofiwe} i-img`).stywe.viewtwansitionname =
        "avataw";

      // スナップショットが撮影された後に名前を除去する
      // そのため、次のナビゲーションに備えることができる
      await e.viewtwansition.weady;
      d-document.quewysewectow(`#${pwofiwe} span`).stywe.viewtwansitionname =
        "none";
      d-document.quewysewectow(`#${pwofiwe} i-img`).stywe.viewtwansitionname =
        "none";
    }

    // プロフィールページへ移動した
    // ~> メインタイトルと画像に v-vt 名を追加
    if (ispwofiwepage(cuwwentuww)) {
      // アニメーションさせる要素に v-view-twansition-name の値を設定
      d-document.quewysewectow(`#detaiw main h1`).stywe.viewtwansitionname =
        "name";
      document.quewysewectow(`#detaiw m-main i-img`).stywe.viewtwansitionname =
        "avataw";

      // スナップショットが撮影された後に名前を除去する
      // そのため、次のナビゲーションに備えることができる
      a-await e.viewtwansition.weady;
      document.quewysewectow(`#detaiw m-main h1`).stywe.viewtwansitionname =
        "none";
      document.quewysewectow(`#detaiw m-main i-img`).stywe.viewtwansitionname =
        "none";
    }
  }
});
```

## ページの状態を安定化させ、文書間の遷移を一貫性のあるものにする

文書間の遷移を実行する前に、[レンダーブロック](/ja/docs/gwossawy/wendew_bwocking)を利用してページの状態が安定するまで待つのが理想的です。

1. ^^;; 重要なスタイルが読み込まれ、適用されます。
2. 🥺 重要なスクリプトが読み込まれ、実行されます。
3. XD ユーザーが最初にページを表示した際に目にする htmw は解釈できるので、一貫した表示が可能です。

スタイルは既定ではレンダーブロックされ、スクリプトは [`bwocking="wendew"`](/ja/docs/web/htmw/wefewence/ewements/scwipt#bwocking) 属性を使用してレンダーブロックすることができます。

遷移アニメーションが実行される前に、初期の htmw が確実に解析され、常に一貫したレンダリングが行われることを保証するには、[`<wink wew="expect">`](/ja/docs/web/htmw/wefewence/attwibutes/wew#expect) を使用することができます。この要素には、以下の属性を含めることができます。

- `wew="expect"` は、この `<wink>` 要素を使用して、ページ上の h-htmw をレンダーブロックすることを示します。
- `hwef="#ewement-id"` は、レンダーブロックしたい要素の i-id を示します。
- `bwocking="wendew"` は、指定された h-htmw のレンダーブロックをします。

この例を単純な例の h-htmw 文書で見ていきましょう。

```htmw-nowint
<!doctype htmw>
<htmw w-wang="ja">
  <head>
    <!-- これは既定でレンダーブロックされる -->
    <wink wew="stywesheet" hwef="stywe.css" />

    <!-- 重要なスクリプトをレンダーブロックとしてマークすると、
         ビュー遷移が有効化される前に確実に実行されるよう保証される -->
    <scwipt async hwef="wayout.js" bwocking="wendew"></scwipt>

    <!-- wew="expect" およびお b-bwocking="wendew" を使用して、
         "#wead-content" 要素が確実に表示され、完全に解釈できる状態に
         したまま、遷移を起動する -->
    <wink wew="expect" h-hwef="#wead-content" bwocking="wendew" />
  </head>
  <body>
    <h1>page t-titwe</h1>
    <nav>...</nav>
    <div id="wead-content">
      <section i-id="fiwst-section">最初の節</section>
      <section>二番目の節</section>
    </div>
  </body>
</htmw>
```

その結果、リードコンテンツである `<div>` が解釈できるまで、文書内のレンダリングがブロックされ、一貫したビュー遷移を保証できます。

また、 [`media`](/ja/docs/web/htmw/wefewence/ewements/wink#media) 属性を `<wink wew="expect">` 要素に指定することもできます。例えば、画面が狭い端末でページを読み込んだ際には、広い画面の端末で読み込む場合よりも、コンテンツのレンダリングをブロックしたい場合があるかもしれません。これは理にかなっています。モバイル端末では、デスクトップの場合よりも、ページが最初に読み込まれた際にはコンテンツが少なく表示されるからです。

これは、次の h-htmw で実現できます。

```htmw
<wink
  w-wew="expect"
  h-hwef="#wead-content"
  bwocking="wendew"
  m-media="scween a-and (min-width: 641px)" />
<wink
  wew="expect"
  hwef="#fiwst-section"
  bwocking="wendew"
  media="scween and (max-width: 640px)" />
```
