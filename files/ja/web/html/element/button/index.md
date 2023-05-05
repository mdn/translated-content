---
title: '<button>: ボタン要素'
slug: Web/HTML/Element/button
---

{{HTMLSidebar}}

**HTML の `<button>` 要素**はクリックできるボタンを表し、[フォーム](/ja/docs/Learn/Forms)や、文書で単純なボタン機能が必要なあらゆる場所で使用することができます。既定では、 HTML のボタンは {{Glossary("user agent", "ユーザーエージェント")}} が実行されているホストのプラットフォームのスタイルと似ていますが、 [CSS](/ja/docs/Web/CSS) を使用してボタンの外見を変更することができます。

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリ</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、<a href="/ja/docs/Web/Guide/HTML/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        >、<a href="/ja/docs/Web/Guide/HTML/Content_categories#リスト化"
          >リスト化</a
        >、<a href="/ja/docs/Web/Guide/HTML/Content_categories#ラベル付け可能"
          >ラベル付け可能</a
        >、<a href="/ja/docs/Web/Guide/HTML/Content_categories#送信可能"
          >送信可能</a
        >
        な
        <a
          href="/ja/docs/Web/Guide/HTML/Content_categories#フォーム関連コンテンツ"
          >フォーム関連要素</a
        >、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、但し<a
          href="/ja/docs/Web/Guide/HTML/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        >があってはならない
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role">checkbox</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/link_role">link</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menuitem_role">menuitem</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role">menuitemcheckbox</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role">menuitemradio</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/option_role">option</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/radio_role">radio</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/switch_role">switch</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/tab_role">tab</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLButtonElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を持ちます。

- {{htmlattrdef("autofocus")}}
  - : 論理属性で、ページ読み込み時にこのボタンが入力[フォーカス](/ja/docs/Web/API/HTMLOrForeignElement/focus)を持つべきであることを指定します。**文書中の要素一つだけにこの属性を設定することができます。**
