---
title: 为 Firefox 3 升级扩展
slug: Mozilla/Firefox/Releases/3/Updating_extensions
---

{{FirefoxSidebar}}

英文原文取自于 [http://developer.mozilla.org/en/docs/Extensions](/zh-CN/docs/Extensions) 这篇文章将对于那些想把他们的扩展在 Firefox 3 中正常运行的开发者提供一些有用的信息。

在进入主题之前，首先要提示一下：如果你的扩展所需要的唯一改变只是安装文件中的`maxVersion`信息，并且你的扩展所在的主机是[addons.mozilla.org](https://addons.mozilla.org)，事实上你不需要上传你的新的版本的扩展！只需要在 AMO 中使用开发者控制面板调整`maxVersion`。通过这种方式你可以避免你的扩展被再次审核。

### 第一步：升级安装文件

第一步，当然，对于大多数的扩展也仅需要这一步——更新安装文件`install.rdf`，声明扩展兼容 Firefox 3。

找到声明兼容的最大版本号的那一行（对于 Firefox2，如下）：

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

对于 Firefox 3，如下：

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

然后重新安装扩展。

注意，在 Firefox3 的本版号中没有额外的“.0”，所以请使用“3.0.\*”，而非“3.0.0.\*”。

> **备注：** Note that at this point more changes in Firefox 3 are expected. These changes may break some extensions, so you shouldn't release an extension with `3.0.*` `maxVersion` to the users until the Firefox 3 release candidate is out. During the Firefox 3 Beta period, you should use `3.0b5` as your `maxVersion`.

There have been (and will continue to be) a number of API changes that will likely break some extensions. We're still working on compiling a complete list of these changes.

> **备注：** If your extension still uses an [`Install.js`](cn/Install.js) script instead of an [install manifest](), you need to make the transition to an install manifest now. Firefox 3 no longer supports `install.js` scripts in XPI files.

#### Add localizations to the install manifest

Firefox 3 supports new properties in the install manifest to specify localized descriptions. The old methods still work however the new allow Firefox to pick up the localizations even when the add-on is disabled and pending install. See [Localizing extension descriptions](/zh-CN/Localizing_extension_descriptions) for more details.

### Step 2: 确保提供安全的更新

If you are hosting addons yourself and not on a secure add-on hosting provider like [addons.mozilla.org](https://addons.mozilla.org) then you must provide a secure method of updating your add-on. This will either involve hosting your updates on an SSL website, or using cryptographic keys to sign the update information. Read [Securing Updates](/zh-CN/Extension_Versioning,_Update_and_Compatibility#Securing_Updates) for more information.

### Step 3: Deal with changed APIs

Several APIs have been changed in significant ways. The most significant of these, which will likely affect a large number of extensions, are:

#### DOM

将外部文档的节点插入当前文档之前，你必须使用 [`document.importNode()`](/zh-CN/docs/Web/API/Document/importNode) 从外部文档导入源节点，或者使用 [`document.adoptNode()`](/zh-CN/docs/Web/API/Document/adoptNode)导入源节点，
想要了解更多的 [`Node.ownerDocument`](/zh-CN/docs/Web/API/Node/ownerDocument) 问题，请参考 [W3C DOM FAQ](http://www.w3.org/DOM/faq.html#ownerdoc).

即使你不执行导入动作，就执行插入外部文档中的节点.Firefox 目前也不会报错 (如果严格按标准执行，很多已有的网站都无法正常运行).
我们鼓励开发者严格按标准修改自己已有的不符合上述标准的代码。

#### Bookmarks & History

If your extension accesses bookmark or history data in any way, it will need substantial work to be compatible with Firefox 3. The old APIs for accessing this information have been replaced by the new [Places](/zh-CN/Places) architecture. See the [Places migration guide](/zh-CN/Places_migration_guide) for details on updating your existing extension to use the Places API.

#### Download Manager

The Download Manager API has changed slightly due to the transition from an RDF data store to using the [Storage](/zh-CN/Storage) API. This should be a pretty easy transition to make. In addition, the API for monitoring download progress has changed to support multiple download manager listeners. See [`nsIDownloadManager`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDownloadManager), [`nsIDownloadProgressListener`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDownloadProgressListener), and [Monitoring downloads](/zh-CN/Monitoring_downloads) for more information.

#### Password Manager

If your extension accesses user login information using the Password Manager, it will need to be updated to use the new Login Manager API.

- The article [Using nsILoginManager](/zh-CN/Using_nsILoginManager) includes examples, including a demonstration of how to write your extension to work with both the Password Manager and the Login Manager, so it will work with both Firefox 3 and earlier versions.
- [`nsILoginInfo`](/zh-CN/NsILoginInfo)
- [`nsILoginManager`](/zh-CN/NsILoginManager)

You can also override the built-in password manager storage if you want to provide your own password storage implementation in your extensions. See [Creating a Login Manager storage module](/zh-CN/Creating_a_Login_Manager_storage_module) for details.

#### Popups (Menus, Context Menus, Tooltips and Panels)

The XUL Popup system was heavily modified in Firefox 3. The Popup system includes main menus, context menus and popup panels. A guide to [using Popups](/zh-CN/XUL/PopupGuide) has been created, detailing how the system works. One thing to note is that `popup.showPopup` has been deprecated in favor of new `popup.openPopup` and `popup.openPopupAtScreen`.

#### Autocomplete

The [`nsIAutoCompleteController`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAutoCompleteController) interface's [`handleEnter()`](/zh-CN/NsIAutoCompleteController#handleEnter.28.29) method has been changed to accept an argument that indicates whether the text was selected from the autocomplete popup or by the user pressing enter after typing text.

#### DOMParser

- When a `DOMParser` is instantiated, it inherits the calling code's principal and the `documentURI` and `baseURI` of the window the constructor came from.
- If the caller has UniversalXPConnect privileges, it can pass parameters to `new DOMParser()`. If fewer than three parameters are passed, the remaining parameters will default to `null`.

  - The first parameter is the principal to use; this overrides the default principal normally inherited.
  - The second parameter is the `documentURI` to use.
  - The third parameter is the `baseURI` to use.

- If you initialize a `DOMParser` using a contract, such as by calling `createInstance()`, and you don't call the `DOMParser`'s `init()` method, attempting to initiate a parsing operation will automatically create and initialize the `DOMParser` with a null principal and `null` pointers for `documentURI` and `baseURI`.

#### Removed interfaces

The following interfaces were removed from Gecko 1.9, which drives Firefox 3. If your extension makes use of any of these, you'll need to update your code:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (see [bug 386200](https://bugzilla.mozilla.org/show_bug.cgi?id=386200))

### Step 4: Check for relevant chrome changes

There has been a minor change to the chrome that may require changes in your code. A new `vbox` has been added, called "browser-bottombox", which encloses the find bar and status bar at the bottom of the browser window. Although this doesn't affect the appearance of the display, it may affect your extension if it overlays chrome relative to these elements.

For example, if you previously overlaid some chrome before the status bar, like this:

```xml
<window id="main-window">
  <something insertbefore="status-bar" />
</window>
```

You should now overlay it like this:

```xml
<vbox id="browser-bottombox">
  <something insertbefore="status-bar" />
</vbox>
```

Or use the following technique to make your overlay work on both Firefox 2 and Firefox 3:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

> **备注：** This change is effective for Firefox 3 beta 4 and the pre-beta 4 nightlies.

### 其他方面的修改

_Add simple changes you had to make while updating your extension to work with Firefox 3 here._

- `chrome://browser/base/utilityOverlay.js` is no longer supported for security reasons. If you were previously using this, you should switch to `chrome://browser/content/utilityOverlay.js`.
- [`nsIAboutModule`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAboutModule) implementations are now required to support the `getURIFlags` method. See [nsIAboutModule.idl](https://dxr.mozilla.org/mozilla-central/source/netwerk/protocol/about/nsIAboutModule.idl) for documentation. This affects extensions that provide new `about:` URIs. ([bug 337746](https://bugzilla.mozilla.org/show_bug.cgi?id=337746))
- The [`tabbrowser`](/zh-CN/docs/Mozilla/Tech/XUL/tabbrowser) element is no longer part of "toolkit" ([bug 339964](https://bugzilla.mozilla.org/show_bug.cgi?id=339964)). This means this element is no longer available to XUL applications and extensions. It continues to be used in the main Firefox window (browser.xul).
- Changes to [nsISupports proxies](/zh-CN/NsISupports_proxies) and possibly to threading-related interfaces need to be documented.
- If you use XML processing instructions, such as `<?xml-stylesheet ?>` in your XUL files, be aware of the changes made in [bug 319654](https://bugzilla.mozilla.org/show_bug.cgi?id=319654):

  1. XML PIs are now added to a XUL document's DOM. This means [`document.firstChild`](/zh-CN/docs/Web/API/Document/firstChild) is no longer guaranteed to be the root element. If you need to get the root document in your script, use [`document.documentElement`](/zh-CN/docs/Web/API/Document/documentElement) instead.
  2. `<?xml-stylesheet ?>` and `<?xul-overlay ?>` processing instructions now have no effect outside the document prolog.

- `window.addEventListener("load", myFunc, true)` is not fired when loading web content (browser page loads). This is due to [bug 296639](https://bugzilla.mozilla.org/show_bug.cgi?id=296639) which changes the way inner and outer windows communicate. The simple fix here is to use `gBrowser.addEventListener("load", myFunc, true)` as described [here](/zh-CN/Code_snippets/Tabbed_browser#Detecting_page_load) and works in Firefox 2 as well.
- `content.window.getSelection()` gives an object (which can be converted to a string by `toString()`), unlike the now deprecated `content.document.getSelection()` which returns a string
- `event.preventBubble()` was deprecated in Firefox 2 and has been removed in Firefox 3. Use [`event.stopPropagation()`](/zh-CN/DOM/event.stopPropagation), which works in Firefox 2 as well.
- Timers that are initiated using `setTimeout()` are now blocked by modal windows due to the fix made for [bug 52209](https://bugzilla.mozilla.org/show_bug.cgi?id=52209). You may use `nsITimer` instead.
- If your extension needs to allow an untrusted source (e.g., a web site) to access the extension's chrome, then you must use the new [`contentaccessible` flag](/zh-CN/Chrome_Registration#contentaccessible).
