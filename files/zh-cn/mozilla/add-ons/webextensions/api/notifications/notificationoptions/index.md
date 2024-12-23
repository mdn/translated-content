---
title: notifications.NotificationOptions
slug: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
l10n:
  sourceCommit: bb0286344d812030e05e43214159f0740828190b
---

{{AddonSidebar}}

该类型包含所有用于进行以下操作的数据：

- 使用 {{WebExtAPIRef("notifications.create()")}} 创建通知，
- 使用 {{WebExtAPIRef("notifications.update()")}} 更新现有通知。

## 类型

该类型的值为对象，包含下列属性：

前三个属性 `type`、`title`、`message` 在 {{WebExtAPIRef("notifications.create()")}} 中是必需的，但在 {{WebExtAPIRef("notifications.update()")}} 中是可选的。Firefox 目前仅支持 `type`、`title`、`message` 和 `iconUrl` 属性，并且 `type` 属性的只支持取 `'basic'` 值。

- `type`
  - : {{WebExtAPIRef("notifications.TemplateType")}}。你所希望的通知类型。根据你的选择，某些其他属性可能是必需的或者是不允许的。
- `message`
  - : `string`。通知的正文内容。
- `title`
  - : `string`。通知的标题。
- `iconUrl` {{optional_inline}}
  - : `string`。指向通知中显示的图标的 URL。URL 可以是：data URL、blob URL、http 或 https URL，或者是扩展内的文件的相对 URL。使用 SVG 图像时，请确保图像包含高度和宽度属性，例如 `<svg width="96" height="96"…`。否则，图像可能无法显示。
- `contextMessage` {{optional_inline}}
  - : `string`。要显示的补充性内容。
- `priority` {{optional_inline}}
  - : `number`。通知的优先级：可以是 0、1 或 2。如果省略，则默认值为 0。
- `eventTime` {{optional_inline}}
  - : `number`。通知的时间戳，以[自纪元以来的毫秒数](https://zh.wikipedia.org/wiki/UNIX时间)表示。
- `buttons` {{optional_inline}}

  - : `button` 的 `array`：包含至多 2 个要包含在通知中的按钮。你可以使用 {{WebExtAPIRef("notifications.onButtonClicked")}} 监听按钮点击事件。每个按钮都是一个对象，具有以下属性：

    - `title`
      - : `string`。按钮的标题。
    - `iconUrl` {{optional_inline}}
      - : `string`。指向按钮图标的 URL。

- `imageUrl`

  - : `string`。指向通知中显示的图像的 URL。URL 可以是：data URL、blob URL、http 或 https URL，或者是扩展内的文件的相对 URL。使用 SVG 图像时，请确保图像包含高度和宽度属性，例如 `<svg width="96" height="96"…`。否则，图像可能无法显示。

    _该属性仅在 `type` 为 `"image"` 时可用。在这种情况下，如果 `NotificationOptions` 用于 {{WebExtAPIRef("notifications.create()")}}，则它是必需的；如果用于 {{WebExtAPIRef("notifications.update()")}}，则它是可选的。_

- `items`

  - : `item` 的 `array`。通知中包含的项目。根据操作系统通知机制的设置，你提供的某些项目可能不会显示。每个项目都是一个对象，具有以下属性：

    - `title`
      - : `string`。在项目中显示的标题。
    - `message`
      - : `string`。在项目中显示的消息。

    _该属性仅在 `type` 为 `"list"` 时可用。在这种情况下，如果 `NotificationOptions` 用于 {{WebExtAPIRef("notifications.create()")}}，则它是必需的；如果用于 {{WebExtAPIRef("notifications.update()")}}，则它是可选的。_

- `progress`

  - : `integer`。介于 0 和 100 之间的整数，用于表示进度指示器中的当前进度。

    _该属性仅在 `type` 为 `"progress"` 时可用。在这种情况下，如果 `NotificationOptions` 用于 {{WebExtAPIRef("notifications.create()")}}，则它是必需的；如果用于 {{WebExtAPIRef("notifications.update()")}}，则它是可选的。_

需要注意，`appIconMaskUrl` 和 `isClickable` 不受支持。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications) API。
