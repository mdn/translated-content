---
title: HTMLDialogElement.open
slug: Web/API/HTMLDialogElement/open
---

{{ APIRef("HTML DOM") }}

{{ SeeCompatTable() }}

**`open`** - свойство интерфейса взаимодействия {{domxref("HTMLDialogElement")}}, является {{domxref("Boolean")}} значением и отражает HTML атрибут [`open`](/ru/docs/Web/HTML/Element/dialog#open) этого элемента, указывающий, доступен ли {{htmlelement("dialog")}} для взаимодействия.

## Синтаксис

```
dialogInstance.open = true;
var myOpenValue = dialogInstance.open;
```

### Значение

{{domxref("Boolean")}} значение отражает состояние HTML атрибута [`open`](/ru/docs/Web/HTML/Element/dialog#open). `true` значит, что значение установлено и диалоговое окно показывается в настоящий момент. `false` указывает, что значение не установлено и диалоговое окно не показывается.

Свойство доступно только для чтения — значение можно установить программно методы show и hide элемента {{htmlelement("dialog")}}.

## Примеры

Примеры ниже показывают простую кнопку, которая по нажатию открывает {{htmlelement("dialog")}}, содержащий {{htmlelement("form")}}, используя `showModal()` метод. Вы можете нажать кнопку _Отмена_ для закрытия (используя {{domxref("HTMLDialogElement.close()")}} метод) или принять {{htmlelement("form")}}, нажав на кнопку _Принять_.

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

    // Кнопка обновления открывает диалоговое окно
    updateButton.addEventListener("click", function () {
      dialog.showModal();
      openCheck(dialog);
    });

    // Кнопка отмены закрывает диалоговое окно
    cancelButton.addEventListener("click", function () {
      dialog.close("animalNotChosen");
      openCheck(dialog);
    });
  })();
</script>
```

> **Примечание:** вы можете найти данный пример на [htmldialogelement-basic](https://github.com/mdn/dom-examples/blob/master/htmldialogelement-basic/index.html) ([see it live also](https://mdn.github.io/dom-examples/htmldialogelement-basic/)).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML-элемент, использующий данный интерфейс взаимодействия: {{ HTMLElement("dialog") }}.
