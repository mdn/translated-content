---
title: :hover
slug: Web/CSS/Reference/Selectors/:hover
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**`:hover`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、ユーザーがポインティングデバイスで反応した要素に一致します。この擬似クラスは、一般的にユーザーがマウスボタンを押さずにカーソル（マウスポインター）を要素の上にかざしたときに発動します。

{{InteractiveExample("CSS デモ: :hover", "tabbed-shorter")}}

```css interactive-example
.joinBtn {
  width: 10em;
  height: 5ex;
  background-color: gold;
  border: 2px solid firebrick;
  border-radius: 10px;
  font-weight: bold;
  color: black;
  cursor: pointer;
}

.joinBtn:hover {
  background-color: bisque;
}
```

```html interactive-example
<p>クエストに参加しますか？</p>
<button class="joinBtn">確認</button>
```

`:hover` 擬似クラスによって定義されたスタイルは、少なくとも同等の仕様を持つリンク関連の擬似クラス ({{ cssxref(":link") }}、{{ cssxref(":visited") }}、{{ cssxref(":active") }}) によって上書きされます。適切にリンクにスタイルを適用するには、 `:hover` の規則を `:link` と `:visited` の後、 `:active` の前に置き、 _LVHA 順_: `:link` — `:visited` — `:hover` — `:active` で定義されるようにしてください。

> [!NOTE]
> `:hover`擬似クラスはタッチスクリーン上で問題を招きます。ブラウザーによっては、`:hover`擬似クラスがまったく一致しなかったり、要素に触れた直後の一瞬だけ一致したり、ユーザーがタッチを止めた後も別の要素に触れるまで一致し続けたりする可能性があります。ウェブ開発者は、ホバー機能が制限されている、あるいは存在しない端末でもコンテンツが利用可能であるよう考慮すべきです。

## 構文

```css
:hover {
  /* ... */
}
```

## 例

### 基本的な例

#### HTML

```html
<a href="#">このリンクの上を通過させてみてください。</a>
```

#### CSS

```css
a {
  background-color: powderblue;
  transition: background-color 0.5s;
}

a:hover {
  background-color: gold;
}
```

#### 結果

{{EmbedLiveSample("基本的な例")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Chromium bug #370155: Don't make `:hover` sticky on tap on sites that set a mobile viewport](https://crbug.com/370155)
- [Chromium bug #306581: Immediately show hover and active states on touch when page isn't scrollable.](https://crbug.com/306581)
