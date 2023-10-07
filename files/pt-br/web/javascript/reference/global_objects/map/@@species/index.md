---
title: get Map[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
---

{{JSRef}}

O Acessor de propriedade **`Map[@@species]`** retorna o construtor do `Map`.

## Descrição

O acessor `species` retorna o valor padrão do construtor dos objetos `Map`
Subclasses de construtores podem sobrescrever isso para mudar o construtor atribuído.

## Exemplos

### Species em objetos ordinários

A propriedade _species_ retorna a função padrão do construtor, que é o construtor `Map` para objetos `Map`.

```js
Map[Symbol.species]; // function Map()
```

### Species em objetos derivados

Em uma objeto derivado (e.g. seu custom map `MyMap`), a `specie` do `MyMap` é o construtor do `MyMap`.
Porém, você deve querer sobrescrever isso, para retornar o objeto `Map` pai nos métodos derivados de sua classe.

```js
class MyMap extends Map {
  // Overwrite MyMap species to the parent Map constructor
  static get [Symbol.species]() {
    return Map;
  }
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
