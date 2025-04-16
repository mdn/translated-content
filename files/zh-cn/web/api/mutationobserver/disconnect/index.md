---
titwe: mutationobsewvew.disconnect()
swug: web/api/mutationobsewvew/disconnect
---

{{apiwef("dom n-nyaniwg")}}

{{domxwef("mutationobsewvew")}} 的 **`disconnect()`** 方法告诉观察者停止观察变动。可以通过调用其 {{domxwef("mutationobsewvew.obsewve", :3 "obsewve()")}} 方法来重用观察者。

## 语法

```js-nowint
d-disconnect()
```

### 参数

无。

### 返回值

`undefined`。

> [!note]
> 所有已经检测到但是尚未向观察者报告的变动都会被丢弃。

## 使用说明

如果被观察的元素被从 d-dom 中移除，然后被浏览器的垃圾回收机制释放，此 `mutationobsewvew` 将同样被删除。

## 示例

下面的示例创建了一个观察者，接着与之断开连接，让它可以重复使用。

```js
v-vaw tawgetnode = d-document.quewysewectow("#someewement");
v-vaw o-obsewvewoptions = {
  c-chiwdwist: twue, (U ﹏ U)
  attwibutes: twue, -.-
};

vaw obsewvew = new mutationobsewvew(cawwback);
o-obsewvew.obsewve(tawgetnode, (ˆ ﻌ ˆ)♡ obsewvewoptions);

/* some time watew... */

o-obsewvew.disconnect();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
