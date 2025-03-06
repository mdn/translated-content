---
title: "<dialog>: ダイアログ要素"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: be7cf520036291031985ab0b38c487539b1faa9d
---

{{HTMLSidebar}}

**`<dialog>`** は [HTML](/ja/docs/Web/HTML) の要素で、モーダルまたは非モーダルダイアログボックスや、それ以外の消すことができるアラート、インスペクター、サブウィンドウなどのような対話的コンポーネントを表します。

HTML の `<dialog>` 要素は、モーダルダイアログボックスと非モーダルダイアログボックスのどちらを作成する時にも使用します。 モーダルダイアログボックスは、ページの他の部分との操作を中断し、非モーダルダイアログボックスは、ページの他の部分との操作を許可します。

`<dialog>` 要素を表示するには、JavaScript を使用して下さい。モーダルダイアログを表示するには {{domxref("HTMLDialogElement.showModal()", ".showModal()")}} メソッドを、非モーダルダイアログを表示するには {{domxref("HTMLDialogElement.show()", ".show()")}} メソッドを使用して下さい。ダイアログボックスは {{domxref("HTMLDialogElement.close()", ".close()")}} メソッドを使用するか、または `<dialog>` 要素内に含まれる `<form>` フォームを送信する際に [`dialog`](/ja/docs/Web/HTML/Element/form#method) メソッドを使用して閉じることができます。モーダルダイアログは、<kbd>Esc</kbd> キーを押すことでも閉じることができます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

> **警告:** `tabindex` 属性を `<dialog>` 要素で使用してはいけません。詳しく[使用上の注意](#使用上の注意)を参照してください。

- `open`

  - : ダイアログボックスがアクティブであり、操作できる状態であることを示します。 `open` が設定されていない場合、ダイアログボックスはユーザーに表示されません。
    ダイアログを表示するには、`open` 属性ではなく `.show()` または `.showModal()` メソッドを使用することが推奨されます。もし `<dialog>` が `open` 属性を使用して開かれた場合、そのダイアログは非モーダルになります。

    > [!NOTE]
    > モーダルではないダイアログボックスの開いた状態と閉じた状態を切り替えるには、`open` 属性の有無を切り替えることができますが、この手法は推奨されません。

## 使用上の注意

- HTML の {{HTMLElement("form")}} 要素は、属性 method=「dialog」 を保有している場合、またはフォームを送信するボタンに [`formmethod="dialog"`](/ja/docs/Web/HTML/Element/input#formmethod) が設定されている場合に、ダイアログボックスを閉じることができます。 `<dialog>` 内の `<form>` が `dialog` メソッドで確定されると、ダイアログボックスが閉じられ、そのフォームコントロールの状態が保存されますが、送信はされません。また、 {{domxref("HTMLDialogElement.returnValue", "returnValue")}} プロパティは、押されたボタンの値に設定されます。
- CSS の {{cssxref('::backdrop')}} 擬似要素は、モーダルダイアログの背景をスタイル設定するために使用することができます。これは、{{domxref("HTMLDialogElement.showModal()")}} メソッドを使用してダイアログを表示した際に、`<dialog>` 要素の背後に表示されます。例えば、この擬似要素を使用して、モーダルダイアログの背後の無効なコンテンツをぼかしたり、暗くしたり、といった方法で分かりにくくすることができます。
- [`autofocus`](/ja/docs/Web/HTML/Global_attributes/autofocus) 属性を、モーダルダイアログが開いた直後にユーザーが操作することが想定される要素に追加すべきです。他に即座の操作が想定される要素がない場合は、`autofocus` をダイアログ内の［閉じる］ボタンに追加するか、ユーザーがクリック/アクティブにして閉じることが想定される場合はダイアログ自体に追加することをお勧めします。
- `<dialog>` 要素に `tabindex` プロパティを追加しないでください。この要素は操作対象ではなく、フォーカスを受け取らないからです。ダイアログの内容は（ダイアログに含まれない閉じるボタンを含め）、フォーカスを受け取ることができ、操作対象となります。

## アクセシビリティ

ダイアログを実装する際には、ユーザーのフォーカスを設定する場所として最も適切な場所を検討することが重要です。{{domxref("HTMLDialogElement.showModal()")}} を用いて `<dialog>` を開いたとき、フォーカスは内部で最初のフォーカス可能な要素に設定されます。[`autofocus`](/ja/docs/Web/HTML/Global_attributes/autofocus) 属性を使用して初期フォーカスの配置を明確に示すと、特定のダイアログに対して最適な初期フォーカスの配置とみなされる要素に初期フォーカスが設定するのに役立ちます。ダイアログの初期フォーカスがどこに設定されるか常にわからない場合、特にダイアログのコンテンツが呼び出されたときに動的に描画される場合、必要であれば `<dialog>` 要素そのものにフォーカスを当てることが、初期フォーカスの配置として最適と判断されるかもしれません。

ユーザーがダイアログを閉じることができる機構を確実に用意してください。すべてのユーザーが確実にダイアログを閉じることができるようにする最も確実な方法は、閉じるための明確なボタンを記載することです。例えば、確認、キャンセル、閉じるなどのボタンが適切です。

既定では、`showModal()` メソッドによって呼び出されたダイアログは、<kbd>Esc</kbd> によって閉じることができます。非モーダルダイアログでは、既定では <kbd>Esc</kbd> キーで閉じませんし、非モーダルダイアログが表すものによっては、この動作が望ましくない場合があります。キーボードの利用者は、<kbd>Esc</kbd> キーでモーダルダイアログを閉じることを期待します。この動作が実装され、維持されていることを確認してください。複数のモーダルダイアログが開いている場合、<kbd>Esc</kbd> は最後に示されたダイアログのみを閉じるようにします。`<dialog>` を使用した場合、この動作はブラウザーによって提供されます。

ダイアログは他の要素を使用して作成することができますが、ネイティブの `<dialog>` 要素は、同様の目的で他の要素を使用する場合は再現しなければならないユーザビリティとアクセシビリティ機能を提供します。独自のダイアログ実装を作成する場合は、すべての期待される既定の動作に対応しており、適切なラベル付けの推奨事項に従うことを保証してください。

`<dialog>` 要素は、ARIA の [role="dialog"](/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role) 属性を使用した独自ダイアログと同じような形で、ブラウザーが提供します。`<dialog>` 要素が `showModal()` メソッドで呼び出された場合、暗黙のうちに [aria-modal="true"](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-modal) となり、一方 `<dialog>` が `show()` メソッド、または `open` 属性を使用して表示されたり `<dialog>` の既定の `display` を変更した場合は `[aria-modal="false"]` として表示されます。モーダルダイアログを実装する際には、`<dialog>` とそのコンテンツ以外は [`inert`](/ja/docs/Web/HTML/Global_attributes/inert) 属性を使って不活性化する必要があります。`<dialog>` を `HTMLDialogElement.showModal()` メソッドで使用した場合、この動作はブラウザーが提供します。

## 例

### HTML のみのダイアログ

この例は、HTML のみを使用して、モーダルではないダイアログの作成方法を示しています。論理属性 `open` が `<dialog>` 要素にあるため、ページが読み込まれるとダイアログが開いた状態で表示されます。 `<form>` 要素の `method` 属性が `"dialog"` に設定されているため、ダイアログは［OK］ボタンをクリックすることで閉じることができます。 この場合、フォームを閉じるために JavaScript は必要ありません。

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### 結果

{{EmbedLiveSample("HTML-only_dialog", "100%", 200)}}

> [!NOTE]
> 出力結果をリセットするには、このページを再読み込みしてください。

このダイアログは、`open` 属性が存在するために最初に開かれます。`open` 属性を使用して表示されるダイアログは、モーダルではありません。［OK］をクリックすると、ダイアログは閉じられ、結果フレームは空になります。ダイアログが閉じられた後、それを再度開くための方法は提供されていません。このため、モーダルではないダイアログを表示するには、 {{domxref("HTMLDialogElement.show()")}} メソッドを使用するのが推奨されます。論理属性である `open` を追加または削除することで、ダイアログの表示を切り替えることも可能ですが、推奨される方法ではありません。

### モーダルダイアログの作成

この例では、[グラデーション](/ja/docs/Web/CSS/gradient)の背景を持つモーダルダイアログを示しています。`.showModal()` メソッドは、［ダイアログを表示］ボタンが押された際に、モーダルダイアログを開くためのものです。ダイアログは、<kbd>Esc</kbd> キーを押すか、ダイアログ内の［閉じる］ボタンが押された際に `close()` メソッドを使用することで閉じることができます。

ダイアログが開くと、既定では、ブラウザーはダイアログ内でフォーカス可能な最初の要素にフォーカスを当てます。この例では、 [`autofocus`](/ja/docs/Web/HTML/Global_attributes/autofocus) 属性が［閉じる］ボタンに適用されており、このボタンにダイアログが開いたときにフォーカスが当たります。これは、ダイアログが開いた直後にユーザーが対話すると想定される要素だからです。

#### HTML

```html
<dialog>
  <button autofocus>閉じる</button>
  <p>このモーダルダイアログの背景はクールです！</p>
</dialog>
<button>ダイアログを表示</button>
```

#### CSS

ダイアログの背景は、{{cssxref('::backdrop')}} 擬似要素を使用してスタイル設定することができます。

```css
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
```

#### JavaScript

ダイアログは、`.showModal()` メソッドを使用してモーダルに開かれ、`.close()` メソッドを使用して閉じられます。

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// ［ダイアログを表示］ボタンでダイアログがモーダルに開く
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// ［閉じる］ボタンでダイアログを閉じる
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### 結果

{{EmbedLiveSample("Creating_a_modal_dialog", "100%", 200)}}

モーダルダイアログが表示されると、存在する他のダイアログの上に表示されます。モーダルダイアログの外側にあるものはすべて無効となり、ダイアログ外での操作はブロックされます。ダイアログが開いている間は、ダイアログ自体を除いて、文書内の操作は不可能であることに注意してください。［ダイアログを表示］ボタンは、ほとんど不透明なダイアログの背景によってほとんど隠されてしまい、無効となります。

### ダイアログからの返値を扱い

この例では、`<dialog>` 要素の [`returnValue`](/ja/docs/Web/API/HTMLDialogElement/returnValue) と、フォームを使用してモーダルダイアログを閉じる方法を示しています。 既定では、`returnValue` は空文字列、または `<dialog>` 要素内にフォームを送信するボタンがある場合はその値となります。

この例では、［ダイアログを表示］ボタンが押されるとモーダルダイアログが開きます。ダイアログには、{{HTMLElement("select")}} と 2 つの {{HTMLElement("button")}} 要素という形でフォームが含まれており、既定では `type="submit"` となっています。イベントリスナーは、選択オプションが変更された際に［確認］ボタンの値を更新します。［確認］ボタンがダイアログを閉じるために有効化された場合、ボタンの現在の値が返値となります。［キャンセル］ボタンが押されてダイアログが閉じられた場合、 `returnValue` は `cancel` となります。

ダイアログが閉じられると、返値が［ダイアログを表示］ボタンの下に表示されます。 <kbd>Esc</kbd> キーを押してダイアログが閉じられた場合、 `returnValue` は更新されず、 `close` イベントも発生しないため、{{HTMLElement("output")}} 内のテキストは更新されません。

#### HTML

```html
<!-- フォームのあるモーダルダイアログ -->
<dialog id="favDialog">
  <form>
    <p>
      <label>
        好きな動物は？
        <select>
          <option value="default">選択してください…</option>
          <option>ブラインシュリンプ</option>
          <option>レッサーパンダ</option>
          <option>クモザル</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">キャンセル</button>
      <button id="confirmBtn" value="default">確認</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">ダイアログを表示</button>
</p>
<output></output>
```

#### JavaScript

```js
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" ボタンで <dialog> をモーダルに開く
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" ボタンで [formmethod="dialog"] による送信を行わずにダイアログを閉じ、close イベントを発行する
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}`; // 空文字列ではなく、既定値かどうかを調べる必要がある
});

// ［確認］ボタンが既定でフォームを送信しないようにし、`close()` メソッドでダイアログを閉じ、"close" イベントを発生させる
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // この偽フォームを送信しない
  favDialog.close(selectEl.value); // ここで選択ボックスの値を送る必要がある
});
```

#### 結果

{{EmbedLiveSample("Handling the return value from the dialog", "100%", 300)}}

上記の例では、上記の例は、モーダルダイアログを閉じる次の 3 つのメソッドを示しています。

- ダイアログフォーム内のフォームを、`dialog` メソッドを使用して確定することによって（例えば、[HTML のみの例](#html_のみのダイアログ)を参照）。
- <kbd>Esc</kbd> キーを押すことよって。
- {{domxref("HTMLDialogElement.close()")}} メソッドを呼び出すことによって（[モーダルの例](#モーダルダイアログの作成)にあるように）。
  この例では、［キャンセル］ボタンはダイアログフォームメソッドを介してダイアログを閉じ、［確認］ボタンは {{domxref("HTMLDialogElement.close()")}} メソッドを介してダイアログを閉じます。

［キャンセル］ボタンには [`formmethod="dialog"`](/ja/docs/Web/HTML/Element/input/submit#formmethod) が含まれており、 {{HTMLElement("form")}} の既定の {{HTTPMethod("GET")}} メソッド ([`method`](/ja/docs/Web/HTML/Element/form#method)) を上書きします。フォームのメソッドが [`dialog`](#usage_notes) の場合、フォームの状態は送信されずに保存され、ダイアログは閉じられます。

`action` がない場合、既定の {{HTTPMethod("GET")}} メソッドでフォームを送信すると、ページの再読み込みが発生します。JavaScript を使用して、送信を阻止し、ダイアログを閉じるために、それぞれ {{domxref("event.preventDefault()")}} と {{domxref("HTMLDialogElement.close()")}} メソッドを使用しています。

すべての `dialog` 要素で閉じるための仕組みを提供することが重要です。既定では、非モーダルのダイアログは <kbd>Esc</kbd> キーでは閉じませんし、ユーザーが物理キーボードにアクセスすることも想定してはいけません（たとえば、キーボードにアクセスできないタッチ画面端末を使用している人もいます）。

### 必須フォーム入力付きのダイアログを閉じる

ダイアログ内のフォームに必須入力項目がある場合、ユーザーエージェントは、必須入力項目に値が入力されるまで、ダイアログを閉じることができません。このようなダイアログを閉じるには、［閉じる］ボタンに [`formnovalidate`](/ja/docs/Web/HTML/Element/input#formnovalidate) 属性を使用するか、［閉じる］ボタンがクリックされたときにダイアログオブジェクトの `close()` メソッドを呼び出すかしてください。

```html
<dialog id="dialog">
  <form method="dialog">
    <p>
      <label>
        好きな動物は？
        <input type="text" required />
      </label>
    </p>
    <div>
      <input type="submit" id="normal-close" value="通常 閉じる" />
      <input
        type="submit"
        id="novalidate-close"
        value="無検証 閉じる"
        formnovalidate />
      <input type="submit" id="js-close" value="JS 閉じる" />
    </div>
  </form>
