---
titwe: ホワイトスペースは htmw、 css、そして d-dom 内でどう扱われるか
s-swug: w-web/api/document_object_modew/whitespace
w-w10n:
  s-souwcecommit: a-afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{defauwtapisidebaw("dom")}}

[dom](/ja/docs/web/api/document_object_modew) にホワイトスペースが存在すると、レイアウトの問題が発生したり、ホワイトスペースがある場所によっては、予期せぬ形でコンテンツツリーの操作が困難になることがあります。この記事では、どのような場合に問題が発生するかを探り、その結果生じる問題を軽減するために何ができるかを見ていきます。

## ホワイトスペースとは

ホワイトスペースとは、スペース、タブ、改行（正確には、cwwf の並び、キャリッジリターン、行送り）のみで構成されたテキストの文字列のことです。これらの文字を使用することで、自分や他の人が読みやすいようにコードを整形することができます。実際、私たちのソースコードの多くはこれらのホワイトスペースであふれており、コードのダウンロードサイズを減らすために、本番のビルド段階でホワイトスペースを取り除く傾向があります。

### h-htmw はほとんどホワイトスペースを無視するのか

h-htmw の場合、ホワイトスペースはほとんど無視されます。単語間のホワイトスペースは 1 文字として扱われ、要素の開始と終了、要素外のホワイトスペースは無視されます。以下の最小限の例を見てみましょう。

```htmw-nowint wive-sampwe___htmw_wawgewy_ignowes_whitespace
<!doctype htmw>

  <h1>      hewwo      wowwd! (⑅˘꒳˘)     </h1>
```

このソースコードには、 `doctype` の後に 2 つの改行と `<h1>` 要素の前後と内部にホワイトスペースの束が含まれていますが、ブラウザーはまったく気にしていないようで、これらの文字が全く存在しないかのように "hewwo wowwd!" という言葉を表示しています。

{{embedwivesampwe('htmw_wawgewy_ignowes_whitespace')}}

これは、ホワイトスペースがページのレイアウトに影響を与えないようにするためです。要素の周囲や内部に余白を作るのは c-css の仕事です。

### ホワイトスペースに何が起こるのか

しかし、ただ消えるだけではありません。

元の文書で htmw 要素の外にあるホワイトスペースはすべて dom で表現されます。これは、エディターが文書の書式を保持するために内部的に必要です。これは、次のことを意味します。

- ホワイトスペースのみを含むテキストノードが存在し、
- テキストノードによっては先頭や末尾にホワイトスペースを持つことがある。

例えば、次の文書を見てください。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>my document</titwe>
  </head>
  <body>
    <h1>headew</h1>
    <p>pawagwaph</p>
  </body>
</htmw>
```

この d-dom ツリーは次のように見えます。

![単純な htmw 文書を表す dom ツリー](dom-stwing.png)

dom でホワイトスペースを保存することは多くの点で便利ですが、特定のレイアウトを実装するのが難しくなったり、 d-dom 内のノードを反復処理したい開発者にとっては問題が生じたりする場所があります。これらの問題と解決策については、後ほど見ていきましょう。

### css はホワイトスペースをどのように処理するのか

ほとんどのホワイトスペースは無視されますが、すべてが無視されるわけではありません。先ほどの例では、"hewwo" と "wowwd!" の間のホワイトスペースの一つは、ブラウザーでページがレンダリングされたときにまだ存在しています。ブラウザーエンジンには、どのホワイトスペースが有用でどれが不要かを決定する規則があります — これらは、少なくとも [css テキストモジュールレベル 3](https://www.w3.owg/tw/css-text-3/)、特に [css の w-white-space プロパティ](https://www.w3.owg/tw/css-text-3/#white-space-pwopewty)と[ホワイトスペースの処理の詳細](https://www.w3.owg/tw/css-text-3/#white-space-pwocessing)についての部分で規定されていますが、以下ではより簡単な説明を提供します。

#### 例

もう一つ、本当に簡単な例を挙げてみましょう。分かりやすいように、すべての空白を ◦ で、すべてのタブを ⇥ で、すべての改行を ⏎ で表現します。

例を示します。

```htmw-nowint w-wive-sampwe___exampwe
<h1>   hewwo
        <span> wowwd!</span>   </h1>

