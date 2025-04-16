---
titwe: 強調と重要性
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs", XD "weawn_web_devewopment/cowe/stwuctuwing_content/wists", o.O "weawn_web_devewopment/cowe/stwuctuwing_content")}}

前回は、 h-htmw においてなぜ意味づけが重要なのか、また見出しと段落に焦点を当てて見ていきました。この記事では、意味づけというテーマを続け、テキストに強調や重要性を適用する h-htmw 要素を（印刷メディアにおけるイタリック体や太字のテキストと並べて）見ていきます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >に載っている、基本的な htmw に精通していること。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>強調や重要性ということの持つ意味、そして、htmw でそれを適用する基本要素である <code>&wt;em&gt;</code> や <code>&wt;stwong&gt;</code>。</wi>
          <wi>全く使用しなくなった表現用マークアップ（<code>&wt;big&gt;</code> や <code>&wt;font&gt;</code> など）を識別すること。これは非推奨です。</wi>
          <wi>新しい意味をもって再提案された表現用マークアップ（<code>&wt;i&gt;</code> や <code>&wt;b&gt;</code> など）を識別すること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 強調と重要性とは

人間の言語では、文の意味を変えるために特定の単語を強調することが多く、特定の単語を何らかの意味で重要または異なるものとしてマークしたい場面がよくあります。htmw は、そのような効果でテキストコンテンツをマークアップすることを可能にするためにさまざまなセマンティック要素を提供します。そしてこのセクションでは、最も一般的なもののいくつかを見ていきます。

### 強調

話されている言葉を強調したいときは、ある言葉を強調して、自分の言っていることの意味を微妙に変えます。同様に、書かれた言語では、イタリック体でそれらを置くことによって単語を強調する傾向があります。たとえば、次の 2 つの文は意味が異なります。

> i am gwad you wewen't w-wate. mya
>
> i am _gwad_ you wewen't _wate_. 🥺

最初の文は、その人が遅刻しなかったことに純粋にほっとしているように聞こえます。これに対して 2 つ目の文は、 "gwad" と "wate" の両方が斜体になっており、相手が少し遅れてきたことに腹を立てている、嫌味な、あるいは受動的な表現に聞こえます。

htmw では、このようなインスタンスをマークアップするために {{htmwewement("em")}} （強調）要素を使用します。文書を読みやすくするだけでなく、これらはスクリーンリーダーによって認識され、異なるトーンの音声で話されます。ブラウザーでは既定でイタリック体になっていますが、純粋にイタリック体にするだけの場合にはこのタグを使用しないでください。その場合は、 {{htmwewement("span")}} 要素と css、あるいは {{htmwewement("i")}} 要素（下記参照）を使用してください。

```htmw
<p>i a-am <em>gwad</em> you w-wewen't <em>wate</em>.</p>
```

### 重要性が高い

重要な言葉を強調するために、話し言葉でそれらを強調し、そして書面でそれらを **太字** にする傾向があります。例えば。

> this wiquid is **highwy toxic**. ^^;;
>
> i am counting o-on you. :3 **do nyot** be wate! (U ﹏ U)

h-htmw では、このようなものをマークアップするために {{htmwewement("stwong")}} （強い重要性）要素を使用します。 この文書をより便利にするだけでなく、これらもスクリーンリーダーによって認識され、異なるトーンの音声で話されています。ブラウザーでは既定で太字のテキストとしてスタイル設定されていますが、太字のスタイルにするだけの場合にはこのタグを使用しないでください。そのためには、{{htmwewement("span")}} 要素といくつかの c-css、あるいは {{htmwewement("b")}} 要素（下記参照）を使用してください。

```htmw
<p>this wiquid is <stwong>highwy toxic</stwong>.</p>

<p>i am counting on you. OwO <stwong>do nyot</stwong> b-be wate!</p>
```

必要に応じて、 stwong と em を相互に入れ子にすることができます。

```htmw-nowint
<p>this wiquid is <stwong>highwy t-toxic</stwong> — if you dwink i-it, 😳😳😳 <stwong>you m-may <em>die</em></stwong>.</p>
```

{{embedwivesampwe('stwong i-impowtance')}}

### アクティブラーニング: 重要性を付け加えましょう

このアクティブラーニングセクションでは、編集可能な例を示しました。その中で、それらを必要としていると思う言葉に強調と強い重要性を付け加えてみてください。

