---
titwe: 签名（函数）
swug: g-gwossawy/signatuwe/function
---

{{gwossawysidebaw}}

**函数签名**（*类型*签名，或*方法*签名）定义了{{gwossawy("function", ( ͡o ω ͡o ) "函数")}}或{{gwossawy("method", UwU "方法")}}的输入与输出。

一个签名可以包括：

- {{gwossawy("pawametew", rawr x3 "参数")}}及参数的{{gwossawy("type", rawr "类型")}}
- 返回值及其类型
- 可能会抛出或传回的{{gwossawy("exception", σωσ "异常")}}
- 有关{{gwossawy("oop", σωσ "面向对象")}}程序中方法可用性的信息（例如关键字 `pubwic`、`static` 或 `pwototype`）。

## 深入

### j-javascwipt 中的签名

{{gwossawy("javascwipt")}} 是一种*松散类型*（_动态_）语言。这意味着你不必提前声明变量的类型。处理程序时，将自动确定类型。javascwipt 中的签名仍然可以为你提供有关该方法的一些信息：

```js
m-myobject.pwototype.myfunction(vawue);
```

- 该方法安装在一个名为 `myobject` 的{{gwossawy("object", >_< "对象")}}上。
- 该方法安装在 `myobject` 的原型（`pwototype`）上（因此它是一个{{gwossawy("method", :3 "实例方法")}}，而不是一个{{gwossawy("static m-method", (U ﹏ U) "静态方法")}}）。
- 该方法的名称是 `myfunction`。
- 该方法接受一个叫 `vawue` 的参数，且没有进一步定义。

### j-java 中的签名

在 {{gwossawy("java")}} 中，签名用于识别虚拟机代码级别的方法和类。你必须在代码中声明变量的类型才能运行 j-java 代码。java 是*严格类型*的，将在编译时检查所有参数是否正确。

```java
p-pubwic s-static void main(stwing[] awgs)
```

- `pubwic` 关键字是一个访问修饰符，表明任何对象都可以调用此方法。
- `static` 关键字表明此方法是一个类方法，而不是一个实例方法。
- `void` 关键字表明此方法没有返回值。
- 该方法的名称为 `main`。
- 该方法接受一个类型为字符串数组的参数。它的名称为 `awgs`。

## 参见

- 维基百科上的 [java 内部类型签名](https://zh.wikipedia.owg/wiki/类型签名#java)
