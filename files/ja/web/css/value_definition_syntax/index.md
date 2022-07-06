---
title: 値の定義構文
slug: Web/CSS/Value_definition_syntax
tags:
  - CSS
  - ガイド
  - リファレンス
  - Syntax
translation_of: Web/CSS/Value_definition_syntax
---
{{CSSRef}}

**CSS の値の定義構文**は、形式文法であり、 CSS プロパティや関数の有効な値の組み合わせ定義するのに使われます。この構文に加えて、有効な値の組み合わせは意味的な制約で有効値の集まりをさらに制限できます (例えば、数値を正の値に限定します)。

定義構文ではどの値が許可され、相互作用が可能であるかを記述します。成分は、*キーワード*や、*リテラル*とみなされる文字列、CSS データ型の値、またはその他の CSS プロパティのいずれかです。

## 成分値の種類

### キーワード

#### 共通キーワード

引用符なしのリテラルで、字句通りの意味が事前に定義されているキーワードです。例: `auto`, `smaller`, `ease-in`

#### `inherit`, `initial`, `unset` の場合

すべての CSS プロパティで、 CSS 全体で定義されているキーワード `inherit`, `initial`, `unset` を使うことができます。これらは値定義に現れず、暗黙的に定義されています。

### リテラル

CSS のスラッシュ ('`/`') やカンマ ('`,`') のようないくつかの文字は、文字自身として現れ、プロパティ定義で値の区切りに使われます。カンマはよく、列挙する値や数学的な関数の引数の区切りに使われます。スラッシュはよく、意味的に異なるものの、共通の構文を持つ値の集まりの区切りに使われます。よくあるのは、一括指定 (shorthand) プロパティで、同じ型だが異なるプロパティに属する成分を区切る使い方です。

どちらの記号も値定義に文字通り現れます。

### データ型

#### 基本データ型

データの種類によっては CSS 全体で使われ、仕様書のすべての値に一度だけ定義されるものがあります。これは*基本データ型*と呼ばれ、名前を記号 '`<`' と '`>`' で囲って表現されます。例: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### 非終端データ型 (Non-terminal data types)

一般的でないデータ型ですが、非終端データ型も '`<`' と '`>`' で囲みます。

非終端データ型には 2 種類あります。

- *同名プロパティを共有*するデータ型で、引用符で囲みます。この場合、データ型はプロパティと同じ値のセットを共有します。一括指定プロパティの定義でよく使われます。
- *プロパティと同じ名前を共有していない*データ型。これらのデータ型は、基本データ型にとても近いものです。基本データ型と異なるのは、定義の物理的な位置だけです。この場合、通常、その定義は、それらを使用するプロパティの定義に物理的にとても近いところにあります。

## 成分値の組み合わせ

### 角括弧

*角括弧*はいくつかの対象、結合子、乗算子を取り囲み、単一の成分に変換します。**ひとまとまりの成分の結合優先順を無視する**ために使われます。

```css
bold [ thin && <length> ]
```

この例は次の値に一致します。

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

次の値には一致しません。

- `thin bold 3em`。 `bold` は角括弧で定義された成分と並列なので、その前に出現しなければなりません。

### 並列

いくつかのキーワード、リテラル、データ型を順に配置し、1 つ以上の空白で区切る置き方を*並列*と呼びます。並列の成分は**どれも必須で、記述順どおりに出現する必要があります**。

```css
bold <length> , thin
```

この例は次の値に一致します。

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

次の値には一致しません。

- `thin 1em, bold`。対象は記述通りの順でなければなりません
- `bold 1em thin`。対象は必須です。リテラルであるカンマも存在する必要があります
- `bold 0.5ms, thin`。 `ms` 値は {{CSSxRef("&lt;length&gt;")}} ではありません。

### 二重アンパサンド

2 つ以上の成分を二重アンパサンド `&&` で区切ると、対象すべてが**必須だが出現順は問わない**という意味になります。

```css
bold && <length>
```

この例は次の値に一致します。

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

