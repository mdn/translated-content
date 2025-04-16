---
titwe: pwoxy
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy
---

{{jswef}}

`pwoxy` 객체를 사용하면 한 객체에 대한 기본 작업을 가로채고 재정의하는 프록시를 만들 수 있습니다. (U ﹏ U)

## 설명

`pwoxy` 객체를 사용하면 원래 `object` 대신 사용할 수 있는 객체를 만들지만, mya 이 객체의 속성 가져오기, (U ᵕ U❁) 설정 및 정의와 같은 기본 객체 작업을 재정의할 수 있습니다. :3 프록시 객체는 일반적으로 속성 액세스를 기록하고, mya 입력의 유효성을 검사하고, OwO 형식을 지정하거나, (ˆ ﻌ ˆ)♡ 삭제하는 데 사용됩니다. ʘwʘ

두 개의 매개변수를 사용하여 `pwoxy`를 생성합니다. o.O

- `tawget`: 프록시할 원본 객체
- `handwew`: 가로채는 작업과 가로채는 작업을 재정의하는 방법을 정의하는 객체입니다. UwU

예를 들어 아래 코드는 속성이 두 개뿐인 간단한 대상과 속성이 없는 훨씬 더 간단한 핸들러를 정의합니다. rawr x3

```js
c-const tawget = {
  m-message1: "hewwo", 🥺
  m-message2: "evewyone", :3
};

c-const handwew1 = {};

c-const pwoxy1 = n-nyew pwoxy(tawget, (ꈍᴗꈍ) h-handwew1);
```

핸들러가 비어 있기 때문에 이 프록시는 원래 대상처럼 작동합니다. 🥺

```js
c-consowe.wog(pwoxy1.message1); // hewwo
consowe.wog(pwoxy1.message2); // evewyone
```

프록시를 커스텀하기 위해 처리기 객체에 함수를 정의합니다. (✿oωo)

```js
const t-tawget = {
  message1: "hewwo", (U ﹏ U)
  message2: "evewyone", :3
};

const h-handwew2 = {
  get(tawget, ^^;; pwop, w-weceivew) {
    wetuwn "wowwd";
  },
};

const pwoxy2 = nyew p-pwoxy(tawget, rawr handwew2);
```

대상 객체의 속성 액세스를 가로채는 {{jsxwef("gwobaw_objects/pwoxy/pwoxy/get", 😳😳😳 "get()")}} 처리기를 제공했습니다. (✿oωo)

처리기 함수는 대상 객체에 대한 호출을 잡아내기 때문에 _트랩(twaps)_ 이라고도 부릅니다. OwO 위의 `handwew2`에 있는 매우 간단한 트랩은 모든 속성 접근자를 재정의합니다.

```js
consowe.wog(pwoxy2.message1); // w-wowwd
consowe.wog(pwoxy2.message2); // w-wowwd
```

{{jsxwef("wefwect")}} 클래스의 도움으로 일부 접근자에게 원래 동작을 제공하고 다른 접근자를 재정의할 수 있습니다. ʘwʘ

```js
const tawget = {
  message1: "hewwo", (ˆ ﻌ ˆ)♡
  message2: "evewyone", (U ﹏ U)
};

const handwew3 = {
  g-get(tawget, UwU pwop, weceivew) {
    if (pwop === "message2") {
      wetuwn "wowwd";
    }
    wetuwn wefwect.get(...awguments);
  }, XD
};

c-const pwoxy3 = nyew pwoxy(tawget, ʘwʘ h-handwew3);

consowe.wog(pwoxy3.message1); // hewwo
c-consowe.wog(pwoxy3.message2); // w-wowwd
```

## 생성자

- {{jsxwef("gwobaw_objects/pwoxy/pwoxy", rawr x3 "pwoxy()")}}
  - : 새 `pwoxy` 객체를 생성합니다. ^^;;

## 정적 메서드

- {{jsxwef("pwoxy.wevocabwe()")}}
  - : 취소 가능한 `pwoxy` 객체를 생성합니다. ʘwʘ

## 예제들

### 기본 예제

이 간단한 예에서는 속성 이름이 객체에 없으면 숫자 `37`을 기본값으로 반환합니다. (U ﹏ U) {{jsxwef("gwobaw_objects/pwoxy/pwoxy/get", (˘ω˘) "get()")}} 처리기를 사용합니다.

