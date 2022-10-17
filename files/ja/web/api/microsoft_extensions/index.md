---
title: Microsoft API extensions
slug: Web/API/Microsoft_Extensions
---

{{DefaultAPISidebar("Microsoft Extensions")}}

Microsoft ブラウザー (Internet Explorer および、場合によっては Microsoft Edge) は、標準の [DOM API](/ja/docs/Web/API) に対するいくつかの特別な Microsoft 拡張機能をサポートしています。これらの拡張機能には `MS` または `ms`.のプレフィックスが付きます。

> **メモ:** これらの API は Microsoft アプリケーションでのみ機能し、標準化されていません。

## Touch APIs

- {{DOMxRef("Element.msZoomTo()")}}
- {{Event("msContentZoom")}}
- {{DOMxRef("MSManipulationEvent")}}
- {{Event("MSManipulationStateChanged")}}
- {{DOMxRef("msManipulationViewsEnabled")}}
- {{Event("MSPointerHover")}} {{Deprecated_Inline}}

## Media APIs

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
- {{DOMxRef("msSetVideoRectangle")}}
- {{DOMxRef("msStereo3DPackingMode")}}
- {{DOMxRef("msStereo3DRenderMode")}}
- {{DOMxRef("onMSVideoFormatChanged")}}
- {{DOMxRef("onMSVideoFrameStepCompleted")}}
- {{DOMxRef("onMSVideoOptimalLayoutChanged")}}
- {{DOMxRef("msFirstPaint")}}

## Pinned Sites APIs

- {{DOMxRef("MSSiteModeEvent")}}
- {{DOMxRef("mssitemodejumplistitemremoved")}}
- {{DOMxRef("msthumbnailclick")}}

## Other APIs

- [`x-ms-aria-flowfrom`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/x-ms-aria-flowfrom)
- [`x-ms-acceleratorkey`](/ja/docs/Web/HTML/Global_attributes/x-ms-acceleratorkey)
- [`x-ms-format-detection`](/ja/docs/Web/HTML/Global_attributes/x-ms-format-detection)
- {{DOMxRef("msCaching")}}
- {{DOMxRef("msCachingEnabled")}}
- {{DOMxRef("msCapsLockWarningOff")}}
- {{DOMxRef("Event.msConvertURL()")}}
- {{DOMxRef("mselementresize")}}
- {{DOMxRef("DocumentOrShadowRoot.msElementsFromRect()", "Document.msElementsFromRect()")}}
- {{DOMxRef("msIsStaticHTML")}}
- {{DOMxRef("Navigator.msLaunchUri()")}}
- {{DOMxRef("msLaunchUriCallback")}}
- {{DOMxRef("Element.msMatchesSelector()")}} {{Deprecated_Inline}}
- {{DOMxRef("msProtocols")}}
- {{DOMxRef("msPutPropertyEnabled")}}
- {{DOMxRef("msWriteProfilerMark")}}

## 関連項目

- [Microsoft CSS extensions](/ja/docs/Web/CSS/Microsoft_Extensions)
- [Microsoft JavaScript extensions](/ja/docs/Web/JavaScript/Microsoft_JavaScript_extensions)
