---
title: CustomElementRegistry.whenDefined()
slug: Web/API/CustomElementRegistry/whenDefined
---

{{APIRef("CustomElementRegistry")}}

O **`whenDefined()`** é um método de {{domxref("CustomElementRegistry")}} e a interface retorna uma {{jsxref("Promise")}} que é resolvido quando o elemento nomeado é
definido.

## Syntax

```js
customElements.whenDefined(name): Promise<CustomElementConstructor>;
```

### Parâmetros

- name
  - : Nome do elemento personalizado.

### Valor de retorno

A {{jsxref("Promise")}} que será cumprida com o [elemento personalizado](/pt-BR/docs/Web/API/Window/customElements)'s construtor quando um
[custom element](/pt-BR/docs/Web/API/Window/customElements) torna-se definido com o nome fornecido. (Se o [custom element](/pt-BR/docs/Web/API/Window/customElements) já foi
definido, a promessa devolvida será imediatamente cumprida.)

### Exceções

| Exceção       | Descrição                                                                                                                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SyntaxError` | Se o nome fornecido não for um [nome de elemento personalizado válido](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name), a promessa rejeita com um `SyntaxError`. |

## Exemplos

Este exemplo usa `whenDefined()` para detectar quando os elementos personalizados que compõem um menu são definidos. O menu exibe o conteúdo do espaço reservado até que o conteúdo do
menu real esteja pronto para ser exibido.

```html
<nav id="menu-container">
  <div class="menu-placeholder">Loading...</div>
  <nav-menu>
    <menu-item>Item 1</menu-item>
    <menu-item>Item 2</menu-item>
    ...
    <menu-item>Item N</menu-item>
  </nav-menu>
</nav>
```

```js
const container = document.getElementById("menu-container");
const placeholder = container.querySelector(".menu-placeholder");
// Busca todos os filhos do menu que ainda não foram definidos.
const undefinedElements = container.querySelectorAll(":not(:defined)");

async function removePlaceholder() {
  const promises = [...undefinedElements].map((button) =>
    customElements.whenDefined(button.localName),
  );

  // Espere que todos os filhos sejam atualizados
  await Promise.all(promises);
  // em seguida, remova o espaço reservado
  container.removeChild(placeholder);
}

removePlaceholder();
```

## Specifications

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
