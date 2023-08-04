---
title: Guide to media types and formats on the web
slug: Web/Media/Formats
---

Since nearly the beginning, the web has included support for some form of visual media presentation. Originally, these capabilities were limited, and were expanded organically, with different browsers finding their own solutions to the problems around including still and video imagery on the web. The modern web has powerful features to support the presentation and manipulation of media, with several media-related APIs supporting various types of content. Generally, the media formats supported by a browser are entirely up to the browser's creators, which can complicate the work of a web developer.

This guide provides an overview of the media file types, {{Glossary("codec", "codecs")}}, and algorithms that may comprise media used on the web. Browser support information for various combinations of these is also provided, and suggestions for prioritization of formats as well as which formats excel at specific types of content are also provided.

## References

### Images

- [Image file type and format guide](/ko/docs/Web/Media/Formats/Image_types)
  - : Covers image file type and content format support across the major web browsers, as well as providing basic information about each type: benefits, limitations, and use cases of interest to web designers and developers.
- [Image file types for web designers](/ko/docs/Web/Media/Formats/Images_for_web_designers)
  - : Fundamental information about the various image file types that may be useful for web designers, including best practices and use cases for each type, and guidelines for choosing the right image file format for specific types of content.

### Media file types and codecs

- [Media containers (file types)](/ko/docs/Web/Media/Formats/Containers)
  - : A guide to the file types that contain media data. Some are audio-specific, while others may be used for audio and/or combined audiovisual content such as movies. Includes overviews of each of the file types supported by the major web browsers, along with browser support information and supported features.
- [Web audio codec guide](/ko/docs/Web/Media/Formats/Audio_codecs)
  - : A guide to the audio codecs allowed for by the common media containers, as well as by the major browsers. Includes benefits, limitations, key specifications and capabilities, and use cases. The support each browser has for using the codec in given containers is also covered.
- [Web video codec guide](/ko/docs/Web/Media/Formats/Video_codecs)
  - : This article provides basic information about the video codecs supported by the major browsers, as well as potentially some not commonly supported that you might still run into. Codec capabilities, benefits, limitations, and browser support levels and restrictions are covered as well.
- [The "codecs" parameter in common media types](/ko/docs/Web/Media/Formats/codecs_parameter)
  - : When specifying the MIME type describing a media format, you can provide details using the `codecs` parameter as part of the type string. In this guide, the format and possible values of the `codecs` parameter for the common media types are described.
- [Codecs used by WebRTC](/ko/docs/Web/Media/Formats/WebRTC_codecs)
  - [: WebRTC](/ko/docs/Web/API/WebRTC_API) doesn't use a container, but instead streams the encoded media itself from peer to peer using {{domxref("MediaStreamTrack")}} objects to represent each audio or video track. In this guide, the codecs commonly used with WebRTC are discussed.

## Guides

### Concepts

- [Digital audio concepts](/ko/docs/Web/Media/Formats/Audio_concepts)
  - : An introduction to how audio is converted into digital form and stored for use by computers. Basics about how audio is sampled are explained, as are concepts such as sample rate, audio frames, and audio compression.
- [Digital video concepts](/ko/docs/Web/Media/Formats/Video_concepts)
  - : A guide to fundamental concepts involved with digital video as used on the web, including basics about color formats, chroma subsampling, how human perception influences video coding, and so forth.

### Tutorials and how-tos

- [Learning: Video and audio content](/ko/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : In this tutorial, the use of media on the web is introduced and covered in reasonable detail.
- [Handling media support issues in web content](/ko/docs/Web/Media/Formats/Support_issues)
  - : In this guide, we look at how to build web content that maximizes quality and/or performance while providing the broadest possible compatibility by choosing media formats wisely, and offering fallbacks and alternate formats where it would be helpful.

## Other topics

- [Media Capabilities API](/ko/docs/Web/API/Media_Capabilities_API)
  - : The Media Capabilities API lets you determine the encoding and decoding capabilities of the device your app or site is running on. This lets you make real-time decisions about what formats to use and when.
