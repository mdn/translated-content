---
title: "`position-try-order` プロパティ"
short-title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

**`position-try-order`** は [CSS](/ja/docs/Web/CSS) のプロパティで、指定された方向で要素の周囲に最も広い空間を作るオプションに基づいて、アンカー位置指定要素が最初にレンダリングされるときに適用する {{cssxref("position-try-fallbacks")}} のオプションの優先順位を指定します。

## 構文

```css
/* キーワード値 */
position-try-order: normal;
position-try-order: most-height;
position-try-order: most-width;
position-try-order: most-block-size;
position-try-order: most-inline-size;

/* グローバル値 */
position-try-order: inherit;
position-try-order: initial;
position-try-order: revert;
position-try-order: revert-layer;
position-try-order: unset;
```

### 値

`position-try-order` プロパティは、キーワード値 `normal` または `<try-size>` のどちらかで指定します。

- `normal`
  - : デフォルト。要素が最初にレンダリングされる際、位置指定の代替オプションは試行されません。
- `<try-size>`
  - : アンカー位置指定要素が最初にレンダリングされるとき、どの基準で位置指定の代替オプションを適用するかを定義します。利用できる値は以下の通りです。
    - `most-height`
      - : 要素に最も広い垂直方向の空間を与える位置指定の代替オプションを適用します。
    - `most-width`
      - : 要素に最も広い水平方向の空間を与える位置指定の代替オプションを適用します。
    - `most-block-size`
      - : 要素にブロック方向で最も広い空間を与える位置指定の代替オプションを適用します。
    - `most-inline-size`
      - : 要素にインライン方向で最も広い空間を与える位置指定の代替オプションを適用します。

## 解説

`position-try-order` プロパティは、位置指定要素がスクロールされるときではなく、最初に表示されるときに適用する位置指定の代替オプションに影響する点で、他の位置指定の機能とは焦点が少し異なります。例えば、デフォルトの初期位置より高さや幅に余裕のある領域に、要素を最初に表示したい場合に便利です。

ブラウザーは利用可能な `position-try-fallbacks` を調べ、指定された方向でアンカー位置指定要素に最も広い空間を与えるオプションを探します。その後、そのオプションを適用して、ページの最初のレンダリング時に要素の初期スタイルを上書きします。

要素の初期位置よりも広い幅または高さを与える位置指定の代替オプションがない場合、そのオプションは適用されません。これは、`position-try-order` が `normal` に設定されている場合と同じです。

アンカー機能と位置指定の詳細情報については、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールと[オーバーフロー時の代替オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)ガイドを参照してください。

`position-try-order` プロパティは、{{cssxref("position-try-fallbacks")}} プロパティとともに、{{cssxref("position-try")}} 一括指定を使用して設定することもできます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`position-try-order` の効果を示します。

#### HTML

この HTML には、アンカーとアンカー位置指定要素となる 2 つの {{htmlelement("div")}} 要素があります。

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

#### CSS

まず、後で編集する位置指定要素を見つけやすくするため、`position-try-order` に `normal` を設定します。

```css
.infobox {
  position-try-order: normal;
}
```

アンカーには {{cssxref("anchor-name")}} と大きな {{cssxref("margin")}} を設定し、ビューポートの中央付近に配置します。

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  margin: 90px auto;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}
```

`--custom-bottom` というカスタム位置オプションを指定します。これにより、アンカー位置指定要素がアンカーの下に配置され、適切なマージンが適用されます。

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

最初にアンカー位置指定要素をアンカーの上に配置し、次に `position-try-fallbacks` プロパティでカスタム位置オプションを指定します。

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try-fallbacks: --custom-bottom;
}
```

#### 結果

{{ EmbedLiveSample("basic_usage", "100%", "310") }}

最初は、アンカー位置指定要素はデフォルトの位置として指定したアンカーの上に配置されます。

例の **Play** ボタンを押して MDN Playground で開き、実行したあと、`position-try-order` を `most-height` または `most-block-size` に変更してみてください。例が再レンダリングされると、アンカー位置指定要素はアンカーの下に配置されます。デフォルトの位置より周囲の高さに余裕があるため、`--custom-bottom` の代替オプションが適用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("@position-try")}} アットルール
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド
- [オーバーフロー時の代替オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)ガイド
