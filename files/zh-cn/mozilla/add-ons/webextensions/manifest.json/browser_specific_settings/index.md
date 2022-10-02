---
title: applications
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
---

{{AddonSidebar}}

> **备注：** 注意这个 key 不被 Blink-based 浏览器 (Google Chrome 和 Opera) 支持。如果你在插件中包含了这个 key，当在这些浏览器中调用时虽然能用但是会显示警告。

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
          href="/zh-CN/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID"
          >When do you need an Add-on ID</a
        ><a
          href="/zh-CN/Add-ons/WebExtensions/manifest.json/applications#When_do_I_need_the_applications_key"
          >?</a
        >)。在 Firefox 48 版本之前为强制要求。
      </td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td>
        <pre class="brush: json">
"applications": {
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

`applications` key 包含特定于主机应用程序的键。

目前只包含了一个 key：`gecko`，其中包含了 4 个 attributes:

- `id`即[extension ID](/zh-CN/Add-ons/Install_Manifests#id)。从 Firefox 48 起为可选项，在此之前为强制必须项。参看[WebExtensions and the Add-on ID](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID)来确认何时需要定义附加组件 ID。
- `strict_min_version`: Gecko 所能支持的最小版本号。不允许使用"\*"来定义版本号。默认值为 "42a1"。
- `strict_max_version`: Gecko 所能支持的最大版本号。如果安装或运行附加组件的 Firefox 版本号高于这个最大版本号，附加组件将不能运行或不允许被安装。默认值为"\*"，意思为不对最大版本号做检查。
- `update_url`为链接到[add-on update manifest](/zh-CN/Add-ons/Updates)的链接。注意链接必须以"https"开头。这是为了使你自己就能够管理附加组件的更新 (如不通过 AMO)。

## Chrome 不兼容性

你不能在 Chrome 附加组件中使用这个 key。

## 示例

示例中包含了所有可能的 key。注意你通常不会包含`strict_max_version`或`update_url`key 在大部分附加组件中。

```json
"applications": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0",
    "strict_max_version": "50.*",
    "update_url": "https://example.com/updates.json"
  }
}
```
