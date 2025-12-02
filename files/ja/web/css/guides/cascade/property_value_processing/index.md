---
title: CSS のプロパティ値の処理
slug: Web/CSS/Guides/Cascade/Property_value_processing
original_slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

文書ツリー内の各要素に対して、ブラウザーはその要素に適用されるすべての CSS プロパティに値を割り当てます。指定された要素またはボックスに対する各 CSS プロパティのレンダリングされた値は、このスタイルシートの定義、継承、[カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)、依存関係、単位変換、表示環境に基づく計算の結果です。このガイドでは、指定値、計算値、使用値、実効値などの主要な概念を調査しながら、それぞれの CSS の値が最終的にどのようにレンダリングされるかを定義する処理手順の概要を説明します。

## プロパティ値

すべての CSS プロパティの値は、最も[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)の高い宣言によって決まります。同じ要素に対して、同じ詳細度を持つ 2 つ以上の宣言で異なるプロパティ値が指定された場合、アルゴリズム上の重みが最も高いセレクターの宣言値が適用されます。

それぞれのプロパティの値は、単一のプロパティと値の組み合わせから決まります。 1 つのプロパティから 1 つの値が適用されます。値がカンマで区切られた複数の値のリストである場合でも、その値のリストは単一の宣言から取得されます。

どの指定値が適用されるかを決定するために、ユーザーエージェントは、インラインスタイルや内部および外部スタイルシートなど、さまざまなソースからすべてのスタイルを収集し、処理します。

