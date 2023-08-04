---
title: Navigator.doNotTrack
slug: Web/API/Navigator/doNotTrack
---

{{ ApiRef("HTML DOM") }}{{SeeCompatTable}}

Возвращает настройки пользователя do-not-track. Будет "yes" если пользователь попросил не отслеживать его на веб-сайтах, контенте, рекламе.

## Синтаксис

```
dnt = navigator.doNotTrack;
```

Значение отражает , что в заголовке do-not-track header, т.е. значения {"1", "0", "unspecified" }.Примечание: до Gecko 32, Gecko были использованы значения { "yes", "no", "unspecified"} ([bug 887703](https://bugzilla.mozilla.org/show_bug.cgi?id=887703)).

## Пример

```
dump(window.navigator.doNotTrack);
// prints "1" if DNT is enabled; "0" if the user opted-in for tracking; otherwise this is "unspecified"
```

## Спецификация

[Tracking Preference Expression](http://www.w3.org/TR/tracking-dnt/) (Working проект) основан на более ранней версии этой спецификации, где `navigator.doNotTrack` **это** значение посланное заголовком `do-not-track`.

## Смотрите также

- [The Do Not Track field guide](/en/The_Do_Not_Track_Field_Guide)

## Совместимость с браузерами

{{Compat}}
