---
title: input
slug: Web/API/HTMLElement/input_event
---

O evento `input` do DOM é disparado sincronicamente quando o valor de um elemento {{HTMLElement("input")}}, {{HTMLElement("select")}}, ou {{HTMLElement("textarea")}} é alterado. (Para elementos input com `type=checkbox` ou `type=radio`, o evento `input` não é disparado quando o usuário clica no elemento, porque o valor do atributo não é alterado.) Além disso, o evento é disparado no [`contenteditable`](/pt-BR/docs/Web/API/HTMLElement/contentEditable) editors quando o seu conteúdo é alterado. Nesse caso, O alvo do evento é o elemento host da edição. Se houver dois ou mais elementos que tenha `contenteditable` como true, o "host de edição" é o elemento antepassado mais próximo cujo pai não é editável. Similarmente, ele também é disparado no element raiz do [`designMode`](/pt-BR/docs/Web/API/Document/designMode) editors.

## Informações gerais

- Especificação
  - : [HTML5](https://html.spec.whatwg.org/multipage/forms.html#event-input-input), [DOM Level 3 Events](https://dvcs.w3.org/hg/dom3events/raw-file/tip/html/DOM3-Events.html#event-type-input)
- Interface
  - : {{domxref("Event")}}, {{domxref("InputEvent")}}
- Borbulha
  - : Sim
- Cancelável
  - : Não
- Alvo
  - : Elemento
- Ação padrão
  - : O valor ou o conteúdo é modificado.

## Propriedades

| Propriedade                     | Tipo                       | Descrição                                          |
| ------------------------------- | -------------------------- | -------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | O alvo do evento (o alvo mais alto na árvore DOM). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | Tipo do evento.                                    |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Se o evento borbulha ou não.                       |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Se o evento é cancelável, ou não.                  |

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{event("keydown")}}
- {{event("keyup")}}
- {{event("keypress")}}
- {{event("input")}}

O evento de [`change`](/pt-BR/docs/Web/Reference/Events/change) é relacionado. `change` dispara com menos frequência que o `input` – ele só irá disparar quando as mudanças forem finalizadas pelo usuário.
