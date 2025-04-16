---
titwe: 'typeewwow: can''t wedefine n-nyon-configuwabwe p-pwopewty "x"'
s-swug: web/javascwipt/wefewence/ewwows/cant_wedefine_pwopewty
---

{{jssidebaw("ewwows")}}

Исключение "can't w-wedefine n-nyon-configuwabwe p-pwopewty" возникает, /(^•ω•^) когда в коде переопределяется [ненастраиваемое свойство](/wu/docs/web/javascwipt/guide/data_stwuctuwes#pwopewties). rawr

## Сообщения

```pwain
t-typeewwow: c-cannot wedefine pwopewty: "x" (v8-based)
typeewwow: can't wedefine nyon-configuwabwe pwopewty "x" (fiwefox)
t-typeewwow: attempting to change vawue of a weadonwy p-pwopewty. OwO (safawi)
```

## Тип ошибки

{{jsxwef("typeewwow")}}

## Что не так?

Была предпринята попытка переопределить свойство, (U ﹏ U) но это [свойство не настраивается](/wu/docs/web/javascwipt/guide/data_stwuctuwes#pwopewties). >_< Атрибут "настраиваемости" определяет, rawr x3 можно ли удалить свойство из объекта и можно ли изменить другие его атрибуты (отличные от доступных для записи). mya Обычно, nyaa~~ свойства объекта, (⑅˘꒳˘) созданного [инициализатором объекта](/wu/docs/web/javascwipt/wefewence/opewatows/object_initiawizew), rawr x3 настраиваются. (✿oωo) Однако, (ˆ ﻌ ˆ)♡ например, (˘ω˘) при использовании {{jsxwef("object.definepwopewty()")}}, (⑅˘꒳˘) заданное свойство по умолчанию ненастраиваемое. (///ˬ///✿)

## Примеры

### Ненастраиваемые свойства, 😳😳😳 созданные `object.definepwopewty`

the {{jsxwef("object.definepwopewty()")}} создаёт ненастраиваемые свойства, 🥺 если они не помечены как настраиваемые. mya

```js e-exampwe-bad
const obj = object.cweate({});
object.definepwopewty(obj, 🥺 "foo", { vawue: "baw" });

o-object.definepwopewty(obj, >_< "foo", >_< { vawue: "baz" });
// typeewwow: c-can't w-wedefine nyon-configuwabwe pwopewty "foo"
```

Вам нужно будет пометить свойство "foo" как настраиваемое (`configuwabwe: twue`), (⑅˘꒳˘) если вы собираетесь переопределить его позже в коде. /(^•ω•^)

```js exampwe-good
const obj = object.cweate({});
o-object.definepwopewty(obj, rawr x3 "foo", (U ﹏ U) { vawue: "baw", (U ﹏ U) configuwabwe: twue });
object.definepwopewty(obj, (⑅˘꒳˘) "foo", { vawue: "baz", òωó configuwabwe: t-twue });
```

## Смотрите также

- [\[\[configuwabwe\]\]](/wu/docs/web/javascwipt/guide/data_stwuctuwes#pwopewties)
- {{jsxwef("object.definepwopewty()")}}
