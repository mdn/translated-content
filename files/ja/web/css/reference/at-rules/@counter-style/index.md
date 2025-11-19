---
title: "@counter-style"
slug: Web/CSS/Reference/At-rules/@counter-style
original_slug: Web/CSS/@counter-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`@counter-style`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、スタイルにあらかじめ設定されたものではないカウンターのスタイルを定義することができます。 `@counter-style` ルールには[記述子](#記述子)を設定し、カウンター値を文字列表現に変換する方法を定義します。

CSS は多くの便利な定義済みカウンタースタイルを提供していますが、`@counter-style` アットルールは、カウンターを作成するための自由度の高い方法を提供します。このアットルールは、定義済みスタイルが要件に合わない場合に、作成者が自分自身でカウンタースタイルを定義できるようにすることで、世界中の字組みのニーズに対応しています。

## 構文

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}
```

`@counter-style` アットルールは、[カウンタースタイル名](#カウンタースタイル名)によって識別され、名前付きカウンターのスタイルは、1 つ以上の[記述子](#記述子)およびその値で構成される `<declaration-list>` を使用して微調整することができます。

### カウンタースタイル名

- `<counter-style-name>`
  - : カウンタスタイルの名前を提供します。大文字と小文字を区別する {{cssxref("custom-ident")}} として、引用符で囲まずに指定します。値は `none` と同じであってはなりません。すべての独自の識別子と同様に、カウンタースタイルの値は [CSS 全体のキーワード](/ja/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) にはできません。[リスト](/ja/docs/Web/CSS/Guides/Lists#プロパティ)および[カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles#プロパティ)プロパティの値を含む、それ以外の列挙された CSS プロパティの値は避けてください。カウンタの名前は、大文字と小文字を区別せず {{cssxref("list-style-type")}} プロパティの値である `decimal`、`disc`、`square`、`circle`、`disclosure-open`、`disclosure-closed` にはできません。

    > [!NOTE]
    > 上書きできないカウンタースタイル名 `decimal`、`disc`、`square`、`circle`、`disclosure-open`、および `disclosure-closed` は、独自のカウンターの名前として使用することはできません。ただし、 `<counter-style-name>` データ型が期待されるその他のコンテキスト、例えば `system: extends <counter-style-name>` では、これらは有効です。

### 記述子

- {{cssxref("@counter-style/system", "system")}}
  - : カウンター の整数値を文字列表現に変換するために使用するアルゴリズムを指定します。値が `cyclic`、`numeric`、`alphabetic`、`symbolic`、`fixed` のいずれかの場合は、`symbols` 記述子も指定する必要があります。値が `additive` の場合は、 `additive-symbols` 記述子も指定する必要があります。

- {{cssxref("@counter-style/symbols", "symbols")}}
  - : マーカー表現に使用される記号を指定します。記号は文字列、画像、カスタム識別子を指定することができます。この記述子は、`system` 記述子が `cyclic`、`numeric`、`alphabetic`、`symbolic`、`fixed` に設定されている場合に必要です。

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - : 加算システム用の「加算タプル」を定義します。`symbols` 記述子で指定された記号は、ほとんどのアルゴリズムでマーカー表現の構築に使用されますが、ローマ数字などの加算カウンターシステムは、一連の重み付き記号で構成されています。記述子 は、カウンター記号とその非負の整数重みのリストであり、重みの降順で掲載されています。この記述子は、`system` 記述子が `additive` に設定されている場合に必要です。

- {{cssxref("@counter-style/negative", "negative")}}
  - : 値が負の場合、カウンター表現に追加または先頭に追加する記号を指定します。

- {{cssxref("@counter-style/prefix", "prefix")}}
  - : マーカー表現の前に付加する記号を指定します。接頭辞は、`negative` 記述子によって負のカウンター値に追加される文字の前に、最終段階で表現に追加されます。

- {{cssxref("@counter-style/suffix", "suffix")}}
  - : prefix 記述子と同様に、マーカー表現に追加される記号を指定します。接尾辞は、マーカー表現の後、`negative` 記述子によって負のカウンター値に追加された文字の後にも含まれます。

- {{cssxref("@counter-style/range", "range")}}
  - : カウンタースタイルが適用される値の範囲を定義します。この記述子で定義された範囲外のカウンター値を表すためにカウンタースタイルが使用された場合、カウンタースタイルは `fallback` スタイルに戻ります。

- {{cssxref("@counter-style/pad", "pad")}}
  - : マーカーの表現を最小の長さにする必要がある場合に使用します。例えば、カウンターを 01 から始めて 02、03、04 と読むようにしたい場合は、`pad` 記述子を使用します。指定した `pad` 値よりも大きい表現の場合、マーカーは通常どおり構築されます。

- {{cssxref("@counter-style/speak-as", "speak-as")}}
  - : 読み上げソフトのような音声合成で、カウンタースタイルを読み上げる方法を記述します。例えば、マーカー記号の値はこの記述子の値に応じて、順序付きリストでは数値やアルファベットとして、順序なしリストでは合図として読み上げられることがあります。

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : 指定したシステムがカウンター値の表現を構築できない場合、またはカウンター値が指定した `range` の範囲外である場合に、代替するシステムのカウンター名を指定します。代替カウンターも値を表現できない場合は、指定されている場合、そのカウンターの代替が使用されます。代替カウンターが記述されていない場合、または代替システムのチェーンがカウンター値を表現できない場合、最終的には `decimal` スタイルに代替されます。

## 形式文法

{{csssyntax}}

## 例

### counter-style で記号を設定

```css
@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}
```

上記のカウンタースタイルルールは、このようにリストに適用されます。

```css
.items {
  list-style: circled-alpha;
}
```

上記のコードは、次の結果を生成します。

```html hidden
<ol class="items">
  <li>one</li>
  <li>two</li>
  <li>three</li>
  <li>four</li>
  <li>five</li>
</ol>
<p>...</p>
<ol class="items" start="25">
  <li>twenty-five</li>
  <li>twenty-six</li>
  <li>twenty-seven</li>
  <li>twenty-eight</li>
</ol>
```

{{EmbedLiveSample('Specifying symbols with counter-style', '', '300')}}

他の例は[デモページ](https://mdn.github.io/css-examples/counter-style-demo/)をご覧ください（[コード](https://github.com/mdn/css-examples/tree/main/counter-style-demo)）。

### 既成のカウンタースタイル

100 以上の `counter-style` のコードスニペットを集めた [Ready-made Counter Styles](https://w3c.github.io/predefined-counter-styles/) の文書をご覧ください。この文書では、世界中の言語と文化のニーズを満たすカウンタースタイルを提供しています。

[カウンタースタイル変換ツール](https://r12a.github.io/app-counters/) は、このリストから、カウンタースタイルのコピー＆ペーストコードをテストし、作成するために使用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("counter", "counter()")}}
- {{Cssxref("counters", "counters()")}}
- {{cssxref("symbols", "symbols()")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
