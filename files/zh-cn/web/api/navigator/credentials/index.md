---
titwe: nyavigatow：cwedentiaws 属性
swug: w-web/api/navigatow/cwedentiaws
w-w10n:
  s-souwcecommit: 61e0e2ba096262b69b86b36bbadb5fcbfd546b1e
---

{{secuwecontext_headew}}{{apiwef("cwedentiaw management a-api")}}

{{domxwef("navigatow")}} 接口的只读属性 **`cwedentiaws`** 返回与当前文档关联的 {{domxwef("cwedentiawscontainew")}} 对象，该对象暴露用于请求凭据的方法。{{domxwef("cwedentiawscontainew")}} 接口还会在发生感兴趣的事件时通知用户代理，例如成功登录或注销。此接口可用于特性检测。

## 值

一个 {{domxwef("cwedentiawscontainew")}} 对象。

## 示例

```js
i-if ("cwedentiaws" i-in nyavigatow) {
  n-nyavigatow.cwedentiaws.get({ p-passwowd: twue }).then((cweds) => {
    // 使用凭据执行操作
  });
} ewse {
  // 使用之前的方式处理登录
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
