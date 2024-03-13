---
title: "ARIA: switch ロール"
slug: Web/Accessibility/ARIA/Roles/switch_role
---

ARIA のスイッチ (**`switch`**) ロールは、チェックボックス ([`checkbox`](/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role)) ロールと機能的に同じですが、かなり一般的な意味を持つ「チェックされた」状態と「チェックされていない」状態を表す代わりに、スイッチ (`switch`) ロールは「オン」と「オフ」の状態を表す点が異なります。

この例では、ウィジェットを作成し、それに ARIA のスイッチ (`switch`) ロールを割り当てています。

```html
<button
  type="button"
  role="switch"
  aria-checked="true"
  id="speakerPower"
  class="switch">
  <span>オフ</span>
  <span>オン</span>
</button>
<label for="speakerPower" class="switch">スピーカー出力</label>
```

## 説明

ARIA のスイッチ (**`switch`**) ロールは、チェックボックス ([`checkbox`](/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role)) ロールと同じですが、「チェックされた」や「チェックされていない」ではなく、「オン」と「オフ」のどちらかになります。 チェックボックス ([`checkbox`](/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role)) ロールと同様に、`aria-checked` 属性が必須です。 可能な値は `true` と `false` の 2 つです。 `<checkbox>` やチェックボックスロール (`role="checkbox"`) とは異なり、不確定な状態 (`indeterminate`) や混在した状態 (`mixed`) はありません。 スイッチ (`switch`) ロールは、`aria-checked` 属性に `mixed` という値をサポートしていません。 スイッチ (`switch`) に `mixed` という値を割り当てると、代わりに値が `false` に設定されます。

支援技術では、スイッチのオン/オフの概念を反映するために、スイッチ (`switch`) ウィジェットを特別な表現で表すことを選択できます。

スイッチはインタラクティブなコントロールなので、フォーカス可能でキーボードによりアクセス可能でなければなりません。 このロールがフォーカス可能でない要素に適用されている場合は、`tabindex` 属性を使用してこれを変更してください。 スイッチの値を切り替えるために期待されるキーボードショートカットは<kbd>スペース</kbd>キーです。 開発者は、スイッチがトグルされたときに、`aria-checked` 属性の値を動的に変更する必要があります。

### 関連する ARIA のロール、ステート、プロパティ

- `aria-checked` 属性
  - : `aria-checked` 属性は、スイッチ (`switch`) ロールを使用する場合に**必須**です。 これは、スイッチ (`switch`) ロールが適用されているウィジェットの現在の状態を表すためです。 `true` の値は「オン」状態を表し、`false` の値は「オフ」状態を表します。 `mixed` の値はスイッチロールでサポートされておらず、`false` として扱われます。 デフォルト値は `false` です。 (訳注: ARIA in HTML によると、input type=checkbox 要素では、この属性を使用するべきではなく、checked 属性が使用できるそうです。)
- `aria-readonly` 属性
  - : `aria-readonly` 属性は、スイッチ (`switch`) ロールでサポートされています。 これは、ウィジェットの状態がユーザーによって編集可能かどうかを示します。 `false` の値は、ユーザーがウィジェットの状態を変更*できる*ことを意味し、`true` の値は、ユーザーがウィジェットの状態を変更*できない*ことを意味します。 デフォルト値は `false` です。 (訳注: ARIA in HTML によると、この属性は、readonly 属性や contenteditable 属性が使用できる要素と組み合わせる場合は注意が必要だそうです。)

### 必要な JavaScript 機能

- `click` イベントのハンドラー
  - : ユーザーがスイッチウィジェットをクリックすると、[`click` イベント](/ja/docs/Web/API/Element/click_event)が発生します。 これは、ウィジェットの状態を変更するために処理する必要があります。
- `aria-checked` 属性の変更
  - : スイッチウィジェットで `click` イベントが発生した場合、ハンドラーは `aria-checked` 属性の値を `true` から `false` やその逆に変更する必要があります。

## ユーザーエージェントと支援技術への影響

スイッチ (`switch`) ロールが要素に追加されると、{{Glossary("user agent","ユーザーエージェント")}}は次のようにそれを処理します。

