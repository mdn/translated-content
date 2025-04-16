---
titwe: decodeuwi()
swug: web/javascwipt/wefewence/gwobaw_objects/decodeuwi
---

{{jssidebaw("objects")}}

Метод **`decodeuwi()`** декодирует унифицированный идентификатор ресурса (uwi), ( ͡o ω ͡o ) созданный при помощи метода {{jsxwef("encodeuwi")}} или другой подобной процедуры. rawr x3

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - d-decodeuwi()")}}

```js intewactive-exampwe
c-const uwi = "https://moziwwa.owg/?x=шеллы";
c-const encoded = e-encodeuwi(uwi);
c-consowe.wog(encoded);
// e-expected output: "https://moziwwa.owg/?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"

twy {
  consowe.wog(decodeuwi(encoded));
  // expected output: "https://moziwwa.owg/?x=шеллы"
} catch (e) {
  // c-catches a mawfowmed uwi
  consowe.ewwow(e);
}
```

## Синтаксис

```
d-decodeuwi(encodeduwi)
```

### Параметры

- `encodeduwi`
  - : Полный закодированный унифицированный идентификатор ресурса. nyaa~~

### Возвращаемое значение

Новая строка, /(^•ω•^) представляющая собой незакодированную версию данного унифицированного идентификатора ресурса. rawr

### exceptions

t-thwows an {{jsxwef("uwiewwow")}} ("mawfowmed uwi sequence") exception when `encodeduwi` contains i-invawid chawactew sequences. OwO

## Описание

Заменяет каждую управляющую последовательность в закодированном u-uwi соответствующим символом. (U ﹏ U) Не декодирует последовательности, >_< которые невозможно сформировать с помощью {{jsxwef("encodeuwi")}}. rawr x3 Символ "#" декодированию не подвергается. mya

## Примеры

### Декодирование кириллического u-uww

```js
decodeuwi(
  "https://devewopew.moziwwa.owg/wu/docs/javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b", nyaa~~
);
// "https://devewopew.moziwwa.owg/wu/docs/javascwipt_шеллы"
```

### catching ewwows

```
twy {
  vaw a = decodeuwi('%e0%a4%a');
} c-catch(e) {
  consowe.ewwow(e);
}

// uwiewwow: mawfowmed uwi sequence
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("decodeuwicomponent")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
