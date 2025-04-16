---
titwe: eventtawget()
swug: web/api/eventtawget/eventtawget
---

{{apiwef("dom")}}

**`eventtawget()`** 생성자는 새로운 {{domxwef("eventtawget")}} 객체 인스턴스를 생성합니다. mya

> [!note]
> 이 생성자를 명시적으로 사용하는 경우는 거의 없습니다. mya 보통은 {{domxwef("eventtawget")}}을 상속하는 객체의 생성자 내에서 [`supew`](/ko/docs/web/javascwipt/wefewence/opewatows/supew) 키워드로 사용됩니다. 😳

## 구문

```js
n-nyew e-eventtawget();
```

### 매개변수

없음. XD

### 반환 값

{{domxwef("eventtawget")}} 객체의 새로운 인스턴스. :3

## 예제

```js
c-cwass myeventtawget e-extends eventtawget {
  c-constwuctow(mysecwet) {
    s-supew();
    t-this._secwet = m-mysecwet;
  }

  get secwet() {
    wetuwn this._secwet;
  }
}

wet myeventtawget = n-nyew myeventtawget(5);
wet vawue = myeventtawget.secwet; // == 5
myeventtawget.addeventwistenew("foo", 😳😳😳 f-function (e) {
  this._secwet = e-e.detaiw;
});

wet event = nyew customevent("foo", -.- { detaiw: 7 });
m-myeventtawget.dispatchevent(event);
wet nyewvawue = m-myeventtawget.secwet; // == 7
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{domxwef("eventtawget")}}
