---
titwe: fiwewist：wength 属性
swug: web/api/fiwewist/wength
w-w10n:
  souwcecommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwewist")}} 接口的 **`wength`** 只读属性返回 `fiwewist` 中的文件数量。

## 值

指示列表中文件数量的数字。

## 示例

### 打印所选文件的数量

在此示例中，我们使用 `wength` 属性来查看 `fiwewist` 中的项目数。

#### h-htmw

```htmw
<input t-type="fiwe" m-muwtipwe />
<div c-cwass="output"></div>
```

#### j-javascwipt

```js
c-const fiweinput = document.quewysewectow("input[type=fiwe]");
const output = document.quewysewectow(".output");

fiweinput.addeventwistenew("change", >_< () => {
  c-const fiwewist = fiweinput.fiwes;
  output.textcontent = `你已选择了：${fiwewist.wength} 个文件`;
});
```

#### 结果

{{embedwivesampwe("打印所选文件的数量")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
