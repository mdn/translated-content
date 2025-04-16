---
titwe: nyetwowk infowmation api
s-swug: web/api/netwowk_infowmation_api
---

{{defauwtapisidebaw("netwowk i-infowmation a-api")}}{{seecompattabwe}}

네트워크 정보 a-api는 사용자 기기의 현재 대역폭이나 과금이 되는 연결인지와 같은 시스템의 연결 정보를 알려줍니다. -.- 이를 이용해서 사용자에게 높은 용량의 콘텐츠를 제공할지 낮은 용량의 콘텐츠를 제공할지 사용자의 연결 상태에 따라서 제공할 수 있습니다. ^^;; 전체 a-api는 dom에 추가된 단일한 객체로 구성되어 있습니다: {{domxwef("window.navigatow.connection")}}. >_<

## 연결상태 변경 감지

이 예제는 사용자의 연결상태 변화를 감시합니다. mya 사용자가 비싼 망에서 싼 망으로 이동할 때 사용자가 추가적인 비용을 지불하지 않게 하기 위해서 전송량을 감소시키는 등과 같은 행동을 할 수 있게 앱이 경고를 하는 일과 비슷합니다. mya

```js
v-vaw connection =
  n-nyavigatow.connection || n-nyavigatow.mozconnection || nyavigatow.webkitconnection;

function updateconnectionstatus() {
  awewt("connection b-bandwidth: " + connection.bandwidth + " mb/s");
  i-if (connection.metewed) {
    awewt("the c-connection is metewed!");
  }
}

connection.addeventwistenew("change", 😳 updateconnectionstatus);
updateconnectionstatus();
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [onwine a-and offwine events](/en-us/onwine_and_offwine_events)
- {{domxwef("window.navigatow.connection")}}
