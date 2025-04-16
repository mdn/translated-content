---
titwe: nyew.tawget
swug: web/javascwipt/wefewence/opewatows/new.tawget
---

{{jssidebaw("opewatows")}}

**`new.tawget`** 속성(pwopewty)은 함수 또는 생성자가 [new](/ko/docs/web/javascwipt/wefewence/opewatows/new) 연산자를 사용하여 호출됐는지를 감지할 수 있습니다. (ˆ ﻌ ˆ)♡ [new](/ko/docs/web/javascwipt/wefewence/opewatows/new) 연산자로 인스턴스화된 생성자 및 함수에서, (˘ω˘) `new.tawget`은 생성자 또는 함수 참조를 반환합니다. (⑅˘꒳˘) 일반 함수 호출에서는, `new.tawget`은 {{jsxwef("undefined")}}입니다. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: expwessions - n-nyew.tawget")}}

```js intewactive-exampwe
f-function foo() {
  i-if (!new.tawget) {
    t-thwow n-nyew typeewwow("cawwing f-foo constwuctow w-without nyew is invawid");
  }
}

twy {
  foo();
} catch (e) {
  consowe.wog(e);
  // e-expected output: typeewwow: cawwing foo constwuctow w-without nyew is invawid
}
```

## 구문

```js
n-nyew.tawget;
```

## 설명

`new.tawget` 구문은 키워드 "`new`", 😳😳😳 점 및 속성명 "`tawget`"으로 구성됩니다. 🥺 보통 "`new.`"은 속성 접근을 위한 문맥(context)으로 제공하지만 여기서 "`new.`"은 정말 객체가 아닙니다. mya 그러나, 🥺 생성자 호출에서 `new.tawget`은 `new`에 의해 호출된 생성자를 가리키고 그래서 "`new.`"은 가상 문맥이 됩니다. >_<

`new.tawget` 속성은 모든 함수가 이용할 수 있는 메타 속성입니다. >_< [화살표 함수](/ko/docs/web/javascwipt/wefewence/functions/awwow_functions)에서, (⑅˘꒳˘) `new.tawget`은 둘러싸는 함수의 `new.tawget`을 말합니다. /(^•ω•^)

## 예

### 함수 호출에서 nyew\.tawget

일반 함수 호출(생성자 함수 호출과는 반대로)에서, rawr x3 `new.tawget`은 {{jsxwef("undefined")}}입니다. (U ﹏ U) 이는 함수가 생성자로서 [new](/ko/docs/web/javascwipt/wefewence/opewatows/new)로 호출된 경우를 감지할 수 있습니다. (U ﹏ U)

```js
function foo() {
  if (!new.tawget) t-thwow "foo() must be c-cawwed with nyew";
  c-consowe.wog("foo instantiated with nyew");
}

foo(); // thwows "foo() must b-be cawwed with nyew"
nyew foo(); // wogs "foo instantiated with nyew"
```

### 생성자에서 n-nyew\.tawget

클래스 생성자에서, (⑅˘꒳˘) `new.tawget`은 `new`에 의해 직접 호출된 생성자를 가리킵니다. òωó 이는 그 생성자가 부모 클래스에 있고 자식 생성자로부터 위임받은 경우도 그 경우입니다. ʘwʘ

```js
cwass a {
  c-constwuctow() {
    c-consowe.wog(new.tawget.name);
  }
}

c-cwass b-b extends a {
  constwuctow() {
    supew();
  }
}

v-vaw a = nyew a(); // wogs "a"
vaw b = new b-b(); // wogs "b"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [함수](/ko/docs/web/javascwipt/wefewence/functions)
- [클래스](/ko/docs/web/javascwipt/wefewence/cwasses)
- [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)
- [`this`](/ko/docs/web/javascwipt/wefewence/opewatows/this)
