---
title: Element
slug: Web/API/Element
tags:
  - API
  - DOM
  - DOM リファレンス
  - Element
  - インターフェイス
  - リファレンス
  - Web API
browser-compat: api.Element
translation_of: Web/API/Element
---
{{APIRef("DOM")}}

**`Element`** は {{DOMxRef("Document")}} が継承するオブジェクトの中にあるすべての要素オブジェクト（すなわち、要素を表現するオブジェクト）が継承する、もっとも一般的な基底クラスです。すべての種類の要素の共通するメソッドとプロパティのみを持ちます。もっと具体的なクラスが `Element` を継承しています。

例えば {{DOMxRef("HTMLElement")}} インターフェイスは HTML 要素の基本インターフェイスであり、 {{DOMxRef("SVGElement")}} インターフェイスはすべての SVG 要素の基本になります。ほとんどの機能は、クラスの階層を下りると具体化していきます。

XUL の `XULElement` インターフェイスのようなウェブプラットフォームの枠外の言語もまた、`Element` インターフェイスを実装しています。

{{InheritanceDiagram}}

## プロパティ

_`Element` は、親インターフェイスである {{DOMxRef("Node")}}、およびその親インターフェイスである {{DOMxRef("EventTarget")}} からプロパティを継承しています。_

- {{DOMxRef("Element.assignedSlot")}}{{readonlyInline}}
  - : このノードが挿入された {{htmlelement("slot")}} を表す {{DOMxRef("HTMLSlotElement")}} を返します。
- {{DOMxRef("Element.attributes")}} {{readOnlyInline}}
  - : 対応する HTML 要素に関連したすべての属性のリストである {{DOMxRef("NamedNodeMap")}} を返します。
- {{domxref("Element.childElementCount")}} {{readonlyInline}}
  - : この要素の子要素の数を返します。
- {{domxref("Element.children")}} {{readonlyInline}}
  - : この要素の子要素を返します。
- {{DOMxRef("Element.classList")}} {{readOnlyInline}}
  - : class 属性のリストが入った {{DOMxRef("DOMTokenList")}} を返します。
- {{DOMxRef("Element.className")}}
  - : {{DOMxRef("DOMString")}} で、この要素のクラスを表します。
- {{DOMxRef("Element.clientHeight")}} {{readOnlyInline}}
  - : この要素の内部の高さを表す数値を返します。
- {{DOMxRef("Element.clientLeft")}} {{readOnlyInline}}
  - : この要素の左境界の幅を表す数値を返します。
- {{DOMxRef("Element.clientTop")}} {{readOnlyInline}}
  - : この要素の上境界の幅を表す数値を返します。
- {{DOMxRef("Element.clientWidth")}} {{readOnlyInline}}
  - : この要素の内部の幅を表す数値を返します。
- {{domxref("Element.firstElementChild")}} {{readonlyInline}}
  - : この要素の最初の子要素を返します。
- {{DOMxRef("Element.id")}}
  - : {{DOMxRef("DOMString")}} で、この要素の id を表します。
- {{DOMxRef("Element.innerHTML")}}
  - : {{DOMxRef("DOMString")}} で、この要素の内容のマークアップを表します。
- {{domxref("Element.lastElementChild")}} {{readonlyInline}}
  - : この要素の最後の子要素を返します。
- {{DOMxRef("Element.localName")}} {{readOnlyInline}}
  - : {{DOMxRef("DOMString")}} で、この要素の修飾名のローカル部分を表します。
- {{DOMxRef("Element.namespaceURI")}} {{readonlyInline}}

  - : この要素の名前空間の URI。名前空間がない場合は `null` になります。

    > **Note:** Firefox 3.5 および以前のバージョンでは、HTML 要素の名前空間はありません。以降のバージョンでは、HTML 要素は HTML ツリーおよび XML ツリーで [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml) 名前空間内に存在します。

- {{DOMxRef("Element.nextElementSibling")}} {{readOnlyInline}}
  - : {{DOMxRef("Element")}} で、ツリー上で自身の直後の要素を表します。兄弟ノードがなければ `null` になります。
- {{DOMxRef("Element.outerHTML")}}
  - : {{DOMxRef("DOMString")}} で、その要素の内容を含むマークアップを表します。値が設定された場合、その文字列から解釈されたノードでその要素を置換します。
- {{DOMxRef("Element.part")}}
  - : 要素のパート識別子 (すなわち、 `part` 属性を使用して設定されるもの) が、 {{domxref("DOMTokenList")}} として返されます。
