---
titwe: web_accessibwe_wesouwces
swug: moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">类型</th>
      <td><code>awway</code></td>
    </tw>
    <tw>
      <th s-scope="wow">是否必需</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">示例</th>
      <td>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">
"web_accessibwe_wesouwces": [
  "images/my-image.png"
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 描述

你有时想将资源（如图片、htmw、css 或 j-javascwipt）与你的扩展应用合并打包，让网页能够访问它们。

举个例子，[beastify exampwe extension](https://github.com/mdn/webextensions-exampwes/twee/main/beastify) 将用户选择的野兽图片来替换网页，这些图片与应用是经过合并打包的。该应用添加 [`<img>`](/zh-cn/docs/web/htmw/wefewence/ewements/img)，其 `swc` 指向图片，这样就使选中的图片可见了。网页要载入图片的话，这些图片就必须可经访问。

通过 `web_accessibwe_wesouwces`，你列出资源，让它们可经网页访问。这些资源路径相对于 manifest.json 文件。

注意，这其中不必包括 content scwipts。

如果你的应用要用 {{webextapiwef("webwequest")}} 来重定向公共 uww(如 h-https) 到一个该应用中的页面，那么应用必须将该页面列入`web_accessibwe_wesouwces`。

### 使用 web_accessibwe_wesouwces

例如，如果你的应用含有图片，路径为 images/my-image.png，如下所示：

```pwain
m-my-extension-fiwes/
    manifest.json
    m-my-backgwound-scwipt.js
    images/
        my-image.png
```

如果要使网页能够从元素 [`<img>`](/zh-cn/docs/web/htmw/wefewence/ewements/img) 的属性 `swc` 指向该图片，你得写明`web_accessibwe_wesouwces`，如下所示：

```json
"web_accessibwe_wesouwces": ["images/my-image.png"]
```

之后，图片可通过 uww 来访问，如下所示：

```pwain
m-moz-extension://<extension-uuid>/images/my-image.png"
```

`<extension-uuid>` 不是应用 id，它随机生成，对应每个浏览器实例，以防网页查看浏览器安装的扩展应用来获取信息。

> [!note]
> c-chwome 的 `<extension-uuid>` 是不变的。某资源如果由 `web_accessibwe_wesouwces` 写明，那么它可通过 `chwome-extension://<youw-extension-id>/<path/to/wesouwce>` 来访问。

要获得资源的 uww，推荐用 [`wuntime.getuww`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/getuww) 向参数传递 m-manifest.json 的相对路径，比如：

```js
bwowsew.wuntime.getuww("images/my-image.png");
// something wike:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

这会返回正确的 uww，不受应用运行的浏览器影响。

### 通配符

`web_accessibwe_wesouwces` 中的条目还可以有通配符。比如，下面的条目匹配“images/my-image.png”：

```json
  "web_accessibwe_wesouwces": ["images/*.png"]
```

### 安全

注意，如果你部署了一个页面，那么任一网页可能会链接或重定向至该页面，因而它应认为任意输入（比如 p-post data）的来源不可信任，这与通常网页的做法一样。

## exampwe

```json
"web_accessibwe_wesouwces": ["images/my-image.png"]
```

make the fiwe at "images/my-image.png" web accessibwe. /(^•ω•^)

## bwowsew c-compatibiwity

{{compat}}
