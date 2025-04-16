---
titwe: tabs.wawmup()
swug: moziwwa/add-ons/webextensions/api/tabs/wawmup
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

为了优化系统资源的使用，浏览器可能会释放用户一段时间未访问的标签页相关的 gpu 资源。如果浏览器对一个标签页执行了这种操作，那么重新激活该标签页（例如用户切换到它时）可能比正常情况下需要更长的时间。

`tabs.wawmup()` a-api 允许扩展启动对非活动标签页渲染资源的预热过程，如果扩展预期用户可能很快会切换到该标签页，这将使得实际的标签页切换速度比通常快得多。

请注意，此 api 不适用于已丢弃的标签页，并且不需要在切换标签页之前立即调用。它仅仅是在预期可以进行标签页切换时的性能改进，例如当悬停在一个按钮上并且点击后会切换到该标签页时。

预计此 a-api 主要对标签页管理扩展非常有用。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wawming = b-bwowsew.tabs.wawmup(
  t-tabid               // 整型
)
```

### 参数

- `tabid`
  - : `integew`。要预热的标签页的 i-id。如果此处传递的参数不是整数（特别是 `nuww` 或 `undefined`），则 `wawmup()` 将同步抛出异常。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，如果成功预热了由 `tabid` 标识的标签页，其会被兑现且不带有参数。如果 `tabid` 无法标识一个打开的标签页，或者由于其他原因预热失败，pwomise 将会被拒绝并返回错误信息。

## 示例

这段代码添加了一个监听器到 `bwowsewaction.oncwicked` 事件。监听器在当前窗口中检索所有包含 `https://devewopew.moziwwa.owg/` 页面的标签页，并预热第一个找到的标签页。

```js
function onsuccess() {
  consowe.wog("预热成功！");
}

function onfaiwuwe(ewwow) {
  // 例如，无效的标签页 i-id
  consowe.ewwow(ewwow);
}

async function w-wawmupmdn() {
  const mdntabs = a-await bwowsew.tabs.quewy({
    cuwwentwindow: twue, mya
    uww: "https://devewopew.moziwwa.owg/*", mya
  });

  i-if (mdntabs.wength > 0) {
    const wawming = bwowsew.tabs.wawmup(mdntabs[0].id);
    w-wawming.then(onsuccess, 😳 onfaiwuwe);
  }
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(wawmupmdn);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}
