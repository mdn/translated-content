---
title: CSS アニメーションの使用
slug: Web/CSS/CSS_Animations/Using_CSS_animations
tags:
  - 上級者
  - CSS
  - CSS アニメーション
  - 例
  - ガイド
translation_of: Web/CSS/CSS_Animations/Using_CSS_animations
---
{{CSSRef}}

**CSS アニメーション**により、ある CSS のスタイル設定を別の設定へと遷移させることができます。アニメーションは、2 種類の要素で構成されています。 それは、アニメーションについて記述するスタイルと、アニメーションの先頭と末尾の CSS スタイルを示すキーフレームです。 同様に、アニメーション途中の通過点となるスタイルを示すこともできます。

CSS アニメーションは、従来のスクリプトによるアニメーションに比べて 3 つの長所があります。

1.  単純なアニメーションには使いやすくできています。 つまり、 JavaScript を知らなくてもアニメーションを作ることができます。
2.  アニメーションは中程度以下のシステム負荷で、良く動作します。 JavaScript では、 (上手に作成しなければ) 単純なアニメーションでもシステムの負荷を高めてしまうことがあります。 レンダリングエンジンは可能な限りパフォーマンスをなめらかに保つため、フレームを省略するなどの技術を用いることができます。
3.  ブラウザーはアニメーションの流れを制御して、パフォーマンスや効率を最適化します。 例えば、アクティブではないタブで動作しているアニメーションの更新の頻度を減らしたりします。

## アニメーションの設定

