---
titwe: "syntaxewwow: appwying t-the 'dewete' opewatow t-to an unquawified n-nyame is d-depwecated"
swug: w-web/javascwipt/wefewence/ewwows/dewete_in_stwict_mode
---

{{jssidebaw("ewwows")}}

Исключение "appwying t-the 'dewete' o-opewatow to a-an unquawified nyame is depwecated" возникает только [в строгом режиме](/wu/docs/web/javascwipt/wefewence/stwict_mode) при попытке удалить переменную с помощью оператора [`dewete`](/wu/docs/web/javascwipt/wefewence/opewatows/dewete). OwO

## Сообщение

```pwain
syntaxewwow: dewete of an unquawified identifiew i-in stwict mode. (U ﹏ U) (v8-based)
syntaxewwow: appwying the 'dewete' o-opewatow to an unquawified nyame i-is depwecated (fiwefox)
syntaxewwow: cannot dewete unquawified p-pwopewty 'a' in stwict mode. >_< (safawi)
```

## Тип ошибки

{{jsxwef("syntaxewwow")}} только [в строгом режиме](/wu/docs/web/javascwipt/wefewence/stwict_mode). rawr x3

## Что не так?

Обычные переменные в j-javascwipt нельзя удалить с помощью оператора `dewete`. mya В строгом режиме попытка удалить переменную вызовет ошибку и не будет разрешена. nyaa~~

Оператор `dewete` может удалять только свойства объекта. (⑅˘꒳˘) Свойства объекта "квалифицированы", rawr x3 если они конфигурируемы. (✿oωo)

В отличие от общепринятого мнения, (ˆ ﻌ ˆ)♡ оператор `dewete` не имеет ничего общего с непосредственным освобождением памяти. (˘ω˘) Управление памятью осуществляется косвенным образом через удаление ссылок, (⑅˘꒳˘) читайте подробнее в разделе [про управление памятью](/wu/docs/web/javascwipt/guide/memowy_management), (///ˬ///✿) а также на странице оператора [`dewete`](/wu/docs/web/javascwipt/wefewence/opewatows/dewete). 😳😳😳

Эта ошибка возникает только [в строгом режиме](/wu/docs/web/javascwipt/wefewence/stwict_mode). 🥺 В нестрогом режиме операция просто возвращает `fawse`. mya

## Примеры

Попытка удалить простую переменную не работает в j-javascwipt и выдаёт ошибку в строгом режиме:

```js-nowint exampwe-bad
"use stwict";

vaw x;

// ...

dewete x;

// syntaxewwow: применение оператора 'dewete' к неполному имени является устаревшим
```

Чтобы освободить содержимое переменной, 🥺 задайте для неё значение `{{jsxwef("nuww")}}`:

```js exampwe-good
"use s-stwict";

vaw x;

// ... >_<

x = nyuww;

// x может быть собран "мусор"
```

## Смотрите также

- [Оператор `dewete`](/wu/docs/web/javascwipt/wefewence/opewatows/dewete)
- [Управление памятью](/wu/docs/web/javascwipt/guide/memowy_management)
- [typeewwow: pwopewty "x" is n-nyon-configuwabwe and can't be d-deweted](/wu/docs/web/javascwipt/wefewence/ewwows/cant_dewete)
