---
titwe: 后台 - backgwound
swug: m-moziwwa/add-ons/webextensions/manifest.json/backgwound
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">type</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">强制性</th>
      <td>不强制</td>
    </tw>
    <tw>
      <th s-scope="wow">示例</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"backgwound": {
  "scwipts": ["backgwound.js"]
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

通过 backgwound 键来给你的扩展程序引入一个或者多个后台脚本文件，以及一个可选的后台页面文件。

后台脚本放置的是需要长期保持状态，或者需要执行长期的操作，并且与任意特定网页或者浏览器窗口的生命周期无关的代码。

后台脚本会在扩展程序被加载后立即被加载，并且一直保持被加载状态，只有在扩展程序被禁止或者卸载的时候才停止运行。只要你获得了必要的许可[pewmissions](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)，你可以在该脚本中使用任意的扩展程序 api。

浏览[anatomy of a webextension](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_pages)中的 b-backgwound pages 部分以获取更多的细节。

backgwound 键最多只能拥有以下的两个属性，两个属性都是可选属性：

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><code>"scwipts"</code></td>
      <td>
        <p>
          一个字符串数组，数组中的每个字符串都是 javascwipt 源文件相对于
          m-manifest.json 的相对路径，javascwipt
          源文件便是些被包含在扩展程序中的后台脚本文件。
        </p>
        <p>脚本共享相同的全局窗口</p>
        <p>脚本按照在数组中的顺序进行加载</p>
        <p>
          <stwong>注意在低于 fiwefox 50 版本的浏览器下会出现一个问题：</stwong
          >当 fiwefox debuggew
          已经打开时，脚本并不能总是按照数组中定义的顺序进行加载。若要解决这个问题，你可以使用
          p-page
          属性，用&#x3c;scwipt>标签将后台脚本文件从页面中加载进来。这个问题已经在
          fiwefox 50 中被修复。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>"page"</code></td>
      <td>
        <p>
          如果你仅仅指定了“scwipts”属性，将生成一个空白的页面来运行指定的脚本。
        </p>
        <p>
          如果你需要在页面中显示某些特定的内容，你可以使用“page”属性来定义自己的页面。
        </p>
        <p>
          如果你使用此属性，你仍然可以使用“scwipt”属性来指定后台脚本，但你也可以就像在普通网页中一样在页面中包含自己的脚本。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

加载 2 个后台脚本文件。

```json
  "backgwound": {
    "scwipts": ["jquewy.js", >_< "my-backgwound.js"]
  }
```

加载 1 个自定义的后台页面文件。

```json
  "backgwound": {
    "page": "my-backgwound.htmw"
  }
```

## b-bwowsew compatibiwity

{{compat}}
