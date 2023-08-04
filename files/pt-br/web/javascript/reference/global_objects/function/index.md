---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
---

{{JSRef("Global_Objects", "Function")}}

## Resumo

O **`construtor Function`** cria um novo objeto `Function`. Chamar o construtor diretamente pode criar funções dinamicamente, mas sofre com problemas de segurança e desempenho semelhante (mas muito menos significativo) a {{jsxref("eval")}}. No entanto, diferentemente de eval, a Função construtora cria funções que executam somente no escopo global.

## Sintaxe

```
new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

### Parâmetros

- `arg1, arg2, ... argN`
  - : Nomes para serem usados pela função como nomes formais de argumentos. Cada um deve ser uma string que corresponde para uma válida identidade JavaScript ou uma lista de certas strings separadas com uma vírgula; por exemplo "x", "theValue". our "a,b".
- `functionBody`
  - : Uma string que contém as instruções JavaScript que compõem a definição da função.

## Descrição

Objetos `Function` criados com o construtor `Function` são _parseados_ quando a função é criada. Isto é menos eficiente que criar com uma [expressão de função](/pt-BR/docs/Web/JavaScript/Reference/Operators/function) ou um [declaração de função](/pt-BR/docs/Web/JavaScript/Reference/Statements/function) e chamando-a dentro do seu código, porque tais funções são _parseadas_ com o resto do código.

Todos os argumentos passados para a função são tratados como os nomes dos indetificadores dos parâmetros na função a ser criada, na mesma ordem na qual eles foram passados.

> **Nota:** Funções criadas com o construtor `Function não criam closures` para o seu contexto de criação; elas sempre são criadas no escopo global. Quando executadas, elas terão acesso apenas às suas variáveis locais ou globais, não terão acesso às variáveis do escopo na qual o construtor `Function` foi chamado. Isto é diferente de usar {{jsxref("Global_Objects/eval", "eval")}} com o código de uma expressão de função.

Invocar o construtor `Function` como uma função (sem usar o operador `new`) tem o mesmo efeito de chamá-la como um construtor.

## Propriedades e Métodos da `Function`

O objeto global `Function` não tem métodos ou propriedades próprias, no entanto, como ela é uma função, ela herda alguns métodos e propriedades através do prototype chain do {{jsxref("Function.prototype")}}.

## `Function` prototype object

### Propriedades

{{page('/pt-BR/docs/JavaScript/Reference/Global_Objects/Function/prototype', 'Properties')}}

### Métodos

{{page('/pt-BR/docs/JavaScript/Reference/Global_Objects/Function/prototype', 'Methods')}}

## `Function` instances

`Function` instances inherit methods and properties from {{jsxref("Function.prototype")}}. As with all constructors, you can change the constructor's prototype object to make changes to all `Function` instances.

## Exemplos

### Exemplos: Especificando argumentos com o construtor `Function`

O código a seguir cria um objeto `Function` que recebe dois argumentos.

```js
// O exemplo pode ser executado direto no seu console JavaScript

// Cria uma função que recebe 2 argumentos e retorna a soma entre os dois:
var adder = new Function("a", "b", "return a + b");

// Chamada da função
adder(2, 6);
// > 8
```

Os argumentos "`a`" e "`b`" são os argumentos que serão usados no corpo da função, "`return a + b`".

### Exemplo: Um atalho recursivo para modificar o DOM em massa

Creating functions with the `Function` constructor is one of the ways to dynamically create an indeterminate number of new objects with some executable code into the global scope from a function. The following example (a recursive shortcut to massively modify the DOM) is impossible without the invocation of the `Function` constructor for each new query if you want to avoid closures.

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>
      MDN Example - a recursive shortcut to massively modify the DOM
    </title>
    <script type="text/javascript">
      var domQuery = (function () {
        var aDOMFunc = [
          Element.prototype.removeAttribute,
          Element.prototype.setAttribute,
          CSSStyleDeclaration.prototype.removeProperty,
          CSSStyleDeclaration.prototype.setProperty,
        ];

        function setSomething(bStyle, sProp, sVal) {
          var bSet = Boolean(sVal),
            fAction = aDOMFunc[bSet | (bStyle << 1)],
            aArgs = Array.prototype.slice.call(arguments, 1, bSet ? 3 : 2),
            aNodeList = bStyle ? this.cssNodes : this.nodes;

          if (bSet && bStyle) {
            aArgs.push("");
          }
          for (
            var nItem = 0, nLen = this.nodes.length;
            nItem < nLen;
            fAction.apply(aNodeList[nItem++], aArgs)
          );
          this.follow = setSomething.caller;
          return this;
        }

        function setStyles(sProp, sVal) {
          return setSomething.call(this, true, sProp, sVal);
        }
        function setAttribs(sProp, sVal) {
          return setSomething.call(this, false, sProp, sVal);
        }
        function getSelectors() {
          return this.selectors;
        }
        function getNodes() {
          return this.nodes;
        }

        return function (sSelectors) {
          var oQuery = new Function(
            "return arguments.callee.follow.apply(arguments.callee, arguments);",
          );
          oQuery.selectors = sSelectors;
          oQuery.nodes = document.querySelectorAll(sSelectors);
          oQuery.cssNodes = Array.prototype.map.call(
            oQuery.nodes,
            function (oInlineCSS) {
              return oInlineCSS.style;
            },
          );
          oQuery.attributes = setAttribs;
          oQuery.inlineStyle = setStyles;
          oQuery.follow = getNodes;
          oQuery.toString = getSelectors;
          oQuery.valueOf = getNodes;
          return oQuery;
        };
      })();
    </script>
  </head>

  <body>
    <div class="testClass">Lorem ipsum</div>
    <p>Some text</p>
    <div class="testClass">dolor sit amet</div>

    <script type="text/javascript">
      domQuery(".testClass")
        .attributes("lang", "en")("title", "Risus abundat in ore stultorum")
        .inlineStyle("background-color", "black")("color", "white")(
        "width",
        "100px",
      )("height", "50px");
    </script>
  </body>
</html>
```

## Especificação

| Especificação                                            | Status             | Comentário                                         |
| -------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| ECMAScript 1st Edition.                                  | Standard           | Definição inicial. Implementado no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.3', 'Function')}}           | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-function-objects', 'Function')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade

{{Compat("javascript.builtins.Function")}}

## See also

- {{jsxref("Operators/function", "function Expression", "", 1)}}
- {{jsxref("Statements/function", "function Statement", "", 1)}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope", "", 1)}}
