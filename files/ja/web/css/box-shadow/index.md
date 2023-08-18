---
title: box-shadow
slug: Web/CSS/box-shadow
---

{{CSSRef}}

**`box-shadow`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のフレームの周囲にシャドウ効果を追加します。カンマで区切ることで、複数の効果を設定することができます。ボックスの影は要素からの相対的な X および Y のオフセット、ぼかしと拡散の半径、色で記述します。

{{EmbedInteractiveExample("pages/css/box-shadow.html")}}

`box-shadow` プロパティで、ほぼすべての要素のフレームからドロップシャドウを作成することができます。 {{cssxref("border-radius")}} が指定された場合は、影もその丸みを反映します。複数のボックスの影の重ね合わせ順は、複数の[テキストの影](/ja/docs/Web/CSS/text-shadow)の場合と同様になります (最初に指定された影が最も手前に来ます)。

[ボックスの影作成ツール](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Box-shadow_generator)は、 `box-shadow` を対話的に作成できるツールです。

## 構文

```css
/* キーワード値 */
box-shadow: none;

/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* 複数の影はカンマで区切る */
box-shadow:
  3px 3px red,
  -1em 0 0.4em olive;

/* グローバルキーワード */
box-shadow: inherit;
box-shadow: initial;
box-shadow: revert;
box-shadow: unset;
```

単一の box-shadow は次の物を使用して指定します。

- 2 ～ 4 つの [`<length>`](/ja/docs/Web/CSS/length) 値

  - 値が 2 つだけ与えられた場合、 `<offset-x>` および `<offset-y>` として解釈されます。
  - 3 つ目の値が与えられた場合、 `<blur-radius>` として解釈されます。
  - 4 つ目の値が与えられた場合、 `<spread-radius>` として解釈されます。

- 任意で、 `inset` キーワード
- 任意で、 [`<color>`](#color) の値

複数の影を指定する場合は、影をカンマで区切ったリストを指定してください。

### 値

- `inset`
  - : 指定されていない場合、ボックスにはドロップシャドウ効果 (浮き上がったように見える) が与えられます。
    `inset` キーワードが指定された場合、影はボックスの内側に描画されます (凹んだように見える)。 `inset` な影は背景の上、境界や内容の下に描画されます。
- `<offset-x>` `<offset-y>`
  - : これらは 2 つの {{cssxref("&lt;length&gt;")}} 値で、影のオフセットを設定します。 `<offset-x>` は水平方向の距離を表します。負の値が指定された場合、影は左方向に配置されます。 `<offset-y>` は垂直方向の距離を表します。負の値が指定された場合、影は上方向に配置されます。利用可能な値の単位については {{cssxref("&lt;length&gt;")}} をご覧ください。
    どちらのオフセットも `0` である場合、影は要素の裏に配置されます。 (`<blur-radius>` や `<spread-radius>` が指定されている場合は、ぼかし効果を生成することができます。)
- `<blur-radius>`

  - : これは 3 つ目の {{cssxref("&lt;length&gt;")}} 値です。値が大きくなるほど、ぼかしが大きくなるため影の面積が広くなり、また影の色も薄くなります。負の値は指定できません。値が指定されていない場合は `0` となります (影の縁にぼかしが入りません)。仕様書にはぼかしの半径の計算方法について正確なアルゴリズムは書かれていませんが、以下のように複雑なものです。

    > …影の辺が長くまっすぐな場合、影の辺に垂直で中心にあるぼかし距離の長さの色遷移を作成し、影の内側の半径の端点で完全な影の色からその外側の端点で完全に透明になるまでの範囲の色遷移を作成する必要があります。

- `<spread-radius>`
  - : 4 つ目に指定される {{cssxref("&lt;length&gt;")}} の値です。正の値が指定された場合、影がその分だけ拡張され大きくなります。負の値が指定された場合、影は縮小されます。値が指定されていない場合は `0` と解釈され、影の大きさは要素の大きさと同じままとなります。
- `<color>`
  - : 可能なキーワード及び記述方法については {{cssxref("&lt;color&gt;")}} の値をご覧ください。
    値が指定されていない場合は、既定で {{cssxref("&lt;color&gt;","currentColor","#currentcolor_keyword")}} になります。

### 補間

リストの中 (`none` は長さ 0 のリスト) 中のそれぞれの影は、色の成分、 x、 y、 ぼかし、およびび (適切であれば) 広がり (の長さ) の成分で補間されます。両方の影について、もし `inset` が異なる場合、補間された影はそれに関する入力影と一致しなければなりません。入力影で `inset` と `inset` の組み合わせがない場合、影のリスト全体は解釈できません。影のリストの長さが異なる場合、影のリストの長さが異なる場合、短い方のリストの末尾は `transparent` の色の影で補完し、すべての長さが `0` であり、 `inset` (の有無) が一致するものがあれば、より長いリストに一致します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_three_shadows">3 つの影の設定</h3>

この例では、3 つの影を使用しています。内部への影、通常のドロップシャドウ、境界の効果を生む 2px の影です (3 つ目の影の代わりに {{cssxref('outline')}} を使用することもできます)。

#### HTML

```html
<blockquote>
  <q
    >You may shoot me with your words,<br />
    You may cut me with your eyes,<br />
    You may kill me with your hatefulness,<br />
    But still, like air, I'll rise.</q
  >
  <p>&mdash; Maya Angelou</p>
</blockquote>
```

#### CSS

```css
blockquote {
  padding: 20px;
  box-shadow:
    inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
```

#### 結果

{{EmbedLiveSample('Setting_three_shadows', '300', '300')}}

<h3 id="Setting_zero_for_offset_and_blur">offset と blur をゼロに設定</h3>

`x-offset`, `y-offset`, `blur` がすべてゼロの場合、ボックスシャドウはすべての辺に同じ幅の単一色の囲み線になります。影は背後から手前にかけて描かれるため、最初の影はその後の影の最上位に表示されます。既定値通り、 `border-radius` が 0 に設定されていた場合、影の角は同様に尖った形になります。 `border-radius` にそれ以外の値を設定した場合、角は丸みを帯びます。

影が隣接する要素と重ならないように、また、包含ボックスの境界線を超えないように、最も広いボックスシャドウの寸法のマージンを追加しました。ボックスシャドウは[ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model)の寸法に影響を与えません。

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

#### 結果

{{EmbedLiveSample('Setting_zero_for_offset_and_blur', '300', '300')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
- {{cssxref("text-shadow")}}
- [CSS を用いた HTML 要素への色の適用](/ja/docs/Web/HTML/Applying_color)
