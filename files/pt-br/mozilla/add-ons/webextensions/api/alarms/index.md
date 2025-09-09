---
title: alarms
slug: Mozilla/Add-ons/WebExtensions/API/alarms
---

{{AddonSidebar}}

Executar um código agendado para um horário específico no futuro. Isto é como o [`setTimeout()`](/pt-BR/docs/Web/API/Window/setTimeout) e [`setInterval()`](/pt-BR/docs/Web/API/Window/setInterval), exceto essas funções não funcionam no segundo plano com páginas carregadas sob demanda.

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

{{Compat}} {{WebExtExamples("h2")}}

> **Nota:** **Agradecimentos**Esta API é baseada na API Chromium's [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) .Dados de compatibilidade do Microsoft Edge fornecidos pela Microsoft Corporation aqui inclusos sob a Creative Commons Attribution 3.0 United States License.