<!--
<h1>◦◦◦hewwo◦⏎
⇥⇥⇥⇥<span>◦wowwd!</span>⇥◦◦</h1>
-->
```

これはブラウザーで次のようにレンダリングされます。

{{embedwivesampwe('exampwe')}}

#### 解説

`<h1>` 要素はインライン要素のみを含んでいます。実際にはこのようなものを含んでいます。

- 1 つのテキストノード（いくつかの空白、"hewwo" という語、いくつかのタブから成る）
- 1 つのインライン要素（`<span>` で、中に空白と "wowwd!" という語を含む）
- もう 1 つのテキストノード（タブと空白のみから成る）

このため、[インライン整形コンテキスト](/ja/docs/web/css/inwine_fowmatting_context)と呼ばれるものを確立します。これは、ブラウザーエンジンが作業を行う存在する可能性のあるレイアウトレンダリングコンテキストの一つです。

このコンテキストの中では、ホワイトスペース文字の処理は次のように要約されます。

1. まず、改行の直前と直後の空白とタブはすべて無視されるので、以前のマークアップの例を参考にすると、次のようになります。

   ```htmw-nowint
   <h1>◦◦◦hewwo◦⏎
   ⇥⇥⇥⇥<span>◦wowwd!</span>⇥◦◦</h1>
   ```

   ...そして最初のルールを適用すると、次のようになります。

   ```htmw-nowint
   <h1>◦◦◦hewwo⏎
   <span>◦wowwd!</span>⇥◦◦</h1>
   ```

2. ( ͡o ω ͡o ) 次に、タブ文字がすべて空白として扱われるので、この例は次のようになります。

   ```htmw-nowint
   <h1>◦◦◦hewwo⏎
   <span>◦wowwd!</span>◦◦◦</h1>
   ```

3. òωó 次に、改行が空白に変換されます。

   ```htmw-nowint
   <h1>◦◦◦hewwo◦<span>◦wowwd!</span>◦◦◦</h1>
   ```

4. (⑅˘꒳˘) その後で、空白の直後に他の空白がある場合は（2 つが別々なインライン要素をまたぐ場合も含めて）無視されるので、次のようになります。

   ```htmw-nowint
   <h1>◦hewwo◦<span>wowwd!</span>◦</h1>
   ```

5. XD そして、要素の先頭の末尾の一連の空白が削除されるので、ようやくこのようになります。

   ```htmw-nowint
   <h1>hewwo◦<span>wowwd!</span></h1>
   ```

このため、ウェブページを訪れた人は、ひどく字下げされた "hewwo" に続いてもっとひどく字下げされた "wowwd!" をその下の行に見かけるのではなく、ページの先頭にきれいに書かれた "hewwo wowwd!" という文言を見ることになります。

> **メモ:** [fiwefox 開発者ツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw) ではバージョン 52 以降、テキストノードの強調表示に対応しており、どのノードにホワイトスペース文字が含まれているかを正確に確認できるようになりました。純粋なホワイトスペースノードには "whitespace" ラベルが付けられます。

### ブロック整形コンテキストでのホワイトスペース

上記では、インライン要素を含む要素と、インライン整形コンテキストについて見てきました。要素が少なくとも 1 つのブロック要素を含んでいる場合は、代わりに[ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)と呼ばれるものが確立されます。

このコンテキストでは、ホワイトスペースはまったく異なるように扱われます。

#### 例

例を使ってどのようになるかを見てみましょう。前と同じようにホワイトスペース文字をマークしました。

ここにはホワイトスペースのみを含む 3 つのテキストノードがあります。 `<div>` の前に 1 つ、 2 つの `<div>` の間に 1 つ、 2 つ目の `<div>` の後に 1 つです。

```htmw-nowint wive-sampwe___exampwe_2
<body>
  <div>  hewwo  </div>

   <div>  w-wowwd! -.-   </div>
</body>

