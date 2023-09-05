---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
---

{{APIRef("HTML DOM")}}

Интерфейс **`HTMLAnchorElement`** представляет элементы гиперссылки и предоставляет специальные свойства и методы (помимо обычного объектного интерфейса {{domxref("HTMLElement")}}, который они наследуют) для управления макетом и представлением таких элементов.
Этот интерфейс соответствует элементу \<a>; не путать с < link>, который представлен HTMLLinkElement.

{{InheritanceDiagram(600, 120)}}

## Свойства

_Наследует свойства от его родителя, {{domxref("HTMLElement")}}, и реализует те из {{domxref("URLUtils")}}._

- {{domxref("HTMLAnchorElement.accessKey")}}
  - : Это {{domxref("DOMString")}} отображает собой единичный символ, который переключает фокус ввода на гиперссылку.
- {{domxref("HTMLAnchorElement.charset")}}
  - : Это {{domxref("DOMString")}} отображает кодировку символов связанного ресурса.
- {{domxref("HTMLAnchorElement.coords")}}
  - : Это {{domxref("DOMString")}} отображает список координат разделённый запятыми.
- {{domxref("HTMLAnchorElement.download")}} {{experimental_inline}}
  - : Это {{domxref("DOMString")}} показывать что связанный ресурс предназначен для загрузки, а не для отображения в браузере. Значение представляет предполагаемое имя файла. Если имя не является допустимым именем файла нижележащей ОС, браузер будет адаптировать его. Значение это URL по схеме `http:`, `file:`, `data:` или даже `blob:` (созданный с помощью {{domxref("URL.createObjectURL")}}).
- {{domxref("URLUtils.hash")}}
  - : Это {{domxref("DOMString")}} отображает фрагмент идентификатора, включая ведущий hash mark ('`#`'), если, указан в URL.
- {{domxref("URLUtils.host")}}
  - : Это {{domxref("DOMString")}} отображает имя хоста порт (если это не порт по умолчанию) в указанном URL.
- {{domxref("URLUtils.hostname")}}
  - : Это {{domxref("DOMString")}} отображает имя хоста в указанном URL.
- {{domxref("URLUtils.href")}}
  - : Это {{domxref("DOMString")}} что отображает [`href`](/ru/docs/Web/HTML/Element/a#href) HTML атрибут, содержащий действительный URL связанного ресурса.
- {{domxref("HTMLAnchorElement.hreflang")}}
  - : Это {{domxref("DOMString")}} что отображает HTML атрибут [`hreflang`](/ru/docs/Web/HTML/Element/a#hreflang), показывающий язык связанного ресурса.
- {{domxref("HTMLAnchorElement.media")}}
  - : Это {{domxref("DOMString")}} что отображает [`media`](/ru/docs/Web/HTML/Element/a#media) HTML атрибут, с указанием предполагаемого media для связанного ресурса.
- {{domxref("HTMLAnchorElement.name")}}
  - : Это {{domxref("DOMString")}} отображает имя якоря.
- {{domxref("URLUtils.password")}}
  - : Это {{domxref("DOMString")}} содержащий пароль, указанный перед именем домена.
- {{domxref("URLUtils.origin")}} {{readonlyInline}}
  - : Возвращает {{domxref("DOMString")}} содержащий источник, то есть его схему, его домен и его порт.
- {{domxref("URLUtils.pathname")}}
  - : Это {{domxref("DOMString")}} отображающий составную часть пути имени, любого, ссылающегося URL.
- {{domxref("URLUtils.port")}}
  - : Это {{domxref("DOMString")}} отображающий составную часть порта, любого, ссылающегося URL.
- {{domxref("URLUtils.protocol")}}
  - : Is a {{domxref("DOMString")}} отображающий составную часть протокола, включая двоеточия ('`:`'), ссылающегося URL.
- {{domxref("HTMLAnchorElement.referrer")}} {{experimental_inline}}
  - : Это {{domxref("DOMString")}} что отображает [`referrer`](/ru/docs/Web/HTML/Element/a#referrer) HTML атрибут, показывающий какой referrer используется, когда выбрано изображение.
- {{domxref("HTMLAnchorElement.rel")}}
  - : Это {{domxref("DOMString")}} что отображает [`rel`](/ru/docs/Web/HTML/Element/a#rel) HTML атрибут, уточняя взаимоотношения целевого объекта к связанному объекту.
- {{domxref("HTMLAnchorElement.relList")}} {{readonlyInline}}
  - : Возвращает {{domxref("DOMTokenList")}} который отображает [`rel`](/ru/docs/Web/HTML/Element/a#rel) HTML атрибут, как список токенов.
- {{domxref("HTMLAnchorElement.rev")}}
  - : Это {{domxref("DOMString")}} отображающий как [`rev`](/ru/docs/Web/HTML/Element/a#rev) HTML атрибут, уточняя взаимоотношения связанного объекта к целевому объекту
- {{domxref("URLUtils.search")}}
  - : Это {{domxref("DOMString")}} отображающий искомый элемент, включая ведущий знак вопроса ('`?`'), если таковой имеется, в ссылающемся URL.
- {{domxref("HTMLAnchorElement.shape")}}
  - : Это {{domxref("DOMString")}} отображающий вид активной области.
- {{domxref("HTMLAnchorElement.tabindex")}}
  - : Это `long` содержащий положение элемента в порядке навигационного переключения для текущего документа.
- {{domxref("HTMLAnchorElement.target")}}
  - : Это {{domxref("DOMString")}} который отображает [`target`](/ru/docs/Web/HTML/Element/a#target) HTML атрибут, указывая где отображается связанный ресурс.
- {{domxref("HTMLAnchorElement.text")}}
  - : Это {{domxref("DOMString")}} является синонимом {{domxref("Node.textContent")}} свойства.
- {{domxref("HTMLAnchorElement.type")}}
  - : Это {{domxref("DOMString")}} которое отображает [`type`](/ru/docs/Web/HTML/Element/a#type) HTML атрибут, показывающий MIME тип связанного ресурса.
- {{domxref("URLUtils.username")}}
  - : Это {{domxref("DOMString")}} содержащий имя пользователя определённое перед именем домена.

## Методы

_Наследует методы от его родителя, {{domxref("HTMLElement")}},_ _и реализует те из {{domxref("URLUtils")}}._

- {{domxref("HTMLElement.blur()")}}
  - : Удаляет фокус клавиатуры из текущего элемента.
- {{domxref("HTMLElement.focus()")}}
  - : Даёт фокус клавиатуры на текущий элемент.
- {{domxref("URLUtils.toString()")}}
  - : Возвращает {{domxref("DOMString")}} содержащий весь URl. Это синоним {{domxref("URLUtils.href")}}, хотя он не может быть использован для изменения значения.

`blur()` и `focus()` методы наследуемые от {{domxref("HTMLElement")}} для HTML5, но они были определены в `HTMLAnchorElement` в DOM Level 2 HTML и более ранней спецификации.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML-элемент реализующий это интерфейс: {{HTMLElement("a")}}
