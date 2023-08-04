---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
---

{{JSRef}}

O método **`getTime()`** retorna o valor numérico correspondente ao horário da data especificada de acordo com o horário universal.

Você pode usar este método para atribuir uma data e horário a outro objeto {{jsxref("Date")}}. Este método é funcionalmente equivalente ao método {{jsxref("Date.valueof", "valueOf()")}}.

## Sintaxe

```
dateObj.getTime()
```

### Retorna

Um número representando os milissegundos passados entre 1 de Janeiro de 1970 00:00:00 UTC e a data atual.

## Exemplos

### Usando `getTime()` para duplicar datas

Construindo um objeto de data com um horário idêntico.

```js
// Sendo o mês iniciado em zero, birthday será 10 de Janeiro de 1995
var birthday = new Date(1994, 12, 10);
var copy = new Date();
copy.setTime(birthday.getTime());
```

### Medindo tempo de execução

Subtrair duas chamadas subsequentes a `getTime()` em objetos {{jsxref("Date")}} recém criados resultará no intervalo de tempo entre essas duas chamadas. Isso pode ser usado para calcular o tempo de execução de algumas operações. Veja também {{jsxref("Date.now()")}} para evitar instanciar objetos {{jsxref("Date")}} desnecessariamente.

```js
var end, start;

start = new Date();
for (var i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log("Operation took " + (end.getTime() - start.getTime()) + " msec");
```

## Especificações

| Specification                                                                    | Status               | Comment                                            |
| -------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                              | {{Spec2('ES1')}}     | Definição inicial. Implementado em JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.9', 'Date.prototype.getTime')}}                 | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.gettime', 'Date.prototype.getTime')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-date.prototype.gettime', 'Date.prototype.getTime')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getTime")}}

## See also

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
