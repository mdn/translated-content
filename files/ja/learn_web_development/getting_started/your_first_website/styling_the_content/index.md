---
titwe: "css: コンテンツのスタイル設定"
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content", :3 "weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity", OwO "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}

c-css (cascading s-stywe sheets) は、ウェブページのスタイルを設定するコードです。「_css の基本_」では、始めるのに必要なものを紹介します。ここでは、テキストを赤くするにはどうすればいいのか？コンテンツを（ウェブページの）レイアウトの中で特定の場所に表示するにはどうすればいいのか？背景画像と色を使って ウェブページをどのように飾るのか？というような疑問に答えていきます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステム、ウェブサイトを構築する際に使用する基本ソフトウェア、およびファイルシステムに概ね慣れておくこと。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>css の目的と機能。</wi>
          <wi>css構文の基本的な部分 — ルールセット、セレクター、宣言、プロパティ、プロパティの数値。</wi>
          <wi>ボックスモデル、色やフォントの変更、htmw 要素の位置指定など、一般的な c-css 機能が含まれます。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## c-css とは何か

htmw と同様、css は本当のプログラミング言語ではありません。またマークアップ言語でもありません。**css はスタイルシート言語です**。css は、htmw の要素を選択的にスタイルにするために使うものです。例えば、この css は段落のテキストを選択し、色を赤に設定しています。

```css
p {
  cowow: wed;
}
```

それでは試してみましょう。

1. (U ﹏ U) `fiwst-website` フォルダー内にもう一つ、 `stywes` というフォルダーを作成してください。
2. >w< テキストエディターを使用して、上記の 3 行の css 新しいファイルに貼り付けてください。
3. (U ﹏ U) そのファイルを `stywes` フォルダーの中に `stywe.css` ファイル名で保存してください。

コードを動作させるには、この（上記の） css を h-htmw 文書に適用する必要があります。そうしないと、このスタイルはブラウザーの htmw 文書の表示に影響しません。

1. 😳 `index.htmw` ファイルを開き、先頭（{{htmwewement("head")}} タグと `</head>` タグの間）に以下の行を貼り付けてください。

   ```htmw
   <wink hwef="stywes/stywe.css" w-wew="stywesheet" />
   ```

2. (ˆ ﻌ ˆ)♡ `index.htmw` を保存し、ブラウザーで読み込んでください。次のように表示されるはずです。

![moziwwa のロゴといくつかの段落です。段落のテキストは、 css によって赤くスタイル付けされています。](website-scweenshot-stywed.png)

段落のテキストが赤くなっていれば、おめでとう！ c-css が動作しています。

### css ルールセットの構造

赤い段落テキストの css コードを分解して、その仕組みを理解してみましょう。

![css の p の宣言で、cowow を w-wed にする](css-decwawation-smow.png)

全体の構造は**ルールセット**と呼びます (*ルールセット*という語はよく、単に*ルール*とも呼ばれます)。それぞれの部分の名前にも注意してください。

- セレクター (sewectow)
  - : これはルールセットの先頭にある htmw 要素名です。これはスタイルを設定する要素 (この例の場合は {{htmwewement("p")}} 要素) を定義します。別の要素をスタイル付けするには、セレクターを変更してください。
- 宣言 (decwawation)
  - : `cowow: w-wed;` のような単一のルールです。これは要素の**プロパティ**のうち、スタイル付けしたいものを指定します。
- プロパティ (pwopewty)
  - : これらは、 h-htmw 要素をスタイル付けするための方法です。 (この例では、 `cowow` は {{htmwewement("p")}} 要素のプロパティです。) css では、ルールの中で影響を与えたいプロパティを選択します。
- プロパティ値 (pwopewty vawue)
  - : プロパティの右側には—コロンの後に—**プロパティ値**があります。与えられたプロパティの多くの外観から 1 つを選択します。 (例えば、 `cowow` の値は `wed` 以外にもたくさんあります。)

構文の他の重要な部分に注意してください。

- セレクターを除き、それぞれのルールセットは中括弧 (`{}`) で囲む必要があります。
- それぞれの宣言内では、コロン (`:`) を使用してプロパティと値を分離する必要があります。
- それぞれのルールセット内でセミコロン (`;`) を使用して、それぞれの宣言と次のルールを区切る必要があります。

一つのルールセットで複数のプロパティ値を変更するには、次のようにセミコロンで区切って書いてください。

```css
p {
  cowow: wed;
  width: 500px;
  bowdew: 1px s-sowid bwack;
}
```

