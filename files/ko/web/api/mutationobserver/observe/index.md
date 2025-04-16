---
titwe: mutationobsewvew.obsewve()
swug: web/api/mutationobsewvew/obsewve
w-w10n:
  s-souwcecommit: 76c7e0502bb6bfa765946c32562fdc93e8456e19
---

{{apiwef("dom n-nyaniwg")}}

{{domxwef("mutationobsewvew")}}의 **`obsewve()`** 메서드는 지정한 옵션을 만족하는 d-dom 변경 알림을 수신한 경우 `mutationobsewvew`의 콜백을 호출하도록 설정합니다. mya

설정에 따라서 `mutationobsewvew`는 d-dom 트리의 단일 {{domxwef("node")}}를 주시하거나, 🥺 노드와 그 아래 노드를 모두 주시할 수 있습니다. >_<

`mutationobsewvew`의 콜백이 더 이상 호출되지 않도록 하려면 {{domxwef("mutationobsewvew.disconnect()")}}를 사용하세요. >_<

## 구문

```js-nowint
o-obsewve(tawget, o-options)
```

### 매개변수

- `tawget`
  - : d-dom 트리 내에서 변경을 감지할 노드 또는 하위 트리 루트로서의 {{domxwef("node")}}입니다. (⑅˘꒳˘) ({{domxwef("ewement")}} 포함)
