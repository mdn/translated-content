---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">类型</th>
      <td>数组（<code>Array</code>）</td>
    </tr>
    <tr>
      <th scope="row">必要</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td>
        <pre class="brush: json">
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

让浏览器将[content scripts](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)加载到匹配网址的网站上

此键（content_scripts）是一个数组，每个项目都是一个满足下列条件的对象：

- **必须**包含一个名为 **`matches`** 的键，指定要加载脚本的 URL 的格式
- **可以**包含一个名为 **`js`** 或 **`css`** 的键，列出要加载到匹配页面的脚本
- **可以**包含控制如何加载、何时加载等方面更精细的属性

下面表格列出了所有与你可以使用的键：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">名称</th>
      <th scope="col">类型</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a id="all_frames" name="all_frames"><code>all_frames</code></a>
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>
          <code>true</code>: 将<code><a href="#js">js</a></code
          >和<code><a href="#css">css</a></code
          >注入该页面所有的框架（frame）中
        </p>
        <p><code>false</code>: 仅注入到顶层</p>
        <p>默认为 false</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="css" name="css"><code>css</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          一个数组，包含将会被注入到匹配页面的 CSS 文件的路径（路径相对于
          manifest.json）。
        </p>
        <p>在加载 DOM 之前，文件将会按指定的顺序注入。</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_globs" name="exclude_globs"
          ><code>exclude_globs</code></a
        >
      </td>
      <td><code>Array</code></td>
      <td>
        <div class="geckoVersionNote">Firefox 自 48 版本开始支持 globs</div>
        <p>
          包含通配符的字符串数组。请参阅下面的<a href="#Matching_URL_patterns"
            >匹配 URL 格式</a
          >。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_matches" name="exclude_matches"
          ><code>exclude_matches</code></a
        >
      </td>
      <td><code>Array</code></td>
      <td>
        一个<a href="/zh-CN/Add-ons/WebExtensions/match_patterns"
          >match patterns</a
        >的数组，请参阅下面的<a href="#Matching_URL_patterns">匹配 URL 格式</a
        >。
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs" name="include_globs"
          ><code>include_globs</code></a
        >
      </td>
      <td><code>Array</code></td>
      <td>
        <div class="geckoVersionNote">Firefox 自 48 版本开始支持 globs</div>
        包含通配符的字符串数组。请参阅下面的<a href="#Matching_URL_patterns"
          >匹配 URL 格式</a
        >。
      </td>
    </tr>
    <tr>
      <td>
        <a id="js" name="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          一个数组，包含将会被注入到匹配页面的 JS 文件的路径（路径相对于
          manifest.json）。
        </p>
        <p>
          文件将会按指定的顺序注入。这意味着如果你想在另一个脚本中包含
          jQuery，可以这样做：
        </p>
        <pre
          class="brush: json"
        ><code>"js": ["jquery.js", "my-content-script.js"]</code></pre>
        <p>接下来，<code>"my-content-script.js"</code>可以使用 jQuery.</p>
        <p>文件将在<a href="#run_at">run_at</a>指定的时间注入。</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="matches" name="matches"><code>matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          一个<a href="/zh-CN/Add-ons/WebExtensions/match_patterns"
            >match patterns</a
          >的数组，请参阅下面的<a href="#Matching_URL_patterns">匹配 URL 格式</a
          >。
        </p>
        <p>这是唯一的必须键。</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="run_at" name="run_at"><code>run_at</code></a>
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          此选项指定在<a href="#js">“js”键</a
          >中的脚本何时被注入。你可以使用下列的三个字符串之一，每个字符串都代表加载文档过程中的不同状态。状态直接对应于{{domxref("Document/readyState", "Document.readyState")}}：
        </p>
        <ul>
          <li>
            “<code>document_start</code>”：对应于正在加载。DOM 仍在加载中。
          </li>
          <li>
            “<code>document_end</code>”：对应于可交互。DOM
            已完成加载，但脚本和图像等资源可能仍在加载。
          </li>
          <li>
            “<code>document_idle</code>”：对应完成。文档及其所有资源已完成加载。
          </li>
        </ul>
        <p>默认值为“document_idle”。</p>
        <p>
          在所有情况下，<a href="#js">js 键</a>中的文件都会在<a href="#css"
            >css 键</a
          >中的文件之后注入。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 匹配 URL 格式

“content_scripts”键基于 URL 匹配将 content scripts 注入到网页上：如果网页的 URL 与键中的规则匹配，则将注入脚本。“content_scripts”中有四个属性，可以用于此规则：

- `matches`: 一个关于[match patterns](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)的数组
- `exclude_matches`: 一个关于[match patterns](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)的数组
- `include_globs`: 一个关于[globs](#globs)的数组
- `exclude_globs`: 一个关于[globs](#globs)的数组

要匹配这些属性之一，网址必须与其数组中的至少一个项匹配。例如，指定一个属性：

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

"http\://example.org/"和"http\://example.com/"都将会匹配

由于 matches 是唯一的强制性键，其他三个键用于进一步限制匹配的 URL。要匹配作为一个整体的键，网址必须：

1. 匹配 matches 属性
2. 并且，匹配 include_globs 属性（如果有）
3. 并且，不匹配`exclude_matches`属性（如果有）
4. 并且，不匹配`exclude_globs`属性（如果有）

### glob

Firefox 自 48 版本开始支持 glob。

glob 只是一个可以包含通配符的字符串。有两种类型的通配符，你可以在一个 glob 中组合使用它们：

- "\*" 匹配零个或多个字符
- "?" 匹配一个字符

例如，`"*na?i"` 会匹配 `"illuminati"` 和 `"annunaki"`，但不会匹配 `"sagnarelli"`.

## 示例

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]
```

这会将 content 脚本“borderify.js”插入到“mozilla.org”或其任何子域下的所有页面，无论是 HTTP 还是 HTTPS。

```json
  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

这会将两个 content 脚本插入到“mozilla.org”及其任何子域（除“developer.mozilla.org”外）的所有页面中，无论是通过 HTTP 还是 HTTPS。

content 脚本有相同的 DOM 视图，并按照它们在数组中出现的顺序注入，因此“borderify.js”可以访问由“jquery.js”添加的全局变量。

## Browser compatibility

{{Compat}}
