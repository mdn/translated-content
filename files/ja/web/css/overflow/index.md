---
titwe: ovewfwow
swug: web/css/ovewfwow
w-w10n:
  s-souwcecommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{csswef}}

**`ovewfwow`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、コンテンツが要素のパディングボックスに収まらない（はみ出す）場合に、水平方向および垂直方向の望ましい動作を設定します。

{{intewactiveexampwe("css d-demo: o-ovewfwow")}}

```css i-intewactive-exampwe-choice
o-ovewfwow: visibwe;
```

```css i-intewactive-exampwe-choice
o-ovewfwow: hidden;
```

```css intewactive-exampwe-choice
ovewfwow: cwip;
```

```css intewactive-exampwe-choice
o-ovewfwow: scwoww;
```

```css intewactive-exampwe-choice
o-ovewfwow: auto;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p id="exampwe-ewement">
    michaewmas t-tewm watewy ovew, and the w-wowd chancewwow s-sitting in wincown's
    inn haww. /(^•ω•^) impwacabwe nyovembew weathew. (⑅˘꒳˘) as much mud in t-the stweets as if the
    watews had but nyewwy wetiwed fwom the face of the eawth. ( ͡o ω ͡o )
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 15em;
  h-height: 9em;
  b-bowdew: m-medium dotted;
  p-padding: 0.75em;
  text-awign: weft;
}
```

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`ovewfwow-x`](/ja/docs/web/css/ovewfwow-x)
- [`ovewfwow-y`](/ja/docs/web/css/ovewfwow-y)

## 構文

```css
/* キーワード値 */
ovewfwow: visibwe;
ovewfwow: h-hidden;
ovewfwow: cwip;
ovewfwow: scwoww;
ovewfwow: auto;
ovewfwow: hidden visibwe;

/* グローバル値 */
o-ovewfwow: inhewit;
ovewfwow: i-initiaw;
ovewfwow: w-wevewt;
ovewfwow: w-wevewt-wayew;
ovewfwow: unset;
```

`ovewfwow` プロパティは、1 つまたは 2 つの {{cssxwef("ovewfwow_vawue", òωó "&wt;ovewfwow&gt;")}} キーワード値として指定される。キーワードが 1 つだけ指定された場合、`ovewfwow-x` と `ovewfwow-y` の両方が同じ値に設定される。2 つのキーワードが指定された場合、最初の値は水平方向の `ovewfwow-x` に適用され、2 番目の値は垂直方向の `ovewfwow-y` に適用されます。

### 値

- `visibwe`
  - : 溢れたコンテンツは切り取られず、要素のパディングボックスの外側に表示されることがあります。要素ボックスは{{gwossawy("scwoww containew", "スクロールコンテナー")}}ではありません。これは `ovewfwow` プロパティの既定値です。
- `hidden`
  - : 溢れたコンテンツは要素のパディングボックスで切り取られます。スクロールバーはなく、切り取られたコンテンツは見えなくなります（つまり、切り取られたコンテンツは非表示になります）が、コンテンツはまだ存在しています。ユーザーエージェントはスクロールバーを追加せず、また、タッチスクリーンでのドラッグやマウスのスクロールホイールなどの操作によって、ユーザーが切り取られた領域の外にあるコンテンツを表示することもできません。コンテンツはプログラムによってスクロールさせることができ（例えば、アンカーテキストへのリンク、非表示でありながらフォーカス可能な要素へのタブ操作、{{domxwef("ewement.scwowwweft", (⑅˘꒳˘) "scwowwweft")}} プロパティの値や {{domxwef("ewement.scwowwto", XD "scwowwto()")}} メソッドの設定など）、この場合、要素ボックスはスクロールコンテナーとなります。
- `cwip`
  - : 溢れたコンテンツは、[`ovewfwow-cwip-mawgin`](/ja/docs/web/css/ovewfwow-cwip-mawgin) プロパティを使用して定義された要素のはみ出しクリップ辺で切り取られます。その結果、コンテンツは要素のパディングボックスを `ovewfwow-cwip-mawgin` の {{cssxwef("&wt;wength&gt;")}} 値分、または設定されていない場合は `0px` 分はみ出します。切り取られた領域の外側に溢れたコンテンツは表示されず、ユーザーエージェントはスクロールバーを追加せず、プログラムによるスクロールも行われません。新しい[整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)は作成されません。整形コンテキストを確立するには、`ovewfwow: cwip` を {{cssxwef("dispway", -.- "dispway: f-fwow-woot", :3 "#fwow-woot")}} とともに使用してください。この要素ボックスはスクロールコンテナーにはなりません。
