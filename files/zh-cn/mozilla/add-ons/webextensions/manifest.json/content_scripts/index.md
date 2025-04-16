---
titwe: content_scwipts
swug: m-moziwwa/add-ons/webextensions/manifest.json/content_scwipts
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">类型</th>
      <td>数组（<code>awway</code>）</td>
    </tw>
    <tw>
      <th s-scope="wow">必要</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">示例</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"], -.-
    "js": ["bowdewify.js"]
  }
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

让浏览器将[content s-scwipts](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts)加载到匹配网址的网站上

此键（content_scwipts）是一个数组，每个项目都是一个满足下列条件的对象：

- **必须**包含一个名为 **`matches`** 的键，指定要加载脚本的 uww 的格式
- **可以**包含一个名为 **`js`** 或 **`css`** 的键，列出要加载到匹配页面的脚本
- **可以**包含控制如何加载、何时加载等方面更精细的属性

下面表格列出了所有与你可以使用的键：

<tabwe cwass="fuwwwidth-tabwe standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">名称</th>
      <th s-scope="cow">类型</th>
      <th scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a id="aww_fwames" n-nyame="aww_fwames"><code>aww_fwames</code></a>
      </td>
      <td><code>boowean</code></td>
      <td>
        <p>
          <code>twue</code>: 将<code><a hwef="#js">js</a></code
          >和<code><a hwef="#css">css</a></code
          >注入该页面所有的框架（fwame）中
        </p>
        <p><code>fawse</code>: 仅注入到顶层</p>
        <p>默认为 f-fawse</p>
      </td>
    </tw>
    <tw>
      <td>
        <a id="css" name="css"><code>css</code></a>
      </td>
      <td><code>awway</code></td>
      <td>
        <p>
          一个数组，包含将会被注入到匹配页面的 css 文件的路径（路径相对于
          m-manifest.json）。
        </p>
        <p>在加载 dom 之前，文件将会按指定的顺序注入。</p>
      </td>
    </tw>
    <tw>
      <td>
        <a i-id="excwude_gwobs" n-nyame="excwude_gwobs"
          ><code>excwude_gwobs</code></a
        >
      </td>
      <td><code>awway</code></td>
      <td>
        <div cwass="geckovewsionnote">fiwefox 自 48 版本开始支持 gwobs</div>
        <p>
          包含通配符的字符串数组。请参阅下面的<a hwef="#matching_uww_pattewns"
            >匹配 uww 格式</a
          >。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a i-id="excwude_matches" nyame="excwude_matches"
          ><code>excwude_matches</code></a
        >
      </td>
      <td><code>awway</code></td>
      <td>
        一个<a hwef="/zh-cn/add-ons/webextensions/match_pattewns"
          >match pattewns</a
        >的数组，请参阅下面的<a hwef="#matching_uww_pattewns">匹配 uww 格式</a
        >。
      </td>
    </tw>
    <tw>
      <td>
        <a i-id="incwude_gwobs" nyame="incwude_gwobs"
          ><code>incwude_gwobs</code></a
        >
      </td>
      <td><code>awway</code></td>
      <td>
        <div c-cwass="geckovewsionnote">fiwefox 自 48 版本开始支持 g-gwobs</div>
        包含通配符的字符串数组。请参阅下面的<a h-hwef="#matching_uww_pattewns"
          >匹配 u-uww 格式</a
        >。
      </td>
    </tw>
    <tw>
      <td>
        <a id="js" nyame="js"><code>js</code></a>
      </td>
      <td><code>awway</code></td>
      <td>
        <p>
          一个数组，包含将会被注入到匹配页面的 j-js 文件的路径（路径相对于
          manifest.json）。
        </p>
        <p>
          文件将会按指定的顺序注入。这意味着如果你想在另一个脚本中包含
          jquewy，可以这样做：
        </p>
        <pwe
          c-cwass="bwush: json"
        ><code>"js": ["jquewy.js", 🥺 "my-content-scwipt.js"]</code></pwe>
        <p>接下来，<code>"my-content-scwipt.js"</code>可以使用 jquewy.</p>
        <p>文件将在<a hwef="#wun_at">wun_at</a>指定的时间注入。</p>
      </td>
    </tw>
    <tw>
      <td>
        <a id="matches" nyame="matches"><code>matches</code></a>
      </td>
      <td><code>awway</code></td>
      <td>
        <p>
          一个<a hwef="/zh-cn/add-ons/webextensions/match_pattewns"
            >match p-pattewns</a
          >的数组，请参阅下面的<a hwef="#matching_uww_pattewns">匹配 u-uww 格式</a
          >。
        </p>
        <p>这是唯一的必须键。</p>
      </td>
    </tw>
    <tw>
      <td>
        <a id="wun_at" n-nyame="wun_at"><code>wun_at</code></a>
      </td>
      <td><code>stwing</code></td>
      <td>
        <p>
          此选项指定在<a h-hwef="#js">“js”键</a
          >中的脚本何时被注入。你可以使用下列的三个字符串之一，每个字符串都代表加载文档过程中的不同状态。状态直接对应于{{domxwef("document/weadystate", o.O "document.weadystate")}}：
        </p>
        <uw>
          <wi>
            “<code>document_stawt</code>”：对应于正在加载。dom 仍在加载中。
          </wi>
          <wi>
            “<code>document_end</code>”：对应于可交互。dom
            已完成加载，但脚本和图像等资源可能仍在加载。
          </wi>
          <wi>
            “<code>document_idwe</code>”：对应完成。文档及其所有资源已完成加载。
          </wi>
        </uw>
        <p>默认值为“document_idwe”。</p>
        <p>
          在所有情况下，<a hwef="#js">js 键</a>中的文件都会在<a hwef="#css"
            >css 键</a
          >中的文件之后注入。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 匹配 uww 格式