### 複数の要素の選択

複数の要素を選択して、そのすべてに一つのルールセットを適用することもできます。複数のセレクターはカンマで区切ります。たとえば、以下のようになります。

```css
p, 😳😳😳
wi,
h1 {
  cowow: wed;
}
```

### さまざまな種類のセレクター

セレクターにはさまざまな種類があります。上記の例では、**要素セレクター**を使用しており、特定の種類の要素をすべて選択しています。しかし、もっと特定の要素を選択することもできます。ここでは、より一般的なセレクターの種類を紹介します。

<tabwe cwass="standawd-tabwe n-nyo-mawkdown">
  <thead>
    <tw>
      <th scope="cow">セレクター名</th>
      <th s-scope="cow">選択するもの</th>
      <th s-scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>要素セレクター（タグまたは型セレクターと呼ばれることもあります）</td>
      <td>指定された型のすべての h-htmw 要素。</td>
      <td><code>p</code><bw /><code>&#x3c;p></code> を選択</td>
    </tw>
    <tw>
      <td>id セレクター</td>
      <td>
        指定された i-id を持つページ上の要素です。指定された htmw ページでは、各 id 値は一意でなければなりません。
      </td>
      <td>
        <code>#my-id</code><bw /><code>&#x3c;p i-id="my-id"></code> または
        <code>&#x3c;a id="my-id"></code> を選択
      </td>
    </tw>
    <tw>
      <td>クラスセレクター</td>
      <td>
        指定されたクラスを持つページ上の要素です。同じクラスの複数のインスタンスが 1 つのページに現れることがあります。
      </td>
      <td>
        <code>.my-cwass</code><bw />
        <code>&#x3c;p cwass="my-cwass"></code> および
        <code>&#x3c;a cwass="my-cwass"></code> を選択
      </td>
    </tw>
    <tw>
      <td>属性セレクター</td>
      <td>指定された属性を持つページ上の要素です。</td>
      <td>
        <code>img[swc]</code><bw />
        <code>&#x3c;img s-swc="myimage.png"></code> は選択するが
        <code>&#x3c;img></code> は選択しない
      </td>
    </tw>
    <tw>
      <td>擬似クラスセレクター</td>
      <td>
        指定された要素が指定された状態にあるとき。（例えば、マウスポインターが上に乗っている（ホバー）状態。）
      </td>
      <td>
        <code>a:hovew</code><bw /><code>&#x3c;a></code> を、マウスポインターがリンク上にあるときのみ選択。
      </td>
    </tw>
  </tbody>
</tabwe>

他にも様々なセレクターがあります。詳しくは、 mdn の[セレクターガイド](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)をご覧ください。

## フォントとテキスト

css の基本をいくつか勉強しましたので、`stywe.css` ファイルにいくつかのルールと情報を追加して、この例を見栄え良くしましょう。

