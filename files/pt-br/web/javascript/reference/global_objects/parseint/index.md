---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
---

{{jsSidebar("Objects")}}

## Sumário

A função **`parseInt()`** analisa um argumento `string` e retorna um inteiro na `base` especificada.

## Sintaxe

```
parseInt(string, base);
```

## Parâmetros

- `string`
  - : O valor a analisar. Se o argumento `string` não for uma string, então o valor é convertido para uma string (utilizando a operação abstrata [`ToString`](http://www.ecma-international.org/ecma-262/6.0/#sec-tostring)). Os espaços em branco na `string` são ignorados.
- `base`
  - : Um inteiro entre `2` e `36` que representa a _base_ da `string` (sistemas numéricos matemáticos) mencionada no parâmetro anterior. Especifique `10` para o sistema numérico decimal comumente usado por humanos. **Sempre especifique este parâmetro** para eliminar confusão do leitor e para garantir o comportamento esperado. Implementações diferentes produzem resultados diferentes quando `base` não é especificado, normalmente assumindo o valor como `10`.

### Valor de retorno

Um número inteiro analisado a partir da string fornecida. Se o primeiro caracter não puder ser convertido para um número, {{jsxref("NaN")}} é retornado.

## Descrição

A função `parseInt` converte seu primeiro argumento para uma string, analisa, e retorna um inteiro ou `NaN`. Se não `NaN`, o valor retornado será a representação decimal inteira do primeiro argumento obtido como um número na base especificada. Por exemplo, uma*base* 10 indica para converter de um número decimal, 8 octal, 16 hexadecimal, e assim por diante. Para bases acima de `10`, as letras do alfabeto indicam numerais maiores que `9`. Por exemplo, para números hexadecimais (base 16), `A` até `F` são usados.

Se `parseInt` encontrar um caracter que não seja um numeral na base especificada, ele o ignora e a todos os caracteres subsequentes e retorna o valor inteiro analisado até aquele ponto. `parseInt` trunca números para valores inteiros. Espaços no início e fim são permitidos.

Se _base_ é `undefined` ou 0 (ou ausente), JavaScript assume o seguinte:

- Se a `string` de entrada começa com "0x" ou "0X", a _base_ é 16 (hexadecimal) e o restante da string é analisado.
- Se a `string` de entrada começa com "0", a _base_ é oito (octal) ou 10 (decimal). Exatamente qual base é escolhida é dependente da implementação. O ECMAScript 5 especifica que 10 (decimal) seja utilizado, mas nem todos os browsers suportam isso ainda. Por essa razão **sempre especifique uma base quando estiver usando `parseInt`**.
- Se a `string` de entrada começa com qualquer outro valor, a base é 10 (decimal).

Se o primeiro caracter não puder ser convertido para um número, `parseInt` retorna `NaN`.

Para propósitos aritméticos, o valor `NaN` não é um número em qualquer base. Você pode chamar a função {{jsxref("Global_Objects/isNaN", "isNaN")}} para determinar se o resultado de `parseInt` é `NaN`. Se `NaN` for passado em operações aritméticas, o resultado da operação também será `NaN`.

Para converter um número para seu literal string em uma base específica use `intValue.toString(base)`.

## Exemplos

### Exemplo: Usando `parseInt`

Os seguintes exemplos sempre retornam **`15`**:

```
parseInt(" 0xF", 16);
parseInt(" F", 16);
parseInt("17", 8);
parseInt(021, 8);
parseInt("015", 10);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
```

Os seguintes exemplos sempre retornam **`NaN`**:

```
parseInt("Hello", 8); // Não é realmente um número
parseInt("546", 2);   // Dígitos não são válidos para representações binárias
```

Os seguintes exemplos sempre retornam **`-15`**:

```
parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt(-15.1, 10)
parseInt(" -17", 8);
parseInt(" -15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);
```

O seguinte exemplo retorna **`224`**:

```
parseInt("0e0", 16);
```

## Interpretação octal sem informar a base

Embora desencorajado pelo ECMAScript 3 e proibido pelo ECMAScript 5, muitas implementações interpretam uma string numérica começando com um `0` como octal. O exemplo abaixo pode ter um resultado octal, ou ele pode ter um resultado decimal. **Sempre especifique uma base para evitar este comportamento não confiável.**

```
parseInt("0e0"); // 0
parseInt("08"); // 0, '8' não é um dígito octal.
```

### O ECMAScript 5 remove a interpretação octal

A especificação ECMAScript 5 da funcão `parseInt` não permite mais que as implementações tratem Strings começando com o caracter 0 como um valor octal. O ECMAScript 5 declara:

A função `parseInt` produz um valor inteiro ditado pela interpretação do conteúdo de uma argumento string de acordo com uma base específicada. Espaços em branco no início da string são ignorados. Se a base for undefined ou `0`, ela é assumida como `10` exceto quando o número começa com os pares de caracter `0x` or `0X`, e neste caso a base 16 é assumida. Se a base é `16`, o número pode também opcionalmente começar com os pares de caracter `0x` or `0X`.

Isto difere do ECMAScript 3, que desencoraja mas permite a interpretação octal.

Muitas implementações não adotaram este comportamento a partir de 2013, e porque browser antigos devem ser suportados, **sempre especifique uma base**.

## Uma função de análise mais rigorosa

É útil em algum momento ter uma maneira mais rigorosa para analisar valores inteiros. Expressões regulares podem ajudar:

```js
filterInt = function (value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
  return NaN;
};

console.log(filterInt("421")); // 421
console.log(filterInt("-421")); // -421
console.log(filterInt("+421")); // 421
console.log(filterInt("Infinity")); // Infinity
console.log(filterInt("421e+0")); // NaN
console.log(filterInt("421hop")); // NaN
console.log(filterInt("hop1.61803398875")); // NaN
console.log(filterInt("1.61803398875")); // NaN
```

## Especificações

| Especificação                                                 | Status             | Comentário        |
| ------------------------------------------------------------- | ------------------ | ----------------- |
| ECMAScript 1st Edition.                                       | Padrão             | Definição inicial |
| {{SpecName('ES5.1', '#sec-15.1.2.2', 'parseInt')}}            | {{Spec2('ES5.1')}} |                   |
| {{SpecName('ES6', '#sec-parseint-string-radix', 'parseInt')}} | {{Spec2('ES6')}}   |                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.parseInt")}}

## Veja também

- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
- {{jsxref("Number.toString()")}}
- {{jsxref("Object.valueOf")}}
