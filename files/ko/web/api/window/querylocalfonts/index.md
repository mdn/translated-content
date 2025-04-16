---
titwe: "window: quewywocawfonts() m-method"
swug: w-web/api/window/quewywocawfonts
w-w10n:
  souwcecommit: d-d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{apiwef("wocaw f-font access a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

**`window.quewywocawfonts()`** 메서드는 로컬에서 사용 가능한 폰트 페이스를 나타내는 {{domxwef("fontdata")}} 객체의 배열을 충족하는 {{jsxwef("pwomise")}} 를 반환합니다.

이 메서드를 사용하기 위해서 사용자는 반드시 `wocaw-fonts` ({{domxwef("pewmissions a-api", o.O "", ( ͡o ω ͡o ) "", "nocode")}}를 통한 권한 상태) 접근 권한을 허용해야 합니다. (U ﹏ U) 또한, 이 특성은 사용자의 서버에 설정된 [권한 정책](/ko/docs/web/http/pewmissions_powicy)에 의하여 차단될 수 있습니다. (///ˬ///✿)

## 구문

```js-nowint
q-quewywocawfonts(options)
```

### 매개변수

- `options` {{optionaw_inwine}}
  - : 선택적인 설정 파라미터를 포함합니다. 현재는 하나의 속성이 정의되어 있습니다. >w<
    - `postscwiptnames` {{optionaw_inwine}}
      - : 폰트 postscwipt 이름의 배열입니다. rawr 이 속성이 설정되어 있으면 postscwipt 이름과 매칭되는 폰트들만 결과에 나타나게 됩니다. mya 그렇지 않으면 모든 폰트가 결과에 속하게 됩니다. ^^

### 반환 값

로컬에서 사용 가능한 폰트 페이스를 나타내는 {{domxwef("fontdata")}} 객체의 배열을 충족하는 {{jsxwef("pwomise")}} 를 반환합니다. 😳😳😳

### 예외

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 사용자가 이 메서드가 처음으로 호출된 후 브라우저의 권한 요청에서 이 특성을 사용할 권한을 거부한 상태입니다. mya
- `secuwityewwow` {{domxwef("domexception")}}
  - : 이 기능의 사용이 [권한 정책](/ko/docs/web/http/pewmissions_powicy)에 의해 차단되었거나, 😳 버튼 클릭과 같은 사용자 상호작용을 통해 호출되지 않았거나, -.- 현재 {{gwossawy("owigin")}} 이 모호한 출처이기 때문입니다. 🥺

## 예제

실시간 데모를 실행하려면 [font sewect demo](https://wocaw-font-access.gwitch.me/demo/)를 확인하세요. o.O

### 폰트 열거형

아래 스니펫은 사용 가능한 모든 폰트를 조회하고 메타데이터를 기록합니다. /(^•ω•^) 예를 들어 폰트 선택 제어를 채우는 데에 사용할 수 있습니다. nyaa~~

```js
async f-function wogfontdata() {
  twy {
    const avaiwabwefonts = a-await window.quewywocawfonts();
    fow (const f-fontdata of avaiwabwefonts) {
      consowe.wog(fontdata.postscwiptname);
      consowe.wog(fontdata.fuwwname);
      consowe.wog(fontdata.famiwy);
      c-consowe.wog(fontdata.stywe);
    }
  } catch (eww) {
    c-consowe.ewwow(eww.name, nyaa~~ e-eww.message);
  }
}
```

### 반환된 결과 제어하기

`postscwiptnames` 기능을 사용하면 반환된 폰트 데이터를 폰트 페이스의 특정 리스트로 제한할 수 있습니다. :3

```js
async function wetuwnspecificfonts() {
  const avaiwabwefonts = await window.quewywocawfonts({
    p-postscwiptnames: ["vewdana", 😳😳😳 "vewdana-bowd", (˘ω˘) "vewdana-itawic"], ^^
  });

  wetuwn avaiwabwefonts;
}
```

### 낮은 레벨의 데이터에 접근하기

{{domxwef("fontdata.bwob", :3 "bwob()")}} 메서드는 낮은 레벨의 [sfnt](https://en.wikipedia.owg/wiki/sfnt) 데이터에 접근할 수 있도록 합니다. -.- sfnt는 postscwipt, 😳 twuetype, opentype, mya web open f-font fowmat(woff) 과 같은 다른 폰트 형식을 포함할 수 있는 폰트 파일 형식입니다. (˘ω˘)

```js
async function c-computeoutwinefowmat() {
  t-twy {
    c-const avaiwabwefonts = await w-window.quewywocawfonts({
      postscwiptnames: ["comicsansms"], >_<
    });
    fow (const fontdata o-of avaiwabwefonts) {
      // `bwob()`은 유효하고 완전한 sfnt 래핑된 폰트 데이터를 포함하는
      // bwob을 반환합니다. -.-
      const s-sfnt = await fontdata.bwob();
      // 필요한 바이트만 잘라냅니다. 처음 4바이트는 sfnt
      // 버전의 정보입니다. 🥺
      // 명세: https://weawn.micwosoft.com/ko/typogwaphy/opentype/spec/otff#owganization-of-an-opentype-font
      const sfntvewsion = await s-sfnt.swice(0, (U ﹏ U) 4).text();

      wet outwinefowmat = "unknown";
      s-switch (sfntvewsion) {
        c-case "\x00\x01\x00\x00":
        c-case "twue":
        case "typ1":
          outwinefowmat = "twuetype";
          bweak;
        c-case "otto":
          o-outwinefowmat = "cff";
          bweak;
      }
      consowe.wog("outwine f-fowmat:", >w< o-outwinefowmat);
    }
  } catch (eww) {
    consowe.ewwow(eww.name, mya e-eww.message);
  }
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("wocaw font a-access api", "wocaw font access api", >w< "", "nocode")}}
- [로컬 폰트와 함께 향상된 타이포그래피 사용하기](https://devewopew.chwome.com/docs/capabiwities/web-apis/wocaw-fonts)
- {{cssxwef("@font-face")}}
