---
title: 匹配模式
slug: Mozilla/Add-ons/WebExtensions/Match_patterns
page-type: guide
browser-compat: webextensions.match_patterns.scheme
---

{{AddonSidebar}}

匹配模式是一种指定网址组的方法：一个匹配模式匹配特定的一组 URL。它们由 WebExtensions 在几个地方使用，最明显的是指定要将[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)加载到哪些文档中，并指定要向其中添加 [webRequest](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) 侦听器的 URL。

使用匹配模板的 API 通常接收一个匹配模板的列表，当 URL 匹配任何模式时会恰当的运行。看个例子 在 manifest.json 中的 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 关键字。

## 匹配模式结构

> **Note:** Some browsers don't support certain schemes.
> Check the [Browser compatibility table](#browser_compatibility) for details.
所有的匹配模式用一个字符串来定义，而且都是["<all_urls>"](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls) 模板的一部份，匹配模板包含三个部分：_scheme_、_host_ 和 _path_。scheme 和 host 用 `://` 分隔。

```
<scheme>://<host><path>
```

### 协议

_scheme_ 可能以下两种格式之一：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Form</th>
      <th scope="col">Matches</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>
        Only "http" and "https" and in some browsers also
        <a href="/zh-CN/docs/Web/API/WebSockets_API">"ws" and "wss"</a>.
      </td>
    </tr>
    <tr>
      <td>
        One of <code>http</code>, <code>https</code>, <code>ws</code>,
        <code>wss</code>, <code>ftp</code>, <code>data</code>,
        <code>file</code>, or <code>(chrome-)extension</code>.
      </td>
      <td>Only the given scheme.</td>
    </tr>
  </tbody>
</table>

### 主机

_host_ 组件可以采取三种形式之一：:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Form</th>
      <th scope="col">Matches</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>Any host.</td>
    </tr>
    <tr>
      <td><code>*.</code> followed by part of the hostname.</td>
      <td>The given host and any of its subdomains.</td>
    </tr>
    <tr>
      <td>A complete hostname, without wildcards.</td>
      <td>Only the given host.</td>
    </tr>
  </tbody>
</table>

_host_ must not include a port number.
只有当 _scheme_ 是 "file" 是 _host_ 可选的

值得注意的是通配符可能只会在开头显示。

### 路径

_path_ 组件必须以“/”开头。

之后，它可能随后包含“\*”通配符和网址路径中允许的任何字符的任意组合。与 _host_ 不同，_path_ 组件可能在中间或末尾包含“\*”通配符，并且“\*”通配符可以多次出现。

The value for the _path_ matches against the string which is the URL path plus the [URL query string](https://en.wikipedia.org/wiki/Query_string). This includes the `?` between the two, if the query string is present in the URL. For example, if you want to match URLs on any domain where the URL path ends with `foo.bar`, then you need to use an array of Match Patterns like `['*://*/*foo.bar', '*://*/*foo.bar?*']`. The `?*` is needed, rather than just `bar*`, in order to anchor the ending `*` as applying to the URL query string and not some portion of the URL path.

Neither the [URL fragment identifier](https://en.wikipedia.org/wiki/Fragment_identifier), nor the `#` which precedes it, are considered as part of the _path_.

> **Note:** The path pattern string should not include a port number. Adding a port, as in: `http://localhost:1234/*` causes the match pattern to be ignored. However, `http://localhost:1234` will match with `http://localhost/*`.

### \<all_urls>

特殊值“\<all_urls>”匹配任何受支持方案下的所有 URL：即，"http", "https", "file", "ftp", "app"。

## 范例

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Pattern</th>
      <th scope="col">Example matches</th>
      <th scope="col">Example non-matches</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><code>&#x3C;all_urls></code></p>
        <p>Match all URLs.</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
        <p><code>ftp://files.somewhere.org/</code></p>
      </td>
      <td>
        <p><code>resource://a/b/c/</code><br />(unsupported scheme)</p>
        <p>
          <code>ftps://files.somewhere.org/</code><br />(unsupported scheme)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*/*</code></p>
        <p>Match all HTTP, HTTPS and WebSocket URLs.</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
      </td>
      <td>
        <p><code>ftp://ftp.example.org/</code><br />(unmatched scheme)</p>
        <p><code>file:///a/</code><br />(unmatched scheme)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*.mozilla.org/*</code></p>
        <p>
          Match all HTTP, HTTPS and WebSocket URLs that are hosted at
          "mozilla.org" or one of its subdomains.
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>http://a.mozilla.org/</code></p>
        <p><code>http://a.b.mozilla.org/</code></p>
        <p><code>https://b.mozilla.org/path/</code></p>
        <p><code>ws://ws.mozilla.org/</code></p>
        <p><code>wss://secure.mozilla.org/something</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(unmatched scheme)</p>
        <p><code>http://mozilla.com/</code><br />(unmatched host)</p>
        <p><code>http://firefox.org/</code><br />(unmatched host)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://mozilla.org/</code></p>
        <p>
          Match all HTTP, HTTPS and WebSocket URLs that are hosted at exactly
          "mozilla.org/".
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>ws://mozilla.org/</code></p>
        <p><code>wss://mozilla.org/</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(unmatched scheme)</p>
        <p><code>http://a.mozilla.org/</code><br />(unmatched host)</p>
        <p><code>http://mozilla.org/a</code><br />(unmatched path)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>ftp://mozilla.org/</code></p>
        <p>Match only "ftp://mozilla.org/".</p>
      </td>
      <td><code>ftp://mozilla.org</code></td>
      <td>
        <p><code>http://mozilla.org/</code><br />(unmatched scheme)</p>
        <p><code>ftp://sub.mozilla.org/</code><br />(unmatched host)</p>
        <p><code>ftp://mozilla.org/path</code><br />(unmatched path)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path</code></p>
        <p>Match HTTPS URLs on any host, whose path is "path".</p>
      </td>
      <td>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://a.mozilla.org/path</code></p>
        <p><code>https://something.com/path</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path</code><br />(unmatched scheme)</p>
        <p><code>https://mozilla.org/path/</code><br />(unmatched path)</p>
        <p><code>https://mozilla.org/a</code><br />(unmatched path)</p>
        <p><code>https://mozilla.org/</code><br />(unmatched path)</p>
        <p>
          <code>https://mozilla.org/path?foo=1</code><br />(unmatched path due
          to URL query string)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path/</code></p>
        <p>
          Match HTTPS URLs on any host, whose path is "path/" and which has no
          URL query string.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/path/</code></p>
        <p><code>https://a.mozilla.org/path/</code></p>
        <p><code>https://something.com/path</code>/</p>
      </td>
      <td>
        <p><code>http://mozilla.org/path/</code><br />(unmatched scheme)</p>
        <p><code>https://mozilla.org/path</code><br />(unmatched path)</p>
        <p><code>https://mozilla.org/a</code><br />(unmatched path)</p>
        <p><code>https://mozilla.org/</code><br />(unmatched path)</p>
        <p>
          <code>https://mozilla.org/path/?foo=1</code
          ><br />(unmatched path due to URL query string)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*</code></p>
        <p>
          Match HTTPS URLs only at "mozilla.org", with any URL path and URL
          query string.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/</code></p>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://mozilla.org/another</code></p>
        <p><code>https://mozilla.org/path/to/doc</code></p>
        <p><code>https://mozilla.org/path/to/doc?foo=1</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path</code><br />(unmatched scheme)</p>
        <p><code>https://mozilla.com/path</code><br />(unmatched host)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p>Match only this URL, or this URL with any URL fragment.</p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/a/b/c/#section1</code></p>
      </td>
      <td>Anything else.</td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*/b/*/</code></p>
        <p>
          Match HTTPS URLs hosted on "mozilla.org", whose path contains a
          component "b" somewhere in the middle. Will match URLs with query
          strings, if the string ends in a <code>/</code>.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/d/b/f/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/#section1</code></p>
        <p><code>https://mozilla.org/a/b/c/d/?foo=/</code></p>
        <p>
          <code
            >https://mozilla.org/a?foo=21314&#x26;bar=/b/&#x26;extra=c/</code
          >
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/b/*/</code><br />(unmatched path)</p>
        <p><code>https://mozilla.org/a/b/</code><br />(unmatched path)</p>
        <p>
          <code>https://mozilla.org/a/b/c/d/?foo=bar</code><br />(unmatched path
          due to URL query string)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>file:///blah/*</code></p>
        <p>Match any FILE URL whose path begins with "blah".</p>
      </td>
      <td>
        <p><code>file:///blah/</code></p>
        <p><code>file:///blah/bleh</code></p>
      </td>
      <td><code>file:///bleh/</code><br />(unmatched path)</td>
    </tr>
  </tbody>
</table>

### 无效匹配模式

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Invalid pattern</th>
      <th scope="col">Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>resource://path/</code></td>
      <td>Unsupported scheme.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.org</code></td>
      <td>No path.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.*.org/</code></td>
      <td>"*" in host must be at the start.</td>
    </tr>
    <tr>
      <td><code>https://*zilla.org/</code></td>
      <td>"*" in host must be the only character or be followed by ".".</td>
    </tr>
    <tr>
      <td><code>http*://mozilla.org/</code></td>
      <td>"*" in scheme must be the only character.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.org:80/</code></td>
      <td>Host must not include a port number.</td>
    </tr>
    <tr>
      <td><code>*://*</code></td>
      <td>Empty path: this should be "<code>*://*/*</code>".</td>
    </tr>
    <tr>
      <td><code>file://*</code></td>
      <td>Empty path: this should be "<code>file:///*</code>".</td>
    </tr>
  </tbody>
</table>

## 测试匹配模式

当制作扩展时你通常不会跟直接使用匹配模板：通常你讲一个匹配模式传递给 API，然后 API 构造一个匹配模式并且使用他来测试 url。不过如果你正在尝试哪一种匹配模式可以被使用，或者调试一个匹配问题，那么直接创建和测试匹配模板的能力将变得有用，这个模块将解释如何做到这点。

首先，打开开发者工具设置，并且检查 "Enable browser chrome and add-on debugging toolboxes" 被打开：

{{EmbedYouTube("JDEe2fyFpHE")}}

然后打开 "Browser Console":

{{EmbedYouTube("mfuBMje6dA4")}}

它给了你一个命令行以使你可以执行一些特权 javascript 代码。

> **警告：** 因为运行在浏览器控制台的代码拥有系统特权，在任何时候都请你小心理解你的代码做了什么

现在粘贴以下代码到命令行然后按下 <kbd>enter</kbd>:

```js
Cu.import("resource://gre/modules/MatchPattern.jsm");
Cu.import("resource://gre/modules/BrowserUtils.jsm");
```

这做了两件事：

- 导入 "MatchPattern.jsm": 这是实现了匹配模板的系统模块，特别的，这个模块包含了 `MatchPattern` 对象。`MatchPattern` 对象定义了一个 `matches()` 方法，他需要一个 URL 然后返回 `true` 或者 `false`.
- 导入 "BrowserUtils.jsm": 包含了一个方法 `makeURI()`, 他转换一个字符串为一个 [`nsIURI`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIURI) 对象。`nsIURI` 是 `matches()` 方法需要接受的一个参数。

现在你可以构造 MatchPattern 对象，构造 URIs，并检查 URIs 是否匹配：

```js
var match = new MatchPattern("*://mozilla.org/");

var uri = BrowserUtils.makeURI("https://mozilla.org/");
match.matches(uri); //        < true

uri = BrowserUtils.makeURI("https://mozilla.org/path");
match.matches(uri); //        < false
```

## Browser compatibility

{{Compat}}
