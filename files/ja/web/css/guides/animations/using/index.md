---
title: CSS アニメーションの使用
short-title: アニメーションの使用
slug: Web/CSS/Guides/Animations/Using
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

**CSS アニメーション**により、ある CSS のスタイル設定を別の設定へと遷移させることができます。アニメーションは、2 種類の要素で構成されています。 それは、アニメーションについて記述するスタイルと、アニメーションの先頭と末尾の CSS スタイルを示すキーフレームです。 同様に、アニメーション途中の通過点となるスタイルを示すこともできます。

CSS アニメーションは、従来のスクリプトによるアニメーションに比べて 3 つの長所があります。

1. 基本的なアニメーションには使いやすくできています。 つまり、 JavaScript を知らなくてもアニメーションを作ることができます。
2. アニメーションは中程度以下のシステム負荷で、良く動作します。単純なアニメーションの場合、JavaScript ではシステムの負荷を高めてしまうことがよくあります。 レンダリングエンジンは可能な限りパフォーマンスをなめらかに保つため、フレームを省略するなどの技術を用いることができます。
3. ブラウザーはアニメーションの流れを制御して、パフォーマンスや効率を最適化します。 例えば、アクティブではないタブで動作しているアニメーションの更新の頻度を減らしたりします。

## アニメーションの設定

