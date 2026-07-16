---
title: グローバル属性
slug: Web/HTML/Reference/Global_attributes
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

**グローバル属性**は、すべての HTML 要素で共通の属性です。すべての要素で使用できますが、要素によっては効果がないこともあります。

グローバル属性は、標準仕様で定義されていない要素を含む、すべての [HTML 要素](/ja/docs/Web/HTML/Reference/Elements)で指定することができます。つまり、その要素を使用することで文書が HTML5 に準拠しなくなるような標準外の要素であっても、これらの属性は受け入れなければなりません。例えば、 `<foo hidden>…</foo>` とマークアップされたコンテンツは、 `<foo>` が妥当な HTML 要素ではなくても、 HTML5 準拠のブラウザーは非表示にします。

基本的な HTML グローバル属性に加えて、以下のグローバル属性も存在します。

- `xml:lang` と `xml:base`。これらは XHTML 仕様から継承したもので非推奨ですが、互換性のために残されています。
- アクセシビリティを確保するために使用される、 ARIA の [`role`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles) 属性および複数の [`aria-*`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes) 状態およびプロパティ。
- [イベントハンドラー属性](#グローバルイベントハンドラー属性の一覧)は後述します。

## グローバル属性の一覧

- [`accesskey`](/ja/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : 現在の要素に対するキーボードショートカットを生成するヒントを与えます。この属性の値は、空白区切りの文字のリストです。ブラウザーは、この文字リストの中から、コンピューターのキーボードレイアウトに存在する最初の文字を使用します。
- [`anchor`](/ja/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}
  - : 位置指定要素をアンカー要素に関連付けます。この属性の値は、位置指定要素をアンカーする要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 値です。これにより、 [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)を使用して要素を位置指定することができます。
- [`autocapitalize`](/ja/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : 入力されたテキストを自動的に大文字にするかどうか、大文字にする場合はその方法を制御します。
- [`autocorrect`](/ja/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : 入力テキストのスペルミスを自動的に修正するかどうかを制御します。
    これは、 {{HTMLElement("input")}} 要素の [`type="password"`](/ja/docs/Web/HTML/Reference/Elements/input/password)、[`type="email"`](/ja/docs/Web/HTML/Reference/Elements/input/email)、[`type="url"`](/ja/docs/Web/HTML/Reference/Elements/input/url) を除いたテキストが編集可能な要素に適用することができます。
- [`autofocus`](/ja/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : ページの読み込み時、またはその一部である {{HTMLElement("dialog")}} が表示された時点で、その要素がフォーカスされるようにすることを示す。この属性は論理値で、初期値は false です。
- [`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class)
  - : 要素のクラスの空白区切りリストです。 CSS の [クラスセレクター](/ja/docs/Web/CSS/Reference/Selectors/Class_selectors) や JavaScript の {{DOMxRef("Document.getElementsByClassName()")}} メソッドのような関数を使えば、特定の要素を選択したりアクセスしたりすることができます。
- [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable)
  - : ユーザーによる要素の編集が可能かどうかを示す[列挙型](/ja/docs/Glossary/Enumerated)属性です。編集可能な場合、ブラウザーはその要素を編集可能なものに変更します。この属性の値は、以下のどちらかでなければなりません。
    - `true` または 空文字列: 要素が編集可能であることを示す
    - `false`: 要素は編集不可であることを示す
    - `plaintext-only`: これは、要素の生テキストは編集可能であるが、リッチテキストの書式設定は無効であることを示します。

- [`data-*`](/ja/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : これらの属性はカスタムデータ属性と呼ばれており、 [HTML](/ja/docs/Web/HTML) とその {{glossary("DOM")}} 表現との間で、固有の情報を交換できるようにします。すべてのカスタムデータは、その属性を設定した要素の {{DOMxRef("HTMLElement")}} インターフェイスを通して使用することができます。 {{DOMxRef("HTMLElement.dataset")}} プロパティでカスタムデータにアクセスできます。
- [`dir`](/ja/docs/Web/HTML/Reference/Global_attributes/dir)
  - : 要素のテキストの書字方向を示す、列挙型属性です。以下の値を使用することができます。
    - `ltr`: _left to right_ を表し、左書きの言語 (日本語、英語など) に対して使用します。
    - `rtl`: _right to left_ を表し、右書きの言語 (アラビア語など) に対して使用します。
    - `auto`: ユーザーエージェントに決定させます。要素の中の文字を、書字方向を強く決定する文字が見つかるまで解析し、その方向を要素全体に適用する基本的なアルゴリズムを使用します。

- [`draggable`](/ja/docs/Web/HTML/Reference/Global_attributes/draggable)
  - : [ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) を使用して要素をドラッグすることができるかを示す列挙型属性です。以下の値を使用することができます。
    - `true`: 要素がドラッグ可能であることを示す
    - `false`: 要素がドラッグ不可であることを示す

- [`enterkeyhint`](/ja/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : 仮想キーボードの Enter キーにどのようなアクションラベル（またはアイコン）を表示するかを指示します。
- [`exportparts`](/ja/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : シャドウ部品を入れ子になったシャドウツリーから軽いツリーへ変換しながらエクスポートするために使用します。
- [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : 列挙型の属性で、要素がまだ、あるいはもはや関連性がないことを示します。例えば、ログイン処理が完了するまで使えない要素を隠すために使用できます。ブラウザーはこの要素を表示しません。この属性は、表示することが正当なコンテンツを隠すために使用してはいけません。
- [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id)
  - : 文書全体で一意でなければならない識別子 (ID) を定義します。(フラグメント識別子を使った) リンク、スクリプト、 (CSS での) スタイルづけなど要素を特定するために使用されます。
- [`inert`](/ja/docs/Web/HTML/Reference/Global_attributes/inert)
  - : ブラウザーがその要素に対するユーザー入力イベントを無視するようにする論理値です。クリックイベントが存在している場合に有用です。
- [`inputmode`](/ja/docs/Web/HTML/Reference/Global_attributes/inputmode)
  - : この要素やその内容を編集する時に使用する仮想キーボードの種類の構成に関するヒントをブラウザーに与えます。主に {{HTMLElement("input")}} 要素で使用されますが、 [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) モードにあるすべての要素で使用することができます。
- [`is`](/ja/docs/Web/HTML/Reference/Global_attributes/is)
  - : 標準の HTML 要素が、登録したカスタマイズされた組み込み要素のようにふるまうように指定することができます（詳しくは[カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)を参照）。

> [!NOTE]
> `item*` 属性は、 [WHATWG HTML Microdata 仕様](https://html.spec.whatwg.org/multipage/microdata.html#microdata)の一部です。

- [`itemid`](/ja/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : 項目の一意でグローバルな識別子です。
- [`itemprop`](/ja/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : 項目にプロパティを追加するために使用します。すべての HTML 要素で `itemprop` 属性を指定することができ、この `itemprop` は名前と値の組で構成されます。
- [`itemref`](/ja/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : `itemscope` 属性を持つ要素の子孫以外のプロパティは、 `itemref` を使用して項目に関連付けることができます。文書中の他の場所で追加のプロパティがある要素の id (`itemid` ではない) の一覧を提供します。
- [`itemscope`](/ja/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` は (通常) [`itemtype`](/ja/docs/Web/HTML/Reference/Global_attributes/itemtype) とともに、ブロックに含まれている HTML が特定の項目に関するものであることを指定します。 `itemscope` は項目を作成し、それに関連付けられる `itemtype` のスコープを定義します。 `itemtype` は、項目やそのプロパティの文脈を説明する語彙 ([schema.org](https://schema.org/) など) の有効な URL です。
- [`itemtype`](/ja/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : データ構造内の `itemprop` （項目のプロパティ）を定義するために使う、語彙の URL を指定します。 [`itemscope`](/ja/docs/Web/HTML/Reference/Global_attributes/itemscope) は、 `itemtype` で設定した語彙がデータ構造内でアクティブになるスコープを設定するために使用します。
- [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang)
  - : 要素の言語を定義します。編集不可能な要素を記述している言語、または編集可能な要素に記述されるべき言語を定義します。この属性の値には、有効な{{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}を指定してください。`xml:lang` はこの要素より優先します。
- [`nonce`](/ja/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : 暗号学的{{Glossary("Nonce", "ノンス")}} ("number user once") で、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)が取得を許可するかどうかを決定するために使用することがあります。
- [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part)
  - : 要素のパート名の空白区切りによるリストです。パート名を利用すると、 CSS がシャドウツリー内にある特定の要素を {{CSSxRef("::part")}} 擬似要素を使用することで選択し、スタイル付けすることができます。
- [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover)
  - : 要素をポップオーバー要素として指定するために使用します（{{domxref("Popover API", "ポップオーバーAPI", "", "nocode")}} 参照）。ポップオーバー要素は、呼び出す/コントロール要素（すなわち、[`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget)属性を持つ `<button>` や `<input type="button">`）、または {{domxref("HTMLElement.showPopover()")}} 呼び出しによって開かれるまで、 `display: none` によって非表示になります。
- [`role`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : ロールはコンテンツの意味づけを定義し、スクリーンリーダーや他のツールが、その種類のオブジェクトに対するユーザーの期待に沿った方法でオブジェクトを表示し、対話を支援することを可能にします。ロールは `role="role_type"` を使って HTML 要素に追加します。ここで `role_type` は ARIA 仕様書でのロールの名前です。
- [`slot`](/ja/docs/Web/HTML/Reference/Global_attributes/slot)
  - : [シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) のシャドウツリー内のスロットを、要素に割り当てます。`slot` 属性を持つ要素は、 `slot` 属性の値と一致する [`name`](/ja/docs/Web/HTML/Reference/Elements/slot#name) 属性の値を持つ {{HTMLElement("slot")}} 要素が生成したスロットに割り当てられます。
- [`spellcheck`](/ja/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : 列挙型属性で、要素でスペルチェックを行うかどうかを定義します。以下の値が利用できます。
    - 空文字列または `true`: 可能であればその要素でスペルチェックを行うことを示す
    - `false` は、その要素でスペルチェックを行わないことを示します。

- [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style)
  - : 要素に適用する [CSS](/ja/docs/Web/CSS) スタイル宣言を設定します。なお、スタイルは別のファイルで定義することが推奨されます。この属性と {{HTMLElement("style")}} 要素の主な用途は、例えばテストのために、すばやくスタイルを適用することです。
- [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : 要素が入力フォーカスを受け付ける (_focusable_ の) 場合に、順番的なキーボードナビゲーションに参加するかどうか、参加するならばどの位置に入るかを示す、整数値属性です。いくつかの値を取ることができます。
    - _負の数_: 要素はフォーカスを受け付けますが、順番的なキーボードナビゲーションでは到達できません。
    - `0`: 要素はフォーカスを受け付けて、順番的なキーボードナビゲーションで到達できます。その順番はプラットフォームの慣習に従って定義されます。
    - _正の数_: 要素はフォーカスを受け付けて、順番的なキーボードナビゲーションで到達できることを表します。その相対的な順序は属性の値で定義され、 [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) の数値の昇順にフォーカスを移します。複数の要素が同じ tabindex の値を持っている場合は、文書内における要素の相対的な位置に従います。

- [`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title)
  - : 要素に関するアドバイザリー情報を表すテキストを設定します。この情報は通常、ツールチップとしてユーザーに表示されますが、必ず表示されるとは限りません。
- [`translate`](/ja/docs/Web/HTML/Reference/Global_attributes/translate)
  - : 列挙型属性で、要素の属性値や子孫 {{DOMxRef("Text")}} ノードの値が、ページをローカライズするときに翻訳対象となるか、あるいは変更せずにおくかを指定します。以下の値を使用することができます。
    - 空文字列または `yes`: 要素が翻訳対象になることを示します。
    - `no`: 要素が翻訳対象にならないことを示します。

- [`virtualkeyboardpolicy`](/ja/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}
  - : {{Glossary("enumerated", "列挙型")}}属性で、タブレットやモバイル端末などのハードウェアキーボードが利用できない端末において、コンテンツが編集可能な要素（例えば、 {{htmlelement("input")}} や {{htmlelement("textarea")}} 要素、あるいは [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性を設定した要素）において画面上の仮想キーボードの動作を制御するために使用します。
    - `auto` または空文字列: 要素がフォーカスまたはタップされたときに、自動的に仮想キーボードを示します。
    - `manual`: 要素へのフォーカスやタップを仮想キーボードの状態から切り離します。

- [`writingsuggestions`](/ja/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
  - : {{glossary("enumerated", "列挙型")}}属性であり、ブラウザーが指定した入力補完を要素のスコープで有効にするかどうかを示します。
    - `false`: ブラウザーの入力補完を無効にします。
    - `true` または空文字列: 入力補間を有効にします。

## グローバルイベントハンドラー属性の一覧

HTML のイベントハンドラー属性は推奨されません。その動作については、[HTML 属性リファレンス](/ja/docs/Web/HTML/Reference/Attributes#イベントハンドラー属性)をご覧ください。

下記に挙げる属性はすべての要素に適用されますが、すべての要素で機能するわけではありません。例えば、`onvolumechange` という HTML 属性はすべての要素で受け入れられ、`volumechange` イベントのリスナーを登録しますが、ブラウザーによって発生する `volumechange` イベントを受け取るのはメディア要素のみです。その他の要素については、{{domxref("EventTarget.dispatchEvent()")}} を使用して手動でイベントを配信する必要があります。[属性によって](/ja/docs/Web/HTML/Reference/Elements/body#イベント属性)は {{HTMLElement("body")}} に指定できるものの、実際には `window` でのイベントを待ち受けるものもあります。

- [`onabort`](/ja/docs/Web/API/HTMLMediaElement/abort_event)
- [`onanimationcancel`](/ja/docs/Web/API/Element/animationcancel_event)
- [`onanimationend`](/ja/docs/Web/API/Element/animationend_event)
- [`onanimationiteration`](/ja/docs/Web/API/Element/animationiteration_event)
- [`onanimationstart`](/ja/docs/Web/API/Element/animationstart_event)
- [`onauxclick`](/ja/docs/Web/API/Element/auxclick_event)
- [`onbeforeinput`](/ja/docs/Web/API/Element/beforeinput_event)
- [`onbeforematch`](/ja/docs/Web/API/Element/beforematch_event)
- [`onbeforetoggle`](/ja/docs/Web/API/HTMLElement/beforetoggle_event)
- [`onblur`](/ja/docs/Web/API/Element/blur_event)
- [`oncancel`](/ja/docs/Web/API/HTMLInputElement/cancel_event)
- [`oncanplay`](/ja/docs/Web/API/HTMLMediaElement/canplay_event)
- [`oncanplaythrough`](/ja/docs/Web/API/HTMLMediaElement/canplaythrough_event)
- [`onchange`](/ja/docs/Web/API/HTMLElement/change_event)
- [`onclick`](/ja/docs/Web/API/Element/click_event)
- [`onclose`](/ja/docs/Web/API/HTMLDialogElement/close_event)
- [`oncommand`](/ja/docs/Web/API/HTMLElement/command_event)
- [`oncontentvisibilityautostatechange`](/ja/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [`oncontextlost`](/ja/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`oncontextmenu`](/ja/docs/Web/API/Element/contextmenu_event)
- [`oncontextrestored`](/ja/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- [`oncopy`](/ja/docs/Web/API/Element/copy_event)
- [`oncuechange`](/ja/docs/Web/API/HTMLTrackElement/cuechange_event)
- [`oncut`](/ja/docs/Web/API/Element/cut_event)
- [`ondblclick`](/ja/docs/Web/API/Element/dblclick_event)
- [`ondrag`](/ja/docs/Web/API/HTMLElement/drag_event)
- [`ondragend`](/ja/docs/Web/API/HTMLElement/dragend_event)
- [`ondragenter`](/ja/docs/Web/API/HTMLElement/dragenter_event)
- [`ondragleave`](/ja/docs/Web/API/HTMLElement/dragleave_event)
- [`ondragover`](/ja/docs/Web/API/HTMLElement/dragover_event)
- [`ondragstart`](/ja/docs/Web/API/HTMLElement/dragstart_event)
- [`ondrop`](/ja/docs/Web/API/HTMLElement/drop_event)
- [`ondurationchange`](/ja/docs/Web/API/HTMLMediaElement/durationchange_event)
- [`onemptied`](/ja/docs/Web/API/HTMLMediaElement/emptied_event)
- [`onended`](/ja/docs/Web/API/HTMLMediaElement/ended_event)
- [`onerror`](/ja/docs/Web/API/HTMLElement/error_event)
- [`onfocus`](/ja/docs/Web/API/Element/focus_event)
- [`onfocusin`](/ja/docs/Web/API/Element/focusin_event)
- [`onfocusout`](/ja/docs/Web/API/Element/focusout_event)
- [`onformdata`](/ja/docs/Web/API/HTMLFormElement/formdata_event)
- [`onfullscreenchange`](/ja/docs/Web/API/Element/fullscreenchange_event)
- [`onfullscreenerror`](/ja/docs/Web/API/Element/fullscreenerror_event)
- [`ongesturechange`](/ja/docs/Web/API/Element/gesturechange_event) {{non-standard_inline}}
- [`ongestureend`](/ja/docs/Web/API/Element/gestureend_event) {{non-standard_inline}}
- [`ongesturestart`](/ja/docs/Web/API/Element/gesturestart_event) {{non-standard_inline}}
- [`ongotpointercapture`](/ja/docs/Web/API/Element/gotpointercapture_event)
- [`oninput`](/ja/docs/Web/API/Element/input_event)
- [`oninvalid`](/ja/docs/Web/API/HTMLInputElement/invalid_event)
- [`onkeydown`](/ja/docs/Web/API/Element/keydown_event)
- [`onkeypress`](/ja/docs/Web/API/Element/keypress_event) {{deprecated_inline}}
- [`onkeyup`](/ja/docs/Web/API/Element/keyup_event)
- [`onload`](/ja/docs/Web/API/HTMLElement/load_event)
- [`onloadeddata`](/ja/docs/Web/API/HTMLMediaElement/loadeddata_event)
- [`onloadedmetadata`](/ja/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
- [`onloadstart`](/ja/docs/Web/API/HTMLMediaElement/loadstart_event)
- [`onlostpointercapture`](/ja/docs/Web/API/Element/lostpointercapture_event)
- [`onmousedown`](/ja/docs/Web/API/Element/mousedown_event)
- [`onmouseenter`](/ja/docs/Web/API/Element/mouseenter_event)
- [`onmouseleave`](/ja/docs/Web/API/Element/mouseleave_event)
- [`onmousemove`](/ja/docs/Web/API/Element/mousemove_event)
- [`onmouseout`](/ja/docs/Web/API/Element/mouseout_event)
- [`onmouseover`](/ja/docs/Web/API/Element/mouseover_event)
- [`onmouseup`](/ja/docs/Web/API/Element/mouseup_event)
- [`onmousewheel`](/ja/docs/Web/API/Element/mousewheel_event) {{deprecated_inline}} {{non-standard_inline}}
- [`onpaste`](/ja/docs/Web/API/Element/paste_event)
- [`onpause`](/ja/docs/Web/API/HTMLMediaElement/pause_event)
- [`onplay`](/ja/docs/Web/API/HTMLMediaElement/play_event)
- [`onplaying`](/ja/docs/Web/API/HTMLMediaElement/playing_event)
- [`onpointercancel`](/ja/docs/Web/API/Element/pointercancel_event)
- [`onpointerdown`](/ja/docs/Web/API/Element/pointerdown_event)
- [`onpointerenter`](/ja/docs/Web/API/Element/pointerenter_event)
- [`onpointerleave`](/ja/docs/Web/API/Element/pointerleave_event)
- [`onpointermove`](/ja/docs/Web/API/Element/pointermove_event)
- [`onpointerout`](/ja/docs/Web/API/Element/pointerout_event)
- [`onpointerover`](/ja/docs/Web/API/Element/pointerover_event)
- [`onpointerrawupdate`](/ja/docs/Web/API/Element/pointerrawupdate_event)
- [`onpointerup`](/ja/docs/Web/API/Element/pointerup_event)
- [`onprogress`](/ja/docs/Web/API/HTMLMediaElement/progress_event)
- [`onratechange`](/ja/docs/Web/API/HTMLMediaElement/ratechange_event)
- [`onreset`](/ja/docs/Web/API/HTMLFormElement/reset_event)
- [`onresize`](/ja/docs/Web/API/HTMLVideoElement/resize_event)
- [`onscroll`](/ja/docs/Web/API/Element/scroll_event)
- [`onscrollend`](/ja/docs/Web/API/Element/scrollend_event)
- [`onscrollsnapchange`](/ja/docs/Web/API/Element/scrollsnapchange_event) {{Experimental_Inline}}
- [`onscrollsnapchanging`](/ja/docs/Web/API/Element/scrollsnapchanging_event) {{Experimental_Inline}}
- [`onsecuritypolicyviolation`](/ja/docs/Web/API/Element/securitypolicyviolation_event)
- [`onseeked`](/ja/docs/Web/API/HTMLMediaElement/seeked_event)
- [`onseeking`](/ja/docs/Web/API/HTMLMediaElement/seeking_event)
- [`onselect`](/ja/docs/Web/API/HTMLInputElement/select_event)
- [`onselectionchange`](/ja/docs/Web/API/HTMLInputElement/selectionchange_event)
- [`onselectstart`](/ja/docs/Web/API/Node/selectstart_event)
- [`onslotchange`](/ja/docs/Web/API/HTMLSlotElement/slotchange_event)
- [`onstalled`](/ja/docs/Web/API/HTMLMediaElement/stalled_event)
- [`onsubmit`](/ja/docs/Web/API/HTMLFormElement/submit_event)
- [`onsuspend`](/ja/docs/Web/API/HTMLMediaElement/suspend_event)
- [`ontimeupdate`](/ja/docs/Web/API/HTMLMediaElement/timeupdate_event)
- [`ontoggle`](/ja/docs/Web/API/HTMLElement/toggle_event)
- [`ontouchcancel`](/ja/docs/Web/API/Element/touchcancel_event)
- [`ontouchend`](/ja/docs/Web/API/Element/touchend_event)
- [`ontouchmove`](/ja/docs/Web/API/Element/touchmove_event)
- [`ontouchstart`](/ja/docs/Web/API/Element/touchstart_event)
- [`ontransitioncancel`](/ja/docs/Web/API/Element/transitioncancel_event)
- [`ontransitionend`](/ja/docs/Web/API/Element/transitionend_event)
- [`ontransitionrun`](/ja/docs/Web/API/Element/transitionrun_event)
- [`ontransitionstart`](/ja/docs/Web/API/Element/transitionstart_event)
- [`onvolumechange`](/ja/docs/Web/API/HTMLMediaElement/volumechange_event)
- [`onwaiting`](/ja/docs/Web/API/HTMLMediaElement/waiting_event)
- [`onwebkitmouseforcechanged`](/ja/docs/Web/API/Element/webkitmouseforcechanged_event) {{non-standard_inline}}
- [`onwebkitmouseforcedown`](/ja/docs/Web/API/Element/webkitmouseforcedown_event) {{non-standard_inline}}
- [`onwebkitmouseforceup`](/ja/docs/Web/API/Element/webkitmouseforceup_event) {{non-standard_inline}}
- [`onwebkitmouseforcewillbegin`](/ja/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{non-standard_inline}}
- [`onwheel`](/ja/docs/Web/API/Element/wheel_event)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element")}} インターフェイスで、ほとんどのグローバル属性を調べることができます。
