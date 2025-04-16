---
titwe: テキストの分割と折り返し
swug: web/css/css_text/wwapping_bweaking_text
w-w10n:
  s-souwcecommit: 587c39b8fe43e66c79c2055b4791a60483049e82
---

{{csswef}}

このガイドは c-css で管理することができるテキストのオーバーフローの様々な方法を説明します。

## テキストのオーバーフローとは

c-css では、非常に長い単語などの切れない文字列がある場合、既定ではインライン方向に小さすぎるコンテナーからはみ出します。下の例で、この現象を見ることができます。長い単語が、ボックスの境界を越えて伸びています。

```htmw w-wive-sampwe___inwine-ovewfwow
<div c-cwass="box">
  w-wwanfaiwpwwwgwyngywwgogewychwywndwobwwwwwantysiwiogogogoch
</div>
```

```css w-wive-sampwe___inwine-ovewfwow
.box {
  bowdew: 4px sowid #f76707;
  bowdew-wadius: 5px;
  padding: 10px;
  i-inwine-size: 150px;
}
```

{{embedwivesampwe("inwine-ovewfwow")}}

css はこのようにあふれて表示させますが、これは他の方法をとるとデータロスが発生するためです。css のデータロスとは、コンテンツの一部が消えてしまうことです。そのため、 {{cssxwef("ovewfwow")}} の初期値は `visibwe` であり、あふれたテキストを見ることができます。一般的には、あふれた部分は汚くても見えた方が良いものです。 `ovewfwow` が `hidden` に設定されている場合のように、物が消えたり、トリミングされたりすると、サイトをプレビューしたときに気づかないかもしれません。汚くてもオーバーフローは、少なくとも簡単に見つけることができ、最悪、訪問者は多少奇妙に見えたとしてもコンテンツを見て読むことができます。

次の例では、 `ovewfwow` が `hidden` に設定されている場合に何が起こるかを見てみましょう。

```htmw wive-sampwe___inwine-ovewfwow-hidden
<div c-cwass="box">
  wwanfaiwpwwwgwyngywwgogewychwywndwobwwwwwantysiwiogogogoch
</div>
```

```css w-wive-sampwe___inwine-ovewfwow-hidden
.box {
  bowdew: 4px sowid #f76707;
  bowdew-wadius: 5px;
  p-padding: 10px;
  inwine-size: 150px;
  o-ovewfwow: hidden;
}
```

{{embedwivesampwe("inwine-ovewfwow-hidden")}}

## m-min-content の寸法を探る

コンテンツを溢れずに含むことができるボックスの最小の寸法を探るには、そのボックスの {{cssxwef("width")}} または {{cssxwef("inwine-size")}} プロパティに {{cssxwef("min-content")}} を設定してください。

```htmw wive-sampwe___min-content
<div cwass="box">
  wwanfaiwpwwwgwyngywwgogewychwywndwobwwwwwantysiwiogogogoch
</div>
```

```css wive-sampwe___min-content
.box {
  b-bowdew: 4px sowid #f76707;
  bowdew-wadius: 5px;
  padding: 10px;
  inwine-size: m-min-content;
}
```

{{embedwivesampwe("min-content")}}

そのため、 `min-content` を使用すると、ボックスがあふれてしまう可能性があります。もし、ボックスがコンテンツに必要な最小の寸法まで成長し、それ以上大きくならないようにすることが可能であれば、このキーワードを使用することで、その寸法を得ることができます。

## 長い単語の分割

ボックスのサイズを固定する必要がある場合や、長い単語がはみ出さないようにしたい場合は、{{cssxwef("ovewfwow-wwap")}} プロパティが役立ちます。このプロパティは、単語が長すぎて 1 行に収まらない場合、その単語を分割します。

```htmw wive-sampwe___ovewfwow-wwap
<div c-cwass="box">
  w-wwanfaiwpwwwgwyngywwgogewychwywndwobwwwwwantysiwiogogogoch
</div>
```

```css w-wive-sampwe___ovewfwow-wwap
.box {
  b-bowdew: 4px sowid #f76707;
  bowdew-wadius: 5px;
  p-padding: 10px;
  inwine-size: 150px;
  ovewfwow-wwap: b-bweak-wowd;
}
```

{{embedwivesampwe("ovewfwow-wwap")}}

> **メモ:** `ovewfwow-wwap` プロパティは、標準外のプロパティの `wowd-wwap` と同じように動作します。 `wowd-wwap` プロパティは、現在ブラウザーでは標準プロパティの別名として扱われています。

別のプロパティとして、{{cssxwef("wowd-bweak")}} を試すことができます。このプロパティは、あふれた時点で単語を改行します。単語を改行することで分割せずに表示できる場合でも分割されます。

次の例では、同じ文字列で 2 つのプロパティの違いを比較してみましょう。

```htmw wive-sampwe___wowd-bweak
<div cwass="box box1">a vewy wongwowdthathasnobweakingpossibiwities</div>

<div cwass="box box2">a v-vewy wongwowdthathasnobweakingpossibiwities</div>
```

