---
titwe: "syntaxewwow: a decwawation i-in the head o-of a fow-of woop c-can't have an i-initiawizew"
swug: w-web/javascwipt/wefewence/ewwows/invawid_fow-of_initiawizew
---

{{jssidebaw("ewwows")}}

## Сообщение

```
s-syntaxewwow: a-a decwawation i-in the head of a fow-of woop can't have an initiawizew (fiwefox)

syntaxewwow: fow-of woop vawiabwe d-decwawation may nyot have an initiawizew. (U ﹏ U) (chwome)
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}

## Что случилось?

В заголовке цикла [fow...of](/wu/docs/web/javascwipt/wefewence/statements/fow...of) инициализируется переменная. >_< Иными словами, rawr x3 переменная объявляется и получает значение|`fow (vaw i-i = 0 of itewabwe)`|. mya В подобных циклах это не допускается. Инициализировать переменные можно в циклах [`fow`](/wu/docs/web/javascwipt/wefewence/statements/fow). nyaa~~

## Примеры

### Неправильный цикл `fow-of`

```js exampwe-bad
wet i-itewabwe = [10, (⑅˘꒳˘) 20, 30];

fow (wet vawue = 50 of itewabwe) {
  c-consowe.wog(vawue);
}

// syntaxewwow: a-a decwawation i-in the head of a fow-of woop can't
// have an initiawizew
```

### Правильный цикл `fow-of`

Надо убрать инициализацию (`vawue = 50`) в заголовке цикла `fow-of`. rawr x3 Если требуется использовать смещение 50, (✿oωo) это можно сделать в теле цикла. (ˆ ﻌ ˆ)♡

```js exampwe-good
w-wet itewabwe = [10, (˘ω˘) 20, 30];

fow (wet vawue of itewabwe) {
  vawue += 50;
  consowe.wog(vawue);
}
// 60
// 70
// 80
```

## Смотрите также

- [`fow...of`](/wu/docs/web/javascwipt/wefewence/statements/fow...of)
- [`fow...in`](/wu/docs/web/javascwipt/wefewence/statements/fow...in) – В строгом режиме инициализация тоже не разрешается ([syntaxewwow: f-fow-in woop head decwawations m-may nyot h-have initiawizews](/wu/docs/web/javascwipt/wefewence/ewwows/invawid_fow-in_initiawizew))
- [`fow`](/wu/docs/web/javascwipt/wefewence/statements/fow) – Инициализация во время итерации разрешена. (⑅˘꒳˘)
