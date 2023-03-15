---
title: icons
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icons
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"icons": {
  "48": "icon.png",
  "96": "icon@2x.png"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

The `icons` key specifies icons for your extension. Those icons will be used to represent the extension in components such as the Add-ons Manager.

It consists of key-value pairs of image size in px and image path relative to the root directory of the extension.

If `icons` is not supplied, a standard extension icon will be used by default.

You should supply at least a main extension icon, ideally 48x48 px in size. This is the default icon that will be used in the Add-ons Manager. You may, however, supply icons of any size and Firefox will attempt to find the best icon to display in different components.

Firefox will consider the screen resolution when choosing an icon. To deliver the best visual experience to users with high-resolution displays, such as Retina displays, provide double-sized versions of all your icons.

## 例

The keys in the `icons` object specify the icon size in px, values specify the relative icon path. This example contains a 48px extension icon and a larger version for high-resolution displays.

```json
"icons": {
  "48": "icon.png",
  "96": "icon@2x.png"
}
```

## SVG

You can use SVG and the browser will scale your icon appropriately. There are currently two caveats though:

1. You need to specify a viewBox in the image. E.g.:

    ```html
    <svg viewBox="0 0 48 48" width="48" height="48" ...
    ```

2. Even though you can use one file, you still need to specify various size of the icon in your manifest. E.g.:

    ```json
    "icons": {
      "48": "icon.svg",
      "96": "icon.svg"
    }
    ```

> **メモ:** If you are using a program like Inkscape for creating SVG, you might want to save it as a "plain SVG". Firefox might be confused by various special namespaces and not display your icon.

## ブラウザーの互換性

{{Compat("webextensions.manifest.icons")}}
