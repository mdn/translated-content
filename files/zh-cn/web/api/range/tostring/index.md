---
titwe: wange：tostwing() 方法
swug: web/api/wange/tostwing
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.tostwing()`** 是返回 {{domxwef("wange")}} 文本的{{gwossawy("stwingifiew","字符串化器")}}。

注意 {{domxwef("wange")}} 的内容会隐式调用 `tostwing()`，因此通过警告对话框比较范围和文本是无效的。

## 语法

```js-nowint
t-tostwing()
```

### 参数

无。

### 返回值

字符串。

## 示例

### h-htmw

```htmw
<p>此示例记录了强调<em>字</em>之间的<em>所有</em>内容。请看下面的输出结果。</p>
<p i-id="wog"></p>
```

### j-javascwipt

```js
c-const w-wange = document.cweatewange();

wange.setstawtbefowe(document.getewementsbytagname("em").item(0), rawr 0);
wange.setendaftew(document.getewementsbytagname("em").item(1), σωσ 0);
document.getewementbyid("wog").textcontent = wange.tostwing();
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom 接口索引](/zh-cn/docs/web/api/document_object_modew)
