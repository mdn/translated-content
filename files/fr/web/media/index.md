---
title: Technologies media Web
slug: Web/Media
translation_of: Web/Media
---
Over the years, the Web's ability to present, create, and manage audio, video, and other media has grown at an increasing pace. Today, there are a large number of APIs available, as well as HTML elements, DOM interfaces, and other features that make it possible to not only perform these tasks, but use media in tandem with other technologies to do truly remarkable things. This article lists the various APIs with links to documentation you may find helpful in mastering them.

## References

### HTML

These articles cover HTML features for media developers.

- {{HTMLElement("audio")}}
  - : The `<audio>` element is used to play audio in a Web context. These can be used invisibly as a destination for more complex media, or with visible controls for user-controlled playback of audio files.
- {{HTMLElement("video")}}
  - : The `<video>` element is an endpoint for video content in a Web context. It can be used to simply present video files, or as a destination for streamed video content. `<video>` can also be used as a way to link media APIs with other HTML and DOM technologies, including {{HTMLElement("canvas")}} (for frame grabbing and manipulation), for example.

### APIs

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
  - : A reference for the API which makes it possible to stream, record, and manipulate media both locally and across a network. This includes using local cameras and microphones to capture video, audio, and still images.
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
  - : The Web Audio API lets you generate, filter, and manipulate sound data both in real-time and on pre-recorded material, then send that audio to a destination such as an `<audio>` element, a media stream, or to disk.
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) makes it possible to stream live audio and video, as well as transfer arbitrary data, between two peers over the Internet, without requiring an intermediary.

## Guides

- [Overview of media technology on the web](/en-US/docs/Web/Media/Overview)
  - : A general look at the open Web technologies and APIs that provide support for audio and video playback, manipulation, and recording. If you're not sure which API you should use, this is the place to start.

## Other topics

Related topics which may be of interest, since they can be used in tandem with media APIs in interesting ways.

- [The Canvas API](/en-US/docs/Web/API/Canvas_API)
  - : The Canvas API lets you draw into an {{HTMLElement("canvas")}}, manipulating and changing the contents of an image. This can be used with media in many ways, including by setting a `<canvas>` element as the destination for video playback or camera capture so that you can capture and manipulate video frames.
- [WebGL](/en-US/docs/Web/API/WebGL_API)
  - : WebGL provides an OpenGL ES compatible API on top of the existing Canvas API, making it possible to do powerful 3D graphics on the Web. Through a canvas, this can be used to add 3D imagery to media content.
