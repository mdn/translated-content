---
title: 機能検出の実装
slug: Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

機能検出は、あるブラウザーがあるコードのブロックに対応しているかどうかを調べ、対応しているか (またはしていないか) に応じて異なるコードを実行することで、ブラウザーが常に動作し、ブラウザーによってクラッシュやエラーが発生しないようにします。この記事では、独自の単純な機能検出の書き方、実装をスピードアップするためのライブラリの使い方、 `@supports` などの機能検出のためのネイティブ機能について詳しく説明します。

| 前提条件: | 主要な [HTML](/ja/docs/Learn/HTML)、[CSS](/ja/docs/Learn/CSS)、および [JavaScript](/ja/docs/Learn/JavaScript) 言語に精通していること。[クロスブラウザーテストの原則](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)の高水準のアイデア。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目標:     | 機能検出の概念について理解し、CSS と JavaScript で適切な解決方法を実装できるようにする。                                                                                                                                                                      |

## 機能検出の概念

機能検出の根底にあるアイデアは、プログラムを実行中のブラウザーがある特定の機能に対応しているかを確かめ、その結果に応じて異なるコードを実行するということで、対応ブラウザーと非対応ブラウザーのいずれでも許容できる挙動となるようにすることです。もしこの対策をしなければ、その特定の機能に対応していないブラウザーではあなたのサイトが正常に表示されなかったり、エラーを起こしてユーザーの体験を悪化させるでしょう。