- {{DOMxRef("Element.prefix")}} {{readOnlyInline}}
  - : {{DOMxRef("DOMString")}} で、要素の名前空間接頭辞を表します。接頭辞が指定されていない場合は `null` です。
- {{DOMxRef("Element.previousElementSibling")}} {{readOnlyInline}}
  - : {{DOMxRef("Element")}} で、ツリー上で自身の直前の要素を表します。兄弟ノードが無ければ `null` です。
- {{DOMxRef("Element.scrollHeight")}} {{readOnlyInline}}
  - : この要素のスクロールビューの高さを表す数値を返します。
- {{DOMxRef("Element.scrollLeft")}}
  - : 数値型で、この要素の左スクロールオフセット値を表します。
- {{DOMxRef("Element.scrollLeftMax")}} {{Non-standard_Inline}} {{readOnlyInline}}
  - : この要素で可能な左スクロールオフセットの最大値を表す数値を返します。
- {{DOMxRef("Element.scrollTop")}}
  - : この要素の上端が垂直方向にスクロールされた量をピクセル数で表す数値です。
- {{DOMxRef("Element.scrollTopMax")}} {{Non-standard_Inline}} {{readOnlyInline}}
  - : 要素で可能な上スクロールオフセットの最大値を表す数値を返します。
- {{DOMxRef("Element.scrollWidth")}} {{readOnlyInline}}
  - : 要素のスクロールビュー幅を表す数値を返します。
- {{DOMxRef("Element.shadowRoot")}}{{readOnlyInline}}
  - : 要素が所持しているオープンモードのシャドウルート、あるいはオープンモードのシャドウルートがない場合は null を返します。
- {{DOMxRef("Element.openOrClosedShadowRoot")}} {{Non-standard_Inline}}{{readOnlyInline}}
  - : オープン・クローズに関係なく、要素が所持しているさh同ルートを返します。**[WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions) に限り使用できます。**
- {{DOMxRef("Element.setHTML")}}
  - : HTML の文字列を解釈して[無害化](/ja/docs/Web/API/HTML_Sanitizer_API)し、 DOM の中にこの要素のサブツリーとして挿入します。
- {{DOMxRef("Element.slot")}} {{Experimental_Inline}}
  - : この要素が挿入されているシャドウ DOM スロットの名前を返します。
- {{DOMxRef("Element.tagName")}} {{readOnlyInline}}
  - : この要素のタグ名を文字列で返します。

### ARIA から導入されたプロパティ

_`Element` インターフェイスには、 `ARIAMixin` ミックスインで定義されている以下のプロパティを持っています。_

- {{domxref("Element.ariaAtomic")}}
  - : {{domxref("DOMString")}} で [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) 属性を反映し、 [`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) 属性で定義された変更通知に基づいて、支援技術が変更された領域のすべてを提示するか、一部のみを提示するかを示します。
- {{domxref("Element.ariaAutoComplete")}}
  - : {{domxref("DOMString")}} で、 [`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) 属性を反映し、コンボボックス、検索ボックス、テキストボックスでテキストを入力する際に、ユーザーの意図した値の 1 つ以上の予測を表示するかどうか、予測が行われた場合にはどのように表示するかを指定します。
- {{domxref("Element.ariaBusy")}}
  - : {{domxref("DOMString")}} で [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-busy) 属性を反映し、要素が修正されているかどうかを示します。支援技術では、修正が完了するまで待ってからユーザーに公開したい場合があります。
- {{domxref("Element.ariaChecked")}}
  - : {{domxref("DOMString")}} で [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-checked) 属性を反映し、チェックボックス、ラジオボタン、その他のチェック状態を持つウィジェットの現在の「チェック」状態を示します。
