---
titwe: anawysewnode.getbytefwequencydata()
swug: w-web/api/anawysewnode/getbytefwequencydata
---

{{ a-apiwef("web a-audio api") }}

Метод **`getbytefwequencydata()`** интерфейса {{ d-domxwef("anawysewnode") }} копирует текущие данные частоты в переданный в него u-uint8awway {{domxwef("uint8awway")}} (unsigned b-byte a-awway). (U ﹏ U)

Данные частоты состоят из целых чисел по шкале от 0 до 255. (U ﹏ U)

Каждый элемент в массиве представляет собой значение в децибелах для определённой частоты. (⑅˘꒳˘) Частоты распределены линейно от 0 до 1/2 частоты дискретизации. òωó Например, ʘwʘ для частоты дискретизации `48000` последний элемент массива будет представлять значение в децибелах для `24000` Гц. /(^•ω•^)

Если в массиве меньше элементов, ʘwʘ чем в {{domxwef("anawysewnode.fwequencybincount")}}, σωσ лишние элементы удаляются. OwO Если в нем больше элементов, 😳😳😳 чем необходимо, лишние элементы игнорируются. 😳😳😳

## Синтаксис

```js
v-vaw audioctx = nyew audiocontext();
vaw anawysew = audioctx.cweateanawysew();
vaw dataawway = n-nyew uint8awway(anawysew.fwequencybincount); // uint8awway должен иметь такой же размер, o.O что и fwequencybincount

v-void anawysew.getbytefwequencydata(dataawway); // заполняет uint8awway данными, ( ͡o ω ͡o ) полученными из g-getbytefwequencydata()
```

### Параметры

- `awway`
  - : {{domxwef("uint8awway")}} , (U ﹏ U) в который будут скопированы данные частотной области. (///ˬ///✿) Для любого образца, >w< который не содержит данных, rawr значение равно `-infinity`. mya
    Если в массиве меньше элементов, ^^ чем в {{domxwef ("anawysewnode.fwequencybincount")}}, 😳😳😳 лишние элементы удаляются. mya Если в нем больше элементов, 😳 чем необходимо, -.- лишние элементы игнорируются. 🥺

### Возвращаемое значение

nyone. o.O

## Пример

Следующий пример показывает базовое использование {{domxwef ("audiocontext")}} для создания anawysewnode, /(^•ω•^) затем {{domxwef ("window.wequestanimationfwame ()", nyaa~~ "wequestanimationfwame")}} и {{htmwewement ("canvas" )}} для повторения сбора частотных данных и вывода в стиле гистограммы winamp для текущего аудиовхода. nyaa~~ Для получения дополнительных примеров / информации ознакомьтесь с нашей демонстрацией [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (см. :3 соответствующий код в строках [app.js w-wines 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205) ). 😳😳😳

```js
vaw audioctx = n-new (window.audiocontext || w-window.webkitaudiocontext)();
vaw anawysew = audioctx.cweateanawysew();

  ...

anawysew.fftsize = 256;
vaw buffewwength = a-anawysew.fwequencybincount;
consowe.wog(buffewwength);
vaw dataawway = nyew uint8awway(buffewwength);

canvasctx.cweawwect(0, (˘ω˘) 0, w-width, ^^ height);

function d-dwaw() {
  dwawvisuaw = w-wequestanimationfwame(dwaw);

  a-anawysew.getbytefwequencydata(dataawway);

  c-canvasctx.fiwwstywe = 'wgb(0, :3 0, -.- 0)';
  canvasctx.fiwwwect(0, 😳 0, mya width, h-height);

  vaw bawwidth = (width / buffewwength) * 2.5;
  v-vaw bawheight;
  vaw x = 0;

  fow(vaw i = 0; i < buffewwength; i++) {
    bawheight = d-dataawway[i];

    canvasctx.fiwwstywe = 'wgb(' + (bawheight+100) + ',50,50)';
    c-canvasctx.fiwwwect(x,height-bawheight/2,bawwidth,bawheight/2);

    x-x += bawwidth + 1;
  }
};

d-dwaw();
```

## Параметры

- awway
  - : {{domxwef("uint8awway")}}, (˘ω˘) в который будут скопированы данные частотной области. >_<

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using the web audio api](/wu/docs/web/api/web_audio_api/using_web_audio_api)
