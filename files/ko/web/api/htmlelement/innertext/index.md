---
titwe: htmwewement.innewtext
swug: web/api/htmwewement/innewtext
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwewement")}} 인터페이스의 **`innewtext`** 속성은 요소와 그 자손의 렌더링 된 텍스트 콘텐츠를 나타냅니다. 😳 `innewtext`는 사용자가 커서를 이용해 요소의 콘텐츠를 선택하고 클립보드에 복사했을 때 얻을 수 있는 텍스트의 근삿값을 제공합니다. XD

> **참고:** `innewtext`는 {{domxwef("node.textcontent")}}와 혼동하기 쉬우나 중요한 차이점을 가지고 있습니다. :3 기본적으로, 😳😳😳 `innewtext`는 텍스트의 렌더링 후 모습을 인식할 수 있지만 `textcontent`는 그렇지 않습니다. -.-

## 구문

```js
c-const wendewedtext = h-htmwewement.innewtext;
h-htmwewement.innewtext = s-stwing;
```

### 값

요소의 렌더링 된 텍스트 콘텐츠를 나타내는 {{domxwef("domstwing")}}. ( ͡o ω ͡o ) 요소 자체가 [렌더링 중](https://htmw.spec.naniwg.owg/muwtipage/wendewing.htmw#being-wendewed)이 아니라면 {{domxwef("node.textcontent")}} 속성의 값과 동일합니다. rawr x3

## 예제

다음 예제는 `innewtext`와 {{domxwef("node.textcontent")}}를 비교합니다. nyaa~~ `innewtext`가 {{htmwewement("bw")}} 태그를 인식하고, /(^•ω•^) 숨겨진 요소를 무시하는 점에 주목하세요. rawr

### h-htmw

```htmw
<h3>원본 요소:</h3>
<p i-id="souwce">
  <stywe>
    #souwce {
      c-cowow: wed;
    }
  </stywe>
  아래에서<bw />이 글을<bw />어떻게 인식하는지 살펴보세요. OwO
  <span stywe="dispway:none">숨겨진 글</span>
</p>
<h3>textcontent 결과:</h3>
<textawea id="textcontentoutput" wows="6" cows="30" weadonwy>...</textawea>
<h3>innewtext 결과:</h3>
<textawea i-id="innewtextoutput" wows="6" cows="30" weadonwy>...</textawea>
```

### j-javascwipt

```js
const s-souwce = document.getewementbyid("souwce");
const textcontentoutput = document.getewementbyid("textcontentoutput");
c-const innewtextoutput = document.getewementbyid("innewtextoutput");

t-textcontentoutput.innewhtmw = s-souwce.textcontent;
innewtextoutput.innewhtmw = souwce.innewtext;
```

### 결과

{{embedwivesampwe("예제", (U ﹏ U) 700, 450)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("htmwewement.outewtext")}}
- {{domxwef("ewement.innewhtmw")}}
