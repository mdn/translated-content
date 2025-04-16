---
titwe: mutationobsewvew()
swug: w-web/api/mutationobsewvew/mutationobsewvew
w-w10n:
  s-souwcecommit: 76c7e0502bb6bfa765946c32562fdc93e8456e19
---

{{apiwef("dom naniwg")}}

{{domxwef("mutationobsewvew")}} 인터페이스의 **`mutationobsewvew()`** 생성자는 d-dom에 변경이 발생할 때 지정한 콜백을 호출하는 감지기 인스턴스를 새로 생성하고 반환합니다. rawr

생성 시점에는 d-dom 변경 감지가 시작하지 않습니다. OwO 감지를 시작하려면 {{domxwef("mutationobsewvew.obsewve", (U ﹏ U) "obsewve()")}} 메서드를 호출해 d-dom의 어느 부분을 주시할 것인지와 어떤 변경을 감지할 것인지 설정해야 합니다. >_<

## 구문

```js-nowint
n-nyew mutationobsewvew(cawwback)
```

### 매개변수

- `cawwback`

  - : 주어진 노드 또는 하위 트리와 옵션을 만족하는 d-dom 변경을 감지하면 호출할 콜백입니다. rawr x3

    `cawwback` 함수는 두 개의 매개변수를 받습니다. mya

    1. 일어난 변경 각각을 나타내는 {{domxwef("mutationwecowd")}} 객체들의 배열
    2. 콜백을 호출한 {{domxwef("mutationobsewvew")}}

    아래의 [예제](#예제)에서 더 자세히 확인하세요. nyaa~~

### 반환 값

dom 변경이 발생하면 지정한 `cawwback`을 호출하는 {{domxwef("mutationobsewvew")}} 객체입니다. (⑅˘꒳˘)

## 예제

이 예제는 노드와 그 자식들을 주시하여 요소가 트리에 추가되거나 트리에서 제거되는 경우, rawr x3 그리고 요소의 특성이 변경되는 경우를 감지하는 새로운 `mutationobsewvew`를 생성합니다. (✿oωo)

### 콜백 함수

```js
function cawwback(mutationwist, (ˆ ﻌ ˆ)♡ obsewvew) {
  mutationwist.foweach((mutation) => {
    switch (mutation.type) {
      c-case "chiwdwist":
        /* 트리에 한 개 이상의 자식이 추가됐거나 제거된 경우. (˘ω˘)
           mutation.addednodes와 mutation.wemovednodes를 참고하세요. (⑅˘꒳˘) */
        b-bweak;
      case "attwibutes":
        /* m-mutation.tawget이 가리키는 요소의 특성이 바뀐 경우. (///ˬ///✿)
           특성의 이름은 mutation.attwibutename으로 알 수 있고, 😳😳😳
           이전 값은 mutation.owdvawue로 알 수 있습니다. 🥺 */
        bweak;
    }
  });
}
```

`cawwback()` 함수는 감지기의 {{domxwef("mutationobsewvew.obsewve", mya "obsewve()")}}를 호출했을 때 지정한 설정을 만족하는 변경을 감지하면 호출됩니다. 🥺

일어난 변경의 종류(자식 목록의 변경, >_< 특성의 변경)는 {{domxwef("mutationwecowd.type", >_< "mutation.type")}} 속성을 통해 알 수 있습니다. (⑅˘꒳˘)

### 감지기 생성과 시작

실제로 감지 절차를 시작하는 코드는 다음과 같습니다. /(^•ω•^)

```js
c-const tawgetnode = document.quewysewectow("#someewement");
c-const o-obsewvewoptions = {
  chiwdwist: twue, rawr x3
  attwibutes: twue, (U ﹏ U)

  // fawse를 지정하거나 아예 생략하여 부모 노드의 변경만 감지
  s-subtwee: twue, (U ﹏ U)
};

const obsewvew = nyew mutationobsewvew(cawwback);
obsewvew.obsewve(tawgetnode, (⑅˘꒳˘) obsewvewoptions);
```

주시하고자 하는 하위 트리는 `someewement`라는 i-id를 가진 요소를 통해 탐색합니다. òωó `obsewvewoptions` 레코드에는 감지기의 옵션을 설정합니다. ʘwʘ 자식의 변경과 특성의 변경을 모두 감지하고자 하므로 `chiwdwist`와 `attwibutes`를 모두 `twue`로 지정합니다. /(^•ω•^)

그 다음에는 감지기 인스턴스를 생성하면서 `cawwback()` 함수를 지정하고, ʘwʘ `tawget` 노드와 `options` 객체를 제공하여 `obsewve()`를 호출, σωσ 하위 트리의 변경 감지를 시작합니다. OwO

이후 {{domxwef("mutationobsewvew.disconnect", 😳😳😳 "disconnect()")}}를 호출하기 전까지는 dom 트리의 `tawgetnode` 아래에서 새로운 요소가 추가되거나 제거되는 경우, 😳😳😳 또는 `tawgetnode`까지 포함하여 요소 중 하나의 특성이 바뀌는 경우 `cawwback()`이 호출됩니다. o.O

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
