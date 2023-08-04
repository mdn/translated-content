---
title: Средство разработки MathML
slug: Web/MathML/Authoring
---

Эта страница объясняет, как записать математические выражения при помощи языка MathML. Подобно HTML, основными элементами языка MathML являются теги и атрибуты. Документ HTML становится сложным, когда он содержит структуры, подобные спискам или таблицам, но, к счастью, существует много генераторов на основе простых систем обозначений, WYSIWYG редакторы и другие системы управления контентом, помогающие создавать Web страницы.

Математические обозначения ещё более сложны со структурами такими, как дроби, квадратные корни или матрицы, которые, вероятно, потребуют собственных тегов. Поэтому инструменты разработки, связанные с MathML, очень важны. Некоторые из этих инструментов мы описываем ниже. В частности, команда Mozilla MathML разрабатывала [TeXZilla](https://github.com/fred-wang/TeXZilla/) (Javascript Unicode LaTeX-to-MathML конвертер), который предназначен для использования во многих сценариях, описанных здесь. Конечно, этот список ни в коем случае не является исчерпывающим и вам предлагается проверить [W3C MathML software list](https://www.w3.org/Math/Software/), где вы можете найти некоторые другие инструменты.

Заметим, что MathML хорошо интегрирован в HTML5. В частности, вы можете использовать обычные Web-инструменты, такие как CSS, DOM, Javascript или SVG. Данная тема выходит за рамки этого документа, но любой, у кого есть базовые знания Web-языков, сможет легко совместить эти инструменты с MathML. Ознакомьтесь с [нашими примерами](/ru/docs/Mozilla/MathML_Project#Sample_MathML_Documents) и [справочными данными по MathML](/ru/docs/Web/MathML) для получения более подробной информации.

## Использование MathML

#### MathML на страницах HTML

Вы можете использовать Presentation MathML внутри документов HTML5:

```html
<!doctype html>
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

Content MathML не поддерживается браузерами. Рекомендуется преобразовать ваш макет из Content MathML в Presentation MathML перед его публикацией, например, с помощью таблицы стилей [ctop.xsl](https://code.google.com/p/web-xslt/source/browse/trunk/#trunk/ctop) . Инструменты, упомянутые на этой странице, генерируют Presentation MathML.

#### Варианты для браузеров без поддержки MathML

К сожалению, некоторые браузеры не могут отображать выражения MathML или имеют ограниченную поддержку. Следовательно, вам нужно будет использовать полифил MathML, чтобы обеспечить некоторый резервный рендеринг. Если вам нужны только базовые математические конструкции, такие как те, которые используются в этой MDN wiki, тогда небольшой таблицы стилей [mathml.css](https://github.com/fred-wang/mathml.css) возможно будет достаточно. Для её использования, просто вставьте одну строку в заголовок вашего документа:

```html
<script src="http://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Если вам нужны более сложные конструкции, тогда вы можете вместо этого использовать более содержательную библиотеку [MathJax](https://www.mathjax.org) как полифил MathML:

```html
<script src="http://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

Обратите внимание, что эти два скрипта распознают элементы [mspace](/ru/docs/Web/MathML/Element/mspace) или [mpadded](/ru/docs/Web/MathML/Element/mpadded) (см. Таблицу совместимости браузера на этих страницах). Существует также подобный скрипт, отображающий предупреждение в верхней части страницы для браузеров без хорошей поддержки MathML и позволяющий пользователям выбрать один из вариантов действий:

```html
<script src="http://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

Если вы не хотите использовать эту ссылку на GitHub, но вместо этого хотите интегрировать эти полифилы или нечто другое в свой проект, тогда вам может понадобиться скрипт, проверяющий уровень поддержки MathML. Например, следующая функция проверяет поддержку MathML путём тестирования элемента mspace (вы можете заменить `mspace` на `mpadded`):

```js
function hasMathMLSupport() {
  var div = document.createElement("div"),
    box;
  div.innerHTML = "<math><mspace height='23px' width='77px'/></math>";
  document.body.appendChild(div);
  box = div.firstChild.firstChild.getBoundingClientRect();
  document.body.removeChild(div);
  return Math.abs(box.height - 23) <= 1 && Math.abs(box.width - 77) <= 1;
}
```

В качестве альтернативы, следующий анализ строки UA позволит определить движок рендеринга с родной поддержкой MathML (Gecko и WebKit). Обратите внимание, что анализ строки UA является не самым надёжным методом и может сбоить от версии к версии:

```js
var ua = navigator.userAgent;
var isGecko =
  ua.indexOf("Gecko") > -1 &&
  ua.indexOf("KHTML") === -1 &&
  ua.indexOf("Trident") === -1;
var isWebKit = ua.indexOf("AppleWebKit") > -1 && ua.indexOf("Chrome") === -1;
```

#### Математические шрифты

Для того, чтобы получить хорошую разметку или обеспечить нужный стиль, важно иметь математические шрифты. Всегда полезно обеспечить ссылку на [инструкцию по шрифтам MDN](/ru/docs/Mozilla/MathML_Project/Fonts), чтобы ваши посетители могли проверить - установлены ли соответствующие шрифты в их системе. Хорошо также, если будет создана резервная копия веб-шрифтов.

До Gecko 31.0 было утомительно устанавливать математические шрифты (смотрите [инструкцию по установке шрифтов для Mozilla 2.0](/ru/docs/Mozilla/MathML_Project/FontsMozilla2.0#MathML_Font_Selection_with_CSS)). Для Gecko 31.0 это намного проще и совместимо со всеми движками Web рендеринга с поддержкой MathML. Например, здесь представлена минимальная таблица стилей для использования шрифта Latin Modern для текста и шрифта Latin Modern Math для математических выражений:

```css
@namespace url("http://www.w3.org/1999/xhtml");
@namespace m url("http://www.w3.org/1998/Math/MathML");

body,
m|mtext {
  font-family: Latin Modern;
}
m|math {
  font-family: Latin Modern Math;
}
```

Затем вы можете использовать правило [@font-face](/ru/docs/Web/CSS/@font-face), как обычно, для обеспечения выбора WOFF для Latin Modern и Latin Modern Math. Смотрите [репозиторий GitHub с WOFF шрифтами и примерами таблиц стилей CSS](https://github.com/fred-wang/MathFonts) для использования на вашем Web-сайте, а также этот [ресурс с тестами](http://fred-wang.github.io/MathFonts/).

#### MathML в документах XML (XHTML, EPUB, и т.д.)

Если по какой-то причине вам нужно использовать MathML в документах XML, обязательно выполняйте обычные требования: хорошо сформированный документ, использование правильного MIME-типа, пространство имён MathML `"http://www.w3.org/1998/Math/MathML"` с корневым элементом `<math>`. Например, версия XHTML предыдущего примера выглядит так:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN"
  "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <title>XHTML+MathML Example</title>
</head>
<body>

<h1>Пример XHTML+MathML</h1>

  <p>
    Квадратный корень из двух:
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <msqrt>
        <mn>2</mn>
      </msqrt>
    </math>
  </p>

</body>
</html>
```

#### MathML в клиентах email и клиентах обмена мгновенными сообщениями

Современные почтовые клиенты могут посылать и получать электронные сообщения в формате HTML5, то есть в них можно использовать выражения MathML. Обязательно включите опции "отправить как HTML" и "просмотреть как HTML". В Thunderbird вы можете использовать команду "Вставить HTML", чтобы вставить код HTML + MathML. [MathBird](http://disruptive-innovations.com/zoo/MathBird/) - удобное дополнение для Thunderbird для вставки таких выражений MathML с использованием синтаксиса ввода AsciiMath. Кроме того, поле ввода LaTeX-to-MathML также было интегрировано в [SeaMonkey](https://www.seamonkey-project.org/) с версии 2.28 и в [Thunderbird](https://www.mozilla.org/thunderbird/) с версии 31. С другой стороны, обработка кода MathML и качество рендеринга MathML [зависит от почтового клиента](http://www.maths-informatique-jeux.com/blog/frederic/?post/2012/11/14/Writing-mathematics-in-emails#c121). Даже если ваш браузер поддерживает MathML, ваша электронная почта может помешать вам отправить или получить сообщение с MathML внутри.

Клиенты мгновенного обмена сообщениями на базе Gecko могут интегрировать конвертер на основе Javascript, преобразующий текст в код MathML (см. ниже), и отображать выражения MathML, созданные из обычного текста мгновенных сообщений. Например, есть [дополнение Instantbird](https://addons.instantbird.org/en-US/instantbird/addon/340), которое обрабатывает выражения LaTeX.

## Конвертация из простого синтаксиса

Для генерации HTML-страниц существует множество простых синтаксических систем (например, wiki или синтаксисы разметки). То же самое верно для MathML: например, синтаксисы ASCII, используемые в калькуляторах, или более мощный язык LaTeX очень популярны среди научного сообщества. В этом разделе мы представляем некоторые из таких инструментов для преобразования из простого синтаксиса в MathML.

- плюсы:

  - Для написания математических выражений может потребоваться только стандартный текстовый редактор.
  - Доступны многие инструменты, некоторые из которых совместимы с классическим рабочим процессом LaTeX-to-pdf.
  - Это даёт доступ к расширенным возможностям макросов, подобных макросам LaTeX.

- минусы:

  - Это может быть труднее в использовании: люди должны изучить синтаксис, опечатки в коде могут легко привести к ошибкам парсинга или рендеринга и т.д.
  - Интерфейс не является дружественным для пользователя: есть только редактор кода без немедленного отображения математического выражения.
  - Ни один из синтаксисов не был стандартизирован, что затрудняет кросс-совместимость между конвертерами. Даже популярный язык LaTeX продолжает пополняться новыми пакетами.

### Конвертация на стороне клиента

В Web-среде наиболее очевидным методом преобразования простого синтаксиса в дерево DOM является использование Javascript и, конечно же, для выполнения этой задачи было разработано множество библиотек.

- плюсы:

  - Очень простая настройка: необходимо только загрузить несколько файлов Javascript и CSS и/или добавить ссылки link в заголовок документа.
  - Это чистое Web-решение: все делается браузерами, и никакие другие программы не должны устанавливаться или компилироваться.

- минусы:

  - Это не будет работать, если у пользователя отключён Javascript.
  - Код MathML не поддерживается Web-сканерами (например, средствами математического поиска или новостными агрегаторами). В частности, ваш контент не будет отображаться правильно на Planet.
  - Конвертация должна выполняться при каждой загрузке страницы, может быть медленной и может конфликтовать с парсингом HTML (например, "<" для тегов или "$" для денежных сумм)
  - Возможно вам понадобится синхронизировать Javascript-конвертер с другими программами Javascript на вашей странице.

[TeXZilla](https://github.com/fred-wang/TeXZilla) имеет пользовательский элемент [\<x-tex>](https://github.com/fred-wang/x-tex) который может использоваться для записи таких вещей, как

```
<x-tex>\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1</x-tex>
```

и автоматически преобразуется в MathML. Это все ещё в процессе разработки и может быть улучшено в будущем благодаря Web-компонентам и DOM. Кроме того, вы можете использовать более традиционный [Javascript парсинг выражений в процессе загрузки](https://github.com/fred-wang/TeXZilla/wiki/Advanced-Usages#parsing-tex-expressions-in-your-web-page) как это используют и все другие инструменты, описанные в этом разделе.

Одним из простых инструментов конвертации на стороне клиента является [ASCIIMathML](http://www1.chapman.edu/~jipsen/mathml/asciimath.html). Просто загрузите скрипт [ASCIIMathML.js](https://mathcs.chapman.edu/~jipsen/mathml/ASCIIMathML.js) и скопируйте его на ваш Web-сайт. Затем на ваших веб-страницах добавьте тег `<script>` для загрузки ASCIIMathML и математические выражения, выделенные символом `` ` `` (знак акцента) будут автоматически обработаны и преобразованы в MathML:

```html
<html>
  <head>
    ...
    <script type="text/javascript" src="ASCIIMathML.js"></script>
    ...
  </head>
  <body>
    ...
    <p>blah blah `x^2 + y^2 = r^2` blah ... ...</p>
  </body>
</html>
```

[LaTeXMathML](https://math.etsu.edu/LaTeXMathML/) - это похожий скрипт, который позволяет анализировать больше команд LaTeX. Установка похожа: скопируйте [LaTeXMathML.js](https://math.etsu.edu/LaTeXMathML/LaTeXMathML.js) и [LaTeXMathML.standardarticle.css](https://math.etsu.edu/LaTeXMathML/LaTeXMathML.standardarticle.css), добавьте ссылки в заголовок вашего документа, а содержимое LaTeX вашей веб-страницы, помеченное классом "LaTeX", будет автоматически проанализировано и преобразовано в HTML+MathML:

```html
<head>
  ...
  <script type="text/javascript" src="LaTeXMathML.js"></script>
  <link
    rel="stylesheet"
    type="text/css"
    href="LaTeXMathML.standardarticle.css" />
  ...
</head>

<body>
  ...

  <div class="LaTeX">
    \documentclass[12pt]{article} \begin{document} \title{LaTeXML Example}
    \maketitle \begin{abstract} This is a sample LaTeXML document.
    \end{abstract} \section{First Section} $$ \sum_{n=1}^{+\infty} \frac{1}{n^2}
    = \frac{\pi^2}{6} $$ \end{document}
  </div>
  ...
</body>
```

[jqMath](https://mathscribe.com/author/jqmath.html) - это ещё один скрипт для парсинга простого LaTeX-подобного синтаксиса, который также принимает не-ASCII символы, такие как `√{∑↙{n=1}↖{+∞} 6/n^2} = π` , чтобы написать <math><mrow><msqrt><mrow class="ma-repel-adj"><munderover><mo>∑</mo> <mrow><mi>n</mi> <mo>=</mo> <mn>1</mn> </mrow><mrow><mo>+</mo> <mi>∞</mi> </mrow></munderover><mfrac><mn>6</mn> <msup><mi>n</mi> <mn>2</mn> </msup></mfrac></mrow></msqrt><mo>=</mo> <mi>π</mi> </mrow></math>. Установка похожа: загрузите и скопируйте соответствующие файлы [Javascript и CSS files](https://mathscribe.com/downloads/mathscribe-unix-0.4.0.zip) на ваш Web сайт и сделайте ссылку на них в заголовке вашей страницы (смотрите файл `COPY-ME.html` из архива zip в качестве примера). Одним из преимуществ jqMath над предыдущими сценариями является то, что он автоматически добавит некоторые простые правила CSS для математической разметки и сделает формулы доступными для браузеров с ограниченной поддержкой MathML.

### Программы командной строки

Альтернативный способ - парсить простой синтаксис перед публикацией ваших Web-страниц. В этом случае вы используете программы командной строки для создания и публикации этих статических страниц на своём сервере.

- плюсы:

  - Вы получаете статические Web-страницы: исходный текст LaTeX не нужно парсить при каждой загрузке страницы, код MathML доступен Web-сканерам, и вы можете легко размещать их на любом Web-сервере.
  - Бинарные программы могут работать быстрее, чем Javascript-программы, и могут быть более содержательными, то есть иметь более полную поддержку LaTeX или генерировать другие форматы, такие как EPUB.
  - Вы можете поддерживать совместимость с другими инструментами для генерации pdf, то есть вы можете использовать один и тот же исходник .tex как для Latex, так и для Latexml.

- минусы:

  - Это требует установки программ на вашем компьютере, что может быть немного сложнее или они могут быть доступны не для всех платформ.
  - Вы должны запускать программы на своём компьютере и иметь какой-то рабочий процесс для получения веб-страниц в конце; это может быть немного утомительно.
  - Двоичные программы не подходят для их интеграции в расширение Mozilla или приложение XUL.

[TeXZilla](https://github.com/fred-wang/TeXZilla) может использоваться [из командной строки](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) и будет, по существу, иметь ту же поддержку, что и itex2MML, описанный ниже. Однако поведение фильтра потока ещё не реализовано.

Если вы хотите просто парсить простые математические выражения LaTeX, вы можете попробовать такие инструменты, как [itex2MML](https://golem.ph.utexas.edu/~distler/blog/itex2MML.html) или [Blahtex](http://gva.noekeon.org/blahtexml/). Последнее часто доступно в дистрибутивах Linux. Давайте рассмотрим первое, которое изначально было написано Полом Гартсайдом в начале проекта Mozilla MathML и с тех пор поддерживается Жаком Дистлером. Это небольшой фильтр потока, написанный на C/C++ и сгенерированный с помощью flex и bison; в частности, оно очень быстрое. Установите flex/bison, а также классический компилятор и сгенерируйте инструменты. В Unix вы можете загрузить itex2MML, скомпилировать и установить его:

```bash
wget http://golem.ph.utexas.edu/~distler/blog/files/itexToMML.tar.gz; \
tar -xzf itexToMML.tar.gz; \
cd itex2MML/itex-src;
make
sudo make install
```

Теперь предположим, что у вас есть HTML страница с фрагментами TeX, разделёнными долларами:

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

Затем, чтобы сгенерировать HTML страницу из input.html, с заменой выражений TeX на выражения MathML, просто выполните

```
cat input.html | itex2MML > output.html
```

Существуют ещё более содержательные инструменты для преобразования произвольных документов LaTeX в HTML+MathML. Например, [TeX4ht](https://www.tug.org/tex4ht/) часто включается в дистрибутивы TeX и имеет возможность использовать MathML вместо изображений PNG. Эта команда создаст XHTML+MathML документ foo.xml из LaTeX исходника foo.tex:

```
   mk4ht mzlatex foo.tex # Linux/Mac platforms
   mzlatex foo.tex       # Windows platform
```

Заметим, что [tex4ebook](https://github.com/michal-h21/tex4ebook) опирается на TeX4ht для создания документов EPUB.

[LaTeXML](https://dlmf.nist.gov/LaTeXML/) - это ещё один инструмент, который может создавать документы HTML5 и EPUB. Пользователи Windows могут посмотреть это [видео-руководство](https://www.youtube.com/watch?v=Dg881w2e-lI). Для LaTeX файла foo.tex, вы можете использовать следующие простые команды:

```
  latexmlc --dest foo.html foo.tex # Создаёт HTML5 документ foo.html
  latexmlc --dest foo.epub foo.tex # Создаёт EPUB документ foo.epub
```

В случаях с браузерами без поддержки MathML, вы можете использовать параметр `--javascript`, чтобы сообщить LaTeXML о включении одного из [дополнительных скриптов](#fallback_for_browsers_without_mathml_support):

```html
latexmlc --dest foo.html
--javascript=http://fred-wang.github.io/mathml.css/mspace.js foo.tex # Вариант с
добавлением CSS latexmlc --dest foo.html
--javascript=http://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex #
Вариант с добавлением MathJax
```

Если ваш документ LaTeX - большой, вы можете разбить его на несколько небольших страниц, а не размещать все на одной большой странице. Например, это разделит страницы на уровне `\section`:

```
  latexmlc --dest foo.html --splitat=section foo.tex
```

### Конвертация на стороне сервера

- плюсы:

  - Преобразование выполняется на стороне сервера и полученный текст MathML можно кешировать, что является более эффективным и чистым, чем преобразование на стороне клиента.

- минусы:

  - Это может быть немного сложнее настроить, так как вам нужны права администратора на вашем сервере.

[TeXZilla](https://github.com/fred-wang/TeXZilla), [LaTeXML](https://dlmf.nist.gov/LaTeXML/) и [Mathoid](https://github.com/gwicke/mathoid) могут использоваться для выполнения преобразования LaTeX-to-MathML на стороне сервера. [Instiki](http://instiki.org/show/HomePage) и [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) - это два wiki движка, которые поддерживают преобразование LaTeX-to-MathML.

## Графический интерфейс

### Поле ввода

[TeXZilla](https://github.com/fred-wang/TeXZilla) имеет несколько интерфейсов, включая плагин [CKEditor](https://ckeditor.com/addon/texzilla), используемый в MDN, [онлайн демо](http://fred-wang.github.io/TeXZilla/) и [дополнение Firefox](https://addons.mozilla.org/en-US/firefox/addon/texzilla/) или [FirefoxOS Webapp](https://marketplace.firefox.com/app/texzilla-1/). Он также был интегрирован в [SeaMonkey](https://www.seamonkey-project.org/) с версии 2.28 и в [Thunderbird](https://www.mozilla.org/thunderbird/) с версии 31. [Abiword](http://abisource.org/) содержит небольшой редактор уравнений, основанный на itex2MML. Наконец, [Bluegriffon](http://www.bluegriffon.com/) имеет дополнение для вставки формул MathML в ваш документ, используя синтаксис, подобный ASCII/LaTeX.

![BlueGriffon](mathml-shot1.png)

### WYSIYWG редакторы

[Firemath](https://www.firemath.info/) - это расширение для Firefox, которое является WYSIWYG редактором MathML. Предварительный просмотр формулы осуществляется с помощью механизма рендеринга Mozilla. Сгенерированный код MathML доступен в нижней части окна. Используйте текстовое поле для ввода простых элементов (токенов) и кнопки для создания более сложных конструкций. После того, как вы завершите редактирование, вы сможете сохранить свой документ в виде страницы XHTML.

[LyX](https://www.lyx.org/) - это графический LaTeX редактор, который имеет встроенную поддержку экспорта XHTML+MathML и может быть сконфигурирован на использование конвертеров вида LaTeX-to-(X)HTML. Например, вы можете настроить его для экспорта [LaTeXML HTML5/EPUB](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx).

В [OpenOffice](https://www.openoffice.org/) и [LibreOffice](https://libreoffice.org/) есть редакторы уравнений (File → New → Formula). Это наполовину WYSIWYG: с помощью панели уравнений/клавиатуры вы вводите исходный текст для формулы и предосмотр полученной формулы соответственно обновляется. Редактор использует свой собственный синтаксис "StarMath" для исходных текстов, но при сохранении документа генерируется также и соответствующий код MathML. Для получения кода MathML, сохраните документ как mml и откройте его любым текстовым редактором. Как вариант, вы можете разархивировать файл odf (на самом деле zip-архив) и открыть xml файл `content.xml`.

![Open Office Math](openoffice.png)

[Amaya](https://www.w3.org/Amaya/) - это Web-редактор от W3C, способный обрабатывать MathML внутри документов XHTML. Используйте элементы из Elements и панель Special Chars для создания различных продвинутых математических конструкций. Простой текст, такой как `a+2`, автоматически парсится и создаётся соответствующая разметка MathML. Как только вы закончите, вы сможете напрямую сохранить свою страницу XHTML и открыть её в Mozilla.

## Распознавание видимых символов и рукописного текста

[Inftyreader](https://www.inftyreader.org/) способен выполнять некоторое распознавание видимых символов, включающее перевод математических уравнений в MathML. Другие инструменты могут выполнять распознавание рукописного ввода, например, [Windows Math Input Panel](<https://msdn.microsoft.com/en-us/library/windows/desktop/dd371698(v=vs.85).aspx>) или онлайн конвертер [Web Equation](https://webdemo.myscript.com/views/math.html).

### Информация об исходном документе

- Автор(ы): Frédéric Wang
- Другие участники: Florian Scholz
- Информация об авторских правах (Copyright): Авторские права на данный контент (© 2010) принадлежат отдельным участникам проекта mozilla.org; Контент доступен в соответствии с лицензией Creative Commons | [Подробности](https://www.mozilla.org/foundation/licensing/website-content.html).
