---
title: カスタムフォームコントロールの作成方法
slug: Learn/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: 741bc42293cb9a434367f5e998f5076a8ae8137e
---

{{LearnSidebar}}

HTML フォームで使用可能なコントロールだけでは十分でない場合が多くあります。例えば、{{HTMLElement("select")}} 要素のようなコントロールに[高度なスタイル設定を行いたい](/ja/docs/Learn/Forms/Advanced_form_styling)場合や、独自の動作を提供したい場合は、あなた独自のコントロールを作成するしかありません。

本記事では、そのようなコントロールの作り方を見ていきます。その目的のため、次の例に取り組みます: {{HTMLElement("select")}} 要素の再構築です。このほかに独自コントロール作成をどういう方法でするか、いつするか、またそれが意味をなすのかや、コントロール作成が必須なときに何に気をつけるべきかを扱います。

> **メモ:** ここではコントロールの構築に注目しており、汎用かつ再利用可能なコードの作成法は見ていきません。それには JavaScript の重要なコードや未知のコンテキストでの DOM 操作が組み合わされており、本記事の対象から外れます。

## デザイン、構造、セマンティクス

カスタムコントロールを作成する前に、何をしたいかをはっきりと理解することから始めるべきです。これはあなたの貴重な時間を節約するでしょう。特に、コントロールの全状態を明確に定義することが重要です。これを行うには、状態や動作がよく知られている既存のコントロールからスタートするとよいでしょう。この結果、簡単に可能な限りの模倣を行えます。

本記事の例では、 {{HTMLElement("select")}} 要素を再構築します。以下が、私たちが実現したい成果です:

![The three states of a select box](custom-select.png)

このスクリーンショットでは、コントロールの主要な状態 3 つを示しています: 通常状態 (左)、アクティブ状態 (中央)、そして開いた状態 (右) です。

動作の点では、ネイティブな HTML 用要素を再作成します。このため、ネイティブ HTML 要素と同様な動作や意味を持たせるべきです。独自のコントロールもネイティブコントロールと同様に、キーボードだけでなくマウスでも使用できるように、またスクリーンリーダーに理解できるようにしたいと考えます。コントロールがどのように各状態に達するかを定義することから始めましょう:

**コントロールは以下のときに通常状態になります。**

- ページを読み込む
- コントロールはアクティブであったが、ユーザーがコントロール以外のどこかをクリックした
- コントロールはアクティブであったが、キーボードを使用して別のコントロールにフォーカスを移した (例: <kbd>Tab</kbd> キー)

**コントロールは以下のときにアクティブ状態になります。**

- ユーザーがコントロール上でクリックする
- ユーザーが Tab キーを押下して、コントロールがフォーカスを得る
- コントロールが開いた状態で、ユーザーがコントロールをクリックする

**コントロールは以下のときに開いた状態になります。**

- コントロールが開いた状態ではないときに、ユーザーがコントロールをクリックした

状態をどのように変えるかを理解したら、コントロールの値をどのように変えるかの定義が重要になります。

**以下のときに値が変わります。**

- コントロールが開いた状態であるときに、ユーザーが選択肢をクリックする
- コントロールがアクティブ状態であるときに、ユーザーが上下矢印キーを押下する

**以下のときには値は変わりません。**

- 最初のオプションが選択済みのときに、ユーザーが上矢印をクリックする
- 最後のオプションが選択済みのときに、ユーザーが下矢印をクリックする

最後に、コントロールの選択肢がどのように動作するかを定義しましょう。

- コントロールが開いているとき、選択されている選択肢は強調されます
- マウスポインタが選択肢の上にあるときはその選択肢が強調され、また前に強調されていた選択肢は通常状態に戻ります

この例の用途としては、ここまでです。しかし注意深い読者の方は、いくつかの動作が欠けていることに気づくでしょう。例えば、コントロールが開いた状態であるときにユーザーが Tab キーを押すと何が起きると考えますか? その答えは... 何も起きません。正しい動作は明らかでしょうが、実際は私たちの仕様で定義されていないため、とても見逃されやすいのです。これは、コントロールの動作を設計する人と実装する人が異なるチーム環境で特に当てはまります。

別のおもしろい例です。コントロールが開いた状態であるときに上下矢印キーを押すと何が起きるのでしょうか? こちらはやや難しくなります。アクティブ状態と開いた状態をまったく別のものと考えるなら、その答えはやはり "何も起きません" です。これは、開いた状態でのキーボードの作用を定義していないためです。一方、アクティブ状態と開いた状態が少し重なると考えるなら、値は替わるかもしれませんがそれに対応して選択肢が強調されることはないでしょう。繰り返しになりますが、これはコントロールが開いた状態の選択肢に対するキーボードの作用を定義していないためです (コントロールが開いた状態で何が起きるかだけを定義しており、その後がないためです)。

