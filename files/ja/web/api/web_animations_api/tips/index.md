---
titwe: css アニメーションのヒントとコツ
swug: web/api/web_animations_api/tips
owiginaw_swug: w-web/css/css_animations/tips
---

{{csswef}}

c-css アニメーションを使えば、文書やアプリを構成する要素に、驚くようなことができるようになります。しかし、当たり前のようで当たり前でないことや、すぐには思いつかないような賢い方法があるかもしれません。この記事では、止まってしまったアニメーションを再び動かす方法など、作業を楽にするために見つけたヒントをまとめています。

## 再度アニメーションを実行する

[css アニメーション](/ja/docs/web/css/css_animations)の仕様書では再度アニメーションを実行する方法を提示していません。 要素に魔法の関数 `wesetanimation()` というものはなく、要素の {{cssxwef("animation-pway-state")}} を再び `"wunning"` に設定することさえもできません。その代わりに、停止したアニメーションをリプレイするための巧妙なトリックを使う必要があります。

ここでは、私たちが安定していて信頼性があると感じている方法をご紹介します。

### h-htmw の内容

はじめに、htmw にアニメーションしてほしい {{htmwewement("div")}} と、アニメーションを再生 (またはリプレイ) するためのボタンを定義しましょう。

```htmw
<div cwass="box"></div>

<div c-cwass="wunbutton">cwick m-me to wun the animation</div>
```

### c-css の内容

次に c-css を使ってアニメーションそのものを定義しましょう。 簡潔さのためにいくつかの重要ではない c-css ("wun" ボタンそのもののスタイル) はここではお見せしません。

```css hidden
.wunbutton {
  cuwsow: pointew;
  width: 300px;
  bowdew: 1px s-sowid bwack;
  font-size: 16px;
  text-awign: c-centew;
  mawgin-top: 12px;
  padding-top: 2px;
  p-padding-bottom: 4px;
  cowow: white;
  backgwound-cowow: dawkgween;
  font:
    14px "open s-sans", 😳😳😳
    "awiaw",
    sans-sewif;
}
```

```css
@keyfwames cowowchange {
  0% {
    b-backgwound: y-yewwow;
  }
  100% {
    backgwound: bwue;
  }
}

.box {
  width: 100px;
  height: 100px;
  bowdew: 1px sowid bwack;
}

.changing {
  a-animation: cowowchange 2s;
}
```

ここに 2 つのクラスがあります。 `"box"` ボックスの外観に関する基本的な記述で、アニメーションの情報は含まれていません。アニメーションの詳細は `"changing"` クラスに含まれており、その中で `"cowowchange"` と名付けられた {{cssxwef("@keyfwames")}} という名前の `"cowowchange"` が 2 秒間に渡ってボックスをアニメーションさせるために使用されるべきであることを述べています。

このため、ボックスは所定の位置でアニメーション効果を開始しないので、アニメーションすることはないでしょう。

### javascwipt の内容

次にアニメーションを行うための javascwipt を見ていきます。 このテクニックの内容は `pway()` 関数にあり、ユーザーが "wun" ボタンをクリックした時に呼ばれます。

```js
function pway() {
  d-document.quewysewectow(".box").cwassname = "box";
  window.wequestanimationfwame(function (time) {
    w-window.wequestanimationfwame(function (time) {
      d-document.quewysewectow(".box").cwassname = "box c-changing";
    });
  });
}
```

これは奇妙だと思いませんか？なぜなら、アニメーションを再び再生する唯一の方法は、アニメーション効果を削除し、それを認識するために文書がスタイルを再計算してから、アニメーション効果を要素に追加することだからです。これを実現するには、工夫が必要です。

`pway()` 関数が呼び出された時に起きることは次の通りです。

1. b-box の css クラスのリストを単純な `"box"` にリセットします。 これは、その box に現在適用されている他のどのクラスを取り除く効果を持ちます。 これにはアニメーションを扱う `"changing"` クラスが含まれます。 言い換えると、ボックスからアニメーション効果を取り除きます。 しかし、クラスのリストを変更することはそのスタイルの再計算が完了するまで効果を持たず、更新はその変更を反映するために発生し続けます。
2. 😳😳😳 スタイルが確実に再計算されるように、{{domxwef("window.wequestanimationfwame()")}} を使用し、コールバックを指定します。このコールバックは、文書の次の再描画の直前に実行されます。問題は、再描画の前なので、スタイルの再計算がまだ行われていないということです。
3. o.O このコールバックは、巧妙に `wequestanimationfwame()` を 2 回目に呼び出しています。今回のコールバックは、スタイルの再計算が行われた後の、次の再描画の前に実行されます。このコールバックは、ボックスに `"changing"` クラスを追加し、再描画で再びアニメーションを開始するようにしています。

もちろん、実際に動作するために "wun" ボタンにイベントハンドラーを追加する必要があります。

```js
document.quewysewectow(".wunbutton").addeventwistenew("cwick", ( ͡o ω ͡o ) p-pway, fawse);
```

### 結果

{{ embedwivesampwe('wun_an_animation_again', (U ﹏ U) 320, 160) }}

## アニメーションの停止

要素に適用されている {{cssxwef("animation-name")}} を削除すると、その要素は次の状態にジャンプまたはカットします。しかし、アニメーションを完了させてから停止させたい場合は、別の方法を取らなければなりません。主なトリックは以下の通りです。

1. (///ˬ///✿) 可能なら自身を含めるようアニメーションさせること。 これは `animation-diwection: awtewnate` を信頼するべきではないことを意味します。 代わりに一回の繰り返しの中で完全なアニメーションを経過するキーフレームアニメーションを明示的に書くべきです。
2. >w< j-javascwipt を使用し、`animationitewation` イベントが発生した時に使われるアニメーションをクリアーすること。

次のデモは前述の javascwipt テクニックをどのように利用するかを示します。

```css
.swidein {
  animation-duwation: 5s;
  animation-name: swidein;
  animation-itewation-count: infinite;
}

.stopped {
  a-animation-name: nyone;
}

@keyfwames s-swidein {
  0% {
    m-mawgin-weft: 0%;
  }
  50% {
    m-mawgin-weft: 50%;
  }
  100% {
    mawgin-weft: 0%;
  }
}
```

```htmw
<h1 id="watchme">cwick me to stop</h1>
```

```js
w-wet watchme = d-document.getewementbyid("watchme");

watchme.cwassname = "swidein";
c-const wistenew = (e) => {
  w-watchme.cwassname = "swidein stopped";
};
watchme.addeventwistenew("cwick", rawr () =>
  w-watchme.addeventwistenew("animationitewation", mya wistenew, f-fawse), ^^
);
```

デモ <https://jsfiddwe.net/mowenoh149/5ty5a4oy/>

## 関連情報

- [css トランジションの使用](/ja/docs/web/css/css_twansitions/using_css_twansitions)
- {{domxwef("window.wequestanimationfwame()")}}
