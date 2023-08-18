---
title: WebGL tutorial
slug: Web/API/WebGL_API/Tutorial
---

{{DefaultAPISidebar("WebGL")}}

[WebGL](http://www.khronos.org/webgl/) позволяет использовать API, основанную на [OpenGL ES](http://www.khronos.org/opengles/) 2.0 для осуществления 3D рендеринга в HTML {{HTMLElement("canvas")}} в браузерах, которые его поддерживают без использования плагинов. WebGL программы состоят из программ, написанных на JavaScript, и специального кода шейдеров, который выполняется на видеокарте. WebGL элементы могут использоваться с HTML-элементами и скомпонованы с другими частями страницы или фона страницы.

В этом руководстве с нуля рассказывается о том, как использовать элемент `<canvas>` для отрисовки WebGL. Предоставленные примеры помогут вам понять, как можно использовать WebGL, также вы сможете использовать код из примеров как сниппеты для ваших разработок.

## Перед тем как начать

Использование элемента `<canvas>` - это не сложно, но вы должны понимать основы [HTML](/ru/docs/Web/HTML) и [JavaScript](/ru/docs/Web/JavaScript). `<canvas>` и WebGL не поддерживаются в некоторых старых браузерах, но поддерживаются в последних версиях всех основных. Чтобы рисовать графику на canvas нужно использовать объекты контекста JavaScript, который создаёт графику на лету.

## В этом руководстве

- [Начало работы с WebGL](/ru/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
  - : Как настроить WebGL контекст.
- [Добавление 2D контекста в WebGL контекст](/ru/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - : Как визуализировать простые плоские фигуры используя WebGL.
- [Использование шейдеров для добавления цвета в WebGL](/ru/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
  - : Демонстрация того, как добавить цвет фигурам используя шейдеры.
- [Анимирование объектов с WebGL](/ru/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL)
  - : Как поворачивать и передвигать объекты для создания простых анимаций.
- [Создание 3D объектов с WebGL](/ru/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL)
  - : Как создать и анимировать 3D объект (куб).
- [Использование текстур в WebGL](/ru/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
  - : Как перевести текстуру на поверхность объекта.
- [Освещение объектов в WebGL](/ru/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
  - : Как симулировать эффект света в контексте WebGL.
- [Анимирование текстур в WebGL](/ru/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
  - : Как анимировать текстуры; здесь путём отображения Ogg видео на поверхность вращающегося куба.
