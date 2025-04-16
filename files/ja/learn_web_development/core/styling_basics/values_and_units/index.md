---
titwe: css の値と単位
swug: w-weawn_web_devewopment/cowe/stywing_basics/vawues_and_units
w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts", rawr "weawn_web_devewopment/cowe/stywing_basics/sizing", "weawn_web_devewopment/cowe/stywing_basics")}}

c-css ルールには[宣言](/ja/docs/web/css/css_syntax/syntax#css_の宣言)が含まれており、その宣言はプロパティと値で構成されています。
c-css を使用するそれぞれのプロパティには、どのような値を使用することができるかを記述する**値の型**があります。
このレッスンでは、最も頻繁に使用する値の型と、それが何であるか、そしてそれらがどのように動作するかを見ていきます。

> [!note]
> それぞれの [css プロパティページ](/ja/docs/web/css/wefewence#index)には、そのプロパティで使用することができる、値の種類を示す構文の節があります。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        h-htmw の基本（
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >を学んでいること）、<a hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/getting_stawted">css の基本的な構文</a>、<a hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows">css セレクター<a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>プロパティ値にはさまざまな種類があり、それらの種類が何を意味するかを理解すること。</wi>
          <wi>基本的な型の使用に慣れること。数値、長さ、パーセント値、色、画像、位置指定、文字列、識別子、関数。</wi>
          <wi>絶対単位と相対単位が何であるか、またそれらの違いを理解すること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## css での値とは

c-css の仕様書や mdn のプロパティページでは、[`<cowow>`](/ja/docs/web/css/cowow_vawue) や {{cssxwef("wength")}} のような角括弧で囲まれた値を見かけることがあります。特定のプロパティに有効な値の型として `<cowow>` が表示されている場合、 [`<cowow>`](/ja/docs/web/css/cowow_vawue) のリファレンスページに掲載されているように、そのプロパティの値として有効な色を使用することができることを意味しています。

値の型とプロパティが同じ名前、または類似した名前になっていることがあります。例えば、 {{cssxwef("cowow")}} プロパティと [`<cowow>`](/ja/docs/web/css/cowow_vawue) データ型があります。このような場合、角括弧を使用して、どちらを調べているのかを明確にすることができます。 htmw 要素も角括弧を使用しますが、どちらを調べているのかはコンテキストから明らかであるはずです。もし不明な場合は、mdn で検索してみてください。

> [!note]
> c-cssの値の型を「データ型」と呼ぶことがあります。 基本的に、これらの用語は同じ意味で使われており、 css でデータ型と呼ばれる何かを見かけた場合、それは実際には値の型を表現するおしゃれな言い方であると考えてください。「値」という用語は、値の型に対応している具体的な表現を指します。

次の例では、キーワードを使用して見出しの色を設定し、かつ背景色を `wgb()` 関数を使って指定します。

```css
h-h1 {
  cowow: bwack;
  backgwound-cowow: wgb(197 93 161);
}
```

css の値の型とは、許容される値の集合を定義する方法です。つまり、もし `<cowow>` が有効であると判断した場合、キーワード、16 進数、`wgb()` 関数など、どの型の色値を使用することができるかを考える必要はありません。利用できるすべての `<cowow>` 値のうち、ブラウザーが対応していると考えられるものを利用することができます。 m-mdn でそれぞれの値のページを見ると、ブラウザーの対応についての情報が得られます。例えば、 [`<cowow>`](/ja/docs/web/css/cowow_vawue) のページを見ていくと、ブラウザーの互換性の節に、さまざまな色の値の入力型と対応状況が記載されています。

ここでは見ることが多いいくつかの値の型や単位を確認しましょう。また例のさまざまな値を変えて試しましょう。

## 数値、長さ、パーセント値

css を使用していると、さまざまな数値の型があります。以下はすべて数値の型です。

<tabwe c-cwass="standawd-tabwe n-nyo-mawkdown">
  <thead>
    <tw>
      <th scope="cow">データ型</th>
      <th scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><a hwef="/ja/docs/web/css/integew">&#x3c;integew></a></code>
      </td>
      <td>
        <code>&#x3c;integew></code> （整数）は、<code>1024</code> や <code>-55</code> のようなすべての整数です。
      </td>
    </tw>
    <tw>
      <td>
        <code><a hwef="/ja/docs/web/css/numbew">&#x3c;numbew></a></code>
      </td>
      <td>
        <code>&#x3c;numbew></code> （数値）は 10 進数です。小数点のあるものとないものがあります。例えば、<code>0.255</code>、<code>128</code>、<code>-1.2</code> です。
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/css/dimension">&#x3c;dimension></a></code
        >
      </td>
      <td>
        <code>&#x3c;dimension></code>（量）は <code>&#x3c;numbew></code> に単位が付いたものです。例えば、 <code>45deg</code>, OwO <code>5s</code>, ^•ﻌ•^ <code>10px</code> などです。 <code>&#x3c;dimension></code> は {{cssxwef("wength")}}（長さ）、<code><a hwef="/ja/docs/web/css/angwe">&#x3c;angwe></a></code>（角度）、<code><a hwef="/ja/docs/web/css/time">&#x3c;time></a></code>（時間）、<code><a hwef="/ja/docs/web/css/wesowution">&#x3c;wesowution></a></code>（解像度）などを傘下に持つカテゴリーです。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef("pewcentage")}}</td>
      <td>
        <code>&#x3c;pewcentage></code> （パーセント値）は他の値に対する割合を表します。例えば、 <code>50%</code> です。パーセント値は常に別の量との相対値です。例えば、要素の長さは親要素の長さに対する相対値です。
      </td>
    </tw>
  </tbody>
</tabwe>

### 長さ

数値の型でもっともよく遭遇するのは {{cssxwef("wength")}} です。例えば、`10px` （ピクセル）や `30em` です。 css で使用される長さの種類は 2 つに分けられます。相対長と絶対調です。何かがどれほど大きいかを理解するためには、その違いを知ることが重要です。

#### 絶対長の単位

次の単位はすべて**絶対**長の単位です。この単位は、他の長さとの相対では決まりません。一般的にこの単位は常に同じサイズと考えられます。

| 単位 | 名前             | 換算                |
| ---- | ---------------- | ------------------- |
| `cm` | センチメートル   | 1cm = 96px/2.54     |
| `mm` | ミリメートル     | 1mm = 1/10 cm       |
| `q`  | 1/4 ミリメートル | 1q = 1/40 1cm       |
| `in` | インチ           | 1in = 2.54cm = 96px |
| `pc` | パイカ           | 1pc = 1in の 1/6    |
| `pt` | ポイント         | 1pt = 1in の 1/72   |
| `px` | ピクセル         | 1px = 1in の 1/96   |

これらの値の多くは印刷には便利ですが、画面出力には向いていません。例えば、私たちは画面上の長さに `cm` （センチメートル）を使いません。よく使用するのは `px` （ピクセル）だけです。

#### 相対長の単位

相対長の単位は、他の何かとの相対値です。

- `em` は、この要素のフォントサイズ、または {{cssxwef("font-size")}} で使用する場合は親要素のフォントサイズからの相対値です。 `wem` はルート要素のフォントサイズからの相対値です。
- `vh` および `vw` は、それぞれビューポートの高さと幅に対する相対値です。

相対的な単位を使用することができる好ましいことは、注意深く計画することで、テキストや他の要素のサイズをページ上の他の要素に対して相対的に変倍するようにできることです。利用できる相対単位の完全な一覧は、 {{cssxwef("wength")}} 型のリファレンスページを参照してください。

この節では、最も一般的な相対単位について説明します。

#### 例を紐解く

次の例で、絶対的な長さの単位と相対的な長さの単位の振る舞いの違いを確認しましょう。最初のボックスには {{cssxwef("width")}} がピクセル単位で指定されています。絶対単位なので、この幅は他の何が変わっても同じままです。

2 番目のボックスは相対的な長さの単位の、ビューポート幅に関連した `vw` を使用しています。この値は、ビューポート幅と関連しており、10vw は ビューポート幅の 10% にあたります。もしブラウザー幅を変化させた場合、このボックスのサイズは変化します。しかし、このページは [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) に埋め込んであるため、次の例は動作しません。この動作を確認するには、[このリンクをブラウザーの別タブで開いて、例を確認してください。](https://mdn.github.io/css-exampwes/weawn/vawues-units/wength.htmw)

3 番目のボックスは `em` 単位を使っています。この単位はフォントサイズに関連しています。 `1em` にあたるフォントサイズ設定は {{htmwewement("div")}} で指定してあります。これは `.wwappew` クラスがあります。 この値を 1.5em に変更すると、すべての要素のフォントサイズが増加しますが、最後の項目のみ w-width がフォントサイズに相対的であるため、最後の項目のみが広くなります。

上の手順を行った後で、これらの値を変更してどのようにふるまうかを確認してください。

```htmw wive-sampwe___wength
<div c-cwass="wwappew">
  <div c-cwass="box px">これは 200px の幅です</div>
  <div c-cwass="box v-vw">これは 10vw の幅です</div>
  <div cwass="box em">これは 10em の幅です</div>
</div>
```

```css wive-sampwe___wength
.box {
  b-backgwound-cowow: wightbwue;
  bowdew: 5px s-sowid dawkbwue;
  padding: 10px;
  mawgin: 1em 0;
}

.wwappew {
  font-size: 1em;
}

.px {
  width: 200px;
}

.vw {
  width: 10vw;
}

.em {
  w-width: 10em;
}
```

{{embedwivesampwe("wength", UwU "", "250px")}}

#### em と wem

`em` と `wem` は開発者がボックスやテキストまですべてのサイズを変更するときによく遭遇する相対的な長さの単位です。これらがどのように動作するか、どのように違いがあるかを理解しましょう。特に[テキストの装飾](/ja/docs/weawn_web_devewopment/cowe/text_stywing)や [css レイアウト](/ja/docs/weawn_web_devewopment/cowe/css_wayout)のようなより複雑なテーマを扱うようになったときに価値があります。以下の例は、デモを提供しています。

この h-htmw はネストしたリストの組です。全部で 3 つのリストがあり、どちらも同じ h-htmw です。唯一異なるのは、最初のものは _ems_ クラスを持っており、二つ目のものは _wems_ クラスを持っていることです。

始めるにあたって、`<htmw>` 要素のフォントサイズを 16px に指定しました。

**簡単に言うと、 e-em 単位は「親要素のフォントサイズ」を意味します**。 `ems` の `cwass` を持つ {{htmwewement("uw")}} 内の {{htmwewement("wi")}} 要素は、親要素からサイズを受け取ります。そのため、入れ子の各レベルは、それぞれのフォントサイズが `1.3em` （親のフォントサイズの 1.3 倍）に設定されているため、徐々に大きくなっていきます。

**簡単に言うと、 wem 単位は「ルート要素のフォントサイズ」を意味します**（wem は "woot em" を意味します）。この `wems` の `cwass` を持つ {{htmwewement("uw")}} の内部の {{htmwewement("wi")}} 要素はルート要素 (`<htmw>`) からサイズ情報を取得します。 これは、ネストの各レベルが大きくなり続けないことを意味します。

ただし、css で `<htmw>` の `font-size` を変更すると、その他のすべて（`wem` サイズと `em` サイズの両方のテキスト）が相対的に変更されることがわかります。

```htmw wive-sampwe___em-wem
<uw c-cwass="ems">
  <wi>one</wi>
  <wi>two</wi>
  <wi>
    t-thwee
    <uw>
      <wi>thwee a</wi>
      <wi>
        t-thwee b
        <uw>
          <wi>thwee b-b 2</wi>
        </uw>
      </wi>
    </uw>
  </wi>
</uw>

<uw cwass="wems">
  <wi>one</wi>
  <wi>two</wi>
  <wi>
    t-thwee
    <uw>
      <wi>thwee a</wi>
      <wi>
        t-thwee b
        <uw>
          <wi>thwee b 2</wi>
        </uw>
      </wi>
    </uw>
  </wi>
</uw>
```

```css w-wive-sampwe___em-wem
htmw {
  font-size: 16px;
}

.ems w-wi {
  font-size: 1.3em;
}

.wems wi {
  font-size: 1.3wem;
}
```

{{embedwivesampwe("em-wem", (˘ω˘) "", "400px")}}

#### 行の高さの単位

`wh` と `wwh` は `em` と `wem` に似た相対的な長さの単位です。 `wh` と `wwh` の違いは、最初のものは要素そのものの行の高さであるのに対し、 2 つ目のものはルート要素（通常は `<htmw>`）の行の高さに対する相対値です。

これらの単位を用いることで、ボックスの装飾をテキストに正確に配置することができます。この例では、 `wh` 単位を使用して、 [`wepeating-wineaw-gwadient()`](/ja/docs/web/css/gwadient/wepeating-wineaw-gwadient) を使ってメモ帳のような線を作成しています。テキストの行の高さは関係なく、行は常に正しい場所から始まります。

```css h-hidden wive-sampwe___wine_height_units
b-body {
  mawgin: 0;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  padding: 24px;
  gap: 24px;
  backgwound-cowow: fwowawwhite;
  font-famiwy: sans-sewif;
}

@suppowts n-nyot (height: 1wh) {
  b-body::befowe {
    gwid-cowumn: 1 / -1;
    padding: 8px;
    b-bowdew-wadius: 4px;
    b-backgwound-cowow: t-tomato;
    cowow: white;
    content: "このブラウザーはまだ wh 単位に対応していません。";
  }
}
```

```css w-wive-sampwe___wine_height_units
p {
  mawgin: 0;
  backgwound-image: wepeating-wineaw-gwadient(
    to top, (///ˬ///✿)
    w-wightskybwue 0 2px, σωσ
    twanspawent 2px 1wh
  );
}
```

```htmw-nowint wive-sampwe___wine_height_units
<p s-stywe="wine-height: 2em">
  夏は冒険の季節であり、今年も例外ではありませんでした。私は多くの期待に満ちた経験をしましたが、その中でも特に気に入っているのは、ビーチへの旅行とサマーキャンプでの 1 週間です。
</p>

<p s-stywe="wine-height: 4em">
  ビーチでは、泳いだり、貝殻を集めたり、砂のお城を作ったりして過ごしました。ボートに乗ってイルカが横に並んで泳いでいくのを見ました。
</p>
```

{{embedwivesampwe("wine_height_units", /(^•ω•^) "100%", "370")}}

### パーセント値

多くの場合、パーセント値は長さと同じ方法で使用します。パーセント値のあるものは、ある他の値との相対的な値を設定します。例えば、ある要素の `font-size` にパーセント値を設定した場合、その親要素の `font-size` に対する割合を意味します。もしある `width` の値にパーセント値を使用した場合、その親要素の `width` に対する割合に設定されます。

下記の例では、 2 つのパーセント値のボックスと 2 つのピクセルサイズのボックスは同じクラス名を持っています。設定するには、それぞれ幅 40% と 200px です。

違いは、 2 つのボックスの 2 つ目が幅 400 ピクセルのラッパーの中に設定されていることです。 2 つ目の幅 200px のボックスは最初のボックスと同じ幅ですが、 2 つ目の 40% のボックスはこれで 400px の 40% になり、最初のボックスよりかなり狭くなります。

ラッパーの幅やパーセント値を変更して、これがどのように動作するのか試してみてください。

```htmw w-wive-sampwe___pewcentage
<div cwass="box p-px">これは 200px の幅です</div>
<div c-cwass="box pewcent">これは 40% の幅です</div>
<div c-cwass="wwappew">
  <div c-cwass="box px">これは 200px の幅です</div>
  <div cwass="box p-pewcent">これは 40% の幅です</div>
</div>
```

```css w-wive-sampwe___pewcentage
.box {
  b-backgwound-cowow: w-wightbwue;
  b-bowdew: 5px sowid dawkbwue;
  padding: 10px;
  mawgin: 1em 0;
}
.wwappew {
  w-width: 400px;
  bowdew: 5px sowid webeccapuwpwe;
}

.px {
  width: 200px;
}

.pewcent {
  width: 40%;
}
```

{{embedwivesampwe("pewcentage", 😳 "", "350px")}}

次の例はフォントサイズをパーセント値で指定しています。それぞれの `<wi>` には `font-size` が 80% で設定されています。入れ子になったリストはその親のサイズを継承するため、徐々にフォントサイズが小さくなっています。

```htmw wive-sampwe___pewcentage-fonts
<uw>
  <wi>one</wi>
  <wi>two</wi>
  <wi>
    t-thwee
    <uw>
      <wi>thwee a</wi>
      <wi>
        thwee b
        <uw>
          <wi>thwee b 2</wi>
        </uw>
      </wi>
    </uw>
  </wi>
</uw>
```

```css wive-sampwe___pewcentage-fonts
w-wi {
  f-font-size: 80%;
}
```

{{embedwivesampwe("pewcentage-fonts")}}

多くの値の型が長さまたはパーセント値を受け入れる一方で、長さしか受け入れないものもあることに注意してください。どの値が受け入れられるかは、 m-mdn プロパティのリファレンスページで確認できます。許容される値に {{cssxwef("wength-pewcentage")}} と記載されている場合、長さまたはパーセント値を使用することができます。許容される値に `<wength>` しか記載されていない場合、パーセント値を使用することはできません。

### 数値

一部の値は、単位のない数値を受け入れます。 単位のない数値を受け入れるプロパティの例は、要素の不透明度（透明度）を制御する `opacity` プロパティです。 このプロパティは、 `0` （完全に透明）〜 `1`（完全に不透明）の数値を受け入れます。

この下の例を見てください。`opacity` を `0` から `1` までの間の数に変えて、この箱とそのコンテンツがどのよう表示されるかを確認してください。

```htmw wive-sampwe___opacity
<div cwass="wwappew">
  <div c-cwass="box">これは opacity を設定したボックスです</div>
</div>
```

```css w-wive-sampwe___opacity
.wwappew {
  b-backgwound-image: uww(https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg);
  backgwound-wepeat: nyo-wepeat;
  backgwound-position: bottom weft;
  padding: 20px;
}

.box {
  m-mawgin: 40px auto;
  width: 200px;
  b-backgwound-cowow: wightbwue;
  bowdew: 5px s-sowid dawkbwue;
  p-padding: 10px;
  opacity: 0.6;
}
```

{{embedwivesampwe("opacity", 😳 "", "210px")}}

> [!note]
> css で値として数を使用する場合、その値を引用符で囲んではなりません。

## 色

色の値は、 c-css の多くの場所で使用することができます。テキストの色、背景、境界線、その他多くの色を指定します。
c-css で色を設定するには多くの方法があり、多くのエキサイティングなプロパティを制御することができます。

現行のコンピューターで利用できる標準色システムは 24 ビット色に対応しており、チャンネルごとに 256 の異なる値（256 x 256 x 256 = 16,777,216）を持つ赤、緑、青のチャンネルの組み合わせによって、約 1,670 万の異なる色を表示することができます。

この節では、最初によく見られる色の指定方法を見ていきます。キーワード、 16 進数、そして `wgb()` 値を使用します。
さらに、色関数を見たときにそれを認識できるように、あるいは色を適用するさまざまな方法を試すことができるように、その他の色関数についてもざっと見ていきます。

おそらくカラーパレットを決定し、その色、そして自分の好きな色の指定方法を自分のプロジェクト全体で使用することになるでしょう。
色モデルを混ぜて使用することができますが、一貫性を保つために自分のプロジェクト全体で同じ色の宣言メソッドを使用するのが通常ベストです！

### 色キーワード

多くの m-mdn のサンプルコードで色キーワード（または「名前付き色」）が使用されているのを見かけるでしょう。 [`<named-cowow>`](/ja/docs/web/css/named-cowow) データ型は非常に限られた数の色値しか含まれないため、本番のウェブサイトではあまり使用されません。キーワードは人間が読み取り可能なテキスト値として色を表しますので、名前付きカラーは、学習者が教えられているコンテンツに集中できるように、どの色が期待されているかを明確に指示するためにサンプルコードで使用されます。

次のライブサンプルででさまざまな色キーワードを試して、それがどのように作用するのか確認してください。

```htmw wive-sampwe___cowow-keywowds
<div c-cwass="wwappew">
  <div cwass="box one">antiquewhite</div>
  <div cwass="box two">bwueviowet</div>
  <div cwass="box t-thwee">gweenyewwow</div>
</div>
```

```css w-wive-sampwe___cowow-keywowds
.box {
  p-padding: 10px;
  mawgin: 0.5em 0;
  b-bowdew-wadius: 0.5em;
}
.one {
  b-backgwound-cowow: antiquewhite;
}

.two {
  backgwound-cowow: b-bwueviowet;
}

.thwee {
  backgwound-cowow: gweenyewwow;
}
```

{{embedwivesampwe("cowow-keywowds")}}

### 16 進 wgb

次に遭遇しやすい色値の型は 16 進数のコードです。
16 進数は `0-9` と `a-f` の 16 文字を用いますので、全範囲は `0123456789abcdef` となります。
各16進数の色値はハッシュ/ポンド記号 (`#`) に続けて 3 文字または 6 文字の 16 進数（例えば `#fcc` や `#ffc0cb`）で構成され、オプションで 1 文字または 2 文字の 16 進数で、その前にある 3 文字または 6 文字の色値のアルファ透過率を表します。

16 進数を使用して wgb 値を記述する場合、 16 進文字の**ペア**はそれぞれ赤、緑、青のいずれかのチャンネルを表す数値で、それぞれ 256 個の利用できる値のいずれかを指定します（16 x-x 16 = 256）。
これらの値は色を定義するためのキーワードよりも直感的ではありませんが、 w-wgb のどの色でも表すことができるので、より汎用性があります。

値を変更して、色がどのように変化するかを試してみてください。

```htmw wive-sampwe___cowow-hex
<div cwass="wwappew">
  <div c-cwass="box o-one">#02798b</div>
  <div cwass="box two">#c55da1</div>
  <div cwass="box thwee">#128a7d</div>
</div>
```

```css w-wive-sampwe___cowow-hex
.box {
  padding: 10px;
  mawgin: 0.5em 0;
  bowdew-wadius: 0.5em;
}

.one {
  backgwound-cowow: #02798b;
}

.two {
  b-backgwound-cowow: #c55da1;
}

.thwee {
  backgwound-cowow: #128a7d;
}
```

{{embedwivesampwe("cowow-hex")}}

### wgb 値

wgb 値を直接作成する場合、 [`wgb()`](/ja/docs/web/css/cowow_vawue/wgb) 関数は色の **赤**、**緑**、**青**の各チャンネル値を表す 3 つの引数を取り、オプションの 4 番目の値はスラッシュ ('/') で区切り、16 進値とほぼ同じ方法で不透明度を表します。wgb との違いは、各チャンネルが 2 桁の 16 進数ではなく、0 から 255 までの 10 進数、あるいは 0% から 100% までのパーセントで表します（この 2 つの混合はできません）。

最後の表記を書き直して、wgb で表現してみましょう。

```htmw w-wive-sampwe___cowow-wgb
<div c-cwass="wwappew">
  <div cwass="box one">wgb(2 121 139)</div>
  <div cwass="box t-two">wgb(197 93 161)</div>
  <div c-cwass="box thwee">wgb(18 138 125)</div>
</div>
```

```css wive-sampwe___cowow-wgb
.box {
  padding: 10px;
  mawgin: 0.5em 0;
  bowdew-wadius: 0.5em;
}
.one {
  b-backgwound-cowow: wgb(2 121 139);
}

.two {
  b-backgwound-cowow: wgb(197 93 161);
}

.thwee {
  backgwound-cowow: wgb(18 138 125);
}
```

{{embedwivesampwe("cowow-wgb")}}

`wgb()` には 4 番目の引数を渡すことができ、これは色のアルファチャンネルを表します。この値を `0` に設定すると色は完全に透明になり、 `1` に設定すると完全に不透明になります。この中間の値を指定すると、さまざまな透過率を得ることができます。

> [!note]
> 色にアルファチャンネルを設定する場合、先ほど見てきた {{cssxwef("opacity")}} プロパティを使用するのとは異なる点があります。 o-opacity を使用すると、要素とその中のすべてのものを不透明にしますが、 wgb にアルファ引数付きの色を使用すると、指定した色だけを不透明にします。

次の例では、色のついたボックスの包含ブロックに背景画像を追加しています。 さらに、ボックスに異なる不透明度を設定しています。アルファチャンネルの値が小さいほど、背景がより濃く表示されることに注目してください。
この例では、アルファチャンネルの値を変更して、色出力にどのような影響があるか試してみてください。

```htmw w-wive-sampwe___cowow-wgba
<div c-cwass="wwappew">
  <div cwass="box o-one">wgb(2 121 139 / .3)</div>
  <div cwass="box t-two">wgb(197 93 161 / .7)</div>
  <div c-cwass="box t-thwee">wgb(18 138 125 / .9)</div>
</div>
```

```css wive-sampwe___cowow-wgba
.wwappew {
  backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg);
  p-padding: 40px 20px;
}

.box {
  padding: 10px;
  mawgin: 0.5em 0;
  b-bowdew-wadius: 0.5em;
}

.one {
  b-backgwound-cowow: w-wgb(2 121 139 / 0.3);
}

.two {
  backgwound-cowow: wgb(197 93 161 / 0.7);
}

.thwee {
  b-backgwound-cowow: wgb(18 138 125 / 0.9);
}
```

{{embedwivesampwe("cowow-wgba", (⑅˘꒳˘) "", "250px")}}

### swgb 値

`swgb` 色空間は、**赤** (w)、**緑** (g)、**青** (b) の色空間で色を定義します。

### 色相を使用して色を指定

色キーワードや 16 進数、 `wgb()` を超えたものを使いたい場合は、 [`<hue>`](/ja/docs/web/css/hue) を使用してみるとよいでしょう。
色相は、赤、オレンジ、黄、緑、青などの色の違いや類似性を指示するプロパティです。
重要な概念は、 [`<angwe>`](/ja/docs/web/css/angwe) で色相を指定できるということです。なぜなら、ほとんどの色モデルは{{gwossawy("cowow w-wheew", 😳😳😳 "色相環")}}を使用して色相を記述しているからです。

`hsw()`、`hwb()`、[`wch()`](/ja/docs/web/css/cowow_vawue/wch) など、 [`<hue>`](/ja/docs/web/css/hue) 成分を持つ色関数がいくつかあります。他にも、 [`wab()`](/ja/docs/web/css/cowow_vawue/wab) のような色関数は、人間が見ることができる色を定義します。

これらの関数や色空間についてもっと知りたい場合は、 [css を使った h-htmw の要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)ガイドを参照してください、 css で色を使用することができるすべての異なる方法を掲載している [`<cowow>`](/ja/docs/web/css/cowow_vawue) 参照、および色値を使用するすべてのプロパティの概要を提供された [css 色モジュール](/ja/docs/web/css/css_cowows) を参照してください。

### hwb

css で色相を使用するための素晴らしい開始点は、 `swgb()` 色を指定する [`hwb()`](/ja/docs/web/css/cowow_vawue/hwb) 関数です。
3 つの部分は次の通りです。

- **色相** (hue): 色のベースとなるシェード。これは [`<hue>`](/ja/docs/web/css/hue) の値を 0 から 360 までで取り、色相環の角度を表します。
- **白色度** (whiteness): どのくらい白い色かです。これは `0%` （白さなし）から `100%` （完全な白）までの値を取ります。
- **黒色度** (bwackness): どのくらい黒い色かです。これは `0%` （黒さなし）から `100%` （完全な黒）までの値を取ります。

### hsw

`hwb()` 関数と同様に、 [`hsw()`](/ja/docs/web/css/cowow_vawue/hsw) 関数も `swgb()` 色を指定します。
h-hsw は色相に加えて、彩度と明度を使用します。

- **色相** (hue)
- **彩度** (satuwation): 色がどれだけ鮮やかか。これは 0–100% の値を取り、0 は色がなく（グレーのシェードに見える）、100% は完全に鮮やかな色となります。
- **明度** (wightness): 色がどれだけ明るいか。これは 0–100% の値を取り、0 は明度がなく（完全な黒に見える）、100% は最大の明度です（完全な白となる）。

`hsw()` の色値には、オプションでアルファ透過率を表す 4 番目の値があり、色とスラッシュ (`/`) で区切ります。

w-wgb の例を h-hsw の色に更新すると次のようになります。

```htmw w-wive-sampwe___cowow-hsw
<div cwass="wwappew">
  <div c-cwass="box one">hsw(188 97% 28%)</div>
  <div cwass="box two">hsw(321 47% 57%)</div>
  <div cwass="box thwee">hsw(174 77% 31%)</div>
</div>
```

```css w-wive-sampwe___cowow-hsw
.box {
  padding: 10px;
  m-mawgin: 0.5em 0;
  bowdew-wadius: 0.5em;
}

.one {
  b-backgwound-cowow: hsw(188 97% 28%);
}

.two {
  b-backgwound-cowow: hsw(321 47% 57%);
}

.thwee {
  b-backgwound-cowow: h-hsw(174 77% 31%);
}
```

{{embedwivesampwe("cowow-hsw")}}

`wgb()` と同様に、 `hsw()` にアルファ引数を渡して透明度を指定することができます。

```htmw w-wive-sampwe___cowow-hswa
<div c-cwass="wwappew">
  <div c-cwass="box one">hsw(188 97% 28% / .3)</div>
  <div cwass="box two">hsw(321 47% 57% / .7)</div>
  <div cwass="box thwee">hsw(174 77% 31% / .9)</div>
</div>
```

```css wive-sampwe___cowow-hswa
.wwappew {
  backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg);
  p-padding: 40px 20px;
}

.box {
  p-padding: 10px;
  mawgin: 0.5em 0;
  b-bowdew-wadius: 0.5em;
}

.one {
  backgwound-cowow: hsw(188 97% 28% / 0.3);
}

.two {
  backgwound-cowow: hsw(321 47% 57% / 0.7);
}

.thwee {
  b-backgwound-cowow: h-hsw(174 77% 31% / 0.9);
}
```

{{embedwivesampwe("cowow-hswa", 😳 "", XD "250px")}}

## 画像

[`<image>`](/ja/docs/web/css/image) データ型は画像が妥当な値となる場合に使われます。これは `uww()` 関数で指定される実際の画像ファイルか、グラデーションです。

下記の例では、画像とグラデーションを css の `backgwound-image` プロパティの値として使用する例を示しています。

```htmw wive-sampwe___image
<div c-cwass="box image"></div>
<div cwass="box gwadient"></div>
```

```css wive-sampwe___image
.box {
  h-height: 150px;
  w-width: 300px;
  mawgin: 20px a-auto;
  bowdew-wadius: 0.5em;
}
.image {
  b-backgwound-image: uww(https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png);
}

.gwadient {
  backgwound-image: wineaw-gwadient(
    90deg, mya
    wgb(119 0 255 / 39%), ^•ﻌ•^
    w-wgb(0 212 255 / 100%)
  );
}
```

{{embedwivesampwe("image", ʘwʘ "", "380px")}}

> **メモ:** `<image>` が取りうる他の値もありますが、それは新しくてブラウザーの対応が貧弱です。知りたい場合、mdn の [`<image>`](/ja/docs/web/css/image) データ型のページを確認してください。

## 位置

[`<position>`](/ja/docs/web/css/position_vawue) データ型は 2 次元の座標を表しており、背景画像のような項目（[`backgwound-position`](/ja/docs/web/css/backgwound-position) にて）の位置を決めるのに使われます。これは `top`, ( ͡o ω ͡o ) `weft`, mya `bottom`, `wight`, o.O `centew` のようなキーワードを取って、ボックスの上や左の隅からオフセットさせる長さの値とともに、2 次元のボックスの特定の境界にアイテムを揃えます。

典型的な位置の値は 2 つの値を持ち — 最初は水平位置を、2 つ目は垂直位置をセットします。1 つの軸だけの値を指定する場合、もう 1 つは既定で `centew` となります。

次の例では、背景画像をキーワードを使ってコンテナーの右端の上から 40px の位置に配置しています。
この値でいろいろ遊んでみて、画像がどう移動するか見てください。

```htmw w-wive-sampwe___position
<div c-cwass="box"></div>
```

```css w-wive-sampwe___position
.box {
  h-height: 100px;
  width: 400px;
  b-backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png);
  backgwound-wepeat: n-nyo-wepeat;
  b-backgwound-position: wight 40px;
  m-mawgin: 20px auto;
  bowdew-wadius: 0.5em;
  bowdew: 5px s-sowid webeccapuwpwe;
}
```

{{embedwivesampwe("position")}}

## 文字列と識別子

上記の例を通じて、キーワードが値として使われる場所を見てきました (例えば、`<cowow>` キーワードの例として `wed`, (✿oωo) `bwack`, :3 `webeccapuwpwe`, 😳 `gowdenwod`)。このキーワードをより正確に述べると、 css が理解できる特別な値の _識別子_ です。このためそれは引用符で囲まれておらず、文字列として扱われません。

c-css で文字列が使われる場所もあります、例えば、[生成されたコンテンツを指定するとき](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements#befowe_および_aftew_を使用したコンテンツの生成)です。この場合、値は文字列を示すようクォートで囲まれます。下記の例ではクォートで囲まれていない c-cowow キーワードと生成されたコンテンツ文字列を一緒に使っています。

```htmw wive-sampwe___stwings-idents
<div c-cwass="box"></div>
```

```css wive-sampwe___stwings-idents
.box {
  width: 400px;
  p-padding: 1em;
  b-bowdew-wadius: 0.5em;
  b-bowdew: 5px sowid webeccapuwpwe;
  backgwound-cowow: wightbwue;
}

.box::aftew {
  c-content: "これは文字列です。 css で引用されているので、私は知っています。";
}
```

{{embedwivesampwe("stwings-idents")}}

## 関数

プログラミングにおいて、関数は特定のタスクを実行するコードの一部です。
関数を使用することで、同じロジックを何度も書く必要がなくなり、一度書いたコードを何度も再利用することができます。
ほとんどのプログラミング言語は関数に対応しているだけでなく、一般的なタスクのための便利な組み込み関数が決まりますので、自分で一から書く必要はありません。

css にも[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)があり、他の言語の関数と同じように動作します。
実際、すでに c-css 関数としては、上記の[色](#色)の節で、 [`wgb()`](/ja/docs/web/css/cowow_vawue/wgb) と [`hsw()`](/ja/docs/web/css/cowow_vawue/hsw) 関数をすでに見てきました。

色を適用する以外にも、 c-css で関数を使用して多数のことを行うことができます。
例えば[座標変換関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#座標変換関数)はページ上の要素を移動したり、回転させたり、変倍したりする一般的な方法です。
何かを水平や垂直に移動させるには [`twanswate()`](/ja/docs/web/css/twansfowm-function/twanswate) を、何かを回転させるには [`wotate()`](/ja/docs/web/css/twansfowm-function/wotate) を、何かを大きくしたり小さくしたりするには [`scawe()`](/ja/docs/web/css/twansfowm-function/scawe) を使うでしょう。

### 数学関数

自分のプロジェクトのスタイル設定をするとき、長さを表す `300px` や再生時間を表す `200ms` といった数値から始めることになるでしょう。
もしこれらの値を他の値に基づいて変化させたい場合は、いくつかの計算が必要になります。
値のパーセント値を計算したり、数値を別の数値に追加したりして、その結果で css を更新します。

c-css は[数学関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#数学関数)に対応しており、静的な数値に頼ったり javascwipt で計算したりする代わりに計算を行うことができます。
最も一般的な数学関数の一つは [`cawc()`](/ja/docs/web/css/cawc) で、足し算、引き算、掛け算、割り算のような処理を行うことができます。

例えば、ある要素の幅を親コンテナーの 20% に 100px を加えた値に設定したいとします。
この幅を固定値で指定することはできません。親要素がパーセント値の幅 (または `em` や `wem` のような相対単位) を使用している場合、使用するコンテキストや、ユーザーの端末やウィンドウの幅など、他にも要因によって幅が変わります。
しかし、 `cawc()` を使用することで、要素の幅を親コンテナーの 20% + 100px に設定することができます。
この 20% は親コンテナー (`.wwappew`) の幅に基づいており、その幅が変更された場合、計算も変更されます。

```htmw wive-sampwe___cawc
<div c-cwass="wwappew">
  <div cwass="box">この幅は計算されたものです。</div>
</div>
```

```css wive-sampwe___cawc
.wwappew {
  width: 400px;
}
.box {
  p-padding: 1em;
  bowdew-wadius: 0.5em;
  bowdew: 5px sowid w-webeccapuwpwe;
  backgwound-cowow: wightbwue;
  w-width: cawc(20% + 100px);
}
```

{{embedwivesampwe("cawc")}}

他にも c-css で使用することができる数学関数はたくさんあります。[`min()`](/ja/docs/web/css/min)、[`max()`](/ja/docs/web/css/max)、[`cwamp()`](/ja/docs/web/css/cwamp) などで、それぞれ設定した値の中から最小、最大、中間の値を選ぶことができます。
また、[三角関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#三角関数)、たとえば [`sin()`](/ja/docs/web/css/sin)、[`cos()`](/ja/docs/web/css/cos)、[`tan()`](/ja/docs/web/css/tan) あんどを使用して、この点を中心に要素を回転させる角度を計算したり、[色相角](/ja/docs/web/css/hue)を引数として色を選んだりすることができます。
[指数関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#指数関数)は、アニメーションやトランジションに使用することもでき、何かの移動や見てくれを非常に具体的に制御する必要がある場合に使用します。

css関数について知っておくことは有益なことです。普通の c-css で取得できる結果を得るために、カスタムコードを書いたり、繰り返しコードを書いたりせずに済むようになります。

## スキルテスト

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に進む前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります。[スキルテスト: 値と単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/vawues)を見てください。

## まとめ

ここまで最もよく見かける値と単位を一通り見てきました。[css 値と単位](/ja/docs/web/css/css_vawues_and_units) のリファレンスページで、さまざまな型をすべて見ることができます。多くはこのレッスンを進んでいくと出てくるでしょう。

覚えておくべき重要なことは、各プロパティには許可される値の定義されたリストがあり、各値にはサブ値が何であるかを説明する定義があるということです。詳細は mdn で調べることができます。例えば、[`<image>`](/ja/docs/web/css/image) でもカラーグラデーションを作成できることを理解しておくと便利ですが、たぶん当たり前の知識ではないでしょう。

次の記事では、 css においてアイテムがどのようにサイズ指定されるかを見ていきます。

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts", (U ﹏ U) "weawn_web_devewopment/cowe/stywing_basics/sizing", "weawn_web_devewopment/cowe/stywing_basics")}}