CSS アニメーションの流れ (シーケンス) を作成するには、アニメーションさせたい要素に {{cssxref("animation")}} プロパティまたはそのサブプロパティを付加します。 このプロパティはアニメーションのタイミングと長さを設定します。 同様に、アニメーションをどのように進めるかの詳細も設定できます。 なお、このプロパティはアニメーションの外見を指定するものでは**ありません**。 それらは、後述の[キーフレームを用いたアニメーションの流れの定義](#キーフレームを用いたアニメーションの流れの定義)で説明する {{cssxref("@keyframes")}} アットルールで定義します。

{{cssxref("animation")}} プロパティのサブプロパティは以下のとおりです。

- {{cssxref("animation-composition")}}
  - : 複数のアニメーションが同時に同じプロパティに影響を与える場合に使用する{{Glossary("composite operation", "合成演算")}}を指定します。このプロパティは `animation` 一括指定プロパティには含まれません。
- {{cssxref("animation-delay")}}
  - : 要素の読み込み完了からアニメーションシーケンスの開始までの待ち時間を指定します。また、アニメーションを最初から開始するか、途中から開始するかも指定します。
- {{cssxref("animation-direction")}}
  - : アニメーションの最初の反復を順方向と逆方向のどちらにするか、以降の反復の方向をシーケンスごとに交互に変えるか、開始点にリセットして繰り返すかを指定します。
- {{cssxref("animation-duration")}}
  - : アニメーションの 1 回のサイクルに要する時間の長さを設定します。
- {{cssxref("animation-fill-mode")}}
  - : アニメーションの実行前後に、指定したスタイルを適用するかを設定します。
    > [!NOTE]
    > アニメーションが [forwards](/ja/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) フィルモードの場合、アニメーション対象のプロパティは、[`will-change`](/ja/docs/Web/CSS/Reference/Properties/will-change) プロパティの値に含まれているかのように振る舞います。アニメーション中に新しい重ね合わせコンテキストが作成された場合、ターゲット要素はアニメーション終了後もその重ね合わせコンテキストを保持します。
- {{cssxref("animation-iteration-count")}}
  - : アニメーションを繰り返す回数を設定します。 アニメーションを無限に繰り返すには `infinite` を指定してください。
- {{cssxref("animation-name")}}
  - : アニメーションのキーフレームを示す {{cssxref("@keyframes")}} アットルールの名前を指定します。
- {{cssxref("animation-play-state")}}
  - : アニメーションを一時停止したり、再開したりすることができます。
- {{cssxref("animation-timeline")}}
  - : CSS アニメーションの進行を制御するために使用されるタイムラインを指定します。
- {{cssxref("animation-timing-function")}}
  - : キーフレーム間のアニメーション遷移を、加速曲線を設定することで定義します。

## キーフレームを用いたアニメーションの流れの定義

アニメーションのタイミングを指定した後は、アニメーションの外見を定義することが必要です。 これは、{{cssxref("@keyframes")}} アットルールを用いて 2 つまたはそれ以上のキーフレームを定義することです。 各キーフレームは、アニメーションの流れの中で要素がどのように表現されるかを記述します。

CSS スタイルでアニメーションのタイミングを定義するため、キーフレームを {{cssxref("percentage")}} で指定し、アニメーションの流れの中でいつそのスタイルが適用されるかを示します。 0% はアニメーションシーケンスの始点、100% はアニメーションシーケンスの終点を表します。 これら始点と終点はとても重要であるため、それぞれ、0% は `from`、100% は `to` の別名でも代替できます。 両者の指定は任意ですが、`from`/`0%` と `to`/`100%` の両方が指定されていない場合、ブラウザーは、すべての属性から計算された値を用いてアニメーションを開始または終了します。

また、任意でアニメーションの始まりと終わりの中間地点を定義する追加のキーフレームを含めることも可能です。

### animation 一括指定の利用

{{cssxref("animation")}} 一括指定はスペースの節約に便利です。 例として、この記事を通して使用してきているルールがあります。

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

このように置き換えることができます。

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

`animation` 一括指定を使用してさまざまアニメーションプロパティの値を指定できる順序の詳細については、{{cssxref("animation")}} リファレンスページを参照してください。

### 複数のアニメーションプロパティ値の設定

CSS アニメーションの個別指定値は、カンマで区切って複数の値を受け付けることができます。 — この機能は複数のアニメーションに一つの規則を適用したり、別々なアニメーションに別々の期間、繰り返し回数などを適用したい時に使うことができます。 別々な変化を説明するために、いくつか簡単な例を見てみましょう。

この最初の例では、3 つの持続時間と 3 つの反復回数値があります。したがって、各アニメーションには、アニメーション名と同じ位置に持続時間と反復回数の値が割り当てられます。`fadeInOut` アニメーションには持続時間 `2.5s` と反復回数 `2` が割り当てられ、`bounce` アニメーションには持続時間 `1s` と反復回数 `5` が割り当てられます。

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

この第二の例では、3 つのアニメーション名が設定されていますが、指定されている持続時間と反復回数は 1 つだけです。この場合、3 つのアニメーションすべてに同じ持続時間と反復回数が適用されます。

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

第三の例では、 3 つのアニメーションが指定されていますが、期間と繰り返し回数は 2 つしかありません。 この場合、それぞれのアニメーションに個別の値が不足するので、値は最初から最後まで繰り返して使用されます。 ですから、`fadeInOut` の長さは `2.5s` で `moveLeft300px` の長さは `5s` となります。 これで妥当な期間の値の最後に来たので、最初からまた始まります。 — 従って `bounce` の長さは `2.5s` になります。 繰り返し回数 (および指定した他のプロパティ) は、同様に割り当てられます。

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

アニメーションの数とアニメーションプロパティの数が逆に一致しない場合、たとえば 3 つの `animation-name` 値に対して 5 つの `animation-duration` 値がある場合、余分または未使用のアニメーションプロパティ値（この場合は 2 つの `animation-duration` 値）はどのアニメーションにも適用されず、無視されます。

## 例

### 文字列がブラウザーのウィンドウに滑り込む

この例では、{{HTMLElement("p")}} 要素に {{cssxref("translate")}} および {{cssxref("scale")}} スタイルの遷移を使用して、文字列がブラウザーのウィンドウ右端の外側から滑り込むようになります。

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
}

@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

{{HTMLElement("p")}} 要素では、アニメーションの始まりから終わりまでの実行に 3 秒かけることを {{cssxref("animation-duration")}} プロパティで定義し、アニメーションのキーフレームを定義する {{cssxref("@keyframes")}} アットルールの名前が `slide-in` であることを定義しています。

