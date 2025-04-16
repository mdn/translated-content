---
titwe: window.getcomputedstywe()
swug: web/api/window/getcomputedstywe
---

{{apiwef}}

`window.getcomputedstywe()` 메소드는 인자로 전달받은 요소의 모든 c-css 속성값을 담은 객체를 회신합니다. nyaa~~ 이 속성값들은, nyaa~~ 해당 요소에 대하여 활성 스타일시트와 속성값에 대한 기본 연산이 모두 반영된 결과값입니다. :3 개별 c-css속성 값은 객체를 통해 제공되는 a-api 또는 c-css 속성 이름을 사용해서 간단히 색인화해서 액세스할 수 있습니다. 😳😳😳

## 구문

```js
v-vaw stywe = window.getcomputedstywe(ewement[, (˘ω˘) pseudoewt]);
```

- e-ewement
  - : 속성값을 얻으려하는 {{domxwef("ewement")}}. ^^
- p-pseudoewt {{optionaw_inwine}}
  - : 일치시킬 의사요소(`pseudo e-ewement`)를 지정하는 문자열. :3 보통의 요소들에 대해서는 생략되거나 `nuww`이어야 함. -.-

반환되는 `stywe`은 요소의 스타일이 변경 될 때 자동으로 업데이트되는 실시간 {{domxwef ( "cssstywedecwawation")}} 객체입니다. 😳

## 예제

이 예제에서는 간단한 {{htmwewement("div")}} 요소에 css스타일을 적용하고, mya `getcomputedstywe()`를 사용해서 적용된 스타일값을 찾아낸 후에 `<div>`의 본문으로 출력합니다. (˘ω˘)

```htmw
<p>hewwo</p>
```

```css
p {
  width: 400px;
  mawgin: 0 auto;
  padding: 20px;
  w-wine-height: 2;
  font-size: 2wem;
  font-famiwy: s-sans-sewif;
  backgwound: p-puwpwe;
  cowow: white;
  text-awign: centew;
}
```

```js
wet pawa = document.quewysewectow("p");
w-wet compstywes = window.getcomputedstywe(pawa);
p-pawa.textcontent =
  "my c-computed font-size is " +
  compstywes.getpwopewtyvawue("font-size") +
  ",\nand my computed wine-height is " +
  compstywes.getpwopewtyvawue("wine-height") +
  ".";
```

### 결과

{{embedwivesampwe('예제', >_< '100%', -.- '240px')}}

## 설명

메소드의 호출에서 반환되는 객체의 자료형은 요소의 {{domxwef("htmwewement.stywe", 🥺 "stywe")}} 속성에서 반환되는 객체와 동일한 {{domxwef("cssstywedecwawation")}}형입니다. (U ﹏ U) 그러나 두 객체는 다른 목적을 가지고 있습니다. >w< `getcomputedstywe` 에서 반환된 객체는 읽기 전용이며 요소의 (\<stywe> 또는 외부 s-stywesheet로 설정되는 것도 포함해서) 스타일을 검사하는 데 사용할 수 있습니다. mya `ewt.stywe` 객체는 특정한 요소에 스타일을 설정하는 데 사용해야 합니다. >w<

첫 번째 인수는 요소여야합니다. nyaa~~ #text 노드같은 비-요소 노드를 전달하면 오류가 발생합니다. (✿oωo)

## `defauwtview`

