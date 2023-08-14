---
title: caret
slug: Glossary/Caret
---

Um **caret** (às vezes chamado de "cursor de texto") é um indicador exibido na tela para indicar onde a entrada de texto será inserida. A maioria das interfaces de usuário representam o caret usando uma linha vertical fina ou uma caixa do tamanho de um caractere que pisca, mas isso pode variar. Este ponto do texto é chamado de **ponto de inserção.** A palavra "_careta_" diferencia o ponto de inserção de texto do cursor do mouse.

Na web, um caret é usado para representar o ponto de inserção em {{HTMLElement("input")}} e {{HTMLElement("textarea")}} elementos, bem como quaisquer elementos cujo atributo [`contenteditable`](/pt-BR/docs/Web/HTML/Global_attributes#contenteditable) está definido, permitindo assim que o conteúdo do elemento seja editado pelo usuário.

## Saiba Mais

### Conhecimento geral

- [Caret navigation](https://en.wikipedia.org/wiki/Caret_navigation) no Wikipedia

### CSS relacionado com o caret

Você pode definir a cor do caret para o conteúdo editável de um determinado elemento definindo a propriedade CSS {{cssxref ("caret-color")}} para o valor apropriado {{cssxref("&lt;color&gt;")}}

### Elementos HTML que podem apresentar um caret

Esses elementos fornecem campos de entrada de texto ou caixas e, portanto, fazem uso do caret.

- [`<input type="text">`](/pt-BR/docs/Web/HTML/Element/input/text)
- [`<input type="password">`](/pt-BR/docs/Web/HTML/Element/input/password)
- [`<input type="search">`](/pt-BR/docs/Web/HTML/Element/input/search)
- [`<input type="date">`](/pt-BR/docs/Web/HTML/Element/input/date), [`<input type="time">`](/pt-BR/docs/Web/HTML/Element/input/time), [`<input type="datetime">`](/pt-BR/docs/Web/HTML/Element/input/datetime) e [`<input type="datetime-local">`](/pt-BR/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="number">`](/pt-BR/docs/Web/HTML/Element/input/number), [`<input type="range">`](/pt-BR/docs/Web/HTML/Element/input/range)
- [`<input type="email">`](/pt-BR/docs/Web/HTML/Element/input/email), [`<input type="tel">`](/pt-BR/docs/Web/HTML/Element/input/tel) e [`<input type="url">`](/pt-BR/docs/Web/HTML/Element/input/url)
- {{HTMLElement("textarea")}}
- Qualquer elemento com seu conjunto de atributo [`contenteditable`](/pt-BR/docs/Web/HTML/Global_attributes#contenteditable).
