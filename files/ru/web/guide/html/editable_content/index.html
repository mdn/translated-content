---
title: Создание контента для редактирования
slug: Web/Guide/HTML/Editable_content
tags:
  - HTML5
  - contenteditable
translation_of: Web/Guide/HTML/Editable_content
---
<p>В HTML любой элемент может быть доступен для редактирования. Используя некоторые обработчики событий JavaScript, вы можете превратить свою веб-страницу в полноценный и быстрый текстовый редактор. В этой статье содержится некоторая информация об этой функции.</p>

<h2 id="Как_это_работает">Как это работает?</h2>

<p>Все, что вам нужно сделать, это установить атрибут {{htmlattrxref("contenteditable")}} почти на любой элемент HTML, чтобы сделать его доступным для редактирования.</p>

<p>Вот простой пример, который создаёт элемент {{HTMLElement("div")}}, содержимое которого пользователь может редактировать.</p>

<pre class="brush: html">&lt;div contenteditable="true"&gt;
  Этот текст может быть отредактирован пользователем.
&lt;/div&gt;</pre>

<p>Вот приведённый выше HTML-код в песочнице:</p>

<p>{{ EmbedLiveSample('Как_это_работает') }} </p>

<h2 id="Выполнение_команд">Выполнение команд</h2>

<p>Когда HTML-элемент имеет <code>contenteditable</code> установленный в <code>true</code>, метод {{ domxref("document.execCommand()") }} становится доступным. Это позволяет запускать команды для управления содержимым редактируемого региона. Большинство команд влияют на выбор документа, например, применяя стиль к тексту (полужирный, курсив и т. д.), в то время как другие вставляют новые элементы (например, добавление ссылки) или влияют на всю строку (отступы). При использовании  <code>contentEditable</code>,  вызов  <code>execCommand()</code>  будет влиять на текущий активный редактируемый элемент.</p>

<h2 id="Различия_в_генерации_разметки">Различия в генерации разметки</h2>

<p>Использование  <code>contenteditable</code>  в разных браузерах было болезненным в течение длительного времени из-за различий в сгенерированной разметке между браузерами. Например, даже что-то простое, что происходит, когда вы нажимаете Enter/Return для создания новой строки текста внутри редактируемого элемента, обрабатывалось по-разному в основных браузерах (Firefox вставлял элементы {{htmlelement("br")}}, IE/Opera использовала {{htmlelement("p")}}, в Chrome/Safari использовался {{htmlelement("div")}}). </p>

<p>К счастью, в современных браузерах ситуация несколько более последовательна. Начиная с  <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/60">Firefox 60</a>,  Firefox будет обновлён, чтобы обернуть отдельные строки в элементах {{htmlelement("div")}}, соответствующих поведению Chrome, современной Opera, Edge и Safari.</p>

<p>Попробуйте это в приведённом выше примере.</p>

<div class="note">
<p><strong>Примечание</strong>: Internet Explorer, который больше не разрабатывается, использует элементы {{htmlelement("p")}} вместо <code>&lt;div&gt;</code>.</p>
</div>

<p>Если вы хотите использовать другой разделитель абзацев, все вышеперечисленные браузеры поддерживают {{domxref("document.execCommand")}}, предоставляющий для этих изменений команду  <code>defaultParagraphSeparator</code>. Например, чтобы использовать элементы {{htmlelement("p")}}:</p>

<pre class="brush: js">document.execCommand("defaultParagraphSeparator", false, "p");</pre>

<p>Добавочно, Firefox поддерживает нестандартный аргумент, <code>br</code>, для <code>defaultParagraphSeparator</code>  с Firefox 55. Это действительно полезно, если ваше веб-приложение обеспечивало поддержку старого Firefox, а у вас, к сожалению, нет времени исправить его для более нового Firefox, то вы можете вернуть прежнее поведение Firefox вставкой этой строки во время инициализации <code>designMode</code> или  <code>contenteditable</code> редактора:</p>

