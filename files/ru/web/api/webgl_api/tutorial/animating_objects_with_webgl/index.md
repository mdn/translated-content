---
title: Оживление объектов при помощи WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}

Наш код оставшийся от предыдущего примера уже настроен на перерисовку нашей WebGL сцены каждые 15 миллисекунд. До сих пор мы просто отрисовывали в точности одно и то же каждый раз. Пришло время изменить это так, чтобы наш квадрат начал двигаться.

В этом примере мы заставим наш двумерный квадрат вращаться и двигаться во всех трёх направлениях. Это докажет, что не смотря на то, что мы создавали всего-лишь двумерный объект, он всё ещё существует в трёхмерном пространстве.

## Заставим квадрат вращаться

Давайте начнём с того, что заставим квадрат вращаться. Для начала нам понадобится переменная значение в которой будет отражать текущий угол поворота нашего квадрата:

```js
var squareRotation = 0.0;
```

Теперь нам надо изменить процедуру `drawScene()` и добавить в неё код, который бы учитывал этот угол поворота при отрисовке квадрата в нашей сцене. После первоначального расчёта матрицы положения для квадрата мы применяем условия поворота следующим образом:

```js
mvPushMatrix();
mvRotate(squareRotation, [1, 0, 1]);
```

Этот код сохраняет матрицу текущего положения, затем поворачивает матрицу на текущее значение переменной `squareRotation` вокруг осей X и Z.

После отрисовки мы восстанавливаем изначальное состояние матрицы положения:

```js
mvPopMatrix();
```

Мы сохраняем и восстанавливаем состояние матрицы положения чтобы избежать влияние поворота на другие объекты, которые мы можем захотеть отобразить.

Чтобы заставить квадрат крутиться нам нужно добавить в программу код, который будет изменять значение переменной `squareRotation` во времени. Для этого мы заведём ещё одну переменную в которую будем записывать время последней отрисовки (давайте назовём её `lastSquareUpdateTime`), затем добавим следующий код в конец нашей процедуры `drawScene()`:

```js
var currentTime = new Date().getTime();
if (lastSquareUpdateTime) {
  var delta = currentTime - lastSquareUpdateTime;

  squareRotation += (30 * delta) / 1000.0;
}

lastSquareUpdateTime = currentTime;
```

Этот код использует количество времени прошедшего с момента, когда мы в последний раз изменяли значение переменной `squareRotation` чтобы определить как сильно нужно повернуть квадрат.

## Сделаем так, чтобы квадрат начал двигаться

Мы можем также заставить наш квадрат двигаться изменяя его позицию перед отрисовкой. Этим примером мы собираемся продемонстрировать самые основные движения, очевидно, что в реальном мире вы бы сделали что-нибудь менее безумное.

Давайте отслеживать сдвиг положения квадрата по каждой оси в новых переменных:

```js
var squareXOffset = 0.0;
var squareYOffset = 0.0;
var squareZOffset = 0.0;
```

И расстояние на которое нужно сместить квадрат по каждой из осей в следующих переменных:

```js
var xIncValue = 0.2;
var yIncValue = -0.4;
var zIncValue = 0.3;
```

Теперь мы можем просто добавить следующий код к уже написанному, который обновляет положение угла поворота:

```js
squareXOffset += xIncValue * ((30 * delta) / 1000.0);
squareYOffset += yIncValue * ((30 * delta) / 1000.0);
squareZOffset += zIncValue * ((30 * delta) / 1000.0);

if (Math.abs(squareYOffset) > 2.5) {
  xIncValue = -xIncValue;
  yIncValue = -yIncValue;
  zIncValue = -zIncValue;
}
```

И, наконец, мы добавляем в процедуру `drawScene()` следующий код:

```js
mvTranslate([squareXOffset, squareYOffset, squareZOffset]);
```

Это заставит наш квадрат двигаться по экрану, приближаясь и удаляясь от наблюдателя и при этом ещё и вращаться. Это похоже на работу заставки

Если ваш браузер поддерживает работу с WebGL, [проследуйте по этой ссылке, чтобы посмотреть на этот пример](http://mdn.github.io/webgl-examples/tutorial/sample4/index.html) в действии.

## Больше операций с матрицами

Этот пример использует несколько дополнительных операций над матрицами включая две утилиты для работы со стэком состояния матриц и одну, поворачивающую матрицу положения на заданное количество градусов. Далее приведён код для вашего удобства:

```js
var mvMatrixStack = [];

function mvPushMatrix(m) {
  if (m) {
    mvMatrixStack.push(m.dup());
    mvMatrix = m.dup();
  } else {
    mvMatrixStack.push(mvMatrix.dup());
  }
}

function mvPopMatrix() {
  if (!mvMatrixStack.length) {
    throw "Can't pop from an empty matrix stack.";
  }

  mvMatrix = mvMatrixStack.pop();
  return mvMatrix;
}

function mvRotate(angle, v) {
  var inRadians = (angle * Math.PI) / 180.0;

  var m = Matrix.Rotation(inRadians, $V([v[0], v[1], v[2]])).ensure4x4();
  multMatrix(m);
}
```

Эти утилиты были заимствованы из примера разработанного Владом Вукицевичем (Vlad Vukićević).

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}
