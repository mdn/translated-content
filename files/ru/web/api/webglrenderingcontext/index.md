---
title: WebGLRenderingContext
slug: Web/API/WebGLRenderingContext
---

{{APIRef("WebGL")}}

Интерфейс **WebGLRenderingContext** обеспечивает доступ к контексту рендеринга OpenGL ES 2.0 (**OpenGL** for **E**mbedded **S**ystems — OpenGL для встраиваемых систем) для использования его с помощью HTML {{HTMLElement("canvas")}} элемента.

Чтобы получить объект с помощью этого интерфейса вызовите метод {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} элемента \<canvas> , используя "webgl" в качестве аргумента.

```js
var canvas = document.getElementById("myCanvas");
var gl = canvas.getContext("webgl");
```

После того, как вы получили WebGL контекст, вы можете его использовать для рендеринга.

[WebGL tutorial](/ru/docs/Web/API/WebGL_API/Tutorial) содержит больше информации, примеров, ссылок на ресурсы которые помогут начать использовать WebGL.

## Константы

Смотрите на [WebGL constants](/ru/docs/Web/API/WebGL_API/Constants).

## WebGL контекст

Ниже перечислены свойства и методы которые дают общую информацию и функциональность при работе с WebGL контекстом:

- {{domxref("WebGLRenderingContext.canvas")}}
  - : Доступная только для чтения обратная ссылка на {{domxref("HTMLCanvasElement")}}. Может быть {{jsxref("null")}} если будет применятся в контексте элемента иного типа чем {{HTMLElement("canvas")}}.
- {{domxref("WebGLRenderingContext.commit()")}} {{experimental_inline}}
  - : Вставляет окна в первоначальный {{domxref("HTMLCanvasElement")}} , если контекст не привязан к конкретному холсту.
- {{domxref("WebGLRenderingContext.drawingBufferWidth")}}
  - : Доступная только для чтения ширина текущего буфера отрисовки. Должна совпадать с шириной холста связанного с данным контекстом.
- {{domxref("WebGLRenderingContext.drawingBufferHeight")}}
  - : Доступная только для чтения высота текущего буфера отрисовки. Должна совпадать с высотой холста связанного с данным контекстом.
