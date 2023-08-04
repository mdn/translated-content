---
title: for
slug: Web/JavaScript/Reference/Statements/for
---

{{jsSidebar("Statements")}}

A instrução `for` cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

A fonte desse exemplo interativo está armazenada em um repositório do GitHub. Se você gostaria de contribuir com os projetos de exemplos interativos, por favor clone <https://github.com/mdn/interactive-examples> e nos envie um pull request (requisição para puxar).

## Sintaxe

```
for ([inicialização]; [condição]; [expressão final])
   declaração
```

- `inicialização`

  - : Uma expressão (incluindo expressões de atribuição) ou declarações variáveis. Geralmente usada para iniciar o contador de variáveis. Esta expressão pode, opcionalmente, declarar novas variáveis com a palavra chave `var`. Essas variáveis não são locais no loop, isto é, elas estão no mesmo escopo que o loop `for` está. Variáveis declaradas com let são locais para a declaração.

    O resultado desta expressão é descartado.

- `condição`
  - : Uma expressão para ser avaliada antes de cada iteração do loop. Se esta expressão for avaliada para true, `declaração` será executado. Este teste da condição é opcional. Se omitido, a condição sempre será avaliada como verdadeira. Se a expressão for avaliada como falsa, a execução irá para a primeira expressão após a construção loop `for`.
- `expressão final`
  - : Uma expressão que será validada no final de cada iteração de loop. Isso ocorre antes da próxima avaliação da condição. Geralmente usado para atualizar ou incrementar a variável do contador.
- `declaração`
  - : Uma declaração que é executada enquanto a condição for verdadeira. Para executar múltiplas condições dentro do loop, use uma instrução de bloco `({...})` para agrupar essas condições. Para não executar declarações dentro do loop, use uma instrução vazia `(;)`.

## Exemplos de uso

### Usando `for`

A declaração `for` começa declarando a variável `i` e inicializando-a como `0`. Ela verifica se `i` é menor que nove, executa as duas instruções subsequentes e incrementa 1 a variável `i` após cada passagem pelo loop.

```js
for (var i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Expressões `for` opcionais

Todas as três expressões na condição do loop `for` são opcionais.

Por exemplo, no bloco de _inicialização_, não é necessário inicializar variáveis:

```js
var i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}
```

Assim como ocorre no bloco de _inicialização_, a _condição_ também é opcional. Se você está omitindo essa expressão, você deve certificar-se de quebrar o loop no corpo para não criar um loop infinito.

```js
for (var i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Você também pode omitir todos os três blocos. Novamente, certifique-se de usar uma instrução `break` no final do loop e também modificar (incrementar) uma variável, para que a condição do `break` seja verdadeira em algum momento.

```js
var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

### Usando `for` sem uma declaração

O ciclo `for` a seguir calcula a posição de deslocamento de um nó na seção \[expressão final] e, portanto, não requer o uso de uma declaração ou de um bloco de declaração, e no seu lugar é usado um ponto-vírgula - `;`.

```js
function showOffsetPos(sId) {
  var nLeft = 0,
    nTop = 0;

  for (
    var oItNode = document.getElementById(sId); // inicialização
    oItNode; // condition
    nLeft += oItNode.offsetLeft,
      nTop += oItNode.offsetTop,
      oItNode = oItNode.offsetParent // expressão final
    /* empty statement */
  );

  console.log(
    'Offset position of "' +
      sId +
      '" element:\n left: ' +
      nLeft +
      "px;\n top: " +
      nTop +
      "px;",
  );
}

// Exemplo de call:

showOffsetPos("content");

// Resultado:
// "Offset position of "content" element:
// left: 0px;
// top: 153px;"
```

> **Nota:** Nesse caso, quando você não usa a seção de declaração, **o** **ponto-e-vírgula é colocada imediatamente após a declaração do ciclo**.

## Especificações

| Especificação                                              | Status             | Comentário         |
| ---------------------------------------------------------- | ------------------ | ------------------ |
| ECMAScript 1st Edition.                                    | Padrão             | Definição inicial. |
| {{SpecName('ES5.1', '#sec-12.6.3', 'for statement')}}      | {{Spec2('ES5.1')}} |                    |
| {{SpecName('ES6', '#sec-for-statement', 'for statement')}} | {{Spec2('ES6')}}   |                    |

## Compatibilidade com navegadores

{{Compat("javascript.statements.for")}}

## Veja também

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/empty", "empty")}}
- {{jsxref("Statements/while", "while")}}
- [`do...while`](/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while)
- [`for...in`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of)