- {{htmlattrdef("autocomplete")}} {{non-standard_inline}}
  - : {{HTMLElement("button")}} におけるこの属性は標準外であり、 Firefox 固有のものです。他のブラウザーとは異なり、 Firefox はページを再度読み込む時に[動的に無効化した状態を維持します](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。そのボタンに `autocomplete="off"` に設定すると、この機能が無効になります。 [Firefox バグ 654072](https://bugzil.la/654072) をご覧ください。
- {{htmlattrdef("disabled")}}

  - : 論理属性で、ユーザーがボタンを操作することを抑止します。押したりフォーカスを受けたりすることができなくなります。

    Firefox の動作は他のブラウザーと異なり、ページを再読み込みしても {{HTMLElement("button")}} を[動的に無効化した状態を維持します](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。この機能は {{htmlattrxref("autocomplete","button")}} 属性で制御できます。

- {{htmlattrdef("form")}}

  - : ボタンに関連付けられた {{HTMLElement("form")}} 要素 (_フォームオーナー_) です。この属性の値は、同一文書内の `<form>` 要素の `id` 属性と同一でなければなりません。 (この属性を設定しなかった場合、 `<button>` は祖先に `<form>` 要素が存在すれば、その要素に関連付けられます。)

    この属性によって `<button>` 要素が `<form>` の中になくても、同一文書内にある任意の `<form>` 要素に関連付けることが可能になりました。また、祖先の `<form>` 要素を上書きすることができます。

- {{htmlattrdef("formaction")}}
  - : このボタンによって送信された情報を処理する URL です。このボタンのフォームオーナーの {{htmlattrxref("action","form")}} 属性よりも優先されます。フォームオーナーがない場合は何もしません。
- {{htmlattrdef("formenctype")}}

  - : このボタンが送信ボタンである場合 (`<form>` の中にあるか関連付けられており、 `type="button"` が設定されていない場合)、送信されるフォームデータのエンコード方法を指定します。指定可能な値は以下の通りです。

    - `application/x-www-form-urlencoded`: この属性が使用されなかった場合の既定値。
    - `multipart/form-data`: {{HTMLElement("input")}} 要素の {{htmlattrxref("type","input")}} 属性に `file` を指定して使用する場合に使用します。
    - `text/plain`: デバッグ目的で指定されるものです。実際のフォーム送信で使用するべきではありません。

    この属性が指定された場合、そのボタンのフォームオーナーの {{htmlattrxref("enctype","form")}} 属性より優先されます。

- {{htmlattrdef("formmethod")}}

  - : このボタンが送信ボタンである場合 (`<form>` の中にあるか関連付けられており、 `type="button"` が設定されていない場合)、この属性はこのフォームを送信するのに使用される [HTTP メソッド](/ja/docs/Web/HTTP/Methods)を指定します。指定可能な値は以下の通りです。

    - `post`: フォームのデータは、サーバーへ送信する際に HTTP リクエストの本文に含められます。フォームにパスワードなどの公開するべきではない情報が含まれている場合は、このメソッドを使用してください。
    - `get`: フォームのデータは、フォームの `action` の URL に、セパレーターとして '?' を使用して追加され、その結果となる URL をサーバーへ送信します。検索フォームのように、まったく[副作用がない](/ja/docs/Glossary/Idempotent)場合にのみ、このメソッドを使用してください。

    指定された場合、この属性はボタンのフォームオーナーの {{htmlattrxref("method","form")}} 属性より優先して使用されます。

- {{htmlattrdef("formnovalidate")}}

  - : 論理属性で、ボタンが送信ボタンである場合に、フォームデータ送信時に内容を[検証](/ja/docs/Learn/Forms/Form_validation)しないように指定するものです。この属性が指定された場合、ボタンの属するフォームオーナーの {{htmlattrxref("novalidate","form")}} 属性より優先して使用されます。

    この属性は [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image) および [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit) 要素でも使用できます。

- {{htmlattrdef("formtarget")}}

  - : ボタンが送信ボタンである場合、フォームの送信後に受信するレスポンスを表示する場所を示すユーザー定義の名前、もしくはアンダースコアから始まる標準化されたキーワードです。これは、_閲覧コンテキスト_ (タブ、ウィンドウ、{{HTMLElement("iframe")}}) の `name` またはそれを表すキーワードです。この属性が指定された場合、ボタンのフォームオーナーの {{htmlattrxref("target", "form")}} 属性より優先されます。以下のキーワードは特別な意味を持ちます。

    - `_self`: レスポンスを同じ閲覧コンテキストに読み込みます。これは、属性が指定されていない場合の既定値です。
    - `_blank`: レスポンスを新しい無名の閲覧コンテキスト — 普通は、ブラウザーの設定に従い、新しいタブまたはウィンドウ — に読み込みます。
    - `_parent`: レスポンスを現在のコンテキストの親の閲覧コンテキストに読み込みます。親要素がない場合、このオプションは `_self` と同じ振る舞いをします。
    - `_top`: レスポンスを最上位の閲覧コンテキスト (現在のコンテキストの祖先で、それ以前の祖先をもたない閲覧コンテキスト) に読み込みます。親要素がない場合、このオプションは `_self` と同じ振る舞いをします。

- {{htmlattrdef("name")}}
  - : このボタンの名前で、フォームデータの一部としてこのボタンの `value` との組み合わせで送信されます。
- {{htmlattrdef("type")}}

  - : このボタンの既定の動作です。以下の値が指定可能です。

    - `submit`: このボタンはフォームのデータをサーバーへ送信します。これはこの属性が `<form>` に関連付けられたボタンに指定されていない場合、またはこの属性が空であったり不正な値であったりした場合の既定値です。
    - `reset`: このボタンはすべてのコントロールを初期値に初期化します。 [\<input type="reset">](/ja/docs/Web/HTML/Element/input/reset) と同様です。 (この動作はユーザーを困らせる傾向があります。)
    - `button`: ボタンには既定の動作がなく、既定では押されても何も行いません。この要素のイベントを待ち受けし、イベントが発生すると起動されるクライアント側スクリプトを設定することができます。

- {{htmlattrdef("value")}}
  - : フォームのデータと一緒に送信される際に、ボタンの `name` に結び付けられる値を定義します。この値は、フォームに送信する際にサーバーに引数として渡されます。

## メモ

送信ボタンに `formaction` 属性が設定されていても、関連付けられたフォームがない場合は何もしません。ボタンを `<form>` で囲むか、 `form` でフォームの id を設定するかしてフォームオーナーを設定する必要があります。

`<button>` 要素は {{HTMLElement("input")}} 要素よりもずっと簡単にスタイル付けできます。内部に HTML コンテンツを (`<em>`、 `<strong>` や `<img>` さえも) 追加できますし、複雑な描画のために {{Cssxref("::after")}} や {{Cssxref("::before")}} 擬似要素を使用することもできます。

ボタンがサーバーにデータを送信するためのものでない場合は、 `type` 属性を `button` に設定することを忘れないでください。さもないと、フォームデータを送信して (存在しない) レスポンスを読み込み、文書の現在の状態を破棄してしまうおそれがあります。

## 例

```html
<button name="button">クリックしてね</button>
```

{{ EmbedLiveSample('Example', 200, 64) }}

## アクセシビリティの考慮

### アイコンボタン

アイコンのみを使って機能を表現するボタンは、*アクセシブル名*を持ちません。アクセシブル名は画面リーダーのような支援技術で文書を解析し、[アクセシビリティツリー](/ja/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis)を生成するときに、アクセスするためのプログラム的なフックを提供します。そのため、支援技術や移動やページコンテンツの操作にアクセシビリティツリーを使用します。

アイコンボタンにアクセシブル名を与えるには、 `<button>` 要素でボタンの機能を簡潔に説明するテキスト文字列を提供してください。

#### 例

```
<button name="favorite">
  <svg aria-hien="true" viewBox="0 0 10 10"><path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z"/></svg>
  お気に入りに追加
</button>
```

ボタンのテキストを、アクセシブルな方法で視覚的に隠したい場合は、 [CSS プロパティの組み合わせ](https://gomakethings.com/hien-content-for-better-a11y/#hiding-the-link)を使用して画面から削除し、支援技術からは解析可能のままにします。

しかし、ボタンのテキストを視覚的に見えるようにしておけば、アイコンの意味に慣れていない人がボタンの目的を理解できるようになります。これは特に、技術的に慣れていない人や、アイコンボタンが使用するアイコンの文化的解釈が異なる人に適しています。

- [What is an accessible name? | The Paciello Group](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
- [MDN "WCAG を理解する ― ガイドライン 4.1 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Understanding Success Criterion 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### 大きさと近接性

#### 大きさ

ボタンなどの対話型要素は、容易にアクティブ化させることができるだけの大きさで提供するようにしてください。これは、動きが不自由な人、スタイラスや指のような正確性の低い形の入力を使用している人など、様々な人に役立ちます。 44×44 [CSS ピクセル](https://www.w3.org/TR/WCAG21/#dfn-css-pixels)以上の操作のための大きさが推奨されています。

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](http://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://a11yproject.com/posts/large-touch-targets/)

#### 近接性

たくさんの対話型コンテンツ — ボタンを含む — が互いに視覚的に接近して配置されるときは、それを隔てるために間隔を置いてください。間隔を置くことは、動きが不自由で誤った対話型コンテンツを有効化してしまうことがある人にとって有益です。

間隔は {{cssxref("margin")}} などの CSS プロパティを使用して作成することができます。

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA 状態情報

ボタンの状態を記述するために使用する正しい ARIA 属性は `aria-pressed` であり、 `aria-checked` や `aria-selected` ではありません。詳しくは、 [ARIA button ロール](/ja/docs/Web/Accessibility/ARIA/Roles/button_role)についての情報をご覧ください。

### Firefox

Firefox はフォーカスされたボタンに小さな点線の境界線を表示します。この境界線はブラウザーのスタイルシートの CSS で宣言されていますが、 [`button::-moz-focus-inner { }`](/ja/docs/Web/CSS/::-moz-focus-inner) を使用して独自のフォーカスのスタイルを追加すると上書きすることができます。

上書きした場合は、弱視の人が知覚するのの十分なほど、**フォーカスがボタンに移動したときの状態の変化が十分に大きいことを確認すること**が重要です。

色のコントラスト比は、テキスト及び背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/intro/wcag) によれば、文字列コンテンツで 4.5:1 以上、大きめの文字列で 3:1 以上のコントラスト比が求められています。 (大きめの文字列とは、 {{cssxref("font-weight", "bold")}} の 18.66px 以上、または 24px 以上と定義されています。)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### クリックとフォーカス

{{HTMLElement("button")}} をクリックしたときに (既定で) フォーカスを得るかは、ブラウザーおよび OS により異なります。{{HTMLElement("input")}} 要素では `type="button"`、`type="submit"` ともに同じ動作になります。

| デスクトップ版ブラウザー | Windows 8.1                 | OS X 10.X                                     |
| ------------------------ | --------------------------- | --------------------------------------------- |
| Firefox                  | はい - Firefox 30.0         | いいえ (`tabindex` がある場合でも) Firefox 63 |
| Chrome                   | はい - Chrome 35            | はい - Chrome 65                              |
| Safari                   | N/A                         | いいえ (`tabindex` がある場合でも) Safari 12  |
| Internet Explorer        | はい - Internet Explorer 11 | N/A                                           |
| Presto                   | はい - Opera 12             | はい - Opera 12                               |

| モバイル版ブラウザー | iOS 7.1.2                          | Android 4.4.4 |
| -------------------- | ---------------------------------- | ------------- |
| Safari Mobile        | いいえ (`tabindex` がある場合でも) | N/A           |
| Chrome 35            | いいえ (`tabindex` がある場合でも) | はい          |

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.button")}}
