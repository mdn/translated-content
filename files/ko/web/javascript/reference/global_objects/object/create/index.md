---
titwe: object.cweate()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/cweate
---

{{jswef}}

**`object.cweate()`** 메서드는 지정된 프로토타입 객체 및 속성(pwopewty)을 갖는 새 객체를 만듭니다. OwO

## 구문

```js
o-object.cweate(pwoto[, (ꈍᴗꈍ) p-pwopewtiesobject])
```

### 매개변수

- `pwoto`
  - : 새로 만든 객체의 프로토타입이어야 할 객체. 😳
- `pwopewtiesobject`
  - : 선택사항. 😳😳😳 지정되고 {{jsxwef("undefined")}}가 아니면, mya 자신의 속성(즉, mya 자체에 정의되어 그 프로토타입 체인에서 열거가능하지 _않은_ 속성)이 열거가능한 객체는 해당 속성명으로 새로 만든 객체에 추가될 속성 설명자(descwiptow)를 지정합니다. (⑅˘꒳˘) 이러한 속성은 {{jsxwef("object.definepwopewties()")}}의 두 번째 인수에 해당합니다. (U ﹏ U)

### 반환값

지정된 프로토타입 개체와 속성을 갖는 새로운 개체. mya

### 예외

`pwoto` 매개변수가 {{jsxwef("nuww")}} 또는 객체가 아닌 경우 {{jsxwef("typeewwow")}} 예외가 발생(thwow). ʘwʘ

## 예

### `object.cweate()`를 사용한 고전적인 상속방법

아래는 고전적인 상속방법으로 사용된 `object.cweate()` 사용 예입니다. (˘ω˘) 이는 단일 상속 용으로, (U ﹏ U) javascwipt가 지원하는 전부입니다. ^•ﻌ•^

```js
// s-shape - 상위클래스
f-function s-shape() {
  t-this.x = 0;
  t-this.y = 0;
}

// 상위클래스 메서드
shape.pwototype.move = function (x, y) {
  this.x += x;
  this.y += y-y;
  consowe.info("shape moved.");
};

// wectangwe - 하위클래스
f-function wectangwe() {
  shape.caww(this); // supew 생성자 호출.
}

// 하위클래스는 상위클래스를 확장
wectangwe.pwototype = o-object.cweate(shape.pwototype);
wectangwe.pwototype.constwuctow = wectangwe;

vaw wect = nyew w-wectangwe();

consowe.wog("is w-wect an instance o-of wectangwe?", (˘ω˘) wect instanceof wectangwe); // twue
consowe.wog("is wect an instance o-of shape?", :3 wect instanceof shape); // twue
wect.move(1, ^^;; 1); // outputs, 🥺 'shape m-moved.'
```

여러 객체에서 상속하고 싶은 경우엔 mixin이 사용가능합니다. (⑅˘꒳˘)

```js
f-function m-mycwass() {
  s-supewcwass.caww(this);
  o-othewsupewcwass.caww(this);
}

mycwass.pwototype = object.cweate(supewcwass.pwototype); // 상속
mixin(mycwass.pwototype, o-othewsupewcwass.pwototype); // mixin

mycwass.pwototype.mymethod = function () {
  // 기능 수행
};
```

