---
title: WebUSB API
slug: Web/API/WebUSB_API
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{securecontext_header}}{{DefaultAPISidebar("WebUSB API")}}{{SeeCompatTable}}

**WebUSB API**는 비표준 USB(Universal Serial Bus) 호환 장치 서비스를 웹에 노출하여 USB를 더 안전하고 사용하기 쉽게 만드는 방법을 제공합니다.

## 개념 및 사용법

USB는 유선 주변 장치의 사실상 표준입니다. 컴퓨터에 연결하는 USB 장치는 일반적으로 키보드, 마우스, 비디오 장치 등과 같은 여러 장치 클래스로 그룹화됩니다. 이러한 장치들은 운영 체제의 클래스 드라이버를 사용하여 지원됩니다. 이 중 많은 장치들은 {{domxref("WebHID API")}}를 통해 웹에서도 접근할 수 있습니다.

이러한 표준화된 장치 외에도 어떤 클래스에도 맞지 않는 많은 장치들이 있습니다. 이러한 장치들은 사용자 정의 드라이버가 필요하며, 이를 활용하기 위해 필요한 네이티브 코드로 인해 웹에서 접근할 수 없습니다. 이러한 장치 중 하나를 설치하려면 종종 제조업체 웹사이트에서 드라이버를 검색해야 하고, 다른 컴퓨터에서 장치를 사용하려면 이 과정을 다시 반복해야 합니다.

WebUSB는 이러한 비표준 USB 장치 서비스가 웹에 노출될 수 있는 방법을 제공합니다. 이는 하드웨어 제조업체가 자체 API를 별도로 제공하지 않고도 웹에서 장치에 접근할 수 있게 함을 의미합니다.

새로운 WebUSB 호환 장치를 연결하면 브라우저는 제조업체 웹사이트로의 링크를 제공하는 알림을 표시합니다. 사이트에 도착하면 브라우저는 장치에 연결할 수 있는 권한을 요청하고, 그러면 장치를 사용할 준비가 됩니다. 드라이버를 다운로드하고 설치할 필요가 없습니다.

## 인터페이스

- {{domxref("USB")}}
  - : 웹 페이지에서 USB 장치를 찾고 연결하기 위한 특성과 메서드를 제공합니다.
- {{domxref("USBConnectionEvent")}}
  - : 사용자 에이전트가 새로운 USB 장치가 호스트에 연결되거나 연결 해제된 것을 감지할 때 {{domxref("USB.onconnect")}} 또는 {{domxref("USB.ondisconnect")}}에 전달되는 이벤트 타입입니다.
- {{domxref("USBDevice")}}
  - : 연결된 USB 장치에 대한 메타데이터에 대한 접근과 이를 제어하는 메서드를 제공합니다.
- {{domxref("USBInTransferResult")}}
  - : USB 장치에서 USB 호스트로 데이터 전송을 요청한 결과를 나타냅니다.
- {{domxref("USBIsochronousInTransferPacket")}}
  - : 등시 엔드포인트를 통해 USB 장치에서 USB 호스트로 데이터를 전송하는 요청에서 개별 패킷의 상태를 나타냅니다.
- {{domxref("USBIsochronousInTransferResult")}}
  - : USB 장치에서 USB 호스트로 데이터 전송을 요청한 결과를 나타냅니다.
- {{domxref("USBIsochronousOutTransferPacket")}}
  - : 등시 엔드포인트를 통해 USB 호스트에서 USB 장치로 데이터를 전송하는 요청에서 개별 패킷의 상태를 나타냅니다.
- {{domxref("USBIsochronousOutTransferResult")}}
  - : USB 호스트에서 USB 장치로 데이터 전송을 요청한 결과를 나타냅니다.
- {{domxref("USBConfiguration")}}
  - : USB 장치의 특정 구성과 이것이 지원하는 인터페이스에 대한 정보를 제공합니다.
- {{domxref("USBInterface")}}
  - : USB 장치에서 제공하는 인터페이스에 대한 정보를 제공합니다.
- {{domxref("USBAlternateInterface")}}
  - : USB 장치에서 제공하는 인터페이스의 특정 구성에 대한 정보를 제공합니다.
- {{domxref("USBEndPoint")}}
  - : USB 장치에서 제공하는 엔드포인트에 대한 정보를 제공합니다.

## 예제

### 연결된 장치에 접근하기

다음 예제는 vendorId가 `0x2341`인 {{domxref("USB.requestDevice()")}}를 사용하여 연결된 Arduino 장치에 접근하는 방법을 보여줍니다.

```js
navigator.usb
  .requestDevice({ filters: [{ vendorId: 0x2341 }] })
  .then((device) => {
    console.log(device.productName); // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  })
  .catch((error) => {
    console.error(error);
  });
```

### 연결된 모든 장치 찾기

{{domxref("USB.getDevices()")}}를 사용하여 연결된 모든 장치를 찾을 수 있습니다. 다음 예제에서는 Arduino 장치가 연결된 상태에서 제품명과 제조업체명이 콘솔에 출력됩니다.

```js
navigator.usb.getDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device.productName); // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  });
});
```

## 명세서

{{Specifications}}

## 같이 보기

- [Access USB Devices on the Web](https://developer.chrome.com/docs/capabilities/usb)
