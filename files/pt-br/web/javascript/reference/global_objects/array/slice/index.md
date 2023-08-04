---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
---

{{JSRef}}

O método **`slice()`** retorna uma cópia de parte de um array a partir de um subarray criado entre as posições `início` e `fim` (fim não é incluído) de um array original. O Array original não é modificado.

{{EmbedInteractiveExample("pages/js/array-slice.html")}}

## Syntaxe

```
arr.slice([início[,fim]])
```

### Parâmetros

- `início` {{optional_inline}}

  - : Índice baseado em zero no qual se inicia a extração.

    Como um índice negativo, `início` indica um deslocamento em relação ao fim da sequência. `slice(-2)` extrai os dois últimos elementos do array.

    Se `início` for omitido, `slice` inicia a partir do índice `0`.

    Se `início` for maior que o comprimento do array, é retornado um array vazio.

- `fim` {{optional_inline}}

  - : Índice baseado em zero o qual é o final da extração. `slice` extrai até, não incluindo, `fim`.

    `slice(1,4)` extrai do segundo até o quarto elemento (elementos de índice 1, 2 e 3).

    Como índice negativo, `fim` indica um deslocamento em relação ao fim do array. `slice(2,-1)` extrai o terceiro elemento através do segundo-para-o-último elemento no array.

    Se `fim` for omitido ou for maior que o tamanho do array, `slice` considerará o último elemento do array como sendo o `fim` (`arr.length`).

### Valor de retorno

Um novo array contendo os elementos extraídos.

## Descrição

`slice` não altera o array original. Retorna uma cópia de elementos do array original. Elementos do array original são copiados para o array retornado da seguinte maneira:

- Para referências de objeto (e não o objeto real), `slice` copia referencias de objeto em um novo array. Ambos, o original e o novo array referem-se ao mesmo objeto. Se um objeto referenciado é alterado, as alterações são visiveis em ambos, no novo array e no array original.
- Para strings e números (não objetos {{jsxref("String")}} e {{jsxref("Number")}}), `slice` copia strings e números em um novo array. Alterações na string ou número em um array não afetam o outro array.

Se um novo elemento é adicionado a qualquer array, o outro não é afetado.

## Exemplos

### Retorna uma parte de um array existente

```js
// Exemplo para extrair 'Laranja' e 'Limao' do array frutas
var frutas = ["Banana", "Laranja", "Limao", "Maçã", "Manga"];
var citricos = frutas.slice(1, 3);

// citricos contem ['Laranja','Limao']
```

### Usando `slice`

No exemplo seguinte, `slice` cria um novo array, `novoCarro`, do original `meuCarro`. Ambos incluem uma referência ao objeto, `meuHonda`. Quando a cor de `meuHonda` é alterada para roxo, ambos os arrays sofrem alteração.

```js
// Usando slice para criar novoCarro a partir de meuCarro.
var meuHonda = {
  cor: "vermelho",
  rodas: 4,
  motor: { cilindros: 4, tamanho: 2.2 },
};
var meuCarro = [meuHonda, 2, "perfeitas condições", "comprado em 1997"];
var novoCarro = meuCarro.slice(0, 2);

// Exibe os valores de meuCarro, novoCarro, e a cor de meuHonda
//  referenciado de ambos arrays.
console.log("meuCarro = " + meuCarro.toSource());
console.log("novoCarro = " + novoCarro.toSource());
console.log("meuCarro[0].cor = " + meuCarro[0].cor);
console.log("novoCarro[0].cor = " + novoCarro[0].cor);

// Altera a cor de meuHonda.
meuHonda.cor = "roxo";
console.log("A nova cor do meu Honda é " + meuHonda.cor);

// Exibe a cor de meuHonda referenciado de ambos arrays.
console.log("meuCarro[0].cor = " + meuCarro[0].cor);
console.log("novoCarro[0].cor = " + novoCarro[0].cor);
```

Esse script escreve:

