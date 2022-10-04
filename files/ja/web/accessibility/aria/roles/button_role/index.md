---
title: 'ARIA: button ロール'
slug: Web/Accessibility/ARIA/Roles/button_role
---

ボタン (**[button](https://www.w3.org/WAI/PF/aria/roles#button)**) ロールは、ユーザーによってアクティブ化されたときに反応を引き起こすクリック可能な要素に使用する必要があります。 `role="button"` を追加すると、要素がスクリーンリーダーにボタンコントロールとして表示されます。 このロールを `aria-pressed` 属性と組み合わせて使用することで、トグルボタンを作成できます。

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

上記の例では、フォーカス順で最初の単純なボタンを作成しますが、次のように、ボタンには {{HTMLElement("button")}} や {{HTMLElement("input")}} と `type="button"` を使用するべきです。

```html
<button id="saveChanges">Save</button>
```

> **メモ:** 意味論的な `<button>` や `<input type="button">` 要素の代わりに role="button" を使用する場合は、要素をフォーカス可能にし、ユーザーの入力を処理するためにクリック ({{event("click")}}) イベントと <kbd>Enter</kbd> キーと <kbd>Space</kbd> キーを含むキーダウン ({{event("keydown")}}) イベントのイベントハンドラーを定義する必要があります。 [公式の WAI-ARIA サンプルコード](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html)を参照してください。

## 説明

ボタンロールは、要素をボタンとしてスクリーンリーダーに認識させます。 ボタンは、フォームの送信、ダイアログのオープン、アクションのキャンセル、新しいレコードの挿入や情報の表示などのコマンドの実行などのアクションを実行するために使用するウィジェットです。

ボタンがダイアログを開くことをユーザーに通知する一般的な規則は、ボタンのラベルに "…" (省略記号) を追加することです (例: 「名前を付けて保存…」) 。

通常のボタンウィジェットに加えて、ボタン以外の要素を使用してトグルボタンまたはメニューボタンを作成する場合は、`role="button"` を含める必要があります。 トグルボタンは、オフ (押されていない) またはオン (押されている) のいずれかが可能な 2 つの状態のボタンです。 `true` または `false` の `aria-pressed` 属性値は、ボタンをトグルボタンとして認識させます。 メニューボタンは、メニューを制御するボタンであり、`aria-haspopup` プロパティ属性に menu または `true` が設定されています。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- `aria-pressed`
  - : ボタンをトグルボタンとして定義します。 `aria-pressed` の値は、ボタンの状態を表します。 値には、ボタンが現在押されていない場合は `aria-pressed="false"`、ボタンが現在押されていることを示す `aria-pressed="true"`、ボタンが部分的に押されていると見なされる場合は `aria-pressed="mixed"` が含まれます。 属性が省略されているか、デフォルト値の `aria-pressed="undefined"` に設定されている場合、要素は押されている状態をサポートしません。
- `aria-expanded`
  - : ボタンが他の要素のグループ化を制御している場合、`aria-expanded` 状態は、制御されているグループ化が現在展開されているか折りたたまれているかを示します。 ボタンに `aria-expanded="false"` が設定されている場合、グループ化は現在展開されていません。 ボタンに `aria-expanded="true"` が設定されている場合、現在展開されています。 ボタンに `aria-expanded="undefined"` が設定されているか、属性が省略されている場合、展開不可能です。

### 基本的なボタン

ボタンには常にアクセス可能な名前を付ける必要があります。 ほとんどのボタンでは、この名前はボタン内のテキストと同じになります。 場合によっては、例えばアイコンで表されるボタンの場合、アクセス可能な名前は [`aria-label`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) 属性から提供される場合があります。

### トグルボタン

トグルボタンには通常、押された状態と押されていない状態の 2 つの状態があります。 3 番目の混合 (mixed) 状態は、他のトグルボタンやチェックボックスなど、すべてが同じ値を共有するわけではない他の要素を制御するトグルボタンで使用できます。 要素がトグルボタンであるかどうかは、 (要素がまだネイティブなボタン要素でない場合に) ボタン (`button`) ロールに加えて `aria-pressed` 属性で示すことができます。

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

ボタンのアクティブ化に続いて、ボタンが実行するアクションのタイプに応じてフォーカスが設定されます。 例えば、ボタンをクリックしてダイアログを開いた場合、フォーカスはダイアログに移動する必要があります。 ボタンがダイアログを閉じる場合、ダイアログのコンテキストで実行された機能が論理的に別の要素につながる場合を除いて、フォーカスはダイアログを開いたボタンに戻る必要があります。 オーディオファイルのミュートやミュート解除など、ボタンが現在のコンテキストを変更する場合、通常はボタンにフォーカスが残ります。

### 必要な JavaScript 機能

#### 必要なイベントハンドラー

ボタンは、マウス、タッチ、およびキーボードのユーザーが操作できます。 ネイティブな HTML の `<button>` 要素の場合、ボタンの `onclick` イベントは、マウスクリックの場合、およびボタンにフォーカスがあるときにユーザーが <kbd>Space</kbd> または <kbd>Enter</kbd> を押した場合に発生します。 ただし、別のタグを使用してボタンを作成すると、`role="button"` が使用されている場合でも、`onclick` イベントはマウスカーソルでクリックされたときにのみ発生します。 このため、<kbd>Space</kbd> キーまたは <kbd>Enter</kbd> キーが押されたときにボタンがトリガーされるように、個別のキーイベントハンドラーを要素に追加する必要があります。

- `onclick`
  - : マウスクリックイベントやタッチイベントを使用してボタンがアクティブ化されたときに発生するイベントを処理します。
- `onKeyDown`
  - : キーボードの Enter キーまたは Space キーを使用してボタンがアクティブ化されたときに発生するイベントを処理します。 ([非推奨の onKeyPress](/ja/docs/Web/API/Document/keypress_event) ではないことに注意してください)

#### 属性値の変更

#### aria-pressed

aria-pressed の値は、トグルボタンの状態を定義します。 この属性には、次の 4 つの値のいずれかがあります。

`true`, `false`, `mixed`, `undefined`

## 例

### 基本的なボタンの例

この例では、スパン要素にボタン (`button`) ロールが与えられています。 `<span>` 要素が使用されるため、ボタンをフォーカス可能にし、ページのタブ順序の一部にするために、`tabindex` 属性が必要です。 含まれている CSS スタイルは、`<span>` 要素をボタンのように見せ、ボタンにフォーカスがあるときに視覚的な合図を提供するために提供されています。

`handleBtnClick` イベントハンドラーと `handleBtnKeyDown` イベントハンドラーは、マウスクリックまたは <kbd>Space</kbd> キーや <kbd>Enter</kbd> キーを使用してアクティブ化されると、ボタンのアクションを実行します。 この場合のアクションは、名前のリストに新しい名前を追加することです。

テキストボックスに名前を入れて、例を試してください。 ボタンを押すと、名前がリストに追加されます。

#### HTML

```html
    <h1>ARIA Button Example</h1>
    <ul id="nameList"></ul>
    <label for="newName">Enter your Name: </label>
    <input type="text" id="newName">
    <span role="button" tabindex="0" onclick="handleCommand()" onKeyDown="handleCommand()">Add Name</span>
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

    // input 要素から新しい名前の値を取得します
    let newNameInput = document.getElementById('newName');
    let name = newNameInput.value;
    newNameInput.value = ''; // テキストフィールドをクリアします
    newNameInput.focus();  // テキストフィールドにフォーカスを与えて、追加する名前を入力できるようにします。

    // リストに空白のエントリーを追加しません。
    if(name.length > 0) {
        listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(name));

        // 新しい名前をリストに追加します。
        let list = document.getElementById('nameList');
        list.appendChild(listItem);
    }
}
```

#### 例

{{EmbedLiveSample("Basic_button_example")}}

### トグルボタンの例

このスニペットでは、{{HTMLElement("span")}} 要素がボタン (`button`) ロールと `aria-pressed` 属性を使用してトグルボタンに変換されます。 ボタンがアクティブ化すると、`aria-pressed` の値の状態が切り替わり、`true` から `false` になり、そしてまた元に戻ります。

#### HTML

```html
<button type="button" onclick="handleBtnClick()" onKeyDown="handleBtnKeyDown()">
  Mute Audio
</button>

<span role="button" tabindex="0"
 aria-pressed="false" onclick="handleBtnClick(event)"
 onKeyDown="handleBtnKeyDown(event)">
  Mute Audio
</span>

<audio id="audio" src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3">
  Your browser does not support the <code>audio</code> element.
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
  // Space や Enter が押されたかどうかを確認します
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // IE11 サポートのための "Spacebar"
    // デフォルトのアクションを防止して Space が押されたときにスクロールするのを止める
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  var audio = document.getElementById('audio');
  // ボタンが押されているかを確認します
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // aria-pressed を反対の状態に変更します
  element.setAttribute("aria-pressed", !pressed);
  // オーディオファイルの再生状態を切り替えます
  if(pressed) {
     audio.pause();
  } else {
     audio.play();
  }
}
```

#### 結果

{{EmbedLiveSample('Toggle_button_example')}}

## アクセシビリティの懸念

ボタンはインタラクティブなコントロールであるため、フォーカス可能です。 ボタン (`button`) ロールがそれ自体ではフォーカスできない要素 (`<span>`、`<div>`、`<p>` など) に追加された場合、ボタンをフォーカス可能にするには `tabindex` 属性を使用する必要があります。

> **警告:** ボタンロールでリンクをマークアップするときは注意してください。 ボタンは <kbd>Space</kbd> キーや <kbd>Enter</kbd> キーを使用してトリガーされることが期待されますが、リンクは <kbd>Enter</kbd> キーを使用してトリガーされることが期待されます。 つまり、リンクがボタンのように振る舞うために使用される場合、`role="button"` を追加するだけでは不十分です。 ネイティブなボタンとの一貫性を保つために、<kbd>Space</kbd> キーをリッスンするキーイベントハンドラーを追加する必要もあります。

ボタン (`button`) ロールを使用すると、スクリーンリーダーは要素をボタンとしてアナウンスします。 通常、「クリック」の後にボタンのアクセス可能な名前が続きます。 アクセス可能な名前は、要素のコンテンツ、または `aria-label` の値、または `aria-labelledby` 属性によって参照される要素、または含まれている場合は説明のいずれかです。

## ベストプラクティス

リンクがボタンのアクションを実行する場合、要素に `role="button"` を指定すると、支援技術のユーザーが要素の機能を理解するのに役立ちます。 ただし、より良い解決策は、機能と ARIA のロールに一致するようにビジュアルデザインを調整することです。 可能な場合は、ボタン (`button`) ロールではなく、ネイティブな HTML のボタン (`<button>`、`<input type="button">`、`<input type="submit">`、`<input type="reset">`、および　`<input type="image">`) を使用することをお勧めします。 ネイティブな HTML のボタンは、すべてのユーザーエージェントと支援技術によってサポートされており、追加のカスタマイズを必要とせずに、デフォルトでキーボードとフォーカスの要件を提供します。

## 仕様

| 仕様                                                                             | 状態                                             |
| -------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#button","button")}}                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices","#button","button")}} | {{Spec2('ARIA Authoring Practices')}} |

## 注記

### 使用された ARIA 属性

- [`button`](https://www.w3.org/TR/wai-aria/roles#button)
- [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed)
- `aria-expanded`
- `aria-haspopup`

### その他のリソース

- [HTML5 の強力でネイティブな意味論](https://www.w3.org/TR/html5/dom.html#aria-usage-note) (英語)
- [HTML での ARIA の使用に関する注意](https://www.w3.org/TR/aria-in-html/) (英語)
- [公式の WAI-ARIA サンプルコード](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html) (英語)
- [ARIA: menubutton ロール](/ja/docs/Web/Accessibility/ARIA/Roles/menubutton_role)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
