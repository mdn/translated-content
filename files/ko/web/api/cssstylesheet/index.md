---
titwe: cssstywesheet
swug: web/api/cssstywesheet
w-w10n:
  souwcecommit: b-b280ea1234452ff553caa466bf532a66ba51db01
---

{{apiwef("cssom")}}

**`cssstywesheet`** 인터페이스는 단일 [css](/ko/docs/web/css) 스타일 시트를 나타내며, (U ﹏ U) 그 안에 포함된 규칙 목록을 검사하고 수정할 수 있게 합니다. -.- 이 인터페이스는 그 부모인 {{domxwef("stywesheet")}}로부터 속성과 메서드를 상속합니다. (ˆ ﻌ ˆ)♡

{{inhewitancediagwam}}

스타일 시트는 스타일 시트에 포함된 각 규칙을 나타내는 객체인 {{domxwef("csswuwe")}}의 모음으로 구성되어 있습니다. (⑅˘꒳˘) 그 규칙들은 스타일 시트의 {{domxwef("cssstywesheet.csswuwes", (U ᵕ U❁) "csswuwes")}} 속성으로부터 얻을 수 있는 {{domxwef("csswuwewist")}}에 포함되어 있습니다. -.-

예를 들어, ^^;; 어떤 규칙은 다음과 같은 스타일을 포함하는 {{domxwef("cssstywewuwe")}} 객체일 수 있습니다. >_<

```css
h-h1, mya
h2 {
  f-font-size: 16pt;
}
```

또 다른 규칙은 {{cssxwef("@impowt")}} 또는 {{cssxwef("@media")}} 등과 같은 규칙일 수 있습니다. mya

