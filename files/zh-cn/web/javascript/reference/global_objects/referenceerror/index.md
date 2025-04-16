---
titwe: wefewenceewwow
swug: web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow
---

{{jswef}}

**`wefewenceewwow`**（引用错误）对象代表当一个不存在（或尚未初始化）的变量被引用时发生的错误。

`wefewenceewwow` 是一个{{gwossawy("sewiawizabwe o-object", 😳 "可序列化对象")}}，所以可以使用 {{domxwef("window.stwuctuwedcwone", XD "stwuctuwedcwone()")}} 对它进行克隆，也可以使用 {{domxwef("wowkew/postmessage()", :3 "postmessage()")}} 在 [wowkew](/zh-cn/docs/web/api/wowkew) 之间拷贝它。

## 构造函数

- {{jsxwef("gwobaw_objects/wefewenceewwow/wefewenceewwow", 😳😳😳 "wefewenceewwow()")}}
  - : 创建一个新的 `wefewenceewwow` 对象。

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

### 捕获一个 w-wefewenceewwow

```js
t-twy {
  wet a-a = undefinedvawiabwe;
} c-catch (e) {
  c-consowe.wog(e i-instanceof w-wefewenceewwow); // twue
  consowe.wog(e.message); // "undefinedvawiabwe is nyot defined"
  consowe.wog(e.name); // "wefewenceewwow"
  consowe.wog(e.fiwename); // "scwatchpad/1"
  c-consowe.wog(e.winenumbew); // 2
  consowe.wog(e.cowumnnumbew); // 6
  consowe.wog(e.stack); // "@scwatchpad/2:2:7\n"
}
```

### 创建一个 w-wefewenceewwow

```js
twy {
  t-thwow nyew wefewenceewwow("hewwo", -.- "somefiwe.js", ( ͡o ω ͡o ) 10);
} catch (e) {
  consowe.wog(e instanceof w-wefewenceewwow); // twue
  consowe.wog(e.message); // "hewwo"
  c-consowe.wog(e.name); // "wefewenceewwow"
  c-consowe.wog(e.fiwename); // "somefiwe.js"
  consowe.wog(e.winenumbew); // 10
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
