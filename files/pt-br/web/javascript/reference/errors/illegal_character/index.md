---
title: "SyntaxError: illegal character"
slug: Web/JavaScript/Reference/Errors/Illegal_character
---

{{jsSidebar("Errors")}}

## Mensagem

```
SyntaxError: Invalid character (Edge)
SyntaxError: illegal character (Firefox)
SyntaxError: Invalid or unexpected token (Chrome)
```

## Tipo do erro

{{jsxref("SyntaxError")}}

## O que deu errado?

Há um token inválido ou inesperado que não pertence a esta posição no código. Utilize um editor que realce a sintaxe e cuidadosamente verifique seu código em relação a desajustes como um sinal de menos (`-`) no lugar de um travessão (`–`) ou aspas simples (`"`) no lugar de aspas não padronizadas(`“`).

## Exemplos

### Caracteres desajustados

Alguns carateres parecem similares, mas irão impedir que o analisador interprete seu código. Exemplos famosos disso são as aspas, o sinal de menos ou o ponto e vírgula (o [ponto de interrogação grego (U+37e)](https://en.wikipedia.org/wiki/Question_mark#Greek_question_mark) é quase igual)

```js example-bad
“Isso parece uma string”;
// SyntaxError: illegal character

42 – 13;
// SyntaxError: illegal character
```

Isto deve funcionar:

```js example-good
"Isso é realmente uma string";

42 - 13;
```

### Caracteres esquecidos

É fácil esquecer um caractere aqui ou ali.

```js example-bad
var colors = ['#000', #333', '#666'];
// SyntaxError: illegal character
```

Adicione as aspas que faltam no `'#333'`.

```js example-good
var colors = ["#000", "#333", "#666"];
```

### Caracteres escondidos

Quando copiamos e colamos código de fontes externas, pode haver caracteres inválidos. Cuidado!

```js example-bad
var foo = 'bar';​
// SyntaxError: illegal character
```

Quando inspeciona-se este código em um editor como o Vim, você pode ver que, na verdade, há um caractere [zero-width space (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space).

```js
var foo = 'bar';<200b>
```

## Veja também

- [Lexical grammar](/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar)
