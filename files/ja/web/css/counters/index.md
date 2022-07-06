---
title: counters()
slug: Web/CSS/counters
tags:
  - CSS
  - CSS カウンター
  - CSS 関数
  - 関数
  - リファレンス
translation_of: Web/CSS/counters()
original_slug: Web/CSS/counters()
browser-compat: css.types.counters
---
{{CSSRef}}

**`counter()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、階層的なカウンターを利用できるようにし、指定された名前付きカウンターがあれば、その現在値を表す連結された文字列を返します。 `counters()` 関数には `counters(name, string)` と `counters(name, string, style)` の二つの形式があります。一般的には[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)と一緒に使用されますが、理論的には [`<string>`](/ja/docs/Web/CSS/string) 値に対応している場所ならばどこでも使用できます。生成されるテキストは、指定された名前を持つすべてのカウンターの値で、指定された文字列で区切られた一番外側から一番内側までの値です。カウンターは、指定されたスタイルで表示され、スタイルが指定されていない場合は既定で `decimal` で表示されます。

```css
/* 単純な使用法 - スタイルは既定で decimal */
counters(countername, '-');

/* カウンターの表示の変更 */
counters(countername, '.', upper-roman)
```

[カウンター](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)自身には視覚的効果が何もありません。 `counters()` 関数 (および {{cssxref("counter()")}} 関数) は開発者が定義した文字列 (または画像) を返すことでカウンターは利用価値が生まれます。

> **Note:** `counters()` 関数は CSS プロパティとも併用できますが、 {{CSSxRef("content")}} 以外のプロパティにおける対応は実験的であり、型または単位の引数への対応は限られています。
>
> [ブラウザーの互換性の表](#ブラウザーの互換性)を注意深く確認してから本番環境に用いてください。

## 構文

### 値

- {{cssxref("&lt;custom-ident&gt;")}}
  - : カウンターを識別する名前であり、 {{cssxref("counter-reset")}} および {{cssxref("counter-increment")}} に用いた名前と、大文字小文字まで同一でなければなりません。名前をダッシュ 2 つで始めることはできず、また `none`, `unset`, `initial`, `inherit` という名前は禁止です。
- `<counter-style>`
  - : カウンタースタイル名または [`symbols()`](/ja/docs/Web/CSS/symbols()) 関数です。カウンタースタイル名には `numeric`, `alphabetic`, `symbolic` などの単純な定義済みスタイル、より複雑なアジアやエチオピアのカウンタースタイル、その他の[定義済みカウンタースタイル](/ja/docs/Web/CSS/CSS_Counter_Styles)があります。省略された場合は、既定で `decimal` になります。
- {{cssxref("&lt;string&gt;")}}
  - : 任意の数のテキスト文字です。ラテン文字以外は Unicode エスケープシーケンスでエンコードする必要があります。例えば `\000A9` は著作権記号を表します。

### 形式文法

{{CSSSyntax}}

## 例

### 既定値と upper-roman との比較

#### HTML

```html
<ol>
  <li>
     <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
  </li>
  <li></li>
  <li></li>
  <li>
     <ol>
        <li></li>
        <li>
           <ol>
              <li></li>
              <li></li>
              <li></li>
           </ol>
        </li>
      </ol>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
   content:  counters(listCounter, '.', upper-roman) ') ';
}
li::before {
  content:  counters(listCounter, ".") " == " counters(listCounter, ".", lower-roman) ;
}
```

#### 結果

{{EmbedLiveSample("default_value_compared_to_upper_Roman", "100%", 150)}}

### decimal-leading-zero と lower-alpha との比較

#### HTML

```html
<ol>
  <li>
     <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
  </li>
  <li></li>
  <li></li>
  <li>
     <ol>
        <li></li>
        <li>
           <ol>
              <li></li>
              <li></li>
              <li></li>
           </ol>
        </li>
      </ol>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::marker {
   content: counters(count, '.', upper-alpha) ') ';
}
li::before {
  content: counters(count, ".", decimal-leading-zero) " == " counters(count, ".", lower-alpha);
}
```

#### 結果

{{EmbedLiveSample("decimal-leading-zero_compared_to_lower-alpha", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
- {{cssxref("counter-set")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS の [`counter()`](/ja/docs/Web/CSS/counter()) 関数
- {{cssxref("::marker")}}
