---
title: WebGL
slug: Web/API/WebGL_API
---

{{DefaultAPISidebar("WebGL")}}

WebGL (Web Graphics Library) - программная библиотека для языка JavaScript предназначенная для визуализации интерактивной трёхмерной графики и двухмерной графики в пределах совместимости веб-браузера без использования плагинов. WebGL приносит в веб трёхмерную графику, вводя API, который построен на основе OpenGL ES 2.0, что позволяет его использовать в элементах [`canvas`](/ru/docs/HTML/Canvas) HTML5 .

Поддержка WebGL присутствует в [Firefox](/en-US/Firefox) 4+, [Google Chrome](http://www.google.com/chrome/) 9+, [Opera](http://www.opera.com/) 12+, [Safari](http://www.apple.com/safari/) 5.1+ и [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/browser-ie) 11+. Однако помимо поддержки WebGL браузером, необходима также его поддержка графическим процессором клиента.

<table class="topicpage-table">
  <tbody>
    <tr>
      <td>
        <h2 id="Разработка">Разработка</h2>
        <dl>
          <dt>
            <a
              href="/ru/docs/Web/WebGL/Getting_started_with_WebGL"
              title="/en-US/docs/WebGL/Getting started with WebGL"
              >Начало работы с WebGL</a
            >
          </dt>
          <dd>Как настроить контекст WebGL .</dd>
          <dt>
            <a
              href="/ru/docs/Web/WebGL/Adding_2D_content_to_a_WebGL_context"
              title="/en-US/docs/WebGL/Adding 2D content to a WebGL context"
              >Добавление 2D контента в контекст WebGL</a
            >
          </dt>
          <dd>Как отобразить простую плоскую фигуру с помощью WebGL.</dd>
          <dt>
            <a
              href="/ru/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL"
              title="/en-US/docs/WebGL/Using shaders to apply color in WebGL"
              >Использование шейдеров для назначения цвета в WebGL</a
            >
          </dt>
          <dd>Демонстрирует как добавить цвет фигурам, используя шейдеры.</dd>
          <dt>
            <a
              href="/ru/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL"
              title="/en-US/docs/WebGL/Animating objects with WebGL"
              >Анимация объектов с помощью WebGL</a
            >
          </dt>
          <dd>
            Показывает как повернуть и перемещать объекты для создания простой
            анимации.
          </dd>
          <dt>
            <a
              href="/ru/docs/WebGL/Creating_3D_objects_using_WebGL"
              >Создание 3D объектов с помощью WebGL</a
            >
          </dt>
          <dd>
            Показывает как создавать и анимировать 3D объект (в данном случае
            куб).
          </dd>
          <dt>
            <a
              href="/ru/docs/WebGL/Using_textures_in_WebGL"
              >Использование текстур в WebGL</a
            >
          </dt>
          <dd>Демонстрирует как разместить текстуры на гранях объекта.</dd>
          <dt>
            <a
              href="/ru/docs/WebGL/Lighting_in_WebGL"
              >Освещение в WebGL</a
            >
          </dt>
          <dd>Как имитировать эффекты освещения в контексте WebGL .</dd>
          <dt>
            <a
              href="/ru/docs/WebGL/Animating_textures_in_WebGL"
              >Анимация текстур в WebGL</a
            >
          </dt>
          <dd>
            Показывает как анимировать текстуры; в данном случае путём
            размещения видео Ogg на гранях вращающегося куба.
          </dd>
          <dt>
            <a
              href="/ru/docs/WebGL/WebGL_best_practices"
              >WebGL: советы по применению на практике</a
            >
          </dt>
          <dd>
            Советы и предложения по улучшению контента, созданного вами при
            помощи WebGL.
          </dd>
          <dt>
            <a
              href="/ru/docs/WebGL/Cross-Domain_Textures"
              >Текстуры с других доменов</a
            >
          </dt>
          <dd>
            Информация о загрузке текстур с других доменов, отличных от того, с
            которого загружается ваш контент.
          </dd>
          <dt>
            <a
              href="/ru/docs/WebGL/Using_Extensions"
              >Использование расширений</a
            >
          </dt>
          <dd>Как использовать расширения, доступные в WebGL.</dd>
        </dl>
      </td>
      <td>
        <h2 id="Ресурсы">Ресурсы</h2>
        <dl>
          <dt>
            <a
              class="link-https"
              href="https://www.khronos.org/registry/webgl/specs/1.0/"
              >Спецификация WebGL</a
            >
          </dt>
          <dd>Спецификация WebGL.</dd>
          <dt>
            <a class="external" href="http://www.khronos.org/webgl/"
              >Официальный сайт WebGL</a
            >
          </dt>
          <dd>Веб-сайт разработчиков WebGL - Khronos Group.</dd>
          <dt>
            <a class="external" href="http://learningwebgl.com/blog/"
              >Изучение WebGL</a
            >
          </dt>
          <dd>Веб-сайт с уроками, посвящёнными использованию WebGL.</dd>
          <dt>
            <a
              href="http://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/"
              >Основы WebGL</a
            >
          </dt>
          <dd>Учебные материалы по основным возможностям WebGL.</dd>
          <dt>
            <a href="http://games.greggman.com/game/webgl-2d-matrices/"
              >Матрицы в WebGL</a
            >
          </dt>
          <dd>
            Введение в использование матриц в двухмерной графике на WebGL. На
            этом ресурсе объясняется математическая основа перспективы в
            трёхмерной графике.
          </dd>
          <dt>
            <a
              class="external"
              href="http://learningwebgl.com/cookbook/index.php/"
              >Советы по использованию WebGL</a
            >
          </dt>
          <dd>Веб-сайт с советами по написанию кода на WebGL.</dd>
          <dt>
            <a class="external" href="http://code.google.com/p/ewgl-matrices/"
              >ewgl-matrices</a
            >
          </dt>
          <dd>Библиотека для работы с матрицами для WebGL</dd>
          <dt>
            <a class="link-https" href="https://github.com/toji/gl-matrix"
              >glMatrix</a
            >
          </dt>
          <dd>
            Библиотека для работы с матрицами и векторами, написанная на
            JavaScript, предназначенная для высокопроизводительных приложений на
            WebGL
          </dd>
          <dt>
            <a class="external" href="http://code.google.com/p/webgl-mjs/"
              >mjs</a
            >
          </dt>
          <dd>
            Математическая библиотека для работы с векторами и матрицами,
            написанная на JavaScript, оптимизированная для использования с
            WebGL.
          </dd>
          <dt>
            <a class="external" href="http://sylvester.jcoglan.com/"
              >Sylvester</a
            >
          </dt>
          <dd>
            Библиотека с открытым исходным кодом для работы с векторами и
            матрицами. Не оптимизирована для WebGL, но производительная.
          </dd>
          <dt>
            <a class="external" href="http://webglplayground.net"
              >WebGL площадка</a
            >
          </dt>
          <dd>
            Онлайн инструмент для создания и публикации проектов на WebGL.
            Удобна для быстрого прототипирования и экспериментирования.
          </dd>
          <dt><a href="http://www.webglacademy.com">Академия WebGL</a></dt>
          <dd>
            Редактор HTML/Javascript с учебными материалами для обучения основам
            программирования на webgl.
          </dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

## Совместимость с браузерами

### WebGL 1

{{Compat("api.WebGLRenderingContext", 0)}}

### WebGL 2

{{Compat("api.WebGL2RenderingContext", 0)}}

### Замечания по Gecko

#### Отладка и тестирование WebGL

Начиная с Gecko 10.0, имеются две настройки, позволяющие вам управлять возможностями WebGL для тестирования своего кода:

- `webgl.min_capability_mode`
  - : Свойство типа Boolean которое, при значении `true` позволяет запускать режим минимальных функциональных возможностей. В этом режиме WebGL сконфигурирован осуществлять поддержку минимального набора функциональных возможностей, поддержка которых обязательна по спецификации WebGL. Это позволяет вам убедиться в том, что ваш код на WebGL будет работать на любом устройстве или браузере, независимо от их возможностей. Значением по умолчанию для это свойства является значение `false`.
- `webgl.disable_extensions`
  - : Свойство типа Boolean которое, при значении `true` отключает все расширения WebGL. Значением по умолчанию для это свойства является значение `false`.