CSS アニメーションの流れ (シーケンス) を作成するには、アニメーションさせたい要素に {{cssxref("animation")}} プロパティまたはそのサブプロパティを付加します。 このプロパティはアニメーションのタイミングと長さを設定します。 同様に、アニメーションをどのように進めるかの詳細も設定できます。 なお、このプロパティはアニメーションの外見を指定するものでは**ありません**。 それらは、後述の[キーフレームを用いたアニメーションの流れの定義](#キーフレームを用いたアニメーションの流れの定義)で説明する {{cssxref("@keyframes")}} アットルールで定義します。

{{cssxref("animation")}} プロパティのサブプロパティは以下のとおりです。

- {{cssxref("animation-name")}}
  - : アニメーションのキーフレームを示す {{cssxref("@keyframes")}} アットルールの名前を指定します。
- {{cssxref("animation-duration")}}
  - : 1 回のアニメーションサイクルに要する時間の長さを設定します。
- {{cssxref("animation-timing-function")}}
  - : アニメーションの進め方を設定します。 これは加速曲線を定義することで、キーフレーム間のアニメーションをどのように進めていくかを表します。
- {{cssxref("animation-delay")}}
  - : 要素が読み込まれてからアニメーションを始めるまでの遅延時間を設定します。
- {{cssxref("animation-iteration-count")}}
  - : アニメーションを繰り返す回数を設定します。 アニメーションを無限に繰り返すには `infinite` を指定してください。
- {{cssxref("animation-direction")}}
  - : アニメーションのシーケンス完了時に、逆方向にアニメーションして繰り返すか、始めの状態にリセットしてアニメーションを繰り返すかを設定します。
- {{cssxref("animation-fill-mode")}}
  - : アニメーションの実行前後に、指定したスタイルを適用するかを設定します。
- {{cssxref("animation-play-state")}}
  - : アニメーションを一時停止したり、再開したりすることができます。

## キーフレームを用いたアニメーションの流れの定義

アニメーションのタイミングを指定した後は、アニメーションの外見を定義することが必要です。 これは、{{cssxref("@keyframes")}} アットルールを用いて 2 つまたはそれ以上のキーフレームを定義することです。 各キーフレームは、アニメーションの流れの中で要素がどのように表現されるかを記述します。

CSS スタイルでアニメーションのタイミングを定義するため、キーフレームを {{cssxref("percentage")}} で指定し、アニメーションの流れの中でいつそのスタイルが適用されるかを示します。 0% はアニメーションシーケンスの始点、100% はアニメーションシーケンスの終点を表します。 これら始点と終点はとても重要であるため、それぞれ、0% は `from`、100% は `to` の別名でも代替できます。 両者の指定は任意ですが、`from`/`0%` と `to`/`100%` の両方が指定されていない場合、ブラウザーは、すべての属性から計算された値を用いてアニメーションを開始または終了します。

また、任意でアニメーションの始まりと終わりの中間地点を定義する追加のキーフレームを含めることも可能です。

## 例

> **Note:** (2017年以前の) 古いブラウザーでは、接頭辞が必要かもしれません。 クリックして参照できるライブサンプルには、`-webkit` 接頭辞を付加したプロパティも含まれています。

### 文字列がブラウザーのウィンドウを横切る

この例では文字列がブラウザーのウィンドウ右端の外側からすべり込むように、 {{HTMLElement("p")}} 要素へスタイルを設定しています。

このようなアニメーションは、ページ幅がブラウザーウィンドウの幅よりも広くなる原因になるので注意してください。 これは、アニメーションする要素をコンテナ内に置き、そのコンテナのスタイルに {{cssxref("overflow")}}`:hidden` を指定することで回避できます。

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

{{HTMLElement("p")}} 要素では、アニメーションの始まりから終わりまでの実行に 3 秒かけることを {{cssxref("animation-duration")}} プロパティで定義しています。 また、アニメーションのキーフレームを定義する {{cssxref("@keyframes")}} アットルールの名前が "slidein" であることを定義しています。

{{HTMLElement("p")}} 要素に CSS アニメーションに対応していないブラウザーでのスタイルを設定したい場合は、この部分にそれらのスタイルを含めてください。 ただし、この例ではアニメーション効果以外のスタイル付けは必要ありません。

キーフレームは {{cssxref("@keyframes")}} アットルールで定義します。 この例には、2 つのキーフレームがあります。 1 番目のキーフレームは 0% (代替表記の `from` を使用しています) です。 ここでは、要素の左マージンを 100% (包含要素の右端を示します) に、要素の幅を 300% (包含要素の幅の 3 倍) に設定しています。 これによりアニメーションの始まりの時点では、見出しがブラウザーのウィンドウの右端の外側に描画されます。

2 番目 (かつ最後) のキーフレームは、100% (代替表記の `to` を使用しています) です。 要素の左マージンを 0% に、幅を 100% に設定しています。 これにより、見出しがコンテンツエリアの左端へすべり込むことでアニメーションが終わります。

```html
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

> **Note:** アニメーションを見るにはページを再読み込みしてください。

{{EmbedLiveSample("Making_text_slide_across_the_browser_window","100%","250")}}

### キーフレームの追加

先ほどのアニメーション例に、他のキーフレームを追加してみましょう。 例えば、見出しが右から左へ動くのにあわせて文字サイズを大きくしてゆき、その後元のサイズへ戻るようにしたいとします。 これには、単純に以下のキーフレームを追加します:

```css
75% {
  font-size: 300%;
  margin-left: 25%;
  width: 150%;
}
```

コード全体は次のようなものです。

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  75% {
    font-size: 300%;
    margin-left: 25%;
    width: 150%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

これはブラウザーに、アニメーションの流れの 75% 経過時点で見出しの左マージンを 25% に、また幅を 150% にするよう設定します。

> **Note:** アニメーションを見るにはページを再読み込みしてください。

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### アニメーションの繰り返し

アニメーションを繰り返すためには {{cssxref("animation-iteration-count")}} を用いて、アニメーションを何回繰り返すかを設定します。 以下の例では、`infinite` を指定してアニメーションを無期限に繰り返します。

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
```

これを既存のコードの追加してください。

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

{{EmbedLiveSample("Making_it_repeat","100%","250")}}

### 前後の移動

アニメーションを繰り返すようにしましたが、毎回始めの状態にジャンプしてアニメーションが始まるのはとても不自然です。 画面上を前後に移動するようにしたいでしょう。 これは、{{cssxref("animation-direction")}} プロパティに `alternate` を設定することで簡単に実現できます。

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

そしてコードの残りは次の通りです。

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

{{EmbedLiveSample("Making_it_move_back_and_forth","100%","250")}}

### animation 一括指定の利用

{{cssxref("animation")}} 一括指定はスペースの節約に便利です。 例として、この記事を通して使用してきているルールがあります。

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

このように置き換えることができます。

```css
p {
  animation: 3s infinite alternate slidein;
}
```

> **Note:** 詳しくは、 {{cssxref("animation")}} のリファレンスページをご覧ください。

### 複数のアニメーションプロパティ値の設定

CSS アニメーションの個別指定値は、カンマで区切って複数の値を受け付けることができます。 — この機能は複数のアニメーションに一つの規則を適用したり、別々なアニメーションに別々の期間、繰り返し回数などを適用したい時に使うことができます。 別々な変化を説明するために、いくつか簡単な例を見てみましょう。

この例では、 3 つのアニメーション名を設定していますが、期間と繰り返し回数は 1 つしか設定していません。 この場合、 3 つのアニメーションはすべて同じ期間と繰り返し回数になります。

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

第二の例では、 3 つの値を 3 つのプロパティ全てに設定しました。この場合、それぞれのアニメーションはそれぞれのプロパティの同じ位置で対応する値で実行されますので、例えば `fadeInOut` の長さは 2.5s で、繰り返し回数は 2 のようになります。

<pre class="brush: css notranslate">animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;</pre>

第三の例では、 3 つのアニメーションが指定されていますが、期間と繰り返し回数は 2 つしかありません。 この場合、それぞれのアニメーションに個別の値が不足するので、値は最初から最後まで繰り返して使用されます。 ですから例えば、fadeInOut の長さは 2.5s で moveLeft300px の長さは 5s となります。 これで妥当な期間の値の最後に来たので、最初からまた始まります。 — 従って bounce の長さは 2.5s になります。 繰り返し回数 (および指定した他のプロパティ) は、同様に割り当てられます。

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

### アニメーションイベントの利用

アニメーションイベントを用いることで、アニメーションをさらに制御したり、アニメーションの有用な情報を得たりすることができます。 これらのイベントは {{domxref("AnimationEvent")}} オブジェクトに集められており、アニメーションの開始・終了・繰り返しの始まりを検出することができます。 それぞれのイベントには発生した時間や、イベントが発生したアニメーションの名前が含まれています。

文字列がすべり込むアニメーションの例を、アニメーションがいつ発生したかの情報を出力するように変更して、イベントがどのように働くかを見てみましょう。

#### CSS の追加

アニメーションの CSS を作成することから始めます。 このアニメーションは、"slidein" が呼び出されて 3 秒後に終わり、3 回繰り返されます。 繰り返すたびに、逆方向へアニメーションします。 {{cssxref("@keyframes")}} 内で、要素が画面を横切るようにするため、 width と margin-left を操作します。

```css
.slidein {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: 3;
  animation-direction: alternate;
}

@keyframes slidein {
  from {
    margin-left:100%;
    width:300%
  }

  to {
    margin-left:0%;
    width:100%;
  }
}
```

#### アニメーションイベントのリスナーの追加

使用することができる 3 つのアニメーションイベントを取得するため、 JavaScript のコードを用います。 `setup()` 関数は、イベントのリスナーになります。 この関数は文書が読み込まれたとき、最初に呼び出します。

```js
var element = document.getElementById("watchme");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slidein";
```

これは一般的なコードです。 このコードがどのように働くかについて、詳しくは {{domxref("eventTarget.addEventListener()")}} の文書を参照してください。 最後に setup() 関数では要素の `class` 属性を、アニメーションを設定したクラス "slidein" に設定しています。 これによりアニメーションを開始させています。

なぜこのような処理を行うのでしょうか？ それは、 `animationstart` イベントはアニメーションが始まるとすぐに発生するので、この例ではコードを実行する前にイベントが発生してしまうためです。 そこでコードの実行後に要素の class 属性をアニメーションのスタイルを記述したものに設定することで、アニメーションを開始させるようにしています。

#### イベントを受け取る

イベントは、以下の `listener()` 関数に送られます。

```js
function listener(event) {
  var l = document.createElement("li");
  switch(event.type) {
    case "animationstart":
      l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
      break;
    case "animationend":
      l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
      break;
    case "animationiteration":
      l.textContent = `New loop started at time ${event.elapsedTime}`;
      break;
  }
  document.getElementById("output").appendChild(l);
}
```

こちらのコードも、非常に単純です。 単純に {{domxref("event.type")}} を見てどのイベントが発生したかを判断して、発生したイベントの記録として、{{HTMLElement("ul")}} (順序なしリスト) で適切な情報を出力しています。

その出力は、最終的に以下のようになります。

- Started: elapsed time is 0
- New loop started at time 3.01200008392334
- New loop started at time 6.00600004196167
- Ended: elapsed time is 9.234000205993652

表示された時間が、アニメーションの設定時に指定した時間から予測されるものにとても近く、しかし厳密に一致はしていないことに注意してください。 また、最終の繰り返しの後に `animationiteration` イベントが発生していないことにも注意してください。 ただし、`animationend` イベントは発生しています。

#### HTML

この例を完成させるために、コンテンツの表示と受信したイベントの情報をスクリプトが挿入するために用いる HTML 文書を以下に掲載します:

```html
<h1 id="watchme">Watch me move</h1>
<p>
  This example shows how to use CSS animations to make <code>H1</code>
  elements move across the page.
</p>
<p>
  In addition, we output some text each time an animation event fires,
  so you can see them in action.
</p>
<ul id="output">
</ul>
```

#### 結果

そしてこちらはライブ出力です。

> **Note:** アニメーションを見るにはページを再読み込みしてください。

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

## 関連情報

- {{domxref("AnimationEvent", "AnimationEvent")}}
- [CSS アニメーションの対応の検出](/ja/docs/Web/CSS/CSS_Animations/Detecting_CSS_animation_support)
- [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
