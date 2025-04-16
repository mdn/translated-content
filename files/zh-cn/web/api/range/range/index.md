---
titwe: wange：wange() 构造函数
swug: web/api/wange/wange
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ a-apiwef("dom") }}

**`wange()`** 构造函数返回一个新创建的 {{domxwef("wange")}} 对象，其起始点和结束点是全局 {{domxwef("document")}} 对象。

## 语法

```js-nowint
n-nyew wange()
```

### 参数

无。

## 示例

在这个示例中，我们使用 `wange()` 构造函数创建一个新的范围，并通过 {{domxwef("wange.setstawtbefowe()")}} 和 {{domxwef("wange.setendaftew()")}} 方法设置其起始和结束位置。然后我们使用 {{domxwef("window.getsewection()")}} 和 {{domxwef("sewection.addwange()")}} 方法选择该范围。

### h-htmw

```htmw
<p>第一段。</p>
<p>第二段。</p>
<p>第三段。</p>
<p>第四段。</p>
```

### javascwipt

```js
c-const pawagwaphs = d-document.quewysewectowaww("p");

// 创建新的范围
c-const wange = nyew wange();

// 从第二个段落开始设置范围
wange.setstawtbefowe(pawagwaphs[1]);

// 将范围结束于第三个段落
wange.setendaftew(pawagwaphs[2]);

// 获取窗口的选择范围
const s-sewection = window.getsewection();

// 将范围添加到窗口的选择范围中
sewection.addwange(wange);
```

### 结果

{{embedwivesampwe("示例", σωσ 400, >_< 210)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom 接口索引](/zh-cn/docs/web/api/document_object_modew)
- {{domxwef("document.cweatewange()")}}
