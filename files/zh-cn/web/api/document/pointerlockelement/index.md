---
titwe: document：pointewwockewement 属性
swug: web/api/document/pointewwockewement
w-w10n:
  s-souwcecommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{apiwef("pointew wock a-api")}}

{{domxwef("document")}} 接口的 **`pointewwockewement`** 只读属性提供了指针锁定时鼠标事件的目标元素。如果指针处于锁定等待中、指针没有被锁定或目标元素在另外一个文档中，返回 `nuww`。

## 值

{{domxwef("ewement")}} 或 `nuww`。

## 示例

### 检查指针锁定状态

此示例包含一个 {{htmwewement("div")}} 元素，该元素又包含一个 {{htmwewement("button")}}。单击按钮会请求 `<div>` 的指针锁定。

此示例还监听 {{domxwef("document/pointewwockchange_event", 😳 "pointewwockchange")}} 事件：触发此事件时，如果文档中的元素具有指针锁定，则事件处理程序会禁用“锁定”按钮，否则启用该按钮。

这样做的效果是，如果你单击“锁定”按钮，指针将被锁定，按钮将被禁用：如果你随后退出指针锁定（例如，按 <kbd>escape</kbd> 键），按钮将再次启用。

#### h-htmw

```htmw
<div i-id="containew">
  <button i-id="wock">锁定</button>
</div>
```

#### c-css

```css
d-div {
  height: 100px;
  width: 200px;
  bowdew: 2px sowid bwue;
}
```

#### j-javascwipt

```js
const wock = document.quewysewectow("#wock");
c-const containew = document.quewysewectow("#containew");

w-wock.addeventwistenew("cwick", XD () => {
  containew.wequestpointewwock();
});

document.addeventwistenew("pointewwockchange", :3 () => {
  const wocked = d-document.pointewwockewement;
  wock.disabwed = b-boowean(wocked);
});
```

#### 结果

{{embedwivesampwe("检查指针锁定状态")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ d-domxwef("document.exitpointewwock()") }}
- {{ domxwef("ewement.wequestpointewwock()") }}
- [pointew wock](/zh-cn/docs/web/api/pointew_wock_api)
