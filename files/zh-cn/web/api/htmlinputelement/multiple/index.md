---
title: HTMLInputElement.multiple
slug: Web/API/HTMLInputElement/multiple
---

{{ APIRef("HTML DOM") }}

**`HTMLInputElement.multiple`** 属性表示一个 input 是否可以有多个值。目前只有火狐支持 `<input type="file">`存有多个值。

## 实例

```js
// fileInput is a <input type=file multiple>
let fileInput = document.getElementById("myfileinput");

if (fileInput.multiple == true) {
  for (let i = 0; i < fileInput.files.length; i++) {
    // Loop fileInput.files
  }

  // Only one file available
} else {
  let file = fileInput.files.item(0);
}
```

## See also

- [FileList](/zh-CN/DOM/FileList)
- [Bug 523771](https://bugzilla.mozilla.org/show_bug.cgi?id=523771) - Support \<input type=file multiple>

## Specification

- [The multiple attribute](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#attr-input-multiple) (HTML 5 working draft)

## Browser compatibility

{{Compat}}
