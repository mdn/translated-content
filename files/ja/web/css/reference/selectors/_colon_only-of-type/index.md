---
title: :only-of-type
slug: Web/CSS/Reference/Selectors/:only-of-type
original_slug: Web/CSS/:only-of-type
---

[CSS](/ja/docs/Web/CSS) の **`:only-of-type`** [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)は、同じ型の兄弟要素がない要素を表します。

```
/* <p> が親の中にある唯一の <p> 出逢った場合に選択 */
p:only-of-type {
  background-color: lime;
}
```

{{InteractiveExample("CSS デモ: :only-of-type", "tabbed-shorter")}}

```css interactive-example
a:only-of-type {
  color: fuchsia;
}

dd:only-of-type {
  background-color: bisque;
}
```

```html interactive-example
<p>
  To find out more about <b>QUIC</b>, check <a href="#">RFC 9000</a> and
  <a href="#">RFC 9114</a>.
</p>

<dl>
  <dt>Published</dt>
  <dd>2021</dd>
  <dd>2022</dd>
</dl>

<p>Details about <b>QPACK</b> can be found in <a href="#">RFC 9204</a>.</p>

<dl>
  <dt>Published</dt>
  <dd>2022</dd>
</dl>
```

> [!NOTE]
> 最初の定義では、親のある要素のみが選択されていました。 Selectors Level 4 の初期に、これは必要なくなりました。

## 構文

```
:only-of-type
```

## 例

### 同じ型の兄弟がない要素をスタイル付け

#### HTML

```html
<main>
  <div>I am `div` #1.</div>
  <p>I am the only `p` among my siblings.</p>
  <div>I am `div` #2.</div>
  <div>
    I am `div` #3.
    <i>I am the only `i` child.</i>
    <em>I am `em` #1.</em>
    <em>I am `em` #2.</em>
  </div>
</main>
```

#### CSS

```css
main :only-of-type {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Styling_elements_with_no_siblings_of_the_same_type','100%',180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":only-child")}}
- {{Cssxref(":first-of-type")}}
- {{Cssxref(":last-of-type")}}
- {{Cssxref(":nth-of-type")}}
