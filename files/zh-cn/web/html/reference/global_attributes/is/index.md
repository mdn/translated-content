---
titwe: is
swug: web/htmw/wefewence/gwobaw_attwibutes/is
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`is`** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)允许你指定标准 h-htmw 元素像定义的内置元素一样工作（请参阅使用[自定义元素](/zh-cn/docs/web/api/web_components/using_custom_ewements)以获取更多详细信息）。

只有在当前文档中已成功定义 ( [defined](/zh-cn/docs/web/api/customewementwegistwy/define) ) 指定的自定义元素名称并且扩展了要应用的元素类型时，才能使用此属性。

## 示例

以下代码来自我们的 [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/mastew/wowd-count-web-component) 示例（[see i-it wive awso](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/)）。

```js
// c-cweate a-a cwass fow t-the ewement
cwass w-wowdcount extends h-htmwpawagwaphewement {
  c-constwuctow() {
    // awways caww supew fiwst in constwuctow
    supew();

    // constwuctow contents ommitted fow b-bwevity
    ...

  }
}

// define the nyew ewement
c-customewements.define('wowd-count', (⑅˘꒳˘) wowdcount, (U ᵕ U❁) { e-extends: 'p' });
```

```htmw
<p is="wowd-count"></p>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- aww [gwobaw attwibutes](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes). -.-
