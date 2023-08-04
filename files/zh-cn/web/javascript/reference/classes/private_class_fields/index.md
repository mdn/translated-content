---
title: 类私有域
slug: Web/JavaScript/Reference/Classes/Private_class_fields
---

{{JsSidebar("Classes")}}

类属性在默认情况下是{{jsxref('Classes/Public_class_fields','公有')}}的，但可以使用增加哈希前缀 `#` 的方法来定义私有类字段，这一隐秘封装的类特性由 JavaScript 自身强制执行。

## 语法

```js
class ClassWithPrivateField {
  #privateField;
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return "hello world";
  }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;
}

class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return "hello world";
  }
}
```

## 示例

### 私有字段

私有字段包括私有实例字段和私有静态字段。

#### 私有实例字段

私有实例字段使用 `#名称`（发音为“哈希名称”）声明，这些名称以 `#` 开头。即 `#` 是名称本身的一部分，声明和访问时也需要加上。私有字段在类声明的构造方法中就可被访问。

从作用域之外引用 `#` 名称、内部在未声明的情况下引用私有字段、或尝试使用 `delete` 移除声明的字段都会抛出语法错误。

```js example-bad
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
    delete this.#privateField;   // 语法错误
    this.#undeclaredField = 444; // 语法错误
  }
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42;   // 语法错误
```

> **备注：** 可以使用 [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 运算符检查私有字段（或私有方法）是否存在。当私有字段或私有方法存在时，运算符返回 `true`，否则返回 `false`。

类似于公有字段，私有字段在构造（construction）基类或调用子类的 `super()` 方法时被添加到类实例中。

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}

class SubClass extends ClassWithPrivateField {
  #subPrivateField;

  constructor() {
    super();
    this.#subPrivateField = 23;
  }
}

new SubClass();
// SubClass {#privateField: 42, #subPrivateField: 23}
```

#### 私有静态字段

私有静态字段在解析类结构时被添加到类的构造方法（constructor）中。且静态变量只能被静态方法调用的限制仍然成立。

```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }
}

console.log(ClassWithPrivateStaticField.publicStaticMethod() === 42);
// true
```

私有静态字段有一个来源限制：只有定义该私有静态字段的类能访问该字段。使用 **`this`** 可能会出现意想不到的行为。在下方的例子中，`this` 是 `SubClass` 类（而不是 `BaseClassWithPrivateStaticField` 类）的引用，所以尝试调用 `SubClass.basePublicStaticMethod()` 会抛出 `TypeError`。

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42;
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends BaseClassWithPrivateStaticField {}

let error = null;

try {
  SubClass.basePublicStaticMethod();
} catch (e) {
  error = e;
}

console.log(error instanceof TypeError);
// true
console.log(error);
// TypeError: Cannot write private member #PRIVATE_STATIC_FIELD
// to an object whose class did not declare it
```

### 私有方法

#### 私有实例方法

私有实例方法是类实例上可用的方法，它们的访问方式与私有实例字段相同。

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return "hello world";
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// hello world
```

私有实例方法可以是生成器方法、异步方法或异步生成器方法，也可以是私有的 getter 和 setter。

```js
class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `🎬${this.#message}🛑`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = "hello world";
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor();
// 🎬hello world🛑
```

#### 私有静态方法

像它们的公有等价方法一样，私有静态方法是在类本身而非类的实例上调用的。像私有静态字段一样，只能从类声明内部访问它们。

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod1() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }

  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
// true
console.log(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
// true
```

私有静态方法可以是生成器方法，异步方法或异步生成器方法。

前面提到的私有静态字段的限制同样适用于私有静态方法。同样地，使用 **`this`** 可能会出现意想不到的行为。在下方的例子中，`this` 是 `Derived` 类（而不是 `Base` 类）的引用，所以尝试调用 `Derived.publicStaticMethod2()` 会抛出 `TypeError`。

```js
class Base {
  static #privateStaticMethod() {
    return 42;
  }
  static publicStaticMethod1() {
    return Base.#privateStaticMethod();
  }
  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1());
// 42
console.log(Derived.publicStaticMethod2());
// TypeError: Cannot read private member #privateStaticMethod
// from an object whose class did not declare it
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Working with private class features](/zh-CN/docs/Web/JavaScript/Guide/Working_With_Private_Class_Features)
- [Public class fields](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [The
  Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
- [Public and private class fields](https://v8.dev/features/class-fields)
  article at the v8.dev site
