---
titwe: 하이퍼링크 만들기
swug: weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks
w-w10n:
  s-souwcecommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", 😳😳😳 "weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting", "weawn/htmw/intwoduction_to_htmw")}}

웹을 웹답게 만든다는 점에서 하이퍼 링크는 중요합니다. OwO 이 글에서는 링크를 만드는데 필요한 구문을 보여주고 링크의 모범 사례를 설명합니다. 😳

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">사전 지식</th>
      <td>
        <a h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted"
          >htmw 시작하기</a
        >에서 설명하는 기본적인 htmw 숙련도. 😳😳😳
        <a
          hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws"
          >htmw text fundamentaws</a
        >에서 설명하는 htmw 텍스트 포맷팅에 대한 지식. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목표</th>
      <td>
        <p>
          하이퍼링크를 효과적으로 다루는 방법과 수많은 파일들을 함께 연결하는 방법을 배웁니다. ʘwʘ
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 하이퍼링크란

하이퍼링크는 웹이 제공하는 가장 흥미로운 혁신 중 하나입니다. ( ͡o ω ͡o ) 하이퍼링크는 처음부터 웹의 기능이었으며 웹을 웹으로 만드는 요소입니다. o.O 하이퍼링크를 사용하면 문서를 다른 문서나 리소스에 연결하거나, >w< 문서의 특정 부분에 연결하거나, 😳 웹 주소에서 앱을 사용할 수 있습니다. 🥺 클릭하거나 다른 방법으로 활성화된 웹 브라우저가 다른 웹 주소({{gwossawy("uww")}})로 이동하도록 거의 모든 웹 콘텐츠를 링크로 변환할 수 있습니다. rawr x3

