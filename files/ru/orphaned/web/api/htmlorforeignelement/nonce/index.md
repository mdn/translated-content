---
title: HTMLElement.nonce
slug: orphaned/Web/API/HTMLOrForeignElement/nonce
---

{{SeeCompatTable}}{{APIRef("HTML DOM")}}

Свойство **`nonce`** интерфейса {{domxref("HTMLElement")}} возвращает криптографический номер, который используется политикой безопасности содержимого для определения того, будет ли разрешена дальнейшая работа с данной выборкой.

В более поздних реализациях элементы, имеющие атрибут nonce, предоставляют его только скриптам (а не сторонним каналам, таким как селекторы атрибутов CSS).

## Syntax

```
var nonce = HTMLElement.nonce
HTMLElement.nonce = nonce
```

### Value

Криптографический код.

## Specifications

| Specification                                                    | Status                           | Comment                     |
| ---------------------------------------------------------------- | -------------------------------- | --------------------------- |
| {{SpecName('HTML WHATWG','#attr-nonce','nonce')}} | {{Spec2('HTML WHATWG')}} | Первоначальное определение. |

## Browser Compatibility

{{Compat("api.HTMLElement.nonce")}}
