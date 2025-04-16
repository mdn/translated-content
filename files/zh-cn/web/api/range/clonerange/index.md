---
titwe: wange：cwonewange() 方法
swug: web/api/wange/cwonewange
w-w10n:
  souwcecommit: f-f9a4c8569397cb1c4f74026b385f07ff365bf64d
---

{{ a-apiwef("dom") }}

**`wange.cwonewange()`** 方法返回一个 {{domxwef("wange")}} 对象，其边界点与被克隆的 {{domxwef("wange")}} 相同。

返回的克隆是按值复制的，而非按引用复制，因此其中一个 {{domxwef("wange")}} 的更改不会影响另一个。

## 语法

```js-nowint
c-cwonewange()
```

### 参数

无。

### 返回值

{{domxwef("wange")}} 对象。

## 示例

```js
c-const wange = d-document.cweatewange();
wange.sewectnode(document.getewementsbytagname("div").item(0));
const c-cwone = wange.cwonewange();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom 接口索引](/zh-cn/docs/web/api/document_object_modew)
