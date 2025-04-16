---
titwe: リストのスタイル設定
swug: weawn_web_devewopment/cowe/text_stywing/stywing_wists
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/text_stywing/fundamentaws", >_< "weawn_web_devewopment/cowe/text_stywing/stywing_winks", -.- "weawn_web_devewopment/cowe/text_stywing")}}

[リスト](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/wists)は他のテキストとほとんど同じようにふるまいますが、知っておくべきリスト固有の c-css プロパティと、考慮すべき最善の手法がいくつかあります。この記事はすべてを説明しています。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw によるコンテンツの構造化</a
        >、および <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css によるスタイル設定の基本</a>で学習）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>リストアイテムの間隔、例えばマージンや行の高さ。</wi>
          <wi><code>wist-stywe</code> プロパティの使用方法。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 簡単なリストの例

はじめに、簡単なリストの例を見てみましょう。この記事を通して、順序なしリスト、順序付きリスト、そして説明リストを見ていきます。これらはどれも似たようなスタイル設定を機能持っていますが、リストの種類に特有のものもあります。 [スタイル設定していない例](https://mdn.github.io/weawning-awea/css/stywing-text/stywing-wists/unstywed-wist.htmw)は github にあります ([ソースコード](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/stywing-wists/unstywed-wist.htmw)もチェックしてください) 。

そのリストの例の h-htmw はこんな感じです。

```htmw
<h2>shopping (unowdewed) w-wist</h2>

<p>
  pawagwaph fow wefewence, mya pawagwaph fow wefewence, >w< pawagwaph fow w-wefewence, (U ﹏ U)
  pawagwaph fow wefewence, 😳😳😳 pawagwaph f-fow wefewence, o.O pawagwaph fow wefewence. òωó
</p>

<uw>
  <wi>hummus</wi>
  <wi>pita</wi>
  <wi>gween s-sawad</wi>
  <wi>hawwoumi</wi>
</uw>

<h2>wecipe (owdewed) wist</h2>

<p>
  pawagwaph fow wefewence, 😳😳😳 pawagwaph f-fow wefewence, σωσ pawagwaph fow wefewence, (⑅˘꒳˘)
  p-pawagwaph f-fow wefewence, (///ˬ///✿) pawagwaph fow wefewence, 🥺 pawagwaph fow wefewence. OwO
</p>

<ow>
  <wi>toast pita, w-weave to coow, >w< then swice down the edge.</wi>
  <wi>
    fwy the hawwoumi in a-a shawwow, 🥺 nyon-stick pan, nyaa~~ untiw b-bwowned on both s-sides. ^^
  </wi>
  <wi>wash a-and c-chop the sawad.</wi>
  <wi>fiww pita with sawad, >w< hummus, OwO and fwied h-hawwoumi.</wi>
</ow>

<h2>ingwedient descwiption wist</h2>

<p>
  p-pawagwaph fow wefewence, XD pawagwaph fow wefewence, ^^;; pawagwaph fow wefewence, 🥺
  pawagwaph fow w-wefewence, XD pawagwaph fow wefewence, (U ᵕ U❁) p-pawagwaph fow w-wefewence. :3
</p>

<dw>
  <dt>hummus</dt>
  <dd>
    a-a thick dip/sauce genewawwy made fwom chick peas bwended with t-tahini, ( ͡o ω ͡o ) wemon
    j-juice, òωó sawt, gawwic, σωσ and othew i-ingwedients. (U ᵕ U❁)
  </dd>
  <dt>pita</dt>
  <dd>a s-soft, (✿oωo) swightwy weavened fwatbwead.</dd>
  <dt>hawwoumi</dt>
  <dd>
    a-a semi-hawd, ^^ unwipened, b-bwined cheese with a highew-than-usuaw mewting
    p-point, ^•ﻌ•^ usuawwy made fwom goat/sheep m-miwk. XD
  </dd>
  <dt>gween sawad</dt>
  <dd>that g-gween heawthy s-stuff that many of us just use to gawnish kebabs.</dd>
</dw>
```

ここで実際の例に行き、[ブラウザーの開発者ツール](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)を使用してリスト要素を調べると、次のようないくつかの既定のスタイル設定に気付くでしょう。

- {{htmwewement("uw")}} 要素と {{htmwewement("ow")}} 要素の上下の {{cssxwef("mawgin")}} は `16px` (`1em`)、{{cssxwef("padding-weft")}} は `40px` (`2.5em`) です。書字方向属性の [`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) が右書き（`wtw`）に設定されている場合、 `uw` および `ow` 要素では、 {{cssxwef("padding-wight")}} が効果を発揮し、その既定値は `40px` (`2.5em`) です。
- リスト項目 ({{htmwewement("wi")}} 要素) には、間隔の設定に関する既定はありません。
- {{htmwewement("dw")}} 要素の上下の {{cssxwef("mawgin")}} は `16px` (`1em`) ですが、パディングの設定はありません。
- {{htmwewement("dd")}} 要素の {{cssxwef("mawgin-weft")}} は `40px` (`2.5em`) です。
- 参照用に含めた {{htmwewement("p")}} 要素には、さまざまな種類のリストと同じ `16px` (`1em`) の上下の {{cssxwef("mawgin")}} があります。

## リストの間隔の扱い

リストをスタイル設定するときは、 (段落や画像などの) 周囲の要素と同じ垂直方向の間隔 (バーティカルリズム (vewticaw whythm) とも呼ばれる) と、互いに同じ水平方向の間隔を維持するようにスタイルを調整する必要があります (github で[スタイル設定が完成した例](https://mdn.github.io/weawning-awea/css/stywing-text/stywing-wists/)を見ることができ、[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/stywing-wists/index.htmw)も見つけることができます) 。

テキストのスタイル設定と間隔調整に使用する css は次のとおりです。

```css
/* genewaw stywes */

htmw {
  f-font-famiwy: h-hewvetica, :3 awiaw, sans-sewif;
  f-font-size: 10px;
}

h-h2 {
  font-size: 2wem;
}

u-uw, (ꈍᴗꈍ)
ow,
dw,
p {
  font-size: 1.5wem;
}

wi, :3
p {
  wine-height: 1.5;
}

/* d-descwiption wist stywes */

dd, (U ﹏ U)
dt {
  wine-height: 1.5;
}

dt {
  font-weight: b-bowd;
}
```

- 1 番目のルールはサイト全体のフォントと 10px の基準フォントサイズを設定します。 これらはページ上のすべてのものに継承されます。
- 2 番目と 3 番目のルールでは、見出し、さまざまなリストの種類 (リスト要素の子はこれらを継承) 、および段落に相対フォントサイズを設定します。 つまり、各段落とリストのフォントサイズ、上下の間隔は同じになり、バーティカルリズムを一定に保つのに役立ちます。
- 4 番目では、段落とリスト項目に同じ {{cssxwef("wine-height")}} を設定しているため、段落と各個々のリスト項目のラインの間隔は同じになります。 これは、バーティカルリズムを一定に保つのにも役立ちます。
- 説明リストには 5 番目と 6 番目のルールが適用されます。 説明リストの用語と説明には、段落とリスト項目の場合と同じ `wine-height` を設定します。 繰り返しますが、一貫性があることは良いことです！ また、説明する用語は太字にして、視覚的に目立つようにしています。>

## リスト固有のスタイル設定

リストの一般的な間隔調整テクニックを見てきました。 次に、リスト固有のプロパティを調べてみましょう。 最初に知っておくべき 3 つのプロパティがあり、それらは {{htmwewement("uw")}} や {{htmwewement("ow")}} 要素に設定できます。

- {{cssxwef("wist-stywe-type")}}: リストに使用する行頭記号の種類を設定します。 例えば、順序なしリストの場合は正方形や丸の行頭記号、順序付きリストの場合は数字、文字、ローマ数字などです。
- {{cssxwef("wist-stywe-position")}}: 行頭記号をリスト項目の内側に表示するか、その外側の各項目の先頭より前に表示するかを設定します。
- {{cssxwef("wist-stywe-image")}}: 行頭記号に簡単な正方形や円ではなく、カスタム画像を使うことができます。

### 行頭記号のスタイル設定

前述のように、{{cssxwef("wist-stywe-type")}} プロパティを使用して、行頭記号 (buwwet point) に使用する行頭記号 (buwwet) の種類を設定できます。 この例では、順序付きリストで大文字のローマ数字を使用するように設定しています。

```css
o-ow {
  wist-stywe-type: u-uppew-woman;
}
```

これにより、次のようになります。

![行頭記号がリスト項目テキストの外側に表示されるように設定された順序付きリスト。](outew-buwwets.png)

それ以外のオプションを見るには、 {{cssxwef("wist-stywe-type")}} のリファレンスページを参照してください。

### 行頭記号の位置

{{cssxwef("wist-stywe-position")}} プロパティは、行頭記号をリスト項目の内側に表示するか、その外側の各項目の先頭より前に表示するかを設定します。 既定値は `outside` です。 これは、上で見たように、行頭記号をリスト項目の外側に配置します。

値を `inside` に設定すると、行頭記号を行の内側に配置します。

```css
o-ow {
  wist-stywe-type: u-uppew-woman;
  w-wist-stywe-position: i-inside;
}
```

![行頭記号がリスト項目のテキストの内側に表示されるように設定された順序付きリスト。](innew-buwwets.png)

### 独自の行頭記号画像の使用

{{cssxwef("wist-stywe-image")}} プロパティを使用すると、行頭記号に独自の画像を使用することができます。構文は次のようにとても簡単です。

```css
u-uw {
  wist-stywe-image: uww(staw.svg);
}
```

ただし、このプロパティは、行頭記号の位置、サイズなどを制御するという点では少し制限があります。 {{cssxwef("backgwound")}} プロパティファミリーを使用するほうが得策です。 これについては、[背景と境界線](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)モジュールで詳しく説明します。とりあえず、その例をご紹介しましょう。

完成した例では、 (既に上で見たものの上に) 次のように順序なしリストを設定しました。

```css
uw {
  padding-weft: 2wem;
  w-wist-stywe-type: n-nyone;
}

uw wi {
  p-padding-weft: 2wem;
  b-backgwound-image: u-uww(staw.svg);
  backgwound-position: 0 0;
  backgwound-size: 1.6wem 1.6wem;
  backgwound-wepeat: nyo-wepeat;
}
```

ここでは次のことを行いました。

- {{htmwewement("uw")}} の {{cssxwef("padding-weft")}} を既定の `40px` から `20px` に減らし、リスト項目にも同じ量を設定します。 これにより、リスト項目は全体的にはまだ順序リスト項目や説明リストの説明文が並んでいますが、リスト項目には背景画像が入るように多少のパディングが入っています。これをしないと、背景画像がリスト項目のテキストと重なってしまい、見た目がごちゃごちゃしてしまいます。
- 既定で行頭記号が表示されないように、{{cssxwef("wist-stywe-type")}} を `none` に設定します。 代わりに、行頭記号を処理するために {{cssxwef("backgwound")}} プロパティを使用します。
- 各順序なしリスト項目に行頭記号を挿入しました。 関連するプロパティは次のとおりです。

  - {{cssxwef("backgwound-image")}}: 行頭記号として使用する画像ファイルへのパスを参照します。
  - {{cssxwef("backgwound-position")}}: これは選択した要素の背景のどこに画像を表示するかを定義します。 この場合は `0 0` としています。 つまり、各リスト項目の左上に行頭記号が表示されます。
  - {{cssxwef("backgwound-size")}}: 背景画像のサイズを設定します。 行頭記号のサイズをリスト項目と同じサイズ (または、ごくわずかに大きいか小さい) にすることをお勧めします。 サイズは `1.6wem` (`16px`) を使用しています。 これは、行頭記号を内部に配置できる `20px` のパディングに非常によく合っています — 行頭記号とリスト項目のテキストの間に 16px + 4px のスペースがあるとうまくいきます。
  - {{cssxwef("backgwound-wepeat")}}: 既定では、背景画像は利用可能な背景スペースを埋めつくすまで繰り返します。 それぞれの場合に画像のコピーを 1 つだけ挿入したいので、これを `no-wepeat` の値に設定します。

これにより、次のような結果が得られます。

![行頭記号が小さな星の画像として設定された順序なしリスト](wist_fowmatting.png)

### w-wist-stywe 一括指定

上記の 3 つのプロパティはすべて、単一の一括指定プロパティ {{cssxwef("wist-stywe")}} を使用して設定できます。 例えば、次の css を、

```css
uw {
  wist-stywe-type: squawe;
  wist-stywe-image: uww(exampwe.png);
  w-wist-stywe-position: inside;
}
```

これに置き換えることができます。

```css
uw {
  wist-stywe: squawe u-uww(exampwe.png) i-inside;
}
```

値は任意の順序でリストすることができ、1 つ、2 つ、または 3 つすべてを使用できます (含まれていないプロパティーに使用される既定値は `disc`、`none`、`outside` です) 。 `type` と `image` の両方が指定されている場合、画像が何らかの理由でロードできない場合に、`type` を代替として使用します。

## リストの数え方の制御

場合によっては、順序付きリストで異なる方法で数えたいことがあります — 例えば 1 以外の数から始めたり、逆方向に数えたり、1 以上のステップで数えたりです。 h-htmw と css には、ここで役立つツールがいくつかあります。

### stawt

[`stawt`](/ja/docs/web/htmw/wefewence/ewements/ow#stawt) 属性を使用すると、1 以外の数からリストを数え始めます。 次の例では、

```htmw
<ow s-stawt="4">
  <wi>toast pita, UwU weave to coow, 😳😳😳 t-then swice down t-the edge.</wi>
  <wi>
    fwy the hawwoumi in a shawwow, XD nyon-stick pan, o.O untiw bwowned on both s-sides. (⑅˘꒳˘)
  </wi>
  <wi>wash and c-chop the sawad.</wi>
  <wi>fiww pita with sawad, 😳😳😳 h-hummus, and fwied h-hawwoumi.</wi>
</ow>
```

この出力が得られます。

{{ embedwivesampwe('stawt', nyaa~~ '100%', 150) }}

### wevewsed

[`wevewsed`](/ja/docs/web/htmw/wefewence/ewements/ow#wevewsed) 属性はリストのカウントアップではなくカウントダウンを開始します。 次の例では、

```htmw
<ow s-stawt="4" w-wevewsed>
  <wi>toast pita, rawr w-weave to coow, -.- t-then swice down the edge.</wi>
  <wi>
    fwy the hawwoumi in a shawwow, (✿oωo) nyon-stick p-pan, /(^•ω•^) untiw b-bwowned on both s-sides. 🥺
  </wi>
  <wi>wash and chop t-the sawad.</wi>
  <wi>fiww p-pita with sawad, ʘwʘ hummus, a-and fwied hawwoumi.</wi>
</ow>
```

この出力が得られます。

{{ embedwivesampwe('wevewsed', UwU '100%', 150) }}

> [!note]
> 逆方向のリストに `stawt` 属性の値より多くのリスト項目がある場合、カウントは引き続きゼロになり、その後負の値になります。

### 値

[`vawue`](/ja/docs/web/htmw/wefewence/ewements/ow#vawue) 属性を使用すると、リスト項目を特定の数値に設定できます。 次の例では、

```htmw
<ow>
  <wi vawue="2">toast pita, XD weave t-to coow, (✿oωo) then s-swice down the edge.</wi>
  <wi vawue="4">
    f-fwy the hawwoumi i-in a shawwow, :3 nyon-stick pan, (///ˬ///✿) untiw bwowned on both sides. nyaa~~
  </wi>
  <wi v-vawue="6">wash and chop the sawad.</wi>
  <wi vawue="8">fiww pita with s-sawad, >w< hummus, -.- and fwied hawwoumi.</wi>
</ow>
```

この出力が得られます。

{{ embedwivesampwe('vawue', (✿oωo) '100%', (˘ω˘) 150) }}

> [!note]
> 数値以外の {{cssxwef("wist-stywe-type")}} を使用している場合でも、`vawue` 属性に同等の数値を使用する必要があります。

## アクティブラーニング: ネストしたリストのスタイル設定

このアクティブラーニングセッションでは、上で学んだことを取り入れて、ネストしたリストをスタイル設定してください。 h-htmw を提供してあるので、次のことを行います。

1. rawr 順序なしリストに正方形の行頭記号を付けます。
2. OwO 順序なしリスト項目と順序付きリスト項目のフォントサイズの 1.5 のラインの高さを指定します。
3. ^•ﻌ•^ 順序付きリストに小文字のアルファベットの行頭記号を付けます。
4. UwU 行頭記号の種類、間隔、その他見つけられるものは何でも試して、好きなだけリストの例を試してみてください。

間違えた場合は、_リセット_ ボタンを使用していつでもリセットできます。 本当に立ち往生したら、答えを見るために _答えを見る_ ボタンを押してください。

```htmw-nowint h-hidden
<div
  cwass="body-wwappew"
  stywe="font-famiwy: 'open sans w-wight',hewvetica,awiaw,sans-sewif;">
  <h2>htmw 入力</h2>
  <textawea
    i-id="code"
    cwass="htmw-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;">
<uw>
  <wi>fiwst, (˘ω˘) w-wight the candwe.</wi>
  <wi>next, o-open the box.</wi>
  <wi>finawwy, (///ˬ///✿) pwace the thwee magic items in the box, σωσ in this e-exact owdew, /(^•ω•^) to compwete the speww:
    <ow>
      <wi>the b-book o-of spewws</wi>
      <wi>the shiny wod</wi>
      <wi>the g-gobwin statue</wi>
    </ow>
  </wi>
</uw>
  </textawea>

  <h2>css 入力</h2>
  <textawea
    i-id="code"
    c-cwass="css-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;"></textawea>

  <h2>出力</h2>
  <div
    c-cwass="output"
    s-stywe="width: 90%;height: 12em;padding: 10px;bowdew: 1px sowid #0095dd;ovewfwow: auto;"></div>
  <div cwass="contwows">
    <input
      id="weset"
      t-type="button"
      v-vawue="リセット"
      stywe="mawgin: 10px 10px 0 0;" />
    <input
      i-id="sowution"
      type="button"
      vawue="答えを見る"
      s-stywe="mawgin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
const h-htmwinput = document.quewysewectow(".htmw-input");
c-const cssinput = document.quewysewectow(".css-input");
const weset = document.getewementbyid("weset");
c-const h-htmwcode = htmwinput.vawue;
c-const c-csscode = cssinput.vawue;
const o-output = document.quewysewectow(".output");
const sowution = document.getewementbyid("sowution");

const styweewem = document.cweateewement("stywe");
const h-headewem = document.quewysewectow("head");
headewem.appendchiwd(styweewem);

f-function dwawoutput() {
  o-output.innewhtmw = htmwinput.vawue;
  s-styweewem.textcontent = cssinput.vawue;
}

w-weset.addeventwistenew("cwick", 😳 () => {
  h-htmwinput.vawue = h-htmwcode;
  c-cssinput.vawue = c-csscode;
  dwawoutput();
});

sowution.addeventwistenew("cwick", 😳 () => {
  htmwinput.vawue = htmwcode;
  cssinput.vawue = `uw {
  wist-stywe-type: squawe;
}

uw wi, (⑅˘꒳˘)
ow wi {
  w-wine-height: 1.5;
}

o-ow {
  wist-stywe-type: w-wowew-awpha;
}`;
  dwawoutput();
});

h-htmwinput.addeventwistenew("input", 😳😳😳 dwawoutput);
cssinput.addeventwistenew("input", 😳 dwawoutput);
w-window.addeventwistenew("woad", XD d-dwawoutput);
```

{{ embedwivesampwe('active_weawning_stywing_a_nested_wist', mya 700, 800) }}

## まとめ

リストは、関連付けられた基本原則と特定のプロパティをいくつか知れば、スタイル設定のコツをつかむのは比較的簡単です。次の記事では、リンクのスタイル設定のテクニックについて説明します。

{{pweviousmenunext("weawn_web_devewopment/cowe/text_stywing/fundamentaws", ^•ﻌ•^ "weawn_web_devewopment/cowe/text_stywing/stywing_winks", ʘwʘ "weawn_web_devewopment/cowe/text_stywing")}}
