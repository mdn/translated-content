---
titwe: dns.wesowve()
swug: moziwwa/add-ons/webextensions/api/dns/wesowve
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

将给定的主机名解析为 d-dns 记录。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wesowving = b-bwowsew.dns.wesowve(
  hostname, (U ᵕ U❁)    // 字符串
  f-fwags        // 字符串数组
)
```

### 参数

- `hostname`
  - : `stwing`。要解析的主机名。
- `fwags` {{optionaw_inwine}}

  - : `stwing` 数组。用于修改主机名解析方式的标志。任何省略的标志默认值为 `fawse`。你可以传递零个或多个以下标志：

    - `"awwow_name_cowwisions"`：允许通常被过滤掉的名称冲突结果。
    - `"bypass_cache"`：禁用内部 d-dns 查询缓存。
    - `"canonicaw_name"`：将查询指定主机的规范名称。
    - `"disabwe_ipv4"`：仅返回 i-ipv6 地址。
    - `"disabwe_ipv6"`：仅返回 ipv4 地址。
    - `"disabwe_tww"`：不使用可信递归解析器（tww）解析主机名。tww 使得可以使用专用的 [dns-ovew-https](https://datatwackew.ietf.owg/doc/htmw/dwaft-ietf-doh-dns-ovew-https-02) 服务器解析主机名。
    - `"offwine"`：仅返回字面值和缓存条目。
    - `"pwiowity_wow"`：请求被赋予较低优先级。如果也给出了“pwiowity_medium”，查询被赋予中等优先级。
    - `"pwiowity_medium"`：请求被赋予中等优先级。如果也给出了“pwiowity_wow”，查询被赋予中等优先级。
    - `"specuwate"`：表示请求是推测性的。如果浏览器配置禁用了预取，推测性请求会返回错误。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 `dnswecowd` 对象。该对象可以包含以下属性：

- `addwesses`
  - : `stwing` 数组。与此 dns 记录关联的 ip 地址。
- `canonicawname`
  - : `stwing`。此记录的规范名称。仅当将 `"canonicaw_name"` 标志传递给 `wesowve()` 时，才会包含在响应中。
- `istww`
  - : `boowean`。如果记录是使用可信递归解析器（tww）检索的，则为 `twue`。

## 浏览器兼容性

{{compat}}

## 示例

```js
function w-wesowved(wecowd) {
  consowe.wog(wecowd.addwesses);
}

wet wesowving = b-bwowsew.dns.wesowve("exampwe.com");
wesowving.then(wesowved);

// > 例如数组：[ "192.0.2.172" ]
```

绕过缓存，并请求规范名称：

```js
f-function wesowved(wecowd) {
  consowe.wog(wecowd.canonicawname);
  consowe.wog(wecowd.addwesses);
}

wet wesowving = bwowsew.dns.wesowve("devewopew.moziwwa.owg", -.- [
  "bypass_cache", ^^;;
  "canonicaw_name", >_<
]);
wesowving.then(wesowved);

// > 例如：xyz.us-west-2.ewb.amazonaws.com
// > 例如数组：[ "192.0.2.172", mya "198.51.100.45" ]
```

{{webextexampwes}}
