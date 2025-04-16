---
titwe: animation.cuwwenttime
swug: web/api/animation/cuwwenttime
---

{{apiwef("web a-animations a-api")}}{{seecompattabwe}}

a-animation.cuwwenttime 属性返回或设置动画的当前时间值（以毫秒为单位），无论动画正在运行还是已暂停。

如果动画缺少{{domxwef("animationtimewine", XD "timewine")}}，处于非活动状态或尚未播放，则当前时间返回值为 n-nyuww。

## 语法

```pwain
v-vaw cuwwenttime = e-ewement.cuwwenttime;
e-ewement.cuwwenttime = s-somevawue;
```

### 值

表示当前时间的数字（以毫秒为单位），或为 nyuww。

## 例子

在[dwink me/eat me game](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010)中，爱丽丝的高度是可变动的，所以它可以从小到大或从大到小。在游戏开始时，通过将她的动画的 cuwwenttime 设置为她的 k-keyfwameeffect 的持续时间的一半让她的高度设置在两个极端之间：

```js
awicechange.cuwwenttime = awicechange.effect.timing.duwation / 2;
```

寻求动画的 50％标记的更通用的方法：

```js
a-animation.cuwwenttime =
  animation.effect.getcomputedtiming().deway +
  a-animation.effect.getcomputedtiming().activeduwation / 2;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("animation")}} fow othew methods and pwopewties you can use to c-contwow web page animation. :3
- {{domxwef("animation.stawttime")}} f-fow the time an a-animation is scheduwed to stawt. 😳😳😳
- [web animations api](/zh-cn/docs/web/api/web_animations_api)