</dialog>
<p>
  <button id="show-dialog">ダイアログを表示</button>
</p>
<output></output>
```

```css hidden
[type="submit"] {
  margin-right: 1rem;
}
```

#### JavaScript

```js
const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});
```

#### 結果

{{EmbedLiveSample("Closing a dialog with a required form input", "100%", 300)}}

出力から、［通常 閉じる］ボタンを使用してダイアログを閉じることができないことが分かります。しかし、［無検証 閉じる］ボタンの `formnovalidate` 属性を使用してフォームの検証をバイパスすれば、ダイアログを閉じることができます。プログラム上では、`dialog.close()` を使用しても同様にダイアログを閉じることができます。

### アニメーションするダイアログ

`<dialog>` 要素は、非表示時には [`display: none;`](/ja/docs/Web/CSS/display) 表示時には `display: block;` と設定され、{{glossary("top layer","最上位レイヤー")}}および[アクセシビリティツリー](/ja/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree)から削除されたり、追加されたりします。したがって、 `<dialog>` 要素をアニメーションさせるには、 {{cssxref("display")}} プロパティをアニメーション化する必要があります。[対応ブラウザー](/ja/docs/Web/CSS/display#ブラウザーの互換性)では、`display` プロパティを[離散的なアニメーション型](/ja/docs/Web/CSS/CSS_animated_properties#離散)で変化させてアニメーション化します。具体的には、ブラウザーは `none` と他の `display` 値を交互に切り替えることで、アニメーション化されたコンテンツがアニメーションの全期間にわたって表示されるようにします。

例えば、

- `display` を `none` から `block`（あるいは他の可視の `display` 値）にアニメーションする場合、アニメーション再生時間の `0%` で値が `block` に切り替わり、常に表示されます。
- `display` の `block`（または他の可視の `display` 値）から `none` へのアニメーションでは、アニメーション再生時間の `100%` の時点で値が `none` に切り替わるため、全体を通して表示されます。

> **メモ:** [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions)を使用してアニメーションを行う場合、上記の動作を有効にするには [`transition-behavior: allow-discrete`](/ja/docs/Web/CSS/transition-behavior) を設定する必要があります。[CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)でアニメーションを行う場合、この動作は既定では利用でき、同等の手順は必要ありません。

#### dialog 要素のトランジション

CSS トランジションで `<dialog>` をアニメーションさせる場合、以下の機能が要求されます。

- [`@starting-style`](/ja/docs/Web/CSS/@starting-style) アットルール
  - : `<dialog>` に設定されたプロパティの、開かれるたびにトランジションする開始値のセットを提供します。これは予期せぬ動作を避けるために必要です。既定では、CSS トランジションは、可視要素のプロパティが 1 つの値から別の値に変更された場合のみ発生します。要素の最初のスタイル更新時や、`display` の型が `none` から別の型に変更された場合には発生しません。
- [`display`](/ja/docs/Web/CSS/display) プロパティ
  - : トランジションのリストに `display` を追加すると、トランジションの再生時間中、`<dialog>` が `display: block`（またはダイアログが開いている状態として設定されている他の可視 `display` 値）のままになり、他にもトランジションが確実に表示されます。
- [`overlay`](/ja/docs/Web/CSS/overlay) プロパティ
  - : トランジションのリストに `overlay` が含まれていると、最上位レイヤーから `<dialog>` が確実に除去されるまでトランジションが完了するまで遅延され、トランジションが確実に表示されるようになります。
- {{cssxref("transition-behavior")}} プロパティ
  - : `transition-behavior: allow-discrete` を `display` と `overlay` トランジション（または {{cssxref("transition")}} 一括指定）に設定すると、既定ではアニメーションできないこれら2つのプロパティで離散トランジションが有効になります。

この機能がどのようなものか見ていくために、例えば次のような例を挙げてみましょう。

##### HTML

この HTML は `<dialog>` 要素と、ダイアログを表示させるためのボタンを格納しています。さらに、`<dialog>` 要素には、それ自体を閉じさせるためのボタンがもう一つ格納されています。

```html
<dialog id="dialog">
  ここがコンテンツ
  <button class="close">閉じる</button>
