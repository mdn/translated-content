---
title: VRDisplay.requestAnimationFrame()
slug: Web/API/VRDisplay/requestAnimationFrame
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Метод **`requestAnimationFrame()`** интерфейса {{domxref("VRDisplay")}} является специфичной реализацией метода {{domxref("Window.requestAnimationFrame")}} и принимает в качестве аргумента колбэк-функцию. Эта функция будет вызвана, когда объект типа `VRDisplay` будет готов отобразить новый кадр сцены:

- Если в этот момент объект типа `VRDisplay` не находится в процессе отображения сцены, то вызов этой функции эквивалентен вызову {{domxref("Window.requestAnimationFrame")}}.
- Если объект типа `VRDisplay` находится в состоянии отображения сцены, вызов колбэк-функции происходит с собственной частотой обновления устройства, представленного этим объектом.

## Синтаксис

```js
var handle = vrDisplayInstance.requestAnimationFrame(callback);
```

### Параметры

- callback
  - : Колбэк-функция, которая будет вызвана когда объект типа `VRDisplay` будет готов отобразить новый кадр сцены.

### Возвращаемое значение

A long representing the handle of the `requestAnimationFrame()` call. This can then be passed to a {{domxref("VRDisplay.cancelAnimationFrame()")}} call to unregister the callback.

## Examples

```js
var frameData = new VRFrameData();
var vrDisplay;

navigator.getVRDisplays().then(function(displays) {
  vrDisplay = displays[0];
  console.log('Display found');
  // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
  btn.addEventListener('click', function() {
    vrDisplay.requestPresent([{ source: canvas }]).then(function() {
      drawVRScene();
    });
  });
});

// WebVR: Draw the scene for the WebVR display.
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);

  // You can get the position, orientation, etc. of the display from the current frame's pose
  var curFramePose = frameData.pose;
  var curPos = curFramePose.position;
  var curOrient = curFramePose.orientation;

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // WebVR: Create the required projection and view matrix locations needed
  // for passing into the uniformMatrix4fv methods below

  var projectionMatrixLocation = gl.getUniformLocation(shaderProgram, "projMatrix");
  var viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");

  // WebVR: Render the left eye’s view to the left half of the canvas
  gl.viewport(0, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(projectionMatrixLocation, false, frameData.leftProjectionMatrix);
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.leftViewMatrix);
  drawGeometry();

  // WebVR: Render the right eye’s view to the right half of the canvas
  gl.viewport(canvas.width * 0.5, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(projectionMatrixLocation, false, frameData.rightProjectionMatrix);
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.rightViewMatrix);
  drawGeometry();

  function drawGeometry() {
    // draw the view for each eye
  }

    ...

  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

> [!NOTE]
> You can see this complete code at [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/master/raw-webgl-example/webgl-demo.js).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebVR API](/ru/docs/Web/API/WebVR_API)
