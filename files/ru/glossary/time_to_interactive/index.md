---
title: Time to interactive
slug: Glossary/Time_to_interactive
translation_of: Glossary/Time_to_interactive
original_slug: Глоссарий/Time_to_interactive
---
<p class="seoSummary"><strong>Время до интерактивности</strong> (англ. Time to Interactive, TTI) - это нестандартизированная метрика веб-производительности, которая определяется как момент времени, когда завершилась последняя <a href="/en-US/docs/Web/API/Long_Tasks_API">долгая задача</a>, после которой следовало 5 секунд бездействия сети и основного потока.</p>

<p>TTI, предложенный WICG в 2018 году, был предназначен для предоставления показателя, описывающей состояние, когда страница или приложение содержит полезный контент, а основной поток простаивает и может свободно реагировать на взаимодействия с пользователем, включая регистрацию обработчиков событий.</p>

<h4 id="Предостережение">Предостережение</h4>

<p>TTI получается путём использования информации из {{domxref("Long Tasks API")}}. Несмотря на то, что TTI доступен в некоторых инструментах мониторинга производительности, на момент написания этой статьи он не является частью какой-либо официальной веб-спецификации.</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="https://github.com/WICG/time-to-interactive">Definition of TTI</a> from Web Incubator Community Group</li>
 <li><a href="https://building.calibreapp.com/time-to-interactive-focusing-on-the-human-centric-metrics-22eb7e64dd23">Time to Interactive — focusing on human-centric metrics</a> by Radimir Bitsov</li>
 <li><a href="https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#tracking_tti">Tracking TTI</a></li>
</ul>
