---
title: Web Performance
slug: Learn/Performance
---

## {{LearnSidebar}}

构建一个网站需要 HTML、CSS 和 JavaScript。为了构建人们需要的、能吸引和留住用户的网站和应用，你需要创建一个良好的用户体验。良好用户体验的一部分是确保内容能够快速加载并响应用户交互。这就是所谓的**web 性能**，在这个模块中，你将会学到构建性能良好的网站所需要的知识。

给初学者的学习材料的剩下部分主要关注于如何尽量提高性能和易用性等网络体验。但是，也需要特别关注这些话题，确保你熟悉他们。

## 学习方法

虽然了解 HTML，CSS 和 Javascript 是实现许多网页性能提升建议的必要条件，但了解如何构建应用却不是理解和衡量网页性能的必要先决条件。即便如此我们仍建议在通读此模块之前，你至少要过一遍我们的网页编程入门模块，对网页发展有一个基本认识。

更深入进行以下主题也很有必要，这些模块包括

- HTML 入门
- CSS 初步
- Javascript 初步

当你通读了这个部分之后，你或许特别想深入了解网页性能——你可以 在我们的主 MDN 网页性能章节找到更多教学，包括性能 API 的概览，测试和分析工具，以及性能瓶颈问题。

## Introductory modules

This topic contains the following modules, in a suggested order for working through them. You should definitely start with the first one.

- [What is web performance?](/zh-CN/docs/Learn/Performance/What_is_performance)
  - : This article starts the module off with a good look at what performance actually is — this includes the tools, metrics, APIs, networks, and groups of people we need to consider when thinking about performance, and how we can make performance part of our web development workflow.
- [How do users perceive performance?](/zh-CN/docs/Learn/Performance/Perceived_performance)
  - : More important than how fast your website is in milliseconds, is how fast your users perceive your site to be. These perceptions are impacted by actual page load time, idling, responsiveness to user interaction, and the smoothness of scrolling and other animations. In this article, we discuss the various loading metrics, animation, and responsiveness metrics, along with best practices to improve user perception, if not the actual timings.
- [Web performance basics](/zh-CN/docs/Learn/Performance/Basics)
  - : In addition to the front end components of HTML, CSS, JavaScript, and media files, there are features that can make applications slower and features that can make applications subjectively and objectively faster. There are many APIs, developer tools, best practices, and bad practices relating to web performance. Here we'll introduce many of these features ad the basic level and provide links to deeper dives to improve performance for each topic.
- [HTML performance features](/zh-CN/docs/Learn/Performance/HTML)
  - : Some attributes and the source order of your mark-up can impact the performance or your website. By minimizing the number of DOM nodes, making sure the best order and attributes are used for including content such as styles, scripts, media, and third-party scripts, you can drastically improve the user experience. This article looks in detail at how HTML can be used to ensure maximum performance.
- [Multimedia: images and video](/zh-CN/docs/Learn/Performance/Multimedia)
  - : The lowest hanging fruit of web performance is often media optimization. Serving different media files based on each user agent's capability, size, and pixel density is possible. Additional tips like removing audio tracks from background videos can improve performance even further. In this article we discuss the impact video, audio, and image content has on performance, and the methods to ensure that impact is as minimal as possible.
- Responsive Images
  - : While optimizing images is vital to high-performance media-rich user experiences, ensuring that images are sized appropriately for the devices that download them is especially important. In this article, we'll discuss the role of native browser features such as the \<picture> element and the srcset attribute in efficient image delivery, and how you can use them with confidence.
- Alternative media formats
  - : When it comes to images and videos, there are more formats than you're likely aware of. Some of these formats can take your highly optimized media-rich pages even further by offering additional reductions in file size. In this guide we'll discuss some alternative media formats, how to use them responsibly so that non-supporting browsers don't get left out in the cold, and some advanced guidance on transcoding your existing assets to them.
- [CSS performance features](/zh-CN/docs/Learn/Performance/CSS)
  - : CSS may be a less important optimization focus for improved performance, but there are some CSS features that impact performance more than others. In this article we look at some CSS properties that impact performance and suggested ways of handling styles to ensure performance is not negatively impacted.
- [JavaScript performance best practices](/zh-CN/docs/Learn/Performance/JavaScript)
  - : JavaScript, when used properly, can allow for interactive and immersive web experiences — or it can significantly harm download time, render time, in-app performance, battery life, and user experience. This article outlines some JavaScript best practices that should be considered to ensure even complex content is as performant as possible.