次の値には一致します。

- `bold`。どちらの成分も出現しなければなりません。
- `bold 1em bold`。どちらの成分も 1 度だけ出現しなければなりません。

> **Note:** 並列は二重アンパサンドより優先されます。例えば `bold thin && <length>` は `[ bold thin ] && <length>` と同じ意味です。これは `bold thin <length>` や `<length> bold thin` を含みますが、`bold <length> thin` は含みません。

### 二重バー

2 つ以上の成分を二重バー `||` で区切ると、すべての対象が省略可能であることを意味します。**少なくともいずれか 1 つが存在する必要がありますが、順序は問いません**。[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)の値定義に使われます。

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

この例は次の値に一致します。

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

次の値には一致しません。

- `blue yellow`。各成分は最大で 1 回だけ出現できます。
- `bold`。どの対象の値もこのキーワードを使えません。

> **Note:** 二重アンパサンドは二重バーより優先されます。例えば `bold || thin && <length>` は `bold || [ thin && <length> ]` と同じ意味です。 `bold`, `thin <length>`, `bold thin <length>`, `thin <length> bold` を含みますが、`<length> bold thin` は 含みません。 bold を省略しないのなら、`thin && <length>` 成分全体よりも前か後ろに置く必要があるからです。

### 単一バー

2 つ以上の対象を単一バー `|` で区切ると、全対象が排他的な選択肢であることを意味します。**選択肢のうち 1 つだけが存在する必要があります**。利用可能なキーワードを列挙する際によく使われます。

```css
<percentage> | <length> | left | center | right | top | bottom
```

この例は次の値に一致します。

- `3%`
- `0`
- `3.5em`
- `left`
- `center`
- `right`
- `top`
- `bottom`

次の値には一致しません。

- `center 3%`。各成分は 1 つだけ存在しなければなりません。
- `3em 4.5em`。成分は最大で 1 回だけ存在できます。

> **Note:** 二重バーは単一バーより優先されます。例えば `bold | thin || <length>` は `bold | [ thin || <length> ]` と同じ意味です。`bold`, `thin`, `<length>`, `<length> thin`, や `thin <length>` を含みますが、`bold <length>` は含みません。`|` 結合子の両側それぞれから 1 つだけ対象が存在できるからです。

## 成分値の乗算子

乗算子は、それ以前にある対象を何回繰り返せるかを表す記号です。乗算子がなければ、対象は 1 度だけしか出現してはいけません。

乗算子は足し合わせることはできず、他のどの結合子より優先される点に注意してください。

### アスタリスク (`*`)

*アスタリスク乗算子*は対象の **0 回以上**の出現を示します。

```css
bold smaller*
```

この例は次の値に一致します。

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` など

次の値には一致しません。

- `smaller`。`bold` は並列で、他のどの `smaller` キーワードより先に出現する必要があります。

### プラス (`+`)

*プラス乗算子*は対象の **1 回以上**の出現を示します。

```css
bold smaller+
```

この例は次の値に一致します。

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` など

次の値には一致しません。

- `bold`。`smaller` が少なくとも 1 回 出現しなければなりません。
- `smaller`。`bold` は並列で、他のどの `smaller` キーワードよりも前に出現しなければなりません。

### 疑問符 (`?`)

*疑問符乗算子*は、対象は省略可能で、**0 回または 1 回**出現することを意味します。

```css
bold smaller?
```

この例は次の値に一致します。

- `bold`
- `bold smaller`

次の値には一致しません。

- `bold smaller smaller` 。`smaller` は最大で 1 回しか出現できません。
- `smaller`。`bold` は並列で、他のどの `smaller` キーワードよりも前に出現する必要があります。

### 波括弧 (`{ }`)

*波括弧乗算子*は、カンマで区切った 2 つの整数を囲うもので、対象が**少なくとも A 回、最大で B 回**出現することを示します。

```css
bold smaller{1,3}
```

この例は次の値に一致します。

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

次の値には一致しません。

