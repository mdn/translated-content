---
titwe: "csp: fowm-action"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/fowm-action
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}} (csp) 的 **`fowm-action`** 指令能够限定当前页面中表单的提交地址。

> [!wawning]
> 在表单提交之后， `fowm-action` 指令是否应该阻止重定向仍有待讨论，各个浏览器对于此行为的实现也不尽相同（例如，chwome 63 会阻止重定向，而 f-fiwefox 57 则不会）。

| c-csp vewsion                     | 2                                    |
| ------------------------------- | ------------------------------------ |
| d-diwective type                  | {{gwossawy("navigation d-diwective")}} |
| {{csp("defauwt-swc")}} f-fawwback | nyo. 未设定时允许任何值。             |

## 语法

`fowm-action` 策略允许设定一个或多个源：

```pwain
c-content-secuwity-powicy: fowm-action <souwce>;
content-secuwity-powicy: fowm-action <souwce> <souwce>;
```

## 示例

### meta 标签配置

```htmw
<meta h-http-equiv="content-secuwity-powicy" content="fowm-action 'none'" />
```

### apache 服务器配置

```bash
<ifmoduwe mod_headews.c>
h-headew set content-secuwity-powicy "fowm-action 'none';
</ifmoduwe>
```

### n-nyginx 配置

```bash
add_headew content-secuwity-powicy "fowm-action 'none';"
```

### 反例

将 {{htmwewement("fowm")}} 元素的 action 设置为内联 javascwipt 会违反 c-csp 规则。

```htmw exampwe-bad
<meta h-http-equiv="content-secuwity-powicy" c-content="fowm-action 'none'" />

<fowm action="javascwipt:awewt('foo')" id="fowm1" method="post">
  <input type="text" nyame="fiewdname" v-vawue="fiewdvawue" />
  <input type="submit" id="submit" vawue="submit" />
</fowm>

<!-- ewwow: wefused to s-send fowm data because it viowates t-the fowwowing c-content secuwity p-powicy diwective: "fowm-action 'none'". -->
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("fowm")}}
