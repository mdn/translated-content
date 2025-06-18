---
title: NavigationActivation
slug: Web/API/NavigationActivation
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

[导航 API](/zh-CN/docs/Web/API/Navigation_API) 的 **`NavigationActivation`** 接口表示最近的跨文档导航。它包含导航类型以及传入和传出的文档历史记录条目。

此对象可通过 {{domxref("PageSwapEvent.activation")}} 和 {{domxref("Navigation.activation")}} 属性访问。请注意，在各情况下，`NavigationActivation` 都表示不同的导航：

- `Navigation.activation` 表示有关导航到当前页面的信息。
- `PageSwapEvent.activation` 表示有关导航到下一页面的信息。

## 实例属性

- {{domxref("NavigationActivation.entry", "entry")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 包含一个 {{domxref("NavigationHistoryEntry")}} 对象，表示导航中传入（“目标”）的文档历史记录条目。这相当于传入文档被激活时的 {{domxref("Navigation.currentEntry")}} 属性。
- {{domxref("NavigationActivation.from", "from")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 包含一个 {{domxref("NavigationHistoryEntry")}} 对象，代表导航中传出（“来自”）的文档历史记录条目。
- {{domxref("NavigationActivation.navigationType", "navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 包含指示导航类型的字符串。

## 示例

```js
window.addEventListener("pagereveal", async (e) => {
  // 如果“from”历史记录条目不存在，则返回
  if (!navigation.activation.from) return;

  // 仅当存在活动视图过渡时才运行此操作
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // 从个人资料页面转到主页 ~> 在相关列表项上设置 VT 名称
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // 在要设置动画的元素上设置 view-transition-name 值
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // 拍摄快照后删除名称，以便我们为下一次导航做好准备
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // 进入个人资料页面 ~> 在主标题和图片上设置 VT 名称
    if (isProfilePage(currentUrl)) {
      // 在要设置动画的元素上设置 view-transition-name 值
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // 拍摄快照后删除名称，以便我们为下一次导航做好准备
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> 请参阅 [Chrome DevRel 团队成员列表](https://view-transitions.chrome.dev/profiles/mpa/)，查看此代码所摘录的在线示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [导航 API](/zh-CN/docs/Web/API/Navigation_API)
- [视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API)
