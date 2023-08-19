---
title: VRDisplay.requestPresent()
slug: Web/API/VRDisplay/requestPresent
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Метод **`requestPresent()`** объекта реализующего интерфейс {{domxref("VRDisplay")}} отвечает за начало отображения сцены на VR устройстве, которое представлено этим объектом.

## Синтаксис

```js
vrDisplayInstance.requestPresent(layers).then(function () {
  //Действия после начала отображения сцены
});
```

### Параметры

- layers
  - : Массив объектов типа {{domxref("VRLayerInit")}}, представляющих собой сцену, которую вы хотите отобразить. На данный момент может быть минимум 0 элементов, максимум - 1.

### Возвращаемое значение

Объект типа [Promise](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise), переходящий в состояние "выполнено" в момент начала отображения сцены. Существует ряд правил, касающийся перехода Promise в состояние "выполнено" и в состояние "отклонено":

- Если {{domxref("VRDisplayCapabilities.canPresent")}} ложно или если массив объектов VRLayer содержит более чем {{domxref("VRDisplayCapabilities.maxLayers")}} слоёв, произойдёт переход в состояние "отклонено".
- Если объект {{domxref("VRDisplay")}} уже отображает сцену, то вызов его метода `requestPresent()` обновит массив отображаемых `VRLayer` объектов.
- Если объект `VRDisplay` уже отображает сцену, а вызов метода `requestPresent()` приведёт к возврату Promise в состоянии "отклонено", то отображение сцены прекратится.
- If `requestPresent()` is called outside of an engagement gesture the promise will be rejected unless the `VRDisplay` was already presenting. This engagement gesture is also sufficient to allow [`requestPointerLock()`](/ru/docs/Web/API/Element/requestPointerLock) calls until presentation has ended.

## Examples

```js
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then(function (displays) {
    // If a display is available, use it to present the scene
    if (displays.length > 0) {
      vrDisplay = displays[0];
      console.log("Display found");
      // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
      btn.addEventListener("click", function () {
        if (btn.textContent === "Start VR display") {
          vrDisplay.requestPresent([{ source: canvas }]).then(function () {
            console.log("Presenting to WebVR display");

            // Set the canvas size to the size of the vrDisplay viewport

            var leftEye = vrDisplay.getEyeParameters("left");
            var rightEye = vrDisplay.getEyeParameters("right");

            canvas.width =
              Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
            canvas.height = Math.max(
              leftEye.renderHeight,
              rightEye.renderHeight,
            );

            // stop the normal presentation, and start the vr presentation
            window.cancelAnimationFrame(normalSceneFrame);
            drawVRScene();

            btn.textContent = "Exit VR display";
          });
        } else {
          vrDisplay.exitPresent();
          console.log("Stopped presenting to WebVR display");

          btn.textContent = "Start VR display";

          // Stop the VR presentation, and start the normal presentation
          vrDisplay.cancelAnimationFrame(vrSceneFrame);
          drawScene();
        }
      });
    }
  });
}
```

> **Примечание:** You can see this complete code at [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/master/raw-webgl-example/webgl-demo.js).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/ru/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — demos, downloads, and other resources from the Mozilla VR team.
