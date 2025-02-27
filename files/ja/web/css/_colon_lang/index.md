---
title: :lang()
slug: Web/CSS/:lang
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{CSSRef}}

**`:lang()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、指定された言語に基づいて要素を照合します。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-function-lang.html", "tabbed-shorter")}}

> [!NOTE]
> HTML では、言語は [`lang`](/ja/docs/Web/HTML/Global_attributes#lang) 属性と {{HTMLElement("meta")}} 要素、それに、可能であればプロトコルから得られる情報 (HTTP ヘッダーなど) の組み合わせで決められます。他の文書型では、文書の言語を決定する他の方法があるかもしれません。

## 構文

### 形式文法

```css-nolint
:lang(<language-code> [,<language-code> ]*) {
  /* ... */
}
```

### 引数

- `<language-code>`
  - : カンマで区切った 1 つ以上の {{cssxref("&lt;string&gt;")}} のリストで、 [BCP 47](https://tools.ietf.org/html/bcp47) の言語コードに従った言語値を持つ要素を対象とします。
    言語の範囲による照合は大文字小文字を区別しません。

## 解説

言語を選択するとき、暗黙にワイルドカード照合が行われます。そのため、 `:lang(de-DE)` は `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE`, `de-Latn-DE-1996` に一致します。
明示的にワイルドカードを使用する場合は、完全一致する言語サブタグを記載する必要があります。したがって、 `:lang("*-F*")` は不正ですが、 `:lang("*-Fr")` は有効です。

## 例

### 指定された言語の子の照合

この例では、 `:lang()` 擬似クラスを使用して引用要素 ({{htmlElement("q")}}) の親を選択するために[子結合子](/ja/docs/Web/CSS/Child_combinator)を使用しています。なお、この例はこの目的のための唯一の方法でも、文書型における最適な方法を示しているわけでもありません。また、 {{glossary("Unicode")}} の値は特殊な引用符を指定するために使用していることに注意してください。

#### HTML

```html
<div lang="en">
  <q>This English quote has a <q>nested</q> quote inside.</q>
</div>
<div lang="fr">
  <q>This French quote has a <q>nested</q> quote inside.</q>
</div>
<div lang="ja">
  <q>この日本語の引用には内部に<q>入れ子</q>の引用があります。</q>
</div>
```

#### CSS

```css
:lang(en) > q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
:lang(fr) > q {
  quotes: "« " " »";
}
:lang(ja) > q {
  quotes: "「" "」" "『" "』";
}
```

#### 結果

{{EmbedLiveSample('Matching_children_of_a_given_language', '', '80')}}

### 複数の言語の照合

次の例は、カンマで区切られた言語コードのリストを提供して、複数の言語を照合する方法を示しています。
ワイルドカードを使用して、指定された範囲の言語を照合することも可能です。

```css hidden
p {
  margin: 0;
}
```

#### CSS

```css
/* nl および de と照合 */
:lang("nl", "de") {
  color: green;
}

/* 引用符の省略と大文字小文字を区別しない照合 */
:lang(EN, FR) {
  color: blue;
}

/* 言語の範囲を照合するワイルドカード */
:lang("*-Latn") {
  color: red;
}
```

#### HTML

```html
<p lang="nl">Dit is een Nederlandse paragraaf.</p>
<p lang="de">Dies ist ein deutscher Satz.</p>
<p lang="en">This is an English sentence.</p>
<p lang="en-GB">Matching the language range of English.</p>
<p lang="fr">Ceci est un paragraphe français.</p>
<p lang="fr-Latn-FR">Ceci est un paragraphe français en latin.</p>
```

#### 結果

{{EmbedLiveSample('Matching_multiple_languages', '', '120')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":dir")}} 擬似クラスはテキストの方向で照合します
- HTML の [`lang`](/ja/docs/Web/HTML/Global_attributes#lang) 属性
- HTML の [`translate`](/ja/docs/Web/HTML/Global_attributes#translate) 属性
- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
