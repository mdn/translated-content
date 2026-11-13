---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
---

{{JSRef}}

O método `localeCompare()` retorna um número que indica se uma string de referência vem antes ou depois, ou é a mesma que a string fornecida na ordem de classificação.

{{InteractiveExample("JavaScript Demo: String.localeCompare()")}}

```js interactive-example
const a = "réservé"; // With accents, lowercase
const b = "RESERVE"; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// Expected output: 0
```

Os novos argumentos _`locales`_ e _`options`_ permitem que os aplicativos especifiquem o idioma cuja ordem da ordenação deve ser usada e personalizem o comportamento da função. Em implementações mais antigas, que ignoram os argumentos _`locales`_ e _`options`_, a localidade e a ordem de classificação usadas são totalmente dependentes da implementação.

## Sintaxe

```
referenceStr.localeCompare(compareString[, locales[, options]])
```

### Parâmetros

- `compareString`
  - : A string com a qual a _`referenceStr`_ é comparada.
- `locales` _e _`options`
  - : Esses argumentos personalizam o comportamento da função e permitem que os aplicativos especifiquem o idioma cujas convenções de formatação devem ser usadas. Em implementações que ignoram os argumentos _`locales`_ e _`options`_, a localidade usada e a forma da string retornada são inteiramente dependentes da implementação.

    Consulte o [construtor `Intl.Collator()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) para obter detalhes sobre esses parâmetros e como usá-los.

### Valor retornado

Um número **negativo** se _`referenceStr`_ ocorrer antes de _`compareString`_. Um número **positivo** se o _`referenceStr`_ ocorrer após _`compareString`_. `0` se eles forem equivalentes.

## Descrição

Retorna um inteiro indicando se _`referenceStr`_ vem antes, depois ou é equivalente a _`compareString`_.

- Negativo quando o _`referenceStr`_ ocorre antes de _`compareString`_
- Positivo quando o _`referenceStr`_ ocorre após _`compareString`_
- Retorna `0` se eles forem equivalentes

> [!WARNING]
> **NÃO confie em valores de retorno exatos de -1 ou 1!**
>
> Os resultados de números inteiros negativos e positivos variam entre os navegadores (bem como entre as versões dos navegadores) porque a especificação W3C exige apenas valores negativos e positivos. Alguns navegadores podem retornar `-2` ou `2`, ou mesmo algum outro valor negativo ou positivo.

## Performance

Ao comparar um grande número de strings, como na classificação de grandes arrays, é melhor criar um objeto {{jsxref("Intl/Collator", "Intl.Collator")}} e usar a função fornecida por sua propriedade {{jsxref("Intl/Collator/compare", "compare")}}.

## Exemplos

### Usando `localeCompare()`

```js
// A letra "a" está antes de "c" produzindo um valor negativo
"a".localeCompare("c"); // -2 ou -1 (ou algum outro valor negativo)

// Alfabeticamente, a palavra "verificar" vem depois de "contra", produzindo um valor positivo
"verificar".localeCompare("contra"); // 2 ou 1 (ou algum outro valor positivo)

// "a" e "a" são equivalentes, resultando em um valor neutro de zero
"a".localeCompare("a"); // 0
```

### Ordenar um array

`localeCompare()` permite a ordenação sem distinção entre maiúsculas e minúsculas em um array.

```js
let items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Verifique o suporte do navegador para os novos argumentos

Os argumentos _`locales`_ e _`options`_ ainda não são suportados em todos os navegadores.

Para verificar se uma implementação os suporta, use o argumento `"i"` (um requisito de rejeição das tags de linguagem ilegal) e procure uma exceção {{jsxref ("RangeError")}}:

```js
function localeCompareSupportsLocales() {
  try {
    "foo".localeCompare("bar", "i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Usando `locales`

Os resultados fornecidos por `localeCompare()` variam entre os idiomas. Para obter a ordem de classificação do idioma usado na interface do usuário de seu aplicativo, certifique-se de especificar esse idioma (e possivelmente alguns idiomas substitutos) usando o argumento _`locales`_:

```js
console.log("ä".localeCompare("z", "de")); // um valor negativo: em alemão, ä é classificado antes de z
console.log("ä".localeCompare("z", "sv")); // um valor positivo: em sueco, ä é classificado após z
```

### Usando `options`

Os resultados fornecidos por `localeCompare()` podem ser personalizados usando o argumento _`options`_:

```js
// em alemão, ä tem a como letra base
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// em sueco, ä e a são letras de base separadas
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // um valor positivo
```

### Ordenação numérica

```js
// por padrão, "2" > "10"
console.log("2".localeCompare("10")); // 1

// numeric using options:
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

// numeric using locales tag:
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Intl/Collator", "Intl.Collator")}}
