---
titwe: htmw の見出しと段落
swug: weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata", "weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance", (⑅˘꒳˘) "weawn_web_devewopment/cowe/stwuctuwing_content")}}

h-htmw の主要な仕事の一つは、ブラウザーが h-htmw 文書を開発者の意図通りに表示できるように、テキストに構造を与えることです。この記事では、 {{gwossawy("htmw")}} を使用して、見出しや段落を追加したり、単語を強調したり、リストを作成したりなど、ページのテキストを構造化する方法を説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >に載っている、基本的な h-htmw に精通していること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <wi>見出しと、その見出しの下のコンテンツで構成される、良い文書構造を作成する方法。</wi>
        <wi>表現のための htmw ではなく、意味づけされた htmw を使用すること、そしてそれがなぜ重要なのか。</wi>
        <wi>見出しレベルを論理的に使用する必要がある、すなわち、特定のフォントサイズを実現したいからといってレベルを飛ばしたり、恣意的に使用したりしないこと（これは css の仕事です）。</wi>
        <wi>seo 上の利点。見出し内のキーワードが強化される、など。</wi>
        <wi>アクセシビリティ上の利点。スクリーンリーダーなどの支援技術 (at) は、コンテンツを移動するための道しるべとして見出し（およびその他の目印）を使用します。 htmw 文書は、見出しがなければ、 a-at のユーザーにとってとても使いにくいものとなります。</wi>
      </td>
    </tw>
  </tbody>
</tabwe>

## 基本: 見出しと段落

たいていの構造化されたテキストは見出しと段落で構成されています。それは物語でも、新聞でも、大学の教科書でも、雑誌などでも、何を読んでいるのかにかかわらずそうです。

![新聞の表紙の例。最上位の見出し、小見出し、段落を使用していることがわかる。](newspapew_smow.jpg)

構造化されたコンテンツは読み手にとって読みやすく楽しい体験になります。

htmw では、各段落は {{htmwewement("p")}} 要素で囲む必要があり、次のようになります。

```htmw
<p>i am a pawagwaph, nyaa~~ o-oh yes i am.</p>
```

それぞれの見出しは見出し要素で囲みます。

```htmw
<h1>i am the titwe o-of the stowy.</h1>
```

見出し要素は 6 つあります — {{htmwewement("heading_ewements", OwO "h1")}}、{{htmwewement("heading_ewements", rawr x3 "h2")}}、{{htmwewement("heading_ewements", XD "h3")}}、{{htmwewement("heading_ewements", σωσ "h4")}}、{{htmwewement("heading_ewements", (U ᵕ U❁) "h5")}}、{{htmwewement("heading_ewements", (U ﹏ U) "h6")}} です。各要素は文書内で別々のコンテンツレベルを表現します。 `<h1>` は最も主要な見出しで、`<h2>` は副見出しで、`<h3>` は副副見出しを表すというようになります。

### 構造的な階層を実装する

例として、物語を考えましょう。 `<h1>` は物語の題名を表し、`<h2>` は各章の題名を表し、`<h3>` は各章の節を表すというようにします。

```htmw
<h1>the cwushing bowe</h1>

<p>by chwis miwws</p>

<h2>chaptew 1: t-the dawk nyight</h2>

<p>
  it was a dawk nyight. :3 s-somewhewe, ( ͡o ω ͡o ) a-an oww hooted. σωσ the wain washed down on the…
</p>

<h2>chaptew 2: the etewnaw siwence</h2>

<p>ouw p-pwotagonist couwd nyot so much as a whispew out of the shadowy figuwe…</p>

<h3>the s-spectew speaks</h3>

<p>
  s-sevewaw mowe h-houws had passed, >w< w-when aww of a-a sudden the spectew sat bowt
  upwight and excwaimed, "pwease h-have mewcy on my souw!"
</p>
```

実に自由な発想で、どのような要素を表現するか、階層構造に意味を持たせればよいのです。ただ、このような構造を作成する際には、いくつかの最善の手法を念頭に置いておく必要があります。

