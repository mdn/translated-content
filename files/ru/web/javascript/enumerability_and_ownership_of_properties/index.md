---
title: Enumerability and ownership of properties
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
---

{{JsSidebar("More")}}

В языке JavaScript свойства объектов могут быть перечисляемыми или неперечисляемыми (встречается вариант перевода: счётные или несчётные). Если внутреннему флагу \[\[Enumerable]] свойства присвоить значение true, то данное свойство становится перечисляемым. Это происходит по умолчанию для свойств, созданных простым присваиванием или через инициализацию свойств (свойства, определённые через [Object.defineProperty](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) получают по умолчанию значение флага \[\[Enumerable]] равным false). Перечисляемые свойства участвуют в итерации в цикле [for...in](/ru/docs/Web/JavaScript/Reference/Statements/for...in), если только имя свойства не [Символ](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Принадлежность свойства определяется тем, принадлежит ли оно непосредственно объекту или получено из цепочки прототипов. Также можно получить весь список свойств объекта. Ниже, в таблице, указаны возможные способы нахождения, получения и итерации свойств объектов. Некоторые из них нельзя использовать без дополнительного кода, примеры которого приведены после таблицы.

<table>
  <caption>
    Перечисляемость и принадлежность свойств - встроенные методы определения,
    получения и итерации
  </caption>
  <tbody>
    <tr>
      <th>Назначение</th>
      <th>Свойства объекта</th>
      <th>Свойства объекта и его прототипов</th>
      <th>Свойства из цепочки прототипов</th>
    </tr>
    <tr>
      <td>Определение</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Перечисляемые</th>
              <th scope="col">Неперечисляемые</th>
              <th scope="col">Перечисляемые и Неперечисляемые</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                    >hasOwnProperty</a
                  ></code
                >
                и !<code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                    >hasOwnProperty</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>Недоступно без дополнительного кода</td>
      <td>Недоступно без дополнительного кода</td>
    </tr>
    <tr>
      <td>Получение</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Перечисляемые</th>
              <th scope="col">Неперечисляемые</th>
              <th scope="col">Перечисляемые и Неперечисляемые</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/keys"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/keys"
                    >Object.keys</a
                  ></code
                >
              </td>
              <td>
                Получить
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >, выбрать свойства, не удовлетворяющие
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>Недоступно без дополнительного кода</td>
      <td>Недоступно без дополнительного кода</td>
    </tr>
    <tr>
      <td>Итерация</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Перечисляемые</th>
              <th scope="col">Неперечисляемые</th>
              <th scope="col">Перечисляемые и Неперечисляемые</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Итерация по массиву
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/keys"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/keys"
                    >Object.keys</a
                  ></code
                >
              </td>
              <td>
                Итерация по
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >, с выбранными свойствами, не удовлетворяющими
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
              </td>
              <td>
                Итерация по
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    title="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Перечисляемые</th>
              <th scope="col">Неперечисляемые</th>
              <th scope="col">Перечисляемые и Неперечисляемые</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/ru/docs/JavaScript/Reference/Statements/for...in"
                    title="/ru/docs/JavaScript/Reference/Statements/for...in"
                    >for..in</a
                  ></code
                >
              </td>
              <td>Недоступно без дополнительного кода</td>
              <td>Недоступно без дополнительного кода</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>Недоступно без дополнительного кода</td>
    </tr>
  </tbody>
</table>

## Доступ к свойствам по их перечисляемости/принадлежности

Хотим заметить, что данный алгоритм эффективен не для всех классов.

- Определение свойства: `SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) > -1`
- Итерация: `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});` (or use `filter()`, `map()`, etc.)

```js
var SimplePropertyRetriever = {
  getOwnEnumerables: function (obj) {
    return this._getPropertyNames(obj, true, false, this._enumerable);
    // Или можно использовать for..in, отфильтрованный по hasOwnProperty или проще: return Object.keys(obj);
  },
  getOwnNonenumerables: function (obj) {
    return this._getPropertyNames(obj, true, false, this._notEnumerable);
  },
  getOwnEnumerablesAndNonenumerables: function (obj) {
    return this._getPropertyNames(
      obj,
      true,
      false,
      this._enumerableAndNotEnumerable,
    );
    // Или можно использовать: return Object.getOwnPropertyNames(obj);
  },
  getPrototypeEnumerables: function (obj) {
    return this._getPropertyNames(obj, false, true, this._enumerable);
  },
  getPrototypeNonenumerables: function (obj) {
    return this._getPropertyNames(obj, false, true, this._notEnumerable);
  },
  getPrototypeEnumerablesAndNonenumerables: function (obj) {
    return this._getPropertyNames(
      obj,
      false,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  getOwnAndPrototypeEnumerables: function (obj) {
    return this._getPropertyNames(obj, true, true, this._enumerable);
    // Или можно использовать for..in
  },
  getOwnAndPrototypeNonenumerables: function (obj) {
    return this._getPropertyNames(obj, true, true, this._notEnumerable);
  },
  getOwnAndPrototypeEnumerablesAndNonenumerables: function (obj) {
    return this._getPropertyNames(
      obj,
      true,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  // Private static property checker callbacks
  _enumerable: function (obj, prop) {
    return obj.propertyIsEnumerable(prop);
  },
  _notEnumerable: function (obj, prop) {
    return !obj.propertyIsEnumerable(prop);
  },
  _enumerableAndNotEnumerable: function (obj, prop) {
    return true;
  },
  // По мотивам http://stackoverflow.com/a/8024294/271577
  _getPropertyNames: function getAllPropertyNames(
    obj,
    iterateSelfBool,
    iteratePrototypeBool,
    includePropCb,
  ) {
    var props = [];

    do {
      if (iterateSelfBool) {
        Object.getOwnPropertyNames(obj).forEach(function (prop) {
          if (props.indexOf(prop) === -1 && includePropCb(obj, prop)) {
            props.push(prop);
          }
        });
      }
      if (!iteratePrototypeBool) {
        break;
      }
      iterateSelfBool = true;
    } while ((obj = Object.getPrototypeOf(obj)));

    return props;
  },
};
```

## Определимость свойств

|                                | `in` | `for..in` | `hasOwnProperty` | `propertyIsEnumerable` | `in Object.keys` | `in Object.getOwnPropertyNames` |
| ------------------------------ | ---- | --------- | ---------------- | ---------------------- | ---------------- | ------------------------------- |
| Перечисляемые                  | true | true      | true             | true                   | true             | true                            |
| Неперечисляемые                | true | false     | true             | false                  | false            | true                            |
| Унаследованные Перечисляемые   | true | true      | false            | false                  | false            | false                           |
| Унаследованные Неперечисляемые | true | false     | false            | false                  | false            | false                           |

## Смотрите также

- [`in`](/ru/docs/JavaScript/Reference/Operators/in)
- [`for..in`](/ru/docs/JavaScript/Reference/Statements/for...in)
- [`hasOwnProperty`](/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [`propertyIsEnumerable`](/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
- [`getOwnPropertyNames`](/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`Object.keys`](/ru/docs/JavaScript/Reference/Global_Objects/Object/keys)