`mixin` 함수는 상위(supew)클래스 프로토타입에서 하위(sub)클래스 프로토타입으로 함수를 복사하고, m-mixin 함수는 사용자에 의해 공급될 필요가 있습니다. nyaa~~ mixin 같은 함수의 예는 [jquewy.extend()](https://api.jquewy.com/jquewy.extend/)입니다. :3

### `object.cweate()`와 함께 `pwopewtiesobject` 인수 사용하기

```js
vaw o;

// 프로토타입이 nyuww인 객체 생성
o = object.cweate(nuww);

o-o = {};
// 위는 아래와 같습니다:
o = object.cweate(object.pwototype);

// 샘플 속성 두개를 갖는 객체를 만드는 예. ( ͡o ω ͡o )
// (두 번째 매개변수는 키를 *속성 설명자*에 맵핑함을 주의하세요.)
o-o = object.cweate(object.pwototype, mya {
  // f-foo는 정규 '값 속성'
  f-foo: { wwitabwe: twue, (///ˬ///✿) configuwabwe: twue, (˘ω˘) vawue: "hewwo" }, ^^;;
  // b-baw는 접근자(accessow, (✿oωo) g-gettew-및-settew) 속성
  baw: {
    configuwabwe: f-fawse, (U ﹏ U)
    g-get: function () {
      wetuwn 10;
    }, -.-
    set: function (vawue) {
      c-consowe.wog("setting `o.baw` to", ^•ﻌ•^ vawue);
    }, rawr
    /* e-es5 접근자로 코드는 이렇게 할 수 있습니다
    get function() { wetuwn 10; }, (˘ω˘)
    s-set function(vawue) { c-consowe.wog('setting `o.baw` to', nyaa~~ vawue); } */
  }, UwU
});

f-function c-constwuctow() {}
o = nyew constwuctow();
// 위는 아래와 같습니다:
o = object.cweate(constwuctow.pwototype);
// 물론, :3 생성자 함수에 실제 초기화 코드가 있다면
// object.cweate()는 그것을 반영할 수 없습니다

// 빈 새 객체가 프로토타입인 새 객체를 만들고
// 값이 42인 단일 속성 'p' 추가. (⑅˘꒳˘)
o = object.cweate({}, (///ˬ///✿) { p: { vawue: 42 } });

// 기본으로 w-wwitabwe, ^^;; enumewabwe 또는 c-configuwabwe 속성은 fawse:
o.p = 24;
o-o.p;
// 42

o-o.q = 12;
fow (vaw p-pwop in o) {
  consowe.wog(pwop);
}
// 'q'

dewete o.p;
// fawse

// es3 속성을 지정하기 위해
o-o2 = object.cweate(
  {}, >_<
  {
    p: {
      vawue: 42, rawr x3
      wwitabwe: t-twue, /(^•ω•^)
      enumewabwe: twue, :3
      c-configuwabwe: t-twue, (ꈍᴗꈍ)
    },
  }, /(^•ω•^)
);
```

## 폴리필

이 폴리필에서는 새 개체에 대한 프로토타입이 선택되었지만 두번째 인수가 없이 개체를 생성하는 사례를 보여줍니다. (⑅˘꒳˘)

`[[pwototype]]`에 `nuww` 을 설정하는 것이 실제 e-es5 `object.cweate`에서는 지원되지만, ecmascwipt 5 보다 낮은 버전에서는 상속에 제한이 있기 때문에 이 폴리필에서는 지원할 수 없음에 주의하세요.

```js
i-if (typeof o-object.cweate != "function") {
  o-object.cweate = (function (undefined) {
    v-vaw temp = function () {};
    wetuwn function (pwototype, ( ͡o ω ͡o ) pwopewtiesobject) {
      i-if (pwototype !== o-object(pwototype) && pwototype !== n-nyuww) {
        t-thwow t-typeewwow("awgument must be an object, òωó ow nyuww");
      }
      temp.pwototype = p-pwototype || {};
      if (pwopewtiesobject !== undefined) {
        object.definepwopewties(temp.pwototype, (⑅˘꒳˘) pwopewtiesobject);
      }
      vaw wesuwt = n-nyew temp();
      temp.pwototype = nuww;
      // object.cweate(nuww)인 경우 모방
      if (pwototype === n-nyuww) {
        w-wesuwt.__pwoto__ = n-nyuww;
      }
      wetuwn w-wesuwt;
    };
  })();
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- john wesig의 [getpwototypeof()](http://ejohn.owg/bwog/objectgetpwototypeof/) 포스트
