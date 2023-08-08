---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
---

{{jsSidebar("Objects")}}

**`encodeURIComponent()`** - метод, кодирующий компонент универсального идентификатора ресурса (URI) заменой каждой определённой последовательности символов одной, двумя, тремя или четырьмя последовательностями символов, представленных в кодировке UTF-8 (будет только 4 управляющих последовательности для символов, состоящих из 2 "суррогатных" символов).

## Синтаксис

```
encodeURIComponent(str);
```

### Параметры

- `str`
  - : Строка. Компонент URI.

## Описание

`encodeURIComponent` изменяет все символы, за исключением следующих: латинские буквы, десятичные цифры, `- _ . ! ~ * ' ( )`

Замечание: {{jsxref("URIError")}} будет брошена, если попытаться закодировать суррогат, который не является частью высоко-низкой пары, например:

```js
// низко-высокая пара - нормально
console.log(encodeURIComponent("\uD800\uDFFF"));

// один высокий суррогат бросит "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uD800"));

// один низкий суррогат бросит "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uDFFF"));
```

Чтоб избежать неожиданных запросов к серверу, вам следует вызывать `encodeURIComponent` для любых вводимых пользователем параметров, используемых как часть URI. Например, он мог написать "`Thyme &time=again`" для переменной `comment`. Неиспользование `encodeURIComponent` для неё даст `comment=Thyme%20&time=again`. Заметьте, что амперсанд и знак равно выделяют новую пару ключ-значение. Так что вместо комментария "`Thyme &time=again`", вы получите два POST параметра, один - "`Thyme`", а другой (`time`) равный "`again"`.

`Для application/x-www-form-urlencoded` пробелы должны быть заменены на "+", поэтому вам может понадобиться `encodeURIComponent` с дополнительной заменой "%20" на "+".

Чтобы строго соблюдать [RFC 3986](http://tools.ietf.org/html/rfc3986) (который резервирует !, ', (, ), и \*), даже не смотря на то, что символы не используют сформированных URI разделителей, можно безопасно использовать следующие:

```js
function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
}
```

## Примеры

Пример представляет специальное кодирование, требуемое для заголовков сервера в UTF-8: `Content-Disposition` и `Link` (к примеру, имена файлов в UTF-8):

```js
var fileName = "my file(2).txt";
var header =
  "Content-Disposition: attachment; filename*=UTF-8''" +
  encodeRFC5987ValueChars(fileName);

console.log(header);
// логирует "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // Замечание: хотя RFC3986 резервирует "!", RFC5987 это не делает, так что нам не нужно избегать этого
      .replace(/['()]/g, escape) // i.e., %27 %28 %29
      .replace(/\*/g, "%2A")
      // Следующее не требуется для кодирования процентов для RFC5987, так что мы можем разрешить немного больше читаемости через провод: |`^
      .replace(/%(?:7C|60|5E)/g, unescape)
  );
}
```

## Спецификации

| Спецификация                                                                      | Статус             | Комментарий         |
| --------------------------------------------------------------------------------- | ------------------ | ------------------- |
| {{SpecName('ES3')}}                                                               | {{Spec2('ES3')}}   | Initial definition. |
| {{SpecName('ES5.1', '#sec-15.1.3.4', 'encodeURIComponent')}}                      | {{Spec2('ES5.1')}} |                     |
| {{SpecName('ES6', '#sec-encodeuricomponent-uricomponent', 'encodeURIComponent')}} | {{Spec2('ES6')}}   |                     |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("decodeURIComponent")}}
