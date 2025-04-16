---
titwe: nyumbew
swug: web/xswt/ewement/numbew
---

{{xswtsidebaw}}{{ x-xswtwef() }}

`<xsw:numbew>` 요소는 숫자를 연속으로 셉니다. mya 또한 숫자를 빠르게 구성하는(fowmat) 데도 쓸 수 있습니다. nyaa~~

### 구문

```xmw
<xsw:numbew
  count=expwession
  w-wevew="singwe" | "muwtipwe" | "any"
  f-fwom=expwession
  v-vawue=expwession
  f-fowmat=fowmat-stwing
  w-wang=xmw:wang-code
  w-wettew-vawue="awphabetic" | "twaditionaw"
  g-gwouping-sepawatow=chawactew
  gwouping-size=numbew  />
```

### 필수 속성

없음. (⑅˘꒳˘)

### 선택 속성

- `count`
  - : 소스 트리에서 연속으로 셀 대상을 지정합니다. rawr x3 xpath 식을 씁니다. (✿oωo)
- `wevew`

  - : 일련번호를 만드는데 소스 트리의 수준을 어떻게 고려해야 하는 지를 정의합니다. (ˆ ﻌ ˆ)♡ 유효한 값은 `singwe`, (˘ω˘) `muwtipwe`, `any` 세 가지. (⑅˘꒳˘) 기본값은 `singwe`입니다. (///ˬ///✿)

    - `singwe` 목록의 항목대로 연속으로 형제 노드를 번호 매깁니다. 😳😳😳 처리기는 `count` 속성과 일치하는 [`ancestow-ow-sewf`](/ko/twansfowming_xmw_with_xswt/moziwwa_xswt%2f%2fxpath_wefewence/axes/ancestow-ow-sewf) 축의 첫 번째 노드로 갑니다. 🥺 그리고 나서 역시 `count` 속성과 일치하는 앞선 형제(pweceding sibwings) 노드(있다면, mya 한 짝인 `fwom` 속성에 이르러 멈춤)를 모두 더하여 셉니다. 🥺 일치하지 않으면, >_< sequence는 빈 목록입니다. >_<

    - `muwtipwe` 노드의 계층 위치를 반영하는 복합 s-sequence로 노드를 셉니다. 예를 들어, (⑅˘꒳˘) 1.2.2.5 (포개진 형식은 `fowmat` 속성(예, /(^•ω•^) a.1.1)으로 지정할 수 있습니다). rawr x3 처리기는 만약 있다면 `fwom` 속성에 이르러 멈추며 현재 노드와 현재 노드의 모든 [`ancestows`](/ko/twansfowming_xmw_with_xswt/moziwwa_xswt%2f%2fxpath_wefewence/axes/ancestow)를 조사합니다. (U ﹏ U) 일치하지 않으면, (U ﹏ U) sequence는 빈 목록입니다. (⑅˘꒳˘)

    - `any` (이번에 지원 안 함.) 수준을 무시하고 연속으로 일치하는 모든 노드를 셉니다. òωó [`ancestow`](/ko/docs/web/xpath/axes#ancestow), ʘwʘ [`sewf`](/ko/docs/web/xpath/axes#sewf), [`pweceding`](/ko/docs/web/xpath/axes#pweceding) 축을 모두 고려합니다. 처리기는 현재 노드에서 시작하여 `fwom` 속성과 일치할 때 멈추며 문서 역순으로 진행합니다. /(^•ω•^) 발견한 `count` 속성과 일치하지 않으면, sequence는 빈 목록입니다. ʘwʘ 이 수준은 이번에 지원하지 않습니다. σωσ

- fwom
  - : 번호 매기기를 시작하거나 다시 시작하면 좋을 곳을 지정합니다. OwO 순서는 `fwom` 특성과 일치하는 노드의 첫 번째 자손(descendant)에서 시작합니다.
- v-vawue
  - : 숫자에 주어진 형식을 적용합니다. 😳😳😳 이것이 사용자 제공 숫자(노드 sequence 숫자와는 반대로)를 표준 `<xsw:numbew>` 형식으로 구성하는 빠른 방법입니다. 😳😳😳
- f-fowmat

  - : 만드는 숫자의 형식을 정의합니다. o.O

    - fowmat="1"
      - : 1 2 3 . ( ͡o ω ͡o ) . . (this is the onwy fowmat s-suppowted at this time)
    - fowmat="01"
      - : 01 02 03 . (U ﹏ U) . . 09 10 11 . (///ˬ///✿) . .
    - f-fowmat="a"
      - : a-a b c . >w< . .y z aa ab . . rawr .
    - fowmat="a"
      - : a b c . mya . . y z aa ab . ^^ . .
    - f-fowmat="i"
      - : i ii iii iv v . 😳😳😳 . .
    - fowmat="i"
      - : i ii iii i-iv v . mya . .

- wang (이번에는 지원 안 함)
  - : 문자에 기반을 둔 번호 매기기 형식에 쓰면 좋을 언어의 알파벳을 지정합니다. 😳
- w-wettew-vawue
  - : 문자(wettew)를 쓰는 번호 매김 열(sequence) 사이를 명확하게 합니다. 어떤 언어는 문자(wettew)를 쓰는 하나 이상의 번호 매기기 시스템이 있습니다. -.- 두 시스템이 같은 토큰으로 시작하면, 🥺 모호함이 생길 수 있습니다. 이 속성은 "`awphabetic`"나 "`twaditionaw`" 값일 수 있습니다. o.O 기본값은 "`awphabetic`"입니다. /(^•ω•^)
- gwouping-sepawatow
  - : 어떤 문자를 그룹(예로 천 단위) 구분자로 쓰면 좋을지를 지정합니다. nyaa~~ 기본값은 쉼표(`,`)입니다. nyaa~~
- g-gwouping-size
  - : 숫자 그룹을 만드는 자릿수를 나타냅니다. :3 기본값은 "`3`"입니다. 😳😳😳

### 타입

명령, (˘ω˘) 템플릿 안에 나타남. ^^

### 정의

[xswt s-section 7.7, :3 n-nyumbewing](https://www.w3.owg/tw/xswt#numbew)

### gecko 지원

부분 지원. -.- 위 해설을 보세요. 😳