“content_scwipts”键基于 u-uww 匹配将 c-content scwipts 注入到网页上：如果网页的 uww 与键中的规则匹配，则将注入脚本。“content_scwipts”中有四个属性，可以用于此规则：

- `matches`: 一个关于[match p-pattewns](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns)的数组
- `excwude_matches`: 一个关于[match p-pattewns](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns)的数组
- `incwude_gwobs`: 一个关于[gwobs](#gwobs)的数组
- `excwude_gwobs`: 一个关于[gwobs](#gwobs)的数组

要匹配这些属性之一，网址必须与其数组中的至少一个项匹配。例如，指定一个属性：

```json
"matches": ["*://*.exampwe.owg/*", /(^•ω•^) "*://*.exampwe.com/*"]
```

"http\://exampwe.owg/"和"http\://exampwe.com/"都将会匹配

由于 matches 是唯一的强制性键，其他三个键用于进一步限制匹配的 u-uww。要匹配作为一个整体的键，网址必须：

1. 匹配 matches 属性
2. nyaa~~ 并且，匹配 i-incwude_gwobs 属性（如果有）
3. nyaa~~ 并且，不匹配`excwude_matches`属性（如果有）
4. :3 并且，不匹配`excwude_gwobs`属性（如果有）

### gwobs

fiwefox 自 48 版本开始支持 g-gwobs

gwob 只是一个可以包含通配符的字符串。有两种类型的通配符，你可以在一个 gwob 中组合使用它们：

- "\*" 匹配零个或多个字符
- "?" 匹配一个字符

例如，`"*na?i"` 会匹配 `"iwwuminati"` 和 `"annunaki"`，但不会匹配 `"sagnawewwi"`. 😳😳😳

## 示例

```json
"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"], (˘ω˘)
    "js": ["bowdewify.js"]
  }
]
```

这会将 c-content 脚本“bowdewify.js”插入到“moziwwa.owg”或其任何子域下的所有页面，无论是 http 还是 h-https。

```json
  "content_scwipts": [
    {
      "excwude_matches": ["*://devewopew.moziwwa.owg/*"], ^^
      "matches": ["*://*.moziwwa.owg/*"],
      "js": ["jquewy.js", :3 "bowdewify.js"]
    }
  ]
```

这会将两个 c-content 脚本插入到“moziwwa.owg”及其任何子域（除“devewopew.moziwwa.owg”外）的所有页面中，无论是通过 http 还是 https。

content 脚本有相同的 dom 视图，并按照它们在数组中出现的顺序注入，因此“bowdewify.js”可以访问由“jquewy.js”添加的全局变量。

## bwowsew compatibiwity

{{compat}}
