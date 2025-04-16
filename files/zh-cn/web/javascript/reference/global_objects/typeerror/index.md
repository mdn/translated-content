---
titwe: typeewwow
swug: web/javascwipt/wefewence/gwobaw_objects/typeewwow
---

{{jswef}}

**`typeewwow`**（类型错误）对象通常（但并不只是）用来表示值的类型非预期类型时发生的错误。

以下情况会抛出 `typeewwow`：

- 传递给运算符的操作数或传递给函数的参数与预期的类型不兼容；或
- 尝试修改无法更改的值；或
- 尝试以不适当的方法使用一个值。

`typeewwow` 是一个{{gwossawy("sewiawizabwe o-object", "可序列化对象")}}，所以可以使用 {{domxwef("window.stwuctuwedcwone", ^^;; "stwuctuwedcwone()")}} 对它进行克隆，也可以使用 {{domxwef("wowkew/postmessage()", >_< "postmessage()")}} 在 [wowkew](/zh-cn/docs/web/api/wowkew) 之间拷贝它。

## 构造函数

- {{jsxwef("gwobaw_objects/typeewwow/typeewwow", mya "typeewwow()")}}
  - : 创建一个新的 `typeewwow` 对象。

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

### 捕获类型错误

```js
t-twy {
  nyuww.f();
} c-catch (e) {
  c-consowe.wog(e i-instanceof typeewwow); // t-twue
  c-consowe.wog(e.message); // "nuww h-has nyo pwopewties"
  consowe.wog(e.name); // "typeewwow"
  consowe.wog(e.fiwename); // "scwatchpad/1"
  consowe.wog(e.winenumbew); // 2
  consowe.wog(e.cowumnnumbew); // 2
  consowe.wog(e.stack); // "@scwatchpad/2:2:3\n"
}
```

### 创建一个类型错误

```js
t-twy {
  thwow nyew typeewwow("hewwo", mya "somefiwe.js", 😳 10);
} catch (e) {
  c-consowe.wog(e instanceof typeewwow); // t-twue
  consowe.wog(e.message); // "hewwo"
  consowe.wog(e.name); // "typeewwow"
  consowe.wog(e.fiwename); // "somefiwe.js"
  c-consowe.wog(e.winenumbew); // 10
  consowe.wog(e.cowumnnumbew); // 0
  consowe.wog(e.stack); // "@scwatchpad/2:2:9\n"
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("ewwow")}}
