---
title: :out-of-range
slug: Web/CSS/Reference/Selectors/:out-of-range
original_slug: Web/CSS/:out-of-range
---

**`:out-of-range`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 {{htmlelement("input")}} 要素のうち、現在の値が [`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) および [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) 属性で指定された範囲を外れているものを表します。

```css
/* 入力範囲が設定されていて、値がその範囲外である
   <input> 要素をすべて選択 */
input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
}
```

{{InteractiveExample("CSS デモ: :out-of-range", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:out-of-range {
  background-color: orangered;
}
```

```html interactive-example
<form>
  <label for="amount">How many tickets? (You can buy 2-6 tickets)</label>
  <input id="amount" name="amount" type="number" min="2" max="6" value="4" />

  <label for="dep">Departure Date: (Whole year 2022 is acceptable)</label>
  <input
    id="dep"
    name="dep"
    type="date"
    min="2022-01-01"
    max="2022-12-31"
    value="2025-05-05" />

  <label for="ret">Return Date: (Whole year 2022 is acceptable)</label>
  <input id="ret" name="ret" type="date" min="2022-01-01" max="2022-12-31" />
</form>
```

この擬似クラスは。入力欄の現在の値が許可された範囲外にあることをユーザーに視覚的に示すのに便利です。

> [!NOTE]
> この擬似クラスは範囲制限を持つ (または設定できる) 要素にのみ適用されます。そのような制限がない場合は、要素は "in-range" にも "out-of-range" にもなりません。

## 構文

```
:out-of-range
```

## 例

### HTML

```html
<form action="" id="form1">
  <p>1 から 10の間の値が有効です。</p>
  <ul>
    <li>
      <input
        id="value1"
        name="value1"
        type="number"
        placeholder="1 to 10"
        min="1"
        max="10"
        value="12" />
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
  content: "範囲内です。";
}

input:out-of-range + label::after {
  content: "範囲外です！";
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
- [フォームデータの検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
