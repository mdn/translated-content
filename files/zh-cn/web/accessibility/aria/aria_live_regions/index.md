---
title: ARIA 实时区域
slug: Web/Accessibility/ARIA/ARIA_Live_Regions
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

使用 JavaScript，我们可以动态更改页面的某些部分，而无需重新加载整个页面——例如，可以动态更新搜索结果列表，或者显示不需要用户交互的警告或通知。虽然这些更改对于能够看到页面的用户来说通常是显而易见的，但是对于使用辅助技术的用户来说，它们可能并不明显。ARIA 实时区域（live region）填补了这个空白，并提供了一种以编程方式显现动态内容更改的方法，这种方式可以由辅助技术提供宣告。

> [!NOTE]
> 辅助技术通常只会宣告实时区域中的*动态*内容变更。在你希望宣告发生变更的元素，你只需要在变更发生之前在相应的元素上包含 `aria-live` 属性或专门的实时区域 `role`（例如 [`role="status"`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/status_role)）——无论是在原始标记中，还是使用 JavaScript 动态添加。首先创建一个空的实时区域，然后——在单独的步骤中——更改区域内的内容。虽然在规范中没有明确记录，但浏览器/辅助技术确实对 [`role="alert"`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/alert_role) 包含了特殊处理：在大多数情况下，即使页面的初始标记中已经存在包含通知/消息的 `role="alert"` 区域，或者动态注入到页面中，该区域内的内容也会被宣告。但是，请注意，`role="alert"` 区域在被宣告时会根据特定的浏览器/辅助技术组合自动添“警报”前缀。

## 实时区域

无需页面重新加载即可更新的动态内容通常是区域或微件（widget）。不涉及交互的简单内容更改应标记为实时区域。使用 `aria-live` 属性显式标记实时区域。

**`aria-live`**：`aria-live=POLITENESS_SETTING` 用于设置屏幕阅读器处理实时区域更新的优先级——可能的设置有：`off`、`polite` 或 `assertive`。该属性是迄今为止最重要的。

通常只使用 `aria-live="polite"`。任何接收对用户重要但不会如此频繁而令人讨厌的更新的区域应该接收该属性。当用户处于空闲状态时，屏幕阅读器将朗读更改。

`aria-live="assertive"` 应仅用于时间敏感/关键通知，这些通知绝对需要用户立即关注。通常，对 assertive 动态区域的更改将中断屏幕阅读器当前正在进行的任何宣告。因此，它可能会非常让人讨厌并具有破坏性，应该谨慎使用。

与直觉相反，`aria-live="off"` 不表示不应该宣告更改。当元素具有 `aria-live="off"`（或具有此隐含值的 `role`，例如 `role="marquee"` 或 `role="timer"`）时，仅应在焦点位于元素上或内部时才宣告元素内容的更改。

### 基本示例：下拉框更新屏幕上有用的信息

一个专门提供有关行星信息的网站提供了一个下拉框。当从下拉框中选择一个行星时，页面上的一个区域将被更新为有关所选行星的信息。

```html
<fieldset>
  <legend>行星信息</legend>
  <label for="planetsSelect">行星：</label>
  <select id="planetsSelect" aria-controls="planetInfo">
    <option value="">选择一个行星…</option>
    <option value="mercury">水星</option>
    <option value="venus">金星</option>
    <option value="earth">地球</option>
    <option value="mars">火星</option>
  </select>
  <button id="renderPlanetInfoButton">确定</button>
</fieldset>

<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">未选择行星</h2>
  <p id="planetDescription">选择一个行星以查看其描述</p>
</div>

<p>
  <small>
    信息来自<a href="https://zh.wikipedia.org/wiki/太阳系">维基百科</a>
  </small>
</p>
```

