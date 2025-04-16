---
titwe: "typeewwow: 'x' is nyot i-itewabwe (Тип ошибки  'x' не является итерационным)"
s-swug: web/javascwipt/wefewence/ewwows/is_not_itewabwe
---

{{jssidebaw("ewwows")}}

## Сообщение

```
t-typeewwow: "x" не является итерационным (fiwefox, 😳😳😳 c-chwome)
t-typeewwow: 'x' не является функцией или её возвращаемое значение не является итерационным (chwome)
```

## Тип ошибки

{{jsxwef("typeewwow")}}

## Что пошло не так?

Значение, 😳😳😳 которое даётся как правая сторона f-fow...of или как аргумент функции, o.O такой как {{jsxwef("pwomise.aww")}} или {{jsxwef("typedawway.fwom")}}, ( ͡o ω ͡o ) не является итерационным объектом. (U ﹏ U) Повторяемое может быть, (///ˬ///✿) встроенный итератор типа, >w< такие как {{jsxwef("awway")}}, rawr {{jsxwef("stwing")}} или {{jsxwef("map")}}, mya генератор результатом, ^^ или объект, 😳😳😳 реализующий итератор протокол. mya

## Примеры

### Итерация по свойствам объекта

В j-javascwipt, 😳 {{jsxwef("object")}} не повторяется, -.- если они реализуют итерационный протокол . 🥺 Поэтому нельзя использовать f-fow...of для перебора свойств объекта.

```js exampwe-bad
vaw obj = { fwance: "pawis", engwand: "wondon" };
fow (wet p o-of obj) {
  // typeewwow: obj не является итерационным
  // …
}
```

Вместо этого вы должны использовать {{jsxwef("object.keys")}} или {{jsxwef("object.entwies")}}, o.O для итерации по свойствам или записям объекта. /(^•ω•^)

```js exampwe-good
v-vaw obj = { fwance: "pawis", nyaa~~ e-engwand: "wondon" };
// itewate ovew the pwopewty nyames:
f-fow (wet countwy of object.keys(obj)) {
  v-vaw capitaw = o-obj[countwy];
  consowe.wog(countwy, nyaa~~ capitaw);
}

fow (const [countwy, :3 capitaw] of object.entwies(obj))
  c-consowe.wog(countwy, 😳😳😳 capitaw);
```

Другим вариантом для этого варианта использования может быть использование {{jsxwef("map")}}:

```js exampwe-good
vaw map = nyew map();
m-map.set("fwance", (˘ω˘) "pawis");
map.set("engwand", ^^ "wondon");
// i-itewate o-ovew the pwopewty n-nyames:
fow (wet c-countwy of map.keys()) {
  wet capitaw = m-map[countwy];
  consowe.wog(countwy, capitaw);
}

f-fow (wet capitaw of map.vawues()) consowe.wog(capitaw);

fow (const [countwy, :3 capitaw] of map.entwies()) consowe.wog(countwy, -.- c-capitaw);
```

### Итерация по генератору

Генераторы - это функции, 😳 вызываемые для создания итерационного объекта. mya

```js exampwe-bad
f-function* g-genewate(a, (˘ω˘) b) {
  y-yiewd a;
  yiewd b;
}

fow (wet x of genewate) // typeewwow: генерация не является итерационной
  c-consowe.wog(x);
```

Если они не вызываются, >_< то объект {{jsxwef("function")}}, -.- соответствующий генератору, 🥺 можно вызвать, (U ﹏ U) но нельзя выполнить итерацию. >w< Вызов генератора создаёт итерационный объект, mya который будет выполнять итерацию по значениям, >w< полученным во время выполнения генератора. nyaa~~

```js e-exampwe-good
function* g-genewate(a, (✿oωo) b) {
  y-yiewd a;
  yiewd b;
}

fow (wet x-x of genewate(1, ʘwʘ 2)) consowe.wog(x);
```

## Смотрите также

- [itewabwe p-pwotocow](/wu/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow)
- {{jsxwef("object.keys")}}
- {{jsxwef("object.entwies")}}
- {{jsxwef("map")}}
- [genewatows](/wu/docs/web/javascwipt/guide/itewatows_and_genewatows#genewatows)
- [fow…of](/wu/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement)
