---
title: mousedown
slug: Web/API/Element/mousedown_event
---

{{APIRef}}

O evento `mousedown` é ativado quando um botão de um dispositivo apontador é pressionado sobre um elemento.

## Informação geral

- Especificação
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-mousedown)
- Interface
  - : {{domxref("MouseEvent")}}
- Bubbles
  - : Sim
- Cancelável
  - : Sim
- Alvo
  - : Elemento
- Ação Padrão
  - : Varia: Inicia um operação de arrastar/soltar; inicia a seleção de texto; inicia a interação de rolagem/arrastar (junto do botão do meio do mouse, se suportado)

## Propriedades

| Property                           | Type                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}} | O alvo do evento (o alvo mais alto na árvore do DOM).                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}   | O tipo de evento                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `bubbles` {{readonlyInline}}       | Boolean                    | Whether the event normally bubbles or not                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `cancelable` {{readonlyInline}}    | `Boolean`                  | O evento é cancelável ou não?                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `view` {{readonlyInline}}          | {{domxref("WindowProxy")}} | {{domxref("document.defaultView")}} (`window` do documento)                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `detail` {{readonlyInline}}        | `long` (`float`)           | Um número de cliques consecutivos que aconteceu num pequeno espaço de tempo, acrescido em um.                                                                                                                                                                                                                                                                                                                                                                                |
| `currentTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | O nó que teve o listener do evento anexado.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | Para os eventos `mouseover`, `mouseout`, `mouseenter` e `mouseleave`: o alvo do evento complementar (o alvo do `mouseleave` no caso de um evento `mouseenter`). Caso contrário, `null`.                                                                                                                                                                                                                                                                                      |
| `screenX` {{readonlyInline}}       | long                       | A coordenada X do mouse baseada nas coordenadas globais (tela).                                                                                                                                                                                                                                                                                                                                                                                                              |
| `screenY` {{readonlyInline}}       | long                       | A coordenada Y do mouse baseada nas coordenadas globais (tela).                                                                                                                                                                                                                                                                                                                                                                                                              |
| `clientX` {{readonlyInline}}       | long                       | A coordenada X do ponteiro do mouse baseada nas coordenadas locais (conteúdo do DOM).                                                                                                                                                                                                                                                                                                                                                                                        |
| `clientY` {{readonlyInline}}       | long                       | A coordenada Y do ponteiro do mouse baseada nas coordenadas locais (conteúdo do DOM).                                                                                                                                                                                                                                                                                                                                                                                        |
| `button` {{readonlyInline}}        | unsigned short             | O número do botão que foi pressionado quando o evento mouse foi ativado: Botão esquerdo = 0, botão do meio = 1 (se presente), botão direito = 2. Para os mouses configurados para uso por canhotos onde as ações do mouse são invertidas, os valores são lidos da direita para a esquerda.                                                                                                                                                                                   |
| `buttons` {{readonlyInline}}       | unsigned short             | Os botões pressionados que foram pressionados quando o evento do mouse foi ativado: Botão esquerdo = 1, botão direito = 2, botão do meio (roda) = 4, 4º botão (geralmente, o "botão de voltar") = 8, 5º botão (geralmente, o "botão de avançar") = 16. Se dois ou mais botões são pressionados, retorna a soma lógica dos valores. Exemplo: se o Botão esquerdo e o Botão direito são pressionados, retorna 3 (=1 \| 2). [Mais informações](/pt-BR/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                      | A quantidade de pressão aplicada a um dispositivo touch ou tablet quando o evento estava sendo gerado; este valor varia entre 0.0 (pressão mínima) e 1.0 (pressão máxima).                                                                                                                                                                                                                                                                                                   |
| `ctrlKey` {{readonlyInline}}       | boolean                    | `true` se a tecla control estava pressionada quando o evento foi ativado. Caso contrário, `false`.                                                                                                                                                                                                                                                                                                                                                                           |
| `shiftKey` {{readonlyInline}}      | boolean                    | `true` se a tecla shift estava pressionada quando o evento foi ativado. Caso contrário, `false`.                                                                                                                                                                                                                                                                                                                                                                             |
| `altKey` {{readonlyInline}}        | boolean                    | `true` se a tecla alt estava pressionada quando o evento foi ativado. Caso contrário, `false`.                                                                                                                                                                                                                                                                                                                                                                               |
| `metaKey` {{readonlyInline}}       | boolean                    | `true` se a tecla meta estava pressionada quando o evento foi ativado. Caso contrário, `false`.                                                                                                                                                                                                                                                                                                                                                                              |

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{Event("mouseup")}}
- {{Event("mousemove")}}
- {{Event("click")}}
- {{Event("dblclick")}}
- {{Event("mouseover")}}
- {{Event("mouseout")}}
- {{Event("mouseenter")}}
- {{Event("mouseleave")}}
- {{Event("contextmenu")}}