```js
const PLANETS_INFO = {
  mercury: {
    title: "水星",
    description:
      "水星是太阳系中最小、最靠近太阳的行星。它以罗马信使神水星命名。",
  },

  venus: {
    title: "金星",
    description:
      "金星（英语：Venus）是离太阳第二近的行星。在英语中，它以罗马爱与美之女神“维纳斯（Venus）”命名。",
  },

  earth: {
    title: "地球",
    description:
      "地球是距离太阳第三近的行星，也是宇宙中唯一已知存在生命的天体。",
  },

  mars: {
    title: "火星",
    description:
      "火星是距离太阳第四近的行星，也是太阳系中仅次于水星的第二小行星。火星在英文中得名于罗马战神，通常被称为“红色星球”。",
  },
};

function renderPlanetInfo(planet) {
  const planetTitle = document.querySelector("#planetTitle");
  const planetDescription = document.querySelector("#planetDescription");

  if (planet in PLANETS_INFO) {
    planetTitle.textContent = PLANETS_INFO[planet].title;
    planetDescription.textContent = PLANETS_INFO[planet].description;
  } else {
    planetTitle.textContent = "未选择行星";
    planetDescription.textContent = "选择一个行星以查看其描述";
  }
}

const renderPlanetInfoButton = document.querySelector(
  "#renderPlanetInfoButton",
);

renderPlanetInfoButton.addEventListener("click", (event) => {
  const planetsSelect = document.querySelector("#planetsSelect");
  const selectedPlanet =
    planetsSelect.options[planetsSelect.selectedIndex].value;

  renderPlanetInfo(selectedPlanet);
});
```

{{EmbedLiveSample('基本示例：下拉框更新屏幕上有用的信息', '', 350)}}

用户选择新的行星时，实时区域中的信息将被宣告。由于实时区域具有 `aria-live="polite"`，屏幕阅读器会等待用户暂停，然后再宣告更新。因此，在列表中向下移动并选择另一个行星不会宣告动态区域中的更新。动态区域中的更新只会针对最终选择的行星进行宣告。

以下是 VoiceOver 在 Mac 上宣告实时区域的更新（通过字幕显示）的屏幕截图：

![VoiceOver 在 Mac 上宣告实时区域的更新的屏幕截图。图中显示了字幕。](web_accessibility_aria_aria_live_regions.png)

## 具有隐式实时区域属性的角色

以下 [`role="…"`](/zh-CN/docs/Web/Accessibility/ARIA/Roles) 值的元素默认表现为实时区域：

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">角色</th>
   <th scope="col">描述</th>
   <th scope="col">兼容性说明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>log</td>
   <td>聊天、错误、游戏或其他类型的日志</td>
   <td>为了最大程度的兼容性，在使用此角色时添加冗余的 <code>aria-live="polite"</code>。</td>
  </tr>
  <tr>
   <td>status</td>
   <td>提供更新状态的状态栏或屏幕区域。屏幕阅读器用户有一个特殊命令来读取当前状态。</td>
   <td>为了最大程度的兼容性，在使用此角色时添加冗余的 <code>aria-live="polite"</code>。</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>屏幕闪烁的错误或警告消息。警报对于向客户发出客户端验证通知尤为重要。<a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel=" noopener">警报示例。</a></td>
   <td>为了最大程度的兼容性，有些人建议在使用此角色时添加冗余的 <code>aria-live="assertive"</code>。然而，在 iOS 上的 VoiceOver 中同时添加 <code>aria-live</code> 和 <code>role="alert"</code> 会导致双重朗读问题。</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>微件和实时区域的混合体。与 <code>aria-valuemin</code>、<code>aria-valuenow</code> 和 <code>aria-valuemax</code> 一起使用。（待定：在此添加更多信息。）</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>滚动的文本，例如股票行情。</td>
   <td></td>
  </tr>
  <tr>
   <td>timer</td>
   <td>任何类型的计时器或时钟，例如倒计时器或秒表读数。</td>
   <td></td>
  </tr>
 </tbody>
</table>

## 附加的实时区域属性

