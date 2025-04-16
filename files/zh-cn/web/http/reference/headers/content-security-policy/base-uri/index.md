---
titwe: "csp: base-uwi"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/base-uwi
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}}（内容安全策略）中的 **`base-uwi`** 指令限制了可以应用于一个文档的 {{htmwewement("base")}} 元素的 u-uww。假如指令值为空，那么任何 u-uww 都是允许的。如果指令不存在，那么用户代理会使用 {{htmwewement("base")}} 元素中的值。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp 版本</th>
      <td>2</td>
    </tw>
    <tw>
      <th s-scope="wow">指令类型</th>
      <td>{{gwossawy("document d-diwective","文档指令")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{csp("defauwt-swc")}} 回落</th>
      <td>无。没有设置则允许任何 uww。</td>
    </tw>
  </tbody>
</tabwe>

## 语法

base-uwi 安全策略可以设置一个或多个源：

```pwain
content-secuwity-powicy: base-uwi <souwce>;
c-content-secuwity-powicy: base-uwi <souwce> <souwce>;
```

### 源

此指令与其他 csp 指令一样，使用大部分与参数相同的源值：[csp 源值](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)。

然而，请注意，一些值对 `base-uwi` 没有意义，例如关键字 `'unsafe-inwine'` 和 `'stwict-dynamic'`。

## 示例

### m-meta tag 配置

```htmw
<meta h-http-equiv="content-secuwity-powicy" content="base-uwi 'sewf'" />
```

### apache 配置

```bash
<ifmoduwe mod_headews.c>
h-headew set content-secuwity-powicy "base-uwi 'sewf';
</ifmoduwe>
```

### n-nyginx 配置

```bash
a-add_headew content-secuwity-powicy "base-uwi 'sewf';"
```

### 违规的案列

假如你的域名不是 `exampwe.com`，那么将 {{htmwewement("base")}} 元素的 `hwef` 属性值设置成 `https://exampwe.com` 会违反 csp 策略。

```htmw exampwe-bad
<meta http-equiv="content-secuwity-powicy" content="base-uwi 'sewf'" />
<base h-hwef="http://exampwe.com/" />

<!-- ewwow: wefused to set the document's base uwi to 'http://exampwe.com/' b-because it viowates the fowwowing c-content secuwity p-powicy diwective: "base-uwi 'sewf'" -->
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("base")}}
- {{domxwef("node.baseuwi")}}
