---
title: export
slug: Web/JavaScript/Reference/Statements/export
---

{{jsSidebar("Statements")}}

O export é utilizado quando criamos módulos JavaScript para exportar ligações em tempo real para suas funções, objetos ou valores primitivos de um módulo sejam utilizados por outros programas através de declarações {{jsxref("Statements/import", "import")}}. Ligações que são exportadas ainda podem ser modificadas localmente; quando importadas, embora elas possam ser lidas somente pelo módulo que as importou, seu valor é atualizado sempre que ela modificada pelo módulo que a exportou.

Módulos exportados ficam em {{jsxref("Strict_mod", "strict mode")}}, independentemente se é declarado dessa forma, ou não. Export não pode ser utilizado em scripts embutidos.

## Sintaxe

Há dois tipos de exportação:

1. Exportações Explícitas (Named Exports) (Zero ou mais exports por módulo)
2. Exportações Padrão (Default Exports) (Uma por módulo)

```
// Exportando recursos individuais
export let name1, name2, …, nameN; // também var, const
export let name1 = …, name2 = …, …, nameN; // também var, const
export function functionName(){...}
export class ClassName {...}

// Lista de exportações
export { name1, name2, …, nameN };

// Renomeando exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exportando atribuições desestruturadas renomeando
export const { name1, name2: bar } = o;

// Exportações Padrão (Default exports)
export default expression;
export default function (…) { … } // também class, function*
export default function name1(…) { … } // também class, function*
export { name1 as default, … };

// Agregando módulos
export * from …; // não define a exportação padrão
export * as name1 from …; // Draft ECMAScript® 2O21
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

- `nameN`
  - : Identificador para ser exportado (assim ele pode ser importado via [`import`](/pt-BR/docs/Web/JavaScript/Reference/Statements/import) em outro script).

## Descrição

Há dois diferentes tipos de export, explícito(named) e padrão(default). Pode-se ter várias exportações explícitas por módulo, mas apenas uma padrão. Cada tipo corresponde à uma da síntaxe acima:

Exportações explícitas:

```js
// exporta recursos declarados anteriomente
export { myFunction, myVariable };

// exporta recursos individuais (pode exportar var, let,
// const, function, class)
export let myVariable = Math.sqrt(2);
export function myFunction() { ... };
```

Exportação padrão (pode ser feita apenas uma por script):

```js
// exporta um recurso declarado anteriormente como padrão
export { myFunction as default };

// exporta recursos individuais como padrão
export default function () { ... }
export default class { .. }
```

Exportações explícitas são úteis para exportar vários valores. Durante a importação, é obrigatório usar o mesmo nome do objeto correspondente.

Mas a exportação padrão pode ser importada com qualquer nome, por exemplo:

```js
// arquivo test.js
let k;
export default k = 12;
```

```js
// algum outro arquivo
import m from "./test"; // note que temos a liberdade de usar import m ao invés de import k, porque k era uma exportaçào padrão
console.log(m); // vai retornar log 12
```

Você também pode renomear exportações explícitas para evitar conflitos e nome:

```js
export { myFunction as function1, myVariable as variable };
```

### Re-exportando / Agregando

É possível também "importar/exportar" de módulos diferentes em um módulo pai, de modo que eles estejam disponíveis para serem importados daquele módulo. Em outras palavras, pode-se criar um módulo único concentrando várias exportações de vários módulos.

Isto pode ser feito com a sintaxe "export from":

```js
export { default as function1, function2 } from "bar.js";
```

O que é comparável com um combinação de import e export:

```js
import { default as function1, function2 } from "bar.js";
export { function1, function2 };
```

Mas onde `function1` e `function2` não ficam disponíveis dentro do módulo atual.

> **Nota:** Os exemplos a seguir são sintaticamente inválidos apesar de sua equivalência com o import:

```js
import DefaultExport from "bar.js"; // Válido
```

```js
export DefaultExport from "bar.js"; // Inválido
```

O modo correto de fazer isso e renomeando o export:

```js
export { default as DefaultExport } from "bar.js";
```

## Exemplos

### Usando exportações explícitas

Em um módulo `my-module.js` poderiamos usar o seguinte código:

```js
// módulo "my-module.js"
function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

var graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw: function () {
    console.log("Da função draw de graph");
  },
};

export { cube, foo, graph };
```

Então, no módulo principal incluído sem sua página HTML, poderíamos ter:

```js
import { cube, foo, graph } from "./my-module.js";

graph.options = {
  color: "blue",
  thickness: "3px",
};

graph.draw();
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

É importante notar o seguinte:

- Você pode incluir esse script no seu código HTML através do elemento {{htmlelement("script")}} do tipo="module", de modo que ele seja reconhecido e tratado apropriadamente.
- Você não pode executar módulos JS através de `file://` URL — você receberá errors [CORS](/pt-BR/docs/Web/HTTP/CORS). Você deve rodá-los através de um servidor HTTP.

### Usando a exportação padrão

Se queremos exportar um valor sozinho ou obter um valor de reserva para o nosso módulo, nós poderiamos usar `export default`:

```js
// módulo "my-module.js"
export default function cube(x) {
  return x * x * x;
}
```

Daí em outro script podemos usar:

```js
import cube from "my-module";
console.log(cube(3)); // 27
```

## Especificações

| Especificação                                      | Estado               | Comentário          |
| -------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES6', '#sec-exports', 'Exports')}}     | {{Spec2('ES6')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-exports', 'Exports')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade

{{Compat("javascript.statements.export")}}

## Veja também

- {{jsxref("Statements/import", "import")}}
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- [Axel Rauschmayer's book: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)
