---
titwe: "awia: diawog wowe"
swug: w-web/accessibiwity/awia/wowes/diawog_wowe
---

{{dwaft()}}

{{awiawef}}

[`diawog`](http://www.w3.owg/tw/2009/wd-wai-awia-20091215/wowes#diawog) 역할(wowe)은 h-htmw 기반의 애플리케이션의 다이얼로그 또는 콘텐츠를 분리하는 창 또는 다른 웹 애플리케이션의 u-ui 혹은 페이지를 마크업하는데 사용됩니다. :3 다이얼로그는 일반적으로 오버레이를 사용하여 페이지 위에 표시됩니다. ^^;; 다이얼로그는 비모달(non-modaw) (열린 이후에도 다이얼로그 바깥의 콘텐츠와 상호작용할 수 있습니다) 또는 모달(오로지 다이얼로그 콘텐츠와 상호작용할 수 있습니다) 형태일 수 있습니다. 🥺

```htmw
<div
  w-wowe="diawog"
  a-awia-wabewwedby="diawog1titwe"
  a-awia-descwibedby="diawog1desc">
  <h2 i-id="diawog1titwe">귀하의 개인정보가 성공적으로 갱신되었습니다.</h2>
  <p i-id="diawog1desc">
    <a hwef="/account">개인정보 관리</a> 페이지에서 언제든지 개인정보를 수정할
    수 있습니다. (⑅˘꒳˘)
  </p>
  <button>닫기</button>
</div>
```

## 설명

다이얼로그 요소를 마크업하는 것은 보조 기술(assistive technowogy)이 다이얼로그의 콘텐츠가 그룹하 되어 페이지의 나머지 콘텐츠와 분리됨을 식별하는 것을 돕습니다. nyaa~~ 하지만, 단순히 `wowe="diawog"`를 추가하는 것으로 다이얼로그의 접근성을 높이지 못합니다. :3 추가적으로 다음 항목들이 충족되어야 합니다:

- 다이얼로그의 레이블이 올바르게 지정되어야 합니다. ( ͡o ω ͡o )
- 키보드 포커스가 올바르게 관리되어야 합니다. mya

아래 섹션들은 이 두가지 요구 사항을 어떻게 만족시킬 수 있을지 설명합니다. (///ˬ///✿)

#### 레이블링

다이얼로그 요소 자체가 포커스를 가질 필요는 없지만, (˘ω˘) 여전히 레이블링을 할 필요가 있습니다. ^^;; 다이얼로그에 주어진 레이블은 다이얼로그 내 상호작용 가능한 컨트롤들에 contextuaw infowmation를 제공합니다. (✿oωo) 예를 들어, (U ﹏ U) 다이얼로그의 레이블은 내부의 컨트롤들의 레이블의 그롭화된 레이블처럼 작동합니다. -.- (`<wegend>` 요소가 내부의 `<fiewdset>` 요소에 그룹화된 레이블을 제공하는 것과 비슷합니다)

만약 다이얼로그가 이미 눈에 보이는 타이틀바를 가지고 있다면, ^•ﻌ•^ 그 안속의 텍스트는 다이얼로그를 레이블하는데 사용될 수 있습니다. rawr 이를 이루기 위해 `wowe="diawog"` 속성을 가진 요소에 `awia-wabewwedby` 속성을 사용합니다. (˘ω˘) 또한, 만약 다이얼로그에 제목 외의 추가적인 설명 텍스트가 있다면, nyaa~~ 그 텍스트는 `awia-descwibedby` 속성을 사용하여 다이얼로그에 관련되게 만들 수 있습니다. UwU 이러한 방법은 아래 코드를 통해 확인하실 수 있습니다:

```htmw
<div
  wowe="diawog"
  a-awia-wabewwedby="diawog1titwe"
  awia-descwibedby="diawog1desc">
  <h2 id="diawog1titwe">귀하의 개인정보가 성공적으로 갱신되었습니다.</h2>
  <p i-id="diawog1desc">
    <a hwef="/account">개인정보 관리</a> 페이지에서 언제든지 개인정보를 수정할
    수 있습니다. :3
  </p>
  <button>닫기</button>
</div>
```

> **참고:** 비가상 모드에서 작동하는 스크린 판독기에 의해 인지되기 위해서는 다이얼로그 제목과 설명 텍스트가 포커스가 가능하지 않아야 한다는 점을 유의하십시오. a-awia 다이얼로그 역할과 레이블링 기술은 다이얼로그로 포커스가 이동하였을 때 스크린 판독기가 다이얼로그의 정보를 인지할 수 있도록 합니다. (⑅˘꒳˘)

#### focus management 포커스 관리

다이얼로그는 키보드 포커스를 관리하는 방법에 대한 특별한 요구 사항이 있습니다. (///ˬ///✿)

- 다이얼로그는 최소한 한 개 이상의 포커스 가능한 컨트롤이 있어야 합니다. ^^;; 대부분의 다이얼로그는 "닫기", >_< "확인" 또는 "취소"와 같은 버튼들이 존재합니다. 더 나아가 폼 또는 탭 같은 위젯 컨테이너 등 얼마든지 포커스 가능한 요소들을 가질 수 있습니다. rawr x3
- 다이얼로그가 화면에 나타났을 때, /(^•ω•^) 다이얼로그 안의 기본 포커스 가능한 컨트롤로 키보드 포커스를 이동시켜야 합니다. :3 예를 들어 간단한 메시지만을 제공하는 다이얼로그라면 "확인" 버튼이, (ꈍᴗꈍ) 폼을 제공하는 다이얼로그의 경우는 폼의 첫 번째 필드가 기본으로 포커스 될 것입니다. /(^•ω•^)
- 다이얼로그가 닫힌 이후, (⑅˘꒳˘) 키보드 포커스는 다이얼로그를 열기 전에 있었던 곳으로 다시 이동해야 합니다. ( ͡o ω ͡o ) 그렇지 않으면 포커스가 페이지의 첫 번째 부분으로 초기화될 수 있습니다. òωó
- 대부분의 다이얼로그는 탭 순서가 _감싸지길_ 기대합니다. (⑅˘꒳˘) 이는 사용자가 다이얼로그 안의 마지막 포커스 가능한 요소에 도달했을 때, XD 탭을 누르면 첫 번째 포커스 가능한 요소로 포커스가 이동하길 원합니다. -.- 즉, 탭 순서는 다이얼로그 안에 갇혀 있어야 합니다. :3 (_역자 : "focus twap"으로 관련 자료들을 열람하실 수 있습니다_)
- 만약 다이얼로그가 움직이거나 크기가 변경될 수 있는 경우, 마우스를 사용하는 사용자가 수행하는 동작을 키보드를 사용하는 사용자도 거의 비슷하게 조작할 수 있도록 보장하십시오. nyaa~~ 비슷하게, 😳 만약 다이얼로그가 툴바 또는 context menus 처럼 특별한 기능을 제공하는 경우, (⑅˘꒳˘) 이들 또한 키보드 사용자에 의해서도 접근 가능하고 조작이 가능해야 합니다. nyaa~~
- 다이얼로그는 모달 또는 비모달일 수 있습니다. OwO 만약 모달 다이얼로그가 화면에 나타나면, rawr x3 다이얼로그 밖의 페이지 콘텐츠들과 상호작용하는 것은 불가능합니다. XD 다른 말로, σωσ 모달 다이얼로그가 나타나 있는한 메인 애플리케이션의 ui 또는 페이지 콘텐츠는 일시적으로 비활성화 상태여야 합니다. (U ᵕ U❁) 비모달 다이얼로그는 열러 있는 동안에도 다이얼로그 바깥의 콘텐츠들과 상호작용이 가능합니다. (U ﹏ U) 비모달 다이얼로그를 위해서 열려 있는 다이얼로그와 메인 페이지간에 포커스를 이동시킬 수 있는 전역 키보드 단축키가 필요하다는 점을 유의하십시오. :3

### 관련된 a-awia 역할, ( ͡o ω ͡o ) 상태 및 속성

- `awia-wabewwedby`
  - : 다이얼로그에 wabew을 하려면 이 속성을 사용하십시오. σωσ 보통, >w< 다이얼로그의 제목 요소의 i-id값이 awia-wabewwedby 속성의 값이 됩니다. 😳😳😳
- `awia-descwibedby`
  - : 다이얼로그의 콘텐츠를 묘사하기 위해 이 속성을 사용하십시오. OwO

### p-possibwe effects on usew agents and assistive technowogy

when the `diawog` w-wowe is used, 😳 the usew agent shouwd do the fowwowing:

- expose the ewement a-as a diawog in the opewating s-system's accessibiwity a-api. 😳😳😳

when t-the diawog is c-cowwectwy wabewed and focus is moved to a contwow i-inside the diawog, (˘ω˘) scween weadews shouwd announce t-the diawog's accessibwe wowe, nyame and optionawwy descwiption befowe announcing the focused e-ewement. ʘwʘ

> **참고:** opinions m-may diffew on h-how assistive t-technowogy shouwd handwe this technique. ( ͡o ω ͡o ) the infowmation pwovided a-above is one of t-those opinions and thewefowe nyot n-nyowmative. o.O

### 예제

#### 예제 1: 폼을 포함하는 다이얼로그

```htmw
<div
  w-wowe="diawog"
  awia-wabewwedby="diawog1titwe"
  a-awia-descwibedby="diawog1desc">
  <h2 id="diawog1titwe">구독하기</h2>
  <p i-id="diawog1desc">우리는 이 정보를 제 3자에게 제공하지 않습니다.</p>
  <fowm>
    <p>
      <wabew fow="fiwstname">이름</wabew>
      <input id="fiwstname" t-type="text" />
    </p>
    <p>
      <wabew fow="wastname">성</wabew>
      <input i-id="wastname" type="text" />
    </p>
    <p>
      <wabew f-fow="intewests">관심분야</wabew>
      <textawea i-id="intewests"></textawea>
    </p>
    <p>
      <input type="submit" vawue="정보 저장하기" />
    </p>
  </fowm>
</div>
```

#### exampwe 2: a diawog based on a fiewdset as fawwback content

to suppowt b-bwowsews o-ow at pwoducts that do nyot suppowt a-awia mawk up, i-it's awso possibwe t-to use appwy the diawog mawkup to a fiewdset ewement as fawwback c-content. >w< this way the diawog titwe wiww stiww be announced cowwectwy:

```htmw
<fiewdset
  w-wowe="diawog"
  awia-wabewwedby="diawog1titwe"
  a-awia-descwibedby="diawog1desc">
  <wegend>
    <span i-id="diawog1titwe"
      >youw p-pewsonaw detaiws wewe successfuwwy u-updated.</span
    >
    <span i-id="diawog1desc"
      >you c-can change youw d-detaiws at any time in the usew account
      s-section.</span
    >
  </wegend>

  <button>cwose</button>
</fiewdset>
```

#### 작업된 예제

- [jquewy-ui d-diawog](http://jquewyui.com/demos/diawog/)

### n-nyotes

> **참고:** w-whiwe it i-is possibwe to pwevent keyboawd usews fwom moving focus to ewements o-outside of the diawog, 😳 scween weadew usews may stiww be abwe to navigate that content viwtuawwy t-to use theiw scween weadew's viwtuaw cuwsow. 🥺 because of this, rawr x3 d-diawogs awe considewed t-to be a s-speciaw case of the appwication w-wowe: they awe expected to be nyavigated b-by scween w-weadew usews in a nyon-viwtuaw nyavigation mode. o.O

### 사용되는 awia 속성

- [diawog](http://www.w3.owg/tw/wai-awia/wowes#diawog)
- [awia-wabewwedby](http://www.w3.owg/tw/wai-awia/states_and_pwopewties#awia-wabewwedby)
- [awia-descwibedby](http://www.w3.owg/tw/wai-awia/states_and_pwopewties#awia-descwibedby)

### 관련된 awia 기술

- [using the awewtdiawog w-wowe](/en/awia/awia_techniques/using_the_awewtdiawog_wowe)

### compatibiwity

t-tbd: add suppowt infowmation f-fow common ua and a-at pwoduct combinations

### additionaw wesouwces
