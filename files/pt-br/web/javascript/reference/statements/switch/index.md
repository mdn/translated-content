---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
---

{{jsSidebar("Statements")}}A condicional **switch** avalia uma [expressão](/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators), combinando o valor da expressão para um cláusula **case**, e executa as [instruções](/pt-BR/docs/Web/JavaScript/Reference/Statements) associadas ao **case**.

{{EmbedInteractiveExample("pages/js/statement-switch.html")}}

## Sintaxe

```
switch (expressão) {
  case valor1:
    //Instruções executadas quando o resultado da expressão for igual á valor1
    [break;]
  case valor2:
    //Instruções executadas quando o resultado da expressão for igual á valor2
    [break;]
  ...
  case valueN:
    //Instruções executadas quando o resultado da expressão for igual á valorN
    [break;]
  default:
    //Instruções executadas quando o valor da expressão é diferente de todos os cases
    [break;]
}
```

- `expressão`
  - : Uma expressão que será comparada á cada cláusula **case**.
- `case expressão`
  - : Uma cláusula **case** que será comparada á expressão.

## Descrição

Se a condição for correspondida, o programa executa as instruções asssociadas. Se múltiplos casos corresponderem o valor, o primeiro caso que corresponder é selecionado, mesmo se os casos não forem iguais entre si.

O programa primeiro procura por um caso o qual a expressão avalie como tendo o mesmo valor que o input da expressão (usando a [comparação de igualdade estrita](/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), `===`) transferindo assim o controle para a cláusula encontrada e em seguida executando as instruções associadas. Caso nenhum caso seja correspondido, então o programa procura pela cláusula opcional `default`, que, se encontrado, tem o controle transferido a ele, executando suas instruções associadas. Se não houver uma cláusula `default`, o programa continua a execução da instrução seguindo para o final do `switch`. Por convenção, a cláusula default é a última, mas não é algo obrigatório.

A instrução opcional [`break`](/pt-BR/docs/Web/JavaScript/Reference/Statements/break) associada com cada `case` garante que o programa saia da condicional `switch` assim que a instrução correspondente for executada e executa a instrução que segue logo após o switch. Caso `break` seja omitido, o programa continua a execução para a próxima instrução dentro de `switch`.

## Exemplos

### Exemplo: Usando `switch`

No exemplo a seguir, if `expr` é avaliado como "Bananas", o programa corresponde o valor com o `case` "Bananas" e executa a instrução associada. Quando `break` for encontrado, o programa para (break), saindo de `switch` e executa a instrução localizada após o `switch`. Se `break` fosse omitido, a instrução para "Cherries" também seria executada.

```js
switch (expr) {
  case "Laranjas":
    console.log("As laranjas custam $0.59 o quilo.");
    break;
  case "Maçãs":
    console.log("Maçãs custam $0.32 o quilo.");
    break;
  case "Bananas":
    console.log("Bananas custam $0.48 o quilo.");
    break;
  case "Cerejas":
    console.log("Cerejas custam $3.00 o quilo.");
    break;
  case "Mangas":
  case "Mamões":
    console.log("Mangas e mamões custam $2.79 o quilo.");
    break;
  default:
    console.log("Desculpe, estamos sem nenhuma " + expr + ".");
}

console.log("Tem algo mais que você gostaria de levar?");
```

### Exemplo: O que acontece se eu esquecer um break?

Se você esquecer um break então o script irá rodar a partir do caso onde o critério foi correspondido e irá rodar também o caso seguinte independentemente do critério ter sido correspondido ou não:

```js
var foo = 0;
switch (foo) {
  case -1:
    console.log("1 negativo");
    break;
  case 0: // foo é 0 então aqui o critério foi correspondido, então esse bloco vai rodar
    console.log(0);
  // NOTA: o break esquecido deveria estar aqui
  case 1: // nenhuma instrução break em 'case 0:' então essa instrução vai rodar também
    console.log(1);
    break; // o programa encontra esse break então não vai continuar para o 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
```

### Exemplo: Métodos para múltiplos casos

Referência para esta técnica abaixo:

[- Switch statement multiple cases in JavaScript (Stack Overflow)](http://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript)

#### Multi-Caso - Operação Simples

Esse método toma vantagem do fato de não existir um break após um case e irá continuara executar o próximo case independentemente se o case corresponde ao critério. Veja o título desta seção "O que acontece se eu esquecer um break?"

Esse é um exemplo de uma operação sequencial simples com a instrução switch, onde quatro valores diferentes fazem a mesma coisa..

```js
var Animal = "Girafa";
switch (Animal) {
  case "Vaca":
  case "Girafa":
  case "Cachorro":
  case "Porco":
    alert("Esse animal irá para Arca de Noé");
    break;
  case "Dinossauro":
  default:
    alert("Esse animal não vai.");
}
```

#### Multi-Caso - Operações encadeadas

Esse é um exemplo de múltiplas operações squenciais usando a instrução `switch`, onde, dependendo do número inteiro, você poderá receber outputs diferentes. Isso mostra que você pode alterar a ordem que você insere as instruções de `case`, e isso não precisa ser uma sequência numérica. Em JavaScript, você pode até mesmo misturar definições de strings dentro desses `cases`.

This is an example of a multiple-operation sequential switch statement, where, depending on the provided integer, you can receive different output. This shows you that it wil traverse in the order that you put the case statements, and it does not have to be numerically sequential. In JavaScript, you can even mix in definitions of strings into these case statements as well.

```js
var foo = 1;
var output = "Output: ";
switch (foo) {
  case 10:
    output += "Então ";
  case 1:
    output += "Qual ";
    output += "É ";
  case 2:
    output += "O Seu ";
  case 3:
    output += "Nome";
  case 4:
    output += "?";
    alert(output);
    break;
  case 5:
    output += "!";
    alert(output);
    break;
  default:
    alert("Favor escolher um número de 0 à 6!");
}
```

Output para esse exemplo:

| Value                                  | Alert Text                         |
| -------------------------------------- | ---------------------------------- |
| foo é NaN ou não é 1, 2, 3, 4, 5 ou 10 | Favor escolher um número de 0 à 6! |
| 10                                     | Output: Então Qual É O Seu Nome?   |
| 1                                      | Output: Qual É O Seu Nome?         |
| 2                                      | Output: Seu Nome?                  |
| 3                                      | Output: Nome?                      |
| 4                                      | Output: ?                          |
| 5                                      | Output: !                          |

## Especificações

| Especificação                                                    | Status             | Comentário                                        |
| ---------------------------------------------------------------- | ------------------ | ------------------------------------------------- |
| ECMAScript 3ª Edição                                             | Standard           | Definição inicial. Implementado no JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-12.11', 'switch statement')}}          | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-switch-statement', 'switch statement')}} | {{Spec2('ES6')}}   |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.statements.switch")}}

## See also

- [`if...else`](/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)
