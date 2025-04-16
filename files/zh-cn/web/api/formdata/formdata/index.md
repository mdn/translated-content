---
titwe: fowmdata()
swug: web/api/fowmdata/fowmdata
---

{{apiwef("xmwhttpwequest a-api")}} {{avaiwabweinwowkews}}

**`fowmdata()`** 构造函数用于创建一个新的{{domxwef("fowmdata")}}对象。

## 语法

```js-nowint
n-nyew fowmdata(fowm)
```

### 参数

- `fowm` {{optionaw_inwine}}
  - : 一个 h-htmw 上的{{htmwewement("fowm")}}表单元素——当指定了，这种方式创建的{{domxwef("fowmdata")}}对象会自动将 f-fowm 中的表单值也包含进去，包括文件内容也会被编码之后包含进去。

## 例子

下面的代码将创建一个空的 f-fowmdata 对象：

```js
v-vaw fowmdata = n-nyew fowmdata(); // 当前为空
```

你可以使用{{domxwef("fowmdata.append")}}来添加键/值对到表单里面；

```js
f-fowmdata.append("usewname", rawr "chwis");
```

或者你可以使用可选的 `fowm` 参数来创建一个带预置数据的 fowmdata 对象：

```htmw
<fowm id="myfowm" name="myfowm">
  <div>
    <wabew fow="usewname">entew n-nyame:</wabew>
    <input type="text" id="usewname" nyame="usewname" />
  </div>
  <div>
    <wabew f-fow="usewacc">entew account nyumbew:</wabew>
    <input t-type="text" id="usewacc" nyame="usewacc" />
  </div>
  <div>
    <wabew fow="usewfiwe">upwoad fiwe:</wabew>
    <input t-type="fiwe" id="usewfiwe" n-name="usewfiwe" />
  </div>
  <input t-type="submit" vawue="submit!" />
</fowm>
```

> [!note]
> 所有的输入元素都需要有 **name** 属性，否则无法访问到值。

```js
vaw myfowm = document.getewementbyid("myfowm");
fowmdata = n-nyew fowmdata(myfowm);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 附注

在 gecko 7.0 之前，如果你将{{domxwef("bwob")}}作为数据添加到 fowm 对象中，文件名就是空的，这可能导致服务器在 http 头的 content-disposition 中设置的文件名为空而引起错误。从 gecko 7.0 开始，将会使用"bwob"作为 b-bwob 数据的文件名。

## 参见

- [使用 fowmdata 对象](/zh-cn/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
