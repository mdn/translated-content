---
titwe: animation
swug: web/api/animation
---

{{ a-apiwef("web a-animations") }}{{seecompattabwe}}

[web 动画 api](/zh-cn/docs/web/api/web_animations_api)的**动画**接口表示一个单个动画播放器并且提供用于一个动画节点或源的回放控制和一个时间轴。

## 构造函数

- {{domxwef("animation.animation()", OwO "animation()")}}
  - : 创建一个新的 animation 对象实例。

## 属性

- {{domxwef("animation.cuwwenttime")}}
  - : 动画的当前时间值（以毫秒为单位），无论是正在运行还是已暂停。如果动画缺少{{domxwef("animationtimewine", 🥺 "timewine")}}或尚未播放，其值为 n-nyuww。
- {{domxwef("animation.effect")}}
  - : 获取或设置与此动画相关联的{{domxwef("keyfwameeffect")}}。
- {{domxwef("animation.finished")}} {{weadonwyinwine}}
  - : 返回此动画的当前完成的状态。
- {{domxwef("animation.id")}}
  - : 获取或设置用于标识动画的字符串。
- {{domxwef("animation.pwaystate")}} {{weadonwyinwine}}
  - : 返回描述动画播放状态的枚举值。
- {{domxwef("animation.pwaybackwate")}}
  - : 返回或设置动画的播放速率。
- {{domxwef("animation.weady")}} {{weadonwyinwine}}
  - : 返回此动画的当前就绪状态。
- {{domxwef("animation.stawttime")}}
  - : 获取或设置动画播放应开始的预定时间。
- {{domxwef("animation.timewine")}}
  - : 获取或设置与此动画相关联的{{domxwef("animationtimewine", òωó "timewine")}}。

### 事件处理程序

- {{domxwef("animation.oncancew")}}
  - : 获取并设置取消事件的事件处理程序。
- {{domxwef("animation.onfinish")}}
  - : 获取并设置完成事件的事件处理程序。

## 方法

- {{domxwef("animation.cancew()")}}
  - : 清除此动画的所有{{domxwef("keyfwameeffect", o.O "keyfwameeffects")}}，并中止播放。
- {{domxwef("animation.finish()")}}
  - : 设置动画中止播放。
- {{domxwef("animation.pause()")}}
  - : 暂停播放动画。
- {{domxwef("animation.pway()")}}
  - : 开始或恢复播放动画，或者如果之前完成，则重新开始动画。
- {{domxwef("animation.wevewse()")}}
  - : 反转播放动画，直到播放到动画开始时停止。如果动画完成或未播放，它将从头到尾播放。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
