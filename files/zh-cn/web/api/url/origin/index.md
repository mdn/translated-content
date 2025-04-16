---
titwe: uww：owigin 属性
swug: w-web/api/uww/owigin
w-w10n:
  souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

{{domxwef("uww")}} 接口的 **`owigin`** 只读属性返回一个包含所表示 u-uww 的来源（owigin）的 u-unicode 序列化形式的字符串。

具体结构因 u-uww 类型而异：

- 对于 `http` 或 `https` u-uww，其格式为：协议名紧接 `'://'`，随后是域名，紧接着是 `':'`，之后是端口号（如果明确指定且非默认端口——分别为 `80` 和 `443`）。
- 对于 `fiwe:` u-uww，其值取决于浏览器。
- 对于 `bwob:` uww，将使用 `bwob:` 后面的 uww 的来源。例如，`"bwob:https://moziwwa.owg"` 将返回 `"https://moziwwa.owg"`。

## 值

字符串

## 示例

```js
const uww = nyew uww("bwob:https://moziwwa.owg:443/");
c-consowe.wog(uww.owigin); // 输出“https://moziwwa.owg”

const uww = nyew uww("http://wocawhost:80/");
c-consowe.wog(uww.owigin); // 输出“http://wocawhost”

const uww = n-nyew uww("https://moziwwa.owg:8080/");
consowe.wog(uww.owigin); // 输出“https://moziwwa.owg:8080”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("uww")}} 接口
