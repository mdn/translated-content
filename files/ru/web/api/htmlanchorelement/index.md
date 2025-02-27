---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{APIRef("HTML DOM")}}

Интерфейс **`HTMLAnchorElement`** представляет элементы гиперссылок и добавляет дополнительные свойства и методы (помимо общих свойств и методов интерфейса {{domxref("HTMLElement")}}, от которого он наследуется) для управления макетом и представлением таких элементов. Данный интерфейс соответствует элементу [`<a>`](/ru/docs/Web/HTML/Element/a) (не путать с [`<link>`](/ru/docs/Web/HTML/Element/link), который представлен [`HTMLLinkElement`](/ru/docs/Web/API/HTMLLinkElement)).

{{InheritanceDiagram}}

## Свойства экземпляра

_Наследует свойства своего родителя {{domxref("HTMLElement")}}._

- {{domxref("HTMLAnchorElement.attributionSrc")}} {{securecontext_inline}} {{experimental_inline}}
  - : Позволяет читать и устанавливать HTML-атрибут [`attributionsrc`](/ru/docs/Web/HTML/Element/a#attributionsrc) элемента {{htmlelement("a")}}. Данный атрибут указывает браузеру добавить заголовок {{httpheader("Attribution-Reporting-Eligible")}} при переходе по гиперссылке. На сервере наличие данного заголовка интерпретируется как разрешение на установку заголовка {{httpheader("Attribution-Reporting-Register-Source")}} в ответе и регистрации источника атрибуции.
- {{domxref("HTMLAnchorElement.download")}}
  - : Строка, указывающая, что связанный ресурс предназначен для загрузки, а не для отображения в браузере. Значение представляет предлагаемое имя файла. Если оно не является допустимым именем файла в используемой ОС, браузер преобразует его.
- {{domxref("HTMLAnchorElement.hash")}}
  - : Строка, представляющая якорь (включая ведущий знак решётки ('`#`')), если он присутствует в URL.
- {{domxref("HTMLAnchorElement.host")}}
  - : Строка, представляющая имя хоста и порт (если это не порт по умолчанию) в указанном URL.
- {{domxref("HTMLAnchorElement.hostname")}}
  - : Строка, представляющая имя хоста в указанном URL.
- {{domxref("HTMLAnchorElement.href")}}
  - : Строка, полученная из HTML-атрибута [`href`](/ru/docs/Web/HTML/Element/a#href), содержит корректный URL связанного ресурса.
- {{domxref("HTMLAnchorElement.hreflang")}}
  - : Строка, отражающая HTML-атрибут [`hreflang`](/ru/docs/Web/HTML/Element/a#hreflang), содержит язык связанного ресурса.
- {{domxref("HTMLAnchorElement.origin")}} {{ReadOnlyInline}}
  - : Возвращает строку, содержащую источник URL, то есть его схему, домен и порт.
- {{domxref("HTMLAnchorElement.password")}}
  - : Строка, содержащая пароль, указанный перед именем домена.
- {{domxref("HTMLAnchorElement.pathname")}}
  - : Строка, содержащая путь к ресурсу, начиная с символа`'/'`, не включает параметры запроса и якорь.
- {{domxref("HTMLAnchorElement.ping")}}
  - : Разделённый пробелами список URL. При переходе по ссылке браузер будет отправлять запросы {{HTTPMethod("POST")}} с телом PING на эти URL-адреса.
- {{domxref("HTMLAnchorElement.port")}}
  - : Строка, представляющая порт, если он присутствует в URL.
- {{domxref("HTMLAnchorElement.protocol")}}
  - : Строка, представляющая протокол (включая двоеточия ('`:`')), в указанном URL.
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
  - : Строка, отражающая HTML-атрибут [`referrerPolicy`](/ru/docs/Web/HTML/Element/a#referrerpolicy), указывает, какую информацию передавать ресурсу по ссылке.
- {{domxref("HTMLAnchorElement.rel")}}
  - : Строка, отражающая HTML-атрибут [`rel`](/ru/docs/Web/HTML/Element/a#rel), указывает взаимоотношения целевого объекта к связанному.
- {{domxref("HTMLAnchorElement.relList")}} {{ReadOnlyInline}}
  - : Возвращает {{domxref("DOMTokenList")}}, который отражает HTML-атрибут [`rel`](/ru/docs/Web/HTML/Element/a#rel) в виде списка токенов.
- {{domxref("HTMLAnchorElement.search")}}
  - : Строка, представляющая строку запроса (включая ведущий знак вопроса ('`?`')), если она присутствует в URL.
- {{domxref("HTMLAnchorElement.target")}}
  - : Строка, отражающая HTML-атрибут [`target`](/ru/docs/Web/HTML/Element/a#target), указывает где следует отобразить связанный ресурс.
- {{domxref("HTMLAnchorElement.text")}}
  - : Строка, является синонимом свойства {{domxref("Node.textContent")}}.
- {{domxref("HTMLAnchorElement.type")}}
  - : Строка, отражающая HTML-атрибут [`type`](/ru/docs/Web/HTML/Element/a#type), показывает MIME-тип связанного ресурса.
- {{domxref("HTMLAnchorElement.username")}}
  - : Строка, содержащая имя пользователя, указанное перед именем домена.

### Устаревшие свойства

- `HTMLAnchorElement.charset` {{deprecated_inline}}
  - : Строка, представляющая кодировку символов связанного ресурса.
- `HTMLAnchorElement.coords` {{deprecated_inline}}
  - : Строка, представляющая список координат разделённый запятыми.
- `HTMLAnchorElement.name` {{deprecated_inline}}
  - : Строка, представляющая имя якоря.
- `HTMLAnchorElement.rev` {{deprecated_inline}}
  - : Строка, представляющая HTML-атрибут [`rev`](/ru/docs/Web/HTML/Element/a#rev), который определяет взаимоотношения связанного объекта к целевому.
- `HTMLAnchorElement.shape` {{deprecated_inline}}
  - : Строка, представляющая форму активной области.

## Методы экземпляра

_Наследует методы своего родителя {{domxref("HTMLElement")}}_.

- {{domxref("HTMLAnchorElement.toString()")}}
  - : Возвращает строку, содержащую весь URL. Это синоним {{domxref("HTMLAnchorElement.href")}}, но он не может быть использован для изменения значения.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML-элемент реализующий это интерфейс: {{HTMLElement("a")}}
