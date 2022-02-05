---
title: var()
slug: Web/CSS/var()
tags:
  - CSS
  - CSS カスタムプロパティ
  - CSS 変数
  - CSS 関数
  - 実験的
  - 関数
  - リファレンス
  - 変数
  - var
  - var()
browser-compat: css.properties.custom-property.var
translation_of: Web/CSS/var()
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`var()`** 関数は、他のプロパティの値の一部に代わって[カスタムプロパティ](/ja/docs/Web/CSS/--*) (「CSS 変数」と呼ばれることもあります) の値を挿入できます。

{{EmbedInteractiveExample("pages/css/var.html")}}

`var()` 関数は、プロパティ名、セレクター、またはプロパティ値以外のところでは使用できません。 (使用してしまうと、無効な構文が生成されるか、もしくはその変数に接続していない値が生成されてしまいます。)

## 構文

関数の最初の引数は、置換されるカスタムプロパティの名前です。関数のオプションの 2 番目の引数は、代替値として機能します。最初の引数で参照されるカスタムプロパティが無効な場合、関数は2番目の値を使用します。

{{csssyntax}}

> **Note:** 代替の構文は、カスタムプロパティの構文と同様にカンマを使用できます。たとえば `var(--foo, red, blue)` では、 `red, blue` を代替として定義します。つまり、最初のカンマから関数の最後にかけてのすべてが、代替値と見なされます。

### 値

- `<custom-property-name>`
  - : カスタムプロパティの名前で、 2 つのハイフンで始まる識別子で表されます。カスタムプロパティは、作成者とユーザーだけが使用できます。 CSS はここに提示されているものを超えて意味を与えません。
- `<declaration-value>`
  - : カスタムプロパティの代替値。カスタムプロパティが使用されているコンテキストが無効な場合に使用されます。この値には、改行、不等式の閉じ括弧、つまり `)`, `]`, `}`, トップレベルのセミコロン、感嘆符などの特別な意味を持つ文字を除く任意の文字を含めることができます。

## 例

### :root に設定されたカスタムプロパティの使用

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

### プロパティが設定されていなかったときに使用するための代替値つきのカスタムプロパティ

```css
/* 代替 */
/* コンポーネント内のスタイル: */
.component .header {
  color: var(--header-color, blue); /* header-color という変数は設定されていないため、代替値である blue がセットされます */
}

.component .text {
  color: var(--text-color, black);
}

/* より規模の大きなアプリケーションのスタイルでは */
.component {
  --text-color: #080;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("env()","env(…)")}} – ユーザーエージェントによって制御される読み取り専用環境変数
- [CSS 変数の利用](/ja/docs/Web/CSS/Using_CSS_custom_properties)
