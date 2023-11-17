---
title: MediaRecorder.requestData()
slug: Web/API/MediaRecorder/requestData
---

{{APIRef("MediaStream Recording")}}

Метод **`MediaRecorder.requestData()`** (часть [MediaRecorder API](/ru/docs/Web/API/MediaRecorder_API)) используется, чтобы поднять {{domxref("dataavailable")}} событие содержащее {{domxref("Blob")}} объект захваченных медиа-данных как это было когда метод был вызван. This can then be grabbed и манипулировать как необходимо.

When the `requestData()` method is invoked, the browser queues a task that runs the following steps:

1. If {{domxref("MediaRecorder.state")}} is not "recording", raise a DOM `InvalidState` error and terminate these steps. If {{domxref("MediaRecorder.state")}} is "recording", continue to the next step.
2. Raise a {{domxref("dataavailable")}} event containing a {{domxref("Blob")}} of the currently captured data (the Blob is available under the event's `data` attribute.)
3. Create a new Blob and place subsequently captured data into it.

## Syntax

```
MediaRecorder.requestData()
```

### Errors

An `InvalidState` error is raised if the `requestData()` method is called while the `MediaRecorder` object's {{domxref("MediaRecorder.state")}} is not "recording" — the media cannot be captured if recording is not occurring.

## Example

```js
...

  captureMedia.onclick = function() {
    mediaRecorder.requestData();
    // makes snapshot available of data so far
    // ondataavailable fires, then capturing continues
    // in new Blob
  }

...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaRecorder API](/ru/docs/Web/API/MediaRecorder_API/Using_the_MediaRecorder_API)
- [Web Dictaphone](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on Github](https://github.com/mdn/web-dictaphone/).)
- [simpl.info MediaStream Recording demo](http://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
