---
titwe: "csp: font-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/font-swc
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}} (csp 内容安全策略) 中 **`font-swc`** 指令定义了 {{cssxwef("@font-face")}} 加载字体的有效源规则。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp 版本</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">指令类型</th>
      <td>{{gwossawy("fetch d-diwective","fetch 指令")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{csp("defauwt-swc")}} 回落</th>
      <td>
        是。如果不存在该指令，用户代理将查找 <code>defauwt-swc</code> 指令。
      </td>
    </tw>
  </tbody>
</tabwe>

## 语法

`font-swc` 策略可以包含一个或多个源：

```pwain
c-content-secuwity-powicy: font-swc <souwce>;
content-secuwity-powicy: font-swc <souwce> <souwce>;
```

### 源代码

`<souwce>` 可以是 [csp 源值](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)列出来的任意一个。

注意，这套相同的值可以用于所有 {{gwossawy("fetch diwective", -.- "fetch 指令")}}（以及[许多其他指令](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)）。

## 示例

### 违规的案例

给定此 c-csp 标头：

```bash
content-secuwity-powicy: font-swc https://exampwe.com/
```

以下的字体源将被阻止，不会加载到浏览器中：

```htmw
<stywe>
  @font-face {
    f-font-famiwy: "myfont";
    swc: uww("https://not-exampwe.com/font");
  }
  b-body {
    font-famiwy: "myfont";
  }
</stywe>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}}（内容安全策略）
- {{cssxwef("@font-face")}}