もう少し突っ込んで考えてみます: エスケープキーはどうでしょう? <kbd>Esc</kbd> キーを押すと開いた select が閉じます。ネイティブの {{htmlelement('select')}} と同じ機能を提供する場合、キーボードやマウスやスクリーンリーダーへのタッチ、その他あらゆる入力機器まで、全てのユーザーにとっての select の動作と全く同じようにふるまうべきです。

この例では欠けている仕様が明らかですので対処するでしょうが、めずらしい新たなコントロールでは真の問題になり得ます。標準要素では、 {{htmlelement('select')}} もその 1 つですが、仕様の作成者は膨大な時間をかけて全てのユースケースの全ての入力機器の全ての操作を指定します。新コントロールの作成は簡単ではなく、特にそれが作成されたことのないものの場合は、どのような動作が正しいかについて、わずかなアイデアですら誰も持っていないため簡単ではないです。少なくとも select はこれまでやってきたため、どうふるまうかはわかっています。

一般的に、新しい操作を設計するのは、標準を作成するに十分なリーチを持った、とても大きな産業プレイヤーだけの選択肢です。例えば、Apple は 2001 年に iPod にスクロールホイールを導入しました。完全に新しい操作方法のデバイスを導入するのに成功するマーケットシェアがありましたが、たいていのデバイス会社はそうはいきません。

