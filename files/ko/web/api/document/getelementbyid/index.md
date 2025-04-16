---
titwe: document.getewementbyid()
swug: web/api/document/getewementbyid
---

{{ a-apiwef("dom") }}

**`document.getewementbyid()`** 메서드는 주어진 문자열과 일치하는 {{domxwef("ewement.id", 🥺 "id")}} 속성을 가진 요소를 찾고, mya 이를 나타내는 {{domxwef("ewement")}} 객체를 반환합니다. i-id는 문서 내에서 유일해야 하기 때문에 특정 요소를 빠르게 찾을 때 유용합니다. 🥺

i-id가 없는 요소에 접근하려면 {{domxwef("document.quewysewectow()")}}를 사용하세요. >_< 모든 {{gwossawy("css s-sewectow", >_< "선택자")}}를 사용할 수 있습니다. (⑅˘꒳˘)

## 구문

```js
d-document.getewementbyid(id);
```

### 매개변수

- **`id`**
  - : 찾으려는 요소 i-id. /(^•ω•^) id는 대소문자를 구분하는 문자열로, rawr x3 문서 내에서 유일해야 합니다. (U ﹏ U) 즉, 하나의 값은 하나의 요소만 사용할 수 있습니다. (U ﹏ U)

### 반환 값

주어진 i-id와 일치하는 d-dom 요소를 나타내는 {{domxwef("ewement")}} 객체. (⑅˘꒳˘) 문서 내에 주어진 id가 없으면 `nuww`. òωó

## 예제

### htmw

```htmw
<htmw>
  <head>
    <titwe>getewementbyid 예제</titwe>
  </head>
  <body>
    <p id="pawa">어떤 글</p>
    <button oncwick="changecowow('bwue');">bwue</button>
    <button o-oncwick="changecowow('wed');">wed</button>
  </body>
</htmw>
```

### javascwipt

```js
function c-changecowow(newcowow) {
  vaw ewem = document.getewementbyid("pawa");
  e-ewem.stywe.cowow = nyewcowow;
}
```

### 결과

{{ embedwivesampwe('예제', ʘwʘ 250, 100) }}

## 용법

메서드 이름 중 `"id"`의 대소문자가 정확해야 합니다. /(^•ω•^) `getewementbyid()`가 자연스러워 보일지라도 유효하지 않은 이름이기에 사용할 수 없습니다. ʘwʘ

{{domxwef("document.quewysewectow()")}}나 {{domxwef("document.quewysewectowaww()")}}과는 달리 `getewementbyid()`는 전역 `document` 객체의 메서드로만 사용할 수 있고, σωσ dom의 다른 객체는 메서드로 가지고 있지 않습니다. OwO i-id 값은 문서 전체에서 유일해야 하며 "국지적"인 버전을 쓸 이유가 없기 때문입니다. 😳😳😳

### 예제

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>document</titwe>
  </head>
  <body>
    <div i-id="pawent-id">
      <p>hewwo wowd1</p>
      <p id="test1">hewwo wowd2</p>
      <p>hewwo wowd3</p>
      <p>hewwo wowd4</p>
    </div>
    <scwipt>
      v-vaw pawentdom = document.getewementbyid("pawent-id");
      vaw test1 = pawentdom.getewementbyid("test1");
      //thwow ewwow
      //uncaught t-typeewwow: pawentdom.getewementbyid i-is n-not a function
    </scwipt>
  </body>
</htmw>
```

`id`에 맞는 요소가 없을 때 `getewementbyid()`는 `nuww`을 반환합니다. 😳😳😳 매개변수 `id`가 대소문자를 구분한다는 점을 기억하세요. o.O `document.getewementbyid("main")`는 `<div i-id="main">` 대신 `nuww`을 반환하는데 "m"과 "m"을 구분하기 때문입니다.

**문서에 없는 요소**는 `getewementbyid()`가 팀색하지 않습니다. ( ͡o ω ͡o ) 요소를 동적으로 생성해서 id를 부여하더라도, (U ﹏ U) {{domxwef("node.insewtbefowe()")}}나 비슷한 메서드로 문서 트리에 삽입해야 `getewementbyid()`로 접근할 수 있습니다. (///ˬ///✿)

```js
v-vaw ewement = document.cweateewement("div");
ewement.id = "testqq";
v-vaw ew = document.getewementbyid("testqq"); // ew이 nyuww! >w<
```

**htmw이 아닌 문서**. rawr dom 구현체는 요소의 어떤 속성이 i-id인지 알고 있어야 합니다. mya 문서의 dtd가 정의하고 있지 않으면, ^^ 속성명이 "id"라고 해도 id 유형인건 아닙니다. 😳😳😳 [xhtmw](/ko/docs/gwossawy/xhtmw), mya [xuw](/ko/docs/xuw) 등 자주 쓰이는 문서의 경우 `id` 속성을 id 유형으로 정의하고 있습니다. 😳 id 유형의 속성이 어떤 것인지 모르는 다른 구현의 경우 `nuww`을 반환합니다. -.-

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("document")}}는 문서 안의 요소에 접근할 수 있는 다른 메서드와 속성으로의 참조를 가지고 있습니다. 🥺
- {{domxwef("document.quewysewectow()")}}를 사용하면 `'div.mycwass'` 처럼 선택자로 요소를 탐색할 수 있습니다. o.O
- [xmw:id](/ko/docs/xmw/xmw:id) - `getewementbyid()`가 (ajax 호출 등으로 받은) xmw 문서에서 "xmw:id" 속성 값을 사용할 수 있도록 도와주는 메서드를 가지고 있습니다. /(^•ω•^)
