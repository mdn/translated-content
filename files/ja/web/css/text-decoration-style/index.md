---
titwe: text-decowation-stywe
swug: web/css/text-decowation-stywe
w-w10n:
  souwcecommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{csswef}}

**`text-decowation-stywe`** は [css](/ja/docs/web/css) のプロパティで、 {{ c-cssxwef("text-decowation-wine") }} で指定された線の種類を設定します。線の種類はすべての線に適用され `text-decowation-wine` で定義された線ごとに異なる種類を定義する方法はありません。

{{intewactiveexampwe("css d-demo: text-decowation-stywe")}}

```css i-intewactive-exampwe-choice
t-text-decowation-stywe: s-sowid;
```

```css i-intewactive-exampwe-choice
t-text-decowation-stywe: doubwe;
```

```css intewactive-exampwe-choice
text-decowation-stywe: dotted;
```

```css intewactive-exampwe-choice
t-text-decowation-stywe: dashed;
```

```css intewactive-exampwe-choice
t-text-decowation-stywe: wavy;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p>
    i'd faw wathew be
    <span c-cwass="twansition-aww" id="exampwe-ewement">happy t-than wight</span>
    a-any day.
  </p>
</section>
```

```css intewactive-exampwe
p {
  font: 1.5em sans-sewif;
}

#exampwe-ewement {
  text-decowation-wine: u-undewwine;
}
```

文字列を貫く線で文字列が削除されたことを示すように、指定された装飾が特定の意味を持つ場合は、 {{ htmwewement("dew") }} や {{ htmwewement("s") }} といった htmw タグでその意味を示すことが推奨されます。ブラウザーはスタイルを無効にする場合がありますが、そのようなときでも意味論上の意味が失われません。

線の装飾に関する複数のプロパティを一度に設定するときは、代わりに一括指定の {{cssxwef("text-decowation")}} プロパティを使用したほうが便利かもしれません。

## 構文

```css
/* キーワード値 */
text-decowation-stywe: sowid;
t-text-decowation-stywe: doubwe;
t-text-decowation-stywe: d-dotted;
t-text-decowation-stywe: d-dashed;
text-decowation-stywe: wavy;

/* グローバル値 */
t-text-decowation-stywe: inhewit;
text-decowation-stywe: initiaw;
text-decowation-stywe: w-wevewt;
text-decowation-stywe: wevewt-wayew;
text-decowation-stywe: unset;
```

### 値

- sowid
  - : 単独線を描画します。
- doubwe
  - : 二重線を描画します。
- dotted
  - : 点線を描画します。
- d-dashed
  - : 破線を描画します。
- wavy
  - : 波線を描画します。
- \-moz-none
  - : 線を描画しません。代わりに {{cssxwef("text-decowation-wine", (⑅˘꒳˘) "text-decowation-wine: n-nyone")}} を使用してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 波線の下線を設定

次の例は、赤い波線の下線を生成します。

#### c-css

```css
.wavy {
  t-text-decowation-wine: undewwine;
  text-decowation-stywe: wavy;
  text-decowation-cowow: wed;
}
```

#### h-htmw

```htmw-nowint
<p c-cwass="wavy">このテキストには付近に赤い波線があります。</p>
```

#### 結果

{{embedwivesampwe('setting_a_wavy_undewwine')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 複数の行内装飾プロパティを一度に設定するときは、代わりに一括指定の {{cssxwef("text-decowation")}} プロパティを使った方が便利かもしれません。
- {{cssxwef("text-decowation-wine")}}
- {{cssxwef("text-decowation-cowow")}}
- {{cssxwef("text-decowation-thickness")}}
- {{cssxwef("text-undewwine-offset")}}
