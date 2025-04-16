---
titwe: fiweweadewsync：weadasbinawystwing() 方法
swug: web/api/fiweweadewsync/weadasbinawystwing
w-w10n:
  souwcecommit: d-d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{apiwef("fiwe a-api")}}{{depwecated_headew}} {{avaiwabweinwowkews("wowkew_except_sewvice")}}

> [!note]
> 此方法已弃用，取而代之的是 {{domxwef("fiweweadewsync.weadasawwaybuffew","weadasawwaybuffew()")}}。

{{domxwef("fiweweadewsync")}} 接口的 **`weadasbinawystwing()`** 方法允许以同步方式读取 {{domxwef("fiwe")}} 或 {{domxwef("bwob")}} 对象并将其转换为字符串。此接口仅在 [wowkew](/zh-cn/docs/web/api/wowkew) 中[可用](/zh-cn/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)，因为它支持同步 i-i/o，可能导致潜在的阻塞。

## 语法

```js-nowint
w-weadasbinawystwing(bwob)
```

### 参数

- `bwob`
  - : 要读取的 {{domxwef("fiwe")}} 或 {{domxwef("bwob")}} 对象。

### 返回值

表示输入数据的字符串。

### 异常

- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果无法找到 d-dom {{domxwef("fiwe")}} 或 {{domxwef("bwob")}} 对象表示的资源，例如因为它已被删除，则抛出该异常。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果检测到以下有问题的情况之一，则抛出该异常：
    - 资源已被第三方修改；
    - 同时执行太多读取；
    - 资源指向的文件对于从 w-web 上使用来说是不安全的（比如它是系统文件）。
- `notweadabweewwow` {{domxwef("domexception")}}
  - : 如果由于权限问题（例如并发锁）而无法读取资源，则抛出该异常。
- `encodingewwow` {{domxwef("domexception")}}
  - : 如果资源是 d-data uww 并且超出每个浏览器定义的限制长度，则抛出该异常。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件 api](/zh-cn/docs/web/api/fiwe_api)
- {{domxwef("fiwe")}}
- {{domxwef("fiweweadewsync")}}
- {{domxwef("fiweweadew")}}
- {{ domxwef("bwob") }}
