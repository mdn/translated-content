---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
---

{{JSRef}}

O objeto **`Intl.Collator`** permite uma comparação de strings sensível à linguagem.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Construtor

- {{jsxref("Intl/Collator/Collator", "Intl.Collator()")}}
  - : Cria um novo objeto `Collator`.

## Métodos estáticos

- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : Retorna um array contendo as localizações (`locales`) providas que são suportados sem a necessidade de depender da localização padrão do runtime.

## Métodos de instância

- {{jsxref("Intl/Collator/compare", "Intl.Collator.prototype.compare")}}
  - : Função Getter que compara duas strings conforme a ordenação deste objeto {{jsxref("Global_Objects/Intl/Collator", "Intl.Collator")}}.
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
  - : Retorna um novo objeto com as propriedades que refletem as opções de localização (`locale`) e agrupamento (`collation`) computadas durante a inicialização do objeto.

## Exemplos

### Usando Collator

O exemplo a seguir demonstra os diferentes potenciais resultados para uma string que aparece antes, depois, ou no mesmo nível que outra:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, ou algum outro valor negativo
console.log(new Intl.Collator().compare("c", "a")); // 1, ou algum outro valor positivo
console.log(new Intl.Collator().compare("a", "a")); // 0
```

É importante notar que os resultados mostrados no código acima podem variar entre navegadores e versões de navegadores. Isso por os valores serem específicos a implementação. Isso ocorre, pois a implementação define somente que os valores para antes e depois sejam negativo e positivo.

### Usando localizações

Os resultados retornados por [`Intl.Collator.prototype.compare()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) variam entre linguagens. Para obter a sequência de ordenação da linguagem usada na interface da sua aplicação, garanta a especificação desta linguagem (e possivelmente algumas linguagens reserva) usando o argumento `locales`:

```js
// Em alemão, ä está no mesmo nível de a
console.log(new Intl.Collator("de").compare("ä", "z"));
// -1, ou algum outro valor negativo

// Em Sueco, ä vem depois de z
console.log(new Intl.Collator("sv").compare("ä", "z"));
// 1, ou algum outro valor positivo
```

### Usando opções

Os resultados retornados por [`Intl.Collator.prototype.compare()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) podem ser customizados usando o argumento `options`:

```js
// Em Alemão, ä tem a como sua letra base
console.log(new Intl.Collator("de", { sensitivity: "base" }).compare("ä", "a"));
// 0

// Em Sueco, ä e a são letras base separadas
console.log(new Intl.Collator("sv", { sensitivity: "base" }).compare("ä", "a"));
// 1, ou algum outro valor positivo
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Intl")}}