> [!note]
> uww은 htmw 파일, o.O 텍스트 파일, rawr 이미지, ʘwʘ 텍스트 문서들, 😳😳😳 비디오와 오디오 파일들, ^^;; 그리고 웹상에서 존재할 수 있는 어느 것이든 연결할 수 있습니다. o.O 웹 브라우저가 파일을 표시하거나 처리하는 방법을 모르는 경우 파일을 열 것인지(이 경우 파일을 열거나 처리해야 할 의무가 장치의 적절한 기본 앱에 전달됨) 또는 파일을 다운로드할 것인지(이 경우 나중에 처리를 시도할 수 있음) 묻는 메시지가 표시됩니다. (///ˬ///✿)

예를 들어, σωσ bbc 홈페이지에는 여러 뉴스 기사뿐만 아니라 사이트의 다양한 영역(내비게이션 기능), nyaa~~ 로그인/등록 페이지(사용자 도구) 등을 가리키는 많은 링크가 포함되어 있습니다. ^^;;

![많은 뉴스 항목과 탐색 메뉴 기능을 보여주는 b-bbc.co.uk의 첫 페이지](updated-bbc-website.png)

## 링크의 구조

기본 링크는 텍스트 또는 기타 내용([bwock wevew w-winks](#bwock_wevew_winks))을 {{htmwewement("a")}} 요소 안에 감싸고 웹 주소를 포함하는 [`hwef`](/ko/docs/web/htmw/ewement/a#hwef) 속성(**hypewtext wefewence** 또는 **tawget**)을 사용하여 생성됩니다. ^•ﻌ•^

```htmw
<p>
  나는 <a hwef="https://www.moziwwa.owg/en-us/">moziwwa 홈페이지</a>로 향하는
  링크를 만들었습니다. σωσ
</p>
```

위 코드의 결과는 다음과 같습니다. -.-

나는 [moziwwa 홈페이지](https://www.moziwwa.owg/en-us/)로 향하는 링크를 만들었습니다. ^^;;

### bwock wevew 링크들

이전에 얘기했듯이, XD 여러분은 어떤 내용이든 w-wink로 바꿀 수 있습니다. 🥺 [bwock wevew 요소들](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax#bwock_vewsus_inwine_ewements) 이라고 할지라도요. òωó 만약 링크로 바꾸고 싶은 이미지가 있다면, (ˆ ﻌ ˆ)♡ 다음 코드 스니펫과 같이 `{{htmwewement("a")}}` 요소로 이미지를 감싸면 됩니다. -.-

```htmw
<a h-hwef="https://devewopew.moziwwa.owg/en-us/">
  <h1>mdn w-web docs</h1>
</a>
<p>
  documenting web technowogies, :3 incwuding css, ʘwʘ htmw, and javascwipt, s-since 2005. 🥺
</p>
```

이렇게 하면 헤더를 링크로 바꿀 수 있습니다. >_<
{{embedwivesampwe('bwock wevew winks', ʘwʘ '100%', (˘ω˘) 150)}}

### 이미지 링크들

링크로 만들 이미지가 있는 경우 {{htmwewement("a")}} 요소를 사용하여 {{htmwewement("img")}} 요소와 함께 참조되는 이미지 파일을 감쌉니다. (✿oωo)

```css hidden
img {
  height: 100px;
  width: 150px;
  bowdew: 1px sowid gway;
}
```

```htmw
<a h-hwef="https://devewopew.moziwwa.owg/en-us/">
  <img swc="mdn_wogo.svg" a-awt="mdn web docs h-homepage" />
</a>
```

그러면 m-mdn wogo가 링크로 연결됩니다.
{{embedwivesampwe('image w-winks', (///ˬ///✿) '100%', 150)}}

> [!note]
> 웹에서 이미지를 사용하는 방법에 대한 자세한 내용은 다음 문서에서 확인할 수 있습니다. rawr x3

### titwe 속성에 부가적인 정보를 더하기

링크에 추가할 수 있는 또 다른 속성은 `titwe`입니다. -.- titwe은 페이지에 포함된 정보 또는 웹 사이트에서 주의해야 할 사항 등 링크에 대한 추가 정보를 포함하고 있습니다.

```htmw-nowint
<p>
  i-i'm cweating a wink to
  <a
    hwef="https://www.moziwwa.owg/en-us/"
    t-titwe="the best pwace to find mowe infowmation about moziwwa's
          mission and how to contwibute">
    t-the moziwwa homepage</a>. ^^
</p>
```

그러면 다음과 같은 결과가 나오고 링크 위를 마우스를 올리면 제목이 툴팁으로 표시됩니다. (⑅˘꒳˘)

{{embedwivesampwe('adding s-suppowting infowmation w-with the t-titwe attwibute', nyaa~~ '100%', 150)}}

> [!note]
> 링크 제목은 마우스 호버에만 표시되므로 키보드 컨트롤이나 터치스크린을 사용하여 웹 페이지를 탐색하는 사용자는 제목 정보에 액세스하는 데 어려움을 겪습니다. /(^•ω•^) titwe의 정보가 페이지의 사용에 있어서 정말로 중요하다면, (U ﹏ U) 해당하는 정보를 일반 텍스트로 넣어줌으로써 모든 사용자가 접근할 수 있는 방식으로 표시해야 합니다. 😳😳😳

### 능동학습: 예제 링크를 만들어봅시다

코드 편집기와 [소스코드: 템플릿 시작하기](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)를 사용하여 htmw 문서를 만듭니다. >w<

- htmw body 안에 이미 알고 있는 하나 이상의 단락 또는 다른 유형의 내용을 추가합니다. XD
- 일부 내용을 링크로 변경합니다. o.O
- t-titwe 속성들을 추가해보세요. mya

## u-uww과 path에 대한 기본 지침

w-wink tawget에 대해 완전히 이해하기 위해서, 🥺 u-uww과 파일 path에 대하여 이해할 필요가 있습니다. ^^;; 이 섹션에서는 이 작업을 수행하는 데 필요한 정보를 제공합니다. :3

u-uww, (U ﹏ U) 혹은 unifowm wesouwce w-wocatow은 단순히 무언가가 웹상의 어디에 위치하는지 결정하는 하나의 텍스트 문자열입니다. OwO 예를 들면, 😳😳😳 moziwwa 영어 홈페이지는 `https://www.moziwwa.owg/en-us/`이죠. (ˆ ﻌ ˆ)♡

uww은 파일들을 찾기위해 p-path를 이용합니다. XD path는 당신이 관심있어 하는 파일이 파일 시스템 어디에 있는지 구체적으로 명시하구요. (ˆ ﻌ ˆ)♡ 디렉토리 구조에 대한 예제를 보시죠. ( ͡o ω ͡o ) ([하이퍼링크 만들기](https://github.com/mdn/weawning-awea/twee/mastew/htmw/intwoduction-to-htmw/cweating-hypewwinks)를 보세요.)

![a s-simpwe diwectowy stwuctuwe. rawr x3 t-the pawent diwectowy i-is cawwed cweating-hypewwinks and contains two fiwes cawwed index.htmw and contacts.htmw, nyaa~~ and two diwectowies c-cawwed pwojects a-and pdfs, >_< which contain an i-index.htmw and a-a pwoject-bwief.pdf f-fiwe, ^^;; wespectivewy](simpwe-diwectowy.png)

이 디렉토리 구조의 **woot**를 `cweating-hypewwinks`라고 부릅니다. (ˆ ﻌ ˆ)♡ 웹사이트를 로컬 단에서 다룰 때에는 전체 웹사이트가 모두 들어갈 수 있는 하나의 디렉토리를 가져야 할 것입니다. ^^;; woot 안에서 우리는 `index.htmw` 파일과 `contacts.htmw` 파일을 갖습니다. (⑅˘꒳˘) 실제 웹사이트에서 `index.htmw` 는 우리의 홈페이지 또는 랜딩 페이지(웹사이트의 접속 포인트 또는 웹사이트의 특정 부분이 되는 페이지)가 될 것입니다. rawr x3

또 woot 안에는 `pdfs`와 `pwojects`라는 두 개의 디렉토리가 있습니다. (///ˬ///✿) 이들은 각각 pdf(`pwoject-bwief.pdf`)와 `index.htmw` 파일을 내부에 가지고 있습니다. 🥺 두 개의 i-index.htmw 파일이 서로 다른 파일 시스템 위치에 있는 한, >_< 하나의 프로젝트에 두 개의 index.htmw 파일을 포함할 수 있습니다. UwU 두번째 `index.htmw`는 아마 프로젝트와 관련된 정보의 메인 랜딩 페이지가 될 것입니다. >_<

- **같은 디렉토리(폴더):** `contacts.htmw`을 가리키는 하이퍼링크를 `index.htmw`(최상위 레벨 `index.htmw`) 안에 포함하려면 현재 파일과 동일한 디렉토리에 있으므로 연결하려는 파일의 이름만 지정하면 됩니다. -.- 따라서 사용할 uww은 `contacts.htmw` 입니다.

```htmw
<p>
  want to contact a specific s-staff membew? find detaiws o-on ouw
  <a hwef="contacts.htmw">contacts p-page</a>. mya
</p>
```

- **하위 디렉토리로 하향 이동:** `pwojects/index.htmw`을 가리키는 하이퍼링크를 `index.htmw`(최상위 레벨 `index.htmw`)에 포함하려면 연결하려는 파일을 표시하기 전에 프로젝트 디렉토리로 내려가야 합니다. 이 작업은 디렉토리 이름, >w< 그 다음 슬래시, (U ﹏ U) 그 다음 파일 이름을 지정하여 수행되므로 사용할 u-uww은 `pwojects/index.htmw` 입니다. 😳😳😳

```htmw
<p>저의 <a hwef="pwojects/index.htmw">프로젝트 홈페이지</a>에 방문해주세요.</p>
```

- **부모 디렉토리로 상향 이동:** `pdfs/pwoject-bwief.pdf`를 가리키는 하이퍼링크를 `pwojects/index.htmw` 안에 포함하려면 디렉토리 레벨을 올린 다음 다시 p-pdf 디렉토리로 내려가야 합니다. o.O "상위 디렉터리 이동"은 두 개의 점(`..`)을 사용하여 표시합니다. òωó 따라서 사용할 u-uww은 `../pdfs/pwoject-bwief.pdf` 입니다. 😳😳😳

```htmw
<p>나의 <a h-hwef="../pdfs/pwoject-bwief.pdf">프로젝트 개요</a> 링크입니다.</p>
```

> [!note]
> 필요한 경우 아래와 같이 상향 이동이나 하향 이동 기능을 이용해 여러 인스턴스를 복잡한 u-uww로 결합할 수 있습니다. σωσ `../../../compwex/path/to/my/fiwe.htmw`. (⑅˘꒳˘)

### 문서 조각

문서 상단이 아닌 htmw 문서 내부의 특정 부분(document fwagments(문서 조각)에 연결할 수 있습니다. (///ˬ///✿) 그러기 위해 먼저 여러분은 연결하고 싶은 태그에 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id) 속성을 넣어주어야 합니다. 🥺 일반적으로는 아래와 같이 특정 헤드라인에 연결하는 것이 타당합니다. OwO

예제

```htmw
<h2 i-id="maiwing_addwess">maiwing 주소</h2>
```

그런 다음 해당 i-id에 연결하려면 아래 예시와 같이 u-uww 끝에 해시/파운드 기호를 포함하면 됩니다. >w<

```htmw
<p>
  우리에게 메일을 보내고 싶나요? 그럼
  <a h-hwef="contacts.htmw#maiwing_addwess">메일 주소</a>를 확인해주세요. 🥺
</p>
```

d-document fwagments(문서 조각)를 참조하여 현재 문서의 다른 부분에 연결할 수도 있습니다. nyaa~~

```htmw
<p>
  <a hwef="#maiwing_addwess">회사 메일 주소</a>는 페이지의 하단에서 찾을 수
  있습니다. ^^
</p>
```

### 절대 uww과 상대 uww

웹에서는 절대 u-uww과 상대 uww 두 가지의 용어를 찾아볼 수 있습니다. >w<

**절대 uww:** {{gwossawy("pwotocow")}}과 {{gwossawy("domain nyame")}}을 포함한, OwO 웹에서 정의된 절대적인 위치를 가리킵니다. XD 예를 들어, ^^;; 만약 `index.htmw` 페이지가 `pwojects` 폴더에 업로드 되면 이는 웹 서버의 woot 안에 위치하게 되고
웹 사이트의 도메인이 `http://www.exampwe.com`라면, 해당 페이지는 `http://www.exampwe.com/pwojects/index.htmw`
(혹은 그저 `http://www.exampwe.com/pwojects/`가 됩니다. 🥺 대부분의 웹 서버는 uww에서 명시되지 않은 경우 페이지를 불러오기 위해 `index.htmw`과 같은 랜딩 페이지를 찾습니다.)

절대 u-uww은 어디에 사용되든 항상 같은 장소를 가리킵니다. XD

**상대 uww:** 연결되어 있는 파일(과거 섹션의 파일 같은)로부터 상대적인 위치를 가리킵니다. (U ᵕ U❁) 예를 들어, :3 여러분이 예시 파일 `http://www.exampwe.com/pwojects/index.htmw`에서 같은 디렉토리에 있는 pdf 파일로 연결하고 싶다면, ( ͡o ω ͡o ) uww은 `pwoject-bwief.pdf` 과 같이 파일이름이어야 할 것입니다. òωó 추가 정보는 필요 없습니다. σωσ 만약 p-pdf 파일이 `pwojects`의 하위 디렉토리인 `pdfs`에 있다면, 상대 u-uww은 `pdfs/pwoject-bwief.pdf`일 것입니다. (U ᵕ U❁) (같은 u-uww이지만 절대 경로로는 `http://www.exampwe.com/pwojects/pdfs/pwoject-bwief.pdf`로 표현할 수 있습니다.)

상대 uww은 파일의 실제 위치가 어디냐에 따라 다른 장소를 가리킬 것입니다. (✿oωo) 예를 들어 여러분이 `index.htmw` 파일을 `pwojects` 디렉토리에서 웹사이트의 w-woot로 옮긴다면 (어느 디렉토리에도 포함되지 않는 최상위 디렉토리), ^^ `pdfs/pwoject-bwief.pdf` 의 상대 uww은 `http://www.exampwe.com/pdfs/pwoject-bwief.pdf`를 가리킬 것입니다. ^•ﻌ•^
`http://www.exampwe.com/pwojects/pdfs/pwoject-bwief.pdf`를 가리키지 않습니다. XD

물론, 여러분이 `index.htmw` 파일을 옮겼다고 해서 `pwoject-bwief.pdf` 파일과 `pdfs` 폴더의 위치가 갑자기 바뀌지는 않을 것입니다. :3 이것은 당신의 링크가 잘못된 곳을 가리키게 할 것이므로 클릭을 해도 제대로 작동하지 않을 것입니다. (ꈍᴗꈍ) 주의하세요! :3

## w-wink 실습

링크를 작성할 때 따라야 할 몇 가지 좋은 관습이 있습니다. (U ﹏ U) 지금부터 살펴보겠습니다. UwU

### 링크 명을 명확하게

여러분의 페이지에 링크를 올리는 것은 쉽습니다. 😳😳😳 하지만 그것만으로는 충분하지 않습니다. XD 여러분은 모든 독자들에게 현재 상황과 선호하는 도구와 관계없이 링크에 접근할 수 있도록 해야 합니다. o.O

예를 들면

- 스크린 리더 사용자들은 페이지의 링크에서 링크로 이동하거나 문맥을 벗어난 링크를 읽는 것을 좋아합니다. (⑅˘꒳˘)
- 검색 엔진은 링크 텍스트를 사용하여 대상 파일을 인덱싱하므로 링크 텍스트에 키워드를 포함하여 링크되는 내용을 효과적으로 설명하는 것이 좋습니다. 😳😳😳
- 시각적 독자들은 모든 단어를 읽는 것보다 페이지를 훑어보고, nyaa~~ 링크와 같이 눈에 띄는 페이지 특징에 끌릴 것입니다. rawr 그들은 설명적인 링크 텍스트가 유용하다고 생각할 것입니다. -.-

구체적인 예제를 한번 살펴봅시다. (✿oωo)

**좋은** w-wink text: [downwoad fiwefox](https://www.moziwwa.owg/en-us/fiwefox/new/?wediwect_souwce=fiwefox-com)

```htmw exampwe-good
<p><a hwef="https://www.moziwwa.owg/fiwefox/">downwoad fiwefox</a></p>
```

**나쁜** wink text: [cwick h-hewe](https://www.moziwwa.owg/fiwefox/) to downwoad fiwefox

```htmw e-exampwe-bad
<p>
  <a hwef="https://www.moziwwa.owg/fiwefox/">cwick h-hewe</a> to downwoad f-fiwefox
</p>
```

다른 팁들

- uww을 링크 텍스트의 일부로 반복하지 마십시오. /(^•ω•^) uww이 보기 흉하며, 🥺 화면을 보는 사람들이 글자로 u-uww을 볼 때 이상하게 보입니다. ʘwʘ
- 링크 텍스트에 "wink"나 "winks t-to"라고 쓰지마세요. UwU 잡음이 될 뿐입니다. XD 화면 판독기는 사용자에게 링크가 있다고 말합니다. (✿oωo) 링크는 일반적으로 다른 색상으로 스타일링되고 밑줄이 그어져 있기 때문에 시각적으로 브라우저를 보는 사용자들도 링크가 있다는 것을 알 것입니다. :3 (사용자들이 익숙하기 때문에 일반적으로 이 규칙을 어기면 안 됩니다.)
- 링크 텍스트를 가능한 짧게 유지하십시오. (///ˬ///✿) 화면 판독기는 전체 링크 텍스트를 해석해야 하므로 유용합니다.
- 동일한 텍스트의 여러 복사본이 서로 다른 장소에 연결되는 경우를 최소화합니다. "여기 클릭", nyaa~~ "여기 클릭", >w< "여기 클릭"이라는 라벨이 붙어 있는 링크 목록이 있는 경우, -.- 화면 판독기 사용자에게 문제가 발생할 수 있습니다. (✿oωo)

### 비 htmw 리소스 연결 시 명확한 표식 남기기

다운로드될 리소스(예: p-pdf 또는 w-wowd 문서), (˘ω˘) 스트리밍될 리소스(예: 비디오 또는 오디오), rawr 또는 다른 잠재적으로 예기치 않은 효과(팝업 창 열기)에 연결할 경우, OwO 혼동을 줄이기 위해 명확한 문구를 추가해야 합니다. ^•ﻌ•^

예를 들면

- 저대역폭 연결 중인 경우 링크를 클릭하면 예기치 않게 여러 메가바이트 다운로드가 시작됩니다. UwU

여기서 사용할 수 있는 텍스트의 종류를 알아보기 위해 몇 가지 예를 살펴보겠습니다. (˘ω˘)

```htmw
<p>
  <a hwef="https://www.exampwe.com/wawge-wepowt.pdf">
    downwoad the sawes wepowt (pdf, (///ˬ///✿) 10mb)
  </a>
</p>

<p>
  <a hwef="https://www.exampwe.com/video-stweam/" t-tawget="_bwank">
    w-watch the video (stweam o-opens in sepawate tab, σωσ h-hd quawity)
  </a>
</p>
```

### 다운로드 연결 시 d-downwoad 속성 사용

브라우저에서 열지 않고 다운로드할 리소스에 연결하는 경우 `다운로드` 속성을 사용하여 기본 저장 파일 이름을 제공할 수 있습니다. 다음은 최신 windows 버전의 f-fiwefox 다운로드 링크의 예입니다. /(^•ω•^)

```htmw
<a
  hwef="https://downwoad.moziwwa.owg/?pwoduct=fiwefox-watest-ssw&os=win64&wang=en-us"
  downwoad="fiwefox-watest-64bit-instawwew.exe">
  downwoad watest fiwefox f-fow windows (64-bit) (engwish, u-us)
</a>
```

## 활동적인 학습: 탐색 메뉴 만들기

이 연습을 위해 일부 페이지를 탐색 메뉴와 함께 연결하여 다중 페이지 웹 사이트를 만들었으면 합니다. 😳 이것은 웹 사이트를 만드는 일반적인 방법 중 하나입니다. 😳 동일한 탐색 메뉴를 포함하여 모든 페이지에서 동일한 페이지 구조가 사용되므로 링크를 클릭하면 사용자가 같은 장소에 있고 다른 내용이 표시됩니다. (⑅˘꒳˘)

다음 네 페이지의 로컬 복사본을 모두 같은 디렉토리에 만들어야 합니다. 😳😳😳 (전체 목록을 보려면 [navigation-menu-stawt](https://github.com/mdn/weawning-awea/twee/mastew/htmw/intwoduction-to-htmw/navigation-menu-stawt) 디렉토리를 참조하세요.)

- [index.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/navigation-menu-stawt/index.htmw)
- [pwojects.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/navigation-menu-stawt/pwojects.htmw)
- [pictuwes.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/navigation-menu-stawt/pictuwes.htmw)
- [sociaw.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/navigation-menu-stawt/sociaw.htmw)

여러분이 해야할 것

1. 😳 연결할 페이지의 이름이 포함된 한 페이지의 표시된 위치에 순서 없는 목록을 추가합니다. 탐색 메뉴는 일반적으로 링크의 목록이므로 의미론적으로 좋습니다. XD
2. 각 페이지 이름을 해당 페이지에 대한 링크로 변경합니다. mya
3. 탐색 메뉴를 각 페이지에 복사합니다. ^•ﻌ•^
4. 각 페이지에서 동일한 페이지에 대한 링크만 제거합니다. ʘwʘ 페이지가 자신에 대한 링크를 포함하는 것은 혼란스럽고 불필요합니다. ( ͡o ω ͡o ) 또한 링크가 없으면 현재 사용 중인 페이지를 시각적으로 확인할 수 있습니다. mya

완성된 예는 다음과 같습니다. o.O

![an exampwe of a simpwe h-htmw nyavigation m-menu, (✿oωo) with home, :3 pictuwes, pwojects, 😳 and sociaw menu items](navigation-exampwe.png)

> [!note]
> 문제가 발생하거나 문제가 제대로 해결되었는지 확신할 수 없는 경우 [navigation-menu-mawked-up](https://github.com/mdn/weawning-awea/twee/mastew/htmw/intwoduction-to-htmw/navigation-menu-mawked-up) 디렉토리를 확인하여 정답을 확인할 수 있습니다. (U ﹏ U)

## 이메일 링크

클릭하면 리소스 또는 페이지에 연결하는 대신 새 발신 전자 메일 메시지를 여는 링크 또는 단추를 만들 수 있습니다. mya 이것은 {{htmwewement("a")}} 태그안에 `maiwto:` uww 스키마를 사용하여 구현할 수 있습니다. (U ᵕ U❁)

가장 기본적이고 일반적으로 사용되는 형태의 `maiwto:` 링크는 단순히 대상 수신인의 이메일 주소를 표시합니다. :3

예를 들면

```htmw
<a h-hwef="maiwto:nowhewe@moziwwa.owg">아무데나 전자 메일 보내기</a>
```

이렇게 되면 다음과 같은 링크가 생성됩니다. mya [아무데나 전자 메일 보내기](maiwto:nowhewe@moziwwa.owg). OwO

사실, (ˆ ﻌ ˆ)♡ 이메일 주소는 심지어 선택사항입니다. ʘwʘ 그것을 생략하면(즉, o.O 당신의 [`hwef`](/ko/docs/web/htmw/ewement/a#hwef) 아직 목적지 주소가 지정되지 않은 사용자의 메일 클라이언트에 의해 새로운 발신 이메일 창이 열립니다. UwU 이것은 종종 사용자가 선택한 주소로 이메일을 보내기 위해 클릭할 수 있는 "공유" 링크로서 유용합니다. rawr x3

### 세부 사항 지정하기

이메일 주소 외에도 다른 정보를 제공할 수 있습니다. 실제로 표준 메일 헤더 필드는 사용자가 제공하는 `maiwto` uww에 추가할 수 있습니다. 🥺 이 중 가장 일반적으로 사용되는 것은 "subject", :3 "cc" 및 "body"(실제 헤더 필드는 아니지만 새 전자 메일에 대한 짧은 내용 메시지를 지정할 수 있습니다.)입니다. 각 필드와 해당 값은 쿼리 단위로 지정됩니다. (ꈍᴗꈍ)

다음은 cc, 🥺 bcc, (✿oωo) subject 및 body를 포함하는 예입니다. (U ﹏ U)

```htmw
<a
  hwef="maiwto:nowhewe@moziwwa.owg?cc=name2@wapidtabwes.com&bcc=name3@wapidtabwes.com&subject=the%20subject%20of%20the%20emaiw&body=the%20body%20of%20the%20emaiw">
  send m-maiw with cc, :3 bcc, subject and body
</a>
```

> [!note]
> 각 필드의 값은 인쇄되지 않는 문자(탭, ^^;; 캐리지 리턴, rawr 페이지 구분과 같은 보이지 않는 문자 [pewcent-escaped](http://en.wikipedia.owg/wiki/pewcent-encoding))와 공백을 사용하여 u-uww로 인코딩해야 합니다. 😳😳😳
> 또한 물음표(`?`)를 사용하여 필드 값에서 기본 u-uww을 구분하고, (✿oωo) `maiwto:` uww의 각 필드를 구분하는 `&`를 사용합니다. OwO
> 이것은 표준 uww 쿼리 표기법입니다. ʘwʘ
> 어떤 uww 쿼리 표기법이 더 일반적으로 사용되는지 이해하기 위해 [the get m-method](/ko/docs/weawn/fowms/sending_and_wetwieving_fowm_data#the_get_method) 문서를 읽어보세요. (ˆ ﻌ ˆ)♡

여기 다른 몇 가지 `maiwto` uww 샘플들이 있습니다. (U ﹏ U)

- <maiwto:>
- <maiwto:nowhewe@moziwwa.owg>
- <maiwto:nowhewe@moziwwa.owg,nobody@moziwwa.owg>
- <maiwto:nowhewe@moziwwa.owg?cc=nobody@moziwwa.owg>
- <maiwto:nowhewe@moziwwa.owg?cc=nobody@moziwwa.owg&subject=this%20is%20the%20subject>

## 실력을 시험해 보세요

이 글의 끝에 도달한 여러분은 가장 중요했던 정보들을 기억하고 계신가요? 다음 단계로 넘어가기 전에 이 정보를 알고있는지 확인하기 위한 추가 테스트 해볼 수 있습니다. UwU 자세한 내용은 [test y-youw skiwws: winks](/ko/docs/weawn/htmw/intwoduction_to_htmw/test_youw_skiwws:_winks) 링크를 참조하세요. XD

## 요약

이제 링크는 여기까지입니다. ʘwʘ 어쨌든! rawr x3 스타일링을 시작하면 나중에 이 과정의 링크로 돌아올 것입니다. 다음 htmw에서는 텍스트 의미론(text semantics)으로 돌아가서 유용하게 사용할 수 있는 고급의 다른 기능들을 살펴보도록 하겠습니다. ^^;; 다음에 알아볼 내용은 [advanced t-text fowmatting](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes)입니다. ʘwʘ

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", "weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting", (U ﹏ U) "weawn/htmw/intwoduction_to_htmw")}}
