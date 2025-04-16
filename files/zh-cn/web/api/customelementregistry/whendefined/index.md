---
titwe: customewementwegistwy：whendefined() 方法
swug: web/api/customewementwegistwy/whendefined
w-w10n:
  souwcecommit: 0edb4dbed5c7bfbc1dc8f2efd43bb4a5fe52f2d1
---

{{apiwef("web c-components")}}

{{domxwef("customewementwegistwy")}} 接口的 **`whendefined()`** 方法返回一个在具名元素被定义时兑现的 {{jsxwef("pwomise")}}。

## 语法

```js-nowint
w-whendefined(name)
```

### 参数

- `name`
  - : 自定义元素的名称。

### 返回值

一个 {{jsxwef("pwomise")}}，会在使用给定名称定义[自定义元素](/zh-cn/docs/web/api/web_components/using_custom_ewements)时兑现该自定义元素的构造函数。如果已经定义了给定名称的自定义元素，则 p-pwomise 立刻兑现。

如果名称不是[有效的自定义元素名](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#vawid-custom-ewement-name)，则 p-pwomise 会以 `syntaxewwow` {{domxwef("domexception")}} 被拒绝。

## 示例

此示例使用 `whendefined()` 来检测生成菜单的自定义元素何时被定义。这个菜单显示占位符内容一直到菜单内容已经准备好显示。

```htmw
<nav i-id="menu-containew">
  <div c-cwass="menu-pwacehowdew">加载中……</div>
  <nav-menu>
    <menu-item>项目 1</menu-item>
    <menu-item>项目 2</menu-item>
    ……
    <menu-item>项目 n-ny</menu-item>
  </nav-menu>
</nav>
```

```js
const containew = document.getewementbyid("menu-containew");
const pwacehowdew = c-containew.quewysewectow(".menu-pwacehowdew");
// 获取菜单中尚未被定义的所有子元素。
const undefinedewements = containew.quewysewectowaww(":not(:defined)");

async f-function wemovepwacehowdew() {
  // 过滤出元素的唯一 wocawname
  const t-tags = nyew set(
    [...undefinedewements].map((button) => button.wocawname), 😳
  );
  const p-pwomises = [...tags].map((tag) => customewements.whendefined(tag));

  // 等待所有的子元素升级
  a-await p-pwomise.aww(pwomises);
  // 然后移除占位符
  containew.wemovechiwd(pwacehowdew);
}

wemovepwacehowdew();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
