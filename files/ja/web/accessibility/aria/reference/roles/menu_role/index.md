---
title: "ARIA: menu ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/menu_role
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

`menu` ロールは、ユーザーに選択肢のリストを提供する複合ウィジェットの一種です。

## 説明

`menu` は一般的に、ユーザーが呼び出すことができる共通のアクションや機能のグループ化を表します。`menu` ロールは、デスクトップアプリケーションのメニューと同様の方法でメニュー項目のリストが提示される場合に適切です。ポップアップメニューとしても知られるサブメニューも、`menu` ロールを持ちます。

「メニュー」という用語はサイトナビゲーションを説明するために一般的に使用される用語ですが、`menu` ロールは複合ウィジェットのフォーカス管理や最初の文字でのナビゲーションなどの複雑な機能を必要とするアクションや機能のリストのためのものです。

メニューは、常に表示されるコントロールのリストであるか、開閉できるウィジェットです。閉じられた `menu` ウィジェットは通常、メニューボタンを活性化する、サブメニューを開くメニュー内の項目を選択する、または Windows でコンテキスト固有のメニューを開く <kbd>Shift + F10</kbd> などのコマンドを呼び出すことによって開かれる、または表示されます。

ユーザーが開かれたメニュー内の選択肢を活性化すると、メニューは通常閉じられます。メニューの選択肢アクションがサブメニューを呼び出す場合、メニューは開いたままになり、サブメニューが表示されます。

メニューが開くと、キーボードフォーカスは最初のメニュー項目に置かれます。キーボードアクセシブルにするには、すべての子孫の [フォーカスを管理](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) する必要があります：`menu` 内のすべてのメニュー項目はフォーカス可能です。メニューを開くメニューボタンとメニュー項目は、メニュー自体ではなく、フォーカス可能な要素です。

メニュー項目には [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)、[`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)、[`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) が含まれます。[無効化された](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) メニュー項目はフォーカス可能ですが、活性化することはできません。

