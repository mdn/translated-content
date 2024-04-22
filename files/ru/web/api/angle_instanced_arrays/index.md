---
title: ANGLE_instanced_arrays
slug: Web/API/ANGLE_instanced_arrays
---

{{APIRef("WebGL")}}

Расширение **ANGLE_instanced_arrays** является частью API WebGL и позволяет рисовать один и тот же объект или группы похожих объектов несколько раз, если они используют одни и те же данные вершин, количество примитивов и тип.

Доступ к WebGL расширениям можно получить с помощью метода {{domxref("WebGLRenderingContext.getExtension()")}}. Для получения дополнительной информации см. также в [Использование расширений](/ru/docs/Web/API/WebGL_API/Using_Extensions) в [WebGL руководстве](/ru/docs/Web/API/WebGL_API/Tutorial).

> **Примечание:** Это расширение доступно только для {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} контекстов. В {{domxref ("WebGL2RenderingContext", "WebGL2", "", 1)}}, функциональность этого расширения доступна в контексте WebGL2 по умолчанию, а константы и методы доступны без суффикса " `ANGLE` ".
>
> Несмотря на название "ANGLE", это расширение работает на любом устройстве, если аппаратное обеспечение поддерживает его, а не только на Windows при использовании библиотеки ANGLE . "ANGLE" просто указывает, что это расширение было написано авторами библиотеки ANGLE.

## Константы

Это расширение предоставляет одну новую константу, которую можно использовать в {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} методе:

- `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
  - : Возвращает {{domxref("GLint")}} , описывающий частотный делитель, используемый для упомянутого перевода в {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} в качестве параметра `pname`.

## Методы

Это расширение предоставляет три новых метода:

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
  - : Behaves identically to {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} except that multiple instances of the range of elements are executed, and the instance advances for each iteration.
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
  - : Ведёт себя идентично {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} за исключением того, что выполняется несколько экземпляров набора элементов и экземпляр перемещается между каждым набором
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
  - : Изменяет скорость продвижения общих атрибутов вершин при визуализации нескольких экземпляров примитивов с помощью {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}} и {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}.

## Примеры

Включение расширения:

```js
var ext = gl.getExtension("ANGLE_instanced_arrays");
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
