---
title: alarms
slug: Mozilla/Add-ons/WebExtensions/API/alarms
tags:
  - alarm
translation_of: Mozilla/Add-ons/WebExtensions/API/alarms
---
{{AddonSidebar}}

Executar um código agendado para um horário específico no futuro. Isto é como o [`setTimeout()`](/en-US/docs/Web/API/WindowTimers/setTimeout) e [`setInterval()`](/en-US/docs/Web/API/WindowTimers/setInterval), exceto essas funções não funcionam no segundo plano com páginas carregadas sob demanda.

Para usar estas API você precisa ter a "alarms" [permission](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Tipos

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Informações sobre um alarme em particular.

## Funções

- {{WebExtAPIRef("alarms.create()")}}
  - : Cria um alarme.
- {{WebExtAPIRef("alarms.get()")}}
  - : Obtém um alarme específico dado seu nome.
- {{WebExtAPIRef("alarms.getAll()")}}
  - : Obtém todos os alarmes agendados.
- {{WebExtAPIRef("alarms.clear()")}}
  - : Limpa um alarme específico dado seu nome.
- {{WebExtAPIRef("alarms.clearAll()")}}
  - : Limpa todos os alarmes agendados.

## Eventos

- {{WebExtAPIRef("alarms.onAlarm")}}
  - : Disparado quando o alarme acaba.

## Compatibilidade com navegadores

{{Compat("webextensions.api.alarms")}} {{WebExtExamples("h2")}}

> **Nota:** **Agradecimentos**Esta API é baseada na API Chromium's [`chrome.alarms`](https://developer.chrome.com/extensions/alarms) .Dados de compatibilidade do Microsoft Edge fornecidos pela Microsoft Corporation aqui inclusos sob a Creative Commons Attribution 3.0 United States License.
