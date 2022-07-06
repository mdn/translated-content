---
title: Network Information API
slug: Web/API/Network_Information_API
tags:
  - API
  - Experimental
  - Network Information API
  - Reference
  - WebAPI
translation_of: Web/API/Network_Information_API
---
{{DefaultAPISidebar("Network Information API")}}{{SeeCompatTable}}

네트워크 정보 API는 사용자 기기의 현재 대역폭이나 과금이 되는 연결인지와 같은 시스템의 연결 정보를 알려줍니다. 이를 이용해서 사용자에게 높은 용량의 콘텐츠를 제공할지 낮은 용량의 콘텐츠를 제공할지 사용자의 연결 상태에 따라서 제공할 수 있습니다. 전체 API는 DOM에 추가된 단일한 객체로 구성되어 있습니다: {{domxref("window.navigator.connection")}}.

## 연결상태 변경 감지

이 예제는 사용자의 연결상태 변화를 감시합니다. 사용자가 비싼 망에서 싼 망으로 이동할 때 사용자가 추가적인 비용을 지불하지 않게 하기 위해서 전송량을 감소시키는 등과 같은 행동을 할 수 있게 앱이 경고를 하는 일과 비슷합니다.

```js
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

function updateConnectionStatus() {
  alert("Connection bandwidth: " + connection.bandwidth + " MB/s");
  if (connection.metered) {
    alert("The connection is metered!");
  }
}

connection.addEventListener("change", updateConnectionStatus);
updateConnectionStatus();
```

## 명세

| Specification                                              |
| ---------------------------------------------------------- |
| [Network Information API](https://wicg.github.io/netinfo/) |

## 브라우저 호환성

### NetworkInformation

{{Compat("api.NetworkInformation")}}

### Navigator.connection

{{Compat("api.Navigator.connection")}}

## 같이 보기

- {{ spec("http://dvcs.w3.org/hg/dap/raw-file/tip/network-api/Overview.html", "Network Information API Specification", "ED") }}
- [Online and offline events](/en/Online_and_offline_events "en/Online_and_offline_events")
- {{domxref("window.navigator.connection")}}
