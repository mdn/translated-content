---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`HTMLDialogElement`** インターフェイスは {{HTMLElement("dialog")}} 要素を操作するメソッドを提供します。 {{domxref("HTMLElement")}} インターフェースからプロパティとメソッドを継承しています。

{{InheritanceDiagram(600, 80)}}

## プロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLDialogElement.open")}}
  - : {{domxref("Boolean")}} で、ダイアログが対話可能であることを示す [`open`](/ja/docs/Web/HTML/Element/dialog#open) 属性の値を反映します。
- {{domxref("HTMLDialogElement.returnValue")}}
  - : {{domxref("DOMString")}} で、ダイアログの返値を設定させたり返したりします。

## メソッド

_親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

- {{domxref("HTMLDialogElement.close()")}}
  - : ダイアログを閉じます。任意で引数として {{domxref("DOMString")}} を渡すことができ、これがダイアログの `returnValue` を更新します。
- {{domxref("HTMLDialogElement.show()")}}
  - : ダイアログをモードレスで開きます。すなわち、その間のダイアログの外のコンテンツとの対話ができます。
- {{domxref("HTMLDialogElement.showModal()")}}
  - : ダイアログをモーダルで、他のダイアログがあればその最も上に表示します。ダイアログの外との対話はブロックされます。

## イベント

- {{domxref("HTMLDialogElement/close_event", "close")}}
  - : ダイアログが閉じられたときに発生します。
    {{domxref("GlobalEventHandlers/onclose", "onclose")}} プロパティからも利用できます。

## 例

以下の例は単純なボタンを表示し、クリックすると、 {{htmlelement("dialog")}} でフォームを {{domxref("HTMLDialogElement.showModal()")}} 関数によって開きます。そこから _Cancel_ ボタンを押して ({{domxref("HTMLDialogElement.close()")}} 関数で) ダイアログを閉じるか、 submit ボタンでフォームを送信するかします。

```html
  <!-- Simple pop-up dialog box, containing a form -->
  <dialog id="favDialog">
    <form method="dialog">
      <section>
        <p><label for="favAnimal">Favorite animal:</label>
        <select id="favAnimal" name="favAnimal">
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select></p>
      </section>
      <menu>
        <button id="cancel" type="reset">Cancel</button>
        <button type="submit">Confirm</button>
      </menu>
    </form>
  </dialog>

  <menu>
    <button id="updateDetails">Update details</button>
  </menu>

  <script>
    (function() {
      var updateButton = document.getElementById('updateDetails');
      var cancelButton = document.getElementById('cancel');
      var dialog = document.getElementById('favDialog');
      dialog.returnValue = 'favAnimal';

      function openCheck(dialog) {
        if(dialog.open) {
          console.log('Dialog open');
        } else {
          console.log('Dialog closed');
        }
      }

      // Update button opens a modal dialog
      updateButton.addEventListener('click', function() {
        dialog.showModal();
        openCheck(dialog);
      });

      // Form cancel button closes the dialog box
      cancelButton.addEventListener('click', function() {
        dialog.close('animalNotChosen');
        openCheck(dialog);
      });

    })();
  </script>
```

> **メモ:** この例は GitHub 上の [htmldialogelement-basic](https://github.com/mdn/dom-examples/blob/master/htmldialogelement-basic/index.html) ([ライブで表示](https://mdn.github.io/dom-examples/htmldialogelement-basic/)) として見つけることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.HTMLDialogElement")}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("dialog") }}
