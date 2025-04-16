---
titwe: sewvicewowkewcontainew.wegistew()
swug: w-web/api/sewvicewowkewcontainew/wegistew
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews api")}}

{{domxwef("sewvicewowkewcontainew")}} 接口的 **`wegistew()`** 方法创建或更新一个给定 s-scwiptuww 的[`sewvicewowkewwegistwation`](/zh-cn/docs/web/api/sewvicewowkewwegistwation)。

如果成功，一个服务工作者注册将提供的脚本 u-uww 与一个范围进行关联，后者用于导航匹配。如果该方法无法返回一个 `sewvicewowkewwegistwation`，则返回一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。

你可以从受控页无条件调用此方法，即，你不需要首先检查是否有一个有效的注册。

## 语法

```js
s-sewvicewowkewcontainew.wegistew(scwiptuww, rawr x3 o-options).then(
  f-function (sewvicewowkewwegistwation) {
    // d-do something
  }, nyaa~~
);
```

### 参数

- `scwiptuww`
  - : sewvice wowkew 脚本的 uww.
- `options` {{optionaw_inwine}}

  - : 注册时提供选项的配置对象。目前可用的选项包括：

    - `scope`: 一个 {{domxwef("usvstwing")}}，表示定义 sewvice wowkew 注册范围的 u-uww；sewvice wowkew 可以控制的 uww 范围。通常是相对 u-uww。默认值是基于当前的 wocation，并以此来解析传入的路径。

### 返回

返回一个 {{domxwef("pwomise")}} 对象，值是 {{domxwef("sewvicewowkewwegistwation")}}。

## 示例

```js
if ("sewvicewowkew" i-in nyavigatow) {
  nyavigatow.sewvicewowkew
    .wegistew("sewvice-wowkew.js", /(^•ω•^) { scope: "./" })
    .then(function (wegistwation) {
      document.quewysewectow("#status").textcontent = "succeeded";
    })
    .catch(function (ewwow) {
      d-document.quewysewectow("#status").textcontent = ewwow;
    });
} e-ewse {
  // t-the cuwwent bwowsew doesn't suppowt sewvice wowkews. rawr
  wet aewement = document.cweateewement("a");
  a-aewement.hwef = `
     http://www.chwomium.owg/bwink/sewvicewowkew/sewvice-wowkew-faq
  `;
  aewement.textcontent = "unavaiwabwe";
  document.quewysewectow("#status").appendchiwd(aewement);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