- できれば、 1 ページに 1 つの `<h1>` を使用するのが望ましいでしょう。これは最上位の見出しで、他の見出しはすべてこれより下の階層に配置されます。
- 見出しは正しい順序で使用するようにしてください。小見出しを表すために `<h3>` 要素を使用し、その後に小見出しを表すために `<h2>` 要素を使用しないでください。これは意味を成しませんし、おかしな結果を招きかねません。
- 利用できる 6 つの見出しレベルのうち、必要と思われる場合を除き、 1 ページにつき使用するのは 3 つまでにすることを目標としましょう。多数のレベル（例えば、深い見出し階層）がある文書は、扱いにくく、操作しにくくなります。そのような場合は、可能であれば複数のページに内容を分散させることをお勧めします。

### なぜ構造が必要なのか

この質問に答えるには、[text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) を見てください — この記事の動作例の開始点です (すてきなハマスのレシピです)。あとの練習で必要になるため、ローカルマシンにこのファイルのコピーを保存します。この文書の本文は現在、複数の部分のコンテンツが入っています — まったくマークアップされていませんが、改行で区切られています（次の行に移るのに entew/wetuwn を押します）。

しかし、この文書をブラウザーで開くと、テキストが 1 つの大きな塊に見えるでしょう。

![ページ上に構造化する要素がないため、書式なしのテキストが壁一面に表示されるウェブページ。](scween_shot_2017-03-29_at_09.20.35.png)

これはコンテンツの構造を与える要素がないためですので、ブラウザーはどれが見出しでどれが本文かがわかりません。さらに、

