---
title: box-sizing
slug: Web/CSS/box-sizing
---

{{CSSRef}}

**`box-sizing`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の全体の幅と高さをどのように計算するのかを設定します。

{{EmbedInteractiveExample("pages/css/box-sizing.html")}}

[CSS ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)の既定では、要素に割り当てられた `width` および `height` は、要素のコンテンツ領域のみに適用されます。要素に境界やパディングがある場合、画面に表示される矩形の大きさは `width` および `height` にこれらを加えたものになります。つまり、`width` および `height` を設定する際には、境界やパディングが加えられるように値を調整しなければなりません。例えば、`width: 25%;` で左や右のパディングまたは左や右の境界がある 4 つのボックスを並べた場合、既定では親コンテナーの制約の中で 1 行には並びません。

`box-sizing` プロパティは上記の振る舞いを調整するために使用できます。

- `content-box` は CSS の box-sizing における既定の振る舞いです。ある要素の幅を 100 ピクセルに設定した場合、その要素のコンテンツ領域の幅が 100 ピクセルになり、境界やパディングを加えたものが最終的に表示される幅になり、要素が 100px よりも広くなります。
- `border-box` は、境界およびパディングを、要素に指定した width および height の中で取るようブラウザーに指示します。要素の width を 100 ピクセルに設定した場合、100 ピクセルの中に追加した境界やパディングが含まれ、コンテンツ領域はそれらの幅を吸収するために縮小されます。これで普通は、要素に対するサイズ設定をもっと簡単になります。

  `box-sizing: border-box` はブラウザーが {{htmlelement("table")}}, {{htmlelement("select")}}, {{htmlelement("button")}} の各要素、また {{htmlelement("input")}} 要素のうち type が `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}`, `{{htmlelement("input/search", "search")}}` であるものに対して使用する既定のスタイル付けです。

> **メモ:** 要素をレイアウトする際には、 `box-sizing` を `border-box` に設定しておくと便利です。これにより、要素の寸法の扱いがとても簡単になり、一般的にコンテンツをレイアウトする際につまずく可能性のあるいくつかの落とし穴を排除することができます。 一方、 `position: relative` または `position: absolute` を使用する場合、 `box-sizing: content-box` を使用することで、コンテンツに対する相対的な位置の値を設定することができ、境界やパディングの幅の変更に依存しなくなり、これが望ましい場合もあります。

## 構文

```css
box-sizing: border-box;
box-sizing: content-box;

/* グローバル値 */
box-sizing: inherit;
box-sizing: initial;
box-sizing: revert;
box-sizing: unset;
```

`box-sizing` プロパティは、以下のいずれか 1 つのキーワードを選択して定義します。

### 値

- `content-box`

  - : これは、 CSS 標準で規定されている初期値および既定値です。 {{Cssxref("width")}} および {{Cssxref("height")}} プロパティの寸法は、コンテンツ領域のみを含むものとなり、パディング、境界、マージン領域は含みません。例えば `.box {width: 350px; border: 10px solid black;}` とすると 370px の幅のボックスを描画します。

    この場合、それぞれの要素の寸法は、_幅 = コンテンツの幅_、*高さ = コンテンツの高さ*として計算されます。 (境界やパディングは計算に含まれません。)

- `border-box`

  - : {{Cssxref("width")}} および {{Cssxref("height")}} プロパティは、コンテンツ、パディング、境界の各領域を含みますが、マージンは含みません。なお、パディングと境界はボックスの内側に置かれることに注意してください。例えば `.box {width: 350px; border: 10px solid black;}` とすると、ボックスの幅が 350px、コンテンツ領域の幅が 330px として描画されます。コンテンツボックスは負の値にできず 0 に丸められますので、`border-box` を使用して要素を非表示にすることはできません。

    この場合、それぞれの要素の寸法は、_幅 = 境界 + パディング + コンテンツの幅_、*高さ = 境界 + パディング + コンテンツの高さ*として計算されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Box_sizes_with_content-box_and_border-box">content-box と border-box のボックスサイズ</h3>

この例では、2つの `box-sizing` の値が、それ以外の条件が同じ要素のレンダリングの大きさをどのように変えるかを示します。

#### HTML

```html
<div class="content-box">Content box</div>
<br />
<div class="border-box">Border box</div>
```

#### CSS

```css
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
  /* 全体の幅: 160px + (2 * 20px) + (2 * 8px) = 216px
     全体の高さ: 80px + (2 * 20px) + (2 * 8px) = 136px
     コンテンツ領域の幅: 160px
     コンテンツ領域の高さ: 80px */
}

.border-box {
  box-sizing: border-box;
  /* 全体の幅: 160px
     全体の高さ: 80px
     コンテンツ領域の幅: 160px - (2 * 20px) - (2 * 8px) = 104px
     コンテンツ領域の高さ: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

#### 結果

{{EmbedLiveSample('Box_sizes_with_content-box_and_border-box', 'auto', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 基本ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
