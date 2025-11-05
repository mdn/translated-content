---
title: HTML popover グローバル属性
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`popover`** は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)で、要素をポップオーバー要素として示すために使われます。

## 値

`popover` 属性は、次のいずれかの値を取ることができます。

- `"auto"`
  - : [`auto`](/ja/docs/Web/API/Popover_API/Using#自動状態と「簡単な解除」) ポップオーバーは「簡単に閉じる」ことができます。これは、ポップオーバーの外側をクリックするか、 <kbd>Esc</kbd> キーを押すことでポップオーバーを非表示にできるということです。 `auto` ポップオーバーを表示すると、入れ子になっていない限り、通常、すでに表示されている他の `auto` ポップオーバーは閉じられます。

    > [!NOTE]
    > `popover` に空の値を設定する（`popover` または `popover=""`）ことは、`popover="auto"` を設定することと同じです。

- `"hint"` {{experimental_inline}}
  - : [`hint`](/ja/docs/Web/API/Popover_API/Using#using_hint_popover_state) ポップオーバーは、表示時に `auto` ポップオーバーは閉じませんが、それ以外のヒントポップオーバーは閉じます。
    これらは簡単に閉じることができ、閉じるリクエストに応答します。

- `"manual"`
  - : [`manual`](/ja/docs/Web/API/Popover_API/Using#手動のポップオーバー状態の使用) ポップオーバーは「簡単に閉じる」ことはできず、自動的に閉じられることもありません。ポップオーバーは、宣言的な表示/非表示/切り替えボタンまたは JavaScript を使用して、明示的に表示および閉じる必要があります。複数の独立した `manual` ポップオーバーを同時に表示することができます。

## 解説

ポップオーバー要素は、呼び出し/制御要素（つまり、`<button>` または `<input type="button">` に対応する [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性を持つ) または {{domxref("HTMLElement.showPopover()")}} 呼び出しによって開かれるまで、非表示になっています。

開くと、ポップオーバー要素は {{glossary("top layer", "最上位レイヤー")}} 内の他のすべての要素の上に現れ、親要素の {{cssxref('position')}} または {{cssxref('overflow')}} スタイル設定の影響を受けません。

[`auto`](/ja/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) 状態を持つポップオーバーは、関連付けられたコントロール（[`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性で指定）を使用して表示および非表示にすることができ、ポップオーバー領域の外側をクリックするか、別のポップオーバーを開くか、<kbd>Esc</kbd> キーなどのブラウザー固有の機構を押すことで「簡単に閉じる」ことができます。

通常、画面には一度に 1 つの `auto` ポップオーバーしか表示できません。2 つ目のポップオーバーを表示すると、最初のポップオーバーは非表示になります。この規則の例外は、入れ子になった自動ポップオーバーがある場合です。詳細については、[入れ子になったポップオーバー](/ja/docs/Web/API/Popover_API/Using#nested_popovers) を参照してください。

JavaScript を使用して制御することもできます。例えば、{{domxref("HTMLElement.togglePopover()")}} メソッドを使用すると、ポップオーバーの表示と非表示を切り替えることができます。

対照的に、[`manual`](/ja/docs/Web/API/Popover_API/Using#using_manual_popover_state) ポップオーバーは、手動で表示および非表示にする必要があります。表示しても他のポップオーバーは自動的に閉じられず、簡単に閉じることもできません。これにより、複数のポップオーバーを同時に表示したい用途に使用できます。

[`hint`](/ja/docs/Web/API/Popover_API/Using#using_hint_popover_state) ポップオーバーは、表示されたときに `auto` ポップオーバーを閉じませんが、それ以外のヒントポップオーバーは閉じます。簡単に閉じることができ、閉じるリクエストにも応答します。

通常、`hint` ポップオーバーは、[`mouseover`](/ja/docs/Web/API/Element/mouseover_event)/[`mouseout`](/ja/docs/Web/API/Element/mouseout_event) や [`focus`](/ja/docs/Web/API/Element/focus_event)/ などのクリック以外の JavaScript イベントに応じて表示および非表示になります。 [`blur`](/ja/docs/Web/API/Element/blur_event) などのクリック以外の JavaScript イベントに応じて表示および非表示になります。ボタンをクリックして `hint` ポップオーバーを開くために、開いている `auto` ポップオーバーを簡単に閉じることを発生させます。

使い方についての詳しい情報は、{{domxref("Popover API", "ポップオーバー API", "", "nocode")}} ランディングページを参照してください。

## 例

以下は、ポップオーバー要素を開くためのボタンを描画するものです。

```html
<button popovertarget="my-popover">ポップオーバーを開く</button>

<div popover id="my-popover">私から皆さんへ、こんにちは！</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> MDN にあるポップオーバーの例の完全な例にアクセスするには、[ポップオーバー API 例のランディングページ](https://mdn.github.io/dom-examples/popover-api/)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Popover API", "ポップオーバー API", "", "nocode")}}
- HTML の [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性
- HTML の [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction) 属性
- CSS の [`::backdrop`](/ja/docs/Web/CSS/Reference/Selectors/::backdrop) 擬似要素
- CSS の [`:popover-open`](/ja/docs/Web/CSS/Reference/Selectors/:popover-open) 擬似クラス
