---
title: 经期跟踪器：JavaScript 功能
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

在上一节中，我们编写了经期跟踪器（CycleTracker）的 HTML 和 CSS，创建了我们的 Web 应用的静态版本。在本节中，我们将编写将静态 HTML 转换为功能完全 Web 应用所需的 JavaScript。

如果你还没有这么做，复制 [HTML](https://github.com/mdn/pwa-examples/tree/master/cycletracker/javascript_functionality/index.html) 和 [CSS](https://github.com/mdn/pwa-examples/tree/master/cycletracker/javascript_functionality/style.css) 并将它们保存到名为 `index.html` 和 `styles.css` 的文件中。

HTML 文件的最后一行调用了 `app.js` JavaScript 文件。这就是我们在本节中要创建的脚本。在这节课中，我们将编写客户端 JavaScript 代码来捕获表单提交，local storage 提交的数据，以及填充过去经期部分。

在本课结束时，你将拥有一个功能完全的应用程序。在未来的课程中，我们将逐步增强应用程序，创建一个即使用户离线也可以工作的完全可安装的 PWA。

## JavaScript 任务

当用户访问页面时，我们检查他们是否在 local storage 中保存有现有数据。用户首次访问页面时，不会有任何数据。当新用户选择两个日期并提交表单时，我们需要：

1. 创建一个“`<h2>Past perious</h2>`”标题
2. 创建一个 {{HTMLelement("ul")}}
3. 用关于该经期的信息填充一个 {{HTMLelement("li")}} 到 `<ul>` 中
4. 将数据保存到 local storage 中

对于每个后续的表单提交，我们需要：

1. 将新的经期添加到当前列表中
2. 按日期顺序对列表进行排序
3. 用新列表重新填充 `<ul>`，每个经期一个 `<li>`
4. 将数据追加到我们保存的 local storage 中

现有用户在 local storage 中将有现有的数据。当用户使用相同的浏览器在相同的设备上返回我们的网页时，我们需要：

1. 从 local storage 中检索数据
2. 创建一个“`<h2>Past periods</h2>`”标题
3. 创建一个 {{HTMLelement("ul")}}
4. 用在 local storage 中保存的每个经期的 {{HTMLelement("li")}} 填充 `<ul>`。

这是一个初级级别的演示应用程序。目标是教授将 web 应用程序转换为 PWA 的基础知识。该应用程序不包含表单验证、错误检查、编辑或删除功能等必要特性。你可以自由扩展所涵盖的特性，并根据你的学习目标和应用程序需求定制课程和应用程序。

## 表单提交

页面包含一个 {{HTMLelement("form")}}，用于选择每个经期的开始日期和结束日期。日期选择器是类型为 {{HTMLElement("input/date", "日期")}} 的 {{HTMLElement("input")}}，其 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 分别为 `start-date` 和 `end-date`。

表单没有方法或动作。取而代之的是，我们使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 为表单添加了一个事件监听器。当用户尝试提交表单时，我们阻止表单提交，存储新的经期，渲染这个经期以及之前的经期，然后重置表单。

```js
// 创建表单和表单控件的常量
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");

// 监听表单提交。
newPeriodFormEl.addEventListener("submit", (event) => {
  // 阻止表单向服务器提交
  // 因为所有操作都在客户端进行。
  event.preventDefault();

  // 从表单中获取开始日期和结束日期。
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;

  // 检查日期是否无效
  if (checkDatesInvalid(startDate, endDate)) {
    // 如果日期无效，退出。
    return;
  }

  // 将新的经期存储在我们的客户端存储中。
  storeNewPeriod(startDate, endDate);

  // 刷新 UI。
  renderPastPeriods();

  // 重置表单。
  newPeriodFormEl.reset();
});
```

在使用 [`preventDefault()`](/zh-CN/docs/Web/API/Event/preventDefault) 阻止表单提交后，我们：

1. [验证用户输入](#验证用户输入)；如果无效则退出，
2. 通过[检索、解析、追加、排序、字符串化和重新存储](#检索、追加、排序、和重新存储数据)数据在 localStorage 中存储新的经期，
3. [渲染表单数据](#将数据渲染到屏幕上)以及过去月经经期的数据和标题部分，并且
4. 使用 HTMLFormElement 的 [`reset()`](/zh-CN/docs/Web/API/HTMLFormElement/reset) 方法重置表单。

### 验证用户输入

我们检查日期是否无效。我们做了最小的错误检查。我们确保两个日期都不是空值，`required` 属性应该可以防止这种情况发生。我们还检查开始日期是否大于结束日期。如果有错误，我们会清除表单。

```javascript
function checkDatesInvalid(startDate, endDate) {
  // 检查结束日期是否在开始日期之后，两个日期都不是空值
  if (!startDate || !endDate || startDate > endDate) {
    // 为了使验证健壮，我们可以：
    // 1. 根据错误类型添加错误消息
    // 2. 通知无障碍技术用户错误信息
    // 3. 将焦点移动到错误位置
    // 但是，为了简单起见，如果两个日期中一个
    // 或两个无效，我们清除日期
    newPeriodFormEl.reset();
    // 由于日期无效，我们返回 true
    return true;
  }
  // 否则
  return false;
}
```

在这个应用程序的一个更健壮的版本中，我们至少要包含错误消息来通知用户存在错误。一个好的应用程序会通知用户错误是什么，将焦点放在有问题的表单控件上，并使用 [ARIA 实时区域](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Live_regions)来通知无障碍技术用户错误信息。

## Local storage

我们使用 [Web 存储 API](/zh-CN/docs/Web/API/Web_Storage_API)，具体来说是 [window.localStorage](/zh-CN/docs/Web/API/Window/localStorage)，以字符串化的 JSON 对象形式存储开始日期和结束日期对。

[LocalStorage](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage#存储简单数据_—_web_storage) 有一些局限性，但对我们的应用需求足够了。我们使用 localStorage 是为了让它简单且仅存储在客户端上。这意味着数据将只存储在单个设备上的单个浏览器上。清除浏览器数据也会失去所有存储在 local storage 的经期。对许多应用程序来说这可能看起来是一个局限，但对于这个应用程序来说，月经经期数据是个人的，并且使用此类应用程序的用户可能非常关心隐私。

对于更健壮的应用程序，其他[客户端存储](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage)选项比如 [IndexDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)（IDB）和后面讨论的 service worker 具有更好的性能。

`localStorage` 的局限包括：

- 有限的数据存储：每个源的 `localStorage` 限制为 5MB 数据。我们的存储需求远远少于这个数字。
- 仅存储字符串：`localStorage` 将数据存储为字符串键和字符串值对。我们的开始和结束日期将存储为被解析为字符串的 JSON 对象。对于更复杂的数据，需要一个更健壮的存储机制，比如 IDB。
- 可能导致性能问题：获取和设置 local storage 是在主线程上同步完成的。当主线程被占用时，应用程序不会响应，就跟被冻住了一样。考虑到这个应用程序的简单性质，这丁点不好的用户体验可以忽略。
- 只能被主线程访问：除了占用主线程带来的性能问题之外，service worker 无法访问主线程，这意味着 service worker 不能直接设置或获取 local storage 数据。

#### 检索、追加、排序和重新存储数据

因为我们使用包含单个字符串的 localStorage，所以我们从 local storage 检索 JSON 字符串数据，解析 JSON 数据（如果有的话），将新日期对推入现有数组，对日期排序，再次将 JSON 对象解析为字符串，并将该字符串保存回 `localStorage`。

这个过程需要创建一些函数：

```javascript
// 将存储键添加为应用范围内的常量
const STORAGE_KEY = "period-tracker";

function storeNewPeriod(startDate, endDate) {
  // 从存储中获取数据
  const periods = getAllStoredPeriods();

  // 将新的经期对象添加到经期对象数组的末尾
  periods.push({ startDate, endDate });

  // 对数组排序，以便经期按开始日期排序，从最新到最旧
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  // 将更新后的数组存储回存储区
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  // 从 localStorage 获取经期数据字符串
  const data = window.localStorage.getItem(STORAGE_KEY);

  // 如果没有存储经期，默认为空数组
  // 否则，将存储的数据作为解析后的 JSON 返回
  const periods = data ? JSON.parse(data) : [];

  return periods;
}
```

### 将数据渲染到屏幕上

我们应用程序的最后一步是将过去经期列表渲染到屏幕上，并添加标题。

在我们的 HTML 中，我们添加了一个 `<section id="past-periods">` 占位符来容纳标题和过去经期列表。

将容器元素添加到你的脚本顶部的内容列表中。

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

接着，我们需要检索解析后的过去经期字符串或空数组。如果为空，则退出。如果过去经期存在，会清除 past period 容器的当前内容。然后，创建一个标题和一个无序列表，并循环遍历过去的经期，添加包含格式化的起始日期和终止日期的列表项。

```javascript
function renderPastPeriods() {
  // 获取解析后的经期字符串，或空数组
  const periods = getAllStoredPeriods();

  // 如果没有经期，退出
  if (periods.length === 0) {
    return;
  }

  // 清除过去经期列表，因为我们要重新渲染它
  pastPeriodContainer.innerHTML = "";

  const pastPeriodHeader = document.createElement("h2");
  pastPeriodHeader.textContent = "Past periods";

  const pastPeriodList = document.createElement("ul");

  // 循环渲染所有经期
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `from ${formatDate(
      period.startDate,
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  // 将日期字符串转换为 Date 对象
  const date = new Date(dateString);

  // 将日期格式化为特定于语言环境的字符串
  // 包括你的语言环境以获得更好的用户体验
  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}
```

## 加载时渲染过去的经期

当延迟的 JavaScript 在页面加载时运行时，如果有过去的经期的话，渲染它们。

```javascript
// 通过渲染过去的经期启动应用程序
renderPastPeriods();
```

## 完整的 JavaScript

你的 `app.js` 文件中的 JavaScript 代码应该类似如下：

```javascript
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");
const pastPeriodContainer = document.getElementById("past-periods");

// 将存储键添加为应用范围内的常量
const STORAGE_KEY = "period-tracker";

// 监听表单提交
newPeriodFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;
  if (checkDatesInvalid(startDate, endDate)) {
    return;
  }
  storeNewPeriod(startDate, endDate);
  renderPastPeriods();
  newPeriodFormEl.reset();
});

function checkDatesInvalid(startDate, endDate) {
  if (!startDate || !endDate || startDate > endDate) {
    newPeriodFormEl.reset();
    return true;
  }
  return false;
}

function storeNewPeriod(startDate, endDate) {
  const periods = getAllStoredPeriods();
  periods.push({ startDate, endDate });
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  const data = window.localStorage.getItem(STORAGE_KEY);
  const periods = data ? JSON.parse(data) : [];
  console.dir(periods);
  console.log(periods);
  return periods;
}

function renderPastPeriods() {
  const pastPeriodHeader = document.createElement("h2");
  const pastPeriodList = document.createElement("ul");
  const periods = getAllStoredPeriods();
  if (periods.length === 0) {
    return;
  }
  pastPeriodContainer.innerHTML = "";
  pastPeriodHeader.textContent = "Past periods";
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `from ${formatDate(
      period.startDate,
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}

renderPastPeriods();
```

你可以试试完全可用的 [CycleTracker 经期跟踪 Web 应用](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality)，并在 GitHub 上查看 [Web 应用源代码](https://github.com/mdn/pwa-examples/tree/master/cycletracker/javascript_functionality)。是的，它可用，但还不是 PWA。

## 接下来

从本质上讲，PWA 是一个可以安装的 Web 应用程序，可以渐进增强以离线工作。现在我们已经有了一个完全可用的 Web 应用程序，我们添加将其转换为 PWA 所需的功能，包括[清单文件](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)、[安全连接](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) 和 [service worker](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)。

首先，我们为经期跟踪器创建[清单文件](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)，包括我们的经期跟踪器 PWA 的标识、外观和图标。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS","Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
