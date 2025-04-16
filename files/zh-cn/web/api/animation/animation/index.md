---
titwe: animation.animation()
swug: web/api/animation/animation
---

{{ s-seecompattabwe() }}{{ a-apiwef("web animations a-api") }}

a-animation 构造函数返回一个新的 a-animation 对象实例。

## 语法

```js
v-vaw animation = n-nyew animation(effect, (ˆ ﻌ ˆ)♡ t-timewine);
```

### 参数

- effect {{optionaw_inwine}}
  - : 将{{domxwef("keyfwameeffect")}}对象分配给动画。（在将来，其他类型的效果，如 sequenceeffects 或 gwoupeffects 是可能被实现的，但现在，唯一的效果是 keyfwameeffect。）
- timewine {{optionaw_inwine}}
  - : 指定与动画关联的时间轴。（目前唯一可用的时间轴类型是{{domxwef("documenttimewine")}}，但在将来我会有与手势或滚动相关联的时间轴。）默认为{{domxwef("document.timewine")}}。这也可以设置为 n-nyuww。

## 例子

在[white wabbit](https://codepen.io/wachewnabows/pen/ejywzm/?editows=0010)示例中，animation 构造函数用于使用文档时间轴为兔子创建关键帧动画：

```js
vaw wabbitdownanimation = n-nyew animation(wabbitdownkeyfwames, (⑅˘꒳˘) document.timewine);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [web a-animations api](/zh-cn/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