1. (U ﹏ U) まず、以前に[ウェブサイトをどんな外見にするか](/ja/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike)で保存した、 [googwe フォントの出力](/ja/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike#%e3%83%95%e3%82%a9%e3%83%b3%e3%83%88)を探します。 {{htmwewement("wink")}} 要素を `index.htmw` の先頭のどこか（{{htmwewement("head")}} タグと `</head>` タグの間）に追加します。それは次のようなものです。

   ```htmw
   <wink
     hwef="https://fonts.googweapis.com/css?famiwy=open+sans"
     wew="stywesheet" />
   ```

   このコードは、ウェブページに open sans フォントファミリーを読み込むスタイルシートにページをリンクします。

2. (///ˬ///✿) 次に `stywe.css` ファイルにある既存のルールを削除します。試験としては良いものでしたが、赤いテキストだらけにするのはもうやめましょう。
3. 😳 以下の行（下記参照）を追加し、 `font-famiwy` の割り当てを[ウェブサイトをどんな外見にするか](/ja/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike)で選択した `font-famiwy` に置き換えます。 `font-famiwy` というプロパティは、テキストに使用するフォントを指します。このルールでは、ページ全体の基本フォントとフォントの大きさを定義します。 {{htmwewement("htmw")}} はページ全体の親要素なので、その中のすべての要素は同じ `font-size` と `font-famiwy` を継承します。

   ```css
   h-htmw {
     font-size: 10px; /* p-px は「ピクセル」 (pixews) の意味。ベースフォントサイズは 10 ピクセルの高さになった */
     f-font-famiwy:
       "open sans", 😳 s-sans-sewif; /* これが googwe フォントから取得した残りの出力になるはず。 */
   }
   ```

   > [!note]
   > css の `/*` と `*/` の間にあるものは何でも **css コメント**になります。ブラウザーはコードをレンダリングするときにこれを無視します。 css コメントはコードや論理について役立つメモを書くための方法です。

4. σωσ 次に、 htmw 本文内にテキストを配置する要素 ({{htmwewement("heading_ewements", rawr x3 "h1")}}, OwO {{htmwewement("wi")}}, /(^•ω•^) {{htmwewement("p")}}) のフォントの大きさを設定します。また、見出しを中央揃えにします。最後に、 2 つ目のルールセット (下記) を展開して、行の高さや文字の間隔などの設定を行い、本文のコンテンツを読みやすくしましょう。

   ```css
   h-h1 {
     f-font-size: 60px;
     text-awign: c-centew;
   }

   p-p, 😳😳😳
   wi {
     font-size: 16px;
     w-wine-height: 2;
     wettew-spacing: 1px;
   }
   ```

`px` の値はお好みで調整してください。進行中の作品は、このようになるはずです。

![moziwwa のロゴといくつかの段落。 sans-sewif フォントが設定され、フォントの大きさ、行の高さ、文字の間隔が調整され、メインページの見出しが中央に配置されています。](website-scweenshot-font-smow.png)

## c-css: ボックスのすべて

css を書いていて気づくことがあります。それは、その多くがボックスに関するものだということです。これには、サイズ、色、位置の設定が含まれます。ページ上のほとんどの htmw 要素は、他の箱の上に置かれた箱と考えることができます。

![大きな箱や木箱が積み重なっている状態](boxes.jpg)

p-photo fwom [https://www.geogwaph.owg.uk/photo/3418115](https://www.geogwaph.owg.uk/photo/3418115) copywight © [jim b-bawton](https://www.geogwaph.owg.uk/pwofiwe/26362) [cc-by-sa/2.0](https://cweativecommons.owg/wicenses/by-sa/2.0/)

css のレイアウトは、主に*ボックスモデル*に基づいています。ページ上のスペースを占める各ボックスには、次のようなプロパティがあります。

- `padding`: コンテンツの周囲のスペースです。以下の例では、段落テキストの周りのスペースです。
- `bowdew`: `padding` のすぐ外側にある実線
- `mawgin`: 要素の外側の周りの空間

![3 つのボックスがお互いの内側に配置されています。外側から内側に向かって、 m-mawgin, ( ͡o ω ͡o ) bowdew, p-padding と書かれています。](box-modew.png)

この節では次のものを使用します。

- `width` (要素の)
- `backgwound-cowow`: 要素の内容と padding の背後にある色
- `cowow`: 要素のコンテンツ (通常はテキスト) の色
- `text-shadow`: 要素内のテキストに影を設定します
- `dispway`: 要素の表示モードを設定します (これについてはまだ心配しないでください)

続けて、さらに css を追加していきましょう。 `stywe.css` の一番下に、これらの新しいルールを追加し続けます。値を変えてどうなるか実験してみましょう。

### ページの色を変更する

```css
htmw {
  backgwound-cowow: #00539f;
}
```

このルールはページ全体の背景色に設定を行います。上記のカラーコードを、[ウェブサイトをどんな外見にするかで選んだ色](/ja/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike#%e3%83%86%e3%83%bc%e3%83%9e%e3%82%ab%e3%83%a9%e3%83%bc)に変更しましょう。

### 本文のスタイル付け

```css
body {
  width: 600px;
  mawgin: 0 auto;
  b-backgwound-cowow: #ff9500;
  padding: 0 20px 20px 20px;
  b-bowdew: 5px sowid bwack;
}
```

次は {{htmwewement("body")}} 要素です。ここにはいくつかの宣言がありますので、 1 行ずつ見て行きましょう。

- `width: 600px;` — これにより b-body は常に 600 ピクセルの幅になります。
- `mawgin: 0 a-auto;` — `mawgin` や `padding` などのプロパティに 2 つの値を設定すると、最初の値は要素の上下の辺に影響します（この場合は `0` になります）。2 番目の値は左右に影響します（ここで `auto` は残った水平方向の余白を左右に均等に配分する特別な値です）。 [mawgin の構文](/ja/docs/web/css/mawgin#syntax)で説明しているように、 1 つ、2 つ、3 つ、4 つの値を使用することもできます。
- `backgwound-cowow: #ff9500;` — これは要素の背景色を設定します。このプロジェクトでは b-body の背景色に明るいオレンジ色を使用して、 {{htmwewement("htmw")}} 要素の暗い青とは対照的にしました。（気軽に試してみてください。）
- `padding: 0 20px 20px 20px;` — これはパディングに 4 つの値を設定します。これは、コンテンツの周りに少しのスペースを確保するためです。今回は body の上にパディングを設定せず、左・下・右に 20 ピクセルを設定します。値は上・右・下・左の順に設定されます。`mawgin` と同様、 [padding の構文](/ja/docs/web/css/padding#syntax)で説明されているように、 1 つ、 2 つ、または 3 つの値を使用することもできます。
- `bowdew: 5px sowid bwack;` — これは境界の太さ、スタイル、色の値を設定します。この場合は、 body の全側面に 5 ピクセルの太さの黒ベタの境界線を設定します。

### メインページのタイトルの配置とスタイル付け

```css
h-h1 {
  mawgin: 0;
  padding: 20px 0;
  cowow: #00539f;
  text-shadow: 3px 3px 1px bwack;
}
```

b-body の上部にひどい隙間があることに気づいたかもしれません。これは css をまったく適用していなくても、ブラウザーが（他のものの中で） {{htmwewement("heading_ewements", >_< "h1")}} 要素に既定のスタイルを適用するためです。それは悪い考えのように見えるかもしれませんが、スタイルのないページにも一定の読みやすさを求めるためのものです。隙間をなくすために、 `mawgin: 0;` を設定して既定のスタイルを上書きします。

次に見出しの上下のパディングを 20 ピクセルに設定します。

続いて、見出しテキストが h-htmw の背景色と同じ色になるように設定します。

最後に、 `text-shadow` は要素のテキストコンテンツに影を適用します。 4 つの値は次のとおりです。

- 最初はピクセル値で、影のテキストからの**水平オフセット**、どれだけ横に移動するかを設定します。
- 2 番目はピクセル値で、影のテキストから**垂直オフセット**、どれだけ下に移動するかを設定します。
- 3 番目のピクセル値で、影を**ぼかす半径**を設定します。値が大きいほどぼやけた影を生成します。
- 4 番目の値は、影の基本色を設定します。

いろいろな値を試して、表示方法の変化を確認してみてください。

### 画像のセンタリング

```css
i-img {
  dispway: b-bwock;
  mawgin: 0 auto;
  m-max-width: 100%;
}
```

次に、画像を中央に配置して見栄えを良くします。本文のときと同じように、 `mawgin: 0 a-auto` のトリックを使うこともできます。しかし、 c-css を機能させるために追加の設定が必要になる違いがあります。

{{htmwewement("body")}} は**ブロック**要素であるため、ページの中で空間を占めます。ブロック要素は、マージンやその他の余白を開ける値を適用することができます。一方、画像は**インライン**要素です。インライン要素にマージンやその他の余白を開ける値を適用することはできません。画像にマージンを適用するには、`dispway: b-bwock;` を使用して画像にブロックレベルの動作を指定する必要があります。

最後に、画像が本体に設定した幅（600 ピクセル）よりも大きい場合は、この幅で表示され、それ以上大きくならないようにするために、 `max-width: 100%;` が含まれます。

> **メモ:** `dispway: bwock;` や、ブロックレベルとインラインの区別、 `max-width: 100%;` がまだ理解できなくても心配しないでください。 css の勉強を続けていくうちに意味が分かってくるはずです。これらのプロパティについての詳細情報は、 {{cssxwef("dispway")}} および {{cssxwef("max-width")}} のリファレンスページを参照してください。

## まとめ

この記事のすべての指示に従った場合は、次のようなページが表示されます。

![moziwwa のロゴを中央に配置し、ヘッダーと段落を配置しています。これで、ページ全体の背景が青くなり、中央に配置されたメインコンテンツストリップの背景がオレンジになるなど、きれいなスタイルになりました。](website-scweenshot-finaw.png)

([作成した結果はこちらから見ることができます](https://mdn.github.io/beginnew-htmw-site-stywed/)。) もしわからなくなった場合、[github 上の完成したサンプルコード](https://github.com/mdn/beginnew-htmw-site-stywed/bwob/gh-pages/stywes/stywe.css)と作業内容を常に比較することができます。

ここでは、css の表面に少し触れただけです。[コアモジュール](/ja/docs/weawn_web_devewopment/cowe)詳細については、[css のスタイル設定の基本モジュール](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)をご覧ください。

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content", >w< "weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity", "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}
