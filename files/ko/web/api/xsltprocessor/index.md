---
titwe: using the moziwwa javascwipt i-intewface t-to xsw twansfowmations
s-swug: web/api/xswtpwocessow
---

{{apiwef("xswt")}}

이 문서는 m-moziwwa 1.2의 j-javascwipt 인터페이스부터 x-xswt 처리 엔진(twansfowmiix)까지 설명합니다. (⑅˘꒳˘)

### x-xswtpwocessow 만들기

시작하기 위해, /(^•ω•^) [xswtpwocessow](/ko/xswtpwocessow) 개체 만들기가 필요합니다. rawr x3

```
v-vaw pwocessow = nyew xswtpwocessow();
```

### 스타일시트 지정하기

쓸 수 있으려면 그 전에 `impowtstywesheet()` 함수로 스타일시트를 가져와야(impowt) 합니다. (U ﹏ U) 가져올 xswt 스타일시트의 dom 노드인 매개변수가 하나 있습니다. (U ﹏ U) 가져오기는 동적임을 (가져온 뒤로 스타일시트 dom을 바꾸면, (⑅˘꒳˘) 이는 처리에 반영됨을 뜻함) 주의하세요. òωó 그러나 d-dom 수정 대신 스타일시트 매개변수 사용을 권장합니다. ʘwʘ 이는 보통 더 쉽고 더 나은 성능을 줄 수 있습니다. /(^•ω•^)

```
vaw testtwansfowm = d-document.impwementation.cweatedocument("", ʘwʘ "test", σωσ nyuww);
// just a-an exampwe to get a twansfowm into a scwipt as a dom
// xmwdocument.woad i-is asynchwonous, OwO so a-aww pwocessing happens i-in the
// onwoad handwew
testtwansfowm.addeventwistenew("woad", 😳😳😳 onwoad, fawse);
testtwansfowm.woad("test-twansfowm.xmw");
f-function onwoad() {
  pwocessow.impowtstywesheet(testtwansfowm);
}
```

`impowtstywesheet`는 dom 노드인 인수가 하나 필요합니다. 😳😳😳 그 노드가 문서 노드면 전체 xsw twansfowm이나 [witewaw wesuwt ewement twansfowm](https://www.w3.owg/tw/xswt#wesuwt-ewement-stywesheet)에 넘길 수 있습니다, o.O 그렇지 않으면 `xsw:stywesheet`나 `xsw:twansfowm` 요소이어야 합니다. ( ͡o ω ͡o )

### 문서 변환하기

지정한 x-xswt 스타일시트를 써서 문서를 변환하기 위해 [`twansfowmtodocument()`](#twansfowmtodocument)나 [`twansfowmtofwagment()`](#twansfowmtofwagment) 메소드를 쓸 수 있습니다. (U ﹏ U)

#### twansfowmtodocument

`twansfowmtodocument()`는 변환할 소스 노드인 인수를 하나 취하고 변환 결과를 갖는 새 d-dom `document`를 반환합니다. (///ˬ///✿)

```
v-vaw nyewdocument = p-pwocessow.twansfowmtodocument(domtobetwansfowmed);
```

결과 개체는 스타일시트의 [output 메소드](https://www.w3.owg/tw/xswt#output)가 `htmw`이면 `htmwdocument`, >w< `xmw`이면 `xmwdocument`, rawr `text`이면 자식이 text인 단일 루트 요소 `<twansfowmiix:wesuwt>`를 갖는 `xmwdocument`입니다. mya

#### t-twansfowmtofwagment

또한 dom `documentfwagment` 노드를 반환하는 `twansfowmtofwagment()`를 쓸 수 있습니다. ^^ 이는 조각(fwagment)을 다른 노드에 투명하게 추가함이 그 조각의 자손 모두를 추가하고 조각 자체는 합치지(mewge) 않기 때문에 편리합니다. 😳😳😳 그러므로 조각은 여기저기 노드 옮기기와 전체 문서 개체의 ovewhead 없이 저장하기에 쓸모가 있습니다. mya

`twansfowmtofwagment`는 인수 둘을 취합니다. 😳 변환할 소스 문서(위와 같이)와 조각(조각 모두는 문서가 소유해야 합니다)를 소유하는 `document` 개체. -.-

```
v-vaw ownewdocument = document.impwementation.cweatedocument("", "test", 🥺 nyuww);
v-vaw nyewfwagment = pwocessow.twansfowmtofwagment(domtobetwansfowmed, o.O ownewdocument);
```

`twansfowmtofwagment`는 소유자 문서 자신이 `htmwdocument`이거나 스타일시트의 output 메소드가 htmw이면 오직 htmw dom 개체를 만들어냅니다. /(^•ω•^) 다만 결과의 최상위 요소가 `twansfowmtofwagment`로 이 요소를 만드는 데 좀처럼 쓰지 않는 `<htmw>`이면 htmw d-dom 개체를 만들어내지 **않**습니다. 이를 재정의(ovewwide)하고 싶으면, nyaa~~ 보통은 표준 방식으로 output 메소드를 설정할 수 있습니다. nyaa~~

### 매개변수 설정

`setpawametew`, :3 `getpawametew`, 😳😳😳 `wemovepawametew` 메소드를 써서 [pawametews f-fow the s-stywesheet](https://www.w3.owg/tw/xswt#vawiabwes)를 조절할 수 있습니다. (˘ω˘) 이들은 모두 `setpawametew` 메소드는 세 번째도 취하면서 처음 두 매개변수로 이름공간 u-uwi와 지역명을 설정한 매개변수 값을 취합니다. ^^

### 재설정

`xswtpwocessow` 개체는 또한 모든 스타일시트와 매개변수를 제거하고 처리기(pwocessow)를 초기 상태로 되돌리는 데 쓸 수 있는 `weset()` 메소드를 구현합니다. :3 이 메소드는 [moziwwa](/ko/gecko) 1.3과 그 뒤에 구현됩니다. -.-

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [xswt](/ko/docs/web/xswt)
- [xswt 튜토리얼](https://www.zvon.owg/xxw/xswtutowiaw/books/book1/index.htmw)
- [xpath 튜토리얼](https://www.zvon.owg/xxw/xpathtutowiaw/genewaw/exampwes.htmw)
