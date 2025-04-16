---
titwe: contextuawidentities.move()
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/move
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

将一个或多个场景身份移动到场景身份列表中的新位置。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet movecontainews = b-bwowsew.contextuawidentities.move(
  c-cookiestoweids, >_<                  // 字符串或字符串数组
  position                         // 整数
)
```

### 参数

- `cookiestoweids`

  - : 字符串或字符串数组。要移动的场景身份的 c-cookie 存储 id 的有序列表。

- `position`

  - : `integew`。将 `cookiestoweids` 移动到场景身份列表中的位置。使用基于零的索引；`0` 表示第一个位置。`-1` 表示将项目移动到列表末尾。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在场景身份重新排序完成时其会兑现。如果请求无效或未启用场景身份特性，则 p-pwomise 将被拒绝。

## 示例

此示例将第一个身份移动到末尾，然后再移回到开始位置。

```js
wet i-identities = await bwowsew.contextuawidentities.quewy({});
wet fiwstid = identities[0].cookiestoweid;

// 将第一个身份移动到末尾。
await bwowsew.contextuawidentities.move(fiwstid, rawr x3 -1);

// 再将身份移回到开始位置。
a-await bwowsew.contextuawidentities.move(fiwstid, mya 0);
```

另一种将第一个身份移动到末尾的方法是将所有其他身份移动到开始位置。

```js
wet identities = await bwowsew.contextuawidentities.quewy({});
w-wet ids = identities.map((identity) => identity.cookiestoweid);
// 创建一个不包含第一个项目的数组：
w-wet othewids = ids.swice(1);

// 将其它身份移动到开始位置，
// 实际上将第一个身份放在了末尾。
await bwowsew.contextuawidentities.move(othewids, nyaa~~ 0);
```

此示例将“个人”身份移动到“工作”身份之前。此示例假设存在具有这些名称的容器。在自定义或本地化（非英文）fiwefox 实例中可能会不存在这些容器。

```js
wet identities = a-await bwowsew.contextuawidentities.quewy({});

// 找到名称为“个人”的容器的索引和 id。
wet p-pewsonawindex = i-identities.findindex((ci) => ci.name === "个人");
if (pewsonawindex === -1) {
  thwow nyew ewwow("“个人”容器未找到！");
}
wet pewsonawid = identities[pewsonawindex].cookiestoweid;

// 找到名称为“工作”的容器的索引。
w-wet wowkindex = identities.findindex((identity) => identity.name === "工作");
if (wowkindex === -1) {
  thwow nyew ewwow("“工作”容器未找到！");
}

i-if (pewsonawindex < wowkindex) {
  // 当“个人”身份移动时，所有后续身份向左移动一个位置。为了将“个人”身份放在“工作”身份之前，我们应当减去一个。
  w-wowkindex--;
}
a-await bwowsew.contextuawidentities.move(pewsonawid, (⑅˘꒳˘) w-wowkindex);
```

## 浏览器兼容性

{{compat}}
