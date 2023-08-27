---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
---

{{JSRef("Global_Objects", "Object")}}

Метод **`Object.getOwnPropertyNames()`** возвращает массив со всеми свойствами (независимо от того, перечисляемые они или нет), найденными непосредственно в переданном объекте.

{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}

## Синтаксис

```js
Object.getOwnPropertyNames(obj);
```

### Параметры

- `obj`
  - : Объект, чьи перечисляемые _и неперечисляемые_ собственные свойства будут возвращены.

### Возвращаемое значение

Массив строк, который соответствует свойствам, найденным непосредственно в данном объекте.

## Описание

Метод `Object.getOwnPropertyNames` возвращает массив строк, соответствующих перечисляемым _и неперечисляемым_ свойствам, найденным непосредственно в объекте `obj`. Порядок перечисляемых свойств в массиве соответствует порядку при обходе объекта циклом {{jsxref("Statements/for...in", "for...in")}} (или при возврате методом {{jsxref("Object.keys")}}). Порядок неперечисляемых свойств в массиве, а также их местоположение среди перечисляемых свойств не определены.

## Примеры

### Пример: использование `Object.getOwnPropertyNames()`

```js
var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort()); // напечатает '0,1,2,length'

// Массивоподобный объект
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort()); // напечатает '0,1,2'

// Печать имён и значений свойств с помощью Array.forEach
Object.getOwnPropertyNames(obj).forEach(function (val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
// напечатает
// 0 -> a
// 1 -> b
// 2 -> c

// Не перечисляемое свойство
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
      enumerable: false,
    },
  },
);
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort()); // напечатает 'foo,getFoo'
```

Если вы хотите обработать только перечисляемые свойства, смотрите в сторону метода {{jsxref("Object.keys()")}} или используйте цикл {{jsxref("Statements/for...in", "for...in")}} (хотя стоит отметить, что он пройдётся по перечисляемым свойствам, присутствующим не только непосредственно в самом объекте, но и унаследованным из цепочки прототипов объекта; последние можно отфильтровать с помощью метода {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}}).

Элементы в цепочке прототипов не перечисляются:

```js
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {};

function ChildClass() {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass();
ChildClass.prototype.prototypeMethod = function () {};

alert(
  Object.getOwnPropertyNames(
    new ChildClass(), // ['prop', 'method']
  ),
);
```

### Пример: получение только не перечисляемых свойств

Здесь используется функция {{jsxref("Array.prototype.filter()")}} для удаления перечисляемых ключей (полученных через метод {{jsxref("Object.keys()")}}) из списка всех ключей (полученных через метод `Object.getOwnPropertyNames()`) и, таким образом, оставляющая только неперечисляемые ключи.

```js
var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function (key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // если ключ не найден в массиве enum_only, значит ключ является не перечисляемым
    // и нужно вернуть true, чтобы он попал в результирующий массив
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);
```

## Примечания

В ES5, если аргумент метода не является объектом (является примитивным значением), будет выброшено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. В ES6 такой аргумент будет приведён к объекту.

```js
> Object.getOwnPropertyNames('foo')
TypeError: "foo" is not an object // код ES5

> Object.getOwnPropertyNames('foo')
['length', '0', '1', '2']         // код ES6
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Перечисляемость и собственность свойств](/ru/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.forEach()")}}