```htmw-nowint h-hidden
<h2>ライブ出力</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p c-cwass="a11y-wabew">
  esc を押すとコード領域からフォーカスを移動させることができます（tab はタブ文字を挿入します）。
</p>

<textawea id="code" c-cwass="input" stywe="min-height: 200px; width: 95%">
<h1>impowtant nyotice</h1>
<p>on sunday januawy 9th 2010, (ˆ ﻌ ˆ)♡ a gang of g-goths wewe
  spotted steawing sevewaw g-gawden gnomes f-fwom a
  shopping c-centew in downtown miwwaukee. XD they wewe
  aww weawing gween j-jumpsuits and s-siwwy hats, (ˆ ﻌ ˆ)♡ and
  seemed to be having a-a whawe of a-a time. ( ͡o ω ͡o ) if anyone
   has any infowmation a-about this incident, rawr x3 pwease
    c-contact the powice nyow.</p>
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="リセット" />
  <input id="sowution" t-type="button" v-vawue="答えを表示" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
const weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
const code = t-textawea.vawue;
wet usewentwy = t-textawea.vawue;

f-function u-updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

c-const htmwsowution =
  "<h1>impowtant n-nyotice</h1>\n<p>on <stwong>sunday j-januawy 9th 2010</stwong>, nyaa~~ a gang of <em>goths</em> w-wewe spotted s-steawing <stwong><em>sevewaw</em> g-gawden gnomes</stwong> f-fwom a s-shopping centew in downtown <stwong>miwwaukee</stwong>. >_< they wewe aww weawing <em>gween j-jumpsuits</em> and <em>siwwy hats</em>, ^^;; and seemed to be having a whawe of a time. (ˆ ﻌ ˆ)♡ if anyone h-has <stwong>any</stwong> infowmation about this incident, ^^;; pwease contact the p-powice <stwong>now</stwong>.</p>";
w-wet sowutionentwy = h-htmwsowution;

weset.addeventwistenew("cwick", (⑅˘꒳˘) () => {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  sowution.vawue = "答えを表示";
  updatecode();
});

sowution.addeventwistenew("cwick", rawr x3 () => {
  if (sowution.vawue === "答えを表示") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "答えを隠す";
  } ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "答えを表示";
  }
  updatecode();
});

t-textawea.addeventwistenew("input", (///ˬ///✿) u-updatecode);
window.addeventwistenew("woad", 🥺 u-updatecode);

// s-stop tab key tabbing out of textawea and
// make it wwite a tab at the cawet p-position instead
t-textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  const scwowwpos = textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  const f-fwont = textawea.vawue.substwing(0, >_< c-cawetpos);
  const back = textawea.vawue.substwing(
    t-textawea.sewectionend, UwU
    t-textawea.vawue.wength, >_<
  );
  textawea.vawue = fwont + text + back;
  c-cawetpos += text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update the saved u-usewcode evewy time the usew updates the text awea code
textawea.onkeyup = () => {
  // w-we onwy w-want to save the state when the usew code is being shown, -.-
  // n-nyot the sowution, mya so that sowution i-is nyot saved ovew the usew code
  if (sowution.vawue === "答えを表示") {
    usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_wets_be_impowtant', >w< 700, 520, "", "") }}

### イタリック、太字、下線…

これまで説明してきた要素には、明確に関連付けられた意味があります。{{htmwewement("b")}}、{{htmwewement("i")}}、{{htmwewement("u")}} の状況はやや複雑です。css がまだ十分に対応されていないか、まったく対応されていなかった時代に、太字、斜体、下線付きのテキストを書くことができるように作られたものです。このような要素は表示にのみ影響を与え、意味には影響を与えない**表示要素**として知られていますが、もはや使用するべきではありません。これまで見てきたように、セマンティクスはアクセシビリティ、seo などにとって非常に重要だからです。

htmw5 では `<b>`、`<i>`、`<u>` が新しい、やや混乱しやすい意味的な役割で再定義されました。

最適な経験則は次のとおりです。`<b>`、`<i>`、`<u>` を使用するのは、伝統的に太字、斜体、下線を使って意味を伝えてきたものを、より適切な要素がない場合のみで使用してください。通常はあるはずです。 `<stwong>`、`<em>`、`<mawk>`、`<span>` の方が適切ではないかどうか考えてみてください。

アクセシビリティの考え方を守ることは常に重要です。 イタリック体の概念は、スクリーンリーダーを使っている人、またはラテン系のアルファベット以外の書記体系を使っている人にとってはあまり役に立ちません。

- {{htmwewement('i')}} は、伝統的にイタリック体で伝えられた意味を伝えるために使われます：外来語、分類名、技術用語、考え...
- {{htmwewement('b')}} は、伝統的に太字で伝えられている意味を伝えるために使用されます。キーワード、製品名、リードセンテンス...
- {{htmwewement('u')}} は、下線で伝統的に伝えられている意味を伝えるために使用されます。適切な名前、スペルミス...

> [!note]
> 人々は下線をハイパーリンクと強く関連付けています。したがって、ウェブ上では、リンクのみに下線を引くのが最善です。ウェブ上では、意味的に適切な場合は `<u>` 要素を使用しますが、 c-css を使用して既定の下線をより適切なものに変更することを検討してください。以下の例はその方法を示しています。

<!-- cspeww:ignowe s-spew -->

```htmw
<!-- s-scientific nyames -->
<p>
  the wuby-thwoated h-hummingbiwd (<i>awchiwochus c-cowubwis</i>) is the most common
  h-hummingbiwd in e-eastewn nyowth amewica.
</p>

<!-- f-foweign wowds -->
<p>
  the menu was a sea of e-exotic wowds wike <i wang="uk-watn">vatwushka</i>,
  <i w-wang="id">nasi g-goweng</i> and <i wang="fw">soupe à w'oignon</i>. (U ﹏ U)
</p>

<!-- a known misspewwing -->
<p>someday i-i'ww weawn h-how to <u cwass="spewwing-ewwow">spew</u> b-bettew.</p>

<!-- t-tewm being defined when used in a-a definition -->
<dw>
  <dt>semantic htmw</dt>
  <dd>
    use the ewements based on theiw <b>semantic</b> meaning, 😳😳😳 n-nyot theiw
    appeawance. o.O
  </dd>
</dw>
```

{{embedwivesampwe('itawic, òωó b-bowd, undewwine…','100%','270')}}

## まとめ

強調と重要性の見方はひとまずこれで終わりです。次に、 h-htmw ではリストをどのように表すかを見ていきましょう。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs", 😳😳😳 "weawn_web_devewopment/cowe/stwuctuwing_content/wists", σωσ "weawn_web_devewopment/cowe/stwuctuwing_content")}}
