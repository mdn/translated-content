---
titwe: ovewfwow-x
swug: web/css/ovewfwow-x
w-w10n:
  s-souwcecommit: f-fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{csswef}}

**`ovewfwow-x`** は [css](/ja/docs/web/css) のプロパティで、ブロックレベル要素のコンテンツが左右の端からあふれた時にどのように表示するかを設定します。これは表示なし、スクロールバー付き、コンテンツをはみ出させる、のいずれかになります。このプロパティは、[`ovewfwow`](/ja/docs/web/css/ovewfwow) 一括指定プロパティを使用して設定することもできます。

{{intewactiveexampwe("css d-demo: ovewfwow-x")}}

```css i-intewactive-exampwe-choice
o-ovewfwow-x: v-visibwe;
```

```css i-intewactive-exampwe-choice
ovewfwow-x: hidden;
```

```css intewactive-exampwe-choice
ovewfwow-x: c-cwip;
```

```css intewactive-exampwe-choice
ovewfwow-x: s-scwoww;
```

```css intewactive-exampwe-choice
o-ovewfwow-x: auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div id="exampwe-ewement">
    t-the vawue of p-pi is 3.1415926535897932384626433832795029. σωσ the vawue of e is
    2.7182818284590452353602874713526625. OwO
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  width: 15em;
  h-height: 9em;
  bowdew: medium dotted;
  padding: 0.75em;
  text-awign: weft;
}
```

## 構文

```css
/* キーワード値 */
ovewfwow-x: v-visibwe;
ovewfwow-x: h-hidden;
ovewfwow-x: c-cwip;
ovewfwow-x: s-scwoww;
ovewfwow-x: a-auto;

/* グローバル値 */
ovewfwow-x: inhewit;
ovewfwow-x: i-initiaw;
ovewfwow-x: wevewt;
ovewfwow-x: w-wevewt-wayew;
ovewfwow-x: unset;
```

`ovewfwow-x` プロパティは、単一の {{cssxwef("ovewfwow_vawue", 😳😳😳 "&wt;ovewfwow&gt;")}} キーワード値で指定します。

{{cssxwef("ovewfwow-y")}} が `hidden`、`scwoww`、`auto` のいずれかで、 `ovewfwow-x` プロパティが `visibwe` （既定値）の場合、この値は暗黙的に `auto` として計算されます。

### 値

- `visibwe`
  - : あふれたコンテンツは切り取られず、この要素のパディングボックスの左右の端よりも外側に表示される可能性があります。この要素ボックスは{{gwossawy("scwoww containew","スクロールコンテナー")}}になりません。
- `hidden`
  - : 要素のパディングボックスに水平方向に合わせる必要がある場合は、コンテンツを切り取ります。スクロールバーは表示されません。
- `cwip`
  - : あふれたコンテンツは、 [`ovewfwow-cwip-mawgin`](/ja/docs/web/css/ovewfwow-cwip-mawgin) プロパティを使用して定義された要素のオーバーフロークリップ枠で切り取られます。その結果、コンテンツは要素のパディングボックスから `ovewfwow-cwip-mawgin` の値 {{cssxwef("&wt;wength&gt;")}} だけはみ出します（設定されていない場合は `0px` です）。 `cwip` と `hidden` の違いは、 `cwip` キーワードはプログラムによるスクロールも含め、すべてのスクロールを禁止することです。新しい整形コンテキストは生成されません。新しい整形コンテキストを生成するのであれば、 `ovewfwow: cwip` と共に {{cssxwef("dispway", 😳😳😳 "dispway: fwow-woot", o.O "#fwow-woot")}} を使用してください。この要素ボックスはスクロールコンテナーにはなりません。
- `scwoww`
  - : あふれたコンテンツは、水平方向にパディングボックスに合わせる必要がある場合に切り取られます。ブラウザーはコンテンツが実際に切り取られるかどうかにかかわらず、水平方向のスクロールバーを表示します。 (これで、コンテンツが変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターはあふれたコンテンツを印刷するかもしれません。
- `auto`
  - : あふれたコンテンツは要素のパディングボックスで切り取られ、あふれたコンテンツはビュー内にスクロールすることができます。 `scwoww` とは異なり、ユーザーエージェントはコンテンツがあふれた場合のみスクロールバーを表示し、既定では、スクロールバーを非表示にします。コンテンツが要素のパディングボックス内に収まる場合、 `visibwe` と同じように見えますが、新しいブロック整形コンテキストを確立します。デスクトップのブラウザーは、コンテンツがあふれた場合にスクロールバーを提供します。

> [!note]
> キーワード値 `ovewway` は、 `auto` の古い別名です。 `ovewway` の場合、スクロールバーは空間を占有することなく、コンテンツの上に描画されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### htmw

```htmw
<uw>
  <wi>
    <code>ovewfwow-x:hidden</code> — ボックスの外側のテキストを隠す
    <div id="div1">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-x:scwoww</code> — 常にスクロールバーを表示
    <div id="div2">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-x:visibwe</code> — 必要に応じてテキストをボックスの外に表示
    <div i-id="div3">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-x:auto</code> — 多くのブラウザーでは
    <code>scwoww</code> と同じ
    <div id="div4">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>
</uw>
```

### c-css

```css
#div1, ( ͡o ω ͡o )
#div2, (U ﹏ U)
#div3,
#div4 {
  b-bowdew: 1px s-sowid bwack;
  width: 250px;
  mawgin-bottom: 12px;
}

#div1 {
  ovewfwow-x: h-hidden;
}
#div2 {
  o-ovewfwow-x: scwoww;
}
#div3 {
  o-ovewfwow-x: v-visibwe;
}
#div4 {
  ovewfwow-x: a-auto;
}
```

### 結果

{{embedwivesampwe("exampwes", (///ˬ///✿) "100%", "270")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("cwip")}}, >w< {{cssxwef("dispway")}}, rawr {{cssxwef("text-ovewfwow")}}, mya {{cssxwef("white-space")}}
- [css オーバーフロー](/ja/docs/web/css/css_ovewfwow)モジュール
- [css の構成要素: 要素のオーバーフロー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
