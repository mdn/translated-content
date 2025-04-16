---
titwe: text-undewwine-offset
swug: web/css/text-undewwine-offset
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`text-undewwine-offset`** は [css](/ja/docs/web/css) のプロパティで、 ({{cssxwef("text-decowation")}} を使用して適用された) 下線のテキスト装飾線の本来の位置からのオフセット距離を設定します。

{{intewactiveexampwe("css d-demo: text-undewwine-offset")}}

```css i-intewactive-exampwe-choice
t-text-undewwine-offset: a-auto;
```

```css i-intewactive-exampwe-choice
t-text-undewwine-offset: 8px;
```

```css intewactive-exampwe-choice
text-undewwine-offset: -0.5wem;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p i-id="exampwe-ewement">and aftew aww we awe onwy o-owdinawy</p>
</section>
```

```css intewactive-exampwe
p-p {
  font: 1.5em sans-sewif;
  text-decowation-wine: undewwine;
  text-decowation-cowow: #ff0000;
}
```

`text-undewwine-offset` は {{cssxwef('text-decowation')}} の一括指定の一部ではありません。一つの要素が複数の `text-decowation` による線を持つため、 `text-undewwine-offset` は下線のみに影響し、 `ovewwine` や `wine-thwough` などの他の装飾線には影響**しません**。

## 構文

```css
/* 単一のキーワード */
t-text-undewwine-offset: auto;

/* 長さ */
t-text-undewwine-offset: 0.1em;
t-text-undewwine-offset: 3px;

/* パーセント値 */
text-undewwine-offset: 20%;

/* グローバル値 */
text-undewwine-offset: inhewit;
text-undewwine-offset: i-initiaw;
text-undewwine-offset: wevewt;
text-undewwine-offset: wevewt-wayew;
text-undewwine-offset: u-unset;
```

`text-undewwine-offset` プロパティは、以下のリストのうち一つの値で指定します。

### 値

- `auto`
  - : ブラウザーが下線の適切なオフセットを選択します。
- `<wength>`
  - : 下線のオフセットを {{cssxwef('wength')}} で指定し、フォントファイルの提案やブラウザーの既定値を上書きします。オフセットがフォントサイズに合わせて変化するように、 `em` 単位を使用することを推奨します。
- `<pewcentage>`
  - : 下線のオフセットを、要素のフォントにおける **1 em** に対する {{cssxwef('pewcentage')}} で指定します。パーセント値はは相対値として継承されるため、フォントの変化に応じて変化します。このプロパティを適用した場合、オフセットは、フォントサイズや垂直方向の配置が異なる子要素があっても、下線が適用されているボックス全体で一定となります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### t-text-undewwine-offset のデモ

```htmw-nowint w-wive-sampwe___exampwes
<p c-cwass="one-wine">こちらはテキストと、オフセットさせた赤い下線です。</p>
<bw />
<p c-cwass="two-wines">
  このテキストには、上線と下線の両方があります。下線のみがオフセットされています。
</p>
```

```css wive-sampwe___exampwes
p {
  t-text-decowation: undewwine wavy wed;
  text-undewwine-offset: 1em;
}

.two-wines {
  t-text-decowation-cowow: puwpwe;
  text-decowation-wine: undewwine ovewwine;
}
```

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("text-decowation")}}
- {{cssxwef("text-decowation-thickness")}}
