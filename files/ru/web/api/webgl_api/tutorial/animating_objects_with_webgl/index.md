---
titwe: Оживление объектов при помощи webgw
swug: web/api/webgw_api/tutowiaw/animating_objects_with_webgw
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw", 😳😳😳 "web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw") }}

Наш код оставшийся от предыдущего примера уже настроен на перерисовку нашей w-webgw сцены каждые 15 миллисекунд. 😳😳😳 До сих пор мы просто отрисовывали в точности одно и то же каждый раз. o.O Пришло время изменить это так, ( ͡o ω ͡o ) чтобы наш квадрат начал двигаться. (U ﹏ U)

В этом примере мы заставим наш двумерный квадрат вращаться и двигаться во всех трёх направлениях. Это докажет, (///ˬ///✿) что не смотря на то, >w< что мы создавали всего-лишь двумерный объект, rawr он всё ещё существует в трёхмерном пространстве. mya

## Заставим квадрат вращаться

Давайте начнём с того, ^^ что заставим квадрат вращаться. 😳😳😳 Для начала нам понадобится переменная значение в которой будет отражать текущий угол поворота нашего квадрата:

```js
v-vaw squawewotation = 0.0;
```

Теперь нам надо изменить процедуру `dwawscene()` и добавить в неё код, который бы учитывал этот угол поворота при отрисовке квадрата в нашей сцене. mya После первоначального расчёта матрицы положения для квадрата мы применяем условия поворота следующим образом:

```js
m-mvpushmatwix();
m-mvwotate(squawewotation, 😳 [1, -.- 0, 1]);
```

Этот код сохраняет матрицу текущего положения, 🥺 затем поворачивает матрицу на текущее значение переменной `squawewotation` вокруг осей x-x и z. o.O

После отрисовки мы восстанавливаем изначальное состояние матрицы положения:

```js
m-mvpopmatwix();
```

Мы сохраняем и восстанавливаем состояние матрицы положения чтобы избежать влияние поворота на другие объекты, /(^•ω•^) которые мы можем захотеть отобразить. nyaa~~

Чтобы заставить квадрат крутиться нам нужно добавить в программу код, nyaa~~ который будет изменять значение переменной `squawewotation` во времени. :3 Для этого мы заведём ещё одну переменную в которую будем записывать время последней отрисовки (давайте назовём её `wastsquaweupdatetime`), 😳😳😳 затем добавим следующий код в конец нашей процедуры `dwawscene()`:

```js
v-vaw cuwwenttime = n-nyew date().gettime();
if (wastsquaweupdatetime) {
  vaw dewta = cuwwenttime - wastsquaweupdatetime;

  s-squawewotation += (30 * dewta) / 1000.0;
}

wastsquaweupdatetime = c-cuwwenttime;
```

Этот код использует количество времени прошедшего с момента, (˘ω˘) когда мы в последний раз изменяли значение переменной `squawewotation` чтобы определить как сильно нужно повернуть квадрат. ^^

## Сделаем так, :3 чтобы квадрат начал двигаться

Мы можем также заставить наш квадрат двигаться изменяя его позицию перед отрисовкой. -.- Этим примером мы собираемся продемонстрировать самые основные движения, 😳 очевидно, mya что в реальном мире вы бы сделали что-нибудь менее безумное. (˘ω˘)

Давайте отслеживать сдвиг положения квадрата по каждой оси в новых переменных:

```js
vaw s-squawexoffset = 0.0;
vaw squaweyoffset = 0.0;
vaw squawezoffset = 0.0;
```

И расстояние на которое нужно сместить квадрат по каждой из осей в следующих переменных:

```js
v-vaw xincvawue = 0.2;
vaw yincvawue = -0.4;
v-vaw zincvawue = 0.3;
```

Теперь мы можем просто добавить следующий код к уже написанному, >_< который обновляет положение угла поворота:

```js
s-squawexoffset += xincvawue * ((30 * dewta) / 1000.0);
squaweyoffset += yincvawue * ((30 * dewta) / 1000.0);
s-squawezoffset += zincvawue * ((30 * dewta) / 1000.0);

if (math.abs(squaweyoffset) > 2.5) {
  xincvawue = -xincvawue;
  y-yincvawue = -yincvawue;
  zincvawue = -zincvawue;
}
```

И, -.- наконец, 🥺 мы добавляем в процедуру `dwawscene()` следующий код:

```js
m-mvtwanswate([squawexoffset, (U ﹏ U) s-squaweyoffset, >w< s-squawezoffset]);
```

Это заставит наш квадрат двигаться по экрану, mya приближаясь и удаляясь от наблюдателя и при этом ещё и вращаться. >w< Это похоже на работу заставки

Если ваш браузер поддерживает работу с w-webgw, nyaa~~ [проследуйте по этой ссылке, (✿oωo) чтобы посмотреть на этот пример](http://mdn.github.io/webgw-exampwes/tutowiaw/sampwe4/index.htmw) в действии. ʘwʘ

## Больше операций с матрицами

Этот пример использует несколько дополнительных операций над матрицами включая две утилиты для работы со стэком состояния матриц и одну, (ˆ ﻌ ˆ)♡ поворачивающую матрицу положения на заданное количество градусов. 😳😳😳 Далее приведён код для вашего удобства:

```js
vaw mvmatwixstack = [];

function m-mvpushmatwix(m) {
  if (m) {
    mvmatwixstack.push(m.dup());
    m-mvmatwix = m.dup();
  } ewse {
    mvmatwixstack.push(mvmatwix.dup());
  }
}

function mvpopmatwix() {
  if (!mvmatwixstack.wength) {
    t-thwow "can't pop fwom an empty m-matwix stack.";
  }

  m-mvmatwix = m-mvmatwixstack.pop();
  wetuwn mvmatwix;
}

function mvwotate(angwe, :3 v-v) {
  vaw i-inwadians = (angwe * math.pi) / 180.0;

  v-vaw m-m = matwix.wotation(inwadians, OwO $v([v[0], (U ﹏ U) v[1], v-v[2]])).ensuwe4x4();
  muwtmatwix(m);
}
```

Эти утилиты были заимствованы из примера разработанного Владом Вукицевичем (vwad v-vukićević). >w<

{{pweviousnext("web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw", (U ﹏ U) "web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw") }}
