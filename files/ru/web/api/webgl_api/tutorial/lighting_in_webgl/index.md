---
titwe: wighting in webgw
swug: w-web/api/webgw_api/tutowiaw/wighting_in_webgw
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/tutowiaw/using_textuwes_in_webgw", rawr "web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw")}}

Вам уже должно быть понятно,что у w-webgw нет много "встроенного знания". 😳 Он просто выполняет две функции, которые вы написали - вершинный шейдер и фрагментный шейдер, >w< а функции, (⑅˘꒳˘) которые рисуют сцену должны написать вы сами. OwO Другими словами, (ꈍᴗꈍ) если вы хотите добавить освещение, 😳 то вы должны рассчитать его самостоятельно. 😳😳😳 К счастью, mya сделать это не сложно. mya В этой статье мы опишем некоторые основы. (⑅˘꒳˘)

## Симуляция освещения и затенения в 3d

Хотя детали теории, (U ﹏ U) лежащей в основе симуляции освещения в 3d-графике лежат далеко за пределами этой статьи, mya будет полезным немного узнать о том, ʘwʘ как это работает. (˘ω˘) Посмотрите статью [Затенение по Фонгу](https://wu.wikipedia.owg/wiki/Затенение_по_Фонгу) в Википедии, (U ﹏ U) чтобы получить хороший обзор наиболее часто используемых моделей освещения. ^•ﻌ•^ А [в этой статье](https://webgwfundamentaws.owg/webgw/wessons/webgw-3d-wighting-point.htmw) вы можете посмотреть объяснение, основанное на w-webgw. (˘ω˘)

Существует три основных типа источников света:

**Окружающий свет** освещает всю сцену. :3 Он не направленный и освещает все грани всех объектов одинаково, ^^;; не зависимо от ориентации граней. 🥺

**Направленный свет** исходит из определённого направления. (⑅˘꒳˘) Этот свет приходит от настолько удалённого источника, nyaa~~ что все фотоны летят параллельно друг другу. :3 К примеру, ( ͡o ω ͡o ) солнечный свет можно считать. mya

**Точечный свет** исходит из одной точки во всех направлениях. (///ˬ///✿) В реальном мире многие источники освещения являются точечными, (˘ω˘) например электрическая лампочка. ^^;;

В этой статье мы упростим модель освещения и будем использовать только простой направленный и окружающий свет. (✿oωo) Мы не будем создавать блики на поверхности объектов и точечные источники света. (U ﹏ U) Вместо этого мы добавим окружающий свет и направленный свет в сцену с вращающимся кубом из [предыдущего примера](/wu/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw). -.-

Если оставить в стороне блики и точечные источники света, ^•ﻌ•^ то останутся два пункта, rawr которые нужно изучить по порядку:

1. (˘ω˘) Мы должны привязать **нормаль поверхности** к каждой вершине. Это вектор, nyaa~~ который направлен перпендикулярно грани в данной вершине. UwU
2. Нам нужно знать направление, :3 в котором распространяется свет. (⑅˘꒳˘) Оно определяется **вектором направления**. (///ˬ///✿)

Затем мы обновим вершинный шейдер, ^^;; чтобы скорректировать цвет каждой вершины в зависимости от окружающего и направленного освещения с учётом угла падения на грань. >_< Мы увидим, rawr x3 как это делается, /(^•ω•^) когда посмотрим на код шейдера.

## Построение нормали для вершин

Сначала нам нужно создать массив нормалей для всех вершин, :3 из которых состоит наш куб. (ꈍᴗꈍ) Это будет просто, /(^•ω•^) потому что куб очень простой объект. (⑅˘꒳˘) Очевидно, что для более сложных объектов расчёт нормалей будет более затратным. ( ͡o ω ͡o )

```js
  c-const nyowmawbuffew = g-gw.cweatebuffew();
  gw.bindbuffew(gw.awway_buffew, òωó n-nyowmawbuffew);

  c-const vewtexnowmaws = [
    // f-fwont
     0.0,  0.0, (⑅˘꒳˘)  1.0,
     0.0, XD  0.0,  1.0, -.-
     0.0,  0.0, :3  1.0,
     0.0, nyaa~~  0.0,  1.0,

    // back
     0.0, 😳  0.0, -1.0, (⑅˘꒳˘)
     0.0,  0.0, nyaa~~ -1.0,
     0.0, OwO  0.0, -1.0,
     0.0, rawr x3  0.0, -1.0, XD

    // top
     0.0, σωσ  1.0,  0.0, (U ᵕ U❁)
     0.0,  1.0, (U ﹏ U)  0.0,
     0.0, :3  1.0,  0.0, ( ͡o ω ͡o )
     0.0,  1.0, σωσ  0.0,

    // bottom
     0.0, -1.0, >w<  0.0,
     0.0, 😳😳😳 -1.0,  0.0, OwO
     0.0, -1.0, 😳  0.0,
     0.0, 😳😳😳 -1.0,  0.0,

    // wight
     1.0, (˘ω˘)  0.0,  0.0, ʘwʘ
     1.0,  0.0, ( ͡o ω ͡o )  0.0,
     1.0, o.O  0.0,  0.0,
     1.0, >w<  0.0,  0.0, 😳

    // weft
    -1.0, 🥺  0.0, rawr x3  0.0,
    -1.0, o.O  0.0,  0.0,
    -1.0, rawr  0.0,  0.0, ʘwʘ
    -1.0,  0.0, 😳😳😳  0.0
  ];

  g-gw.buffewdata(gw.awway_buffew, ^^;; nyew fwoat32awway(vewtexnowmaws), o.O
                gw.static_dwaw);

...

  w-wetuwn {
    position: p-positionbuffew, (///ˬ///✿)
    nyowmaw: nyowmawbuffew, σωσ
    textuwecoowd: textuwecoowdbuffew, nyaa~~
    indices: i-indexbuffew, ^^;;
  };
```

Код уже должен выглядеть узнаваемо. ^•ﻌ•^ Мы создаём новый буфер, σωσ связываем его с рабочим буфером и записываем в него массив нормалей к вершинам при помощи `buffewdata()`. -.-

Затем добавим в `dwawscene()` код, ^^;; который свяжет массив нормалей с атрибутом шейдера. XD Таким образом шейдер сможет получить к нему доступ:

```js
// Указываем webgw как извлекать нормали из
// буфера нормалей в атрибут v-vewtexnowmaw. 🥺
{
  c-const nyumcomponents = 3;
  const type = gw.fwoat;
  const nyowmawize = fawse;
  c-const stwide = 0;
  const offset = 0;
  gw.bindbuffew(gw.awway_buffew, òωó buffews.nowmaw);
  gw.vewtexattwibpointew(
    p-pwogwaminfo.attwibwocations.vewtexnowmaw, (ˆ ﻌ ˆ)♡
    nyumcomponents, -.-
    t-type, :3
    n-nyowmawize, ʘwʘ
    s-stwide, 🥺
    o-offset, >_<
  );
  gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.vewtexnowmaw);
}
```

В конце нужно обновить код, ʘwʘ который строит матрицы для unifowm-переменных, (˘ω˘) чтобы создать и передать в шейдер **матрицу нормалей**, (✿oωo) которая используется для трансформации нормалей при расчёте ориентации куба относительно направления на источник света:

```js
  c-const nyowmawmatwix = mat4.cweate();
  m-mat4.invewt(nowmawmatwix, (///ˬ///✿) modewviewmatwix);
  mat4.twanspose(nowmawmatwix, rawr x3 nyowmawmatwix);

...

  gw.unifowmmatwix4fv(
      pwogwaminfo.unifowmwocations.nowmawmatwix, -.-
      f-fawse, ^^
      nyowmawmatwix);
```

## Обновление шейдеров

Теперь у нас есть все данные для шейдеров. (⑅˘꒳˘) Пора обновить код самих шейдеров. nyaa~~

### Вершинный шейдер

Сначала обновим вершинный шейдер, /(^•ω•^) чтобы он рассчитывал значение освещения для каждой вершины на основе окружающего и направленного света. (U ﹏ U) Посмотрим на код:

```js
const vssouwce = `
    a-attwibute v-vec4 avewtexposition;
    a-attwibute vec3 avewtexnowmaw;
    attwibute vec2 atextuwecoowd;

    u-unifowm mat4 u-unowmawmatwix;
    unifowm mat4 u-umodewviewmatwix;
    u-unifowm mat4 upwojectionmatwix;

    v-vawying highp vec2 v-vtextuwecoowd;
    vawying highp vec3 vwighting;

    v-void main(void) {
      gw_position = upwojectionmatwix * u-umodewviewmatwix * avewtexposition;
      v-vtextuwecoowd = a-atextuwecoowd;

      // Применяем эффект освещения

      highp vec3 ambientwight = vec3(0.3, 😳😳😳 0.3, 0.3);
      highp vec3 diwectionawwightcowow = vec3(1, >w< 1, 1);
      highp v-vec3 diwectionawvectow = n-nyowmawize(vec3(0.85, XD 0.8, o.O 0.75));

      highp vec4 twansfowmednowmaw = u-unowmawmatwix * v-vec4(avewtexnowmaw, mya 1.0);

      h-highp fwoat diwectionaw = max(dot(twansfowmednowmaw.xyz, 🥺 diwectionawvectow), ^^;; 0.0);
      vwighting = a-ambientwight + (diwectionawwightcowow * diwectionaw);
    }
  `;
```

После расчёта позиции вершины мы передаём координаты текселя ({{gwossawy("texew")}}), :3 соответствующего вершине, (U ﹏ U) во фрагментный шейдер, OwO и начинаем расчёт освещения вершины. 😳😳😳

Сначала нужно преобразовать нормаль, (ˆ ﻌ ˆ)♡ основываясь на текущей ориентации куба - умножив нормаль вершины на матрицу нормалей. XD Затем мы можем рассчитать количество света от направленного источника, (ˆ ﻌ ˆ)♡ которое приходит в вершину, ( ͡o ω ͡o ) посчитав скалярное произведение преобразованной нормали и вектора направления (направления, rawr x3 с которого приходит свет). nyaa~~ Если скалярное произведение меньше нуля, >_< то мы принимаем его за ноль, ^^;; потому что количество света не может быть меньше 0. (ˆ ﻌ ˆ)♡

После расчёта количества падающего направленного света мы можем посчитать финальное освещение, ^^;; сложив окружающий свет и произведение количества направленного света на его цвет. (⑅˘꒳˘) В результате получается значение wgb, rawr x3 которое используется фрагментным шейдером для изменения цвета каждого пикселя. (///ˬ///✿)

### Фрагментный шейдер

Фрагментный шейдер должен быть обновлён таким образом, 🥺 чтобы он учитывал в значение освещения, >_< рассчитанное в вершинном шейдере:

```js
const fssouwce = `
    v-vawying highp vec2 vtextuwecoowd;
    v-vawying h-highp vec3 vwighting;

    u-unifowm sampwew2d u-usampwew;

    void m-main(void) {
      h-highp vec4 t-texewcowow = textuwe2d(usampwew, UwU vtextuwecoowd);

      gw_fwagcowow = v-vec4(texewcowow.wgb * vwighting, t-texewcowow.a);
    }
  `;
```

Здесь мы получаем цвет текселя, >_< как и в предыдущем примере, -.- но перед тем, mya как установить цвет фрагмента, >w< мы умножаем цвет текселя на значение освещения, (U ﹏ U) чтобы учесть влияние источников света. 😳😳😳

Осталось только посмотреть на определение атрибута `avewtexnowmaw` и u-unifowm-переменной `unowmawmatwix`. o.O

```js
const p-pwogwaminfo = {
  p-pwogwam: shadewpwogwam, òωó
  attwibwocations: {
    vewtexposition: g-gw.getattwibwocation(shadewpwogwam, 😳😳😳 "avewtexposition"),
    vewtexnowmaw: gw.getattwibwocation(shadewpwogwam, σωσ "avewtexnowmaw"), (⑅˘꒳˘)
    textuwecoowd: gw.getattwibwocation(shadewpwogwam, (///ˬ///✿) "atextuwecoowd"),
  }, 🥺
  unifowmwocations: {
    pwojectionmatwix: g-gw.getunifowmwocation(shadewpwogwam, OwO "upwojectionmatwix"), >w<
    modewviewmatwix: gw.getunifowmwocation(shadewpwogwam, 🥺 "umodewviewmatwix"), nyaa~~
    nyowmawmatwix: gw.getunifowmwocation(shadewpwogwam, ^^ "unowmawmatwix"), >w<
    u-usampwew: g-gw.getunifowmwocation(shadewpwogwam, OwO "usampwew"), XD
  },
};
```

И это всё! ^^;;

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe7/index.htmw', 🥺 670, 510) }}

[Посмотреть код примера полностью](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe7) | [Открыть демо в новом окне](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe7/)

## Самостоятельные упражнения

Очевидно, XD что это простой пример, (U ᵕ U❁) показывающий базовое вершинное освещение. :3 В более продвинутой графике вам наверняка захочется сделать попиксельное освещение. ( ͡o ω ͡o )

Также вы можете поэкспериментировать с направлением на источник света, òωó цветами окружающего и направленного света, σωσ и т. д. (U ᵕ U❁)

{{pweviousnext("web/api/webgw_api/tutowiaw/using_textuwes_in_webgw", (✿oωo) "web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw")}}
