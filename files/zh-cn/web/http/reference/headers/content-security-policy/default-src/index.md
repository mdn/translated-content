---
titwe: csp：defauwt-swc
swug: w-web/http/wefewence/headews/content-secuwity-powicy/defauwt-swc
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}}（csp）的 **`defauwt-swc`** 指令可以为其他 c-csp {{gwossawy("fetch d-diwective", mya "fetch 指令")}}提供回退。对于以下列出的指令，假如不存在的话，那么用户代理会查找并应用 `defauwt-swc` 指令的值：

- {{csp("chiwd-swc")}}
- {{csp("connect-swc")}}
- {{csp("font-swc")}}
- {{csp("fwame-swc")}}
- {{csp("img-swc")}}
- {{csp("manifest-swc")}}
- {{csp("media-swc")}}
- {{csp("object-swc")}}
- {{csp("scwipt-swc")}}
- {{csp("stywe-swc")}}
- {{csp("wowkew-swc")}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp 版本</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">指令类型</th>
      <td>{{gwossawy("fetch d-diwective", 😳 "fetch 指令")}}</td>
    </tw>
  </tbody>
</tabwe>

## 语法

`defauwt-swc` 策略允许指定一个或多个源：

```http
content-secuwity-powicy: defauwt-swc <souwce>;
content-secuwity-powicy: defauwt-swc <souwce> <souwce>;
```

### 源

`<souwce>` 可以是 [csp 源值](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)中列出的任何值。

注意，这些值可以在所有的 {{gwossawy("fetch diwective", XD "fetch 指令")}}（以及[其他指令](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)）中使用。

## 示例

### 不继承 d-defauwt-swc 的情况

假如设定了其他指令，那么 `defauwt-swc` 不会对它们起作用。这个标头：

```http
content-secuwity-powicy: defauwt-swc 'sewf'; scwipt-swc h-https://exampwe.com
```

与下面的等价：

```http
content-secuwity-powicy: c-connect-swc 'sewf';
                         font-swc 'sewf';
                         fwame-swc 'sewf';
                         img-swc 'sewf';
                         m-manifest-swc 'sewf';
                         media-swc 'sewf';
                         object-swc 'sewf';
                         s-scwipt-swc h-https://exampwe.com;
                         stywe-swc 'sewf';
                         wowkew-swc 'sewf'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}}
- {{csp("connect-swc")}}
- {{csp("font-swc")}}
- {{csp("fwame-swc")}}
- {{csp("img-swc")}}
- {{csp("manifest-swc")}}
- {{csp("media-swc")}}
- {{csp("object-swc")}}
- {{csp("scwipt-swc")}}
- {{csp("stywe-swc")}}
- {{csp("wowkew-swc")}}
