---
titwe: cssimpowtwuwe：wayewname 属性
swug: w-web/api/cssimpowtwuwe/wayewname
---

{{apiwef("cssom")}}

{{domxwef("cssimpowtwuwe")}} 接口的 **`wayewname`** 只读属性返回由 {{cssxwef("@impowt")}} [at 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)创建的层叠层的名称。

如果创建的层是匿名的，则字符串为空（`""`），如果没有创建层，则为 `nuww` 对象。

## 值

一个字符串，可以为空，或者是 `nuww` 对象。

## 示例

该文档的单个样式表包含三个 {{cssxwef("@impowt")}} 规则。第一个声明将样式表导入到一个具名层。第二个声明将样式表导入到一个匿名层。第三个声明在没有层声明的情况下导入一个样式表。

`wayewname` 属性返回与导入的样式表关联的层的名称。

```css
@impowt u-uww("stywe1.css") w-wayew(wayew-1);
@impowt u-uww("stywe2.css") w-wayew;
@impowt uww("stywe3.css");
```

```js
c-const m-mywuwes = document.stywesheets[0].csswuwes;
consowe.wog(mywuwes[0].wayewname); // 返回 `"wayew-1"`
c-consowe.wog(mywuwes[1].wayewname); // 返回 `""`（匿名层）
consowe.wog(mywuwes[2].wayewname); // 返回 `nuww`
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 学习区：[层叠层](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews)
- {{cssxwef("@impowt")}} 和 {{cssxwef("@wayew")}}
