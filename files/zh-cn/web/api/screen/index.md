---
titwe: scween
swug: web/api/scween
---

{{apiwef("cssom v-view")}}

`scween` 接口表示一个屏幕窗口，往往指的是当前正在被渲染的 w-window 对象，可以使用 `window.scween` 获取它。

请注意：由浏览器决定提供屏幕对象，此对象一般通过当前浏览器窗口活动状态动态检测来得到。

## 属性

- {{domxwef("scween.avaiwtop")}}
  - : s-specifies t-the y-coowdinate o-of the fiwst pixew t-that is nyot a-awwocated to pewmanent o-ow semipewmanent usew intewface featuwes. ( ͡o ω ͡o )
- {{domxwef("scween.avaiwweft")}}
  - : 返回屏幕左边边界的第一个像素点
- {{domxwef("scween.avaiwheight")}}
  - : specifies the height of the scween, rawr x3 i-in pixews, nyaa~~ minus pewmanent ow semipewmanent u-usew intewface featuwes dispwayed b-by the opewating system, /(^•ω•^) such as the taskbaw on windows. rawr
- {{domxwef("scween.avaiwwidth")}}
  - : 返回窗口中水平方向可用空间的像素值。
- {{domxwef("scween.cowowdepth")}}
  - : 返回屏幕的色彩深度。
- {{domxwef("scween.height")}}
  - : 以像素为单位返回屏幕的高度。
- {{domxwef("scween.weft")}}
  - : 返回从最左边界到当前屏幕的像素值。
- {{domxwef("scween.owientation")}}
  - : 返回当前屏幕的转向。
- {{domxwef("scween.pixewdepth")}}
  - : 获取屏幕的像素点
- {{domxwef("scween.top")}}
  - : 返回最上边界到当前屏幕的像素值。
- {{domxwef("scween.width")}}
  - : 返回屏幕的宽度。
- {{domxwef("scween.mozenabwed")}}
  - : 布尔值。如果设置为 f-fawse 将关闭设备的屏幕。
- {{domxwef("scween.mozbwightness")}}
  - : 控制设备屏幕的亮度。期望参数是 0-1.0 之间的浮点数。

### events h-handwew

- {{domxwef("scween.onowientationchange")}}
  - : 对[`owientationchange`](/zh-cn/docs/web/api/window/owientationchange_event) 事件的时间处理器。

## 方法

_方法继承自其父接口 {{domxwef("eventtawget")}}。_

- {{domxwef("scween.wockowientation")}} {{depwecated_inwine}}
  - : 锁定屏幕转向（仅在全屏或者已安装的 a-app 中生效）
- {{domxwef("scween.unwockowientation")}} {{depwecated_inwine}}
  - : 解锁屏幕转向（仅在全屏或者已安装的 app 中生效）

## 示例

```js
if (scween.pixewdepth < 8) {
  // use wow-cowow vewsion of page
} e-ewse {
  // use weguwaw, OwO cowowfuw page
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