</dialog>

<button class="show">モーダル表示</button>
```

##### CSS

CSS では、`@starting-style` ブロックを記述して、`opacity` および `transform` プロパティのトランジション開始時のスタイル、`dialog[open]` 状態のトランジション終了時のスタイル、`<dialog>` が表示された後に元の状態に戻る際の既定の `dialog` 状態のスタイルを定義します。注意してほしいのは、 `<dialog>` の `transition` リストには、これらのプロパティだけでなく、`display` と `overlay` プロパティも含まれ、それぞれに `allow-discrete` が設定されていることです。

また、開いたときに現れる `<dialog>` の背後に現れる [`::backdrop`](/ja/docs/Web/CSS/::backdrop) の {{cssxref("background-color")}} プロパティに開始時のスタイル値を設定し、素敵な暗転アニメーションを指定しました。 `dialog[open]::backdrop` セレクターは、ダイアログが開いているときに、`<dialog>` 要素の背景のみを選択します。

```css
/*   開いた状態のダイアログ  */
dialog[open] {
  opacity: 1;
  transform: scaleY(1);
}

/*   閉じた状態のダイアログ   */
dialog {
  opacity: 0;
  transform: scaleY(0);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out,
    overlay 0.7s ease-out allow-discrete,
    display 0.7s ease-out allow-discrete;
  /* transition: all 0.7s allow-discrete;
  と等しい*/
}