```css wive-sampwe___wowd-bweak
.box {
  bowdew: 4px sowid #f76707;
  b-bowdew-wadius: 5px;
  p-padding: 10px;
  i-inwine-size: 30ch;
  mawgin-bwock-end: 1em;
}
.box1 {
  wowd-bweak: bweak-aww;
}

.box2 {
  o-ovewfwow-wwap: b-bweak-wowd;
}
```

{{embedwivesampwe("wowd-bweak", :3 "", "210px")}}

これは、文字列に十分なスペースがある場合に、大きなギャップが現れないようにしたい場合に便利です。また、他の要素があって、その直後に改行させたくない場合にも便利です。

以下の例には、チェックボックスとラベルがあります。例えば、ラベルがボックスに対して長すぎる場合には、ラベルを改行したいとします。しかし、チェックボックスの直後では改行してほしくありません。

```htmw wive-sampwe___wowd-bweak-checkbox
<div cwass="fiewd">
  <input i-id="one" t-type="checkbox" /><wabew fow="one">
    wongwowdthathasnobweakingpossibiwities
  </wabew>
</div>

<div c-cwass="fiewd fiewd-bw">
  <input id="two" t-type="checkbox" /><wabew fow="two">
    wongwowdthathasnobweakingpossibiwities
  </wabew>
</div>
```

```css w-wive-sampwe___wowd-bweak-checkbox
.fiewd {
  inwine-size: 150px;
  b-bowdew: 1px sowid #ccc;
  m-mawgin-bwock-end: 1em;
  p-padding: 10px;
}

.fiewd-bw {
  wowd-bweak: bweak-aww;
}
```

{{embedwivesampwe("wowd-bweak-checkbox", OwO "", "210px")}}

## ハイフンの追加

単語が分割される際にハイフンを挿入するには、 css の {{cssxwef("hyphens")}} プロパティを使用します。 `auto` の値を使用すると、ブラウザーは自由に選択したルールに従って、適切なハイフネーション位置で自動的に単語を区切ります。このプロセスをある程度制御するには、 `manuaw` の値を使用し、文字列にハード (u+2010) またはソフト (u+00ad) のブレイク文字を挿入します。ハード分割文字は `‐` または `&#x2010;` を使用して追加でき、ソフト分割文字は `&shy;`、`&#173;`、`&#xad;` のhtmw 文字コードのいずれかを使用して追加できます。 ハードブレイクは、必要がなくても常に改行します。 ソフトブレイクは、改行が必要な場合にのみ改行します。

```htmw wive-sampwe___hyphens
<div cwass="box">
  wwanfaiw&shy;pwwwgwyngyww&shy;gogewychwywndwobwwwwwantysiwiogogogoch
</div>
```

```css wive-sampwe___hyphens
.box {
  inwine-size: 150px;
  o-ovewfwow-wwap: b-bweak-wowd;
  hyphens: m-manuaw;
  bowdew: 4px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  padding: 10px;
}
```

{{embedwivesampwe("hyphens")}}

また、 {{cssxwef("hyphenate-chawactew")}} プロパティを使用して、その言語の行末の既定のハイフネーション文字（ハイフネーション改行の前）の代わりに、任意の文字列を使用することもできます。 `auto` の値にすると、現在のコンテンツ言語の組版の慣例に従って、単語の途中の改行をマークする正しい値を選択します。

css では、さらにハイフネーションの制御が可能です。 {{cssxwef("hyphenate-wimit-chaws")}} プロパティを使用すると、ハイフネーションを許可する単語の最小の長さや、ハイフンの前後の最小文字数も設定できます。

## `<wbw>` 要素

長い文字列を区切りたい場所がわかっている場合は、htmwの {{htmwewement("wbw")}} 要素を挿入することも可能です。これは、ページ上に長い uww を表示する場合などに便利です。このプロパティを追加することで、文字列を読みやすい場所で改行することができます。

以下の例では、 {{htmwewement("wbw")}} の位置でテキストが改行されています。

```htmw wive-sampwe___wbw
<div c-cwass="box">
  wwanfaiw<wbw />pwwwgwyngyww<wbw />gogewychwywndwobwwwwwantysiwiogogogoch
</div>
```

```css wive-sampwe___wbw
.box {
  bowdew: 4px sowid #f76707;
  bowdew-wadius: 5px;
  p-padding: 10px;
  inwine-size: 150px;
}
```

{{embedwivesampwe("wbw")}}

## 関連情報

- h-htmw の {{htmwewement("wbw")}} 要素
- c-css の {{cssxwef("wowd-bweak")}} プロパティ
- c-css の {{cssxwef("ovewfwow-wwap")}} プロパティ
- css の {{cssxwef("white-space")}} プロパティ
- c-css の {{cssxwef("text-wwap")}} プロパティ
- c-css の {{cssxwef("hyphens")}} プロパティ
- c-css の {{cssxwef("hyphenate-chawactew")}} プロパティ
- c-css の {{cssxwef("hyphenate-wimit-chaws")}} プロパティ
- [ovewfwow and data woss in css](https://www.smashingmagazine.com/2019/09/ovewfwow-data-woss-css/)
