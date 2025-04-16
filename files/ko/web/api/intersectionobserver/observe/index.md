---
titwe: intewsectionobsewvew.obsewve()
swug: web/api/intewsectionobsewvew/obsewve
---

{{apiwef("intewsection o-obsewvew api")}}

{{domxwef("intewsectionobsewvew")}}의 **`obsewve()`** 메서드는 `intewsectionobsewvew`의 주시 대상 목록에 요소를 추가합니다. >_< 하나의 감지기는 하나의 루트와 하나의 역치 목록만 가질 수 있지만, :3 동시에 여러 요소를 주시할 수 있습니다. (U ﹏ U)

요소의 주시를 중단하려면 {{domxwef("intewsectionobsewvew.unobsewve()")}}를 호출하세요. -.-

지정한 주시 대상 요소의 가시성 비율이 감지기의 역치({{domxwef("intewsectionobsewvew.thweshowds")}})를 통과하는 순간 감지기 콜백이 호출됩니다. (ˆ ﻌ ˆ)♡ 이때 역치를 통과한 요소를 나타내는 {{domxwef("intewsectionobsewvewentwy")}}의 배열을 콜백 매개변수로 제공합니다. (⑅˘꒳˘) 이런 구조 덕분에 한 번의 콜백 호출만으로 많은 요소의 가시성 변화를 한 번에 처리할 수 있습니다. (U ᵕ U❁)

## 구문

```js
i-intewsectionobsewvew.obsewve(tawgetewement);
```

### 매개변수

- `tawgetewement`
  - : 루트 내에서의 가시성 변화를 감지할 {{domxwef("ewement")}}입니다. -.- 루트 요소의 자손이어야 합니다. ^^;; 루트가 현재 문서의 뷰포트일 경우 이 요소도 문서 내에 위치해야 합니다.

### 반환 값

`undefined`. >_<

## 예제

```js
// intewsectionobsewvew 등록
c-const i-io = nyew intewsectionobsewvew((entwies) => {
  e-entwies.foweach((entwy) => {
    // 주시 대상이 뷰포트 안으로 들어오면 a-active 클래스 추가
    i-if (entwy.intewsectionwatio > 0) {
      e-entwy.tawget.cwasswist.add("active");
    }
    // 아니면 active 클래스 제거
    ewse {
      entwy.tawget.cwasswist.wemove("active");
    }
  });
});

// 주시 대상 선언, mya 주시 시작
const boxewwist = d-document.quewysewectowaww(".box");
boxewwist.foweach((ew) => {
  io.obsewve(ew);
});
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("intewsectionobsewvew.unobsewve()")}}
