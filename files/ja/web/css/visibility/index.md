---
title: visibility
slug: Web/CSS/visibility
---

{{CSSRef}}

**`visibility`** は CSS のプロパティで、文書のレイアウトを変更することなく要素を表示したり非表示にしたりします。このプロパティは {{HTMLElement("table")}} の行や列を隠すこともできます。

{{EmbedInteractiveExample("pages/css/visibility.html")}}

要素を不可視にして*レイアウトから除去する*には、 `visibility` を使用する代わりに {{cssxref("display")}} プロパティを `none` に設定してください。

## 構文

```css
/* キーワード値 */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* グローバル値 */
visibility: inherit;
visibility: initial;
visibility: unset;
```

`visibility` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `visible`
  - : 要素のボックスが可視になります。
- `hidden`
  - : 要素のボックスは不可視になります (描画されません) が、レイアウトには通常通り影響します。子孫要素は `visibility` が `visible` に設定されていれば可視になります。([タブ順](/ja/docs/Web/HTML/Global_attributes/tabindex)で操作された時などに) 要素はフォーカスを受け取ることができません。
- `collapse`

  - : &#x20;

    - {{HTMLElement("table")}} の行、列、列グループ、行グループでは、行や列が不可視になり、 (表の列や行に `{{Cssxref("display")}}: none` が適用された場合のように) 占めていた領域も除去されます。しかし、他の行や列の寸法は、不可視になった行や列のセルが存在するときのように計算されます。この値は表全体の幅や高さを強制的に再計算することなく、すばやく行や列を不可視にすることができます。
    - フレックス項目では、不可視になり、占めていた領域は削除されます。
    - [XUL](/ja/docs/Mozilla/Tech/XUL) 要素では、通常は寸法に影響するその他のスタイルに関わらず、要素の寸法が常にゼロと計算されますが、マージンは有効になります。
    - その他の要素では、 `collapse` は `hidden` と同じと扱われます。

## アクセシビリティの考慮

要素の `visibility` の値に `hidden` を使用すると、 [アクセシビリティツリー](/ja/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs)から削除されます。これは要素及びその子孫要素が読み上げ技術でアナウンスされない結果になります。

## 補間

visibility の値は*可視*及び*不可視*の間で補間可能です。従って、開始または終了の値の一つが `visible` でない限りは、補間は行われません。値は離散的なステップとして補間され、タイミング関数の `0` と `1` 間の値が、 `visible` に対応し、タイミング関数の他の値 (トランジションの開始点または終了点でのみ、または \[0、1] の外側の y 値を有する `cubic-bezier()` 関数の結果として) はより近い終了点に対応します。

## 注

- 現在の一部のブラウザーでは、 `visibility:collapse` の対応がないか、部分的に不正確です。表の行や列以外の要素に用いた場合、誤って `visibility:hidden` のように扱われることがあります。
- `visibility:collapse` を用いた表の、折り畳まれたセルに入れ子の表があると、入れ子の表で `visibility:visible` が明示的に指定されていない限りは、表のレイアウトが変わる可能性があります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 基本的な例

#### HTML

```html
<p class="visible">The first paragraph is visible.</p>
<p class="not-visible">The second paragraph is NOT visible.</p>
<p class="visible">
  The third paragraph is visible. Notice the second paragraph is still occupying
  space.
</p>
```

#### CSS

```css
.visible {
  visibility: visible;
}

.not-visible {
  visibility: hidden;
}
```

{{EmbedLiveSample('Basic_example')}}

### 表の例

#### HTML

```html
<table>
  <tr>
    <td>1.1</td>
    <td class="collapse">1.2</td>
    <td>1.3</td>
  </tr>
  <tr class="collapse">
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
  </tr>
  <tr>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
  </tr>
</table>
```

#### CSS

```css
.collapse {
  visibility: collapse;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid gray;
}
```

{{EmbedLiveSample('Table_example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("css.properties.visibility")}}

## 関連情報

- {{cssxref("display")}}
