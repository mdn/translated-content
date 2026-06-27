---
title: CSS `:only-of-type` 擬似クラス
short-title: :only-of-type
slug: Web/CSS/Reference/Selectors/:only-of-type
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:only-of-type`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、同じ型の兄弟要素がない要素を表します。

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
  <b>QUIC</b> の詳細を探すには、<a href="#">RFC 9000</a> および <a href="#">RFC 9114</a> を調べてください。
</p>

<dl>
  <dt>公開日</dt>
  <dd>2021</dd>
  <dd>2022</dd>
</dl>

<p><b>QPACK</b> に関する詳細は、<a href="#">RFC 9204</a> で探すことができます。</p>

<dl>
  <dt>公開日</dt>
  <dd>2022</dd>
</dl>
```

## 構文

```css
:only-of-type {
  /* ... */
}
```

## 例

### 同じ型の兄弟がない要素をスタイル付け

#### HTML

```html
<main>
  <div>これは 1 つ目の `div` です。</div>
  <p>これは兄弟の中で唯一の `p` です。</p>
  <div>これは 2 つ目の `div` です。</div>
  <div>
    これは 3 つ目の `div` です。
    <i>これは唯一の `i` 子要素です。</i>
    <em>これは 1 つ目の `em` です。</em>
    <em>これは 2 つ目の `em` です。</em>
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
