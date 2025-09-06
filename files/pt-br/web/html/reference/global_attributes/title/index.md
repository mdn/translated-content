---
title: title
slug: Web/HTML/Reference/Global_attributes/title
original_slug: Web/HTML/Global_attributes/title
---

{{HTMLSidebar("Global_attributes")}}

O [atributo global](/pt-BR/docs/Web/HTML/Global_attributes) **title** contém textos representando informações de orientação, relacionados ao elemento a que pertence. Geralmente, mas não obrigatoriamente, esta informação pode ser apresentada ao usuário como uma dica. Alguns usos comuns:

- Link: título ou descrição do documento vinculado
- Elemento de mídia como uma imagem: descrição ou créditos associados
- Parágrafo: nota de rodapé ou um comentário sobre ele
- Citação: informação sobre o autor, e assim por diante.

Se este atributo for omitido, significa que o título do antecessor mais próximo desse elemento ainda é relevante (e poderá ser usado como dica para este elemento). Se este atributo estiver difinido como uma _string vazia_, significa explicitamente que o título do antecessor mais próximo não é relevante (e não deve ser usado como dica para este elemento).

Semânticas adicionais são anexadas aos atributos **title** dos elementos {{ HTMLElement("link") }}, {{ HTMLElement("abbr") }}, {{ HTMLElement("input") }} e {{ HTMLElement("menuitem") }}.

O atributo **title** pode conter várias linhas. Cada `U+000A LINE FEED` (`LF`) inserida representa uma nova linha. Alguns cuidados devem ser tomados, como a seguir:

```html
<p>
  Novas linhas em título devem ser levadas em conta, como este
  <abbr
    title="Este é um
título de multiplas linhas"
    >exemplo</abbr
  >.
</p>
```

Este exemplo define um título de duas linhas.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Todos os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).
- {{domxref("HTMLElement.title")}} que reflete este atributo.
