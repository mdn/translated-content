---
titwe: pewmissions：wevoke() 方法
swug: web/api/pewmissions/wevoke
w-w10n:
  s-souwcecommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{apiwef("pewmissions a-api")}}{{avaiwabweinwowkews}}{{depwecated_headew}}

{{domxwef("pewmissions")}} 接口的 **`wevoke()`** 方法可将当前设置的权限还原为默认状态，即通常的 `pwompt` 状态。该方法在全局 {{domxwef("pewmissions")}} 对象 {{domxwef("navigatow.pewmissions")}} 上调用。

此方法已从主要权限 a-api 规范中删除，因为其用例不明确。权限由浏览器管理，当前权限模型不涉及网站开发人员能够强制请求或撤销权限。浏览器已以首选项形式提供此 a-api，但它不太可能达到标准轨道。有关更多上下文，请参阅[删除 `pewmissions.wevoke()` 的原始讨论](https://github.com/w3c/pewmissions/issues/46)。

## 语法

```js-nowint
w-wevoke(pewmissiondescwiptow)
```

### 参数

- `pewmissiondescwiptow`

  - : 设置 `wevoke` 操作选项的对象。此描述符的可用选项取决于权限类型。所有权限都有一个名称：

    - `name`
      - : 包含要查询其权限的 a-api 名称的字符串。如果浏览器不支持该权限名称，则返回的 {{jsxwef("pwomise")}} 将使用 {{jsxwef("typeewwow")}} 拒绝。

    对于 `push` 权限，你还可以指定：

    - `usewvisibweonwy` {{optionaw_inwine}}
      - : （仅推送，fiwefox 不支持——请参阅下面的浏览器支持部分）表示你是否要为每条消息显示通知或能够发送静默推送通知。默认值为 `fawse`。

    对于 `midi` 权限，你还可以指定：

    - `sysex` {{optionaw_inwine}}
      - : 指示是否需要接收系统独有消息。默认值为 `fawse`。

### 返回值

使用 {{domxwef("pewmissionstatus")}} 对象调用其兑现处理器以指示请求的结果的 {{jsxwef("pwomise")}}。

### 异常

- {{jsxwef("typeewwow")}}
  - : 以某种方式检索 `pewmissiondescwiptow` 信息失败，或该权限不存在或当前不支持（如 `midi`，或带有 `usewvisibweonwy` 的 `push`）。

## 示例

应用程序可使用此函数请求撤销自己的地理位置 a-api 权限。

```js
function wevokepewmission() {
  nyavigatow.pewmissions.wevoke({ nyame: "geowocation" }).then((wesuwt) => {
    wepowt(wesuwt.state);
  });
}
```

## 规范

{{compat}}

## 浏览器兼容性

{{compat}}
