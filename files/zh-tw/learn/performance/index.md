---
title: Web performance
slug: Learn/Performance
---

{{LearnSidebar}}

Building websites requires HTML, CSS, and JavaScript. To build websites and applications people want to use, which attract and retain users, you need to create a good user experience. Part of good user experience is ensuring the content is quick to load and responsive to user interaction. This is known as web performance, and in this module you'll learn all you need to build performant websites.

Web performance is the objective measurement and the perceived user experience of load time and runtime. Web performance is how long a site takes to load, become interactive and responsive, and how smooth the content is during user interactions. Is the scrolling smooth? Are buttons clickable? Are pop-ups quick to open up, and do they animate smoothly as they do so? Web performance includes both objective measurements like time to load, frames per second, and [time to interactive](/zh-TW/docs/Web/Performance/Time_to_interactive), and subjective experiences of how long it felt like it took the content to load.

Many features impact performance including latency, application size, the number of DOM nodes, the number of resource requests made, JavaScript performance, CPU load, and more. It is important to minimize the loading and response times, and add additional features to conceal latency by making the experience as available and interactive as possible, as soon as possible, while asynchronously loading in the longer tail parts of the experience.

Web performance involves measuring the actual and perceived speeds of an application, optimizing where possible, and then monitoring the performance, to ensure that what you've optimized stays optimized.

There are tools, APIs, and best practices that help us measure, improve performance, and monitor performance. We'll look at these too in the course of this module.

## Learning pathway

While knowing HTML, CSS, and JavaScript is needed for implementing many web performance improvement recommendations, knowing how to build applications is not a necessary pre-condition for understanding and measuring web performance.

Several of the introductory modules below do not require programming knowledge, though an understanding of HTML is needed for the HTML and performance module, an understanding of CSS is needed for the CSS and performance module, etc. We recommend that you work through our introductory modules first, starting with [what is web performance](/zh-TW/docs/Learn/Performance/What_is_web_performance) first. The introductory modules provide an overview of web performance. The first three should be considered required reading whether you are a developer or project manager. The tech topic focused modules are more appropriate for developers using these technologies.

The advanced modules delve deeper into topics overviewed in the introductory modules and provide overviews of performance APIs, testing and analysis tools, and performance bottleneck gotchas.

It is recommended that you work through [Getting started with the web](/zh-TW/docs/Learn/Getting_started_with_the_web) before proceeding with this topic. However, doing so isn't absolutely necessary.

## Introductory modules

This topic contains the following modules, in a suggested order for working through them. You should definitely start with the first one.

- [What is web performance?](/zh-TW/docs/Learn/Performance/What_is_web_performance)
  - : This article starts the module off with a good look at what performance actually is — this includes the tools, metrics, APIs, networks, and groups of people we need to consider when thinking about performance, and how we can make performance part of our web development workflow.
- [How do users perceive performance?](/zh-TW/docs/Learn/Performance/Perceived_performance)
  - : More important than how fast your website is in milliseconds, is how fast your users perceive your site to be. These perceptions are impacted by actual page load time, idling, responsiveness to user interaction, and the smoothness of scrolling and other animations. In this article, we discuss the various loading metrics, animation, and responsiveness metrics, along with best practices to improve user perception, if not the actual timings.
- [Web performance basics](/zh-TW/docs/Learn/Performance/Basics)
  - : In addition to the front end components of HTML, CSS, JavaScript, and media files, there are features that can make applications slower and features that can make applications subjectively and objectively faster. There are many APIs, developer tools, best practices, and bad practices relating to web performance. Here we'll introduce many of these features ad the basic level and provide links to deeper dives to improve performance for each topic.
- [HTML performance features](/zh-TW/docs/Learn/Performance/HTML_Performance_Features)
  - : Some attributes and the source order of your mark-up can impact the performance or your website. By minimizing the number of DOM nodes, making sure the best order and attributes are used for including content such as styles, scripts, media, and third-party scripts, you can drastically improve the user experience. This article looks in detail at how HTML can be used to ensure maximum performance.
- [Multimedia: images and video](/zh-TW/docs/Learn/Performance/Multimedia)
  - : The lowest hanging fruit of web performance is often media optimization. Serving different media files based on each user agent's capability, size, and pixel density is possible. Additional tips like removing audio tracks from background videos can improve performance even further. In this article we discuss the impact video, audio, and image content has on performance, and the methods to ensure that impact is as minimal as possible.
- Responsive Images
  - : While optimizing images is vital to high-performance media-rich user experiences, ensuring that images are sized appropriately for the devices that download them is especially important. In this article, we'll discuss the role of native browser features such as the \<picture> element and the srcset attribute in efficient image delivery, and how you can use them with confidence.
- Alternative media formats
  - : When it comes to images and videos, there are more formats than you're likely aware of. Some of these formats can take your highly optimized media-rich pages even further by offering additional reductions in file size. In this guide we'll discuss some alternative media formats, how to use them responsibly so that non-supporting browsers don't get left out in the cold, and some advanced guidance on transcoding your existing assets to them.
- [CSS performance features](/zh-TW/docs/Learn/Performance/CSS)
  - : CSS may be a less important optimization focus for improved performance, but there are some CSS features that impact performance more than others. In this article we look at some CSS properties that impact performance and suggested ways of handling styles to ensure performance is not negatively impacted.