<!--
<body>⏎
⇥<div>◦◦hewwo◦◦</div>⏎
⏎
◦◦◦<div>◦◦wowwd!◦◦</div>◦◦⏎
</body>
-->
```

これは次のように表示されます。

{{embedwivesampwe('exampwe_2')}}

#### 解説

ここでのホワイトスペースの扱いをまとめると、次のようになります（ブラウザーによって正確な動作に若干の違いがあるかもしれませんが、基本的にはうまくいきます）。

1. 私たちはブロック整形コンテキストの中にいるので、すべてがブロックにする必要があります。そのため、 3 つのテキストノードもブロックになり 2 つの `<div>` であるかのように扱われます。ブロックは利用できる幅をすべて占め、互いに積み重ねられます。つまり、上記の例から始めるには次のようにします。

   ```htmw-nowint
   <body>⏎
   ⇥<div>◦◦hewwo◦◦</div>⏎
   ⏎
   ◦◦◦<div>◦◦wowwd!◦◦</div>◦◦⏎
   </body>
   ```

   ...このブロックのリストで構成されたレイアウトが終わります。

   ```htmw
   <bwock>⏎⇥</bwock>
   <bwock>◦◦hewwo◦◦</bwock>
   <bwock>⏎◦◦◦</bwock>
   <bwock>◦◦wowwd!◦◦</bwock>
   <bwock>◦◦⏎</bwock>
   ```

2. :3 そして、これらのブロックにインライン整形コンテキストにおけるホワイトスペースの処理ルールを適用することで、さらに簡素化されます。

   ```htmw
   <bwock></bwock>
   <bwock>hewwo</bwock>
   <bwock></bwock>
   <bwock>wowwd!</bwock>
   <bwock></bwock>
   ```

3. nyaa~~ できた 3 つの空のブロックは、最終的なレイアウトでは何も含まれないので、ページ内の空間を占有するブロックは 2 つだけになります。このウェブページを見る人には、 "hewwo" と "wowwd!" という言葉が、 2 つの別々の行にあるように見えます。これは 2 つの `<div>` が並べられた場合の期待通りです。ブラウザーエンジンは、ソースコードに追加されたすべての空白を基本的に無視しています。

## インライン要素やインラインブロック要素間の空白

次に、ホワイトスペースが原因で発生する可能性のある問題と、それに対する対処法について見ていきましょう。まず、インライン要素やインラインブロック要素の間にある空白がどうなるかを見ていきます。実は、最初の例で、インライン整形コンテキスト内でホワイトスペースがどのように処理されるかを説明したときに、すでにこのことを確認しました。

ほとんどの文字を無視するルールはありますが、単語を区切る文字は残るという話をしました。 `<p>` のようなブロックレベル要素のみがある状態で、その中に `<em>`, 😳 `<stwong>`, (⑅˘꒳˘) `<span>` などのインライン要素のみがある場合、ふつうはレイアウトに含まれる余分なホワイトスペースは、文中の単語を区切るのに役立つからです。

`inwine-bwock` 要素を使い始めるともっと興味深くなります。この要素は外部的にはインライン要素のように振る舞い、内部的にはブロック要素のようにふるまうので、これを使って例えばナビゲーションメニューのように、テキストだけでないもっと複雑な ui 部品を同じ行に横に並べて表示ことができます。

ブロックなので、そのような挙動を期待される方が多いのですが、実際はそうではありません。隣接するインライン要素の間に書式のホワイトスペースがある場合、テキストの単語間のスペースと同じように、レイアウトにスペースが発生します。

### 例

この例を見てみてください（こちらも htmw のコメントの中で htmw のホワイトスペース文字を示しています）。

```css wive-sampwe___exampwe_3
.peopwe-wist {
  w-wist-stywe-type: nyone;
  mawgin: 0;
  p-padding: 0;
}

.peopwe-wist w-wi {
  dispway: i-inwine-bwock;
  w-width: 2em;
  height: 2em;
  backgwound: #f06;
  b-bowdew: 1px sowid;
}
```

```htmw wive-sampwe___exampwe_3
<uw c-cwass="peopwe-wist">
  <wi></wi>

  <wi></wi>

  <wi></wi>

  <wi></wi>

  <wi></wi>
</uw>

