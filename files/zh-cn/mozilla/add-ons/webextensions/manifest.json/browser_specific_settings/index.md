---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
---

> [!NOTE]
> 注意这个 key 不被 Blink-based 浏览器 (Google Chrome 和 Opera) 支持。如果你在插件中包含了这个 key，当在这些浏览器中调用时虽然能用但是会显示警告。

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">类型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">强制性</th>
      <td>
        通常不做强制性要求（详细参见<a
          href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id"
          >什么时候需要附加组件 ID？</a
        >。）如果扩展 ID 不能确定，则必需，参见 <a
          href="#firefox_gecko_属性"
          ><code>browser_specific_settings.gecko.id</code></a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td>
        <pre class="brush: json">
"browser_specific_settings": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## 描述

`browser_specific_settings` 键包含特定于主机应用程序的键。

### Firefox（Gecko）属性

- `id` 即扩展 ID。从 Firefox 48 起为可选项，在此之前为强制必须项。参见 [WebExtensions 和附加组件 ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) 来确认何时需要定义附加组件 ID。
- `strict_min_version`: Gecko 所能支持的最小版本号。不允许使用"\*"来定义版本号。默认值为 "42a1"。
- `strict_max_version`: Gecko 所能支持的最大版本号。如果安装或运行附加组件的 Firefox 版本号高于这个最大版本号，附加组件将不能运行或不允许被安装。默认值为"\*"，意思为不对最大版本号做检查。
- `update_url` 为链接到[扩展更新清单](https://extensionworkshop.com/documentation/manage/updating-your-extension/)的链接。注意链接必须以“https”开头。这是为了使你自己就能够管理附加组件的更新（如不通过 AMO）。

## 示例

示例中包含了所有可能的 key。注意你通常不会在大部分附加组件中包含 `strict_max_version` 和 `update_url`。

```json
"browser_specific_settings": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0",
    "strict_max_version": "50.*",
    "update_url": "https://example.com/updates.json"
  },
  "safari": {
    "strict_min_version": "14",
    "strict_max_version": "20"
  }
}
```

## 浏览器兼容性

{{Compat}}
