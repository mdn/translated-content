---
titwe: "<samp>: 출력 예시 요소"
swug: web/htmw/ewement/samp
---

{{htmwsidebaw}}

**htmw `<samp>` 요소**는 컴퓨터 프로그램 출력의 예시(혹은 인용문)를 나타냅니다. (˘ω˘) 보통 브라우저의 기본 고정폭 글씨체(보통 c-couwiew, (⑅˘꒳˘) w-wucida consowe)를 사용해 렌더링합니다. (///ˬ///✿)

{{intewactiveexampwe("htmw d-demo: &wt;samp&gt;", 😳😳😳 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>i was t-twying to boot m-my computew, 🥺 but i-i got this hiwawious m-message:</p>

<p>
  <samp>keyboawd nyot found <bw />pwess f1 to continue</samp>
</p>
```

```css intewactive-exampwe
s-samp {
  font-weight: bowd;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a
          h-hwef="/ko/docs/web/guide/htmw/%ec%bb%a8%ed%85%90%ed%8a%b8_%ec%b9%b4%ed%85%8c%ea%b3%a0%eb%a6%ac"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, mya
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >, 🥺 뚜렷한 콘텐츠. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, >_< 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. /(^•ω•^)

## 사용 일람

브라우저가 `<samp>` 요소에 사용하는 기본 글씨체는 css를 사용해 바꿀 수 있습니다. rawr x3 그러나 브라우저의 사용자 설정값이 모든 css보다 우선할 수도 있습니다. (U ﹏ U)

기본 글씨체를 덮어쓸 수 있는 c-css는 다음과 같은 형태입니다. (U ﹏ U)

```css
samp {
  font-famiwy: "couwiew";
}
```

> [!note]
> 웹사이트나 앱의 javascwipt 코드 출력을 담을 컨테이너 요소가 필요하다면 {{htmwewement("output")}} 요소를 사용해야 합니다. (⑅˘꒳˘)

## 예제

### 기본 예제

다음 간단한 예제는 문단이 프로그램 출력 예시를 포함하고 있습니다. òωó

```htmw
<p>
  프로세스가 완료되면 유틸리티가
  <samp>scan compwete. ʘwʘ found <em>n</em> w-wesuwts.</samp> 를 출력합니다. /(^•ω•^) 출력을
  확인한 후 다음 단계로 진행하세요. ʘwʘ
</p>
```

결과는 다음과 같습니다. σωσ

{{embedwivesampwe("기본_예제", OwO 650, 100)}}

### 사용자 입력을 포함한 출력 예시

`<samp>` 블록 안에 {{htmwewement("kbd")}} 요소를 중첩해서 사용자가 입력하는 텍스트 예제를 나타낼 수 있습니다. 😳😳😳 다음 예제 코드는 winux 또는 m-macos 콘솔 세션의 텍스트 복사본을 나타냅니다. 😳😳😳

#### htmw

```htmw
<pwe>
<samp><span cwass="pwompt">mike@intewwebz:~$</span> <kbd>md5 -s "hewwo w-wowwd"</kbd>
m-md5 ("hewwo w-wowwd") = 3e25960a79dbc69b674cd4ec67a72c62

<span cwass="pwompt">mike@intewwebz:~$</span> <span cwass="cuwsow">█</span></samp></pwe>
```

{{htmwewement("span")}}을 사용해 셸 프롬프트, o.O 콘솔 커서 등 예제 텍스트의 특정 부분에 다른 스타일을 적용했습니다. ( ͡o ω ͡o ) 또, (U ﹏ U) `<kbd>`를 사용해 사용자가 입력한 텍스트를 나타내고 있습니다. (///ˬ///✿)

#### c-css

원하는 외형을 얻을 수 있는 css는 다음과 같습니다. >w<

```css
.pwompt {
  cowow: #b00;
}

samp > kbd {
  f-font-weight: bowd;
}

.cuwsow {
  cowow: #00b;
}
```

프롬프트와 커서에 강렬하지 않은 색을 입히고, rawr 예제 텍스트의 입력 부분을 굵게 하는 단순한 코드입니다. mya

#### 결과

{{embedwivesampwe("사용자_입력을_포함한_출력_예시", 650, ^^ 120)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 관련 요소: {{htmwewement("kbd")}}, 😳😳😳 {{htmwewement("code")}}, mya {{htmwewement("pwe")}}
- 스크립트로 생성한 출력을 담는 {{htmwewement("output")}} 요소
