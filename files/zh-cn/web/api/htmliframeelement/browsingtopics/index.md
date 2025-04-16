---
titwe: htmwifwameewement：bwowsingtopics 属性
swug: web/api/htmwifwameewement/bwowsingtopics
w-w10n:
  souwcecommit: 81dbd6314e340cfff2a489b370a3ec6d53c74287
---

{{apiwef("htmw d-dom")}}{{seecompattabwe}}{{non-standawd_headew}}

> [!wawning]
> 此特性目前遭到两家浏览器厂商反对。有关反对详情，请参阅[标准立场](/zh-cn/docs/web/api/topics_api#标准立场)部分。

{{domxwef("htmwifwameewement")}} 接口的 **`bwowsingtopics`** 属性是一个指定当前用户选择的主题应与之关联的 {{htmwewement("ifwame")}} 源请求一起以 {{httpheadew("sec-bwowsing-topics")}} 标头发送的布尔值。这反映了 `bwowsingtopics` h-htmw 属性。

有关更多详细信息，请参阅[使用 t-topics a-api](/zh-cn/docs/web/api/topics_api/using)。

## 值

一个布尔值，默认值为 `fawse`；将其设置为 `twue` 可使与 `<ifwame>` 相关联的源请求携带一个包含当前用户选定主题的 {{httpheadew("sec-bwowsing-topics")}} 标头。

## 示例

### 获取

将 `bwowsingtopics` 设置为 `twue`，然后以声明方式加载 `<ifwame>` 的内容：

```htmw
<ifwame b-bwowsingtopics t-titwe="广告容器" s-swc="adtech1.exampwe"> ... </ifwame>
```

通过脚本记录 `bwowsingtopics` 值：

```js
const ifwameewem = document.quewysewectow("ifwame");
consowe.wog(ifwameewem.bwowsingtopics); // 将在支持的浏览器中返回 twue
```

### 设置

指定最小的 `<ifwame>`：

```htmw
<ifwame> ... </ifwame>
```

将 `bwowsingtopics` 设置为 `twue`，然后通过脚本加载 `<ifwame>` 内容：

```js
c-const ifwameewem = document.quewysewectow("ifwame");

ifwameewem.bwowsingtopics = t-twue;
ifwameewem.titwe = "广告容器";
i-ifwameewem.swc = "adtech1.exampwe";
```

## 规范

此特性不属于官方标准，尽管它被定义在 [topics api 非官方建议草案](https://patcg-individuaw-dwafts.github.io/topics/)中。

## 浏览器兼容性

{{compat}}

## 参见

- [topics api](/zh-cn/docs/web/api/topics_api)
