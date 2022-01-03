---
title: ':hover'
slug: Web/CSS/:hover
tags:
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.hover
translation_of: Web/CSS/:hover
---
{{ CSSRef }}

**`:hover`** は [CSS](/ja/docs/Web/CSS) の [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、ユーザーがポインティングデバイスで要素に反応したものの、アクティブ化する必要がないものを選択します。普通はユーザーがカーソル (マウスポインター) を要素の上でかざしたときにそうなります。

```css
/* 「ホバー」状態の <a> 要素を選択します */
a:hover {
  color: orange;
}
```

`:hover` 擬似クラスによって定義されたスタイルは、少なくとも同等の仕様を持つリンク関連の擬似クラス  ({{ cssxref(":link") }}、{{ cssxref(":visited") }}、 {{ cssxref(":active") }}) によって上書きされます。適切にリンクにスタイルを適用するには、 `:hover` の規則を `:link` と `:visited` の後、 `:active` の前に置き、 _LVHA 順_: `:link` — `:visited` — `:hover` — `:active` で定義されるようにしてください。

> **Note:** `:hover` 擬似クラスはタッチ画面で問題になります。ブラウザーによっては、 `:hover` 擬似クラスに全く一致しなかったり、要素をタッチした直後だけ一致したり、ユーザーが指を離しても一致し続け、他の要素にタッチするまで続いたりします。ウェブの開発者は、ホバー機能が制限されていたり存在しなかったりしても、コンテンツにアクセスできるように考慮してください。

## 構文

{{csssyntax}}

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
  transition: background-color .5s;
}

a:hover {
  background-color: gold;
}
```

#### 結果

{{EmbedLiveSample("Basic_example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Chromium bug #370155: Don't make `:hover` sticky on tap on sites that set a mobile viewport](https://code.google.com/p/chromium/issues/detail?id=370155)
- [Chromium bug #306581: Immediately show hover and active states on touch when page isn't scrollable.](https://code.google.com/p/chromium/issues/detail?id=306581)
