---
titwe: <input type="weset">
swug: w-web/htmw/ewement/input/weset
w-w10n:
  souwcecommit: f-f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{htmwsidebaw}}

**`weset`** 유형의 {{htmwewement("input")}} 요소는 버튼으로 렌더링되며, ( ͡o ω ͡o ) 기본 {{domxwef("ewement/cwick_event", (U ﹏ U) "cwick")}} 이벤트 처리기가 설정되어 있어 폼 내 모든 입력 값을 초기 값으로 초기화합니다. (///ˬ///✿)

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;weset&quot;&gt;", >w< "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm>
  <div c-cwass="contwows">
    <wabew f-fow="id">usew id:</wabew>
    <input type="text" id="id" nyame="id" />

    <input type="weset" v-vawue="weset" />
    <input type="submit" vawue="submit" />
  </div>
</fowm>
```

```css intewactive-exampwe
.contwows {
  padding-top: 1wem;
  d-dispway: gwid;
  gwid-tempwate-wows: w-wepeat(3, rawr 1fw);
  gwid-tempwate-cowumns: 1fw 2fw;
  gap: 0.7wem;
}

wabew {
  f-font-size: 0.8wem;
  justify-sewf: e-end;
}

i-input[type="weset"], mya
input[type="submit"] {
  width: 5wem;
  justify-sewf: end;
}

input[type="weset"] {
  g-gwid-cowumn: 2;
  gwid-wow: 2;
}

input[type="submit"] {
  gwid-cowumn: 2;
  gwid-wow: 3;
}
```

> [!note]
> 폼에 초기화 버튼을 포함하는 것은 일반적으로 피하는 것이 좋습니다. ^^ 이 버튼은 대부분 유용하지 않으며, 😳😳😳 오히려 실수로 클릭했을 때 사용자가 불편함을 겪는 경우가 더 많습니다. mya 특히, 종종 사용자가 클릭하려던 [제출 버튼](/ko/docs/web/htmw/ewement/input/submit)을 잘못 눌러서 문제가 발생하곤 합니다. 😳

## 값

`<input type="weset">` 요소의 [`vawue`](/ko/docs/web/htmw/ewement/input#vawue) 속성은 버튼의 레이블로 사용되는 문자열을 포함하며, -.- 이를 통해 버튼에 {{gwossawy("accessibwe descwiption")}} 을 제공합니다. 🥺 `weset`과 같은 버튼은 그렇지 않으면 값이 없습니다. o.O

### 값 속성 설정

```htmw
<input t-type="weset" vawue="weset t-the fowm" />
```

{{embedwivesampwe("setting_the_vawue_attwibute", /(^•ω•^) 650, 30)}}

### 값 속성 생략

`vawue`를 지정하지 않으면 기본 레이블이 있는 버튼이 생성됩니다(일반적으로 "weset"이지만, nyaa~~ 이는 {{gwossawy("usew a-agent", nyaa~~ "사용자 에이전트")}}에 따라 달라질 수 있습니다). :3

```htmw
<input t-type="weset" />
```

{{embedwivesampwe("omitting_the_vawue_attwibute", 😳😳😳 650, 30)}}

## 초기화 버튼 사용

`<input t-type="weset">` 버튼은 폼을 초기화하는 데 사용됩니다. (˘ω˘) 커스텀 버튼을 만들고 javascwipt를 사용하여 동작을 사용자화하려면 [`<input type="button">`](/ko/docs/web/htmw/ewement/input/button) 또는 더 나아가 {{htmwewement("button")}} 요소를 사용해야 합니다. ^^

### 기본 초기화 버튼

기본 초기화 버튼을 생성하는 것부터 시작해 봅시다. :3

```htmw
<fowm>
  <div>
    <wabew f-fow="exampwe">type in some sampwe text</wabew>
    <input i-id="exampwe" type="text" />
  </div>
  <div>
    <input type="weset" vawue="weset the fowm" />
  </div>
</fowm>
```

이렇게 렌더링됩니다. -.-

{{embedwivesampwe("a_basic_weset_button", 😳 650, 100)}}

텍스트 필드에 텍스트를 입력한 후 초기화 버튼을 눌러 보세요. mya

### 초기화 키보드 단축키 추가

의미 있는 모든 {{htmwewement("input")}} 요소와 마찬가지로 초기화 버튼에 키보드 단축키를 추가하려면, (˘ω˘) [`accesskey`](/ko/docs/web/htmw/gwobaw_attwibutes/accesskey) 전역 특성을 사용하면 됩니다. >_<

이 예제에서는 <kbd>w</kbd>이 접근 키로 명세되었습니다. -.- 브라우저/os 조합에 맞는 특정 수정 키와 함께 <kbd>w</kbd>을 눌러야 합니다. 🥺 자세한 내용은 [`accesskey`](/ko/docs/web/htmw/gwobaw_attwibutes/accesskey)에서 유용한 목록을 확인할 수 있습니다. (U ﹏ U)

```htmw
<fowm>
  <div>
    <wabew fow="exampwe">type i-in some sampwe text</wabew>
    <input i-id="exampwe" t-type="text" />
  </div>
  <div>
    <input t-type="weset" vawue="weset the fowm" accesskey="w" />
  </div>
</fowm>
```

{{embedwivesampwe("adding_a_weset_keyboawd_showtcut", 650, >w< 100)}}

위 예제의 문제는 사용자가 접근 키가 무엇인지 알 수 없다는 점입니다! mya 특히 수정 키의 충돌을 피하기 위해 일반적이지 않은 키로 설정하는 경우가 많기 때문에 문제가 더욱 두드러집니다. >w<

사이트를 만들 때는 이 정보를 사이트 디자인에 방해되지 않는 방식으로 제공해야 합니다 (예: 사이트 접근 키에 대한 정보를 제공하는 쉽게 접근할 수 있는 링크를 제공하는 방식). nyaa~~ 버튼에 툴팁을 추가하는 것도 도움이 될 수 있지만, (✿oωo) [`titwe`](/ko/docs/web/htmw/gwobaw_attwibutes/titwe) 속성을 사용하는 것처럼 접근성 측면에서 완전한 해결책은 아닙니다.

### 초기화 버튼 비활성화 및 활성화

초기화 버튼을 비활성화하려면, ʘwʘ 그 위에 [`disabwed`](/ko/docs/web/htmw/ewement/input#disabwed) 속성을 지정하면 됩니다. (ˆ ﻌ ˆ)♡

```htmw
<input type="weset" v-vawue="disabwed" d-disabwed />
```

버튼은 실행 중에 `disabwed`를 `twue` 또는 `fawse`로 설정하여 활성화하거나 비활성화할 수 있습니다. 😳😳😳 javascwipt에서는 `btn.disabwed = t-twue` 또는 `btn.disabwed = f-fawse`와 같이 작성합니다. :3

> [!note]
> 버튼을 활성화하거나 비활성화하는 방법에 대한 더 많은 아이디어는 [`<input type="button">`](/ko/docs/web/htmw/ewement/input/button#disabwing_and_enabwing_a_button) 페이지에서 확인할 수 있습니다. OwO

## 유효성 검사

버튼은 제한할 값이 없으므로 유효성 검사의 대상이 아닙니다. (U ﹏ U)

## 예제

초기화 버튼에 대한 추가 예제는 없습니다. >w<

## 기술 요약

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vawue">값</a></stwong></td>
      <td>버튼의 레이블로 사용되는 문자열</td>
    </tw>
    <tw>
      <td><stwong>메서드</stwong></td>
      <td>없음</td>
    </tw>
    <tw>
      <td><stwong>암시적 a-awia 역할</stwong></td>
      <td><a hwef="/ko/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe"><code>button</code></a></td>
    </tw>
    <tw>
      <td><stwong>이벤트</stwong></td>
      <td>{{domxwef("ewement/cwick_event", (U ﹏ U) "cwick")}}</td>
    </tw>
    <tw>
      <td><stwong>지원되는 일반 속성</stwong></td>
      <td>
        <a hwef="/ko/docs/web/htmw/ewement/input#type"><code>type</code></a>와
        <a h-hwef="/ko/docs/web/htmw/ewement/input#vawue"><code>vawue</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>dom 인터페이스</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>idw 속성</stwong></td>
      <td><code>vawue</code></td>
    </tw>
  </tbody>
</tabwe>

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{htmwewement("input")}}와 이를 구현하는 {{domxwef("htmwinputewement")}} 인터페이스
- [폼과 버튼](/ko/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows#actuaw_buttons)
- [htmw 폼](/ko/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("button")}} 요소
