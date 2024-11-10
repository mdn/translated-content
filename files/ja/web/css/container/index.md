---
title: container
slug: Web/CSS/container
l10n:
  sourceCommit: de76d381cb79a61813378963b66d98f68e74381c
---

{{CSSRef}}

**container** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティで、この要素をクエリーコンテナーとして確立し、[コンテナークエリー](/ja/docs/Web/CSS/CSS_container_queries)で使用される[コンテナーコンテキスト](/ja/docs/Web/CSS/CSS_container_queries#naming_containment_contexts)の名前を指定します。

## 構成要素のプロパティ

このプロパティは、以下のCSSプロパティの一括指定です。

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}

## 構文

```css
/* <container-name> */
container: my-layout;

/* <container-name> / <container-type> */
container: my-layout / size;

/* グローバル値 */
container: inherit;
container: initial;
container: revert;
container: revert-layer;
container: unset;
```

### 値

- `<container-name>`
  - : コンテナーコンテキストの大文字小文字を区別した名前です。
    構文の詳細は、 {{cssxref("container-name")}} プロパティのページにあります。
- `<container-type>`
  - : コンテナーコンテキストの種類です。
    構文の詳細は、 {{cssxref("container-type")}} プロパティのページにあります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### インラインサイズ抑制の確立

以下の HTML の例があったとします。これは画像、タイトル、いくつかのテキストによるカード部品です。

```html
<div class="post">
  <div class="card">
    <h2>カードのタイトル</h2>
    <p>カードのコンテンツ</p>
  </div>
</div>
```

コンテナーコンテキストを作成する明示的な方法は、 `container-name` をオプションとして `container-type` を宣言することです。

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

`container` の一括指定は、これを単一の宣言で定義しやすくするためのものです。

```css
.post {
  container: sidebar / inline-size;
}
```

そして、 {{cssxref("@container")}} アットルールを用いて、そのコンテナーの名前をターゲットにすることができます。

```css
@container sidebar (min-width: 400px) {
  /* <stylesheet> */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS コンテナークエリー](/ja/docs/Web/CSS/CSS_container_queries)
- {{Cssxref("@container")}} アットルール
- CSS {{Cssxref("contain")}} 一括指定プロパティ
- CSS {{Cssxref("container-type")}} プロパティ
- CSS {{Cssxref("container-name")}} プロパティ
- CSS {{cssxref("content-visibility")}} プロパティ
