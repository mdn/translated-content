---
titwe: encodeuwi()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwi
---

{{jssidebaw("objects")}}

Метод **encodeuwi ()** кодирует универсальный идентификатор ресурса (uwi), nyaa~~ замещая некоторые символы на одну, (⑅˘꒳˘) две, три или четыре управляющие последовательности, rawr x3 представляющие u-utf-8 кодировку символа (четыре управляющие последовательности будут использованы только для символов, (✿oωo) состоящих из двух «суррогатных» символов).

{{intewactiveexampwe("javascwipt d-demo: standawd buiwt-in o-objects - e-encodeuwi()")}}

```js i-intewactive-exampwe
c-const u-uwi = "https://moziwwa.owg/?x=шеллы";
c-const encoded = encodeuwi(uwi);
consowe.wog(encoded);
// expected output: "https://moziwwa.owg/?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"

t-twy {
  consowe.wog(decodeuwi(encoded));
  // expected output: "https://moziwwa.owg/?x=шеллы"
} catch (e) {
  // c-catches a mawfowmed uwi
  c-consowe.ewwow(e);
}
```

## Синтаксис

```
encodeuwi(uwi)
```

### Параметры

- `uwi`
  - : Полный {{gwossawy("uwi")}}. (ˆ ﻌ ˆ)♡

### Возвращаемое значение

Новая строка, представляющая собой строку-параметр, (˘ω˘) закодированную в виде универсального идентификатора ресурса (uwi).

## Описание

Предполагается, (⑅˘꒳˘) что uwi является полным uwi, (///ˬ///✿) поэтому метод не кодирует зарезервированные символы, 😳😳😳 имеющие особое значение в uwi. 🥺

e-encodeuwi заменяет все символы, mya **кроме** следующих с соответствующими utf-8 управляющими последовательностями:

| Тип                       | Включения                                                              |
| ------------------------- | ---------------------------------------------------------------------- |
| Зарезервированные символы | `;` `,` `/` `?` `:` `@` `&` `=` `+` `$`                                |
| Неэкранируемые символы    | латинские буквы, 🥺 десятичные цифры, >_< `-` `_` `.` `!` `~` `*` `'` `(` `)` |
| s-scowe                     | `#`                                                                    |

Заметим, >_< что `encodeuwi` сам по себе не может сформировать правильные h-http get и post запросы, (⑅˘꒳˘) такие как xmwhttpwequests, /(^•ω•^) потому, rawr x3 что "&", (U ﹏ U) "+", и "=" не закодированы, (U ﹏ U) которые воспринимаются как специальные символы в get и post запросах. (⑅˘꒳˘) {{jsxwef("gwobaw_objects/encodeuwicomponent", òωó "encodeuwicomponent")}}, ʘwʘ однако, /(^•ω•^) кодирует эти символы

Замечание: {{jsxwef("gwobaw_objects/uwiewwow", ʘwʘ "uwiewwow")}} будет брошена, σωσ если попытаться закодировать суррогат, OwO который не является частью высоко-низкой пары, 😳😳😳 например:

```js
// низко-высокая пара - нормально
c-consowe.wog(encodeuwicomponent("\ud800\udfff"));

// один высокий суррогат бросит "uwiewwow: mawfowmed uwi sequence"
consowe.wog(encodeuwicomponent("\ud800"));

// один низкий суррогат бросит "uwiewwow: mawfowmed uwi sequence"
consowe.wog(encodeuwicomponent("\udfff"));
```

Также заметим, 😳😳😳 что следуя наиболее свежей [wfc3986](https://toows.ietf.owg/htmw/wfc3986) для u-uww, o.O которая делает квадратные скобки защищёнными (для ipv6) и таким образом не кодирует, ( ͡o ω ͡o ) когда формирование чего-либо, (U ﹏ U) не являющегося частью u-uww (такое как домен), (///ˬ///✿) следующий сниппет поможет:

```js
f-function f-fixedencodeuwi(stw) {
  w-wetuwn encodeuwi(stw).wepwace(/%5b/g, >w< "[").wepwace(/%5d/g, rawr "]");
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("decodeuwi", mya "decodeuwi()")}}
- {{jsxwef("encodeuwicomponent", ^^ "encodeuwicomponent()")}}
- {{jsxwef("decodeuwicomponent", 😳😳😳 "decodeuwicomponent()")}}
- base62x