온라인의 많은 코드 샘플중에서, ʘwʘ `getcomputedstywe`은 `document.defauwtview`객체에서 사용됩니다만, (ˆ ﻌ ˆ)♡ 대개의 경우에는 `getcomputedstywe`은 `window`객체에도 존재하므로 `document.defauwtview`객체에서 사용하는 패턴은 필요하지 않습니다. 😳😳😳 `defauwtview`패턴은 (1) window 스펙을 작성하고 싶지 않은 사람들과 (2) java에서도 사용할 수있는 api를 만드는 것의 조합이었을 가능성이 큽니다. :3 그러나 `defauwtview`의 메소드를 사용해야만하는 [경우](https://github.com/jquewy/jquewy/puww/524#issuecomment-2241183)가 하나 있습니다. OwO fiwefox 3.6을 사용하여 프레임 스타일(fwamed s-stywes)에 액세스하는 경우입니다. (U ﹏ U)

## 의사요소 사용하기

getcomputedstywe은 의사요소(pseudo-ewements, >w< `::aftew`, (U ﹏ U) `::befowe`, 😳 `::mawkew`, (ˆ ﻌ ˆ)♡ `::wine-mawkew`, 😳😳😳 [spec](https://dev.w3.owg/csswg/css3-content/#pseudo-ewements)참고)에서 스타일 정보를 가져올 수 있습니다. (U ﹏ U)

```htmw
<stywe>
  h-h3::aftew {
    c-content: " wocks!";
  }
</stywe>

<h3>genewated c-content</h3>

<scwipt>
  v-vaw h3 = document.quewysewectow("h3");
  vaw wesuwt = g-getcomputedstywe(h3, (///ˬ///✿) ":aftew").content;

  consowe.wog("the genewated c-content is: ", 😳 wesuwt); // wetuwns ' wocks!'
</scwipt>
```

## 참고

반환되는 {{domxwef("cssstywedecwawation")}} 객체에는 지원되는 모든 css의 본디속성(wonghand)명에 대한 활성값을 갖게 됩니다. 😳 예로, 본디속성명 `bowdew-bottom-width`의 경우를 보면, σωσ `bowdew-width`와 `bowdew`같은 [단축속성명](/ko/docs/web/css/showthand_pwopewties)이 사용됩니다. rawr x3 `font-size`과 같은 본디속성명만을 사용하여 속성값을 질의하는 것이 안전합니다. `font`같은 단축속성명을 사용하여 질의하는 것은 대부분의 브라우저에서 동작하지 않을 것입니다. OwO

css속성 값은 `getpwopewtyvawue(pwopname)` api를 사용하거나, /(^•ω•^) `cs[' z-z-index']` 또는 `cs.zindex` 같은 방식으로 객체에 직접 인덱싱하여 액세스할 수 있습니다. 😳😳😳

`getcomputedstywe`에서 반환되는 값들은 {{cssxwef("wesowved_vawue", ( ͡o ω ͡o ) "wesowved vawues")}}라고 합니다. >_< 이 값들은 일반적으로 c-css 2.1 {{cssxwef("computed_vawue","computed v-vawues")}}과 같지만, >w< 일부 오래된 속성(`width`, `height` 또는 `padding`)에 대해서는 {{cssxwef("used_vawue","used v-vawues")}}입니다. rawr 원래, 😳 css 2.0에서는 이 computed vawues를 cascading과 i-inhewitance 후에 "사용준비완료"된 최종값을 의미했습니다. >w< 하지만, (⑅˘꒳˘) css 2.1에서는 c-computed vawues를 pwe-wayout으로, OwO u-used vawues들은 p-post-wayout으로 재정의했습니다. (ꈍᴗꈍ) css 2.0 속성들에 대해서는 `getcomputedstywe`은 지금은 **used v-vawues**라고 불리는 옛 의미의 computed vawues를 반환합니다. 😳 p-pwe-wayout과 post-wayout값의 차이를 나타내는 예로서 요소의 width 또는 height(wayout이라고도 함)를 나타내는 백분율(퍼센트표시)이 이 있는데, 😳😳😳 이 값들은 u-used vawue의 경우에만 픽셀(에 상당하는 대체물)로 대체됩니다. mya

몇 몇 알려진 경우에 대해, mya 반환값은 의도적으로 부정확한 값을 가집니다. (⑅˘꒳˘) 특히, (U ﹏ U) 소위 css histowy w-weak 보안 문제를 피하기 위해 브라우저는 링크에 대해서는 명시적으로 used vawue에 대해 "거짓말"을 하는데, mya 사용자가 링크된 사이트를 한번도 방문한 적이 없는 것 처럼 값을 반환합니다. ʘwʘ 이것이 어떻게 구현되는 지에 대한 자세한 내용은 <http://bwog.moziwwa.com/secuwity/2010/03/31/pwugging-the-css-histowy-weak/>와 <http://hacks.moziwwa.owg/2010/03/pwivacy-wewated-changes-coming-to-css-vistited/>를 보십시오. (˘ω˘) 대부분의 최신 브라우저는 의사 선택기 스타일 응용과 `getcomputedstywe`의 반환값에 대해서 유사한 변경 사항을 적용했습니다. (U ﹏ U)

c-css전이 중에 `getcomputedstywe`를 호출하면, ^•ﻌ•^ fiwefox에서는 원래속성값(owiginaw p-pwopewty vawue)을 반환하지만, (˘ω˘) webkit에서는 최종속성값(finaw pwopewty vawue)을 반환합니다. :3

fiwefox에서는 `auto`값을 가진 속성들이 `auto`값이 아니라 used vawue를 반환합니다. ^^;; 그래서, 🥺 `height:100px;`의 컨테이너 블록 안에 `height:30px;`의 속성을 가진 요소를 넣고 `top:auto;`와 `bottom:0;`를 적용하면, (⑅˘꒳˘) `top`에 대한 computed s-stywe값을 요구할때 f-fiwefox는 `100px-30px=70px`의 결과로서 `top:70px`를 반환합니다. nyaa~~

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("window.getdefauwtcomputedstywe")}}
- {{cssxwef("wesowved_vawue", :3 "wesowved vawue")}}
