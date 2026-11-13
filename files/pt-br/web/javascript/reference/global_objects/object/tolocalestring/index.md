---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
---

{{JSRef}}

O método **`toLocaleString()`** retorna uma cadeia de caracteres (_string_) representando o objeto. Este método é feito para ser sobrescrito por objetos derivados para propósitos de localização específica.

{{InteractiveExample("JavaScript Demo: Object.prototype.tolocalestring()")}}

```js interactive-example
const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString("ar-EG"));
// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number1 = 123456.789;

console.log(number1.toLocaleString("de-DE"));
// Expected output: "123.456,789"
```

## Sintaxe

```
obj.toLocaleString()
```

### Valor de retorno

Uma _string_ representando o objeto.

## Descrição

`toLocaleString` do {{jsxref("Object")}} retorna o resultado da chamada {{jsxref("Object.toString", "toString()")}}.

Esta função é provida para dar aos objetos um método `toLocaleString` genérico, mesmo que nem todos os usem. Veja a lista abaixo.

### Objetos sobrescrevendo toLocaleString

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}: {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}: {{jsxref("BigInt.prototype.toLocaleString()")}}

## Exemplos

### Sobrescrita do Array toLocaleString()

Em objetos {{jsxref("Array")}}, {{jsxref("Array.toLocaleString", "toLocaleString()")}} pode ser usado para imprimir valores do arranjo como uma _string_, opcionalmente com identificadores de localização específicos (como símbolos monetários) atrelados a eles:

Por exemplo:

```js
const testArray = [4, 7, 10];

let euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Sobrescrita do Date toLocaleString()

Em objetos {{jsxref("Date")}}, {{jsxref("Date.toLocaleString", "toLocaleString()")}} é usado para imprimir datas mais apropriadas para localizações específicas:

Por exemplo:

```js
const testDate = new Date(Date.now());
// "Date Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

let deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"

var frDate = testDate.toLocaleString("fr");
//"29/05/2020 à 18:04:24"
```

### Sobrescrita de Number toLocaleString()

Em objetos {{jsxref("Number")}}, {{jsxref("Number.toLocaleString", "toLocaleString()")}} é usado para imprimir números para localizações específicas, e.g. com os corretos separadores:

Por exemplo:

```js
const testNumber = 2901234564;
// "2901234564"

let deNumber = testNumber.toLocaleString("de");
// "2.901.234.564"

let frNumber = testNumber.toLocaleString("fr");
// "2 901 234 564"
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Object.prototype.toString()")}}