- {{domxref("Element.ariaColCount")}}
  - : {{domxref("DOMString")}} で [`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) 属性を反映し、テーブル、グリッド、ツリーグリッドの列数を定義します。
- {{domxref("Element.ariaColIndex")}}
  - : {{domxref("DOMString")}} で [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) 属性を反映し、テーブル、グリッド、ツリーグリッド内の列の総数に対する要素の列インデックスまたは位置を定義します。
- {{domxref("Element.ariaColIndexText")}}
  - : {{domxref("DOMString")}} で [`aria-colindextext`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) 属性を反映し、 aria-colindex の代替となる人間が読めるテキストを定義します。
- {{domxref("Element.ariaColSpan")}}
  - : {{domxref("DOMString")}} で [`aria-colspan`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) 属性を反映し、テーブル、グリッド、ツリーグリッド内のセルまたはグリッドセルがカバーする列数を定義します。
- {{domxref("Element.ariaCurrent")}}
  - : {{domxref("DOMString")}} で [`aria-current`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-current) 属性を反映し、コンテナーまたは関連要素のセット内の現在の項目を表す要素を示します。
- {{domxref("Element.ariaDescription")}}
  - : {{domxref("DOMString")}} で [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-description) 属性を反映し、現在の要素を説明または注釈する文字列値を定義します。
- {{domxref("Element.ariaDisabled")}}
  - : {{domxref("DOMString")}} で [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) 属性を反映し、この要素が知覚可能であるが無効であるため、編集やその他の操作ができないことを示します。
- {{domxref("Element.ariaExpanded")}}
  - : {{domxref("DOMString")}} で [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) 属性を反映し、この要素が所有または制御するグループ化要素が展開されているか畳まれているかを示します。
- {{domxref("Element.ariaHasPopup")}}
  - : {{domxref("DOMString")}} で [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) 属性を反映し、この要素によって引き起こされるメニューやダイアログのような対話型のポップアップ要素の有無と種類を示します。
- {{domxref("Element.ariaHidden")}}
  - : {{domxref("DOMString")}} で [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) 属性を反映し、この要素がアクセシビリティ API に公開されているかどうかを示します。
- {{domxref("Element.ariaKeyShortcuts")}}
  - : {{domxref("DOMString")}} で [`aria-keyshortcuts`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) 属性を反映し、要素を活性化したりフォーカスを与えたりするために作者が実装したキーボードショートカットを示します。
- {{domxref("Element.ariaLabel")}}
  - : {{domxref("DOMString")}} で [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性を反映し、現在の要素をラベル付けする文字列値を定義します。
- {{domxref("Element.ariaLevel")}}
  - : {{domxref("DOMString")}} で [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-level) 属性を反映し、構造内の要素の階層レベルを定義します。
- {{domxref("Element.ariaLive")}}
  - : {{domxref("DOMString")}} で [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-live) 属性を反映し、この要素が更新されること、ユーザーエージェント、支援技術、ユーザーがライブ領域から期待できる更新の種類を記述します。
- {{domxref("Element.ariaModal")}}
  - : {{domxref("DOMString")}} で [`aria-modal`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-modal) 属性を反映し、要素が表示されたときにモーダルであるかどうかを示します。
- {{domxref("Element.ariaMultiline")}}
  - : {{domxref("DOMString")}} で [`aria-multiline`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) 属性を反映し、テキストボックスが複数行の入力を受け入れるか、一行のみを受け入れるかを示します。
- {{domxref("Element.ariaMultiSelectable")}}
  - : {{domxref("DOMString")}} で [`aria-multiselectable`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) 属性を反映し、ユーザーが現在の選択可能な子孫から複数の項目を選択できることを示します。
- {{domxref("Element.ariaOrientation")}}
  - : {{domxref("DOMString")}} で [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) 属性を反映し、要素の方向が水平、垂直、または不明/曖昧であることを示す。
- {{domxref("Element.ariaPlaceholder")}}
  - : {{domxref("DOMString")}} で [`aria-placeholder`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) 属性を反映し、コントロールに値がない場合にユーザーのデータ入力を支援するための短いヒントを定義します。
- {{domxref("Element.ariaPosInSet")}}
  - : {{domxref("DOMString")}} で [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) 属性を反映し、リストアイテムまたはツリーアイテムの現在のセットにおける要素の数または位置を定義します。
- {{domxref("Element.ariaPressed")}}
  - : {{domxref("DOMString")}} で [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 属性を反映し、トグルボタンの現在の「押された」状態を示します。
- {{domxref("Element.ariaReadOnly")}}
  - : {{domxref("DOMString")}} で [`aria-readonly`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) 属性を反映し、要素が編集不可能であることを示すが、それ以外は操作可能であることを示します。
- {{domxref("Element.ariaRelevant")}}
  - : {{domxref("DOMString")}} で [`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) 属性を反映し、ライブリージョン内のアクセシビリティツリーが変更された場合に、ユーザエージェントがどのような通知を行うかを示します。これは、 `aria-live` リージョン内のどのような変更が関連性があり、アナウンスされるべきかを記述するために使用されます。
- {{domxref("Element.ariaRequired")}}
  - : {{domxref("DOMString")}} で [`aria-required`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-required) 属性を反映し、フォームを送信する前に要素にユーザーの入力が必要であることを示します。
- {{domxref("Element.ariaRoleDescription")}}
  - : {{domxref("DOMString")}} で [`aria-roledescription`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) 属性を反映し、要素の役割について、人間が読める、著者がローカライズした説明を定義します。