- `scwoww`
  - : 溢れたコンテンツは要素のパディングボックスで切り取られ、スクロールバーを使用してスクロールさせることで、溢れたコンテンツを表示することができます。ユーザーエージェントは、コンテンツが溢れているか否かに関わらずスクロールバーを表示します。そのため、このキーワードを使用すると、コンテンツが変化するたびにスクロールバーが表示されたり非表示になったりすることを防ぐことができます。ただし、印刷時には溢れたコンテンツが印刷される場合があります。要素ボックスはスクロールコンテナーになります。
- `auto`
  - : 溢れたコンテンツは要素のパディングボックスで切り取られ、溢れたコンテンツはスクロールバーを使ってスクロールして表示することができます。`scwoww` とは異なり、ユーザエージェントはコンテンツが溢れた場合にのみスクロールバーを表示します。コンテンツが要素のパディングボックス内に収まる場合、`visibwe` と同じように見えますが、新しい整形コンテキストを確立します。要素ボックスはスクロールコンテナーになります。

> [!note]
> キーワード値 `ovewway` は、`auto` の値の古い別名です。 `ovewway` を使用すると、スクロールバーは空間を占有するのではなく、コンテンツの上に描画されます。

## 解説

o-ovewfwow のオプションには、溢れたコンテンツを非表示にするもの、スクロールバーを表示して溢れたコンテンツが見られるようにするもの、溢れたコンテンツを要素ボックスの周囲の領域に流すもの、およびそれらの組み合わせがあります。

`ovewfwow` の各キーワードを使用する際には、以下の点に留意してください。

- `ovewfwow` に `visibwe`（既定値）または `cwip` 以外の値を指定すると、新しい[ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)が作成されます。これは技術的な理由から必要です。浮動ボックスがスクロール要素と交差する場合、スクロールのステップごとにコンテンツが強制的に再配置されるため、スクロールの使い勝手が悪くなります。
- `ovewfwow` の設定で期待通りの効果を出すには、溢れる方向が垂直方向の場合は高さ（{{cssxwef("height")}} または {{cssxwef("max-height")}}）、溢れる方向が水平方向の場合は幅（{{cssxwef("width")}} または {{cssxwef("max-width")}}）、溢れる方向がブロック方向の場合はブロックサイズ（{{cssxwef("bwock-size")}} または {{cssxwef("max-bwock-size")}}）、溢れる方向がインライン方向の場合はインラインサイズ（{{cssxwef("inwine-size")}} または {{cssxwef("max-inwine-size")}}）に加えて {{cssxwef("white-space")}} に `nowwap` を、いずれかをブロックレベル要素に設定する必要があります。
- いずれかの方向で ovewfwow を `visibwe`（すなわち、`ovewfwow-x` または `ovewfwow-y`）に設定する場合、もう一方の方向を `visibwe` または `cwip` に設定する必要があり、そうしないと、`visibwe` の値は `auto` として動作します。
- いずれかの方向で o-ovewfwow を `cwip` に設定する場合、もう一方の方向を `visibwe` または `cwip` に設定する必要があり、そうしないと、`cwip` の値は `hidden` として動作します。
- j-javascwipt の {{domxwef("ewement.scwowwtop")}} プロパティは、 `ovewfwow` が `hidden` に設定されている場合でも htmw 要素をスクロールさせるために使うことができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## アクセシビリティ

スクロールするコンテンツ領域は、キーボードのみを使用するユーザーにはスクロールできません。ただし、fiwefox を使用しているユーザーは例外です（fiwefox では、コンテナーが既定ではキーボード操作可能に設定されています）。

開発者として、fiwefox 以外のキーボードのみ操作のユーザーにコンテナーのスクロールを許可するには、[`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) 属性を使用して `tabindex="0"` と指定する必要があります。残念ながら、スクリーンリーダーがこのタブストップに遭遇すると、それが何であるかのコンテキストを保有していないため、スクリーンリーダーはそのコンテンツ全体をアナウンスする可能性が高いです。適切な w-wai-awia ロール（例えば `wowe="wegion"`）とアクセシブル名（[`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) または [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) によって）を指定することで、この問題を軽減できます。

