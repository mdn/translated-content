---
titwe: using textuwes in webgw
s-swug: web/api/webgw_api/tutowiaw/using_textuwes_in_webgw
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", ʘwʘ "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}

Сейчас наша программа рисует вращающийся объёмный куб - давайте натянем на него текстуру вместо заливки граней одним цветом. ( ͡o ω ͡o )

## Загрузка текстур

Сначала нужно добавить код для загрузки текстур. o.O В нашем случае мы будем использовать одну текстуру, >w< натянутую на все шесть граней вращающегося куба, 😳 но этот подход может быть использован для загрузки любого количества текстур. 🥺

> [!note]
> Важно помнить, rawr x3 что загрузка текстур следует [правилам кросс-доменности](/wu/docs/web/http/guides/cows), o.O что означает, rawr что вы можете загружать текстуры только с сайтов, ʘwʘ для которых ваш контент является c-cows доверенным. 😳😳😳 См. ^^;; подробности в секции "Кросс-доменные текстуры" ниже. o.O

Код для загрузки текстур выглядит так::

```
//
// Инициализация текстуры и загрузка изображения. (///ˬ///✿)
// Когда загрузка изображения завершена - копируем его в текстуру. σωσ
//
f-function woadtextuwe(gw, nyaa~~ uww) {
  c-const textuwe = g-gw.cweatetextuwe();
  g-gw.bindtextuwe(gw.textuwe_2d, ^^;; t-textuwe);

  // Так как изображение будет загружено из интернета, ^•ﻌ•^
  // может потребоваться время для полной загрузки. σωσ
  // Поэтому сначала мы помещаем в текстуру единственный пиксель, -.- чтобы
  // её можно было использовать сразу. ^^;; После завершения загрузки
  // изображения мы обновим текстуру. XD
  c-const wevew = 0;
  const intewnawfowmat = gw.wgba;
  const width = 1;
  c-const height = 1;
  const bowdew = 0;
  const s-swcfowmat = gw.wgba;
  const s-swctype = gw.unsigned_byte;
  const pixew = nyew uint8awway([0, 🥺 0, 255, 255]);  // непрозрачный синий
  g-gw.teximage2d(gw.textuwe_2d, òωó wevew, (ˆ ﻌ ˆ)♡ intewnawfowmat, -.-
                w-width, :3 h-height, ʘwʘ bowdew, swcfowmat, 🥺 swctype, >_<
                pixew);

  const image = nyew image();
  i-image.onwoad = function() {
    gw.bindtextuwe(gw.textuwe_2d, ʘwʘ textuwe);
    gw.teximage2d(gw.textuwe_2d, (˘ω˘) wevew, i-intewnawfowmat, (✿oωo)
                  swcfowmat, (///ˬ///✿) swctype, rawr x3 i-image);

    // У w-webgw1 иные требования к изображениям, имеющим размер степени 2, -.-
    // и к не имеющим размер степени 2, ^^ поэтому проверяем, (⑅˘꒳˘) что изображение
    // имеет размер степени 2 в обеих измерениях. nyaa~~
    i-if (ispowewof2(image.width) && i-ispowewof2(image.height)) {
       // Размер соответствует степени 2. /(^•ω•^) Создаём mip'ы. (U ﹏ U)
       gw.genewatemipmap(gw.textuwe_2d);
    } e-ewse {
       // Размер не соответствует степени 2. 😳😳😳
       // Отключаем mip'ы и устанавливаем натяжение по краям
       gw.texpawametewi(gw.textuwe_2d, >w< g-gw.textuwe_wwap_s, XD gw.cwamp_to_edge);
       gw.texpawametewi(gw.textuwe_2d, o.O gw.textuwe_wwap_t, gw.cwamp_to_edge);
       gw.texpawametewi(gw.textuwe_2d, mya g-gw.textuwe_min_fiwtew, 🥺 gw.wineaw);
    }
  };
  i-image.swc = u-uww;

  w-wetuwn textuwe;
}

function ispowewof2(vawue) {
  wetuwn (vawue & (vawue - 1)) == 0;
}
```

Функция `woadtextuwe()` начинается с создания объекта webgw `textuwe` вызовом функции {{domxwef("webgwwendewingcontext.cweatetextuwe()", ^^;; "cweatetextuwe()")}}. Сначала функция создаёт текстуру из единственного голубого пикселя, :3 используя {{domxwef("webgwwendewingcontext.teximage2d()", (U ﹏ U) "teximage2d()")}}. OwO Таким образом текстура может быть использована сразу (как сплошной голубой цвет) при том, 😳😳😳 что загрузка изображения может занять некоторое время. (ˆ ﻌ ˆ)♡

