---
title: <dialog>
slug: Web/HTML/Element/dialog
---

{{SeeCompatTable}}

**HTML-элемент `<dialog>`** определяет диалоговое окно или другой интерактивный элемент, такой как инспектор или окно. Элементы `<form>` могут интегрироваться с диалогом с помощью указания атрибута `method="dialog"`. Когда отправляется такая форма, диалог закрывается с returnValue равным value нажатой кнопки submit.

{{cssxref('::backdrop')}} CSS псевдо-элемент может быть использован для стилизации фона подложки элемента `<dialog>`, например для затемнения недоступного содержимого, пока диалог активен.

| [Категории контента](/ru/docs/Web/Guide/HTML/Content_categories) | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток), [секционный контент](/ru/docs/Web/Guide/HTML/Content_categories#Секционный_контент) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Разрешённый контент                                              | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток)                                                                                      |
| Опускание тегов                                                  | {{no_tag_omission}}                                                                                                                                              |
| Разрешённые родительские элементы                                | Любой элемент, в котором разрешён [основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток)                                                    |
| DOM-интерфейс                                                    | {{domxref("HTMLDialogElement")}}                                                                                                                                 |

## Атрибуты

Этот элемент включает в себя [общие атрибуты](/ru/docs/Web/HTML/Общие_атрибуты). Атрибут `tabindex` не должен использоваться с `<dialog>` элементом.

- {{htmlattrdef("open")}}
  - : Этот атрибут сообщает о том, что диалог активен и доступен для взаимодействия. Когда атрибут open не установлен, диалог не должен быть видим для пользователя.

## Примеры

### Пример 1

```html
<dialog open>
  <p>Greetings, one and all!</p>
</dialog>
```

### Пример 2

```html
<!-- Простой попап диалог с формой -->
<dialog id="favDialog">
  <form method="dialog">
    <section>
      <p>
        <label for="favAnimal">Favorite animal:</label>
        <select id="favAnimal">
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
    var favDialog = document.getElementById("favDialog");

    // Update button opens a modal dialog
    updateButton.addEventListener("click", function () {
      favDialog.showModal();
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener("click", function () {
      favDialog.close();
    });
  })();
</script>
```

```html
<!-- Простой попап диалог с формой -->
<dialog id="favDialog">
  <form method="dialog">
    <section>
      <p>
        <label for="favAnimal">Favorite animal:</label>
        <select id="favAnimal">
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
    var favDialog = document.getElementById("favDialog");

    // Update button opens a modal dialog
    updateButton.addEventListener("click", function () {
      favDialog.showModal();
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener("click", function () {
      favDialog.close();
    });
  })();
</script>
```

## Спецификации

{{Specifications}}

## Совместимость в браузерах

{{Compat}}

## Смотрите также

- Событие {{event("close")}}
- Событие {{event("cancel")}}
- [HTML forms guide](/ru/docs/Web/Guide/HTML/Forms).

{{HTMLSidebar}}
