---
title: 보안 컨텍스트로 제한된 기능들
slug: Web/Security/Secure_Contexts/features_restricted_to_secure_contexts
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}

이 참조는 보안 컨텍스트에서만 사용할 수 있는 웹 플랫폼 기능을 나열합니다. 정의와 자세한 내용은 [보안 컨텍스트](/ko/docs/Web/Security/Secure_Contexts)를 참조하세요.

## 보안 컨텍스트에서만 사용할 수 있는 현재 기능들

이 섹션에는 명세를 보안 컨텍스트에서만 사용할 수 있는 API가 나열되어 있습니다.

- [Async Clipboard API](/ko/docs/Web/API/Clipboard)
- [Background Sync](https://wicg.github.io/BackgroundSync/spec/) (예시로 {{domxref("SyncManager")}}를 보세요.)
- [`Cache-Control: immutable`](/ko/docs/Web/HTTP/Headers/Cache-Control)
- [Credential Management API](/ko/docs/Web/API/Credential_Management_API)
- [Device Orientation / Device Motion](/ko/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [EyeDropper API](/ko/docs/Web/API/EyeDropper)
- [Encrypted Media Extensions](/ko/docs/Web/API/Encrypted_Media_Extensions_API)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- {{domxref("Geolocation")}}
- [Notifications API](/ko/docs/Web/API/Notifications_API)
- [Payment Request API](/ko/docs/Web/API/Payment_Request_API)
- [Presentation API](/ko/docs/Web/API/Presentation_API)
- [Push API](/ko/docs/Web/API/Push_API)
- [Reporting API](/ko/docs/Web/API/Reporting_API)
- [Service Workers](/ko/docs/Web/API/Service_Worker_API)
- [Storage API](/ko/docs/Web/API/Storage_API)
- [Web Authentication API](/ko/docs/Web/API/Web_Authentication_API)
- [Web Bluetooth](/ko/docs/Web/API/Web_Bluetooth_API)
- [Web MIDI](/ko/docs/Web/API/Web_MIDI_API)
- [Web Crypto API](/ko/docs/Web/API/Web_Crypto_API)
- [WebGPU API](/ko/docs/Web/API/WebGPU_API)
- [Web Share API](/ko/docs/Web/API/Web_Share_API)

추가로, 다음 메서드에는 보안 컨텍스트가 필요합니다(연결된 API가 필요하지 않더라도).

- [`MediaDevices.getUserMedia()`](/ko/docs/Web/API/MediaDevices/getUserMedia)
- [`Navigator.registerProtocolHandler()`](/ko/docs/Web/API/Navigator/registerProtocolHandler)

## 같이 보기

- [보안 컨텍스트](/ko/docs/Web/Security/Secure_Contexts)
- [Chrome Platform Status에서 "secure context" 검색](https://chromestatus.com/features#secure%20context)
