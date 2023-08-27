---
title: 使用 Web Storage API
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
---

Web Storage API 提供了存储机制，通过该机制，浏览器可以安全地存储键值对，比使用 cookie 更加直观。这篇文章一步一步讲解如何使用这项简单的技术。

## 基本概念

存储对象是简单的键值存储，类似于对象，但是它们在页面加载时保持完整。键和值始终是字符串（请注意，与对象一样，整数键将自动转换为字符串）。您可以像访问对象一样访问这些值，或者使用 {{domxref("Storage.getItem()")}} 和 {{domxref("Storage.setItem()")}} 方法。这三行都设置了（相同的）colorSetting 条目：

```js
localStorage.colorSetting = "#a4509b";
localStorage["colorSetting"] = "#a4509b";
localStorage.setItem("colorSetting", "#a4509b");
```

Web Storage 包含如下两种机制：

- `sessionStorage` 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。
- `localStorage` 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。

这两种机制是通过 {{domxref("Window.sessionStorage")}} 和 {{domxref("Window.localStorage")}} 属性使用（更确切的说，在支持的浏览器中 `Window` 对象实现了 `WindowLocalStorage` 和 `WindowSessionStorage` 对象并挂在其 `localStorage` 和 `sessionStorage` 属性下）—— 调用其中任一对象会创建 {{domxref("Storage")}} 对象，通过 {{domxref("Storage")}} 对象，可以设置、获取和移除数据项。对于每个源（origin）`sessionStorage` 和 `localStorage` 使用不同的 Storage 对象——独立运行和控制。

例如，在文档中调用 `localStorage` 将会返回一个 {{domxref("Storage")}} 对象；调用 `sessionStorage` 返回一个不同的 {{domxref("Storage")}} 对象。可以使用相同的方式操作这些对象，但是操作是独立的。

## localStorage 功能检测

为了能够使用 localStorage，我们应该首先验证它是否在当前浏览会话中受支持并可用。

### 测试可用性

支持 localStorage 的浏览器将在窗口对象上具有一个名为 localStorage 的属性。但是，仅断言该属性存在可能会引发异常。如果 localStorage 确实存在，则仍然不能保证 localStorage 实际可用，因为各种浏览器都提供了禁用 localStorage 的设置。因此，浏览器可能支持 localStorage，但不适用于页面上的脚本。

例如，私有浏览模式下的 Safari 浏览器为我们提供了一个空的 l ocalStorage 对象，其配额为零，实际上使它无法使用。相反，我们可能会收到合法的 QuotaExceededError，这意味着我们已经用完了所有可用的存储空间，但实际上存储空间可用。我们的功能检测应考虑这些情况。

这是一个检测 localStorage 是否同时受支持和可用的函数：

```js
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
```

这是您将如何使用它：

```js
if (storageAvailable("localStorage")) {
  // Yippee! We can use localStorage awesomeness
} else {
  // Too bad, no localStorage for us
}
```

您可以通过调用 `storageAvailable('sessionStorage')` 来测试 sessionStorage。

