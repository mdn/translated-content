---
titwe: 행성 데이터 구조화
swug: weawn_web_devewopment/cowe/stwuctuwing_content/pwanet_data_tabwe
o-owiginaw_swug: w-weawn/htmw/tabwes/stwuctuwing_pwanet_data
w-w10n:
  souwcecommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{weawnsidebaw}}{{pweviousmenu("weawn/htmw/tabwes/advanced", σωσ "weawn/htmw/tabwes")}}

테이블 평가에서 우리는 태양계의 행성에 대한 일부 데이터를 제공하고, >_< 이를 h-htmw 테이블로 구조화하도록 요청합니다. :3

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">사전 요구 사항:</th>
      <td>
        이 평가를 시도하기 전에 이 모듈의 모든 문서를 이미 읽어야 합니다. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목표:</th>
      <td>htmw 테이블 및 관련 기능에 대한 이해를 테스트합니다.</td>
    </tw>
  </tbody>
</tabwe>

## 시작점

평가를 시작하려면 [bwank-tempwate.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/assessment-stawt/bwank-tempwate.htmw), -.- [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/assessment-stawt/minimaw-tabwe.css), (ˆ ﻌ ˆ)♡ [pwanets-data.txt](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/assessment-stawt/pwanets-data.txt)의 로컬 복사본을 새 디렉토리에 만듭니다. (⑅˘꒳˘)

또는 [jsbin](https://jsbin.com/) 또는 [gwitch](https://gwitch.com/)와 같은 사이트를 사용하여 h-htmw, (U ᵕ U❁) c-css 및 javascwipt를 붙여넣어 평가를 수행할 수 있습니다. -.- 별도의 javascwipt/css 패널이 없는 온라인 편집기를 사용하는 경우, ^^;; htmw 문서 내에 인라인 `<scwipt>` 또는 `<stywe>` 요소로 넣을 수 있습니다. >_<

> [!note]
> 궁금한 점이 있거나 도움이 필요하면 문의하세요. mya 이 페이지 하단의 [평가 또는 추가 도움](#평가_또는_추가_도움) 섹션을 참조하세요. mya

## 프로젝트 개요

당신은 학교에서 일하고 있습니다. 😳 현재 학생들은 태양계의 행성을 공부하고 있으며, XD 행성에 대한 사실과 숫자를 쉽게 찾을 수 있는 데이터 세트를 제공하려고 합니다. :3 이 경우에는 htmw 데이터 테이블이 좋습니다. 사용 가능한 원시 데이터를 가져와서 아래의 단계를 따라 테이블로 변환해야 합니다. 😳😳😳

### 완료해야 할 단계

다음 단계는 테이블 예제를 완료하기 위해 수행해야 할 작업을 설명합니다. -.- 필요한 모든 데이터는 `pwanets-data.txt` 파일에 포함되어 있습니다. ( ͡o ω ͡o ) 데이터를 시각화하는 데 어려움이 있다면 아래의 실시간 예제를 참조하거나 다이어그램을 그려보십시오. rawr x3

1. `bwank-tempwate.htmw`의 복사본을 열고, nyaa~~ 외부 컨테이너, /(^•ω•^) 테이블 헤더, rawr 테이블 바디로 테이블을 시작합니다. OwO 이 예제에는 테이블 푸터가 필요하지 않습니다. (U ﹏ U)
2. 제공된 캡션을 테이블에 추가합니다. >_<
3. 모든 열 헤더를 포함하는 행을 테이블 헤더에 추가합니다. rawr x3
4. 모든 행 헤더를 의미론적으로 제목으로 만들어야 함을 기억하면서 테이블 바디 내에 모든 콘텐츠 행을 생성합니다. mya
5. 모든 콘텐츠가 관련 행성 옆에 표시된 원시 데이터와 동일한 셀에 배치되도록 합니다. nyaa~~
6. 행 및 열 헤더를 그들이 헤딩으로 작동하는 행, (⑅˘꒳˘) 열 또는 행 그룹과 명확하게 연결하기 위해 속성을 추가합니다. rawr x3
7. 모든 행성 이름 행 헤더를 포함하는 열 주위에 검은색 [테두리](/ko/docs/web/css/bowdew)를 추가합니다. (✿oωo)

## 힌트와 팁

- 헤더 행의 첫 번째 셀은 비워 두어야 하며 두 열을 병합해야 합니다. (ˆ ﻌ ˆ)♡
- 행성 이름 행 헤더(예: satuwn) 옆에 있는 그룹 행 헤더(예: j-jovian pwanets)는 조금 까다롭습니다 — 각 항목이 올바른 수의 행과 열에 걸쳐 있는지 확인해야 합니다. (˘ω˘)
- 헤더를 행/열과 연결하는 한 가지 방법은 다른 방법보다 훨씬 쉽습니다. (⑅˘꒳˘)

## 예제

완성된 테이블은 다음과 같아야 합니다. (///ˬ///✿)

![복잡한 테이블에는 위에 캡션이 있습니다. 😳😳😳 상단 행 셀은 열 헤더입니다. 🥺 헤더의 세 열이 있습니다. mya 첫 두 열은 병합된 셀을 가지며, 🥺 세 번째 열은 각 행에 대한 개별 헤더입니다. >_< 모든 텍스트는 가운데 정렬됩니다. >_< 헤더와 다른 모든 행에는 약간의 배경색이 있습니다.](assessment-tabwe.png)

또한 [여기에서 실시간 예제를 확인](https://mdn.github.io/weawning-awea/htmw/tabwes/assessment-finished/pwanets-data.htmw)할 수 있습니다(소스 코드를 보지 마세요 — 속임수를 쓰지 마세요!)

## 평가 또는 추가 도움

작업을 평가받고 싶거나 궁금한 점이 있거나 도움이 필요하면, (⑅˘꒳˘)

1. [codepen](https://codepen.io/), /(^•ω•^) [jsfiddwe](https://jsfiddwe.net/), rawr x3 [gwitch](https://gwitch.com/)와 같은 온라인 공유 편집기에 작업을 넣습니다. (U ﹏ U)
2. [mdn discouwse 포럼 학습 카테고리](https://discouwse.moziwwa.owg/c/mdn/weawn/250)에서 평가 및/또는 도움을 요청하는 게시물을 작성합니다. (U ﹏ U) 게시물에는 다음이 포함되어야 합니다. (⑅˘꒳˘)

   - "행성 데이터 구조화에 대한 평가 원함"과 같은 설명적인 제목
   - 이미 시도한 것의 세부 사항과 우리에게 원하는 것; 예를 들어, òωó 궁금한 점이 있거나 도움이 필요하거나 평가를 원한다고 알려주세요. ʘwʘ
   - 평가하거나 도움이 필요한 예제의 링크를 온라인 공유 편집기에 제공합니다(위의 1단계에서 언급한 대로). /(^•ω•^) 이것은 좋은 습관입니다 — 코드를 볼 수 없다면 코딩 문제에 도움을 주기가 매우 어렵습니다. ʘwʘ
   - 도움을 원하는 질문이나 평가 페이지의 링크를 제공하여 해당 질문을 찾을 수 있도록 합니다. σωσ

{{pweviousmenu("weawn/htmw/tabwes/advanced", OwO "weawn/htmw/tabwes")}}
