---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
tags:
  - HTTP
  - Заголовки HTTP
  - Справка
  - User-agent
translation_of: Web/HTTP/Headers/User-Agent
---
{{HTTPSidebar}}

{{Glossary("request header", "Заголовок запроса")}} **User-Agent** - это строка с характеристиками, по которым сервера и сетевые узлы могут определить тип приложения, операционную систему, производителя и/или версию {{Glossary("user agent", "пользовательского агента")}}.

> **Обратите внимание:** Показывать ту или иную страницу в зависимости от характеристик пользовательского агента — дурная практика. Почему не стоит так делать, читайте в статье «[Определение браузера по пользовательскому агенту](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)».

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Request header", "Заголовок запроса")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Запрещённое имя заголовка")}}</th>
      <td>Нет</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
User-Agent: <product> / <product-version> <comment>
```

Общий формат для веб-браузеров:

```
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### Директивы

- \<product>
  - : Идентификатор продукта — его название или кодовое имя.
- \<product-version>
  - : Версия продукта
- \<comment>
  - : Может быть пустым или содержать дополнительную информацию. Например, информацию о продукте.

## Строка UA в Firefox

Подробные сведения о _user agent_ строках в Firefox и других браузерах, основанных на движке Gecko, вы найдёте в [справочнике](/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox).

Строка UA в Firefox разбита на 4 части и одну общую метку для всех:

```
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0` — общая метка, которая сообщает, что браузер совместим с Mozilla. По историческим причинам сегодня такую метку отправляет почти каждый браузер.
2. **_platform_** указывает платформу, на которой работает браузер (Windows, Mac, Linux, Android и т.д.), а так же, мобильный ли это телефон. В телефонах на {{Glossary("Firefox OS")}} указывается только `Mobile`, поскольку Firefox OS построена на веб-технологиях. Обратите внимание, **_platform_** может содержать несколько значений, разделённых `;`. Подробная информация и примеры ниже.
3. **rv:_geckoversion_** указывает релизную версию Gecko (например, "_17.0_"). В последних браузерах **_geckoversion_** совпадает с **_firefoxversion_**.
4. **_Gecko/geckotrail_** указывает, что браузер основан на Gecko (на компьютерах **_geckotrail_** — всегда строка `20100101`).
5. **_Firefox/firefoxversion_** обозначает, что браузером является Firefox, и указывает его версию (например, "_17.0_").

### Примеры

```
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Строка UA в Chrome

Строка _user agent_ в Chrome и браузерах, основанных на движке Chromium/Blink, аналогична строке Firefox. Для совместимости добавлены строки `KHTML, like Gecko` и `Safari`.

### Примеры

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Строка UA в Opera

Браузер Opera также основан на движке Blink, поэтому его строка _user agent_ совпадает со строкой Chrome, только в конце добавляется `"OPR/<version>"`.

### Примеры

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

В старых версиях Opera, на базе движка Presto, строки выглядят так:

```
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Строка UA в Microsoft Edge

Браузер Microsoft Edge также основан на движке Blink, поэтому его строка _user agent_ совпадает со строкой Chrome, только в конце добавляется `"Edg/<version>"`.

### Примеры

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

## Строка UA в Safari

В этом примере строка _user agent_ представлена в мобильной версии Safari и содержит слово `"Mobile"`.

### Примеры

```
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## Строка UA в Internet Explorer

### Примеры

```
Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)
```

## Строка UA поискового робота

### Примеры

```
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## Строка UA у библиотек и net-tools.

### Примеры

```
curl/7.64.1
```

```
PostmanRuntime/7.26.5
```

## Cпецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [User-Agent detection, history and checklist](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Firefox user agent string reference](/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [Browser detection using the user agent](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