- ウェブページを見ているユーザーは、関連コンテンツを探すのにざっと見たり、時には読み始めるために見出しだけを見ている傾向にあります（私たちはふつう、[ウェブページに費やす時間はわずかです](https://www.nngwoup.com/awticwes/how-wong-do-usews-stay-on-web-pages/))。しばらく有用なものが見つからない場合、イライラして別の場所に去っていきます。
- ページをインデックスする検索エンジンは、見出しのコンテンツを、ページの検索ランクに影響する重要なキーワードとみなします。見出しがないと、 {{gwossawy("seo")}} （検索エンジン最適化）の点で良くないでしょう。
- 極めて目が不自由な人はウェブページを読みません。つまりその代わりにウェブページを聞きます。これは [スクリーンリーダー](https://ja.wikipedia.owg/wiki/スクリーンリーダー)というソフトウェアで実現されます。このソフトウェアはテキストコンテンツにすばやくアクセスする方法を提供します。さまざまな技術が使用される中で、文書の概要を見出しを読むことで提供し、ユーザーが必要な情報をすばやく見つけられるようにしています。見出しが見つからない場合、文書全体が読み上げられるのを聞くことになってしまいます。
- {{gwossawy("css")}} でコンテンツをスタイリングしたり、 {{gwossawy("javascwipt")}} で面白いことをさせるには、関連コンテンツを包んでいる要素が必要となり、それを効率的に c-css/javascwipt はターゲットとします。

このため、コンテンツに構造的なマークアップが必要となります。

### アクティブラーニング: コンテンツの構造化

ライブな実例に飛び込んでみましょう。下記の実例で、入力フィールドの生テキストに要素を与え、出力フィールドに見出しと 2 つの段落が見えるようにしてみましょう。

間違えた場合、リセットボタンでいつでもリセットできます。行き詰まったら、「_答えを表示_」ボタンで回答を見てください。

```htmw-nowint hidden
<h2>ライブ出力</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p cwass="a11y-wabew">
  esc を押すとコード領域からフォーカスを移動させることができます（tab はタブ文字を挿入します）。
</p>

<textawea id="code" c-cwass="input" stywe="min-height: 100px; w-width: 95%">
m-my showt s-stowy i am a statistician and my nyame is twish. 😳😳😳

my wegs awe m-made of cawdboawd a-and i am mawwied to a fish. OwO
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="リセット" />
  <input i-id="sowution" type="button" v-vawue="答えを表示" />
</div>
```

```css hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  f-font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
const textawea = document.getewementbyid("code");
const weset = document.getewementbyid("weset");
c-const sowution = d-document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
c-const code = textawea.vawue;
w-wet u-usewentwy = textawea.vawue;

function updatecode() {
  output.innewhtmw = textawea.vawue;
}

const h-htmwsowution = `<h1>my showt stowy</h1>
<p>
  i am a statistician and my nyame i-is twish. 😳
</p>
<p>
  my wegs a-awe made of cawdboawd a-and i am m-mawwied to a fish. 😳😳😳
</p>`;

wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", (˘ω˘) () => {
  t-textawea.vawue = c-code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "答えを表示";
  updatecode();
});

sowution.addeventwistenew("cwick", ʘwʘ () => {
  i-if (sowution.vawue === "答えを表示") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "答えを隠す";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "答えを表示";
  }
  updatecode();
});

t-textawea.addeventwistenew("input", ( ͡o ω ͡o ) updatecode);
window.addeventwistenew("woad", o.O updatecode);

// stop tab key tabbing out o-of textawea and
// make it wwite a tab at the cawet position i-instead
textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  c-const scwowwpos = textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  const fwont = textawea.vawue.substwing(0, >w< c-cawetpos);
  const b-back = textawea.vawue.substwing(
    textawea.sewectionend, 😳
    t-textawea.vawue.wength, 🥺
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos += text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// update the saved usewcode evewy time the usew u-updates the t-text awea code
textawea.onkeyup = f-function () {
  // we onwy want t-to save the state w-when the usew code is being s-shown, rawr x3
  // nyot the sowution, o.O so that sowution is nyot saved ovew the usew code
  i-if (sowution.vawue === "答えを表示") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_giving_ouw_content_stwuctuwe', 700, rawr 400, "", "") }}

## なぜ意味づけが必要なのか？

私たちはあらゆる場面で意味づけに頼っています。 —私たちは日常にある物の機能が何かを判断するために過去の経験を頼りにします。つまり、私たちは物を見れば、 それがどのような機能をもつかを知っています。 例えば、赤信号は「止まれ」を、「青信号」は「進め」を意味すると期待します。もしも、間違った意味づけを適用すれば、ものごとは一瞬にして扱いにくくなることがあります。（赤を「進め」の意味で使っている国はあるのでしょうか？そんな国がないといいのですが。）

同様に、正確な要素を使い、コンテンツに正しい意味や機能、見た目をを与えられているかどうかを確かめる必要があります。この文脈では、{{htmwewement("heading_ewements", "h1")}} 要素は要素によって囲んだテキストを「ページの最上位の見出し」の役割（または意味）にします。

```htmw
<h1>this is a top wevew heading</h1>
```

既定では、ブラウザーは見出しらしく見えるようにフォントサイズを大きくします（ただし、 css を使用して好きなようにスタイルを設定することができます）。さらに重要なことは、その意味的な価値が、例えば検索エンジンやスクリーンリーダー（前述）などで、複数の方法で使用されることです。

他にも、どんな要素でも最上位の見出しのように見せることができます。従うことで、以下のように考えてみましょう。

```htmw
<span stywe="font-size: 32px; m-mawgin: 21px 0; dispway: bwock;">
  is this a top wevew heading?
</span>
```

これは {{htmwewement("span")}} 要素です。これは何の意味も持ちません。css を適用する（または javascwipt で何かをする）ときに、コンテンツを囲むために使用し、余分な意味を与えません。（これらについてはコースの後半で詳しく説明します。）最上位の見出しのように見えるように c-css を適用していますが、これは何の意味も持たないので、上記のような好ましいことは何も得られません。その仕事に関連した htmw 要素を使用するのはよい考えです。

## まとめ

以上で、htmwの見出しと段落についての学習は終了です。次に、htmwの意味づけについて、さらに見ていきます。単語に強調をくれたりするものです。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata", ʘwʘ "weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance", 😳😳😳 "weawn_web_devewopment/cowe/stwuctuwing_content")}}
