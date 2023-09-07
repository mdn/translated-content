---
title: ":in-range"
slug: Web/CSS/:in-range
---

{{CSSRef}}

**`:in-range`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、現在の値が [`min`](/ja/docs/Web/HTML/Element/input#min) および [`max`](/ja/docs/Web/HTML/Element/input#max) 属性による制限範囲内にある {{htmlelement("input")}} 要素を表します。

```css
/* 入力範囲が設定されていて、値がその範囲に該当する
   <input> 要素をすべて選択 */
input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}
```

この擬似クラスは、入力欄の現在の値が許可された範囲内にあることをユーザーに視覚的に示すのに便利です。

> **メモ:** この擬似クラスは範囲制限を持つ（または設定できる）要素にのみ適用されます。そのような制限がない場合は、要素は "in-range" にも "out-of-range" にもなりません。

## 構文

```
:in-range
```

## 例

### HTML

```html
<form action="" id="form1">
  <ul>
    1 から 10 の間の値が有効です。
    <li>
      <input
        id="value1"
        name="value1"
        type="number"
        placeholder="1 to 10"
        min="1"
        max="10"
        value="12"
        required />
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

> **メモ:** 空の `<input>` は範囲外としてカウントされず、 `:out-of-range` 擬似クラスセレクターで選択されることはありません。空の入力を選択するための [`:blank`](/ja/docs/Web/CSS/:blank) 擬似クラスがありますが、この記事を書いている時点では、実験的で対応が十分ではありません。また、 `required` 属性と [`:invalid`](/ja/docs/Web/CSS/:invalid) 擬似クラスを使用すると、入力を必須にするためのより一般的なロジックとスタイルを提供できます (`:invalid` は空白*および*範囲外の入力のスタイルを指定します)。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":out-of-range")}}
- [フォームデータの検証](/ja/docs/Learn/Forms/Form_validation)
