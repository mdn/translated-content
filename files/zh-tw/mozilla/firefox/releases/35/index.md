---
title: Firefox 35 技術文件
slug: Mozilla/Firefox/Releases/35
---

{{FirefoxSidebar}}{{ ReleaseChannelInfo("35", "35", "January 2015", "Aurora") }}

Want to help document Firefox 35? See the [list of bugs that need to be written about](http://beta.elchi3.de/doctracker/#list=fx&version=35.0) and pitch in!

## Changes for Web developers

### Developer Tools

Highlights:

- [See ::before and ::after pseudo elements in the Page Inspector](/zh-TW/docs/Tools/Page_Inspector#.3A.3Abefore_and_.3A.3Aafter)
- [CSS source maps are now enabled by default](/zh-TW/docs/Tools/Style_Editor#Source_map_support)
- ["Show DOM Properties" from the Page Inspector](/zh-TW/docs/Tools/Page_Inspector#Element_popup_menu_2)

[All devtools bugs fixed between Firefox 34 and Firefox 35](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- The [`mask-type`](/zh-TW/docs/Web/CSS/mask-type) property has been activated by default ([bug 1058519](https://bugzilla.mozilla.org/show_bug.cgi?id=1058519)).
- The [`filter`](/zh-TW/docs/Web/CSS/filter) property is now activated by default ([bug 1057180](https://bugzilla.mozilla.org/show_bug.cgi?id=1057180)).
- The [`@font-face`](/zh-TW/docs/Web/CSS/@font-face) at-rule now supports WOFF2 fonts ([bug 1064737](https://bugzilla.mozilla.org/show_bug.cgi?id=1064737)).

### HTML

- The obsolete and non-conforming `bottommargin`, `leftmargin`, `rightmargin` and `topmargin` attributes of the `<body> element` have been activated in non-quirks mode ([bug 95530](https://bugzilla.mozilla.org/show_bug.cgi?id=95530)).

### JavaScript

- The "[temporal dead zone](/zh-TW/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)" for [`let`](/zh-TW/docs/Web/JavaScript/Reference/Statements/let) declarations has been implemented. In conformance with ES6 `let` semantics, the following situations
  now throw errors. See also this [newsgroup announcement](https://groups.google.com/forum/#!topic/mozilla.dev.platform/tezdW299Zds) and [bug 1001090](https://bugzilla.mozilla.org/show_bug.cgi?id=1001090).

  - Redeclaring existing variables or arguments using `let` within the same scope in function bodies is now a syntax error.
  - Using a variable declared using `let` in function bodies before the declaration is reached and evaluated is now a runtime error.

- ES6 [`Symbols`](/zh-TW/docs/Web/JavaScript/Reference/Symbols) (only available in the Nightly channel) have been updated to conform with recent specification changes:

  - `String(Symbol("1"))` now no longer throws a [`TypeError`](/zh-TW/docs/Web/JavaScript/Reference/TypeError); instead a string (`"Symbol(1)"`) gets returned ([bug 1058396](https://bugzilla.mozilla.org/show_bug.cgi?id=1058396)).

- The various [_TypedArray_ constructors](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) now have as their `[[Prototype]]` a single function, denoted `%TypedArray%` in ES6 (but otherwise not directly exposed). Each typed array prototype now inherits from `%TypedArray%.prototype`. (`%TypedArray%` and `%TypedArray%.prototype` inherit from [`Function.prototype`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) and [`Object.prototype`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype), respectively, so that typed array constructors and instances still have the properties found on those objects.) Typed array function properties now reside on `%TypedArray%.prototype` and work on any typed array. See [_TypedArray_](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Description) and [bug 896116](https://bugzilla.mozilla.org/show_bug.cgi?id=896116) for more information.
- ES6 semantics for [prototype mutations using object literals](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer#Prototype_mutation) have been implemented ([bug 1061853](https://bugzilla.mozilla.org/show_bug.cgi?id=1061853)).

  - Now only a single member notated as `__proto__:value` will mutate the `[[Prototype]]` in the object literal syntax.
  - Method members like `__proto__() {}` will not overwrite the `[[Prototype]]` anymore.

### Interfaces/APIs/DOM

- The [`NavigatorLanguage`](/zh-TW/docs/Web/API/NavigatorLanguage) interface is now available to workers on [`WorkerNavigator`](/zh-TW/docs/Web/API/WorkerNavigator) ([bug 925849](https://bugzilla.mozilla.org/show_bug.cgi?id=925849)).
- The [`Element.closest`](/zh-TW/docs/Web/API/Element/closest) method returns the closest ancestor of the current element ([bug 1055533](https://bugzilla.mozilla.org/show_bug.cgi?id=1055533)).

### MathML

- The `dtls` OpenType feature (via the CSS [`font-feature-settings`](/zh-TW/docs/Web/CSS/font-feature-settings) on the default stylesheet) is now applied automatically to MathML elements when positioning scripts over it (e.g. dotless i with mathematical hat).

### SVG

_No change._

### Audio/Video

_No change._

## Security

- The [Public Key Pinning](/zh-TW/docs/Web/Security/Public_Key_Pinning) Extension for HTTP (HPKP) has been implemented. ([bug 787133](https://bugzilla.mozilla.org/show_bug.cgi?id=787133))

## Changes for add-on and Mozilla developers

### XUL

- The private `_getTabForBrowser()` method on the [`tabbrowser`](/zh-TW/docs/Mozilla/Tech/XUL/tabbrowser) element has been deprecated. In its place, we've added a new, public, method called [`getTabForBrowser`](/zh-TW/docs/Mozilla/Tech/XUL/Method/getTabForBrowser). This returns, predictably, the [`tab`](/zh-TW/docs/Mozilla/Tech/XUL/tab) element that contains the specified [`browser`](/zh-TW/docs/Mozilla/Tech/XUL/browser).

## Older versions

- [Firefox 34 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/34)
- [Firefox 33 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/33)
- [Firefox 32 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/32)
- [Firefox 31 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/31)
- [Firefox 30 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/30)
- [Firefox 29 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/29)
- [Firefox 28 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/28)
- [Firefox 27 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/27)
- [Firefox 26 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/26)
- [Firefox 25 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/25)
- [Firefox 24 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/24)
- [Firefox 23 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/23)
- [Firefox 22 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/22)
- [Firefox 21 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/21)
- [Firefox 20 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/20)
- [Firefox 19 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/19)
- [Firefox 18 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/18)
- [Firefox 17 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/17)
- [Firefox 16 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/16)
- [Firefox 15 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/15)
- [Firefox 14 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/14)
- [Firefox 13 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/13)
- [Firefox 12 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/12)
- [Firefox 11 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/11)
- [Firefox 10 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/10)
- [Firefox 9 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/9)
- [Firefox 8 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/8)
- [Firefox 7 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/7)
- [Firefox 6 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/6)
- [Firefox 5 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 for developers](/zh-TW/docs/Mozilla/Firefox/Releases/1.5)
