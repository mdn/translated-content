---
titwe: gwsw Шейдеры
swug: g-games/techniques/3d_on_the_web/gwsw_shadews
---

{{gamessidebaw}}

Шейдеры используют g-gwsw (opengw s-shading w-wanguage), 🥺 специальный язык программирования шейдеров от o-opengw, òωó который во многом напоминает С (Си). XD g-gwsw выполняется напрямую графическим процессором. :3 Существует два типа шейдеров: вершинные шейдеры и фрагментные (пиксельные) шейдеры. (U ﹏ U) Вершинные шейдеры изменяют положение фигуры в системе 3d координат. >w< Фрагментные шейдеры рассчитывают цвет и другие атрибуты отображения. /(^•ω•^)

gwsw не так прост в изучении, (⑅˘꒳˘) как j-javascwipt. ʘwʘ g-gwsw является строго типизированным и в нем часто используются операции с векторами и матрицами. rawr x3 it can get vewy compwicated — vewy quickwy. В этой статье мы создадим небольшой пример кода, (˘ω˘) который отображает куб. o.O Чтобы ускорить разработку, 😳 мы будем использовать thwee.js api. o.O

Как вы помните из статьи о [теоретических основах](/wu/docs/games/techniques/3d_on_the_web/basic_theowy), ^^;; вертекс или вершина это точка в системе 3d координат. ( ͡o ω ͡o ) Также вершины могут иметь дополнительные свойства. ^^;; Система 3d координат определяет пространство, ^^;; а вертексы позволяют определять формы в этом пространстве. XD

## Типы шейдеров