それでは、私たちが [Handling common JavaScript problems](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Feature_detection) で触れた例を振り返ってみましょう。[Geolocation API](/ja/docs/Web/API/Geolocation/Using_geolocation) (ブラウザーを実行している端末の位置情報を返します)は、 [Navigator](/ja/docs/Web/API/Navigator) オブジェクトに含まれる `geolocation` プロパティを主なエントリーポイントとして持っています。そこで、以下のようにしてブラウザーが位置情報機能に対応しているかどうかを検出できます。

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // Google Maps API を用いて現在位置をマップ上に表示します
  });
} else {
  // 位置情報がなくてもマップを表示できるようにします
}
```

しかし、機能検出のためのコードを毎回自分で書くよりも、確立された既存の機能検出ライブラリを使うほうが良いでしょう。この用途では Modernizr が一般に利用されています。Modernizr には後ほど触れます。

次に進む前にもう 1 つお伝えさせてください。機能検出と**ブラウザー検出**(サイトにアクセスしているブラウザーの種類の検出)を混同しないでください。これはいかなる場合にも避けられるべき悪しき風習です。詳しくは [Using bad browser sniffing code](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_bad_browser_sniffing_code) を参照してください。

## Writing your own feature detection tests

In this section, we'll look at implementing your own feature detection tests, in both CSS and JavaScript.

### CSS

You can write tests for CSS features by testing for the existence of _[element.style.property](/ja/docs/Web/API/HTMLElement/style)_ (e.g. `paragraph.style.transform`) in JavaScript.

A classic example might be to test for [Flexbox](/ja/docs/Learn/CSS/CSS_layout/Flexbox) support in a browser; for browsers that support the newest Flexbox spec, we could use a flexible and robust flex layout. For browsers that don't, we could use a floated layout that works OK, although it is slightly more brittle and hacky, and not as cool-looking.

Let's implement something that demonstrates this, although we'll keep it simple for now.

1. Start by making local copies of our [`css-feature-detect.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/css-feature-detect.html), [`flex-layout.css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/flex-layout.css), [`float-layout-css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/float-layout.css), and [`basic-styling.css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/basic-styling.css) files. Save them in a new directory.
2. We will add the HTML5 Shiv to our example too so that the HTML5 semantic elements will style properly in older versions of IE. Download the latest version (see [Manual installation](https://github.com/aFarkas/html5shiv#manual-installation)), unzip the ZIP file, copy the `html5shiv-printshiv.min.js` and `html5shiv.min.js` files into your example directory, and link to one of the files by putting the following under your {{htmlelement("title")}} element:

   ```
   <script src="html5shiv.min.js"></script>
   ```

3. Have a look at your example CSS files — you'll see that `basic-styling.css` handles all the styling that we want to give to every browser, whereas the other two CSS files contain the CSS we want to selectively apply to browser depending on their support levels. You can look at the different effects these two files they have by manually changing the CSS file referred to by the second {{htmlelement("link")}} element, but let's instead implement some JavaScript to automatically swap them as needed.
4. First, remove the contents of the second `<link>` element's `href` attribute. We will fill this in dynamically later on.
5. Next, add a `<script></script>` element at the bottom of your body (just before the closing `</body>` tag).
6. Give it the following contents:

   ```js
   const conditional = document.querySelector(".conditional");
   const testElem = document.createElement("div");
   if (
     testElem.style.flex !== undefined &&
     testElem.style.flexFlow !== undefined
   ) {
     conditional.setAttribute("href", "flex-layout.css");
   } else {
     conditional.setAttribute("href", "float-layout.css");
   }
   ```

Here we are grabbing a reference to the second `<link>` element, and creating a `<div>` element as part of our test. In our conditional statement, we test that the {{cssxref("flex")}} and {{cssxref("flex-flow")}} properties exist in the browser. Note how the JavaScript representations of those properties that are stored inside the {{domxref("HTMLElement.style")}} object use lower camel case, not hyphens, to separate the words.

> **メモ:** If you have trouble getting this to work, you can compare it to our [css-feature-detect-finished.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/css-feature-detect-finished.html) code (see also the [live version](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/feature-detection/css-feature-detect-finished.html)).

When you save everything and try out your example, you should see the flexbox layout applied to the page if the browser supports modern flexbox, and the float layout if not.

> **メモ:** Often such an approach is overkill for a minor feature detection problem — you can often get away with using multiple vendor prefixes and fallback properties, as described in [CSS fallback behavior](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#CSS_fallback_behaviour) and [Handling CSS prefixes](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Handling_CSS_prefixes).

#### @supports

In recent times, CSS has had its own native feature detection mechanism introduced — the {{cssxref("@supports")}} at-rule. This works in a similar manner to [media queries](/ja/docs/Web/CSS/Media_Queries) (see also [Responsive design problems](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Responsive_design_problems)) — except that instead of selectively applying CSS depending on a media feature like a resolution, screen width or aspect ratio, it selectively applies CSS depending on whether a CSS feature is supported.

For example, we could rewrite our previous example to use `@supports` — see [`supports-feature-detect.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-feature-detect.html) and [`supports-styling.css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-styling.css). If you look at the latter, you'll see a couple of `@supports` blocks, for example:

```css
@supports (flex-flow: row) and (flex: 1) {
  main {
    display: flex;
  }

  main div {
    padding-right: 4%;
    flex: 1;
  }

  main div:last-child {
    padding-right: 0;
  }
}
```

This at-rule block applies the CSS rule within only if the current browser supports both the `flex-flow: row` and `flex: 1` declarations. For each condition to work, you need to include a complete declaration (not just a property name) and NOT include the semi-colon on the end.

`@supports` also has `OR` and `NOT` logic available — the other block applies the float layout if the flexbox properties are not available:

```css
@supports not (flex-flow: row) and (flex: 1) {
  /* rules in here */
}
```

This may look a lot more convenient than the previous example — we can do all of our feature detection in CSS, no JavaScript required, and we can handle all the logic in a single CSS file, cutting down on HTTP requests. the problem here is browser support — `@supports` is not supported at all in IE, and only supported in very recent versions of Safari/iOS WebKit (9+/9.2+), whereas the JavaScript version should work in much older browsers (probably back to IE8 or 9, although older versions of IE will have additional problems, such as not supporting {{domxref("Document.querySelector")}}, and having a messed up box model).

### JavaScript

We already saw an example of a JavaScript feature detection test earlier on. Generally, such tests are done via one of the following common patterns:

| Feature detection type              | Explanation                                                                                                                                                                                                       | Example                                                                                                              |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| _If member in object_               | Check whether a certain method or property (typically an entry point into using the API or other feature you are detecting for) exists in its parent Object.                                                      | `if("geolocation" in navigator) { ... }`                                                                             |
| _Property on element_               | Create an element in memory using {{domxref("Document.createElement()")}} and then check if a property exists on it. The example shown is a way of detecting [HTML5 Canvas](/ja/docs/Web/API/Canvas_API) support. | `function supports_canvas() { return !!document.createElement('canvas').getContext; } if(supports_canvas()) { ... }` |
| _Method on element return value_    | Create an element in memory using {{domxref("Document.createElement()")}} and then check if a method exists on it. If it does, check what value it returns.                                                       | See [Dive Into HTML5 Video Formats detection](http://diveinto.html5doctor.com/detect.html#video-formats) test.       |
| _Property on element retains value_ | Create an element in memory using {{domxref("Document.createElement()")}}, set a property to a certain value, then check to see if the value is retained.                                                         | See [Dive into HTML5 `<input>` types detection](http://diveinto.html5doctor.com/detect.html#input-types) test.       |

> **メモ:** The double `NOT` in the above example (`!!`) is a way to force a return value to become a "proper" boolean value, rather than a {{glossary("Truthy")}}/{{glossary("Falsy")}} value that may skew the results.

The [Dive into HTML5 Detecting HTML5 Features](http://diveinto.html5doctor.com/detect.html) page has a lot more useful feature detection tests besides the ones listed above, and you can generally find a feature detection test for most things by searching for "detect support for YOUR-FEATURE-HERE" in your favorite search engine. Bear in mind though that some features, however, are known to be undetectable — see Modernizr's list of [Undetectables](https://github.com/Modernizr/Modernizr/wiki/Undetectables).

#### matchMedia

We also wanted to mention the {{domxref("Window.matchMedia")}} JavaScript feature at this point too. This is a property that allows you to run media query tests inside JavaScript. It looks like this:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

As an example, our [Snapshot](https://github.com/chrisdavidmills/snapshot) demo makes use of it to selectively apply the Brick JavaScript library and use it to handle the UI layout, but only for the small screen layout (480px wide or less). We first use the `media` attribute to only apply the Brick CSS to the page if the page width is 480px or less:

```css
<link href="dist/brick.css" type="text/css" rel="stylesheet" media="all and (max-width: 480px)">
```

We then use `matchMedia()` in the JavaScript several times, to only run Brick navigation functions if we are on the small screen layout (in wider screen layouts, everything can be seen at once, so we don't need to navigate between different views).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Using Modernizr to implement feature detection

It is possible to implement your own feature detection tests using techniques like the ones detailed above. You might as well use a dedicated feature detection library however, as it makes things much easier. The mother of all feature detection libraries is [Modernizr](https://modernizr.com/), and it can detect just about everything you'll ever need. Let's look at how to use it now.

When you are experimenting with Modernizr you might as well use the development build, which includes every possible feature detection test. Download this now by:

1. Clicking on the [Development build](https://modernizr.com/download?do_not_use_in_production) link.
2. Clicking the big pink _Build_ button on the page that comes up.
3. Clicking the top _Download_ link in the dialog box that appears.

Save it somewhere sensible, like the directory you've been creating your other examples for in this article.

When you are using Modernizr in production, you can go to the [Download page](https://modernizr.com/download) you've already visited and click the plus buttons for only the features you need feature detects for. Then when you click the _Build_ button, you'll download a custom build containing only those feature detects, making for a much smaller file size.

### CSS

Let's have a look at how Modernizr works in terms of selectively applying CSS.

1. First, make a copy of [`supports-feature-detect.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-feature-detect.html) and [`supports-styling.css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-styling.css). Save them as `modernizr-css.html` and `modernizr-css.css`.
2. Update your {{htmlelement("link")}} element in your HTML so it points to the correct CSS file (you should also update your {{htmlelement("title")}} element to something more suitable!):

   ```html
   <link href="modernizr-css.css" rel="stylesheet" />
   ```

3. Above this `<link>` element, add a {{htmlelement("script")}} element to apply the Modernizr library to the page, as shown below. This needs to be applied to the page before any CSS (or JavaScript) that might make use of it.

   ```html
   <script src="modernizr-custom.js"></script>
   ```

4. Now edit your opening `<html>` tag, so that it looks like this:

   ```html
   <html class="no-js"></html>
   ```

At this point, try loading your page, and you'll get an idea of how Modernizr works for CSS features. If you look at the DOM inspector of your browser's developer tools, you'll see that Modernizr has updated your `<html>` `class` value like so:

```
<html class="js no-htmlimports sizes flash transferables applicationcache blobconstructor
blob-constructor cookies cors ...AND LOADS MORE VALUES!>
```

It now contains a large number of classes that indicate the support status of different technology features. As an example, if the browser didn't support flexbox at all, `<html>` would be given a class name of `no-flexbox`. If it did support modern flexbox, it would get a class name of `flexbox`. If you search through the class list, you'll also see others relating to flexbox, like:

- `flexboxlegacy` for the old flexbox spec (2009).
- `flexboxtweener` for 2011 in between syntax supported by IE10.
- `flexwrap` for the {{cssxref("flex-wrap")}} property, which isn't present in some implementations.

> **メモ:** You can find a list of what all the class names mean — see [Features detected by Modernizr](https://modernizr.com/docs#features).

Moving on, let's update our CSS to use Modernizr rather than `@supports`. Go into `modernizr-css.css`, and replace the two `@supports` blocks with the following:

```css
/* Properties for browsers with modern flexbox */

.flexbox main {
  display: flex;
}

.flexbox main div {
  padding-right: 4%;
  flex: 1;
}

.flexbox main div:last-child {
  padding-right: 0;
}

/* Fallbacks for browsers that don't support modern flexbox */

.no-flexbox main div {
  width: 22%;
  float: left;
  padding-right: 4%;
}

.no-flexbox main div:last-child {
  padding-right: 0;
}

.no-flexbox footer {
  clear: left;
}
```

So how does this work? Because all those class names have been put on the `<html>` element, you can target browsers that do or don't support a feature using specific descendant selectors. So here we're applying the top set of rules only to browsers that do support flexbox, and the bottom set of rules only to browsers that don't (`no-flexbox`).

> **メモ:** Bear in mind that all of Modernizr's HTML and JavaScript feature tests are also reported in these class names, so you can quite happily apply CSS selectively based on whether the browser supports HTML or JavaScript features, if needed.

> **メモ:** If you have trouble getting this to work, check your code against our [`modernizr-css.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-css.html) and [`modernizr-css.css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-css.css) files (see this running live also).

### JavaScript

Modernizr is also equally well-prepared for implementing JavaScript feature detects too. It does this by making the global `Modernizr` object available to the page it is applied to, which contains results of the feature detects as `true`/`false` properties.

For example, load up our [`modernizr-css.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-css.html) example in your browser, then try going to your JavaScript console and typing in `Modernizr.` followed by some of those class names (they are the same here too). For example:

