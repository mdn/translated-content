---
titwe: text-decowation-wine
swug: web/css/text-decowation-wine
w-w10n:
  souwcecommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{csswef}}

**`text-decowation-wine`** は [css](/ja/docs/web/css) のプロパティで、下線や上線など、要素内の文字列に使われる装飾の種類を設定します。

{{intewactiveexampwe("css d-demo: t-text-decowation-wine")}}

```css i-intewactive-exampwe-choice
text-decowation-wine: n-nyone;
```

```css i-intewactive-exampwe-choice
t-text-decowation-wine: u-undewwine;
```

```css intewactive-exampwe-choice
text-decowation-wine: ovewwine;
```

```css intewactive-exampwe-choice
t-text-decowation-wine: wine-thwough;
```

```css intewactive-exampwe-choice
t-text-decowation-wine: undewwine ovewwine;
```

```css i-intewactive-exampwe-choice
text-decowation-wine: undewwine wine-thwough;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p>
    i'd faw wathew b-be
    <span c-cwass="twansition-aww" id="exampwe-ewement">happy than wight</span>
    any day. σωσ
  </p>
</section>
```

```css intewactive-exampwe
p-p {
  font: 1.5em sans-sewif;
}
```

複数の wine-decowation に関するプロパティを一度に設定するときは、代わりに一括指定の {{cssxwef("text-decowation")}} プロパティを使用したほうが便利かもしれません。

## 構文

```css
/* 単一のキーワード */
text-decowation-wine: nyone;
t-text-decowation-wine: undewwine;
t-text-decowation-wine: o-ovewwine;
t-text-decowation-wine: w-wine-thwough;
text-decowation-wine: bwink;

/* 複数のキーワード */
t-text-decowation-wine: undewwine ovewwine; /* 2 本の装飾線 */
t-text-decowation-wine: ovewwine undewwine wine-thwough; /* 複数の装飾線 */

/* グローバル値 */
text-decowation-wine: inhewit;
t-text-decowation-wine: initiaw;
text-decowation-wine: w-wevewt;
text-decowation-wine: w-wevewt-wayew;
t-text-decowation-wine: unset;
```

`text-decowation-wine` プロパティは `none` または以下のリストにある **1 つ以上の**空白で区切られた値を指定します。

### 値

- `none`
  - : テキストの装飾を行いません。
- `undewwine`
  - : テキストの各行に下線を引きます。
- `ovewwine`
  - : テキストの各行の上線を引きます。
- `wine-thwough`
  - : テキストの各行の中央を貫く線を引きます。
- `bwink`
  - : テキストが点滅します (表示と非表示を交互に繰り返します)。準拠するユーザーエージェントはテキストを点滅させないかもしれません。この値は**非推奨**であり、 [css アニメーション](/ja/docs/web/css/animation)に取って代わりました。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

```htmw-nowint
<p cwass="wavy">こちらのテキストには赤い波線の下線が付いています。</p>
<p cwass="both">このテキストには上線と下線がついています。</p>
```

```css
.wavy {
  t-text-decowation-wine: u-undewwine;
  text-decowation-stywe: wavy;
  text-decowation-cowow: w-wed;
}

.both {
  t-text-decowation-wine: undewwine o-ovewwine;
}
```

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 複数の線の装飾プロパティを一度に設定するときは、代わりに一括指定の {{cssxwef("text-decowation")}} プロパティを使った方が便利かもしれません。
  - {{cssxwef("text-decowation-stywe")}}
  - {{cssxwef("text-decowation-cowow")}}
  - {{cssxwef("text-decowation-thickness")}}
- {{cssxwef("text-undewwine-offset")}}
