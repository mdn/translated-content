---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`HTMLDialogElement`** - интерфейс взаимодействия, предоставляющий методы для управления {{HTMLElement("dialog")}} элементами. Он наследует свойства и методы от {{domxref("HTMLElement")}}.

{{InheritanceDiagram(600, 80)}}

## Свойства

_Наследует свойства от своего родителя, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.open")}}
  - : {{domxref("Boolean")}} отражает HTML атрибут элемента [`open`](/ru/docs/Web/HTML/Element/dialog#open), указывающий на то, доступно ли диалоговое окно для воздействия.
- {{domxref("HTMLDialogElement.returnValue")}}
  - : {{domxref("DOMString")}} устанавливает или возвращает передаваемое диалоговому окну значение.

## Методы

_Наследует методы своего родителя, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.close()")}}
  - : Закрывает диалоговое окно. Опциональный {{domxref("DOMString")}} может быть передан как аргумент, обновляющий `returnValue` диалогового окна.
- {{domxref("HTMLDialogElement.show()")}}
  - : Показывает диалоговое окно modelessly, т.е. остаётся возможность взаимодействовать с контентом вне диалогового окна.
- {{domxref("HTMLDialogElement.showModal()")}}
  - : Показывает диалог как модальное окно поверх любых других диалоговых окон, которые также могут существовать в данный момент. Взаимодействие с контентом вне диалогового окна заблокировано.

## Примеры

Примеры ниже показывают простую кнопку, которая при нажатии открывает {{htmlelement("dialog")}}, содержащий элемент {{htmlelement("form")}}, используя метод {{domxref("HTMLDialogElement.showModal()")}}. Вы можете нажать кнопку _Отмены,_ чтобы закрыть диалоговое окно (используя функцию {{domxref("HTMLDialogElement.close()")}}), или принять форму, использую кнопку _Принятия_.

```html
<!-- Simple pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <section>
      <p>
        <label for="favAnimal">Favorite animal:</label>
        <select id="favAnimal" name="favAnimal">
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </p>
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
  (function () {
    var updateButton = document.getElementById("updateDetails");
    var cancelButton = document.getElementById("cancel");
    var dialog = document.getElementById("favDialog");
    dialog.returnValue = "favAnimal";

    function openCheck(dialog) {
      if (dialog.open) {
        console.log("Dialog open");
      } else {
        console.log("Dialog closed");
      }
    }

    // Update button opens a modal dialog
    updateButton.addEventListener("click", function () {
      dialog.showModal();
      openCheck(dialog);
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener("click", function () {
      dialog.close("animalNotChosen");
      openCheck(dialog);
    });
  })();
</script>
```

> **Примечание:** You can find this example on GitHub as [htmldialogelement-basic](https://github.com/mdn/dom-examples/blob/master/htmldialogelement-basic/index.html) ([see it live also](https://mdn.github.io/dom-examples/htmldialogelement-basic/)).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML-элемент, реализующий этот интерфейс взаимодействия: {{ HTMLElement("dialog") }}.