/*   開く前の状態  */
/* 詳細度が同じであるため、前の dialog[open] ルールの後に置かなければ効果がありません */
@starting-style {
  dialog[open] {
    opacity: 0;
    transform: scaleY(0);
  }
}

/* ダイアログがモーダルで最上位に来た場合に :backdrop をトランジションする */
dialog::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* transition: all 0.7s allow-discrete;
  と等しい */
}

dialog[open]::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* この開始スタイル設定ルールは、上記のセレクター内にネストすることができません。
入れ子セレクターは擬似要素を表すことができないからです。 */

@starting-style {
  dialog[open]::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

##### JavaScript

JavaScript で、表示ボタンと閉じるボタンにイベントハンドラーを追加し、クリックされたときに `<dialog>` を表示させたり閉じたりするイベントを発生させます。

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### 結果

このコードは次のように表示されます。

{{ EmbedLiveSample("dialog 要素のトランジション", "100%", "200") }}

> **メモ:** `<dialog>`は、表示される時点では常に `display: none` から `display: block` に変更されるため、項目遷移が発生するたびに、`<dialog>` は `@starting-style` スタイルから `dialog[open]` スタイルにトランジションします。 `<dialog>` が閉じられると、`dialog[open]` 状態から既定の `dialog` 状態にトランジションします。
>
> このような場合、項目への入力時と出力時のスタイル設定のトランジションが異なることが可能です。この例については、「[開始スタイルを使用する場合のデモ](/ja/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used)」をご覧ください。

#### dialog のキーフレームアニメーション

CSS のキーフレームアニメーションで `<dialog>` をアニメーションさせる場合、トランジションとのいくつかの違いに注意する必要があります。

- `@starting-style` は提供しません。
- キーフレームには `display` を記載します。これはアニメーション全体、または別の `none` 以外の表示値が指定されるまでの表示値となります。
- 離散アニメーションを明示的に有効にする必要はありません。キーフレーム内に `allow-discrete` に相当するものはありません。
- また、キーフレーム内で `overlay` を設定する必要もありません。 `display` のアニメーションが `<dialog>` の表示から非表示へのアニメーションを処理します。

この例を見て、どのようなものか見ていきましょう。

##### HTML

最初の HTML には、`<dialog>` 要素と、ダイアログを表示させるためのボタンがあります。さらに、`<dialog>` 要素には、それ自体を閉じるためのボタンが格納されています。

```html
<dialog id="dialog">
  ここがコンテンツです
  <button class="close">閉じる</button>
</dialog>

<button class="show">モーダル表示</button>
```

##### CSS

CSSでは、`<dialog>`を閉じられた状態と表示させた状態の間でアニメーションさせるためのキーフレームを定義し、さらに、`<dialog>`の背景のフェードインアニメーションも定義しています。ダイアログボックスのアニメーションには、実際のアニメーション効果が再生時間全体にわたって確実に表示されるようにするための `display` のアニメーションが含まれます。 バックグラウンドのフェードアウトのアニメーションは不可能であることに注意してください。背景は、ダイアログボックスが閉じられるとすぐに DOM から除去されるため、アニメーション化する何かがあるわけではありません。

```css
dialog {
  animation: fade-out 0.7s ease-out;
}

dialog[open] {
  animation: fade-in 0.7s ease-out;
}

dialog[open]::backdrop {
  animation: backdrop-fade-in 0.7s ease-out forwards;
}

/* Animation keyframes */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }
}

@keyframes backdrop-fade-in {
  0% {
    background-color: rgb(0 0 0 / 0%);
  }

  100% {
    background-color: rgb(0 0 0 / 25%);
  }
}

body,
button {
  font-family: system-ui;
}
```

##### JavaScript

最後に、JavaScript でボタンにイベントハンドラーを追加し、`<dialog>` を表示させたり閉じたりできるようにします。

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### 結果

このコードは次のように表示されます。

{{ EmbedLiveSample("dialog のキーフレームアニメーション", "100%", "200") }}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">区分化ルート</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>を受け入れるあらゆる要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可された ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLDialogElement")}} インターフェイス
- {{domxref("HTMLDialogElement/close_event", "close")}} イベント
- {{domxref("HTMLElement/cancel_event", "cancel")}} イベント
- {{domxref("HTMLDialogElement/open", "open")}} プロパティ（`HTMLDialogElement` インターフェイス）
- [`inert`](/ja/docs/Web/HTML/Global_attributes/inert) グローバル属性（HTML 要素）
- CSS の {{CSSXref("::backdrop")}} 擬似要素
- [ウェブフォーム](/ja/docs/Learn/Forms)（学習領域）
