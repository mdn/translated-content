---
title: Signature (functions)（函数签名）
slug: Glossary/Signature/Function
---

{{GlossarySidebar}}

一个**函数签名 (**或*类型*签名，或*方法*签名**)** 定义了 {{Glossary("Function", "函数")}} 或 {{Glossary("Method", "方法")}} 的输入与输出。

一个签名可以包括：

- {{Glossary("Parameter", "参数")}} 及参数的 {{Glossary("Type", "类型")}}
- 一个返回值及其类型
- 可能会抛出或传回的 {{Glossary("Exception", "异常")}}
- 有关 {{Glossary("OOP", "面向对象")}} 程序中方法可用性的信息 (例如关键字 `public`、`static` 或 `prototype)`。

## 深入

### JavaScript 中的签名

{{Glossary("JavaScript")}} 是一种*松散类型* 或 *动态*语言。这意味着您不必提前声明变量的类型。处理程序时，将自动确定类型。JavaScript 中的签名仍然可以为您提供有关该方法的一些信息：

```js
MyObject.prototype.myFunction(value);
```

- 该方法是安装在一个名为 `MyObject` 的 {{Glossary("object", "对象")}}上。
- 该方法安装在 `MyObject` 的原型上 (因此它是一个{{Glossary("instance method", "实例方法")}})，而不是一个 {{Glossary("static method", "静态方法/类方法")}} 。
- 该方法的名称是 `myFunction`。
- 该方法接受一个叫 `value` 的参数，且没有进一步定义。

### Java 中的签名

在 {{Glossary("Java")}} 中，签名用于识别虚拟机代码级别的方法和类。你必须在代码中声明变量的类型才能运行 Java 代码。Java 是*严格类型* 的，将在编译时检查所有参数是否正确。

```java
public static void main(String[] args)
```

- `public` 关键字是一个访问修饰符，指示任何对象都可以调用此方法。
- `static` 关键字指示此方法是一个类方法，而不是一个实例方法。
- `void` 关键字表指示此方法没有返回值。
- 该方法的名称为 `main`。
- 该方法接受一个类型为 String Array 的参数。它的名是 `args`。

## 了解更多

### `基本知识`

- [Java 内部类型签名](https://zh.wikipedia.org/wiki/Type_signature#Java) 在维基百科上
