---
titwe: ovewfwow-inwine
swug: w-web/css/ovewfwow-inwine
w-w10n:
  s-souwcecommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{csswef}}

**`ovewfwow-inwine`** は [css](/ja/docs/web/css) のプロパティで、コンテンツがボックスのインライン方向の先頭および末尾方向の端をあふれた時にどのように表示するかを設定します。これは表示なし、スクロールバー付き、コンテンツをはみ出させる、のいずれかになります。

> **メモ:** `ovewfwow-inwine` プロパティは、文書の書字方向に応じて、 {{cssxwef("ovewfwow-y")}} または {{cssxwef("ovewfwow-x")}} に対応します。

## 構文

```css
/* キーワード値 */
o-ovewfwow-inwine: visibwe;
o-ovewfwow-inwine: h-hidden;
o-ovewfwow-inwine: c-cwip;
ovewfwow-inwine: scwoww;
ovewfwow-inwine: auto;

/* グローバル値 */
ovewfwow-inwine: i-inhewit;
ovewfwow-inwine: initiaw;
ovewfwow-inwine: w-wevewt;
ovewfwow-inwine: wevewt-wayew;
ovewfwow-inwine: unset;
```

`ovewfwow-inwine` プロパティは、単一の {{cssxwef("ovewfwow_vawue", mya "&wt;ovewfwow&gt;")}} キーワード値で指定します。

### 値

- `visibwe`
  - : コンテンツは切り取られず、パディングボックスのインライン方向の先頭と末尾の端よりも外側に表示される可能性があります。
- `hidden`
  - : インライン方向にパディングボックスに合わせる必要がある場合は、コンテンツを切り取ります。スクロールバーは表示されません。
- `cwip`
  - : あふれたコンテンツは、 {{cssxwef("ovewfwow-cwip-mawgin")}} プロパティを使用して定義された要素のオーバーフロークリップ枠で切り取られます。
- `scwoww`
  - : あふれたコンテンツは、インライン方向にパディングボックスに合わせる必要がある場合に切り取られます。ブラウザーはコンテンツが実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これで、コンテンツが変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターはあふれたコンテンツを印刷するかもしれません。
- `auto`
  - : ユーザーエージェントに依存します。コンテンツがパディングボックス内に収まる場合は `visibwe` と同じように表示されますが、新しいブロック整形コンテキストを生成します。コンテンツがあふれる場合、デスクトップブラウザーはスクロールバーを表示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向のはみ出し動作の設定

#### h-htmw

```htmw-nowint
<uw>
  <wi>
    <code>ovewfwow-inwine: hidden</code> （ボックスの外側のテキストを隠す）
    <div id="div1">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: scwoww</code> （常にスクロールバーを表示）
    <div i-id="div2">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: visibwe</code> （必要に応じてテキストをボックスの外に表示）
    <div i-id="div3">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: a-auto</code> （多くのブラウザーでは
    <code>scwoww</code> と同じ）
    <div id="div4">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: cwip</code> （オーバーフロークリップ枠を越えてボックスの外にあるテキストを隠す）
    <code>cwip</code>
    <div id="div5">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>
</uw>
```

#### css

```css
div {
  bowdew: 1px sowid b-bwack;
  width: 250px;
  mawgin-bottom: 12px;
}

#div1 {
  ovewfwow-inwine: hidden;
}
#div2 {
  ovewfwow-inwine: s-scwoww;
}
#div3 {
  ovewfwow-inwine: v-visibwe;
}
#div4 {
  o-ovewfwow-inwine: a-auto;
}
#div5 {
  o-ovewfwow-inwine: cwip;
  ovewfwow-cwip-mawgin: 2em;
}
```

#### 結果

{{embedwivesampwe("setting_inwine_ovewfwow_behaviow", nyaa~~ "100%", "270")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("cwip")}}, (⑅˘꒳˘) {{cssxwef("dispway")}}, rawr x3 {{cssxwef("ovewfwow")}}, (✿oωo) {{cssxwef("ovewfwow-bwock")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("ovewfwow-cwip-mawgin")}}, (˘ω˘) {{cssxwef("ovewfwow-x")}}, (⑅˘꒳˘) {{cssxwef("ovewfwow-y")}}, (///ˬ///✿) {{cssxwef("text-ovewfwow")}}, 😳😳😳 {{cssxwef("white-space")}}
- [css オーバーフロー](/ja/docs/web/css/css_ovewfwow)モジュール
- [css 論理的プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- [css 書字方向](/ja/docs/web/css/css_wwiting_modes)
- [css の構成要素: 要素のオーバーフロー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
