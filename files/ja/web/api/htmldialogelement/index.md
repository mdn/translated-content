---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("HTML DOM")}}

**`HTMLDialogElement`** インターフェイスは {{HTMLElement("dialog")}} 要素を操作するメソッドを提供します。 {{domxref("HTMLElement")}} インターフェイスからプロパティとメソッドを継承しています。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{domxref("HTMLElement")}} から継承したプロパティもあります。_

- {{domxref("HTMLDialogElement.closedBy")}}
  - : `<dialog>` 要素の [`closedby`](/ja/docs/Web/HTML/Reference/Elements/dialog#closedby) 属性の値を設定または返す文字列。この属性は、ダイアログを閉じるために使用できるユーザー操作の種類を示します。
- {{domxref("HTMLDialogElement.open")}}
  - : 論理値で、ダイアログが操作可能であることを示す [`open`](/ja/docs/Web/HTML/Reference/Elements/dialog#open) 属性の値を反映します。
- {{domxref("HTMLDialogElement.returnValue")}}
  - : 文字列で、ダイアログの返値を設定または返却します。

## インスタンスメソッド

_親インターフェイスである {{domxref("HTMLElement")}} から継承したメソッドもあります。_

- {{domxref("HTMLDialogElement.close()")}}
  - : ダイアログを閉じます。任意で引数として文字列を渡すことができ、これがダイアログの `returnValue` を更新します。
- {{domxref("HTMLDialogElement.requestClose()")}}
  - : ダイアログを閉じるリクエストをします。オプションの文字列引数を渡すことで、ダイアログの `returnValue` を更新することができます。
- {{domxref("HTMLDialogElement.show()")}}
  - : ダイアログをモードレスで開きます。すなわち、その間にダイアログの外のコンテンツが操作できます。
- {{domxref("HTMLDialogElement.showModal()")}}
  - : ダイアログをモーダルで、他のダイアログがあればその最も上に表示します。ダイアログの外の操作はブロックされます。ダイアログの外はすべて [inert](/ja/docs/Web/API/HTMLElement/inert) となり、ダイアログの外の操作はブロックされます。

## イベント

_親インターフェイスである {{DOMxRef("HTMLElement")}} から継承したイベントがあります。_

これらのイベントを {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} を使用して、またはこのインターフェイスの `onイベント名` プロパティにイベントリスナーを代入することによって待ち受けます。

- {{domxref("HTMLDialogElement/cancel_event", "cancel")}}
  - : ダイアログを閉じるリクエスト（エスケープキーや `HTMLDialogElement.requestClose()` メソッドなど）が行われた際に発行されます。
- {{domxref("HTMLDialogElement/close_event", "close")}}
  - : エスケープキー、`HTMLDialogElement.close()` メソッド、または [`method="dialog"`](/ja/docs/Web/HTML/Reference/Elements/form#メソッド) でダイアログ内のフォームを送信することによって、このダイアログが閉じられたときに発行されます。

## 例

### モーダルダイアログを開く

以下の例はボタンを表示し、クリックすると、 {{domxref("HTMLDialogElement.showModal()")}} 関数を使用してフォームの入ったモーダルダイアログ ({{htmlelement("dialog")}}) を開きます。

開いている間、モーダルダイアログのコンテンツ以外はすべて不活性になります。
そこから［キャンセル］ボタンを押して（{{domxref("HTMLDialogElement.close()")}} 関数で）ダイアログを閉じるか、［確認］ボタンでフォームを送信するかします。

この例は、ダイアログ上で発生可能なすべての「状態変更」イベント、{{domxref("HTMLDialogElement/cancel_event", "cancel")}} と {{domxref("HTMLDialogElement/close_event", "close")}}、および継承されたイベント {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} と {{domxref("HTMLElement/toggle_event", "toggle")}} の使用方法を示しています。

#### HTML

```html
<!-- フォームが入ったポップアップダイアログボックス -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">好きな動物:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>アルテミア</option>
        <option>レッサーパンダ</option>
        <option>クモザル</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">キャンセル</button>
      <button id="submit" type="submit">確認</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">詳細を更新</button>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

##### ダイアログの表示

コードはまず、{{htmlelement("button")}} 要素、{{htmlelement("dialog")}} 要素、{{htmlelement("select")}} 要素のオブジェクトを取得します。
次に、［更新］ボタンがクリックされたときに {{domxref("HTMLDialogElement.showModal()")}} 関数を呼び出すリスナーを追加します。

```js
const updateButton = document.getElementById("updateDetails");
const confirmButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
const selectElement = document.getElementById("favAnimal");

// 更新ボタンを押すとモーダルダイアログが開く
updateButton.addEventListener("click", () => {
  dialog.showModal();
});
```

##### キャンセルおよび確認ボタン

次に、［確認］ボタンと［キャンセル］ボタンの `click` イベントにリスナーを追加します。
ハンドラーは、選択値（存在する場合）と値なしの状態で {{domxref("HTMLDialogElement.close()")}} を呼び出します。これにより、ダイアログの返値 ({{domxref("HTMLDialogElement.returnValue")}}) がそれぞれ選択値と `null` に設定されます。

```js
// 選択がある場合、確認ボタンはダイアログを閉じる
confirmButton.addEventListener("click", () => {
  if (selectElement.value) {
    // dialog.returnValue を選択された値に設定
    dialog.close(selectElement.value);
  }
});

// ダイアログボックスを閉じるフォームキャンセルボタン
cancelButton.addEventListener("click", () => {
  dialog.close(); // dialog.returnValue を null に設定
});
```

`close()` を呼び出しすと、 {{domxref("HTMLDialogElement/close_event", "close")}} イベントも発生します。下記でダイアログの返値をログ出力することでこれを実装します。
［確認］ボタンがクリックされた場合、このこれはダイアログで選択された値であるべきです。そうでない場合は `null` であるべきです。

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### cancel イベント

{{domxref("HTMLDialogElement/cancel_event", "cancel")}} イベントは、<kbd>Esc</kbd> キーなど「プラットフォーム特定の方法」が使用されてダイアログが閉じられる際に発行されます。
`HTMLDialogElement.requestClose()` メソッドが呼び出された場合にも発生します。
このイベントは「キャンセル可能」です。つまり、ダイアログが閉じるのを阻止するために使用できます。
ここではキャンセル操作を「閉じる」操作として扱い、設定された可能性のある値をクリアするために {{domxref("HTMLDialogElement.returnValue")}} を `""` にリセットします。

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; // 値をリセット
});
```

##### toggle イベント

[`toggle`イベント](/ja/docs/Web/API/HTMLElement/toggle_event)（`HTMLElement` から継承）は、ダイアログが開かれるか閉じられた直後（ただし `close` イベントの前）に発生します。

ここでは、ダイアログが開くためのリスナーと閉じられたときのログ出力するリスナーを追加します。

> [!NOTE]
> `toggle` および `beforetoggle` イベントは、すべてのブラウザーでダイアログ要素に対して発行されるとは限りません。
> 対応していないバージョンのブラウザーでは、代わりにダイアログを開いた/閉じた後、{{domxref("HTMLDialogElement.open")}} プロパティを調べることで確認できます。

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event: Dialog ${event.newState}`);
});
```

##### beforetoggle イベント

[`beforetoggle`イベント](/ja/docs/Web/API/HTMLElement/beforetoggle_event)（`HTMLElement`から継承）は、ダイアログが開く直前または閉じる直前に発行される、キャンセル可能なイベントです。
必要があれば、この要素はダイアログの表示を阻止するために使用できますし、ダイアログの開閉状態に影響を受ける他の要素に対して措置を実行するために使用できます。例えば、アニメーションを起動するためにそれらの要素にクラスを追加するといった操作が可能です。

この場合、単に古い状態と新しい状態をログ出力します。

```js
dialog.addEventListener("beforetoggle", (event) => {
  log(
    `beforetoggle event: oldState: ${event.oldState}, newState: ${event.newState}`,
  );

  // event.preventDefault() を呼び出すと、ダイアログが開くのを阻止する
  /*
    if (shouldCancel()) {
        event.preventDefault();
    }
  */
});
```

#### 結果

下の例を試してみてください。
`確認` ボタンと `キャンセル` ボタンの両方で `close` イベントを発生することに注意してください。また、結果は選択されたダイアログオプションを反映するはずです。

{{EmbedLiveSample("モーダルダイアログを開く", '100%', "250px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
