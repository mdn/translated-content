---
title: '@counter-style'
slug: Web/CSS/@counter-style
tags:
  - アットルール
  - CSS
  - CSS カウンター
  - リファレンス
  - counter
browser-compat: css.at-rules.counter-style
translation_of: Web/CSS/@counter-style
---
{{CSSRef}}

**`@counter-style`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、スタイルにあらかじめ設定されたものではないカウンターのスタイルを定義することができます。 `@counter-style` ルールはカウンターの値をどのように文字列表現に変換するかを定義します。

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}

ul {
  list-style: thumbs;
}
```

初期バージョンの CSS では、有用なカウンターのスタイルのセットを定義していました。しかし、何年にもわたって定義済みのスタイルがここに追加され続けたため、世界中の記法のニーズを満たすにはこのシステムでは不十分になりました。 `@counter-style` アットルールは、あらかじめ定義されたスタイルがニーズに合っていないときに独自のカウンタースタイルを定義できるようにすることで、この欠点を完全に解決します。

## 構文

### 記述子

それぞれの `@counter-style` は名前で識別され、記述子のセットを持ちます。

- {{cssxref("@counter-style/system", "system")}}
  - : カウンターの整数値を文字列表現に変換するために使用するアルゴリズムを指定します。

<!---->

- {{cssxref("@counter-style/negative", "negative")}}
  - : 値が負の数の時に、カウンター表現の前または後に追加する記号を指定します。

<!---->

- {{cssxref("@counter-style/prefix", "prefix")}}
  - : マーカー表現の前に追加する記号を指定します。接頭辞は表現の最終段階で追加されるため、カウンターの最終的な表現では、負号の前に来ます。

<!---->

- {{cssxref("@counter-style/suffix", "suffix")}}
  - : prefix 記述子と同様に、マーカー表現に追加される記号を指定します。接尾辞はマーカー表現の後に来ます。

<!---->

- {{cssxref("@counter-style/range", "range")}}
  - : カウンタースタイルが適用される値の範囲を定義します。カウンタースタイルが範囲を外れたカウンター値を表現するために使用されると、カウンタースタイルは代替スタイルで代用されます。

<!---->

- {{cssxref("@counter-style/pad", "pad")}}
  - : マーカー表現に最小文字数を適用する必要がある場合に使用されます。例えば、カウンターが 01 から始まって 02、03、04 のように進む場合は、パッド文字が使用されます。指定されたパッド値よりも長い文字数の場合は、マーカーは通常通りに構築されます。

<!---->

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : 指定したシステムでカウンター値の表現を構築できない場合や、カウンター値が指定された範囲の外にあった場合に、代わりに使用されるシステムを指定します。指定された代替スタイルも値の表現に失敗した場合は、代替スタイルの代替があれば、それが使用されます。代替システムが記述されていない場合や、代替システムのチェーンがカウンター値を表現できなかった場合は、最終的に decimal スタイルに代替されます。

<!---->

- {{cssxref("@counter-style/symbols", "symbols")}}

  - : マーカー表現に使用される記号を指定します。記号は文字列、画像、カスタム識別子を含むことができます。記号がマーカー表現を構築するためにどのように使用されるかは、 system 記述子で指定されたアルゴリズムによります。例えば、 system が fixed に指定されていた場合は、この記述子で N 個の記号が指定されていると、カウンターの最初の N 個の記号を表すために使用されます。記号のセットを使い切ると、リストの残りには代替スタイルが使用されます。

    以下の `@counter-style` ルールでは、文字の記号ではなく画像を使用しています。記号に画像の値を使用するのは現在のところ「リスクのある」機能で、実装されているブラウザーはありません。

    ```css
    @counter-style winners-list {
      system: fixed;
      symbols: url(gold-medal.svg) url(silver-medal.svg) url(bronze-medal.svg);
      suffix: " ";
    }
    ```

<!---->

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - : symbols 記述子で指定された記号は、多くのアルゴリズムではマーカーを構築するために使用されますが、 'addaptive' などの一部のシステムではこの記述子の*加算的タプル*に依存します。それぞれの加算的タプルはカウンター記号と、非負の整数の重みによって成ります。加算的タプルは重みの降順で指定しなければなりません。

<!---->

- {{cssxref("@counter-style/speak-as", "speak-as")}}
  - : 読み上げソフトのような音声合成で、カウンタースタイルを読み上げる方法を記述します。例えば、マーカー記号の値はこの記述子の値に応じて、順序付きリストでは数値やアルファベットとして、順序なしリストでは合図として読み上げられることがあります。

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

このようなリストを生成します。

Ⓐ One
Ⓑ Two
Ⓒ Three
Ⓓ Four
Ⓔ FIve
...
...
Ⓨ Twenty Five
Ⓩ Twenty Six
27 Twenty Seven
28 Twenty Eight
29 Twenty Nine
30 Thirty

他の例は[デモページ](https://mdn.github.io/css-examples/counter-style-demo/)をご覧ください。

### 既成のカウンタースタイル

100 以上の `counter-style` のコードスニペットを集めた [Ready-made Counter Styles](https://www.w3.org/TR/predefined-counter-styles/) の文書をご覧ください。この文書では、世界中の言語と文化のニーズを満たすカウンタースタイルを提供しています。

[カウンタースタイル変換ツール](https://r12a.github.io/app-counters/) は、このリストから、カウンタースタイルのコピー＆ペーストコードをテストし、作成するために使用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- 無名のカウンタースタイルを作成する関数表記である {{cssxref("symbols()", "symbols()")}}
- CSS の {{Cssxref("counter()")}} および {{Cssxref("counters()")}} 関数
- [カウンタースタイルのデモ](https://mdn.github.io/css-examples/counter-style-demo/) ([コード](https://github.com/mdn/css-examples/tree/master/counter-style-demo))
