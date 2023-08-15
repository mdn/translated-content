---
title: var()
slug: Web/CSS/var
---

{{CSSRef}}

A função [CSS](/pt-BR/docs/Web/CSS) **`var()`** pode ser usada para inserir o valor de uma [custom property](/pt-BR/docs/Web/CSS/--*) (propriedade personalizada) substituindo qualquer parte do valor de outra propriedade.

```css
var(--header-color, blue);
```

A função `var()` não pode ser usada em nomes de propriedades, seletores ou qualquer outra coisa além de valores de propriedades. (Isso geralmente produz sintaxe inválida, ou então um valor cujo significado não tem conexão com a variável.)

## Sintaxe

O primeiro argumento da função é o nome da propriedade personalizada a ser substituída. O segundo argumento opcional da função serve como valor alternativo. Se a propriedade personalizada referenciada pelo primeiro argumento for inválida, a função usará o segundo valor.

{{csssyntax}}

> **Nota:** A sintaxe do argumento alternativo, assim como as propriedades personalizadas, permite o uso de vírgulas. Por exemplo, `var(--foo, red, blue)` define como argumento alternativo `red, blue`; isto é, qualquer coisa entre a primeira vírgula e o fim da função é considerado como valor do como argumento alternativo.

### Valores

- \<custom-property-name>
  - : O nome da propriedade personalizada referenciada é representada por um identificador que começa com dois traços. As propriedades personalizadas são exclusivamente para uso por autores e usuários; O CSS nunca lhes dará um significado além do que é apresentado aqui.
- \<declaration-value>
  - : O valor do argumento alternativo é usado caso a propriedade personalizada seja inválida no contexto utilizado. Este valor pode conter qualquer caractere, exceto alguns caracteres com significado especial como novas linhas, colchetes de fechamento perdidos, ex.`)`, `]`, ou `}`, ponto e vírgula de primeiro nível, ou sinais de exclamação.

## Exemplos

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

```css
/* Argumento alternativo */
/* No estilo de componente: */
.component .header {
  color: var(--header-color, blue);
}

.component .text {
  color: var(--text-color, black);
}

/* No estilo de grandes aplicações: */
.component {
  --text-color: #080; /* header-color não está definido e, desse modo, permanece azul, o valor do argumento alternativo */
}
```

## Especificações

| Especificação                                               | Status                      | Comentário        |
| ----------------------------------------------------------- | --------------------------- | ----------------- |
| {{SpecName('CSS3 Variables', '#using-variables', 'var()')}} | {{Spec2('CSS3 Variables')}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("css.properties.custom-property.var")}}

## Veja também

- [Utilizando variáveis CSS](/pt-BR/docs/Web/CSS/Using_CSS_variables)
