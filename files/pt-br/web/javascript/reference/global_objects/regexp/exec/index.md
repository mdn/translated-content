---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
---

{{JSRef}}

O método **`exec()`** executa a busca por um padrão em uma determinada string. Retorna um array, ou {{jsxref("null")}}.

Se você está precisa somente de um retorno verdadeiro/falso, use o método {{jsxref("RegExp.prototype.test()")}} ou {{jsxref("String.prototype.search()")}}.

## Sintaxe

```
regexObj.exec(string)
```

### Parâmetros

- `string`
  - : A string para comparar com a expressão regular

### Valor retornado

Se a combinação acontecer, o método `exec()` o método retorna um array e atualiza as propriedades do objeto da expressão regular. Esse array retornado possui o texto combinado como primeiro item e depois um item para cada captura contendo o respectivo texto.

Se falhar, o retorno do método `exec()` será {{jsxref("null")}}.

## Descrição

Considere o exemplo abaixo:

```js
// Encontra combinações "quick brown" seguido de "jumps", ignorando caracteres entre eles
// Relembra "brown" e "jumps"
// Ignora caixa (maiúsculo e minúsculo)
var re = /quick\s(brown).+?(jumps)/gi;
var result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

A tabela a seguir provê os resultados do script:

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header">Objeto</td>
      <td class="header">Propriedade/Índice</td>
      <td class="header">Descrição</td>
      <td class="header">Exemplo</td>
    </tr>
    <tr>
      <td rowspan="4"><code>result</code></td>
      <td><code>[0]</code></td>
      <td>A string completa dos caracteres encontrados</td>
      <td><code>Quick Brown Fox Jumps</code></td>
    </tr>
    <tr>
      <td>
        <code>[1], ...[<em>n</em> ]</code>
      </td>
      <td>
        As combinações de substrings parametrizadas encontradas, se existir. A
        quantidade de possíveis substrings parametrizadas é ilimitado.
      </td>
      <td>
        <code>[1] = Brown<br />[2] = Jumps</code>
      </td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td><p>O índice base 0 do valor encontrado na string.</p></td>
      <td><code>4</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>String original</td>
      <td><code>The Quick Brown Fox Jumps Over The Lazy Dog</code></td>
    </tr>
    <tr>
      <td rowspan="5"><code>re</code></td>
      <td><code>lastIndex</code></td>
      <td>
        O índice que começa a próxima combinação encontrada. Quando
        "<code>g</code>" não é definido, este valor será sempre 0.
      </td>
      <td><code>25</code></td>
    </tr>
    <tr>
      <td><code>ignoreCase</code></td>
      <td>
        Indica se a flag "<code>i</code>" foi usada para ignorar caixa
        alta/baixa.
      </td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>global</code></td>
      <td>
        Indica se a flag "<code>g</code>" foi usada para encontrar combinações
        de forma global.
      </td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>multiline</code></td>
      <td>
        Indica se a flag "<code>m</code>" foi usada para pesquisar em strings de
        diversas linhas.
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>Texto do padrão.</td>
      <td><code>quick\s(brown).+?(jumps)</code></td>
    </tr>
  </tbody>
</table>

## Exemplos

### Procurando combinações sucessivas

If your regular expression uses the "`g`" flag, you can use the `exec()` method multiple times to find successive matches in the same string. When you do so, the search starts at the substring of `str` specified by the regular expression's {{jsxref("RegExp.lastIndex", "lastIndex")}} property ({{jsxref("RegExp.prototype.test()", "test()")}} will also advance the {{jsxref("RegExp.lastIndex", "lastIndex")}} property). For example, assume you have this script:

```js
var myRe = /ab*/g;
var str = "abbcdefabh";
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = "Found " + myArray[0] + ". ";
  msg += "Next match starts at " + myRe.lastIndex;
  console.log(msg);
}
```

This script displays the following text:

```
Found abb. Next match starts at 3
Found ab. Next match starts at 9
```

Nota: Do not place the regular expression literal (or {{jsxref("RegExp")}} constructor) within the `while` condition or it will create an infinite loop if there is a match due to the {{jsxref("RegExp.lastIndex", "lastIndex")}} property being reset upon each iteration. Also be sure that the global flag is set or a loop will occur here also.

### Usando `exec()` com `RegExp` literais

You can also use `exec()` without creating a {{jsxref("RegExp")}} object:

```js
var matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

This will log a message containing 'hello world!'.

## Especificações

| Especificação                                                        | Status               | Comentário                                         |
| -------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES3')}}                                                  | {{Spec2('ES3')}}     | Initial definition. Implemented in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.10.6.21', 'RegExp.exec')}}              | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-regexp.prototype.exec', 'RegExp.exec')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-regexp.prototype.exec', 'RegExp.exec')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.RegExp.exec")}}

## Veja também

- O capítulo de [Expressões Regulares](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions) no [Guia de Javascript](/pt-BR/docs/Web/JavaScript/Guide).
- {{jsxref("RegExp")}}
