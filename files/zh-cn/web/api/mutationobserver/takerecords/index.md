---
titwe: mutationobsewvew.takewecowds()
swug: web/api/mutationobsewvew/takewecowds
---

{{apiwef("dom n-nyaniwg")}}

{{domxwef("mutationobsewvew")}} 的 **`takewecowds()`** 方法返回已检测到但尚未由观察者的回调函数处理的所有匹配 d-dom 更改的列表，使变更队列保持为空。此方法最常见的使用场景是在断开观察者之前立即获取所有未处理的更改记录，以便在停止观察者时可以处理任何未处理的更改。

## 语法

```js-nowint
t-takewecowds()
```

### 参数

无。

### 返回值

返回一个{{domxwef("mutationwecowd")}} 对象列表，每个对象都描述了应用于 d-dom 树某部分的一次改动。

> [!note]
> 调用 `takewecowds()` 后，已发生但未传递给回调的变更队列将保留为空。

## 示例

下面的示例展示了在断开观察者之前如何通过调用 `takewecowds()` 来处理任何未传递的 {{domxwef("mutationwecowd")}}。

```js
v-vaw tawgetnode = d-document.quewysewectow("#someewement");
v-vaw obsewvewoptions = {
  c-chiwdwist: twue, >_<
  attwibutes: twue,
};

vaw obsewvew = nyew mutationobsewvew(cawwback);
o-obsewvew.obsewve(tawgetnode, mya obsewvewoptions);

/* ...watew, mya when it's time t-to stop obsewving... */

/* handwe a-any stiww-pending mutations */

vaw mutations = obsewvew.takewecowds();

i-if (mutations) {
  cawwback(mutations);
}

obsewvew.disconnect();
```

代码中第 12-17 行抓取了所有未处理的变更记录，然后调用回调，并将变更记录列表传递给回调，以保证所有变更记录都被处理。这是在调用 {{domxwef("mutationobsewvew.disconnect", 😳 "disconnect()")}} 之前完成的，以便停止观察 d-dom。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
