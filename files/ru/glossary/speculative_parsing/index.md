---
title: Оптимизация ваших страниц для рискованного парсинга
slug: Glossary/speculative_parsing
tags:
  - HTML
  - HTML5
  - Веб-разработка
  - Продвинутый
translation_of: Glossary/speculative_parsing
original_slug: Web/HTML/Optimizing_Your_Pages_for_Speculative_Parsing
---
<p>Традиционно, HTML-парсер в браузерах работает на главной ветке и блокируется после тега <code>&lt;/script&gt;</code>, пока скрипт не загрузится и не выполнится. HTML-парсер в Firefox 4 и новее поддерживает рискованный парсинг вне главной ветки. Он продолжает парсить, пока скрипты загружаются и выполняются. В Firefox 3.5 и 3.6 парсер начинает рискованную загрузку скриптов, стилей и изображений, когда он находит их. Однако, в Firefox 4 и новее HTML-парсер также рискованно загружает алгоритм постройки дерева HTML. С одной стороны, когда риск оправдался, нет необходимости в репарсинге части, которая уже была просканирована на скрипты, стили и изображения. С другой стороны, когда риск не оправдался, HTML-парсеру достаётся больше работы.</p>

<p>Эта статья поможет избежать некоторых проблем, которые замедляют загрузку страницы.</p>

<h2 id="Делаем_рискованную_загрузку_успешной">Делаем рискованную загрузку успешной</h2>

<p>Есть только одно правило, чтобы сделать рискованную загрузку скриптов, стилей и изображений успешной:</p>

<ul>
 <li>Если вы используете элемент <code>&lt;base&gt;</code>, чтобы заменить основной URI страницы, поместите этот элемент в часть страницы без скриптов. Не добавляйте его с помощью <code>document.write()</code> или <code>document.createElement()</code>.</li>
</ul>

<h2 id="Как_избежать_перестройки_дерева_страницы">Как избежать перестройки дерева страницы</h2>

<p>Рискованное построение дерева терпит неудачу в случае, когда функция <code>document.write() </code>изменяет состояния построителя дерева так, что то рискованное состояние после тега <code>&lt;/script&gt; </code>более не остаётся прежним после того, как весь контент, добавленный через <code>document.write(),</code> будет распарсен. Только несколько необычных применений <code>document.write()</code> вызывают эту проблему. Вот, чего необходимо избегать:</p>

<ul>
 <li>Не пишите незаконченные древа. Вместо <code>&lt;script&gt;document.write("&lt;div&gt;");&lt;/script&gt;</code> лучше написать <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code>.</li>
 <li>Не пишите незаконченные теги. Не стоит писать <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div");&lt;/script&gt;</code>.</li>
 <li>Не заканчивайте строку возрастной кареткой (<code>\r</code>). Вместо <code>&lt;script&gt;document.write("Hello World!\r");&lt;/script&gt;</code> лучше написать <code>&lt;script&gt;document.write("Hello World!\n");&lt;/script&gt;</code>.</li>
 <li>Заметьте, что написание законченных тегов может повлиять на другие теги так, что они станут незаконченными. В том числе, <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> внутри <code>&lt;head&gt;</code> будет интерпретировано как <code>&lt;script&gt;document.write("&lt;/head&gt;&lt;body&gt;&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code>, что повлияет на <code>&lt;head&gt;</code> так, что он станет незаконченным.</li>
 <li>Не форматируйте часть таблицы. Вместо <code>&lt;table&gt;&lt;script&gt;document.write("&lt;tr&gt;&lt;td&gt;Hello World!&lt;/td&gt;&lt;/tr&gt;");&lt;/script&gt;&lt;/table&gt;</code> лучше написать <code>&lt;script&gt;document.write("</code><code>&lt;table&gt;</code><code>&lt;tr&gt;&lt;td&gt;Hello World!&lt;/td&gt;&lt;/tr&gt;</code><code>&lt;/table&gt;</code><code>");&lt;/script&gt;</code>.</li>
</ul>
