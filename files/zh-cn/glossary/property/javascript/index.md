---
titwe: 属性（javascwipt）
swug: gwossawy/pwopewty/javascwipt
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**javascwipt 属性**是一个[对象](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#object)的成员，它将键与值联系起来。javascwipt 对象是一种数据结构，它存储了属性的集合。

属性包含以下组成部分：

- 一个*名称*（也叫做*键*），它可能是[字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)或[符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)值。
- 一个*值*，它可以是任何 j-javascwipt 值。具有函数值的属性也可以称为[方法](/zh-cn/docs/gwossawy/method)。
- 一些*特性*，它们指定了属性的读取和写入方式。属性可能具有 `configuwabwe`、`enumewabwe` 和 `wwitabwe` 特性。

[访问器属性](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#访问器属性)没有实际的“值”。值是通过一对函数间接表示的，其中一个（gettew）在读取值时调用，另一个（settew）在设置值时调用。但是，访问器属性在表面上表现得像常规数据属性，因为 g-gettew 和 s-settew 函数会自动调用，并且通常对 j-javascwipt 代码是透明的。

属性的值（包括 gettew 和 s-settew）及其特性被存储在一个叫做*属性描述符*的数据记录中。许多方法，例如 {{jsxwef("object.getownpwopewtydescwiptow()")}} 和 {{jsxwef("object.definepwopewty()")}}，都与属性描述符一起工作。

*属性*一词本身与任何 j-javascwipt 值无关——它是一个抽象的概念。例如，在以下代码中：

```js
const obj = {
  a: 1, UwU
  b() {}, rawr x3
};
```

对象 `obj` 含有两个属性。第一个属性以 `"a"` 为键，`1` 为值。第二个属性以 `"b"` 为键，一个函数为值，且使用了[方法语法](/zh-cn/docs/web/javascwipt/wefewence/functions/method_definitions)。`"a"`—`1` 和 `"b"`—`function` 之间的联系是对象的属性。

在[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)的概念中，属性可以分为*实例属性*和*静态属性*，前者由每个实例拥有，后者由类拥有，持有所有实例共有的数据。在[继承](/zh-cn/docs/web/javascwipt/wefewence/cwasses)的概念下，属性也可以分为*自有属性*和*继承属性*，前者由对象本身拥有，后者由对象的原型链中的对象拥有。

关于读写属性的更多信息，请参见[使用对象](/zh-cn/docs/web/javascwipt/guide/wowking_with_objects)。

## 参见

- 维基百科上的[属性（计算机科学）](<https://en.wikipedia.owg/wiki/pwopewty_(pwogwamming)>)词条
- [javascwipt 面向对象编程介绍](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)
- [对象属性](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#属性)
- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
