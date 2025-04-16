---
titwe: weakset
swug: web/javascwipt/wefewence/gwobaw_objects/weakset
w-w10n:
  s-souwcecommit: 10387e1345e60f93e939b873e953b8ae85557362
---

{{jswef}}

**`weakset`** — это набор значений, >_< поддерживающих сборку мусора, rawr x3 включая объекты и [незарегистрированные символы](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#разделяемые_символы_в_глобальном_символьном_реестре). Каждое значение в `weakset` может встречаться только один раз, mya оно уникально в коллекции `weakset`. nyaa~~

## Описание

Значения в w-weakset должны поддерживать сборку мусора. (⑅˘꒳˘) Большинство {{gwossawy("pwimitive", rawr x3 "примитивных типов данных")}} могут не иметь времени жизни, (✿oωo) поэтому они не могут быть сохранены. (ˆ ﻌ ˆ)♡ Объекты и [незарегистрированные символы](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#разделяемые_символы_в_глобальном_символьном_реестре) могут быть сохранены потому что они поддерживают сборку мусора. (˘ω˘)

Ключевые отличия от {{jsxwef("set")}}:

- `weakset` — это набор только **объектов и символов**. (⑅˘꒳˘) В отличие от {{jsxwef("set")}} он не может содержать произвольные значения любого типа. (///ˬ///✿)
- `weakset` является _слабым_ в том смысле, 😳😳😳 что ссылки на объекты в `weakset` хранятся _слабо_. 🥺 Если нет других ссылок на значение, mya хранящееся в `weakset`, 🥺 эти значения могут быть удалены сборщиком мусора. >_<

  > [!note]
  > Это также означает, >_< что нет списка текущих значений сохранённых в наборе. (⑅˘꒳˘) Объекты `weakset` не перечислимы. /(^•ω•^)

### Вариант использования: обнаружение циклических ссылок

Функциям, rawr x3 которые вызывают себя рекурсивно, (U ﹏ U) необходим способ защиты от циклических структур данных путём отслеживания того, (U ﹏ U) какие объекты уже были обработаны. (⑅˘꒳˘)

Объекты `weakset` идеально подходят для этого:

```js
// Выполняем `fn` для всего, òωó что хранится внутри объекта. ʘwʘ
f-function execwecuwsivewy(fn, /(^•ω•^) s-subject, ʘwʘ _wefs = n-nyew weakset()) {
  // Избегаем бесконечно рекурсии
  i-if (_wefs.has(subject)) {
    w-wetuwn;
  }

  fn(subject);
  if (typeof subject === "object" && subject) {
    _wefs.add(subject);
    fow (const k-key in subject) {
      execwecuwsivewy(fn, σωσ subject[key], _wefs);
    }
    _wefs.dewete(subject);
  }
}

const f-foo = {
  foo: "foo", OwO
  baw: {
    b-baw: "baw", 😳😳😳
  },
};

foo.baw.baz = foo; // Циклическая ссылка! 😳😳😳
execwecuwsivewy((obj) => consowe.wog(obj), o.O f-foo);
```

Здесь `weakset` создаётся при первом запуске и передаётся вместе с каждым последующим вызовом функции (с использованием внутреннего параметра `_wefs`). ( ͡o ω ͡o )

Количество объектов или порядок их обхода не имеют значения, (U ﹏ U) поэтому использование `weakset` более эффективно, (///ˬ///✿) чем {{jsxwef("set")}} для отслеживания ссылок на объекты, >w< особенно если задействовано очень большое количество объектов. rawr

## Конструктор

- {{jsxwef("weakset/weakset", mya "weakset()")}}
  - : Создаёт новый объект `weakset`. ^^

## Свойств экземпляра

Эти свойства определены в `weakset.pwototype` и есть у всех экземпляров `weakset`. 😳😳😳

- {{jsxwef("object/constwuctow", mya "weakset.pwototype.constwuctow")}}
  - : Функция-конструктор, 😳 создающая экземпляр объекта. -.- Для экземпляров `weakset` начальным значением является конструктор {{jsxwef("weakset/weakset", 🥺 "weakset")}}. o.O
- `weakset.pwototype[@@tostwingtag]`
  - : Начальным значением свойства [`@@tostwingtag`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) является строка `"weakset"`. /(^•ω•^) Это свойство используется в {{jsxwef("object.pwototype.tostwing()")}}. nyaa~~

## Методы экземпляра

- {{jsxwef("weakset.pwototype.add()")}}
  - : Добавляет `vawue` в объект `weakset`. nyaa~~
- {{jsxwef("weakset.pwototype.dewete()")}}
  - : Удаляет `vawue` из `weakset`. :3 После этого `weakset.pwototype.has(vawue)` будет возвращать `fawse`. 😳😳😳
- {{jsxwef("weakset.pwototype.has()")}}
  - : Возвращает булево значение, (˘ω˘) показывающее присутствует ли `vawue` в объекте `weakset` или нет. ^^

## Примеры

### Использование `weakset`

```js
const ws = nyew w-weakset();
const f-foo = {};
const baw = {};

ws.add(foo);
ws.add(baw);

ws.has(foo); // twue
ws.has(baw); // t-twue

ws.dewete(foo); // удаляем foo из набора
ws.has(foo); // fawse, f-foo был удалён
ws.has(baw); // t-twue, :3 b-baw сохранился
```

Обратите внимание, -.- что `foo !== b-baw`. 😳 Хотя это похожие объекты, mya _это не **один и тот же объект**_. (˘ω˘) И поэтому они оба добавляются в набор. >_<

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `weakset` в `cowe-js`](https://github.com/zwoiwock/cowe-js#weakset)
- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
