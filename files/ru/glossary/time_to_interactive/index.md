---
title: Time to interactive
slug: Glossary/Time_to_interactive
---

**Время до интерактивности** (англ. Time to Interactive, TTI) - это нестандартизированная метрика веб-производительности, которая определяется как момент времени, когда завершилась последняя [долгая задача](/ru/docs/Web/API/Long_Tasks_API), после которой следовало 5 секунд бездействия сети и основного потока.

TTI, предложенный WICG в 2018 году, был предназначен для предоставления показателя, описывающей состояние, когда страница или приложение содержит полезный контент, а основной поток простаивает и может свободно реагировать на взаимодействия с пользователем, включая регистрацию обработчиков событий.

#### Предостережение

TTI получается путём использования информации из {{domxref("Long Tasks API")}}. Несмотря на то, что TTI доступен в некоторых инструментах мониторинга производительности, на момент написания этой статьи он не является частью какой-либо официальной веб-спецификации.

## Смотрите также

- [Definition of TTI](https://github.com/WICG/time-to-interactive) from Web Incubator Community Group
- [Time to Interactive — focusing on human-centric metrics](https://building.calibreapp.com/time-to-interactive-focusing-on-the-human-centric-metrics-22eb7e64dd23) by Radimir Bitsov
- [Tracking TTI](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#tracking_tti)
