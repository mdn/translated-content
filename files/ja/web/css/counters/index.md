---
title: counters()
slug: Web/CSS/counters
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

**`counters()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)により、カウンターが入れ子になっている場合にマーカーを組み合わせることができます。この関数は、指定された文字列と、存在する場合は名前付きで入れ子になったカウンターの現在の値を連結した文字列を返します。 3 番目はオプションの引数で、リストのスタイルを定義することができます。

`counter()` 関数は、ふつうは[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の中の {{cssxref("content")}} で用いることが多いものの、理論的には [`<string>`](/ja/docs/Web/CSS/string) に対応するすべての箇所で用いることができます。

`counters()` 関数には `counters(<name>, <string>)` と `counters(<name>, <string>, <style>)` の 2 つの形があります。生成されるテキストは、 `<name>` で指定された名前のすべてのカウンターの値を、最も外側から内側に向けて並べ、指定された `<string>` で区切ったものです。カウンターは指定された `<style>` でレンダリングされ、`<style>` が指定されていない場合は `decimal` が既定値となります。

{{EmbedInteractiveExample("pages/tabbed/function-counters.html", "tabbed-standard")}}

## 構文

```css
/* 単純な使用法 - スタイルは既定で decimal */
counters(counter-name, '.');

/* カウンターの表示の変更 */
counters(counter-name, '-', upper-roman)
```

[カウンター](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)自身には視覚的効果が何もありません。 `counters()` 関数（および {{cssxref("counter", "counter()")}} 関数）は開発者が定義したコンテンツを返すことで利用価値が生まれます。

### 値

`counters()` 関数は 2 つまたは 3 つの引数を受け付けます。最初の引数は `<counter-name>` です。 2 番目の引数は接続する `<string>` です。 3 番目の引数はオプションで、 `<counter-style>` です。

- `<counter-name>`
  - : カウンターを識別する {{cssxref("&lt;custom-ident&gt;")}} であり、{{cssxref("counter-reset")}} および {{cssxref("counter-increment")}} に用いた名前と同じもので、大文字小文字を区別します。カウンター名は名前をダッシュ 2 つで始めることはできず、また `none`, `unset`, `initial`, `inherit` という名前にすることはできません。また、インラインの単一利用のカウンターでは、 {{cssxref("symbols")}} 関数を名前付きカウンターの代わりに利用することができます（[`symbols()` に対応しているブラウザーの場合](/ja/docs/Web/CSS/symbols#ブラウザーの互換性)）。
- {{cssxref("&lt;string&gt;")}}
  - : 任意の数のテキスト文字です。ラテン文字以外は Unicode エスケープシーケンスでエンコードする必要があります。例えば `\000A9` は著作権記号を表します。
- `<counter-style>`
  - : カウンタースタイル名または [`symbols()`](/ja/docs/Web/CSS/symbols) 関数です。カウンタースタイル名には `numeric`, `alphabetic`, `symbolic` などの単純な定義済みスタイル、より複雑なアジアやエチオピアのカウンタースタイル、その他の[定義済みカウンタースタイル](/ja/docs/Web/CSS/CSS_counter_styles)があります。省略された場合は、既定で `decimal` になります。

返値は、その要素の `<counter-name>` という名前の CSS カウンターセット内にあるすべてのカウンターの値を、 `<counter-style>` で定義されたカウンタースタイル（省略した場合は `decimal`）で含む文字列です。返される文字列は、最も外側から内側に向けて並べ、指定された `<string>` で区切ったものです。

> [!NOTE]
> 結合前のカウンターについての情報は、 {{cssxref("counter", "counter()")}} 関数を参照してください。こちらは `<string>` を引数として取りません。

### 形式文法

{{CSSSyntax}}

## 例

### 既定のカウンター値と大文字のローマ数字との比較

この例には、 2 種類の `counters()` 関数が含まれます。 1 つは `<counter-style>` を設定しており、もう 1 つは既定値の `decimal` になります。

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

```css-nolint
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
  content:
    counters(listCounter, ".", upper-roman) ") ";
}
li::before {
  content:
    counters(listCounter, ".") " == "
    counters(listCounter, ".", lower-roman);
}
```

#### 結果

{{EmbedLiveSample("Comparing default counter value to uppercase roman numerals", "100%", 270)}}

### decimal-leading-zero と lower-alpha との比較

この例には、それぞれ異なる `<string>` および `<counter-style>` 値を持つ 3 つの `counters()` 関数が含まれます。

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

```css-nolint
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::marker {
  content:
    counters(count, "-", decimal-leading-zero) ") ";
}
li::before {
  content:
    counters(count, "～", upper-alpha) " == "
    counters(count,  "*", lower-alpha);
}
```

#### 結果

{{EmbedLiveSample("Comparing decimal-leading-zero counter value to lowercase letters", "100%", 270)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-set")}} プロパティ
- {{cssxref("counter-reset")}} プロパティ
- {{cssxref("counter-increment")}} プロパティ
- {{cssxref("@counter-style")}} アットルール
- CSS の [`counter()`](/ja/docs/Web/CSS/counter) 関数
- {{cssxref("::marker")}} 擬似要素
- [CSS リストとカウンター](/ja/docs/Web/CSS/CSS_lists)モジュール
- [CSS カウンタースタイル](/ja/docs/Web/CSS/CSS_counter_styles)モジュール
- [CSS 生成コンテンツ](/ja/docs/Web/CSS/CSS_generated_content)モジュール
