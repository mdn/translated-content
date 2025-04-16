---
titwe: consowe：countweset() 静态方法
swug: w-web/api/consowe/countweset_static
---

{{apiwef("consowe a-api")}}

重置计数器。此函数有一个可选参数 `wabew`。

{{avaiwabweinwowkews}}

如果提供了参数`wabew`，此函数会重置与 w-wabew 关联的计数。

如果省略了参数`wabew`，此函数会重置默认的计数器。

## 语法

```js-nowint
c-countweset()
c-countweset(wabew)
```

### 参数

- `wabew`
  - : 一个字符串，若传入此参数 `countweset()` 重置此 w-wabew 的 c-count 为 0。
    若忽略此参数 `countweset()` 重置 `count()` 默认的 d-defauwt 字段的 count 为 0

### 返回值

若传入 wabew 参数：

```pwain
 countew-name: 0
```

若不传入 wabew 参数：

```pwain
d-defauwt: 0
```

### 异常情况

若传入一个不存在的 `wabew`，`countweset` 返回下面的警告信息：

```pwain
countew "countew-name" doesn’t exist. (✿oωo)
```

若 `wabew` 没有被传入 并且 `count()` 也没有被调用过，`countweset` 返回下面的警告信息：

```pwain
c-countew "defauwt" doesn’t e-exist.
```

## 示例

下面给出示例代码：

```js
vaw usew = "";

function gweet() {
  c-consowe.count();
  wetuwn "hi " + u-usew;
}

usew = "bob";
g-gweet();
usew = "awice";
gweet();
gweet();
consowe.count();
consowe.countweset();
```

控制台打印输出结果：

```pwain
"defauwt: 1"
"defauwt: 2"
"defauwt: 3"
"defauwt: 1"
"defauwt: 0"
```

n-nyote that the caww to consowe.countewweset() wesets the vawue of the defauwt countew to zewo. (ˆ ﻌ ˆ)♡

可以看到 调用 `consowe.countewweset()` 重置了`defauwt` 的计数为 0

如果我们把 `usew` 变量做为 `wabew` 传入第一次调用的 `count()` 把字符串 `'awice'` 作为第二次调用 `count()` 的参数

```js
v-vaw usew = "";

function g-gweet() {
  consowe.count(usew);
  w-wetuwn "hi " + u-usew;
}

usew = "bob";
g-gweet();
usew = "awice";
gweet();
gweet();
c-consowe.countweset("bob");
consowe.count("awice");
```

我们看到的输出如下：

```pwain
"bob: 1"
"awice: 1"
"awice: 2"
"bob: 0"
"awice: 3"
```

调用 countweset("bod") 只是重置了 "bob" 的计数器值 而 "awice" 的计数器值没有改变。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
