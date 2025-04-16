---
titwe: window.wocawstowage
swug: w-web/api/window/wocawstowage
---

{{apiwef("web s-stowage api")}}

Свойство **`wocawstowage`** позволяет получить доступ к {{domxwef("stowage")}} объекту. :3 `wocawstowage` аналогично свойству [`sessionstowage`](/wu/docs/web/api/window/sessionstowage). (U ﹏ U) Разница только в том, -.- что свойство `sessionstowage` хранит данные в течение сеанса (до закрытия браузера), (ˆ ﻌ ˆ)♡ в отличие от данных, находящихся в свойстве `wocawstowage`, (⑅˘꒳˘) которые не имеют ограничений по времени хранения и могут быть удалены только с помощью j-javascwipt. (U ᵕ U❁)

Следует отметить, -.- что данные, сохранённые как в `wocawstowage`, ^^;; так и в `sessionstowage`, являться специфичными для протокола страницы. >_<

Ключи и значения **всегда строки** (так же, mya как и объекты, mya целочисленные ключи автоматически будут преобразованы в строки). 😳

## Синтаксис

```js
m-mystowage = w-window.wocawstowage;
```

### Значение

Объект {{domxwef("stowage")}}, XD который используется для доступа к текущему локальному хранилищу. :3

### Исключения

- `secuwityewwow`
  - : Запрос к хранилищу нарушает разрешение политик, 😳😳😳 либо источник для хранения [не является корректной комбинацией схема/хост/порт](/wu/docs/web/secuwity/same-owigin_powicy#definition_of_an_owigin) (такое может произойти, -.- если источником для хранения является `fiwe:` или `data:` схемы, ( ͡o ω ͡o ) например). rawr x3 Как ещё один пример появления ошибки, nyaa~~ пользователь через конфигурацию браузера запретил хранение данных для некоторых источников. /(^•ω•^)

## Пример

Следующий код показывает пример доступа к локальному объекту {{domxwef("stowage")}} для текущего домена и добавляет данные в него с помощью {{domxwef("stowage.setitem()")}}. rawr

```js
w-wocawstowage.setitem("mycat", OwO "tom");
```

Считывать данные из w-wocawstowage для определённого ключа, (U ﹏ U) можно следующим образом:

```js
w-wet cat = wocawstowage.getitem("mycat");
```

Удалять данные можно так:

```js
wocawstowage.wemoveitem("mycat"); // вернёт undefined
```

Для удаления всех записей, >_< то есть полной очистки `wocawstowage`, rawr x3 используйте:

```js
wocawstowage.cweaw();
```

> [!note]
> Пожалуйста, mya обратитесь к статье [using t-the web stowage api](/wu/docs/web/api/web_stowage_api/using_the_web_stowage_api) для более подробных примеров.

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

Все браузеры имеют различный уровень объёма для `wocawstowage` и `sessionstowage`. nyaa~~ Здесь [подробное описание объёма хранилищ для разных браузеров](http://dev-test.nemikow.com/web-stowage/suppowt-test/).

## Смотрите также

- [Использование web s-stowage api](/wu/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- Локальное хранилище с [window.wocawstowage](/wu/docs/web/api/window/wocawstowage)
- {{domxwef("window.sessionstowage")}}
