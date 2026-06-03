---
title: 经期跟踪器：清单和图标
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

PWA 清单文件是一个 JSON 文件，它提供了关于该应用程序的特性信息，使其在用户设备上安装时看起来和表现得像原生应用。清单包含了你的应用的元数据，包括它的名称、图标和呈现指令。

虽然根据规格，清单的所有键或成员都是可选的，但是一些浏览器、操作系统和应用分发机构对于 Web 应用成为 PWA 有[特定成员的要求](/zh-CN/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#必须的清单成员)。通过包含名称或简称、启动 URL、满足一定最低要求的图标，以及 PWA 应该在什么样的应用程序视口中显示，你的应用将满足 PWA 的清单要求。

我们的月经周期跟踪应用的最小化清单文件可能如下所示：

```js
{
  "short_name": "CT",
  "start_url" : "/",
  "icons": [
    {
      "src": "icon-512.png",
      "sizes": "512x512"
    }
  ],
  "display": "standalone"
}
```

在保存清单文件并从我们的 HTML 文件中链接到它之前，我们可以开发一个仍然简洁但具有更多信息的 JSON 对象，以定义 PWA 的标识、展示和图标。是的，上面的内容会起作用，但让我们讨论一下这个示例中的成员以及其他一些成员，这些成员使清单文件能够更好地定义我们的经期跟踪器 PWA 的外观。

## 应用标识

为了识别你的 PWA，JSON 必须包含一个 `name` 或 `short_name` 成员，或者两者都包含，以定义 PWA 的名称。它还可以包含一个 `description`。

- [`name`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : PWA 的名称。这是操作系统列出应用程序时使用的名称，也是应用图标旁边的标签，等等。
- [`short_name`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : 如果没有足够的空间显示 `name`，则显示给用户的 PWA 的名称。它被用作手机屏幕上图标的标签，包括在 iOS 的“添加到主屏幕”对话框中。

当 `name` 和 `short_name` 都存在时，大多数情况下都会使用 `name`，在显示应用程序名称的空间有限时使用 `short_name`。

- [`description`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : 说明应用程序的功能。它提供了一个关于应用程序目的和功能的[无障碍描述](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)。

### 任务

编写你的清单文件的前几行。你可以使用下面的文本，或者更为谨慎或描述性的值，并选择你自己的描述。

### 示例解决方案

```js
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## 应用程序外观

PWA 的安装后和离线体验的外观由清单文件定义。外观清单成员包括 `start_url` 和 `display`，以及可以用于[自定义应用程序颜色](/zh-CN/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)的成员，包括 `theme_color` 和 `background_color`。

- [`start_url`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
  - : 用户启动 PWA 时的起始页面。

- [`display`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : 控制应用程序的显示模式，包括 `fullscreen`、`standalone`，后者可以将 PWA 显示为[独立应用程序](/zh-CN/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)、`minimal-ui`，类似独立视图但具有用于控制导航的 UI 元素，以及 `browser`，即在常规浏览器视图中打开应用程序。

还有一个 [`orientation`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/orientation) 成员，用于将 PWA 的默认方向定义为 `portrait` 或 `landscape`。由于我们的应用程序在两种方向下都能很好地工作，因此我们将省略此成员。

### 颜色

- [`theme_color`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : 默认的[操作系统和浏览器 UI 元素的颜色](/zh-CN/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#定义主题色)，例如某些移动体验中的状态栏和桌面操作系统上的应用程序标题栏。
- [`background_color`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : 在 CSS 加载之前，显示为[应用程序背景](/zh-CN/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#定制应用窗口背景色)的占位符颜色。为了在应用启动和加载之间创建平滑过渡，建议使用声明为应用程序 [`background-color`](/zh-CN/docs/Web/CSS/Reference/Properties/background-color) 颜色的 [`<color>`](/zh-CN/docs/Web/CSS/Reference/Values/color_value)。

### 任务

在之前任务开始创建的清单文件中添加外观定义。

### 示例解决方案

由于示例应用程序是一个单页面，我们可以使用 `"/"` 作为 `start_url`，或者完全省略该成员。出于同样的原因，我们可以通过将 `display` 设置为 `standalone` 来不显示浏览器 UI 而显示应用程序。

在[我们的 CSS](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_内容) 中，`background-color: #efe;` 被设置在 `body` 元素选择器上。我们使用 `#eeffee` 以确保从占位符外观到应用加载之间实现平滑过渡。

```js
{
  "name": "...",
  "short_name": "...",
  "description": "...",
  "start_url": "/",
  "theme_color": "#eeffee",
  "background_color": "#eeffee",
  "display": "standalone"
}
```

## 应用图标

PWA 图标帮助用户识别你的应用程序，使其更具视觉吸引力，并提高可发现性。PWA 应用图标出现在主屏幕、应用启动器或应用商店搜索结果中。渲染的图标大小和文件要求因显示位置和显示方而异。清单文件是定义图像的地方。

在清单 JSON 对象中，`icons` 成员指定用于不同上下文的一个或多个图标对象数组，每个对象都有一个 `src` 和 `sizes` 成员，还有可选的 `type` 和 `purpose` 成员。每个图标对象的 `src` 列出单个图像文件的源。`sizes` 成员提供空格分隔的尺寸列表，指明应该对该特定图像使用哪些尺寸，或者使用关键字 `any`；该值与 {{HTMLElement("link")}} 元素的 [`sizes`](/zh-CN/docs/Web/HTML/Reference/Elements/link#sizes) 属性相同。`type` 成员列出图像的 MIME 类型。

```js
{
  "name": "MyApp",
  "icons": [
    {
      "src": "icons/tiny.webp",
      "sizes": "48x48"
    },
    {
      "src": "icons/small.png",
      "sizes": "72x72 96x96 128x128 256x256",
      "purpose": "maskable"
    },
    {
      "src": "icons/large.png",
      "sizes": "512x512"
    },
    {
      "src": "icons/scalable.svg",
      "sizes": "any"
    }
  ]
}
```

所有图标都应该有相同的外观和感觉，以确保用户可以识别你的 PWA。但图标越大，它可以包含的细节就越丰富。尽管所有图标文件都是正方形的，但有些操作系统会以不同的形状渲染图标，裁剪部分区域或“遮挡”图标以适应 UI，或者如果图标不可遮挡则会缩小并居中放置在背景上。[安全区域](/zh-CN/docs/Web/Progressive_web_apps/How_to/Define_app_icons#支持遮挡)，即图标被遮挡为圆形时也会正常渲染的内部 80% 区域。通过将 `purpose` 成员设置为 `maskable`，可以将图标定义为[自适应图标](https://web.developers.google.cn/articles/maskable-icon)。

在 Safari 以及 iOS 和 iPadOS 中，如果通过 {{HTMLElement("link")}} 在 HTML 文档的 {{HTMLElement("head")}} 中包含[非标准的 `apple-touch-icon`](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#在你的站点增加自定义图标)，它们会优先于清单中声明的图标。

### 任务

将图标添加到你一直在构建的清单文件中。

围绕经期跟踪器的“循环”和“周期”这两个词以及我们选择的绿色主题色，我们可以将所有图标图像设计成浅绿色正方形，中间有一个绿色圆圈。我们最小尺寸的图标文件 `circle.ico` 只是一个代表句号标点符号和应用程序主题颜色的圆圈；而中间尺寸的图像 `circle.svg`、`tire.svg` 和 `wheel.svg` 则随着尺寸变大而增加更多细节，从简单的圆圈变成轮胎；我们最大尺寸的图标则是一个有辐条和阴影的精细轮子。不过，设计图标已经超出了本教程的范围。

```html hidden
<div>
  <img alt="一个绿色圆圈" src="circle.svg" role="img" />
  <img alt="一个简单的轮子" src="tire.svg" role="img" />
  <img alt="一个详细的轮子" src="wheel.svg" role="img" />
</div>
```

```css hidden
div {
  display: flex;
  gap: 5px;
}
img {
  width: 33%;
}
```

{{EmbedLiveSample("PWA iconography", 600, 250)}}

### 示例解决方案

```js
{
  "name": "...",
  "short_name": "...",
  "description": "...",
  "start_url": "...",
  "theme_color": "...",
  "background_color": "...",
  "display": "...",
  "icons": [
    {
      "src": "circle.ico",
      "sizes": "48x48"
    },
    {
      "src": "icons/circle.svg",
      "sizes": "72x72 96x96",
      "purpose": "maskable"
    },
    {
      "src": "icons/tire.svg",
      "sizes": "128x128 256x256"
    },
    {
      "src": "icons/wheel.svg",
      "sizes": "512x512"
    }
  ]
}
```

## 将清单添加到应用中

你现在已经有一个完全可用的清单文件了。是时候保存它并从我们的 HTML 文件中链接到它了。

清单文件的文件扩展名可以是规范建议的 `.webappmanifest`。但是，作为 JSON 文件，它最常见的保存扩展名是浏览器支持的 `.json`。

PWA 需要从应用的 HTML 文档中链接到清单文件。我们已经有一个功能完全的应用，但它还不是 PWA，因为它还没有链接到我们的外部 manifest JSON 文件。为了包含外部 JSON 资源，我们使用 `<link>` 元素，带有 `rel="manifest"` 属性，并将 `href` 属性设置为资源的位置。

```html
<link rel="manifest" href="cycletracker.json" />
```

`<link>` 元素最常用于链接样式表，在 PWA 中，它用于链接必须的清单文件，但也用于[建立站点图标](/zh-CN/docs/Web/HTML/Reference/Attributes/rel#图标)（包括“favicon”风格的图标和移动设备主屏幕和应用程序上的图标）等其他用途。

```html
<link rel="icon" href="icons/circle.svg" />
```

使用 `.webmanifest` 扩展名时，如果你的服务器不支持那种 MIME 类型，请设置 `type="application/manifest+json"`。

#### 任务

保存你在上面的步骤中创建的清单文件，然后从 `index.html` 文件中链接到它。

可选地，也可以从 HTML 中链接到一个快捷图标。

#### 示例解决方案

`index.html` 的 {{HTMLelement("head")}} 现在可能如下所示：

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Cycle Tracker</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="manifest" href="cycletracker.json" />
  <link rel="icon" href="icons/circle.svg" />
</head>
```

查看 [`cycletracker.json` 文件](https://mdn.github.io/pwa-examples/cycletracker/Manifest_file/cycletracker.json)和在 GitHub 上查看[项目源代码](https://github.com/mdn/pwa-examples/tree/master/cycletracker/Manifest_file)。

有了清单文件，Safari 会将你的网站识别为 web 应用。要使 web 应用成为完整的 PWA, 我们仍需要添加 service worker。

## 调试清单文件

一些浏览器开发者工具可以洞察应用清单文件。在 Edge、Firefox 和 Chrome 开发者工具中，清单成员及其值可在“Application”面板下看到。

![在开发者工具中，左侧面板包含指向清单的链接。右侧显示应用清单文件，文件名称是一个指向 JSON 文件的链接。](debugger_devtools.jpg)

Manifest 应用面板提供了清单文件名称作为链接，以及标识、外观和图标部分。

![标识和外观清单成员以及存在的任何值。](manifest_identity_and_presentation.jpg)

支持的清单成员将显示出来，以及所有包含的值。在此截图中，虽然我们没有包括 `orientation` 或 `id` 成员，但它们都被列出来了。应用面板可以用来查看清单成员，甚至可以了解：在这个例子中，我们了解到要指定与当前标识匹配的应用 Id，需要将 `id` 字段设置为“/”。

![由于我们没有 service worker，我们的应用不是可安装的 PWA。](manifest_installability.jpg)

Chrome 和 Edge 还提供错误和警告、协议处理程序以及改进清单和图标的信息。

我们的 web 应用没有任何协议处理程序；这是一个本教程未涵盖的主题。如果我们包含一些协议处理程序，它们会在“Protocol Handlers”下找到。由于该部分为空，开发者工具会链接到该主题的更多信息。

![清单文件中包含的四个图标，已选中“仅显示可遮罩图标的最小安全区域”以移除背景。](manifest_icons.jpg)

清单面板还包括关于可遮罩图标安全区域的信息，以及指向 [PWA 图像生成器](https://www.pwabuilder.com/imageGenerator)的链接。该工具为 Android、Apple 操作系统和 Windows 创建 100 多个正方形 PNG 图像，以及列出所有图像及其尺寸的 JSON 对象。它生成的图像可能不符合你的需要，但是为每个操作系统生成的图像尺寸列表展示了 PWA 可以提供服务的位置和方式的多样性。

开发者工具在识别支持的清单成员方面非常有用。请注意，Firefox 开发者工具中甚至包括 `dir`、`lang`、`orientation`、`scope` 和 `id` 的条目，尽管我们的清单文件没有包括这些成员。Firefox 还包括每个图标的 `purpose` 成员的值，如果目的没有明确设置，会显示 `any`。

![Firefox 开发者工具中的 Manifest 面板，显示未包含的 dir、scope 和 id 成员的值，以及没有关联值的 lang 和 orientation 成员。](manifest_firefox.jpg)

## 接下来

要从其他浏览器和所有支持 PWA 的操作系统中获得 PWA 的好处，我们需要[添加 service worker](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)，我们将在不使用框架的情况下完成这项工作。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
