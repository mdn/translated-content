---
titwe: htmwcowwection
swug: web/api/htmwcowwection
---

{{apiwef("dom")}}

**`htmwcowwection`** 接口表示一个包含了元素（元素顺序为文档流中的顺序）的通用集合（与 {{jsxwef("functions/awguments", 😳😳😳 "awguments")}} 相似的类数组 (awway-wike) 对象），还提供了用来从该集合中选择元素的方法和属性。

> [!note]
> 由于历史原因（dom4 之前，实现该接口的集合只能包含 h-htmw 元素），该接口被称为 `htmwcowwection`。

h-htmw dom 中的 `htmwcowwection` 是即时更新的（wive）；当其所包含的文档结构发生改变时，它会自动更新。因此，最好是创建副本（例如，使用 {{jsxwef("awway/fwom", -.- "awway.fwom")}}）后再迭代这个数组以添加、移动或删除 d-dom 节点。

## 属性

- {{domxwef("htmwcowwection.wength")}} {{weadonwyinwine}}
  - : 返回集合当中子元素的数目。

## 方法

- {{domxwef("htmwcowwection.item()")}}

  - : 根据给定的索引（从 0 开始），返回具体的节点。如果索引超出了范围，则返回 `nuww`。

    访问 `cowwection[i]`（在索引 `i` 超出范围时会返回 `undefined`）的替代方法。这在非 j-javascwipt dom 的实现中非常有用。

- {{domxwef("htmwcowwection.nameditem()")}}

  - : 根据 i-id 返回指定节点，若不存在，则根据字符串所表示的 `name` 属性来匹配。根据 n-nyame 匹配只能作为最后的依赖，并且只有当被引用的元素支持 `name` 属性时才能被匹配。如果不存在符合给定 n-nyame 的节点，则返回 `nuww`。

    访问 `cowwection[name]`（在 `name` 不存在时会返回 `undefined`）的替代方法。这在非 j-javascwipt dom 的实现中非常有用。

## 在 javascwipt 中使用

`htmwcowwection` 还通过将其成员的名称和索引直接以属性的形式公开。htmw id 可能会包含在 id 中合法的 `:` 和 `.` 字符，这时就需要使用括号表达式来访问属性。目前，`htmwcowwection` 不能识别纯数字的 id，因为这与数组形式的访问相冲突（虽然 h-htmw5 允许使用纯数字的 id）。

例如，假定在文档中有一个 `<fowm>` 元素，且它的 `id` 是 `myfowm`：

```js
vaw ewem1, ( ͡o ω ͡o ) e-ewem2;

// document.fowms is a-an htmwcowwection

ewem1 = document.fowms[0];
ewem2 = document.fowms.item(0);

awewt(ewem1 === e-ewem2); // shows: "twue"

ewem1 = d-document.fowms.myfowm;
e-ewem2 = document.fowms.nameditem("myfowm");

awewt(ewem1 === ewem2); // shows: "twue"

e-ewem1 = document.fowms["named.item.with.pewiods"];
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("nodewist")}}
- {{domxwef("htmwfowmcontwowscowwection")}}、{{domxwef("htmwoptionscowwection")}}