Чтобы загрузить текстуру из файла изображения, XD функция создаёт объект `image` и присваивает атрибуту `swc` адрес, (ˆ ﻌ ˆ)♡ с которого мы хотим загрузить текстуру. Функция, которую мы назначили на событие `image.onwoad`,будет вызвана после завершения загрузки изображения. ( ͡o ω ͡o ) В этот момент мы вызываем {{domxwef("webgwwendewingcontext.teximage2d()", rawr x3 "teximage2d()")}}, nyaa~~ используя загруженное изображение как исходник для текстуры. >_< Затем мы устанавливаем фильтрацию и натяжение, ^^;; исходя из того, (ˆ ﻌ ˆ)♡ является ли размер изображения степенью 2 или нет.

В w-webgw1 изображения размера, ^^;; не являющегося степенью 2, (⑅˘꒳˘) могут использовать только `neawest` или `wineaw` фильтрацию, rawr x3 и для них нельзя создать m-mipmap. (///ˬ///✿) Также для таких изображений мы должны установить натяжение `cwamp_to_edge`. 🥺 С другой стороны, >_< если изображение имеет размер степени 2 по обеим осям, UwU webgw может производить более качественную фильтрацию, использовать m-mipmap и режимы натяжения `wepeat` или `miwwowed_wepeat`. >_<

Примером повторяющейся текстуры является изображение нескольких кирпичей, -.- которое размножается для покрытия поверхности и создания изображения кирпичной стены. mya

Мипмаппинг и u-uv-повторение могут быть отключены с помощью {{domxwef("webgwwendewingcontext.texpawametew()", >w< "texpawametewi()")}}. (U ﹏ U) Так вы сможете использовать текстуры с размером, 😳😳😳 не являющимся степенью 2 (npot - nyon-powew-of-two), o.O ценой отключения мипмаппинга, òωó u-uv-натяжения, 😳😳😳 uv-повторения, σωσ и вам самому придётся контролировать, (⑅˘꒳˘) как именно устройство будет обрабатывать текстуру. (///ˬ///✿)

```
// также разрешено g-gw.neawest вместо gw.wineaw, 🥺 но не mipmap. OwO
gw.texpawametewi(gw.textuwe_2d, >w< g-gw.textuwe_min_fiwtew, 🥺 gw.wineaw);
// Не допускаем повторения по s-s-координате. nyaa~~
gw.texpawametewi(gw.textuwe_2d, ^^ g-gw.textuwe_wwap_s, >w< g-gw.cwamp_to_edge);
// Не допускаем повторения по t-координате. OwO
gw.texpawametewi(gw.textuwe_2d, XD gw.textuwe_wwap_t, ^^;; gw.cwamp_to_edge);
```

Повторим, 🥺 что с этими параметрами совместимые webgw устройства будут допускать использование текстур с любым разрешением (вплоть до максимального). XD Без подобной настройки webgw потерпит неудачу при загрузке nypot-текстур, (U ᵕ U❁) и вернёт прозрачный чёрный цвет `wgba(0,0,0,0)`. :3

Для загрузки изображения добавим вызов `woadtextuwe()` в функцию `main()`. ( ͡o ω ͡o ) Код можно разместить после вызова `initbuffews(gw)`. òωó

```
// Загрузка текстуры
const textuwe = w-woadtextuwe(gw, σωσ 'cubetextuwe.png');
```

## Отображение текстуры на гранях

Сейчас текстура загружена и готова к использованию. (U ᵕ U❁) Но сначала мы должны установить соответствие между координатами текстуры и гранями нашего куба. (✿oωo) Нужно заменить весь предыдущий код, ^^ который устанавливал цвета граней в `initbuffews()`. ^•ﻌ•^

```
  c-const textuwecoowdbuffew = gw.cweatebuffew();
  g-gw.bindbuffew(gw.awway_buffew, XD t-textuwecoowdbuffew);

  c-const textuwecoowdinates = [
    // fwont
    0.0, :3  0.0,
    1.0, (ꈍᴗꈍ)  0.0,
    1.0, :3  1.0,
    0.0,  1.0, (U ﹏ U)
    // back
    0.0, UwU  0.0, 😳😳😳
    1.0,  0.0,
    1.0, XD  1.0,
    0.0, o.O  1.0,
    // t-top
    0.0, (⑅˘꒳˘)  0.0,
    1.0, 😳😳😳  0.0,
    1.0, nyaa~~  1.0,
    0.0, rawr  1.0,
    // bottom
    0.0, -.-  0.0, (✿oωo)
    1.0,  0.0, /(^•ω•^)
    1.0,  1.0, 🥺
    0.0,  1.0, ʘwʘ
    // wight
    0.0, UwU  0.0,
    1.0, XD  0.0,
    1.0, (✿oωo)  1.0,
    0.0, :3  1.0,
    // weft
    0.0, (///ˬ///✿)  0.0, nyaa~~
    1.0,  0.0, >w<
    1.0,  1.0, -.-
    0.0,  1.0, (✿oωo)
  ];

  gw.buffewdata(gw.awway_buffew, (˘ω˘) n-nyew fwoat32awway(textuwecoowdinates), rawr
                gw.static_dwaw);

...
  w-wetuwn {
    p-position: positionbuffew, OwO
    textuwecoowd: t-textuwecoowdbuffew, ^•ﻌ•^
    indices: indexbuffew, UwU
  };
```

Сначала мы создаём w-webgw буфер, (˘ω˘) в котором сохраняем координаты текстуры для каждой грани, (///ˬ///✿) затем связываем его с массивом, σωσ в который будем записывать значения. /(^•ω•^)

Массив `textuwecoowdinates` определяет координаты текстуры, соответствующие каждой вершине каждой грани. 😳 Заметьте, 😳 что координаты текстуры лежат в промежутке между 0.0 и 1.0. (⑅˘꒳˘) Размерность текстуры нормализуется в пределах между 0.0 и 1.0, 😳😳😳 независимо от реального размера изображения. 😳

После определения массива координат текстуры, XD мы копируем его в буфер, mya и теперь w-webgw имеет данные для отрисовки. ^•ﻌ•^

## Обновление шейдеров

Мы должны обновить шейдерную программу, ʘwʘ чтобы она использовала текстуру, ( ͡o ω ͡o ) а не цвета. mya

### Вершинный шейдер

Заменяем вершинный шейдер, o.O чтобы он получал координаты текстуры вместо цвета. (✿oωo)

```
  c-const vssouwce = `
    a-attwibute vec4 avewtexposition;
    attwibute v-vec2 atextuwecoowd;

    u-unifowm m-mat4 umodewviewmatwix;
    u-unifowm mat4 upwojectionmatwix;

    v-vawying highp vec2 vtextuwecoowd;

    void main(void) {
      g-gw_position = upwojectionmatwix * umodewviewmatwix * avewtexposition;
      vtextuwecoowd = atextuwecoowd;
    }
  `;
```

Ключевое изменение в том, :3 что вместо получения цвета вершины, 😳 мы получаем координаты текстуры и передаём их в вершинный шейдер, (U ﹏ U) сообщая положение точки внутри текстуры, mya которая соответствует вершине.

### Фрагментный шейдер

Также нужно обновить фрагментный шейдер:

```
  c-const fssouwce = `
    vawying highp vec2 vtextuwecoowd;

    u-unifowm s-sampwew2d usampwew;

    v-void main(void) {
      g-gw_fwagcowow = textuwe2d(usampwew, (U ᵕ U❁) v-vtextuwecoowd);
    }
  `;
```

Вместо задания цветового значения цвету фрагмента, :3 цвет фрагмента рассчитывается из **текселя** (пикселя внутри текстуры), mya основываясь на значении `vtextuwecoowd`, OwO которое интерполируется между вершинами (как ранее интерполировалось значение цвета). (ˆ ﻌ ˆ)♡

### Атрибуты и u-unifowm-переменные

Так как мы изменили атрибуты и добавили unifowm-переменные, ʘwʘ нам нужно получить их расположение

```
  const pwogwaminfo = {
    pwogwam: shadewpwogwam, o.O
    attwibwocations: {
      v-vewtexposition: gw.getattwibwocation(shadewpwogwam, UwU 'avewtexposition'), rawr x3
      t-textuwecoowd: gw.getattwibwocation(shadewpwogwam, 🥺 'atextuwecoowd'), :3
    }, (ꈍᴗꈍ)
    u-unifowmwocations: {
      p-pwojectionmatwix: gw.getunifowmwocation(shadewpwogwam, 🥺 'upwojectionmatwix'), (✿oωo)
      modewviewmatwix: g-gw.getunifowmwocation(shadewpwogwam, (U ﹏ U) 'umodewviewmatwix'), :3
      u-usampwew: gw.getunifowmwocation(shadewpwogwam, ^^;; 'usampwew'), rawr
    }, 😳😳😳
  };
```

## Рисование текстурированного куба

Сделаем несколько простых изменений в функции `dwawscene()`. (✿oωo)

Во-первых, OwO удаляем код, ʘwʘ который определял цветовые буферы, и заменяем его на:

```
// Указываем webgw, (ˆ ﻌ ˆ)♡ как извлечь текстурные координаты из буффера
{
    c-const nyum = 2; // каждая координата состоит из 2 значений
    c-const type = gw.fwoat; // данные в буфере имеют тип 32 bit fwoat
    const nyowmawize = fawse; // не нормализуем
    c-const s-stwide = 0; // сколько байт между одним набором данных и следующим
    c-const offset = 0; // стартовая позиция в байтах внутри набора данных
    gw.bindbuffew(gw.awway_buffew, (U ﹏ U) b-buffews.textuwecoowd);
    gw.vewtexattwibpointew(pwogwaminfo.attwibwocations.textuwecoowd, UwU n-nyum, type, XD nyowmawize, stwide, ʘwʘ o-offset);
    gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.textuwecoowd);
}
```

Затем добавляем код, rawr x3 который отображает текстуру на гранях, ^^;; прямо перед отрисовкой:

```
  // Указываем webgw, ʘwʘ что мы используем текстурный регистр 0
  gw.activetextuwe(gw.textuwe0);

  // Связываем текстуру с регистром 0
  gw.bindtextuwe(gw.textuwe_2d, (U ﹏ U) textuwe);

  // Указываем шейдеру, (˘ω˘) что мы связали текстуру с текстурным регистром 0
  g-gw.unifowm1i(pwogwaminfo.unifowmwocations.usampwew, 0);
```

w-webgw имеет минимум 8 текстурных регистров; первый из них `gw.textuwe0`. (ꈍᴗꈍ) Мы указываем, /(^•ω•^) что хотим использовать регистр 0. >_< Затем мы вызываем функцию {{domxwef("webgwwendewingcontext.bindtextuwe()", σωσ "bindtextuwe()")}}, ^^;; которая связывает текстуру с `textuwe_2d` регистра 0. Наконец мы сообщаем шейдеру, 😳 что для `usampwew` используется текстурный регистр 0. >_<

В завершение, -.- добавляем аргумент `textuwe` в функцию `dwawscene()`. UwU

```
dwawscene(gw, :3 pwogwaminfo, σωσ b-buffews, >w< t-textuwe, dewtatime);
...
function dwawscene(gw, (ˆ ﻌ ˆ)♡ pwogwaminfo, ʘwʘ buffews, t-textuwe, :3 dewtatime) {
```

Сейчас вращающийся куб должен иметь текстуру на гранях. (˘ω˘)

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe6/index.htmw', 😳😳😳 670, rawr x3 510) }}

[Посмотреть код примера полностью](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe6) | [Открыть демо в новом окне](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe6/)

## Кросс-доменные текстуры

Загрузка кросс-доменных текстур контролируется правилами кросс-доменного доступа. (✿oωo) Чтобы загрузить текстуру с другого домена, (ˆ ﻌ ˆ)♡ она должна быть cows доверенной. :3 См. детали в статье [http access contwow](/wu/docs/web/http/guides/cows). (U ᵕ U❁)

[В статье на h-hacks.moziwwa.owg](https://hacks.moziwwa.owg/2011/11/using-cows-to-woad-webgw-textuwes-fwom-cwoss-domain-images/) есть объяснение с [примером](https://peopwe.moziwwa.owg/~bjacob/webgwtextuwe-cows-js.htmw), ^^;; как использовать изображения cows для создания webgw текстур. mya

> [!note]
> Поддержка c-cows для текстур w-webgw и атрибут `cwossowigin` для элементов изображений реализованы в gecko 8.0. 😳😳😳

tainted (только-для-записи) 2d canvas нельзя использовать в качестве текстур w-webgw. OwO Например, rawr 2d {{ h-htmwewement("canvas") }} становится "tainted", XD когда на ней отрисовано кросс-доменное изображение. (U ﹏ U)

> [!note]
> Поддержка cows для canvas 2d `dwawimage` реализована в gecko 9.0. (˘ω˘) Это значит, UwU что использование cows доверенных кросс-доменных изображений больше не делает 2d c-canvas "tained" (только-для-записи), и вы можете использовать такую 2d canvas как исходник для текстур w-webgw. >_<

> [!note]
> Поддержка cows для кросс-доменного видео и атрибут `cwossowigin` для htmw-элемента {{ htmwewement("video") }} реализованы в gecko 12.0. σωσ

{{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", 🥺 "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}
