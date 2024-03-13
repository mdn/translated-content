---
title: box-shadow
slug: Web/CSS/box-shadow
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{CSSRef}}

**`box-shadow`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のフレームの周囲にシャドウ効果を追加します。カンマで区切ることで、複数の効果を設定することができます。ボックスの影は要素からの相対的な X および Y のオフセット、ぼかしと拡散の半径、色で記述します。

{{EmbedInteractiveExample("pages/css/box-shadow.html")}}

`box-shadow` プロパティで、ほぼすべての要素のフレームからドロップシャドウを作成することができます。 {{cssxref("border-radius")}} が指定された場合は、影もその丸みを反映します。複数のボックスの影の重ね合わせ順は、複数の[テキストの影](/ja/docs/Web/CSS/text-shadow)の場合と同様になります (最初に指定された影が最も手前に来ます)。

[ボックスの影作成ツール](/ja/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)は、 `box-shadow` を対話的に作成できるツールです。

## 構文

```css
/* キーワード値 */
box-shadow: none;

/* 色と 2 つの長さの値 */
/* <color> | <length> | <length> */
box-shadow: red 60px -16px;

/* 3 つの長さの値と色 */
/* <length> | <length> | <length> | <color> */
box-shadow: 10px 5px 5px black;

/* 4 つの長さの値と色 */
/* <length> | <length> | <length> | <length> | <color> */
box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

/* inset と長さの値と色 */
/* <inset> | <length> | <length> | <color> */
box-shadow: inset 5em 1em gold;

/* 複数の影はカンマで区切る */
box-shadow:
  3px 3px red inset,
  -1em 0 0.4em olive;

/* グローバルキーワード */
box-shadow: inherit;
box-shadow: initial;
box-shadow: revert;
box-shadow: revert-layer;
box-shadow: unset;
```

単一の box-shadow は次のものを使用して指定します。

- 2 ～ 4 つの {{cssxref("length")}} 値

  - 値が 2 つだけ与えられた場合、 `<offset-x>` および `<offset-y>` として解釈されます。
  - 3 つ目の値が与えられた場合、 `<blur-radius>` として解釈されます。
  - 4 つ目の値が与えられた場合、 `<spread-radius>` として解釈されます。

