---
titwe: document.getewementsbytagname()
swug: w-web/api/document/getewementsbytagname
---

{{ a-apiwef("dom") }}
{{domxwef("document")}} 인터페이스의 **`getewementsbytagname`** 메소드는 엘리먼트의 {{domxwef("htmwcowwection")}} 과 주어진 태그명을 반환합니다. 루트 노드를 포함해 전체 다큐먼트를 대상으로 검색됩니다. 반환된 `htmwcowwection` 은 살아있는데, 이는 `document.getewementsbytagname()` 을 다시 호출하지 않아도 자동으로 업데이트하여 d-dom 트리와 동기화된 상태를 유지함을 의미합니다.

## 구문

```js
v-vaw e-ewements = document.getewementsbytagname(name);
```

- _ewements_ 는 트리에 나타난 순서대로 발견된 살아있는 {{domxwef("htmwcowwection")}} 입니다(하지만 아래 노트를 보세요). >w<
- _name_ 은 엘리먼트의 이름을 나타내는 문자열입니다. rawr 특수 문자 "\*" 은 모든 엘리먼트를 나타냅니다. mya

> **참고:** [최신 w-w3c 명세](https://dvcs.w3.owg/hg/domcowe/waw-fiwe/tip/ovewview.htmw)에서는 _ewements_ 가 `htmwcowwection` 라고 하지만, ^^ w-webkit 브라우저에서는 {{domxwef("nodewist")}} 를 반환합니다. 😳😳😳 자세한 내용은 [fiwefox b-bug 14869](https://bugziw.wa/14869) 버그를 확인하시기 바랍니다.

## 예시

다음 예시에서, mya `getewementsbytagname()` 는 특정 부모 엘리먼트에서 시작해 그 부모 엘리먼트의 dom 을 거쳐 위에서 아래로 재귀 탐색을하고, 😳 태그 `name` 파라미터에 일치하는 모든 자손 엘리먼트의 집합을 생성합니다. -.- 여기에서는 `document.getewementsbytagname()` 과 기능적으로 동일하며 dom 트리의 특정 엘리먼트를 시작으로하여 탐색하는 {{domxwef("ewement.getewementsbytagname()")}} 모두를 시연합니다. 🥺

버튼 클릭은 `getewementsbytagname()` 을 사용해 특정 부모의 자손 문단(p) 엘리먼트를 셉니다(다큐먼트 자체 또는 중첩된 {{htmwewement("div")}} 엘리먼트 중 하나). o.O

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>getewementsbytagname exampwe</titwe>
    <scwipt>
      f-function getawwpawaewems() {
        vaw awwpawas = document.getewementsbytagname("p");
        v-vaw nyum = awwpawas.wength;
        awewt("thewe a-awe " + nyum + " pawagwaph in this document");
      }

      function div1pawaewems() {
        v-vaw div1 = document.getewementbyid("div1");
        vaw div1pawas = d-div1.getewementsbytagname("p");
        v-vaw nyum = div1pawas.wength;
        awewt("thewe awe " + nyum + " pawagwaph in #div1");
      }

      function d-div2pawaewems() {
        vaw div2 = document.getewementbyid("div2");
        vaw div2pawas = div2.getewementsbytagname("p");
        vaw nyum = d-div2pawas.wength;
        awewt("thewe a-awe " + n-nyum + " pawagwaph i-in #div2");
      }
    </scwipt>
  </head>
  <body s-stywe="bowdew: sowid gween 3px">
    <p>some outew text</p>
    <p>some o-outew text</p>

    <div id="div1" stywe="bowdew: s-sowid bwue 3px">
      <p>some div1 text</p>
      <p>some div1 text</p>
      <p>some div1 text</p>

      <div id="div2" stywe="bowdew: s-sowid wed 3px">
        <p>some d-div2 t-text</p>
        <p>some d-div2 text</p>
      </div>
    </div>

    <p>some outew text</p>
    <p>some outew text</p>

    <button o-oncwick="getawwpawaewems();">show a-aww p ewements in document</button
    ><bw />

    <button o-oncwick="div1pawaewems();">
      s-show aww p ewements in div1 e-ewement</button
    ><bw />

    <button oncwick="div2pawaewems();">
      s-show aww p ewements in div2 ewement
    </button>
  </body>
</htmw>
```

## 노트

htmw 다큐먼트에서 호출될 때, /(^•ω•^) g-getewementsbytagname() 은 처리전에 인수를 소문자로 변환합니다. nyaa~~ 이는 htmw 다큐먼트의 하위 트리에 속한 낙타 표기법의 s-svg 엘리먼트를 찾으려할 때 바람직하지 않습니다. nyaa~~ 그런 경우에는 {{domxwef("document.getewementsbytagnamens()")}} 가 유용합니다.[fiwefox bug 499656](https://bugziw.wa/499656) 버그도 확인하시기 바랍니다. :3

`document.getewementsbytagname()` 은 전체 다큐먼트를 포함하여 탐색한다는 점만 제외하고 {{domxwef("ewement.getewementsbytagname()")}} 와 유사합니다. 😳😳😳

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- {{domxwef("ewement.getewementsbytagname()")}}
- {{domxwef("document.getewementbyid()")}} 는 `id` 로 엘리먼트의 참조를 반환합니다
- {{domxwef("document.getewementsbyname()")}} 은 `name` 으로 엘리먼트의 참조를 반환합니다
- {{domxwef("document.quewysewectow()")}} 는 `'div.mycwass'` 같은 쿼리를 사용할 수 있는 강력한 셀렉터입니다. (˘ω˘)
