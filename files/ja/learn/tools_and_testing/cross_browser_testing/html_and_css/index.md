---
title: 一般的な HTML と CSS の問題への対処
slug: Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS
tags:
  - CSS
  - CodingScripting
  - HTML
  - linting
  - クロスブラウザ
  - セレクタ
  - テスト
  - 初心者
  - 学習
  - 記事
translation_of: Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}

ここでは、HTML と CSS のコードで発生する可能性のある一般的なクロスブラウザの問題、および問題の発生を防ぐため、または発生する問題を修正するために使用できるツールについて具体的に説明します。これには、コードのリンティング、CSS プレフィックスの処理、問題を追跡するためのブラウザの開発者ツールの使用、ブラウザにサポートを追加するための polyfill の使用、レスポンシブデザイン問題への取り組みなどが含まれます。

| 前提条件: | 主要な [HTML](/ja/docs/Learn/HTML)、[CSS](/ja/docs/Learn/CSS)、および [JavaScript](/ja/docs/Learn/JavaScript) 言語に精通していること。[クロスブラウザテストの原則](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)の高水準のアイデア。 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目標:     | 一般的な HTML と CSS のクロスブラウザの問題を診断し、それらを修正するための適切なツールとテクニックを使うことができるようにする。                                                                                                                           |

## HTML と CSS の問題

一部の HTML と CSS の問題は、両方の言語がかなり単純で、コードがうまく作成され、効率的であり、ページ上に「機能の目的」を意味的に記述していることを確認するという意味で開発者がそれらについて真剣に考えていないという事実にあります。最悪の場合、JavaScript を使用して Web ページのコンテンツとスタイル全体を生成するため、ページにアクセスできなくなり、パフォーマンスが低下します (DOM 要素の生成にはコストがかかります)。他のケースでは、初期の機能がブラウザ間で一貫してサポートされていないため、一部の機能やスタイルが一部のユーザには機能しないことがあります。
レスポンシブデザインの問題も一般的です。デスクトップブラウザで見栄えの良いサイトはモバイル端末だとひどい経験を提供するかもしれません、内容が読むには小さすぎるか、高精細なアニメーションのせいで遅いでしょう。

HTML/CSS に起因するクロスブラウザエラーを減らす方法を見てみましょう。

## まず最初に：一般的な問題を解決する

