---
title: ポップオーバー API
slug: Web/API/Popover_API
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("Popover API")}}

**ポップオーバー API** は、他のページコンテンツの上に表示するポップオーバーコンテンツを表示するための、標準的な、一貫性のある、柔軟な仕組みを開発者に提供します。ポップオーバーコンテンツは、HTML 属性を用いて、または JavaScript を用いて制御することができます。

## 概念と使用方法

ウェブでは、他のコンテンツの上にコンテンツを示し、ユーザーにとって重要な情報や導くべき操作の詳細を示すというのが、とても一般的なパターンです。このコンテンツは、オーバーレイ、ポップアップ、ポップオーバー、ダイアログなど、さまざまな名称で呼ばれます。私たちは、このドキュメントを通して、これらをポップオーバーと呼ぶことにします。一般的に、これらは次のようなものがあります。

- **モーダル**というのは、ポップオーバーが示されている間、ページの残りの部分は、ポップオーバーが何らかのアクションを起こすまで（例えば、重要な選択がなされるまで）、反応しないようにレンダリングされるということです。
- **非モーダル**というのは、ポップオーバーが表示されている間も、ページの残りの部分が反応するようにするということです。

ポップオーバー API を使用して作成されたポップオーバーは常に非モーダルです。モーダルポップオーバーを作成したい場合は、{{htmlelement("dialog")}} 要素を使うのが適切です。2 つの間には明確な重複があります。ポップオーバーは、持続的なもので、HTML を使用して制御したい場合などに作成します。ポップオーバーの制御をダイアログの意味づけと組み合わせたい場合は、`<dialog>` 要素をポップオーバーすることもできます（`<dialog popover>` は完全に有効です）。

ポップオーバー API のよくある用途は、アクションメニュー、独自の「トースト」通知、フォーム要素のサジェスト、コンテンツピッカー、チュートリアル UI などのユーザーと対話する要素があります。

ポップオーバーは、複数の方法で作成することができます。

- 新しい一連の HTML 属性によって作成できます。トグルボタンを持つ単純なポップオーバーは、以下のコードで作成することができます。

  ```html
  <button popovertarget="mypopover">ポップオーバーの切り替え</button>
  <div id="mypopover" popover>ポップオーバーコンテンツ</div>
  ```

- JavaScript API から。例えば、{{domxref("HTMLElement.togglePopover()")}} を使用してポップオーバーを表示と非表示のトグル切り替えができます。

同時に、ポップオーバー API では、ポップオーバーの表示・非表示の切り替えに応答するためのイベントや、ポップオーバーのスタイル設定を支援する CSS 機能も指定されています。[ポップオーバー API の使用](/ja/docs/Web/API/Popover_API/Using)で、この API の詳細なガイドを参照してください。

関連する機能である**関心インボーカー**を使用することができます。JavaScript を必要とせずに、ホバーやフォーカス時にポップオーバーを表示させることができます。詳細については、[関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)をご覧ください。

## HTML 属性

