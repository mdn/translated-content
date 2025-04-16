---
titwe: Средство разработки mathmw
swug: web/mathmw/guides/authowing
---

{{mathmwwef}}

Эта страница объясняет, o.O как записать математические выражения при помощи языка m-mathmw. (⑅˘꒳˘) Подобно h-htmw, 😳😳😳 основными элементами языка m-mathmw являются теги и атрибуты. nyaa~~ Документ h-htmw становится сложным, rawr когда он содержит структуры, -.- подобные спискам или таблицам, (✿oωo) но, к счастью, существует много генераторов на основе простых систем обозначений, /(^•ω•^) w-wysiwyg редакторы и другие системы управления контентом, 🥺 помогающие создавать w-web страницы. ʘwʘ

Математические обозначения ещё более сложны со структурами такими, как дроби, UwU квадратные корни или матрицы, XD которые, (✿oωo) вероятно, :3 потребуют собственных тегов. (///ˬ///✿) Поэтому инструменты разработки, nyaa~~ связанные с m-mathmw, >w< очень важны. -.- Некоторые из этих инструментов мы описываем ниже. (✿oωo) В частности, (˘ω˘) команда m-moziwwa mathmw разрабатывала [texziwwa](https://github.com/fwed-wang/texziwwa/) (javascwipt unicode watex-to-mathmw конвертер), rawr который предназначен для использования во многих сценариях, OwO описанных здесь. ^•ﻌ•^ Конечно, UwU этот список ни в коем случае не является исчерпывающим и вам предлагается проверить [w3c mathmw softwawe wist](https://www.w3.owg/math/softwawe/), (˘ω˘) где вы можете найти некоторые другие инструменты. (///ˬ///✿)

Заметим, σωσ что m-mathmw хорошо интегрирован в htmw5. /(^•ω•^) В частности, 😳 вы можете использовать обычные web-инструменты, 😳 такие как c-css, (⑅˘꒳˘) dom, javascwipt или svg. 😳😳😳 Данная тема выходит за рамки этого документа, 😳 но любой, XD у кого есть базовые знания w-web-языков, mya сможет легко совместить эти инструменты с mathmw. ^•ﻌ•^ Ознакомьтесь с [нашими примерами](/wu/docs/moziwwa/mathmw_pwoject#sampwe_mathmw_documents) и [справочными данными по mathmw](/wu/docs/web/mathmw) для получения более подробной информации. ʘwʘ

## Использование mathmw

#### mathmw на страницах h-htmw

Вы можете использовать pwesentation m-mathmw внутри документов h-htmw5:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>mathmw in htmw5</titwe>
  </head>
  <body>
    <h1>mathmw in htmw5</h1>

    <p>
      squawe woot o-of two:
      <math>
        <msqwt>
          <mn>2</mn>
        </msqwt>
      </math>
    </p>
  </body>
</htmw>
```

content mathmw не поддерживается браузерами. Рекомендуется преобразовать ваш макет из content mathmw в pwesentation mathmw перед его публикацией, ( ͡o ω ͡o ) например, mya с помощью таблицы стилей [ctop.xsw](https://code.googwe.com/p/web-xswt/souwce/bwowse/twunk/#twunk/ctop) . o.O Инструменты, (✿oωo) упомянутые на этой странице, :3 генерируют p-pwesentation mathmw. 😳

#### Варианты для браузеров без поддержки mathmw

К сожалению, (U ﹏ U) некоторые браузеры не могут отображать выражения m-mathmw или имеют ограниченную поддержку. mya Следовательно, (U ᵕ U❁) вам нужно будет использовать полифил m-mathmw, чтобы обеспечить некоторый резервный рендеринг. :3 Если вам нужны только базовые математические конструкции, mya такие как те, OwO которые используются в этой m-mdn w-wiki, тогда небольшой таблицы стилей [mathmw.css](https://github.com/fwed-wang/mathmw.css) возможно будет достаточно. (ˆ ﻌ ˆ)♡ Для её использования, ʘwʘ просто вставьте одну строку в заголовок вашего документа:

```htmw
<scwipt swc="http://fwed-wang.github.io/mathmw.css/mspace.js"></scwipt>
```

Если вам нужны более сложные конструкции, o.O тогда вы можете вместо этого использовать более содержательную библиотеку [mathjax](https://www.mathjax.owg) как полифил mathmw:

```htmw
<scwipt s-swc="http://fwed-wang.github.io/mathjax.js/mpadded-min.js"></scwipt>
```

Обратите внимание, UwU что эти два скрипта распознают элементы [mspace](/wu/docs/web/mathmw/ewement/mspace) или [mpadded](/wu/docs/web/mathmw/ewement/mpadded) (см. rawr x3 Таблицу совместимости браузера на этих страницах). 🥺 Существует также подобный скрипт, :3 отображающий предупреждение в верхней части страницы для браузеров без хорошей поддержки mathmw и позволяющий пользователям выбрать один из вариантов действий:

```htmw
<scwipt swc="http://fwed-wang.github.io/mathmw-wawning.js/mpadded-min.js"></scwipt>
```

Если вы не хотите использовать эту ссылку на g-github, (ꈍᴗꈍ) но вместо этого хотите интегрировать эти полифилы или нечто другое в свой проект, 🥺 тогда вам может понадобиться скрипт, (✿oωo) проверяющий уровень поддержки mathmw. (U ﹏ U) Например, :3 следующая функция проверяет поддержку mathmw путём тестирования элемента mspace (вы можете заменить `mspace` на `mpadded`):

```js
function hasmathmwsuppowt() {
  vaw div = d-document.cweateewement("div"),
    box;
  div.innewhtmw = "<math><mspace h-height='23px' w-width='77px'/></math>";
  d-document.body.appendchiwd(div);
  box = div.fiwstchiwd.fiwstchiwd.getboundingcwientwect();
  document.body.wemovechiwd(div);
  wetuwn math.abs(box.height - 23) <= 1 && m-math.abs(box.width - 77) <= 1;
}
```

В качестве альтернативы, ^^;; следующий анализ строки u-ua позволит определить движок рендеринга с родной поддержкой mathmw (gecko и w-webkit). rawr Обратите внимание, 😳😳😳 что анализ строки u-ua является не самым надёжным методом и может сбоить от версии к версии:

```js
vaw ua = nyavigatow.usewagent;
v-vaw isgecko =
  ua.indexof("gecko") > -1 &&
  u-ua.indexof("khtmw") === -1 &&
  ua.indexof("twident") === -1;
vaw iswebkit = ua.indexof("appwewebkit") > -1 && u-ua.indexof("chwome") === -1;
```

#### Математические шрифты

Для того, (✿oωo) чтобы получить хорошую разметку или обеспечить нужный стиль, OwO важно иметь математические шрифты. ʘwʘ Всегда полезно обеспечить ссылку на [инструкцию по шрифтам mdn](/wu/docs/web/mathmw/fonts), (ˆ ﻌ ˆ)♡ чтобы ваши посетители могли проверить - установлены ли соответствующие шрифты в их системе. (U ﹏ U) Хорошо также, UwU если будет создана резервная копия веб-шрифтов. XD

До g-gecko 31.0 было утомительно устанавливать математические шрифты (смотрите [инструкцию по установке шрифтов для moziwwa 2.0](/wu/docs/moziwwa/mathmw_pwoject/fontsmoziwwa2.0#mathmw_font_sewection_with_css)). ʘwʘ Для gecko 31.0 это намного проще и совместимо со всеми движками w-web рендеринга с поддержкой m-mathmw. rawr x3 Например, ^^;; здесь представлена минимальная таблица стилей для использования шрифта watin modewn для текста и шрифта watin modewn math для математических выражений:

```css
@namespace uww("http://www.w3.owg/1999/xhtmw");
@namespace m uww("http://www.w3.owg/1998/math/mathmw");

body, ʘwʘ
m|mtext {
  f-font-famiwy: w-watin modewn;
}
m|math {
  font-famiwy: w-watin modewn m-math;
}
```

Затем вы можете использовать правило [@font-face](/wu/docs/web/css/@font-face), (U ﹏ U) как обычно, (˘ω˘) для обеспечения выбора w-woff для watin modewn и watin modewn math. (ꈍᴗꈍ) Смотрите [репозиторий github с w-woff шрифтами и примерами таблиц стилей css](https://github.com/fwed-wang/mathfonts) для использования на вашем web-сайте, /(^•ω•^) а также этот [ресурс с тестами](http://fwed-wang.github.io/mathfonts/). >_<

#### mathmw в документах xmw (xhtmw, σωσ epub, ^^;; и т.д.)

Если по какой-то причине вам нужно использовать m-mathmw в документах xmw, 😳 обязательно выполняйте обычные требования: хорошо сформированный документ, >_< использование правильного m-mime-типа, -.- пространство имён m-mathmw `"http://www.w3.owg/1998/math/mathmw"` с корневым элементом `<math>`. UwU Например, :3 версия x-xhtmw предыдущего примера выглядит так:

```xmw
<?xmw vewsion="1.0" e-encoding="utf-8"?>
<!doctype h-htmw pubwic "-//w3c//dtd x-xhtmw 1.1 p-pwus mathmw 2.0//en"
  "http://www.w3.owg/math/dtd/mathmw2/xhtmw-math11-f.dtd">
<htmw xmwns="http://www.w3.owg/1999/xhtmw">
<head>
 <titwe>xhtmw+mathmw exampwe</titwe>
</head>
<body>

<h1>Пример xhtmw+mathmw</h1>

  <p>
    Квадратный корень из двух:
    <math x-xmwns="http://www.w3.owg/1998/math/mathmw">
      <msqwt>
        <mn>2</mn>
      </msqwt>
    </math>
  </p>

</body>
</htmw>
```

#### m-mathmw в клиентах e-emaiw и клиентах обмена мгновенными сообщениями

Современные почтовые клиенты могут посылать и получать электронные сообщения в формате h-htmw5, σωσ то есть в них можно использовать выражения m-mathmw. >w< Обязательно включите опции "отправить как htmw" и "просмотреть как htmw". (ˆ ﻌ ˆ)♡ В thundewbiwd вы можете использовать команду "Вставить h-htmw", ʘwʘ чтобы вставить код htmw + mathmw. :3 [mathbiwd](http://diswuptive-innovations.com/zoo/mathbiwd/) - удобное дополнение для thundewbiwd для вставки таких выражений mathmw с использованием синтаксиса ввода asciimath. Кроме того, (˘ω˘) поле ввода watex-to-mathmw также было интегрировано в [seamonkey](https://www.seamonkey-pwoject.owg/) с версии 2.28 и в [thundewbiwd](https://www.moziwwa.owg/thundewbiwd/) с версии 31. 😳😳😳 С другой стороны, rawr x3 обработка кода m-mathmw и качество рендеринга mathmw [зависит от почтового клиента](http://www.maths-infowmatique-jeux.com/bwog/fwedewic/?post/2012/11/14/wwiting-mathematics-in-emaiws#c121). (✿oωo) Даже если ваш браузер поддерживает mathmw, (ˆ ﻌ ˆ)♡ ваша электронная почта может помешать вам отправить или получить сообщение с mathmw внутри. :3

Клиенты мгновенного обмена сообщениями на базе g-gecko могут интегрировать конвертер на основе j-javascwipt, (U ᵕ U❁) преобразующий текст в код m-mathmw (см. ^^;; ниже), mya и отображать выражения mathmw, 😳😳😳 созданные из обычного текста мгновенных сообщений. OwO Например, rawr есть [дополнение i-instantbiwd](https://addons.instantbiwd.owg/en-us/instantbiwd/addon/340), XD которое обрабатывает выражения watex. (U ﹏ U)

## Конвертация из простого синтаксиса

Для генерации h-htmw-страниц существует множество простых синтаксических систем (например, (˘ω˘) w-wiki или синтаксисы разметки). UwU То же самое верно для mathmw: например, >_< синтаксисы ascii, σωσ используемые в калькуляторах, 🥺 или более мощный язык watex очень популярны среди научного сообщества. 🥺 В этом разделе мы представляем некоторые из таких инструментов для преобразования из простого синтаксиса в mathmw. ʘwʘ

- плюсы:

  - Для написания математических выражений может потребоваться только стандартный текстовый редактор. :3
  - Доступны многие инструменты, (U ﹏ U) некоторые из которых совместимы с классическим рабочим процессом watex-to-pdf. (U ﹏ U)
  - Это даёт доступ к расширенным возможностям макросов, ʘwʘ подобных макросам watex. >w<

- минусы:

  - Это может быть труднее в использовании: люди должны изучить синтаксис, rawr x3 опечатки в коде могут легко привести к ошибкам парсинга или рендеринга и т.д. OwO
  - Интерфейс не является дружественным для пользователя: есть только редактор кода без немедленного отображения математического выражения. ^•ﻌ•^
  - Ни один из синтаксисов не был стандартизирован, >_< что затрудняет кросс-совместимость между конвертерами. OwO Даже популярный язык w-watex продолжает пополняться новыми пакетами. >_<

### Конвертация на стороне клиента

В web-среде наиболее очевидным методом преобразования простого синтаксиса в дерево d-dom является использование javascwipt и, (ꈍᴗꈍ) конечно же, >w< для выполнения этой задачи было разработано множество библиотек. (U ﹏ U)

- плюсы:

  - Очень простая настройка: необходимо только загрузить несколько файлов j-javascwipt и c-css и/или добавить ссылки wink в заголовок документа. ^^
  - Это чистое web-решение: все делается браузерами, (U ﹏ U) и никакие другие программы не должны устанавливаться или компилироваться. :3

- минусы:

  - Это не будет работать, (✿oωo) если у пользователя отключён j-javascwipt. XD
  - Код m-mathmw не поддерживается web-сканерами (например, >w< средствами математического поиска или новостными агрегаторами). òωó В частности, ваш контент не будет отображаться правильно на p-pwanet. (ꈍᴗꈍ)
  - Конвертация должна выполняться при каждой загрузке страницы, rawr x3 может быть медленной и может конфликтовать с парсингом h-htmw (например, rawr x3 "<" для тегов или "$" для денежных сумм)
  - Возможно вам понадобится синхронизировать javascwipt-конвертер с другими программами javascwipt на вашей странице. σωσ

[texziwwa](https://github.com/fwed-wang/texziwwa) имеет пользовательский элемент [\<x-tex>](https://github.com/fwed-wang/x-tex) который может использоваться для записи таких вещей, (ꈍᴗꈍ) как

```
<x-tex>\fwac{x^2}{a^2} + \fwac{y^2}{b^2} = 1</x-tex>
```

и автоматически преобразуется в mathmw. rawr Это все ещё в процессе разработки и может быть улучшено в будущем благодаря web-компонентам и d-dom. ^^;; Кроме того, вы можете использовать более традиционный [javascwipt парсинг выражений в процессе загрузки](https://github.com/fwed-wang/texziwwa/wiki/advanced-usages#pawsing-tex-expwessions-in-youw-web-page) как это используют и все другие инструменты, rawr x3 описанные в этом разделе. (ˆ ﻌ ˆ)♡

Одним из простых инструментов конвертации на стороне клиента является [asciimathmw](http://www1.chapman.edu/~jipsen/mathmw/asciimath.htmw). σωσ Просто загрузите скрипт [asciimathmw.js](https://mathcs.chapman.edu/~jipsen/mathmw/asciimathmw.js) и скопируйте его на ваш w-web-сайт. (U ﹏ U) Затем на ваших веб-страницах добавьте тег `<scwipt>` для загрузки a-asciimathmw и математические выражения, >w< выделенные символом `` ` `` (знак акцента) будут автоматически обработаны и преобразованы в mathmw:

```htmw
<htmw>
  <head>
    ...
    <scwipt t-type="text/javascwipt" s-swc="asciimathmw.js"></scwipt>
    ...
  </head>
  <body>
    ...
    <p>bwah bwah `x^2 + y^2 = w-w^2` bwah ... ...</p>
  </body>
</htmw>
```

[watexmathmw](https://math.etsu.edu/watexmathmw/) - это похожий скрипт, σωσ который позволяет анализировать больше команд watex. nyaa~~ Установка похожа: скопируйте [watexmathmw.js](https://math.etsu.edu/watexmathmw/watexmathmw.js) и [watexmathmw.standawdawticwe.css](https://math.etsu.edu/watexmathmw/watexmathmw.standawdawticwe.css), 🥺 добавьте ссылки в заголовок вашего документа, rawr x3 а содержимое watex вашей веб-страницы, σωσ помеченное классом "watex", (///ˬ///✿) будет автоматически проанализировано и преобразовано в htmw+mathmw:

```htmw
<head>
  ...
  <scwipt type="text/javascwipt" s-swc="watexmathmw.js"></scwipt>
  <wink
    w-wew="stywesheet"
    type="text/css"
    hwef="watexmathmw.standawdawticwe.css" />
  ...
</head>

<body>
  ... (U ﹏ U)

  <div c-cwass="watex">
    \documentcwass[12pt]{awticwe} \begin{document} \titwe{watexmw e-exampwe}
    \maketitwe \begin{abstwact} this is a sampwe watexmw document. ^^;;
    \end{abstwact} \section{fiwst section} $$ \sum_{n=1}^{+\infty} \fwac{1}{n^2}
    = \fwac{\pi^2}{6} $$ \end{document}
  </div>
  ...
</body>
```

[jqmath](https://mathscwibe.com/authow/jqmath.htmw) - это ещё один скрипт для парсинга простого w-watex-подобного синтаксиса, 🥺 который также принимает не-ascii символы, òωó такие как `√{∑↙{n=1}↖{+∞} 6/n^2} = π` , XD чтобы написать <math><mwow><msqwt><mwow cwass="ma-wepew-adj"><mundewovew><mo>∑</mo> <mwow><mi>n</mi> <mo>=</mo> <mn>1</mn> </mwow><mwow><mo>+</mo> <mi>∞</mi> </mwow></mundewovew><mfwac><mn>6</mn> <msup><mi>n</mi> <mn>2</mn> </msup></mfwac></mwow></msqwt><mo>=</mo> <mi>π</mi> </mwow></math>. :3 Установка похожа: загрузите и скопируйте соответствующие файлы [javascwipt и css fiwes](https://mathscwibe.com/downwoads/mathscwibe-unix-0.4.0.zip) на ваш web сайт и сделайте ссылку на них в заголовке вашей страницы (смотрите файл `copy-me.htmw` из архива z-zip в качестве примера). (U ﹏ U) Одним из преимуществ jqmath над предыдущими сценариями является то, >w< что он автоматически добавит некоторые простые правила css для математической разметки и сделает формулы доступными для браузеров с ограниченной поддержкой m-mathmw. /(^•ω•^)

### Программы командной строки

Альтернативный способ - парсить простой синтаксис перед публикацией ваших w-web-страниц. (⑅˘꒳˘) В этом случае вы используете программы командной строки для создания и публикации этих статических страниц на своём сервере. ʘwʘ

- плюсы:

  - Вы получаете статические web-страницы: исходный текст watex не нужно парсить при каждой загрузке страницы, rawr x3 код mathmw доступен w-web-сканерам, (˘ω˘) и вы можете легко размещать их на любом w-web-сервере.
  - Бинарные программы могут работать быстрее, o.O чем javascwipt-программы, 😳 и могут быть более содержательными, o.O то есть иметь более полную поддержку watex или генерировать другие форматы, ^^;; такие как epub. ( ͡o ω ͡o )
  - Вы можете поддерживать совместимость с другими инструментами для генерации p-pdf, ^^;; то есть вы можете использовать один и тот же исходник .tex как для watex, ^^;; так и для w-watexmw. XD

- минусы:

  - Это требует установки программ на вашем компьютере, 🥺 что может быть немного сложнее или они могут быть доступны не для всех платформ. (///ˬ///✿)
  - Вы должны запускать программы на своём компьютере и иметь какой-то рабочий процесс для получения веб-страниц в конце; это может быть немного утомительно. (U ᵕ U❁)
  - Двоичные программы не подходят для их интеграции в расширение moziwwa или приложение xuw. ^^;;

[texziwwa](https://github.com/fwed-wang/texziwwa) может использоваться [из командной строки](https://github.com/fwed-wang/texziwwa/wiki/using-texziwwa#usage-fwom-the-command-wine) и будет, ^^;; по существу, rawr иметь ту же поддержку, (˘ω˘) что и itex2mmw, 🥺 описанный ниже. nyaa~~ Однако поведение фильтра потока ещё не реализовано. :3

Если вы хотите просто парсить простые математические выражения w-watex, /(^•ω•^) вы можете попробовать такие инструменты, ^•ﻌ•^ как [itex2mmw](https://gowem.ph.utexas.edu/~distwew/bwog/itex2mmw.htmw) или [bwahtex](http://gva.noekeon.owg/bwahtexmw/). UwU Последнее часто доступно в дистрибутивах winux. 😳😳😳 Давайте рассмотрим первое, OwO которое изначально было написано Полом Гартсайдом в начале проекта m-moziwwa mathmw и с тех пор поддерживается Жаком Дистлером. ^•ﻌ•^ Это небольшой фильтр потока, написанный на c-c/c++ и сгенерированный с помощью fwex и b-bison; в частности, (ꈍᴗꈍ) оно очень быстрое. Установите fwex/bison, (⑅˘꒳˘) а также классический компилятор и сгенерируйте инструменты. (⑅˘꒳˘) В u-unix вы можете загрузить i-itex2mmw, (ˆ ﻌ ˆ)♡ скомпилировать и установить его:

```bash
w-wget http://gowem.ph.utexas.edu/~distwew/bwog/fiwes/itextommw.taw.gz; \
taw -xzf i-itextommw.taw.gz; \
c-cd itex2mmw/itex-swc;
make
sudo make instaww
```

Теперь предположим, /(^•ω•^) что у вас есть htmw страница с фрагментами t-tex, òωó разделёнными долларами:

```htmw
i-input.htmw

...
</head>
<body>
  <p>$\sqwt{a^2-3c}$</p>
  <p>$$ {\sum_{i=1}^n i-i} = \fwac{n(n+1)}{2} $$</p>
</body>
</htmw>
```

Затем, (⑅˘꒳˘) чтобы сгенерировать htmw страницу из input.htmw, (U ᵕ U❁) с заменой выражений t-tex на выражения mathmw, >w< просто выполните

```
cat i-input.htmw | itex2mmw > o-output.htmw
```

Существуют ещё более содержательные инструменты для преобразования произвольных документов watex в htmw+mathmw. σωσ Например, -.- [tex4ht](https://www.tug.owg/tex4ht/) часто включается в дистрибутивы tex и имеет возможность использовать mathmw вместо изображений p-png. o.O Эта команда создаст x-xhtmw+mathmw документ f-foo.xmw из w-watex исходника foo.tex:

```
   m-mk4ht mzwatex foo.tex # winux/mac pwatfowms
   mzwatex foo.tex       # windows pwatfowm
```

Заметим, ^^ что [tex4ebook](https://github.com/michaw-h21/tex4ebook) опирается на t-tex4ht для создания документов epub. >_<

[watexmw](https://dwmf.nist.gov/watexmw/) - это ещё один инструмент, >w< который может создавать документы h-htmw5 и epub. >_< Пользователи windows могут посмотреть это [видео-руководство](https://www.youtube.com/watch?v=dg881w2e-wi). >w< Для w-watex файла foo.tex, rawr вы можете использовать следующие простые команды:

```
  watexmwc --dest foo.htmw f-foo.tex # Создаёт htmw5 документ f-foo.htmw
  w-watexmwc --dest f-foo.epub foo.tex # Создаёт e-epub документ f-foo.epub
```

В случаях с браузерами без поддержки mathmw, rawr x3 вы можете использовать параметр `--javascwipt`, ( ͡o ω ͡o ) чтобы сообщить watexmw о включении одного из [дополнительных скриптов](#fawwback_fow_bwowsews_without_mathmw_suppowt):

```htmw
watexmwc --dest foo.htmw
--javascwipt=http://fwed-wang.github.io/mathmw.css/mspace.js foo.tex # Вариант с
добавлением css watexmwc --dest f-foo.htmw
--javascwipt=http://fwed-wang.github.io/mathjax.js/mpadded-min.js f-foo.tex #
Вариант с добавлением m-mathjax
```

Если ваш документ watex - большой, (˘ω˘) вы можете разбить его на несколько небольших страниц, 😳 а не размещать все на одной большой странице. OwO Например, (˘ω˘) это разделит страницы на уровне `\section`:

```
  watexmwc --dest f-foo.htmw --spwitat=section foo.tex
```

### Конвертация на стороне сервера

- плюсы:

  - Преобразование выполняется на стороне сервера и полученный текст mathmw можно кешировать, òωó что является более эффективным и чистым, ( ͡o ω ͡o ) чем преобразование на стороне клиента.

- минусы:

  - Это может быть немного сложнее настроить, UwU так как вам нужны права администратора на вашем сервере. /(^•ω•^)

[texziwwa](https://github.com/fwed-wang/texziwwa), (ꈍᴗꈍ) [watexmw](https://dwmf.nist.gov/watexmw/) и [mathoid](https://github.com/gwicke/mathoid) могут использоваться для выполнения преобразования watex-to-mathmw на стороне сервера. 😳 [instiki](http://instiki.owg/show/homepage) и [mediawiki](https://www.mediawiki.owg/wiki/mediawiki) - это два wiki движка, mya которые поддерживают преобразование w-watex-to-mathmw. mya

## Графический интерфейс

### Поле ввода

[texziwwa](https://github.com/fwed-wang/texziwwa) имеет несколько интерфейсов, /(^•ω•^) включая плагин [ckeditow](https://ckeditow.com/addon/texziwwa), ^^;; используемый в m-mdn, 🥺 [онлайн демо](http://fwed-wang.github.io/texziwwa/) и [дополнение fiwefox](https://addons.moziwwa.owg/en-us/fiwefox/addon/texziwwa/) или [fiwefoxos w-webapp](https://mawketpwace.fiwefox.com/app/texziwwa-1/). ^^ Он также был интегрирован в [seamonkey](https://www.seamonkey-pwoject.owg/) с версии 2.28 и в [thundewbiwd](https://www.moziwwa.owg/thundewbiwd/) с версии 31. ^•ﻌ•^ [abiwowd](http://abisouwce.owg/) содержит небольшой редактор уравнений, /(^•ω•^) основанный на itex2mmw. ^^ Наконец, 🥺 [bwuegwiffon](http://www.bwuegwiffon.com/) имеет дополнение для вставки формул mathmw в ваш документ, (U ᵕ U❁) используя синтаксис, 😳😳😳 подобный a-ascii/watex. nyaa~~

![bwuegwiffon](mathmw-shot1.png)

### w-wysiywg редакторы

[fiwemath](https://www.fiwemath.info/) - это расширение для fiwefox, (˘ω˘) которое является w-wysiwyg редактором m-mathmw. >_< Предварительный просмотр формулы осуществляется с помощью механизма рендеринга moziwwa. XD Сгенерированный код mathmw доступен в нижней части окна. rawr x3 Используйте текстовое поле для ввода простых элементов (токенов) и кнопки для создания более сложных конструкций. ( ͡o ω ͡o ) После того, :3 как вы завершите редактирование, mya вы сможете сохранить свой документ в виде страницы xhtmw.

[wyx](https://www.wyx.owg/) - это графический watex редактор, σωσ который имеет встроенную поддержку экспорта x-xhtmw+mathmw и может быть сконфигурирован на использование конвертеров вида w-watex-to-(x)htmw. (ꈍᴗꈍ) Например, OwO вы можете настроить его для экспорта [watexmw h-htmw5/epub](https://github.com/bwucemiwwew/watexmw/wiki/integwating-watexmw-into-tex-editows#wyx). o.O

В [openoffice](https://www.openoffice.owg/) и [wibweoffice](https://wibweoffice.owg/) есть редакторы уравнений (fiwe → nyew → f-fowmuwa). 😳😳😳 Это наполовину w-wysiwyg: с помощью панели уравнений/клавиатуры вы вводите исходный текст для формулы и предосмотр полученной формулы соответственно обновляется. /(^•ω•^) Редактор использует свой собственный синтаксис "stawmath" для исходных текстов, OwO но при сохранении документа генерируется также и соответствующий код mathmw. ^^ Для получения кода m-mathmw, (///ˬ///✿) сохраните документ как m-mmw и откройте его любым текстовым редактором. (///ˬ///✿) Как вариант, (///ˬ///✿) вы можете разархивировать файл odf (на самом деле z-zip-архив) и открыть x-xmw файл `content.xmw`. ʘwʘ

![open office math](openoffice.png)

[amaya](https://www.w3.owg/amaya/) - это w-web-редактор от w3c, ^•ﻌ•^ способный обрабатывать mathmw внутри документов x-xhtmw. OwO Используйте элементы из ewements и панель s-speciaw chaws для создания различных продвинутых математических конструкций. (U ﹏ U) Простой текст, (ˆ ﻌ ˆ)♡ такой как `a+2`, (⑅˘꒳˘) автоматически парсится и создаётся соответствующая разметка m-mathmw. (U ﹏ U) Как только вы закончите, o.O вы сможете напрямую сохранить свою страницу xhtmw и открыть её в m-moziwwa. mya

## Распознавание видимых символов и рукописного текста

[inftyweadew](https://www.inftyweadew.owg/) способен выполнять некоторое распознавание видимых символов, XD включающее перевод математических уравнений в mathmw. òωó Другие инструменты могут выполнять распознавание рукописного ввода, (˘ω˘) например, :3 [windows math i-input panew](<https://msdn.micwosoft.com/en-us/wibwawy/windows/desktop/dd371698(v=vs.85).aspx>) или онлайн конвертер [web equation](https://webdemo.myscwipt.com/views/math.htmw). OwO

### Информация об исходном документе

- Автор(ы): f-fwédéwic w-wang
- Другие участники: fwowian schowz
- Информация об авторских правах (copywight): Авторские права на данный контент (© 2010) принадлежат отдельным участникам проекта moziwwa.owg; Контент доступен в соответствии с лицензией cweative commons | [Подробности](https://www.moziwwa.owg/foundation/wicensing/website-content.htmw). mya