- `bold`。`smaller` が少なくとも 1 回出現する必要があります。
- `bold smaller smaller smaller smaller`。`smaller` は最大で 3 回しか出現できません。
- `smaller`。`bold` は並列で、他のどの `smaller` キーワードよりも前に出現する必要があります。

### ハッシュ記号 (`#`)

*ハッシュ記号乗算子*は対象が (プラス乗算子のように) 1 回以上繰り返されるが、それぞれをカンマ (',') で区切る必要があることを示します。

```css
bold smaller#
```

この例は次の値に一致します。

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller` など

次の値には一致しません。

- `bold`。`smaller` が少なくとも 1 度出現する必要があります。
- `bold smaller smaller smaller`。`smaller` の出現部がそれぞれをカンマで区切る必要があります。
- `smaller`。`bold` は並列で、どの `smaller` キーワードよりも前に出現する必要があります。

### 強調点 (`!`)

グループの後の*強調点乗算子*は、グループが必須であり、少なくとも 1 つの値を生み出す必要があることを示します。グループ内の項目の構文が内容全体を省略することができるとしていても、少なくとも 1 つの成分値を省略することはできません。

```css
[ bold? smaller? ]!
```

この例は次の値に一致します。

- `bold`
- `smaller`
- `bold smaller`

次の値には一致しません。

- `bold` も `smaller` もないものは、どちらか一つが現れる必要があります。
- `smaller bold`。 `bold` は並列であり、 `smaller` キーワードの前に現れる必要があります。
- `bold smaller bold`。 `bold` および `smaller` は一度だけしか現れてはいけません。

## まとめ

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">記号</th>
      <th scope="col">名前</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4">結合子</th>
    </tr>
    <tr>
      <td></td>
      <td>並列</td>
      <td>どちらも必須でこの順で出現する必要がある</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>二重アンパサンド</td>
      <td>どちらも必須だが出現順は問わない</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>二重バー</td>
      <td>
        どちらかが存在する必要があり、出現順は問わない
      </td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>単一バー</td>
      <td>正確に 1 つだけ存在する必要がある</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>角括弧</td>
      <td>結合優先順を変える</td>
      <td><code>bold [ thin &#x26;&#x26; &#x3C;length> ]</code></td>
    </tr>
    <tr>
      <th colspan="4">乗算子</th>
    </tr>
    <tr>
      <td></td>
      <td>乗算子なし</td>
      <td>1 回</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>アスタリスク</td>
      <td>0 回以上</td>
      <td><code>bold smaller*</code></td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>プラス記号</td>
      <td>1 回以上</td>
      <td><code>bold smaller+</code></td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>疑問符</td>
      <td>0 回か 1 回 (すなわち<em>省略可能</em>)</td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{A,B}</code></td>
      <td>波括弧</td>
      <td>少なくとも <code>A</code> 回、最大で <code>B</code> 回</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>ハッシュ記号</td>
      <td>
        1 回以上。各出現がカンマ ('<code>,</code>') で区切られている必要がある
      </td>
      <td><code>bold smaller#</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td>強調点</td>
      <td>グループが少なくとも1つの値を生み出す必要がある</td>
      <td><code>[ bold? smaller? ]!</code></td>
    </tr>
  </tbody>
</table>

## 仕様書

| 仕様書                                                                           | 状態                     | 備考                         |
| -------------------------------------------------------------------------------- | ------------------------ | ---------------------------- |
| {{SpecName("CSS3 Values", "#value-defs", "Value definition syntax")}}            | {{Spec2("CSS3 Values")}} | ハッシュ記号乗算子を追加     |
| {{SpecName("CSS2.1", "about.html#value-defs", "Value definition syntax")}}       | {{Spec2("CSS2.1")}}      | 二重アンパサンド結合子を追加 |
| {{SpecName("CSS1", "#notation-for-property-values", "Value definition syntax")}} | {{Spec2("CSS1")}}        | 初回定義                     |

## 関連情報

- {{CSS_key_concepts}}
