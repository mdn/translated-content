---
title: Оживление объектов при помощи WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
tags:
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
---
<p>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}</p>

<p>Наш код оставшийся от предыдущего примера уже настроен на перерисовку нашей WebGL сцены каждые 15 миллисекунд. До сих пор мы просто отрисовывали в точности одно и то же каждый раз. Пришло время изменить это так, чтобы наш квадрат начал двигаться.</p>

<p>В этом примере мы заставим наш двумерный квадрат вращаться и двигаться во всех трёх направлениях. Это докажет, что не смотря на то, что мы создавали всего-лишь двумерный объект, он всё ещё существует в трёхмерном пространстве.</p>

<h2 id="Заставим_квадрат_вращаться">Заставим квадрат вращаться</h2>

<p>Давайте начнём с того, что заставим квадрат вращаться. Для начала нам понадобится переменная значение в которой будет отражать текущий угол поворота нашего квадрата:</p>

<pre class="brush: js">var squareRotation = 0.0;
</pre>

<p>Теперь нам надо изменить процедуру <code>drawScene()</code> и добавить в неё код, который бы учитывал этот угол поворота при отрисовке квадрата в нашей сцене. После первоначального расчёта матрицы положения для квадрата мы применяем условия поворота следующим образом:</p>

<pre class="brush: js">mvPushMatrix();
mvRotate(squareRotation, [1, 0, 1]);
</pre>

<p>Этот код сохраняет матрицу текущего положения, затем поворачивает матрицу на текущее значение переменной <code>squareRotation</code> вокруг осей X и Z.</p>

<p>После отрисовки мы восстанавливаем изначальное состояние матрицы положения:</p>

<pre class="brush: js">  mvPopMatrix();
</pre>

<p>Мы сохраняем и восстанавливаем состояние матрицы положения чтобы избежать влияние поворота на другие объекты, которые мы можем захотеть отобразить.</p>

<p>Чтобы заставить квадрат крутиться нам нужно добавить в программу код, который будет изменять значение переменной <code>squareRotation</code> во времени. Для этого мы заведём ещё одну переменную в которую будем записывать время последней отрисовки (давайте назовём её <code>lastSquareUpdateTime</code>), затем добавим следующий код в конец нашей процедуры <code>drawScene()</code>:</p>

<pre class="brush: js">  var currentTime = (new Date).getTime();
  if (lastSquareUpdateTime) {
  	var delta = currentTime - lastSquareUpdateTime;

  	squareRotation += (30 * delta) / 1000.0;
  }

  lastSquareUpdateTime = currentTime;
</pre>

<p>Этот код использует количество времени прошедшего с момента, когда мы в последний раз изменяли значение переменной <code>squareRotation</code> чтобы определить как сильно нужно повернуть квадрат.</p>

<h2 id="Сделаем_так_чтобы_квадрат_начал_двигаться">Сделаем так, чтобы квадрат начал двигаться</h2>

<p>Мы можем также заставить наш квадрат двигаться изменяя его позицию перед отрисовкой. Этим примером мы собираемся продемонстрировать самые основные движения, очевидно, что в реальном мире вы бы сделали что-нибудь менее безумное.</p>

<p>Давайте отслеживать сдвиг положения квадрата по каждой оси в новых переменных:</p>

<pre class="brush: js">var squareXOffset = 0.0;
var squareYOffset = 0.0;
var squareZOffset = 0.0;
</pre>

<p>И расстояние на которое нужно сместить квадрат по каждой из осей в следующих переменных:</p>

<pre class="brush: js">var xIncValue = 0.2;
var yIncValue = -0.4;
var zIncValue = 0.3;
</pre>

<p>Теперь мы можем просто добавить следующий код к уже написанному, который обновляет положение угла поворота:</p>

<pre class="brush: js">    squareXOffset += xIncValue * ((30 * delta) / 1000.0);
    squareYOffset += yIncValue * ((30 * delta) / 1000.0);
    squareZOffset += zIncValue * ((30 * delta) / 1000.0);

    if (Math.abs(squareYOffset) &gt; 2.5) {
      xIncValue = -xIncValue;
      yIncValue = -yIncValue;
      zIncValue = -zIncValue;
    }
</pre>

<p>И, наконец, мы добавляем в процедуру <code>drawScene()</code> следующий код:</p>

<pre class="brush: js">mvTranslate([squareXOffset, squareYOffset, squareZOffset]);</pre>

<p>Это заставит наш квадрат двигаться по экрану, приближаясь и удаляясь от наблюдателя и при этом ещё и вращаться. Это похоже на работу заставки</p>

<p>Если ваш браузер поддерживает работу с WebGL, <a href="/samples/webgl/sample4/index.html" title="https://developer.mozilla.org/samples/webgl/sample4/index.html">проследуйте по этой ссылке, чтобы посмотреть на этот пример</a> в действии.</p>

<h2 id="Больше_операций_с_матрицами">Больше операций с матрицами</h2>

<p>Этот пример использует несколько дополнительных операций над матрицами включая две утилиты для работы со стэком состояния матриц и одну, поворачивающую матрицу положения на заданное количество градусов. Далее приведён код для вашего удобства:</p>

<pre class="brush: js">var mvMatrixStack = [];

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
    throw("Can't pop from an empty matrix stack.");
  }

  mvMatrix = mvMatrixStack.pop();
  return mvMatrix;
}

function mvRotate(angle, v) {
  var inRadians = angle * Math.PI / 180.0;

  var m = Matrix.Rotation(inRadians, $V([v[0], v[1], v[2]])).ensure4x4();
  multMatrix(m);
}
</pre>

<p>Эти утилиты были заимствованы из примера разработанного Владом Вукицевичем (Vlad Vukićević).</p>

<p>{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}</p>
