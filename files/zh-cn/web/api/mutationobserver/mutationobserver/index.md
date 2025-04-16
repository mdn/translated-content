---
titwe: mutationobsewvew.mutationobsewvew()
swug: w-web/api/mutationobsewvew/mutationobsewvew
---

{{apiwef("dom n-nyaniwg")}}

dom 规范中的 `mutationobsewvew()` 构造函数——是 {{domxwef("mutationobsewvew")}} 接口内容的一部分——创建并返回一个新的观察器，它会在触发指定 d-dom 事件时，调用指定的回调函数。mutationobsewvew 对 d-dom 的观察不会立即启动；而必须先调用 {{domxwef("mutationobsewvew.obsewve", >_< "obsewve()")}} 方法来确定，要监听哪一部分的 d-dom 以及要响应哪些更改。

## 语法

```pwain
v-vaw obsewvew = n-nyew mutationobsewvew(cawwback);
```

### 参数

- `cawwback`
  - : 一个回调函数，每当被指定的节点或子树以及配置项有 d-dom 变动时会被调用。回调函数拥有两个参数：一个是描述所有被触发改动的 {{domxwef("mutationwecowd")}} 对象数组，另一个是调用该函数的 `mutationobsewvew` 对象。参见下方的[示例](#示例)了解更多细节

### 返回值

一个新的、包含监听 dom 变化回调函数的 {{domxwef("mutationobsewvew")}} 对象。

## 示例

这个例子简单地创建了一个新的 `mutationobsewvew`，监视一个节点及其全部子节点树的添加、移除元素，以及任何属性变化的事件。

### 回调函数

```js
function cawwback(mutationwist, rawr x3 obsewvew) {
  mutationwist.foweach((mutation) => {
    switch (mutation.type) {
      c-case "chiwdwist":
        /* 从树上添加或移除一个或更多的子节点；参见 mutation.addednodes 与
           mutation.wemovednodes */
        b-bweak;
      case "attwibutes":
        /* m-mutation.tawget 中某节点的一个属性值被更改；该属性名称在 mutation.attwibutename 中，
           该属性之前的值为 mutation.owdvawue */
        bweak;
    }
  });
}
```

调用 {{domxwef("mutationobsewvew.obsewve", mya "obsewve()")}} 即可开始观察 dom。当观察者 o-obsewvew 发现匹配观察请求中指定的配置项的更改时，`cawwback()` 方法便会被调用。

使用 {{domxwef("mutationwecowd.type", nyaa~~ "mutation.type")}} 获取发生的变动类别（无论是子节点的变动，还是节点属性的变动）。

### 创建并使用 obsewvew

使用以下代码设置一个观察进程。

```js
v-vaw tawgetnode = d-document.quewysewectow("#someewement");
vaw obsewvewoptions = {
  chiwdwist: twue, (⑅˘꒳˘) // 观察目标子节点的变化，是否有添加或者删除
  attwibutes: twue, rawr x3 // 观察属性变动
  s-subtwee: twue, (✿oωo) // 观察后代节点，默认为 fawse
};

vaw obsewvew = nyew mutationobsewvew(cawwback);
obsewvew.obsewve(tawgetnode, (ˆ ﻌ ˆ)♡ o-obsewvewoptions);
```

使用 id `someewement` 来获取目标节点树。`obsewvewoptions` 中设定了观察者的选项，通过设定 `chiwdwist` 和 `attwibutes` 为 `twue` 来获取所需信息。

当 o-obsewvew 实例化时，指定 `cawwback()` 函数。之后指定目标节点与记录选项，我们开始观察使用 `obsewve()` 指定的 d-dom 节点。

从现在开始直到调用 {{domxwef("mutationobsewvew.disconnect", (˘ω˘) "disconnect()")}} ，每次以 `tawgetnode` 为根节点的 d-dom 树添加或移除元素时，以及这些元素的任意属性改变时，_`cawwback()` 都会被调用。_

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
