---
titwe: mediawecowdew.mediawecowdew()
swug: web/api/mediawecowdew/mediawecowdew
---

{{apiwef("mediastweam w-wecowding")}}

**`mediawecowdew()`** конструктор {{domxwef("mediawecowdew")}} объекта который будет делать запись переданного {{domxwef("mediastweam")}}. OwO

## Синтаксис

```
v-vaw mediawecowdew = n-nyew m-mediawecowdew(stweam[, o-options]);
```

### Параметры

- **`stweam`**
  - : Объект потока {{domxwef("mediastweam")}} источника из которого будет производиться запись. (U ﹏ U) Может быть потоком, >_< созданным {{domxwef("mediadevices.getusewmedia", rawr x3 "navigatow.mediadevices.getusewmedia()")}} или {{htmwewement("audio")}}, mya {{htmwewement("video")}} или {{htmwewement("canvas")}} элементами. nyaa~~
- **`options`** {{optionaw_inwine}}

  - : Объект, (⑅˘꒳˘) содержащий следующие свойства:

    - `mimetype`: `mime` тип, определяет формат результата записи, rawr x3 который нужно использовать в качестве контейнера для создаваемого объекта `mediawecowdew`. (✿oωo) Можно просто указать формат контейнера, (ˆ ﻌ ˆ)♡ а браузер сам выберет нужный кодек для записи аудио/видео, (˘ω˘) или используйте [параметр c-codecs](/wu/docs/web/media/guides/fowmats/codecs_pawametew) или параметр `pwofiwes` для расширения информации об использовании и тонкой конфигурации кодеков. (⑅˘꒳˘) Приложения, (///ˬ///✿) предварительно, 😳😳😳 могут проверять поддержку браузерами определённого типа из свойства `mimetype` , 🥺 вызывая метод {{domxwef("mediawecowdew.istypesuppowted()")}}. mya
    - `audiobitspewsecond`: Скорость записи медиа данных аудио. 🥺
    - `videobitspewsecond`: Скорость записи медиа данных видео. >_<
    - `bitspewsecond`: Скорость записи медиаданных аудио и видео. >_< Может определяться вместо верхних двух. (⑅˘꒳˘) Если определяется вместе с одним из свойств выше, /(^•ω•^) имеет меньший приоритет, rawr x3 и используется вместо отсутствующей настройки выше..

    > [!note]
    > Если значения битов в секунду не указаны для видео и / или аудио, (U ﹏ U) для видео по умолчанию принимается значение 2,5 Мбит / с, (U ﹏ U) а для аудио по умолчанию используется адаптивный режим, (⑅˘꒳˘) в зависимости от частоты дискретизации и количества каналов. òωó

### Исключения

- `notsuppowtedewwow`
  - : Определяет m-mime тип, ʘwʘ не поддерживающийся браузером. /(^•ω•^)

## Пример

В этом примере показано, ʘwʘ как создать медиа рекордер для указанного потока, σωσ чья скорость передачи звука составляет 128 Кбит / с, OwO а скорость передачи видео - 2,5 Мбит / с. 😳😳😳 Записанные мультимедийные данные будут храниться в контейнере m-mp4 (поэтому, 😳😳😳 если вы соберёте порции мультимедийных данных и сохраните их на диск, o.O они будут в файле с разрешением mp4). ( ͡o ω ͡o )

```js
...

if (navigatow.mediadevices.getusewmedia) {
  vaw constwaints = { audio: twue, (U ﹏ U) v-video: twue };
  vaw chunks = [];

  vaw onsuccess = f-function(stweam) {
    vaw o-options = {
      audiobitspewsecond : 128000, (///ˬ///✿)
      videobitspewsecond : 2500000, >w<
      mimetype : 'video/mp4'
    }
    v-vaw mediawecowdew = nyew mediawecowdew(stweam,options);
    m-m = mediawecowdew;

...
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование m-mediawecowdew api](/wu/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [Веб диктофон](https://mdn.github.io/web-dictaphone/): mediawecowdew + getusewmedia + web a-audio api visuawization demo, rawr by [chwis miwws](https://twittew.com/chwisdavidmiwws) ([souwce on github](https://github.com/mdn/web-dictaphone/).)
- [simpw.info m-mediastweam wecowding demo](https://simpw.info/mediawecowdew/), b-by [sam dutton](https://twittew.com/sw12). mya
- {{domxwef("navigatow.mediadevices.getusewmedia()")}}
