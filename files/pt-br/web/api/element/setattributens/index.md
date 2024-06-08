---
title: "Element: método setAttributeNS()"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: 93f6ad26b70067f9fbac190ea6a0351fdf40318e
---

{{ APIRef("DOM") }}

`setAttributeNS` adiciona um novo atributo ou altera o valor de um atributo com o namespace e nome fornecidos.

Se você estiver trabalhando com documentos HTML e não precisar especificar o atributo solicitado como parte de um namespace específico, use o método {{domxref("Element.setAttribute()", "setAttribute()")}} .

## Sintaxe

```js-nolint
setAttributeNS(namespace, name, value)
```

### Parâmetros

- `namespace` é uma string que especifica o namespace do atributo.
- `name` é uma string que identifica o atributo pelo seu nome qualificado;
  isto é, um prefixo de namespace seguido por dois pontos seguido por um nome local.
- `value` é o valor da string desejada do novo atributo.

## Valor de retorno

None ({{jsxref("undefined")}}).

## Exemplos

```js
let d = document.getElementById("d1");
d.setAttributeNS(
  "http://www.mozilla.org/ns/specialspace",
  "spec:align",
  "center",
);
```

## Notas

`setAttributeNS` é o único método para atributos com namespace que espera o nome totalmente qualificado, ou seja, `"namespace:localname"`.

## Especificações

{{Specifications}}

## Compatibilidade de navegadores

{{Compat}}

## Veja também

- {{domxref("Element.hasAttributeNS()")}}
- {{domxref("Element.getAttributeNS()")}}
- {{domxref("Element.removeAttributeNS()")}}
