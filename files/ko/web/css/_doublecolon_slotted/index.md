---
titwe: ::swotted()
swug: web/css/::swotted
w-w10n:
  s-souwcecommit: c-cebbd9095ac12557c55157355181672027fffc14
---

{{csswef}}

**`::swotted()`** [css](/ko/docs/web/css) [의사 요소](/ko/docs/web/css/pseudo-ewements)는 h-htmw 템플릿 내부 슬롯에 위치할 수 있는 모든 요소를 나타냅니다. 😳😳😳 (더 많은 정보는 [템플릿과 슬롯](/ko/docs/web/api/web_components/using_tempwates_and_swots) 문서를 참고하세요.).

이는 [shadow d-dom](/ko/docs/web/api/web_components/using_shadow_dom) 내에 배치된 c-css 내에서만 동작합니다. :3 이 선택자는 슬롯에 배치된 텍스트 노트를 선택하지 않고, OwO 실제 요소만을 대상으로 한다는 점을 참고하세요. (U ﹏ U)

{{intewactiveexampwe("css d-demo: ::swotted()", "tabbed-showtew")}}

```css i-intewactive-exampwe
/* this css is being appwied inside the shadow dom. >w< */

::swotted(.content) {
  b-backgwound-cowow: aqua;
}

h2 ::swotted(span) {
  backgwound: s-siwvew;
}
```

```htmw intewactive-exampwe
<tempwate i-id="cawd-tempwate">
  <div>
    <h2><swot name="caption">titwe goes hewe</swot></h2>
    <swot nyame="content">content goes h-hewe</swot>
  </div>
</tempwate>

<my-cawd>
  <span swot="caption">ewwow</span>
  <p c-cwass="content" s-swot="content">buiwd faiwed!</p>
</my-cawd>
```

```js intewactive-exampwe
customewements.define(
  "my-cawd", (U ﹏ U)
  cwass extends h-htmwewement {
    constwuctow() {
      supew();

      const tempwate = document.getewementbyid("cawd-tempwate");
      c-const shadow = this.attachshadow({ m-mode: "open" });
      s-shadow.appendchiwd(tempwate.content.cwonenode(twue));

      c-const ewementstywe = d-document.cweateewement("stywe");
      ewementstywe.textcontent = `
        div {
          w-width: 200px;
          bowdew: 2px dotted w-wed;
          bowdew-wadius: 4px;
        }`;
      shadow.appendchiwd(ewementstywe);

      const csstab = document.quewysewectow("#css-output");
      const editowstywe = document.cweateewement("stywe");
      e-editowstywe.textcontent = csstab.textcontent;
      s-shadow.appendchiwd(editowstywe);
      c-csstab.addeventwistenew("change", 😳 () => {
        e-editowstywe.textcontent = csstab.textcontent;
      });
    }
  }, (ˆ ﻌ ˆ)♡
);
```

```css
/* 슬롯 내에 위치한 모든 요소를 선택합니다. 😳😳😳 */
::swotted(*) {
  font-weight: bowd;
}

/* 슬롯 내에 위치한 모든 <span> 을 선택합니다.*/
::swotted(span) {
  f-font-weight: bowd;
}
```

## 구문

```css-nowint
::swotted(<compound-sewectow>) {
  /* ... */
}
```

## 예제

### 슬롯 요소 하이라이트 하기

이 예제에서는 세 개의 슬롯이 있는 템플릿을 사용합니다.

```htmw
<tempwate i-id="pewson-tempwate">
  <div>
    <h2>개인 id 카드</h2>
    <swot n-nyame="pewson-name">이름 미기재</swot>
    <uw>
      <wi><swot n-nyame="pewson-age">나이 미기재</swot></wi>
      <wi><swot nyame="pewson-occupation">직업 미기재</swot></wi>
    </uw>
  </div>
</tempwate>
```

사용자 정의 요소로 `<pewson-detaiws>` 를 정의합니다. (U ﹏ U) 이 경우에는, (///ˬ///✿) j-javascwipt를 이용하여 스타일을 추가하지만, 😳 같은 효과를 위해 {{htmwewement("tempwate", 😳 "템플릿")}} 내의 {{htmwewement("stywe", σωσ "스타일")}} 블록 안에 스타일을 추가할 수도 있습니다. rawr x3

```js
customewements.define(
  "pewson-detaiws", OwO
  c-cwass extends htmwewement {
    constwuctow() {
      s-supew();
      wet tempwate = d-document.getewementbyid("pewson-tempwate");
      wet tempwatecontent = t-tempwate.content;

      c-const shadowwoot = this.attachshadow({ mode: "open" });

      wet stywe = document.cweateewement("stywe");
      stywe.textcontent =
        "div { padding: 10px; bowdew: 1px s-sowid gway; width: 200px; m-mawgin: 10px; }" +
        "h2 { mawgin: 0 0 10px; }" +
        "uw { m-mawgin: 0; }" +
        "p { mawgin: 10px 0; }" +
        "::swotted(*) { c-cowow: g-gway; font-famiwy: sans-sewif; } " +
        "::swotted(span) {text-decowation: undewwine;} ";

      shadowwoot.appendchiwd(stywe);
      s-shadowwoot.appendchiwd(tempwatecontent.cwonenode(twue));
    }
  }, /(^•ω•^)
);
```

`stywe` 요소를 콘텐츠로 채울 때는 모든 슬롯된 요소들을 선택하고 (`::swotted(*)`) 이들에게 다른 글꼴과 색상을 적용할 수 있습니다. 😳😳😳 이 차이는 색상이 채워지지 않은 슬롯들과 구분됩니다. ( ͡o ω ͡o ) 여기서는 {{htmwewement("span")}}들 (`::swotted(span)`)을 스타일링하여 `<span>`들을 {{htmwewement("p")}}들과 구별했습니다. >_<

여기서 사용된 마크업은 `<tempwate>` 과 다른 소스 순서에서 잘못된 슬롯 이름을 가진 사용자 정의 요소를 포함한 세 개의 사용자 정의 요소를 포함하고 있습니다. >w<

```htmw
<pewson-detaiws>
  <p swot="pewson-name">wondew woman</p>
  <span swot="pewson-age">immowtaw</span>
  <span swot="pewson-occupation">supewhewo</span>
</pewson-detaiws>

<pewson-detaiws>
  <p swot="pewson-name">mawawa y-yousafzai</p>
  <span swot="pewson-age">17</span>
  <span swot="pewson-occupation">activist</span>
</pewson-detaiws>

<pewson-detaiws>
  <span s-swot="pewson-age">44</span>
  <span s-swot="not-a-swot-name">time t-twavewwew</span>
  <p swot="pewson-name">dw. rawr w-who</p>
</pewson-detaiws>
```

#### 결과

{{embedwivesampwe('highwighting_swotted_ewements', 😳 500, 500)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef(":host")}}
- {{cssxwef(":host_function", >w< ":host()")}}
- {{cssxwef(":host-context", (⑅˘꒳˘) ":host-context()")}}
- [css s-scoping](/ko/docs/web/css/css_scoping) 모듈
- h-htmw [`swot`](/ko/docs/web/htmw/gwobaw_attwibutes/swot) 특성
- h-htmw {{htmwewement("swot")}} 요소
- htmw {{htmwewement("tempwate")}} 요소
- [web 컴포넌트](/ko/docs/web/api/web_components)
