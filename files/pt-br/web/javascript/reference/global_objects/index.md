---
title: Objetos Globais
slug: Web/JavaScript/Reference/Global_Objects
---

{{jsSidebar("Objects")}}

## Resumo

Este capítulo documenta todos os objetos nativos do JavaScript padrão, assim como seus métodos e propriedades.

O termo "objetos globais" (ou objetos nativos por padrão) aqui não deve ser confundido com o de **objeto global**. Aqui, objetos globais se referem aos **objetos no escopo global** (somente se o modo estrito/_strict mode_ do ECMAScript 5 não for usado; Nesse caso retorna {{jsxref("undefined")}}). O **objeto global** pode ser acessado usando o operador {{jsxref("Operators/this", "this")}} no escopo global. De fato, o escopo global **consiste em** propriedades do objeto global, incluindo propriedades herdadas, se houver.

Outros objetos no escopo global também são [criados pelo desenvolvedor](/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#creating_new_objects) ou fornecido pela aplicação _host_. Os objetos disponíveis no _host_ no contexto do browser são documentados na [API reference](/pt-BR/docs/Web/API/Reference). Para maiores informações sobre as distinções entre [DOM](/pt-BR/docs/DOM/DOM_Reference) e core [JavaScript](/pt-BR/docs/Web/JavaScript), veja [visão geral das tecnologias JavaScript](/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview).

## Objetos padrão (por categoria)

### Propriedades de valor

Propriedades globais retornam um valor simples; eles não tem propriedades ou métodos.

- {{jsxref("Global_Objects/Infinity", "Infinity")}}
- {{jsxref("Global_Objects/NaN", "NaN")}}
- {{jsxref("Global_Objects/undefined", "undefined")}}
- {{jsxref("Operators/null", "null")}} literal

### Propriedades de função

Estas funções globais —funções que são chamadas globalmente ao invés de em um objeto—retornam diretamente seus resultados a quem chama.

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Global_Objects/uneval", "uneval()")}} {{non-standard_inline()}}
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("Global_Objects/escape", "escape()")}} {{deprecated_inline()}}
- {{jsxref("Global_Objects/unescape", "unescape()")}} {{deprecated_inline()}}

### Objetos fundamentais

Estes são objetos básicos e fundamentais nos quais todos os outros objetos são baseados. Isso inclui objetos que representam objetos genéricos, funções e erros.

- {{jsxref("Global_Objects/Object", "Object")}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Global_Objects/Boolean", "Boolean")}}
- {{jsxref("Global_Objects/Symbol", "Symbol")}} {{experimental_inline()}}
- {{jsxref("Global_Objects/Error", "Error")}}
- {{jsxref("Global_Objects/EvalError", "EvalError")}}
- {{jsxref("Global_Objects/InternalError", "InternalError")}}
- {{jsxref("Global_Objects/RangeError", "RangeError")}}
- {{jsxref("Global_Objects/ReferenceError", "ReferenceError")}}
- {{jsxref("Global_Objects/StopIteration", "StopIteration")}}
- {{jsxref("Global_Objects/SyntaxError", "SyntaxError")}}
- {{jsxref("Global_Objects/TypeError", "TypeError")}}
- {{jsxref("Global_Objects/URIError", "URIError")}}

### Números e datas

Estes são objetos base para a representação de números, datas e cálculos matemáticos.

- {{jsxref("Global_Objects/Number", "Number")}}
- {{jsxref("Global_Objects/Math", "Math")}}
- {{jsxref("Global_Objects/Date", "Date")}}

### Processamento de texto

Estes objetos representam strings e manipulam as mesmas.

- {{jsxref("Global_Objects/String", "String")}}
- {{jsxref("Global_Objects/RegExp", "RegExp")}}

### Coleções indexadas

Estes objetos representam coleções de dados que são ordenados pelo valor de um índice. Isso inclui arrays (tipados) e arrays baseados em outros construtores, como `[]`.

- {{jsxref("Global_Objects/Array", "Array")}}
- [`Float32Array`](/pt-BR/docs/JavaScript_typed_arrays/Float32Array)
- [`Float64Array`](/pt-BR/docs/JavaScript_typed_arrays/Float64Array)
- [`Int16Array`](/pt-BR/docs/JavaScript_typed_arrays/Int16Array)
- [`Int32Array`](/pt-BR/docs/JavaScript_typed_arrays/Int32Array)
- [`Int8Array`](/pt-BR/docs/JavaScript_typed_arrays/Int8Array)
- [`Uint16Array`](/pt-BR/docs/JavaScript_typed_arrays/Uint16Array)
- [`Uint32Array`](/pt-BR/docs/JavaScript_typed_arrays/Uint32Array)
- [`Uint8Array`](/pt-BR/docs/JavaScript_typed_arrays/Uint8Array)
- [`Uint8ClampedArray`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)
- {{jsxref("Global_Objects/ParallelArray", "ParallelArray")}} {{non-standard_inline()}}

### Coleções chaveadas

Estes objetos representam coleções que usam chaves; estas contém elementos que são iteráveis na ordem de inserção.

- {{jsxref("Global_Objects/Map", "Map")}} {{experimental_inline()}}
- {{jsxref("Global_Objects/Set", "Set")}} {{experimental_inline()}}
- {{jsxref("Global_Objects/WeakMap", "WeakMap")}} {{experimental_inline()}}
- {{jsxref("Global_Objects/WeakSet", "WeakSet")}} {{experimental_inline()}}

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

- {{jsxref("Global_Objects/Intl", "Intl")}}
- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Global_Objects/Intl/NumberFormat", "Intl.NumberFormat")}}

### Objetos não-padrão

- {{jsxref("Iterator")}} {{non-standard_inline}}
- {{jsxref("ParallelArray")}} {{non-standard_inline}}
- {{jsxref("StopIteration")}} {{non-standard_inline}}

### Outros

- [`arguments`](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments)