实时区域得到了很好的支持。Paciello Group 在 2014 年发布了[有关实时区域支持状态的信息](https://www.tpgi.com/screen-reader-support-aria-live-regions/)。Paul J. Adam 特别研究了 [`aria-atomic` 和 `aria-relevant` 的支持情况](https://pauljadam.com/demos/aria-atomic-relevant.html)。

1. **`aria-atomic`**：`aria-atomic=BOOLEAN` 用于设置屏幕阅读器是否应始终将实时区域呈现为一个整体，即使只有部分区域发生更改。可能的设置有：`false` 或 `true`。默认设置为 `false`。
2. [**`aria-relevant`**](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)：`aria-relevant=[LIST_OF_CHANGES]` 用于设置哪些类型的更改对于实时区域是相关的。可能的设置是 `additions`、`removals`、`text`、`all` 中的一个或多个。默认设置为 `additions text`。

### 基本示例：`aria-atomic`

为演示 `aria-atomic`，考虑一个具有简单时钟的网站，显示小时和分钟。每分钟更新时钟，新的剩余时间会覆盖当前内容。

```html
<div id="clock" role="timer" aria-live="polite">
  <span id="clock-hours"></span>
  <span id="clock-mins"></span>
</div>
```

```js
/* 更新时钟的基本 JavaScript */
function updateClock() {
  const now = new Date();
  document.getElementById("clock-hours").textContent = now.getHours();
  document.getElementById("clock-mins").textContent =
    `0${now.getMinutes()}`.substr(-2);
}

/* 第一次运行 */
updateClock();

/* 每分钟更新 */
setInterval(updateClock, 60000);
```

第一次执行函数时，将会宣告要添加的整个字符串。在后续的调用中，只会宣告与前一内容相比发生了变化的部分内容。例如，当时钟从“17:33”变为“17:34”时，辅助技术将只宣布“34”，这对用户来说不太有用。

一个解决方法是首先清除实时区域的所有内容（在本例中，将 `<span id="clock-hours">` 和 `<span id="clock-mins">` 的 `innerHTML` 都设置为空），然后再注入新内容。然而，这种方法有时可能不太可靠，因为它依赖于这两者更新的精确时机。

`aria-atomic="true"` 确保每次更新实时区域时，内容的整体都会被完整宣告（例如“17:34”）。

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

`aria-atomic` 的另一个示例——作为用户操作的结果而进行的更新/通知。

```html
<div id="date-input">
  <label for="year">年份：</label>
  <input type="text" id="year" value="1990" onblur="change(event)" />
</div>

<div id="date-output" aria-atomic="true" aria-live="polite">
  设定的年份是：<span id="year-output">1990</span>
</div>
```

```js
function change(event) {
  const yearOut = document.getElementById("year-output");

  switch (event.target.id) {
    case "year":
      yearOut.innerHTML = event.target.value;
      break;
    default:
      return;
  }
}
```

没有 `aria-atomic="true"`，屏幕阅读器只会宣告年份的更改值。有了 `aria-atomic="true"`，屏幕阅读器会宣告“设定的年份是：_更改值_”。

### 基本示例：`aria-relevant`

使用 `aria-relevant`，你可以指定应该宣告哪些类型的实时区域变化/更新。

举个例子，考虑一个聊天网站，希望显示当前已登录的用户列表。我们不仅想要宣告当前已登录的用户，还希望在用户从列表中被*移除*时触发一条通知。我们可以通过指定 `aria-relevant="additions removals"` 来实现这一点。

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- 在此使用 JavaScript 添加和删除用户 -->
</ul>
```

ARIA 实时区域属性的详细说明：

- `aria-live="polite"` 表示屏幕阅读器应该在用户空闲时才呈现更新给用户。这是最常用的值，因为使用“assertive”可能会打断用户的流程。
- `aria-atomic` 没有设置（默认为 `false`），因此每次只有添加或删除的用户应该被宣告，而不是每次都宣告整个名单。
- `aria-relevant="additions removals"` 确保新增或从名单中删除的用户都会被宣告。

## 参见

- [ARIA 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles)
