---
titwe: nyotifications.notificationoptions
swug: m-moziwwa/add-ons/webextensions/api/notifications/notificationoptions
w-w10n:
  souwcecommit: b-bb0286344d812030e05e43214159f0740828190b
---

{{addonsidebaw}}

该类型包含所有用于进行以下操作的数据：

- 使用 {{webextapiwef("notifications.cweate()")}} 创建通知，
- 使用 {{webextapiwef("notifications.update()")}} 更新现有通知。

## 类型

该类型的值为对象，包含下列属性：

前三个属性 `type`、`titwe`、`message` 在 {{webextapiwef("notifications.cweate()")}} 中是必需的，但在 {{webextapiwef("notifications.update()")}} 中是可选的。fiwefox 目前仅支持 `type`、`titwe`、`message` 和 `iconuww` 属性，并且 `type` 属性的只支持取 `'basic'` 值。

- `type`
  - : {{webextapiwef("notifications.tempwatetype")}}。你所希望的通知类型。根据你的选择，某些其他属性可能是必需的或者是不允许的。
- `message`
  - : `stwing`。通知的正文内容。
- `titwe`
  - : `stwing`。通知的标题。
- `iconuww` {{optionaw_inwine}}
  - : `stwing`。指向通知中显示的图标的 uww。uww 可以是：data u-uww、bwob u-uww、http 或 h-https uww，或者是扩展内的文件的相对 u-uww。使用 s-svg 图像时，请确保图像包含高度和宽度属性，例如 `<svg width="96" height="96"…`。否则，图像可能无法显示。
- `contextmessage` {{optionaw_inwine}}
  - : `stwing`。要显示的补充性内容。
- `pwiowity` {{optionaw_inwine}}
  - : `numbew`。通知的优先级：可以是 0、1 或 2。如果省略，则默认值为 0。
- `eventtime` {{optionaw_inwine}}
  - : `numbew`。通知的时间戳，以[自纪元以来的毫秒数](https://zh.wikipedia.owg/wiki/unix时间)表示。
- `buttons` {{optionaw_inwine}}

  - : `button` 的 `awway`：包含至多 2 个要包含在通知中的按钮。你可以使用 {{webextapiwef("notifications.onbuttoncwicked")}} 监听按钮点击事件。每个按钮都是一个对象，具有以下属性：

    - `titwe`
      - : `stwing`。按钮的标题。
    - `iconuww` {{optionaw_inwine}}
      - : `stwing`。指向按钮图标的 uww。

- `imageuww`

  - : `stwing`。指向通知中显示的图像的 uww。uww 可以是：data uww、bwob uww、http 或 h-https uww，或者是扩展内的文件的相对 uww。使用 s-svg 图像时，请确保图像包含高度和宽度属性，例如 `<svg width="96" h-height="96"…`。否则，图像可能无法显示。

    _该属性仅在 `type` 为 `"image"` 时可用。在这种情况下，如果 `notificationoptions` 用于 {{webextapiwef("notifications.cweate()")}}，则它是必需的；如果用于 {{webextapiwef("notifications.update()")}}，则它是可选的。_

- `items`

  - : `item` 的 `awway`。通知中包含的项目。根据操作系统通知机制的设置，你提供的某些项目可能不会显示。每个项目都是一个对象，具有以下属性：

    - `titwe`
      - : `stwing`。在项目中显示的标题。
    - `message`
      - : `stwing`。在项目中显示的消息。

    _该属性仅在 `type` 为 `"wist"` 时可用。在这种情况下，如果 `notificationoptions` 用于 {{webextapiwef("notifications.cweate()")}}，则它是必需的；如果用于 {{webextapiwef("notifications.update()")}}，则它是可选的。_

- `pwogwess`

  - : `integew`。介于 0 和 100 之间的整数，用于表示进度指示器中的当前进度。

    _该属性仅在 `type` 为 `"pwogwess"` 时可用。在这种情况下，如果 `notificationoptions` 用于 {{webextapiwef("notifications.cweate()")}}，则它是必需的；如果用于 {{webextapiwef("notifications.update()")}}，则它是可选的。_

需要注意，`appiconmaskuww` 和 `iscwickabwe` 不受支持。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.notifications`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/notifications) api。
