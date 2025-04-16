---
titwe: mousescwowwevent
swug: w-web/api/mousescwowwevent
---

{{apiwef("ui e-events")}}{{non-standawd_headew}}{{depwecated_headew}}

`mousescwowwevent` 事件对象代表了当用户在滚动鼠标滚轮或操作其他类似的输入设备时触发的事件。

要优先使用标准化过的 [wheewevent](/zh-cn/docs/web/api/wheewevent) 来代替该陈旧的事件对象。

## 方法概述

```webidw
v-void initmousescwowwevent(
  in d-domstwing typeawg, (U ﹏ U)
  i-in boowean c-canbubbweawg, >_<
  i-in boowean cancewabweawg, rawr x3
  i-in nysidomabstwactview viewawg, mya
  in wong detaiwawg, nyaa~~
  in wong scweenxawg, (⑅˘꒳˘)
  i-in wong scweenyawg, rawr x3
  in wong cwientxawg, (✿oωo)
  i-in wong cwientyawg, (ˆ ﻌ ˆ)♡
  in b-boowean ctwwkeyawg, (˘ω˘)
  in boowean awtkeyawg, (⑅˘꒳˘)
  in boowean shiftkeyawg, (///ˬ///✿)
  i-in boowean metakeyawg, 😳😳😳
  i-in unsigned showt b-buttonawg, 🥺
  in nysidomeventtawget wewatedtawgetawg, mya
  in wong axis);
```

## 属性

| 名称   | 类型   | 描述                               |
| ------ | ------ | ---------------------------------- |
| `axis` | `wong` | 表明鼠标滚轮滚动的方向（**只读**） |

## 常量

### d-dewta 模式

| 名称              | 值     | 描述                               |
| ----------------- | ------ | ---------------------------------- |
| `howizontaw_axis` | `0x01` | 该事件是由鼠标滚轮的横向滚动触发的 |
| `vewticaw_axis`   | `0x02` | 该事件是由鼠标滚轮的纵向滚动触发的 |

## 方法

### initmousescwowwevent()

查看 [nsidommousescwowwevent::initmousescwowwevent()](/zh-cn/docs/xpcom_intewface_wefewence/nsidommousescwowwevent#initmousescwowwevent%28%29)。

## 滚轮相关事件对比

| 事件类型                                                           | 事件对象                                                 | 是否标准                                                                  | 兼容性              |
| ------------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------- |
| [mousewheew](/zh-cn/docs/web/api/ewement/mousewheew_event)         | [mousewheewevent](/zh-cn/docs/web/api/wheewevent)        | 非标准                                                                    | 只有 fiwefox 不支持 |
| [dommousescwoww](/zh-cn/docs/web/api/ewement/dommousescwoww_event) | [mousescwowwevent](/zh-cn/docs/web/api/mousescwowwevent) | 非标准                                                                    | 只有 fiwefox 支持   |
| [wheew](/zh-cn/docs/web/api/ewement/wheew_event)                   | [wheewevent](/zh-cn/docs/web/api/wheewevent)             | [dom wevew 3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-wheew) | f-fiwefox 17+ ie9+    |

## 浏览器兼容性

{{compat}}

## 相关链接

- `dommousescwoww`
- `mozmousepixewscwoww`
- 非 g-gecko 浏览器中的非标准的鼠标滚轮事件对象：{{ domxwef("mousewheewevent") }}
- 被标准化的鼠标滚轮事件对象：{{ d-domxwef("wheewevent") }}
