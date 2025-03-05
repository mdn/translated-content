---
title: Classes
slug: Web/JavaScript/Reference/Classes
---

{{JsSidebar("Classes")}}

類別 (class) 是在 ECMAScript 6 中引入，用來作為建立新物件的模板。它能將程式碼封裝起來便於處理。
類別基於原型（prototype），但在語法和定義上，與 ES5 的類類別（class-like）有所不同。

## 定義類別

類別實際上是一種特別的函數([functions](/zh-TW/docs/Web/JavaScript/Reference/Functions))，就跟你可以定義函數敘述和函數宣告一樣，類別的語法有兩個元件：類別敘述([class expressions](/zh-TW/docs/Web/JavaScript/Reference/Operators/class))和類別宣告([class declarations](/zh-TW/docs/Web/JavaScript/Reference/Statements/class))。

### 類別宣告

一個定義類別的方法是使用類別宣告(**class declaration**)，要宣告一個類別，你要使用關鍵字 `class` 搭配類別名稱(此例為 "Polygon")。

```js
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### Hoisting

**函數宣告**和**類別宣告**的一個重要差別在於函數宣告是 {{Glossary("Hoisting", "hoisted")}} ，類別宣告則不是。 你需要先宣告你的類別，然後存取它，否則像是下面的程式碼就會丟出一個 {{jsxref("ReferenceError")}}:

```js example-bad
var p = new Polygon(); // ReferenceError

class Polygon {}
```

### 類別敘述

**類別敘述**是定義類別的另一種方法。類別敘述可以有名稱或是無名稱。賦予一個有名稱類別敘述的名稱只在類別主體(class's body)中有作用。（但是類別敘述的名稱可以透過該類別（不是實例）的 [.name](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/name) 屬性存取。）

```js
// unnamed
var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

注意：類別**敘述**跟上述提到的類別**宣告**一樣，都會受到 hoisting 的影響。

## 類別主體與方法定義

類別的主體指的是被大括號(`{}`)包含的部分，你可以在這裡面定義類別成員(members)，例如方法(methods)或建構子(constructors)。

### Strict mode

*類別宣告*與*類別敘述*的主體都會以[嚴格模式(strict mode](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode))執行，也就是說，建構子、靜態方法和原型方法、getter 及 setter 函數等都會以嚴格模式執行。

### 建構子

建構子(`constructor)`方法是一個特別的方法，用來建立和初始化一個`類別`的物件。一個類別只能有一個名為建構子(constructor)的特別方法。當類別中含有一個以上的`建構子`方法時，{{jsxref("SyntaxError")}} 將會被拋出。

一個建構子可以用關鍵字 `super` 來呼叫父類別的建構子。

### 原型方法

參見 [method definitions](/zh-TW/docs/Web/JavaScript/Reference/Functions/Method_definitions)。

```js
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Polygon(10, 10);

console.log(square.area); //100
```

### 靜態方法(Static methods)

關鍵字 [`static`](/zh-TW/docs/Web/JavaScript/Reference/Classes/static) 定義了一個類別的靜態方法，靜態方法不需要[實體化](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)它所屬類別的實例就可以被呼叫，它也**無法**被已實體化的類別物件呼叫。靜態方法經常被用來建立給應用程式使用的工具函數。

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### Instance properties

Instance properties 必須在 class 內定義:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### 宣告欄位

#### 宣告公共欄位

在 JavaScript 以宣告欄位改寫上面的程式，可以寫成如下：

```js
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

通過事前宣告欄位，類別定義變得更加 self-documenting ，並且欄位會一直存在。

另外，如上面例子所示，聲明字段可以不用設定默認值。

想知道更多資訊，可參閱 {{jsxref("Classes/Public_class_fields", "public class fields", "", 1)}}。

#### 宣告私有欄位

私有欄位的宣告，可以參考下方例子：

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

從類別外部使用私有欄位會出現錯誤；私有欄位只能在類別內讀寫。

通過宣告這些在類別以外不可見的東西，你可以確保類別的使用者不會倚賴類別的內部結構，畢竟一個類別的內部結構可能會隨著版本的更新而有所變化。

> [!NOTE]
> 私有欄位只能在建立類別時事先宣告。

私有欄位不像普通欄位一樣，可以在類別宣告完後才建立。

想知道更多資訊，可參閱 {{jsxref("Classes/Private_properties", "private class features", "", 1)}}。

### 裝箱、原型方法及靜態方法

當一個靜態方法或原形方法被呼叫，但沒有一個物件的值與 this 綁定時，被呼叫的函數中 this 關鍵字會是 **`undefined`**。在此情況下，自動裝箱（autoboxing）不會發生。即使我們在非嚴格模式中寫程式，此行為仍然會存在，這是因為所有的函式、定義方法、建構子、getter 和 setter 都是在嚴格模式中執行。因此，若我們沒有定義 this 的值，this 會是 **`undefined`**。

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // Animal {}
let speak = obj.speak;
speak(); // undefined

Animal.eat(); // class Animal
let eat = Animal.eat;
eat(); // undefined
```

若我們將上述程式用傳統的函式基礎類別(function based classes)表達，自動裝箱則會依據 this 在其被呼叫的函式中所綁定的值發生。

```js
function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

let obj = new Animal();
let speak = obj.speak;
speak(); // 全域物件

let eat = Animal.eat;
eat(); // 全域物件
```

## 用 `extends` 建立子類別

關鍵字 [`extends`](/zh-TW/docs/Web/JavaScript/Reference/Classes/extends) 是在類別宣告或是類別敘述中建立子類別的方法。

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}

var d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```

若在子類別中有建構子(constructor)，要使用 this 前則必須先呼叫 super()函式。

你也可以擴充(extends)傳統的函式基礎"類別"。

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a noise.");
};

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}

var d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```

注意類別並無法擴充一般(non-constructible 不可建構的)物件。如果你想要繼承自一般的物件，可以使用{{jsxref("Object.setPrototypeOf()")}}來達成。

```js
var Animal = {
  speak() {
    console.log(this.name + " makes a noise.");
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// 如果你沒有用以下的方法，當你呼叫speak時會出現TypeError
Object.setPrototypeOf(Dog.prototype, Animal);

var d = new Dog("Mitzie");
d.speak(); // Mitzie makes a noise.
```

## Species

你可能會希望在陣列的衍生類別 `MyArray` 中回傳陣列 ({{jsxref("Array")}}) ，Species 這個模式讓你能覆寫默認的建構子 (contructor)。

舉例來說，當你使用像 {{jsxref("Array.map", "map()")}} 這類會回傳默認建構子的方法時，你希望能回傳父物件 `Array` ，而不是 `MyArray` 物件。 {{jsxref("Symbol.species")}} 符號讓你做到這件事：

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}

var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## 用 `super` 呼叫父類別

關鍵字 [`super`](/zh-TW/docs/Web/JavaScript/Reference/Operators/super) 是用來提供一個類別呼叫其父類別的函數。

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + " roars.");
  }
}

var l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```

## ES5 繼承語法與 ES6 類別語法的比較

TBD

## 範例

TBD

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Functions](/zh-TW/docs/Web/JavaScript/Reference/Functions)
- [`class` declaration](/zh-TW/docs/Web/JavaScript/Reference/Statements/class)
- [`class` expression](/zh-TW/docs/Web/JavaScript/Reference/Operators/class)
- {{jsxref("Operators/super", "super")}}
- [Blog post: "ES6 In Depth: Classes"](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
- [extends](/zh-TW/docs/Web/JavaScript/Reference/Classes/extends)