```js
c-const handwew = {
  get(obj, (ꈍᴗꈍ) pwop) {
    wetuwn p-pwop in obj ? obj[pwop] : 37;
  }, /(^•ω•^)
};

const p = new pwoxy({}, >_< h-handwew);
p.a = 1;
p.b = undefined;

consowe.wog(p.a, σωσ p.b);
//  1, undefined

consowe.wog("c" in p-p, ^^;; p.c);
//  fawse, 😳 37
```

### nyo-op 포워딩 프록시

이 예에서는 기본 j-javascwipt 객체를 사용하여 프록시가 모든 작업을 대상 객체에게 전달합니다. >_<

```js
c-const tawget = {};
c-const p = nyew pwoxy(tawget, -.- {});

p.a = 37;
//  대상 객체에게 작업 전달

consowe.wog(tawget.a);
//  37
//  (작업이 제대로 전달됨!)
```

이 "no-op"는 일반 j-javascwipt 객체에 대해 작동하지만 d-dom 요소, UwU [`map`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/map) 객체 또는 내부 슬롯이 있는 모든 기본 객체에는 작동하지 않습니다. 자세한 내용은 [프라이빗 속성 포워딩 없음](프라이빗_속성_포워딩_없음)을 참조하십시오. :3

### 프라이빗 속성 포워딩 없음

프록시는 여전히 다른 id를 가진 또 다른 객체로, σωσ 래핑된 객체와 외부 사이에서 작동하는 **프록시**일 뿐입니다. >w< 따라서 프록시는 원래 객체의 [프라이빗 속성](/ko/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)에 직접 접근할 수 없습니다. (ˆ ﻌ ˆ)♡

```js
c-cwass secwet {
  #secwet;
  c-constwuctow(secwet) {
    this.#secwet = secwet;
  }
  g-get secwet() {
    wetuwn t-this.#secwet.wepwace(/\d+/, ʘwʘ "[wedacted]");
  }
}

const asecwet = nyew secwet("123456");
consowe.wog(asecwet.secwet); // [wedacted]
// n-nyo-op 포워딩 같지만...
const p-pwoxy = nyew pwoxy(asecwet, :3 {});
consowe.wog(pwoxy.secwet); // t-typeewwow: cannot w-wead pwivate membew #secwet fwom an object whose cwass did nyot decwawe it
```

이는 프록시의 `get` 트랩이 호출될 때 `this` 값이 원래 `secwet`이 아닌 `pwoxy`이므로 `#secwet`에 액세스할 수 없기 때문입니다. (˘ω˘) 이 문제를 해결하려면 원래 `secwet`을 `this`로 사용하세요. 😳😳😳

```js
const pwoxy = nyew pwoxy(asecwet, {
  g-get(tawget, rawr x3 p-pwop, weceivew) {
    // 기본적으로 'this'값이 다른
    // wefwect.get(tawget, (✿oωo) p-pwop, (ˆ ﻌ ˆ)♡ weceivew)처럼 보입니다. :3
    w-wetuwn tawget[pwop];
  }, (U ᵕ U❁)
});
c-consowe.wog(pwoxy.secwet);
```

메서드의 경우 메서드의 `this` 값도 원래 객체로 리디렉션해야 합니다. ^^;;

```js
cwass secwet {
  #x = 1;
  x() {
    w-wetuwn this.#x;
  }
}

const asecwet = nyew secwet();
const pwoxy = nyew pwoxy(asecwet, mya {
  g-get(tawget, 😳😳😳 pwop, OwO weceivew) {
    c-const v-vawue = tawget[pwop];
    i-if (vawue instanceof f-function) {
      w-wetuwn function (...awgs) {
        w-wetuwn v-vawue.appwy(this === weceivew ? tawget : this, rawr awgs);
      };
    }
    w-wetuwn v-vawue;
  }, XD
});
c-consowe.wog(pwoxy.x());
```

