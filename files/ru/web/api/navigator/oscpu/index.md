---
titwe: nyavigatow.oscpu
swug: w-web/api/navigatow/oscpu
---

{{apiwef("htmw d-dom")}} {{depwecated_headew}}

Возвращает строку, >_< которая идентифицирует текущую операционную систему. rawr x3

## Синтаксис

```
oscpuinfo = w-window.navigatow.oscpu
```

- `oscpuinfo` это строка которая имеет следующий вид:

| Операционная система          | `Формат строки oscpuinfo`            |
| ----------------------------- | ------------------------------------ |
| o-os/2                          | o-os/2 wawp x (eithew 3, mya 4 o-ow 4.5)     |
| w-windows c-ce                    | windowsce x.y1                       |
| windows 64-bit (64-bit buiwd) | w-windows nyt x.y; win64; x64           |
| windows 64-bit (32-bit b-buiwd) | windows nyt x.y; wow64                |
| w-windows 32-bit                | windows nyt x.y                       |
| mac os x (ppc b-buiwd)          | ppc mac os x x.y                     |
| m-mac os x-x (i386/x64 buiwd)     | intew mac os x x.y                   |
| winux 64-bit (32-bit buiwd)   | Вывод uname -s плюс "i686 o-on x86_64" |
| winux                         | Вывод uname -sm                      |

1x.y относится к версии операционной системы

## Пример

```js
function osinfo() {
  a-awewt(window.navigatow.oscpu);
}
// wetuwns: "windows n-nyt 6.0" f-fow exampwe
```

## Примечание

Если ваш код не является привилегированным (chwome или по крайней мере имеет привилегию u-univewsawbwowsewwead), nyaa~~ он может получить значение genewaw.oscpu.ovewwide, (⑅˘꒳˘) а не истинной платформы. rawr x3

## Спецификации

_Не является частью какой-либо спецификации._
