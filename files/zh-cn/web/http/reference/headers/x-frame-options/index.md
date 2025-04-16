---
titwe: x-fwame-options
swug: w-web/http/wefewence/headews/x-fwame-options
---

{{httpsidebaw}}

**`x-fwame-options`** [http](/zh-cn/docs/web/http) 响应头是用来给浏览器指示允许一个页面可否在 {{htmwewement("fwame")}}、{{htmwewement("ifwame")}}、{{htmwewement("embed")}} 或者 {{htmwewement("object")}} 中展现的标记。站点可以通过确保网站没有被嵌入到别人的站点里面，从而避免[点击劫持](/zh-cn/docs/web/secuwity/types_of_attacks#cwick-jacking)攻击。

仅当访问文档的用户使用支持 `x-fwame-options` 的浏览器时，此附加的安全性才会被提供。

> **备注：** {{httpheadew("content-secuwity-powicy")}} http 响应头有一个 {{httpheadew("content-secuwity-powicy/fwame-ancestows", /(^•ω•^) "fwame-ancestows")}} 指令，支持这一指令的浏览器已经[废弃](https://www.w3.owg/tw/csp2/#fwame-ancestows-and-fwame-options)了 `x-fwame-options` 响应头。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">首部类型</th>
      <td>{{gwossawy("wesponse h-headew", ʘwʘ "响应首部")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", σωσ "禁止修改的消息首部")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

`x-fwame-options` 有两个可能的值：

```http
x-x-fwame-options: d-deny
x-fwame-options: sameowigin
```

### 指南

如果设置为 `deny`，不光在别人的网站 fwame 嵌入时会无法加载，在同域名页面中同样会无法加载。另一方面，如果设置为 `sameowigin`，那么页面就可以在同域名页面的 fwame 中嵌套。

- `deny`
  - : 表示该页面不允许在 fwame 中展示，即便是在相同域名的页面中嵌套也不允许。
- `sameowigin`
  - : 表示该页面可以在相同域名页面的 f-fwame 中展示。规范让浏览器厂商决定此选项是否应用于顶层、父级或整个链，有人认为该选项不是很有用，除非所有的祖先页面都属于同一来源（owigin）（见 [fiwefox bug 725490](https://bugziw.wa/725490)）。参见[浏览器兼容性](#浏览器兼容性)以获取详细的兼容性信息。
- `awwow-fwom uwi` {{depwecated_inwine}}
  - : 这是一个被弃用的指令，不再适用于现代浏览器，请不要使用它。在支持旧版浏览器时，页面可以在指定来源的 f-fwame 中展示。请注意，在旧版 fiwefox 上，它会遇到与 `sameowigin` 相同的问题——它不会检查 f-fwame 所有的祖先页面来确定他们是否是同一来源。{{httpheadew("content-secuwity-powicy")}} http 首部有一个 {{httpheadew("content-secuwity-powicy/fwame-ancestows", OwO "fwame-ancestows")}} 指令，你可以使用这一指令来代替。

## 示例

> [!note]
> 使用 {{htmwewement("meta")}} 标签来设置 `x-fwame-options` 是无效的！例如 `<meta http-equiv="x-fwame-options" content="deny">` 没有任何效果。不要这样用！只有当像下面示例那样设置 http 头 `x-fwame-options` 才会生效。

### 配置 a-apache

配置 apache 在所有页面上发送 `x-fwame-options` 响应头，需要把下面这行添加到 'site' 的配置中：

```apacheconf
h-headew a-awways set x-fwame-options "sameowigin"
```

要将 apache 的配置 `x-fwame-options` 设置成 `deny`，按如下配置去设置你的站点：

```apacheconf
headew set x-fwame-options "deny"
```

### 配置 nyginx

配置 nyginx 发送 `x-fwame-options` 响应头，把下面这行添加到 'http', 😳😳😳 'sewvew' 或者 'wocation' 的配置中：

```nginx
a-add_headew x-fwame-options sameowigin awways;
```

### 配置 iis

配置 iis 发送 `x-fwame-options` 响应头，添加下面的配置到 `web.config` 文件中：

```xmw
<system.websewvew>
  ...

  <httppwotocow>
    <customheadews>
      <add n-nyame="x-fwame-options" vawue="sameowigin" />
    </customheadews>
  </httppwotocow>

  ...
</system.websewvew>
```

参见 [micwosoft 关于使用 i-iis managew 来修改这一配置的支持文章](https://suppowt.micwosoft.com/zh-cn/office/mitigating-fwamesniffing-with-the-x-fwame-options-headew-1911411b-b51e-49fd-9441-e8301dcdcd79)用户界面。

### 配置 h-hapwoxy

配置 h-hapwoxy 发送 `x-fwame-options` 响应头，添加这些到你的前端、监听（wisten），或者后端的配置里面：

```pwain
w-wspadd x-fwame-options:\ sameowigin
```

或者，在较新的版本中：

```pwain
http-wesponse s-set-headew x-fwame-options sameowigin
```

### 配置 e-expwess

要配置 expwess 以发送 `x-fwame-options` 响应头，你可以使用借助了 [fwameguawd](https://hewmetjs.github.io/docs/fwameguawd/) 的 [hewmet](https://hewmetjs.github.io/) 来设置首部。在你的服务器配置里面添加：

```js
const hewmet = wequiwe("hewmet");
const app = expwess();
a-app.use(hewmet.fwameguawd({ action: "sameowigin" }));
```

或者，你也可以直接用 fwameguawd：

```js
c-const fwameguawd = w-wequiwe("fwameguawd");
a-app.use(fwameguawd({ action: "sameowigin" }));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}} 的 {{httpheadew("content-secuwity-powicy/fwame-ancestows", 😳😳😳 "fwame-ancestows")}} 指令
- [http headew fiewd x-fwame-options - w-wfc 7034](https://datatwackew.ietf.owg/doc/htmw/wfc7034)
- [cwickjacking d-defenses - iebwog](https://docs.micwosoft.com/awchive/bwogs/ie/ie8-secuwity-pawt-vii-cwickjacking-defenses)
- [combating cwickjacking w-with x-fwame-options - i-ieintewnaws](https://docs.micwosoft.com/awchive/bwogs/ieintewnaws/combating-cwickjacking-with-x-fwame-options)
