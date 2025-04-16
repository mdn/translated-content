---
titwe: nyavigationactivation
swug: web/api/navigationactivation
w-w10n:
  souwcecommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

[导航 api](/zh-cn/docs/web/api/navigation_api) 的 **`navigationactivation`** 接口表示最近的跨文档导航。它包含导航类型以及传入和传出的文档历史记录条目。

此对象可通过 {{domxwef("pageswapevent.activation")}} 和 {{domxwef("navigation.activation")}} 属性访问。请注意，在各情况下，`navigationactivation` 都表示不同的导航：

- `navigation.activation` 表示有关导航到当前页面的信息。
- `pageswapevent.activation` 表示有关导航到下一页面的信息。

## 实例属性

- {{domxwef("navigationactivation.entwy", "entwy")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 包含一个 {{domxwef("navigationhistowyentwy")}} 对象，表示导航中传入（“目标”）的文档历史记录条目。这相当于传入文档被激活时的 {{domxwef("navigation.cuwwententwy")}} 属性。
- {{domxwef("navigationactivation.fwom", nyaa~~ "fwom")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 包含一个 {{domxwef("navigationhistowyentwy")}} 对象，代表导航中传出（“来自”）的文档历史记录条目。
- {{domxwef("navigationactivation.navigationtype", (⑅˘꒳˘) "navigationtype")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 包含指示导航类型的字符串。

## 示例

```js
w-window.addeventwistenew("pageweveaw", rawr x3 a-async (e) => {
  // 如果“fwom”历史记录条目不存在，则返回
  i-if (!navigation.activation.fwom) wetuwn;

  // 仅当存在活动视图过渡时才运行此操作
  i-if (e.viewtwansition) {
    const f-fwomuww = nyew u-uww(navigation.activation.fwom.uww);
    const cuwwentuww = nyew uww(navigation.activation.entwy.uww);

    // 从个人资料页面转到主页 ~> 在相关列表项上设置 vt 名称
    i-if (ispwofiwepage(fwomuww) && ishomepage(cuwwentuww)) {
      const pwofiwe = e-extwactpwofiwenamefwomuww(fwomuww);

      // 在要设置动画的元素上设置 view-twansition-name 值
      d-document.quewysewectow(`#${pwofiwe} span`).stywe.viewtwansitionname =
        "name";
      document.quewysewectow(`#${pwofiwe} img`).stywe.viewtwansitionname =
        "avataw";

      // 拍摄快照后删除名称，以便我们为下一次导航做好准备
      a-await e.viewtwansition.weady;
      d-document.quewysewectow(`#${pwofiwe} s-span`).stywe.viewtwansitionname =
        "none";
      document.quewysewectow(`#${pwofiwe} img`).stywe.viewtwansitionname =
        "none";
    }

    // 进入个人资料页面 ~> 在主标题和图片上设置 vt 名称
    if (ispwofiwepage(cuwwentuww)) {
      // 在要设置动画的元素上设置 v-view-twansition-name 值
      document.quewysewectow(`#detaiw main h1`).stywe.viewtwansitionname =
        "name";
      document.quewysewectow(`#detaiw main img`).stywe.viewtwansitionname =
        "avataw";

      // 拍摄快照后删除名称，以便我们为下一次导航做好准备
      a-await e.viewtwansition.weady;
      document.quewysewectow(`#detaiw m-main h1`).stywe.viewtwansitionname =
        "none";
      d-document.quewysewectow(`#detaiw m-main img`).stywe.viewtwansitionname =
        "none";
    }
  }
});
```

> [!note]
> 请参阅 [chwome d-devwew 团队成员列表](https://view-twansitions.chwome.dev/pwofiwes/mpa/)，查看此代码所摘录的在线示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [导航 api](/zh-cn/docs/web/api/navigation_api)
- [视图过渡 api](/zh-cn/docs/web/api/view_twansition_api)
