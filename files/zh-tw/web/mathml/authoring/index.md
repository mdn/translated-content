---
title: Authoring MathML
slug: Web/MathML/Authoring
---

這裡我們將會介紹該如何利用 MathML 來表達數學語言。如同 HTML， MathML 也是一種 SGML 語言，因此它是以 tag 和 attribute 描述的。HTML 在你使用了一些諸如 list 或 table 等結構時將會變得很複雜，索性我們有一些 WYSIWYG 編輯器和其他 Content Management Systems 來協助我們進行開發。

數學符號擁有許多更複雜的結構，如除號, 平方根以及矩陣等，他們都需要分別代表他們的 tags。因此，一個好的 MathML 編輯工具是非常重要的，而接下來我們將介紹一些工具給你。限於篇幅的關係，我們的介紹可能不是十分詳盡，你可以到 [W3C MathML software list](https://www.w3.org/Math/Software/) 查看更進一步的訊息，那裡也介紹了其他的工具。

Note that by design, MathML is well-integrated in HTML5 and in particular you can use usual Web features like CSS, DOM, Javascript or SVG. This is out of the scope of this document but anyone with basic knowledge of Web languages will easily be able to mix these features with MathML. Check out [our demos](/zh-TW/docs/Mozilla/MathML_Project#Sample_MathML_Documents) and [MathML references](/zh-TW/docs/Web/MathML) for more details.

## Using MathML

#### MathML in HTML pages

You can use Presentation MathML inside HTML5 documents:

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

Content MathML is not supported by browsers. It's recommended to convert your Content MathML markup into Presentation MathML before publishing it, for example with the help of the [ctop.xsl](https://code.google.com/p/web-xslt/source/browse/trunk/#trunk/ctop) stylesheet. Tools mentioned on this page generates Presentation MathML.

#### Fallback for Browsers without MathML support

Unfortunately, some browsers are not able to render MathML equations or only have a limited support. Hence you will need to use a MathML polyfill to provide some fallback rendering. If you need only basic mathematical constructions such as those used on this MDN wiki then a small [mathml.css](https://github.com/fred-wang/mathml.css) stylesheet might be enough. To use it, just insert one line in your document header:

```html
<script src="http://fred-wang.github.io/mathml.css/mspace.js"></script>
```

If you need more complex constructions, you might instead consider using the heavier [MathJax](https://www.mathjax.org) library as a MathML polyfill:

```html
<script src="http://fred-wang.github.io/mathjax.js/mpadded.js"></script>
```

Note that these two scripts perform feature detection of the [mspace](/zh-TW/docs/Web/MathML/Element/mspace) or [mpadded](/zh-TW/docs/Web/MathML/Element/mpadded) elements (see the browser compatibility table on these pages). If you don't want to use this link to GitHub but instead to integrate these polyfills or others in your own project, you might need the detection scripts to verify the level of MathML support. For example the following function verifies the MathML support by testing the mspace element (you may replace `mspace` with `mpadded`):

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

Alternatively, the following UA string sniffing will allow to detect the rendering engines with native MathML support (Gecko and WebKit). Note that UA string sniffing is not the most reliable method and might break from version to version:

```js
var ua = navigator.userAgent;
var isGecko = ua.indexOf("Gecko") > -1 && ua.indexOf("KHTML") === -1 && ua.indexOf('Trident') === -1;
var isWebKit = ua.indexOf('AppleWebKit') > -1 && ua.indexOf('Chrome') === -1;
```

#### Mathematical fonts

**Note: browsers can only use a limited set of mathematical fonts to draw stretchy MathML operators. However, implementation of the OpenType MATH table is in progress in Gecko & WebKit. This will provide a generic support for mathematical fonts and simplify the settings described in this section.**

To get a good mathematical rendering in browsers, some [MathML fonts](/docs/Mozilla/MathML_Project/Fonts) are required. It's a good idea to provide to your visitors a link to the [MDN page that explains how to install MathML fonts](/docs/Mozilla/MathML_Project/Fonts). Alternatively, you can just make them available as Web fonts. You can get these fonts from the [MathML-fonts add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) ; the xpi is just a zip archive that you can fetch and extract for example with the following command:

```bash
wget https://addons.mozilla.org/firefox/downloads/latest/367848/addon-367848-latest.xpi -O mathml-fonts.zip; \
unzip mathml-fonts.zip -d mathml-fonts
```

Then copy the `mathml-fonts/resource/` directory somewhere on your Web site and ensure that the woff files are served with the correct MIME type. Finally, include the `mathml-fonts/resource/mathml.css` style sheet in your Web pages, for example by adding the following rule to the default style sheet of your Web site:

```css
@import url('/path/to/resource/mathml.css');
```

You then need to modify the font-family on the \<math> elements and, for Gecko, the on ::-moz-math-stretchy pseudo element too. For example to use STIX fonts:

```css
math {
  font-family: STIXGeneral;
}

::-moz-math-stretchy {
  font-family: STIXNonUnicode, STIXSizeOneSym, STIXSize1, STIXGeneral;
}
```

Try the [MathML torture test](/docs/Mozilla/MathML_Project/MathML_Torture_Test) to compare the rendering of various fonts and the CSS rules to select them.

#### MathML in XML documents (XHTML, EPUB, etc)

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

#### MathML in email and instant messaging clients

Modern mail clients may send and receive emails in the HTML5 format and thus can use MathML expressions. Be sure to have the "send as HTML" and "view as HTML" options enabled. In Thunderbird, you can use the "Insert HTML" command to paste your HTML+MathML code. [MathBird](http://disruptive-innovations.com/zoo/MathBird/) is a convenient add-on for Thunderbird to insert such MathML expressions using the AsciiMath input syntax. Again, the way MathML is handled and the quality of the MathML rendering [depend on the mail clients](http://www.maths-informatique-jeux.com/blog/frederic/?post/2012/11/14/Writing-mathematics-in-emails#c121). Even if your browser supports MathML, your Webmail may prevent you to send or receive mails with MathML inside.

In theory, Gecko-based instant messaging clients could integrate one of the Javascript-based text-to-MathML converters mentioned below and render the MathML expressions. For example there is an [InstantBird add-on](https://addons.instantbird.org/en-US/instantbird/addon/340) to handle LaTeX expressions.

## Conversion from a Simple Syntax

There are many simple notations (e.g. wiki or markdown syntaxes) to generate HTML pages. The same is true for MathML: for example ASCII syntaxes as used in calculators or the more powerful LaTeX language, very popular among the scientific community. In this section, we present some of these tools to convert from a simple syntax to MathML.

- pros:

  - Writing mathematical expressions may only require a standard text editor.
  - Many tools are available, some of them are compatible with the classical LaTeX-to-pdf workflow.
  - This gives access to advanced features of LaTeX like macros.

- cons:

  - This may be harder to use: people must learn a syntax, typos in the code may easily lead to parsing or rendering errors etc
  - The interface is not user-friendly: only code editor without immediate display of the mathematical expression.
  - None of the syntax has been standardized, making cross-compatibility between converters difficult. Even the popular LaTeX language keeps having new packages added.

### Client-side Conversion

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

```html
<x-tex>\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1</x-tex>
```

and get it automatically converted into MathML. This is still a work-in-progress, but could be improved in the future thanks to Web Components and shadow DOM. Alternatively, you can use the more traditional [Javascript parsing of expressions at load time](https://github.com/fred-wang/TeXZilla/wiki/Advanced-Usages#parsing-tex-expressions-in-your-web-page) as all the other tools in this section do.

One simple client-side conversion tools is [ASCIIMathML](http://www1.chapman.edu/%7Ejipsen/mathml/asciimath.html). Just download the [ASCIIMathML.js](https://mathcs.chapman.edu/%7Ejipsen/mathml/ASCIIMathML.js) script and copy it to your Web site. Then on your Web pages, add a `<script>` tag to load ASCIIMathML and the mathematical expressions delimited by `` ` `` (grave accent) will be automatically parsed and converted to MathML:

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

  $ \sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6} $

\end{document}
</div>
...
```

[jqMath](https://mathscribe.com/author/jqmath.html) is another script to parse a simple LaTeX-like syntax but which also accepts non-ASCII characters like `√{∑↙{n=1}↖{+∞} 6/n^2} = π` to write <math><mrow><msqrt><mrow><munderover><mo>∑</mo> <mrow><mi>n</mi> <mo>=</mo> <mn>1</mn> </mrow><mrow><mo>+</mo> <mi>∞</mi> </mrow></munderover><mfrac><mn>6</mn> <msup><mi>n</mi> <mn>2</mn> </msup></mfrac></mrow></msqrt><mo>=</mo> <mi>π</mi> </mrow></math>. The installation is similar: download and copy the relevant [Javascript and CSS files](https://mathscribe.com/downloads/mathscribe-unix-0.4.0.zip) on your Web site and reference them in your page header (see the `COPY-ME.html` file from the zip archive for an example). One of the advantage of jqMath over the previous scripts is that it will automatically add some simple CSS rules to do the mathematical layout and make the formulas readable on browsers with limited MathML support.

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

### Command-line Programs

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

If you only want to parse simple LaTeX mathematical expressions, you might want to try tools like [itex2MML](https://golem.ph.utexas.edu/%7Edistler/blog/itex2MML.html) or [Blahtex](http://gva.noekeon.org/blahtexml/). The latter is often available on Linux distributions. Let's consider the former, which was originally written by Paul Gartside at the beginning of the Mozilla MathML project and has been maintained by Jacques Distler since then. It's a small stream filter written in C/C++ and generated with flex and bison ; in particular it is very fast. Install flex/bison as well as the classical compiler and make tools. On Unix, you can then download itex2MML, build and install it:

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
  <p>$\sqrt{a^2-3c}input.html

...
</head>
<body>
  <p>$\sqrt{a^2-3c}input.html

...
</head>
<body>
  <p>$\sqrt{a^2-3c}input.html

...
</head>
<body>
  <p>$\sqrt{a^2-3c}$</p>
  <p>$$ {\sum_{i=1}^N i} = \frac{N(N+1)}{2} $$</p>
</body>
</html>lt;/p>
  <p>$ {\sum_{i=1}^N i} = \frac{N(N+1)}{2} $</p>
</body>
</html>lt;/p>
  <p>$ {\sum_{i=1}^N i} = \frac{N(N+1)}{2} $</p>
</body>
</html>lt;/p>
  <p>$ {\sum_{i=1}^N i} = \frac{N(N+1)}{2} input.html

...
</head>
<body>
  <p>$\sqrt{a^2-3c}input.html

...
</head>
<body>
  <p>$\sqrt{a^2-3c}$</p>
  <p>$$ {\sum_{i=1}^N i} = \frac{N(N+1)}{2} $$</p>
</body>
</html>lt;/p>
  <p>$ {\sum_{i=1}^N i} = \frac{N(N+1)}{2} $</p>
</body>
</html>lt;/p>
</body>
</html>
```

Then to generate the HTML page input.html with TeX expressions replaced by MathML expressions, just do

```bash
cat input.html | itex2MML > output.html
```

There are even more sophisticated tools to convert arbitrary LaTeX documents into HTML+MathML. For example [TeX4ht](https://www.tug.org/tex4ht/) is often included in TeX distributions and has an option to use MathML instead of PNG images. This command will generate an XHTML+MathML document foo.xml from a foo.tex LaTeX source:

```bash
   mk4ht mzlatex foo.tex # Linux/Mac platforms
   mzlatex foo.tex       # Windows platform
```

[LaTeXML](https://dlmf.nist.gov/LaTeXML/) is another tool that is still actively developed but the release version is rather old, so you'd better [install the development version](https://github.com/KWARC/LaTeXML). In particular, this version can generate HTML5 and EPUB documents. Here is the command to execute in order to create a foo.html Web page from the foo.tex LaTeX source:

```bash
  latexml --dest foo.xml foo.tex
  latexmlpost --dest foo.html --format=html5 foo.xml
```

If you want to have a MathJax fallback for non-Gecko browsers, copy the [Javascript lines given above](/zh-TW/docs/Web/MathML/Authoring$edit#mathjax-fallback) into a `mathjax.js` file and use the `--javascript` parameter to tell LaTeXML to include that file:

```bash
  latexmlpost --dest foo.html --format=html5 --javascript=mathjax.js foo.xml
```

If your LaTeX document is big, you might want to split it into several small pages rather putting everything in a single page. This is especially true if you use the MathJax fallback above, since in that case MathJax will take a lot of time to render the equations in non-Gecko browsers. Use the `--splitat` parameter for that purpose. For example, this will split the pages at the `\section` level:

```bash
  latexmlpost --dest foo.html --format=html5 --splitat=section foo.xml
```

Finally, to generate an EPUB document, you can do

```bash
  latexmlc --dest foo.epub --splitat=section foo.xml
```

### Server-side Conversion

- pros:

  - Conversion is done server-side and the MathML output can be cached, which is more efficient and cleaner than client-side conversion.

- cons:

  - This might be a bit more difficult to set up, since you need some admin right on your server.

[TeXZilla](https://github.com/fred-wang/TeXZilla) can be [used as a Web server](https://github.com/fred-wang/TeXZilla/wiki/Advanced-Usages#using-texzilla-as-a-web-server) in order to perform server-side LaTeX-to-MathML conversion. [LaTeXML](https://dlmf.nist.gov/LaTeXML/) can also be used as a deamon to run server-side. [Mathoid](https://github.com/gwicke/mathoid) is another tool based on MathJax that is also able to perform additional MathML-to-SVG conversion.

[Instiki](http://instiki.org/show/HomePage) is a Wiki that integrates itex2MML to do server-side conversion. In future versions, [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) will support server-side conversion too.

## Graphical Interface

### Input Box

[TeXZilla](https://github.com/fred-wang/TeXZilla) has several interfaces, including a [CKEditor plugin](https://ckeditor.com/addon/texzilla) used on MDN, an [online demo](http://fred-wang.github.io/TeXZilla/), a [Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/texzilla/) or a [FirefoxOS Webapp](http://r-gaia-cs.github.io/TeXZilla-webapp/). [Abiword](http://abisource.org/) contains a small equation editor, based on itex2MML. [Bluegriffon](http://www.bluegriffon.com/) is a mozilla-based Wysiwyg HTML editor and has an add-on to insert MathML formulas in your document, using ASCII/LaTeX-like syntax.

![BlueGriffon](mathml-shot1.png)

### WYSIYWG Editors

[Firemath](https://www.firemath.info/) is an extension for Firefox that provides a WYSIWYG MathML editor. A preview of the formula is displayed using the rendering engine of Mozilla. The generated MathML code is available at the bottom. Use the text field for token elements and buttons to build advanced constructions. Once you are done, you can save your document as a XHTML page.

[OpenOffice](https://www.openoffice.org/) and [LibreOffice](https://libreoffice.org/) have an equation editor (File → New → Formula). It is semi-WYSIWYG: you enter the source of the formula using the equation panel/keyboard and a preview of the formula is regularly refreshed. The editor uses its own syntax "StarMath" for the source but MathML is also generated when the document is saved. To get the MathML code, save the document as mml and open it with any text editor. Alternatively, you can extract the odf file (which is actually a zip archive) and open an xml file called `content.xml`.

![Open Office Math](openoffice.png)

[Amaya](https://www.w3.org/Amaya/) is the W3C's web editor, which is able to handle MathML inside XHTML documents. Use the Elements and the Special Chars panels to create various advanced mathematical constructs. Simple text such as `a+2` is automatically parsed and the appropriate MathML markup is generated. Once you are done, you can directly save your XHTML page and open it in Mozilla.

## Optical Character & Handwriting Recognition

[Inftyreader](https://www.inftyreader.org/) is able to perform some Optical Character Recognition, including translation of mathematical equations into MathML. Other tools can do handwriting recognition such as the [Windows Math Input Panel](https://windows.microsoft.com/en-za/windows7/use-math-input-panel-to-write-and-correct-math-equations)

or the online converter [Web Equation](http://webdemo.visionobjects.com/).
