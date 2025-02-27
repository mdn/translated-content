---
title: "ARIA: radio ロール"
slug: Web/Accessibility/ARIA/Roles/radio_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

`radio` ロールは `radiogroup` 内のチェック可能なラジオボタンのグループの 1 つで、一度に複数のラジオボタンをチェックすることはできません。

## 解説

ラジオボタンはチェック可能な入力で、他のラジオボタンと関連付けられ、一度にチェックできるのは 1 つだけです。ラジオボタンは [`radiogroup`](/ja/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) にまとめられなければならず、これでどのラジオボタンが同じ値に影響するかを示します。

```html
<div role="radiogroup" aria-labelledby="legend25" id="radiogroup25">
  <p id="legend25">Ipsum and lorem?</p>
  <div>
    <span
      role="radio"
      aria-checked="false"
      tabindex="0"
      aria-labelledby="q25_radio1-label"
      data-value="True"></span>
    <label id="q25_radio1-label">True</label>
  </div>
  <div>
    <span
      role="radio"
      aria-checked="false"
      tabindex="0"
      aria-labelledby="q25_radio2-label"
      data-value="False"></span>
    <label id="q25_radio2-label">False</label>
  </div>
  <div>
    <span
      role="radio"
      aria-checked="true"
      tabindex="0"
      aria-labelledby="q25_radio3-label"
      data-value="huh?"></span>
    <label id="q25_radio3-label">What is the question?</label>
  </div>
</div>
```

`role` 属性は意味づけを追加するだけです。 [HTML radio](/ja/docs/Web/HTML/Element/input/radio) にネイティブに備わっている機能はすべて JavaScript と HTML の [`tabindex`](/ja/docs/Web/HTML/Global_attributes/tabindex) 属性で追加する必要があります。

> [!NOTE]
> ARIA の最初のルールは、ネイティブの HTML 要素や属性が要求される意味づけや動作を持っている場合、要素を再利用して ARIA を追加する代わりにそれを使用することです。代わりに、ネイティブの [HTML `<input type="radio">`](/ja/docs/Web/HTML/Element/input/radio) （{{HTMLElement('label')}} が関連付けられたもの）を使用してください。

```html
<fieldset>
  <legend>Ipsum and lorem?</legend>
  <div>
    <input type="radio" value="True" id="q25_radio1" name="q25" />
    <label for="q25_radio1">True</label>
  </div>
  <div>
    <input type="radio" value="False" id="q25_radio2" name="q25" />
    <label for="q25_radio2">False</label>
  </div>
  <div>
    <input type="radio" value="huh?" id="q25_radio3" name="q25" checked />
    <label for="q25_radio3">What is the question?</label>
  </div>
</fieldset>
```

ネイティブ HTML のラジオフォームコントロール ([`<input type="radio">`](/ja/docs/Web/HTML/Element/input/radio)) は 2 つの状態（"checked" と "not checked"）を持ちます。同様に、 `role="radio"` の要素は、 [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-checked) 属性で 2 つの状態を公開することができます。 `true` はチェックされた状態を表し、 `false` はチェックされていない状態を表します。 `aria-checked` の値である `mixed` は、ラジオボタンには使用しません。

ラジオボタンがチェックされる場合、 radio 要素は `aria-checked` を設定するには `true` を保有します。チェックされていない場合、 `aria-checked` は `false` に設定されます。

各ラジオボタン要素は `radio` というロールを保有します。 radio ロールは常に `radiogroup` 内で他にも関連する radio と一緒に入っている必要があります。ラジオボタンをラジオグループ内に入れることができない場合、グループ化されていないラジオボタンの `id` をスペース区切りのリスト値として `radiogroup` 要素の [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-owns) 属性の値として使用し、 `radiogroup` とそのラジオメンバーとの関係を示します。

各 radio 要素はそのコンテンツによってラベル付けされるか、 `aria-labelledby` によって参照される可視ラベルを持つか、または `aria-label` で指定するラベルを持ちます。格納する `radiogroup` 要素は `aria-labelledby` で参照する可視ラベルを持つか、`aria-label` で指定するラベルを持つ必要があります。ラジオグループまたは各ラジオボタンに関する追加の情報を提供する要素が存在する場合、それらの要素は [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) プロパティを持つ `radiogroup` 要素または radio 要素によって参照されなければなりません。

`radio` は操作可能なコントロールなので、フォーカス可能でキーボードアクセス可能でなければなりません。もしこのロールがフォーカス可能でない要素に適用されている場合は、 [`tabindex`](/ja/docs/Web/HTML/Global_attributes/tabindex) 属性を使用して変更してください。ラジオを有効にするキーボードショートカットは <kbd>Space</kbd> キーです。 JavaScript を使用して、ラジオがチェックされたときに `aria-checked` 属性を `true` に切り替え、同時にグループ内の他のすべてのラジオの役割が `aria-checked="false"` に設定されるようにしてください。