请参阅此处，[brief history of feature-detecting localStorage](https://gist.github.com/paulirish/5558557).。

## 示例

为了展示 Web Storage 的用法，我们创建了一个简单的示例，假设称为 **Web Storage Demo**。[示例页面](https://mdn.github.io/dom-examples/web-storage/)提供了控制表单，用于自定义颜色、字体和装饰图片：

![](landing.png)当你选择不同的选项后，页面会立即更新；除此之外，你的选择会被存到 `localStorage` 里，这样，当你关闭页面之后重新加载时，你的选择会被记住。

我们还提供了一个[存储事件结果页面](https://mdn.github.io/dom-examples/web-storage/event.html) — 如果你在另一个标签页加载该页面，然后改变之前示例页面的选项，则随着 {{domxref("StorageEvent")}} 事件的触发，更新的存储信息会显示出来。

![](event-output.png)

> **备注：** 除了使用上面的链接查看示例页面外，还可以[获取源码](https://github.com/mdn/dom-examples/tree/master/web-storage)。

### 测试本地存储是否已被填充

在 [main.js](https://github.com/mdn/dom-examples/blob/master/web-storage/main.js) 开头，我们先测试本地存储是否已被填充（即，页面之前被访问过）：

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

{{domxref("Storage.getItem()")}} 方法用来从存储中获取一个数据项。该例中，我们测试 `bgcolor` 数据项是否存在。如果不存在，执行 `populateStorage()` 来将存在的自定义值添加到存储中。如果有值存在，则执行 `setStyles()` 来使用存储的值更新页面的样式。

> **备注：** 你还可以使用 {{domxref("Storage.length")}} 来测试存储对象是否为空。

### 从存储中获取值

正如上面提到的，使用 {{domxref("Storage.getItem()")}} 可以从存储中获取一个数据项。该方法接受数据项的键作为参数，并返回数据值。例如：

```js
function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

首先，前三行代码从本地中获取值。接着，将值显示到表单元素中，这样在重新加载页面时与自定义设置保持同步。最后，更新页面的样式和图片，这样重新加载页面后，你的自定义设置重新起作用了。

### 在存储中设置值

{{domxref("Storage.setItem()")}} 方法可被用来创建新数据项和更新已存在的值。该方法接受两个参数——要创建/修改的数据项的键，和对应的值。

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

`populateStorage()` 方法在本地存储中设置三项数据 — 背景颜色、字体和图片路径。然后执行 `setStyles()` 方法来更新页面的样式。

同时，我们为每个表单元素绑定了一个 `onchange` 监听器，这样，一个表单值改变时，存储的数据和页面样式会更新。

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

### 通过 StorageEvent 响应存储的变化

无论何时，{{domxref("Storage")}} 对象发生变化时（即创建/更新/删除数据项时，重复设置相同的键值不会触发该事件，{{domxref("Storage.clear()")}} 方法至多触发一次该事件），{{domxref("StorageEvent")}} 事件会触发。在同一个页面内发生的改变不会起作用——在相同域名下的其他页面（如一个新标签或 iframe）发生的改变才会起作用。在其他域名下的页面不能访问相同的 Storage 对象。

在事件结果页面中的 JavaScript 如下所示（可见 [events.js](https://github.com/mdn/dom-examples/blob/master/web-storage/event.js)）：

```js
window.addEventListener("storage", function (e) {
  document.querySelector(".my-key").textContent = e.key;
  document.querySelector(".my-old").textContent = e.oldValue;
  document.querySelector(".my-new").textContent = e.newValue;
  document.querySelector(".my-url").textContent = e.url;
  document.querySelector(".my-storage").textContent = e.storageArea;
});
```

这里，我们为 window 对象添加了一个事件监听器，在当前域名相关的 {{domxref("Storage")}} 对象发生改变时该事件监听器会触发。正如你在上面看到的，此事件相关的事件对象有多个属性包含了有用的信息——改变的数据项的键，改变前的旧值，改变后的新值，改变的存储对象所在的文档的 URL，以及存储对象本身。

### 删除数据记录

Web Storage 提供了一对简单的方法用于移除数据。我们没用在我们的 demo 中使用这些方法，但是添加到你自己的项目中很简单：

- {{domxref("Storage.removeItem()")}} 接受一个参数——你想要移除的数据项的键，然后会将对应的数据项从域名对应的存储对象中移除。
- {{domxref("Storage.clear()")}} 不接受参数，只是简单地清空域名对应的整个存储对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

各浏览器支持的 localStorage 和 sessionStorage 容量上限不同。测试页面 [detailed rundown of all the storage capacities for various browsers](http://dev-test.nemikor.com/web-storage/support-test/)。

> **备注：** 从 ios 5.1 后，Safari 移动存储本地存储的数据在缓存文件夹，这样在系统空间不足的情况下，方便系统自动清理。

## 相关链接

- [Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API)
