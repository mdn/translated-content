---
title: NavigatorID.appVersion
slug: orphaned/Web/API/NavigatorID/appVersion
translation_of: Web/API/NavigatorID/appVersion
original_slug: Web/API/NavigatorID/appVersion
---

<p>{{APIRef("HTML DOM")}}{{deprecated_header}}</p>

<p><span id="result_box" lang="ru"><span class="hps">Возвращает версию</span> <span class="hps">браузера</span> <span class="hps">в виде <code>строки</code></span><span>.</span> <span class="hps">Это может быть либо</span> <span class="hps">обычный</span> <span class="hps">номер версии</span><span>,</span> например, "<span>5.0"</span> <span class="hps">или</span> <span class="hps">номер версии</span> <span class="hps">с </span><span class="hps">более детальной информацией</span><span>.</span></span> <span id="result_box" lang="ru"><span>Спецификация HTML5</span> <span class="hps">позволяет любому</span> <span class="hps">браузеру</span> <span class="hps">вернуть</span> "<span>4,0</span><span>"</span><span>,</span> <span class="hps">по причине</span> <code><span class="hps">совместимости.</span></code></span></p>

<div class="note"><p><strong>Примечание:</strong> Не полагайтесь на это свойство для получения правильной версии браузера. В браузерах на основе Geko (таких как Firefox), и основанных на WebKit (таких как Chrome и Safari) возвращаемое значение начинается с "5.0" с последующей информацией о платформе. В Opera 10 и/или более новой версии, возвращаемое значение не соответствует актуальной версии браузера.</p></div>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox">window.navigator.appVersion
</pre>

<h3 id="Returned_value">Значение</h3>

<p><code>ver</code> номер версии браузера в виде {{domxref("DOMString")}}.</p>

<h2 id="Example">Пример</h2>

<pre class="brush: js">alert("Your browser version is reported as " + navigator.appVersion);
</pre>

<h2 id="Notes">Примечание</h2>

<p><code>Свойство window.navigator.userAgent</code> может содержать номер версии (например  "<code>Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1</code>"), но вы должны быть в курсе того как легко изменить строку пользовательского агента (user agent) и "обмануть" другие браузеры, платформы или пользовательские агенты, а также опрометчивых вендоров браузеров самими этими свойствами.</p>

<p>Свойства <code>window.navigator.appVersion</code>, <code>window.navigator.appName</code> и <code>window.navigator.userAgent</code> используются для "снифинга браузера" кодом. Т.е. скрипты <span id="result_box" lang="ru"><span>которые пытаются</span> <span class="hps">выяснить,</span> <span class="hps">какой браузер</span> <span class="hps">вы используете, и</span> <span class="hps">настроить</span> <span class="hps">страницы</span> <span class="hps">соответственно</span><span>.Это приводит к ситуации, когда браузерам приходится возвращать поддельное значение</span></span> этого свойства, что бы не быть заблокированными некоторыми веб-сайтами.</p>

<h2 id="Спецификации">Спецификации</h2>

<div>{{Specifications}}</div>

<h2 id="Доступность_в_браузере">Доступность в браузере</h2>

<p>{{Compat("api.NavigatorID.appVersion")}}</p>