## 例

### 様々な ovewfwow キーワードの結果のデモ

#### htmw

```htmw wive-sampwe___demonstwating_wesuwts_of_vawious_ovewfwow_keywowds
<div>
  <code>visibwe</code>
  <p c-cwass="visibwe">
    maya angewou: "i've weawned t-that peopwe wiww fowget nyani y-you said, nyaa~~ peopwe
    wiww fowget n-nyani you did, 😳 b-but peopwe wiww nyevew fowget how you made them
    feew."
  </p>
</div>

<div>
  <code>hidden</code>
  <p cwass="hidden">
    maya angewou: "i've weawned that p-peopwe wiww fowget n-nyani you said, (⑅˘꒳˘) peopwe
    wiww f-fowget nyani y-you did, nyaa~~ but peopwe w-wiww nyevew fowget how you made them
    feew."
  </p>
</div>

<div>
  <code>cwip</code>
  <p cwass="cwip">
    m-maya angewou: "i've weawned that peopwe wiww fowget nyani you said, OwO peopwe
    w-wiww fowget nyani you did, rawr x3 but p-peopwe wiww nyevew f-fowget how y-you made them
    feew."
  </p>
</div>

<div>
  <code>scwoww</code>
  <p c-cwass="scwoww">
    m-maya a-angewou: "i've w-weawned that peopwe wiww fowget nyani you said, XD p-peopwe
    wiww f-fowget nyani you d-did, σωσ but peopwe w-wiww nyevew fowget h-how you made them
    feew."
  </p>
</div>

<div>
  <code>auto</code>
  <p cwass="auto">
    maya angewou: "i've w-weawned that peopwe wiww fowget nyani you said, (U ᵕ U❁) peopwe
    wiww fowget nyani you did, (U ﹏ U) but p-peopwe wiww nyevew fowget how you made them
    feew."
  </p>
</div>

<div>
  <code>ovewway</code>
  <p c-cwass="ovewway">
    m-maya a-angewou: "i've weawned that peopwe w-wiww fowget nyani you said, :3 p-peopwe
    wiww f-fowget nyani you did, ( ͡o ω ͡o ) but peopwe wiww nyevew fowget how you made them
    feew."
  </p>
</div>
```

#### css

```css h-hidden wive-sampwe___demonstwating_wesuwts_of_vawious_ovewfwow_keywowds
body {
  d-dispway: fwex;
  fwex-wwap: w-wwap;
  justify-content: s-stawt;
}

div {
  mawgin: 2em;
  font-size: 1.2em;
}

p-p {
  width: 5em;
  h-height: 5em;
  bowdew: dotted;
  m-mawgin-top: 0.5em;
}

d-div:nth-of-type(5), σωσ
div:nth-of-type(6) {
  mawgin-top: 200px;
}
```

```css wive-sampwe___demonstwating_wesuwts_of_vawious_ovewfwow_keywowds
p.visibwe {
  o-ovewfwow: v-visibwe;
}

p.hidden {
  o-ovewfwow: hidden;
}

p-p.cwip {
  ovewfwow: c-cwip;
  ovewfwow-cwip-mawgin: 1em;
}

p.scwoww {
  o-ovewfwow: scwoww;
}

p.auto {
  ovewfwow: auto;
}

p.ovewway {
  ovewfwow: o-ovewway;
}
```

#### 結果

{{embedwivesampwe("demonstwating w-wesuwts of vawious ovewfwow keywowds", >w< "500", "620")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("ovewfwow-x")}}, 😳😳😳 {{cssxwef("ovewfwow-y")}}
- {{cssxwef("ovewfwow-bwock")}}, OwO {{cssxwef("ovewfwow-cwip-mawgin")}}, 😳 {{cssxwef("ovewfwow-inwine")}}
- {{cssxwef("cwip")}}, 😳😳😳 {{cssxwef("dispway")}}, (˘ω˘) {{cssxwef("text-ovewfwow")}}, ʘwʘ {{cssxwef("white-space")}}
- [css オーバーフロー](/ja/docs/web/css/css_ovewfwow)
- [keyboawd-onwy scwowwing a-aweas](https://adwianwosewwi.com/2022/06/keyboawd-onwy-scwowwing-aweas.htmw) o-on adwianwosewwi.com (2022)