この場合、キーフレームは 2 つだけです。最初のキーフレームは `0%` （`from` の別名を使用）で発生します。ここでは、要素の {{cssxref("translate")}} プロパティを `150vw`（つまり、親要素の右端を越えた位置）に設定し、要素の {{cssxref("scale")}} を 200%（デフォルトのインラインサイズの 2 倍）に設定します。これにより、段落の幅が親要素である `<body>` の 2 倍になります。この設定により、アニメーションの最初のフレームではヘッダーがブラウザーウィンドウの右端からはみ出して描画されます。

2 番目 (かつ最後) のキーフレームは、`100%` です（別名の `to` を使用）。 {{cssxref("translate")}} を `0%` に、要素の {{cssxref("scale")}} を `1` すなわち `100%` に設定しています。 これにより、見出しがコンテンツエリアの左端へすべり込むことでアニメーションが終わります。

```html
<p>
  毛虫とアリスはしばらく黙って見つめ合った。やがて毛虫は口から水パイプを外し、だるくて眠そうな声で彼女に話しかけた。
</p>
```

> [!NOTE]
> アニメーションを見るにはページを再読み込みしてください。

{{EmbedLiveSample("Making_text_slide_across_the_browser_window","100%","250")}}

### 他のキーフレームアニメーションの追加

先ほどの例にキーフレームを追加しましょう。アリスという名前が右から左へ移動する際に、ピンク色に変化して大きくなり、その後元のサイズと色に戻るとします。{{cssxref("font-size")}} を変更することも可能ですが、ボックスモデルに影響するプロパティを変更するとパフォーマンスに悪影響を及ぼします。代わりに、名前を {{htmlelement("span")}} で囲み、その要素のみを個別に拡大縮小・着色します。そのためには、`<span>` のみに影響する 2 つ目のアニメーションを追加する必要があります。

```css
@keyframes grow-shrink {
  25%,
  75% {
    scale: 100%;
  }

  50% {
    scale: 200%;
    color: magenta;
  }
}
```

コード全体は次のようなものです。

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
}
p span {
  display: inline-block;
  animation-duration: 3s;
  animation-name: grow-shrink;
}

@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}

@keyframes grow-shrink {
  25%,
  75% {
    scale: 100%;
  }

  50% {
    scale: 200%;
    color: magenta;
  }
}
```

{{htmlelement("span")}} を「アリス」の周りに追加しました。

```html
<p>
  毛虫と<span>アリス</span>はしばらく黙って見つめ合った。やがて毛虫は口から水パイプを外し、だるくて眠そうな声で彼女に話しかけた。
</p>
```

これにより、アニメーションの最初の 25% と最後の 25% では名前が通常表示され、中央部分で拡大・縮小される際にピンク色に変化するようブラウザに指示します。この span の{{cssxref("display")}} プロパティを `inline-block` に設定します。これは、 `transform` プロパティが置換要素ではない{{glossary("inline-level content", "インラインレベルコンテンツ")}}には影響しないためです。

> [!NOTE]
> アニメーションを見るにはページを再読み込みしてください。

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### アニメーションの繰り返し

アニメーションを繰り返すためには {{cssxref("animation-iteration-count")}} を用いて、アニメーションを何回繰り返すかを設定します。 以下の例では、`infinite` を指定してアニメーションを無期限に繰り返します。

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

```html hidden
<p>
  毛虫とアリスはしばらく黙って見つめ合った。やがて毛虫は口から水パイプを外し、だるくて眠そうな声で彼女に話しかけた。
</p>
```

{{EmbedLiveSample("Repeating_the_animation","100%","250")}}

### 前後の移動

アニメーションを繰り返すようにしましたが、毎回始めの状態にジャンプしてアニメーションが始まるのはとても不自然です。 画面上を前後に移動するようにしたいでしょう。 これは、{{cssxref("animation-direction")}} プロパティに `alternate` を設定することで簡単に実現できます。

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

```html hidden
<p>
  毛虫とアリスはしばらく黙って見つめ合った。やがて毛虫は口から水パイプを外し、だるくて眠そうな声で彼女に話しかけた。
