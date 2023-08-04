---
title: Window.open()
slug: Web/API/Window/open
---

{{APIRef}}

`Window` 接口的 **`open()`** 方法，是用指定的名称将指定的资源加载到浏览器上下文（窗口 `window` ，内嵌框架 `iframe` 或者标签 `tab` ）。如果没有指定名称，则一个新的窗口会被打开并且指定的资源会被加载进这个窗口的浏览器上下文中。

## 语法

```js
let windowObjectReference = window.open(strUrl, strWindowName, [
  strWindowFeatures,
]);
```

> **备注：** *strUrl === *要在新打开的窗口中加载的 URL。
>
> *strWindowName === *新窗口的名称。
>
> *strWindowFeatures === *一个可选参数，列出新窗口的特征 (大小，位置，滚动条等) 作为一个{{domxref("DOMString")}}。

## 参数与返回值

- `WindowObjectReference`
  - : 打开的新窗口对象的引用。如果调用失败，返回值会是 `null`。如果父子窗口满足“[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)”，你可以通过这个引用访问新窗口的属性或方法。
- `strUrl`
  - : 新窗口需要载入的 url 地址。*strUrl*可以是 web 上的 html 页面也可以是图片文件或者其他任何浏览器支持的文件格式。
- `strWindowName`
  - : 新窗口的名称。该字符串可以用来作为超链接 {{HTMLElement("a")}} 或表单 {{HTMLElement("form")}} 元素的目标属性值。字符串中不能含有空白字符。注意：_strWindowName_ 并不是新窗口的标题。