- {{domxref("WebGLRenderingContext.getContextAttributes()")}}
  - : Возвращает `WebGLContextAttributes объект который содержит атрибуты текущего контекста. Может возвращать {{jsxref("null")}} если контекст утерян.
- {{domxref("WebGLRenderingContext.isContextLost()")}}
  - : Возвращает `true` если контекст утерян, в противном случае возвращает `false`.

## Просмотр и обрезка

- {{domxref("WebGLRenderingContext.scissor()")}}
  - : Устанавливает обрезанный контейнер.
- {{domxref("WebGLRenderingContext.viewport()")}}
  - : Устанавливает окно просмотра.

## Информация о состоянии

- {{domxref("WebGLRenderingContext.activeTexture()")}}
  - : Выбирает активную текстуру.
- {{domxref("WebGLRenderingContext.blendColor()")}}
  - : Устанавливает параметры смешивания источника и назначения
- {{domxref("WebGLRenderingContext.blendEquation()")}}
  - : Уравнение смешивания RGB и уравнение альфа-смешивания сводит к одному уравнению.

**{{domxref("WebGLRenderingContext.blendEquationSeparate()")}}**

Устанавливает уравнение смешивания RGB и уравнение alpha смешивания отдельно.

- {{domxref("WebGLRenderingContext.blendFunc()")}}
  - : Определяет, какая арифметическая функция используется для смешивания пикселей.
- {{domxref("WebGLRenderingContext.blendFuncSeparate()")}}
  - : Определяет, какая арифметическая функция используется для смешивания пикселей для RGB и альфа-компонентов по отдельности.
- {{domxref("WebGLRenderingContext.clearColor()")}}
  - : Задаёт значения цвета, используемые при очистке цветовых буферов.
- {{domxref("WebGLRenderingContext.clearDepth()")}}
  - : Задаёт значение глубины, используемый при очистке буфера глубины.
- {{domxref("WebGLRenderingContext.clearStencil()")}}
  - : Задаёт значение шаблона, используемый при очистке буфера шаблона.
- {{domxref("WebGLRenderingContext.colorMask()")}}
  - : Устанавливает какие цветовые компоненты для включены или выключены при отрисовке или рендеринге на{{domxref("WebGLFramebuffer")}}.
- {{domxref("WebGLRenderingContext.cullFace()")}}
  - : Определяет, будет видима или нет передняя- и / или обратная сторона многоугольника.
- {{domxref("WebGLRenderingContext.depthFunc()")}}
  - : Определяет функцию, которая сравнивает входящую глубину пикселей к текущему значению глубины буфера.
- {{domxref("WebGLRenderingContext.depthMask()")}}
  - : Включает или выключает запись в буфер глубины.
- {{domxref("WebGLRenderingContext.depthRange()")}}
  - : Определяет диапазон отображения глубины согласно стандартных координат к координатам окна устройства.
- {{domxref("WebGLRenderingContext.disable()")}}
  - : Отключает конкретные возможности WebGL.
- {{domxref("WebGLRenderingContext.enable()")}}
  - : Включает конкретные возможности WebGL.
- {{domxref("WebGLRenderingContext.frontFace()")}}
  - : Определяет видимость передней или задней стороны многоугольника, при его вращении.
- {{domxref("WebGLRenderingContext.getParameter()")}}
  - : Возвращает значение переданного параметра по имени.
- {{domxref("WebGLRenderingContext.getError()")}}
  - : Возвращает информацию об ошибках.
- {{domxref("WebGLRenderingContext.hint()")}}
  - : Указывает подсказки для определённого поведения. Интерпретация этих подсказок зависит от реализации.
- {{domxref("WebGLRenderingContext.isEnabled()")}}
  - : Проверяет, включена или нет конкретная способность WebG.
- {{domxref("WebGLRenderingContext.lineWidth()")}}
  - : Устанавливает ширину растровой линии.
- {{domxref("WebGLRenderingContext.pixelStorei()")}}
  - : Определяет режимы хранилища пикселей
- {{domxref("WebGLRenderingContext.polygonOffset()")}}
  - : Определяет факторы масштабирования и единицы для расчёта значения глубины.
- {{domxref("WebGLRenderingContext.sampleCoverage()")}}
  - : Определяет составные параметры для сглаживания эффектов.
- {{domxref("WebGLRenderingContext.stencilFunc()")}}
  - : Sets the both front and back function and reference value for stencil testing.
- {{domxref("WebGLRenderingContext.stencilFuncSeparate()")}}
  - : Sets the front and/or back function and reference value for stencil testing.
- {{domxref("WebGLRenderingContext.stencilMask()")}}
  - : Controls enabling and disabling of both the front and back writing of individual bits in the stencil planes.
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
  - : Controls enabling and disabling of front and/or back writing of individual bits in the stencil planes.
- {{domxref("WebGLRenderingContext.stencilOp()")}}
  - : Sets both the front and back-facing stencil test actions.
- {{domxref("WebGLRenderingContext.stencilOpSeparate()")}}
  - : Sets the front and/or back-facing stencil test actions.

## Buffers

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
  - : Binds a `WebGLBuffer` object to a given target.
- {{domxref("WebGLRenderingContext.bufferData()")}}
  - : Updates buffer data.
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
  - : Updates buffer data starting at a passed offset.
- {{domxref("WebGLRenderingContext.createBuffer()")}}
  - : Creates a `WebGLBuffer` object.
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
  - : Deletes a `WebGLBuffer` object.
- {{domxref("WebGLRenderingContext.getBufferParameter()")}}
  - : Returns information about the buffer.
- {{domxref("WebGLRenderingContext.isBuffer()")}}
  - : Returns a Boolean indicating if the passed buffer is valid.

## Framebuffers

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
  - : Binds a `WebGLFrameBuffer` object to a given target.
- {{domxref("WebGLRenderingContext.checkFramebufferStatus()")}}
  - : Returns the status of the framebuffer.
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
  - : Creates a `WebGLFrameBuffer` object.
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
  - : Deletes a `WebGLFrameBuffer` object.
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
  - : Attaches a `WebGLRenderingBuffer` object to a `WebGLFrameBuffer` object.
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
  - : Attaches a textures image to a `WebGLFrameBuffer` object.
- {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()")}}
  - : Returns information about the framebuffer.
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
  - : Returns a Boolean indicating if the passed `WebGLFrameBuffer` object is valid.
- {{domxref("WebGLRenderingContext.readPixels()")}}
  - : Reads a block of pixels from the `WebGLFrameBuffer`.

## Renderbuffers

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
  - : Binds a `WebGLRenderBuffer` object to a given target.
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
  - : Creates a `WebGLRenderBuffer` object.
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
  - : Deletes a `WebGLRenderBuffer` object.
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
  - : Returns information about the renderbuffer.
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
  - : Returns a Boolean indicating if the passed `WebGLRenderingBuffer` is valid.
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
  - : Creates a renderbuffer data store.

## Textures

- {{domxref("WebGLRenderingContext.bindTexture()")}}
  - : Binds a `WebGLTexture` object to a given target.
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
  - : Specifies a 2D texture image in a compressed format.
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
  - : Specifies a 2D texture sub-image in a compressed format.
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
  - : Copies a 2D texture image.
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
  - : Copies a 2D texture sub-image.
- {{domxref("WebGLRenderingContext.createTexture()")}}
  - : Creates a `WebGLTexture` object.
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
  - : Deletes a `WebGLTexture` object.
- {{domxref("WebGLRenderingContext.generateMipmap()")}}
  - : Generates a set of mipmaps for a `WebGLTexture` object.
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
  - : Returns information about the texture.
- {{domxref("WebGLRenderingContext.isTexture()")}}
  - : Returns a Boolean indicating if the passed `WebGLTexture` is valid.
- {{domxref("WebGLRenderingContext.texImage2D()")}}
  - : Specifies a 2D texture image.
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
  - : Updates a sub-rectangle of the current `WebGLTexture`.
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}
  - : Sets texture parameters.
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}
  - : Sets texture parameters.

## Programs and shaders

- {{domxref("WebGLRenderingContext.attachShader()")}}
  - : Attaches a `WebGLShader` to a `WebGLProgram`.
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
  - : Binds a generic vertex index to a named attribute variable.
- {{domxref("WebGLRenderingContext.compileShader()")}}
  - : Compiles a `WebGLShader`.
- {{domxref("WebGLRenderingContext.createProgram()")}}
  - : Creates a `WebGLProgram`.
- {{domxref("WebGLRenderingContext.createShader()")}}
  - : Creates a `WebGLShader`.
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
  - : Deletes a `WebGLProgram`.
- {{domxref("WebGLRenderingContext.deleteShader()")}}
  - : Deletes a `WebGLShader`.
- {{domxref("WebGLRenderingContext.detachShader()")}}
  - : Detaches a `WebGLShader`.
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
  - : Returns a list of `WebGLShader` objects attached to a `WebGLProgram`.
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
  - : Returns information about the program.
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
  - : Returns the information log for a `WebGLProgram` object.
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
  - : Returns information about the shader.
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
  - : Returns a `WebGLShaderPrecisionFormat` object describing the precision for the numeric format of the shader.
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
  - : Returns the information log for a `WebGLShader` object.
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
  - : Returns the source code of a `WebGLShader` as a string.
- {{domxref("WebGLRenderingContext.isProgram()")}}
  - : Returns a Boolean indicating if the passed `WebGLProgram` is valid.
- {{domxref("WebGLRenderingContext.isShader()")}}
  - : Returns a Boolean indicating if the passed `WebGLShader` is valid.
- {{domxref("WebGLRenderingContext.linkProgram()")}}
  - : Links the passed `WebGLProgram` object.
- {{domxref("WebGLRenderingContext.shaderSource()")}}
  - : Sets the source code in a `WebGLShader`.
- {{domxref("WebGLRenderingContext.useProgram()")}}
  - : Uses the specified `WebGLProgram` as part the current rendering state.
- {{domxref("WebGLRenderingContext.validateProgram()")}}
  - : Validates a `WebGLProgram`.

## Uniforms and attributes

- {{domxref("WebGLRenderingContext.disableVertexAttribArray()")}}
  - : Disables a vertex attribute array at a given position.
- {{domxref("WebGLRenderingContext.enableVertexAttribArray()")}}
  - : Enables a vertex attribute array at a given position.
- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
  - : Returns information about an active attribute variable.
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
  - : Returns information about an active uniform variable.
- {{domxref("WebGLRenderingContext.getAttribLocation()")}}
  - : Returns the location of an attribute variable.
- {{domxref("WebGLRenderingContext.getUniform()")}}
  - : Returns the value of a uniform variable at a given location.
- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
  - : Returns the location of a uniform variable.
- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
  - : Returns information about a vertex attribute at a given position.
- {{domxref("WebGLRenderingContext.getVertexAttribOffset()")}}
  - : Returns the address of a given vertex attribute.
- {{domxref("WebGLRenderingContext.uniform()", "WebGLRenderingContext.uniform[1234][fi][v]()")}}
  - : Specifies a value for a uniform variable.
- {{domxref("WebGLRenderingContext.uniformMatrix()", "WebGLRenderingContext.uniformMatrix[234]fv()")}}
  - : Specifies a matrix value for a uniform variable.
- {{domxref("WebGLRenderingContext.vertexAttrib()", "WebGLRenderingContext.vertexAttrib[1234]f[v]()")}}
  - : Specifies a value for a generic vertex attribute.
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
  - : Specifies the data formats and locations of vertex attributes in a vertex attributes array.

## Drawing buffers

- {{domxref("WebGLRenderingContext.clear()")}}
  - : Clears specified buffers to preset values.
- {{domxref("WebGLRenderingContext.drawArrays()")}}
  - : Renders primitives from array data.
- {{domxref("WebGLRenderingContext.drawElements()")}}
  - : Renders primitives from element array data.
- {{domxref("WebGLRenderingContext.finish()")}}
  - : Blocks execution until all previously called commands are finished.
- {{domxref("WebGLRenderingContext.flush()")}}
  - : Empties different buffer commands, causing all commands to be executed as quickly as possible.

## Working with extensions

These methods manage WebGL extensions:

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
  - : Returns an {{jsxref("Array")}} of {{domxref("DOMString")}} elements with all the supported WebGL extensions.
- {{domxref("WebGLRenderingContext.getExtension()")}}
  - : Returns an extension object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement")}}
