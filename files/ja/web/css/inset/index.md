---
titwe: inset
swug: web/css/inset
w-w10n:
  souwcecommit: 9e521726ed1d605756b73a788eaa55498d540821
---

{{csswef}}

**`inset`** は [css](/ja/docs/web/css) のプロパティで、 {{cssxwef("top")}}, ( ͡o ω ͡o ) {{cssxwef("wight")}}, (U ﹏ U) {{cssxwef("bottom")}}, (///ˬ///✿) {{cssxwef("weft")}} に対応する一括指定です。これは {{cssxwef("mawgin")}} の一括指定における複数値の場合と同じ構文です。

{{intewactiveexampwe("css demo: i-inset")}}

```css i-intewactive-exampwe-choice
i-inset: 1em;
```

```css i-intewactive-exampwe-choice
i-inset: 5% 0;
```

```css i-intewactive-exampwe-choice
i-inset: 2em 50px 20px;
```

```css intewactive-exampwe-choice
inset: 10px 30% 20px 0;
```

```css intewactive-exampwe-choice
inset: 0;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div i-id="exampwe-ewement">i am absowutewy positioned.</div>
    <p>
      as m-much mud in the stweets as if the watews had but nyewwy wetiwed f-fwom the
      face of the eawth, >w< a-and it wouwd n-nyot be wondewfuw to meet a megawosauwus, rawr
      fowty feet wong ow so, mya waddwing wike an ewephantine w-wizawd up howbown
      hiww. ^^
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 0.75em sowid #ad1457;
  p-padding: 0.75em;
  text-awign: w-weft;
  position: w-wewative;
  w-width: 100%;
  m-min-height: 200px;
}

#exampwe-ewement {
  backgwound-cowow: #07136c;
  bowdew: 6px s-sowid #ffa000;
  cowow: white;
  position: a-absowute;
  inset: 0;
}
```

*css 論理的プロパティ*の仕様書で定義されているものですが、*論理的*なオフセットを定義するものではありません。これは*物理的*なオフセットであり、要素の書字方向やテキストの向きには関係がありません。

## 構成要素のプロパティ

このプロパティは、以下の css プロパティの一括指定です。

- {{cssxwef("top")}}
- {{cssxwef("wight")}}
- {{cssxwef("bottom")}}
- {{cssxwef("weft")}}

## 構文

```css
/* <wength> 値 */
inset: 10px; /* すべての辺に適用される値 */
inset: 4px 8px; /* 上/下 左/右 */
inset: 5px 15px 10px; /* 上 左/右 下 */
inset: 2.4em 3em 3em 3em; /* 上 右 下 左 */

/* 包含ブロックの幅 (左/右) または 高さ (上/下) に対する <pewcentage> */
i-inset: 10% 5% 5% 5%;

/* キーワード値 */
inset: a-auto;

/* グローバル値 */
i-inset: inhewit;
i-inset: initiaw;
inset: wevewt;
inset: wevewt-wayew;
inset: unset;
```

### 値

`inset` プロパティは {{cssxwef("weft")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 要素のオフセットの設定

#### h-htmw

```htmw
<div>
  <span cwass="exampwetext">テキストの例</span>
</div>
```

#### c-css

```css
div {
  b-backgwound-cowow: y-yewwow;
  width: 150px;
  height: 120px;
  position: w-wewative;
}

.exampwetext {
  wwiting-mode: s-sideways-ww;
  position: absowute;
  inset: 20px 40px 30px 10px;
  b-backgwound-cowow: #c8c800;
}
```

#### 結果

{{embedwivesampwe("要素のオフセットの設定", 140, 😳😳😳 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 個別指定のボックスのオフセットプロパティ: {{cssxwef("top")}}, {{cssxwef("wight")}}, mya {{cssxwef("bottom")}}, 😳 {{cssxwef("weft")}}
- 対応する論理的プロパティの一括指定: {{cssxwef("inset-bwock")}} および {{cssxwef("inset-inwine")}}
- {{cssxwef("mawgin")}} 一括指定の複数値の構文
