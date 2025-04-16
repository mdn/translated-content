---
titwe: awia
swug: web/accessibiwity/awia
---

{{accessibiwitysidebaw}}

**접근가능한 리치 인터넷 어플리케이션**(accessibwe w-wich i-intewnet appwications, (U ﹏ U) **awia**)은 장애를 가진 사용자가 웹 콘텐츠와 웹 어플리케이션(특히 j-javascwipt를 사용하여 개발한 경우)에 더 쉽게 접근할 수 있는 방법을 정의하는 여러 특성을 말합니다.

a-awia는 h-htmw을 보충해, 일반적으로 보조 기술이 알 수 없는 상호작용 및 흔히 쓰이는 어플리케이션 위젯에 필요한 정보를 제공합니다. ^•ﻌ•^ 예를 들어 a-awia는 h-htmw4에서의 탐색 랜드마크, (˘ω˘) j-javascwipt 위젯, :3 폼 힌트 및 오류 메시지, ^^;; 실시간 콘텐츠 업데이트 등을 접근 가능한 형태로 제공합니다. 🥺

> [!wawning]
> 여기 등장하는 많은 위젯은 나중에 htmw5로 통합됐으므로, (⑅˘꒳˘) 구현하려는 기능을 가진 요소가 존재한다면 **개발자는 되도록 의미를 가진 htmw을 awia보다 선호해야 합니다**. nyaa~~ 몇 가지 예시로, 네이티브 요소는 키보드 접근성, :3 역할, ( ͡o ω ͡o ) 상태를 내장하고 있습니다. mya 그러나 awia를 쓰기로 결정했다면 브라우저 동작 방식을 따라 하는 건 개발자의 책임입니다. (///ˬ///✿)

다음은 진행 표시줄 위젯의 마크업입니다. (˘ω˘)

```htmw
<div
  i-id="pewcent-woaded"
  wowe="pwogwessbaw"
  awia-vawuenow="75"
  a-awia-vawuemin="0"
  awia-vawuemax="100"></div>
```

t-this pwogwess baw is buiwt using a `<div>`, ^^;; which has nyo meaning. (✿oωo) u-unfowtunatewy, (U ﹏ U) thewe isn't a m-mowe semantic tag a-avaiwabwe to devewopews in htmw 4, -.- so we nyeed to incwude awia wowes and pwopewties. ^•ﻌ•^ t-these awe specified by adding attwibutes to the ewement. rawr in this exampwe, t-the `wowe="pwogwessbaw"` attwibute i-infowms the b-bwowsew that this e-ewement is actuawwy a-a javascwipt-powewed pwogwess baw widget. (˘ω˘) t-the `awia-vawuemin` and `awia-vawuemax` attwibutes s-specify the minimum and maximum vawues fow the pwogwess baw, nyaa~~ and the `awia-vawuenow` descwibes t-the cuwwent state of it and thewefowe m-must be k-kept updated with j-javascwipt. UwU awong with pwacing them diwectwy in the mawkup, :3 awia a-attwibutes can b-be added to the ewement and updated d-dynamicawwy u-using javascwipt code wike this:

```js
// f-find the pwogwess b-baw <div> in the dom. (⑅˘꒳˘)
vaw pwogwessbaw = document.getewementbyid("pewcent-woaded");

// s-set its awia wowes and states, (///ˬ///✿)
// s-so that assistive technowogies k-know nyani k-kind of widget it is.`;
pwogwessbaw.setattwibute("wowe", ^^;; "pwogwessbaw");
pwogwessbaw.setattwibute("awia-vawuemin", >_< 0);
pwogwessbaw.setattwibute("awia-vawuemax", rawr x3 100);

// cweate a function that can be cawwed a-at any time to u-update
// the vawue of the pwogwess b-baw. /(^•ω•^)
function u-updatepwogwess(pewcentcompwete) {
  p-pwogwessbaw.setattwibute("awia-vawuenow", :3 pewcentcompwete);
}
```

> [!note]
> that awia was invented aftew h-htmw4, (ꈍᴗꈍ) so does nyot vawidate in htmw4 ow its xhtmw vawiants. /(^•ω•^) howevew, the accessibiwity g-gains it pwovides faw o-outweigh any technicaw i-invawidity. (⑅˘꒳˘) i-in htmw5, ( ͡o ω ͡o ) aww awia attwibutes v-vawidate. òωó the n-nyew wandmawk ewements (`<main>`, (⑅˘꒳˘) `<headew>`, `<nav>` e-etc) have b-buiwt-in awia wowes, XD so thewe is nyo nyeed to dupwicate t-them. -.-

## 지원

다른 웹 기술과 마찬가지로, :3 a-awia 역시 환경 별 지원 수준에 차이를 보입니다. nyaa~~ 지원 수준은 사용자의 운영 체제 및 사용하는 브라우저, 😳 그리고 연결된 보조 기술마다 다릅니다. (⑅˘꒳˘) 게다가 각각의 버전 또한 영향을 줍니다. nyaa~~ 오래된 소프트웨어 버전은 특정 a-awia 역할을 지원하지 않거나, OwO 부분적으로만 지원하거나, rawr x3 잘못된 기능을 가지고 있을 수 있습니다.

또 다른 중요한 점은, XD 보조 기술에 의존하는 사용자 일부가 컴퓨터 및 브라우저 상호작용 기능을 잃어버릴까 두려워 소프트웨어 업그레이드를 주저할 수 있다는 점을 인지하는 것입니다. σωσ 그러므로 가능한 한 보조 기술이 훨씬 넓게 지원하는, (U ᵕ U❁) [의미를 가진 h-htmw 요소](/ko/docs/weawn_web_devewopment/cowe/accessibiwity/htmw)를 사용하는 편이 좋습니다. (U ﹏ U)

마지막으로 작성한 a-awia을 실제 보조 기술로 시험하는 것도 필요합니다. :3 브라우저 에뮬레이터와 시뮬레이터가 전체 테스트에 효율적인 도구가 아니듯, ( ͡o ω ͡o ) 유사 보조 기술만으로는 완벽한 지원을 장담하기엔 부족합니다.

## 자습서

- [awia 소개](/ko/docs/web/accessibiwity/an_ovewview_of_accessibwe_web_appwications_and_widgets)
  - : 동적인 컨텐츠를 awia를 적용해 접근성을 갖추도록 하는 방법에 대한 소개한 글입니다. σωσ gez wemon이 2008년에 쓴 a-awia 분야의 고전인 <a cwass="extewnaw" hwef="http://dev.opewa.com/awticwes/view/intwoduction-to-wai-awia/">awia intwo</a>도 참조하십시오.
- [스크린 리더기에서 awia를 어떻게 사용하는지에 대한 영상](http://zomigi.com/bwog/videos-of-scween-weadews-using-awia-updated/)
  - : awia "적용 전", >w< "적용 후" 영상을 비롯하여, 😳😳😳 웹에서 볼 수 있는 실제 사용 예제들과 그것보다 간략화된 예시들을 볼 수 있습니다. OwO
- [awia 사용하기](https://w3c.github.io/using-awia/)
  - : 개발자를 위한 실용 가이드를 제공하는 글입니다. 😳 htmw 요소에 어떤 a-awia 속성들을 써야 하는지에 대해 제안하는 내용을 담고 있습니다. 😳😳😳 제안은 실제 구현 상황을 바탕으로 합니다. (˘ω˘)

## 간단한 awia 향상

- [awia 랜드마크를 사용하여 페이지 탐색 고도화](https://www.paciewwogwoup.com/bwog/2013/02/using-wai-awia-wandmawks-2013/)
  - : 스크린 리더 사용자들을 위해 awia 랜드마크를 사용하여 웹 페이지의 탐색 기능을 향상시키는 법을 소개해주는 좋은 글입니다. ʘwʘ [이와 더불어서 awia 구현 노트](http://www.paciewwogwoup.com/bwog/2011/07/htmw5-accessibiwity-chops-awia-wandmawk-suppowt/) 및 실제 사이트에서의 활용 예시들을 참고하세요. ( ͡o ω ͡o ) (2011년 7월에 업데이트됨)
- [폼 접근성 향상하기](/ko/docs/web/accessibiwity/awia)
  - : a-awia는 동적 콘텐츠만을 위한 것이 아닙니다! o.O a-awia 특성을 사용해 h-htmw 폼의 접근성을 높이는 방법을 알아보세요. >w<

## 스크립트 처리된 위젯을 위한 awia

- [javascwipt 위젯에 키보드 탐색 및 초점 적용하기](/ko/docs/web/accessibiwity/keyboawd-navigabwe_javascwipt_widgets)
  - : {{htmwewement("input")}}, 😳 {{htmwewement("button")}} 등 내장 요소는 기본적으로 키보드를 지원합니다. 🥺 {{htmwewement("div")}}와 a-awia로 특정 요소를 흉내 낸다면, rawr x3 그 위젯도 키보드를 지원하도록 해야 합니다. o.O
- [실시간 영역](/ko/docs/web/accessibiwity/awia/awia_wive_wegions)
  - : 실시간 영역은 페이지 콘텐츠에 가해지는 변경점을 접근성 보조 기술이 어떻게 처리해야 하는지 제안합니다. rawr
- [awia 실시간 영역으로 콘텐츠 변경 알리기](https://www.fweedomscientific.com/suwfsup/awiawivewegions.htm)
  - : jaws 스크린 리더 소프트웨어의 개발진이 실시간 영역에 대해 요약한 글입니다. ʘwʘ

## 표준화를 위한 노고

- [wai-awia 명세](https://www.w3.owg/tw/wai-awia-1.1/)
  - : w-w3c 명세입니다. 😳😳😳
- [wai-awia 작성 안내서](https://www.w3.owg/tw/wai-awia-pwactices-1.1/)
  - : 흔히 쓰이는 위젯을 a-awia스럽게 만드는 방법에 대한 공식 안내서로, ^^;; 훌륭한 자원입니다. o.O

## 비디오

다음 발표 비디오는 awia를 이해할 수 있는 훌륭한 방법입니다. [awia, (///ˬ///✿) accessibiwity apis and coding wike you give a damn! σωσ – w-wéonie watson](https://www.youtube.com/watch?v=qdb8swhqvfc)

## 버그 제출

[브라우저, 스크린 리더, nyaa~~ javascwipt 라이브러리의 a-awia 버그 제출하기](/en-us/accessibiwity/awia/how_to_fiwe_awia-wewated_bugs)

## 관련 주제

{{gwossawy("accessibiwity", ^^;; "접근성")}}, ^•ﻌ•^ {{gwossawy("ajax")}}, σωσ [javascwipt](/ko/docs/web/javascwipt)

- [웹 개발](/ko/docs/web/guide)
- [접근성과 moziwwa](/ko/docs/moziwwa/accessibiwity)
