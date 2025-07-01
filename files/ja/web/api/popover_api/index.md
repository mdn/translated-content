---
title: ポップオーバー API
slug: Web/API/Popover_API
l10n:
  sourceCommit: bb6092c4230b69c2eceae6910af68c73955cae1c
---

{{SeeCompatTable}}{{DefaultAPISidebar("Popover API")}}

**ポップオーバー API** は、他のページコンテンツの上に表示するポップオーバーコンテンツを表示するための、標準的な、一貫性のある、柔軟な仕組みを開発者に提供します。ポップオーバーコンテンツは、HTML 属性を用いて宣言的に、または JavaScript を用いて制御することができます。

## 概念と使用方法

ウェブでは、他のコンテンツの上にコンテンツを示し、ユーザーにとって重要な情報や導くべき操作の詳細を示すというのが、とても一般的なパターンです。このコンテンツは、オーバーレイ、ポップアップ、ポップオーバー、ダイアログなど、さまざまな名称で呼ばれます。私たちは、このドキュメントを通して、これらをポップオーバーと呼ぶことにします。一般的に、これらは次のようなものがあります。

- **モーダル**というのは、ポップオーバーが示されている間、ページの残りの部分は、ポップオーバーが何らかのアクションを起こすまで（例えば、重要な選択がなされるまで）、反応しないようにレンダリングされるということです。
- **非モーダル**というのは、ポップオーバーが表示されている間も、ページの残りの部分が反応するようにするということです。

ポップオーバー API を使用して作成されたポップオーバーは常に非モーダルです。モーダルポップオーバーを作成したい場合は、{{htmlelement("dialog")}} 要素を使うのが適切ですが、既定では `<dialog>` 要素は{{glossary("top layer", "最上位レイヤー")}}には配置されないので注意してください。ポップオーバーはそうなります。2 つの間には明確な重複があります。ポップオーバーは、持続的なもので、宣言的な HTML を使用して制御したい場合などに作成します。ポップオーバーの制御と最上位の配置をダイアログの意味づけと組み合わせたい場合は、`<dialog>` 要素をポップオーバーすることもできます。

ポップオーバー API のよくある用途は、アクションメニュー、独自の「トースト」通知、フォーム要素のサジェスト、コンテンツピッカー、チュートリアル UI などのユーザーと対話する要素があります。

ポップオーバーは、2 つの異なる方法で作成することができます。

- 新しい一連の HTML 属性によって、宣言的に作成できます。トグルボタンを持つ単純なポップオーバーは、以下のコードで作成することができます。

  ```html
  <button popovertarget="mypopover">ポップオーバーの切り替え</button>
  <div id="mypopover" popover>ポップオーバーコンテンツ</div>
  ```

- JavaScript API から。例えば、{{domxref("HTMLElement.togglePopover()")}} を使用してポップオーバーを表示と非表示のトグル切り替えができます。

また、ポップオーバーのトグルに反応する新しいイベントや、ポップオーバーのスタイル設定を支援する CSS 機能もあります。すべての新しい機能は以下の一覧に掲載されています。

[ポップオーバー API の使用](/ja/docs/Web/API/Popover_API/Using)で、この API の詳細なガイドを参照してください。

## HTML 属性

- [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover)
  - : グローバル属性で、ある要素をポップオーバー要素にします。値としてポップオーバー状態（`"auto"` または `"manual"`）を取ります。
- [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : {{htmlelement("button")}} または {{htmlelement("input")}} 要素をポップオーバー制御ボタンにします。値として、制御するポップオーバー要素の ID を取ります。
- [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : 制御ボタン（{{htmlelement("button")}} または {{htmlelement("input")}}）で制御しているポップオーバー要素に対して行う動作（`"hide"`、`"show"`、`"toggle"` の何れか）を指定します。

## CSS 機能

- {{cssxref("::backdrop")}}
  - : 擬似要素 `::backdrop` は、ポップオーバー要素の後ろに直接配置される全画面要素で、ポップオーバーの背後にあるページコンテンツに必要な効果を追加することができます（ぼかすなど）。
- {{cssxref(":popover-open")}}
  - : `popover-open` 擬似クラスは、ポップオーバー要素が表示状態にあるときのみ一致します。これは、ポップオーバー要素が表示されているときのスタイル設定に使用できます。

## インターフェイス

- {{domxref("ToggleEvent")}}
  - : popover 要素の状態が表示と非表示の間で切り替わるときにユーザーに通知するイベントを表します。これは、{{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} と {{domxref("HTMLElement.toggle_event", "toggle")}} イベント用のイベントオブジェクトで、ポップオーバーでその状態が変化するときに発行されます。

## 他のインターフェイスの拡張

### インスタンスプロパティ

- {{domxref("HTMLElement.popover")}}
  - : 要素のポップオーバー状態を JavaScript で取得または設定し（`"auto"` または `"manual"`）、機能検出にも使用することができます。HTML のグローバル属性である [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) global を反映します。
- {{domxref("HTMLButtonElement.popoverTargetElement")}} および {{domxref("HTMLInputElement.popoverTargetElement")}}
  - : この制御ボタンで制御されるポップオーバー要素を取得または設定します。JavaScript において HTML の [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性に相当するものです。
- {{domxref("HTMLButtonElement.popoverTargetAction")}} および {{domxref("HTMLInputElement.popoverTargetAction")}}
  - : この制御ボタンが制御するポップオーバー要素に対して行われるアクション（`"hide"`、`"show"`、`"toggle"` の何れか）を設定または取得します。HTML の [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction) 属性を反映します。

### インスタンスメソッド

- {{domxref("HTMLElement.hidePopover()")}}
  - : ポップオーバー要素を最上位レイヤーから削除し、`display: none` でスタイル設定することにより、ポップオーバー要素を非表示にします。
- {{domxref("HTMLElement.showPopover()")}}
  - : ポップオーバー要素を最上位レイヤーに追加して表示します。
- {{domxref("HTMLElement.togglePopover()")}}
  - : ポップオーバー要素の表示状態と非表示状態を切り替えます。

### イベント

- `HTMLElement` の {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} イベント
  - : ポップオーバー要素の表示と非表示の状態が変わる直前、またはその逆で発行されます。
- `HTMLElement` の {{domxref("HTMLElement.toggle_event", "toggle")}} イベント
  - : ポップオーバー要素の状態が、表示と非表示、またはその逆に変化した直後に発行されます。このイベントは、{{htmlelement("details")}} 要素の状態変化を指示するためにすでに存在しており、ポップオーバー要素のためにこれを拡張することは理にかなっていると考えられています。

## 例

[ポップオーバー API の例のランディングページ](https://mdn.github.io/dom-examples/popover-api/)に、MDN のポップオーバーの完全な例にアクセスできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
