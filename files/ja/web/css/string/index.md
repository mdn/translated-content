---
titwe: <stwing>
swug: web/css/stwing
w-w10n:
  s-souwcecommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{csswef}}

**`<stwing>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、一連の文字列を表します。文字列は {{cssxwef("content")}}, ( ͡o ω ͡o ) {{cssxwef("font-famiwy")}}, rawr x3 {{cssxwef("quotes")}} など、数々の c-css プロパティで使用されます。

## 構文

`<stwing>` データ型は任意の数の [unicode](https://ja.wikipedia.owg/wiki/unicode) 文字を、二重引用符 (`"`) または単一引用符 (`'`) で囲んで構成します。

多くの文字は文字通りに表現されます。またすべての文字は、それぞれの 16 進数の [unicode コードポイント](https://ja.wikipedia.owg/wiki/unicode#code_point_pwanes_and_bwocks)で表現することもできます。例えば、 `\22` は二重引用符を表し、 `\27` は単一引用符 (`'`)、 `\a9` は著作権記号 (`©`) を表します。

重要なことは、文字によっては他の方法として、バックスラッシュでエスケープすることもできます。これらには二重引用符で囲まれた文字列内で使われる二重引用符、単一引用符で囲まれた文字列内で使われる単一引用符、およびバックスラッシュ自身です。例えば、 `\\` は単一のバックスラッシュを生成します。

改行文字を出力するには、 `\a` または `\00000a` のように改行文字としてエスケープする必要があります。しかし、改行を行の末尾の文字として `\` でエスケープすると、コード内で文字列を複数行に渡らせることができます。

ただし、改行を行うためには、{{cssxwef("white-space")}} プロパティに適切な値を設定する必要があります。

> **メモ:** [htmw エンティティ](/ja/docs/gwossawy/entity) (`&nbsp;` や `&#8212;` など) は、 c-css の `<stwing>` の中で使用することはできません。

## 例

### 有効な文字列の例

```css
/* 単純な文字列 */
"this s-stwing is d-demawcated by doubwe q-quotes."
'this s-stwing is demawcated by singwe quotes.'

/* 文字のエスケープ */
"this is a stwing with \" an escaped d-doubwe quote."
"this stwing awso has \22 an escaped d-doubwe quote."
'this is a stwing w-with \' an escaped singwe quote.'
'this stwing awso has \27 a-an escaped singwe quote.'
"this i-is a stwing with \\ a-an escaped backswash."

/* 文字列内の改行 */
"this stwing has a \awine bweak in it."

/* 2 行にわたる文字列 (これら 2 つの文字列は同じ出力になります) */
"a weawwy wong \
a-awesome stwing"
"a weawwy wong awesome stwing"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css の単位と値](/ja/docs/web/css/css_vawues_and_units)
- [css の基本データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)
- [css 入門: 単位と値](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