一部のプロパティは、明示的に上書きされない限り、親要素から値を継承します。[継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)は、要素の特定のプロパティにスタイル情報が存在しない場合に発生します。プロパティが継承された場合、その値は親要素の[計算値](#計算値)に設定されます。プロパティが継承されない場合、その値はその要素の[初期値](#初期値)に設定されます。

[カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)は、複数の競合するスタイルが同じ要素を対象としている場合に、どの値を適用すべきかを決定します。 カスケードアルゴリズムは、さまざまなソース、スコープ、レイヤーから取得されたプロパティ値をユーザーエージェントがどのように統合するかを定義します。 セレクターが要素と一致する場合、優先順位が最も高いソースから取得されたプロパティの[指定値](#指定値)が適用されます。たとえ優先順位が低いソースやレイヤーから取得されたセレクターのほうがより高い[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)であってもです。

段階的にカスケードルールを適用し、値を解決した後、ブラウザーは視覚的な表示が処理された CSS と確実に一致するようになります。

## 各段階の処理

文書内の平坦化された要素ツリーを構成するすべての要素には、宣言値、継承値、指定値、計算値、使用値、実効値があります。特定のプロパティについて見ると、これらの値が同じである場合も異なる場合もあります。例えば、大規模なコードベースに CSS で "`p { font-size: 1.25em; }`" と指定されており、 HTML に "`<p>CSS は楽しい！</p>`" と記載されている場合、段落のサイズはどのくらいになるでしょうか？ {{cssxref("font-size")}} の値は、いくつかの段階を経て、指定された `em` からレンダリングされた `px` 値へと移動します。

- [初期値](#初期値) (initial value)
- [指定値](#指定値) (specified value)
- [計算値](#計算値) (computed value)
- [使用値](#使用値) (used value)

これらの値は、最終的な[描画値](#描画値)を決定するために使用されます。

### 初期値

プロパティの**初期値**とは、仕様上の定義表に掲載されている既定値のことです。初期値の使用方法は、プロパティが継承されるかどうかによって異なります。

- [継承されるプロパティ](/ja/docs/Web/CSS/Guides/Cascade/Inheritance#継承プロパティ)では、初期値はルート要素に対してのみ、[指定値](#指定値)が指定されていない場合に限り使用されます。

- [継承されないプロパティ](/ja/docs/Web/CSS/Guides/Cascade/Inheritance#非継承プロパティ)では、初期値はすべての要素において、指定値が指定されていない場合に限り使用されます。

明示的に初期値を設定するには、 {{cssxref("initial")}} キーワードを使用してください。

> [!NOTE]
> 初期値は、各 CSS プロパティのリファレンスページの公式定義の節で見ることができます。例えば、[`font-size` の初期値は `medium`](/ja/docs/Web/CSS/Reference/Properties/font-size#公式定義) です。初期値を、ブラウザーのスタイルシートで指定された値と混同しないようにしてください。

### 指定値

**指定値**は、最初に CSS ファイルや `style` 属性によって割り当てられる値です。あるプロパティの指定値は、以下の規則に従って決定されます。

1. 文書のスタイルシートが明示的にプロパティに値を指定した場合は、その値が使用されます。
2. 文書のスタイルシートが値を指定しなかった場合、可能であれば親要素から値を継承します。
3. 上記のどちらも適用されなかった場合、要素の[初期値](#初期値)が使用されます。

例えば、 "`p { font-size: 1.25em; }`" では指定値が `1.25em` となります。ただしコードベースに `font-size` 宣言がより大きな[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)で存在しない場合です。

### 計算値

プロパティの**計算値**とは、親から子へと継承される際に引き継がれる値です。 相対単位やカスタムプロパティを絶対値に変換した結果であり、レイアウト固有の情報を考慮する前の値です。

計算値は次のように[指定値](#指定値)から計算されます。

1. 特殊な値である {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, {{cssxref("unset")}} を扱います。
2. プロパティの概要の「計算値」に記載された値に達するのに必要な計算を行います。

プロパティの計算値に達するのに必要な計算は、一般に (`em` の単位やパーセントなどの) 相対値を絶対値に変換する計算を含みます。例えば、ある要素に `font-size: 16px` と `padding-top: 2em` が指定された場合、 `padding-top` の計算値は `32px` (フォントサイズの倍) になります。

しかしながら、いくつかのプロパティ (`width`, `margin-right`, `text-indent`, `top` など、レイアウトの定義に必要ものに対する割合が相対的なもの) でパーセント値で指定された値はパーセント値で計算された値に変わります。さらに、単位なしの値が `line-height` に指定された場合は、指定された通りの計算値になります。これらの計算値に残った相対的な値は、[使用値](#使用値)が定義された場合、絶対値になります。

"`p { font-size: 1.25em; }`" と指定された場合、 `em` が `16px` であれば、段落の計算されたフォントサイズは `20px` となります。

### 使用値

**使用値**は [CSS](/ja/docs/Web/CSS) プロパティにおいて、[計算値](#計算値)で行われたすべての計算が実行された後のプロパティ値であり、レイアウトの仕様上、パーセント値が実際のピクセル値に置き換えられるなど、細部が調整されています。

すべての CSS プロパティは使用値を持っています。長さ（{{cssxref("width")}} や {{cssxref("line-height")}} など）の使用値はピクセル数です。一括指定プロパティ（{{cssxref("background")}} など）の使用値は、各成分（{{cssxref("background-color")}} や {{cssxref("background-size")}} など）のプロパティに、 {{cssxref("position")}} や {{cssxref("float")}} が加味されたものと一致します。

要素の {{cssxref("width")}} または {{cssxref("inline-size")}} の使用値は、プロパティの指定値をパーセント値またはキーワード値で設定した場合でも、ピクセル値です。

コンテナーが 3 つあり、幅をそれぞれ `auto`、`50%`、`inherit` と設定してみます。

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
  par.textContent = `使用値 width: ${wid}`;
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

プロパティの**実効値**は、すべての必要な推定が適用された後の [使用値](#使用値)です。レンダリングの特性や制限に対する調整を含め、ブラウザーで実装される最終的なレンダリング値です。例えば、境界を整数値のピクセル幅でしか描けない{{glossary("user agent", "ユーザーエージェント")}}は、境界の太さを近似値の整数に丸めるかもしれません。

計算は次のステップで行われます。

1. 最初に[指定値](#指定値)が、[カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)、[継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)、[初期値](＃初期値)のいずれかに基づいて決定されます。
2. 次に、仕様に従って[計算値](#計算値)が計算されます（例えば、 `span` に `position: absolute` が付いていると、 `display` が計算で `block` に変わります）。
3. それから、レイアウトが計算され、結果として[使用値](#使用値)になります。
4. 最後に、使用値がローカルの環境の制約によって変換され、結果として実効値になります。

### 解決値

プロパティの**解決値**とは、アクティブなスタイルシートを適用し、その値に含まれる可能性のある基本的な計算をすべて解決した後の値です。 {{domxref("Window.getComputedStyle", "getComputedStyle()")}} メソッドは、指定された要素に適用された CSS プロパティのすべてについて、解決値を含む生きた {{domxref("CSSStyleDeclaration")}} オブジェクトを返します。それぞれの解決値は、プロパティに応じて、[計算値](#計算値)または[使用値](#使用値)のどちらかです。

過去には、 `getComputedStyle()` は要素または擬似要素の計算値を返していました。CSS の進化に伴い、「計算値」の概念も進化しましたが、展開されたスクリプトとの後方互換性を保つため、`getComputedStyle()` が返す値は同じままでなければなりませんでした。これらの値が「解決値」です。

ほとんどのプロパティでは、解決値は計算値ですが、いくつかの古いプロパティ（{{cssxref("width")}} や {{cssxref("height")}} など）では、使用値です。 [CSSOM 仕様書](https://drafts.csswg.org/cssom/#resolved-values)には、プロパティごとの詳細が提供されています。

CSS 2.0 では、プロパティの計算における最後の段階として計算値を定義しました。 CSS 2.1 では、「使用値」の明確な定義が導入されました。要素は、計算値がパーセント値である場合に、親要素の width/height を明示的に継承します。レイアウトに依存しない CSS プロパティ（`display`、`font-size`、`line-height` など）では、計算値と使用値は同じです。次のリストは、レイアウトに依存するため、計算値と使用値が異なる CSS 2.1 プロパティの一覧です（[CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36) より引用）。

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## 関連情報

- 継承を制御する CSS 値: [`inherit`](/ja/docs/Web/CSS/Reference/Values/inherit), [`initial`](/ja/docs/Web/CSS/Reference/Values/initial), [`revert`](/ja/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/ja/docs/Web/CSS/Reference/Values/revert-layer), [`unset`](/ja/docs/Web/CSS/Reference/Values/unset)
- [CSS カスケードと継承](/ja/docs/Web/CSS/Guides/Cascade)モジュール
- [CSS 構文](/ja/docs/Web/CSS/Guides/Syntax)モジュール
