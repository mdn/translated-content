---
title: Firefox 1.5 para desenvolvedores
slug: Mozilla/Firefox/Releases/1.5
---

{{FirefoxSidebar}}

Based on the [Gecko](/pt-BR/docs/Gecko) 1.8 engine, Firefox 1.5 improved its already best in class standards support, and provided new capabilities to enable the next generation of web applications. Firefox 1.5 features improved support for CSS2 and CSS3, APIs for scriptable and programmable 2D graphics through [SVG](/pt-BR/docs/SVG) 1.1 and [`<canvas>`](/pt-BR/docs/HTML/Canvas), [XForms](/pt-BR/docs/XForms) and XML events, as well as many DHTML, JavaScript, and DOM enhancements.

## Developer Tools

Several tools and browser extensions are available to help developers support Firefox 1.5.

- [DOM Inspector](/pt-BR/docs/DOM_Inspector), a tool that allows developers to inspect and modify documents without having to edit the document directly. DOM Inspector is available as part of the Custom install option in Firefox 1.5 under Developer Tools.
- JavaScript console, a tool to write and test JavaScript code as well as view JavaScript and CSS errors on a page.
- View page source, with syntax highlighting and find features.
- [Browser extensions](https://addons.mozilla.org/extensions/showlist.php?application=firefox&category=Developer%20Tools) including the [FireBug](http://www.joehewitt.com/software/firebug/), [Web Developer toolbar](</pt-BR/docs/Web_Developer_Extension_(external)> "/en-US/docs/Web_Developer_Extension_(external)"), [Live HTTP Headers](</pt-BR/docs/Live_HTTP_Headers_(external)> "/en-US/docs/Live_HTTP_Headers_(external)"), [HTML Validator](</pt-BR/docs/HTML_Validator_(external)> "/en-US/docs/HTML_Validator_(external)") and many more.

**Note:** Some extensions do not currently support Firefox 1.5, and will be automatically disabled.

## Overview

Some of the new features in Firefox 1.5:

### Web site and application developers

- [SVG In XHTML Introduction](/pt-BR/docs/SVG_In_HTML_Introduction)
  - : Learn how to use SVG in XHTML pages and how to use JavaScript and CSS to manipulate the picture in the same way you would script regular XHTML. See also [SVG in Firefox](/pt-BR/docs/SVG_in_Firefox) to learn about the status and known problems of SVG implementation in Firefox.
- [Drawing Graphics with Canvas](/pt-BR/docs/HTML/Canvas/Drawing_Graphics_with_Canvas)
  - : Learn about the new `<canvas>` tag and how to draw graphs and other objects in Firefox.
- [CSS3 Columns](/pt-BR/docs/CSS/Using_CSS_multi-column_layouts)
  - : Learn about the new support for automatic multi-column text layout as proposed for [CSS3](/pt-BR/docs/CSS/CSS3).
- [Using Firefox 1.5 caching](/pt-BR/docs/Using_Firefox_1.5_caching)
  - : Learn about `bfcache` and how it speeds up back and forward navigation.

### XUL and Extension Developers

- [Building an Extension](/pt-BR/docs/Building_an_Extension)
  - : This tutorial will take you through the steps required to build a very basic extension for Firefox. Also see [another tutorial on MozillaZine knowledge base](http://kb.mozillazine.org/Getting_started_with_extension_development), which demonstrates the new features of the Extension Manager in 1.5 that make creating a new extension even easier.
- [XPCNativeWrapper](/pt-BR/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` is a way to wrap up an object so that it's [safe to access from privileged code](/pt-BR/docs/Safely_accessing_content_DOM_from_chrome). It can be used in all Firefox versions, though the behavior changed somewhat starting with Firefox 1.5 (Gecko 1.8).
- [Preferences System](/pt-BR/docs/Preferences_System)
  - : Learn about the new widgets that allow you to create Options windows easier using less JavaScript code.
- [International characters in XUL JavaScript](/pt-BR/docs/International_characters_in_XUL_JavaScript)
  - : XUL JavaScript files can now contain non-ASCII characters.
- [Tree API changes](/pt-BR/docs/Tree_Widget_Changes)
  - : The interfaces for accessing XUL `<tree>` elements have changed.
- [XUL Changes for Firefox 1.5](/pt-BR/docs/XUL_Changes_for_Firefox_1.5)
  - : Summary of XUL changes. See also [Adapting XUL Applications for Firefox 1.5](/pt-BR/docs/Adapting_XUL_Applications_for_Firefox_1.5).

#### Networking-related changes

- Certificate prompts can now be overridden on a per-channel basis. This works by setting an interface requestor as an [nsIChannel](/pt-BR/docs/nsIChannel)'s notificationCallbacks and giving out an interface for [nsIBadCertListener](/pt-BR/docs/NsIBadCertListener).
- nsIWebBrowserPersist's listeners can now implement [nsIInterfaceRequestor](/pt-BR/docs/XPCOM_Interface_Reference/nsIInterfaceRequestor)::GetInterface and will get an opportunity to provide all interfaces that channels might ask for, including [nsIProgressEventSink](/pt-BR/docs/NsIProgressEventSink) (not too useful, redundant with [nsIWebProgressListener](/pt-BR/docs/nsIWebProgressListener)). Useful interfaces here include [nsIChannelEventSink](/pt-BR/docs/NsIChannelEventSink) and [nsIBadCertListener](/pt-BR/docs/NsIBadCertListener).
- Extensions or other necko consumers, including XMLHttpRequest, can set a Cookie header explicitly, and necko will not replace it. Stored cookies will be merged with the explicitly set header, in a way that the explicit header will override the stored cookies.

## New End user Features

### User Experience

- **Faster browser navigation** with improvements to back and forward button performance.
- **Drag and drop reordering for browser tabs.**
- **Answers.com is added to the search engine list** for dictionary lookup.
- **Improvements to product usability** including descriptive error pages, redesigned options menu, RSS discovery, and "Safe Mode" experience.
- **Better accessibility support** including DHTML accessibility.
- **Report a broken Web site wizard** to report Web sites that are not working in Firefox.
- **Better support for Mac OS X** (10.2 and greater) including profile migration from Safari and Mac Internet Explorer.

### Security and Privacy

- **Automated update** to streamline product upgrades. Notification of an update is more prominent, and updates to Firefox may now be half a megabyte or smaller. Updating extensions has also improved.
- **Improvements to popup blocking.**
- **Clear Private Data** feature provides an easy way to quickly remove personal data through a menu item or keyboard shortcut.

### Support for open Web standards

Firefox support for Web standards continues to lead the industry with consistent cross-platform implementations for:

- Hypertext Markup Language ([HTML](/pt-BR/docs/HTML)) and Extensible Hypertext Markup Language ([XHTML](/pt-BR/docs/XHTML)): [HTML 4.01](https://www.w3.org/TR/html401/) and [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/pt-BR/docs/CSS)): [CSS Level 1](https://www.w3.org/TR/REC-CSS1), [CSS Level 2](https://www.w3.org/TR/REC-CSS2) and parts of [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/pt-BR/docs/DOM)): [DOM Level 1](https://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) and parts of [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematical Markup Language: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/pt-BR/docs/XML)): [XML 1.0](https://www.w3.org/TR/REC-xml), [Namespaces in XML](https://www.w3.org/TR/REC-xml-names/), [Associating Style Sheets with XML Documents 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragment Identifier for XML](http://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/01-NOTE-FIXptr-20010425.htm)
- XSL Transformations ([XSLT](/pt-BR/docs/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt)
- XML Path Language ([XPath](/pt-BR/docs/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath)
- Resource Description Framework ([RDF](/pt-BR/docs/RDF)): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/SOAP/)
- [JavaScript](/pt-BR/docs/JavaScript) 1.6, based on [ECMA-262](/pt-BR/docs/ECMAScript), revision 3: [ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

Firefox 1.5 supports the following data transport protocols (HTTP, FTP, SSL, TLS, and others), multilingual character data (Unicode), graphics (GIF, JPEG, PNG, SVG, and others) and the latest version of the world's most popular scripting language, [JavaScript 1.6](/pt-BR/docs/New_in_JavaScript_1.6).

## Changes since Firefox 1.0

Many changes have been introduced into Firefox since it was first released on November 9, 2004. Firefox has progressed with many new features and bug fixes. A detailed list of changes is available from [squarefree.com](http://www.squarefree.com/burningedge/releases/1.5-comprehensive.html).
