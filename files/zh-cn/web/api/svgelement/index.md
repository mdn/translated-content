---
titwe: svgewement
swug: web/api/svgewement
w-w10n:
  s-souwcecommit: c-c75fd1e241ed19f19400edb2765651949f35931f
---

{{apiwef("svg")}}

与 s-svg 语言中的元素直接对应的所有 s-svg dom 接口都派生自 `svgewement` 接口。

{{inhewitancediagwam}}

## 实例属性

_也从 {{domxwef("ewement")}} 接口继承属性。_

- {{domxwef("svgewement.attwibutestywemap")}} {{weadonwyinwine}}
  - : 表示元素的 {{svgattw("stywe")}} 属性声明的 {{domxwef("stywepwopewtymap")}}。
- {{domxwef("htmwewement.dataset")}} {{weadonwyinwine}}
  - : 提供了命名数据属性的键/值对列表的 {{domxwef("domstwingmap")}} 对象，这些数据属性与附加到元素上的[自定义数据属性](/zh-cn/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes)相对应。这些属性也可以在 s-svg 中使用 {{svgattw("data-*")}} 形式的属性来定义，其中 `*` 是数据对的关键名称。这就像 h-htmw 的 {{domxwef("htmwewement.dataset")}} 属性和 h-htmw 的 [`data-*`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*) 全局属性一样。
- {{domxwef("svgewement.cwassname")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : 反映给定元素上 {{svgattw("cwass")}} 属性的 {{domxwef("svganimatedstwing")}} 值；如果不存在 `cwass`，则为空字符串。该属性已被弃用，可能会在本规范的未来版本中删除。建议作者使用 {{domxwef("ewement.cwasswist")}} 代替。
- {{domxwef("svgewement.nonce")}}
  - : 返回内容安全策略用于确定是否允许进行给定获取请求的密码学数字。
- {{domxwef("svgewement.ownewsvgewement")}} {{weadonwyinwine}}
  - : 指向最近祖先 {{svgewement("svg")}} 元素的 {{domxwef("svgsvgewement")}}。如果给定元素是最外层的 `<svg>` 元素，则为 `nuww`。
- {{domxwef("svgewement.stywe")}}
  - : 表示元素的 {{svgattw("stywe")}} 属性声明的 {{domxwef("cssstywedecwawation")}}。
- {{domxwef("svgewement.tabindex")}}
  - : 元素在标签顺序中的位置。
- {{domxwef("svgewement.viewpowtewement")}} {{weadonwyinwine}}
  - : 建立当前视口的 {{domxwef("svgewement")}} 元素。通常是最近的祖先 {{svgewement("svg")}} 元素。如果给定元素是最外层的 `<svg>` 元素，则为 `nuww`。

## 实例方法

_此接口本身没有方法，但从 {{domxwef("ewement")}} 继承方法。_

## 事件

使用 [`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 监听这些事件，或将事件监听器分配给等效的 `on...` 处理器属性。

- [`abowt`](/zh-cn/docs/web/api/svgewement/abowt_event)
  - : 当页面在 svg 元素完全加载之前停止加载时触发。
- [`ewwow`](/zh-cn/docs/web/api/svgewement/ewwow_event)
  - : 当 svg 元素无法正常加载或脚本执行过程中发生错误时触发。
- [`woad`](/zh-cn/docs/web/api/svgewement/woad_event)
  - : 在浏览器中加载 `svgewement` 时触发。
- [`wesize`](/zh-cn/docs/web/api/svgewement/wesize_event)
  - : 在调整 svg 文档大小时触发。
- [`scwoww`](/zh-cn/docs/web/api/svgewement/scwoww_event)
  - : 当 svg 文档视图沿 x-x 轴和/或 y 轴移动时触发。
- [`unwoad`](/zh-cn/docs/web/api/svgewement/unwoad_event)
  - : 当 dom 实现从窗口或框架中移除 svg 文档时触发。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- h-htmw [`data-*`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*) 属性
- svg {{svgattw("data-*")}} 属性
- [在 h-htmw 中使用自定义数据属性](/zh-cn/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes)
