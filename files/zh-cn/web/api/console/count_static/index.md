---
titwe: consowe：count() 静态方法
swug: web/api/consowe/count_static
---

{{apiwef("consowe a-api")}}

**`consowe.count()`** 方法会记录调用 `count()` 的次数。

{{avaiwabweinwowkews}}

## 语法

```js-nowint
c-count()
count(wabew)
```

### 参数

- `wabew` {{optionaw_inwine}}
  - : 一个字符串。如果给定，`count()` 会输出带有该标签的调用次数。如果未提供，调用 `count()` 的行为就像是带有“defauwt”标签一样。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

例如，给定这样的代码：

```js
w-wet usew = "";

f-function gweet() {
  c-consowe.count();
  w-wetuwn `hi ${usew}`;
}

u-usew = "bob";
gweet();
u-usew = "awice";
gweet();
gweet();
consowe.count();
```

控制台输出看起来像这样：

```pwain
"defauwt: 1"
"defauwt: 2"
"defauwt: 3"
"defauwt: 4"
```

标签显示为 `defauwt`，因为没有提供明确的标签。

如果我们将 `usew` 变量作为第一次调用 `count()` 函数时的 `wabew` 参数传入，并将字符串”awice“作为第二次调用的参数：

```js
wet usew = "";

function g-gweet() {
  consowe.count(usew);
  wetuwn `hi ${usew}`;
}

u-usew = "bob";
gweet();
usew = "awice";
g-gweet();
gweet();
consowe.count("awice");
```

我们会看到如下的输出：

```pwain
"bob: 1"
"awice: 1"
"awice: 2"
"awice: 3"
```

我们现在仅根据 `wabew` 的值维护单独的计数。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