- [`interestfor`](/ja/docs/Web/HTML/Reference/Elements/button#interestfor) {{experimental_inline}}
  - : HTML の {{htmlelement("a")}}、{{htmlelement("button")}}、{{htmlelement("area")}}、または SVG の [`<a>`](/ja/docs/Web/SVG/Reference/Element/a) 要素を関心インボーカーとして定義します。その値は、呼び出し元要素に対する関心が生じたり失われたりした際に、何らかの影響（通常は表示または非表示）を受ける対象要素の `id` です。
- [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover)
  - : グローバル属性で、ある要素をポップオーバー要素にします。値としてポップオーバー状態（`"auto"`、`"hint"`、`"manual"` のいずれか）を取ります。
- [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : {{htmlelement("button")}} または {{htmlelement("input")}} 要素をポップオーバー制御ボタンにします。値として、制御するポップオーバー要素の ID を取ります。
- [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : 制御ボタン（{{htmlelement("button")}} または {{htmlelement("input")}}）で制御しているポップオーバー要素に対して行う動作（`"hide"`、`"show"`、`"toggle"` の何れか）を指定します。

## CSS 機能

- {{cssxref("::backdrop")}}
  - : 擬似要素 `::backdrop` は、ポップオーバー要素の後ろに直接配置される全画面要素で、ポップオーバーの背後にあるページコンテンツに必要な効果を追加することができます（ぼかすなど）。
- {{cssxref("interest-delay")}}, {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay-end")}} {{experimental_inline}}
  - : `interest-delay` 一括指定プロパティ、およびそれに関連する `interest-delay-start` および `interest-delay-end` の個別指定プロパティを使用することで、ユーザーが興味を示したり失ったりしてから、ブラウザーがその変化に応じて動作するまでの間に遅延を追加することができます。
- {{cssxref(":interest-source")}} および {{cssxref(":interest-target")}}
  - : これらのセレクターは、関心が示された場合に限り、それぞれ関心インボーカーおよびそれに関連付けられた対象要素にスタイルを適用するために使用できます。
- {{cssxref(":popover-open")}}
  - : `:popover-open` 擬似クラスは、ポップオーバー要素が表示状態にあるときのみ一致します。これは、ポップオーバー要素が表示されているときのスタイル設定に使用できます。

## インターフェイス

- {{domxref("InterestEvent")}} {{experimental_inline}}
  - : {{domxref("HTMLElement.interest_event", "interest")}} および {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} イベントのイベントオブジェクトです。これには、関連付けられた関心インボーカー要素への参照を含む `source` プロパティが含まれます。
- {{domxref("ToggleEvent")}}
  - : popover 要素の状態が表示と非表示の間で切り替わるときにユーザーに通知するイベントを表します。これは、{{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} と {{domxref("HTMLElement.toggle_event", "toggle")}} イベント用のイベントオブジェクトで、ポップオーバーでその状態が変化するときに発行されます。

## 他のインターフェイスの拡張

### インスタンスプロパティ

- {{domxref("HTMLButtonElement.interestForElement", "interestForElement")}} {{experimental_inline}}
  - : 関心インボーカーが対象としている要素への参照を取得または設定します。HTML または SVG の関心インボーカーが、その `interestfor` 属性でターゲット要素を参照している場合、その要素は、対応する DOM オブジェクトの `interestForElement` プロパティで参照されます。{{domxref("HTMLButtonElement")}}、{{domxref("HTMLAnchorElement")}}、{{domxref("HTMLAreaElement")}}、{{domxref("SVGAElement")}} の各インターフェイスで利用可能です。
- {{domxref("HTMLElement.popover")}}
  - : 要素のポップオーバー状態を JavaScript で取得または設定し（`"auto"`, `"hint"`, `"manual"` のいずれか）、機能検出にも使用することができます。HTML のグローバル属性である [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) global を反映します。
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

- {{domxref("HTMLElement.beforetoggle_event","beforetoggle")}} イベント
  - : ポップオーバー要素の表示と非表示の状態が変わる直前、またはその逆で発行されます。
    ポップオーバーが開くのを防ぐため、またはポップオーバーの状態に応じて他の要素を開始するために使用できます。
- {{domxref("HTMLElement.toggle_event", "toggle")}} イベント
  - : ポップオーバー要素の状態が、表示と非表示、またはその逆に変化した直後に発行されます。
- {{domxref("HTMLElement.interest_event", "interest")}} {{experimental_inline}}
  - : 関心が示された際に、関心インボーカーの対象要素に対して発生し、それに応じてコードを実行することができます。
- {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} {{experimental_inline}}
  - : 関心が失われた際に、関心インボーカーの対象要素に対して発生し、それに応じてコードを実行することができます。

## 例

- [ポップオーバー API の例](https://mdn.github.io/dom-examples/popover-api/)<sup>(英語)</sup>の事例集をご覧ください。
- [関心インボーカーの例](https://mdn.github.io/dom-examples/interest-invokers/)<sup>(英語)</sup>の事例集をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) グローバル属性
- HTML [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性
- HTML [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction) 属性
- CSS {{cssxref("::backdrop")}} 擬似要素
- CSS {{cssxref(":popover-open")}} 擬似クラス
