---
title: Структурируем страницу
slug: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
tags:
  - HTML
translation_of: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
original_slug: Learn/HTML/Введение_в_HTML/Structuring_a_page_of_content
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}</div>

<p class="summary">Разметить страницу так, чтобы к ней было просто применить CSS — первое, чему должен научиться будущий веб-разработчик. В этом задании вам придётся подумать о том, как должна выглядеть страница, и подобрать подходящую семантическую разметку.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Что нужно знать:</th>
   <td>Вам понадобятся навыки из всего курса. Особое внимание уделите разделу <a href="/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0_%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0_%D0%B8_%D0%B2%D0%B5%D0%B1-%D1%81%D0%B0%D0%B9%D1%82%D0%B0">Структура документа и веб-сайта</a>.</td>
  </tr>
  <tr>
   <th scope="row">Цель:</th>
   <td>
    <p>Проверить знания структуры веб-страницы и её перевода в разметку.</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Отправная_точка">Отправная точка</h2>

<p>Чтобы начать это, вы должны перейти и скачать <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip?raw=true">архив содержащий все начальные активы</a>. Архив содержит:</p>

<ul>
 <li>HTML, где вам нужно добавить структурную разметку.</li>
 <li>CSS для стилизации вашей разметки.</li>
 <li>Изображения, которые используются на странице.</li>
</ul>

<p>Создайте пример на вашем локальном компьютере или, альтернативно, используйте сайт, например <a class="external external-icon" href="http://jsbin.com/">JSBin</a> или <a class="external external-icon" href="https://thimble.mozilla.org/">Thimble</a> для исследования.</p>

<h2 id="Краткое_описание_проекта">Краткое описание проекта</h2>

<p>Для этого проекта ваша задача - взять контент для домашней страницы веб-сайта наблюдения за птицами и добавить к нему структурные элементы, чтобы он мог использовать макет страницы. Он должен иметь:</p>

<ul>
 <li>Заголовок, охватывающий всю ширину сайта, содержащий основное название страницы, логотип сайта и меню навигации. Заголовок и логотип появляются рядом друг с другом, когда применяется стилизация, и навигация появляется ниже этих двух элементов.</li>
 <li>Основная область содержимого, содержащая два столбца - основной блок, содержащий текст приветствия, и боковую панель для размещения миниатюр изображений.</li>
 <li>Нижний колонтитул, содержащий информацию об авторских правах и разработчиках.</li>
</ul>

<p>Вам необходимо добавить подходящую обёртку для:</p>

<ul>
 <li>Заголовка</li>
 <li>Меню навигации</li>
 <li>Основного содержимого</li>
 <li>Приветственного текста</li>
 <li>Боковой панели изображения</li>
 <li>Нижнего колонтитула</li>
</ul>

<p>Вы также должны:</p>

<ul>
 <li>Примените предоставленный CSS к странице, добавив ещё один элемент {{htmlelement ("link")}} чуть ниже существующего, указанного в начале.</li>
</ul>

<h2 id="Советы_и_подсказки">Советы и подсказки</h2>

<ul>
 <li>Используйте <a href="https://validator.w3.org/">W3C HTML validator</a> для проверки вашего HTML; вы получите бонусные баллы, если он будет проверять как можно больше (строка «googleapis» используется для импорта пользовательских шрифтов на страницу из службы Google Fonts, она не проверяет, но не беспокойтесь об этом слишком много - валидатор - полезный инструмент, но 100% проверка является идеальной, а не полностью необходимой).</li>
 <li>Вам не нужно знать CSS, чтобы сделать эту оценку; вам просто нужно поместить предоставленный CSS внутри HTML-элемента.</li>
 <li>Предоставленный CSS разработан таким образом, что при добавлении правильных структурных элементов в разметку они будут отображаться зелёными на отображаемой странице.</li>
 <li>Если вы застряли и не можете понять, какие элементы куда помещать, часто помогает вывести простую блок-схему макета страницы и сделать надписи на элементах, которые, по вашему мнению, должны обернуть каждый блок.</li>
</ul>

<h2 id="Пример">Пример</h2>

<p>Следующий скриншот показывает пример того, как может выглядеть домашняя страница после маркировки.</p>

<p><img alt='The finished example for the assessment; a simple webpage about birdwatching, including a heading of "Birdwatching", bird photos, and a welcome message' src="https://mdn.mozillademos.org/files/12449/example-page.png" style="display: block; margin: 0 auto;"></p>

<h2 id="Оценивание">Оценивание</h2>

<p>Если вам дали это задание на каком-то курсе, просто передайте свою страницу для проверки преподавателю. Если вы учитесь сами, обратитесь на <a href="https://discourse.mozilla.org/t/structuring-a-page-of-content-assessment/24678">форум, задав тему обсуждения этого упражнения, или в IRC-канале #mdn в IRC Mozilla</a>, или в IRC-канале <a href="irc://irc.mozilla.org/mdn">#mdn</a> в <a href="https://wiki.mozilla.org/IRC">IRC Mozilla</a>. Попробуйте выполнить задание сами, ведь вам некого обманывать, кроме себя самого!</p>

<p>{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}</p>

<h2 id="В_этом_модуле">В этом модуле</h2>

<ul>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B">Начало работы с HTML</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/The_head_metadata_in_HTML">Что такое заголовок? Метаданные в HTML</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/HTML_text_fundamentals">Основы редактирования текста в HTML</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B3%D0%B8%D0%BF%D0%B5%D1%80%D1%81%D1%81%D1%8B%D0%BB%D0%BE%D0%BA">Создание гиперссылок</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Advanced_text_formatting">Углублённое форматирование текста</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0_%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0_%D0%B8_%D0%B2%D0%B5%D0%B1-%D1%81%D0%B0%D0%B9%D1%82%D0%B0">Структура документа и веб-сайта</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Debugging_HTML">Отладка HTML</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Marking_up_a_letter">Разметка письма</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Structuring_a_page_of_content">Структурируем страницу</a></li>
</ul>