```
Modernizr.flexbox
Modernizr.websqldatabase
Modernizr.xhr2
Modernizr.fetch
```

The console will return `true`/`false` values to indicate whether your browser supports those features or not.

Let's look at an example to show how you'd use those properties.

1. First of all, make a local copy of the [`modernizr-js.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-js.html) example file.
2. Attach the Modernizr library to the HTML using a `<script>` element, as we have done in previous demos. Put it above the existing `<script>` element, which is attaching the Google Maps API to the page.
3. Next, fill in the `YOUR-API-KEY` placeholder text in the second `<script>` element (as it is now) with a valid Google Maps API key. To get a key, sign in to a Google account, go to the [Get a Key/Authentication](https://developers.google.com/maps/documentation/javascript/get-api-key) page, then click the blue _Get a Key_ button and follow the instructions.
4. Finally, add another `<script>` element at the bottom of the HTML body (just before the `</body>` tag), and put the following script inside the tags:

   ```js
   if (Modernizr.geolocation) {
     navigator.geolocation.getCurrentPosition(function (position) {
       let latlng = new google.maps.LatLng(
         position.coords.latitude,
         position.coords.longitude,
       );
       let myOptions = {
         zoom: 8,
         center: latlng,
         mapTypeId: google.maps.MapTypeId.TERRAIN,
         disableDefaultUI: true,
       };
       let map = new google.maps.Map(
         document.getElementById("map_canvas"),
         myOptions,
       );
     });
   } else {
     const para = document.createElement("p");
     para.textContent = "Argh, no geolocation!";
     document.body.appendChild(para);
   }
   ```

Try your example out! Here we use the `Modernizr.geolocation` test to check whether geolocation is supported by the current browser. If it is, we run some code that gets your device's current location, and plots it on a Google Map.

## Summary

This article covered feature detection in a reasonable amount of detail, going through the main concepts and showing you how to both implement your own feature detection tests and use the Modernizr library to implement tests more easily.

Next up, we'll start looking at automated testing.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