<pre class="brush: js">document.execCommand("defaultParagraphSeparator", false, "br");</pre>

<h2 id="Безопасность">Безопасность</h2>

<p>По соображениям безопасности Firefox не позволяет JavaScript-коду использовать связанные с буфером функции (копировать, вставлять и т. д.) по умолчанию. Используя  <code>about:config</code> вы можете включить их, установив настройки, показанные ниже:</p>

<pre>user_pref("capability.policy.policynames", "allowclipboard");
user_pref("capability.policy.allowclipboard.sites", "https://www.mozilla.org");
user_pref("capability.policy.allowclipboard.Clipboard.cutcopy", "allAccess");
user_pref("capability.policy.allowclipboard.Clipboard.paste", "allAccess");</pre>

<h2 id="Пример">Пример:</h2>

<p>Простой, но полный текстовый редактор:</p>

<div style="height: 500px; width: auto; overflow: auto;">
<pre class="brush: html">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Rich Text Editor&lt;/title&gt;
&lt;script type="text/javascript"&gt;&lt;/script&gt;
&lt;style type="text/css"&gt;&lt;/style&gt;
&lt;/head&gt;
&lt;body onload="initDoc();"&gt;
&lt;form name="compForm" method="post" action="sample.php" onsubmit="if(validateMode()){this.myDoc.value=oDoc.innerHTML;return true;}return false;"&gt;
&lt;input type="hidden" name="myDoc"&gt;
&lt;div id="toolBar1"&gt;
&lt;select onchange="formatDoc('formatblock',this[this.selectedIndex].value);this.selectedIndex=0;"&gt;
&lt;option selected&gt;- формат -&lt;/option&gt;
&lt;option value="h1"&gt;Title 1 &amp;lt;h1&amp;gt;&lt;/option&gt;
&lt;option value="h2"&gt;Title 2 &amp;lt;h2&amp;gt;&lt;/option&gt;
&lt;option value="h3"&gt;Title 3 &amp;lt;h3&amp;gt;&lt;/option&gt;
&lt;option value="h4"&gt;Title 4 &amp;lt;h4&amp;gt;&lt;/option&gt;
&lt;option value="h5"&gt;Title 5 &amp;lt;h5&amp;gt;&lt;/option&gt;
&lt;option value="h6"&gt;Подзаголовок &amp;lt;h6&amp;gt;&lt;/option&gt;
&lt;option value="p"&gt;Параграф &amp;lt;p&amp;gt;&lt;/option&gt;
&lt;option value="pre"&gt;Preformatted &amp;lt;pre&amp;gt;&lt;/option&gt;
&lt;/select&gt;
&lt;select onchange="formatDoc('fontname',this[this.selectedIndex].value);this.selectedIndex=0;"&gt;
&lt;option class="heading" selected&gt;- шрифт -&lt;/option&gt;
&lt;option&gt;Arial&lt;/option&gt;
&lt;option&gt;Arial Black&lt;/option&gt;
&lt;option&gt;Courier New&lt;/option&gt;
&lt;option&gt;Times New Roman&lt;/option&gt;
&lt;/select&gt;
&lt;select onchange="formatDoc('fontsize',this[this.selectedIndex].value);this.selectedIndex=0;"&gt;
&lt;option class="heading" selected&gt;- размер -&lt;/option&gt;
&lt;option value="1"&gt;Малюсенький&lt;/option&gt;
&lt;option value="2"&gt;Маленький&lt;/option&gt;
&lt;option value="3"&gt;Нормальный&lt;/option&gt;
&lt;option value="4"&gt;Большеват&lt;/option&gt;
&lt;option value="5"&gt;Большой&lt;/option&gt;
&lt;option value="6"&gt;Большущий&lt;/option&gt;
&lt;option value="7"&gt;Огромный&lt;/option&gt;
&lt;/select&gt;
&lt;select onchange="formatDoc('forecolor',this[this.selectedIndex].value);this.selectedIndex=0;"&gt;
&lt;option class="heading" selected&gt;- цвет -&lt;/option&gt;
&lt;option value="red"&gt;Красный&lt;/option&gt;
&lt;option value="blue"&gt;Синий&lt;/option&gt;
&lt;option value="green"&gt;Зелёный&lt;/option&gt;
&lt;option value="black"&gt;Чёрный&lt;/option&gt;
&lt;/select&gt;
&lt;select onchange="formatDoc('backcolor',this[this.selectedIndex].value);this.selectedIndex=0;"&gt;
&lt;option class="heading" selected&gt;- фон -&lt;/option&gt;
&lt;option value="#faa"&gt;Красень&lt;/option&gt;
&lt;option value="#afa"&gt;Зелень&lt;/option&gt;
&lt;option value="#aaf"&gt;Синь&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;div id="toolBar2"&gt;
&lt;img class="intLink" title="Чистка" onclick="if(validateMode()&amp;&amp;confirm('Вы уверены?')){oDoc.innerHTML=sDefTxt};" src="data:image/gif;base64,R0lGODlhFgAWAIQbAD04KTRLYzFRjlldZl9vj1dusY14WYODhpWIbbSVFY6O7IOXw5qbms+wUbCztca0ccS4kdDQjdTLtMrL1O3YitHa7OPcsd/f4PfvrvDv8Pv5xv///////////////////yH5BAEKAB8ALAAAAAAWABYAAAV84CeOZGmeaKqubMteyzK547QoBcFWTm/jgsHq4rhMLoxFIehQQSAWR+Z4IAyaJ0kEgtFoLIzLwRE4oCQWrxoTOTAIhMCZ0tVgMBQKZHAYyFEWEV14eQ8IflhnEHmFDQkAiSkQCI2PDC4QBg+OAJc0ewadNCOgo6anqKkoIQA7" /&gt;
&lt;img class="intLink" title="Печать" onclick="printDoc();" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oEBxcZFmGboiwAAAAIdEVYdENvbW1lbnQA9syWvwAAAuFJREFUOMvtlUtsjFEUx//n3nn0YdpBh1abRpt4LFqtqkc3jRKkNEIsiIRIBBEhJJpKlIVo4m1RRMKKjQiRMJRUqUdKPT71qpIpiRKPaqdF55tv5vvusZjQTjOlseUkd3Xu/3dPzusC/22wtu2wRn+jG5So/OCDh8ycMJDflehMlkJkVK7KUYN+ufzA/RttH76zaVocDptRxzQtNi3mRWuPc+6cKtlXZ/sddP2uu9uXlmYXZ6Qm8v4Tz8lhF1H+zDQXt7S8oLMXtbF4e8QaFHjj3kbP2MzkktHpiTjp9VH6iHiA+whtAsX5brpwueMGdONdf/2A4M7ukDs1JW662+XkqTkeUoqjKtOjm2h53YFL15pSJ04Zc94wdtibr26fXlC2mzRvBccEbz2kiRFD414tKMlEZbVGT33+qCoHgha81SWYsew0r1uzfNylmtpx80pngQQ91LwVk2JGvGnfvZG6YcYRAT16GFtW5kKKfo1EQLtfh5Q2etT0BIWF+aitq4fDbk+ImYo1OxvGF03waFJQvBCkvDffRyEtxQiFFYgAZTHS0zwAGD7fG5TNnYNTp8/FzvGwJOfmgG7GOx0SAKKgQgDMgKBI0NJGMEImpGDk5+WACEwEd0ywblhGUZ4Hw5OdUekRBLT7DTgdEgxACsIznx8zpmWh7k4rkpJcuHDxCul6MDsmmBXDlWCH2+XozSgBnzsNCEE4euYV4pwCpsWYPW0UHDYBKSWu1NYjENDReqtKjwn2+zvtTc1vMSTB/mvev/WEYSlASsLimcOhOBJxw+N3aP/SjefNL5GePZmpu4kG7OPr1+tOfPyUu3BecWYKcwQcDFmwFKAUo90fhKDInBCAmvqnyMgqUEagQwCoHBDc1rjv9pIlD8IbVkz6qYViIBQGTJPx4k0XpIgEZoRN1Da0cij4VfR0ta3WvBXH/rjdCufv6R2zPgPH/e4pxSBCpeatqPrjNiso203/5s/zA171Mv8+w1LOAAAAAElFTkSuQmCC"&gt;
&lt;img class="intLink" title="Назад" onclick="formatDoc('undo');" src="data:image/gif;base64,R0lGODlhFgAWAOMKADljwliE33mOrpGjuYKl8aezxqPD+7/I19DV3NHa7P///////////////////////yH5BAEKAA8ALAAAAAAWABYAAARR8MlJq7046807TkaYeJJBnES4EeUJvIGapWYAC0CsocQ7SDlWJkAkCA6ToMYWIARGQF3mRQVIEjkkSVLIbSfEwhdRIH4fh/DZMICe3/C4nBQBADs=" /&gt;
&lt;img class="intLink" title="Вперёд" onclick="formatDoc('redo');" src="data:image/gif;base64,R0lGODlhFgAWAMIHAB1ChDljwl9vj1iE34Kl8aPD+7/I1////yH5BAEKAAcALAAAAAAWABYAAANKeLrc/jDKSesyphi7SiEgsVXZEATDICqBVJjpqWZt9NaEDNbQK1wCQsxlYnxMAImhyDoFAElJasRRvAZVRqqQXUy7Cgx4TC6bswkAOw==" /&gt;
&lt;img class="intLink" title="Удалить форматирование" onclick="formatDoc('removeFormat')" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB9oECQMCKPI8CIIAAAAIdEVYdENvbW1lbnQA9syWvwAAAuhJREFUOMtjYBgFxAB501ZWBvVaL2nHnlmk6mXCJbF69zU+Hz/9fB5O1lx+bg45qhl8/fYr5it3XrP/YWTUvvvk3VeqGXz70TvbJy8+Wv39+2/Hz19/mGwjZzuTYjALuoBv9jImaXHeyD3H7kU8fPj2ICML8z92dlbtMzdeiG3fco7J08foH1kurkm3E9iw54YvKwuTuom+LPt/BgbWf3//sf37/1/c02cCG1lB8f//f95DZx74MTMzshhoSm6szrQ/a6Ir/Z2RkfEjBxuLYFpDiDi6Af///2ckaHBp7+7wmavP5n76+P2ClrLIYl8H9W36auJCbCxM4szMTJac7Kza////R3H1w2cfWAgafPbqs5g7D95++/P1B4+ECK8tAwMDw/1H7159+/7r7ZcvPz4fOHbzEwMDwx8GBgaGnNatfHZx8zqrJ+4VJBh5CQEGOySEua/v3n7hXmqI8WUGBgYGL3vVG7fuPK3i5GD9/fja7ZsMDAzMG/Ze52mZeSj4yu1XEq/ff7W5dvfVAS1lsXc4Db7z8C3r8p7Qjf///2dnZGxlqJuyr3rPqQd/Hhyu7oSpYWScylDQsd3kzvnH738wMDzj5GBN1VIWW4c3KDon7VOvm7S3paB9u5qsU5/x5KUnlY+eexQbkLNsErK61+++VnAJcfkyMTIwffj0QwZbJDKjcETs1Y8evyd48toz8y/ffzv//vPP4veffxpX77z6l5JewHPu8MqTDAwMDLzyrjb/mZm0JcT5Lj+89+Ybm6zz95oMh7s4XbygN3Sluq4Mj5K8iKMgP4f0////fv77//8nLy+7MCcXmyYDAwODS9jM9tcvPypd35pne3ljdjvj26+H2dhYpuENikgfvQeXNmSl3tqepxXsqhXPyc666s+fv1fMdKR3TK72zpix8nTc7bdfhfkEeVbC9KhbK/9iYWHiErbu6MWbY/7//8/4//9/pgOnH6jGVazvFDRtq2VgiBIZrUTIBgCk+ivHvuEKwAAAAABJRU5ErkJggg=="&gt;
&lt;img class="intLink" title="Жирный" onclick="formatDoc('bold');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAInhI+pa+H9mJy0LhdgtrxzDG5WGFVk6aXqyk6Y9kXvKKNuLbb6zgMFADs=" /&gt;
&lt;img class="intLink" title="Italic" onclick="formatDoc('italic');" src="data:image/gif;base64,R0lGODlhFgAWAKEDAAAAAF9vj5WIbf///yH5BAEAAAMALAAAAAAWABYAAAIjnI+py+0Po5x0gXvruEKHrF2BB1YiCWgbMFIYpsbyTNd2UwAAOw==" /&gt;
&lt;img class="intLink" title="Подчёркивание" onclick="formatDoc('underline');" src="data:image/gif;base64,R0lGODlhFgAWAKECAAAAAF9vj////////yH5BAEAAAIALAAAAAAWABYAAAIrlI+py+0Po5zUgAsEzvEeL4Ea15EiJJ5PSqJmuwKBEKgxVuXWtun+DwxCCgA7" /&gt;
&lt;img class="intLink" title="Выровнять слева" onclick="formatDoc('justifyleft');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JMGELkGYxo+qzl4nKyXAAAOw==" /&gt;
&lt;img class="intLink" title="Выровнять центр" onclick="formatDoc('justifycenter');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIfhI+py+0Po5y02ouz3jL4D4JOGI7kaZ5Bqn4sycVbAQA7" /&gt;
&lt;img class="intLink" title="Выровнять справа" onclick="formatDoc('justifyright');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JQGDLkGYxouqzl43JyVgAAOw==" /&gt;
&lt;img class="intLink" title="Нумерованный список" onclick="formatDoc('insertorderedlist');" src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAADljwliE35GjuaezxtHa7P///////yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKSespwjoRFvggCBUBoTFBeq6QIAysQnRHaEOzyaZ07Lu9lUBnC0UGQU1K52s6n5oEADs=" /&gt;
&lt;img class="intLink" title="Пунктирный список" onclick="formatDoc('insertunorderedlist');" src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAAB1ChF9vj1iE33mOrqezxv///////yH5BAEAAAcALAAAAAAWABYAAAMyeLrc/jDKSesppNhGRlBAKIZRERBbqm6YtnbfMY7lud64UwiuKnigGQliQuWOyKQykgAAOw==" /&gt;
&lt;img class="intLink" title="Цитата" onclick="formatDoc('formatblock','blockquote');" src="data:image/gif;base64,R0lGODlhFgAWAIQXAC1NqjFRjkBgmT9nqUJnsk9xrFJ7u2R9qmKBt1iGzHmOrm6Sz4OXw3Odz4Cl2ZSnw6KxyqO306K63bG70bTB0rDI3bvI4P///////////////////////////////////yH5BAEKAB8ALAAAAAAWABYAAAVP4CeOZGmeaKqubEs2CekkErvEI1zZuOgYFlakECEZFi0GgTGKEBATFmJAVXweVOoKEQgABB9IQDCmrLpjETrQQlhHjINrTq/b7/i8fp8PAQA7" /&gt;
&lt;img class="intLink" title="Удалить отступ" onclick="formatDoc('outdent');" src="data:image/gif;base64,R0lGODlhFgAWAMIHAAAAADljwliE35GjuaezxtDV3NHa7P///yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKCQG9F2i7u8agQgyK1z2EIBil+TWqEMxhMczsYVJ3e4ahk+sFnAgtxSQDqWw6n5cEADs=" /&gt;
&lt;img class="intLink" title="Добавить отступ" onclick="formatDoc('indent');" src="data:image/gif;base64,R0lGODlhFgAWAOMIAAAAADljwl9vj1iE35GjuaezxtDV3NHa7P///////////////////////////////yH5BAEAAAgALAAAAAAWABYAAAQ7EMlJq704650B/x8gemMpgugwHJNZXodKsO5oqUOgo5KhBwWESyMQsCRDHu9VOyk5TM9zSpFSr9gsJwIAOw==" /&gt;
&lt;img class="intLink" title="Гиперссылка" onclick="var sLnk=prompt('Введите ваш URL','http:\/\/');if(sLnk&amp;&amp;sLnk!=''&amp;&amp;sLnk!='http://'){formatDoc('createlink',sLnk)}" src="data:image/gif;base64,R0lGODlhFgAWAOMKAB1ChDRLY19vj3mOrpGjuaezxrCztb/I19Ha7Pv8/f///////////////////////yH5BAEKAA8ALAAAAAAWABYAAARY8MlJq7046827/2BYIQVhHg9pEgVGIklyDEUBy/RlE4FQF4dCj2AQXAiJQDCWQCAEBwIioEMQBgSAFhDAGghGi9XgHAhMNoSZgJkJei33UESv2+/4vD4TAQA7" /&gt;
&lt;img class="intLink" title="Вырезать" onclick="formatDoc('cut');" src="data:image/gif;base64,R0lGODlhFgAWAIQSAB1ChBFNsRJTySJYwjljwkxwl19vj1dusYODhl6MnHmOrpqbmpGjuaezxrCztcDCxL/I18rL1P///////////////////////////////////////////////////////yH5BAEAAB8ALAAAAAAWABYAAAVu4CeOZGmeaKqubDs6TNnEbGNApNG0kbGMi5trwcA9GArXh+FAfBAw5UexUDAQESkRsfhJPwaH4YsEGAAJGisRGAQY7UCC9ZAXBB+74LGCRxIEHwAHdWooDgGJcwpxDisQBQRjIgkDCVlfmZqbmiEAOw==" /&gt;
&lt;img class="intLink" title="Копировать" onclick="formatDoc('copy');" src="data:image/gif;base64,R0lGODlhFgAWAIQcAB1ChBFNsTRLYyJYwjljwl9vj1iE31iGzF6MnHWX9HOdz5GjuYCl2YKl8ZOt4qezxqK63aK/9KPD+7DI3b/I17LM/MrL1MLY9NHa7OPs++bx/Pv8/f///////////////yH5BAEAAB8ALAAAAAAWABYAAAWG4CeOZGmeaKqubOum1SQ/kPVOW749BeVSus2CgrCxHptLBbOQxCSNCCaF1GUqwQbBd0JGJAyGJJiobE+LnCaDcXAaEoxhQACgNw0FQx9kP+wmaRgYFBQNeAoGihCAJQsCkJAKOhgXEw8BLQYciooHf5o7EA+kC40qBKkAAAGrpy+wsbKzIiEAOw==" /&gt;
&lt;img class="intLink" title="Вставить" onclick="formatDoc('paste');" src="data:image/gif;base64,R0lGODlhFgAWAIQUAD04KTRLY2tXQF9vj414WZWIbXmOrpqbmpGjudClFaezxsa0cb/I1+3YitHa7PrkIPHvbuPs+/fvrvv8/f///////////////////////////////////////////////yH5BAEAAB8ALAAAAAAWABYAAAWN4CeOZGmeaKqubGsusPvBSyFJjVDs6nJLB0khR4AkBCmfsCGBQAoCwjF5gwquVykSFbwZE+AwIBV0GhFog2EwIDchjwRiQo9E2Fx4XD5R+B0DDAEnBXBhBhN2DgwDAQFjJYVhCQYRfgoIDGiQJAWTCQMRiwwMfgicnVcAAAMOaK+bLAOrtLUyt7i5uiUhADs=" /&gt;
&lt;/div&gt;
&lt;div id="textBox" contenteditable="true"&gt;&lt;p&gt;Однажды в студёную, зимнюю пору...&lt;/p&gt;&lt;/div&gt;
&lt;span&gt;&lt;input id="btn" type="submit" value="Принять" /&gt;&lt;/span&gt;
&lt;span id="editMode"&gt;&lt;input id="switchBox" type="checkbox" name="switchMode" onchange="setDocMode(this.checked);" /&gt; &lt;label for="switchBox"&gt;Показать HTML&lt;/label&gt;&lt;/span&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<pre class="brush: css">.content { display: none; }
.content::after {
  display: block; content: ' ( 'url(href="sample.php")' ) ';
}
form {
  display: inline-block;
  background-color: rgba(180,180,180,.8);
  border: 1px solid rgba(155,155,155,.6);
}
.intLink { cursor: pointer; }
img.intLink { border: 0; }
#toolBar1 select { font-size:10px; background-color: #eff;}
#textBox {
  min-width: 500px;
  height: 300px;
  border: 1px solid rgba(155,155,155,.6);
  padding: 12px;
  overflow: scroll;
  background-color: #eff;
}
#textBox #sourceText {
  padding: 0;
  margin: 0;
  max-width: 800px;
  min-height: 200px;
}
#switchBox, label, #btn { cursor: pointer; }
</pre>

