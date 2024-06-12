---
title: FileReader：result 属性
slug: Web/API/FileReader/result
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("FileReader")}} 接口的 **`result`** 只读属性返回文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪种方法来启动读取操作。

## 值

根据使用哪种读取方法来启动读取操作的适当的字符串或 {{jsxref("ArrayBuffer")}} 对象。如果读取尚未完成或不成功，则值为 `null`。

结果类型如下所述。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">方法</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{domxref("FileReader/readAsArrayBuffer", "readAsArrayBuffer()")}}
      </td>
      <td>
        <code>result</code> 属性是一个包含二进制数据的 JavaScript {{jsxref("Global_Objects/ArrayBuffer", "ArrayBuffer")}} 对象。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsBinaryString", "readAsBinaryString()")}}
      </td>
      <td>
        <code>result</code> 属性包含来自文件的字符串中的原始二进制数据。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsDataURL", "readAsDataURL()")}}
      </td>
      <td>
        <code>result</code> 属性是一个字符串，其中包含表示文件数据的 <code>data:</code> URL。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsText", "readAsText()")}}
      </td>
      <td>
        <code>result</code> 属性是字符串中的文本。
      </td>
    </tr>
  </tbody>
</table>

## 示例

这个例子展示了一个函数 `reader()`，它从[文件输入框](/zh-CN/docs/Web/HTML/Element/input/file)读取文件。它的工作原理是创建一个 {{domxref("FileReader")}} 对象并为 {{domxref("FileReader/load_event", "load")}} 事件创建一个侦听器，这样当读取文件时，`result` 被获取并传递给提供给 `reader()` 的回调函数。

内容作为原始文本数据进行处理。

```js
// 给定这个 type="file" 的 HTMLInputElement：
// <input id="image" type="file" accept="image/*">

function reader(file, callback) {
  const fr = new FileReader();
  fr.onload = () => callback(null, fr.result);
  fr.onerror = (err) => callback(err);
  fr.readAsDataURL(file);
}

document.querySelector("#image").addEventListener("change", (evt) => {
  // 没有文件，什么也不做。
  if (!evt.target.files) {
    return;
  }
  reader(evt.target.files[0], (err, res) => {
    console.log(res); // Base64 `data:image/...` 字符串结果。
  });
});
```

鉴于 {{domxref("FileReader")}} 的异步性质，你可以使用基于 Promise 的方法。下面是一个[文件输入框](/zh-CN/docs/Web/HTML/Element/input/file)的示例，其 `multiple` 属性返回一个 {{jsxref("Promise")}}。

```js
// 给定这个 HTMLInputElement：
// <input id="images" type="file" accept="image/*" multiple>

const reader = (file) =>
  new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr);
    fr.onerror = (err) => reject(err);
    fr.readAsDataURL(file);
  });

async function logImagesData(fileList) {
  let fileResults = [];
  const frPromises = fileList.map(reader);

  try {
    fileResults = await Promise.all(frPromises);
  } catch (err) {
    // 在这种特定情况下，Promise.all() 可能优于 Promise.allSettled()，因为将 FileList 修改为用户最初选择的文件的子集并非易事。因此，让我们隐藏整个操作。
    console.error(err);
    return;
  }

  fileResults.forEach((fr) => {
    console.log(fr.result); // Base64 `data:image/...` 字符串结果。
  });
}

// HTMLInputElement type="file" 事件处理器：
document.querySelector("#images").addEventListener("change", (evt) => {
  // 没有文件，什么也不做。
  if (!evt.target.files) {
    return;
  }
  logImagesData([...evt.target.files]);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FileReader")}}
