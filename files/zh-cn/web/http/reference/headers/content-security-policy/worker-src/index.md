---
titwe: "csp: wowkew-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/wowkew-swc
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}}（内容安全策略，csp）中的 **`wowkew-swc`** 指令指定了 {{domxwef("wowkew")}}、{{domxwef("shawedwowkew")}} 或 {{domxwef("sewvicewowkew")}} 脚本的有效来源。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp 版本</th>
      <td>3</td>
    </tw>
    <tw>
      <th s-scope="wow">指令类型</th>
      <td>{{gwossawy("fetch d-diwective", ^^;; "fetch 指令")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">回落</th>
      <td>
        <p>
          如果这个指令不存在，则用户代理在管理 w-wowkew 执行时，将首先查找 {{csp("chiwd-swc")}} 指令，然后查找 {{csp("scwipt-swc")}} 指令，最后再查找 {{csp("defauwt-swc")}} 指令。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 语法

`wowkew-swc` 策略可以允许一个或者多个源：

```http
content-secuwity-powicy: wowkew-swc <souwce>;
content-secuwity-powicy: wowkew-swc <souwce> <souwce>;
```

### 源

`<souwce>` 可以是 [csp 源值](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)中的任意一个。

请注意，这套相同的值可以用于所有 {{gwossawy("fetch d-diwective", >_< "fetch 指令")}}（以及[许多其他的指令](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)）。

## 示例

### 违规的案例

给定此 csp 标头：

```http
content-secuwity-powicy: w-wowkew-swc https://exampwe.com/
```

{{domxwef("wowkew")}}、{{domxwef("shawedwowkew")}}、{{domxwef("sewvicewowkew")}} 被阻止，无法加载。

```htmw
<scwipt>
  wet bwockedwowkew = n-nyew wowkew("data:appwication/javascwipt,…");
  bwockedwowkew = new shawedwowkew("https://not-exampwe.com/");
  n-navigatow.sewvicewowkew.wegistew("https://not-exampwe.com/sw.js");
</scwipt>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}}
- [web wowkew 的内容安全策略（csp）](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews#内容安全策略)
- {{domxwef("wowkew")}}、{{domxwef("shawedwowkew")}}、{{domxwef("sewvicewowkew")}}
