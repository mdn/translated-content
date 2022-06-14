---
title: インタラクティブな練習問題の作成方法
slug: MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web
tags:
  - ガイド
  - Howto
  - 中級者
  - 学習
  - MDN メタ
  - チュートリアル
translation_of: MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web
---
{{MDNSidebar}}

ウェブを学ぶとき、アクティブラーニングコンテンツに頼ることが重要です。このようなコンテンツは、積極的に何かを学ぶことを支援するために作られます。練習問題、ハック可能なライブの例、実行すべきタスク、評価などです。要するに、誰かが何かを能動的に理解するのを助けることができるものなら何でもいいのです。

このようなコンテンツを作成する簡単な方法はありません。例えば、MDN の記事からリンクできる、ハック可能なサンプルを作成するためのサードパーティツールが多く存在しています（[JSFiddle](https://jsfiddle.net/), [CodePen](https://codepen.io/), [Dabblet](https://dabblet.com/), などを参照）。より高度でわかりやすい練習問題を作りたい場合は、 WebMaker プロジェクトの [Thimble](https://thimble.mozilla.org) を使うと簡単です。

現在、 MDN にはこのようなアクティブコンテンツを簡単に作成するツールはありません。しかし、コーダーであれば、現在の MDN の機能を使って、独自のアクティブラーニングコンテンツを作成することができます。

## MDN ライブサンプル

MDN には、**ライブサンプル**というとても格好よい機能があります。これは、 MDN のページ内にある HTML、CSS、JavaScript のコードを、実行されたものと同等なものに変換する仕組みです。これを使う前に、[ライブサンプルシステムの使用](/ja/docs/MDN/Structures/Live_samples)に目を通してください。ライブサンプルは簡単に作成できますが、その過程で癖やトリックを学ぶことができます。

面白いのは、その機能を微調整して、どんな種類のツールやユーティリティでも MDN ページに埋め込めるようにすることが本当に簡単なことです。

### 非表示のコード

コードサンプルを使ってアクティブラーニングのコンテンツを作るには、まず、コンテンツを追加したいページを編集します。ライブサンプル機能を使って、好きなようにコンテンツを作成します。書けるコードの複雑さに悩まされることなく、必要なものだけを作成しましょう。コード例ができたら、それを適切な `id` 属性を持つ単純な {{HTMLElement('div')}} 要素で囲みます。このコードを囲むすべての {{HTMLElement('pre')}} 要素に、クラス `hidden` を追加してください。こうすることで、コードは表示されなくなりますが、ライブサンプルにはアクセスでき、表示可能な状態が保たれます。

簡単な例を見てみましょう。

次の四角をクリックすると、ランダムに色が変わります。

<div id="hidden_code_example"><pre class="brush: html hidden">&#x3C;div class="square">
  &#x3C;p class="color">#000000&#x3C;/p>
&#x3C;/div></pre><pre class="brush: css hidden">body {
  padding: 10px;
  margin : 0;
}

.square {
width : 80px;
height : 80px;
padding: 10px;
background-color: black;
color: white;
text-align: center;
}

.color {
width: 60px;
text-shadow: 1px 1px 1px black;
}

</pre><pre class="brush: js hidden">function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').textContent = '#' + color;
}

function getRandomColor() {
var color = Math.floor(Math.random() \* 16777215);
return color.toString(16);
}

document.addEventListener('click', function (e) {
setColor(getRandomColor());
});

</pre></div>

{{EmbedLiveSample('hidden_code_example', 120, 125)}}

このページのソースコードを見てみると、以下のような HTML コードになっています。

```html
<p>Click on the following square to randomly change its color or just type an hexadecimal code color</p>

<div id="hidden_code_example">

<pre class="brush: html hidden">
  <div class="square">
    <p class="color">#000000</p>
  </div>
</pre>

<pre class="brush: css hidden">
body {
  padding: 10px;
  margin : 0;
}

.square {
  width  : 80px;
  height : 80px;
  padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
}

.color {
  width: 60px;
  text-transform: uppercase;
}
</pre>

<pre class="brush: js hidden">
function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').textContent = '#' + color;
}

function getRandomColor() {
  var color = Math.floor(Math.random() * 16777215);
  return color.toString(16);
}

document.addEventListener('click', function (e) {
  setColor(getRandomColor());
});
</pre>
</div>

\{{EmbedLiveSample('hidden_code_example', 120, 125)}}
```

[Canvas API のページ](ja/docs/Web/API/Canvas_API#javascript) で、このような微調整を行うより高度な例を見ることができます。
