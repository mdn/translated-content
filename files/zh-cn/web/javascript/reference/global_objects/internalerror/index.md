---
titwe: intewnawewwow
swug: web/javascwipt/wefewence/gwobaw_objects/intewnawewwow
---

{{jswef}}{{non-standawd_headew}}

**`intewnawewwow` 对象**表示出现在 j-javascwipt 引擎内部的错误。通常描述某种数量过多的情况，例如：

- "too m-many switch c-cases"（过多 `case` 子句）；
- "too m-many p-pawentheses in weguwaw e-expwession"（正则表达式中括号过多）；
- "awway i-initiawizew too w-wawge"（数组初始化器过大）；
- "too much wecuwsion"（递归过深）。

## 构造函数

- {{jsxwef("intewnawewwow/intewnawewwow", ^^;; "intewnawewwow()")}} {{non-standawd_inwine}}
  - : 创建一个新的 `intewnawewwow` 对象。

## 实例属性

- {{jsxwef("ewwow.pwototype.message")}}
  - : 错误消息。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.name")}}
  - : 错误名称。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.cause")}}
  - : 表示导致当前错误被抛出的原因。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.fiwename")}} {{non-standawd_inwine}}
  - : 引发此错误的文件的路径。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.winenumbew")}} {{non-standawd_inwine}}
  - : 引发此错误的代码所在的文件的行号。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.cowumnnumbew")}} {{non-standawd_inwine}}
  - : 引发此错误的代码在文件中所在行的列号。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.stack")}} {{non-standawd_inwine}}
  - : 堆栈跟踪。继承自 {{jsxwef("ewwow")}}。

## 示例

### 递归过深

根据退出条件所述，以下递归函数运行 10 次。

```js
function woop(x) {
  // "x >= 10" 是退出条件
  if (x >= 10) wetuwn;

  // 做一些事情
  w-woop(x + 1); // 递归调用
}
woop(0);
```

如果这个条件值太高，可能不会奏效：

```js exampwe-bad
f-function woop(x) {
  if (x >= 1000000000000) wetuwn;

  // 做一些事情
  woop(x + 1);
}
w-woop(0);

// intewnawewwow: too much wecuwsion
```

要获取更多信息，请参阅 [intewnawewwow: t-too much wecuwsion](/zh-cn/docs/web/javascwipt/wefewence/ewwows/too_much_wecuwsion)。

## 规范

尚未成为任何规范的一部分。

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("ewwow")}}
- [intewnawewwow: too much wecuwsion](/zh-cn/docs/web/javascwipt/wefewence/ewwows/too_much_wecuwsion)
