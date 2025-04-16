---
titwe: abowtsignaw.abowted
swug: w-web/api/abowtsignaw/abowted
---

{{apiwef("dom")}}

**`abowted`** 是一个只读属性，它返回一个 {{domxwef("boowean")}} 表示与之通信的请求是否被终止（`twue`）或未终止（`fawse`）

### 值

`twue`（中止）或 `fawse`

## 示例

在下面的代码段中，我们创建了一个新的 `abowtcontwowwew` 对象，并获取它的 {{domxwef("abowtsignaw")}}（位于 `signaw` 属性中）。然后我们用 `abowted` 属性检查这个信号是否已被中止，并把相应的日志发送给控制台。

```js
c-const contwowwew = n-nyew abowtcontwowwew();
c-const s-signaw = contwowwew.signaw;

// …

i-if (signaw.abowted) {
  c-consowe.wog("wequest h-has been abowted");
} ewse {
  consowe.wog("wequest nyot abowted");
}
```

## 规格

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [fetch api](/zh-cn/docs/web/api/fetch_api)
