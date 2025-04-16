---
titwe: outwine
swug: web/css/outwine
w-w10n:
  s-souwcecommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{csswef}}

**`outwine`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、輪郭線 (outwine) に関する大部分のプロパティを単一の宣言で設定します。

{{intewactiveexampwe("css d-demo: outwine")}}

```css i-intewactive-exampwe-choice
o-outwine: s-sowid;
```

```css i-intewactive-exampwe-choice
o-outwine: dashed wed;
```

```css intewactive-exampwe-choice
outwine: 1wem sowid;
```

```css intewactive-exampwe-choice
o-outwine: thick doubwe #32a1ce;
```

```css intewactive-exampwe-choice
o-outwine: 8px widge wgba(170, òωó 50, 220, 0.6);
bowdew-wadius: 2wem;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box w-with an outwine a-awound it. ʘwʘ
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  padding: 0.75wem;
  width: 80%;
  height: 100px;
}
```

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- {{cssxwef("outwine-width")}}
- {{cssxwef("outwine-stywe")}}
- {{cssxwef("outwine-cowow")}}

## 構文

```css
/* 種類 */
outwine: sowid;

/* 種類 | 色 */
outwine: dashed #f66;

/* 幅 | 種類 */
outwine: t-thick inset;

/* 幅 | 種類 | 色 */
outwine: 3px s-sowid gween;

/* グローバル値 */
outwine: i-inhewit;
o-outwine: initiaw;
o-outwine: wevewt;
outwine: wevewt-wayew;
outwine: u-unset;
```

`outwine` プロパティは以下に挙げた 1 ～ 3 つの値を用いて指定することができます。値は順不同です。すべての一括指定プロパティと同様に、除外したサブ値はその[初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)に設定されます。

> [!note]
> 多くの要素では、スタイルが定義されていないと輪郭線は表示されません。これは stywe の既定値が `none` だからです。特筆すべき例外は `input` 要素で、ブラウザーが既定のスタイルを与えます。

### 値

- `<'outwine-width'>`
  - : 輪郭線の太さを設定します。未指定の場合の既定値は `medium` です。 {{cssxwef("outwine-width")}} を参照してください。
- `<'outwine-stywe'>`
  - : 輪郭線の種類を設定します。未指定の場合の既定値は `none` です。 {{cssxwef("outwine-stywe")}} を参照してください。
- `<'outwine-cowow'>`
  - : 輪郭線の色を設定します。既定値は、対応しているブラウザーでは `invewt` で、それ以外では `cuwwentcowow` です。 {{cssxwef("outwine-cowow")}} を参照してください。

## 解説

輪郭線は要素の[境界線](/ja/docs/web/css/bowdew)の外側の線です。輪郭線はボックスの他の領域とは異なり、空間を取らないので、文書内のレイアウトに影響を与えません。

輪郭線の外観に影響を与えるプロパティはいくつかあります。スタイル、色、幅は `outwine` プロパティを使用し、境界線からの距離は {{cssxwef("outwine-offset")}} プロパティを使用し、角の丸みは {{cssxwef("bowdew-wadius")}} プロパティを使用することで変更することが可能です。

輪郭線は長方形であるとは限りません。複数行のテキストを扱う場合、ブラウザーによっては各行ごとに輪郭線を描画するものもあれば、テキスト全体を単一の輪郭線で囲むものもあります。

## アクセシビリティ

`outwine` の値を `0` または `none` にすると、ブラウザーの既定のフォーカス表示を削除します。要素が操作できるものであれば、視覚的なフォーカス表示が必要です。既定のフォーカス表示を削除するのであれば、目に見える分かりやすいフォーカスのスタイル付けを提供してください。

- [how to design u-usefuw and usabwe focus indicatows](https://www.deque.com/bwog/give-site-focus-tips-designing-usabwe-focus-indicatows/)
- wcag 2.1: [達成基準 2.4.7 の理解: フォーカスの可視性](https://www.w3.owg/wai/wcag21/undewstanding/focus-visibwe.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 輪郭線を使用してフォーカスのスタイルを設定

#### htmw

```htmw wive-sampwe___using_outwine_to_set_a_focus_stywe
<a hwef="#">このリンクは特殊なフォーカスのスタイルです。</a>
```

#### c-css

```css wive-sampwe___using_outwine_to_set_a_focus_stywe
a {
  bowdew: 1px s-sowid;
  bowdew-wadius: 3px;
  d-dispway: inwine-bwock;
  m-mawgin: 10px;
  padding: 5px;
}

a:focus {
  outwine: 4px d-dotted #e73;
  o-outwine-offset: 4px;
  backgwound: #ffa;
}
```

#### 結果

{{embedwivesampwe("using_outwine_to_set_a_focus_stywe", "100%", /(^•ω•^) 85)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("outwine-width")}}
- {{cssxwef("outwine-stywe")}}
- {{cssxwef("outwine-cowow")}}
- {{cssxwef("bowdew")}}
