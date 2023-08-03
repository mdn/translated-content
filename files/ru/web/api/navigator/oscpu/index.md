---
title: Navigator.oscpu
slug: Web/API/Navigator/oscpu
---

{{ ApiRef("HTML DOM") }}

Возвращает строку, которая идентифицирует текущую операционную систему.

## Синтаксис

```
oscpuInfo = window.navigator.oscpu
```

- `oscpuInfo` это строка которая имеет следующий вид:

| Операционная система          | `Формат строки oscpuInfo`            |
| ----------------------------- | ------------------------------------ |
| OS/2                          | OS/2 Warp x (either 3, 4 or 4.5)     |
| Windows CE                    | WindowsCE x.y1                       |
| Windows 64-bit (64-bit build) | Windows NT x.y; Win64; x64           |
| Windows 64-bit (32-bit build) | Windows NT x.y; WOW64                |
| Windows 32-bit                | Windows NT x.y                       |
| Mac OS X (PPC build)          | PPC Mac OS X x.y                     |
| Mac OS X (i386/x64 build)     | Intel Mac OS X x.y                   |
| Linux 64-bit (32-bit build)   | Вывод uname -s плюс "i686 on x86_64" |
| Linux                         | Вывод uname -sm                      |

1x.y относится к версии операционной системы

## Пример

```js
function osInfo() {
  alert(window.navigator.oscpu);
}
// returns: "Windows NT 6.0" for example
```

## Примечание

Если ваш код не является привилегированным (chrome или по крайней мере имеет привилегию UniversalBrowserRead), он может получить значение general.oscpu.override, а не истинной платформы.

## Спецификация

_Не является частью какой-либо спецификации._