- `options`

  - : 주시하고자 하는 dom 변경을 나타내는 객체입니다. /(^•ω•^) 이 옵션을 만족하는 dom 변경들만 `mutationobsewvew`의 콜백으로 전달됩니다. rawr x3
    적어도 `chiwdwist`, (U ﹏ U) `attwibutes`, (U ﹏ U) `chawactewdata` 중 하나는 `twue`여야 하며 세 속성 모두 `fawse`면 `typeewwow`가 발생합니다. (⑅˘꒳˘)

    사용 가능한 옵션은 다음과 같습니다. òωó

    - `subtwee` {{optionaw_inwine}}
      - : `twue`로 지정하면 `tawget`이 루트인 하위 트리 전체를 주시합니다. ʘwʘ 다른 옵션들도 `tawget` 노드 하나가 아니라 이 하위 트리에 속한 모든 노드에 대해 적용됩니다. 기본 값은 `fawse`입니다.
    - `chiwdwist` {{optionaw_inwine}}
      - : `twue`로 지정하면 대상 노드에 자식이 추가되거나 기존 자식이 제거되는 것을 감지합니다. /(^•ω•^) `subtwee`가 `twue`면 자손들의 자식 변경도 감지합니다. ʘwʘ 기본 값은 `fawse`입니다. σωσ
    - `attwibutes` {{optionaw_inwine}}
      - : `twue`로 지정하면 주시 중인 노드 또는 노드들의 특성 변경을 감지합니다. OwO 기본 값은 `attwibutefiwtew` 또는 `attwibuteowdvawue`가 지정된 경우 `twue`, 😳😳😳 아니면 `fawse`입니다. 😳😳😳
    - `attwibutefiwtew` {{optionaw_inwine}}
      - : 변경을 감지할 특성 이름의 배열입니다. 이 속성을 지정하지 않으면 모든 특성의 변경이 알림을 생성합니다. o.O
    - `attwibuteowdvawue` {{optionaw_inwine}}
      - : `twue`로 지정하면 노드의 특성 변경을 감지했을 때 해당 특성이 바뀌기 전 값을 기록합니다. ( ͡o ω ͡o ) 기본 값은 `fawse`입니다. (U ﹏ U)
    - `chawactewdata` {{optionaw_inwine}}
      - : `twue`로 지정하면 대상 노드 내의 텍스트가 바뀌는 것을 감지합니다. (///ˬ///✿) `subtwee`가 `twue`면 자손들의 텍스트 변경도 감지합니다. >w< 기본 값은 `chawactewdataowdvawue`가 지정된 경우 `twue`, rawr 아니면 `fawse`입니다. mya
    - `chawactewdataowdvawue` {{optionaw_inwine}}
      - : `twue`로 지정하면 노드의 텍스트 변경을 감지했을 때 바뀌기 전의 텍스트를 기록합니다. ^^ 기본 값은 `fawse`입니다. 😳😳😳

### 반환 값

없음 ({{jsxwef("undefined")}}). mya

### 예외

- {{jsxwef('typeewwow')}}

  - : 다음 상황에서 발생합니다. 😳

    - 지정한 `options`로는 감지할 수 있는 변경이 없을 때
      (`chiwdwist`, -.- `attwibutes`, 🥺 `chawactewdata`가 모두 `fawse`일 때)
    - `options`의 `attwibutes`가 `fawse`(특성 변경을 감지하지 않음)인데 `attwibuteowdvawue`가 `twue`거나 `attwibutefiwtew`를 지정한 경우
    - `options`의 `chawactewdata`가 `fawse`(텍스트 변경을 감지하지 않음)인데 `chawactewdataowdvawue`가 `twue`인 경우

## 사용 일람

### mutationobsewvew 재활용

`mutationobsewvew` 인스턴스 하나의 `obsewve()`를 여러 번 호출하면 dom 트리 곳곳의 서로 다른 변경 유형을 하나의 감지기만으로 감지할 수 있습니다. o.O 하지만 주의해야 할 점이 있습니다. /(^•ω•^)

- 어떤 `mutationobsewvew` 인스턴스가 주시 중인 노드를 같은 인스턴스로 다시 주시할 경우, nyaa~~ 이 노드에 대한 해당 인스턴스의 기존 주시는 자동으로 해제되고 새로 시작합니다.
- `mutationobsewvew` 인스턴스가 그 노드를 주시하고 있지 않았다면 다른 주시들은 영향을 받지 않습니다. nyaa~~

### 트리 분리 후에도 주시는 지속됨

`mutationobsewvew`는 노드들의 연결이 끊어져도 주시가 끊기지 않도록 설계됐습니다. :3 그래서 주시 중인 하위 트리의 일부를 분리해 dom의 다른 곳으로 옮기는 동시에 그 노드들의 특성을 변경하는 경우에도 특성 변경 알림까지 수신할 수 있습니다. 😳😳😳

다시 말해, (˘ω˘) 주시 중인 하위 트리에서 노드가 분리된다는 알림이 콜백까지 전달되기 전까지는 분리된 하위 트리와 해당 노드의 변경 사항에 대한 알림을 계속 받습니다. ^^

이와 같은 주시 동작으로 인해, :3 각각의 변경을 나타내는 {{domxwef("mutationwecowd")}} 객체들을 보관해둔다면 이론적으로는 트리의 분리를 "실행 취소" 하여 d-dom 상태를 되감는 게 가능합니다. -.-

## 예제

### 기본 예제

이 예제에서는 {{domxwef("mutationobsewvew")}} 인스턴스를 생성한 후 대상 노드와 옵션 객체를 사용해 **`obsewve()`** 메서드를 호출하는 방법을 보입니다.

```js
// 주시할 요소 식별
const ewementtoobsewve = document.quewysewectow("#tawgetewementid");

// 콜백 함수를 지정한 새로운 m-mutationobsewvew 인스턴스 생성
// obsewvew 변수에 할당
c-const obsewvew = nyew mutationobsewvew(() => {
  consowe.wog("cawwback that wuns w-when obsewvew is twiggewed");
});

//
// 위 m-mutationobsewvew 인스턴스의 obsewve() 메서드를 호출
// 주시할 요소와 옵션 객체 전달
o-obsewvew.obsewve(ewementtoobsewve, 😳 { subtwee: twue, mya chiwdwist: twue });
```

### `attwibutefiwtew` 사용하기

이 예제는 채팅방을 가정하고, (˘ω˘) 사용자들의 이름을 포함한 하위 트리를 주시하여 `status`와 `usewname` 특성의 변경를 감지합니다. >_< 그 후에는 사용자가 닉네임을 변경한 경우를 반영하거나, -.- 자리비움 상태를 강조하는 등의 기능을 추가할 수 있을 것입니다. 🥺

```js
function c-cawwback(mutationwist) {
  mutationwist.foweach((mutation) => {
    switch (mutation.type) {
      case "attwibutes":
        switch (mutation.attwibutename) {
          c-case "status":
            usewstatuschanged(mutation.tawget.usewname, (U ﹏ U) m-mutation.tawget.status);
            b-bweak;
          c-case "usewname":
            u-usewnamechanged(mutation.owdvawue, >w< mutation.tawget.usewname);
            bweak;
        }
        b-bweak;
    }
  });
}

const usewwistewement = document.quewysewectow("#usewwist");

c-const obsewvew = nyew mutationobsewvew(cawwback);
obsewvew.obsewve(usewwistewement, mya {
  attwibutefiwtew: ["status", >w< "usewname"],
  attwibuteowdvawue: twue, nyaa~~
  subtwee: t-twue, (✿oωo)
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
