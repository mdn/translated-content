---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
translation_of: Web/HTTP/Заголовки/User-Agent
---
{{HTTPSidebar}}

{{Glossary("request header", "Заголовок запроса")}} **User-Agent** - это строка характеристик, которая позволяет серверам и одноранговым сетям идентифицировать приложение, операционную систему, поставщика и/или версию запрашивающего {{Glossary("user agent")}}.

> **Внимание:** Пожалуйста, ознакомьтесь с [Определением браузера с помощью user agent](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent), чтобы понять, почему не рекомендуется обслуживание разных веб-страниц или сервисов в разных браузерах.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
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

Дополнительные сведения о строках user agent на основе Firefox и Gecko смотрите в [справочнике по строкам user agent в Firefox](/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox). Строка UA в Firefox разбита на 4 компонента:

```
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0` — это общий маркер, который говорит о том, что браузер совместим с Mozilla. По историческим причинам почти каждый браузер сегодня его отправляет.
2. **_platform_** описывает платформу, на которой работает браузер (Windows, Mac, Linux, Android, Mobile и т.д.), В Телефонах на {{Glossary("Firefox OS")}} платформа обозначается как `Mobile`. Обратите внимание, что **_platform_** может состоять из нескольких токенов разделенных ";" . Более подробную информацию и примеры смотрите ниже.
3. **rv:_geckoversion_** указывает релизную версию Gecko (например, "_17.0_"). В последних браузерах **_geckoversion_** совпадает с **_firefoxversion_**.
4. **_Gecko/geckotrail_** указывает, что браузер основан на Gecko. (На ПК **_geckotrail_** всегда является фиксированной строкой `20100101`.)
5. **_Firefox/firefoxversion_** обозначает, что браузером является Firefox, и указывает его версию (например, "_17.0_").

### Примеры

```
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Строка UA в Chrome

Строка user agent в Chrome (или браузерах на на основе движка Chromium/Blink) аналогична строке Firefox. Для совместимости добавлены строки `KHTML, like Gecko` и `Safari`.

### Примеры

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Строка UA в Opera

Браузер Opera также основан на движке Blink, поэтому он выглядит почти так же, как строка UA в Chrome, но добавляет `"OPR/<version>"`.

### Примеры

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

В старых версиях Opera на базе Presto строки выглядят так:

```
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Строка UA в Microsoft Edge

Браузер Edge также основан на движке Blink. Добавляется `"Edg/<version>"`.

### Примеры

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

## Строка UA в Safari

В этом примере строка user agent представлена в мобильной версии Safari. Она содержит слово `"Mobile"`.

### Примеры

```
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## Строка UA в Internet Explorer

### Примеры

```
Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)
```

## Строка UA у Поискового бота (Crawler)

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

## Совместимость с браузером

{{Compat}}

## Смотрите также

- [User-Agent detection, history and checklist](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Firefox user agent string reference](/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [Browser detection using the user agent](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
