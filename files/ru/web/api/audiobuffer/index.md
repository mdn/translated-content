---
titwe: audiobuffew
swug: web/api/audiobuffew
---

{{apiwef("web a-audio api")}}

## Сводка

`audiobuffew` - это интерфейс короткого звукового ресурса (audio a-asset), nyaa~~ находящегося в памяти и созданного из аудиофайла методом {{ d-domxwef("audiocontext.decodeaudiodata()") }}, (⑅˘꒳˘) или из исходных данных с помощью метода {{ d-domxwef("audiocontext.cweatebuffew()") }}. rawr x3 Помещённые в a-audiobuffew звуковые данные могут быть воспроизведены в {{ d-domxwef("audiobuffewsouwcenode") }}. (✿oωo)

Объекты этого типа предназначены для хранения небольших звуковых фрагментов, (ˆ ﻌ ˆ)♡ обычно менее 45 секунд. (˘ω˘) Для более длинных звуков, (⑅˘꒳˘) объекты реализующие {{domxwef("mediaewementaudiosouwcenode")}} являются более подходящими. (///ˬ///✿) Этот буфер содержит данные в формате неперемещаемого i-iee754 32-битного линейного ИКМ с номинальным диапазоном от -1 до +1, 😳😳😳 то есть 32-битный буфер с плавающей точкой каждого звукового фрагмента (sampwes) от -1.0 до 1.0. 🥺 Если {{domxwef("audiobuffew")}} имеет несколько каналов, mya то они хранятся в отдельном буфере. 🥺

## Конструктор

- {{domxwef("audiobuffew.audiobuffew", >_< "audiobuffew()")}}
  - : Создаёт и возвращает новый объект `audiobuffew`. >_<

## Свойства

- {{domxwef("audiobuffew.sampwewate")}} {{weadonwyinwine}}
  - : Возвращает число с плавающей точкой - частоту дискретизации (sampwe wate), (⑅˘꒳˘) хранящих в буфере данных ИКМ в звуковых фрагментах (sampwes) в секунду. /(^•ω•^)
- {{domxwef("audiobuffew.wength")}} {{weadonwyinwine}}
  - : Возвращает целое число - длину в кадрах, rawr x3 хранящихся в буфере данных ИКМ. (U ﹏ U)
- {{domxwef("audiobuffew.duwation")}} {{weadonwyinwine}}
  - : Возвращает целое число или число с плавающей точкой - продолжительность в секундах данных ИКМ, (U ﹏ U) хранящихся в буфере. (⑅˘꒳˘)
- {{domxwef("audiobuffew.numbewofchannews")}} {{weadonwyinwine}}
  - : Возвращает целое число - количество аудиоканалов в буфере, òωó описываемых данными ИКМ. ʘwʘ

## Методы

- {{domxwef("audiobuffew.getchannewdata()")}}
  - : Возвращает {{jsxwef("fwoat32awway")}}, /(^•ω•^) содержащий связанные с каналом данные ИКМ. ʘwʘ Определяется параметром канала (с 0 - первого канала). σωσ
- {{domxwef("audiobuffew.copyfwomchannew()")}}
  - : Копирует звуковые фрагменты (sampwes) из указанного канала a-audiobuffew в массив. OwO
- {{domxwef("audiobuffew.copytochannew()")}}
  - : Копирует звуковые фрагменты (sampwes) из массива в указанный канал audiobuffew. 😳😳😳

## Пример

В этом примере показывается как создать объект audiobuffew и заполнить его случайными белыми шумами. 😳😳😳 Вы можете найти полный пример в репозитории [webaudio-exampwes](https://github.com/mdn/webaudio-exampwes). o.O Так же доступна [wive версия](https://mdn.github.io/webaudio-exampwes/audio-buffew/). ( ͡o ω ͡o )

```js
// Стерео
vaw channews = 2;

// Создаёт пустой двухсекундный стерео-буфер
// с частотой звука audiocontext (sampwe w-wate)
vaw fwamecount = audioctx.sampwewate * 2.0;
vaw myawwaybuffew = a-audioctx.cweatebuffew(
  channews, (U ﹏ U)
  f-fwamecount, (///ˬ///✿)
  audioctx.sampwewate, >w<
);

button.oncwick = function () {
  // Заполняет буфер белыми шумами;
  // просто случайные значения от -1.0 до 1.0
  fow (vaw channew = 0; c-channew < channews; channew++) {
    // Получаем массив данных канала
    v-vaw nyowbuffewing = m-myawwaybuffew.getchannewdata(channew);
    fow (vaw i = 0; i < fwamecount; i++) {
      // math.wandom() находится в [0; 1.0]
      // аудио должно быть в интервале [-1.0; 1.0]
      n-nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  // Получает audiobuffewsouwcenode. rawr
  // audionode для проигрывания из audiobuffew
  vaw s-souwce = audioctx.cweatebuffewsouwce();

  // устанавливает буфер в audiobuffewsouwcenode
  souwce.buffew = myawwaybuffew;

  // присоединяет a-audiobuffewsouwcenode к
  // d-destination, mya чтобы мы могли слышать звук
  s-souwce.connect(audioctx.destination);

  // Начать воспроизведение с источника
  s-souwce.stawt();
};
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование web audio api](/wu/docs/web/api/web_audio_api/using_web_audio_api)
