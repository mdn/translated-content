---
title: Element.scrollHeight
slug: Web/API/Element/scrollHeight
---

{{ APIRef("DOM") }}

Свойство **`Element.scrollHeight`** (только чтение) - измерение высоты контента в элементе, включая содержимое, невидимое из-за прокрутки. Значение `scrollHeight` равно минимальному `clientHeight`, которое потребуется элементу для того, чтобы поместить всё содержимое в видимую область (viewport), не используя вертикальную полосу прокрутки. Оно включает в себя padding элемента, но не его margin.

> **Примечание:** Это свойство округляет значение до целого числа. Если вам нужно дробное значение, используйте {{ domxref("Element.getBoundingClientRect()") }}.

## Синтаксис

```
var intElemScrollHeight = document.getElementById(id_attribute_value).scrollHeight;
```

_intElemScrollHeight_ - переменная, хранящая целое число, соответствующее пиксельному значению scrollHeight элемента. scrollHeight является свойством только для чтения.

## Пример

padding-top

Бла-бла-бла, бла-бла-бла.Бла-бла-бла, бла-бла-бла.Бла-бла-бла, бла-бла-бла.

Кот Василий ел картошку.Бла-бла-бла, бла-бла-бла.Бла-бла-бла, бла-бла-бла.

padding-bottom

**Left** **Top** **Right** **Bottom** _margin-top_ _margin-bottom_ _border-top_ _border-bottom_

![Image:scrollHeight.png](/@api/deki/files/840/=ScrollHeight.png)

## Проблемы и решения

### Определить, был ли элемент полностью прокручен

Следующее выражение возвращает `true`, если элемент был прокручен до конца, `false` если это не так.

```
element.scrollHeight - element.scrollTop === element.clientHeight
```

## Пример работы scrollHeight

Если объединить это выражение с событием [`onscroll`](/ru/docs/DOM/element.onscroll), оно может быть использовано для того, чтобы определить, прочитал ли пользователь текст, или нет (см. также свойства [`element.scrollTop`](/ru/docs/DOM/element.scrollTop) и [`element.clientHeight`](/ru/docs/DOM/element.clientHeight)). Например:

### HTML

```html
<form name="registration">
  <p>
    <textarea id="rules">
Регистрируясь на сайте любителей котиков я соглашаюсь со следующими условиями:
- покупать kitekat бездомным;
- делиться последним куском мяса;
- любить Firefox;
- вставлять в каждую фразу: "мурр", "мррр" и т.п.;
- в качестве документов предъявлять хвост и усы;
- заниматься разработкой;
- читать хабрахабр;
- смотреть "Tom and Jerry" и котопса;
- продать почку для поддержания здоровья кошек города;
- уметь ловить мышей;
- быть фанатом Матроскина;
- обожать молоко;
- уметь мурлыкать и рррычать;
- следовать жизненным принципам Леопольда;
- вставлять на MDN фразы про кошек для разнообразия и поддержания морального духа;
- загрузить в качестве аватарки фото с Простоквашино;
- другими словами, всегда любить и уважать кошек и ненавидеть собак.
Условия могут быть изменены в любое время, незнание не освобождает от ответственности.
    </textarea>
  </p>
  <p>
    <input type="checkbox" name="accept" id="agree" />
    <label for="agree">Я согласен</label>
    <input type="submit" id="nextstep" value="Далее" />
  </p>
</form>
```

### CSS

```css
#notice {
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 5px;
  width: 600px;
  padding: 5px;
  border: 2px #7fdf55 solid;
}

#rules {
  width: 600px;
  height: 130px;
  padding: 5px;
  border: #2a9f00 solid 2px;
  border-radius: 5px;
}
```

### JavaScript

```js
function checkReading() {
  if (checkReading.read) {
    return;
  }
  checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
  document.registration.accept.disabled = document.getElementById(
    "nextstep",
  ).disabled = !checkReading.read;
  checkReading.noticeBox.innerHTML = checkReading.read
    ? "Спасибо вам."
    : "Пожалуйста, прокрутите и прочитайте следующий текст.";
}

onload = function () {
  var oToBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("span");
  document.registration.accept.checked = false;
  checkReading.noticeBox.id = "notice";
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead);
  oToBeRead.onscroll = checkReading;
  checkReading.call(oToBeRead);
};
```

{{ EmbedLiveSample('scrollHeight_Demo', '640', '400') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [MSDN Измерение размера и положения элемента с помощью CSSOM в Internet Explorer 9](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
- {{domxref("Element.clientHeight")}}
- {{domxref("HTMLElement.offsetHeight")}}
- [Определение размеров элементов](/ru/docs/Determining_the_dimensions_of_elements)
