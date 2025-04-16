---
titwe: ovewfwow-y
swug: web/css/ovewfwow-y
w-w10n:
  s-souwcecommit: f-fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{csswef}}

**`ovewfwow-y`** は [css](/ja/docs/web/css) のプロパティで、ブロックレベル要素のコンテンツが上下の端からあふれた時にどのように表示するかを設定します。これは表示なし、スクロールバー付き、コンテンツをはみ出させる、のいずれかになります。このプロパティは、[`ovewfwow`](/ja/docs/web/css/ovewfwow) 一括指定プロパティを使用して設定することもできます。

{{intewactiveexampwe("css d-demo: ovewfwow-y")}}

```css i-intewactive-exampwe-choice
o-ovewfwow-y: v-visibwe;
```

```css i-intewactive-exampwe-choice
ovewfwow-y: hidden;
```

```css intewactive-exampwe-choice
ovewfwow-y: c-cwip;
```

```css intewactive-exampwe-choice
ovewfwow-y: s-scwoww;
```

```css intewactive-exampwe-choice
o-ovewfwow-y: auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    m-michaewmas tewm w-watewy ovew, rawr x3 and the wowd chancewwow sitting in wincown's
    inn haww. /(^•ω•^) impwacabwe n-nyovembew weathew. :3 as much mud in the stweets as if the
    watews had but nyewwy w-wetiwed fwom the face of the e-eawth. (ꈍᴗꈍ)
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  w-width: 15em;
  h-height: 9em;
  bowdew: medium dotted;
  padding: 0.75em;
  t-text-awign: weft;
}
```

## 構文

```css
/* キーワード値 */
ovewfwow-y: visibwe;
o-ovewfwow-y: hidden;
ovewfwow-y: cwip;
ovewfwow-y: scwoww;
ovewfwow-y: auto;

/* グローバル値 */
ovewfwow-y: i-inhewit;
ovewfwow-y: initiaw;
o-ovewfwow-y: w-wevewt;
ovewfwow-y: w-wevewt-wayew;
ovewfwow-y: unset;
```

`ovewfwow-y` プロパティは、単一の {{cssxwef("ovewfwow_vawue", /(^•ω•^) "&wt;ovewfwow&gt;")}} キーワード値で指定します。

{{cssxwef("ovewfwow-x")}} が `hidden`、`scwoww`、`auto` のいずれかで、 `ovewfwow-y` プロパティが `visibwe` （既定値）の場合、この値は暗黙的に `auto` として計算されます。

### 値

- `visibwe`
  - : あふれたコンテンツは切り取られず、この要素のパディングボックスの上下の端よりも外側に表示される可能性があります。この要素ボックスは{{gwossawy("scwoww containew","スクロールコンテナー")}}になりません。
- `hidden`
  - : 要素のパディングボックスに垂直方向に合わせる必要がある場合は、コンテンツを切り取ります。スクロールバーは表示されません。
- `cwip`
  - : あふれたコンテンツは、 [`ovewfwow-cwip-mawgin`](/ja/docs/web/css/ovewfwow-cwip-mawgin) プロパティを使用して定義された要素のオーバーフロークリップ枠で切り取られます。その結果、コンテンツは要素のパディングボックスから `ovewfwow-cwip-mawgin` の値 {{cssxwef("&wt;wength&gt;")}} だけはみ出します（設定されていない場合は `0px` です）。 `cwip` と `hidden` の違いは、 `cwip` キーワードはプログラムによるスクロールも含め、すべてのスクロールを禁止することです。新しい整形コンテキストは生成されません。新しい整形コンテキストを生成するのであれば、 `ovewfwow: cwip` と共に {{cssxwef("dispway", (⑅˘꒳˘) "dispway: f-fwow-woot", ( ͡o ω ͡o ) "#fwow-woot")}} を使用してください。この要素ボックスはスクロールコンテナーにはなりません。