- Web font performance
  - : An often overlooked aspect of performance landscape are web fonts. Web fonts are more prominent in web design than ever, yet many developers simply embed them from a third party service and think nothing of it. In this article, we'll covers methods for getting your font files as small as possible with efficient file formats and sub setting. From there, we'll go on to talk about how browsers text, and how you can use CSS and JavaScript features to ensure your fonts render quickly, and with minimal disruption to the user experience.
- [Mobile performance](/zh-CN/docs/Learn/Performance/Mobile)
  - : With web access on mobile devices being so popular, and all mobile platforms having fully-fledged web browsers, but possibly limited bandwidth, CPU and battery life, it is important to consider the performance of your web content on these platforms. This article looks at mobile-specific performance considerations.

## Advanced Modules

- Populating the page
  - : An HTTP request is made and, hopefully, a few seconds later, the site appears. Displaying the content involves executing JavaScript, possibly modifying the DOM, calculating styles, calculating layout, and finally rendering the content, which involves painting and compositing, and can involve GPU acceleration on a separate thread.
- [Understanding latency](/zh-CN/docs/Learn/Performance/Latency)
  - : Latency is the amount of time it takes between the browser making a request for a resource, and the browser receiving back the first byte of the resource requested. This article explains what latency is, how it impacts performance, and how to measure and improve latency.
- Understanding bandwidth
  - : Bandwidth is the amount of data (measured in Mbps or Kbps) that can be sent per second. This article explains the role of bandwidth in media-rich internet applications, how it can be measured, and how you can optimize applications to make the best use of available bandwidth.
- HTTP/2 and you
  - : The transport layer—that is, HTTP—is utterly essential to the functioning of the web, and it has only been relatively recently that it has seen a major update in the form of HTTP/2. Out of the box, HTTP/2 provides many performance improvements and advantages over its predecessor, but it also changes the landscape. In this article, you'll learn what HTTP/2 does for you, and how to fine-tune your application to make it do go even further.
- The role of TLS in performance
  - : TLS—or HTTPS as we tend to call it—is crucial in creating secure and safe user experiences. While hardware has reduced the negative impacts TLS has had on server performance, it's still represents a substantial slice of the time we spend waiting for browsers to connect to servers. This article explains the TLS handshake process, and offers some tips for reducing this time, such as OCSP stapling, HSTS preload headers, and the potential role of resource hints in masking TLS latency for third parties.
- [Profiling with the built-in profiler](/zh-CN/docs/Performance/Profiling_with_the_Built-in_Profiler)
  - : Learn how to profile app performance with Firefox's built-in profiler.
- Reading performance charts
  - : Developer tools provide information on performance, memory, and network requests. Knowing how to read [waterfall](/zh-CN/docs/Tools/Performance/Waterfall) charts, [call trees](/zh-CN/docs/Tools/Performance/Call_Tree), traces, [flame charts](/zh-CN/docs/Tools/Performance/Flame_Chart) , and [allocations](/zh-CN/docs/Tools/Performance/Allocations) in your browser developer tools will help you understand waterfall and flame charts in other performance tools.
- [CSS and JavaScript animation performance](/zh-CN/Apps/Build/Performance/CSS_JavaScript_animation_performance)
  - : Animations are critical for a pleasurable user experience. This article discusses the performance differences between CSS and JavaScript-based animations.
- Analyzing JavaScript bundles
  - : No doubt, JavaScript is a big part of modern web development. While you should always strive to reduce the amount of JavaScript you use in your applications, it can be difficult to know where to start. In this guide, we'll show you how to analyze your application's script bundles, so you know _what_ you're using, as well how to detect if there are duplicated scripts between bundles in your app.
- Lazy-loading JavaScript with dynamic imports
  - : When developers hear the term "lazy loading", they immediately think of below-the-fold imagery that loads when it scrolls into the viewport. But did you know you can lazy load JavaScript as well? In this guide we'll talk about the dynamic import() statement, which is a feature in modern browsers that loads a JavaScript module on demand. Of course, since this feature isn't available everywhere, we'll also show you how you can configure your tooling to use this feature in a widely compatible fashion.
- Controlling resource delivery with resource hints
  - : Browsers often know better than we do when it comes to resource prioritization and delivery—but they're far from clairvoyant. Native browser features enable us to hint to the browser when it should connect to another server, or preload a resource before the browser knows it ever needs it. When used judiciously, this can make fast experience seem even faster. In this article, we cover native browser features like rel=preconnect, rel=dns-prefetch, rel=prefetch, and rel=preload, and how to use them to your advantage.

## See Also

- [Mobile performance checklist](/zh-CN/docs/Web/Performance/Mobile_performance_checklist)
- [Optimizing Startup Performance](/zh-CN/docs/Web/Apps/Fundamentals/Performance/Optimizing_startup_performance)

{{LandingPageListSubpages}}