- [JavaScript performance best practices](/zh-TW/docs/Learn/Performance/JavaScript)
  - : JavaScript, when used properly, can allow for interactive and immersive web experiences — or it can significantly harm download time, render time, in-app performance, battery life, and user experience. This article outlines some JavaScript best practices that should be considered to ensure even complex content is as performant as possible.
- Web font performance
  - : An often overlooked aspect of performance landscape are web fonts. Web fonts are more prominent in web design than ever, yet many developers simply embed them from a third party service and think nothing of it. In this article, we'll covers methods for getting your font files as small as possible with efficient file formats and sub setting. From there, we'll go on to talk about how browsers text, and how you can use CSS and JavaScript features to ensure your fonts render quickly, and with minimal disruption to the user experience.
- [Mobile performance](/zh-TW/docs/Learn/Performance/Mobile)
  - : With web access on mobile devices being so popular, and all mobile platforms having fully-fledged web browsers, but possibly limited bandwidth, CPU and battery life, it is important to consider the performance of your web content on these platforms. This article looks at mobile-specific performance considerations.

## In this section

{{LandingPageListSubpages}}

## Advanced Modules

- Populating the page
  - : An HTTP request is made and, hopefully, a few seconds later, the site appears. Displaying the content involves executing JavaScript, possibly modifying the DOM, calculating styles, calculating layout, and finally rendering the content, which involves painting and compositing, and can involve GPU acceleration on a separate thread.
- [Understanding latency](/zh-TW/docs/Learn/Performance/Understanding_latency)
  - : Latency is the amount of time it takes between the browser making a request for a resource, and the browser receiving back the first byte of the resource requested. This article explains what latency is, how it impacts performance, and how to measure and improve latency.
- Understanding bandwidth
  - : Bandwidth is the amount of data (measured in Mbps or Kbps) that can be sent per second. This article explains the role of bandwidth in media-rich internet applications, how it can be measured, and how you can optimize applications to make the best use of available bandwidth.
- HTTP/2 and you
  - : The transport layer—that is, HTTP—is utterly essential to the functioning of the web, and it has only been relatively recently that it has seen a major update in the form of HTTP/2. Out of the box, HTTP/2 provides many performance improvements and advantages over its predecessor, but it also changes the landscape. In this article, you'll learn what HTTP/2 does for you, and how to fine-tune your application to make it do go even further.
- The role of TLS in performance
  - : TLS—or HTTPS as we tend to call it—is crucial in creating secure and safe user experiences. While hardware has reduced the negative impacts TLS has had on server performance, it's still represents a substantial slice of the time we spend waiting for browsers to connect to servers. This article explains the TLS handshake process, and offers some tips for reducing this time, such as OCSP stapling, HSTS preload headers, and the potential role of resource hints in masking TLS latency for third parties.
- [Profiling with the built-in profiler](/zh-TW/docs/Performance/Profiling_with_the_Built-in_Profiler)
  - : Learn how to profile app performance with Firefox's built-in profiler.
- Reading performance charts
  - : Developer tools provide information on performance, memory, and network requests. Knowing how to read [waterfall](/zh-TW/docs/Tools/Performance/Waterfall) charts, [call trees](/zh-TW/docs/Tools/Performance/Call_Tree), traces, [flame charts](/zh-TW/docs/Tools/Performance/Flame_Chart) , and [allocations](/zh-TW/docs/Tools/Performance/Allocations) in your browser developer tools will help you understand waterfall and flame charts in other performance tools.
- [CSS and JavaScript animation performance](/zh-TW/Apps/Build/Performance/CSS_JavaScript_animation_performance)
  - : Animations are critical for a pleasurable user experience. This article discusses the performance differences between CSS and JavaScript-based animations.
- Analyzing JavaScript bundles
  - : No doubt, JavaScript is a big part of modern web development. While you should always strive to reduce the amount of JavaScript you use in your applications, it can be difficult to know where to start. In this guide, we'll show you how to analyze your application's script bundles, so you know _what_ you're using, as well how to detect if there are duplicated scripts between bundles in your app.
- Lazy-loading JavaScript with dynamic imports
  - : When developers hear the term "lazy loading", they immediately think of below-the-fold imagery that loads when it scrolls into the viewport. But did you know you can lazy load JavaScript as well? In this guide we'll talk about the dynamic import() statement, which is a feature in modern browsers that loads a JavaScript module on demand. Of course, since this feature isn't available everywhere, we'll also show you how you can configure your tooling to use this feature in a widely compatible fashion.
- Controlling resource delivery with resource hints
  - : Browsers often know better than we do when it comes to resource prioritization and delivery—but they're far from clairvoyant. Native browser features enable us to hint to the browser when it should connect to another server, or preload a resource before the browser knows it ever needs it. When used judiciously, this can make fast experience seem even faster. In this article, we cover native browser features like rel=preconnect, rel=dns-prefetch, rel=prefetch, and rel=preload, and how to use them to your advantage.

## See Also

- [Mobile performance checklist](/zh-TW/docs/Web/Performance/Mobile_performance_checklist)
- [Optimizing Startup Performance](/zh-TW/docs/Web/Apps/Fundamentals/Performance/Optimizing_startup_performance)

{{LandingPageListSubpages}}
