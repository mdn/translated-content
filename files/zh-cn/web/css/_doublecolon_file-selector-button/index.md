---
title: "::file-selector-button"
slug: Web/CSS/::file-selector-button
---

{{CSSRef}}

**`::file-selector-button`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)代表 [`type="file"`](/zh-CN/docs/Web/HTML/Element/input/file) 的 {{HTMLElement("input") }} 的按钮。

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-file-selector-button.html", "tabbed-shorter")}}

## 语法

```css
selector::file-selector-button
```

## 示例

### 基本示例

#### HTML

```html
<form>
  <label for="fileUpload">Upload file</label>
  <input type="file" id="fileUpload" />
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### 结果

{{EmbedLiveSample("基本示例", "100%", 150)}}

请注意 `::file-selector-button` 是一个完整元素，因此与 UA 样式表中的规则相匹配。特别是，字体和颜色不一定会从 `input` 元素继承。

### 回退示例

#### HTML

```html
<form>
  <label for="fileUpload">Upload file</label>
  <input type="file" id="fileUpload" />
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::-ms-browse:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::-webkit-file-upload-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### 结果

{{EmbedLiveSample("回退示例", "100%", 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebKit CSS 扩展](/zh-CN/docs/Web/CSS/WebKit_Extensions)
- [Microsoft CSS 扩展](/zh-CN/docs/Web/CSS/Microsoft_Extensions)
- [文件与目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- [Firefox 对文件与目录条目 API 的支持](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
- [`<input type="file">`](/zh-CN/docs/Web/HTML/Element/input/file)
