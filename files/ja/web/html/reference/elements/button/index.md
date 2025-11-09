---
title: "<button>: ボタン要素"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

**`<button>`** は [HTML](/ja/docs/Web/HTML) の要素で、マウス、キーボード、指、音声コマンド、その他の支援技術で起動することができる操作可能要素です。起動すると、[フォーム](/ja/docs/Learn_web_development/Extensions/Forms)を送信したりダイアログを開いたりといった操作を実行します。

既定では、HTML のボタンは{{Glossary("user agent", "ユーザーエージェント")}}が実行されているホストのプラットフォームのスタイルと似ていますが、 [CSS](/ja/docs/Web/CSS) を使用してボタンの外見を変更することができます。

{{InteractiveExample("HTML デモ: &lt;button&gt;", "tabbed-shorter")}}

```html interactive-example
<button class="favorite styled" type="button">お気に入りに追加</button>
```

```css interactive-example
.styled {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 10px;
  background-color: tomato;
  background-image: linear-gradient(
    to top left,
    rgb(0 0 0 / 0.2),
    rgb(0 0 0 / 0.2) 30%,
    transparent
  );
  box-shadow:
    inset 2px 2px 3px rgb(255 255 255 / 0.6),
    inset -2px -2px 3px rgb(0 0 0 / 0.6);
}

.styled:hover {
  background-color: red;
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgb(255 255 255 / 0.6),
    inset 2px 2px 3px rgb(0 0 0 / 0.6);
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `autofocus`
  - : 論理属性で、ページ読み込み時にこのボタンが入力[フォーカス](/ja/docs/Web/API/HTMLElement/focus)を持つべきであることを指定します。**この属性を設定することができるのは、文書中の要素一つだけです。**

- `command`
  - : 制御ボタンの `<button>` によって制御される、 `commandfor` 属性で指定した要素に対して実行するアクションを指定します。実現可能な値は次のとおりです。
    - `"show-modal"`
      - : このボタンは、 {{htmlelement("dialog")}} をモーダルとして表示させます。ダイアログがすでにモーダルである場合は、何もしません。これは、 {{domxref("HTMLDialogElement.showModal()")}} メソッドを `<dialog>` 要素で呼び出すことと同じ意味の宣言的な方法です。
    - `"close"`
      - : このボタンは、 {{htmlelement("dialog")}} 要素を閉じます。ダイアログがすでに閉じられている場合、何もしません。これは、 {{domxref("HTMLDialogElement.close()")}} メソッドを `<dialog>` 要素で呼び出すことと同じ意味の宣言的な方法です。
    - `"request-close"`
      - : このボタンは、 {{domxref("HTMLDialogElement.cancel_event", "cancel")}} イベントを {{htmlelement("dialog")}} 要素上で発行し、ブラウザーにダイアログを閉じるよう要求し、続いて {{domxref("HTMLDialogElement.close_event", "close")}} イベントを発行します。これは `close` コマンドとは異なり、作成者は {{domxref("Event.preventDefault()")}} を `cancel` イベントに対して呼び出すことで `<dialog>` が閉じるのを防ぐことができます。ダイアログが既に閉じられている場合は、何も行われません。これは、 {{domxref("HTMLDialogElement.requestClose()")}} メソッドを `<dialog>` 要素に対して呼び出すことと同等の宣言的な方法です。
    - `"show-popover"`
      - : このボタンは、非表示のポップオーバーを表示します。すでに表示されているポップオーバーを表示しようとすると、何もしません。詳細については、{{domxref("Popover API", "ポップオーバー API", "", "nocode")}} を参照してください。これは、 `show` の値を [`popovertargetaction`](#popovertargetaction) 属性に設定することに相当し、ポップオーバー要素に対して {{domxref("HTMLElement.showPopover()")}} メソッドを呼び出すことと同じ意味の宣言的な方法です。
    - `"hide-popover"`
      - : このボタンは、表示されているポップオーバーを非表示にします。すでに非表示になっているポップオーバーを非表示にしようとすると、何もしません。詳細については、{{domxref("Popover API", "ポップオーバー API", "", "nocode")}} を参照してください。これは、 `hide` の値を [`popovertargetaction`](#popovertargetaction) 属性に設定することに相当し、ポップオーバー要素で {{domxref("HTMLElement.hidePopover()")}} メソッドを呼び出すことと同じ意味の宣言的な方法です。
    - `"toggle-popover"`
      - : このボタンは、ポップオーバーの表示と非表示を切り替えます。ポップオーバーが非表示の場合は表示され、ポップオーバーが表示されている場合は非表示になります。詳細については、{{domxref("Popover API", "ポップオーバー API", "", "nocode")}} を参照してください。これは、 `toggle` の値を [`popovertargetaction`](#popovertargetaction) 属性に設定することに相当し、ポップオーバー要素で {{domxref("HTMLElement.togglePopover()")}} メソッドを呼び出すことと同じ意味の宣言的な方法です。
    - カスタム値
      - : この属性は、 2 つのハイフン文字 (`--`) を接頭辞として付加したカスタム値を表します。カスタム値を持つボタンは、制御される要素で {{domxref("CommandEvent")}} を配信します。

- `commandfor`
  - : `<button>` 要素をコマンドボタンに変換し、ボタンに指定された [`command`](#command) 属性で定義されたコマンドを発行することで、指定された対話要素を制御します。 `commandfor` 属性は、制御対象となる要素の ID を値として取ります。これは [`popovertarget`](#popovertarget) のより汎用的なバージョンです。
- [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled)
  - : これは論理属性で、ユーザーがボタンを操作することを抑止します。押したりフォーカスを受けたりすることができなくなります。
- [`form`](/ja/docs/Web/HTML/Reference/Attributes/form)
  - : ボタンに関連付けられた {{HTMLElement("form")}} 要素（_フォームオーナー_）です。この属性の値は、同一文書内の `<form>` 要素の `id` 属性と同一でなければなりません。（この属性を設定しなかった場合、 `<button>` は祖先に `<form>` 要素が存在すれば、その要素に関連付けられます。）

    この属性によって `<button>` 要素が `<form>` の中になくても、同一文書内にある任意の `<form>` 要素に関連付けることが可能になりました。また、祖先の `<form>` 要素を上書きすることができます。

- `formaction`
  - : このボタンによって送信された情報を処理する URL です。このボタンのフォームオーナーの [`action`](/ja/docs/Web/HTML/Reference/Elements/form#action) 属性よりも優先されます。フォームオーナーがない場合は何もしません。
- `formenctype`
  - : このボタンが送信ボタンである場合（`<form>` の中にあるか関連付けられており、 `type="button"` が設定されていない場合）、送信されるフォームデータのエンコード方法を指定します。指定可能な値は以下の通りです。
    - `application/x-www-form-urlencoded`: この属性が使用されなかった場合の既定値。
    - `multipart/form-data`: {{HTMLElement("input")}} 要素の [`type`](/ja/docs/Web/HTML/Reference/Elements/input#type) 属性に `file` を指定して使用する場合に使用します。
    - `text/plain`: デバッグ目的で指定されるものです。実際のフォーム送信で使用すべきではありません。

    この属性が指定された場合、そのボタンのフォームオーナーの [`enctype`](/ja/docs/Web/HTML/Reference/Elements/form#enctype) 属性より優先されます。

- `formmethod`
  - : このボタンが送信ボタンである場合（`<form>` の中にあるか関連付けられており、 `type="button"` が設定されていない場合）、この属性はこのフォームを送信するのに使用される [HTTP メソッド](/ja/docs/Web/HTTP/Reference/Methods)を指定します。指定可能な値は以下の通りです。
    - `post`: フォームのデータは、サーバーへ送信する際に HTTP リクエストの本文に含められます。フォームにパスワードなどの公開するべきではない情報が含まれている場合は、このメソッドを使用してください。
    - `get`: フォームのデータは、フォームの `action` の URL に、セパレーターとして '?' を使用して追加され、その結果となる URL をサーバーへ送信します。検索フォームのように、まったく[副作用がない](/ja/docs/Glossary/Idempotent)場合にのみ、このメソッドを使用してください。
    - `dialog`: このメソッドは、ボタンが関連付けられた[ダイアログ](/ja/docs/Web/HTML/Reference/Elements/dialog)を閉じ、フォームデータをまったく送信しないことを示すために使用します。

    指定された場合、この属性はボタンのフォームオーナーの [`method`](/ja/docs/Web/HTML/Reference/Elements/form#method) 属性より優先して使用されます。

- `formnovalidate`
  - : 論理属性で、ボタンが送信ボタンである場合に、フォームデータ送信時に内容を[検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)しないように指定するものです。この属性が指定された場合、ボタンの属するフォームオーナーの [`novalidate`](/ja/docs/Web/HTML/Reference/Elements/form#novalidate) 属性より優先して使用されます。

    この属性は [`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image) および [`<input type="submit">`](/ja/docs/Web/HTML/Reference/Elements/input/submit) 要素でも使用できます。

