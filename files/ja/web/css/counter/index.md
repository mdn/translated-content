---
title: counter()
slug: Web/CSS/counter
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

**`counter()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、指定された名前付きカウンターの現在値があれば、その文字列を返します。

`counter()` 関数は、ふつうは[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の中の {{cssxref("content")}} で用いることが多いものの、理論的には [`<string>`](/ja/docs/Web/CSS/string) に対応するすべての箇所で用いることができます。

{{EmbedInteractiveExample("pages/tabbed/function-counter.html", "tabbed-shorter")}}

## 構文

```css
/* 単純な使用法 */
counter(counter-name);

/* カウンターの表示の変更 */
counter(counter-name, upper-roman)
```

[カウンター](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)自身には視覚的効果が何もありません。 `counter()` 関数 (および {{cssxref("counters", "counters()")}} 関数) は開発者が定義した文字列 (または画像) を返すことでカウンターは利用価値が生まれます。

### 値

`counter()` 関数は、最大 2 つの引数を受け入れます。最初の引数は `<counter-name>` です。 2 番目の引数はオプションで、 `<counter-style>` です。

- `<counter-name>`
  - : カウンターを識別する {{cssxref("&lt;custom-ident&gt;")}} であり、{{cssxref("counter-reset")}} および {{cssxref("counter-increment")}} に用いた名前と同じもので、大文字小文字を区別します。カウンター名は名前をダッシュ 2 つで始めることはできず、また `none`, `unset`, `initial`, `inherit` という名前にすることはできません。
- `<counter-style>`
  - : {{cssxref("&lt;list-style-type&gt;")}} 名、 {{cssxref("&lt;@counter-style&gt;")}} 名、 {{cssxref("symbols()")}} 関数の何れかです。カウンタースタイル名には `numeric`, `alphabetic`, `symbolic` などの単純な定義済みスタイル、より複雑なアジアやエチオピアのカウンタースタイル、その他の[定義済みカウンタースタイル](/ja/docs/Web/CSS/CSS_counter_styles)があります。省略された場合は、既定で `decimal` になります。

> [!NOTE]
> 入れ子になったカウンターの値を結合する場合は、 {{cssxref("counters", "counters()")}} 関数を使用します。こちらは追加の {{cssxref("string")}} 引数があります。

### 形式文法

{{CSSSyntax}}

## 例

### lower-roman と lower-alpha の比較

この例では、 `lower-roman` と `lower-alpha` のリストスタイルを使用してカウンターを表示します。

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::after {
  content:
    "[" counter(count, lower-roman) "] == ["
    counter(count, lower-alpha) "]";
}
```

#### 結果

{{EmbedLiveSample("lower-roman compared to lower-alpha", "100%", 150)}}

### 3 つのスタイルを使用したカウンターの表示

この例では、 `counter()` 関数を 3 回使用しています。

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

私たちは、既定の小数点値を含む 3 種類の異なるカウンタースタイルを持つ `counter()` 関数を追加しました。長い `::marker` 文字列のための空白を確保するために、リストにパディングを追加しました。

```css-nolint
ol {
  counter-reset: listCounter;
  padding-left: 5em;
}
li {
  counter-increment: listCounter;
}
li::marker {
  content:
    "Item #" counter(listCounter) " is: ";
}
li::after {
  content:
    "[" counter(listCounter, decimal-leading-zero) "] == ["
    counter(listCounter, upper-roman) "]";
}
```

#### 結果

{{EmbedLiveSample("Displaying a counter using three styles", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS の [`counters()`](/ja/docs/Web/CSS/counters) 関数
- [CSS リストとカウンター](/ja/docs/Web/CSS/CSS_lists)モジュール
- [CSS カウンタースタイル](/ja/docs/Web/CSS/CSS_counter_styles)モジュール
- [CSS 生成コンテンツ](/ja/docs/Web/CSS/CSS_generated_content)モジュール