プログラムでラジオボタンがラジオグループから選ばれなければならないことを示すには、 `radiogroup` 要素に `true` の値を持つ [`aria-required`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-required) 属性を指定しなければなりません。個々の ARIA ラジオボタンに `aria-required` 属性を使用することは想定されていません。

### 子孫はすべて表示用

プラットフォームのアクセシビリティ API で表すと、テキストしか格納できないユーザーインターフェイスコンポーネントの型があります。アクセシビリティ API は `radio` に格納された意味づけ要素を表す方法を持っていません。この制限に対応するために、ブラウザーは `radio` 要素の子孫要素すべてに自動的にロール [`presentation`](/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role) を適用します。

例えば、見出しを含む次の `radio` 要素を考えてみましょう。

```html
<div role="radio"><h6>name of my radio</h6></div>
```

`radio` の子孫は存在するので、以下のコードは等価です。

```html
<div role="radio"><h6 role="presentation">name of my radio</h6></div>
```

支援技術ユーザーの視点から見ると、上記コードスニペットは[アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree)では以下と等価なので、見出しは存在しません。

```html
<div role="radio">name of my radio</div>
```

## 関連する WAI-ARIA ロール、状態、プロパティ

- [`radiogroup`](/ja/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) ロール

  - : ラジオボタンは `radiogroup` というロールを持つ要素に格納されているか、自分自身で所有しています。マークアップ内で `radiogroup` 内に入れ子にすることができない場合、 `radiogroup` の `aria-owns` 属性はグループ内の入れ子になっていないラジオボタンの `id` 値を格納します。

