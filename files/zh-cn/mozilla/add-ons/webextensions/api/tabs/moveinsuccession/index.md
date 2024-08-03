---
title: tabs.moveInSuccession()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/moveInSuccession
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

调整一组标签页的继承关系。

使用 {{WebExtAPIRef('tabs')}} API，可以为一个标签页指定同一窗口中的另一个标签页作为其*后继*（successor）。如果标签页 B 是标签页 A 的后继，并且标签页 A 在活动时被关闭，则接下来将激活标签页 B。如果标签页 A 没有后继，则浏览器可以自由确定接下来激活哪个标签页。如果标签页 B 是标签页 A 的后继，则标签页 A 被称为标签页 B 的*前驱*。一个标签页最多只能有一个后继，但可以有任意数量的前驱。标签页不能将自己或另一个窗口中的标签页作为其后继。

所有标签页最初都没有后继；标签页只有在由 WebExtension 分配之后才会有后继。但是，浏览器在可能的情况下不应使具有继承关系的标签页孤立：例如，如果标签页 B 是标签页 A 的后继，并且标签页 C 是标签页 B 的后继，并且 B 被关闭（或移到另一个窗口），则标签页 A 将采用标签页 C 作为其后继。防止 C 以这种方式（称为*将标签页* B _从其继承链中移出_）被孤立。

`tabs.moveInSuccession()` 接受一个标签页 ID 数组，并将所有这些标签页从它们的继承链中移出。然后，它使每个标签页成为数组中前一个标签页的后继，形成一个链条。它可以选择将链条的最后一个标签页的后继设置为锚定标签页，该锚定标签页*不会*从其继承链中移出。其他选项可以控制标签链是在锚定标签页的“前面”还是“后面”插入，并且操作是否像链表插入一样进行。

虽然可以使用 {{WebExtAPIRef('tabs.update()')}} 分配后继标签页，但通常希望使用 `tabs.moveInSuccession()` 更改后继，即使只是为单个标签页分配其后继也是如此。区别在于，`browser.tabs.moveInSuccession([a], b)` 将标签页 `a` 从其继承链中移出，因此 `a` 的任何前驱将采用 `a` 先前的后继；而如果使用 `browser.tabs.update(a, {successorTabId: b})`，则标签页 `a` 可能继续作为其他标签页的后继，这可能是不期望看到的。`tabs.moveInSuccession()` 的另一个优势是所有的继承关系变化都是原子操作，不需要担心在调用 {{WebExtAPIRef('tabs.update()')}} 和 {{WebExtAPIRef('tabs.get()')}} 以及用户关闭标签页等操作之间的竞争。

## 语法

```js-nolint
browser.tabs.moveInSuccession([1, 3, 5, 7, 2, 9], 4, {insert:true})
```

### 参数

- `tabIds`
  - : `integer` 数组。一组标签页的 `ID`。数组中元素的顺序定义了标签页之间的关系。任何无效的标签 `ID` 或者不属于与 `tabId`（或数组中第一个标签页，如果省略了`tabId`）相同窗口的标签 `ID` 将被忽略，它们将保持它们当前的前驱和后继。
- `tabId` {{optional_inline}}
  - : `integer`。将成为 `tabIds` 数组中最后一个标签页的后继的标签页 `ID`。如果此 `ID` 无效或者为 {{WebExtAPIRef('tabs.TAB_ID_NONE')}}，则最后一个标签页将没有后继。默认为 {{WebExtAPIRef('tabs.TAB_ID_NONE')}}。
- `options` {{optional_inline}}

  - : `object`。

    - `append` {{optional_inline}}
      - : `boolean`。确定是否将 `tabIds` 中的标签页移到 `tabId` 之前或之后。如果为 `false`，标签页将移到 `tabId` 之前；如果为 `true`，标签页将移到 `tabId` 之后。默认为 `false`。
    - `insert` {{optional_inline}}
      - : `boolean`。确定在将标签页前置或附加后，是否将 `tabId` 的当前前驱或后继（取决于 `options.append`）链接到链的另一侧。如果为 `true`，将执行以下操作之一：如果 `options.append` 为 `false`，则将数组中的第一个标签页设置为 `tabId` 的当前前驱的后继；如果 `options.append` 为 `true`，则将 `tabId` 的当前后继设置为数组中最后一个标签页的后继。默认为 `false`。

## 浏览器兼容性

{{Compat}}
