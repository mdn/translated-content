---
title: aria-label
slug: Web/Accessibility/ARIA/Attributes/aria-label
---

O atributo `aria-label` define um valor de string que rotula um elemento interativo.

## Descrição

Às vezes, o [nome acessível](https://w3c.github.io/accname/#dfn-accessible-name) padrão de um elemento está ausente ou não descreve com precisão seu conteúdo e não há conteúdo visível no DOM que pode ser associado ao objeto para dar-lhe significado. Um exemplo comum é um botão contendo um SVG ou [fonte de ícone (que você não deveria usar)](https://www.youtube.com/watch?v=9xXBYcWgCHA) sem nenhum texto.

Nos casos em que um elemento interativo não tem um nome acessível, ou um nome acessível que não é preciso, e não há conteúdo visível no DOM que possa ser referenciado via [`aria-labelledby`](/pt-BR/docs /Web/Accessibility/ARIA/Attributes/aria-labelledby), o atributo `aria-label` pode ser usado para definir uma string que rotula o elemento interativo no qual está definido. Isso fornece ao elemento seu nome acessível.

```html
<button aria-label="Fechar" onclick="myDialog.close()">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="https://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="#000" />
  </svg>
</button>
```

> **Observação:** `aria-label` destina-se ao uso em elementos interativos, ou elementos feitos para serem interativos por meio de outras declarações ARIA, quando não houver texto apropriado visível no DOM que possa ser referenciado como um rótulo

A maior parte do conteúdo tem um nome acessível gerado a partir do conteúdo de texto de seu elemento de encapsulamento imediato. Nomes acessíveis também podem ser criados por certos atributos ou elementos associados.

Por padrão, o nome acessível de um botão é o conteúdo entre as tags {{HTMLElement('button')}} de abertura e fechamento, o nome acessível de uma imagem é o conteúdo de seu [`alt`](/pt-BR/docs/Web /HTML/Element/img#alt) e o nome acessível de uma entrada de formulário é o conteúdo do elemento {{HTMLElement('label')}} associado.

Se nenhuma dessas opções estiver disponível, ou se o nome acessível padrão não for apropriado, use o atributo `aria-label` para definir o nome acessível de um elemento.

`aria-label` pode ser usado em casos onde o texto que poderia rotular o elemento é _não_ visível. Se houver texto visível que rotule um elemento, use [`aria-labelledby`](/pt-BR/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).

O propósito de `aria-label` é o mesmo que `aria-labelledby`. Ambos fornecem um nome acessível para um elemento. Se não houver um nome visível para o elemento que você pode referenciar, use `aria-label` para fornecer ao usuário um nome acessível reconhecível. Se o texto do rótulo estiver disponível no DOM e fizer referência ao conteúdo do DOM e à experiência do usuário aceitável, prefira usar `aria-labelledby`. Não inclua ambos. Se ambos estiverem presentes no mesmo elemento, `aria-labelledby` terá precedência sobre `aria-label`.

O atributo `aria-label` pode ser usado com elementos HTML semânticos regulares; não se limita a elementos que tenham um [ARIA `role`](/pt-BR/docs/Web/Accessibility/ARIA/Roles) atribuído.

Não "exagere" o `aria-label`. Por exemplo, use texto visível com `aria-describedby` ou `aria-description`, não `aria-label`, para fornecer instruções adicionais ou esclarecer a interface do usuário. Lembre-se sempre de que você não precisa direcionar instruções apenas para leitores de tela; se forem necessárias instruções, forneça-as a todos (ou, de preferência, torne sua interface do usuário mais intuitiva).

Nem todos os elementos podem receber um nome acessível. Nem `aria-label` nem `aria-labelledby` devem ser usados com elementos não interativos ou papéis estruturais embutidos como `código`, `termo` ou `ênfase` nem papéis cuja semântica não será mapeada para a acessibilidade API, incluindo `presentation`, `none` e `hidden`. O atributo `aria-label` destina-se apenas a elementos interativos. Use `aria-label` para garantir que um nome acessível seja fornecido quando nenhum estiver visível no DOM para todos os elementos interativos, como links, vídeos, controles de formulário, [papéis de referência](/pt-BR/docs/Web/Accessibility/ARIA /Roles#3.\_landmark_roles) e [funções de widget](/pt-BR/docs/Web/Accessibility/ARIA/Roles#2._widget_roles).

Se você der a seus {{HTMLElement('iframe')}}s um `title`, suas imagens um atributo `alt` e os {{HTMLElement('label')}}s associados à sua entrada, `aria-label` não é necessário. Mas, se presente, o `aria-label` terá precedência sobre o `title`, `alt` e `<label>` como seu `iframe`, imagem ou nome acessível da entrada, respectivamente.

> [!CALLOUT]
> O `aria-label` só é "visível" para tecnologias assistivas. Se as informações forem importantes o suficiente para serem adicionadas aos usuários AT, considere torná-las visíveis para todos os usuários.

## Valores

- `<string>`
  - : Uma string de texto que será o nome acessível para o objeto.

## API ARIAMixin

- {{domxref("Element.ariaLabel")}}
  - : A propriedade [`ariaLabel`](/pt-BR/docs/Web/API/Element/ariaLabel), parte da interface {{domxref("Element")}}, reflete o valor do `aria-label` atributo.
- {{domxref("ElementInternals.ariaLabel")}}
  - : A propriedade [`ariaLabel`](/pt-BR/docs/Web/API/ElementInternals/ariaLabel), parte da interface {{domxref("ElementInternals")}}, reflete o valor do `aria-label` atributo.

## Funções associadas

Usado em quase todas as funções **exceto** funções que não podem receber um nome acessível pelo autor.

O atributo `aria-label` **NÃO** é suportado em:

- [`code`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`generic`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [`insertion`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`mark`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/mark_role)
- [`paragraph`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`presentation`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [`none`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`strong`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`suggestion`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/suggestion_role)
- [`term`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`time`](/pt-BR/docs/Web/Accessibility/ARIA/Roles/structural_roles)

> [!CALLOUT]
> O atributo `aria-label` destina-se apenas a elementos interativos. Quando colocado em elementos não interativos, como os listados acima, pode não ser lido ou pode confundir seus usuários como um elemento não interativo que age como interativo.

## Especificações

{{Specifications}}

## Veja também

- O elemento {{HTMLElement('label')}}
- [`aria-labelledby`](/pt-BR/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

<section id="Quick_links">
<strong><a href="/pt-BR/docs/Web/Accessibility/ARIA/Attributes">Estados e propriedades WAI-ARIA</a></strong>
{{ListSubpagesForSidebar("/pt-BR/docs/Web/Accessibility/aria/Attributes")}}
</section>
