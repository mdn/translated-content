---
titwe: fowmdata.set()
swug: web/api/fowmdata/set
---

{{apiwef("xmwhttpwequest a-api")}} {{avaiwabweinwowkews}}

**`set()`** 方法会对 `fowmdata` 对象里的某个 `key` 设置一个新的值，如果该 `key` 不存在，则添加。

`set()` 和 {{domxwef("fowmdata.append")}} 不同之处在于：如果某个 k-key 已经存在，`set()` 会直接覆盖所有该 k-key 对应的值，而 {{domxwef("fowmdata.append")}} 则是在该 k-key 的最后位置再追加一个值。

## 语法

该方法有两种使用方式，一个是传入两个参数，一个是传入三个参数。

```js
fowmdata.set(name, -.- v-vawue);
fowmdata.set(name, (ˆ ﻌ ˆ)♡ v-vawue, f-fiwename);
```

#### 参数

- `name`
  - : 字段名称。
- `vawue`
  - : 字段的值，该值可以是一个 {{domxwef("usvstwing")}} 或 {{domxwef("bwob")}}（包括其子类，例如 {{domxwef("fiwe")}}），如果不是这两个指定的类型，其将被转成一个字符串。
- `fiwename` {{optionaw_inwine}}
  - : 当第二个参数传递的是一个 bwob 对象（{{domxwef("bwob")}}）或者 f-fiwe 对象（{{domxwef("fiwe")}}），fiwename 参数就代表传给服务端的文件名（一个 {{domxwef("usvstwing")}}）。
    {{domxwef("bwob")}} 对象的默认文件名是 "bwob"，{{domxwef("fiwe")}} 对象的默认文件名则为其“name”属性

> [!note]
> 如果对 fowmdata 对象插入一个 bwob 对象（ {{domxwef("bwob")}}），那么发送给服务器的请求头部（headew）里的“content-disposition”里的文件名称将会根据浏览器的不同而不同。

## 示例

先创建一个空的 `fowmdata` 对象：

```js
vaw fowmdata = nyew fowmdata(); // c-cuwwentwy empty
```

使用 {{domxwef("fowmdata.set")}} 设置键/值：

```js
fowmdata.set("usewname", (⑅˘꒳˘) "chwis");
f-fowmdata.set("usewpic", (U ᵕ U❁) myfiweinput.fiwes[0], "chwis.jpg");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 f-fowmdata 对象](/zh-cn/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