- 任意で、 `inset` キーワード
- 任意で、 [`<color>`](#color) の値

複数の影を指定する場合は、影をカンマで区切ったリストを指定してください。

### 値

- `<color>` {{optional_inline}}

  - : 影の色を指定します。可能なキーワード及び記述方法については {{cssxref("&lt;color&gt;")}} の値を参照してください。
    値が指定されなかった場合、親要素で定義された {{cssxref("color")}} プロパティの値が使用されます。

- `<length>`

  - : 影をずらす距離を指定します。この引数は 2 つ、 3 つ、 4 つの値を受け入れます。 3 つ目と 4 つ目の値はオプションです。これらは以下のように解釈されます。

    - 2 つの値を指定した場合、 `<offset-x>` （水平方向のオフセット）と `<offset-y>` （垂直方向のオフセット）として解釈されます。 `<offset-x>` が負の値の場合は要素の左側に影を配置します。 `<offset-y>` が負の値の場合は影を要素の上に配置します。\
      指定しない場合、省略された長さには `0` の値が使用されます。もし `<offset-x>` と `<offset-y>` の両方が `0` に設定されると、影は要素の後ろに配置されます（もし `<blur-radius>` や `<spread-radius>` が設定されていれば、ぼかし効果が発生するかもしれません）。
    - 3 つの値を指定した場合、 3 つ目の値は `<blur-radius>` と解釈されます。この値が大きいほどよりぼかしが大きくなり、影が大きく明るくなります。負の値は指定できません。指定しない場合は `0` に設定されます（すなわち、影の輪郭が鮮明になります）。この仕様には、ぼかし半径をどのように計算するかの正確なアルゴリズムは記載されていませんが、以下のように詳しく説明されています。

    > …影の辺が長くまっすぐな場合、影の辺に垂直で中心にあるぼかし距離の長さの色遷移を作成し、影の内側の半径の端点で完全な影の色からその外側の端点で完全に透明になるまでの範囲の色遷移を作成する必要があります。

    - 4 つの値を指定した場合、 4 番目の値は `<spread-radius>` と解釈されます。正の値を指定すると影は展開され大きくなり、負の値を指定すると影は縮小します。指定しない場合は `0` に設定します（つまり、影は要素と同じ大きさになります）。

- `inset` {{optional_inline}}
  - : 影を外側のボックスシャドウから内側のボックスシャドウに変更します（コンテンツがボックスの中に窪んでいるようになります）。インセットシャドウは、ボックスの境界線の内側に描画され（境界線が透明な場合でも）、背景の上、コンテンツの下に現れます。既定では、シャドウはドロップシャドウのように動作し、ボックスがコンテンツよりも上にあるように現れます。これは `inset` を指定しない場合の既定での動作です。

### 補間

影をアニメーションさせる場合、たとえばボックス上の複数の影の値がホバー時に新しい値に遷移する場合、値は補間されます。{{Glossary("Interpolation", "補間")}}は影の遷移に伴って、ぼかし半径、拡散半径、色などのプロパティの中間値を決定します。影のリスト内のそれぞれの影について、色、x、y、ぼかし、拡散が遷移します。色は [`<color>`](/ja/docs/Web/CSS/color_value) として、他の値は {{cssxref("length")}} として遷移します。

カンマで区切られた 2 つのボックスシャドウのリスト間で複数の影を補間する場合、影は順番に対になり、対になった影の間で補間が行われます。影のリストの長さが異なる場合は、短い方のリストの最後に、色が `transparent` であり、X、Y、ぼかしが `0` である影が挿入され、挿入の有無が一致するように設定されます。影のペアのうち、一方に `inset` が設定されていて、もう一方に `inset` が設定されていない場合、影のリスト全体が補間されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 3 つの影の設定

この例では、3 つの影を使用しています。内部への影、通常のドロップシャドウ、境界の効果を生む 2px の影です (3 つ目の影の代わりに {{cssxref('outline')}} を使用することもできます)。

#### HTML

```html
<blockquote>
  <q>
    You may shoot me with your words,<br />
    You may cut me with your eyes,<br />
    You may kill me with your hatefulness,<br />
    But still, like air, I'll rise.
  </q>
  <p>&mdash; Maya Angelou</p>
</blockquote>
```

#### CSS

```css
blockquote {
  padding: 20px;
  box-shadow:
    inset 0 -3em 3em rgb(0 200 0 / 30%),
    0 0 0 2px white,
    0.3em 0.3em 1em rgb(200 0 0 / 60%);
}
```

#### 結果

{{EmbedLiveSample('Setting_three_shadows', '300', '300')}}

### オフセットとぼかしをゼロに設定

`x-offset`, `y-offset`, `blur` がすべてゼロの場合、ボックスシャドウはすべての辺に同じ幅の単一色の囲み線になります。影は背後から手前にかけて描かれるため、最初の影はその後の影の最上位に表示されます。既定値通り、 `border-radius` が 0 に設定されていた場合、影の角は同様に尖った形になります。 `border-radius` にそれ以外の値を設定した場合、角は丸みを帯びます。

影が隣接する要素と重ならないように、また、包含ボックスの境界線を超えないように、最も広いボックスシャドウの寸法のマージンを追加しました。ボックスシャドウは[ボックスモデル](/ja/docs/Web/CSS/CSS_box_model)の寸法に影響を与えません。

#### HTML

```html
<div><p>Hello World</p></div>
```

#### CSS

```css
p {
  box-shadow:
    0 0 0 2em #f4aab9,
    0 0 0 4em #66ccff;
  margin: 4em;
  padding: 1em;
}
```

<!-- these colors are intentionally pink and blue. WCAG requires color contrast between text and background, not between border colors. -->

#### 結果

{{EmbedLiveSample('Setting_zero_for_offset_and_blur', '300', '300')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型（影の色を指定するのに使用）
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [CSS を用いた HTML 要素への色の適用](/ja/docs/Web/CSS/CSS_colors/Applying_color)