- {{domxref("Element.ariaRowCount")}}
  - : {{domxref("DOMString")}} で [`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) 属性を反映し、テーブル、グリッド、ツリーグリッドの行の総数を定義します。
- {{domxref("Element.ariaRowIndex")}}
  - : {{domxref("DOMString")}} で [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) 属性を反映し、テーブル、グリッド、ツリーグリッド内の行の総数に対する要素の行インデックスまたは位置を定義します。
- {{domxref("Element.ariaRowIndexText")}}
  - : {{domxref("DOMString")}} で [`aria-rowindextext`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) 属性を反映し、 aria-rowindex の代替となる人間が読めるテキストを定義しています。
- {{domxref("Element.ariaRowSpan")}}
  - : {{domxref("DOMString")}} で [`aria-rowspan`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) 属性を反映し、テーブル、グリッド、ツリーグリッド内のセルまたはグリッドセルがカバーする行数を定義します。
- {{domxref("Element.ariaSelected")}}
  - : {{domxref("DOMString")}} で [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-selected) 属性を反映し、選択状態を持つ要素の現在の「選択された」状態を示します。
- {{domxref("Element.ariaSetSize")}}
  - : {{domxref("DOMString")}} で [`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) 属性を反映し、現在のリストアイテムまたはツリーアイテムのセットのアイテム数を定義します。