メニュー項目は [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロールを持つ要素でグループ化でき、[`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) ロールを持つ要素で区切ることができます。`group` も `separator` もフォーカスを受け取らず、インタラクティブではありません。

`menu` がコンテキストアクションの結果として開かれる場合、<kbd>Escape</kbd> または <kbd>Enter</kbd> は呼び出したコンテキストにフォーカスを戻すことがあります。フォーカスがメニューボタンにある場合、<kbd>Enter</kbd> を押すことでメニューが開き、最初のメニュー項目にフォーカスが当たります。フォーカスがメニュー自体にある場合、<kbd>Escape</kbd> はメニューを閉じ、メニューボタンまたは親のメニューバー項目（またはメニューを開いたコンテキストアクション）にフォーカスを戻します。

`menu` ロールを持つ要素は、暗黙的な [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) 値として `vertical` を持ちます。水平方向のメニューには、[`aria-orientation="horizontal"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) を使用してください。

メニューが視覚的に永続的である場合は、[`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) ロールを検討してください。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)、[`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)、[`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) ロール
  - : `menu` または `menubar` を含む要素に含まれる項目のロールで、総称的に「メニュー項目」として知られています。これらはフォーカスを受け取ることができなければなりません。
- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロール
  - : メニュー項目は [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) にネストできます
- [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) ロール
  - : メニュー内のコンテンツのセクションやメニュー項目のグループを分離し、区別する区切り

- [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性
  - : `menu` コンテナーは `tabindex` を `-1` または `0` に設定し、メニュー内の各項目は `tabindex` を `-1` に設定します。
- [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : フォーカスされた項目の ID に設定します（存在する場合）。
- [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : メニューの方向が水平か垂直かを示します。省略された場合はデフォルトで `vertical` になります。
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : `menu` にはアクセシブル名が必要です。可視ラベルが存在する場合は `aria-labelledby` を使用し、そうでなければ `aria-label` を使用してください。表示を制御する `menuitem` または `button` の `id` に設定された `aria-labelledby` を含めるか、`aria-label` を使用してラベルを定義してください。
- [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : コンテナーの DOM の子ではない要素を含めるために、メニューコンテナーのみに設定します。設定された場合、これらの要素は参照される順序で読み上げ順序に現れ、DOM の子である項目の後に配置されます。フォーカスを管理するときは、視覚的なフォーカス順序がこの支援技術の読み上げ順序と一致することを確認してください。

### キーボードインタラクション

- <kbd>Space</kbd> / <kbd>Enter</kbd>
  - : 項目が親メニュー項目の場合、サブメニューを開き、サブメニューの最初の項目にフォーカスを移動します。そうでなければ、メニュー項目を有効化し、新しいコンテンツを読み込み、コンテンツのタイトルとなる見出しにフォーカスを配置します。
- <kbd>Escape</kbd>
  - : サブメニューにいる場合、サブメニューを閉じ、親メニューまたはメニューバー項目にフォーカスを移動します。
- <kbd>Right Arrow</kbd>
  - : メニューバーでは、メニューバーの次の項目にフォーカスを移動します。フォーカスが最後の項目にある場合は、最初の項目にフォーカスを移動します。サブメニューにいる場合、フォーカスがサブメニューを持たない項目にある場合は、サブメニューを閉じ、メニューバーの次の項目にフォーカスを移動します。そうでなければ、新しくフォーカスされたメニューバー項目のサブメニューを開き、その親メニューバー項目にフォーカスを保持します。メニューバーやサブメニューにおらず、サブメニューを持つ `menuitem` でない場合、フォーカスがメニューの最後のフォーカス可能要素でない場合は、オプションで次のフォーカス可能要素にフォーカスを移動します。
- <kbd>Left Arrow</kbd>
  - : メニューバーの前の項目にフォーカスを移動します。フォーカスが最初の項目にある場合は、最後の項目にフォーカスを移動します。サブメニューにいる場合は、サブメニューを閉じ、親メニュー項目にフォーカスを移動します。メニューバーやサブメニューにいない場合、フォーカスがメニューの最初のフォーカス可能要素でない場合は、オプションで最後のフォーカス可能要素にフォーカスを移動します。
- <kbd>Down Arrow</kbd>
  - : サブメニューを開き、サブメニューの最初の項目にフォーカスを移動します。
- <kbd>Up Arrow</kbd>
  - : サブメニューを開き、サブメニューの最後の項目にフォーカスを移動します。
- <kbd>Home</kbd>
  - : メニューバーの最初の項目にフォーカスを移動します。
- <kbd>End</kbd>
  - : メニューバーの最後の項目にフォーカスを移動します。
- 任意の文字キー
  - : 入力された文字で始まる名前を持つメニューバーの次の項目にフォーカスを移動します。入力された文字で始まる名前を持つ項目がない場合、フォーカスは移動しません。

## 例

以下は 2 つのメニュー実装の例です。

### 例 1: ナビゲーションメニュー

```html
<div>
  <button id="menubutton" aria-haspopup="true" aria-controls="menu">
    <img src="hamburger.svg" alt="Page Sections" />
  </button>
  <ul id="menu" role="menu" aria-labelledby="menubutton">
    <li role="presentation">
      <a role="menuitem" href="#description">Description</a>
    </li>
    <li role="presentation">
      <a
        role="menuitem"
        href="#associated_wai-aria_roles_states_and_properties">
        Associated WAI-ARIA roles, states, and properties
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#keyboard_interactions">
        Keyboard interactions
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#examples">Examples</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#specifications">Specifications</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#see_also">See Also</a>
    </li>
  </ul>
</div>
```

デフォルトでアクセシブルなこのナビゲーションウィジェットを段階的に拡張するには、`menu` を隠すクラスとインタラクティブなメニュー項目コンテンツへの `tabindex="-1"` の追加を、読み込み時に JavaScript で行うべきです。

サイトナビゲーション用の「メニュー」を含める場合は、`menu` ロールを使用しないでください。むしろ、メインサイトナビゲーションには、ネイティブ HTML の {{HTMLElement('nav')}} 要素または単にリンクのリストを使用してください。`menu` ロールは、フォーカス管理を必要とする複合ウィジェット用に予約されるべきです。説明と追加の例については、[ARIA practices for disclosure navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) を参照してください。

### 例 2: メニューバーサブメニューオプションピッカー

以下のコードスニペットは、メニューバーにネストされたポップアップメニューです。これは、メニューボタンが活性化されたときに表示されます。これは、色オプションのリストからテキスト色を選択するためのメニューです：

```html
<div>
  <button
    type="button"
    aria-haspopup="menu"
    aria-controls="colormenu"
    tabindex="0"
    aria-label="Text Color: purple">
    Purple
  </button>
  <ul role="menu" id="colormenu" aria-label="Color Options" tabindex="-1">
    <li
      role="menuitemradio"
      aria-checked="true"
      style="color: purple"
      tabindex="-1">
      Purple
    </li>
    <li
      role="menuitemradio"
      aria-checked="false"
      style="color: magenta"
      tabindex="-1">
      Magenta
    </li>
    <li
      role="menuitemradio"
      aria-checked="false"
      style="color: black;"
      tabindex="-1">
      Black
    </li>
  </ul>
</div>
```

メニューを開くボタンには [`aria-haspopup="menu"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) が設定されており、制御するポップアップが `menu` であることを明示的に示しています。

メニューを開くために、ユーザーは一般的にオープナーとしてメニューボタンとインタラクトします。メニューボタンはフォーカス可能で、クリックとキーボードイベントの両方に応答する必要があります。フォーカスされているとき、<kbd>Enter</kbd>、<kbd>Space</kbd>、<kbd>Down Arrow</kbd>、または <kbd>Up Arrow</kbd> を選択すると、メニューが開き、メニュー項目にフォーカスが配置されます。

メニューの開閉は、ボタンの [`aria-expanded="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 属性を切り替えます。これは、メニューが開いているときに追加されます。メニューが閉じられているときは削除されるか、`false` に設定されます。`true` の値は、メニューが表示されており、メニューボタンを活性化するとメニューが閉じることを示します。

メニューが開いているとき、ユーザーがメニュー項目を矢印キーで移動するため、ボタン自体は一般的にフォーカスを受け取りません。<kbd>Escape</kbd> とオプションで <kbd>Shift + Tab</kbd> がメニューを閉じ、メニューボタンにフォーカスを戻します。

`menu` ロールが {{HTMLElement('ul')}} に設定され、`<ul>` 要素をメニューとして識別します。

メニューの表示と非表示は CSS で行うことができます。例えば、これらのコード例では、属性と次の兄弟セレクターを使用してメニューの表示を切り替えることができます：

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

ナビゲーション例には静的なボタンがあります。サブメニュー例には、ユーザーが新しい値を選択したときに更新されるボタンがあります。この場合、`aria-label="Text Color: purple"` が `menu` 要素に設定されています。これは、メニューのアクセシブル名を「Text color: purple」として定義しており、メニューの目的（テキスト色の選択）と現在の値（purple）を識別しています。新しい色が選択されたとき、`aria-label` プロパティの値も更新されるべきです。

## 仕様書

{{Specifications}}

## 関連情報

- [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