- その要素は、スイッチ (`switch`) ロールを持つものとして、システムのアクセシビリティインフラストラクチャに公開されます。
- `aria-checked` 属性の値が変更されると、システムのアクセシビリティ API が使用可能で、それがスイッチ (`switch`) ロールをサポートしている場合、それを使用してアクセス可能なイベントが発生します。
- スイッチ (`switch`) ロールが適用された要素の子孫である全ての要素には、プレゼンテーション (`presentation`) ロールが自動的に割り当てられます。 これにより、スイッチを構築するために使用された要素が、支援技術によって個別にインタラクションされることを防ぎます。 これらの要素内のテキストは、{{cssxref("display", "display: none")}} または `aria-hidden="true"` を使用して明示的に隠されていない限り、ユーザーエージェントに可視のままであり、読み上げやその他の方法でユーザーに届けられる可能性があります。

支援技術では、スイッチ (`switch`) ロールをサポートしている場合、次のように対応します。

- スクリーンリーダーは、要素をスイッチとしてアナウンスし、任意でスイッチをアクティブ化する方法についての指示を提供するべきです。

> **メモ:** 支援技術がこのロールをどのように扱うべきかについては、さまざまな意見があります。 上記は推奨される実践方法の 1 つであり、他の情報源とは異なる場合があります。

## 例

次の例は、スイッチ (`switch`) ロールを適用して使用する方法を理解するのに役立ちます。

### ARIA でのスイッチロールの追加

この単純な例では、ウィジェットを作成して、ARIA のスイッチ (`switch`) ロールを割り当てています。 このボタンは、電源スイッチのオン/オフを連想させるような外観でスタイリングされています。

#### HTML

ここでの HTML はかなり単純です。 スイッチは {{HTMLElement("button")}} 要素として実装され、`aria-checked` 属性が `"true"` に設定されているため、最初はチェックされています。 スイッチには、「off」と「on」のラベルを含む 2 つの子要素があり、その後にスイッチを識別する {{HTMLElement("label")}} が続きます。

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

この JavaScript コードは、スイッチウィジェットの `click` イベントを処理する関数を定義して適用します。 この関数は、`aria-checked` 属性を `true` から `false` やその逆に変更します。

```js
document.querySelectorAll(".switch").forEach(function (theSwitch) {
  theSwitch.addEventListener("click", handleClickEvent, false);
});

function handleClickEvent(evt) {
  let el = evt.target;

  if (el.getAttribute("aria-checked") == "true") {
    el.setAttribute("aria-checked", "false");
  } else {
    el.setAttribute("aria-checked", "true");
  }
}
```

#### CSS

CSS の目的は、電源スイッチのパラダイムを連想させるスイッチのルックアンドフィールを確立することです。

```css
button.switch {
  margin: 0;
  padding: 0;
  width: 70px;
  height: 26px;
  border: 2px solid black;
  display: inline-block;
  margin-right: 0.25em;
  line-height: 20px;
  vertical-align: middle;
  text-align: center;
  font:
    12px "Open Sans",
    "Arial",
    serif;
}

button.switch span {
  padding: 0 4px;
  pointer-events: none;
}

[role="switch"][aria-checked="false"] :first-child,
[role="switch"][aria-checked="true"] :last-child {
  background: #262;
  color: #eef;
}

[role="switch"][aria-checked="false"] :last-child,
[role="switch"][aria-checked="true"] :first-child {
  color: #bbd;
}

label.switch {
  font:
    16px "Open Sans",
    "Arial",
    sans-serif;
  line-height: 20px;
  user-select: none;
  vertical-align: middle;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}
```

最も興味深いのは、おそらく属性セレクターと {{cssxref(":first-child")}} と {{cssxref(":last-child")}} の擬似クラスを使用して、スイッチのオン/オフに応じてスイッチの外観を変えるという面倒な作業を全て行うことです。

#### 結果

結果は次のようになります。

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## 仕様

{{Specifications}}

## 関連情報

- [ARIA: checkbox ロール](/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`<input type="checkbox">`](/ja/docs/Web/HTML/Element/input/checkbox)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
