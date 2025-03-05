---
title: Web NFC API
slug: Web/API/Web_NFC_API
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Web NFC API")}}{{SeeCompatTable}}

Web NFC API를 사용하면, 경량 NFC 데이터 교환 형식(NDEF) 메시지를 통해 NFC 데이터를 교환할 수 있습니다.

> [!NOTE]
> Web NFC와 함께 사용하기 위해서는 장치와 태그를 NDEF 레코드 형식을 지원하도록 포맷하고 기록해야 합니다. 저수준 작업은 현재 API에서 지원되지 않지만, 이러한 기능을 추가하는 API에 대한 공개 논의가 진행 중입니다.

## 인터페이스

- {{DOMxRef("NDEFMessage")}}
  - : `NDEFReader` 객체를 통해 호환 태그에서 수신하거나 호환 태그에 보낼 수 있는 NDEF 메시지를 나타내는 인터페이스입니다. 메시지는 메타데이터와 NDEF 레코드로 구성됩니다.
- {{DOMxRef("NDEFReader")}} {{Experimental_Inline}}
  - : 호환되는 NFC 태그에서 메시지를 읽고 쓸 수 있는 인터페이스입니다. 메시지는 `NDEFMessage` 객체로 표현됩니다.
- {{DOMxRef("NDEFRecord")}}
  - : NDEF 메시지에 포함될 수 있는 NDEF 레코드를 나타내는 인터페이스입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
