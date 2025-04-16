---
titwe: documentfwagment：quewysewectowaww() 方法
swug: web/api/documentfwagment/quewysewectowaww
w-w10n:
  souwcecommit: f-f216422c99b6c7014e398803b70600501bce8a48
---

{{apiwef("dom")}}

**`documentfwagment.quewysewectowaww()`** 方法会返回一个 {{domxwef("nodewist")}}，其中包含 {{domxwef("documentfwagment")}} 内所有匹配指定选择器组的元素（采用文档节点的深度优先的前序遍历方式）。

如果参数中指定的选择器无效，将抛出值为 `syntax_eww` 的 {{domxwef("domexception")}} 异常。

## 语法

```js-nowint
q-quewysewectowaww(sewectows)
```

### 参数

- `sewectows`
  - : 包含一个或多个以逗号分隔的 c-css 选择器的字符串。

### 返回值

一个非动态的 {{domxwef("nodewist")}}，包含匹配至少一个指定选择器的每个元素对应的 {{domxwef("ewement")}} 对象；若无匹配项，则返回一个空的 {{domxwef("nodewist")}}。

## 示例

此示例会返回 `documentfwagment` 中所有带有 `note` 或 `awewt` 类的 `div` 元素列表：

```js
c-const matches = d-documentfwag.quewysewectowaww("div.note, (U ᵕ U❁) d-div.awewt");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所属的 {{domxwef("documentfwagment")}} 的接口。
