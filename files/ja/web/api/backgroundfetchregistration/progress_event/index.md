---
title: "BackgroundFetchRegistration: progress event"
slug: Web/API/BackgroundFetchRegistration/progress_event
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`progress`** event of the {{domxref("BackgroundFetchRegistration")}} interface thrown when the associated background fetch progresses.

Practically, this event is fired when any of the following properties will return a new value:

- {{domxref("BackgroundFetchRegistration.uploaded", "uploaded")}},
- {{domxref("BackgroundFetchRegistration.downloaded", "downloaded")}},
- {{domxref("BackgroundFetchRegistration.result", "result")}}, or
- {{domxref("BackgroundFetchRegistration.failureReason", "failureReason")}}.

## 構文

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set the `onprogress` event property on the relevant {{domxref("BackgroundFetchRegistration")}} object.

```js-nolint
addEventListener("progress", (event) => { })
onprogress = (event) => { }
```

## イベント型

A generic {{domxref("Event")}} with no added properties.

## 例

The following example demonstrates how to log the progress of a download. The code first checks that a `downloadTotal` was provided when the background fetch was registered. This is then used to calculate the percentage, based on the `downloaded` property.

```js
bgFetch.addEventListener("progress", () => {
  if (!bgFetch.downloadTotal) return;
  const percent = Math.round(
    (bgFetch.downloaded / bgFetch.downloadTotal) * 100
  );
  console.log(`Download progress: ${percent}%`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