- `strWindowFeatures`
  - : 可选参数。是一个字符串值，这个值列出了将要打开的窗口的一些特性 (窗口功能和工具栏) 。字符串中不能包含任何空白字符，特性之间用逗号分隔开。参考下文的[位置和尺寸特征](#Position_and_size_features>)。

## 说明

`open()` 方法，创建一个新的浏览器窗口对象，如同使用文件菜单中的新窗口命令一样。_strUrl_ 参数指定了该窗口将会打开的地址。如果*strUrl* 是一个空值，那么打开的窗口将会是带有默认工具栏的空白窗口（加载`about:blank`）。

注意：调用`window.open()`方法以后，远程 URL 不会被立即载入，载入过程是异步的。（实际加载这个 URL 的时间推迟到当前脚本块执行结束之后。窗口的创建和相关资源的加载异步地进行。）

## 例子

```js
let windowObjectReference;
let strWindowFeatures = `
    menubar=yes,
    location=yes,
    resizable=yes,
    scrollbars=yes,
    status=yes
`;

function openRequestedPopup() {
  windowObjectReference = window.open(
    "http://www.cnn.com/",
    "CNN_WindowName",
    strWindowFeatures,
  );
}
```

```js
let WindowObjectReference;

const openRequestedPopup = () => {
  windowObjectReference = window.open(
    "https://www.domainname.ext/path/ImageFile.png",
    "DescriptiveWindowName",
    "resizable,scrollbars,status",
  );
};
```

如果已经存在以 _strWindowName_ 为名称的窗口，则不再打开一个新窗口，而是把 _strUrl_ 加载到这个窗口中。在这种情况下，方法的返回值是这个已经打开的窗口，并忽略参数 _strWindowFeatures_。*strUrl*设为空字符串时，可以在不改变窗口地址的情况下获得一个已经打开的同名窗口的引用。如果要在每次调用 `window.open()`时都打开一个新窗口，则要把参数 _strWindowName_ 设置为 `_blank`。

_strWindowFeatures_ 是一个可选的字符串，包含了新窗口的一组用逗号分割的特性，在窗口打开之后，就不能用 JavaScript 改变窗口的功能和工具栏的设置。如果名称是 _strWindowName_ 的窗口不存在并且又没有提供 _strWindowFeatures_ 参数（或者 _strWindowFeatures_ 参数为空字符串），则子窗口以父窗口默认的工具栏渲染。

如果 _strWindowFeatures_ 参数中没有定义窗口大小，则新窗口的尺寸跟最近渲染的窗口尺寸一样。

如果 _strWindowFeatures_ 参数中没有定义窗口位置，则新窗口显示在最近渲染的窗口的坐标偏移 22 个像素的位置。这种新窗口偏移量的做法被浏览器开发商广泛地实现（MSIE 6 SP2 在默认主题下的偏移量是 29 个像素），目的是提醒用户注意有新的窗口打开。如果最近使用的窗口是最大化的，则没有这 22 像素的偏移，新（子）窗口也会被最大化。

**如果你定义了 _strWindowFeatures_ 参数，那么没有在这个字符串中列出的特性会被禁用或移除** （除了 _titlebar_ 和 _close_ 默认设置为 yes）

> **备注：** 如果你使用了 _strWindowFeatures_ 参数，那么只需要列出新窗口中启用的特性，其他的特性（除了*titlebar*和*close*）将被禁用或移除。

## 位置尺寸特征

[Note on position and dimension error correction](#Note_on_position_and_dimension_error_correction)

[Firefox bug 176320](https://bugzil.la/176320)

[Note on precedence](#Note_on_precedence)

- left
  - : Specifies the distance the new window is placed from the left side of the work area for applications of the user's operating system to the leftmost border (resizing handle) of the browser window. The new window can not be initially positioned offscreen.
- top
  - : Specifies the distance the new window is placed from the top side of the work area for applications of the user's operating system to the topmost border (resizing handle) of the browser window. The new window can not be initially positioned offscreen.
- height
  - : Specifies the height of the content area, viewing area of the new secondary window in pixels. The height value includes the height of the horizontal scrollbar if present. The minimum required value is 100.
    [Note on outerHeight versus height (or innerHeight)](#Note_on_outerHeight_versus_height)
- width
  - : Specifies the width of the content area, viewing area of the new secondary window in pixels. The width value includes the width of the vertical scrollbar if present. The width value does not include the sidebar if it is expanded. The minimum required value is 100.
- screenX
  - : Deprecated. Same as [left](#left) but only supported by Netscape and Mozilla-based browsers.
- screenY
  - : Deprecated. Same as [top](#top) but only supported by Netscape and Mozilla-based browsers.
- centerscreen
  - : Centers the window in relation to its parent's size and position. Requires chrome=yes.
- outerHeight
  - : Specifies the height of the whole browser window in pixels. This outerHeight value includes any/all present toolbar, window horizontal scrollbar (if present) and top and bottom window resizing borders. Minimal required value is 100.
    **Note**: since titlebar is always rendered, then requesting outerHeight=100 will make the innerHeight of the browser window under the minimal 100 pixels.
    [Note on outerHeight versus height (or innerHeight)](#note_on_outerheight_versus_height)
- outerWidth
  - : Specifies the width of the whole browser window in pixels. This outerWidth value includes the window vertical scrollbar (if present) and left and right window resizing borders.
- innerHeight
  - : Same as [height](#height) but only supported by Netscape and Mozilla-based browsers. Specifies the height of the content area, viewing area of the new secondary window in pixels. The _innerHeight_ value includes the height of the horizontal scrollbar if present. Minimal required value is 100.
    [Note on outerHeight versus height (or innerHeight)](#Note_on_outerHeight_versus_height)
- innerWidth
  - : Same as [width](#width) but only supported by Netscape and Mozilla-based browsers. Specifies the width of the content area, viewing area of the new secondary window in pixels. The innerWidth value includes the width of the vertical scrollbar if present. The innerWidth value does not include the sidebar if it is expanded. Minimal required value is 100.

### Toolbar and chrome features

- NOTE: All features can be set to yes, 1 or just be present to be "on", set to _no_ or _0_ or in most cases just not present to be "off"
  - : example "status=yes", "status=1" and "status" have identical results
- menubar
  - : If this feature is on, then the new secondary window renders the menubar.
    Mozilla and Firefox users can force new windows to always render the menubar by setting `dom.disable_window_open_feature.menubar` to _true_ in [about:config](http://support.mozilla.com/en-US/kb/Editing+configuration+files#about_config) or in their [user.js file](http://support.mozilla.com/en-US/kb/Editing+configuration+files#user_js).
- toolbar
  - : If this feature is on, then the new secondary window renders the Navigation Toolbar (Back, Forward, Reload, Stop buttons). In addition to the Navigation Toolbar, Mozilla-based browsers will render the Tab Bar if it is visible, present in the parent window. (If this feature is set to _no_ all toolbars in the window will be invisible, for example extension toolbars).
    Mozilla and Firefox users can force new windows to always render the Navigation Toolbar by setting `dom.disable_window_open_feature.toolbar` to _true_ in [about:config](http://support.mozilla.com/en-US/kb/Editing+configuration+files#about_config) or in their [user.js file](http://support.mozilla.com/en-US/kb/Editing+configuration+files#user_js).
- location
  - : If this feature is on, then the new secondary window renders the Location bar in Mozilla-based browsers. MSIE 5+ and Opera 7.x renders the Address Bar.
    Mozilla and Firefox users can force new windows to always render the location bar by setting `dom.disable_window_open_feature.location` to _true_ in [about:config](http://support.mozilla.com/en-US/kb/Editing+configuration+files#about_config) or in their [user.js file](http://support.mozilla.com/en-US/kb/Editing+configuration+files#user_js).
- personalbar
  - : If this feature is on, then the new secondary window renders the Personal Toolbar in Netscape 6.x, Netscape 7.x and Mozilla browser. It renders the Bookmarks Toolbar in Firefox. In addition to the Personal Toolbar, Mozilla browser will render the Site Navigation Bar if such toolbar is visible, present in the parent window.
    Mozilla and Firefox users can force new windows to always render the Personal Toolbar/Bookmarks toolbar by setting `dom.disable_window_open_feature.personalbar` to _true_ in [about:config](http://support.mozilla.com/en-US/kb/Editing+configuration+files#about_config) or in their [user.js file](http://support.mozilla.com/en-US/kb/Editing+configuration+files#user_js).
- directories {{Deprecated_Inline}}
  - : Obsolete synonym of personalbar. In IE, it rendered the Links bar. Supported in Gecko up to 1.9.2 and in IE up to 6.
- status
  - : If this feature is on, then the new secondary window has a status bar. Users can force the rendering of status bar in all Mozilla-based browsers, in MSIE 6 SP2 ([Note on status bar in XP SP2](#Note_on_security_issues_of_the_status_bar_presence)) and in Opera 6+. The default preference setting in recent Mozilla-based browser releases and in Firefox 1.0 is to force the presence of the status bar.
    [Note on status bar](#Note_on_status_bar)

## Best practices

```js
<script type="text/javascript">
var windowObjectReference = null; // global variable

function openFFPromotionPopup() {
  if(windowObjectReference == null || windowObjectReference.closed)
  /* if the pointer to the window object in memory does not exist
     or if such pointer exists but the window was closed */

  {
    windowObjectReference = window.open("http://www.spreadfirefox.com/",
   "PromoteFirefoxWindowName", "resizable,scrollbars,status");
    /* then create it. The new window will be created and
       will be brought on top of any other window. */
  }
  else
  {
    windowObjectReference.focus();
    /* else the window reference must exist and the window
       is not closed; therefore, we can bring it back on top of any other
       window with the focus() method. There would be no need to re-create
       the window or to reload the referenced resource. */
  };
}
</script>

(...)

<p><a
 href="http://www.spreadfirefox.com/"
 target="PromoteFirefoxWindowName"
 onclick="openFFPromotionPopup(); return false;"
 title="This link will create a new window or will re-use an already opened one"
>Promote Firefox adoption</a></p>
```

The above code solves a few usability problems related to links opening secondary window. The purpose of the `return false` in the code is to cancel default action of the link: if the onclick event handler is executed, then there is no need to execute the default action of the link. But if javascript support is disabled or non-existent on the user's browser, then the onclick event handler is ignored and the browser loads the referenced resource in the target frame or window that has the name "PromoteFirefoxWindowName". If no frame nor window has the name "PromoteFirefoxWindowName", then the browser will create a new window and will name it "PromoteFirefoxWindowName".

More reading on the use of the target attribute:

[HTML 4.01 Target attribute specifications](http://www.w3.org/TR/html401/present/frames.html#h-16.3.2)

[How do I create a link that opens a new window?](http://www.htmlhelp.com/faq/html/links.html#new-window)

You can also parameterize the function to make it versatile, functional in more situations, therefore re-usable in scripts and webpages:

```js
<script type="text/javascript">
var windowObjectReference = null; // global variable

function openRequestedPopup(strUrl, strWindowName) {
  if(windowObjectReference == null || windowObjectReference.closed) {
    windowObjectReference = window.open(strUrl, strWindowName,
           "resizable,scrollbars,status");
  } else {
    windowObjectReference.focus();
  };
}
</script>

(...)

<p><a
 href="http://www.spreadfirefox.com/"
 target="PromoteFirefoxWindow"
 onclick="openRequestedPopup(this.href, this.target); return false;"
 title="This link will create a new window or will re-use an already opened one"
>Promote Firefox adoption</a></p>
```

You can also make such function able to open only 1 secondary window and to reuse such single secondary window for other links in this manner:

```js
<script type="text/javascript">
var windowObjectReference = null; // global variable
var PreviousUrl; /* global variable which will store the
                    url currently in the secondary window */

function openRequestedSinglePopup(strUrl) {
  if(windowObjectReference == null || windowObjectReference.closed) {
    windowObjectReference = window.open(strUrl, "SingleSecondaryWindowName",
         "resizable,scrollbars,status");
  } else if(PreviousUrl != strUrl) {
    windowObjectReference = window.open(strUrl, "SingleSecondaryWindowName",
      "resizable=yes,scrollbars=yes,status=yes");
    /* if the resource to load is different,
       then we load it in the already opened secondary window and then
       we bring such window back on top/in front of its parent window. */
    windowObjectReference.focus();
  } else {
    windowObjectReference.focus();
  };

  PreviousUrl = strUrl;
  /* explanation: we store the current url in order to compare url
     in the event of another call of this function. */
}
</script>

(...)

<p><a
 href="http://www.spreadfirefox.com/"
 target="SingleSecondaryWindowName"
 onclick="openRequestedSinglePopup(this.href); return false;"
 title="This link will create a new window or will re-use an already opened one"
>Promote Firefox adoption</a></p>

<p><a
 href="http://www.mozilla.org/support/firefox/faq"
 target="SingleSecondaryWindowName"
 onclick="openRequestedSinglePopup(this.href); return false;"
 title="This link will create a new window or will re-use an already opened one"
>Firefox FAQ</a></p>
```

## FAQ

- How can I prevent the confirmation message asking the user whether he wants to close the window?
  - : You can not. **New windows not opened by javascript can not as a rule be closed by JavaScript.** The JavaScript Console in Mozilla-based browsers will report the warning message: `"Scripts may not close windows that were not opened by script."` Otherwise the history of URLs visited during the browser session would be lost.
    [More on the window.close()](/zh-CN/docs/DOM/window.close) method
- How can I bring back the window if it is minimized or behind another window?
  - : First check for the existence of the window object reference of such window and if it exists and if it has not been closed, then use the [focus()](/zh-CN/docs/DOM/window.focus) method. There is no other reliable way. You can examine an [example explaining how to use the focus() method](#Best_practices).
- How do I force a maximized window?
  - : You cannot. All browser manufacturers try to make the opening of new secondary windows noticed by users and noticeable by users to avoid confusion, to avoid disorienting users.
- How do I turn off window resizability or remove toolbars?
  - : You cannot force this. Users with Mozilla-based browsers have absolute control over window functionalities like resizability, scrollability and toolbars presence via user preferences in `about:config`. Since your users are the ones who are supposed to use such windows (and not you, being the web author), the best is to avoid interfering with their habits and preferences. We recommend to always set the resizability and scrollbars presence (if needed) to yes to insure accessibility to content and usability of windows. This is in the best interests of both the web author and the users.
- How do I resize a window to fit its content?
  - : You can not reliably because the users can prevent the window from being resized by unchecking the `Edit/Preferences/Advanced/Scripts & Plug-ins/Allow Scripts to/ Move or resize existing windows` checkbox in Mozilla or `Tools/Options.../Content tab/Enable Javascript/Advanced button/Move or resize existing windows` checkbox in Firefox or by setting `dom.disable_window_move_resize` to _true_ in `about:config` or by editing accordingly their [user.js file](http://www.mozilla.org/support/firefox/edit#user).
    In general, users usually disable moving and resizing of existing windows because allowing authors' scripts to do so has been abused overwhelmingly in the past and the rare scripts that do not abuse such feature are often wrong, inaccurate when resizing the window. 99% of all those scripts disable window resizability and disable scrollbars when in fact they should enable both of these features to allow a cautious and sane fallback mechanism if their calculations are wrong.
    The window method [sizeToContent()](/zh-CN/docs/DOM/window.sizeToContent) is also disabled if the user unchecks the preference `Move or resize existing windows` checkbox. Moving and resizing a window remotely on the user's screen via script will very often annoy the users, will disorient the user, and will be wrong at best. The web author expects to have full control of (and can decide about) every position and size aspects of the users' browser window ... which is simply not true.
- How do I open a referenced resource of a link in a new tab? or in a specific tab?
  - : To open a resource in a new tab see [Tabbed browser](/zh-CN/docs/XUL/tabbrowser). Some [Code snippets](/zh-CN/Add-ons/Code_snippets/Tabbed_browser?redirectlocale=en-US&redirectslug=Code_snippets%2FTabbed_browser) are available. If you are using the SDK, tabs are [handled a bit differently](/zh-CN/Add-ons/SDK/High-Level_APIs/tabs)
    [K-meleon 1.1](http://kmeleon.sourceforge.net/), a Mozilla-based browser, gives complete control and power to the user regarding how links are opened. Only the user can set his advanced preferences to do that. Some advanced extensions also give Mozilla and Firefox a lot of power over how referenced resources are loaded.
    In a few years, the [target property of the CSS3 hyperlink module](http://www.w3.org/TR/2004/WD-css3-hyperlinks-20040224/#target0) may be implemented (if CSS3 Hyperlink module as it is right now is approved). And even if and when this happens, you can expect developers of browsers with tab-browsing to give the user entire veto power and full control over how links can open web pages. How to open a link should always be entirely under the control of the user.
- How do I know whether a window I opened is still open?
  - : You can test for the existence of the window object reference which is the returned value in case of success of the window\.open() call and then verify that _windowObjectReference_.closed return value is _false_.
- How can I tell when my window was blocked by a popup blocker?
  - : With the built-in popup blockers of Mozilla/Firefox and Internet Explorer 6 SP2, you have to check the return value of `window.open()`: it will be _null_ if the window wasn't allowed to open. However, for most other popup blockers, there is no reliable way.
- What is the JavaScript relationship between the main window and the secondary window?
  - : The `window.open()` method gives a main window a reference to a secondary window; the [opener](/zh-CN/docs/DOM/window.opener) property gives a secondary window a reference to its main window.
- I can not access the properties of the new secondary window. I always get an error in the javascript console saying "Error: uncaught exception: Permission denied to get property \<property_name or method_name>. Why is that?
  - : It is because of the cross-domain script security restriction (also referred as the "Same Origin Policy"). A script loaded in a window (or frame) from a distinct origin (domain name) **cannot get nor set** properties of another window (or frame) or the properties of any of its HTML objects coming from another distinct origin (domain name). Therefore, before executing a script targeting a secondary window, the browser in the main window will verify that the secondary window has the same domain name.
    More reading on the cross-domain script security restriction: [http://www.mozilla.org/projects/secu...me-origin.html](http://www.mozilla.org/projects/security/components/same-origin.html)

## Usability issues

### Avoid resorting to `window.open()`

Generally speaking, it is preferable to avoid resorting to window\.open() for several reasons:

- All Mozilla-based browsers offer [tab-browsing](/zh-CN/docs/XUL/tabbrowser) and this is the preferred mode of [opening referenced resources](/zh-CN/Add-ons/Code_snippets/Tabbed_browser?redirectlocale=en-US&redirectslug=Code_snippets%2FTabbed_browser) ([SDK](/zh-CN/Add-ons/SDK/High-Level_APIs/tabs))... not just in Mozilla-based browsers but in all other browsers offering tab-browsing. In other words, tab-capable browser users overall prefer opening new tabs than opening new windows in a majority of webpage situations. Tab-capable browsers have rapidly gained support and enthusiasm on internet in the last 3 years; this trend will not revert back. MSIE 7, released in October 2006, has full support for tab browsing.
- There are now [several Mozilla extensions](https://addons.mozilla.org/seamonkey/browse/type:1/cat:48/sort:updated) (like Multizilla) and [Firefox extensions](https://addons.update.mozilla.org/firefox/browse/type:1/cat:14/sort:updated) (like [Tabbrowser preferences](https://addons.mozilla.org/firefox/addon/158)), features, settings and advanced preferences based on tab-browsing and based on converting window\.open() calls into opening tabs, based on neutralizing window\.open() calls, in particular in neutralizing unrequested openings of new windows (often referred as blocking unrequested popups or as blocking script-initiated windows opening automatically). Such features found in extensions include opening a link in a new window or not, in the same window, in a new tab or not, in "background" or not. Coding carelessly to open new windows can no longer be assured of success, can not succeed by force and, if it does, it will annoy a majority of users.
- New windows can have menubar missing, scrollbars missing, status bar missing, window resizability disabled, etc.; new tabs can not be missing those functionalities or toolbars (or at least, the toolbars which are present by default). Therefore, tab-browsing is preferred by a lot of users because the normal user-interface of the browser window they prefer is kept intact, remains stable.
- Opening new windows, even with reduced features, uses considerably a lot of the user's system resources (cpu, RAM) and involves considerably a lot of coding in the source code (security management, memory management, various code branchings sometimes quite complex, window frame/chrome/toolbars building, window positioning and sizing, etc.). Opening new tabs is less demanding on the user's system resources (and faster to achieve) than opening new windows.

### Offer to open a link in a new window, using these guidelines

If you want to offer to open a link in a new window, then follow tested and recommendable usability and accessibility guidelines:

#### _Never_ use this form of code for links: `<a href="javascript:window.open(...)" ...>`

"javascript:" links break accessibility and usability of webpages in every browser.

- "javascript:" pseudo-links become dysfunctional when javascript support is disabled or inexistent. Several corporations allow their employees to surf on the web but under strict security policies: no javascript enabled, no java, no activeX, no Flash. For various reasons (security, public access, text browsers, etc..), about 5% to 10% of users on the web surf with javascript disabled.
- "javascript:" links will interfere with advanced features in tab-capable browsers: eg. middle-click on links, Ctrl+click on links, tab-browsing features in extensions, etc.
- "javascript:" links will interfere with the process of indexing webpages by search engines.
- "javascript:" links interfere with assistive technologies (e.g. voice browsers) and several web-aware applications (e.g. PDAs and mobile browsers).
- "javascript:" links also interfere with "mouse gestures" features implemented in browsers.
- Protocol scheme "javascript:" will be reported as an error by link validators and link checkers.

**Further reading:**

- [Top Ten Web-Design Mistakes of 2002](http://www.useit.com/alertbox/20021223.html), 6. JavaScript in Links, Jakob Nielsen, December 2002
- [Links & JavaScript Living Together in Harmony](http://www.evolt.org/article/Links_and_JavaScript_Living_Together_in_Harmony/17/20938/), Jeff Howden, February 2002
- [comp.lang.javascript newsgroup discussion FAQ on "javascript:" links](http://jibbering.com/faq/#FAQ4_24)

#### Never use `<a href="#" onclick="window.open(...);">`

Such pseudo-link also breaks accessibility of links. **Always use a real URL for the href attribute value** so that if javascript support is disabled or inexistent or if the user agent does not support opening of secondary window (like MS-Web TV, text browsers, etc), then such user agents will still be able to load the referenced resource according to its default mode of opening/handling a referenced resource. This form of code also interferes with advanced features in tab-capable browsers: eg. middle-click on links, Ctrl+click on links, Ctrl+Enter on links, "mouse gestures" features.

#### Always identify links which will create (or will re-use) a new, secondary window

Identify links that will open new windows in a way that helps navigation for users by coding the title attribute of the link, by adding an icon at the end of the link or by coding the cursor accordingly.

The purpose is to warn users in advance of context changes to minimize confusion on the user's part: changing the current window or popping up new windows can be very disorienting to users (Back toolbar button is disabled).

> "Users often don't notice that a new window has opened, especially if they are using a small monitor where the windows are maximized to fill up the screen. So a user who tries to return to the origin will be confused by a grayed out _Back_ button."
> quote from [The Top Ten _New_ Mistakes of Web Design](http://www.useit.com/alertbox/990530.html): 2. Opening New Browser Windows, Jakob Nielsen, May 1999

When extreme changes in context are explicitly identified before they occur, then the users can determine if they wish to proceed or so they can be prepared for the change: not only they will not be confused or feel disoriented, but more experienced users can better decide how to open such links (in a new window or not, in the same window, in a new tab or not, in "background" or not).

#### Always use the target attribute

If javascript support is disabled or non-existent, then the user agent will create a secondary window accordingly or will render the referenced resource according to its handling of the target attribute: e.g. some user agents which can not create new windows, like MS Web TV, will fetch the referenced resource and append it at the end of the current document. The goal and the idea is to try to provide - **not impose** - to the user a way to open the referenced resource, a mode of opening the link. Your code should not interfere with the features of the browser at the disposal of the user and your code should not interfere with the final decision resting with the user.

#### Do not use `target="_blank"`

Always provide a meaningful name to your target attribute and try to reuse such target attribute in your page so that a click on another link may load the referenced resource in an already created and rendered window (therefore speeding up the process for the user) and therefore justifying the reason (and user system resources, time spent) for creating a secondary window in the first place. Using a single target attribute value and reusing it in links is much more user resources friendly as it only creates one single secondary window which is recycled. On the other hand, using "\_blank" as the target attribute value will create several new and unnamed windows on the user's desktop which can not be recycled, reused. In any case, if your code is well done, it should not interfere with the user's final choice but rather merely offer him more choices, more ways to open links and more power to the tool he's using (a browser).

## Glossary

- Opener window, parent window, main window, first window
  - : Terms often used to describe or to identify the same window. It is the window from which a new window will be created. It is the window on which the user clicked a link which lead to the creation of another, new window.
- Sub-window, child window, secondary window, second window
  - : Terms often used to describe or to identify the same window. It is the new window which was created.
- Unrequested popup windows
  - : Script-initiated windows opening automatically without the user's consent.

## 规范

HTML5. See <https://www.w3.org/TR/html5/browsers.html#dom-open> for details.

## 注意

### 优先注意事项

In cases where `left` and `screenX` (and/or `top` and `screenY`) have conflicting values, then `left` and `top` have precedence over `screenX` and `screenY` respectively. If `left` and `screenX` (and/or `top` and `screenY`) are defined in the _features_ list, then `left` (and/or `top`) will be honored and rendered. In the following example the new window will be positioned at 100 pixels from the left side of the work area for applications of the user's operating system, not at 200 pixels.

```js
windowObjectReference = window.open(
  "http://news.bbc.co.uk/",
  "BBCWorldNewsWindowName",
  "left=100,screenX=200,resizable,scrollbars,status",
);
```

If left is set but top has no value and screenY has a value, then left and screenY will be the coordinate positioning values of the secondary window.

outerWidth has precedence over width and width has precedence over innerWidth. outerHeight has precedence over height and height has precedence over innerHeight. In the following example, Mozilla-browsers will create a new window with an outerWidth of 600 pixels wide and will ignore the request of a width of 500 pixels and will also ignore the request of an innerWidth of 400 pixels.

```js
windowObjectReference = window.open(
  "http://www.wwf.org/",
  "WWildlifeOrgWindowName",
  "outerWidth=600,width=500,innerWidth=400,resizable,scrollbars,status",
);
```

### Note on position and dimension error correction

Requested position and requested dimension values in the _features_ list will not be honored and **will be corrected** if any of such requested value does not allow the entire browser window to be rendered within the work area for applications of the user's operating system. **No part of the new window can be initially positioned offscreen. This is by default in all Mozilla-based browser releases.**

[MSIE 6 SP2 has a similar error correction mechanism](http://msdn2.microsoft.com/en-us/library/ms997645.aspx#xpsp_topic5) but it is not activated by default in all security levels: a security setting can disable such error correction mechanism.

### Note on scrollbars

When content overflows window viewport dimensions, then scrollbar(s) (or some scrolling mechanism) are necessary to ensure that content can be accessed by users. Content can overflow window dimensions for several reasons which are outside the control of web authors:

- user resizes the window
- user increases the text size of fonts via View/Text Zoom (%) menuitem in Mozilla or View/Text Size/Increase or Decrease in Firefox
- user sets a minimum font size for pages which is bigger than the font-size the web author requested. People over 40 years old or with particular viewing habit or reading preference often set a minimal font size in Mozilla-based browsers.
- web author is not aware of default margin (and/or border and/or padding) values applying to root element or body node in various browsers and various browser versions
- user uses an user stylesheet ([userContent.css in Mozilla-based browsers](http://www.mozilla.org/support/firefox/edit#content)) for his viewing habits which increases document box dimensions (margin, padding, default font size)
- user can customize individually the size (height or width) of most toolbars via operating system settings. E.g. window resizing borders, height of browser titlebar, menubar, scrollbars, font size are entirely customizable by the user in Windows XP operating system. These toolbars dimensions can also be set via browser themes and skins or by operating system themes
- web author is unaware that the user default browser window has custom toolbar(s) for specific purpose(s); e.g.: prefs bar, web developer bar, accessibility toolbar, popup blocking and search toolbar, multi-feature toolbar, etc.
- user uses assistive technologies or add-on features which modify the operating system's work area for applications: e.g. MS-Magnifier
- user repositions and/or resizes directly or indirectly the operating system's work area for applications: e.g. user resizes the Windows taskbar, user positions the Windows taskbar on the left side (arabic language based) or right side (Hebrew language), user has a permanent MS-Office quick launch toolbar, etc.
- some operating system (Mac OS X) forces presence of toolbars which can then fool the web author's anticipations, calculations of the effective dimensions of the browser window

### Note on status bar

You should assume that a large majority of users' browsers will have the status bar or that a large majority of users will want to force the status bar presence: best is to always set this feature to yes. Also, if you specifically request to remove the status bar, then Firefox users will not be able to view the Site Navigation toolbar if it is installed. In Mozilla and in Firefox, all windows with a status bar have a window resizing grippy at its right-most side. The status bar also provides info on http connection, hypertext resource location, download progress bar, encryption/secure connection info with SSL connection (displaying a yellow padlock icon), internet/security zone icons, privacy policy/cookie icon, etc. **Removing the status bar usually removes a lot of functionality, features and information considered useful (and sometimes vital) by the users.**

### Note on security issues of the status bar presence

In MSIE 6 for XP SP2: For windows opened using `window.open()`:

> "For windows opened using window\.open():
> Expect the status bar to be present, and code for it. **The status bar will be on by default** and is 20-25 pixels in height. (...)"
> quote from [Fine-Tune Your Web Site for Windows XP Service Pack 2, Browser Window Restrictions in XP SP2](http://msdn2.microsoft.com/en-us/library/ms997645.aspx#xpsp_topic5)

> "(...) windows that are created using the window\.open() method can be called by scripts and used to spoof a user interface or desktop or to hide malicious information or activity by sizing the window so that the status bar is not visible.
> Internet Explorer windows provide visible security information to the user to help them ascertain the source of the Web page and the security of the communication with that page. When these elements are not in view, the user might think they are on a more trusted page or interacting with a system process when they are actually interacting with a malicious host. (...)
> **Script-initiated windows will be displayed fully, with the Internet Explorer title bar and status bar.** (...)
> Script management of Internet Explorer status bar
> Detailed description
> **Internet Explorer has been modified to not turn off the status bar for any windows. The status bar is always visible for all Internet Explorer windows.** (...) Without this change, windows that are created using the window\.open() method can be called by scripts and spoof a user interface or desktop or hide malicious information or activity by hiding important elements of the user interface from the user.
> The status bar is a security feature of Internet Explorer windows that provides Internet Explorer security zone information to the user. This zone cannot be spoofed (...)"
> quote from [Changes to Functionality in Microsoft Windows XP Service Pack 2, Internet Explorer Window Restrictions](http://technet.microsoft.com/en-us/library/bb457150.aspx#ECAA)

### Note on fullscreen

In MSIE 6 for XP SP2:

- "window\.open() with fullscreen=yes will now result in a maximized window, not a kiosk mode window."
- "The definition of the fullscreen=yes specification is changed to mean 'show the window as maximized,' which will keep the title bar, address bar, and status bar visible."

_References:_

- [Fine-Tune Your Web Site for Windows XP Service Pack 2](http://msdn2.microsoft.com/en-us/library/ms997645.aspx#xpsp_topic5)
- [Changes to Functionality in Microsoft Windows XP Service Pack 2, Script sizing of Internet Explorer windows](http://technet.microsoft.com/en-us/library/bb457150.aspx#ECAA)

### Note on refreshing vs. opening a new window/tab

If the `strWindowName` parameter is omitted, a new window or tab is opened. If a window with the same name already exists, the existing window is refreshed.

```js
//Always opens a new window/tab
window.open("map.php");

//Refreshes an existing window/tab that was opened with the same name, if one exists
window.open("map.php", "BiggerMap");
```

## 规范

{{Specifications}}

## 教程

- [JavaScript windows (tutorial)](http://www.infimum.dk/HTML/JSwindows.html) by Lasse Reichstein Nielsen
- [The perfect pop-up (tutorial)](http://accessify.com/features/tutorials/the-perfect-popup/) by Ian Lloyd
- [Popup windows and Firefox (interactive demos)](http://www.gtalbot.org/FirefoxSection/Popup/PopupAndFirefox.html) by Gérard Talbot

## 参考文献

- [Links Want To Be Links](http://www.cs.tut.fi/%7Ejkorpela/www/links.html) by Jukka K. Korpela
- [Links & JavaScript Living Together in Harmony](http://www.evolt.org/article/Links_and_JavaScript_Living_Together_in_Harmony/17/20938/) by Jeff Howden
- [demo](https://codepen.io/gildata/pen/VrzXOb)
