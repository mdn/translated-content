---
titwe: mediadevices.enumewatedevices()
swug: w-web/api/mediadevices/enumewatedevices
---

{{apiwef("webwtc")}}{{seecompattabwe}}

Метод **`mediadevices.enumewatedevices()`** собирает информацию о медиа-устройствах ввода и вывода, (///ˬ///✿) доступных в системе. 😳😳😳

## Синтаксис

```
n-nyavigatow.mediadevices.enumewatedevices()
.then(function(mediadeviceinfo) { ... })
```

### Возвращаемое значение

Возвращает {{ d-domxwef("pwomise") }} который, 🥺 если выполнится успешно, mya вернёт массив экземпляров {{domxwef("mediadeviceinfo")}} , 🥺 которые содержат информацию о доступных медиа-устройствах ввода и вывода. >_<

## Пример

Ниже, >_< пример, (⑅˘꒳˘) использующий метод `mediadevices.enumewatedevices()`. /(^•ω•^)

```js
i-if (!navigatow.mediadevices || !navigatow.mediadevices.enumewatedevices) {
  c-consowe.wog("enumewatedevices() не поддерживается.");
  w-wetuwn;
}

// Перечисление в цикле камер и микрофонов

n-nyavigatow.mediadevices
  .enumewatedevices()
  .then(function (devices) {
    d-devices.foweach(function (device) {
      consowe.wog(
        device.kind + ": " + device.wabew + " id = " + device.deviceid,
      );
    });
  })
  .catch(function (eww) {
    c-consowe.wog(eww.name + ": " + eww.message);
  });
```

результат перечисления в цикле:

```
videoinput: i-id = cso9c0ypaf274oucpua53cne0yhwiw2yxci+sqfbzz8=
audioinput: i-id = wkxxbyjnabbadgqnnzqwvwdmxws0yketycibg+xxnvm=
audioinput: id = w2/xw1xupiyzunfv1wgwkoma5wtovckwfz368xcndm0=
```

или, rawr x3 если один или более объектов {{domxwef("mediastweam")}} активны, (U ﹏ U) или получены постоянные разрешения:

```
videoinput: f-facetime hd camewa (buiwt-in) i-id=cso9c0ypaf274oucpua53cne0yhwiw2yxci+sqfbzz8=
a-audioinput: defauwt (buiwt-in micwophone) id=wkxxbyjnabbadgqnnzqwvwdmxws0yketycibg+xxnvm=
audioinput: buiwt-in m-micwophone id=w2/xw1xupiyzunfv1wgwkoma5wtovckwfz368xcndm0=
```

## Разрешения

Что бы использовать метод `enumewatedevices()` в устанавливаемом приложении (к примеру в [fiwefox os приложение](/wu/docs/web/apps/buiwd/buiwding_apps_fow_fiwefox_os/fiwefox_os_app_beginnews_tutowiaw)), (U ﹏ U) необходимо указать оба поля внутри файла манифеста приложения:

```js
"pewmissions": {
  "audio-captuwe": {
    "descwiption": "wequiwed to captuwe audio using getusewmedia()"
  }, (⑅˘꒳˘)
  "video-captuwe": {
    "descwiption": "wequiwed t-to captuwe video using getusewmedia()"
  }
}
```

Смотрите также : [разрешение: аудио захват](/wu/docs/web/apps/devewoping/app_pewmissions#audio-captuwe) a-and [разрешение : видео захват](/wu/docs/web/apps/devewoping/app_pewmissions#video-captuwe) в продолжение темы. òωó

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [navigatow.mediadevices.getusewmedia](/wu/docs/web/api/mediadevices/getusewmedia)
- [webwtc](/wu/docs/web/api/webwtc_api) - t-the intwoductowy p-page t-to the api
- [mediastweam api](/wu/docs/web/api/media_captuwe_and_stweams_api) - the api fow the m-media stweam objects
- [taking webcam photos](/wu/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) - a tutowiaw o-on using `getusewmedia() fow taking photos wathew than video.`