</p>
```

{{EmbedLiveSample("Making_the_animation_move_back_and_forth","100%","250")}}

### アニメーションイベントの利用

アニメーションイベントを用いることで、アニメーションをさらに制御したり、アニメーションの有用な情報を得たりすることができます。 これらのイベントは {{domxref("AnimationEvent")}} オブジェクトに集められており、アニメーションの開始・終了・繰り返しの始まりを検出することができます。 それぞれのイベントには発生した時間や、イベントが発生したアニメーションの名前が含まれています。

文字列がすべり込むアニメーションの例を、アニメーションがいつ発生したかの情報を出力するように変更して、イベントがどのように働くかを見てみましょう。

アニメーションの CSS を作成することから始めます。 このアニメーションは、"slide-in" が呼び出されて 3 秒後に終わり、3 回繰り返されます。 繰り返すたびに、逆方向へアニメーションします。 {{cssxref("@keyframes")}} 内で、拡大率と平行移動を X 軸方向に操作し、この要素が画面を横切るようにします。

```css
.slide-in {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

#### アニメーションイベントのリスナーの追加

使用することができる 3 つのアニメーションイベントを取得するため、 JavaScript のコードを用います。 `setup()` 関数は、イベントのリスナーになります。 この関数は文書が読み込まれたとき、最初に呼び出します。

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener);
element.addEventListener("animationend", listener);
element.addEventListener("animationiteration", listener);

element.className = "slide-in";
```

これはきわめて一般的なコードです。 このコードがどのように働くかについて、詳しくは {{domxref("eventTarget.addEventListener()")}} の文書を参照してください。最後のものは、要素の `class` 属性を、アニメーションを設定したクラス "slide-in" に設定しています。 これによりアニメーションを開始させています。

なぜこのようにするのでしょうか？ それは、 `animationstart` イベントはアニメーションが始まるとすぐに発生するので、この例ではコードを実行する前にイベントが発生してしまうためです。 そこでコードの実行後に要素の class 属性をアニメーションのスタイルを記述したものに設定することで、アニメーションを開始させるようにしています。

#### イベントを受け取る

イベントは、以下の `listener()` 関数に送られます。

```js
function listener(event) {
  const l = document.createElement("li");
  switch (event.type) {
    case "animationstart":
      l.textContent = `開始: 経過時刻 ${event.elapsedTime}`;
      break;
    case "animationend":
      l.textContent = `終了: 経過時刻 ${event.elapsedTime}`;
      break;
    case "animationiteration":
      l.textContent = `新しい反復の開始時刻 ${event.elapsedTime}`;
      break;
  }
  document.getElementById("output").appendChild(l);
}
```

こちらのコードも、とても単純です。{{domxref("event.type")}} を見てどのイベントが発生したかを判断し、発生したイベントの記録として、{{HTMLElement("ul")}} （順序なしリスト）で適切な情報を出力しています。

その出力は、最終的に以下のようになります。

- 開始: 経過時刻 0
- 新しい反復の開始時刻 3.01200008392334
- 新しい反復の開始時刻 6.00600004196167
- 終了: 経過時刻 9.234000205993652

表示された時間は、アニメーションの設定時に指定した時間から予測されるものにとても近く、しかし厳密に一致はしていないことに注意してください。 また、最終の繰り返しの後に `animationiteration` イベントが発生していないことにも注意してください。 ただし、`animationend` イベントは発生しています。

この例を完成させるために、コンテンツの表示と受信したイベントの情報をスクリプトが挿入するために用いる HTML 文書を以下に掲載します。

```html-nolint
<h1 id="watch-me">これが動くのを見てください</h1>
<p>
  この例は、CSS アニメーションを使用して <code>H1</code> 要素をページ上で移動させる方法を示しています。
</p>
<p>
  さらに、アニメーションイベントが発生するたびにテキストを出力するため、動作を確認できます。
