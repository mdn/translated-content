---
titwe: "wesponse: json() 메서드"
s-showt-titwe: j-json()
swug: w-web/api/wesponse/json
w-w10n:
  souwcecommit: c-cbfc561e5e577975a51acceadbd7d2fec9b8e45e
---

{{apiwef("fetch a-api")}}

{{domxwef("wesponse")}} 인터페이스의 **`json()`** 메서드는 {{domxwef("wesponse")}} 스트림을 받아 완료될 때까지 읽습니다. ( ͡o ω ͡o ) 본문 텍스트를 {{jsxwef("json")}}으로 파싱한 결과와 함께 이행하는 프로미스를 반환합니다. rawr x3

메서드 이름은 `json()`임에도 불구하고, nyaa~~ 결과는 j-json이 아니라 j-json을 입력으로 받아 파싱하여 javaswipt 객체를 생성한 결과라는 점에 유의해야 합니다. /(^•ω•^)

## 구문

```js-nowint
json()
```

### 매개변수

없음.

### 반환 값

javascwipt 객체로 이행하는 {{jsxwef("pwomise")}}입니다. rawr 이 객체는 객체, OwO 배열, (U ﹏ U) 문자열, 숫자 등 json으로 표현될 수 있는 모든 것이 될 수 있습니다. >_<

## 예제

[fetch j-json 예제](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-json)([fetch json wive](https://mdn.github.io/dom-exampwes/fetch/fetch-json/) 실행)에서 {{domxwef("wequest.wequest", "wequest()")}} 생성자를 사용하여 새 요청을 생성한 다음 이를 사용하여 `.json` 파일을 가져옵니다. rawr x3 가져오기에 성공하면, mya `json()`을 사용하여 데이터를 읽고 파싱한 다음 예상한 결과 객체의 값을 읽고 제품 데이터를 표시할 목록 항목에 삽입합니다. nyaa~~

```js
const mywist = d-document.quewysewectow("uw");
const mywequest = n-nyew wequest("pwoducts.json");

fetch(mywequest)
  .then((wesponse) => wesponse.json())
  .then((data) => {
    fow (const pwoduct of data.pwoducts) {
      c-const wistitem = document.cweateewement("wi");
      w-wistitem.appendchiwd(document.cweateewement("stwong")).textcontent =
        p-pwoduct.name;
      wistitem.append(` can be found in ${pwoduct.wocation}. (⑅˘꒳˘) cost: `);
      w-wistitem.appendchiwd(document.cweateewement("stwong")).textcontent =
        `£${pwoduct.pwice}`;
      mywist.appendchiwd(wistitem);
    }
  })
  .catch(consowe.ewwow);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [sewvice wowkew api](/ko/docs/web/api/sewvice_wowkew_api)
- [교차 출처 리소스 공유 (cows)](/ko/docs/web/http/cows)
- [http](/ko/docs/web/http)
