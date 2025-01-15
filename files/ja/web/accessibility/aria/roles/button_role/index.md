---
title: "ARIA: button ロール"
slug: Web/Accessibility/ARIA/Roles/button_role
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

`button` ロールは、ユーザーによってアクティブ化されたときに反応を引き起こすクリック可能な要素のためのものです。 `role="button"` を追加すると、この要素がボタンであるものの、ボタンの機能を提供していないことをスクリーンリーダーに伝えます。代わりに {{HTMLElement("button")}} または {{HTMLElement("input")}} に `type="button"` を付けたものを使用してください。

## 解説

button ロールは、スクリーンリーダーなどの支援技術に対して、要素をボタンとして識別するものです。ボタンは、フォームを送信する、ダイアログを開く、アクションを取り消す、新しいレコードを挿入する、情報を表示するなどのコマンドを実行するために使用されるウィジェットです。 `role="button"` を追加すると、その要素がボタンであることを支援技術に指示しますが、ボタンの機能は提供しません。代わりに {{HTMLElement("button")}} または {{HTMLElement("input")}} に `type="button"` を付けたものを使用してください。

`button` ロールは [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 属性との組み合わせで、[トグルボタンを生成](#トグルボタン)するために使用することができます。

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

上記の例ではフォーカス可能なボタンを作成していますが、ボタンの外観や機能を含めるには、 JavaScript と CSS が必要です。 {{HTMLElement("button")}} や {{HTMLElement("input")}} に `type="button"` を付けた要素を使用すると、これらの機能が既定で提供されます。

```html
<button type="button" id="saveChanges">Save</button>
```

> **メモ:** `role="button"` を意味論的な `<button>` や `<input type="button">` 要素の代わりに使用する場合は、要素をフォーカス可能にし、 {{domxref("Element/click_event", "click")}} イベントと {{domxref("Element/keydown_event", "keydown")}} イベントのイベントハンドラーを定義する必要があります。これは、あらゆる形のユーザー入力を処理するために、 <kbd>Enter</kbd> キーと <kbd>Space</kbd> キーを取り扱うことを含みます。[公式の WAI-ARIA サンプルコード](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html)を参照してください。

通常のボタンウィジェットに加えて、ボタン以外の要素を使用してトグルボタンまたはメニューボタンを作成する場合は、`role="button"` を含める必要があります。

トグルボタンは、オフ (押されていない) またはオン (押されている) のいずれかが可能な 2 つの状態のボタンです。 [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 属性の `true` または `false` の値で、ボタンをトグルボタンとして認識します。

メニューボタンは、メニューを制御するボタンであり、 [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) プロパティ属性に `menu` または `true` が設定されています。

### すべての子孫が表示用途になる

プラットフォームのアクセシビリティ API で表わす際に、ユーザーインターフェイスのコンポーネントの種類によっては、テキストしか含むことができないことがあります。アクセシビリティ API には、 `button` に含まれる意味づけされた要素を表現する方法がありません。この制限に対応するため、ブラウザーでは、`button` 要素のすべての子孫要素に自動的に [`presentation`](/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role) ロールを適用します。これは、意味的な子をサポートしていないロールであるためです。

例えば、見出しを含む以下の `button` 要素を考えてみましょう。

```html
<div role="button"><h3>Title of my button</h3></div>
```

`button` の子孫は表示用途になるので、以下のコードと等価になります。

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

支援技術のユーザーの視点からは、見出しが存在しないことになります。上記のコード片は以下のものと[アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree)上では同じになるからです。

```html
<div role="button">Title of my button</div>
```

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
  - : ボタンをトグルボタンとして定義します。 `aria-pressed` の値は、ボタンの状態を表します。 値には、ボタンが現在押されていない場合は `aria-pressed="false"`、ボタンが現在押されていることを示す `aria-pressed="true"`、ボタンが部分的に押されていると見なされる場合は `aria-pressed="mixed"` が含まれます。 属性が省略されているか、デフォルト値の `aria-pressed="undefined"` に設定されている場合、要素は押されている状態をサポートしません。
- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : ボタンが他の要素のグループ化を制御している場合、`aria-expanded` 状態は、制御されているグループ化が現在展開されているか折りたたまれているかを示します。 ボタンに `aria-expanded="false"` が設定されている場合、グループ化は現在展開されていません。 ボタンに `aria-expanded="true"` が設定されている場合、現在展開されています。 ボタンに `aria-expanded="undefined"` が設定されているか、属性が省略されている場合、展開不可能です。

### 基本的なボタン

ボタンには常にアクセス可能な名前を付ける必要があります。 ほとんどのボタンでは、この名前はボタン内のテキストと同じになります。 場合によっては、例えばアイコンで表されるボタンの場合、アクセス可能な名前は [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 属性から提供される場合があります。

### トグルボタン

トグルボタンには通常、押された状態と押されていない状態の 2 つの状態があります。 3 番目の混合 (mixed) 状態は、他のトグルボタンやチェックボックスなど、すべてが同じ値を共有するわけではない他の要素を制御するトグルボタンで使用できます。 要素がトグルボタンであるかどうかは、 (要素がネイティブなボタン要素でない場合に) ボタン (`button`) ロールに加えて [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 属性で示すことができます。

- `aria-pressed` が使用されていない場合、または "undefined" 状態に設定されている場合、ボタンはトグルボタンではありません。
- `aria-pressed="false"` が使用されている場合、ボタンは現在押されていないトグルボタンです。
- `aria-pressed="true"` が使用されている場合、ボタンは現在押されているトグルボタンです。
- `aria-pressed="mixed"` が使用されている場合、ボタンは部分的に押されていると見なされます。

例として、「ミュート」というラベルの付いたオーディオプレーヤーのミュートボタンは、`aria-pressed` 状態を true に設定することで、音がミュートされていることを示します。 トグルボタンのラベルは、その状態が変化しても変更してはいけません。 この例では、ラベルは「ミュート」のままで、スクリーンリーダーは、`aria-pressed` の値に応じて、「ミュートトグルボタンが押されました」や「ミュートトグルボタンが押されていません」と読み上げます。 ボタンのラベルを「ミュート」から「ミュート解除」に変わるようなデザインであれば、トグルボタンは適切ではないため、`aria-pressed` 属性は省略されます。

### キーボードインタラクション

| キー             | 機能                       |
| ---------------- | -------------------------- |
| <kbd>Enter</kbd> | ボタンをアクティブ化する。 |
| <kbd>Space</kbd> | ボタンをアクティブ化する。 |

ボタンのアクティブ化に続いて、ボタンが実行するアクションの種類に応じてフォーカスが設定されます。 例えば、ボタンをクリックしてダイアログを開いた場合、フォーカスはダイアログに移動する必要があります。 ボタンがダイアログを閉じる場合、ダイアログのコンテキストで実行された機能が論理的に別の要素につながる場合を除いて、フォーカスはダイアログを開いたボタンに戻る必要があります。 オーディオファイルのミュートやミュート解除など、ボタンが現在のコンテキストを変更する場合、通常はボタンにフォーカスが残ります。

### 必要な JavaScript 機能

#### 必要なイベントハンドラー

ボタンは、マウス、タッチ、およびキーボードのユーザーが操作できます。 ネイティブな HTML の `<button>` 要素の場合、ボタンの `onclick` イベントは、マウスクリックの場合、およびボタンにフォーカスがあるときにユーザーが <kbd>Space</kbd> または <kbd>Enter</kbd> を押した場合に発生します。 ただし、別のタグを使用してボタンを作成すると、`role="button"` が使用されている場合でも、`onclick` イベントはマウスカーソルでクリックされたときにのみ発生します。 このため、<kbd>Space</kbd> キーまたは <kbd>Enter</kbd> キーが押されたときにボタンがトリガーされるように、個別のキーイベントハンドラーを要素に追加する必要があります。

- `onclick`
  - : マウスクリックイベントやタッチイベントを使用してボタンがアクティブ化されたときに発生するイベントを処理します。
- `onKeyDown`
  - : キーボードの Enter キーまたは Space キーを使用してボタンがアクティブ化されたときに発生するイベントを処理します。 ([非推奨の onKeyPress](/ja/docs/Web/API/Element/keypress_event) ではないことに注意してください)

## 例

### 基本的なボタンの例

この例では、 span 要素にボタン (`button`) ロールが与えられています。 `<span>` 要素が使用されるため、ボタンをフォーカス可能にし、ページのタブ順序の一部にするために、`tabindex` 属性が必要です。 含まれている CSS スタイルは、`<span>` 要素をボタンのように見せ、ボタンにフォーカスがあるときに視覚的な合図を提供するために提供されています。

`handleBtnClick` イベントハンドラーと `handleBtnKeyDown` イベントハンドラーは、マウスクリックまたは <kbd>Space</kbd> キーや <kbd>Enter</kbd> キーを使用してアクティブ化されると、ボタンのアクションを実行します。 この場合のアクションは、名前のリストに新しい名前を追加することです。

テキストボックスに名前を入れて、例を試してください。 ボタンを押すと、名前がリストに追加されます。

#### HTML

```html
<h1>ARIA Button Example</h1>
<ul id="nameList"></ul>
<label for="newName">Enter your Name: </label>
<input type="text" id="newName" />
<span
  role="button"
  tabindex="0"
  onclick="handleCommand(event)"
  onKeyDown="handleCommand(event)"
  >Add Name</span
>
```

#### CSS

```css
[role="button"] {
  padding: 2px;
  background-color: navy;
  color: white;
  cursor: default;
}
[role="button"]:hover,
[role="button"]:focus,
[role="button"]:active {
  background-color: white;
  color: navy;
}
ul {
  list-style: none;
}
```

#### JavaScript

```js
function handleCommand(event) {
  // マウスクリックと Enter または Space での
  // キーボードアクティブ化の両方を処理します

  // Enter と Space 以外のキー押下ではコマンドを起動しない
  if (
    event instanceof KeyboardEvent &&
    event.key !== "Enter" &&
    event.key !== " "
  ) {
    return;
  }

  // input 要素から新しい名前の値を取得します
  const newNameInput = document.getElementById("newName");
  const name = newNameInput.value;
  newNameInput.value = ""; // テキストフィールドをクリアします
  newNameInput.focus(); // テキストフィールドにフォーカスを与えて、追加する名前を入力できるようにします。

  // リストに空白のエントリーを追加しません。
  if (name.length > 0) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(name));

    // 新しい名前をリストに追加します。
    const list = document.getElementById("nameList");
    list.appendChild(listItem);
  }
}
```

#### 結果

{{EmbedLiveSample("Basic_button_example")}}

### トグルボタンの例

このスニペットでは、{{HTMLElement("span")}} 要素がボタン (`button`) ロールと `aria-pressed` 属性を使用してトグルボタンに変換されます。 ボタンがアクティブ化すると、`aria-pressed` の値の状態が切り替わり、`true` から `false` になり、そしてまた元に戻ります。

#### HTML

```html
<button
  type="button"
  onclick="handleBtnClick(event)"
  onKeyDown="handleBtnKeyDown(event)">
  Mute Audio
</button>

<span
  role="button"
  tabindex="0"
  aria-pressed="false"
  onclick="handleBtnClick(event)"
  onKeyDown="handleBtnKeyDown(event)">
  Mute Audio
</span>

<audio
  id="audio"
  src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3">
  Your browser does not support the `audio` element.
</audio>
```

#### CSS

```css
button,
[role="button"] {
  padding: 3px;
  border: 2px solid transparent;
}

button:active,
button:focus,
[role="button"][aria-pressed="true"] {
  border: 2px solid #000;
}
```

#### JavaScript

```js
function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyDown(event) {
  // スペースや Enter が押されたかどうかを確認します
  // "Spacebar" は IE11 に対応するため
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
    // 既定のアクションを防止して Space が押されたときにスクロールするのを止める
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  const audio = document.getElementById("audio");

  // ボタンが押されているかを確認します
  const pressed = element.getAttribute("aria-pressed") === "true";

  // aria-pressed を反対の状態に変更します
  element.setAttribute("aria-pressed", !pressed);

  // オーディオファイルの再生状態を切り替えます
  if (pressed) {
    audio.pause();
  } else {
    audio.play();
  }
}
```

#### 結果

{{EmbedLiveSample('Toggle_button_example')}}

## アクセシビリティの考慮

ボタンはインタラクティブなコントロールであるため、フォーカス可能です。 ボタン (`button`) ロールがそれ自体ではフォーカスできない要素 (`<span>`、`<div>`、`<p>` など) に追加された場合、ボタンをフォーカス可能にするには `tabindex` 属性を使用する必要があります。

> [!WARNING]
> ボタンロールでリンクをマークアップするときは注意してください。 ボタンは <kbd>Space</kbd> キーや <kbd>Enter</kbd> キーを使用して操作することが期待されますが、リンクは <kbd>Enter</kbd> キーを使用して操作することが期待されます。つまり、リンクをボタンのような振る舞いで使用する場合、 `role="button"` を追加するだけでは不十分です。 ネイティブなボタンとの一貫性を保つために、<kbd>Space</kbd> キーを待ち受けするキーイベントハンドラーを追加する必要もあります。

ボタン (`button`) ロールを使用すると、スクリーンリーダーは要素をボタンとしてアナウンスします。 通常、「クリック」の後にボタンのアクセス可能な名前が続きます。 アクセス可能な名前は、要素のコンテンツ、または `aria-label` の値、または `aria-labelledby` 属性によって参照される要素、または含まれている場合は説明のいずれかです。

## ベストプラクティス

リンクがボタンのアクションを実行する場合、要素に `role="button"` を指定すると、支援技術のユーザーが要素の機能を理解するのに役立ちます。 ただし、より良い解決策は、機能と ARIA のロールに一致するようにビジュアルデザインを調整することです。 可能な場合は、ボタン (`button`) ロールではなく、ネイティブな HTML のボタン (`<button>`、`<input type="button">`、`<input type="submit">`、`<input type="reset">`、および　`<input type="image">`) を使用することをお勧めします。 ネイティブな HTML のボタンは、すべてのユーザーエージェントと支援技術によってサポートされており、追加のカスタマイズを必要とせずに、デフォルトでキーボードとフォーカスの要件を提供します。

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('button')}} 要素
- {{HTMLElement("input")}} 要素
- [`<input type="button">`](/ja/docs/Web/HTML/Element/input/button)
- [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit)
- [`<input type="reset">`](/ja/docs/Web/HTML/Element/input/reset)
- [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed)
- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded)
- [`aria-haspopup`](https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup)
- [Strong native semantics in HTML5](https://html.spec.whatwg.org/multipage/dom.html#aria-usage-note)
- [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/)
- [Official WAI-ARIA example code](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html)

<section id="Quick_links">

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}

</section>