- [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

  - : `aria-checked` の値は radio の状態を定義します。 radio 要素で使用する場合、この属性は 2 つの取りうる値のうちの一つを保有します。

    - `true`
      - : ラジオボタンがチェックされています。
    - `false`
      - : ラジオボタンがチェックされていません。

> **メモ:** `role="radio"` をキーボードフォーカスを受け付けない要素に使用する場合は、 [`tabindex` 属性](/ja/docs/Web/HTML/Global_attributes/tabindex)を使用してください。例えば、 `<div>` や `<span>` などです。

## キーボード操作

- <kbd>Tab</kbd> + <kbd>Shift</kbd>

  - : ラジオグループへのフォーカスの移動と、ラジオグループからのフォーカスの移動。ラジオグループにフォーカスが移動し、ラジオボタンがすでにチェックされている場合、チェックされたボタンにフォーカスが設定されます。どのラジオボタンもチェックされていない場合は、グループの最初のラジオボタンに設定します。

- <kbd>Space</kbd>

  - : まだチェックされていないラジオボタンをチェックします。ラジオグループの前回チェックしたラジオボタンのチェックを外します。

- <kbd>→</kbd> および <kbd>↓</kbd>

  - : グループ内の次のラジオボタンにフォーカスを移動し、チェックされます。前回フォーカスが当たったラジオボタンのチェックは外されます。最後のラジオボタンにフォーカスがある場合、フォーカスは最初のラジオボタンに移動します。

- <kbd>←</kbd> および <kbd>↑</kbd>
  - : グループ内の前回チェックされたラジオボタンにフォーカスを移動し、前回フォーカスされたラジオボタンのチェックを外します。最初のラジオボタンにフォーカスがある場合、フォーカスは最後のラジオボタンに移動します。

### ツールバー内のラジオボタン

矢印キーはツールバーの要素間を移動するために使用し、 <kbd>Tab</kbd> キーはツールバーにフォーカスを移したり戻したりするので、ラジオグループがツールバーの中に入れ子になっている場合、ラジオグループのキーボード操作はツールバーの中にないラジオグループとは少し異なります。詳細は [`radiogroup` のキーボード操作](/ja/docs/Web/Accessibility/ARIA/Roles/radiogroup_role#keyboard_interactions)を参照してください。

## 必要な JavaScript

- `onClick`
  - : `aria-checked` 属性の値を変更することによって、ラジオボタンの状態を変更するラジオボタンと関連付けられたラベルの両方をマウスでクリックする処理と、ラジオボタンの外観を変更して、目の見えるユーザーにはチェックされているかチェックされていないかに見えるようにします。
- `onKeyPress`
  - : ユーザーが <kbd>Space</kbd> キーを押してラジオボタンの状態を変更する場合、 `aria-checked` 属性の値とラジオボタンの外観を変更して、目の見えるユーザーにはチェックされているかチェックされていないかに見えるように処理します。

## 例

次の例では、 ARIA を使用して、それ以外の一般的な要素をラジオボタンとして公開されるように変更しています。 CSS と JavaScript を使用して、要素のチェック状態またはチェックされていない状態を視覚的およびプログラム的に変更しています。

### HTML

```html
<div role="radiogroup" aria-labelledby="legend" id="radiogroup">
  <p id="legend">
    Should you be using the <code>radio</code> role or
    <code>&lt;input type="radio"></code>?
  </p>
  <div>
    <span
      role="radio"
      aria-checked="true"
      tabindex="0"
      aria-labelledby="ariaLabel"
      data-value="True"></span>
    <label id="ariaLabel">ARIA role</label>
  </div>
  <div>
    <span
      role="radio"
      aria-checked="false"
      tabindex="0"
      aria-labelledby="htmllabel"
      data-value="False"></span>
    <label id="htmllabel">HTML <code>&lt;input type="radio"></code></label>
  </div>
</div>
```

### CSS

```css
[role="radio"] {
  padding: 5px;
}

[role="radio"][aria-checked="true"]::before {
  content: "(x)";
  font-family: monospace;
}

[role="radio"][aria-checked="false"]::before {
  content: "( )";
  font-family: monospace;
}
```

### JavaScript

意味づけされていない HTML からラジオボタンを作るには、多くの JavaScript が必要になります。

```js
// initialize all the radio role elements

const radioGroups = document.querySelectorAll('[role="radiogroup"]');

for (let i = 0, groups = radioGroups.length; i < groups; i++) {
  const radios = radioGroups[i].querySelectorAll("[role=radio]");
  for (let j = 0, radiobuttons = radios.length; j < radios; j++) {
    radios[j].addEventListener("keydown", function () {
      handleKeydown();
    });
    radios[j].addEventListener("click", function () {
      handleClick();
    });
  }
}

// handle mouse and touch events
let handleClick = function (event) {
  setChecked(this);
  event.stopPropagation();
  event.preventDefault();
};

// handle key presses
let handleKeydown = function (event) {
  switch (event.keyCode) {
    case 32: // space
    case 12: // return
      currentChecked();
      break;

    case 38: // up
    case 37: // left
      previousRadioChecked();
      break;

    case 40: // down
    case 39: // right
      nextItemChecked();
      break;

    default:
      break;
  }
  event.stopPropagation();
  event.preventDefault();
};

// when a radio is selected, give it focus, set checked to true;
// ensure all other radios in radio group are not checked

setChecked = function () {
  // uncheck all the radios in group
  // iterated through all the radios in radio group
  // eachRadio.tabIndex = -1;
  // eachRadio.setAttribute('aria-checked', 'false');
  // set the selected radio to checked
  // thisRadio.setAttribute('aria-checked', 'true');
  // thisRadio.tabIndex = 0;
  // thisRadio.focus();
  // set the value of the radioGroup to the value of the currently selected radio
};
```

<!-- {{EmbedLiveSample("Examples", 230, 250)}} -->

ラジオボタンのグループ内の各ラジオボタンの名前が同じである意味づけされた HTML 要素を使用していれば、 JavaScript（あるいは CSS）は必要ありませんでした。

```html
<fieldset>
  <legend>
    Should you be using the <code>radio</code> role or
    <code>&lt;input type="radio"></code>?
  </legend>
  <div>
    <input type="radio" name="bestPractices" id="ariaLabel" value="True" />
    <label for="ariaLabel">ARIA role</label>
  </div>
  <div>
    <input type="radio" name="bestPractices" id="htmllabel" value="False" />
    <label for="htmllabel">HTML <code>&lt;input type="radio"></code></label>
  </div>
</fieldset>
```

## ベストプラクティス

ARIA の最初のルールは、ネイティブの HTML 要素や属性に要求される意味づけや動作がある場合、要素を再利用して ARIA ロール、状態、プロパティを追加してアクセシビリティを持たせるのではなく、それを使用することです。このように、 JavaScript と ARIA でラジオの機能を再作成する代わりに、ネイティブの [HTML ラジオボタン](/ja/docs/Web/HTML/Element/input/radio)フォームコントロールを使用することを推奨します。

## 関連情報

- [HTML `<input type="radio">` ラジオボタン](/ja/docs/Web/HTML/Element/input/radio)
- [HTML `tabindex` 属性](/ja/docs/Web/HTML/Global_attributes/tabindex)
- [ARIA: `radiogroup` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [ARIA: `checkbox` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [ARIA: `menuitem` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [ARIA: `menuitemradio` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `menuitemradio` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `option` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/option_role)
