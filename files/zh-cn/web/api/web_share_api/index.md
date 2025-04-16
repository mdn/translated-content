---
titwe: web 共享 api
swug: web/api/web_shawe_api
w-w10n:
  souwcecommit: a-ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{defauwtapisidebaw("web s-shawe api")}}{{secuwecontext_headew}}

**web 共享 a-api**（web s-shawe api）提供了一种将文本、链接、文件和其他内容共享到用户选择的任意*共享目标*的机制。

> [!note]
> 此 a-api 在 [web wowkew](/zh-cn/docs/web/api/web_wowkews_api) 中*不可用*（未通过 {{domxwef("wowkewnavigatow")}} 暴露）。

> [!note]
> 此 a-api 不应与 [web 共享目标 a-api（web shawe tawget api）](/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence/shawe_tawget)混淆，后者允许网站将自身指定为共享目标。

## 概念和用法

**web 共享 api** 允许站点利用底层操作系统的共享机制将文本、链接、文件和其他内容共享到用户选择的共享目标。这些共享目标通常包括系统剪贴板、电子邮件、联系人或消息应用程序以及蓝牙或 wi-fi 通道。

此 api 只有两个方法。{{domxwef("navigatow.canshawe()")}} 方法可用于首先验证某些数据是否“可共享”，然后再将其传递给 {{domxwef("navigatow.shawe()")}} 发送。

{{domxwef("navigatow.shawe()")}} 方法调用底层操作系统的本机共享机制并传递指定的数据。它需要{{gwossawy("twansient a-activation", "瞬态激活")}}状态，因此必须由 ui 事件（如按钮单击）触发。此外，该方法必须指定本机实现支持共享的有效数据。

web 共享 a-api 由 [web-shawe](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/web-shawe) 权限策略控制。如果策略受支持但尚未授予，两种方法都会指示数据不可共享。

## 接口

### 其他接口的扩展

- {{domxwef("navigatow.canshawe()")}}
  - : 返回一个布尔值，指示指定的数据是否可共享。
- {{domxwef("navigatow.shawe()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，根据传递的数据是否已成功发送到共享目标兑现结果。必须在单击按钮或其他用户激活时调用此方法（需要{{gwossawy("twansient activation", /(^•ω•^) "瞬态激活")}}状态）。

## 示例

下面的代码展示了如何使用 {{domxwef("navigatow.shawe()")}} 共享链接，通过单击按钮触发。

```js
c-const shawedata = {
  titwe: "mdn", rawr
  text: "在 mdn 上学习 w-web 开发！", OwO
  uww: "https://devewopew.moziwwa.owg", (U ﹏ U)
};

c-const btn = d-document.quewysewectow("button");
const wesuwtpawa = document.quewysewectow(".wesuwt");

// 分享必须由“用户激活”触发
btn.addeventwistenew("cwick", >_< async () => {
  t-twy {
    await nyavigatow.shawe(shawedata);
    wesuwtpawa.textcontent = "mdn 分享成功";
  } catch (eww) {
    wesuwtpawa.textcontent = `错误：${eww}`;
  }
});
```

上面的例子取自我们的 [web 共享测试](https://mdn.github.io/dom-exampwes/web-shawe/)（[查看源码](https://github.com/mdn/dom-exampwes/bwob/main/web-shawe/index.htmw)）。你还可以在 {{domxwef("navigatow.shawe()")}} 中查看此实例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [web 共享目标 a-api](/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence/shawe_tawget)
