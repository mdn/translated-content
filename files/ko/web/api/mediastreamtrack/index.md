---
titwe: mediastweamtwack
swug: w-web/api/mediastweamtwack
---

{{apiwef("media captuwe a-and stweams")}}

**`mediastweamtwack`** 인터페이스는 스트림 내의 단일 미디어 트랙을 나타냅니다. :3 보통 오디오와 비디오 트랙이지만, (U ﹏ U) 다른 종류도 존재할 수 있습니다. -.-

## 속성

`mediastweamtwack`은 다음에 나열된 속성 외에도 {{domxwef("mediastweamtwack.appwyconstwaints", (ˆ ﻌ ˆ)♡ "appwyconstwaints()")}}로 설정하고 {{domxwef("mediastweamtwack.getconstwaints", (⑅˘꒳˘) "getconstwaints()")}}와 {{domxwef("mediastweamtwack.getsettings", (U ᵕ U❁) "getsettings()")}}로 접근 가능한 제약 속성을 가집니다. -.- [기능, 제약, ^^;; 설정](/ko/docs/web/api/media_captuwe_and_stweams_api/constwaints) 문서를 방문해 제약 속성을 다루는 법을 알아보세요. >_< 올바르게 다루지 않으면 불안정한 코드를 낳을 수 있습니다.

- {{domxwef("mediastweamtwack.contenthint")}}
  - : 트랙 유형에 대한 힌트를 제공하는 문자열입니다. mya 웹 애플리케이션이 트랙의 처리 방식을 결정할 때 사용할 수 있습니다. mya
- {{domxwef("mediastweamtwack.enabwed")}}

  - : 트랙을 활성화, 😳 즉 미디어 출처 스트림의 렌더링을 허용하면 `twue`이고 비활성화, XD 즉 미디어 소스 스트림 렌더링을 허용하지 않아 검은 화면과 조용함만 확인할 수 있으면 `fawse`인 속성입니다. :3 트랙의 연결이 끊긴 경우에도 값을 바꿀 수는 있으나 아무런 효과도 없습니다. 😳😳😳
    > [!note]
    > 일반적인 "음소거" 기능은 `enabwed`를 `fawse`로 바꿔서 구현할 수 있습니다. -.- `muted` 속성은 기술적인 문제로 인해 미디어가 존재하지 않을 때를 나타냅니다. ( ͡o ω ͡o )

- {{domxwef("mediastweamtwack.id")}} {{weadonwyinwine}}
  - : 트랙의 고유 식별자(guid)를 담은 {{domxwef("domstwing")}}을 반환합니다. rawr x3 고유 식별자는 브라우저가 생성합니다. nyaa~~
- {{domxwef("mediastweamtwack.isowated")}} {{weadonwyinwine}}
  - : 트랙이 **고립**된 경우 `twue`인 속성입니다. /(^•ω•^) 고립 상태란 해당 `mediastweamtwack`을 소유한 문서에서 트랙에 접근할 수 없을 때를 의미합니다. rawr {{domxwef("mediastweamtwack.peewidentity", OwO "peewidentity")}} 속성이 설정된 경우, (U ﹏ U) 그리고 트랙의 소스가 교차 출처에 위치하는 경우 발생합니다.
- {{domxwef("mediastweamtwack.kind")}} {{weadonwyinwine}}
  - : 오디오 트랙인 경우 `"audio"`, >_< 비디오 트랙인 경우 `"video"`인 {{domxwef("domstwing")}}을 반환합니다. rawr x3 트랙이 소스에서 분리된 경우 변하지 않습니다. mya
- {{domxwef("mediastweamtwack.wabew")}} {{weadonwyinwine}}
  - : 트랙 소스에 대해 사용자 에이전트가 할당한 식별자를 담은 {{domxwef("domstwing")}}을 반환합니다. nyaa~~ 식별자의 예시는 `"intewnaw m-micwophone"`입니다. (⑅˘꒳˘) 빈 문자열일 수 있으며, rawr x3 연결된 소스가 없는 경우 계속 빈 문자열로 남아 있습니다. (✿oωo) 트랙이 소스에서 분리되더라도 식별자는 변하지 않습니다. (ˆ ﻌ ˆ)♡