新しいユーザーインタラクションを発明しないのがベストです。インタラクションを追加する場合、設計段階で時間を使うのが重要です。動作の定義が貧弱であったり定義もれがあったりした場合、いったんユーザーが使い始めると動作を再定義するのが非常に困難になると思われますので、設計段階に時間をかけることは賢明です。もし疑っているのでしたら、他の人に意見を聞きましょう。また予算を持っているのでしたら、[ユーザーテストの実施](https://en.wikipedia.org/wiki/Usability_testing)をためらってはいけません。このプロセスは、UX デザインと呼ばれます。この点について詳しく学びたいのでしたら、以下の役に立つリソースをご覧になるとよいでしょう。

- [UXMatters.com](https://www.uxmatters.com/)
- [UXDesign.com](http://uxdesign.com/)
- [The UX Design section of SmashingMagazine](https://www.smashingmagazine.com/)

> **メモ:** さらにほとんどのシステムでは、使用できる選択肢すべてを見るために {{HTMLElement("select")}} 要素を開く手段があります (これは {{HTMLElement("select")}} 要素をマウスでクリックするのと同じです)。これは Windows では <kbd>Alt</kbd> + <kbd>Down</kbd> キー で実現できますが、この例では実装しません。しかし、仕組みはすでに `click` イベント向けに実装されていますので、行うのは簡単です。

## HTML の構造とセマンティクスの定義

コントロールの基本的な機能が決まりましたので、構築を始めるときが来ました。最初のステップはコントロールの HTML 構造の定義と、基本的なセマンティクスの付与です。こちらが、 {{HTMLElement("select")}} 要素の再構築に必要な HTML です。

```html
<!-- これはコントロールの中心的なコンテナーです。
     tabindex 属性は、ユーザーがコントロールにフォーカスを当てられるようにするものです。
     これを JavaScript で設定する方がよいことは、後で見ていきます。-->
<div class="select" tabindex="0">
  <!-- このコンテナは、コントロールの現在の値を表示するために使用します。-->
  <span class="value">Cherry</span>

  <!-- このコンテナは、コントロールで使用できるすべての選択肢を包含します。
       これはリストですから、ul 要素を使用するとよいでしょう。-->
  <ul class="optList">
    <!-- 各々の選択肢は表示される値だけを包含しており、フォームのデータで送信される
         実際の値を処理する方法は後で見ていきます。-->
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

クラス名の使い方に注目してください。これらは基盤となる実際の HTML とは関係なく、フォームに関するそれぞれの部分を示します。これは CSS や JavaScript を強固な HTML の構造と結びつけないようにするために重要であり、そのためにコントロールを扱うコードを壊すことなく、後から実装を変更することができます。例えば {{HTMLElement("optgroup")}} 要素と同等の機能を実装したい場合などです。

クラス名は、しかしながら、意味のある値ではありません。現在の状態では、スクリーンリーダーのユーザーのみがリストを"見る"ことができます。ARIA セマンティクスを少し追加します。

## CSS でルックアンドフィールを作成する

構造ができましたので、コントロールのデザインを始められます。カスタムコントロールを作成する上でのポイントは、望むとおりにコントロールへスタイルを設定できることです。そのために、CSS を 2 つの部分に分けます: ひとつはコントロールが {{HTMLElement("select")}} 要素のように動作するために欠かせない CSS ルールであり、もうひとつは希望する見た目にするための好みのスタイルで構成されます。

### 必須のスタイル

必須のスタイルは、コントロールの 3 つの状態を扱うために欠かせないものです。

```css
.select {
  /* 選択肢のリスト向けのポジショニングコンテキストを作成します;
     adding this to .select{{cssxref(':focus-within')}} will be a better option when fully supported
  */
  position: relative;

  /* コントロールをテキストフローの一部かつまとまった大きさにします */
  display: inline-block;
}
```

アクティブ状態であるコントロールのルックアンドフィールを定義するため、追加で `active` クラスが必要です。このコントロールはフォーカスを得ることができますので、同様に動作させるためにカスタムスタイルを {{cssxref(":focus")}} 擬似クラスにも適用します。

```css
.select.active,
.select:focus {
  outline: none;

  /* box-shadow プロパティは必須ではありませんが、これをデフォルト値として使用するのは
     アクティブ状態を見えるようにするために重要です。自由に書き換えてください。*/
  box-shadow: 0 0 3px 1px #227755;
}
```

次に、選択肢のリストを扱いましょう:

```css
/* .select セレクターは、私たちが定義するクラスがコントロールの内部にあることを
   確実にするためのシンタックスシュガーです。*/
.select .optList {
  /* 選択肢のリストが値の下部かつ HTML フローの外側に表示される
     ようにします。*/
  position: absolute;
  top: 100%;
  left: 0;
}
```

選択肢のリストが隠れている状態を扱うための追加クラスも必要です。これはアクティブ状態と開いた状態で完全には一致しない相違点を扱うために必要です。

```css
.select .optList.hidden {
  /* これはアクセシブルな方法でリストを隠すための簡単な方法です。
     アクセシビリティについては最後に説明します。*/
  max-height: 0;
  visibility: hidden;
}
```

> **メモ:** 選択肢のリストに高さと幅を与えないように `transform: scale(1, 0)` も使えます。

### 美化

基本的な機能性を適切に置きましたので、戯れを始められます。以下は何ができるかの例であり、本記事の冒頭で示したスクリーンショットに一致するものです。とはいえ、自由に実験して何ができるかを見てみるとよいでしょう。

```css
.select {
  /* 算出結果は、ほとんどのブラウザーで既定値である 1em が 16px を想定します。
     px から em への変換がわからない場合は http://riddle.pl/emcalc/ を試してください */
  font-size: 0.625em; /* この値 (10px) は、本コンテキストにおける新たなフォントサイズの em 単位値です。*/
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  /* 後で追加する下向き矢印のためのスペースが必要です */
  padding: 0.1em 2.5em 0.2em 0.5em;
  width: 10em; /* 100px */

  border: 0.2em solid #000;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45);

  /* 最初の宣言は、線形グラデーションをサポートしないブラウザー向けのものです。*/
  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  /* 値がコントロールの幅より大きくなる可能性があるため、コントロールの幅を
     変更しないようにすることが必要です。内容物がオーバーフローした場合は、
     省略記号をつけるとよいでしょう。*/
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}
```

下向き矢印をデザインするための追加要素は不要です。代わりに {{cssxref("::after")}} 擬似要素を使用します。ただし、`select` クラスでシンプルな背景画像を使用することによる実装も可能です。

```css
.select:after {
  content: "▼"; /* Unicode 文字 U+25BC を使用します。 charset メタタグの設定を確認してください。 */
  position: absolute;
  z-index: 1; /* これは、矢印が選択肢のリストに重ならないようにするために重要です */
  top: 0;
  right: 0;

  box-sizing: border-box;

  height: 100%;
  width: 2em;
  padding-top: 0.1em;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
  text-align: center;
}
```

次に、選択肢のリストにスタイルを設定しましょう。

```css
.select .optList {
  z-index: 2; /* 選択肢のリストが下向き矢印より上になるよう、明示的に示します。*/

  /* ul 要素のデフォルトスタイルを初期化します。*/
  list-style: none;
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  /* 値の幅がコントロールの幅より小さい場合でも、選択肢のリストの幅が
     コントロール自体と同じになるようにします。*/
  min-width: 100%;

  /* リストが長すぎる場合に、内容物が垂直方向にはみ出します (自動的に
     垂直スクロールバーを表示します) が、水平方向にはみ出しません
     (幅を指定しないため、リストは自身の幅へ自動的に調整されます。
     それができない場合は、内容物が切り詰められます) 。*/
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;

  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);
  background: #f0f0f0;
}
```

選択肢向けに、ユーザーが選択しようとしている (あるいは選択した) 値を示せるようにするための `highlight` クラスを追加しなければなりません。

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

これで、3 つの状態の結果は以下のようになります。

<table>
  <thead>
    <tr>
      <th scope="col">通常状態</th>
      <th scope="col">アクティブ状態</th>
      <th scope="col">開いた状態</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{EmbedLiveSample("Basic_state",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_1")}}
      </td>
      <td>
        {{EmbedLiveSample("Active_state",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_1")}}
      </td>
      <td>
        {{EmbedLiveSample("Open_state",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_1")}}
      </td>
    </tr>
    <tr>
      <td colspan="3">
        <a
          href="/ja/docs/Learn/Forms/How_to_build_custom_form_controls/Example_1"
          >ソースコードを確認する</a
        >
      </td>
    </tr>
  </tbody>
</table>

## JavaScript でコントロールに命を吹き込む

デザインや構造の準備ができましたので、コントロールが実際に動作するようにするための JavaScript コードを記述できます。

> **警告:** 以下は教育目的のコードであり、そのままで使用するべきではありません。ご覧のとおり、さまざまな箇所に将来性のないものや古いブラウザーで動作しないものがあります。また、本番のコードでは最適化すべき冗長な箇所もあります。

### なぜ動作しないのか?

始める前に、重要事項を覚えておくことが大切です: **ブラウザー内の JavaScript は信頼できる技術ではありません**。カスタムコントロールを作成するとき、すべてをつなぎ合わせるために必要であることから JavaScript に頼らなければならないでしょう。ところが、JavaScript をブラウザーで実行できない場合がいくつもあります:

- ユーザーが JavaScript を無効にしている。これはもっともめずらしいケースです。ごく一部の人々は、今でも JavaScript を無効にしています。
- スクリプトが読み込まれません。これはよくあるケースのひとつであり、特にネットワークの信頼性が低いモバイル環境で発生します。
- スクリプトに不具合があります。この可能性は常に考慮すべきです。
- スクリプトがサードパーティのスクリプトと競合しています。これは、トラッキングのスクリプトやユーザーが使用するブックマークレットとの間で発生する可能性があります。
- スクリプトがブラウザーの拡張機能 (Firefox の [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) 拡張機能や Chrome の [ScriptBlock](https://chrome.google.com/webstore/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba) 拡張機能など) と競合したり、拡張機能の影響を受けたりしています。
- ユーザーが古いブラウザーを使用しており、必要な機能のいずれかがサポートされていません。これは、最先端の API を使用するときに頻繁に発生します。
- ユーザーは JavaScript が完全にダウンロード、解析、実行される前にコンテンツを操作します。

このようなリスクがあるため、JavaScript が動作しない場合に何が起きるかを注意深く考えることが重要です。この問題について詳しく扱うのは、スクリプトをどれだけ汎用および再利用可能にしたいかと密接に関わりますので本記事の範囲を外れますが、本サンプルでは基本的な部分について考えていきます。

本記事の例では、JavaScript コードが実行されない場合に標準の {{HTMLElement("select")}} 要素にフォールバックします。われわれのコントロールと {{HTMLElement("select")}}を導入し、いずれが表示されるかは body 要素のり class に依存します。読み込みに成功したとき、body 要素の class がコントロールの関数をなす script により更新されます。

これを実現するには、2 つのことが必要です。

第一に、カスタムコントロールを使用する前に通常の {{HTMLElement("select")}} 要素を追加することが必要です。実際は、これは残りのフォームデータと共にカスタムコントロールのデータを送信できるようにするために必要です。詳しくは後述します。

```html
<body class="no-widget">
  <form>
    <select name="myFruit">
      <option>Cherry</option>
      <option>Lemon</option>
      <option>Banana</option>
      <option>Strawberry</option>
      <option>Apple</option>
    </select>

    <div class="select">
      <span class="value">Cherry</span>
      <ul class="optList hidden">
        <li class="option">Cherry</li>
        <li class="option">Lemon</li>
        <li class="option">Banana</li>
        <li class="option">Strawberry</li>
        <li class="option">Apple</li>
      </ul>
    </div>
  </form>
</body>
```

第二に、スクリプトが実行されていない場合はカスタムコントロールを、実行されている場合は「本物の」 {{HTMLElement("select")}} 要素を視覚的に隠すことができます。既定値では、 HTML コードはカスタムコントロールを隠します。

```css
.widget select,
.no-widget .select {
  /* この CSS セレクターの基本的な意味は:
     - body のクラスを "widget" に設定して、本物の {{HTMLElement("select")}} 要素を隠す
     - または body のクラスを変更せずに "no-widget" のままにしておくことで、
       クラスが "select" である要素が隠される */
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

この CSS は要素の 1 つを見えなくしますが、スクリーンリーダーからは利用できます。

ここで、スクリプトを実行するか否かを判断するための JavaScript スイッチが必要になります。このスイッチはとても簡単です: ページを読み込むときにスクリプトを実行したら、`no-widget` クラスを削除して `widget` クラスを追加します。これにより {{HTMLElement("select")}} 要素やカスタムコントロールの可視性を切り替えます。

```js
window.addEventListener("load", () => {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});
```

<table>
  <thead>
    <tr>
      <th scope="col">JS なし</th>
      <th scope="col">JS あり</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{EmbedLiveSample("No_JS",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_2")}}
      </td>
      <td>
        {{EmbedLiveSample("JS",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_2")}}
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <a
          href="/ja/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2"
          >ソースコードを確認する</a
        >
      </td>
    </tr>
  </tbody>
</table>

> **メモ:** コードを本当に汎用かつ再利用可能にしたい場合はクラスを切り替えるのではなく、単に {{HTMLElement("select")}} 要素を隠すためのコントロールのクラスを追加して、ページ内にあるすべての {{HTMLElement("select")}} 要素の後ろにカスタムコントロールを表す DOM ツリーを動的に追加する方がはるかによいでしょう。

### 作業をより簡単に

作成しようとしているコードでは、必要な作業すべてのために標準の JavaScript と DOM API を使用するでしょう。ここで使用するつもりである機能は以下のとおりです:

1. {{domxref("element.classList","classList")}}
2. {{domxref("EventTarget.addEventListener","addEventListener()")}}
3. {{domxref("NodeList.forEach()")}}
4. {{domxref("element.querySelector","querySelector()")}} および {{domxref("element.querySelectorAll","querySelectorAll()")}}

### イベントコールバックを作成する

基盤が整いましたので、ユーザーがコントロールと対話するたびに使用されるすべての関数を定義し始めることができます。

```js
// この関数は、カスタムコントロールを非アクティブにしたいときに使用します。
// 引数は 1 つあります。
// select : 非アクティブにする `select` クラスの DOM ノード
function deactivateSelect(select) {
  // コントロールがアクティブではないときは何もしません。
  if (!select.classList.contains("active")) return;

  // カスタムコントロールの選択肢のリストを取得することが必要です。
  const optList = select.querySelector(".optList");

  // 選択肢のリストを閉じます。
  optList.classList.add("hidden");

  // そして、カスタムコントロール自身を非アクティブにします。
  select.classList.remove("active");
}

// この関数は、ユーザーがコントロールをアクティブ/非アクティブにしたがっているときに使用します。
// (順番に、他の選択操作を無効にする）
// 引数は 2 つあります。
// select : アクティブにする `select` クラスの DOM ノード
// selectList : `select` クラスであるすべての DOM ノードのリスト
function activeSelect(select, selectList) {
  // コントロールがすでにアクティブであるときは何もしません。
  if (select.classList.contains("active")) return;

  // すべてのカスタムコントロールを非アクティブにすることが必要です。
  // deactivateSelect 関数は forEach コールバック関数の要件を
  // すべて満たしていますので、仲介する無名関数を使用せずに
  // 直接使用しています。
  selectList.forEach(deactivateSelect);

  // そして、指定されたコントロールをアクティブ状態にします。
  select.classList.add("active");
}

// この関数は、ユーザーが選択肢のリストを開く/閉じることを求めたときに使用します。
// 引数は 1 つあります:
// select : 表示を切り替えるリストの DOM ノード
function toggleOptList(select) {
  // リストはコントロールから確保します。
  const optList = select.querySelector(".optList");

  // リストのクラスを表示/非表示に切り替えます。
  optList.classList.toggle("hidden");
}

// この関数は、選択肢を強調したいときに使用します。
// 引数は 2 つあります。
// select : 強調する選択肢を包含する `select` クラスの DOM ノード
// option : 強調する `option` クラスの DOM ノード
function highlightOption(select, option) {
  // カスタムコントロールで使用可能なすべての選択肢のリストを取得します。
  const optionList = select.querySelectorAll(".option");

  // すべての選択肢から強調効果を取り除きます。
  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  // 適切な選択肢を強調します。
  option.classList.add("highlight");
}
```

以上が、カスタムコントロールのさまざまな状態を制御するために必要なもののすべてです。

次に、これらの関数と適切なイベントを関連づけます。

```js
// ドキュメントが読み込まれたときのイベントの関連づけを制御します。
window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  // 各々のコントロールは初期化が必要です。
  selectList.forEach((select) => {
    // すべての `option` も同様です。
    const optionList = select.querySelectorAll(".option");

    // ユーザーが選択肢にマウスポインタを乗せるたびに、その選択肢を強調します。
    optionList.forEach((option) => {
      option.addEventListener("mouseover", () => {
        // メモ: 変数 `select` および `option` は、関数呼び出しのスコープ内でのみ
        // 使用可能なクロージャです。
        highlightOption(select, option);
      });
    });

    // ユーザーが独自の select 要素でクリックするたびに
    select.addEventListener("click", (event) => {
      // メモ: 変数 `select` は、関数呼び出しのスコープ内でのみ
      // 使用可能なクロージャです。

      // 選択肢のリストの可視性を切り替えます。
      toggleOptList(select);
    });

    // コントロールが再びフォーカスを得た場合
    // ユーザーがコントロールをクリックしたり、コントロールへアクセスするために
    // Tab キーを使用するたびに、コントロールはフォーカスを得ます。
    select.addEventListener("focus", (event) => {
      // メモ: 変数 `select` および `selectList` は、関数呼び出しのスコープ内でのみ
      // 使用可能なクロージャです。

      // コントロールをアクティブにします。
      activeSelect(select, selectList);
    });

    // コントロールがフォーカスを失った場合
    select.addEventListener("blur", (event) => {
      // メモ: 変数 `select` は、関数呼び出しのスコープ内でのみ
      // 使用可能なクロージャです。

      // コントロールを非アクティブにします。
      deactivateSelect(select);
    });

    // ユーザーが`esc`を押した場合にフォーカスを外す
    select.addEventListener("keyup", (event) => {
      // deactivate on keyup of `esc`
      if (event.key === "Escape") {
        deactivateSelect(select);
      }
    });
  });
});
```

この時点でコントロールは設計どおりに状態が変わりますが、コントロール値はまだ更新されません。次の章でこれを扱います。

| Live example                                                                                                |
| ----------------------------------------------------------------------------------------------------------- |
| {{EmbedLiveSample("Change_states",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_3")}} |
| [ソースコードを確認する](/ja/docs/Learn/Forms/How_to_build_custom_form_controls/Example_3)                  |

### コントロールの値を制御する

コントロールが動作するようになりましたので、ユーザーの入力に従って値を更新して、フォームデータと共にその値を送信できるようにするコードを追加しなければなりません。

これを行うもっとも簡単な方法は、覆い隠したネイティブコントロールを使用することです。そのようなコントロールはブラウザーが提供するすべての組み込みのコントロールと共に値の経過を保持しており、フォームを送信するときは通常どおりに値を送信します。これらすべてを行えるようにするために、車輪の再発明を行うのは無駄です。

先ほど見たように、アクセシビリティの理由からフォールバック手段としてすでにネイティブの select コントロールを使用しています。単純に、その値をカスタムコントロールの値と同期することができます:

```js
// この関数は、表示される値を更新してネイティブコントロールの値と同期します。
// 引数は 2 つあります:
// select : 更新する値を持つ `select` クラスの DOM ノード
// index  : 選択される値のインデックス
function updateValue(select, index) {
  // 指定されたカスタムコントロール向けのネイティブコントロールを取得することが必要です。
  // この例では、ネイティブコントロールはカスタムコントロールの兄弟です。
  const nativeWidget = select.previousElementSibling;

  // カスタムコントロールの値のプレースホルダーの取得も必要です。
  const value = select.querySelector(".value");

  // そして、選択肢の全リストが必要です。
  const optionList = select.querySelectorAll(".option");

  // 選択した値のインデックスを、selectedIndex に設定します。
  nativeWidget.selectedIndex = index;

  // 上記に応じて、値のプレースホルダーも更新します。
  value.innerHTML = optionList[index].innerHTML;

  // そして、カスタムコントロールで対応する選択肢を強調します。
  highlightOption(select, optionList[index]);
}

// この関数は、ネイティブコントロールで現在選択されているインデックスを返します。
// 引数は 1 つあります:
// select : ネイティブコントロールに関係する `select` クラスの DOM ノード
function getIndex(select) {
  // 指定されたカスタムコントロール向けのネイティブコントロールにアクセスすることが必要です。
  // この例では、ネイティブコントロールはカスタムコントロールの兄弟です。
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}
```

これら 2 つの関数で、ネイティブコントロールとカスタムコントロールを関連づけることができます:

```js
// ドキュメントが読み込まれたときのイベントの関連づけを制御します。
window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  // 各々のコントロールは初期化が必要です。
  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");
    const selectedIndex = getIndex(select);

    // カスタムコントロールがフォーカスを得られるようにします。
    select.tabIndex = 0;

    // ネイティブコントロールがフォーカスを得ないようにします。
    select.previousElementSibling.tabIndex = -1;

    // デフォルトで選択されている値が正しく表示されるようにします。
    updateValue(select, selectedIndex);

    // ユーザーが選択肢をクリックするのに応じて値を更新します。
    optionList.forEach((option, index) => {
      option.addEventListener("click", (event) => {
        updateValue(select, index);
      });
    });

    // フォーカスがあるコントロールでユーザーがキーボードを使用するのに応じて、値を更新します。
    select.addEventListener("keyup", (event) => {
      let index = getIndex(select);

      // ユーザーが下矢印キーを押すと、次の選択肢にジャンプします。
      if (event.key === "ArrowDown" && index < optionList.length - 1) {
        index++;
      }

      // ユーザーが上矢印キーを押すと、前の選択肢にジャンプします。
      if (event.key === "ArrowUp" && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

上記のコードで、 [`tabIndex`](/ja/docs/Web/API/HTMLElement/tabIndex) プロパティを使用していることは注目に値します。このプロパティは、ネイティブコントロールにフォーカスが当たらないようにすることと、ユーザーがキーボードやマウスを使用するとカスタムコントロールがフォーカスを得るようにするために必要です。

これで完了です! 結果は以下のとおりです。

| Live example                                                                                                |
| ----------------------------------------------------------------------------------------------------------- |
| {{EmbedLiveSample("Change_states",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_4")}} |
| [ソースコードを確認する](/ja/docs/Learn/Forms/How_to_build_custom_form_controls/Example_4)                  |

ちょっと待ってください、本当に終わったのでしょうか?

## アクセシブルにする

フル機能のセレクトボックスとはかけ離れていますが動作するものはできましたし、よく動作しています。しかし、私たちが行ってきたことは DOM の操作にすぎません。これには実際のセマンティクスがなく、またセレクトボックスのように見えていてもブラウザーの視点からはそうではないため、支援技術はそれがセレクトボックスであるとは理解できません。つまり、このきれいなセレクトボックスはアクセシブルではありません!

幸いなことに解決策があり、それは [ARIA](/ja/docs/Web/Accessibility/ARIA) と呼ばれます。ARIA は "Accessible Rich Internet Application" を表し、その [W3C 仕様](http://www.w3.org/TR/wai-aria/) は私たちがここで行っていることに特化して設計されています: ウェブアプリケーションやカスタムコントロールをアクセシブルにします。これは基本的には、私たちが作り出した要素がネイティブコントロールとして通るかのように、役割や状態や特性をより説明できるようにするために HTML を拡張する属性のセットです。これらの属性の使用はとても簡単ですので、行ってみましょう。

### `role` 属性

[ARIA](/ja/docs/Web/Accessibility/ARIA) で使用される主要な属性が、[`role`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques) 属性です。[`role`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques) 属性は、要素を何に使用するかを定義する値を受け入れます。それぞれのロールは、自身の要件や動作を定義します。本記事の例では、ロール [`listbox`](/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role) を使用します。これは "composite role" であり、このロールの要素は子要素を持ち、またそれぞれの子要素も特定のロールを持ちます (この例では、ロール `option` の子要素が少なくとも 1 つ)。

また、ARIA は標準の HTML マークアップにデフォルトで適用されるロールを定義することも特筆に値します。例えば、{{HTMLElement("table")}} 要素はロール `grid` に、{{HTMLElement("ul")}} 要素はロール `list` にマッチします。{{HTMLElement("ul")}} 要素を使用しているため、私たちのコントロールのロール `listbox` が、{{HTMLElement("ul")}} 要素のロール `list` を置き換えるようにしなければなりません。そのために、ロール `presentation` を使用します。このロールは要素に特別な意味はないことを示せるようにするためのものであり、単に情報を与えるために使用されます。これを {{HTMLElement("ul")}} 要素に適用します。

ロール [`listbox`](/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role) に対応するため、HTML を以下のように更新する必要があります。

```html
<!-- 最初の要素に role="listbox" 属性を追加します -->
<div class="select" role="listbox">
  <span class="value">Cherry</span>
  <!-- ul 要素に role="presentation" を追加します -->
  <ul class="optList" role="presentation">
    <!-- すべての li 要素に role="option" 属性を追加します -->
    <li role="option" class="option">Cherry</li>
    <li role="option" class="option">Lemon</li>
    <li role="option" class="option">Banana</li>
    <li role="option" class="option">Strawberry</li>
    <li role="option" class="option">Apple</li>
  </ul>
</div>
```

> **メモ:** `role` 属性と `class` 属性の両方を含める方法は、[CSS 属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)に対応しない古いブラウザーをサポートしたい場合にのみ必要です。

### `aria-selected` 属性

[`role`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques) を使用するだけでは不十分です。[ARIA](/ja/docs/Web/Accessibility/ARIA) は、状態や特性を表す多くの属性も提供します。これらをより多くまた適切に使用すると、コントロールが支援技術にもっと良く理解されるようになります。ここでは、使用する属性を 1 つに絞ります。 `aria-selected` です。

`aria-selected` 属性は、どの選択肢が現在選択されているかを示すために使用します。これにより、支援技術はユーザーに現在何が選択されているかを伝えることができます。ここではユーザーが選択肢を選択するたびに、選択された選択肢を示すためにこの属性を JavaScript で動的に使用します。このために、`updateValue()` 関数の変更が必要です。

```js
function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll('[role="option"]');

  // すべての選択肢が選択されていないようにします。
  optionList.forEach((other) => {
    other.setAttribute("aria-selected", "false");
  });

  // 指定された選択肢が選択されているようにします。
  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}
```

スクリーンリーダーにオフスクリーン select に焦点をあてて他のスタイルを無視するようにした法が簡単に見えますが、これはアクセシブルな解決策ではありません。スクリーンリーダーは盲目の人だけのものではありません。低視力や、完全な視力の人もこれを使います。このため、スクリーンリーダーをオフスクリーン要素だけに焦点をあてるようにはできません。

以下がこれらの変更を施した最終結果です （[NVDA](https://www.nvaccess.org/) や [VoiceOver](https://www.apple.com/accessibility/vision/) などの支援技術でコントロールを使用してみても、よい感触を得られるでしょう）。

| Live example                                                                                                |
| ----------------------------------------------------------------------------------------------------------- |
| {{EmbedLiveSample("Change_states",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_5")}} |
| [ソースコードを確認する](/ja/docs/Learn/Forms/How_to_build_custom_form_controls/Example_5)                  |

もっと先に進むには、この例でのコードは汎用性や再利用性に改善が必要です。これは課題として挑戦できます。この 2 つのヒントを挙げると:すべての関数で最初の引数は同じで、つまりこれらの関数は同じコンテキストが必要です。そのコンテキストを共有するオブジェクトを作るのが賢明です。

## 他の方法: ラジオボタンを使う

上の例では、非動的な HTML、CSS、JavaScript を使って {{htmlelement('select')}} 要素を再発明しました。この select は限られた選択肢から 1 つが選択され、それは {{htmlelement('input/radio', 'radio')}} ボタンのグループと同様な機能です。

このため、代わりにラジオボタンを使って再発明できます。このオプションを見てみましょう。

完全に意味のある、アクセシブルで、順序のない、関連する{{htmlelement('label')}}つきの{{htmlelement('input/radio','radio')}} ボタンのリストから始めます、グループ全体を適切な意味のある{{htmlelement('fieldset')}} と{{htmlelement('legend')}} のペアにラベルづけします。

```html
<fieldset>
  <legend>Pick a fruit</legend>
  <ul class="styledSelect">
    <li><input type="radio" name="fruit" value="Cherry" id="fruitCherry" checked><label for="fruitCherry">Cherry</label></li>
    <li><input type="radio" name="fruit" value="Lemon" id="fruitLemon"><label for="fruitLemon">Lemon</label></li>
    <li><input type="radio" name="fruit" value="Banana" id="fruitBanana"><label for="fruitBanana"">Banana</label></li>
    <li><input type="radio" name="fruit" value="Strawberry" id="fruitStrawberry"><label for="fruitStrawberry">Strawberry</label></li>
    <li><input type="radio" name="fruit" value="Apple" id="fruitApple"><label for="fruitApple">Apple</label></li>
  </ul>
</fieldset>
```

(legend/fieldset ではなく)ラジオボタンリストに少しスタイルづけをして、前の例と同じ見た目にし、完了したことがわかるようにします。

```css
.styledSelect {
  display: inline-block;
  padding: 0;
}
.styledSelect li {
  list-style-type: none;
  padding: 0;
  display: flex;
}
.styledSelect [type="radio"] {
  position: absolute;
  left: -100vw;
  top: -100vh;
}
.styledSelect label {
  margin: 0;
  line-height: 2;
  padding: 0 0 0 4px;
}
.styledSelect:not(:focus-within) input:not(:checked) + label {
  height: 0;
  outline: none;
  overflow: hidden;
}
.styledSelect:not(:focus-within) input:checked + label {
  border: 0.2em solid #000;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45);
}
.styledSelect:not(:focus-within) input:checked + label::after {
  content: "▼";
  background: black;
  float: right;
  color: white;
  padding: 0 4px;
  margin: 0 -4px 0 4px;
}
.styledSelect:focus-within {
  border: 0.2em solid #000;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45);
}
.styledSelect:focus-within input:checked + label {
  background-color: #333;
  color: #fff;
  width: 100%;
}
```

JavaScript なしで少しの CSS にて、ラジオボタンのリストをスタイルづけしてチェック済み項目のみを表示することができます。フォーカスが`<fieldset>`内の `<ul>` に来ると、リストは開いて、上下左右の矢印が前後の項目を選択するのに使えます。次で試してください:

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

これはある程度、JavaScript なしで動作します。JavaScript が失敗しても動作する、われわれのカスタムコントロールど同じものを作ってきました。よい解決策でしょう？これはキーボードでは動作しますが、マウスクリックではそうなりません。ネイティブな意味づけのない要素を作るフレームワークに依存する代わりに、ウェブ標準をカスタムコントロールの基礎として使った方が意味があります。しかし、われわれのコントロールは `<select>` が自ずと持つ機能と同じものを備えていません。

いい面として、このコントロールはスクリーンリーダーにとって完全にアクセシブルでキーボードで完全に操作できます。しかし、このコントロールは {{htmlelement('select')}} 要素の置き換えではありません。異なる機能や足りない機能があります。例えば、4 つの矢印は選択肢を操作できますが、最後のボタンで下を押すと最初のボタンに移動します。`<select>` のように上端、下端で止まりません。

この足りない機能の追加は、読者の課題としておきます。

## まとめ

独自のフォームコントロールの作成方法を見てきましたが、ご覧いただいたようにこれは容易なことではありません。独自のカスタムコントロールを作る前に、HTML に要求を十分に満たす代替要素がないかを検討してください。本当にカスタムコントロールを作成する必要がある場合、サードパーティのライブラリーに頼るほうが簡単かつよいことも少なくありません。独自作成する場合、既存の要素を編集するか、準備されたコントロールを実装するフレームワークを使うようにして、実用的でアクセシブルなフォームコントロールの作成は見た目より複雑であることを忘れないでください。

自分でコーディングする前に検討するとよいライブラリーをいくつか紹介します。

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

ラジオボタン、独自 JavaScript 、またはサードパーティライブラリーで代替コントロールを作る場合、アクセシブルかつ機能への耐性を高めましょう。すなわち Web 標準の実装状況がまちまちである、多様なブラウザーで良好に動作できるようにすることが必要です。楽しんでください!
