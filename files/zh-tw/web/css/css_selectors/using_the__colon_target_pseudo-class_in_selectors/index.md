---
title: 使用 :target
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
---

{{CSSRef}}

When a URL points at a specific piece of a document, it can be difficult to ascertain. Find out how you can use some simple CSS to draw attention to the target of a URL and improve the user's experience. As an aid to identifying the destination of a link that points to a specific portion of a document, [CSS3 Selectors](http://www.w3.org/TR/css3-selectors/#target-pseudo) introduces the `{{ Cssxref(":target") }}` [pseudo-class](/zh-TW/CSS/Pseudo-classes). Netscape 7.1 introduced support for this pseudo-class into the Netscape family, giving authors a new way to assist users keep oriented within large documents.

### 挑選目標

The pseudo-class`{{ Cssxref(":target") }}`is used to style the target element of a URI containing a fragment identifier. For example, the URI `http://developer.mozilla.org/en/docs/Using_the_:target_selector#Example` contains the fragment identifier `#Example`. In HTML, identifiers are found as the values of either `id` or `name` attributes, since the two share the same namespace. Thus, the example URI would point to the heading "Example" in this document.

Suppose you wish to style any `h2` element that is the target of a URI, but do not want any other kind of element to get a target style. This is simple enough:

```plain
h2:target {font-weight: bold;}
```

It's also possible to create styles that are specific to a particular fragment of the document. This is done using the same identifying value that is found in the URI. Thus, to add a border to the `#Example` fragment, we would write:

```plain
#Example:target {border: 1px solid black;}
```

### 選擇所有元素

If the intent is to create a "blanket" style that will apply to all targeted elements, then the universal selector comes in handy:

```plain
:target {color: red;}
```

### 範例

In the following example, there are five links that point to elements in the same document. Selecting the "First" link, for example, will cause `<h1 id="one">` to become the target element. Note that the document may jump to a new scroll position, since target elements are placed on the top of the browser window if possible.

```html
<h4 id="one">...</h4>
<p id="two">...</p>
<div id="three">...</div>
<a id="four">...</a> <em id="five">...</em>

<a href="#one">First</a>
<a href="#two">Second</a>
<a href="#three">Third</a>
<a href="#four">Fourth</a>
<a href="#five">Fifth</a>
```

### 結論

In cases where a fragment identifier points to a portion of the document, readers may become confused about which part of the document they're supposed to be reading. By styling the target of a URI, reader confusion can be reduced or eliminated.

### 相關連結

- [CSS3 Selectors #target-pseudo](http://www.w3.org/TR/css3-selectors/#target-pseudo)
- [CSS Reference :target](/En/CSS/:target)