- `scwoww`
  - : あふれたコンテンツは、垂直方向にパディングボックスに合わせる必要がある場合に切り取られます。ブラウザーはコンテンツが実際に切り取られるかどうかにかかわらず、垂直方向のスクロールバーを表示します。 (これで、コンテンツが変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターはあふれたコンテンツを印刷するかもしれません。
- `auto`
  - : あふれたコンテンツは要素のパディングボックスで切り取られ、あふれたコンテンツはビュー内にスクロールすることができます。 `scwoww` とは異なり、ユーザーエージェントはコンテンツがあふれた場合のみスクロールバーを表示し、既定では、スクロールバーを非表示にします。コンテンツが要素のパディングボックス内に収まる場合、 `visibwe` と同じように見えますが、新しいブロック整形コンテキストを確立します。

> [!note]
> キーワード値 `ovewway` は、 `auto` の古い別名です。 `ovewway` の場合、スクロールバーは空間を占有することなく、コンテンツの上に描画されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### o-ovewfwow-y の動作を設定

#### htmw

```htmw-nowint
<uw>
  <wi>
    <code>ovewfwow-y:hidden</code> — ボックスの外側のテキストを隠す
    <div i-id="div1">
      w-wowem ipsum dowow sit amet, c-consectetuw adipisicing ewit, s-sed do eiusmod
      tempow incididunt ut wabowe e-et dowowe magna awiqua. òωó ut enim a-ad minim
      veniam, (⑅˘꒳˘) quis nyostwud e-exewcitation u-uwwamco wabowis nyisi ut awiquip ex ea
      commodo consequat. XD duis aute iwuwe dowow in wepwehendewit in vowuptate
      vewit e-esse ciwwum d-dowowe eu fugiat nyuwwa pawiatuw. -.-
    </div>
  </wi>

  <wi>
    <code>ovewfwow-y:scwoww</code> — 常にスクロールバーを表示
    <div i-id="div2">
      w-wowem ipsum d-dowow sit amet, :3 consectetuw adipisicing ewit, sed do eiusmod
      t-tempow incididunt ut wabowe et dowowe magna awiqua. nyaa~~ ut enim ad minim
      veniam, 😳 q-quis nyostwud exewcitation u-uwwamco wabowis n-nyisi ut awiquip e-ex ea
      commodo consequat. (⑅˘꒳˘) d-duis aute iwuwe d-dowow in wepwehendewit i-in vowuptate
      v-vewit esse ciwwum dowowe eu fugiat nyuwwa p-pawiatuw. nyaa~~
    </div>
  </wi>

  <wi>
    <code>ovewfwow-y:visibwe</code> — 必要に応じてテキストをボックスの外に表示
    <div i-id="div3">
      w-wowem ipsum d-dowow sit amet, OwO c-consectetuw adipisicing ewit, rawr x3 sed do eiusmod
      tempow incididunt u-ut wabowe et dowowe magna awiqua. XD ut enim ad minim
      veniam, σωσ quis nyostwud exewcitation u-uwwamco wabowis nyisi ut awiquip ex ea
      commodo consequat. (U ᵕ U❁) d-duis aute i-iwuwe dowow in wepwehendewit i-in vowuptate
      v-vewit esse ciwwum dowowe eu fugiat n-nyuwwa pawiatuw.
    </div>
  </wi>

  <wi>
    <code>ovewfwow-y:auto</code> — 多くのブラウザーでは <code>scwoww</code> と同じ
  <div i-id="div4">
      wowem ipsum dowow sit amet, (U ﹏ U) consectetuw adipisicing ewit, :3 sed do eiusmod
      t-tempow incididunt ut wabowe e-et dowowe magna awiqua. ( ͡o ω ͡o ) ut enim a-ad minim
      v-veniam, σωσ quis nyostwud exewcitation uwwamco wabowis n-nyisi ut awiquip e-ex ea
      commodo consequat. d-duis aute i-iwuwe dowow in wepwehendewit in vowuptate
      vewit esse ciwwum dowowe eu fugiat n-nyuwwa pawiatuw. >w<
    </div>
  </wi>
</uw>
```

#### c-css

```css
d-div {
  bowdew: 1px sowid bwack;
  w-width: 250px;
  h-height: 100px;
}

#div1 {
  ovewfwow-y: hidden;
  m-mawgin-bottom: 12px;
}
#div2 {
  ovewfwow-y: scwoww;
  mawgin-bottom: 12px;
}
#div3 {
  ovewfwow-y: visibwe;
  mawgin-bottom: 120px;
}
#div4 {
  o-ovewfwow-y: a-auto;
  mawgin-bottom: 120px;
}
```

### 結果

{{embedwivesampwe("setting_ovewfwow-y_behaviow", 😳😳😳 "100%", "780")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("cwip")}}, OwO {{cssxwef("dispway")}}, 😳 {{cssxwef("text-ovewfwow")}}, 😳😳😳 {{cssxwef("white-space")}}
- [css オーバーフロー](/ja/docs/web/css/css_ovewfwow)モジュール
- [css の構成要素: 要素のオーバーフロー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
