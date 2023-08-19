---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
---

{{ APIRef("HTML DOM") }}

Интерфейс **`HTMLLinkElement`** представляет справочную информацию для внешних ресурсов и отношение этих ресурсов к документу и наоборот (соответствует элементу [`<link>`](/ru/docs/Web/HTML/Element/link); не путать с [`<a>`](/ru/docs/Web/HTML/Element/a), который представлен элементом [`HTMLAnchorElement`](/ru/docs/Web/API/HTMLAnchorElement)). Этот объект наследует все свойства и методы интерфейса {{domxref("HTMLElement")}}.

{{InheritanceDiagram(600, 120)}}

## Свойства

_Наследует свойства от своего родителя, {{domxref("HTMLElement")}}, и {{domxref("LinkStyle")}}._

- {{domxref("HTMLLinkElement.as")}}

  - : Это {{domxref("DOMString")}} представляющий тип контента загружаемый по HTML ссылке.

- {{domxref("HTMLLinkElement.crossOrigin")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} that corresponds to the CORS setting for this link element. See [CORS settings attributes](/ru/docs/HTML/CORS_settings_attributes) for details.
- {{domxref("HTMLLinkElement.disabled")}}
  - : Is a `Boolean` which represents whether the link is disabled; currently only used with style sheet links.
- {{domxref("HTMLLinkElement.href")}}
  - : Is a {{domxref("DOMString")}} representing the URI for the target resource.
- {{domxref("HTMLLinkElement.hreflang")}}
  - : Is a {{domxref("DOMString")}} representing the language code for the linked resource.
- {{domxref("HTMLLinkElement.media")}}
  - : Is a {{domxref("DOMString")}} representing a list of one or more media formats to which the resource applies.
- {{domxref("HTMLLinkElement.referrerPolicy")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} that reflects the [`referrerpolicy`](/ru/docs/Web/HTML/Element/link#referrerpolicy) HTML attribute indicating which referrer to use.
- {{domxref("HTMLLinkElement.rel")}}
  - : Is a {{domxref("DOMString")}} representing the forward relationship of the linked resource from the document to the resource.
- {{domxref("HTMLLinkElement.relList")}} {{readonlyInline}}
  - : Is a {{domxref("DOMTokenList")}} that reflects the [`rel`](/ru/docs/Web/HTML/Element/link#rel) HTML attribute, as a list of tokens.
- {{domxref("HTMLLinkElement.sizes")}} {{readonlyInline}}
  - : Is a {{domxref("DOMSettableTokenList")}} that reflects the [`sizes`](/ru/docs/Web/HTML/Element/link#sizes) HTML attribute, as a list of tokens.
- {{domxref("LinkStyle.sheet")}} {{readonlyInline}}
  - : Returns the {{domxref("StyleSheet")}} object associated with the given element, or `null` if there is none.
- {{domxref("HTMLLinkElement.type")}}
  - : Is a {{domxref("DOMString")}} representing the MIME type of the linked resource.

### Устаревшие свойства

- {{domxref("HTMLLinkElement.charset")}}
  - : Is a {{domxref("DOMString")}} representing the character encoding for the target resource.
- {{domxref("HTMLLinkElement.rev")}}

  - : Is a {{domxref("DOMString")}} representing the reverse relationship of the linked resource from the resource to the document.

    > **Примечание:** Currently the W3C HTML 5.2 spec states that `rev` is no longer obsolete, whereas the WHATWG living standard still has it labeled obsolete. Until this discrepancy is resolved, you should still assume it is obsolete.

- {{domxref("HTMLLinkElement.target")}}
  - : Is a {{domxref("DOMString")}} representing the name of the target frame to which the resource applies.

## Методы

_Не имеет методов; наследует методы от своего родителя, {{domxref("HTMLElement")}}, и {{domxref("LinkStyle")}}._

## Спецификации

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- Элемент HTML, реализующий этот интерфейс: {{HTMLElement("link")}}.
