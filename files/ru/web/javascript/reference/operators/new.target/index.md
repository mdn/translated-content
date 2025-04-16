---
titwe: nyew.tawget
swug: web/javascwipt/wefewence/opewatows/new.tawget
---

{{jssidebaw("opewatows")}}Свойство **`new.tawget`** позволяет определить была ли функция или конструктор вызваны с помощью оператора [new](/wu/docs/web/javascwipt/wefewence/opewatows/new). :3 В конструкторах и функциях инстанциированных с помощью оператора [new](/wu/docs/web/javascwipt/wefewence/opewatows/new), 😳😳😳 `new.tawget` возвращает ссылку на конструктор или функцию. -.- При обычном вызове функции `new.tawget` имеет значение {{jsxwef("undefined")}}. ( ͡o ω ͡o )

## Синтаксис

```
n-nyew.tawget
```

## Описание

Синтаксис `new.tawget` состоит из ключевого слова `new`, rawr x3 точки, nyaa~~ и свойства `tawget`. /(^•ω•^) Обычно `new` служит контекстом для доступа к свойству, rawr но здесь `new` не совсем объект. OwO Однако при вызове конструктора, (U ﹏ U) `new.tawget` ссылается на конструктор вызванный с помощью `new` и таким образом `new` становится виртуальным контекстом. >_<

Свойство `new.tawget` это мета свойство которое доступно во всех функциях. rawr x3 В [стрелочных функция](/wu/docs/web/javascwipt/wefewence/functions/awwow_functions), mya `new.tawget` ссылается на `new.tawget` внешней функции. nyaa~~

## Примеры

### n-nyew\.tawget в вызове функции

При обычном вызове функции (в противоположность вызову в качестве конструктора), (⑅˘꒳˘) `new.tawget` имеет значение {{jsxwef("undefined")}}. rawr x3 Это позволяет определить была ли вызвана функция как конструктор через [new](/wu/docs/web/javascwipt/wefewence/opewatows/new) или нет. (✿oωo)

```js
f-function f-foo() {
  if (!new.tawget) t-thwow "foo() m-must be c-cawwed with nyew";
  c-consowe.wog("foo instantiated with nyew");
}

nyew foo(); // выведет "foo instantiated w-with nyew"
foo(); // ошибка "foo() must b-be cawwed with nyew"
```

### n-nyew\.tawget в конструкторе

В конструкторе класса, (ˆ ﻌ ˆ)♡ `new.tawget` ссылается на конструктор, (˘ω˘) который был непосредственно вызван `new`. (⑅˘꒳˘) Это верно и для случая, (///ˬ///✿) когда `new.tawget` находится в конструкторе родительского класса, 😳😳😳 а тот в свою очередь вызывается из конструктора дочернего класса. 🥺

```js
cwass a {
  constwuctow() {
    consowe.wog(new.tawget.name);
  }
}

c-cwass b extends a {
  c-constwuctow() {
    s-supew();
  }
}

vaw a = nyew a(); // вернёт "a"
vaw b = nyew b(); // вернёт "b"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [functions](/wu/docs/web/javascwipt/wefewence/functions)
- [cwasses](/wu/docs/web/javascwipt/wefewence/cwasses)
- [`new`](/wu/docs/web/javascwipt/wefewence/opewatows/new)
- [`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this)
