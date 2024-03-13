---
title: abort
slug: Web/API/HTMLMediaElement/abort_event
---

O evento **`abort`** é disparado quando o carregamento de um recurso foi interrompido.

## Informações Gerais

- Especificação
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-abort)
- Interface
  - : {{domxref("UIEvent")}} se gerado a partir da interface do usuário, caso contrário será {{domxref("Event")}}.
- Bubbles
  - : Não
- Cancelável
  - : Não
- Alvo
  - : {{domxref("Element")}}
- Ação Padrão
  - : Nenhuma

## Propriedades

| Propriedade                     | Tipo                         | Descrição                                                     |
| ------------------------------- | ---------------------------- | ------------------------------------------------------------- |
| `target` {{readOnlyInline}}     | `{{domxref("EventTarget")}}` | O evento alvo (O mais elevado da árvore DOM).                 |
| `type` {{readOnlyInline}}       | `{{domxref("DOMString")}}`   | O tipo de evento.                                             |
| `bubbles` {{readOnlyInline}}    | `{{domxref("Boolean")}}`     | O evento é normalmente _bubble_?                              |
| `cancelable` {{readOnlyInline}} | `{{domxref("Boolean")}}`     | É possível cancelar o evento?                                 |
| `view` {{readOnlyInline}}       | `{{domxref("WindowProxy")}}` | `{{domxref("document.defaultView")}}` (`window` do documento) |
| `detail` {{readOnlyInline}}     | `long` (`float`)             | 0.                                                            |
