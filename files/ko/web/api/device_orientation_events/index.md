---
title: 디바이스 방향 이벤트
slug: Web/API/Device_orientation_events
l10n:
  sourceCommit: 6754a50ec57c8c9758a65a42691878e5fd1f910a
---

{{DefaultAPISidebar("Device Orientation Events")}}

디바이스 방향 이벤트는 [디바이스의 물리적 방향을 감지](/ko/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_orientation_events)할 수 있을 뿐만 아니라, [디바이스의 동작을 감지](/ko/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_motion_events)햘 수 있는 이벤트입니다.

## 개념 및 사용법

모바일 디바이스에는 일반적으로 자이로스코프, 나침반, 가속도계 등의 센서가 탑재되어 있어 디바이스에서 실행 중인 애플리케이션이 디바이스의 방향과 동작을 감지할 수 있습니다.

디바이스 방향 이벤트를 사용하면 사용자 디바이스의 방향에 따라 동작을 변경할 수 있고, 사용자가 디바이스를 움직일 때 반응할 수 있는 웹 애플리케이션을 개발할 수 있습니다.

디바이스 방향 이벤트를 사용할 수 있는 몇 가지 일반적인 기능은 다음과 같습니다.

- 웹 기반 게임에서 사용자가 디바이스를 기울이고 움직여 게임 내 캐릭터나 오브젝트의 동작을 제어할 수 있도록 하는 기능입니다.

- 지도 기반 애플리케이션에서 디바이스의 위치에 따라 지도의 방향을 변경하거나, 사용자의 움직임에 따라 업데이트되는 길 안내를 제공합니다.

- 제스처 인식을 위해 사용되며, 예를 들어 사용자가 기기를 흔들면 '흔들기' 제스처를 인식하고, 이를 사용하여 사용자가 기기를 흔들 때 입력 영역을 지우는 등의 작업을 수행하는 데 활용됩니다.

> [!NOTE]
> 이 API는 모바일 브라우저에서 광범위하게 지원됩니다. 일부 데스크톱 전용 브라우저에는 하드웨어 차이로 인해 제한이 있을 수 있지만, 센서가 장착된 디바이스에서 API가 주로 사용됨을 고려할 때 이러한 제약은 그다지 중요하지 않습니다.

## 인터페이스

- {{domxref("DeviceOrientationEvent")}}
  - : 디바이스의 물리적 방향 변화를 나타냅니다.
- {{domxref("DeviceMotionEvent")}}
  - : 디바이스의 가속도 및 회전 속도의 변화를 나타냅니다.
- {{domxref("DeviceMotionEventAcceleration")}}
  - : 디바이스가 모든 세 축을 따라 경험하고 있는 가속도를 나타냅니다.
- {{domxref("DeviceMotionEventRotationRate")}}
  - : 디바이스가 세 축을 중심으로 회전하는 속도를 나타냅니다.

## 이벤트

- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
  - : 지구 좌표 프레임(Earth coordinate frame)과 비교하여 디바이스의 현재 방향에 대한 새로운 데이터를 디바이스에서 사용 가능할 때 발생합니다.
- {{domxref("Window.devicemotion_event", "devicemotion")}}
  - : 일정한 간격으로 발생하며, 해당 시점에 디바이스가 받는 물리적 가속도와 디바이스의 회전 속도를 나타냅니다.
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}}
  - : 절대 디바이스 방향이 변경될 때 발생합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- web.dev의 [디바이스의 방향 & 움직임](https://web.dev/device-orientation/)
