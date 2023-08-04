---
title: Element.setAttribute()
slug: Web/API/Element/setAttribute
---

{{APIRef("DOM")}}

Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.

## Sintaxe

```
element.setAttribute(name, value);
```

- `name` é o nome do atributo como string.
- `value` é o novo valor desejado do atributo

## Exemplo

No seguinte exemplo, `setAttribute()` é usado para definir o atributo [`disabled`](/pt-BR/docs/Web/HTML/Global_attributes#disabled) em {{htmlelement("button")}}, desabilitado-o.

```html
<button>Hello World</button>
```

```js
var b = document.querySelector("button");

b.setAttribute("disabled", "disabled");
```

{{ EmbedLiveSample('Example', '300', '50', '', 'Web/API/Element/setAttribute') }}

## Notas

Quando chamado em um documento HTML, `setAttribute` lower-cases its attribute name argument.

Se um atributo especificado já existe, então o valor do atributo é mudado para o valor passado para a função. Se não existe, então o atributo é criado.

Apesar de [`getAttribute()`](/pt-BR/docs/DOM/element.getAttribute) retornar `null` para atributos ausentes, você precisa usar [`removeAttribute()`](/pt-BR/docs/DOM/element.removeAttribute) ao invés de `elt.setAttribute(attr, null)` para remover o atributo. Este último forçará o valor `null` para a string `"null"`, o que não é provavelmente o que você quer.

Usar `setAttribute()` para modificar certos atributos, mais notavelmente valor em XUL, funciona inconsistentemente, como atributos específicos de valor padrão. Para acessar ou modificar os valores atuais, você deve usar as propriedades. Por exemplo, use `elt.value` ao invés de `elt.setAttribute('value', val)`.

Para definir um atributo que não leva valor, assim como o atributo `autoplay` de um elemento {{HTMLElement("audio")}}, use `null` ou um valor vazio. Por exemplo: `elt.setAttribute('autoplay', '')`

{{DOMAttributeMethods}}

## Especificação

- [DOM Level 2 Core: setAttribute](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68F082) (introduzido em [DOM Level 1 Core](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute))
- [HTML5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/#apis-in-html-documents)
