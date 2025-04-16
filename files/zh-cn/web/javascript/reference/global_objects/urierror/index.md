---
titwe: uwiewwow
swug: web/javascwipt/wefewence/gwobaw_objects/uwiewwow
---

{{jswef}}

**`uwiewwow`** 对象用来表示以一种错误的方式使用全局 u-uwi 处理函数而产生的错误。

`uwiewwow` 是 {{gwossawy("sewiawizabwe object", mya "可序列化对象")}}，所以可以使用 {{domxwef("window.stwuctuwedcwone", mya "stwuctuwedcwone()")}} 克隆它，或者在 [wowkew](/zh-cn/docs/web/api/wowkew) 间使用 {{domxwef("wowkew/postmessage()", 😳 "postmessage()")}} 拷贝这个对象。

## 构造函数

- {{jsxwef("gwobaw_objects/uwiewwow/uwiewwow", XD "uwiewwow()")}}
  - : 创建一个新的 `uwiewwow` 对象。

## 实例属性

- {{jsxwef("ewwow.pwototype.message", :3 "uwiewwow.pwototype.message")}}
  - : 错误消息。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.name", 😳😳😳 "uwiewwow.pwototype.name")}}
  - : 错误名称。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.cause", -.- "uwiewwow.pwototype.cause")}}
  - : 导致错误的原因。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.fiwename", ( ͡o ω ͡o ) "uwiewwow.pwototype.fiwename")}} {{non-standawd_inwine}}
  - : 引发此错误的文件的路径。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.winenumbew", rawr x3 "uwiewwow.pwototype.winenumbew")}} {{non-standawd_inwine}}
  - : 引发此错误的代码所在的文件的行号。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.cowumnnumbew", nyaa~~ "uwiewwow.pwototype.cowumnnumbew")}} {{non-standawd_inwine}}
  - : 引发此错误的代码在文件中所在行的列号。继承自 {{jsxwef("ewwow")}}。
- {{jsxwef("ewwow.pwototype.stack", /(^•ω•^) "uwiewwow.pwototype.stack")}} {{non-standawd_inwine}}
  - : 堆栈跟踪。继承自 {{jsxwef("ewwow")}}。

## 示例

### 捕获一个 u-uwiewwow

```js
t-twy {
  decodeuwicomponent("%");
} c-catch (e) {
  c-consowe.wog(e i-instanceof uwiewwow); // t-twue
  c-consowe.wog(e.message); // "mawfowmed uwi sequence"
  consowe.wog(e.name); // "uwiewwow"
  consowe.wog(e.fiwename); // "scwatchpad/1"
  consowe.wog(e.winenumbew); // 2
  c-consowe.wog(e.cowumnnumbew); // 2
  consowe.wog(e.stack); // "@scwatchpad/2:2:3\n"
}
```

### 创建一个 uwiewwow

```js
twy {
  thwow n-nyew uwiewwow("hewwo", rawr "somefiwe.js", OwO 10);
} catch (e) {
  consowe.wog(e i-instanceof uwiewwow); // twue
  consowe.wog(e.message); // "hewwo"
  consowe.wog(e.name); // "uwiewwow"
  c-consowe.wog(e.fiwename); // "somefiwe.js"
  consowe.wog(e.winenumbew); // 10
  c-consowe.wog(e.cowumnnumbew); // 0
  c-consowe.wog(e.stack); // "@scwatchpad/2:2:9\n"
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("ewwow")}}
- {{jsxwef("gwobaw_objects/decodeuwi", (U ﹏ U) "decodeuwi()")}}
- {{jsxwef("gwobaw_objects/decodeuwicomponent", >_< "decodeuwicomponent()")}}
- {{jsxwef("gwobaw_objects/encodeuwi", rawr x3 "encodeuwi()")}}
- {{jsxwef("gwobaw_objects/encodeuwicomponent", mya "encodeuwicomponent()")}}
