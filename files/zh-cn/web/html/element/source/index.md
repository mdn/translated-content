---
title: Source
slug: Web/HTML/Element/source
---

## 概述

**HTML `<source>` **元素为 {{HTMLElement("picture")}}, {{HTMLElement("audio")}} 或者 {{HTMLElement("video")}} 元素指定多个媒体资源。这是一个空元素。它通常用于以[不同浏览器支持的多种格式](/zh-CN/docs/Web/HTML/Supported_media_formats)提供相同的媒体内容。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">
    <p>Usage Context</p>
   </th>
   <td>A media element ({{HTMLElement("audio")}} or {{HTMLelement("video")}}, and it should be placed before any <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">flow content</a> or {{HTMLElement("track")}} element.</td>
  </tr>
  <tr>
   <th scope="row"><dfn>Permitted parent elements</dfn></th>
   <td>A {{HTMLElement("picture")}} element, and it should be placed before the {{HTMLElement("img")}} element.</td>
  </tr>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">Content categories</a></th>
   <td>None.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td>None, it is an {{Glossary("empty element")}}.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>It must have start tag, but must not have an end tag.</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLSourceElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素包含 [全局属性](/zh-CN/docs/HTML/Global_attributes).

- {{htmlattrdef("sizes")}} {{experimental_inline}}
  - : Is a list of source sizes that describes the final rendered width of the image represented by the source. Each source size consists of a comma-separated list of media condition-length pairs. This information is used by the browser to determine, before laying the page out, which image defined in {{htmlattrxref("srcset", "source")}} to use.
    The `sizes` attribute has an effect only when the {{HTMLElement("source")}} element is the direct child of a {{HTMLElement("picture")}} element.
- {{htmlattrdef("src")}}
  - : Required for {{HTMLElement("audio")}} and {{HTMLElement("video")}}, address of the media resource. The value of this attribute is ignored when the `<source>` element is placed inside a {{HTMLElement("picture")}} element.
- {{htmlattrdef("srcset")}} {{experimental_inline}}
  - : A list of one or more strings separated by commas indicating a set of possible images represented by the source for the browser to use. Each string is composed of:1. one URL to an image, 2. a width descriptor, that is a positive integer directly followed by `'w'`. The default value, if missing, is the infinity. 3. a pixel density descriptor, that is a positive floating number directly followed by `'x'`. The default value, if missing, is `1x`.Each string in the list must have at least a width descriptor or a pixel density descriptor to be valid. Among the list, there must be only one string containing the same tuple of width descriptor and pixel density descriptor.
    The browser chooses the most adequate image to display at a given point of time.
    The `srcset` attribute has an effect only when the {{HTMLElement("source")}} element is the direct child of a {{HTMLElement("picture")}} element.
- {{htmlattrdef("type")}}
  - : The MIME-type of the resource, optionally with a `codecs` parameter. See [RFC 4281](http://tools.ietf.org/html/rfc4281) for information about how to specify codecs.
- {{htmlattrdef("media")}} {{experimental_inline}}
  - : [Media query](/zh-CN/docs/CSS/Media_queries) of the resource's intended media; this should be used only in a {{HTMLElement("picture")}} element.

If the **type** attribute isn't specified, the media's type is retrieved from the server and checked to see if Gecko can handle it; if it can't be rendered, the next **source** is checked. If the **type** attribute is specified, it's compared against the types Gecko can play, and if it's not recognized, the server doesn't even get queried; instead, the next **source** element is checked at once.

## Examples

This example demonstrates how to offer a video in Ogg format for users whose browsers support Ogg format, and a QuickTime format video for users whose browsers support that. If the `audio` or `video` element is not supported by the browser, a notice is displayed instead. If the browser supports the element but does not support any of the specified formats, an `error` event is raised and the default media controls (if enabled) will indicate an error. See also the list of [media formats supported by the audio and video elements](/zh-CN/docs/Media_formats_supported_by_the_audio_and_video_elements) in various browsers.

```html
<video controls>
  <source src="foo.webm" type="video/webm">
  <source src="foo.ogg" type="video/ogg">
  <source src="foo.mov" type="video/quicktime">
  I'm sorry; your browser doesn't support HTML5 video.
</video>
```

For more examples, see [Using audio and video in Firefox](/zh-CN/docs/Using_HTML5_audio_and_video).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("picture")}} element

{{HTMLRef}}
