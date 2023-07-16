---
title: Guide to media types and formats on the web
slug: Web/Media/Formats
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Media")}}

几乎从一开始，网络就包含了对某种形式的视觉媒体呈现的支持。最初，这些功能是有限的，但是不同的浏览器厂商扩展了这些功能，并且找到了自己的解决方案来解决网络上的静态和视频图像等问题。现代 Web 具有强大的功能来支持媒体的呈现和操作，多个与媒体相关的 API 支持各种类型的内容。通常，浏览器支持的媒体格式完全取决于浏览器的创建者，这可能会使 Web 开发人员的工作复杂化。

This guide provides an overview of the media file types, {{Glossary("codec", "codecs")}}, and algorithms that may comprise media used on the web. It also provides browser support information for various combinations of these, and suggestions for prioritization of formats, as well as which formats excel at specific types of content.

## References

### Images

- [Image file type and format guide](/zh-CN/docs/Web/Media/Formats/Image_types)
  - : Covers support of image file types and content formats across the major web browsers, as well as providing basic information about each type: benefits, limitations, and use cases of interest to web designers and developers.
- [Image file types for web designers](/zh-CN/docs/Web/Media/Formats/Images_for_web_designers)
  - : Fundamental information about the various image file types that may be useful for web designers, including best practices and use cases for each type, and guidelines for choosing the right image file format for specific types of content.

### Media file types and codecs

- [Media containers (file types)](/zh-CN/docs/Web/Media/Formats/Containers)
  - : A guide to the file types that contain media data. Some are audio-specific, while others may be used for either audio or combined audiovisual content such as movies. Includes overviews of each of the file types supported by the major web browsers, along with browser support information and supported features.

<!---->

- [Web audio codec guide](/zh-CN/docs/Web/Media/Formats/Audio_codecs)
  - : A guide to the audio codecs allowed for by the common media containers, as well as by the major browsers. Includes benefits, limitations, key specifications and capabilities, and use cases. It also covers each browser's support for using the codec in given containers.
- [Web video codec guide](/zh-CN/docs/Web/Media/Formats/Video_codecs)
  - : This article provides basic information about the video codecs supported by the major browsers, as well as some that are not commonly supported but that you might still run into. It also covers codec capabilities, benefits, limitations, and browser support levels and restrictions.
- [The "codecs" parameter in common media types](/zh-CN/docs/Web/Media/Formats/codecs_parameter)
  - : When specifying the MIME type describing a media format, you can provide details using the `codecs` parameter as part of the type string. This guide describes the format and possible values of the `codecs` parameter for the common media types.
- [Codecs used by WebRTC](/zh-CN/docs/Web/Media/Formats/WebRTC_codecs)
  - : [WebRTC](/zh-CN/docs/Web/API/WebRTC_API) doesn't use a container, but instead streams the encoded media itself from peer to peer using {{domxref("MediaStreamTrack")}} objects to represent each audio or video track. This guide discusses the codecs commonly used with WebRTC.

## Guides

### Concepts

- [Digital audio concepts](/zh-CN/docs/Web/Media/Formats/Audio_concepts)
  - : An introduction to how audio is converted into digital form and stored for use by computers. It explains basic concepts about how audio is sampled, as well as concepts such as sample rate, audio frames, and audio compression.
- [Digital video concepts](/zh-CN/docs/Web/Media/Formats/Video_concepts)
  - : A guide to fundamental concepts involved with digital video as used on the web, including basics about color formats, chroma subsampling, how human perception influences video coding, and so forth.

### Tutorials and how-tos

- [Learning: Video and audio content](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : This tutorial introduces and details the use of media on the web.
- [Handling media support issues in web content](/zh-CN/docs/Web/Media/Formats/Support_issues)
  - : In this guide, we look at how to build web content that maximizes quality or performance while providing the broadest possible compatibility, by choosing media formats wisely, and offering fallbacks and alternate formats where it would be helpful.

## Other topics

- [Media Capabilities API](/zh-CN/docs/Web/API/Media_Capabilities_API)
  - : The Media Capabilities API lets you discover the encoding and decoding capabilities of the device your app or site is running on. This lets you make real-time decisions about what formats to use and when.
