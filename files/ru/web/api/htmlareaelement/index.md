---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
---

{{APIRef("HTML DOM")}}

**`HTMLAreaElement`** интерфейс предоставляющий специальные свойства и методы (помимо тех, постоянных объектов {{domxref("HTMLElement")}} интерфейса, также доступных ему по наследству) для манипуляции расположением и представлением пространством элементов.

## Свойства

_Наследует свойства от его родителя, {{domxref("HTMLElement")}}, и реализует те из {{domxref("URLUtils")}}._

- {{domxref("HTMLAreaElement.accessKey")}}
  - : Это {{domxref("DOMString")}} содержащий единственный символ, который переключает фокус ввода для управления.
- {{domxref("HTMLAreaElement.alt")}}
  - : Это {{domxref("DOMString")}} которое отображает [`alt`](/ru/docs/Web/HTML/Element/area#alt) HTML атрибут, содержащий альтернативный текст для элемента.
- {{domxref("HTMLAreaElement.coords")}}
  - : Это {{domxref("DOMString")}} который отображает [`coords`](/ru/docs/Web/HTML/Element/area#coords) HTML атрибут, содержащий координаты активного участка региона.
- {{domxref("HTMLAreaElement.download")}} {{experimental_inline}}
  - : Это {{domxref("DOMString")}} показывает что связанный ресурс предназначен для загрузки, а не для отображения в браузере. Значение представляет собой предполагаемое имя файла. Если имя не является допустимым именем файла в данной ОС, браузер будет адаптировать его.
- {{domxref("URLUtils.hash")}}
  - : Это {{domxref("DOMString")}} содержащий идентификатор фрагмента (включая начальный hash mark (#)), если таковые имеются, в указанном URL.
- {{domxref("URLUtils.host")}}
  - : Это {{domxref("DOMString")}} содержащий имя хоста и порт (если это не порт по умолчанию) в указанном URL.
- {{domxref("URLUtils.hostname")}}
  - : Это {{domxref("DOMString")}} содержащий имя хоста в указанном URL.
- {{domxref("URLUtils.href")}}
  - : Это {{domxref("DOMString")}} содержание которого отображает [`href`](/ru/docs/Web/HTML/Element/area#href) HTML атрибут, содержащий действительный URL связанного с ним ресурса.
- {{domxref("HTMLAreaElement.hreflang")}}
  - : Это {{domxref("DOMString")}} содержание которого отображает [`hreflang`](/ru/docs/Web/HTML/Element/area#hreflang) HTML атрибут, показывающий язык связанного с ним ресурса.
- {{domxref("HTMLAreaElement.media")}}
  - : Это {{domxref("DOMString")}} содержание которого отображает [`media`](/ru/docs/Web/HTML/Element/area#media) HTML атрибут, показывающий целевое media, связанного с ним ресурса.
- {{domxref("HTMLAreaElement.noHref")}}
  - : Это {{domxref("Boolean")}} флаг показывающий, если зона неактивна (`true`) или активна (`false`).
- {{domxref("URLUtils.password")}}
  - : Это {{domxref("DOMString")}} содержащий пароль указанный перед именем домена.
- {{domxref("URLUtils.origin")}} {{readonlyInline}}
  - : Возвращает {{domxref("DOMString")}} содержащий изначальный URL, то есть его схема, его домен, его порт.
- {{domxref("URLUtils.pathname")}}
  - : Это {{domxref("DOMString")}} содержащий составную часть пути имени, если таковые имеются в указанном URL.
- {{domxref("URLUtils.port")}}
  - : Это {{domxref("DOMString")}} содержащий компонент порта , если таковой имеется в указанном URL.
- {{domxref("URLUtils.protocol")}}
  - : Это {{domxref("DOMString")}} содержащий компоненту протокола (в том числе двоеточия `':'`), в указанном URL.
- {{domxref("HTMLAreaElement.referrer")}} {{experimental_inline}}
  - : Это {{domxref("DOMString")}} который отображает [`referrer`](/ru/docs/Web/HTML/Element/area#referrer) HTML атрибут, показывающий какой referrer используется когда извлекается связанны с ним ресурс.
- {{domxref("HTMLAreaElement.rel")}}
  - : Это {{domxref("DOMString")}} который отображает [`rel`](/ru/docs/Web/HTML/Element/area#rel) HTML атрибут,показывая отношения текущего документа со связанным с ним ресурсом.
- {{domxref("HTMLAreaElement.relList")}} {{readOnlyInline}}
  - : Возвращает {{domxref("DOMTokenList")}} который отображает [`rel`](/ru/docs/Web/HTML/Element/area#rel) HTML атрибут, показывая отношения текущего документа к связанному с ним ресурса, как список токенов.
- {{domxref("HTMLAreaElement.search")}}
  - : Это {{domxref("DOMString")}} содержащий найденный элемент (включая начальный знак вопроса`'?'`), если таковой имеется, в указанном URL.
- {{domxref("HTMLAreaElement.shape")}}
  - : Это {{domxref("DOMString")}} который отображается [`shape`](/ru/docs/Web/HTML/Element/area#shape) HTML атрибут, включающий вид активного участка, ограниченный известными значениями.
- {{domxref("HTMLAreaElement.tabIndex")}}
  - : Как `long` содержащий положение элемента в порядке табуляции.
- {{domxref("HTMLAreaElement.target")}}
  - : Это {{domxref("DOMString")}} которое отображает [`target`](/ru/docs/Web/HTML/Element/area#target) HTML атрибут, включая контекст просмотра, в котором открыт связанный с ним ресурс.
- {{domxref("HTMLAreaElement.type")}}
  - : Это {{domxref("DOMString")}} которое отображает [`type`](/ru/docs/Web/HTML/Element/area#type) HTML атрибут, показывающий MIME тип связанного с ним ресурса.
- {{domxref("URLUtils.username")}}
  - : Это {{domxref("DOMString")}} содержащий имя пользователя. определённое перед доменным именем.

## Методы

_наследует методы от его родителя, {{domxref("HTMLElement")}} и реализует те из {{domxref("URLUtils")}}._

- {{domxref("URLUtils.toString()")}}
  - : Возвращает {{domxref("DOMString")}} содержащий весь URL скрипта, выполняемого в {{domxref("Worker")}}. Это синоним для {{domxref("URLUtils.href")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML-элемент реализующий этот интерфейс: {{ HTMLElement("area") }}.