[このシリーズの最初の記事](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction#Testingdiscovery)では、まずクロスブラウザの問題に集中する前に、デスクトップ/モバイルの最新ブラウザでいくつかテストしてコードが正常に機能するか確認することをお勧めします。

[HTML のデバッグ](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)および [CSS のデバッグ](/ja/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS)の記事では、HTML/CSS のデバッグに関する基本的なガイダンスをいくつか提供しました。基本に慣れていない場合は、先に進む前に必ずこれらの記事をよく読んでください。

基本的には、HTML と CSS のコードが整形式で、構文エラーがないかどうかをチェックすることです。

> **Note:** **メモ**: CSS と HTML に関する一般的な問題の 1 つは、異なる CSS ルールが互いに矛盾が生じるときに発生します。 サードパーティのコードを使用している場合、これは特に問題になる可能性があります。たとえば、CSS フレームワークを使用して、それが使用しているクラス名の 1 つが別の目的ですでに使用されているものと衝突しているとします。 または、ある種のサードパーティ API (たとえば広告バナーの生成) によって生成された HTML に、すでに別の目的で使用されているクラス名または ID が含まれていることもあります。これが起こらないようにするには、最初に使用しているツールを調べて、それらを中心にコードを設計する必要があります。また、"名前空間" CSS も価値があります。ウィジェットがある場合は、それが明確なクラスを持っていることを確認してから、このクラスでウィジェット内の要素を選択するセレクタを起動します。そうすれば競合は起こりにくくなります。例えば、 `.audio-player ul a` です。

### 検証

HTML の検証では、すべてのタグが適切に閉じられてネストされていること、DOCTYPE を使用していること、およびタグを正しい目的で使用していることを確認します。良い戦略はコードを定期的に検証することです。これを可能にするサービスの 1 つに、W3C [マークアップ検証サービス](https://validator.w3.org/)があります。これを使用すると、コードを指定してエラーのリストを返すことができます。

![The HTML validator homepage](https://mdn.mozillademos.org/files/12441/validator.png)

CSS にも同様の話があります — プロパティ名が正しくつづられていること、プロパティ値が正しくつづられていて、それらが使われているプロパティに対して有効であること、中括弧を見逃していないということです。この目的のために、W3C には [CSS Validator](http://jigsaw.w3.org/css-validator/) も用意されています。

### Linters

取りうるもう一つの良い選択肢は、エラーを指摘するだけでなく、CSS の悪いプラクティスについての警告、および他の点にもフラグを立てることができる、いわゆる Linter アプリケーションです。Linter は一般的に、エラー/警告の報告においてより厳格またはより緩やかになるようにカスタマイズできます。

オンラインリンターアプリケーションは多数ありますが、そのうち最良のものはおそらく [Dirty Markup](https://www.dirtymarkup.com/) (HTML、CSS、JavaScript)、および [CSS Lint](http://csslint.net/) (CSS のみ) です。これらはコードをウィンドウに貼り付けることができ、十字でどんなエラーにでもフラグを立てるでしょう、そしてそれは問題が何であるかを知らせるエラーメッセージを得るためにそれから隠されることができます。Dirty Markup では、_Clean_ ボタンを使用してマークアップを修正することもできます。

![](https://mdn.mozillademos.org/files/14113/dirty-markup.png)

However, it is not very convenient to have to copy and paste your code over to a web page to check its validity several times. What you really want is a linter that will fit into your standard workflow with the minimum of hassle.

Many code editors have linter plugins. Github's [Atom](https://atom.io/) code editor for example has a rich plugin ecosystem available, with many linting options. To show you an example of how such plugins generally work:

1.  Install Atom (if you haven't got an up-to-date version already installed) — download it from the Atom page linked above.
2.  Go to Atom's _Preferences..._ dialog (e.g. by Choosing _Atom > Preferences..._ on Mac, or _File > Preferences..._ on Windows/Linux) and choose the _Install_ option in the left hand menu.
3.  In the _Search packages_ text field, type "lint" and press Enter/Return to search for linting-related packages.
4.  You should see a package called **lint** at the top of the list. Install this first (using the _Install_ button), as other linters rely on it to work. After that, install the **linter-csslint** plugin for linting CSS, and the **linter-tidy** plugin for linting HTML.
5.  After the packages have finished installing, try loading up an HTML file and a CSS file: you'll see any issues highlighted with green (for warnings) and red (for errors) circles next to the line numbers, and a separate panel at the bottom provides line numbers, error messages, and sometimes suggested values or other fixes.

![](https://mdn.mozillademos.org/files/14109/atom-htmltidy.png)![](https://mdn.mozillademos.org/files/14107/atom-csslint.png)

Other popular editors have similar linting packages available. For example, see:

- [SublimeLinter](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/www.sublimelinter.com/) for Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)

### Browser developer tools

The developer tools built into most browsers also feature useful tools for hunting down errors, mainly for CSS.

> **Note:** **メモ**: ブラウザが不正な形式のマークアップを自動的に修正しようとするため、HTML エラーは開発ツールではそれほど簡単には表示されない傾向があります。W3C バリデータは HTML エラーを取得するための最良の方法です — 上の [Validation](#validation) を見てください。

As an example, in Firefox the CSS inspector will show CSS declarations that aren't applied crossed out, with a warning triangle. Hovering the warning triangle will provide a descriptive error message:

![](https://mdn.mozillademos.org/files/14111/css-message-devtools.png)

Other browser devtools have similar features.

## Common cross browser problems

Now let's move on to look at some of the most common cross browser HTML and CSS problems. The main areas we'll look at are lack of support for modern features, and layout issues.

### Older browsers not supporting modern features

This is a common problem, especially when you need to support old browsers (such as old IE versions) or you are using features that are implemented using CSS prefixes. In general, most core HTML and CSS functionality (such as basic HTML elements, CSS basic colors and text styling) works across most browsers you'll want to support; more problems are uncovered when you start wanting to use newer features such as [Flexbox](/ja/docs/Learn/CSS/CSS_layout/Flexbox), or [HTML5 video/audio](/ja/docs/Web/Apps/Fundamentals/Audio_and_video_delivery), or even more nascent, [CSS Grids](/ja/docs/Learn/CSS/CSS_layout/Grids#Native_CSS_Grids_with_Grid_Layout) or [-webkit-background-clip: text](/ja/docs/Learn/CSS/Styling_boxes/Advanced_box_effects#-webkit-background-clip_text).

Once you've identified a list of potential problem technologies you will be using, it is a good idea to research what browsers they are supported in, and what related techniques are useful. See [Finding help](#finding_help) below.

#### HTML fallback behaviour

Some problems can be solved by just taking advantage of the natural way in which HTML/CSS work.

Unrecognised HTML elements are treated by the browser as anonymous inline elements (effectively inline elements with no semantic value, similar to {{htmlelement("span")}} elements). You can still refer to them by their names, and style them with CSS, for example — you just need to make sure they are behaving as you want them to, for example setting `display: block;` on all of the new semantic elements (such as {{htmlelement("article")}}, {{htmlelement("aside")}}, etc.), but only in old versions of IE that don't recognise them (so, IE 8 and lower). This way new browsers can just use the code as normal, but older IE versions will be able to style these elements too.

> **Note:** See [IE conditional comments](#ie_conditional_comments) for the best way to do this.

More complex elements like HTML [`<video>`](/ja/docs/Web/HTML/Element/video), [`<audio>`](/ja/docs/Web/HTML/Element/audio), and [`<canvas>`](/ja/docs/Web/HTML/Element/canvas) (and other features besides) have natural mechanisms for fallbacks to be added, which work on the same principle as described above. You can add fallback content in between the opening and closing tags, and non-supporting browsers will effectively ignore the outer element and run the nested content.

For example:

```html
<video id="video" controls preload="metadata" poster="img/poster.jpg">
  <source src="video/tears-of-steel-battle-clip-medium.mp4" type="video/mp4">
  <source src="video/tears-of-steel-battle-clip-medium.webm" type="video/webm">
  <source src="video/tears-of-steel-battle-clip-medium.ogg" type="video/ogg">
  <!-- Flash fallback -->
  <object type="application/x-shockwave-flash" data="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" width="1024" height="576">
     <param name="movie" value="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />
     <param name="allowfullscreen" value="true" />
     <param name="wmode" value="transparent" />
     <param name="flashvars" value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />
      <img alt="Tears of Steel poster image" src="img/poster.jpg" width="1024" height="428" title="No video playback possible, please download the video from the link below" />
  </object>
  <!-- Offer download -->
  <a href="video/tears-of-steel-battle-clip-medium.mp4">Download MP4</a>
</video>
```

This example (taken from [Creating a cross-browser video player](/ja/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player)) includes not only a Flash video fallback for older IE versions, but also a simple link allowing you to download the video if even the Flash player doesn't work, so at least the user can still access the video.

> **Note:** 3rd party libraries like [Video.js](http://videojs.com/) and [JW Player](https://www.jwplayer.com/) use such fallback mechanisms to provide cross-browser support.

HTML5 form elements also exhibit fallback qualities — HTML5 introduced some special [`<input>`](/ja/docs/Web/HTML/Element/input) types for inputting specific information into forms, such as times, dates, colors, numbers, etc. These are very useful, particularly on mobile platforms, where providing a pain-free way of entering data is very important for the user experience. Supporting platforms provide special UI widgets when these input types are used, such as a calendar widget for entering dates.

The following example shows date and time inputs:

```html
<form>
  <div>
    <label for="date">Enter a date:</label>
    <input id="date" type="date">
  </div>
  <div>
    <label for="time">Enter a time:</label>
    <input id="time" type="time">
  </div>
</form>
```

The output of this code is as follows:

```css hidden
label {
        float: left;
        width: 30%;
        text-align: right;
      }

      input {
        float: right;
        width: 65%;
      }

      label, input {
        margin-bottom: 20px;
      }

      div {
        clear: both;
        margin: 10px;
      }

      body {
        width: 400px;
        margin: 0 auto;
      }
```

```html
<form>
      <div>
        <label for="date">Enter a date:</label>
        <input id="date" type="date">
      </div>
      <div>
        <label for="time">Enter a time:</label>
        <input id="time" type="time">
      </div>
    </form>
```

{{ EmbedLiveSample('Hidden_example', '100%', 150) }}

> **Note:** You can also see this running live as [forms-test.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) on GitHub (see the [source code](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/html-css/forms-test.html) also).

If you view the example on a supporting browser like desktop/Android Chrome or iOS Safari, you'll see the special widgets/features in action as you try to input data. On a non-supporting platform such as Firefox or Internet Explorer, the inputs will just fallback to normal text inputs, so at least the user can still enter some information.

Note: Of course, this may not be a great solution for your project's needs — the difference in visual presentation is not great, plus it is harder to guarantee the data will be entered in the format you want it in. For cross browser forms, It is probably better to rely on simple form elements, or selectively using advanced form elements only in supporting browsers, or using a library that provides decent cross browser form widgets, such as [jQuery UI](http://jqueryui.com/) or [Bootstrap datepicker](https://bootstrap-datepicker.readthedocs.io/en/latest/).

#### CSS fallback behaviour

CSS is arguably better at fallbacks than HTML. If a browser encounters a declaration or rule it doesn't understand, it just skips it completely without applying it or throwing an error. This might be frustrating for you and your users if such a mistake slips through to production code, but at least it means the whole site doesn't come crashing down because of one error, and if used cleverly you can use it to your advantage.

Let's look at an example — a simple box styled with CSS, which has some styling provided by various CSS3 features:

![](https://mdn.mozillademos.org/files/14141/blingy-button.png)

> **Note:** You can also see this example running live on GitHub as [button-with-fallback.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) (also see the [source code](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

The button has a number of declarations that style, but the two we are most interested in are as follows:

```css
button {
  ...

  background-color: #ff0000;
  background-color: rgba(255,0,0,1);
  box-shadow: inset 1px 1px 3px rgba(255,255,255,0.4),
              inset -1px -1px 3px rgba(0,0,0,0.4);
}

button:hover {
  background-color: rgba(255,0,0,0.5);
}

button:active {
  box-shadow: inset 1px 1px 3px rgba(0,0,0,0.4),
              inset -1px -1px 3px rgba(255,255,255,0.4);
}
```

Here we are providing an [RGBA](</ja/docs/Web/CSS/color_value#rgba()>) {{cssxref("background-color")}} that changes opacity on hover to give the user a hint that the button is interactive, and some semi-transparent inset {{cssxref("box-shadow")}} shades to give the button a bit of texture and depth. The trouble is that RGBA colors and box shadows don't work in IE versions older than 9 — in older versions the background just wouldn't show up at all so the text would be unreadable, no good at all!

![](https://mdn.mozillademos.org/files/14135/unreadable-button.png)

To sort this out, we have added a second `background-color` declaration, which just specifies a hex color — this is supported way back in really old browsers, and acts as a fallback if the modern shiny features don't work. What happens is a browser visiting this page first applies the first `background-color` value; when it gets to the second `background-color` declaration, it will override the initial value with this value if it supports RGBA colors. If not, it will just ignore the entire declaration and move on.

> **Note:** The same is true for other CSS features like [media queries](/ja/docs/Web/CSS/Media_Queries/Using_media_queries), [`@font-face`](/ja/docs/Web/CSS/@font-face) and [`@supports`](/ja/docs/Web/CSS/@supports) blocks — if they are not supported, the browser just ignores them.

#### IE conditional comments

IE conditional comments are a modified proprietary HTML comment syntax, which can be used to selectively apply HTML code to different versions of IE. This has proven to be a very effective mechanism for fixing cross browser bugs. The syntax looks like this:

```html
<!--[if lte IE 8]>
  <script src="ie-fix.js"></script>
  <link href="ie-fix.css" rel="stylesheet" type="text/css">
<![endif]-->
```

This block will apply the IE-specific CSS and JavaScript only if the browser viewing the page is IE 8 or older. `lte` means "less than or equal to", but you can also use lt, gt, gte, `!` for NOT, and other logical syntax.

> **Note:** Sitepoint's <span class="l-d-i l-pa2 t-bg-white"><a href="https://www.sitepoint.com/web-foundations/internet-explorer-conditional-comments/">Internet Explorer Conditional Comments</a> provides a useful beginner's tutorial/reference that explains the conditional comment syntax in detail.</span>

As you can see, this is especially useful for applying code fixes to old versions of IE. The use case we mentioned earlier (making modern semantic elements styleable in old versions of IE) can be achieved easily using conditional comments, for example you could put something like this in your IE stylesheet:

```css
aside, main, article, section, nav, figure, figcaption {
  display: block;
}
```

It isn't that simple, however — you also need to create a copy of each element you want to style in the DOM via JavaScript, for them to be styleable; this is a strange quirk, and we won't bore you with the details here. For example:

```js
var asideElem = document.createElement('aside');
 ...
```

This sounds like a pain to deal with, but fortunately there is a {{glossary("polyfill")}} available that does the necessary fixes for you, and more besides — see [HTML5Shiv](https://github.com/aFarkas/html5shiv) for all the details (see [manual installation](https://github.com/aFarkas/html5shiv#installation) for the simplest usage).

#### Selector support

Of course, no CSS features will apply at all if you don't use the right [selectors](/ja/docs/Learn/CSS/Introduction_to_CSS/Selectors) to select the element you want to style! If you just write a selector incorrectly so the styling isn't as expected in any browser, you'll just need to troubleshoot and work out what is wrong with your selector. We find that it is helpful to inspect the element you are trying to style using your browser's dev tools, then look at the DOM tree breadcrumb trail that DOM inspectors tend to provide to see if your selector makes sense compared to it.

For example, in the Firefox dev tools, you get this kind of output at the bottom of the DOM inspector:

![](https://mdn.mozillademos.org/files/14139/dom-breadcrumb-trail.png)

If for example you were trying to use this selector, you'd be able to see that it wouldn't select the input element as desired:

```css
form > #date
```

(The `date` form input isn't directly inside the `<form>`; you'd be better off using a general descendant selector instead of a child selector).

However, another issue that appears in versions of IE older than 9 is that none of the newer selectors (mainly pseudo-classes and pseudo-elements like [`:nth-of-type`](/ja/docs/Web/CSS/:nth-of-type), [`:not`](/ja/docs/Web/CSS/:not), [`::selection`](/ja/docs/Web/CSS/::selection), etc.) work. If you want to use these in your CSS and you need to support older IE versions, a good move is to use Keith Clark's [Selectivizr](http://selectivizr.com/) library — this is a small JavaScript library that works on top of an existing JavaScript library like [jQuery](http://jquery.com/) or [MooTools](http://mootools.net/).

1.  To try this example, make a local copy of [selectivizr-example-start.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/html-css/selectivizr-example-start.html). If you look at this running live, you'll see that it contains two paragraphs, one of which is styled. We've selected the paragraph with `p:first-child`, which won't work in old versions of IE.
2.  Now download [MooTools](http://mootools.net/) and [Selectivizr](http://selectivizr.com/), and save them in the same directory as your sample HTML.
3.  Put the following code into the head of your HTML document, just before the opening `<style>` tag:

    ```html
    <script type="text/javascript" src="MooTools-Core-1.6.0.js"></script>
        <!--[if (gte IE 6)&(lte IE 8)]>
          <script type="text/javascript" src="selectivizr-min.js"></script>
        <![endif]-->
    ```

<!---->

1.

If you try running this in an old version of IE, it should work fine.

![](https://mdn.mozillademos.org/files/14137/new-selector-ie7.png)

#### Handling CSS prefixes

Another set of problems comes with CSS prefixes — these are a mechanism orignally used to allow browser vendors to implement their own version of a CSS (or JavaScript) feature while the technology is in an experimental state, so they can play with it and get it right without conflicting with other browser's implementations, or the final unprefixed implementations. So for example:

- Mozilla uses `-moz-`
- Chrome/Opera/Safari use `-webkit-`
- Microsoft uses `-ms-`

Here's some examples:

```css
-webkit-transform: rotate(90deg);

background-image: -moz-linear-gradient(left,green,yellow);
background-image: -webkit-gradient(linear,left center,right center,from(green),to(yellow));
background-image: linear-gradient(to right,green,yellow);
```

The first line shows a {{cssxref("transform")}} property with a `-webkit-` prefix — this was needed to make transforms work in Chrome, etc. until the feature was finalized and such browsers added a prefix-free version of the property (at the time of writing, Chrome supported both versions).

The last three lines show three different versions of the [`linear-gradient()`](/ja/docs/Web/CSS/linear-gradient) function, which is used to generate a linear gradient in the background of an element:

1.  The first one has a `-moz-` prefix, and shows a slightly older version of the syntax (Firefox)
2.  The second one has a `-webkit-` prefix, and shows an even older, proprietary version of the syntax (this is actually from a really old version of the WebKit engine).
3.  The third one has no prefix, and shows the final version of the syntax (included in the [CSS Image Values and Replaced Content Module Level 3 spec](https://drafts.csswg.org/css-images-3/#linear-gradients), which defines this feature).

Prefixed features were never supposed to be used in production websites — they are subject to change or removal without warning, and cause cross browser issues. This is particularly a problem when developers decide to only use say, the `-webkit- `version of a property — meaning that the site won't work in other browsers. This actually happens so much that other browsers have started to implement `-webkit-` prefixed versions of various CSS properties, so they will work with such code. Usage of prefixes by browser vendors has declined recently precisely because of these types of problems, but there are still some that need attention.

If you insist on using prefixed features, make sure you use the right ones. You can look up what browsers require prefixes on MDN reference pages, and sites like [caniuse.com](http://caniuse.com/). If you are unsure, you can also find out by doing some testing directly in browsers.

Try this simple example:

1.  Open up google.com, or another site that has a prominent heading or other block level element.
2.  Right/Cmd + click on the element in question and choose Inspect/Inspect element (or whatever the option is in your browser) — this should open up the dev tools in your browser, with the element highlighted in the DOM inspector.
3.  Look for a feature you can use to select that element. For example, at the time of writing, the main Google logo had an ID of `hplogo`.
4.  Store a reference to this element in a variable, for example:

    ```js
    var test = document.getElementById('hplogo');
    ```

-
- Now try to set a new value for the CSS property you are interested in on that element; you can do this using the [style](/ja/docs/Web/API/HTMLElement/style) property of the element, for example try typing these into the JavaScript console:

  ```js
  test.style.transform = 'rotate(90deg)'
  test.style.webkitTransform = 'rotate(90deg)'
  ```

1.

As you start to type the property name representation after the second dot (note that in JavaScript, CSS property names are written in lower camel case, not hyphenated), the JavaScript console should begin to autocomplete the names of the properties that exist in the browser and match what you've written so far. This is useful for finding out what versions of the property are implemented in that browser.

At the time of writing, both Firefox and Chrome implemented `-webkit-` prefixed and non-prefixed versions of {{cssxref("transform")}}!

Once you've found out which prefixes you need to support, you should write them all out in your CSS, for example:

```css
-ms-transform: rotate(90deg);
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
```

This ensures that all browsers that support any of the above forms of the property can make the feature work. It is worth putting the non-prefixed version last, because that will be the most up-to-date version, which you'll want browsers to use if possible. If for example a browser implements both the `-webkit-` version and the non-prefixed version, it will first apply the `-webkit-` version, then override it with the non-prefixed version. You want it to happen this way round, not the other way round.

Of course, doing this for lots of different CSS rules can get really tedious. It is better to use an automation tool to do it for you. And such tools exist:

The [prefix-free JavaScript library](http://leaverou.github.io/prefixfree/) can be attached to a page, and will automatically detect what capabilities are possessed by browsers viewing the page and add prefixes as appropriate. It is really easy and convenient to use, although it does have some downsides (see the link above for details), and it is arguable that parsing every stylesheet in your site and add prefixes at run time can be a drain on the computer's processing power for a large site.

Another solution is to add prefixes automatically during development, and this (and other things besides) can be done using tools like [Autoprefixer](https://github.com/postcss/autoprefixer) and [PostCSS](http://postcss.org/). These tools can be used in a variety of ways, for example Autoprefixer has an [online version](http://autoprefixer.github.io/) that allows you to enter your non-prefixed CSS on the left, and gives you a prefix-added version on the right. You can choose which browsers you want to make sure you support using the notation outlined in [Autoprefixer options](https://github.com/postcss/autoprefixer#options); also see [Browserslist queries](https://github.com/ai/browserslist#queries), which this is based on, for more detail. As an example, the following query will select the last 2 versions of all major browsers and versions of IE above 9.

```html
last 2 versions, ie > 9
```

Autoprefixer can also be used in other, more convenient ways — see [Autoprefixer usage](https://github.com/postcss/autoprefixer#usage). For example you can use it with a task runner/build tool such as [Gulp](http://gulpjs.com/) or [Webpack](https://webpack.github.io/) to automatically add prefixes once development has been done. (Explaining how these work is somewhat beyond the scope of this article.)

You can also use a plugin for a text editor such as Atom or Sublime text. For example, in Atom:

1.  You can install it by going to _Preferences > Install_, searching for _Autoprefixer_, then hitting install.
2.  You can set a browser query by pressing the Autoprefixer _Settings_ button and entering the query in the text field in the _Settings_ section on the page.
3.  In your code, you can select sections of CSS you want to add prefixes to, open the command pallette (_Cmd/Ctrl + Shift + P_), then type in Autoprefixer and select the Autoprefixer result that autocompletes.

As an example, we entered the following code:

```css
body {
  display: flex;
}
```

We highlighted it and ran the Autoprefixer command, and it replaced it with this:

```css
body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```

### Layout issues

Another problem that might come up is differences in layouts between browsers. Historically this used to be much more of a problem, but recently, with modern browsers tending to support CSS more consistently, layout issues tend to be more commonly associated with:

- Lack of (or differences in) support for modern layout features.
- Layouts not looking good in mobile browsers (i.e. responsive design problems).

> **Note:** Historically web developers used to use CSS files called resets, which removed all the default browser styling applied to HTML, and then applied their own styles for everything over the top — this was done to make styling on a project more consistent, and reduce possible cross browser issues, especially for things like layout. However, it has more recently been seen as overkill. The best equivalent we have in modern times is [normalize.css](https://necolas.github.io/normalize.css/), a neat bit of CSS that builds slightly on the default browser styling to make things more consistent and fix some layout issues. You are advised to apply normalize.css to all your HTML pages.

> **Note:** When trying to track down a tricky layout issue, a good technique is to add a brightly colored {{cssxref("outline")}} to the offending element, or all the elements nearby. This makes it a lot easier to see where everything is placed. See [Debug your CSS with outline visualizations](http://www.otsukare.info/2016/10/05/debugging-css "Permalink to Debug your CSS with outline visualizations.") for more details.

#### Support for new layout features

Much of the layout work on the web today is done using [floats](/ja/docs/Learn/CSS/CSS_layout/Floats) — this is because floats are well-supported (way back to IE4, albeit with a number of bugs that would also need to be investigated if you were to try to support IE that far back). However, they are not really meant for layout purposes — using floats the way we do is really a hack — and they do have some serious limitations (e.g. see [Why Flexbox?](/ja/docs/Learn/CSS/CSS_layout/Flexbox#Why_Flexbox))

More recently, dedicated layout mechanisms have appeared, like [Flexbox](/ja/docs/Learn/CSS/CSS_layout/Flexbox) and [CSS Grids](/ja/docs/Learn/CSS/CSS_layout/Grids#Native_CSS_Grids_with_Grid_Layout), which make common layout tasks far easier and remove such shortcomings. These however are not as well-supported in browsers:

- CSS grids are very new; at the time of writing, they were only [supported](http://gridbyexample.com/browsers/) in the very newest versions of modern browsers.
- Flexbox is [well-supported](/ja/docs/Learn/CSS/CSS_layout/Flexbox#Cross_browser_compatibility) in modern browsers, but provides problems in older browsers. IE 9 doesn't support it at all, and IE 10 and old versions of iOS/desktop Safari respectively support incompatible old versions of the flexbox spec. This results in some interesting browser prefix juggling if you want to try to use flexbox across all these browsers (see [Advanced Cross-Browser Flexbox](https://dev.opera.com/articles/advanced-cross-browser-flexbox/) to get an idea).

Layout features aren't as easy to provide graceful fallbacks for than simple colors, shadows, or gradients. If layout properties are ignored, your entire design will likely fall to pieces. Because of this, you need to use feature detection to detect whether visiting browsers support those layout features, and selectively apply different layouts depending on the result (we will cover feature detection in detail in a later article).

For example, you could apply a flexbox layout to modern browsers, then instead apply a floated layout to older browsers that don't support flexbox.

> **Note:** There is a fairly new feature in CSS called [`@supports`](/ja/docs/Web/CSS/@supports), which allows you to implement native feature detection tests.

#### Responsive design problems

Responsive design is the practice of creating web layouts that change to suit different device form factors — for example different screen widths, orientations (portrait or landscape), or resolutions. A desktop layout for example will look terrible when viewed on a mobile device, so you need to provide a suitable mobile layout using [media queries](/ja/docs/Web/CSS/Media_Queries), and make sure it is applied correctly using [viewport](/ja/docs/Mozilla/Mobile/Viewport_meta_tag). You can find a detailed account of such practices in [The building blocks of responsive design](/ja/docs/Web/Apps/Progressive/Responsive/responsive_design_building_blocks).

Resolution is a big issue too — for example, mobile devices are less likely to need big heavy images than desktop computers, and are more likely to have slower internet connections and possibly even expensive data plans that make wasted bandwidth more of a problem. In addition, different devices can have a range of different resolutions, meaning that smaller images could appear pixellated. There are a number of techniques that allow you to work around such problems, from simple [mobile first media queries](/ja/Apps/Progressive/Responsive/Mobile_first), to more complex [responsive image techniques](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes).

Another difficulty that can present problems is browser support for the features that make the above techniques possible. media queries are not supported in IE 8 or less, so if you want to use a mobile first layout and have the desktop layout then apply to old IE versions, you'll have to apply a media query {{glossary("polyfill")}} to your page, like [css3-mediaqueries-js](https://code.google.com/archive/p/css3-mediaqueries-js/), or [Respond.js](https://github.com/scottjehl/Respond).

## Finding help

There are many other issues you'll encounter with HTML and CSS; the most important thing to know really is how to find answers online.

Among the best sources of support information are the Mozilla Developer Network (that's where you are now!), [stackoverflow.com](http://stackoverflow.com/), and [caniuse.com](http://caniuse.com/).

To use the Mozilla Developer Network (MDN), most people do a search engine search of the technology they are trying to find information on, plus the term "mdn", for example "mdn HTML5 video". MDN contains several useful types of content:

- Reference material with browser support information for client-side web technologies, e.g. the [\<video> reference page](/ja/docs/Web/HTML/Element/video).
- Other supporting reference material, e.g. [Media formats supported by the HTML audio and video elements](/ja/docs/Web/HTML/Supported_media_formats).
- Useful tutorials that solve specific problems, for example [Creating a cross-browser video player](/ja/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](http://caniuse.com/) provides support information, along with a few useful external resource links. For example, see <http://caniuse.com/#search=video> (you just have to enter the feature you are searching for into the text box).

[stackoverflow.com](http://stackoverflow.com/) (SO) is a forum site where you can ask questions and have fellow developers share their solutions, look up previous posts, and help other developers. You are advised to look and see if there is an answer to your question already, before posting a new question. For example, we searched for "cross browser html5 video" on SO, and very quickly came up with [HTML5 Video with full cross browser compatibility](http://stackoverflow.com/questions/16212510/html5-video-with-full-cross-browser-compatibility).

Aside from that, try searching your favourite search engine for an answer to your problem. It is often useful to search for specific error messages if you have them — other developers will be likely to have had the same problems as you.

## まとめ

Now you should be familiar with the main types of cross browser HTML and CSS problems that you'll meet in web development, and how to go about fixing them.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}

## このモジュール

- [Introduction to cross browser testing](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
- [Strategies for carrying out testing](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
- [Handling common HTML and CSS problems](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [Handling common JavaScript problems](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
- [Handling common accessibility problems](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
- [Implementing feature detection](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- [Introduction to automated testing](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
- [Setting up your own test automation environment](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
