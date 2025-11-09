---
title: "@namespace"
slug: Web/CSS/Reference/At-rules/@namespace
original_slug: Web/CSS/@namespace
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`@namespace`** は[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、
[CSS](/ja/docs/Glossary/CSS) [スタイルシート](/ja/docs/Web/API/StyleSheet) で使用する [XML 名前空間](/ja/docs/Glossary/Namespace)を定義します。

{{InteractiveExample("CSS デモ: @namespace", "tabbed-shorter")}}

```css interactive-example
@namespace svg url("http://www.w3.org/2000/svg");

a {
  color: orangered;
  text-decoration: underline dashed;
  font-weight: bold;
}

svg|a {
  fill: blueviolet;
  text-decoration: underline solid;
  text-transform: uppercase;
}
```

```html interactive-example
<p>
  <a href="#">これは通常の HTML のリンクです</a>
</p>

<svg width="250px" viewBox="0 0 250 20" xmlns="http://www.w3.org/2000/svg">
  <a href="#">
    <text x="0" y="15">これは SVG で作成されたリンクです</text>
  </a>
</svg>
```

## 構文

```css
/* 既定の名前空間 */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* 接頭辞つきの名前空間 */
@namespace prefix url(XML-namespace-URL);
@namespace prefix "XML-namespace-URL";
```

## 解説

定義された名前空間は、[全称](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)、[型](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)、[属性](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)[セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)において、選択する要素をその名前空間に制限するために使用することができます。 `@namespace` ルールは一般に、複数の名前空間を含む文書を扱う場合—例えば、HTML でインラインの SVG や MathML を併用する場合や、複数の語彙が混在する XML などでのみ役立ちます。

`@namespace` ルールは、スタイルシート内ですべての {{cssxref("@charset")}} および {{cssxref("@import")}} ルールより後、また他のアットルールや[スタイル宣言](/ja/docs/Web/API/CSSStyleDeclaration)より前に配置しなければなりません。

`@namespace` は、スタイルシートの**既定の名前空間**が定義できます。既定の名前空間を定義するとすべての全称セレクターや要素型セレクター（属性セレクターは除く。後述のメモを参照）は、既定の名前空間内の要素にのみ適用されます。

また、 `@namespace` ルールで**名前空間の接頭辞**が定義できます。全称セレクター、要素型セレクター、属性セレクターに名前空間の接頭辞を付加すると、これらのセレクターは名前空間*および*要素または属性に一致する場合のみ一致します。

HTML では、既知の[外来要素](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements)へ自動的に名前空間が割り当てられます。すなわち、 HTML 要素は文書内に `xmlns` 属性が存在しなくても XHTML 名前空間 (`http://www.w3.org/1999/xhtml`) に含まれているかのように動作します。また [`<svg>`](/ja/docs/Web/SVG/Reference/Element/svg) および [`<math>`](/ja/docs/Web/MathML/Reference/Element/math) 要素は、適切な名前空間（それぞれ `http://www.w3.org/2000/svg` および `http://www.w3.org/1998/Math/MathML`）が割り当てられます。

> [!NOTE]
> XML では、属性に直接接頭辞を定義しない限り（_例_: `xlink:href`）、属性は名前空間を持ちません。言い換えると、属性は所属する要素から名前空間を継承しません。この動作に合わせるため、 CSS の既定の名前空間は属性セレクターに適用しません。

## 形式文法

{{csssyntax}}

## 例

### 既定かつ定義済みの名前空間の指定

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* XHTML は既定で接頭辞のない名前空間であるため、これは XHTML のすべての <a> 要素を選択します */
a {
}

/* これはすべての SVG <a> 要素を選択します */
svg|a {
}

/* XHTML と SVG の両方の <a> 要素に一致します */
*|a {
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [名前空間の集中講座](/ja/docs/Web/SVG/Guides/Namespaces_crash_course)
- [CSS アットルール関数](/ja/docs/Web/CSS/Reference/At-rules/At-rule_functions)
