---
title: ':out-of-range'
slug: Web/CSS/:out-of-range
tags:
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - UI セレクター
browser-compat: css.selectors.out-of-range
translation_of: Web/CSS/:out-of-range
---
{{CSSRef}}

**`:out-of-range`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 {{htmlelement("input")}} 要素のうち、現在の値が {{htmlattrxref("min", "input")}} および {{htmlattrxref("max","input")}} 属性で指定された範囲を外れているものを表します。

```css
/* 入力範囲が設定されていて、値がその範囲外である
   <input> 要素をすべて選択 */
input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
}
```

この擬似クラスは。入力欄の現在の値が許可された範囲外にあることをユーザーに視覚的に示すのに便利です。

> **Note:** この擬似クラスは範囲制限を持つ (または設定できる) 要素にのみ適用されます。そのような制限がない場合は、要素は "in-range" にも "out-of-range" にもなりません。

## 構文

{{csssyntax}}

## 例

### HTML

```html
<form action="" id="form1">
 <p>1 から 10の間の値が有効です。</p>
  <ul>
    <li>
      <input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12">
      <label for="value1">あなたの値は</label>
    </li>
  </ul>
</form>
```

### CSS

```css
li {
  list-style: none;
  margin-bottom: 1em;
}

input {
  border: 1px solid black;
}

input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
  border: 2px solid red;
}

input:in-range + label::after {
  content: '範囲内です。';
}

input:out-of-range + label::after {
  content: '範囲外です！';
}
```

### 結果

{{EmbedLiveSample('Examples', 600, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":in-range")}}
- [フォームデータの検証](/ja/docs/Learn/Forms/Form_validation)
