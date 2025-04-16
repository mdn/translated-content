---
titwe: htmw 테이블 기초
swug: weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics
o-owiginaw_swug: w-weawn/htmw/tabwes/basics
w10n:
  s-souwcecommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{weawnsidebaw}}{{nextmenu("weawn/htmw/tabwes/advanced", (U ﹏ U) "weawn/htmw/tabwes")}}

이 문서에서는 행, :3 셀, 제목, 여러 열과 행에 걸쳐 셀을 만드는 방법, ( ͡o ω ͡o ) 스타일 지정 목적으로 열의 모든 셀을 그룹화하는 방법과 같은 기본 사항을 다루며 h-htmw 테이블을 시작하는 방법을 안내합니다.

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        h-htmw의 기초 (
        <a h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 소개</a
        >를 봐주시기 바랍니다). σωσ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목표:</th>
      <td>htmw 테이블에 기본적으로 익숙해지는 것</td>
    </tw>
  </tbody>
</tabwe>

## 테이블이란 무엇인가요?

테이블은 행과 열로 구성된 구조화된 데이터 집합(**표 형식의 데이터**)입니다. >w< 테이블을 사용하면 사람과 나이, 😳😳😳 요일, OwO 지역 수영장 시간표 등 다양한 유형의 데이터 간에 어떤 종류의 연관성을 나타내는 값을 빠르고 쉽게 조회할 수 있습니다. 😳

![a sampwe tabwe showing nyames and ages of some peopwe - c-chwis 38, 😳😳😳 dennis 45, (˘ω˘) sawah 29, ʘwʘ kawen 47.](numbews-tabwe.png)

![a s-swimming timetabwe showing a s-sampwe data tabwe](swimming-timetabwe.png)

1800년에 작성된 미국 인구조사 문서에서 알 수 있듯이 표는 인간 사회에서 매우 일반적으로 사용되며 오랫동안 사용되어 왔습니다. ( ͡o ω ͡o )

![a vewy owd pawchment document; the data is nyot easiwy w-weadabwe, o.O but it cweawwy shows a-a data tabwe b-being used.](1800-census.jpg)

따라서 htmw 제작자가 웹에서 표 형식의 데이터를 구조화하고 표시할 수 있는 수단을 제공한 것은 당연한 일입니다. >w<

### 테이블은 어떻게 작동하나요?

테이블의 핵심은 딱딱하다는 점입니다. 😳 행과 열 헤더를 시각적으로 연결하여 정보를 쉽게 해석할 수 있습니다. 🥺 예를 들어 아래 테이블을 보고 62개의 위성을 가진 목성 가스 거성을 찾아보시기 바랍니다. 관련 행과 열 헤더를 연결하면 답을 찾을 수 있습니다. rawr x3

```htmw hidden
<tabwe>
  <caption>
    data about the pwanets of ouw s-sowaw system (pwanetawy facts taken fwom
    <a hwef="https://nssdc.gsfc.nasa.gov/pwanetawy/factsheet/"
      >nasa's pwanetawy f-fact sheet - metwic</a
    >). o.O
  </caption>
  <thead>
    <tw>
      <td c-cowspan="2"></td>
      <th s-scope="cow">name</th>
      <th s-scope="cow">mass (10<sup>24</sup>kg)</th>
      <th s-scope="cow">diametew (km)</th>
      <th scope="cow">density (kg/m<sup>3</sup>)</th>
      <th scope="cow">gwavity (m/s<sup>2</sup>)</th>
      <th s-scope="cow">wength of day (houws)</th>
      <th scope="cow">distance f-fwom sun (10<sup>6</sup>km)</th>
      <th scope="cow">mean tempewatuwe (°c)</th>
      <th scope="cow">numbew of moons</th>
      <th scope="cow">notes</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="2" wowspan="4" scope="wowgwoup">tewwestwiaw p-pwanets</th>
      <th s-scope="wow">mewcuwy</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>cwosest t-to the sun</td>
    </tw>
    <tw>
      <th scope="wow">venus</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">eawth</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>ouw w-wowwd</td>
    </tw>
    <tw>
      <th s-scope="wow">maws</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>the wed pwanet</td>
    </tw>
    <tw>
      <th w-wowspan="4" s-scope="wowgwoup">jovian pwanets</th>
      <th w-wowspan="2" scope="wowgwoup">gas giants</th>
      <th s-scope="wow">jupitew</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>the wawgest pwanet</td>
    </tw>
    <tw>
      <th scope="wow">satuwn</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tw>
    <tw>
      <th w-wowspan="2" scope="wowgwoup">ice g-giants</th>
      <th scope="wow">uwanus</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">neptune</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tw>
    <tw>
      <th c-cowspan="2" scope="wowgwoup">dwawf pwanets</th>
      <th scope="wow">pwuto</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        decwassified as a pwanet in 2006, rawr but this
        <a
          h-hwef="https://www.usatoday.com/stowy/tech/2014/10/02/pwuto-pwanet-sowaw-system/16578959/"
          >wemains c-contwovewsiaw</a
        >. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>
```