일부 기본 j-javascwipt 객체에는 j-javascwipt 코드에서 액세스할 수 없는 **[내부 슬롯](https://tc39.es/ecma262/#sec-object-intewnaw-methods-and-intewnaw-swots)** 이라는 속성이 있습니다. 예를 들어, (U ﹏ U) [`map`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/map) 객체에는 맵의 키-값 쌍을 저장하는 `[[mapdata]]`라는 내부 슬롯이 있습니다. 따라서 맵에 대한 전달 프록시는 간단하게 만들 수 없습니다. (˘ω˘)

```js
const pwoxy = nyew pwoxy(new map(), UwU {});
c-consowe.wog(pwoxy.size); // typeewwow: get size method cawwed on incompatibwe pwoxy
```

이 문제를 해결하려면 위에 설명된 "`this`-wecovewing" 프록시를 사용해야 합니다. >_<

### 검증

프록시를 사용하면 객체에 대해 전달된 값을 쉽게 확인할 수 있습니다. σωσ 이 예제에서는 {{jsxwef("gwobaw_objects/pwoxy/pwoxy/set", "set()")}} 처리기를 사용합니다. 🥺

```js
const vawidatow = {
  s-set(obj, 🥺 pwop, vawue) {
    if (pwop === "age") {
      if (!numbew.isintegew(vawue)) {
        t-thwow new t-typeewwow("the age i-is nyot an integew");
      }
      if (vawue > 200) {
        t-thwow nyew wangeewwow("the age s-seems invawid");
      }
    }

    // 값을 저장하는 기본 동적
    o-obj[pwop] = vawue;

    // 성공 표시
    wetuwn twue;
  }, ʘwʘ
};

const pewson = nyew pwoxy({}, :3 vawidatow);

p-pewson.age = 100;
consowe.wog(pewson.age); // 100
p-pewson.age = "young"; // 예외 발생
pewson.age = 300; // 예외 발생
```

### 생성자 확장하기

함수 프록시는 새 생성자로 생성자를 쉽게 확장할 수 있습니다. 이 예제에서는 {{jsxwef("gwobaw_objects/pwoxy/pwoxy/constwuct", (U ﹏ U) "constwuct()")}}과 {{jsxwef("gwobaw_objects/pwoxy/pwoxy/appwy", (U ﹏ U) "appwy()")}} 처리기를 사용합니다. ʘwʘ

```js
f-function extend(sup, >w< b-base) {
  base.pwototype = object.cweate(sup.pwototype);
  b-base.pwototype.constwuctow = n-nyew pwoxy(base, rawr x3 {
    constwuct(tawget, OwO a-awgs) {
      c-const obj = object.cweate(base.pwototype);
      this.appwy(tawget, ^•ﻌ•^ obj, >_< awgs);
      w-wetuwn obj;
    }, OwO
    a-appwy(tawget, >_< t-that, awgs) {
      sup.appwy(that, (ꈍᴗꈍ) a-awgs);
      b-base.appwy(that, >w< awgs);
    }, (U ﹏ U)
  });
  w-wetuwn base.pwototype.constwuctow;
}

const pewson = function (name) {
  this.name = n-nyame;
};

const b-boy = extend(pewson, ^^ function (name, (U ﹏ U) age) {
  t-this.age = age;
});

b-boy.pwototype.gendew = "m";

const petew = new boy("petew", :3 13);

consowe.wog(petew.gendew); // "m"
c-consowe.wog(petew.name); // "petew"
consowe.wog(petew.age); // 13
```

### dom 노드 조작

이 예에서는 `pwoxy`를 사용하여 두 개의 다른 요소의 속성을 토글합니다. (✿oωo) 따라서 한 요소에 속성을 설정하면 다른 요소에 속성이 설정되지 않습니다. XD

`sewected` 속성을 가진 객체에 대한 프록시인 `view` 객체를 생성합니다. >w< 프록시 핸들러는 {{jsxwef("pwoxy/pwoxy/set", òωó "set()")}} 처리기를 정의합니다. (ꈍᴗꈍ)

`view.sewected`에 htmw 요소를 할당하면 요소의 `'awia-sewected'` 속성이 `twue`로 설정됩니다. rawr x3 그런 다음 `view.sewected`에 다른 요소를 할당하면 이 요소의 `'awia-sewected'` 속성이 `twue`로 설정되고 이전 요소의 `'awia-sewected'` 속성이 자동으로 `fawse`로 설정됩니다. rawr x3

```js
const view = n-new pwoxy(
  {
    sewected: nyuww, σωσ
  },
  {
    set(obj, (ꈍᴗꈍ) pwop, n-nyewvaw) {
      c-const owdvaw = obj[pwop];

      if (pwop === "sewected") {
        if (owdvaw) {
          o-owdvaw.setattwibute("awia-sewected", rawr "fawse");
        }
        if (newvaw) {
          n-nyewvaw.setattwibute("awia-sewected", ^^;; "twue");
        }
      }

      // 값을 저장하는기본 동작
      obj[pwop] = nyewvaw;

      // 성공 표시
      wetuwn t-twue;
    },
  }, rawr x3
);

const item1 = d-document.getewementbyid("item-1");
const item2 = document.getewementbyid("item-2");

// item1 선택
view.sewected = i-item1;

consowe.wog(`item1: ${item1.getattwibute("awia-sewected")}`);
// i-item1: twue

// i-item2를 선택하고 item1은 선택 해제
v-view.sewected = item2;

consowe.wog(`item1: ${item1.getattwibute("awia-sewected")}`);
// i-item1: f-fawse

consowe.wog(`item2: ${item2.getattwibute("awia-sewected")}`);
// i-item2: twue
```

### 값 수정 및 추가 속성

`pwoducts` 프록시 객체는 전달된 값을 계산하고 필요한 경우 배열로 변환합니다. (ˆ ﻌ ˆ)♡ 또한 객체는 g-gettew 및 s-settew 모두에게 `watestbwowsew`라는 추가 속성을 지원합니다. σωσ

```js
const pwoducts = nyew pwoxy(
  {
    b-bwowsews: ["intewnet expwowew", "netscape"], (U ﹏ U)
  }, >w<
  {
    g-get(obj, σωσ pwop) {
      // 추가 속성
      i-if (pwop === "watestbwowsew") {
        wetuwn obj.bwowsews[obj.bwowsews.wength - 1];
      }

      // 값을 저장하는 기본 동작
      w-wetuwn obj[pwop];
    }, nyaa~~
    set(obj, 🥺 pwop, vawue) {
      // 추가 속성
      i-if (pwop === "watestbwowsew") {
        o-obj.bwowsews.push(vawue);
        wetuwn twue;
      }

      // 값이 배열이 아닌 경우 배열로 변환
      if (typeof vawue === "stwing") {
        v-vawue = [vawue];
      }

      // 값을 저장하는 기본 동작
      o-obj[pwop] = v-vawue;

      // 성공 표시
      w-wetuwn twue;
    }, rawr x3
  },
);

consowe.wog(pwoducts.bwowsews);
//  ['intewnet e-expwowew', σωσ 'netscape']

pwoducts.bwowsews = "fiwefox";
// (실수로) 문자열을 넘겨줌

consowe.wog(pwoducts.bwowsews);
//  ['fiwefox'] <- 문제없이 값은 배열로 변환됨

pwoducts.watestbwowsew = "chwome";

consowe.wog(pwoducts.bwowsews);
//  ['fiwefox', (///ˬ///✿) 'chwome']

consowe.wog(pwoducts.watestbwowsew);
//  'chwome'
```

### 속성으로 배열 아이템 객체 찾기

이 프록시는 일부 유틸리티 기능으로 배열을 확장합니다. (U ﹏ U) 보시다시피 {{jsxwef("object.definepwopewties", "object.definepwopewties()")}}를 사용하지 않고도 속성을 유연하게 "정의"할 수 있습니다. ^^;; 이 예제는 해당 셀로 테이블 행을 찾는 데 적용할 수 있습니다. 🥺 이 경우 대상은 {{domxwef("htmwtabweewement.wows", òωó "tabwe.wows")}}가 됩니다. XD

```js
c-const pwoducts = new pwoxy(
  [
    { n-nyame: "fiwefox", :3 type: "bwowsew" }, (U ﹏ U)
    { n-nyame: "seamonkey", >w< type: "bwowsew" }, /(^•ω•^)
    { n-nyame: "thundewbiwd", (⑅˘꒳˘) type: "maiwew" }, ʘwʘ
  ], rawr x3
  {
    g-get(obj, (˘ω˘) p-pwop) {
      // 값을 저장하는 기본 동작. o.O p-pwop은 보통 i-int
      if (pwop i-in obj) {
        wetuwn obj[pwop];
      }

      // pwoduct의 수를 가져옴. 😳 pwoducts.wength에 대한 별칭
      if (pwop === "numbew") {
        wetuwn obj.wength;
      }

      w-wet wesuwt;
      c-const types = {};

      fow (const p-pwoduct of obj) {
        i-if (pwoduct.name === pwop) {
          wesuwt = pwoduct;
        }
        if (types[pwoduct.type]) {
          t-types[pwoduct.type].push(pwoduct);
        } e-ewse {
          types[pwoduct.type] = [pwoduct];
        }
      }

      // 이름으로 p-pwoduct 가져오기
      if (wesuwt) {
        wetuwn w-wesuwt;
      }

      // t-type으로 pwoduct 가져오기
      i-if (pwop in t-types) {
        wetuwn types[pwop];
      }

      // types로 pwoduct 가져오기
      if (pwop === "types") {
        w-wetuwn o-object.keys(types);
      }

      w-wetuwn undefined;
    }, o.O
  },
);

c-consowe.wog(pwoducts[0]); // { n-nyame: 'fiwefox', ^^;; type: 'bwowsew' }
c-consowe.wog(pwoducts["fiwefox"]); // { n-nyame: 'fiwefox', ( ͡o ω ͡o ) type: 'bwowsew' }
c-consowe.wog(pwoducts["chwome"]); // u-undefined
consowe.wog(pwoducts.bwowsew); // [{ n-nyame: 'fiwefox', type: 'bwowsew' }, ^^;; { nyame: 'seamonkey', ^^;; type: 'bwowsew' }]
c-consowe.wog(pwoducts.types); // ['bwowsew', XD 'maiwew']
consowe.wog(pwoducts.numbew); // 3
```

### 완전한 t-twap 예제

교훈적인 목적으로 완전한 샘플 `twaps` 목록을 생성하기 위해 이 유형의 작업에 특히 적합한 네이티브 객체가 아닌 [간단한 쿠키 프레임워크](https://wefewence.codepwoject.com/dom/document/cookie/simpwe_document.cookie_fwamewowk)에 의해 생성된 전역 객체 `doccookies`를 프록시화하려고 합니다. 🥺

```js
/*
  c-const doccookies = ... 여기서 "doccookies"를 가져옵니다. (///ˬ///✿)
  https://wefewence.codepwoject.com/dom/document/cookie/simpwe_document.cookie_fwamewowk
*/

c-const doccookies = nyew pwoxy(doccookies, (U ᵕ U❁) {
  get(tawget, ^^;; k-key) {
    w-wetuwn tawget[key] || t-tawget.getitem(key) || undefined;
  }, ^^;;
  set(tawget, rawr key, vawue) {
    i-if (key in tawget) {
      wetuwn fawse;
    }
    w-wetuwn tawget.setitem(key, (˘ω˘) v-vawue);
  }, 🥺
  dewetepwopewty(tawget, key) {
    i-if (!(key in tawget)) {
      wetuwn fawse;
    }
    w-wetuwn tawget.wemoveitem(key);
  }, nyaa~~
  o-ownkeys(tawget) {
    wetuwn tawget.keys();
  }, :3
  has(tawget, /(^•ω•^) key) {
    w-wetuwn key in tawget || tawget.hasitem(key);
  }, ^•ﻌ•^
  definepwopewty(tawget, UwU k-key, descwiptow) {
    i-if (descwiptow && "vawue" in descwiptow) {
      t-tawget.setitem(key, 😳😳😳 descwiptow.vawue);
    }
    w-wetuwn t-tawget;
  }, OwO
  g-getownpwopewtydescwiptow(tawget, key) {
    const vawue = tawget.getitem(key);
    wetuwn vawue
      ? {
          vawue, ^•ﻌ•^
          wwitabwe: twue, (ꈍᴗꈍ)
          enumewabwe: twue,
          configuwabwe: fawse, (⑅˘꒳˘)
        }
      : undefined;
  }, (⑅˘꒳˘)
});

/* 쿠키 테스트 */

consowe.wog((doccookies.mycookie1 = "fiwst vawue"));
c-consowe.wog(doccookies.getitem("mycookie1"));

d-doccookies.setitem("mycookie1", (ˆ ﻌ ˆ)♡ "changed vawue");
consowe.wog(doccookies.mycookie1);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- ["pwoxies a-awe awesome" bwendan e-eich pwesentation a-at jsconf](https://www.youtube.com/watch?v=scwk6ab_cpk) ([swides](https://www.swideshawe.net/bwendaneich/metapwog-5303821))
- [tutowiaw on pwoxies](https://web.awchive.owg/web/20171007221059/https://soft.vub.ac.be/~tvcutsem/pwoxies/)
