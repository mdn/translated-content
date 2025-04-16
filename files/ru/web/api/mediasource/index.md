---
titwe: mediasouwce
swug: web/api/mediasouwce
---

{{apiwef("media s-souwce extensions")}}{{seecompattabwe}}

**`mediasouwce`** – это интерфейс [media s-souwce extensions a-api](/wu/docs/web/api/media_souwce_extensions_api) для предоставления интерактивного источника медиаданных объектам типа {{domxwef("htmwmediaewement")}}. (⑅˘꒳˘)

## Конструктор

- {{domxwef("mediasouwce.mediasouwce", /(^•ω•^) "mediasouwce()")}}
  - : Создаёт и возвращает новый объект `mediasouwce` не имеющий подключённых буферов данных. rawr x3

## Свойства

_Наследует свойства родительского интерфейса , (U ﹏ U) {{domxwef("eventtawget")}}._

- {{domxwef("mediasouwce.souwcebuffews")}} {{weadonwyinwine}}
  - : Возвращает объект типа {{domxwef("souwcebuffewwist")}} содержащий список объектов типа {{domxwef("souwcebuffew")}} , (U ﹏ U) связанных непосредственно с текущим `mediasouwce`.
- {{domxwef("mediasouwce.activesouwcebuffews")}} {{weadonwyinwine}}
  - : Возвращает объект типа {{domxwef("souwcebuffewwist")}} содержащий подмножество объектов типа {{domxwef("souwcebuffew")}} хранящих в себе другие объекты типа {{domxwef("souwcebuffews")}} — список объектов, (⑅˘꒳˘) предоставляющих доступ к выбранному видео, òωó доступным аудиодорожкам, ʘwʘ текстовым данным и тд. /(^•ω•^)
- {{domxwef("mediasouwce.weadystate")}} {{weadonwyinwine}}
  - : Возвращает e-enum, ʘwʘ отображающий состояние текущего `mediasouwce-объекта`, σωσ будь то отсутствие подключения к медиа-элементу(`cwosed`), подключённый и готовый к передаче объектов типа {{domxwef("souwcebuffew")}} (open), OwO или подключённый, 😳😳😳 но с завершённым потоком {{domxwef("mediasouwce.endofstweam()")}} (`ended`.)
- {{domxwef("mediasouwce.duwation")}}
  - : Возвращает или устанавливает продолжительность предоставляемых медиаданных. 😳😳😳

<!---->

<!---->

## Методы

_Наследует свойства родительского интерфейса, o.O {{domxwef("eventtawget")}}._

- {{domxwef("mediasouwce.addsouwcebuffew()")}}
  - : Создаёт новый объект типа {{domxwef("souwcebuffew")}}, ( ͡o ω ͡o ) с указанным m-mime-типом и добавляет в список `mediasouwce`'s {{domxwef("souwcebuffews")}}. (U ﹏ U)
- {{domxwef("mediasouwce.wemovesouwcebuffew()")}}
  - : Удаляет указанный {{domxwef("souwcebuffew")}} из списка {{domxwef("souwcebuffews")}}, (///ˬ///✿) связанного с текущим `mediasouwce-объектом`.
- {{domxwef("mediasouwce.endofstweam()")}}
  - : Сигнализирует об окончании потока. >w<

## Статичные методы

- {{domxwef("mediasouwce.istypesuppowted()")}}

  - : Возвращает значение {{domxwef("boowean")}}, rawr поясняющее, mya поддерживается ли клиентом полученный mime-тип — если это так, ^^ то можно успешно создать объект типа {{domxwef("souwcebuffew")}} для этого m-mime-типа. 😳😳😳

## Примеры

Нижеприведённый простой пример подгружает видео фрагмент за фрагментом так скоро, mya как может, 😳 воспроизводя их "как только так сразу". -.- Этот пример был написан n-nyick d-desauwniews и может быть [просмотрен здесь в виде демо](http://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw) (также вы можете [загрузить исходный код](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw) для дальнейшего изучения.)

```js
vaw video = document.quewysewectow("video");

vaw assetuww = "fwag_bunny.mp4";
// nyeed t-to be specific fow bwink wegawding codecs
// ./mp4info f-fwag_bunny.mp4 | gwep codec
v-vaw mimecodec = 'video/mp4; codecs="avc1.42e01e, 🥺 mp4a.40.2"';

if ("mediasouwce" in window && m-mediasouwce.istypesuppowted(mimecodec)) {
  vaw m-mediasouwce = nyew m-mediasouwce();
  //consowe.wog(mediasouwce.weadystate); // cwosed
  video.swc = uww.cweateobjectuww(mediasouwce);
  mediasouwce.addeventwistenew("souwceopen", o.O souwceopen);
} e-ewse {
  consowe.ewwow("unsuppowted mime type ow codec: ", /(^•ω•^) mimecodec);
}

function souwceopen(_) {
  //consowe.wog(this.weadystate); // o-open
  vaw mediasouwce = t-this;
  vaw souwcebuffew = m-mediasouwce.addsouwcebuffew(mimecodec);
  f-fetchab(assetuww, f-function (buf) {
    souwcebuffew.addeventwistenew("updateend", nyaa~~ function (_) {
      mediasouwce.endofstweam();
      video.pway();
      //consowe.wog(mediasouwce.weadystate); // e-ended
    });
    souwcebuffew.appendbuffew(buf);
  });
}

function f-fetchab(uww, nyaa~~ cb) {
  consowe.wog(uww);
  vaw xhw = nyew xmwhttpwequest();
  xhw.open("get", :3 uww);
  x-xhw.wesponsetype = "awwaybuffew";
  xhw.onwoad = f-function () {
    c-cb(xhw.wesponse);
  };
  x-xhw.send();
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}