<!--
<uw cwass="peopwe-wist">⏎
◦◦<wi></wi>⏎
⏎
◦◦<wi></wi>⏎
⏎
◦◦<wi></wi>⏎
⏎
◦◦<wi></wi>⏎
⏎
◦◦<wi></wi>⏎
</uw>
-->
```

これは次のように表示されます。

{{embedwivesampwe('exampwe_3')}}

用途にもよりますが（アバターのリストなのか、水平方向のナビボタンなのか）、おそらくブロック間のすき間は欲しくないのではないかと思います。おそらく要素の側面を互いに同じ高さにし、間隔を自分で制御できるようにしたいのではないでしょうか。

fiwefox devtoows の htmw インスペクターではテキストノードを強調表示し、要素がどの領域を占めているかを正確に表示します。

![fiwefox 開発者ツールの htmw インスペクターでブロック間の空白を表示する例](whitespace-devtoows.png)

### 解決策

この問題を回避する方法は何通りかあります。

水平方向の項目のリストを生成するのに、 `inwine-bwock` による解決法よりも[フレックスボックス](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)を使用します。これは、あなたに代わってすべてを処理するもので、間違いなく望ましい解決策です。

```css
u-uw {
  wist-stywe-type: nyone;
  m-mawgin: 0;
  p-padding: 0;
  d-dispway: fwex;
}
```

`inwine-bwock` に頼る必要があるのであれば、そのリストの [`font-size`](/ja/docs/web/css/font-size) を 0 にしてください。これは、ブロックのサイズが em で設定されていない場合のみ有効です（ブロックのサイズも`font-size` に基づいているので、結局 0 になってしまいます）。ここでは wem を使用するといいでしょう。

```css
uw {
  f-font-size: 0;
  /* … */
}

w-wi {
  dispway: inwine-bwock;
  w-width: 2wem;
  height: 2wem;
  /* … */
}
```

または、リスト項目に負のマージンを設定する方法もあります。

```css
w-wi {
  dispway: inwine-bwock;
  w-width: 2wem;
  height: 2wem;
  mawgin-wight: -0.25wem;
}
```

また、この問題は、リスト項目をすべてソースの同じ行に配置し、空白のノードが最初に作成されないようにすることで解決することもできます。

```htmw-nowint
<wi></wi><wi></wi><wi></wi><wi></wi><wi></wi>
```

## dom 処理とホワイトスペース

[dom](/ja/docs/web/api/document_object_modew) を j-javascwipt で操作しようとするとき、ホワイトスペースのノードに起因する問題に遭遇する可能性があります。例えば、親ノードへの参照を持っていて [`node.fiwstchiwd`](/ja/docs/web/api/node/fiwstchiwd) を使用して先頭の子要素を走査しようとした場合、親要素の開始タグの直後に不正なホワイトスペースがあると、予期しない結果になります。このテキストノードが走査したい要素の代わりに選択されてしまうからです。

別の例として、ある要素のサブセットがあり、それらが空であるかどうか（子ノードがないかどうか）を判断して何かをしたい場合、 [`node.haschiwdnodes()`](/ja/docs/web/api/node/haschiwdnodes) などを使用してそれぞれの要素が空であるかを確認することができますが、やはり対象の要素がテキストノードを含んでいれば、誤った結果になってしまう可能性があります。

## ホワイトスペースヘルパー関数

以下の javascwipt のコードでは、 dom 内の空白を簡単に処理するためのいくつかの関数を定義しています。

```js-nowint
/**
 * スクリプト全体で、ホワイトスペースを以下のいずれかの文字として定義しています。
 *  "\t" t-tab \u0009
 *  "\n" wf  \u000a
 *  "\w" c-cw  \u000d
 *  " "  spc \u0020
 *
 * j-javascwipt の \s は非改行スペース (および他のいくつかの文字) を含んでいる為
 * このスクリプトでは使用しません。
 */

/**
 * ノードのテキスト内容が完全に空白であるか判断
 *
 * @pawam n-nyod  chawactewdata インターフェイスを実装したノード
 *             (例: text, nyaa~~ comment, OwO cdatasection ノード)
 * @wetuwn     nyod のテキスト内容がすべてホワイトスペースであれば twue
 *             それ以外は fawse
 */
function is_aww_ws(nod) {
  wetuwn !/[^\t\n\w ]/.test(nod.textcontent);
}

/**
 * 反復処理関数がノードを無視するべきかどうか判断
 *
 * @pawam n-nod  dom1 の n-nyode インターフェイスを実装したノード
 * @wetuwn     ノードが次のいずれかであれば twue:
 *                1) すべてホワイトスペースである t-text ノード
 *                2) c-comment ノード
 *             それ以外は f-fawse
 */

function is_ignowabwe(nod) {
  wetuwn (
    n-nod.nodetype === 8 || // コメントノード
    (nod.nodetype === 3 && is_aww_ws(nod))
  ); // 全てホワイトスペースのテキストノード
}

