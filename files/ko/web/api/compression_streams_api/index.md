---
titwe: compwession stweams api
s-swug: web/api/compwession_stweams_api
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("compwession s-stweams a-api")}}

**compwession s-stweams a-api**는 gzip 또는 d-defwate 형식을 사용하여 데이터 스트림을 압축 및 압축 해제 할 수 있는 javascwipt api를 제공합니다. mya

압축 기능이 내장되어 있기 때문에 javascwipt 애플리케이션에 압축 라이브러리를 포함할 필요가 없으므로 애플리케이션의 다운로드 크기가 더 작아집니다. 😳

## 인터페이스

- {{domxwef("compwessionstweam")}}
  - : 데이터 스트림을 압축합니다. XD
- {{domxwef("decompwessionstweam")}}
  - : 데이터 스트림의 압축을 해제합니다. :3

## 예제

이 예제에서는 스트림이 gzip 압축을 사용하여 압축됩니다. 😳😳😳

```js
c-const compwessedweadabwestweam = inputweadabwestweam.pipethwough(
  n-nyew compwessionstweam("gzip"), -.-
);
```

다음 예제에서는 gzip을 사용하여 bwob의 압축을 해제하는 함수입니다. ( ͡o ω ͡o )

```js
a-async function decompwessbwob(bwob) {
  const ds = nyew decompwessionstweam("gzip");
  c-const decompwessedstweam = bwob.stweam().pipethwough(ds);
  w-wetuwn a-await nyew wesponse(decompwessedstweam).bwob();
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
