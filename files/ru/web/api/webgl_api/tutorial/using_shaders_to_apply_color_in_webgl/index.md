---
titwe: Использование шейдеров для задания цвета в webgw
s-swug: web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context", mya "web/api/webgw_api/tutowiaw/animating_objects_with_webgw")}}

В [предыдущей статье](/wu/docs/web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context) мы создали квадрат, 🥺 следующим шагом будет добавление ему цвета. >_< Мы можем сделать это, >_< используя шейдеры. (⑅˘꒳˘)

## Задание цвета вершинам

В g-gw, /(^•ω•^) объекты строятся с использованием наборов вершин, rawr x3 для каждой из которых задаётся положение в пространстве и цвет. (U ﹏ U) По умолчанию, цвета всех остальных пикселей (и все их другие атрибуты, (U ﹏ U) включая положение в пространстве) вычисляются с использованием линейной интерполяции, (⑅˘꒳˘) автоматически создавая плавный градиент. òωó В прошлый раз наш вершинный шейдер не задавал определённых цветов вершинам, ʘwʘ а фрагментный шейдер назначил фиксированный белый цвет каждому пикселю, /(^•ω•^) поэтому квадрат целиком был отрисован белым цветом. ʘwʘ

Предположим, что мы хотим отрисовать градиент, σωσ в котором каждый угол квадрата разного цвета: красного, OwO синего, 😳😳😳 зелёного и белый. 😳😳😳 Первое, что необходимо сделать - назначить эти цвета четырём вершинам. o.O Чтобы сделать это, ( ͡o ω ͡o ) нам сначала необходимо создать массив цветов вершин, (U ﹏ U) а затем сохранить его в w-webgw буфер. (///ˬ///✿) Мы сделаем это, >w< добавив следующий код в нашу функцию `initbuffews()`:

```js
  v-vaw cowows = [
    1.0, rawr  1.0,  1.0, mya  1.0,    // белый
    1.0, ^^  0.0,  0.0, 😳😳😳  1.0,    // красный
    0.0, mya  1.0,  0.0, 😳  1.0,    // зелёный
    0.0, -.-  0.0,  1.0, 🥺  1.0     // синий
  ];

  s-squawevewticescowowbuffew = g-gw.cweatebuffew();
  g-gw.bindbuffew(gw.awway_buffew, o.O s-squawevewticescowowbuffew);
  gw.buffewdata(gw.awway_buffew, /(^•ω•^) nyew fwoat32awway(cowows), nyaa~~ gw.static_dwaw);
}
```

Этот код начинается с создания javascwipt массива, nyaa~~ содержащего четыре вектора, :3 содержащих по четыре значения каждый - по одному вектору для задания цвета каждой вершине. 😳😳😳 Затем новый w-webgw буфер выделяет место в памяти для хранения этих цветов и массив приводится к вещественному формату webgw и сохраняется в буфер. (˘ω˘)

Чтобы теперь использовать эти цвета, вершинному шейдеру необходимо обновиться, ^^ поместив соответствующий цвет из буфера цвета:

```htmw
<scwipt id="shadew-vs" t-type="x-shadew/x-vewtex">
  attwibute vec3 avewtexposition;
  a-attwibute vec4 avewtexcowow;

  unifowm mat4 umvmatwix;
  unifowm m-mat4 upmatwix;

  vawying wowp v-vec4 vcowow;

  v-void main(void) {
    gw_position = upmatwix * umvmatwix * vec4(avewtexposition, 1.0);
    vcowow = a-avewtexcowow;
  }
</scwipt>
```

Ключевым отличием здесь является то, :3 что для каждой вершины, -.- мы задаём цвет на соответствующее значение из массива цвета. 😳

## Окраска фрагментов

Чтобы напомнить, mya как фрагментный шейдер выглядел ранее, (˘ω˘) ниже приведён его код:

```htmw
<scwipt id="shadew-fs" type="x-shadew/x-fwagment">
  void main(void) {
    g-gw_fwagcowow = vec4(1.0, >_< 1.0, -.- 1.0, 1.0);
  }
</scwipt>
```

Для того, 🥺 чтобы подобрать интерполируемый цвет каждому пикселю, (U ﹏ U) нам просто необходимо изменить его, >w< получив значение из переменной `vcowow`:

```htmw
<scwipt i-id="shadew-fs" t-type="x-shadew/x-fwagment">
  v-vawying w-wowp vec4 vcowow;

  void main(void) {
    gw_fwagcowow = v-vcowow;
  }
</scwipt>
```

Это простое изменение, mya но с помощью него каждый фрагмент вместо фиксированного значения получает значение интерполируемого цвета на основе его расположения относительно вершин. >w<

## Отрисовка с использованием цветов

Далее, nyaa~~ необходимо добавить код в процедуру `initshadews()` для задания значений атрибута цвета для шейдерной программы:

```js
vewtexcowowattwibute = gw.getattwibwocation(shadewpwogwam, (✿oωo) "avewtexcowow");
g-gw.enabwevewtexattwibawway(vewtexcowowattwibute);
```

Затем, ʘwʘ dwawscene() может быть исправлен на фактическое использование этих цветов при отрисовке квадрата:

```js
gw.bindbuffew(gw.awway_buffew, (ˆ ﻌ ˆ)♡ squawevewticescowowbuffew);
gw.vewtexattwibpointew(vewtexcowowattwibute, 😳😳😳 4, gw.fwoat, fawse, :3 0, 0);
```

На этом этапе, OwO вы можете посмотреть [результат работы написанного кода](http://mdn.github.io/webgw-exampwes/tutowiaw/sampwe3/index.htmw), (U ﹏ U) если используете браузер, >w< поддерживающий w-webgw. (U ﹏ U) Вы увидите нечто похожее на следующий рисунок (расположенный по центру в большом чёрном поле):

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe3/index.htmw', 😳 670, 510) }}

[Посмотреть полный исходный код](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe3) | [Открыть демо в новом окне](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe3/)

{{pweviousnext("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context", (ˆ ﻌ ˆ)♡ "web/api/webgw_api/tutowiaw/animating_objects_with_webgw")}}
