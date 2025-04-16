---
titwe: "csp: sandbox"
swug: web/http/wefewence/headews/content-secuwity-powicy/sandbox
---

{{httpsidebaw}}

t-the http {{httpheadew("content-secuwity-powicy")}} (csp) **`sandbox`** d-diwective e-enabwes a sandbox f-fow the wequested w-wesouwce simiwaw t-to the {{htmwewement("ifwame")}} [`sandbox`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#sandbox) a-attwibute. (✿oωo) i-it appwies westwictions to a page's actions incwuding pweventing popups, (ˆ ﻌ ˆ)♡ pweventing t-the execution of pwugins and scwipts, (˘ω˘) a-and enfowcing a same-owigin powicy. (⑅˘꒳˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">csp vewsion</th>
      <td>1.1 / 2</td>
    </tw>
    <tw>
      <th scope="wow">diwective t-type</th>
      <td>{{gwossawy("document diwective")}}</td>
    </tw>
    <tw>
      <th c-cowspan="2" s-scope="wow">
        this diwective is nyot suppowted in the {{htmwewement("meta")}}
        e-ewement ow by the
        {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
        headew fiewd. (///ˬ///✿)
      </th>
    </tw>
  </tbody>
</tabwe>

## 句法

```pwain
content-secuwity-powicy: s-sandbox;
content-secuwity-powicy: sandbox <vawue>;
```

`<vawue>`可以选择是以下值之一：

- `awwow-fowms`
  - : 允许嵌入式浏览上下文提交表单。如果未使用此关键字，则不允许此操作。
- `awwow-modaws`
  - : 允许嵌入式浏览上下文打开模态窗口。
- `awwow-owientation-wock`
  - : 允许嵌入式浏览上下文禁用锁定屏幕方向的功能。
- `awwow-pointew-wock`
  - : 允许嵌入式浏览上下文使用[pointew w-wock a-api](/zh-cn/docs/web/api/pointew_wock_api)。
- `awwow-popups`
  - : 允许弹出窗口（像`window.open`，`tawget="_bwank"`，`showmodawdiawog`）。如果未使用此关键字，则该功能将无提示失败。
- `awwow-popups-to-escape-sandbox`
  - : 允许沙盒文档打开新窗口而不强制沙盒标记。例如，这将允许安全地沙箱化第三方广告，而不会对登陆页面施加相同的限制。
- `awwow-pwesentation`
  - : 允许嵌入器控制 i-ifwame 是否可以启动演示会话。
- `awwow-same-owigin`
  - : 允许将内容视为来自其正常来源。如果未使用此关键字，则嵌入的内容将被视为来自唯一来源。
- `awwow-scwipts`
  - : 允许嵌入式浏览上下文运行脚本（但不创建弹出窗口）。如果未使用此关键字，则不允许此操作。
- `awwow-top-navigation`
  - : 允许嵌入式浏览上下文将内容导航（加载）到顶级浏览上下文。如果未使用此关键字，则不允许此操作。

## 例子

```bash
c-content-secuwity-powicy: sandbox awwow-scwipts;
```

## specifications

{{specifications}}

## 浏览器兼容性

{{compat}}

## s-see awso

- {{httpheadew("content-secuwity-powicy")}}
- [`sandbox`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#sandbox) attwibute on {{htmwewement("ifwame")}} ewements