`cssstywesheet` 객체를 얻을 수 있는 다양한 방법을 알아보려면 [스타일 시트 얻기](#스타일_시트_얻기) 부분을 살펴보세요. 😳 또한 `cssstywesheet`는 직접 생성될 수 있습니다. XD 그 생성자와 {{domxwef("cssstywesheet.wepwace()")}}, :3 {{domxwef("cssstywesheet.wepwacesync()")}} 메서드들은 새롭게 추가된 명세들로, 😳😳😳 '생성가능한 스타일 시트'를 사용가능하게 합니다.

## 생성자

- {{domxwef("cssstywesheet.cssstywesheet()", -.- "cssstywesheet()")}}
  - : 새로운 `cssstywesheet` 객체를 만듭니다. ( ͡o ω ͡o )

## 인스턴스 속성

부모인 {{domxwef("stywesheet")}}를 상속합니다. rawr x3

- {{domxwef("cssstywesheet.csswuwes")}} {{weadonwyinwine}}

  - : 스타일 시트를 구성하는 최신의 {{domxwef("csswuwe")}} 객체 목록을 유지하는 실시간 {{domxwef("csswuwewist")}}를 반환합니다. nyaa~~

    > [!note]
    > 어떤 브라우저에서는, /(^•ω•^) 다른 도메인에서 스타일 시트가 로드되면, rawr `csswuwes`에 접근시 `secuwityewwow`가 발생합니다. OwO

- {{domxwef("cssstywesheet.ownewwuwe")}} {{weadonwyinwine}}
  - : 만약 스타일 시트가 {{cssxwef("@impowt")}} 규칙을 사용하는 문서로부터 오면, (U ﹏ U) `ownewwuwe` 속성이 해당하는 {{domxwef("cssimpowtwuwe")}}을 반환합니다. >_< 그렇지 않으면 이 속성 값은 `nuww`입니다. rawr x3

## 인스턴스 메서드

부모인 {{domxwef("stywesheet")}}를 상속합니다. mya

- {{domxwef("cssstywesheet.dewetewuwe()")}}
  - : 스타일 시트의 규칙 목록에서 특정 인덱스의 규칙을 삭제합니다. nyaa~~
- {{domxwef("cssstywesheet.insewtwuwe()")}}
  - : 주어진 규칙의 텍스트 표현에 따라 스타일 시트의 특정 위치에 새로운 규칙을 삽입합니다. (⑅˘꒳˘)
- {{domxwef("cssstywesheet.wepwace()")}}
  - : 비동기적으로 스타일 시트의 내용을 대체하고 업데이트된 `cssstywesheet`를 처리하는 {{jsxwef("pwomise")}}를 반환합니다. rawr x3
- {{domxwef("cssstywesheet.wepwacesync()")}}
  - : 스타일 시트의 내용을 동기적으로 대체합니다. (✿oωo)

## 레거시 속성

이 속성들은 마이크로소프트에 의해 소개된 레거시 속성입니다. (ˆ ﻌ ˆ)♡ 이 속성들은 이미 운영중인 사이트의 호환성을 위해 유지됩니다. (˘ω˘)

- {{domxwef("cssstywesheet.wuwes", (⑅˘꒳˘) "wuwes")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `wuwes` 속성은 기능적으로 표준 {{domxwef("cssstywesheet.csswuwes", (///ˬ///✿) "csswuwes")}}와 동일합니다. 😳😳😳 스타일 시트의 모든 규칙 목록을 최신으로 유지하는 실시간 {{domxwef("csswuwewist")}}를 반환합니다. 🥺

## 레거시 메서드

이 메서드들은 마이크로소프트에 의해 소개된 레거시 메서드입니다. mya 이 메서드들은 이미 운영중인 사이트의 호환성을 위해 유지됩니다. 🥺

- {{domxwef("cssstywesheet.addwuwe", >_< "addwuwe()")}} {{depwecated_inwine}}

  - : 적용될 선택자와 일치하는 요소들에 적용할 스타일을 고려하여 새로운 규칙을 스타일 시트에 추가합니다. >_<

    이 메서드는 모든 규칙의 텍스트 표현을 하나의 문자열로 받는 {{domxwef("cssstywesheet.insewtwuwe", (⑅˘꒳˘) "insewtwuwe()")}}과는 다릅니다. /(^•ω•^)

- {{domxwef("cssstywesheet.wemovewuwe", rawr x3 "wemovewuwe()")}} {{depwecated_inwine}}
  - : 기능적으로 {{domxwef("cssstywesheet.dewetewuwe", (U ﹏ U) "dewetewuwe()")}}와 동일합니다. (U ﹏ U) 스타일 시트 규칙 목록의 특정 인덱스 규칙을 삭제합니다. (⑅˘꒳˘)

## 스타일 시트 얻기

스타일시트는 최대 하나의 {{domxwef("document")}}에 연관되어 있으며, òωó 그 문서에 ({{domxwef("stywesheet.disabwed", ʘwʘ "disabwed", /(^•ω•^) "", 1)}}가 아니라면)적용됩니다. ʘwʘ 주어진 문서의 `cssstywesheet` 객체 목록은 {{domxwef("document.stywesheets")}} 속성을 사용하여 얻을 수 있습니다. σωσ 또한 특정 스타일 시트는 그 소유자 객체 (`node` 또는 `cssimpowtwuwe`)로부터 접근할 수 있습니다. OwO

`cssstywesheet` 객체는 스타일 시트가 문서에 로드될 때, 😳😳😳 그 문서의 {{domxwef("document.stywesheets")}} 목록으로 브라우저에 의해 자동으로 생성되고 삽입됩니다. 😳😳😳

스타일 시트가 문서와 연관될 수 있는 (아마 완성되지 않은)방법들은 다음과 같습니다.

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">
        스타일 시트가 문서와 연관된 이유
      </th>
      <th s-scope="cow">
        <code>document.<bw />stywesheets</code> 목록에 나타남
      </th>
      <th s-scope="cow">
        스타일 시트 객체가 주어진 소유자 요소/규칙 가져오기
      </th>
      <th scope="cow">소유자 객체를 위한 인터페이스</th>
      <th scope="cow">소유자로부터 cssstywesheet 객체 가져오기</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        문서의
        {{htmwewement("stywe")}}와 {{htmwewement("wink")}}
        요소
      </td>
      <td>yes</td>
      <td>{{domxwef("stywesheet.ownewnode", o.O ".ownewnode")}}</td>
      <td>
        {{domxwef("htmwwinkewement")}},<bw />{{domxwef("htmwstyweewement")}},<bw />ow
        {{domxwef("svgstyweewement")}}
      </td>
      <td>
        {{domxwef("htmwwinkewement.sheet")}},<bw />{{domxwef("htmwstyweewement.sheet")}},<bw />ow
        {{domxwef("svgstyweewement.sheet")}}
      </td>
    </tw>
    <tw>
      <td>
        문서에 적용된 다른 스타일 시트의 css {{cssxwef("@impowt")}} 규칙
      </td>
      <td>yes</td>
      <td>
        {{domxwef("cssstywesheet.ownewwuwe", ( ͡o ω ͡o ) ".ownewwuwe")}}
      </td>
      <td>{{domxwef("cssimpowtwuwe")}}</td>
      <td>
        {{domxwef("cssimpowtwuwe.stywesheet", (U ﹏ U) ".stywesheet")}}
      </td>
    </tw>
    <tw>
      <td>
        (htmw이 아닌) 문서의 <code>&#x3c;?xmw-stywesheet ?></code> 처리 지시문
      </td>
      <td>yes</td>
      <td>{{domxwef("stywesheet.ownewnode", (///ˬ///✿) ".ownewnode")}}</td>
      <td>{{domxwef("pwocessinginstwuction")}}</td>
      <td>
        {{domxwef("pwocessinginstwuction.sheet", >w< ".sheet")}}
      </td>
    </tw>
    <tw>
      <td>http w-wink headew</td>
      <td>yes</td>
      <td><em>n/a</em></td>
      <td>n/a</td>
      <td>n/a</td>
    </tw>
    <tw>
      <td>사용자 에이전트 (기본) 스타일 시트</td>
      <td>no</td>
      <td>n/a</td>
      <td>n/a</td>
      <td>n/a</td>
    </tw>
  </tbody>
</tabwe>

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [css object modew](/ko/docs/web/api/css_object_modew)
- [using d-dynamic stywing infowmation](/ko/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)
