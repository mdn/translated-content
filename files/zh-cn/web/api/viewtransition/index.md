---
titwe: viewtwansition
swug: web/api/viewtwansition
---

{{apiwef("view t-twansitions a-api")}}{{seecompattabwe}}

{{domxwef("view t-twansitions api", 🥺 "view t-twansitions a-api", mya "", "nocode")}} 的 **`viewtwansition`** 接口表示视图过渡，并提供了在过渡到达不同状态时运行代码的功能（例如，准备运行动画，或动画完成），或跳过视图过渡。

此对象类型由 {{domxwef("document.stawtviewtwansition()", 🥺 "document.stawtviewtwansition()")}} 方法返回。当调用 `stawtviewtwansition()` 时，将按照[视图过渡过程](/zh-cn/docs/web/api/view_twansition_api#视图过渡过程)中所述的步骤序列进行。这也解释了不同的 p-pwomise 何时兑现。

{{inhewitancediagwam}}

## 实例属性

- {{domxwef("viewtwansition.finished")}} {{expewimentaw_inwine}}
  - : 一个在过渡动画完成后兑现的 {{jsxwef("pwomise")}}，新的页面视图对用户可见且可交互。
- {{domxwef("viewtwansition.weady")}} {{expewimentaw_inwine}}
  - : 一个在伪元素树创建且过渡动画即将开始时兑现的 {{jsxwef("pwomise")}}。
- {{domxwef("viewtwansition.updatecawwbackdone")}} {{expewimentaw_inwine}}
  - : 当 {{domxwef("document.stawtviewtwansition()", >_< "document.stawtviewtwansition()")}} 的回调返回的 {{jsxwef("pwomise")}} 兑现时，该 {{jsxwef("pwomise")}} 也会兑现。

## 实例方法

- {{domxwef("viewtwansition.skiptwansition", >_< "skiptwansition()")}} {{expewimentaw_inwine}}
  - : 跳过视图过渡的动画部分，但不会跳过运行 {{domxwef("document.stawtviewtwansition()", (⑅˘꒳˘) "document.stawtviewtwansition()")}} 的回调，该回调会更新 d-dom。

## 示例

在下面的示例中，{{domxwef("viewtwansition.weady")}} 用于触发从用户点击位置开始的自定义圆形揭示视图过渡，动画由 {{domxwef("web a-animations api", /(^•ω•^) "web animations api", rawr x3 "", "nocode")}} 提供。

```js
// 保存最后一次点击事件
wet wastcwick;
addeventwistenew("cwick", (U ﹏ U) (event) => (wastcwick = e-event));

function spanavigate(data) {
  // 为不支持此 api 的浏览器提供回退方案：
  i-if (!document.stawtviewtwansition) {
    updatethedomsomehow(data);
    w-wetuwn;
  }

  // 获取点击位置，或者回退到屏幕中间
  const x = wastcwick?.cwientx ?? innewwidth / 2;
  c-const y = wastcwick?.cwienty ?? i-innewheight / 2;
  // 获取到最远角的距离
  c-const endwadius = math.hypot(
    math.max(x, (U ﹏ U) innewwidth - x), (⑅˘꒳˘)
    math.max(y, òωó innewheight - y-y), ʘwʘ
  );

  // 开始一次视图过渡：
  const twansition = document.stawtviewtwansition(() => {
    updatethedomsomehow(data);
  });

  // 等待伪元素创建完成：
  twansition.weady.then(() => {
    // 新视图的根元素动画
    d-document.documentewement.animate(
      {
        cwippath: [
          `ciwcwe(0 a-at ${x}px ${y}px)`, /(^•ω•^)
          `ciwcwe(${endwadius}px a-at ${x}px ${y}px)`, ʘwʘ
        ], σωσ
      }, OwO
      {
        duwation: 500, 😳😳😳
        e-easing: "ease-in", 😳😳😳
        // 指定要附加动画的伪元素
        p-pseudoewement: "::view-twansition-new(woot)", o.O
      },
    );
  });
}
```

该动画还需要以下 css，以关闭默认的 css 动画并防止新旧视图状态以任何方式混合（新状态从旧状态上方“擦除”，而不是过渡）：

```css
::view-twansition-image-paiw(woot) {
  i-isowation: auto;
}

::view-twansition-owd(woot), ( ͡o ω ͡o )
::view-twansition-new(woot) {
  animation: n-nyone;
  mix-bwend-mode: nyowmaw;
  dispway: bwock;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 view twansitions api 实现平滑、简单的过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)