- `formtarget`
  - : ボタンが送信ボタンである場合、フォームの送信後に受信するレスポンスを表示する場所を示すユーザー定義の名前、もしくはアンダースコアから始まる標準化されたキーワードです。これは、_閲覧コンテキスト_（タブ、ウィンドウ、{{HTMLElement("iframe")}}）の `name` またはそれを表すキーワードです。この属性が指定された場合、ボタンのフォームオーナーの [`target`](/ja/docs/Web/HTML/Reference/Elements/form#target) 属性より優先されます。以下のキーワードは特別な意味を持ちます。
    - `_self`: レスポンスを同じ閲覧コンテキストに読み込みます。これは、属性が指定されていない場合の既定値です。
    - `_blank`: レスポンスを新しい無名の閲覧コンテキスト — 普通は、ブラウザーの設定に従い、新しいタブまたはウィンドウ — に読み込みます。
    - `_parent`: レスポンスを現在のコンテキストの親の閲覧コンテキストに読み込みます。親要素がない場合、このオプションは `_self` と同じ振る舞いをします。
    - `_top`: レスポンスを最上位の閲覧コンテキスト (現在のコンテキストの祖先で、それ以前の祖先をもたない閲覧コンテキスト) に読み込みます。親要素がない場合、このオプションは `_self` と同じ振る舞いをします。

- `name`
  - : このボタンの名前で、フォームデータの一部としてこのボタンの `value` との組み合わせで送信されます。

- `popovertarget`
  - : `<button>` 要素をポップオーバーの制御ボタンに変換します。制御するポップオーバー要素の ID を値として受け取ります。 `popovertarget` 属性を使用してポップオーバーとその呼び出し元ボタンとの関連付けを設定すると、2 つの有益な効果が追加されます。
    - ブラウザーは、ポップオーバーと呼び出し元との間に暗黙の [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) および [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) の関係を作成し、ポップオーバーが表示されたときに、キーボードフォーカスナビゲーションの順序で論理的な位置にポップオーバーを配置します。これにより、キーボードおよび支援技術 (AT) のユーザーもポップオーバーにアクセスしやすくなります （「[ポップオーバーのアクセシビリティ機能](/ja/docs/Web/API/Popover_API/Using#popover_accessibility_features)」も参照してください）。
    - ブラウザーは、2 つの間に暗黙のアンカー参照を作成するため、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)を使用して、コントロールを基準にしてポップオーバーを相対的に位置指定することがとても便利です。詳細については、「[ポップオーバーのアンカー位置指定](/ja/docs/Web/API/Popover_API/Using#popover_anchor_positioning)」を参照してください。

- `popovertargetaction`
  - : 制御用 `<button>` によって制御されているポップオーバー要素に対して実行される動作を指定します。使用可能な値は以下の通りです。
    - `"hide"`
      - : このボタンは、表示されているポップオーバーを非表示にします。非表示になっているポップオーバーを非表示にしようとした場合、何も行われません。
    - `"show"`
      - : このボタンは、非表示のポップオーバーを表示します。すでに表示されているポップオーバーを表示しようとしても、何の動作も起こりません。
    - `"toggle"`
      - : ポップオーバーの表示・非表示を切り替えるボタンです。ポップオーバーが非表示の場合は表示され、ポップオーバーが表示されている場合は非表示になります。`popovertargetaction` が省略された場合、`"toggle"` がこのコントロールボタンによって実行される既定の動作です。

- `type`
  - : このボタンの既定の動作です。以下の値が指定可能です。
    - `submit`: このボタンはフォームのデータをサーバーへ送信します。これはこの属性が `<form>` に関連付けられたボタンに指定されていない場合、またはこの属性が空であったり不正な値であったりした場合の既定値です。
    - `reset`: このボタンはすべてのコントロールを初期値に初期化します。 [\<input type="reset">](/ja/docs/Web/HTML/Reference/Elements/input/reset) と同様です。 (この動作はユーザーを困らせる傾向があります。)
    - `button`: ボタンには既定の動作がなく、既定では押されても何も行いません。この要素のイベントを待ち受けし、イベントが発生すると起動されるクライアント側スクリプトを設定することができます。

- `value`
  - : フォームのデータと一緒に送信される際に、ボタンの `name` に結び付けられる値を定義します。この値は、フォームに送信する際にサーバーに引数として渡されます。

## メモ

送信ボタンに `formaction` 属性が設定されていても、関連付けられたフォームがない場合は何もしません。ボタンを `<form>` で囲むか、 `form` でフォームの id を設定するかしてフォームオーナーを設定する必要があります。

`<button>` 要素は {{HTMLElement("input")}} 要素よりもずっと簡単にスタイル付けできます。内部に HTML コンテンツを（`<i>`、 `<br>` や `<img>` さえも）追加できますし、複雑な描画のために {{Cssxref("::after")}} や {{Cssxref("::before")}} 擬似要素を使用することもできます。

ボタンがサーバーにデータを送信するためのものでない場合は、 `type` 属性を `button` に設定することを忘れないでください。さもないと、フォームデータを送信して（存在しない）レスポンスを読み込み、文書の現在の状態を破棄してしまうおそれがあります。

`<button type="button">` には既定の動作がありませんが、イベントハンドラーを記述して動作を起動することができます。起動されたボタンは [JavaScript](/ja/docs/Learn_web_development/Core/Scripting) を用いてプログラム可能なアクションを実行することができます。例えばアイテムをリストから削除するなどです。

既定では、ユーザーエージェントはボタンを `display: flow-root` としてスタイル設定します。これにより、新しい[ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)が確立され、ボタンがオーバーフローしない限り、ボタンの中の子要素が水平方向と垂直方向の両方で中央に配置されます。ボタンがフレックスまたはグリッドコンテナーとして定義されている場合、子要素はフレックスまたはグリッドアイテムとして動作します。 `display: inline` に設定されたボタンは、値が `display: inline-block` に設定されているかのようにスタイル設定されます。

## アクセシビリティ

### アイコンボタン

アイコンのみを使って機能を表現するボタンは、*アクセシブル名*を持ちません。アクセシブル名はスクリーンリーダーのような支援技術で文書を解析し、[アクセシビリティツリー](/ja/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#アクセシビリティの_api_群)を生成するときに、アクセスするためのプログラム的なフックを提供します。そのため、支援技術や移動やページコンテンツの操作にアクセシビリティツリーを使用します。

アイコンボタンにアクセシブル名を与えるには、 `<button>` 要素でボタンの機能を簡潔に説明するテキスト文字列を提供してください。

#### 例

```html
<button name="favorite">
  <svg fill="black" viewBox="0 0 42 42">
    <path
      d="M21,1c1.081,0,5.141,12.315,6.201,13.126s13.461,1.053,13.791,2.137 c0.34,1.087-9.561,8.938-9.961,10.252c-0.409,1.307,
      3.202,13.769,2.331,14.442c-0.879,0.673-11.05-6.79-12.361-6.79 c-1.311,0-11.481,7.463-12.36,6.79c-0.871-0.674,2.739-13.136,
      2.329-14.442c-0.399-1.313-10.3-9.165-9.96-10.252 c0.33-1.084,12.731-1.326,13.791-2.137S19.91,1,21,1z"></path>
  </svg>
  お気に入りに追加
</button>
```

##### 結果

{{EmbedLiveSample('Icon buttons')}}

ボタンのテキストを、アクセス可能な方法で視覚的に隠したい場合は、[CSS プロパティの組み合わせ](https://www.a11yproject.com/posts/how-to-hide-content/)を使用して画面から削除し、支援技術からは解析可能のままにします。

しかし、ボタンのテキストを視覚的に見えるようにしておけば、アイコンの意味に慣れていない人がボタンの目的を理解できるようになります。これは特に、技術的に慣れていない人や、アイコンボタンが使用するアイコンの文化的解釈が異なる人に適しています。

- [What is an accessible name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN WCAG を理解する ― ガイドライン 4.1 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#ガイドライン_4.1_—_互換性_支援技術を含む現在および将来のユーザーエージェントとの互換性を最大化する)
- [Understanding Success Criterion 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### 大きさと近接性

#### 大きさ

ボタンなどの操作可能な要素は、容易にアクティブ化させることができるだけの大きさで提供するようにしてください。これは、動きが不自由な人、スタイラスや指のような正確性の低い形の入力を使用している人など、様々な人に役立ちます。44×44 [CSS ピクセル](/ja/docs/Glossary/CSS_pixel)以上の操作のための大きさが推奨されています。

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### 近接性

たくさんの操作可能なコンテンツ — ボタンを含む — が互いに視覚的に接近して配置されるときは、それを隔てるために間隔を置いてください。間隔を置くことは、動きが不自由で誤った操作可能なコンテンツを有効化してしまうことがある人にとって有益です。

間隔は {{cssxref("margin")}} などの CSS プロパティを使用して作成することができます。

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA 状態情報

ボタンの状態を記述するために使用する正しい ARIA 属性は [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) であり、[`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) や [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) ではありません。詳しくは、 [ARIA button ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)についての情報をご覧ください。

### ボタンのスタイル

フォーカスを持つ要素の既定のフォーカスリングは上書きしないことが望ましいです。ボタンスタイルが上書きされる場合、視覚障碍のあるユーザーが認識でき、認知能力に違いのあるユーザーも理解できるように、**フォーカス状態のコントラストが十分であることを保証**することが重要です。

{{cssxref(":focus-visible")}} 擬似クラスを使用すると、ユーザーエージェントのヒューリスティックがフォーカスを強調表示すべきであると判断した場合（たとえば、`<button>` がキーボードのフォーカスを受け取った場合など）にのみ、 {{cssxref(":focus")}} を保有する要素にスタイルを適用することができます。詳細については、[:focus と :focus-visible](/ja/docs/Web/CSS/Reference/Selectors/:focus-visible#focus_vs_focus-visible) を参照してください。

色のコントラスト比は、テキスト及び背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) によれば、文字列コンテンツで 4.5:1 以上、大きめの文字列で 3:1 以上のコントラスト比が求められています。 (大きめの文字列とは、 {{cssxref("font-weight", "bold")}} の 18.66px 以上、または 24px 以上と定義されています。)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN WCAG を理解する ― ガイドライン 1.4 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### クリックとフォーカス

`<button>` や {{HTMLElement("input")}} のボタン型をクリックしたときに（既定で）フォーカスを得るかは、ブラウザーおよび OS により異なります。多くのブラウザーはクリックされているボタンにフォーカスを与えますが、[Safari は設計上そうなりません](https://webkit.org/b/22261#c68)。

## 例

```html
<button name="button">クリックしてね</button>
```

{{ EmbedLiveSample('Example', 200, 64) }}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#リスト化"
          >リスト化</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#ラベル付け可能"
          >ラベル付け可能</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#送信可能"
          >送信可能</a
        >
        な
        <a
          href="/ja/docs/Web/HTML/Guides/Content_categories#フォーム関連コンテンツ"
          >フォーム関連要素</a
        >、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、但し<a
          href="/ja/docs/Web/HTML/Guides/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        >があってはならない。
        <code>&lt;button&gt;</code> が<a href="/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select">カスタマイズ可能な select 要素</a>の最初の子である場合、0 個または 1 個の {{htmlelement("selectedcontent")}} 要素も含まれている場合があります。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLButtonElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