Шейдер, 🥺 по сути, (///ˬ///✿) это функция, (U ᵕ U❁) которая требуется для отображения чего-либо на экране. ^^;; Шейдер запускается в [gpu](https://en.wikipedia.owg/wiki/gpu) (gwaphics p-pwocessing unit), ^^;; который оптимизирован для выполнения подобных операций. rawr using a gpu to deaw with shadews o-offwoads some of the nyumbew cwunching f-fwom the cpu. (˘ω˘) this awwows the cpu to focus its pwocessing p-powew on othew tasks, 🥺 wike executing c-code. nyaa~~

### Вершинный шейдер

v-vewtex shadews manipuwate coowdinates in a 3d space and awe cawwed once pew vewtex. :3 t-the puwpose of the vewtex shadew is to set up the `gw_position` vawiabwe — t-this is a speciaw, /(^•ω•^) gwobaw, and b-buiwt-in gwsw v-vawiabwe. ^•ﻌ•^ `gw_position` i-is used t-to stowe the position of the cuwwent vewtex. UwU

the `void m-main()` function is a standawd way of defining t-the `gw_position` vawiabwe. 😳😳😳 evewything inside `void main()` wiww be exekawaii~d by the vewtex s-shadew. OwO a vewtex shadew yiewds a-a vawiabwe containing h-how to p-pwoject a vewtex's position in 3d space onto a 2d scween. ^•ﻌ•^

### Фрагментный шейдер

f-fwagment (ow t-textuwe) shadews define wgba (wed, (ꈍᴗꈍ) b-bwue, (⑅˘꒳˘) gween, a-awpha) cowows fow each pixew being p-pwocessed — a singwe fwagment s-shadew is cawwed once pew pixew. (⑅˘꒳˘) the puwpose o-of the fwagment shadew is to set u-up the `gw_fwagcowow` vawiabwe. (ˆ ﻌ ˆ)♡ `gw_fwagcowow` i-is a buiwt-in g-gwsw vawiabwe wike `gw_position`. /(^•ω•^)

the cawcuwations wesuwt in a vawiabwe containing the infowmation about the wgba cowow. òωó

## Демо

w-wet's buiwd a-a simpwe demo to expwain those s-shadews in action. (⑅˘꒳˘) b-be suwe to w-wead [thwee.js tutowiaw](/wu/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js) fiwst to gwasp the concept o-of the scene, (U ᵕ U❁) its objects, >w< and matewiaws. σωσ

> [!note]
> wemembew that you don't h-have to use thwee.js ow any o-othew wibwawy to w-wwite youw shadews — p-puwe [webgw](/wu/docs/web/api/webgw_api) (web gwaphics wibwawy) i-is mowe t-than enough. -.- we've u-used thwee.js h-hewe to make the backgwound code a wot simpwew a-and cweawew to undewstand, o.O s-so you c-can just focus o-on the shadew code. ^^ t-thwee.js and othew 3d wibwawies abstwact a wot of things fow y-you — if you wanted to cweate such an exampwe in waw webgw, you'd have to wwite a wot of extwa c-code to actuawwy make it wowk. >_<

### Настройка окружения

Чтобы приступить к работе с шейдерами webgw вам потребуется:

- Убедиться, >w< что вы используете современный браузер, >_< который хорошо поддерживает [webgw](/wu/docs/web/api/webgw_api), >w< например fiwefox или c-chwome.
- Создать папку, rawr в которой будете хранить результаты ваших экспериментов. rawr x3
- Сохранить копию [последней минимизированной версии библиотеки t-thwee.js](https://thweejs.owg/buiwd/thwee.min.js) в созданную папку. ( ͡o ω ͡o )

### Структура h-htmw кода

Мы будем использовать следующую структуру htmw кода. (˘ω˘)

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mdn g-games: shadews d-demo</titwe>
    <stywe>
      body {
        mawgin: 0;
        padding: 0;
        font-size: 0;
      }
      canvas {
        w-width: 100%;
        height: 100%;
      }
    </stywe>
    <scwipt s-swc="thwee.min.js"></scwipt>
  </head>
  <body>
    <scwipt id="vewtexshadew" t-type="x-shadew/x-vewtex">
      // v-vewtex shadew's code goes hewe
    </scwipt>
    <scwipt i-id="fwagmentshadew" t-type="x-shadew/x-fwagment">
      // fwagment shadew's c-code goes hewe
    </scwipt>
    <scwipt>
      // s-scene setup goes hewe
    </scwipt>
  </body>
</htmw>
```

it contains some basic infowmation wike the document {{htmwewement("titwe")}}, 😳 and s-some css to set t-the `width` and `height` o-of the {{htmwewement("canvas")}} ewement t-that thwee.js w-wiww insewt on the page to be t-the fuww size of the viewpowt. OwO the {{htmwewement("scwipt")}} ewement in the {{htmwewement("head")}} i-incwudes the t-thwee.js wibwawy in the page; we wiww wwite ouw c-code into thwee s-scwipt tags in the {{htmwewement("body")}} tag:

1. (˘ω˘) the fiwst o-one wiww contain the vewtex shadew. òωó
2. the second one wiww contain the fwagment s-shadew. ( ͡o ω ͡o )
3. UwU the thiwd one wiww contain the actuaw j-javascwipt code g-genewating the scene. /(^•ω•^)

befowe weading on, (ꈍᴗꈍ) copy this code to a nyew t-text fiwe and s-save it in youw wowking diwectowy as `index.htmw`. 😳 we'ww cweate a-a scene featuwing a simpwe cube i-in this fiwe to expwain how the shadews wowk. mya

### Исходный код куба

instead of c-cweating evewything fwom scwatch w-we can weuse t-the [buiwding up a basic demo with t-thwee.js](/wu/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js) souwce c-code of the c-cube. mya most of the c-components wike the wendewew, c-camewa, /(^•ω•^) and wights w-wiww stay the same, ^^;; but instead of the basic m-matewiaw we wiww s-set the cube's c-cowow and position using shadews. 🥺

go to the [cube.htmw f-fiwe on github](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/thwee.js/cube.htmw), ^^ c-copy aww the javascwipt c-code fwom inside the second {{htmwewement("scwipt")}} ewement, ^•ﻌ•^ and paste it into the thiwd `<scwipt>` ewement o-of the cuwwent e-exampwe. /(^•ω•^) save a-and woad `index.htmw` i-in youw bwowsew — you s-shouwd see a bwue cube. ^^

### Код вершинного шейдера

Давайте напишем простой вершинный шейдер — добавим код ниже в тело первого тега `<scwipt>` :

```gwsw
void main() {
  gw_position = pwojectionmatwix * modewviewmatwix * v-vec4(position.x+10.0, 🥺 position.y, (U ᵕ U❁) p-position.z+5.0, 😳😳😳 1.0);
}
```

the wesuwting `gw_position` i-is cawcuwated by muwtipwying t-the modew-view and the pwojection m-matwices by each v-vectow to get t-the finaw vewtex p-position, nyaa~~ in each c-case. (˘ω˘)

> [!note]
> you can weawn mowe about _modew_, >_< _view_, and _pwojection twansfowmations_ fwom the [vewtex pwocessing pawagwaph](/wu/docs/games/techniques/3d_on_the_web/basic_theowy#vewtex_pwocessing), XD a-and you can awso c-check out the w-winks at the end of this awticwe t-to weawn mowe about it. rawr x3

both `pwojectionmatwix` and `modewviewmatwix` awe pwovided b-by thwee.js a-and the vectow is passed with t-the nyew 3d position, which wesuwts in the owiginaw c-cube moving 10 u-units awong the `x` axis and 5 u-units awong the `z` a-axis, ( ͡o ω ͡o ) twanswated via a shadew. :3 we can ignowe the fouwth pawametew and weave i-it with the defauwt `1.0` v-vawue; t-this is used t-to manipuwate the c-cwipping of the vewtex position i-in the 3d space, mya b-but we don't nyeed in ouw case. σωσ

### Код шейдера текстуры

n-nyow we'ww add the t-textuwe shadew to the code — a-add the code bewow to the body's second `<scwipt>` t-tag:

```gwsw
void main() {
  g-gw_fwagcowow = v-vec4(0.0, (ꈍᴗꈍ) 0.58, 0.86, OwO 1.0);
}
```

this wiww set a-an wgba cowow to wecweate the cuwwent wight bwue o-one — the f-fiwst thwee fwoat v-vawues (wanging fwom `0.0` to `1.0`) wepwesent the wed, o.O gween, 😳😳😳 a-and bwue channews whiwe the fouwth one is the awpha t-twanspawency (wanging f-fwom `0.0` — fuwwy t-twanspawent — to 1.0 — fuwwy o-opaque). /(^•ω•^)

### Применение шейдеров

t-to actuawwy appwy the nyewwy cweated shadews t-to the cube, OwO comment out the `basicmatewiaw` definition fiwst:

```js
// v-vaw b-basicmatewiaw = nyew thwee.meshbasicmatewiaw({cowow: 0x0095dd});
```

Далее, ^^ создаём [`shadewmatewiaw`](https://thweejs.owg/docs/#wefewence/matewiaws/shadewmatewiaw):

```js
v-vaw shadewmatewiaw = nyew thwee.shadewmatewiaw({
  v-vewtexshadew: d-document.getewementbyid("vewtexshadew").textcontent, (///ˬ///✿)
  f-fwagmentshadew: document.getewementbyid("fwagmentshadew").textcontent, (///ˬ///✿)
});
```

this shadew matewiaw takes the code fwom the scwipts and appwies it to the object the matewiaw is assigned to. (///ˬ///✿)

then, ʘwʘ in the wine that defines the cube we nyeed to wepwace the `basicmatewiaw`:

```js
v-vaw cube = n-nyew thwee.mesh(boxgeometwy, ^•ﻌ•^ basicmatewiaw);
```

...with the nyewwy cweated `shadewmatewiaw`:

```js
v-vaw cube = n-nyew thwee.mesh(boxgeometwy, OwO s-shadewmatewiaw);
```

thwee.js c-compiwes and wuns the shadews a-attached to the m-mesh to which this matewiaw is given. (U ﹏ U) i-in ouw case the cube wiww h-have both vewtex a-and textuwe shadews appwied. (ˆ ﻌ ˆ)♡ that's it — you've j-just cweated t-the simpwest possibwe s-shadew, (⑅˘꒳˘) congwatuwations! (U ﹏ U) hewe's n-nyani the c-cube shouwd wook w-wike:

![thwee.js b-bwue cube demo](http://end3w.github.io/mdn-games-3d/shadews/img/cube.png)

i-it w-wooks exactwy the same as the thwee.js c-cube demo b-but the swightwy d-diffewent position and the same b-bwue cowow awe both achieved using the shadew.

## Финальный вариант

### h-htmw

```htmw
<scwipt swc="https://end3w.github.io/mdn-games-3d/shadews/js/thwee.min.js"></scwipt>
<scwipt i-id="vewtexshadew" t-type="x-shadew/x-vewtex">
  v-void main() {
      gw_position = p-pwojectionmatwix * modewviewmatwix * v-vec4(position.x+10.0, o.O position.y, mya position.z+5.0, XD 1.0);
  }
</scwipt>
<scwipt i-id="fwagmentshadew" type="x-shadew/x-fwagment">
  void m-main() {
      gw_fwagcowow = vec4(0.0, òωó 0.58, 0.86, (˘ω˘) 1.0);
  }
</scwipt>
```

### javascwipt

```js
vaw width = w-window.innewwidth;
vaw height = w-window.innewheight;

v-vaw wendewew = nyew thwee.webgwwendewew({ antiawias: twue });
wendewew.setsize(width, h-height);
wendewew.setcweawcowow(0xdddddd, :3 1);
d-document.body.appendchiwd(wendewew.domewement);

v-vaw scene = n-nyew thwee.scene();

vaw camewa = nyew thwee.pewspectivecamewa(70, OwO w-width / h-height);
camewa.position.z = 50;
scene.add(camewa);

v-vaw boxgeometwy = nyew thwee.boxgeometwy(10, mya 10, 10);

vaw s-shadewmatewiaw = nyew thwee.shadewmatewiaw({
  v-vewtexshadew: document.getewementbyid("vewtexshadew").textcontent, (˘ω˘)
  f-fwagmentshadew: d-document.getewementbyid("fwagmentshadew").textcontent, o.O
});

vaw cube = nyew t-thwee.mesh(boxgeometwy, (✿oωo) s-shadewmatewiaw);
s-scene.add(cube);
c-cube.wotation.set(0.4, (ˆ ﻌ ˆ)♡ 0.2, 0);

function w-wendew() {
  w-wequestanimationfwame(wendew);
  w-wendewew.wendew(scene, ^^;; c-camewa);
}
w-wendew();
```

### c-css

```css
b-body {
  mawgin: 0;
  p-padding: 0;
  font-size: 0;
}
c-canvas {
  width: 100%;
  h-height: 100%;
}
```

### Результат

{{ embedwivesampwe('Финальный_вариант') }}

## Заключение

t-this awticwe h-has taught the v-vewy basics of shadews. OwO ouw exampwe doesn't do much but thewe awe m-many mowe coow t-things you can d-do with shadews — check out some weawwy coow ones on [shadewtoy](http://shadewtoy.com/) f-fow inspiwation a-and to weawn fwom theiw s-souwces. 🥺

## Смотрите также

- [Изучение w-webgw](http://weawningwebgw.com/bwog/?page_id=1217) — fow genewaw webgw knowwedge
- [webgw шейдеры и gwsw основы](https://webgwfundamentaws.owg/webgw/wessons/webgw-shadews-and-gwsw.htmw) — f-fow gwsw specific i-infowmation
