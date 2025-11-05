---
title: :indeterminate
slug: Web/CSS/Reference/Selectors/:indeterminate
---

**`:indeterminate`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)表示任意的状态不确定的表单元素，例如那些将 HTML [`indeterminate`](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate) 属性设置为 `true` 的复选框，以及属于某个组且该组中所有单选按钮都未选中的单选按钮，还有不确定状态的 {{HTMLElement("progress")}} 元素。

```css
/* 选中任意的状态不确定的 <input> */
input:indeterminate {
  background: lime;
}
```

此选择器针对的元素是：

- [`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox) 元素，其 `indeterminate` 属性被 [JavaScript](/zh-CN/docs/Web/JavaScript) 设置为 `true` 时。
- [`<input type="radio">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/radio) 元素，当表单中具有相同`名称`值的所有单选按钮均未被选中时。
- 处于不确定状态的 {{HTMLElement("progress")}} 元素

## 语法

```plain
:indeterminate
```

## 示例

### 复选框和单选按钮

这个示例将特殊样式应用于与不确定表单字段关联的标签。

#### HTML

```html
<fieldset>
  <legend>Checkbox</legend>
  <div>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox">This checkbox label starts out lime.</label>
  </div>
</fieldset>

<fieldset>
  <legend>Radio</legend>
  <div>
    <input type="radio" id="radio1" name="radioButton" value="val1" />
    <label for="radio1">First radio label starts out lime.</label>
  </div>
  <div>
    <input type="radio" id="radio2" name="radioButton" value="val2" />
    <label for="radio2">Second radio label also starts out lime.</label>
  </div>
</fieldset>
```

#### CSS

```css
input:indeterminate + label {
  background: lime;
}
```

```css hidden
fieldset {
  padding: 1em 0.75em;
}

fieldset:first-of-type {
  margin-bottom: 1.5rem;
}

fieldset:not(:first-of-type) > div:not(:last-child) {
  margin-bottom: 0.5rem;
}
```

#### JavaScript

```js
const inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
}
```

#### 结果

{{EmbedLiveSample('复选框和单选按钮', 'auto', 230)}}

### 进度条

#### HTML

```html
<progress></progress>
```

#### CSS

```css
progress {
  margin: 4px;
}

progress:indeterminate {
  width: 80vw;
  height: 20px;
}
```

#### 结果

{{EmbedLiveSample('进度条', 'auto', 30)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 表单——处理用户数据](/zh-CN/docs/Learn_web_development/Extensions/Forms)
- [样式化 Web 表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox) 元素的 [`indeterminate`](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate) 属性
- {{HTMLElement("input")}} 和实现它的 {{domxref("HTMLInputElement")}} 接口
- {{cssxref(":checked")}} CSS 选择器可以让你根据复选框是否被选中来设置样式
