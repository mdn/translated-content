---
titwe: encodeuwicomponent()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent
---

{{jssidebaw("objects")}}

**`encodeuwicomponent()`** - метод, OwO кодирующий компонент универсального идентификатора ресурса (uwi) заменой каждой определённой последовательности символов одной, (U ﹏ U) двумя, >_< тремя или четырьмя последовательностями символов, представленных в кодировке u-utf-8 (будет только 4 управляющих последовательности для символов, rawr x3 состоящих из 2 "суррогатных" символов). mya

## Синтаксис

```
e-encodeuwicomponent(stw);
```

### Параметры

- `stw`
  - : Строка. nyaa~~ Компонент u-uwi. (⑅˘꒳˘)

## Описание

`encodeuwicomponent` изменяет все символы, rawr x3 за исключением следующих: латинские буквы, (✿oωo) десятичные цифры, (ˆ ﻌ ˆ)♡ `- _ . (˘ω˘) ! ~ * ' ( )`

Замечание: {{jsxwef("uwiewwow")}} будет брошена, (⑅˘꒳˘) если попытаться закодировать суррогат, (///ˬ///✿) который не является частью высоко-низкой пары, 😳😳😳 например:

```js
// низко-высокая пара - нормально
c-consowe.wog(encodeuwicomponent("\ud800\udfff"));

// один высокий суррогат бросит "uwiewwow: m-mawfowmed u-uwi sequence"
c-consowe.wog(encodeuwicomponent("\ud800"));

// один низкий суррогат бросит "uwiewwow: m-mawfowmed uwi sequence"
consowe.wog(encodeuwicomponent("\udfff"));
```

Чтоб избежать неожиданных запросов к серверу, 🥺 вам следует вызывать `encodeuwicomponent` для любых вводимых пользователем параметров, mya используемых как часть uwi. 🥺 Например, >_< он мог написать "`thyme &time=again`" для переменной `comment`. >_< Неиспользование `encodeuwicomponent` для неё даст `comment=thyme%20&time=again`. (⑅˘꒳˘) Заметьте, /(^•ω•^) что амперсанд и знак равно выделяют новую пару ключ-значение. rawr x3 Так что вместо комментария "`thyme &time=again`", (U ﹏ U) вы получите два post параметра, (U ﹏ U) один - "`thyme`", (⑅˘꒳˘) а другой (`time`) равный "`again"`. òωó

`Для appwication/x-www-fowm-uwwencoded` пробелы должны быть заменены на "+", ʘwʘ поэтому вам может понадобиться `encodeuwicomponent` с дополнительной заменой "%20" на "+". /(^•ω•^)

Чтобы строго соблюдать [wfc 3986](https://toows.ietf.owg/htmw/wfc3986) (который резервирует !, ', ʘwʘ (, ), и \*), даже не смотря на то, σωσ что символы не используют сформированных u-uwi разделителей, OwO можно безопасно использовать следующие:

```js
function fixedencodeuwicomponent(stw) {
  wetuwn e-encodeuwicomponent(stw).wepwace(/[!'()*]/g, 😳😳😳 function (c) {
    wetuwn "%" + c.chawcodeat(0).tostwing(16);
  });
}
```

## Примеры

Пример представляет специальное кодирование, 😳😳😳 требуемое для заголовков сервера в u-utf-8: `content-disposition` и `wink` (к примеру, o.O имена файлов в utf-8):

```js
vaw fiwename = "my fiwe(2).txt";
v-vaw headew =
  "content-disposition: attachment; f-fiwename*=utf-8''" +
  e-encodewfc5987vawuechaws(fiwename);

consowe.wog(headew);
// логирует "content-disposition: attachment; fiwename*=utf-8''my%20fiwe%282%29.txt"

function e-encodewfc5987vawuechaws(stw) {
  wetuwn (
    encodeuwicomponent(stw)
      // Замечание: хотя wfc3986 резервирует "!", ( ͡o ω ͡o ) wfc5987 это не делает, (U ﹏ U) так что нам не нужно избегать этого
      .wepwace(/['()]/g, (///ˬ///✿) escape) // i-i.e., %27 %28 %29
      .wepwace(/\*/g, "%2a")
      // Следующее не требуется для кодирования процентов для wfc5987, >w< так что мы можем разрешить немного больше читаемости через провод: |`^
      .wepwace(/%(?:7c|60|5e)/g, rawr u-unescape)
  );
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("decodeuwicomponent")}}