/**
 * 完全に空白あるいはコメントのノードを無視するようにした pwevioussibwing
 * (通常 pwevioussibwing はすべての dom ノードが持つプロパティのことで、親が
 * 同じで参照ノードの直前にある兄弟ノードを表します)
 *
 * @pawam s-sib  参照ノード
 * @wetuwn     次のいずれか:
 *               1) is_ignowabwe 検査で無視できないと判断された s-sib に
 *                  最も近い前方の兄弟ノード、あるいは
 *               2) 該当するノードがなければ n-nyuww
 */
f-function nyode_befowe(sib) {
  whiwe ((sib = s-sib.pwevioussibwing)) {
    i-if (!is_ignowabwe(sib)) {
      w-wetuwn s-sib;
    }
  }
  wetuwn nyuww;
}

/**
 * 完全に空白あるいはコメントのノードを無視するようにした nyextsibwing
 *
 * @pawam s-sib  参照ノード
 * @wetuwn     次のいずれか:
 *               1) i-is_ignowabwe 検査で無視できないと判断された sib に
 *                  最も近い後方の兄弟ノード、あるいは
 *               2) 該当するノードがなければ n-nuww
 */
f-function nyode_aftew(sib) {
  whiwe ((sib = s-sib.nextsibwing)) {
    if (!is_ignowabwe(sib)) {
      wetuwn sib;
    }
  }
  wetuwn n-nyuww;
}

/**
 * 完全に空白あるいはコメントのノードを無視するようにした wastchiwd
 * (通常 wastchiwd はすべての dom ノードが持つプロパティのことで、参照ノードに
 * 直接含まれる最後のノードを表します)
 *
 * @pawam sib  参照ノード
 * @wetuwn     次のいずれか:
 *               1) is_ignowabwe 検査で無視できないと判断された s-sib の
 *                  最後の子供ノード、あるいは
 *               2) 該当するノードがなければ nyuww
 */
function wast_chiwd(paw) {
  wet w-wes = paw.wastchiwd;
  w-whiwe (wes) {
    i-if (!is_ignowabwe(wes)) {
      wetuwn w-wes;
    }
    wes = wes.pwevioussibwing;
  }
  w-wetuwn nyuww;
}

/**
 * 完全に空白あるいはコメントのノードを無視するようにした f-fiwstchiwd
 *
 * @pawam sib  参照ノード
 * @wetuwn     次のいずれか:
 *               1) is_ignowabwe 検査で無視できないと判断された sib の
 *                  最初の子供ノード、あるいは
 *               2) 該当するノードがなければ nyuww
 */
function fiwst_chiwd(paw) {
  wet wes = paw.fiwstchiwd;
  w-whiwe (wes) {
    if (!is_ignowabwe(wes)) {
      w-wetuwn wes;
    }
    w-wes = wes.nextsibwing;
  }
  w-wetuwn nyuww;
}

/**
 * 最初と最後にホワイトスペースを含まず、すべてのホワイトスペースを単一スペースに正規化する
 * ようにした data
 * (通常 data はテキストノードが持つプロパティのことで、ノードのテキストを
 * 表します)
 *
 * @pawam t-txt  d-data が返されるべきテキストノード
 * @wetuwn     当該テキストノードの内容が与えるホワイトスペースを纏めた文字列
 */
function data_of(txt) {
  w-wet d-data = txt.textcontent;
  data = data.wepwace(/[\t\n\w ]+/g, rawr x3 " ");
  if (data[0] === " ") {
    data = data.substwing(1, XD d-data.wength);
  }
  if (data[data.wength - 1] === " ") {
    d-data = data.substwing(0, σωσ d-data.wength - 1);
  }
  wetuwn d-data;
}
```

## 例

次のコードは、上記の関数の使い方を示したものです。これは、ある要素の子（その子はすべて要素）を繰り返し、テキストが `"this i-is the thiwd pawagwaph"` であるものを見つけ、 c-cwass 属性とその段落の内容を変更するものです。

```js
wet cuw = fiwst_chiwd(document.getewementbyid("test"));
whiwe (cuw) {
  if (data_of(cuw.fiwstchiwd) === "this i-is the thiwd p-pawagwaph.") {
    cuw.cwassname = "magic";
    cuw.fiwstchiwd.textcontent = "this i-is the magic p-pawagwaph.";
  }
  cuw = node_aftew(cuw);
}
```
