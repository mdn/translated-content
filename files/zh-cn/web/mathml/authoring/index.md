---
title: 编写 MathML
slug: Web/MathML/Authoring
tags:
  - MathML
  - 起步
translation_of: Web/MathML/Authoring
---
{{MathMLRef}}

这个页面解释了如何利用 MathML 语言书写数学公式。就像 HTML，MathML 是用标签和属性描述的。当你的文档包含了高级结构比如说列表或表格的时候，HTML 会变得很冗长，但是幸好还有很多来自简单记号法的生成器，“所见即所得”编辑器以及别的内容管理系统可以帮助你编写 Web 网页。

数学公式记号法在结构方面更加复杂，像分数、平方根或者矩阵，很可能需要它们自己的标签。结果是，好的 MathML 编辑工具很重要，我们在下面描述一些工具。值得一说的是，Mozilla MathML 工作小组已经开发出了 [TeXZilla](https://github.com/fred-wang/TeXZilla/)，这是一个基于 JavaScript、支持 Unicode 编码的 LaTeX 转 MathML 转换器，is intended to be used in many scenarios described here。当然了，这个列表并不详尽，我们建议你自己去查看 [W3C MathML 软件列表](https://www.w3.org/Math/Software/)，你可以在那里找到很多别的工具。

注意，根据设计，MathML 在 HTML5 中是完美整合的，而且你可以使用寻常的 Web 功能，比如说 CSS、DOM、JavaScript 或 SVG。这超出这个文档的范围了，但是任何拥有基础 Web 语言知识的人都能够轻松地学会用 MathML 综合这些功能。请阅读[我们的文档](/zh-CN/docs/Mozilla/MathML_Project#Sample_MathML_Documents)以及 [MathML 参考](/zh-CN/docs/Web/MathML)以了解详情。

## 使用 MathML

#### HTML 网页中的 MathML

你可以在 HTML5 文档内部使用 MathML 表达式：

```html
<!DOCTYPE html>
<html>
<head>
 <title>MathML in HTML5</title>
</head>
<body>

  <h1>MathML in HTML5</h1>

  <p>
    Square root of two:
    <math>
      <msqrt>
        <mn>2</mn>
      </msqrt>
    </math>
  </p>

</body>
</html>
```

浏览器不支持转换 MathML 的内容。建议在发布网页之前，把你的 MathML 内容标记转换成 MathML 表达式，比如说利用 [ctop.xsl](https://code.google.com/p/web-xslt/source/browse/trunk/#trunk/ctop) 样式表作为辅助。本页提到的工具可以生成 MathML 表达式。

#### 对不支持 MathML 的浏览器的后备计划

不幸的是，一些浏览器不能呈现 MathML 方程式，或者只能有限地支持它。因此，你可能需要使用一个 MathML polyfill 以提供一些用于呈现的后备计划。如果你只需要基本的数学公式结构，比如说用在这个 MDN wiki 中的这些，那么，一个小型的 [mathml.css](https://github.com/fred-wang/mathml.css) 样式表就足够了。要想使用它，只需要在你的文档中插入一行内容：

```html
<script src="http://fred-wang.github.io/mathml.css/mspace.js"></script>
```

如果你需要更多复杂的结构，你需要考虑使用更重一些的 [MathJax](https://www.mathjax.org) 库作为一个 MathML polyfill：

```html
<script src="http://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

注意有两个脚本执行功能功能探测了 [mspace](/zh-CN/docs/Web/MathML/Element/mspace) 元素和 [mpadded](/zh-CN/docs/Web/MathML/Element/mpadded) 元素（请看这几个页面的浏览器兼容性表）。还有一些类似的脚本，对于不支持 MathML 的浏览器，会在网页顶部显示一个警告，让用户选择一个后备计划：

```html
<script src="http://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

如果你不想使用指向 Github 的链接，但是想在你的项目中整合这些铺垫，或者别的东西，你需要探测脚本以核实 MathML 支持的程度。举个例子，下面的函数通过检测 `mspace` 元素，核实了是否支持 MathML（你可以用 `mpadded` 替换 `mspace`）。

```js
 function hasMathMLSupport() {
  var div = document.createElement("div"), box;
  div.innerHTML = "<math><mspace height='23px' width='77px'/></math>";
  document.body.appendChild(div);
  box = div.firstChild.firstChild.getBoundingClientRect();
  document.body.removeChild(div);
  return Math.abs(box.height - 23) <= 1  && Math.abs(box.width - 77) <= 1;
}
```

作为替选，下面的用户代理字符串嗅探将允许侦测带原生 MathML 支持的渲染引擎（Geocko 和 WebKit）。注意，UA 字符串嗅探不是最可靠的方法，而且可能会在版本之间被破坏（break from version to version）：

```js
var ua = navigator.userAgent;
var isGecko = ua.indexOf("Gecko") > -1 && ua.indexOf("KHTML") === -1 && ua.indexOf('Trident') === -1;
var isWebKit = ua.indexOf('AppleWebKit') > -1 && ua.indexOf('Chrome') === -1;
```

#### 数学公式字体

In order to get a good layout or to allow different style, it's important to have mathematical fonts available. It's always good to provide a link to [MDN's Font Instructions](/zh-CN/docs/Mozilla/MathML_Project/Fonts), so that your visitors can verify whether they have appropriate fonts installed on their system. It's also good to provide a fallback with Web fonts.

Prior to Gecko 31.0 {{GeckoRelease("31.0")}}, it was a bit tedious to setup math fonts, see the [font instructions for Mozilla 2.0](/zh-CN/docs/Mozilla/MathML_Project/FontsMozilla2.0#MathML_Font_Selection_with_CSS). For Gecko 31.0 {{GeckoRelease("31.0")}}, this is much simpler and is compatible with any Web rendering engine with MathML support. For example, here is a minimal stylesheet to use Latin Modern for the text and Latin Modern Math for the mathematics:

```css
@namespace url('http://www.w3.org/1999/xhtml');
@namespace m url('http://www.w3.org/1998/Math/MathML');

body, m|mtext {
    font-family: Latin Modern;
}
m|math {
    font-family: Latin Modern Math;
}
```

You can then use the [@font-face](/zh-CN/docs/Web/CSS/@font-face) rule as usual to provide WOFF fallback for Latin Modern and Latin Modern Math. See this [GitHub repository to get WOFF fonts and sample CSS stylesheets](https://github.com/fred-wang/MathFonts) to use on your Web site and check [its test page](http://fred-wang.github.io/MathFonts/).

#### XML 文档中的 MathML（XHTML、EPUB，等等）

If for some reason you need to use MathML in XML documents, be sure to satisfy the usual requirements: well-formed document, use of correct MIME type, MathML namespace `"http://www.w3.org/1998/Math/MathML"` on `<math>` roots. For example, the XHTML version of the previous example looks like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN"
  "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <title>XHTML+MathML Example</title>
</head>
<body>

<h1>XHTML+MathML Example</h1>

  <p>
    Square root of two:
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <msqrt>
        <mn>2</mn>
      </msqrt>
    </math>
  </p>

</body>
</html>
```

Note that if you use MathML as a standalone .mml or .svg documents or inside an EPUB book, it may not always be possible to use MathJax as a polyfill for rendering engines without MathML support. Hence whether MathML can be handled will vary according to the tools used to read these documents.

#### 电子邮件和即时通讯客户端中的 MathML

Modern mail clients may send and receive emails in the HTML5 format and thus can use MathML expressions. Be sure to have the "send as HTML" and "view as HTML" options enabled. In Thunderbird, you can use the "Insert HTML" command to paste your HTML+MathML code. [MathBird](http://disruptive-innovations.com/zoo/MathBird/) is a convenient add-on for Thunderbird to insert such MathML expressions using the AsciiMath input syntax. Moreover, a LaTeX-to-MathML input box has also been integrated into [SeaMonkey](https://www.seamonkey-project.org/) since version 2.28 and into [Thunderbird](https://www.mozilla.org/thunderbird/) since version 31. Again, the way MathML is handled and the quality of the MathML rendering [depend on the mail clients](http://www.maths-informatique-jeux.com/blog/frederic/?post/2012/11/14/Writing-mathematics-in-emails#c121). Even if your browser supports MathML, your Webmail may prevent you to send or receive mails with MathML inside.

Gecko-based instant messaging clients can integrate a Javascript-based text-to-MathML converter (mentioned below) and then render the MathML expressions generated from the (plaintext) instant messages. For example, there is an [Instantbird add-on](https://addons.instantbird.org/en-US/instantbird/addon/340) that handles LaTeX expressions.

## 从简单句法转换

There are many simple notations (e.g. wiki or markdown syntaxes) to generate HTML pages. The same is true for MathML: for example ASCII syntaxes as used in calculators or the more powerful LaTeX language, very popular among the scientific community. In this section, we present some of these tools to convert from a simple syntax to MathML.

- pros:

  - Writing mathematical expressions may only require a standard text editor.
  - Many tools are available, some of them are compatible with the classical LaTeX-to-pdf workflow.
  - This gives access to advanced features of LaTeX like macros.

- cons:

  - This may be harder to use: people must learn a syntax, typos in the code may easily lead to parsing or rendering errors etc
  - The interface is not user-friendly: only code editor without immediate display of the mathematical expression.
  - None of the syntax has been standardized, making cross-compatibility between converters difficult. Even the popular LaTeX language keeps having new packages added.

### 客户端转换

In a Web environment, the most obvious method to convert a simple syntax into a DOM tree is to use Javascript and of course many libraries have been developed to perform that task.

- pros:

  - This is very easy setup: only a few Javascript and CSS files to upload and/or a link to add to your document header.
  - This is a pure Web-based solution: everything is done by the browsers and no other programs must be installed or compiled.

- cons:

  - This won't work if the visitor has Javascript disabled.
  - The MathML code is not exposed to Web crawlers (e.g. those of math search engines or feed aggregators). In particular, your content won't show up properly on Planet.
  - The conversion must be done at each page load, may be slow and may conflict with the HTML parsing (e.g. "<" for tags or "$" for money amounts)
  - You may need to synchronize the Javascript converter with other Javascript programs on your page.

[TeXZilla](https://github.com/fred-wang/TeXZilla) has an [\<x-tex>](https://github.com/fred-wang/x-tex) custom element, that can be used to write things like

```plain
<x-tex>\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1</x-tex>
```

and get it automatically converted into MathML. This is still a work-in-progress, but could be improved in the future thanks to Web Components and shadow DOM. Alternatively, you can use the more traditional [Javascript parsing of expressions at load time](https://github.com/fred-wang/TeXZilla/wiki/Advanced-Usages#parsing-tex-expressions-in-your-web-page) as all the other tools in this section do.

One simple client-side conversion tools is [ASCIIMathML](http://www1.chapman.edu/~jipsen/mathml/asciimath.html). Just download the [ASCIIMathML.js](https://mathcs.chapman.edu/~jipsen/mathml/ASCIIMathML.js) script and copy it to your Web site. Then on your Web pages, add a `<script>` tag to load ASCIIMathML and the mathematical expressions delimited by `` ` `` (grave accent) will be automatically parsed and converted to MathML:

```html
<html>
<head>
...
<script type="text/javascript" src="ASCIIMathML.js"></script>
...
</head>
<body>
...
<p>blah blah `x^2 + y^2 = r^2` blah ...
...
```

[LaTeXMathML](https://math.etsu.edu/LaTeXMathML/) is a similar script that allows to parse more LaTeX commands. The installation is similar: copy [LaTeXMathML.js](https://math.etsu.edu/LaTeXMathML/LaTeXMathML.js) and [LaTeXMathML.standardarticle.css](https://math.etsu.edu/LaTeXMathML/LaTeXMathML.standardarticle.css), add links in the header of your document and the LaTeX content of your Web page marked by the "LaTeX" class will be automatically parsed and converted to HTML+MathML:

```html
<head>
...
<script type="text/javascript" src="LaTeXMathML.js"></script>
<link rel="stylesheet" type="text/css" href="LaTeXMathML.standardarticle.css" />
...
</head>

<body>
...

<div class="LaTeX">
\documentclass[12pt]{article}

\begin{document}

\title{LaTeXML Example}
\maketitle

\begin{abstract}
This is a sample LaTeXML document.
\end{abstract}

\section{First Section}

  $$ \sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6} $$

\end{document}
</div>
...
```

[jqMath](https://mathscribe.com/author/jqmath.html) is another script to parse a simple LaTeX-like syntax but which also accepts non-ASCII characters like `√{∑↙{n=1}↖{+∞} 6/n^2} = π` to write <math><mrow><msqrt><mrow class="ma-repel-adj"><munderover><mo>∑</mo> <mrow><mi>n</mi> <mo>=</mo> <mn>1</mn> </mrow><mrow><mo>+</mo> <mi>∞</mi> </mrow></munderover><mfrac><mn>6</mn> <msup><mi>n</mi> <mn>2</mn> </msup></mfrac></mrow></msqrt><mo>=</mo> <mi>π</mi> </mrow></math>. The installation is similar: download and copy the relevant [Javascript and CSS files](https://mathscribe.com/downloads/mathscribe-unix-0.4.0.zip) on your Web site and reference them in your page header (see the `COPY-ME.html` file from the zip archive for an example). One of the advantage of jqMath over the previous scripts is that it will automatically add some simple CSS rules to do the mathematical layout and make the formulas readable on browsers with limited MathML support.

Another way to work around the lack of MathML support in some browsers is to use [MathJax](https://www.mathjax.org/). However, note that you may find conflicts and synchronization issues between MathJax and the Javascript libraries previously mentioned. So if you really want to use MathJax as a MathML polyfill, you'd better use its own LaTeX/ASCIIMath parsers too. Note that on the one hand MathJax has better parsing and rendering support but on the other hand it is much bigger, more complex and slower than the previous Javascript libraries. Fortunately, you can use MathJax's CDN so that you don't need to install it on your Web server. Also, the slowest part of MathJax is currently its HTML-CSS / SVG output modes so we recommend to use the Native MathML output for Gecko-based browsers. Hence a typical configuration to use the AMS-LaTeX input is:

```html
...
    <script type="text/x-mathjax-config">
      MathJax.Hub.Config({
        MMLorHTML: { prefer: { Firefox: "MML" } }
      });
    </script>
    <script type="text/javascript"
            src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
   </script>
  </head>
  <body>
   \[ \tau = \frac{x}{y} + \sqrt{3} \]
...
```

Note that [the dollar delimiters are not used by default](http://docs.mathjax.org/en/latest/tex.html#tex-and-latex-math-delimiters). To use the ASCIIMathML input instead, just replace `TeX-AMS-MML_HTMLorMML` by `AM-MML_HTMLorMML`. MathJax has many other features, see the [MathJax documentation](http://docs.mathjax.org/en/latest/) for further details.

### 命令行程序

An alternative way is to parse the simple syntax before publishing your web pages. That is, you use command-line programs to generate them and publish these static pages on your server.

- pros:

  - You get static Web pages: the LaTeX source don't need to be parsed at each page load, the MathML code is exposed to Web crawlers and you can put them easily on any Web server.
  - Binary programs may run faster than Javascript programs and can be more sophisticated e.g. have a much complete LaTeX support or generate other formats like EPUB.
  - You can keep compatibility with other tools to generate pdf e.g. you can use the same .tex source for both latex and latexml.

- cons:

  - This requires to install programs on your computer, which may be a bit more difficult or they may not be available on all platforms.
  - You must run the programs on your computer and have some kind of workflow to get the Web pages at the end ; that may be a bit tedious.
  - Binary programs are not appropriate to integrate them in a Mozilla extension or XUL application.

[TeXZilla](https://github.com/fred-wang/TeXZilla) can be used [from the command line](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) and will essentially have the same support as itex2MML described below. However, the stream filter behavior is not implemented yet.

If you only want to parse simple LaTeX mathematical expressions, you might want to try tools like [itex2MML](https://golem.ph.utexas.edu/~distler/blog/itex2MML.html) or [Blahtex](http://gva.noekeon.org/blahtexml/). The latter is often available on Linux distributions. Let's consider the former, which was originally written by Paul Gartside at the beginning of the Mozilla MathML project and has been maintained by Jacques Distler since then. It's a small stream filter written in C/C++ and generated with flex and bison ; in particular it is very fast. Install flex/bison as well as the classical compiler and make tools. On Unix, you can then download itex2MML, build and install it:

```bash
wget http://golem.ph.utexas.edu/~distler/blog/files/itexToMML.tar.gz; \
tar -xzf itexToMML.tar.gz; \
cd itex2MML/itex-src;
make
sudo make install
```

Now suppose that you have a HTML page with TeX fragments delimited by dollars:

```html
input.html

...
</head>
<body>
  <p>$\sqrt{a^2-3c}$</p>
  <p>$$ {\sum_{i=1}^N i} = \frac{N(N+1)}{2} $$</p>
</body>
</html>
```

Then to generate the HTML page input.html with TeX expressions replaced by MathML expressions, just do

```plain
cat input.html | itex2MML > output.html
```

There are even more sophisticated tools to convert arbitrary LaTeX documents into HTML+MathML. For example [TeX4ht](https://www.tug.org/tex4ht/) is often included in TeX distributions and has an option to use MathML instead of PNG images. This command will generate an XHTML+MathML document foo.xml from a foo.tex LaTeX source:

```plain
   mk4ht mzlatex foo.tex # Linux/Mac platforms
   mzlatex foo.tex       # Windows platform
```

Note that [tex4ebook](https://github.com/michal-h21/tex4ebook) relies on TeX4ht to generate EPUB documents.

[LaTeXML](https://dlmf.nist.gov/LaTeXML/) is another tool that can generate HTML5 and EPUB documents. Windows users can watch this [video tutorial](https://www.youtube.com/watch?v=Dg881w2e-lI). Given a foo.tex LaTeX file, you can use these simple commands:

```plain
  latexmlc --dest foo.html foo.tex # Generate a HTML5 document foo.html
  latexmlc --dest foo.epub foo.tex # Generate an EPUB document foo.epub
```

To handle the case of browsers without MathML support, you can use the `--javascript` parameter to tell LaTeXML to include one of the [fallback scripts](#fallback_for_browsers_without_mathml_support):

```html
  latexmlc --dest foo.html --javascript=http://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Add the CSS fallback
  latexmlc --dest foo.html --javascript=http://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Add the MathJax fallback
```

If your LaTeX document is big, you might want to split it into several small pages rather than putting everything in a single large page. For example, this will split the pages at the `\section` level:

```plain
  latexmlc --dest foo.html --splitat=section foo.tex
```

### 服务器端转换

- pros:

  - Conversion is done server-side and the MathML output can be cached, which is more efficient and cleaner than client-side conversion.

- cons:

  - This might be a bit more difficult to set up, since you need some admin right on your server.

[TeXZilla](https://github.com/fred-wang/TeXZilla) can be [used as a Web server](https://github.com/fred-wang/TeXZilla/wiki/Advanced-Usages#using-texzilla-as-a-web-server) in order to perform server-side LaTeX-to-MathML conversion. [LaTeXML](https://dlmf.nist.gov/LaTeXML/) can also be used as a deamon to run server-side. [Mathoid](https://github.com/gwicke/mathoid) is another tool based on MathJax that is also able to perform additional MathML-to-SVG conversion.

[Instiki](http://instiki.org/show/HomePage) is a Wiki that integrates itex2MML to do server-side conversion. In future versions, [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) will support server-side conversion too.

## 图形接口

### Input Box

[TeXZilla](https://github.com/fred-wang/TeXZilla) has several interfaces, including a [CKEditor plugin](https://ckeditor.com/addon/texzilla) used on MDN, an [online demo](http://fred-wang.github.io/TeXZilla/), a [Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/texzilla/) or a [FirefoxOS Webapp](https://marketplace.firefox.com/app/texzilla-1/). It has also been integrated into [SeaMonkey](https://www.seamonkey-project.org/) since version 2.28 and into [Thunderbird](https://www.mozilla.org/thunderbird/) since version 31.[ Abiword](http://abisource.org/) contains a small equation editor, based on itex2MML. Finally, [Bluegriffon](http://www.bluegriffon.com/) has an add-on to insert MathML formulas in your document, using ASCII/LaTeX-like syntax.

![BlueGriffon](mathml-shot1.png)

### 所见即所得编辑器

[Firemath](https://www.firemath.info/) is an extension for Firefox that provides a WYSIWYG MathML editor. A preview of the formula is displayed using the rendering engine of Mozilla. The generated MathML code is available at the bottom. Use the text field for token elements and buttons to build advanced constructions. Once you are done, you can save your document as a XHTML page.

[LyX](https://www.lyx.org/) is a graphical LaTeX editor, which has built-in support for XHTML+MathML export and can be configured to use similar LaTeX-to-(X)HTML converters. You can for example, you can configure it to [use LaTeXML HTML5/EPUB export](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx).

[OpenOffice](https://www.openoffice.org/) and [LibreOffice](https://libreoffice.org/) have an equation editor (File → New → Formula). It is semi-WYSIWYG: you enter the source of the formula using the equation panel/keyboard and a preview of the formula is regularly refreshed. The editor uses its own syntax "StarMath" for the source but MathML is also generated when the document is saved. To get the MathML code, save the document as mml and open it with any text editor. Alternatively, you can extract the odf file (which is actually a zip archive) and open an xml file called `content.xml`.

![Open Office Math](openoffice.png)

[Amaya](https://www.w3.org/Amaya/) is the W3C's web editor, which is able to handle MathML inside XHTML documents. Use the Elements and the Special Chars panels to create various advanced mathematical constructs. Simple text such as `a+2` is automatically parsed and the appropriate MathML markup is generated. Once you are done, you can directly save your XHTML page and open it in Mozilla.

## 可选的字符、手写识别

[Inftyreader](https://www.inftyreader.org/) is able to perform some Optical Character Recognition, including translation of mathematical equations into MathML. Other tools can do handwriting recognition such as the [Windows Math Input Panel](https://windows.microsoft.com/en-za/windows7/use-math-input-panel-to-write-and-correct-math-equations)

or the online converter [Web Equation](http://webdemo.visionobjects.com/).
