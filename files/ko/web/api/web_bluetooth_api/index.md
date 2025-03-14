---
title: Web Bluetooth API
slug: Web/API/Web_Bluetooth_API
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Bluetooth API")}}{{SeeCompatTable}}

Web Bluetooth API는 블루투스 저에너지 주변 장비와 연결하고 상호 작용할 수 있는 기능을 제공합니다.

> [!NOTE]
> 이 API는 [웹 워커](/ko/docs/Web/API/Web_Workers_API)에서는 사용할 수 없습니다. ({{domxref("WorkerNavigator")}}를 통해 노출되지 않음).

## 인터페이스

- {{DOMxRef("Bluetooth")}}
  - : 지정된 옵션이 있는 {{DOMxRef("BluetoothDevice")}} 객체애 대한 {{jsxref("Promise")}}를 반환합니다.
- {{DOMxRef("BluetoothCharacteristicProperties")}}
  - : `BluetoothRemoteGATTCharacteristic` 속성을 제공합니다.
- {{DOMxRef("BluetoothDevice")}}
  - : 특정 스크립트 실행 환경 내의 블루투스 장치를 나타냅니다.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic")}}
  - : 주변 장치의 서비스에 대한 추가 정보를 제공하는 기본 데이터 요소인 GATT 특성을 나타냅니다.
- {{DOMxRef("BluetoothRemoteGATTDescriptor")}}
  - : 특성 값에 대한 추가 정보를 제공하는 GATT 설명자를 나타냅니다.
- {{DOMxRef("BluetoothRemoteGATTServer")}}
  - : 원격 장치의 GATT 서버를 나타냅니다.
- {{DOMxRef("BluetoothRemoteGATTService")}}
  - : 장치, 참조된 서비스 목록 및 이 서비스의 특성 목록을 포함하여 GATT 서버에서 제공하는 서비스를 나타냅니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