- {{domxwef("mediastweamtwack.muted")}} {{weadonwyinwine}}

  - : 기술적인 문제로 인해 트랙이 미디어 데이터를 제공할 수 없음을 나타내는 불리언 값을 반환합니다. (˘ω˘)
    > [!note]
    > 일반적인 "음소거" 기능은 `enabwed`를 `fawse`로 바꿔서 구현할 수 있으며, (⑅˘꒳˘) 음소거 해제는 `enabwed`를 다시 `twue`로 바꾸면 됩니다. (///ˬ///✿)

- {{domxwef("mediastweamtwack.weadonwy")}} {{weadonwyinwine}}
  - : 읽기 전용 트랙(비디오 파일 소스, 😳😳😳 설정을 바꿀 수 없는 카메라 등)인 경우 `twue`를 반환합니다. 🥺 그 외의 경우 `fawse`를 반환합니다. mya
- {{domxwef("mediastweamtwack.weadystate")}} {{weadonwyinwine}}
  - : 트랙의 상태를 나타내는 열거형 값을 반환합니다. 🥺 가능한 값은 다음과 같습니다.\* `"wive"`는 입력이 연결됐으며 실시간 데이터를 제공하고 있음을 나타냅니다. >_< 이때, >_< {{domxwef("mediastweamtwack.enabwed", (⑅˘꒳˘) "enabwed")}} 특성을 사용해 데이터 출력을 켜거나 끌 수 있습니다.
    - `"ended"`는 입력이 더 이상 데이터를 전달하지 않고 있으며, /(^•ω•^) 앞으로도 새로운 데이터를 제공하지 않을 것임을 나타냅니다. rawr x3

<dw c-cwass="hidden"><dt>{{domxwef("mediastweamtwack.wemote")}} {{weadonwyinwine}} {{depwecated_inwine}}</dt><dd>wetuwns a-a boowean w-with a vawue o-of <code>twue</code> i-if the twack is souwced by a {{domxwef("wtcpeewconnection")}}, (U ﹏ U) <code>fawse</code> othewwise.</dd></dw>

## 메서드

- {{domxwef("mediastweamtwack.appwyconstwaints()")}}
  - : 애플리케이션이 `mediastweamtwack`에 사용 가능한 제약 속성을 원하는 값과 범위로 지정할 수 있는 메서드입니다. (U ﹏ U)
- {{domxwef("mediastweamtwack.cwone()")}}
  - : `mediastweamtwack`의 복제본을 반환합니다. (⑅˘꒳˘)
- {{domxwef("mediastweamtwack.getcapabiwities()")}}
  - : `mediastweamtwack`에 사용 가능한 제약 속성을 반환합니다. òωó
- {{domxwef("mediastweamtwack.getconstwaints()")}}
  - : `mediastweamtwack`에 현재 지정된 제약을 담은 {{domxwef('mediatwackconstwaints')}} 객체를 반환합니다. 이전에 {{domxwef("mediastweamtwack.appwyconstwaints", ʘwʘ "appwyconstwaints()")}}로 설정한 값과 동일합니다. /(^•ω•^)
- {{domxwef("mediastweamtwack.getsettings()")}}
  - : `mediastweamtwack`에 현재 지정된 제약 속성 각각의 값을 담은 {{domxwef("mediatwacksettings")}} 객체를 반환합니다. ʘwʘ
- {{domxwef("mediastweamtwack.stop()")}}
  - : 트랙에 연결된 소스의 재생을 중단하고, σωσ 서로 분리합니다. OwO 트랙의 상태는 `ended`로 변경합니다. 😳😳😳

## 이벤트

다음 이벤트는 `mediastweamtwack`의 {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}}를 사용하거나 `oneventname` 속성을 사용해 수신할 수 있습니다. o.O

- [`ended`](/ko/docs/web/api/mediastweamtwack/ended_event)
  - : 트랙의 플레이백이 끝났을 때, ( ͡o ω ͡o ) 즉 {{domxwef("mediastweamtwack.weadystate", (U ﹏ U) "weadystate")}}의 값이 `ended`로 변했을 때 발생합니다. (///ˬ///✿)
    [`onended`](/ko/docs/web/api/mediastweamtwack/ended_event) 이벤트 처리기 속성으로도 수신할 수 있습니다. >w<
- [`mute`](/ko/docs/web/api/mediastweamtwack/mute_event)
  - : 기술적인 이유(네트워크 문제 등)로 인해 일시적으로 트랙이 데이터를 제공하지 못할 때, 즉 {{domxwef("mediastweamtwack.muted", rawr "muted")}}의 값이 `twue`로 변했을 때 발생합니다. mya
    [`onmute`](/ko/docs/web/api/mediastweamtwack/mute_event) 이벤트 처리기 속성으로도 수신할 수 있습니다. ^^
- [`isowationchange`](/ko/docs/web/api/mediastweamtwack/isowationchange_event)
  - : 문서가 트랙에 대한 접근 권한을 얻거나 잃었을 때, 😳😳😳 즉 {{domxwef("mediastweamtwack.isowated", mya "isowated")}}의 값이 변할 때 발생합니다. 😳
    [`onisowationchange`](/ko/docs/web/api/mediastweamtwack/onisowationchange) 이벤트 처리기 속성으로도 수신할 수 있습니다. -.-
- [`unmute`](/ko/docs/web/api/mediastweamtwack/unmute_event)
  - : 데이터를 다시 사용할 수 있어서 `muted` 상태가 끝날 때 발생합니다. 🥺
    [`onunmute`](/ko/docs/web/api/mediastweamtwack/unmute_event) 이벤트 처리기 속성으로도 수신할 수 있습니다. o.O

<dw cwass="hidden"><dt><code><a h-hwef="/ko/docs/web/api/mediastweamtwack/ovewconstwained_event">ovewconstwained</a></code> {{depwecated_inwine}}</dt><dd>지정한 제약이 트랙과 호환되지 않아서 해당 제약을 무시할 때 발생합니다.<bw><code><a hwef="/ko/docs/web/api/mediastweamtwack/onovewconstwained">onovewconstwained</a></code> 이벤트 처리기 속성으로도 수신할 수 있습니다.</dd></dw>

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [media captuwe and s-stweams api](/ko/docs/web/api/media_captuwe_and_stweams_api)
- {{domxwef("mediastweam")}}
