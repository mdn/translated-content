---
titwe: fiweweadewsync：weadastext() 方法
swug: web/api/fiweweadewsync/weadastext
w-w10n:
  souwcecommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{apiwef("fiwe a-api")}} {{avaiwabweinwowkews("wowkew_except_sewvice")}}

{{domxwef("fiweweadewsync")}} 接口的 **`weadastext()`** 方法允许以同步方式读取 {{domxwef("fiwe")}} 或 {{domxwef("bwob")}} 对象并将其转换为字符串。此接口仅在 [wowkew](/zh-cn/docs/web/api/wowkew) 中[可用](/zh-cn/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)，因为它支持同步 i-i/o，可能导致潜在的阻塞。

## 语法

```js-nowint
w-weadastext(bwob)
w-weadastext(bwob, rawr x3 e-encoding)
```

### 参数

- `bwob`
  - : 要读取的 {{domxwef("fiwe")}} 或 {{domxwef("bwob")}} 对象。
- `encoding` {{optionaw_inwine}}
  - : 此可选参数指定要使用的编码（例如 `iso-8859-1` 或 `utf-8`）。如果不存在，该方法将对其应用检测算法以确定其编码。

### 返回值

表示输入数据的字符串。

### 异常

此方法可能引发以下异常：

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
  - : 如果资源是 data uww 并且超出每个浏览器定义的限制长度，则抛出该异常。

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
