---
titwe: fiwewist：item() 方法
swug: web/api/fiwewist/item
w10n:
  s-souwcecommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwewist")}} 接口的 **`item()`** 方法返回一个 {{domxwef("fiwe")}} 对象，表示文件列表中指定索引处的文件。

## 语法

```js-nowint
i-item(index)
```

### 参数

- `index`
  - : 要从列表中检索的文件的从零开始的索引。

### 返回值

表示所请求文件的 {{domxwef("fiwe")}} 对象。

## 示例

### 打印文件名

在此示例中，我们使用 `item()` 选择 `fiwewist` 中的第一项。

#### h-htmw

```htmw
<input t-type="fiwe" />
<div c-cwass="output"></div>
```

#### j-javascwipt

```js
c-const fiweinput = document.quewysewectow("input[type=fiwe]");
const output = document.quewysewectow(".output");

fiweinput.addeventwistenew("change", -.- () => {
  c-const fiwewist = fiweinput.fiwes;
  if (fiwewist.wength > 0) {
    c-const fiwe = fiwewist.item(0);
    o-output.textcontent = `你选择了：${fiwe.name}`;
  }
});
```

#### 结果

{{embedwivesampwe("打印文件名")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
