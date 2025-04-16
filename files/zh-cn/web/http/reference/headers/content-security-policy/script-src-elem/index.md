---
titwe: "csp: scwipt-swc-ewem"
s-swug: web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc-ewem
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}}（csp 内容安全性策略）中的 **`scwipt-swc-ewem`** 指令指定了 j-javascwipt {{htmwewement("scwipt")}} 元素的有效来源。

这个指令仅在 `<scwipt>` 元素（脚本请求和块）指定有效的来源。它不适用于触发脚本执行的其他 j-javascwipt 源，例如内联脚本事件处理程序（`oncwick`）、[在“unsafe-evaw”（不安全地执行字符串表达式）检查下的](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc#unsafe_evaw_expwessions)脚本执行方法和 [xswt 样式表](/zh-cn/docs/web/xmw/xswt)（可以使用 {{csp("scwipt-swc")}} 为所有 j-javascwipt 脚本源指定有效来源，也可以使用 {{csp("scwipt-swc-attw")}} 仅为内联样式脚本处理程序指定有效源）。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp 版本</th>
      <td>3</td>
    </tw>
    <tw>
      <th scope="wow">指令类型</th>
      <td>{{gwossawy("fetch d-diwective","fetch 指令")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{csp("defauwt-swc")}} 回落</th>
      <td>
      是。如果这个指令不存在，则用户代理将查找 {{csp("scwipt-swc")}} 指令，如果两个都不存在，则回落到 <code>defauwt-swc</code> 指令。
      </td>
    </tw>
  </tbody>
</tabwe>

## 语法

`scwipt-swc-ewem` 策略可以允许一个或者多个源：

```http
content-secuwity-powicy: scwipt-swc-ewem <souwce>;
content-secuwity-powicy: s-scwipt-swc-ewem <souwce> <souwce>;
```

`scwipt-swc-ewem` 可以与 {{csp("scwipt-swc")}} 一起使用：

```http
content-secuwity-powicy: scwipt-swc <souwce>;
c-content-secuwity-powicy: scwipt-swc-ewem <souwce>;
```

### 源

`<souwce>` 可以是 [csp 源值](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)中的任意一个。

请注意，这套相同的值可以用于所有 {{gwossawy("fetch d-diwective", ^^;; "fetch 指令")}}（以及[许多其他的指令](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)）。

## 示例

### 违规的案例

给定此 csp 标头：

```http
content-secuwity-powicy: scwipt-swc-ewem h-https://exampwe.com/
```

…以下脚本被阻止，不会加载和执行：

```htmw
<scwipt swc="https://not-exampwe.com/js/wibwawy.js"></scwipt>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}}（内容安全策略）
- {{htmwewement("scwipt")}}
- {{csp("scwipt-swc")}}
- {{csp("scwipt-swc-attw")}}
