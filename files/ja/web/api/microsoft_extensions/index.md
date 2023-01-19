---
title: Microsoft API 拡張
slug: Web/API/Microsoft_Extensions
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{DefaultAPISidebar("Microsoft Extensions")}}

Microsoft のブラウザー (Internet Explorer および、場合によっては Microsoft Edge) は、標準の [DOM API](/ja/docs/Web/API) 以外にいくつかの特別な Microsoft 拡張機能に対応しています。これらの拡張機能には `MS` または `ms` の接頭辞が付きます。

> **メモ:** これらの API は Microsoft アプリケーションでのみ機能し、標準化されていません。

## タッチ API

- {{DOMxRef("Element.msZoomTo()")}}
- {{domxref("Element/msContentZoom_event", "msContentZoom")}}
- {{DOMxRef("MSManipulationEvent")}}
- {{domxref("Element/MSManipulationStateChanged_event", "MSManipulationStateChanged")}}
- {{DOMxRef("Touch.MsManipulationViewsEnabled")}}
- `MSPointerHover` {{Deprecated_Inline}}

## メディア API

- {{DOMxRef("HTMLVideoElement.msFrameStep()")}}
- {{DOMxRef("HTMLVideoElement.msHorizontalMirror")}}
- {{DOMxRef("HTMLVideoElement.msInsertVideoEffect()")}}
- {{DOMxRef("HTMLVideoElement.msIsLayoutOptimalForPlayback")}}
- {{DOMxRef("HTMLVideoElement.msIsStereo3D")}}
- {{DOMxRef("HTMLVideoElement.msZoom")}}
- {{DOMxRef("HTMLAudioElement.msAudioCategory")}}
- {{DOMxRef("HTMLAudioElement.msAudioDeviceType")}}
- {{DOMxRef("HTMLMediaElement.msClearEffects()")}}
- {{DOMxRef("HTMLMediaElement.msInsertAudioEffect()")}}
- {{DOMxRef("MediaError.msExtendedCode")}}
- {{DOMxRef("MSGraphicsTrust")}}
- {{DOMxRef("msGraphicsTrustStatus")}}
- {{DOMxRef("msIsBoxed")}}
- {{DOMxRef("msPlayToDisabled")}}
- {{DOMxRef("msPlayToPreferredSourceUri")}}
- {{DOMxRef("msPlayToPrimary")}}
- {{DOMxRef("msPlayToSource")}}
- {{DOMxRef("msRealTime")}}
- {{DOMxRef("msSetMediaProtectionManager")}}
- {{DOMxRef("HTMLVideoElement.msSetVideoRectangle")}}
- {{DOMxRef("HTMLVideoElement.msStereo3DPackingMode")}}
- {{DOMxRef("HTMLVideoElement.msStereo3DRenderMode")}}
- {{DOMxRef("HTMLVideoElement.onMSVideoFormatChanged")}}
- {{DOMxRef("HTMLVideoElement.onMSVideoFrameStepCompleted")}}
- {{DOMxRef("HTMLVideoElement.onMSVideoOptimalLayoutChanged")}}
- {{DOMxRef("msFirstPaint")}}

## ピン止めサイト API

- {{DOMxRef("MSSiteModeEvent")}}
- {{DOMxRef("mssitemodejumplistitemremoved")}}
- {{DOMxRef("msthumbnailclick")}}

## その他の API

- [`x-ms-aria-flowfrom`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/x-ms-aria-flowfrom)
- [`x-ms-acceleratorkey`](/ja/docs/Web/HTML/Global_attributes/x-ms-acceleratorkey)
- [`x-ms-format-detection`](/ja/docs/Web/HTML/Global_attributes/x-ms-format-detection)
- {{DOMxRef("msCaching")}}
- {{DOMxRef("msCachingEnabled")}}
- {{DOMxRef("msCapsLockWarningOff")}}
- {{DOMxRef("Event.msConvertURL()")}}
- {{DOMxRef("mselementresize")}}
- {{DOMxRef("msIsStaticHTML")}}
- {{DOMxRef("Navigator.msLaunchUri()")}}
- {{DOMxRef("msLaunchUriCallback")}}
- `Element.msMatchesSelector()` {{Deprecated_Inline}}
- {{DOMxRef("msProtocols")}}
- {{DOMxRef("msPutPropertyEnabled")}}
- {{DOMxRef("msWriteProfilerMark")}}

## 関連情報

- [Microsoft CSS 拡張](/ja/docs/Web/CSS/Microsoft_Extensions)
- [Microsoft JavaScript 拡張](/ja/docs/Web/JavaScript/Microsoft_JavaScript_extensions)
