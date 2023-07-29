---
title: ウェブパフォーマンスの基礎
slug: Learn/Performance/Web_Performance_Basics
---

あなたのウェブサイトが可能な限りのパフォーマンスを発揮すべき[理由](https://web.dev/why-speed-matters/)はたくさんあります。
以下に、各トピックの詳細情報を提供するためのリンク付きのベストプラクティス、ツール、API の簡単なレビューを示します。

## Best practices

- Start with learning the [critical rendering path](/ja/docs/Web/Performance/Critical_rendering_path) of the browser. Knowing this will help you understand how to improve the performance of the site.
- Using [resource hints](/ja/docs/Web/Performance/Controlling_resource_delivery_with_resource_hints) such as `rel=preconnect, rel=dns-prefetch, rel=prefetch, and rel=preload`
- Keep the size of Javascript to a [minimum](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Only use as much Javascript as needed for the current page.
- [CSS](/ja/docs/Learn/Performance/CSS_performance) performance factors
- Use [HTTP/2](/ja/docs/Learn/Performance/HTTP2) on your server (or CDN).
- Use a CDN for resources which can reduce load times significantly.
- Compress your resources using [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli), and [Zopfli](https://github.com/google/zopfli).
- Image optimization (use CSS animation, or SVG if possible).
- Lazy loading parts of your application outside the viewport. If you do, have a backup plan for SEO (e.g render full page for bot traffic); for example, by using the [`loading`](/ja/docs/Web/HTML/Element/img#loading) attribute on the {{HTMLElement("img")}} element
- It is also crucial to realize what is really important to your users. It might not be absolute timing, but [user perception](/ja/docs/Learn/Performance/perceived_performance).

## Quick Wins

### CSS

Web performance is all about user experience and perceived performance. As we learned in the [critical rendering path](/ja/docs/Web/Performance/Critical_rendering_path) document, linking CSS with a tradional link tag with rel="stylesheet" is synchronous and blocks rendering. Optimize the rendering of your page by removing blocking CSS.

To load CSS asynchronously one can simpy set the media type to print and then change to all once loaded. The following snippet includes an onload attribute, requiring Javascript, so it is important to include a noscript tag with a traditional fallback.

```html
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

The downside with this approach is the flash of unstyled text (FOUT.) The simplist way to address this is by inlining CSS that is required for any content that is rendered above the fold, or what you see in the browser viewport before scrolling. These styles will improve perceived performance as the CSS does not require a file request.

```html
<style type="text/css">
  // Insert your CSS here
</style>
```

### Javascript

Avoid Javascript blocking by using the [async](/ja/docs/Web/HTML/Element/script) or [defer](/ja/docs/Web/HTML/Element/script) attributes, or link javascript assets after the page's DOM elements. Javascript only block rendering for elements that appear after the script tag in the DOM tree.

### Web Fonts

EOT and TTF formats are not compressed by default. Apply compression such as GZIP or Brotli for these file types. Use WOFF and WOFF2. These formats have compression built in.

Within @font-face use font-display: swap. By using font display swap the browser will not block rendering and will use the backup system fonts that are defined. Optimiize [font weight](/ja/docs/Web/CSS/font-weight) to match the web font as closely as possible.

#### Icon web fonts

If possible avoid icon web fonts and use compressed SVGs. To further optimize inline your SVG data within HTML markup to avoid HTTP requests.

## Tools

- Learn to use the [Firefox Dev Tools](/ja/docs/Tools/Performance) to profile your site.
- [Pagespeed Insights](https://developers.google.com/speed/docs/insights/v5/about) can analyze your page and give some general hints to improve performance.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) can give you a detailed breakdown of many aspects of your site including performance, SEO and accessibility.
- Test your page's speed using [Webpagetest.org](http://webpagetest.org/), where you can use different real device types and locations.
- Try the [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report) which quantifies real user metrics.
- Define a [performance budget.](/ja/docs/Web/Performance/Performance_budget)

### APIs

- Gather user metrics using <https://github.com/akamai/boomerang>
- Or directly gather with [window.performance.timing](/ja/docs/Web/API/Window/performance)

### Things not to do (bad practices)

- Download everything
- Use uncompressed media files

## See also

- <https://github.com/filamentgroup/loadCSS>
