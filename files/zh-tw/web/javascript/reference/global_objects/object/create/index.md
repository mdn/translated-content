---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
---

{{JSRef}}

**`Object.create()`** 指定其原型物件與屬性，創建一個新物件。

## 語法

```js-nolint
Object.create(proto[, propertiesObject])
```

### 參數

- `proto`
  - : 指定新物件的原型 (prototype) 物件。
- `propertiesObject`
  - : 選用，為一物件。如有指定且非 {{jsxref("undefined")}}，則此參數物件中可列舉出的屬性 (即參數物件自身定義的屬性，並非指原型鏈上的 `enumerable` 特性 ) 對應其屬性名稱，根據其屬性敘述元 (property descriptors) 加進新創建的物件。這些屬性對應到 {{jsxref("Object.defineProperties()")}} 的第二個參數。

### 回傳

具有指定原型物件與屬性的新物件。

### 例外

如果 `proto` 參數不是 {{jsxref("null")}} 或一個物件，將會拋出 {{jsxref("TypeError")}} 例外。

## 範例

### 使用 `Object.create()` 實現類別繼承

下方是如何使用 `Object.create()` 去實現類別繼承的示範，此為 JavaScript 支援的單一繼承.。

```js
// Shape - 父類別
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父類別的方法
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - 子類別
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子類別擴展(extends)父類別
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

也可像 mixin 繼承多個物件。

```js
function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

// 繼承一個父類別
MyClass.prototype = Object.create(SuperClass.prototype);
// mixin另一個父類別
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// 重新指定建構式
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function () {
  // do a thing
};
```

[Object.assign](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 複製 OtherSuperClass 原型上的所有屬性到 MyClass 的原型上，使所有 MyClass 的實例都能使用。Object.assign 為 ES2015 標準且[有 polyfill](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill)。如需支援較舊的瀏覽器，可使用第三方套件實現如 [jQuery.extend()](https://api.jquery.com/jQuery.extend/) 或 [.assign()](https://lodash.com/docs/#assign) 。

### `propertiesObject` 參數的使用

```js
var o;

// 建立以null為原型的物件
o = Object.create(null);

o = {};
// 等同於:
o = Object.create(Object.prototype);

// Example where we create an object with a couple of sample properties.
// (Note that the second parameter maps keys to *property descriptors*.)
o = Object.create(Object.prototype, {
  // foo 為數值屬性
  foo: { writable: true, configurable: true, value: "hello" },
  // bar 為 getter-and-setter 訪問屬性
  bar: {
    configurable: false,
    get: function () {
      return 10;
    },
    set: function (value) {
      console.log("Setting `o.bar` to", value);
    },
    /* with ES5 Accessors our code can look like this
    get function() { return 10; },
    set function(value) { console.log('setting `o.bar` to', value); } */
  },
});

function Constructor() {}
o = new Constructor();
// 等同於:
o = Object.create(Constructor.prototype);
// Of course, if there is actual initialization code in the
// Constructor function, the Object.create() cannot reflect it

// 創建一個新物件，指定原型是全新的空物件，並加入值為 42 的屬性'p'
o = Object.create({}, { p: { value: 42 } });

// 屬性敘述元 writable, enumerable , configurable 未定義，預設皆為 false
o.p = 24;
o.p;
// 42

o.q = 12;
for (var prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// to specify an ES3 property
o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);
```

## Polyfill

此 polyfill 涵蓋了主要的使用情境：指定一個原型創建一個新的物件，第二個參數為選用。

要注意的是在 ES5 的 `Object.create` 中，`[[Prototype]]` 可以為 `null`，但在 ECMAScript 5 以前的版本，polyfill 會因為繼承限制（limitation inherent）而不支援此情形。

```js
if (typeof Object.create !== "function") {
  Object.create = function (proto, propertiesObject) {
    if (
      !(
        proto === null ||
        typeof proto === "object" ||
        typeof proto === "function"
      )
    ) {
      throw TypeError("Argument must be an object, or null");
    }
    var temp = new Object();
    temp.__proto__ = proto;
    if (typeof propertiesObject === "object")
      Object.defineProperties(temp, propertiesObject);
    return temp;
  };
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- John Resig's post on [getPrototypeOf()](http://ejohn.org/blog/objectgetprototypeof/)
