---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Метод **`hasOwnProperty()`** возвращает логическое значение, указывающее, содержит ли объект указанное свойство.

## Синтаксис

```
obj.hasOwnProperty(prop)
```

### Параметры

- `prop`
  - : Имя проверяемого свойства.

## Описание

Каждый объект, произошедший от {{jsxref("Global_Objects/Object", "Object")}}, наследует метод `hasOwnProperty`. Этот метод может использоваться для определения того, содержит ли объект указанное свойство в качестве собственного свойства объекта; в отличие от оператора {{jsxref("Operators/in", "in")}}, этот метод не проверяет существование свойств в цепочке прототипов объекта.

## Примеры

### Пример: использование `hasOwnProperty` для проверки существования свойства

В следующем примере определяется, содержит ли объект `o` свойство с именем `prop`:

```js
o = new Object();
o.prop = "существует";

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty("prop"); // вернёт true
changeO();
o.hasOwnProperty("prop"); // вернёт false
```

### Пример: собственные и унаследованные свойства

Следующий пример показывает разницу между собственными свойствами и свойствами, унаследованными через цепочку прототипов:

```js
o = new Object();
o.prop = "существует";
o.hasOwnProperty("prop"); // вернёт true
o.hasOwnProperty("toString"); // вернёт false
o.hasOwnProperty("hasOwnProperty"); // вернёт false
```

### Пример: обход свойств объекта

Следующий пример показывает, как итерироваться по свойствам объекта с пропуском унаследованных свойств. Обратите внимание, что цикл {{jsxref("Statements/for...in", "for...in")}} уже проходит только по перечисляемым элементам, так что не надо на основании отсутствия не перечисляемых свойств, показываемых в цикле, считать, что метод `hasOwnProperty` сам ограничивает свойства только перечисляемыми элементами (как это делает метод {{jsxref("Object.getOwnPropertyNames()")}}).

```js
var buz = {
  fog: "stack",
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    alert("это точно туман (" + name + "). Значение: " + buz[name]);
  } else {
    alert(name); // toString или что-то ещё
  }
}
```

### Пример: `hasOwnProperty` как свойство

JavaScript не защищает имя свойства `hasOwnProperty`; таким образом, вполне может существовать объект с таким свойством, поэтому для получения правильного результата нужно использовать _внешний_ метод `hasOwnProperty`:

```js
var foo = {
  hasOwnProperty: function () {
    return false;
  },
  bar: "Тут драконы",
};

foo.hasOwnProperty("bar"); // всегда возвращает false

// Используем метод hasOwnProperty другого объекта и вызываем его с передачей foo в качестве this
({}).hasOwnProperty.call(foo, "bar"); // true

// Также для этих целей можно использовать свойство hasOwnProperty из прототипа Object
Object.prototype.hasOwnProperty.call(foo, "bar"); // true
```

Обратите внимание, что в последнем случае новые объекты не создаются.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Перечисляемость и собственность свойств](/ru/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Руководство по JavaScript: повторное наследование](/ru/docs/Web/JavaScript/Guide/Inheritance_Revisited)
