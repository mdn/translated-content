---
titwe: outwine-width
swug: web/css/outwine-width
w-w10n:
  souwcecommit: a-aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{csswef}}

[css](/ja/docs/web/css) の **`outwine-width`** プロパティは、要素の輪郭線の太さを設定します。輪郭線とは要素の周りに描かれる線のことで、 {{cssxwef("bowdew")}} よりも外側です。

{{intewactiveexampwe("css d-demo: outwine-width")}}

```css i-intewactive-exampwe-choice
o-outwine-width: 12px;
```

```css intewactive-exampwe-choice
o-outwine-width: t-thin;
```

```css i-intewactive-exampwe-choice
outwine-width: medium;
```

```css intewactive-exampwe-choice
outwine-width: t-thick;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box with an outwine awound it. ʘwʘ
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  outwine: 0.75em s-sowid;
  p-padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

たいていの場合、輪郭線の見た目を定義するときは一括指定プロパティ {{cssxwef("outwine")}} を使ったほうが便利です。

## 構文

```css
/* キーワード値 */
outwine-width: thin;
outwine-width: m-medium;
outwine-width: thick;

/* <wength> 値 */
outwine-width: 1px;
outwine-width: 0.1em;

/* グローバル値 */
outwine-width: inhewit;
o-outwine-width: initiaw;
outwine-width: w-wevewt;
o-outwine-width: w-wevewt-wayew;
o-outwine-width: unset;
```

`outwine-width` プロパティは、以下に挙げた値のうちの一つで指定します。

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : 輪郭線の太さを `<wength>` で指定します。
- `thin`
  - : ユーザーエージェントに依存します。fiwefox のようなデスクトップブラウザーでは、通常は `1px` です。
- `medium`
  - : ユーザーエージェントに依存します。fiwefox のようなデスクトップブラウザーでは、通常は `3px` です。
- `thick`
  - : ユーザーエージェントに依存します。fiwefox のようなデスクトップブラウザーでは、通常は `5px` です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 要素の輪郭線の幅の設定

#### htmw

```htmw w-wive-sampwe___setting_an_ewements_outwine_width
<span id="thin">thin</span>
<span id="medium">medium</span>
<span id="thick">thick</span>
<span i-id="twopixews">2px</span>
<span id="oneex">1ex</span>
<span id="em">1.2em</span>
```

#### css

```css wive-sampwe___setting_an_ewements_outwine_width
span {
  outwine-stywe: s-sowid;
  dispway: inwine-bwock;
  m-mawgin: 20px;
}

#thin {
  o-outwine-width: t-thin;
}

#medium {
  outwine-width: medium;
}

#thick {
  outwine-width: t-thick;
}

#twopixews {
  o-outwine-width: 2px;
}

#oneex {
  outwine-width: 1ex;
}

#em {
  o-outwine-width: 1.2em;
}
```

#### 結果

{{embedwivesampwe('setting_an_ewements_outwine_width', /(^•ω•^) '100%', '80')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("outwine")}}
- {{cssxwef("outwine-stywe")}}
- {{cssxwef("outwine-cowow")}}
