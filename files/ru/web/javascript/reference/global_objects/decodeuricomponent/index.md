---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
---

{{jsSidebar("Objects")}}

Метод **`decodeURIComponent()`** декодирует управляющие последовательности символов в компоненте Uniform Resource Identifier (URI), созданные с помощью метода {{jsxref("encodeURIComponent")}} или другой подобной процедуры.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - decodeURIComponent()")}}

```js interactive-example
function containsEncodedComponents(x) {
  // ie ?,=,&,/ etc
  return decodeURI(x) !== decodeURIComponent(x);
}

console.log(containsEncodedComponents("%3Fx%3Dtest")); // ?x=test
// Expected output: true

console.log(containsEncodedComponents("%D1%88%D0%B5%D0%BB%D0%BB%D1%8B")); // шеллы
// Expected output: false
```

## Синтаксис

```
decodeURIComponent(encodedURI)
```

### Параметры

- `encodedURI`
  - : Строка, содержащая закодированный компонент Uniform Resource Identifier.

### Возвращаемое значение

Новая строка, представляющая собой декодированную версию компонента Uniform Resource Identifier (URI), переданного в качестве параметра.

### Исключения

При неправильном использовании выдаёт исключение {{jsxref("URIError")}} ("неверный формат последовательности URI").

## Описание

Заменяет каждую управляющую последовательность в закодированном компоненте URI соответствующим ей символом.

## Примеры

### Декодирование компонента кириллического URL

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

### Перехват ошибок

```js
try {
  var a = decodeURIComponent("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