```js
meuCarro = [{cor:'vermelho', rodas:4, motor:{cilindros:4, tamanho:2.2}}, 2,'perfeitas condições', 'comprado em 1997']
novoCarro = [{cor:'vermelho', rodas:4, motor:{cilindros:4, tamanho:2.2}},2]
meuCarro[0].cor = vermelho
novoCarro[0].cor = vermelho
A nova cor do meu Honda é roxo
meuCarro[0].cor = roxo
novoCarro[0].cor = roxo
```

## Objetos Array-like

O método `slice` pode também ser chamado para converter objetos ou coleções Array-like em um novo Array. Você só precisa encadear o método no Array. Os {{jsxref("Functions/arguments", "arguments")}} dentro de uma função são um exemplo de 'objeto array-like'.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

Ligações podem ser feitas com a função .`call` de {{jsxref("Function.prototype")}} and it can also be reduced using `[].slice.call(arguments)` ao invés de `Array.prototype.slice.call`. De qualquer forma, ela pode ser simplificada com {{jsxref("Function.prototype.bind", "bind")}}.

```js
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

## Simplificando o comportamento entre navegadores

Embora os objetos de host (como objetos DOM) não sejam obrigados pela especificação a seguir o comportamento do Mozilla quando convertidos por Array.prototype.slice e IE <9 não o fazem, versões do IE começando pela versão 9 permitem isso. "Shimming" pode permitir um comportamento confiável entre navegadores. Enquanto outros navegadores modernos continuem suportando essa habilidade, como atualmente IE, Mozilla, Chrome, Safari, e Opera fazem, desenvolvedores lendo (DOM-supporting) o código slice confiando neste shim não serão desencaminhados pela semântica; eles podem confiar seguramente na semântica para fornecer o agora aparentemente comportamento padrão de fato. (Isso também corrige o problema com IE < 9 onde o segundo argumento do `slice` era explicitamente {{jsxref("null")}}/{{jsxref("undefined")}})

```js
(function () {
  "use strict";
  var _slice = Array.prototype.slice;

  try {
    // Produzirá erro no IE < 9
    _slice.call(document.documentElement);
  } catch (e) {
    // Funciona para arrays, objetos array-like,
    // NamedNodeMap (atributos, entidades, notações),
    // NodeList (por exemplo, getElementsByTagName), HTMLCollection (por exemplo, childNodes),
    // e não vai falhar em outros objetos do DOM (como falham no IE < 9)
    Array.prototype.slice = function (begin, end) {
      end = typeof end !== "undefined" ? end : this.length;

      // Para arrays, chamamos o método nativo
      if (Object.prototype.toString.call(this) === "[object Array]") {
        return _slice.call(this, begin, end);
      }

      // Para array-like, o processo é manual.
      var i,
        cloned = [],
        size,
        len = this.length;

      // Lidando com valor negativo para "begin"
      var start = begin || 0;
      start = start >= 0 ? start : Math.max(0, len + start);

      // Lidando com valor negativo para "end"
      var upTo = typeof end == "number" ? Math.min(end, len) : len;
      if (end < 0) {
        upTo = len + end;
      }

      // Tamanho real do corte feito pelo slice
      size = upTo - start;

      if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
          for (i = 0; i < size; i++) {
            cloned[i] = this.charAt(start + i);
          }
        } else {
          for (i = 0; i < size; i++) {
            cloned[i] = this[start + i];
          }
        }
      }

      return cloned;
    };
  }
})();
```

## Especificações

| Especificação                                                                  | Status               | Comentário                                         |
| ------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.slice', 'Array.prototype.slice')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES6', '#sec-array.prototype.slice', 'Array.prototype.slice')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ES5.1', '#sec-15.4.4.10', 'Array.prototype.slice')}}               | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES3')}}                                                            | {{Spec2('ES3')}}     | Definição inicial. Implementada no JavaScript 1.2. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.slice")}}

## Veja também

- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Array.prototype.splice()")}}
