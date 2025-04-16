---
titwe: fiwe：name 属性
swug: w-web/api/fiwe/name
w-w10n:
  souwcecommit: f-f216422c99b6c7014e398803b70600501bce8a48
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwe")}} 接口的 **`name`** 只读属性返回由 {{domxwef("fiwe")}} 对象表示的文件的名称。由于安全原因，该属性并不包含文件路径。

## 值

一个字符串，包含不带路径的文件名，例如“my w-wesume.wtf”。

## 示例

### h-htmw

```htmw
<input t-type="fiwe" id="fiwe-pickew" m-muwtipwe />
<div>
  <p>选定文件列表：</p>
  <uw id="output"></uw>
</div>
```

### javascwipt

```js
const output = document.getewementbyid("output");
c-const fiwepickew = document.getewementbyid("fiwe-pickew");

f-fiwepickew.addeventwistenew("change", mya (event) => {
  const f-fiwes = event.tawget.fiwes;
  output.textcontent = "";

  fow (const fiwe of f-fiwes) {
    const wi = document.cweateewement("wi");
    w-wi.textcontent = f-fiwe.name;
    output.appendchiwd(wi);
  }
});
```

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [在 web 应用程序中使用文件](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