<pre class="brush: js">var oDoc, sDefTxt;

function initDoc() {
  oDoc = document.getElementById("textBox");
  sDefTxt = oDoc.innerHTML;
  if (document.compForm.switchBox.checked) { setDocMode(true); }
}

function formatDoc(sCmd, sValue) {
  if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
}

function validateMode() {
  if (!document.compForm.switchBox.checked) { return true ; }
  alert("Uncheck \"Показать HTML\"."); /* убрать галочку из "Показать HTML" */
  oDoc.focus();
  return false;
}

function setDocMode(bToSource) {
  var oContent;
  if (bToSource) {
    oContent = document.createTextNode(oDoc.innerHTML);
    oDoc.innerHTML = "";
    var oPre = document.createElement("pre");
    oDoc.contentEditable = false;
    oPre.id = "sourceText";
    oPre.contentEditable = true;
    oPre.appendChild(oContent);
    oDoc.appendChild(oPre);
    document.execCommand("defaultParagraphSeparator", false, "div");
  } else {
    if (document.all) {
      oDoc.innerHTML = oDoc.innerText;
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oDoc.firstChild);
      oDoc.innerHTML = oContent.toString();
    }
    oDoc.contentEditable = true;
  }
  oDoc.focus();
}

function printDoc() {
  if (!validateMode()) { return; }
  var oPrntWin = window.open("","_blank","width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
  oPrntWin.document.open();
  oPrntWin.document.write("&lt;!doctype html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;Print&lt;\/title&gt;&lt;\/head&gt;&lt;body onload=\"print();\"&gt;" + oDoc.innerHTML + "&lt;\/body&gt;&lt;\/html&gt;");
  oPrntWin.document.close(); /*  */
}

</pre>
</div>

<p>Результат: {{EmbedLiveSample('Пример')}}</p>

<div class="note"><strong>Примечание:</strong> если вы хотите увидеть, как стандартизировать создание и вставку вашего редактора на свою страницу, см. <a href="https://developer.mozilla.org/@api/deki/files/6243/=rich-text-editor.zip" title="rich-text-editor.zip">наш более полный пример редактора.</a> </div>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{domxref("HTMLElement.contentEditable")}}</li>
 <li>{{htmlattrxref("contenteditable")}} глобальный атрибут</li>
 <li><a href="/en-US/docs/Mozilla/Projects/Midas">Midas</a> (компонент сценария для текстового редактора)</li>
 <li>{{cssxref("caret-color")}}, позволяющий установить цвет вставляемого текста</li>
</ul>
