---
title: CSS のプロパティ値の処理
short-title: プロパティ値の処理
slug: Web/CSS/Guides/Cascade/Property_value_processing
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

文書ツリー内の各要素に対して、ブラウザーはその要素に適用されるすべての CSS プロパティに値を割り当てます。指定された要素またはボックスに対する各 CSS プロパティのレンダリングされた値は、このスタイルシートの定義、継承、[カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)、依存関係、単位変換、表示環境に基づく計算の結果です。このガイドでは、指定値、計算値、使用値、実効値などの主要な概念を調査しながら、それぞれの CSS の値が最終的にどのようにレンダリングされるかを定義する処理手順の概要を説明します。

## プロパティ値

要素または擬似要素に適用されるすべてのスタイルは、単一の CSS プロパティ宣言に基づいています。それぞれの CSS プロパティには 1 つの値があります。適用される値は、その要素または擬似要素に適用されるそのプロパティのすべての宣言の[カスケード値](#カスケード値)によって決定され、適用される 1 つの値は、[カスケードの優先順位](/ja/docs/Web/CSS/Guides/Cascade/Introduction#カスケード順)で最も上位に位置するプロパティ宣言から取得されます。[カスケードアルゴリズム](/ja/docs/Web/CSS/Guides/Cascade/Introduction)に従います。

複数の[宣言値](#宣言値)が存在し、複数の宣言によって同一要素に対して同一または異なるプロパティ値が指定される場合、それぞれのプロパティ値は常に単一のプロパティと値の組み合わせから取得する必要があります。これは、各プロパティから適用される値が 1 つであるためであり、その値がカンマ区切りの値のリストであっても同様です。

どの[宣言値](#宣言値)が適用されるかを決定するために、ユーザーエージェントは、インラインスタイルや内部および外部スタイルシートなど、さまざまなソースからすべてのスタイルを収集し、処理します。

[カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)は、複数の競合するスタイルが同じ要素を対象としている場合に、どの値を適用すべきかを決定します。[カスケードアルゴリズム](/ja/docs/Web/CSS/Guides/Cascade/Introduction#カスケード順)は、さまざまなソース、スコープ、[レイヤー](/ja/docs/Web/CSS/Guides/Cascade/Introduction#カスケードレイヤー)から取得したプロパティ値を、ユーザーエージェントがどのように統合するかを定義します。セレクターが要素に一致した場合、優先順位が最も高い[オリジン](/ja/docs/Web/CSS/Guides/Cascade/Introduction#オリジンの種類)から取得したプロパティの[宣言値](#宣言値)が適用されます。[オリジン](/ja/docs/Web/CSS/Guides/Cascade/Introduction#オリジンの種類)や[レイヤー](/ja/docs/Web/CSS/Guides/Cascade/Introduction#カスケードレイヤー)の優先順位がより低いセレクターが、より高い[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)であったとしてもです。

一部のプロパティは、明示的に上書きされない限り、親要素から値を継承します。[継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)は、要素の特定のプロパティにスタイル情報が存在しない場合に発生します。プロパティが継承された場合、その値は親要素の[計算値](#計算値)に設定されます。プロパティが継承されない場合、その値はその要素の[初期値](#初期値)に設定されます。

段階的に[カスケード](#カスケード)ルールを適用し、値を解決した後、ブラウザーは視覚的な表示が処理された CSS と確実に一致するようになります。

## 処理の概要

個々の値の段階について掘り下げる前に、値の処理において発生する 3 つの主要なフェーズを理解することが重要です。それは[フィルタリング](#フィルタリング)、[カスケード](#カスケード)、そして[デフォルト設定](#デフォルト設定)です。

### フィルタリング

**フィルタリング**とは、それぞれの要素に適用されるすべての宣言を特定するプロセスです。ある宣言が要素に適用されるのは、以下の条件を満たす場合のみです。

- その宣言が、現在この文書に適用されているスタイルシートに属している
- その宣言が含まれている任意の[条件付きルール](/ja/docs/Web/CSS/Guides/Conditional_rules)（例：{{cssxref("@media")}} や {{cssxref("@supports")}}）が現在真である
- 宣言は、その要素に一致するセレクターを持つスタイルルールに属している
- 宣言は構文的に有効である。プロパティ名がブラウザーによって認識されており、値はそのプロパティの期待される構文に合致している

有効な宣言のみが宣言値となります。不正なプロパティ名または不正な値を含む宣言は、[CSS エラー処理ルール](/ja/docs/Web/CSS/Guides/Syntax/Error_handling)に従って除外されます。

この例では、{{cssxref("font-size")}} と {{cssxref("font-weight")}} の宣言のみが処理されます。CSS パーサーはエラーをフィルタリングし（[CSS パーサーによるエラー処理](/ja/docs/Web/CSS/Guides/Syntax/Error_handling#css_parser_errors)）、不正なプロパティ名を含む宣言を無視または「フィルタリング」します。

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

フィルタリングが完了すると、すべての要素はすべての CSS プロパティに対してゼロ個以上の[宣言値](#宣言値)を持つ。これらの宣言値が[カスケード](#カスケード)処理段階の出発点となります。

### カスケード

[カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)は、同じ要素の同じプロパティに対して複数の宣言が適用された場合の競合を解決します。カスケードは、[カスケードの優先順位付けアルゴリズム](/ja/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) を使用して宣言を並べ替えます。

例えば、両方の {{cssxref("font-size")}} 宣言は `<p class="large">CSS is fun!</p>` に一致しますが、2 つ目の宣言が適用されます。これは、2 つ目の宣言の方が[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)が高いためです。両宣言とも作成者オリジンですが、2 つ目セレクターの詳細度は `0-1-1` であるのに対し、1 つ目は `0-0-1` です。

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

カスケード処理後、ブラウザーはそれぞれの要素のそれぞれのプロパティに対して[**継承値**](#継承値)を決定します。これは次の処理段階である[デフォルト設定](#デフォルト設定)で使用される値です。

### デフォルト設定

**デフォルト設定**は、すべての要素のすべてのプロパティが確実に値を持つようにします。これは、CSS 宣言で明示的にそのプロパティ値が設定されていない場合に、デフォルトのプロパティ値を適用するということです。
具体的には以下のようにします。

- [継承プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Inheritance#継承プロパティ)には**継承値**を設定します。
- [非継承プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Inheritance#非継承プロパティ)には**初期値**を設定します。

デフォルト設定の結果、すべてのプロパティは[指定値](#指定値)を持つことが保証されます。

明示的なデフォルト設定キーワード（{{cssxref("initial")}}、 {{cssxref("inherit")}}、{{cssxref("unset")}}、{{cssxref("revert")}}、{{cssxref("revert-layer")}}）も、対応する値に解決され、[指定値](#指定値)を決定します。

## 各段階の処理

文書内の平坦化された要素ツリーを構成するすべての要素には、[宣言値](#宣言値)、[継承値](#継承値)、[指定値](#指定値)、[計算値](#計算値)、[使用値](#使用値)、[実効値](#実効値)があります。特定のプロパティについて見ると、これらの値が同じである場合も異なる場合もあります。例えば、大規模なコードベースに CSS で "`p { font-size: 1.25em; }`" と指定されており、HTML に "`<p class="large">CSS は楽しい！</p>`" と記載されている場合、段落のサイズはどのくらいになるでしょうか？ {{cssxref("font-size")}} の値は、いくつかの段階を経て、指定された `em` からレンダリングされた `px` 値へと移動します。

値の処理段階には[宣言値](#宣言値)、[継承値](#継承値)、[指定値](#指定値)、[計算値](#計算値)、[使用値](#使用値)、[実効値](#実効値)があります。これらの値は、最終的な[描画値](#描画値)を決定するために使用されます。

### 宣言値

**宣言値** (declared value) とは、要素に適用される宣言から得られる、構文的に有効な値を指します。要素はそれぞれのプロパティに対して、ゼロ個以上の宣言された値を持つことができます。これらの値はスタイルシート（作成者、ユーザー、またはユーザーエージェント）から決まり、[フィルタリング](#フィルタリング)段階で特定されます。

例を続けると、このスタイルシートに `p { font-size: 1.25em; }` が記述され、そのスタイルシートを参照する文書に `<p class="large">CSS は楽しい！</p>` が記載されている場合、同じ段落に適用される可能性のあるそれ以外の `font-size` 宣言が存在するかもしれません。このユーザーエージェントのスタイルシートがすべての段落に `font-size: 1em` を設定している一方、別の作成者宣言がクラス "large" を持つ要素に `font-size: 2em` を設定している場合などです。

```css
/* ユーザーエージェントスタイル */
p {
  font-size: 1em;
}

/* 作成者スタイル */
p {
  font-size: 1.25em;
}

.large {
  font-size: 2em;
}
```

このスタイルシートにはそれ以外にも多くの `font-size` 宣言が存在するかもしれませんが、要素のセレクターと一致する宣言のみが宣言値となります。この例では、`<p>` 要素が `class="large"` を持っているため、3 つの宣言すべてがこの要素に対する宣言値となります。

### 継承値

**継承値** (cascaded value) は宣言値のうち、[カスケード](#カスケード)に勝ったものです。各要素の各プロパティにつき、カスケード値は最大 1 つ存在します。

宣言値のうち、作成者スタイルはユーザーエージェントスタイルに優先します。同一オリジン内では、詳細度の高いスタイルが詳細度低いスタイルに優先します。この場合、継承値は作成者オリジンから詳細度 `0-1-1` で指定された `font-size: 2em` となります。

```css
font-size: 2em;
```

プロパティに宣言値がなければ、継承値は存在しません。つまり、そのプロパティの[指定値](#指定値)は[デフォルト設定](#デフォルト設定)処理によって決定されます。

### 指定値

**指定値**は[デフォルト設定](#デフォルト設定)処理の結果です。これは、すべての要素の全プロパティに対して存在が保証されます。指定値は次のとおり決定されます。

1. [継承値](#継承値)があれば、その継承値が指定値となる。
2. 継承値がなく、そのプロパティが[継承される](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)ものであれば、指定値は親要素の[計算値](#計算値)になる。
3. 上記のどちらも適用されなかった場合、要素の[初期値](#初期値)が使用されます。

この例では、`2em` という[継承値](#継承値)を持つため、これが指定値となります。

```css
font-size: 2em;
```

カスケード値を持たないプロパティについては、デフォルト値決定プロセスによって値が決定されます。例えば、`color` が指定されていない場合、`color` は継承プロパティであるため、親の計算済み値から継承されます。`margin` が指定されていない場合、`margin` は[継承プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Inheritance#継承プロパティ)ではないため、`initial` 値である `0` が使用されます。

```css
color: inherit;
margin: 0;
```

#### 初期値

プロパティの**初期値**とは、仕様上の定義表に掲載されているデフォルト値のことです。初期値の使用方法は、プロパティが継承されるかどうかによって異なります。

- [継承プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Inheritance#継承プロパティ)では、初期値はルート要素、つまり親がない要素であり、継承値が存在しない場合にのみ使用されます。
- [非継承プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Inheritance#非継承プロパティ)では、初期値はすべての要素において、指定値が指定されていない場合に限り使用されます。

明示的に初期値を設定するには、 {{cssxref("initial")}} キーワードを使用してください。

> [!NOTE]
> 初期値は、それぞれの CSS プロパティのリファレンスページの公式定義の節で見ることができます。例えば、[`font-size` の初期値は `medium`](/ja/docs/Web/CSS/Reference/Properties/font-size#公式定義) です。初期値を、ブラウザーのスタイルシートで指定された値と混同しないようにしてください。

### 計算値

プロパティの**計算値** (computed value) とは、親から子へと継承される際に変換される値です。相対単位やカスタムプロパティを絶対的な値に変換した結果であり、レイアウト固有の情報を考慮する前の値です。

計算値は次のように[指定値](#指定値)から計算されます。

1. 特殊な値である {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, {{cssxref("unset")}} を処理します。
2. プロパティ定義表の「計算値」に記載された値に達するのに必要な計算を行います。

プロパティの計算値に到達させるには、一般に（`em` の単位やパーセントなどの）相対的な値を絶対的な値に変換する計算が必要です。例えば、ある要素に `font-size: 16px` と `padding-top: 2em` が指定された場合、 `padding-top` の計算値は `32px`（フォントサイズの倍）になります。

しかしながら、いくつかのプロパティ（`width`, `margin-right`, `text-indent`, `top` など、レイアウトの定義に必要ものに対する割合が相対的なもの）でパーセント値で指定された値は、パーセント値で計算された値に変わります。さらに、単位なしの値が `line-height` に指定された場合は、指定された通りの計算値になります。これらの計算値に残った相対的な値は、[使用値](#使用値)が定義された場合、絶対値になります。

### 使用値

**使用値** (used value) は、[計算値](#計算値)で行われたすべての計算が実行された後のプロパティ値であり、レイアウトに固有の詳細を調整したものです（パーセント値が実際のピクセル値に置き換えられるなど）。

すべての CSS プロパティは使用値を持っています。長さ（{{cssxref("width")}} や {{cssxref("line-height")}} など）の使用値はピクセル数です。一括指定プロパティ（{{cssxref("background")}} など）の使用値は、各成分（{{cssxref("background-color")}} や {{cssxref("background-size")}} など）のプロパティに、 {{cssxref("position")}} や {{cssxref("float")}} が加味されたものと一致します。

要素の {{cssxref("width")}} または {{cssxref("inline-size")}} の使用値は、プロパティの指定値をパーセント値またはキーワード値で設定した場合でも、ピクセル値です。

もし、コンテナーが 3 つあり、幅をそれぞれ `auto`、`50%`、`inherit` と設定されていたとすると、

```html hidden
<div id="no-width">
  <p>幅が指定されていません。</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>明示的に width: 50% と指定</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>明示的に width: inherit と指定</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* 結果を分かりやすくする */
div {
  border: 1px solid red;
  padding: 8px;
}
```

```js hidden
function updateUsedWidth(id) {
  const div = document.getElementById(id);
  const par = div.querySelector(".show-used-width");
  const wid = window.getComputedStyle(div)["width"];
  par.textContent = `width の使用値: ${wid}`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

3 つの指定値である `auto`、`50%`、`inherit` はキーワードおよび {{cssxref("percentage")}} 値ですが、 `window.getComputedStyle(el)["width"];` を使用して幅を取得すると、[絶対的な長さ](/ja/docs/Web/CSS/Reference/Values/length#絶対的な長さの単位)である `px` の値を返します。

{{ EmbedLiveSample('Example', '80%', 372) }}

ウィンドウサイズを変更するか、モバイル端末を回転させると、サイズと使用値が変化します。

## 描画値

描画値は[実効値](#実効値)と呼ばれ、スクリプトを通じて取得される値は[解決値](#解決値)と呼ばれます。

### 実効値

プロパティの**実効値**とは、すべての必要な近似処理が適用された後のそのプロパティの[使用値](#使用値)です。レンダリングの特性や制限に対する調整を含め、ブラウザーで実装される最終的なレンダリング値です。例えば、境界を整数値のピクセル幅でしか描けない{{glossary("user agent", "ユーザーエージェント")}}は、境界線の太さを最も近い整数に丸める場合があります。

計算は次のステップで行われます。

1. 最初に[指定値](#指定値)が、[カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)、[継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)、[初期値](＃初期値)のいずれかに基づいて決定されます。
2. 次に、仕様に従って[計算値](#計算値)が計算されます（例えば、 `span` に `position: absolute` が付いていると、 `display` が計算で `block` に変わります）。
3. それから、レイアウトが計算され、結果として[使用値](#使用値)になります。
4. 最後に、使用値がローカルの環境の制約によって変換され、結果として実効値になります。

### 解決値

プロパティの**解決値**とは、アクティブなスタイルシートを適用し、その値に含まれる可能性のある基本的な計算をすべて解決した後の値です。{{domxref("Window.getComputedStyle", "getComputedStyle()")}} メソッドは、指定された要素に適用された CSS プロパティのすべてについて、解決値を含む生きた {{domxref("CSSStyleDeclaration")}} オブジェクトを返します。それぞれの解決値は、プロパティに応じて、[計算値](#計算値)または[使用値](#使用値)のどちらかです。

過去には、`getComputedStyle()` は要素または擬似要素の計算値を返していました。CSS の進化に伴い、「計算値」の概念も進化しましたが、展開されたスクリプトとの後方互換性を保つため、`getComputedStyle()` が返す値は同じままでなければなりませんでした。これらの値が「解決値」です。

ほとんどのプロパティでは、解決値は計算値ですが、いくつかの古いプロパティ（{{cssxref("width")}} や {{cssxref("height")}} など）では使用値です。 [CSSOM 仕様書](https://drafts.csswg.org/cssom/#resolved-values)には、プロパティごとの詳細が提供されています。

CSS 2.0 では、プロパティの計算における最後の段階として計算値を定義しました。 CSS 2.1 では、「使用値」の明確な定義が導入されました。要素は、計算値がパーセント値である場合に、親要素の width/height を明示的に継承します。レイアウトに依存しない CSS プロパティ（`display`、`font-size`、`line-height` など）では、計算値と使用値は同じです。次のリストは、レイアウトに依存するため、計算値と使用値が異なる CSS 2.1 プロパティの一覧です（[CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36) より引用）。

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## 関連情報

- 継承を制御する CSS 値: {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, {{cssxref("unset")}}
- [CSS カスケードと継承](/ja/docs/Web/CSS/Guides/Cascade)モジュール
- [CSS 構文](/ja/docs/Web/CSS/Guides/Syntax)モジュール
