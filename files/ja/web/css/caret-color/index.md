---
title: caret-color
slug: Web/CSS/caret-color
---

{{CSSRef}}

**`caret-color`** は CSS のプロパティで、次に入力された文字が挿入される位置を示す可視マーカーである**入力キャレット**の色を設定します。これは**テキスト入力カーソル**と呼ばれることもあります。キャレットは {{HTMLElement("input")}} または [`contenteditable`](/ja/docs/Web/HTML/Global_attributes#contenteditable)ML/Global_attributes#contenteditable) 属性のついた要素などの中に現れます。ふつうキャレットは細い垂直線で、気づきやすくなるように点滅します。既定では黒ですが、このプロパティで色を変更することができます。

{{EmbedInteractiveExample("pages/css/caret-color.html")}}

なお、入力キャレットはキャレットのうちの一種類にすぎません。例えば、多くのブラウザーには「ナビゲーションキャレット」があり、入力キャレットと同様に動きますが、編集できないテキストの中を移動できるものがあります。一方、マウスカーソルが、 {{cssxref("cursor")}} プロパティが `auto` のときにテキスト上に移動した場合や、 `cursor` プロパティが `text` または `vertical-text` の場合に、キャレットのように見えることがありますが、キャレットではありません (カーソルです)。

## 構文

```css
/* キーワード値 */
caret-color: auto;
caret-color: transparent;
caret-color: currentcolor;

/* <color> 値 */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0, 200, 0);
caret-color: hsla(228, 4%, 24%, 0.8);

/* グローバル値 */
caret-color: inherit;
caret-color: initial;
caret-color: revert;
caret-color: unset;
```

### 値

- `auto`

  - : ユーザーエージェントはキャレットの適切な色を選択します。これは一般的に {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}} ですが、視認性や周囲のコンテンツとのコントラストを高めるために、ユーザーエージェントが `currentcolor`、背景色、影の色、その他の要因を考慮して、別な色を選択することがあります。

    > **メモ:** ユーザーエージェントは `auto` の値に `currentcolor` (通常はアニメーション可能) を使用することがありますが、 `auto` はトランジションやアニメーションでは補完されません。

- {{cssxref("&lt;color&gt;")}}
  - : キャレットの色です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 独自のキャレット色の設定

#### HTML

```html
<input value="このフィールドは既定のキャレットを使用します。" size="64" />
<input class="custom" value="キャレットが独自の色になります！" size="64" />
<p contenteditable class="custom">
  この段落は編集可能であり、 同様にキャレットが独自の色です！
</p>
```

#### CSS

```css
input {
  caret-color: auto;
  display: block;
  margin-bottom: 0.5em;
}

input.custom {
  caret-color: red;
}

p.custom {
  caret-color: green;
}
```

#### 結果

{{EmbedLiveSample('Setting_a_custom_caret_color', 500, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} 要素
- 要素のテキストを編集可能にする HTML の [`contenteditable`](/ja/docs/Web/HTML/Global_attributes#contenteditable) 属性
- [内容を編集可能にする](/ja/docs/Web/Guide/HTML/Editable_content)
- [CSS を使用した HTML 要素への色の適用](/ja/docs/Web/HTML/Applying_color)
- {{cssxref("&lt;color&gt;")}} データ型
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
