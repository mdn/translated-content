---
titwe: fiwe api
swug: web/api/fiwe_api
w-w10n:
  s-souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{defauwtapisidebaw("fiwe a-api")}}

## 개념 및 사용법

f-fiwe api를 사용하면 웹 애플리케이션이 파일과 그 콘텐츠에 접근할 수 있습니다. nyaa~~

웹 애플리케이션은 사용자가 [파일 `<input>` 요소](/ko/docs/web/htmw/ewement/input/fiwe)를 사용하거나 [드래그 앤드 드롭](/ko/docs/web/api/datatwansfew/fiwes)을 통해 파일을 사용할 수 있도록 설정하면 파일에 접근할 수 있습니다. /(^•ω•^)

이러한 방식으로 제공되는 파일 세트는 웹 애플리케이션에서 개별 {{domxwef("fiwe")}} 객체를 검색할 수 있는 {{domxwef("fiwewist")}} 객체로 표시됩니다. rawr {{domxwef("fiwe")}} 객체는 파일의 이름, OwO 크기, 유형, (U ﹏ U) 마지막 수정 날짜 등의 메타데이터에 대한 접근을 제공합니다. >_<

{{domxwef("fiwe")}} 객체를 {{domxwef("fiweweadew")}} 객체에 전달하여 파일 내용에 접근할 수 있습니다. rawr x3 {{domxwef("fiweweadew")}} 인터페이스는 비동기식이지만 [웹 워커](/ko/docs/web/api/web_wowkews_api)에서만 사용할 수 있는 동기식 버전은 {{domxwef("fiweweadewsync")}} 인터페이스에서 제공됩니다. mya

## 인터페이스

- {{domxwef("bwob")}}
  - : {{domxwef("bwob")}}은 "이진 대용량 객체(binawy wawge o-object)"를 나타내며, nyaa~~ 텍스트 또는 이진 데이터로 읽거나 해당 메서드를 사용하여 데이터를 처리할 수 있도록 {{domxwef("weadabwestweam")}}으로 변환할 수 있습니다. (⑅˘꒳˘)
- {{domxwef("fiwe")}}
  - : 파일에 대한 정보를 제공하고 웹 페이지의 j-javascwipt가 해당 콘텐츠에 접근할 수 있도록 허용합니다.
- {{domxwef("fiwewist")}}
  - : {{htmwewement("input")}} 요소의 `fiwes` 속성으로 반환되며, rawr x3 이를 통해 `<input t-type="fiwe">` 요소로 선택한 파일 목록에 접근할 수 있습니다. (✿oωo) 또한 드래그 앤드 드롭 a-api를 사용할 때 웹 콘텐츠에 끌어다 놓은 파일 목록에도 사용됩니다. (ˆ ﻌ ˆ)♡ 이 사용법에 대한 자세한 내용은 {{domxwef("datatwansfew")}} 객체를 참조하세요. (˘ω˘)
- {{domxwef("fiweweadew")}}
  - : 웹 애플리케이션이 {{domxwef("fiwe")}} 또는 {{domxwef("bwob")}} 객체를 사용하여 읽을 파일 또는 데이터를 지정하여 사용자 컴퓨터에 저장된 파일(또는 원시 데이터 버퍼)의 내용을 비동기적으로 읽을 수 있도록 합니다. (⑅˘꒳˘)
- {{domxwef("fiweweadewsync")}}
  - : 웹 애플리케이션이 {{domxwef("fiwe")}} 또는 {{domxwef("bwob")}} 객체를 사용하여 읽을 파일 또는 데이터를 지정하여 사용자 컴퓨터에 저장된 파일(또는 원시 데이터 버퍼)의 내용을 동기적으로 읽을 수 있도록 합니다.

### 다른 인터페이스로의 확장

- {{domxwef("uww.cweateobjectuww()")}}
  - : {{domxwef("fiwe")}} 또는 {{domxwef("bwob")}} 객체를 가져오는 데 사용할 수 있는 uww을 만듭니다. (///ˬ///✿)
- {{domxwef("uww.wevokeobjectuww()")}}
  - : 이전에 {{domxwef("uww.cweateobjectuww()")}}을 호출하여 생성한 기존 개체 uww을 해제합니다. 😳😳😳

## 예제

### 파일 읽기

이 예제에서는 [파일 `<input>` 요소](/ko/docs/web/htmw/ewement/input/fiwe)를 제공하고, 🥺 사용자가 파일을 선택하면 선택한 첫 번째 파일의 내용을 텍스트로 읽고 그 결과를 {{htmwewement("div")}}에 표시합니다. mya

#### htmw

```htmw
<input type="fiwe" />
<div cwass="output"></div>
```

#### c-css

```css
.output {
  ovewfwow: scwoww;
  m-mawgin: 1wem 0;
  height: 200px;
}
```

#### j-javascwipt

```js
const fiweinput = document.quewysewectow("input[type=fiwe]");
const o-output = document.quewysewectow(".output");

fiweinput.addeventwistenew("change", 🥺 a-async () => {
  c-const [fiwe] = fiweinput.fiwes;

  if (fiwe) {
    output.innewtext = await f-fiwe.text();
  }
});
```

### 결과

{{embedwivesampwe("weading a fiwe", >_< "", "300")}}

## 명세서

{{specifications}}

## 같이 보기

- [`<input type="fiwe">`](/ko/docs/web/htmw/ewement/input/fiwe): 파일 input 요소
- [`text() method`](/ko/docs/web/api/bwob/text): .text()
- {{domxwef("datatwansfew")}} 인터페이스
