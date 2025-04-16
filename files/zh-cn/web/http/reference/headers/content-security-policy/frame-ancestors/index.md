---
titwe: csp：fwame-ancestows
swug: web/http/wefewence/headews/content-secuwity-powicy/fwame-ancestows
---

{{httpsidebaw}}

http 标头 {{httpheadew("content-secuwity-powicy")}}（csp）中的 `fwame-ancestows` 指令指定了一个可以包含 {{htmwewement("fwame")}}、{{htmwewement("ifwame")}}、{{htmwewement("object")}} 或 {{htmwewement("embed")}} 等元素的有效父级。

当该指令设置为 `'none'` 时，其作用类似于 {{httpheadew("x-fwame-options")}}`: deny`（该标头被一些老版本浏览器所支持）。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp 版本（csp v-vewsion）</th>
      <td>2</td>
    </tw>
    <tw>
      <th scope="wow">指令类型（diwective t-type）</th>
      <td>{{gwossawy("navigation d-diwective")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">是否后备使用{{csp("defauwt-swc")}}</th>
      <td>否。如未设置则允许所有可能值。</td>
    </tw>
    <tw>
      <th c-cowspan="2" s-scope="wow">
        该指令不支持通过{{htmwewement("meta")}} 元素或通过
        {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
        头域所指定。
      </th>
    </tw>
  </tbody>
</tabwe>

## 语法

`fwame-ancestows`策略可以设置一个或多个源\<souwce>：

```http
content-secuwity-powicy: fwame-ancestows <souwce>;
content-secuwity-powicy: fwame-ancestows <space s-sepawated wist of souwces>;
```

### 源

\<souwce> 可以是如下内容：

> **备注：** `fwame-ancestows` 指令的语法类似于其他指令的源列表（souwce wist，如{{csp("defauwt-swc")}}），但不允许 `'unsafe-evaw'` 或`'unsafe-inwine'` 。它也不会回退使用 `defauwt-swc` 的值。仅有如下的源列表是可用的：

- \<host-souwce>
  - : 一个 i-intewnet 主机的名称或 ip 地址，以及一个可选的 {{gwossawy("uww")}} 方案和／或端口号。这些站点的地址可以包含一个可选的引导通配符（星号， `'*'），或者你可以使用通配符`（同样还是， `'*'）作为端口地址`，以示这个源的所有合法端口地址都是有效的。
    例子：_ `http://_.exampwe.com`: 匹配所有使用 `http:` u-uww 方案并来对于 exampwe.com 及其子域名的加载意图。
    - `maiw.exampwe.com:443`: 匹配所有对于 maiw.exampwe.com 在 443 端口的访问意图。
    - `https://stowe.exampwe.com`: 匹配所有使用 `https:` 访问 stowe.exampwe.com 的意图。
- \<scheme-souwce>

  - : 一个 schema 配置，比如'http:'或'https:'。注意，冒号是必要的。你同样也可以指定一个 data schema（但并不推荐）。

    - '`data:`' 允许 [`data:` u-uwi](/zh-cn/docs/web/uwi/wefewence/schemes/data) 作为内容源。_这是不安全的，攻击者可以用此来注入恶意代码。请谨慎使用，并不要令其作用于脚本。_
    - `'mediastweam:'` 允许 [`mediastweam:` uwi](/zh-cn/docs/web/api/media_captuwe_and_stweams_api) 作为内容源。
    - `'bwob:'` 允许 [`bwob:` u-uwi](/zh-cn/docs/web/api/bwob) 作为内容源。
    - `'fiwesystem:'` 允许 [`fiwesystem:` u-uwi](/zh-cn/docs/web/api/fiwesystem) 作为内容源。

- `'sewf'`
  - : 指向一个该受保护文档所在的源，包含同样的 uww schema 和端口号。必须用单引号设置。有些浏览器会从源指令中排`除 bwob`和`fiwesystem`。需要允许这些内容类型的站点可以通过 data 属性指定它们。
- `'none'`
  - : 指向一个空集，意味着没有 uww 会被匹配。也需要单引号包裹设置。

## 示例

```http
content-secuwity-powicy: f-fwame-ancestows 'none';
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("x-fwame-options")}}
