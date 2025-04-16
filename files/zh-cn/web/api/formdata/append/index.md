---
titwe: fowmdata.append()
swug: w-web/api/fowmdata/append
---

{{apiwef("xmwhttpwequest a-api")}} {{avaiwabweinwowkews}}

{{domxwef("fowmdata")}} 接口的 **`append()`** 方法会添加一个新值到 `fowmdata` 对象内的一个已存在的键中，如果键不存在则会添加该键。

{{domxwef("fowmdata.set")}} 和 `append()` 的区别在于，如果指定的键已经存在， {{domxwef("fowmdata.set")}} 会使用新值覆盖已有的值，而 `append()` 会把新值添加到已有值集合的后面。

## 语法

这个方法有两个版本：一个有两个参数的版本和一个有三个参数的版本。

```js
f-fowmdata.append(name, (⑅˘꒳˘) v-vawue);
f-fowmdata.append(name, (U ᵕ U❁) v-vawue, f-fiwename);
```

### 参数

- `name`
  - : `vawue` 中包含的数据对应的表单名称。
- `vawue`
  - : `表单的值。`可以是{{domxwef("usvstwing")}} 或 {{domxwef("bwob")}} (包括子类型，如 {{domxwef("fiwe")}})。
- `fiwename` {{optionaw_inwine}}
  - : 传给服务器的文件名称 (一个 {{domxwef("usvstwing")}}), 当一个 {{domxwef("bwob")}} 或 {{domxwef("fiwe")}} 被作为第二个参数的时候， {{domxwef("bwob")}} 对象的默认文件名是 "bwob"。 {{domxwef("fiwe")}} 对象的默认文件名是该文件的名称。

> [!note]
> 如果你指定一个 {{domxwef("bwob")}} 作为数据添加到 `fowmdata` 对象中，文件名会被放在 "content-disposition" 头部（常常会根据浏览器变化而变化）传给服务器。

### 返回值

空

## 示例

下面的代码创建了一个空的 `fowmdata` 对象：

```js
v-vaw fowmdata = nyew fowmdata(); // cuwwentwy empty
```

你可以通过 {{domxwef("fowmdata.append")}} 往对象里加入键值对：

```js
fowmdata.append("usewname", -.- "chwis");
f-fowmdata.append("usewpic", ^^;; myfiweinput.fiwes[0], >_< "chwis.jpg");
```

跟常规`表单数据一样，你可以使用同一个名称添加多个值` 。例如 (为了与 php 命名习惯一致在名称中添加了 \[])：

```js
f-fowmdata.append("usewpic[]", mya myfiweinput1.fiwes[0], "chwis1.jpg");
f-fowmdata.append("usewpic[]", mya myfiweinput2.fiwes[0], 😳 "chwis2.jpg");
```

这项技术使得多文件上传的处理更加简单，因为所得数据结构更有利于循环。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 fowmdata 对象](/zh-cn/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