</p>
<ul id="output"></ul>
```

そしてこちらはライブ出力です。

> [!NOTE]
> アニメーションを見るにはページを再読み込みしてください。

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

### display と content-visibility のアニメーション

この例は、[`display`](/ja/docs/Web/CSS/Reference/Properties/display) と [`content-visibility`](/ja/docs/Web/CSS/Reference/Properties/content-visibility) をアニメーションさせる方法を示してあります。この動作は、例えばコンテナーを `display: none` で DOM から削除したいが、即座に消えるのではなく [`opacity`](/ja/docs/Web/CSS/Reference/Properties/opacity) を使って滑らかにフェードアウトさせたいといった、出現/消失アニメーションの作成に有用です。

対応しているブラウザーでは、`display` と `content-visibility` のアニメーションを、[離散アニメーション型](/ja/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete)の一種を用いて実現します。これは一般的に、プロパティが 2 つの値の間をアニメーションする過程で、中間点（50% 地点）で値を切り替えることを意味します。

ただし、`display: none` または `content-visibility: hidden` から可視状態へのアニメーション、あるいはその逆の場合は例外です。この場合、ブラウザーは両方の値を切り替えることで、アニメーションの全期間にわたってコンテンツが表示されるようにします。

そのため例えば、

- `display` を `none` から `block` （または他の可視状態の `display` 値）へアニメーションさせる場合、アニメーション時間の `0%` の時点で値が `block` に切り替わるため、アニメーション全体を通して可視状態が維持されます。
- `display` を `block` （または他の可視状態の `display` 値）から `none` へアニメーションさせる場合、アニメーション時間の `100%` の時点で値が `none` に切り替わるため、アニメーション全体を通して可視状態が維持されます。

#### HTML

この HTML には 2 つの {{htmlelement("p")}} 要素が含まれており、その間の {{htmlelement("div")}} の `display` を `none` から `block` へアニメーションさせます。

```html-nolint
<p>
  画面のどこかをクリックするか、任意のキーを押すと、<code>&lt;div&gt;</code> が非表示と表示の間で切り替わります。
</p>

<div>
  これは <code>&lt;div&gt;</code> 要素で、 <code>display: none; opacity: 0</code> と <code>display: block; opacity: 1</code> の間をアニメーションします。すごいでしょう？
</div>

<p>
  これは、<code>display: none;</code> が上記の <code>&lt;div&gt;</code> に対して適用・解除されていることを示す別の段落です。もし <code>opacity</code> のみが変更されていた場合、DOM 内の空間を常に占有し続けることになります。
</p>
```

#### CSS

```css
html {
  height: 100vh;
}

div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;
  opacity: 0;
  display: none;
}

/* アニメーションクラス */

div.fade-in {
  display: block;
  animation: fade-in 0.7s ease-in forwards;
}

div.fade-out {
  animation: fade-out 0.7s ease-out forwards;
}

/* アニメーションのキーフレーム */

@keyframes fade-in {
  0% {
    opacity: 0;
    display: none;
  }

  100% {
    opacity: 1;
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    display: block;
  }

  100% {
    opacity: 0;
    display: none;
  }
}
```

キーフレームアニメーションに `display` プロパティが含まれていることに注意してください。

#### JavaScript

最後に、アニメーションを起動するためのイベントリスナーを設定する JavaScript を少し追加します。具体的には、表示させたいときに `<div>` に `fade-in` クラスを追加し、非表示にしたいときに `fade-out` を追加します。

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElem.classList[0] === "fade-in") {
    divElem.classList.remove("fade-in");
    divElem.classList.add("fade-out");
  } else {
    divElem.classList.remove("fade-out");
    divElem.classList.add("fade-in");
  }
}
```

#### 結果

このコードは以下の通りレンダリングされます。

{{ EmbedLiveSample("Animating display and content-visibility", "100%", "350") }}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
- {{domxref("AnimationEvent", "AnimationEvent")}}
- [CSS トランジションの使用](/ja/docs/Web/CSS/Guides/Transitions/Using)
- [ウェブアニメーション API の使用](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