- {{domxref("Element.ariaSort")}}
  - : {{domxref("DOMString")}} で [`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-sort) 属性を反映し、テーブルやグリッドのアイテムが昇順または降順でソートされるかどうかを示します。
- {{domxref("Element.ariaValueMax")}}
  - : {{domxref("DOMString")}} で [`aria-valueMax`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) 属性を反映し、 range ウィジェットの最大許容値を定義します。
- {{domxref("Element.ariaValueMin")}}
  - : {{domxref("DOMString")}} で [`aria-valueMin`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) 属性を反映し、 range ウィジェットに許容される最小値を定義します。
- {{domxref("Element.ariaValueNow")}}
  - : {{domxref("DOMString")}} で [`aria-valueNow`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) 属性を反映し、 range ウィジェットの現在の値を定義します。
- {{domxref("Element.ariaValueText")}}
  - : {{domxref("DOMString")}} で [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) 属性を反映し、 range ウィジェットの aria-valuenow の代替となる人間が読めるテキストを定義します。

## メソッド

_`Element` は親である {{DOMxRef("Node")}}、およびその親である {{DOMxRef("EventTarget")}} からメソッドを継承しています。_

- {{DOMxRef("EventTarget.addEventListener()")}}
  - : この要素、特定のイベント型を扱うイベントハンドラーを登録します。
- {{DOMxRef("Element.after()")}}
  - : {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトをこの `Element` の親の子ノードリストの中、 `Element` の直後に追加します。
- {{DOMxRef("Element.attachShadow()")}}
  - : 指定した要素にシャドウ DOM ツリーを結びつけて、その {{DOMxRef("ShadowRoot")}} への参照を返します。
- {{DOMxRef("Element.animate()")}} {{Experimental_Inline}}
  - : この要素でアニメーションを作成および実行するためのショートカットメソッドです。作成した Animation オブジェクトのインスタンスを返します。
- {{DOMxRef("Element.append()")}}
  - : この要素の最後の子の後に、一連の {{domxref("Node")}} オブジェクトまたは {{domxref("DOMString")}} オブジェクトを挿入します。
- {{DOMxRef("Element.before()")}}
  - : {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトをこの `Element` の親の子ノードリストの中、 `Element` の直前に追加します。
- {{DOMxRef("Element.closest()")}}
  - : {{DOMxRef("Element")}} 型で、引数に指定したセレクターによって選択される要素がもっとも近い祖先要素（または当該要素自身）を返します。
- {{DOMxRef("Element.createShadowRoot()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : この要素に[シャドウ DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM) を作成し、シャドウホストにします。 {{DOMxRef("ShadowRoot")}} を返します。
- {{DOMxRef("Element.computedStyleMap()")}} {{Experimental_Inline}}
  - : {{DOMxRef("StylePropertyMapReadOnly")}} インターフェイスで、 {{DOMxRef("CSSStyleDeclaration")}} に代わる、CSS 宣言ブロックを読み取り専用で表現したものを返します。
- {{DOMxRef("EventTarget.dispatchEvent()")}}
  - : DOM 内のこのノードにイベントを送ります。そして、イベントをキャンセルしたハンドラーがないかを示す論理値を返します。
- {{DOMxRef("Element.getAnimations()")}} {{Experimental_Inline}}
  - : 要素でアクティブな Animation オブジェクトの配列を返します。
- {{DOMxRef("Element.getAttribute()")}}
  - : 現在ノードから指定された名前付きの属性値を取得して文字列で返します。
- {{DOMxRef("Element.getAttributeNames()")}}
  - : 現在の要素の属性名の配列を返します。
- {{DOMxRef("Element.getAttributeNode()")}}
  - : 現在のノードから、指定された属性のノード表現を取得し、 {{DOMxRef("Attr")}} として返します。
- {{DOMxRef("Element.getAttributeNodeNS()")}}
  - : 指定された名前と名前空間を持つ属性のノード表現を現在のノードから取得し、それを {{DOMxRef("Attr")}} として返します。
- {{DOMxRef("Element.getAttributeNS()")}}
  - : 現在のノードから指定された名前と名前空間を持つ属性値を取得して、文字列で返します。
- {{DOMxRef("Element.getBoundingClientRect()")}}
  - : この要素のサイズと、ビューポートにおける位置を返します。
- {{domxref("Element.getBoxQuads()")}} {{experimental_inline}}
  - : このノードの CSS フラグメントを表す {{domxref("DOMQuad")}} オブジェクトのリストを返します。
- {{DOMxRef("Element.getClientRects()")}}
  - : クライアント領域内のテキストの各行の外接矩形 (bounding rectangle) の集合を返します。
- {{DOMxRef("Element.getElementsByClassName()")}}
  - : 生きた {{DOMxRef("HTMLCollection")}} で、現在の要素から、引数に指定したクラス名のリストに該当するすべての子孫要素を生きた {{DOMxRef("HTMLCollection")}} で、返します。
- {{DOMxRef("Element.getElementsByTagName()")}}
  - : 現在要素から、特定のタグ名を持つすべての子孫要素の集合を取得して生きた {{DOMxRef("HTMLCollection")}} で返します。
- {{DOMxRef("Element.getElementsByTagNameNS()")}}
  - : 生きた {{DOMxRef("HTMLCollection")}} で、現在要素から、特定のタグ名と名前空間を持つすべての子孫要素の集合を取得して、生きた {{DOMxRef("HTMLCollection")}} で返します。
- {{DOMxRef("Element.hasAttribute()")}}
  - : 要素が指定された指定された属性を持っているか否かを示す論理値を返します。
- {{DOMxRef("Element.hasAttributeNS()")}}
  - : 要素が指定された名前空間内に指定された属性を持っているか否かを示す論理値を返します。
- {{DOMxRef("Element.hasAttributes()")}}
  - : 要素が現在 1 つ以上の属性をもっているかを示す論理値を返します。
- {{DOMxRef("Element.hasPointerCapture()")}}
  - : 呼び出された要素が、指定されたポインター ID によって識別されるポインターのポインターキャプチャを持っているかどうかを示します。
- {{DOMxRef("Element.insertAdjacentElement()")}}
  - : メソッドを実行した要素に対して相対的な指定位置に、要素ノードを挿入します。
- {{DOMxRef("Element.insertAdjacentHTML()")}}
  - : テキストを HTML または XML として解釈し、解釈結果のノードをツリーの指定した位置に挿入します。
- {{DOMxRef("Element.insertAdjacentText()")}}
  - : メソッドを実行した要素に対して相対的な指定位置に、テキストノードを挿入します。
- {{DOMxRef("Element.matches()")}}
  - : 要素が指定されたセレクター文字列で選択されるか否かを示す論理値を返します。
- {{DOMxRef("Element.prepend()")}}
  - : この要素の最初の子の前に、一連の {{domxref("Node")}} オブジェクトまたは {{domxref("DOMString")}} オブジェクトを挿入します。
- {{DOMxRef("Element.querySelector()")}}
  - : 要素に対して、指定したセレクターに一致する最初の {{DOMxRef("Node")}} を返します。
- {{DOMxRef("Element.querySelectorAll()")}}
  - : 要素に対して、指定したセレクターに一致するノードの {{DOMxRef("NodeList")}} を返します。
- {{DOMxRef("Element.releasePointerCapture()")}}
  - : 以前に特定の{{DOMxRef("PointerEvent","ポインターイベント")}}向けに設定したポインターキャプチャーを解放 (停止) します。
- {{DOMxRef("Element.remove()")}}
  - : 親要素の子リストから、要素を取り除きます。
- {{DOMxRef("Element.removeAttribute()")}}
  - : 現在ノードから，指定された名前を持つ属性を取り除きます。
- {{DOMxRef("Element.removeAttributeNode()")}}
  - : 現在のノードから名前の付いた属性のノード表現を取り除きます。
- {{DOMxRef("Element.removeAttributeNS()")}}
  - : 現在ノードから，指定された名前と名前空間を持つ属性を取り除きます。
- {{DOMxRef("EventTarget.removeEventListener()")}}
  - : 要素からイベントリスナーを取り除きます。
- {{DOMxRef("Element.replaceChildren()")}}
  - : {{domxref("Node")}} の既存の子を指定された新しい一連の子に置き換えます。
- {{DOMxRef("Element.replaceWith()")}}
  - : 親の子リストの要素を、一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトで置き換えます。
- {{DOMxRef("Element.requestFullscreen()")}} {{Experimental_Inline}}
  - : 要素を全画面表示するよう、ブラウザーへ非同期的に要求します。
- {{DOMxRef("Element.requestPointerLock()")}} {{Experimental_Inline}}
  - : 指定した要素でポインターをロックするよう、非同期的に要求できます。
- {{domxref("Element.scroll()")}}
  - : 指定された要素の中で特定の座標のセットへスクロールします。
- {{domxref("Element.scrollBy()")}}
  - : 指定された量だけ要素をスクロールします。
- {{DOMxRef("Element.scrollIntoView()")}} {{Experimental_Inline}}
  - : 要素がビューの内側に来るまでページをスクロールします。
- {{domxref("Element.scrollTo()")}}
  - : 指定された要素の中で特定の座標のセットへスクロールします。
- {{DOMxRef("Element.setAttribute()")}}
  - : 現在ノードに、指定された名前を持つ属性値を設定します。
- {{DOMxRef("Element.setAttributeNode()")}}
  - : 現在のノードから指定された属性のノード表現を設定します。
- {{DOMxRef("Element.setAttributeNodeNS()")}}
  - : 指定された名前と名前空間を持つ属性のノード表現を、現在のノードから設定します。
- {{DOMxRef("Element.setAttributeNS()")}}
  - : 現在ノードに、指定された名前と名前空間を持つ属性値を設定します。
- {{DOMxRef("Element.setCapture()")}} {{Non-standard_Inline}}{{Deprecated_Inline}}
  - : マウスイベントキャプチャーを設定し、すべてのマウスイベントをこの要素にリダイレクトします。
- {{DOMxRef("Element.setPointerCapture()")}}
  - : 指定された要素を、以降の[ポインターイベント](/ja/docs/Web/API/Pointer_events)のキャプチャー対象として指定します。
- {{DOMxRef("Element.toggleAttribute()")}}
  - : 論理属性のオンオフを切り替えます。属性が存在していれば削除、属性が存在していなければ追加します。

## イベント

これらのイベントを待ち受けするには、 `addEventListener()` を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかします。

- {{domxref("HTMLDialogElement/cancel_event", "cancel")}}

  - : ユーザーがブラウザーに、現在開いているダイアログを閉じたいと指示したときに {{HTMLElement("dialog")}} に発行されます。ブラウザーがこのイベントを発行させる可能性があるのは、例えばユーザーが <kbd>Esc</kbd> キーを押したり、ブラウザーの UI の一部である「ダイアログを閉じる」ボタンをクリックしたりした場合です。 {{domxref("GlobalEventHandlers/oncancel", "oncancel")}} プロパティからも利用できます。
- {{domxref("Element/error_event", "error")}}
  - : リソースの読み込みに失敗したか、利用できなかった場合に発行されます。例えば、スクリプトに実行エラーがあった場合や、画像が見つからなかった場合、無効であった場合などです。
    {{domxref("GlobalEventHandlers/onerror", "onerror")}} プロパティからも利用できます。
- {{domxref("Element/scroll_event", "scroll")}}
  - : 文書のビューまたは要素がスクロールしたときに発行されます。
    {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}} プロパティからも利用できます。
- {{domxref("Element/select_event", "select")}}
  - : いくらかのテキストが選択されたときに発行されます。
 {{DOMxRef("GlobalEventHandlers.onselect", "onselect")}} プロパティからも利用できます。
- {{domxref("Element/show_event", "show")}}
  - : {{domxref("Element/contextmenu_event", "contextmenu")}} イベントが [`contextmenu`](/ja/docs/Web/HTML/Global_attributes/contextmenu) 属性 {{deprecated_inline}} を持つ要素で発生したか、バブリングで到達した場合に発行されます。
    {{DOMxRef("GlobalEventHandlers.onshow", "onshow")}} プロパティからも利用できます。
- {{domxref("Element/wheel_event","wheel")}}
  - : ユーザーがポインティングデバイス（普通はマウス）のホイールボタンを回転させたときに発行されます。
    {{DOMxRef("GlobalEventHandlers.onwheel", "onwheel")}} プロパティからも利用できます。
- {{domxref("Element/securitypolicyviolation_event","securitypolicyviolation")}}
  - : [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)の違反があった場合に発行されます。
    グローバルの {{DOMxRef("GlobalEventHandlers.onsecuritypolicyviolation", "onsecuritypolicyviolation")}} プロパティからも利用できます。これは要素と {{domxref("Document")}} と {{domxref("Window")}} の各オブジェクトで利用できます。

### クリップボードイベント

- {{domxref("Element/copy_event", "copy")}}
  - : ユーザーがブラウザーのユーザーインターフェイスを通して、コピー操作を行ったときに発行されます。
    {{domxref("HTMLElement/oncopy", "oncopy")}} プロパティからも利用できます。
- {{domxref("Element/cut_event", "cut")}}
  - : ユーザーがブラウザーのユーザーインターフェイスを通して、切り取り操作を行ったときに発行されます。
    {{domxref("HTMLElement/oncut", "oncut")}} プロパティからも利用できます。
- {{domxref("Element/paste_event", "paste")}}
  - : ユーザーがブラウザーのユーザーインターフェイスを通して、貼り付け操作を行ったときに発行されます。
    {{domxref("HTMLElement/onpaste", "onpaste")}} プロパティからも利用できます。

### 構成イベント

- {{domxref("Element/compositionend_event", "compositionend")}}
  - : {{glossary("input method editor", "インプットメソッドエディター")}}のようなテキスト構成システムで、現在の入力セッションが完了またはキャンセルされたときに発行されます。
- {{domxref("Element/compositionstart_event", "compositionstart")}}
  - : {{glossary("input method editor", "インプットメソッドエディター")}}のようなテキスト構成システムで、新しい入力セッションを始まったときに発行されます。
- {{domxref("Element/compositionupdate_event", "compositionupdate")}}
  - : {{glossary("input method editor", "インプットメソッドエディター")}}のようなテキスト構成システムによって制御されている入力セッションのコンテキストに、新しい文字が入力されたときに発行されます。

### フォーカスイベント

- {{domxref("Element/blur_event", "blur")}}
  - : 要素がフォーカスを失ったときに発行されます。
    {{domxref("GlobalEventHandlers/onblur", "onblur")}} プロパティからも利用できます。
- {{domxref("Element/focus_event", "focus")}}
  - : 要素がフォーカスを受け取ったときに発行されます。
    {{domxref("GlobalEventHandlers/onfocus", "onfocus")}} プロパティからも利用できます。
- {{domxref("Element/focusin_event", "focusin")}}
  - : 要素がフォーカスを受け取ろうとしているときに発行されます。
- {{domxref("Element/focusout_event", "focusout")}}
  - : 要素がフォーカスを失おうとしているときに発行されます。

### 全画面イベント

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : [全画面](/ja/docs/Web/API/Fullscreen_API/Guide)モードへの移行時または終了時に、 {{domxref("Element")}} に送られます。
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : [全画面](/ja/docs/Web/API/Fullscreen_API/Guide)モードへの移行または終了を試みている中でエラーが発生したときに、 `Element` に送られます。

### キーボードイベント

- `{{domxref("Element/keydown_event", "keydown")}}`
  - : キーが押されたときに発行されます。
 {{domxref("GlobalEventHandlers/onkeydown", "onkeydown")}} プロパティからも利用できます。
- `{{domxref("Element/keypress_event", "keypress")}}`
  - : 文字の値を発行させるキーが押されたときに発行されます。 {{deprecated_inline}}
 {{domxref("GlobalEventHandlers/onkeypress", "onkeypress")}} プロパティからも利用できます。
- `{{domxref("Element/keyup_event", "keyup")}}`
  - : キーが離されたときに発行されます。
 {{domxref("GlobalEventHandlers/onkeyup", "onkeyup")}} プロパティからも利用できます。

### マウスイベント

- {{domxref("Element/auxclick_event", "auxclick")}}
  - : ポインティングデバイスの第一ボタン以外のボタン（例えば、マウスの左ボタン以外のボタン）が要素上で押されて離されたときに発行されます。
    {{domxref("GlobalEventHandlers/onauxclick", "onauxclick")}} プロパティからも利用できます。
- {{domxref("Element/click_event", "click")}}
  - : ポインティングデバイスのボタン（例えば、マウスの第一ボタン）が単一の要素上で押されて離されたときに発行されます。
    {{domxref("GlobalEventHandlers/onclick", "onclick")}} プロパティからも利用できます。
- {{domxref("Element/contextmenu_event", "contextmenu")}}
  - : ユーザーがコンテキストメニューを開こうとしたときに発行されます。
    {{domxref("GlobalEventHandlers/oncontextmenu", "oncontextmenu")}} プロパティからも利用できます。
- {{domxref("Element/dblclick_event", "dblclick")}}
  - : ポインティングデバイスのボタン（例えば、マウスの第一ボタン）が単一の要素上で 2 回クリックされたときに発行されます。
    {{domxref("GlobalEventHandlers/ondblclick", "ondblclick")}} プロパティからも利用できます。
- {{domxref("Element/DOMActivate_event", "DOMActivate")}} {{Deprecated_Inline}}
  - : 要素が、例えばマウスのクリックやキーの押下によってアクティブになったときに発行されます。
- {{domxref("Element/mousedown_event", "mousedown")}}
  - : ポインティングデバイスのボタンが要素上で押されたときに発行されます。
    {{domxref("GlobalEventHandlers/onmousedown", "onmousedown")}} プロパティからも利用できます。
- {{domxref("Element/mouseenter_event", "mouseenter")}}
  - : ポインティングデバイス（ふつうはマウス）が、リスナーが割り当てられた要素の上へ移動したときに発行されます。
    {{domxref("GlobalEventHandlers/onmouseenter", "onmouseenter")}} プロパティからも利用できます。
- {{domxref("Element/mouseleave_event", "mouseleave")}}
  - : ポインティングデバイス（ふつうはマウス）が、リスナーが割り当てられた要素の外へ移動したときに発行されます。
    {{domxref("GlobalEventHandlers/onmouseleave", "onmouseleave")}} プロパティからも利用できます。
- {{domxref("Element/mousemove_event", "mousemove")}}
  - : ポインティングデバイス（ふつうはマウス）が、要素の上を移動したときに発行されます。
    {{domxref("GlobalEventHandlers/onmousemove", "onmousemove")}} プロパティからも利用できます。
- {{domxref("Element/mouseout_event", "mouseout")}}
  - : ポインティングデバイス（ふつうはマウス）が、リスナーが割り当てられた要素またはその子要素の外へ移動したときに発行されます。
    {{domxref("GlobalEventHandlers/onmouseout", "onmouseout")}} プロパティからも利用できます。
- {{domxref("Element/mouseover_event", "mouseover")}}
  - : ポインティングデバイス（ふつうはマウス）が、リスナーが割り当てられた要素またはその子要素の上を移動したときに発行されます。
    {{domxref("GlobalEventHandlers/onmouseover", "onmouseover")}} プロパティからも利用できます。
- {{domxref("Element/mouseup_event", "mouseup")}}
  - : ポインティングデバイスのボタンが要素の上で離されたときに発行されます。
    {{domxref("GlobalEventHandlers/onmouseup", "onmouseup")}} プロパティからも利用できます。
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
  - : trackpadtouchscreen の上の圧力が変化するたびに発行されます。
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
  - : 「強制クリック」と判断されるのに十分な圧力があった直後の mousedown イベントの後で発行されます。
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}
  - : {{domxref("Element/mousedown_event", "mousedown")}} イベントの前に発行されます。
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
  - : 「強制クリック」が終了したといえるほど圧力が減少した直後の {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} イベントの後で発行されます。

### タッチイベント

- {{domxref("Element/touchcancel_event", "touchcancel")}}
  - : 1 つ以上のタッチ点が実装依存の理由により破棄された（例えば、タッチ点が多く作られすぎた）場合に発行されます。
    {{domxref("GlobalEventHandlers/ontouchcancel", "ontouchcancel")}} プロパティからも利用できます。
- {{domxref("Element/touchend_event", "touchend")}}
  - : 1 つ以上のタッチ点がタッチ面から取り除かれたときに発行されます。
    {{domxref("GlobalEventHandlers/ontouchend", "ontouchend")}} プロパティからも利用できます。
- {{domxref("Element/touchmove_event", "touchmove")}}
  - : 1 つ以上のタッチ点がタッチ面上で移動したときに発行されます。
    {{domxref("GlobalEventHandlers/ontouchmove", "ontouchmove")}} プロパティからも利用できます。
- {{domxref("Element/touchstart_event", "touchstart")}}
  - : 1 つ以上のタッチ点がタッチ面に配置されたときに発行されます。
    {{domxref("GlobalEventHandlers/ontouchstart", "ontouchstart")}} プロパティからも利用できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
