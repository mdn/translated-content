---
title: Node.innerText
slug: Web/API/HTMLElement/innerText
---

{{APIRef("DOM")}}

## Resumo

**`Node.innerText`** é uma propriedade que representa o conteúdo textual "renderizado" de um nó e seus descendentes. Usada como [getter](/pt-BR/docs/), retorna de maneira aproximada o texto que o usuário obteria caso tivesse selecionado o conteúdo e copiado para a área de transferência. Este recurso fora introduzido originalmente pelo Internet Explorer, mas foi oficialmente especificado no padrão HTML apenas em 2016, sendo adotado por todos os principais navegadores a partir de então.

{{domxref("Node.textContent")}} é uma alternativa similar, embora existam diferenças significativas entre as duas.

## Especificação

| Especificação                                                                                                | Status                           | Comentário                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'dom.html#the-innertext-idl-attribute', 'innerText')}} | {{Spec2('HTML WHATWG')}} | Introduzida, baseado no [rascunho da especifição de innerText](https://github.com/rocallahan/innerText-spec). Ver [whatwg/html#465](https://github.com/whatwg/html/issues/465) e [whatwg/compat#5](https://github.com/whatwg/compat/issues/5) para histórico. |

## Compatibilidade de navegadores

{{Compat("api.HTMLElement.innerText")}}

## Ver também

- {{domxref("HTMLElement.outerText")}}
- {{domxref("Element.innerHTML")}}
