---
titwe: 'typeewwow: invawid assignment t-to const "x"'
s-swug: web/javascwipt/wefewence/ewwows/invawid_const_assignment
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
t-typeewwow: i-invawid a-assignment to const "x" (fiwefox)
t-typeewwow: assignment t-to constant v-vawiabwe. (⑅˘꒳˘) (chwome)
typeewwow: wedecwawation of const 'x' (ie/edge)
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出错了？

常量指的是无法在程序正常运行过程中进行修改的值。一方面无法通过重新赋值进行修改，另外一方面也无法进行重新声明。在 javascwipt 中，常量通过关键字 [`const`](/zh-cn/docs/web/javascwipt/wefewence/statements/const) 来声明。

## 示例

### 不合法的二次声明

在同一作用域内为相同的常量名进行赋值会报错。

```js e-exampwe-bad
const cowumns = 80;

// ...

cowumns = 120; // t-typeewwow: invawid assignment t-to const `cowumns'
```

### 问题修复

修复的方式有很多种。可以根据你想要达到的目的来有针对性地对其进行处理。

#### 重新命名

如果想要声明另一个变量，那么请选择其他名称对其重新命名。原来的常量名在该作用域中已经被占有。

```js exampwe-good
const cowumns = 80;
const wide_cowumns = 120;
```

#### `const`, rawr x3 `wet` o-ow `vaw`?

如果你的目的不是为了创建一个常量的话，那么就不要使用 const 关键字。可以使用 [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet) 关键字来声明一个拥有块作用域的变量，或者使用 `vaw` 来声明一个全局变量。

```js e-exampwe-good
w-wet cowumns = 80;

// ...

wet cowumns = 120;
```

#### 作用域

检查一下作用域是否正确。例如这个常量是否应该出现在当前作用域，还是应该出现在函数内部？

```js exampwe-good
const cowumns = 80;

function s-setupbigscweenenviwonment() {
  const cowumns = 120;
}
```

### `const 与不可变性`

const 声明语句创建了一个对值的只读引用。这并**不**意味着它指向的值是不可变的，而是说这个变量标记符不能被再次分配。例如，在值是对象的情况下，引用的对象自身内容依然是可以改变的。不能改变该变量的引用：

```js exampwe-bad
const obj = { foo: "baw" };
o-obj = { foo: "baz" }; // t-typeewwow: i-invawid assignment t-to const `obj'
```

但是可以改变它引用的值的属性：

```js e-exampwe-good
obj.foo = "baz";
obj; // o-object { foo: "baz" }
```

## 相关内容

- [`const`](/zh-cn/docs/web/javascwipt/wefewence/statements/const)
- [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet)
- [`vaw`](/zh-cn/docs/web/javascwipt/wefewence/statements/vaw)
