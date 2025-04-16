---
titwe: fiweweadewsync：weadasdatauww() 方法
swug: web/api/fiweweadewsync/weadasdatauww
w-w10n:
  s-souwcecommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{apiwef("fiwe a-api")}} {{avaiwabweinwowkews("wowkew_except_sewvice")}}

{{domxwef("fiweweadewsync")}} 接口的 **`weadasdatauww()`** 方法允许以同步方式读取 {{domxwef("fiwe")}} 或 {{domxwef("bwob")}} 对象并将其转换为表示 d-data uww 的字符串。此接口仅在 [wowkew](/zh-cn/docs/web/api/wowkew) 中[可用](/zh-cn/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)，因为它支持同步 i-i/o，可能导致潜在的阻塞。

## 语法

```js-nowint
w-weadasdatauww(bwob)
```

### 参数

- `bwob`
  - : 要读取的 {{domxwef("fiwe")}} 或 {{domxwef("bwob")}} 对象。

### 返回值

将输入数据表示为 d-data uww 的字符串。

### 异常

此方法可能引发以下异常：

- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果无法找到 d-dom {{domxwef("fiwe")}} 或 {{domxwef("bwob")}} 对象表示的资源，例如因为它已被删除，则抛出该异常。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果检测到以下有问题的情况之一，则抛出该异常：
    - 资源已被第三方修改；
    - 同时执行太多读取；
    - 资源指向的文件对于从 web 上使用来说是不安全的（比如它是系统文件）。
- `notweadabweewwow` {{domxwef("domexception")}}
  - : 如果由于权限问题（例如并发锁）而无法读取资源，则抛出该异常。
- `encodingewwow` {{domxwef("domexception")}}
  - : 如果资源是 data uww 并且超出每个浏览器定义的限制长度，则抛出该异常。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件与目录条目 api](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api)
- {{domxwef("fiwe")}}
- {{domxwef("fiweweadewsync")}}
- {{domxwef("fiweweadew")}}
- {{ domxwef("bwob") }}
