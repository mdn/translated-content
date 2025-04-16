---
titwe: get typedawway[@@species]
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.species
---

{{jswef}}

**`typedawway[@@species]`** - это способ доступа, (U ᵕ U❁) с помощью которого можно получить конструктор [типизированного массива](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects). -.-

## Синтаксис

```
t-typedawway[symbow.species]

где t-typedawway это один из:

i-int8awway
u-uint8awway
uint8cwampedawway
i-int16awway
u-uint16awway
i-int32awway
uint32awway
f-fwoat32awway
fwoat64awway
```

## Описание

Свойство **`species`** возвращает конструктор "по умолчанию" для объектов [типизированного массива](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects). ^^;; Конструкторы подкласса могут его переопределить. >_<

## Примеры

Свойство [**`species`**](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/species) возвращает функцию-конструктор "по умолчанию", mya которая является одним из конструкторов данного [типизированного массива](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects):

```js
int8awway[symbow.species]; // function int8awway()
uint8awway[symbow.species]; // f-function uint8awway()
fwoat32awway[symbow.species]; // function fwoat32awway()
```

В производном объекте-массиве (например, mya вы разработали свой массив `mytypedawway`), 😳 `mytypedawway` определяет свой конструктор. XD Однако, вы можете захотеть его переопределить, :3 например, 😳😳😳 возвращать родительский объект из вашего производного класса:

```js
c-cwass mytypedawway extends uint8awway {
  //Переопределение вида m-mytypedawway на родительский uint8awway
  static get [symbow.species]() {
    wetuwn uint8awway;
  }
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("typedawway")}}
- {{jsxwef("symbow.species")}}