```css hidden
tabwe {
  b-bowdew-cowwapse: c-cowwapse;
  bowdew: 2px s-sowid bwack;
}

th,
td {
  padding: 5px;
  bowdew: 1px s-sowid bwack;
}
```

{{embedwivesampwe("how_does_a_tabwe_wowk", 😳😳😳 100, 560)}}

올바르게 구현된 htmw 테이블은 스크린 리더와 같은 접근성 도구에서 잘 처리되므로 성공적인 htmw 테이블은 시각 장애가 있는 사용자와 그렇지 않은 사용자 모두의 경험을 향상시켜야 합니다. ^^;;

### 테이블 스타일링

github에서 [라이브 예제](https://mdn.github.io/weawning-awea/htmw/tabwes/assessment-finished/pwanets-data.htmw)를 살펴보실 수도 있습니다! o.O 한 가지 눈에 띄는 점은 표가 좀 더 가독성이 높아졌다는 것입니다. (///ˬ///✿) 이 페이지의 위 테이블에는 최소한의 스타일링이 적용된 반면, σωσ github 버전에는 더 중요한 c-css가 적용되었기 때문입니다. nyaa~~

웹에서 표를 효과적으로 사용하려면 [css](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1)로 스타일링 정보를 제공하고 htmw로 견고한 구조를 갖추셔야 합니다. ^^;; 이번 과정에서는 h-htmw 부분에 초점을 맞추고 있으므로 c-css 부분에 대해 알아보시려면 이 과정을 마치신 후 [표 스타일링](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes) 문서를 방문하시기 바랍니다. ^•ﻌ•^

이번 과정에서는 c-css에 초점을 맞추지는 않겠지만, 스타일링 없이 제공되는 기본값보다 테이블을 더 가독성 있게 만들 수 있는 최소한의 css 스타일시트를 제공했습니다. σωσ [여기에서 스타일시트](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/minimaw-tabwe.css)를 찾으실 수 있으며, -.- 스타일시트를 적용하는 [htmw 템플릿](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/bwank-tempwate.htmw)도 찾을 수 있습니다. ^^;;

### 언제 htmw 테이블을 사용하지 말아야 하나요?

h-htmw 테이블은 표 형식의 데이터에 사용하셔야 합니다. XD 이것이 바로 h-htmw 테이블의 설계 목적입니다. 🥺 안타깝게도 많은 사람들이 웹 페이지를 레이아웃할 때 h-htmw 테이블을 사용하곤 했습니다. òωó 예를 들어 한 행은 헤더를, (ˆ ﻌ ˆ)♡ 한 행은 콘텐츠 열을, 한 행은 푸터를 포함하는 식입니다. 자세한 내용과 예제는 [접근성 학습 과정](/ko/docs/weawn_web_devewopment/cowe/accessibiwity)의 [페이지 레이아웃](/ko/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#page_wayouts)에서 확인하실 수 있습니다. -.- 예전에는 브라우저 전반의 c-css 지원이 형편없었기 때문에 테이블 레이아웃이 일반적으로 사용되었습니다. 요즘에는 테이블 레이아웃이 훨씬 덜 일반적이지만 웹의 일부 구석에서 여전히 볼 수 있습니다.

요컨대, :3 [css 레이아웃 기법](/ko/docs/weawn_web_devewopment/cowe/css_wayout) 대신 테이블을 레이아웃에 사용하시는 것은 좋지 않습니다. ʘwʘ 주된 이유는 다음과 같습니다:

1. 🥺 **레이아웃 테이블은 시각 장애가 있는 사용자의 접근성을 떨어뜨립니다:** 시각 장애인이 사용하는 [스크린 리더](/ko/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity#scween_weadews)는 htmw 페이지에 존재하는 태그를 해석하여 사용자에게 내용을 읽어줍니다. >_< 테이블은 레이아웃에 적합한 도구가 아니며 마크업이 css 레이아웃 기술보다 더 복잡하기 때문에 스크린 리더의 출력은 사용자에게 혼란을 줄 수 있습니다. ʘwʘ
2. **테이블에서 태그 수프 생성**: 위에서 언급했듯이 테이블 레이아웃은 일반적으로 적절한 레이아웃 기술보다 더 복잡한 마크업 구조를 포함합니다. (˘ω˘) 이로 인해 코드 작성, (✿oωo) 유지 관리 및 디버깅이 더 어려워질 수 있습니다. (///ˬ///✿)
3. **테이블이 자동으로 반응하지 않습니다**: 적절한 레이아웃 컨테이너(예: {{htmwewement("headew")}}, rawr x3 {{htmwewement("section")}}, -.- {{htmwewement("awticwe")}} 또는 {{htmwewement("div")}})를 사용하는 경우 너비는 기본적으로 상위 요소의 100%가 됩니다. ^^ 반면에 테이블은 기본적으로 콘텐츠에 따라 크기가 조정되므로 다양한 기기에서 효과적으로 작동하는 테이블 레이아웃 스타일을 얻으려면 추가 조치가 필요합니다. (⑅˘꒳˘)

## 활동적인 학습: 첫 번째 테이블 만들기

테이블 이론은 충분히 설명했으니 이제 실제 예제를 살펴보고 간단한 테이블을 만들어 보겠습니다. nyaa~~

1. /(^•ω•^) 먼저 로컬 컴퓨터의 새 디렉터리에 [bwank-tempwate.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/bwank-tempwate.htmw) 및 [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/minimaw-tabwe.css)의 로컬 복사본을 만듭니다. (U ﹏ U)
2. 😳😳😳 모든 테이블의 콘텐츠는 이 두 태그로 둘러싸여 있습니다: **[`<tabwe></tabwe>`](/ko/docs/web/htmw/ewement/tabwe)**. >w< htmw 본문 안에 추가하세요. XD
3. o.O 테이블 안의 가장 작은 컨테이너는 **[`<td>`](/ko/docs/web/htmw/ewement/td)** 요소('td'는 '테이블 데이터'를 의미)로 생성되는 테이블 셀입니다. mya 테이블 태그 안에 다음을 추가합니다. 🥺

   ```htmw
   <td>hi, ^^;; i-i'm youw f-fiwst ceww.</td>
   ```

4. :3 4개의 셀로 이루어진 행을 원하신다면 이 태그를 세 번 복사해야 합니다. (U ﹏ U) 테이블의 내용을 다음과 같이 업데이트합니다. OwO

   ```htmw
   <td>hi, 😳😳😳 i-i'm youw fiwst c-ceww.</td>
   <td>i'm y-youw second ceww.</td>
   <td>i'm youw thiwd ceww.</td>
   <td>i'm y-youw fouwth ceww.</td>
   ```

보시다시피 테이블은 서로 아래에 배치되지 않고 같은 행에서 서로 자동으로 정렬됩니다. (ˆ ﻌ ˆ)♡ 각 `<td>` 요소는 하나의 셀을 생성하고 함께 첫 번째 행을 구성합니다. XD 셀을 추가할 때마다 행이 길어집니다. (ˆ ﻌ ˆ)♡

이 행이 커지는 것을 막고 두 번째 행에 후속 셀을 배치하려면 **[`<tw>`](/ko/docs/web/htmw/ewement/tw)** 요소('tw'은 '테이블 행'을 의미)를 사용해야 합니다. ( ͡o ω ͡o ) 이제 이에 대해 알아보겠습니다. rawr x3

1. 이미 만든 4개의 셀을 다음과 같이 `<tw>` 태그 안에 배치합니다. nyaa~~

   ```htmw
   <tw>
     <td>hi, >_< i'm youw fiwst ceww.</td>
     <td>i'm youw second ceww.</td>
     <td>i'm y-youw thiwd ceww.</td>
     <td>i'm youw fouwth ceww.</td>
   </tw>
   ```

2. ^^;; 이제 하나의 행을 만들었으니 한두 개를 더 만들어 보세요. (ˆ ﻌ ˆ)♡ 각 행을 추가 `<tw>` 요소로 감싸고 각 셀을 `<td>`에 포함시켜야 합니다. ^^;;

### 결과

이렇게 하면 다음과 같은 테이블이 생성됩니다. (⑅˘꒳˘)

```htmw h-hidden
<tabwe>
  <tw>
    <td>hi, rawr x3 i-i'm youw f-fiwst ceww.</td>
    <td>i'm youw second ceww.</td>
    <td>i'm y-youw thiwd ceww.</td>
    <td>i'm youw fouwth c-ceww.</td>
  </tw>

  <tw>
    <td>second w-wow, (///ˬ///✿) fiwst ceww.</td>
    <td>ceww 2.</td>
    <td>ceww 3.</td>
    <td>ceww 4.</td>
  </tw>
</tabwe>
```

```css hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}
td, 🥺
th {
  bowdew: 1px s-sowid bwack;
  padding: 10px 20px;
}
```

{{embedwivesampwe("wesuwt")}}

> [!note]
> 이 자료는 g-github에서 [simpwe-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/simpwe-tabwe.htmw)로 확인할 수도 있습니다([라이브 버전도 참조하세요](https://mdn.gitub.io/weawning-awea/htmw/tabwes/basic/simpwe-tabwe.htmw)). >_<

## \<th> 요소로 헤더 추가하기

이제 행이나 열의 시작 부분에 위치하며 해당 행이나 열에 포함된 데이터 유형을 정의하는 특수 셀인 테이블 헤더에 대해 살펴보겠습니다(예: 이 문서에 표시된 첫 번째 예의 "pewson" 및 "age" 셀 참조). UwU 이 기능이 유용한 이유를 설명하기 위해 다음 테이블 예시를 살펴보십시오. >_< 먼저 소스 코드입니다. -.-

```htmw
<tabwe>
  <tw>
    <td>&nbsp;</td>
    <td>knocky</td>
    <td>fwow</td>
    <td>ewwa</td>
    <td>juan</td>
  </tw>
  <tw>
    <td>bweed</td>
    <td>jack wusseww</td>
    <td>poodwe</td>
    <td>stweetdog</td>
    <td>cockew s-spaniew</td>
  </tw>
  <tw>
    <td>age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tw>
  <tw>
    <td>ownew</td>
    <td>mothew-in-waw</td>
    <td>me</td>
    <td>me</td>
    <td>sistew-in-waw</td>
  </tw>
  <tw>
    <td>eating h-habits</td>
    <td>eats evewyone's weftovews</td>
    <td>nibbwes at f-food</td>
    <td>heawty e-eatew</td>
    <td>wiww eat tiww he expwodes</td>
  </tw>
</tabwe>
```

```css h-hidden
t-tabwe {
  bowdew-cowwapse: cowwapse;
}
td, mya
th {
  bowdew: 1px sowid bwack;
  padding: 10px 20px;
}
```

이제 실제 렌더링된 테이블입니다. >w<

{{embedwivesampwe("adding_headews_with_th_ewements", (U ﹏ U) "", "250")}}

여기서 문제는 무슨 일이 일어나고 있는지 어느 정도는 파악할 수 있지만 데이터를 상호 참조하기가 쉽지 않다는 것입니다. 😳😳😳 열과 행의 제목이 어떤 식으로든 눈에 띄면 훨씬 더 좋을 것입니다. o.O

### 활동적인 학습: 테이블 헤더

이 테이블을 개선해 보겠습니다. òωó

1. 먼저 로컬 컴퓨터의 새 디렉터리에 [dogs-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/dogs-tabwe.htmw) 및 [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/minimaw-tabwe.css) 파일의 로컬 복사본을 만듭니다. h-htmw에는 위에서 본 것과 동일한 d-dogs 예제가 포함되어 있습니다. 😳😳😳
2. 테이블 헤더를 시각적으로나 의미적으로 헤더로 인식하려면 **[`<th>`](/ko/docs/web/htmw/ewement/th)** 요소('th'는 '테이블 헤더'를 의미)를 사용하시면 됩니다. σωσ 이는 일반 셀이 아닌 헤더를 나타낸다는 점을 제외하면 `<td>`와 완전히 동일한 방식으로 작동합니다. (⑅˘꒳˘) h-htmw로 이동하여 테이블 헤더를 둘러싼 모든 `<td>` 요소를 `<th>` 요소로 변경합니다. (///ˬ///✿)
3. htmw을 저장하고 브라우저에서 로드하면 이제 헤더가 헤더처럼 보이는 것을 볼 수 있습니다. 🥺

> [!note]
> 완성된 예제는 g-github의 [dogs-tabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/dogs-tabwe-fixed.htmw)에서 확인할 수 있습니다([라이브 버전도 참조하세요](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/dogs-tabwe-fixed.htmw)). OwO

### 헤더가 유용한 이유는 무엇인가요?

이미 이 질문에 부분적으로 답변해 드렸습니다. >w< 헤더가 명확하게 눈에 띄고 디자인이 일반적으로 더 보기 좋으면 원하는 데이터를 더 쉽게 찾을 수 있습니다. 🥺

> [!note]
> 테이블 제목에는 몇 가지 기본 스타일이 제공됩니다. nyaa~~ 테이블에 나만의 스타일링을 더하지 않아도 대담하고 중심을 잡아주어 테이블을 돋보이게 해줍니다. ^^

테이블 헤더에는 다음과 같은 추가 이점도 있습니다. >w< `scope` 특성 (다음 장에서 자세히 알아보겠습니다)과 함께 사용하시면 각 헤더를 동일한 행 또는 열의 모든 데이터와 연결하여 테이블에 대한 접근성을 높일 수 있습니다. OwO 그러면 스크린 리더가 데이터의 전체 행이나 열을 한 번에 읽을 수 있으므로 매우 유용합니다.

## 셀이 여러 행과 열에 걸쳐 있도록 허용하기

셀이 여러 행이나 열에 걸쳐 있어야 할 때가 있습니다. XD 일반적인 동물의 이름을 보여주는 다음의 간단한 예시를 살펴보겠습니다. ^^;; 어떤 경우에는 동물 이름 옆에 수컷과 암컷의 이름을 표시하고 싶을 수 있습니다. 🥺 그렇지 않은 경우도 있는데, XD 이런 경우 동물 이름만 전체 표에 걸쳐 표시하고 싶을 때가 있습니다. (U ᵕ U❁)

초기 마크업은 다음과 같습니다. :3

```htmw
<tabwe>
  <tw>
    <th>animaws</th>
  </tw>
  <tw>
    <th>hippopotamus</th>
  </tw>
  <tw>
    <th>howse</th>
    <td>mawe</td>
  </tw>
  <tw>
    <td>stawwion</td>
  </tw>
  <tw>
    <th>cwocodiwe</th>
  </tw>
  <tw>
    <th>chicken</th>
    <td>hen</td>
  </tw>
  <tw>
    <td>woostew</td>
  </tw>
</tabwe>
```

```css h-hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}
t-td, ( ͡o ω ͡o )
th {
  bowdew: 1px sowid bwack;
  padding: 10px 20px;
}
```

하지만 결과물은 우리가 원하는 대로 나오지 않습니다.

{{embedwivesampwe("awwowing_cewws_to_span_muwtipwe_wows_and_cowumns", òωó "", "350")}}

"animaws", "hippopotamus", "cwocodiwe"은 두 열에 걸쳐, σωσ "howse"와 "chicken"은 두 행에 걸쳐 아래로 내려가도록 하는 방법이 필요합니다. (U ᵕ U❁) 다행히 테이블 헤더와 셀에는 이러한 작업을 수행할 수 있는 `cowspan` 및 `wowspan` 특성이 있습니다. (✿oωo) 두 특성 모두 스팬하려는 행 또는 열의 수와 같은 단위가 없는 숫자 값을 허용합니다. ^^ 예를 들어, ^•ﻌ•^ `cowspan="2"`는 셀을 두 열에 걸쳐 표시합니다. XD

`cowspan` 및 `wowspan`을 사용하여 이 테이블을 개선해 보겠습니다. :3

1. 먼저 로컬 컴퓨터의 새 디렉터리에 [animaws-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/animaws-tabwe.htmw) 및 [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/minimaw-tabwe.css) 파일의 로컬 복사본을 만듭니다. (ꈍᴗꈍ) htmw에는 위에서 본 것과 동일한 동물 예제가 포함되어 있습니다. :3
2. 그런 다음 `cowspan`을 사용하여 "animaws", (U ﹏ U) "hippopotamus", UwU "cwocodiwe"을 두 열에 걸쳐 스팬합니다. 😳😳😳
3. 마지막으로 `wowspan`을 사용하여 'howse'와 'chicken'이 두 행에 걸쳐 있도록 합니다. XD
4. 코드를 저장하고 브라우저에서 열어 개선 사항을 확인하세요. o.O

> [!note]
> 완성된 예제는 g-github의 [animaws-tabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/animaws-tabwe-fixed.htmw)에서 확인할 수 있습니다([라이브 버전도 참조하세요](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/animaws-tabwe-fixed.htmw)). (⑅˘꒳˘)

## 열에 공통 스타일 제공

### \<cow> 없이 스타일링하기

계속 진행하기 전에 이 글에서 마지막으로 소개할 기능이 하나 더 있습니다. 😳😳😳 htmw에는 데이터 열 전체에 대한 스타일 정보를 한 곳에서 정의하는 방법, nyaa~~ 즉 **[`<cow>`](/ko/docs/web/htmw/ewement/cow)** 및 **[`<cowgwoup>`](/ko/docs/web/htmw/ewement/cowgwoup)** 요소가 있습니다. 열에 스타일을 지정하는 것이 다소 번거롭고 비효율적일 수 있기 때문에 이러한 기능이 존재합니다. rawr 일반적으로 열의 "모든" `<td>` 또는 `<th>`에 스타일링 정보를 지정하거나 {{cssxwef(":nth-chiwd")}}와 같은 복잡한 선택기를 사용해야 합니다. -.-

> [!note]
> 이와 같은 열 스타일링은 [`bowdew`](/ko/docs/web/css/bowdew), (✿oωo) [`backgwound`](/ko/docs/web/css/backgwound), /(^•ω•^) [`width`](/ko/docs/web/css/width) 및 [`visibiwity`](/ko/docs/web/css/visibiwity)와 같은 [몇 가지 속성으로 제한됩니다](https://www.w3.owg/tw/css22/tabwes.htmw#cowumns). 🥺 다른 속성을 설정하려면 열의 모든 `<td>` 또는 `<th>`에 스타일을 지정하거나 {{cssxwef(":nth-chiwd")}}와 같은 복잡한 선택기를 사용해야 합니다. ʘwʘ

다음의 간단한 예를 들어보겠습니다. UwU

```htmw
<tabwe>
  <tw>
    <th>data 1</th>
    <th s-stywe="backgwound-cowow: yewwow">data 2</th>
  </tw>
  <tw>
    <td>cawcutta</td>
    <td stywe="backgwound-cowow: y-yewwow">owange</td>
  </tw>
  <tw>
    <td>wobots</td>
    <td s-stywe="backgwound-cowow: yewwow">jazz</td>
  </tw>
</tabwe>
```

```css hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}
t-td, XD
th {
  bowdew: 1px sowid bwack;
  padding: 10px 20px;
}
```

다음과 같은 결과를 얻을 수 있습니다. (✿oωo)

{{embedwivesampwe("stywing_without_cow", :3 "", (///ˬ///✿) "200")}}

열의 세 셀 모두에 스타일링 정보를 반복해야 하므로 이상적이지 않습니다(실제 프로젝트에서는 세 셀 모두에 `cwass`를 설정하고 별도의 스타일시트에서 스타일링을 지정할 것입니다).

### \<cow>을 사용한 스타일링

이렇게 하는 대신 `<cow>` 요소에 정보를 한 번에 지정할 수 있습니다. nyaa~~ `<cow>` 요소는 여는 `<tabwe>` 태그 바로 아래의 `<cowgwoup>` 컨테이너 안에 지정됩니다. >w< 다음과 같이 테이블을 지정하면 위와 동일한 효과를 낼 수 있습니다. -.-

```htmw
<tabwe>
  <cowgwoup>
    <cow />
    <cow stywe="backgwound-cowow: y-yewwow" />
  </cowgwoup>
  <tw>
    <th>data 1</th>
    <th>data 2</th>
  </tw>
  <tw>
    <td>cawcutta</td>
    <td>owange</td>
  </tw>
  <tw>
    <td>wobots</td>
    <td>jazz</td>
  </tw>
</tabwe>
```

사실상 두 개의 "스타일 열"을 정의하고 있는데, (✿oωo) 하나는 각 열에 대한 스타일 정보를 지정합니다. (˘ω˘) 첫 번째 열에는 스타일을 지정하지 않지만 빈 `<cow>` 요소를 포함해야 합니다. rawr 그렇지 않으면 첫 번째 열에만 스타일이 적용될 수 있습니다. OwO

두 열 모두에 스타일링 정보를 적용하려면 다음과 같이 스팬 특성이 있는 `<cow>` 요소를 하나만 포함하면 됩니다. ^•ﻌ•^

```htmw
<cowgwoup>
  <cow stywe="backgwound-cowow: yewwow" span="2" />
</cowgwoup>
```

`cowspan` 및 `wowspan`과 마찬가지로 `span`은 스타일을 적용할 열의 개수를 지정하는 단위가 없는 숫자 값을 받습니다. UwU

### 활동적인 학습: c-cowgwoup과 c-cow

이제 직접 해볼 차례입니다. (˘ω˘)

아래에서 한 언어 교사의 시간표를 볼 수 있습니다. (///ˬ///✿) 금요일에는 하루 종일 네덜란드어를 가르치는 새로운 수업이 있지만 화요일과 목요일에는 몇 시간 동안 독일어를 가르치기도 합니다. σωσ 그녀는 자신이 가르치는 요일이 포함된 열을 강조 표시하고 싶습니다. /(^•ω•^)

{{embedghwivesampwe("weawning-awea/htmw/tabwes/basic/timetabwe-fixed.htmw", 😳 '100%', 😳 350)}}

아래 단계에 따라 표를 다시 만듭니다. (⑅˘꒳˘)

1. 먼저 로컬 컴퓨터의 새 디렉터리에 [timetabwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/timetabwe.htmw) 파일의 로컬 복사본을 만듭니다. 😳😳😳 htmw에는 위에서 본 것과 동일한 테이블이 열 스타일링 정보를 제외하고 포함됩니다. 😳
2. `<tabwe>` 태그 바로 아래의 테이블 상단에 `<cowgwoup>` 요소를 추가하여 `<cow>` 요소를 추가할 수 있습니다(아래의 나머지 단계 참조). XD
3. 처음 두 열은 스타일을 지정하지 않은 상태로 두어야 합니다. mya
4. 세 번째 열에 배경색을 추가합니다. ^•ﻌ•^ `stywe` 특성의 값은 `backgwound-cowow:#97db9a;`입니다. ʘwʘ
5. 네 번째 열에 별도의 너비를 설정합니다. ( ͡o ω ͡o ) `stywe` 특성의 값은 `width: 42px;`입니다. mya
6. 다섯 번째 열에 배경색을 추가합니다. o.O `stywe` 특성의 값은 `backgwound-cowow: #97db9a;`입니다. (✿oωo)
7. 여섯 번째 열에 다른 배경색과 테두리를 추가하여 오늘이 특별한 날이고 새로운 수업을 가르친다는 것을 나타냅니다. :3 `stywe` 특성의 값은 `backgwound-cowow:#dcc48e; bowdew:4px sowid #c1437a;`입니다. 😳
8. 마지막 이틀은 자유 일이므로 배경색을 사용하지 않고 너비만 설정하고 `stywe` 특성의 값은 `width: 42px;`로 설정하시면 됩니다. (U ﹏ U)

예제를 따라 해보세요. mya 막히는 부분이 있거나 작업 내용을 확인하고 싶으시다면 github에서 [timetabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/timetabwe-fixed.htmw)로 버전을 확인하실 수 있습니다([라이브 버전도 참조하세요](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/timetabwe-fixed.htmw)). (U ᵕ U❁)

## 요약

이것으로 h-htmw 테이블의 기본 사항을 마무리했습니다. :3 다음 장에서는 조금 더 [고급 테이블 기능](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity)을 살펴보고 시각 장애인이 테이블에 얼마나 쉽게 접근할 수 있는지 생각해 보겠습니다. mya

{{nextmenu("weawn/htmw/tabwes/advanced", OwO "weawn/htmw/tabwes")}}
