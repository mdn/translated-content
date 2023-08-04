---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
---

{{JSRef}}

O **`DataView`** provê uma interface de baixo nível para leitura e escrita de múltiplos tipos de número em um {{jsxref("ArrayBuffer")}}, independentemente da [extremidade (_endianness_) da plataforma](/pt-BR/docs/Glossario/Endianness).

{{EmbedInteractiveExample("pages/js/dataview-constructor.html")}}

## Sintaxe

```
new DataView(buffer [, byteOffset [, byteLength]])
```

### Parâmetros

- `buffer`
  - : {{jsxref("ArrayBuffer")}} ou {{jsxref("SharedArrayBuffer")}} {{experimental_inline}} existente para usar como armazenamento de um novo objeto `DataView`.
- `byteOffset` {{optional_inline}}
  - : A mudança, em bytes, do primeiro byte determinado em um buffer, que será referenciado pela nova view. Se não for especificado, a view do buffer começará no primeiro byte.
- `byteLength` {{optional_inline}}
  - : O número de elementos no array de bytes. Se não especificado, o tamanho da view será do mesmo tamanho do buffer.

### Retorno

Um novo objeto `DataView` que representa o buffer de dados especificado. (Provavelmente não foi uma descrição muito útil.)

Você pode pensar nesse objeto retornado como um "intérprete" de um array buffer de bytes - ele sabe como converter números para inserir em um buffer corretamente, tanto ao ler quanto ao gravar. Isso significa lidar com conversões _integer,_ _float,_ _endianness_ e outros detalhes da representação de números em formato binário.

### Exceções

- `{{jsxref("RangeError")}}`

  - : Lançado se o `byteOffset` ou `byteLength` especificados ultrapassarem o final do buffer.

    Por exemplo, se o buffer tem 16 bytes de comprimento, o `byteOffset` é 8 e o `byteLength` é 10, esse erro será lançado porque a view resultante tenta estender 2 bytes acima do comprimento total do buffer.

## Descrição

### _Endianness_

Formatos de números _Multi-byte_ são representados de maneira diferente na memória, dependendo da arquitetura da máquina, veja {{Glossary("Endianness")}} para mais informações. Assessores de `DataView` fornecem controle explícito de como o dado será acessado, independente do _endianness_ da arquitetura em execução.

```js
var littleEndian = (function () {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

### Valores inteiros de 64 bits

Como JavaScript atualmente não inclui suporte padrão para valores inteiros de 64 bits, `DataView` não oferece operações nativas de 64 bits. Como solução alternativa, você poderia implementar sua própria função getUint64() para obter um valor com a precisão de {{jsxref("Number.MAX_SAFE_INTEGER")}}, o que pode ser bom para determinados casos.

```js
function getUint64(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset + 4, littleEndian);

  // combine the two 32-bit values
  const combined = littleEndian
    ? left + 2 ** 32 * right
    : 2 ** 32 * left + right;

  if (!Number.isSafeInteger(combined))
    console.warn(combined, "exceeds MAX_SAFE_INTEGER. Precision may be lost");

  return combined;
}
```

Como alternativa, se você precisar de um intervalo completo de 64 bits, poderá criar um {{jsxref("BigInt")}}.

```js
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset + 4, littleEndian);

  // combine the two 32-bit values as their hex string representations
  const combined = littleEndian
    ? right.toString(16) + left.toString(16).padStart(8, "0")
    : left.toString(16) + right.toString(16).padStart(8, "0");

  return BigInt(`0x${combined}`);
}
```

## Propriedades

Todas as instâncias de `DataView` herdam {{jsxref("DataView.prototype")}} e permitem a adição de propriedades a todos os objetos DataView.

{{page('en-US/Web/JavaScript/Reference/Global_Objects/DataView/prototype','Properties')}}

## Métodos

{{page('en-US/Web/JavaScript/Reference/Global_Objects/DataView/prototype','Methods')}}

## Exemplo

```js
var buffer = new ArrayBuffer(16);
var dv = new DataView(buffer, 0);

dv.setInt16(1, 42);
dv.getInt16(1); //42
```

## Especificações

| Especificação                                                    | Status                   | Comentário                         |
| ---------------------------------------------------------------- | ------------------------ | ---------------------------------- |
| {{SpecName('Typed Array')}}                                      | {{Spec2('Typed Array')}} | Substituído pelo ECMAScript 6      |
| {{SpecName('ES6', '#sec-dataview-constructor', 'DataView')}}     | {{Spec2('ES6')}}         | Definição inicial no ECMA standard |
| {{SpecName('ESDraft', '#sec-dataview-constructor', 'DataView')}} | {{Spec2('ESDraft')}}     |                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.DataView")}}

## Notas de compatibilidade

Começando com o Firefox 40, `DataView` deve ser construído com o operador {{jsxref("Operators/new", "new")}} . Chamando `DataView()` como uma função sem o `new`, irá lançar um {{jsxref("TypeError")}} de agora em diante.

```js example-bad
var dv = DataView(buffer, 0);
// TypeError: calling a builtin DataView constructor without new is forbidden
```

```js example-good
var dv = new DataView(buffer, 0);
```

## Veja também

- [jDataView](https://github.com/jDataView/jDataView): Biblioteca javascript que faz o polyfill e extende a API do `DataView` para todos os browsers e para o Node.js.
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
