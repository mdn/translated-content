---
title: Objetos Globais
slug: Web/JavaScript/Reference/Global_Objects
---

{{jsSidebar("Objects")}}

## Resumo

Este capítulo documenta todos os objetos nativos do JavaScript padrão, assim como seus métodos e propriedades.

O termo "objetos globais" (ou objetos nativos por padrão) aqui não deve ser confundido com o de **objeto global**. Aqui, objetos globais se referem aos **objetos no escopo global** (somente se o modo estrito/_strict mode_ do ECMAScript 5 não for usado; Nesse caso retorna {{jsxref("undefined")}}). O **objeto global** pode ser acessado usando o operador {{jsxref("Operators/this", "this")}} no escopo global. De fato, o escopo global **consiste em** propriedades do objeto global, incluindo propriedades herdadas, se houver.

Outros objetos no escopo global também são [criados pelo desenvolvedor](/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects) ou fornecido pela aplicação _host_. Os objetos disponíveis no _host_ no contexto do browser são documentados na [API reference](/pt-BR/docs/Web/API). Para maiores informações sobre as distinções entre [DOM](/pt-BR/docs/Web/API/Document_Object_Model) e core [JavaScript](/pt-BR/docs/Web/JavaScript), veja [visão geral das tecnologias JavaScript](/pt-BR/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Objetos padrão (por categoria)

### Propriedades de valor

Propriedades globais retornam um valor simples; eles não tem propriedades ou métodos.

- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}
- {{jsxref("Operators/null", "null")}} literal

### Propriedades de função

Estas funções globais —funções que são chamadas globalmente ao invés de em um objeto—retornam diretamente seus resultados a quem chama.

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Deprecated_and_obsolete_features", "uneval()")}} {{non-standard_inline()}}
- {{jsxref("isFinite", "isFinite()")}}
- {{jsxref("isNaN", "isNaN()")}}
- {{jsxref("parseFloat", "parseFloat()")}}
- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("decodeURI", "decodeURI()")}}
- {{jsxref("decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("escape", "escape()")}} {{deprecated_inline()}}
- {{jsxref("unescape", "unescape()")}} {{deprecated_inline()}}

### Objetos fundamentais

Estes são objetos básicos e fundamentais nos quais todos os outros objetos são baseados. Isso inclui objetos que representam objetos genéricos, funções e erros.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}} {{experimental_inline()}}
- {{jsxref("Error")}}
- {{jsxref("EvalError")}}
- {{jsxref("InternalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("StopIteration")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}

### Números e datas

Estes são objetos base para a representação de números, datas e cálculos matemáticos.

- {{jsxref("Number")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### Processamento de texto

Estes objetos representam strings e manipulam as mesmas.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Coleções indexadas

Estes objetos representam coleções de dados que são ordenados pelo valor de um índice. Isso inclui arrays (tipados) e arrays baseados em outros construtores, como `[]`.

- {{jsxref("Array")}}
- [`Float32Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)
- [`Float64Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
- [`Int16Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)
- [`Int32Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
- [`Int8Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)
- [`Uint16Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)
- [`Uint32Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)
- [`Uint8Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
- [`Uint8ClampedArray`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)
- {{jsxref("ParallelArray")}} {{non-standard_inline()}}

### Coleções chaveadas

Estes objetos representam coleções que usam chaves; estas contém elementos que são iteráveis na ordem de inserção.

- {{jsxref("Map")}} {{experimental_inline()}}
- {{jsxref("Set")}} {{experimental_inline()}}
- {{jsxref("WeakMap")}} {{experimental_inline()}}
- {{jsxref("WeakSet")}} {{experimental_inline()}}

### Dados estruturados

Estes objetos representam e interagem com buffers de dados estruturados e dados codificados usando JavaScript Object Notation (JSON).

- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("JSON")}}

### Controle de abstrações de objetos

- {{jsxref("Promise")}} {{experimental_inline}}
- {{jsxref("Generator")}} {{experimental_inline}}
- {{jsxref("GeneratorFunction")}} {{experimental_inline}}

### Reflexão (reflection)

- {{jsxref("Reflect")}} {{experimental_inline}}
- {{jsxref("Proxy")}} {{experimental_inline}}

### Internacionalização

Adições ao core do ECMAScript para funcionalidades sensíveis à linguagem.

- {{jsxref("Intl")}}
- {{jsxref("Intl/Collator", "Intl.Collator")}}
- {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Intl.NumberFormat")}}

### Objetos não-padrão

- {{jsxref("Iterator")}} {{non-standard_inline}}
- {{jsxref("ParallelArray")}} {{non-standard_inline}}
- {{jsxref("StopIteration")}} {{non-standard_inline}}

### Outros

- [`arguments`](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments)
