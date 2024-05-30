---
title: "Element: método setAttribute()"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: 3b8105ccda6714b0e10fefa8227f8c4a61807d98
---

{{APIRef("DOM")}}

O método **`setAttribute()`** da interface {{domxref("Element")}} define o valor de um atributo no elemento especificado. Se o atributo já existir, o valor será atualizado; caso contrário, um novo atributo será adicionado com o nome e valor especificados.

Para obter o valor atual de um atributo, use {{domxref("Element.getAttribute", "getAttribute()")}}; para remover um atributo, chame {{domxref("Element.removeAttribute", "removeAttribute()")}}.

Se você precisar trabalhar com o nó {{domxref("Attr")}} (como clonar de outro elemento) antes de adicioná-lo, você pode usar o nó {{domxref("Element.setAttributeNode()", "setAttributeNode()")}} método em vez disso.

## Sintaxe

```js-nolint
setAttribute(name, value)
```

### Parâmetros

- `name`
  - : Uma string especificando o nome do atributo cujo valor deve ser definido. O nome do atributo é automaticamente convertido para letras minúsculas quando `setAttribute()` é chamado em um elemento HTML em um documento HTML.
- `value`
  - : Uma string contendo o valor a ser atribuído ao atributo.Qualquer valor não-string especificado é convertido automaticamente em uma string.

Atributos booleanos são considerados `true` se estiverem presentes no elemento em tudo. Você deve definir `value` para a string vazia (`""`) ou o nome do atributo, sem espaços em branco à esquerda ou à direita. Veja o [exemplo](#examples) abaixo para uma demonstração prática.

Como o `value` especificado é convertido em uma string, especificando `null` não necessariamente faz o que você espera. Em vez de remover o atributo ou definindo seu valor como [`null`](/pt-BR/docs/Web/JavaScript/Reference/Operators/null), em vez disso, ele define o valor do atributo para a string `"null"`. Se você deseja remover um atributo, chame {{domxref("Element.removeAttribute", "removeAttribute()")}}.

### Valor de retorno

None ({{jsxref("undefined")}}).

### Exceções

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Lançado se o valor [`name`](#name) não for um [nome XML](https://www.w3.org/TR/REC-xml/#dt-name válido); por exemplo, começa com um número, um hífen ou um ponto, ou contém caracteres diferentes de caracteres alfanuméricos, sublinhados, hifens ou pontos.

## Exemplo

No exemplo a seguir, `setAttribute()` é usado para definir atributos em um {{HTMLElement("button")}}.

```html
<button>Hello World</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

### JavaScript

```js
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");
```

{{ EmbedLiveSample('Exemplo', '300', '50') }}

Isso demonstra duas coisas:

- A primeira chamada para `setAttribute()` acima mostra a alteração do valor do atributo `name` para "helloButton".
  Você pode ver isso usando o inspetor de páginas do seu navegador ([Chrome](https://developer.chrome.com/docs/devtools/dom/properties/), [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/css/inspect),
  [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/en-us/guide/safari-developer/welcome/mac)).
- Para definir o valor de um atributo booleano, como `disabled`, você pode especificar qualquer valor.
  Uma string vazia ou o nome do atributo são valores recomendados.
  Tudo o que importa é que se o atributo estiver presente, _independentemente do seu valor real_, o seu valor é considerado 'verdadeiro'.
  A ausência do atributo significa que seu valor é `false`. Ao definir o valor do atributo `disabled` para a string vazia (`""`), estamos definindo `disabled` como `true`, o que resulta na desativação do botão.

## Especificações

{{Specifications}}

## Compatibilidade de navegadores

{{Compat}}

## Veja também

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
