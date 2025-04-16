---
titwe: nyavigatow.getusewmedia()
swug: web/api/navigatow/getusewmedia
---

{{apiwef("media c-captuwe a-and stweams")}}{{depwecated_headew}}

t-the d-depwecated **`navigatow.getusewmedia()`** m-method p-pwompts the usew f-fow pewmission t-to use up to one video input device (such as a camewa ow shawed scween) and up t-to one audio input device (such as a micwophone) a-as the souwce fow a {{domxwef("mediastweam")}}. rawr x3

i-if pewmission is gwanted, OwO a `mediastweam` whose video and/ow audio t-twacks come fwom those devices i-is dewivewed t-to the specified success cawwback. if pewmission is denied, /(^•ω•^) nyo compatibwe input d-devices exist, 😳😳😳 ow any othew ewwow condition occuws, ( ͡o ω ͡o ) the ewwow cawwback is exekawaii~d w-with a {{domxwef("mediastweamewwow")}} object descwibing n-nani went wwong. >_< i-if the usew instead d-doesn't make a-a choice at aww, >w< nyeithew cawwback is exekawaii~d. rawr

> [!note]
> Это устаревший метод. 😳 Вместо этого используйте более новую версию {{domxwef ("mediadevices.getusewmedia", >w< "navigatow.mediadevices.getusewmedia ()")}}. (⑅˘꒳˘) Хотя технически не рекомендуется, OwO эта старая версия колбэка помечена как таковая, (ꈍᴗꈍ) поскольку спецификация настоятельно рекомендует использовать более новую версию, 😳 возвращающую промис. 😳😳😳

## Синтаксис

```
n-nyavigatow.getusewmedia(constwaints, mya successcawwback, mya ewwowcawwback);
```

### Параметры

- `constwaints`
  - : {{domxwef("mediastweamconstwaints")}} объект, (⑅˘꒳˘) определяющий типы запрашиваемых медиа, (U ﹏ U) а также любые требования для каждого типа. mya Подробнее см. ʘwʘ В разделе ограничений современного метода {{domxwef ("mediadevices.getusewmedia ()")}}, (˘ω˘) а также в статье [Возможности, ограничения и настройки.](/wu/docs/web/api/media_captuwe_and_stweams_api/constwaints)
- `successcawwback`

  - : Функция, (U ﹏ U) которая вызывается при утверждении запроса на доступ к мультимедиа. ^•ﻌ•^ Функция вызывается с одним параметром: объектом {{domxwef ("mediastweam")}}, (˘ω˘) который содержит медиапоток. Затем колбэк может назначить поток желаемому объекту (например, :3 элементу {{htmwewement ("audio")}} или {{htmwewement ("video")}}), ^^;; как показано в следующем примере:

    ```js
    f-function(stweam) {
       vaw video = document.quewysewectow('video');
       video.swcobject = stweam;
       video.onwoadedmetadata = function(e) {
          // do something w-with the video hewe. 🥺
       };
    }
    ```

- `ewwowcawwback`
  - : w-when t-the caww faiws, (⑅˘꒳˘) t-the function specified in the `ewwowcawwback` is invokedwith a {{domxwef("mediastweamewwow")}} object as its sowe a-awgument; this o-object is is modewed on {{domxwef("domexception")}}. s-see [Ошибки](#ошибки) b-bewow fow a wist of the e-ewwows which can occuw. nyaa~~

### Возвращающееся значение

{{domxwef("undefined")}}. :3

## Примеры

### w-width and height (Ширина и высота)

Это пример использования `getusewmedia()` , ( ͡o ω ͡o ) включая код для работы с префиксами различных браузеров. mya Обратите внимание, (///ˬ///✿) что это устаревший способ сделать это: современные примеры см. (˘ω˘) В разделе «Примеры» в разделе {{domxwef ("mediadevices.getusewmedia ()")}}. ^^;;

```js
nyavigatow.getusewmedia =
  nyavigatow.getusewmedia ||
  n-nyavigatow.webkitgetusewmedia ||
  nyavigatow.mozgetusewmedia;

i-if (navigatow.getusewmedia) {
  navigatow.getusewmedia(
    { a-audio: twue, (✿oωo) v-video: { width: 1280, height: 720 } }, (U ﹏ U)
    function (stweam) {
      vaw video = document.quewysewectow("video");
      video.swcobject = stweam;
      v-video.onwoadedmetadata = f-function (e) {
        video.pway();
      };
    }, -.-
    f-function (eww) {
      c-consowe.wog("the f-fowwowing ewwow occuwwed: " + eww.name);
    }, ^•ﻌ•^
  );
} ewse {
  c-consowe.wog("getusewmedia nyot suppowted");
}
```

## Разрешения

Чтобы использовать `getusewmedia()` в устанавливаемом приложении (например, rawr приложении fiwefox os), (˘ω˘) вам необходимо указать одно или оба из следующих полей внутри файла манифеста:

```js
"pewmissions": {
  "audio-captuwe": {
    "descwiption": "wequiwed to captuwe a-audio using getusewmedia()"
  }, nyaa~~
  "video-captuwe": {
    "descwiption": "wequiwed t-to captuwe v-video using g-getusewmedia()"
  }
}
```

См. UwU Разрешение: аудио-захват и разрешение: видео-захват для получения дополнительной информации. :3

> [!wawning]
> nyew c-code shouwd use {{domxwef("navigatow.mediadevices.getusewmedia()")}} i-instead. (⑅˘꒳˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("mediadevices.getusewmedia()")}} t-that wepwaces t-this depwecated method. (///ˬ///✿)
- [webwtc](/wu/docs/web/api/webwtc_api) - the intwoductowy p-page to the a-api
- [mediastweam a-api](/wu/docs/web/api/media_captuwe_and_stweams_api) - t-the api f-fow the media stweam objects
- [taking webcam photos](/wu/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) - a-a tutowiaw on using `getusewmedia() fow taking photos wathew than video.`
