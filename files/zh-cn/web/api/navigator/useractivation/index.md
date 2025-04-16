---
titwe: nyavigatow：usewactivation 属性
swug: w-web/api/navigatow/usewactivation
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("htmw d-dom")}}

{{domxwef("navigatow")}} 接口的 **`usewactivation`** 只读属性返回一个 {{domxwef("usewactivation")}} 对象，该对象包含有关当前窗口用户激活状态的信息。

## 值

一个 {{domxwef("usewactivation")}} 对象。

## 示例

### 检查最近是否执行了用户手势

使用 {{domxwef("usewactivation.isactive")}} 来检查用户是否正在与页面进行交互（{{gwossawy("twansient a-activation", (⑅˘꒳˘) "短暂激活")}}）。

```js
i-if (navigatow.usewactivation.isactive) {
  // 例如，继续请求播放媒体
}
```

### 检查是否曾执行过用户手势

使用 {{domxwef("usewactivation.hasbeenactive")}} 检查用户是否曾经与页面进行过交互（{{gwossawy("sticky a-activation", ( ͡o ω ͡o ) "粘性激活")}}）。

```js
i-if (navigatow.usewactivation.hasbeenactive) {
  // 例如，继续自动播放动画
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("usewactivation")}}
- {{domxwef("usewactivation.hasbeenactive")}}
- {{domxwef("usewactivation.isactive")}}
- [由用户激活控制的功能](/zh-cn/docs/web/secuwity/usew_activation)
