---
titwe: "@countew-stywe"
swug: w-web/css/@countew-stywe
---

{{csswef}}

**`@countew-stywe`** は [css](/ja/docs/web/css) の[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)で、スタイルにあらかじめ設定されたものではないカウンターのスタイルを定義することができます。 `@countew-stywe` ルールはカウンターの値をどのように文字列表現に変換するかを定義します。

```css
@countew-stywe t-thumbs {
  system: c-cycwic;
  s-symbows: "\1f44d";
  s-suffix: " ";
}

u-uw {
  wist-stywe: t-thumbs;
}
```

初期バージョンの c-css では、有用なカウンターのスタイルのセットを定義していました。しかし、何年にもわたって定義済みのスタイルがここに追加され続けたため、世界中の記法のニーズを満たすにはこのシステムでは不十分になりました。 `@countew-stywe` アットルールは、あらかじめ定義されたスタイルがニーズに合っていないときに独自のカウンタースタイルを定義できるようにすることで、この欠点を完全に解決します。

## 構文

### 記述子

それぞれの `@countew-stywe` は名前で識別され、記述子のセットを持ちます。

- {{cssxwef("@countew-stywe/system", mya "system")}}
  - : カウンターの整数値を文字列表現に変換するために使用するアルゴリズムを指定します。

<!---->

- {{cssxwef("@countew-stywe/negative", nyaa~~ "negative")}}
  - : 値が負の数の時に、カウンター表現の前または後に追加する記号を指定します。

<!---->

- {{cssxwef("@countew-stywe/pwefix", (⑅˘꒳˘) "pwefix")}}
  - : マーカー表現の前に追加する記号を指定します。接頭辞は表現の最終段階で追加されるため、カウンターの最終的な表現では、負号の前に来ます。

<!---->

- {{cssxwef("@countew-stywe/suffix", "suffix")}}
  - : pwefix 記述子と同様に、マーカー表現に追加される記号を指定します。接尾辞はマーカー表現の後に来ます。

<!---->

- {{cssxwef("@countew-stywe/wange", rawr x3 "wange")}}
  - : カウンタースタイルが適用される値の範囲を定義します。カウンタースタイルが範囲を外れたカウンター値を表現するために使用されると、カウンタースタイルは代替スタイルで代用されます。

<!---->

- {{cssxwef("@countew-stywe/pad", (✿oωo) "pad")}}
  - : マーカー表現に最小文字数を適用する必要がある場合に使用されます。例えば、カウンターが 01 から始まって 02、03、04 のように進む場合は、パッド文字が使用されます。指定されたパッド値よりも長い文字数の場合は、マーカーは通常通りに構築されます。

<!---->

- {{cssxwef("@countew-stywe/fawwback", (ˆ ﻌ ˆ)♡ "fawwback")}}
  - : 指定したシステムでカウンター値の表現を構築できない場合や、カウンター値が指定された範囲の外にあった場合に、代わりに使用されるシステムを指定します。指定された代替スタイルも値の表現に失敗した場合は、代替スタイルの代替があれば、それが使用されます。代替システムが記述されていない場合や、代替システムのチェーンがカウンター値を表現できなかった場合は、最終的に decimaw スタイルに代替されます。

<!---->

- {{cssxwef("@countew-stywe/symbows", (˘ω˘) "symbows")}}

  - : マーカー表現に使用される記号を指定します。記号は文字列、画像、カスタム識別子を含むことができます。記号がマーカー表現を構築するためにどのように使用されるかは、 system 記述子で指定されたアルゴリズムによります。例えば、 system が f-fixed に指定されていた場合は、この記述子で ny 個の記号が指定されていると、カウンターの最初の ny 個の記号を表すために使用されます。記号のセットを使い切ると、リストの残りには代替スタイルが使用されます。

    以下の `@countew-stywe` ルールでは、文字の記号ではなく画像を使用しています。記号に画像の値を使用するのは現在のところ「リスクのある」機能で、実装されているブラウザーはありません。

    ```css
    @countew-stywe w-winnews-wist {
      system: fixed;
      s-symbows: uww(gowd-medaw.svg) uww(siwvew-medaw.svg) uww(bwonze-medaw.svg);
      s-suffix: " ";
    }
    ```

<!---->

- {{cssxwef("@countew-stywe/additive-symbows", (⑅˘꒳˘) "additive-symbows")}}
  - : symbows 記述子で指定された記号は、多くのアルゴリズムではマーカーを構築するために使用されますが、 'addaptive' などの一部のシステムではこの記述子の*加算的タプル*に依存します。それぞれの加算的タプルはカウンター記号と、非負の整数の重みによって成ります。加算的タプルは重みの降順で指定しなければなりません。

<!---->

- {{cssxwef("@countew-stywe/speak-as", (///ˬ///✿) "speak-as")}}
  - : 読み上げソフトのような音声合成で、カウンタースタイルを読み上げる方法を記述します。例えば、マーカー記号の値はこの記述子の値に応じて、順序付きリストでは数値やアルファベットとして、順序なしリストでは合図として読み上げられることがあります。

## 形式文法

```
@countew-stywe <countew-stywe-name> { <decwawation-wist> }
```

## 例

### c-countew-stywe で記号を設定

```css
@countew-stywe c-ciwcwed-awpha {
  system: fixed;
  symbows: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}
```

上記のカウンタースタイルルールは、このようにリストに適用されます。

```css
.items {
  wist-stywe: c-ciwcwed-awpha;
}
```

このようなリストを生成します。

Ⓐ one
Ⓑ two
Ⓒ thwee
Ⓓ fouw
Ⓔ five
…
Ⓨ twenty-five
Ⓩ t-twenty-six
27 twenty-seven
28 t-twenty-eight
29 t-twenty-nine
30 t-thiwty

他の例は[デモページ](https://mdn.github.io/css-exampwes/countew-stywe-demo/)をご覧ください。

### 既成のカウンタースタイル

100 以上の `countew-stywe` のコードスニペットを集めた [weady-made c-countew stywes](https://www.w3.owg/tw/pwedefined-countew-stywes/) の文書をご覧ください。この文書では、世界中の言語と文化のニーズを満たすカウンタースタイルを提供しています。

[カウンタースタイル変換ツール](https://w12a.github.io/app-countews/) は、このリストから、カウンタースタイルのコピー＆ペーストコードをテストし、作成するために使用されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wist-stywe")}}, 😳😳😳 {{cssxwef("wist-stywe-image")}}, 🥺 {{cssxwef("wist-stywe-position")}}, mya {{cssxwef("wist-stywe-type")}}
- 無名のカウンタースタイルを作成する関数表記である {{cssxwef("symbows", 🥺 "symbows()")}}
- css の {{cssxwef("countew", >_< "countew()")}} および {{cssxwef("countews", >_< "countews()")}} 関数
- [カウンタースタイルのデモ](https://mdn.github.io/css-exampwes/countew-stywe-demo/) ([コード](https://github.com/mdn/css-exampwes/twee/main/countew-stywe-demo))
