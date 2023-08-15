---
title: const
slug: Web/JavaScript/Reference/Statements/const
---

{{jsSidebar("Statements")}}

Constantes possuem escopo de bloco, semelhantes às variáveis declaradas usando o palavra-chave [`let`](/pt-BR/docs/Web/JavaScript/Reference/Statements/let). O valor de uma constante não pode ser alterado por uma atribuição, e ela não pod ser redeclarada.

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## Resumo

A **declaração `const`** cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

## Sintaxe

```
const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]]];
```

- `nameN`
  - : Nome da constante. Pode ser qualquer [identificador](/pt-BR/docs/Glossary/Identifier) válido.
- `valueN`
  - : Valor atribuido a constante. Pode ser qualquer [expressão](/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) válida, incluindo uma função.

## Descrição

Esta declaração cria uma constante que pode pertencer tanto ao escopo global (na janela ou objeto) quanto ao local do bloco em que é declarada. Constantes globais não se tornam propriedades do objeto `window`, diferente da criação de variáveis com `var`.

Toda constante requer um inicializador, ou seja, é preciso especificar um valor para a constante no momento em que ela é declarada (o que faz sentido, uma vez que esse valor não pode ser alterado).

A declaração **`const`** cria uma referência somente leitura a um valor. Isso **não** significa que esse valor é imutável, apenas que o identificador da variável constante não pode ser alterado. Se o conteúdo do identificador for um objeto, isso significa que o conteúdo do objeto (ex. seus parâmetros) podem ser alterados.

Todas as considerações de ["temporal dead zone"](/pt-BR/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let) se aplicam tanto a **[`let`](/pt-BR/docs/Web/JavaScript/Reference/Statements/let)** quanto a **`const`**.

Uma constante não pode ter o mesmo nome que uma função ou variável que esteja no mesmo escopo.

## Exemplos

O exemplo abaixo demonstra o comportamento de uma constante. Experimente executá-lo no console do seu navegador.

```js
// NOTA: constantes podem ser declaradas em caixa alta ou baixa,
// mas uma convenção comum é usar apenas caixa alta

// define MY_FAV como uma constante e lhe atribui o valor 7
const MY_FAV = 7;

// isto falha mas não emite erros no Firefox e Chrome (porém não falha no Safari)
MY_FAV = 20;

// a variável MY_FAV possui o valor 7
console.log("my favorite number is: " + MY_FAV);

// tentar redeclarar a constante emite um erro - Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// o nome MY_FAV está reservado para a constante acima, logo também irá falhar
var MY_FAV = 20;

// isso também vai falhar
let MY_FAV = 20;

// É importante notar a natureza de escopo por bloco
if (MY_FAV === 7) {
    // não tem problema fazer isso, pois cria uma variável de bloco MY_FAV
    // com escopo local (o nome MY_FAV poderia ser usado com let também)
    let MY_FAV = 20;

    // MY_FAV agora é 20
    console.log("meu número favorito é " + MY_FAV);

    // isso retorna um erro, pois tenta registrar a variável no contexto global
    var MY_FAV = 20;
}

//MY_FAV ainda é 7
console.log('meu número favorito é ' + MY_FAV);

// const deve ser inicializada
const FOO; // SyntaxError: missing = in const declaration

// const também funciona com objetos
const MY_OBJECT = {'key':'value'};

// Sobrescrever o objeto também falha (no Firefox e Chrome mas não no Safari) - Uncaught TypeError: Assignment to constant variable.
MY_OBJECT = {"OTHER_KEY": "value"};

// Entretanto, atributos de objetos não estão protegidos,
// logo a seguinte instrução é executada sem problemas
MY_OBJECT.key = "otherValue"; // Utilize Object.freeze() se quiser tornar um objeto imutável

// o mesmo se aplica para arrays
const MY_ARRAY = [];
// É possível utilizar push para incluir itens no array
MY_ARRAY.push('A'); //["A"]
// Todavia, atribuir um novo array para a variável gera um erro
MY_ARRAY = ['B'];
```

## Especificações

| Especificação                                                                            | Status               | Comentário         |
| ---------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-let-and-const-declarations', 'Let and Const Declarations')}}     | {{Spec2('ES6')}}     | Nenhuma mudança.   |
| {{SpecName('ESDraft', '#sec-let-and-const-declarations', 'Let and Const Declarations')}} | {{Spec2('ESDraft')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat}}

### Observações

Em versões anteriores do Firefox & Chrome e a partir de Safari 5.1.7 e Opera 12.00, se você define uma variável com `const`, você ainda consegue alterar o valor depois. Este recurso não é suportado no Internet Explorer 6-10, mas está incluído no Internet Explorer 11.

### Observações específicas para Firefox

A declaração `const` foi implementada no Firefox muito antes de `const` aparecer na especificação ECMAScript 6. For `const` ES6 compliance see [Erro do Firefox 950547](https://bugzil.la/950547) and [Erro do Firefox 611388](https://bugzil.la/611388).

- Iniciando com o Gecko 36:

  - `{const a=1};a` passa a retornar [`ReferenceError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) e não retorna `1` devido block-scoping.
  - `const a;` passa a retornar [`SyntaxError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) ("missing = in const declaration`"`): É necessário incializar a constante.
  - `const a = 1; a = 2;` passa a retornar [`SyntaxError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) ("invalid assignment to const a").

## Veja também

- [`var`](/pt-BR/docs/Web/JavaScript/Reference/Statements/var)
- [`let`](/pt-BR/docs/Web/JavaScript/Reference/Statements/let)
- [Guia de constantes em JavaScript](/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Constants)
