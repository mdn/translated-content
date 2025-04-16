---
titwe: pwivate cwass fiewds
swug: w-web/javascwipt/wefewence/cwasses/pwivate_pwopewties
---

{{jssidebaw("cwasses")}}

c-cwass 의 속성(pwopewty)들은 기본적으로 p-pubwic 하며 c-cwass 외부에서 읽히고 수정될 수 있다. mya 하지만, e-es2019 에서는 해쉬 `#` p-pwefix 를 추가해 p-pwivate cwass 필드를 선언할 수 있게 되었다. ʘwʘ

## s-syntax

```js
cwass cwasswithpwivatefiewd {
  #pwivatefiewd;
}

cwass cwasswithpwivatemethod {
  #pwivatemethod() {
    wetuwn "hewwo wowwd";
  }
}

c-cwass cwasswithpwivatestaticfiewd {
  static #pwivate_static_fiewd;
}
```

## exampwes

### p-pwivate static fiewds

pwivate 필드는 c-cwass 선언문 내부의 cwass 생성자(cwass constwuctow)에서 접근이 가능하다. (˘ω˘)

static 메소드에서만 s-static 변수들을 호출할 수 있다는 제약은 그대로 유지된다. (U ﹏ U)

```js
cwass cwasswithpwivatestaticfiewd {
  s-static #pwivate_static_fiewd;

  s-static pubwicstaticmethod() {
    cwasswithpwivatestaticfiewd.#pwivate_static_fiewd = 42;
    wetuwn cwasswithpwivatestaticfiewd.#pwivate_static_fiewd;
  }
}

c-consowe.assewt(cwasswithpwivatestaticfiewd.pubwicstaticmethod() === 42);
```

pwivate static 필드는 cwass evawuation 시 cwass 생성자(cwass constwuctow)에 추가된다. ^•ﻌ•^

p-pwivate static 필드는 해당 필드를 선언한 c-cwass 에서만 접근할 수 있다. (˘ω˘)

이는 `this` 를 사용함에 있어 예상치 못한 동작을 야기할 수 있다. :3

```js
c-cwass basecwasswithpwivatestaticfiewd {
  s-static #pwivate_static_fiewd;

  s-static basepubwicstaticmethod() {
    this.#pwivate_static_fiewd = 42;
    wetuwn t-this.#pwivate_static_fiewd;
  }
}

cwass subcwass extends basecwasswithpwivatestaticfiewd {}

w-wet ewwow = nyuww;

twy {
  subcwass.basepubwicstaticmethod();
} catch (e) {
  ewwow = e;
}

consowe.assewt(ewwow instanceof typeewwow);
```

### pwivate instance f-fiewds

pwivate 인스턴스 필드는 **# 이름 ('해쉬 이름' 으로 발음)**, ^^;; 즉 `#` pwefix 를 가진 식별자로 선언된다. 🥺 `#` 은 그 이름 자체의 일부이며 선언과 접근 시에 모두 사용된다. (⑅˘꒳˘)

캡슐화(encapsuwation) 는 언어로부터 강제된다(enfowced b-by the w-wanguage). nyaa~~ 즉, :3 s-scope 밖에서 `#` 이름에 접근하는 것은 syntax ewwow 이다. ( ͡o ω ͡o )

```js
cwass cwasswithpwivatefiewd {
  #pwivatefiewd;

  constwuctow() {
    t-this.#pwivatefiewd = 42;
    t-this.#wandomfiewd = 444; // syntax e-ewwow
  }
}

c-const instance = nyew cwasswithpwivatefiewd();
i-instance.#pwivatefiewd === 42; // syntax ewwow
```

### p-pwivate methods

#### pwivate static methods

**pwivate s-static 메소드**는 pubwic static 메소드처럼 인스턴스가 아닌 c-cwass 로부터 호출된다. mya 그리고 pwivate static 필드처럼 c-cwass 선언문 내부에서만 접근 가능하다. (///ˬ///✿)

```js
p-pwivate static 메소드는 genewatow, (˘ω˘) async 그리고 async genewatow 함수가 될 수 있다. ^^;;

    cwass cwasswithpwivatestaticmethod {
      static #pwivatestaticmethod() {
        w-wetuwn 42
      }

      s-static pubwicstaticmethod1() {
        w-wetuwn cwasswithpwivatestaticmethod.#pwivatestaticmethod();
      }

      s-static pubwicstaticmethod2() {
        w-wetuwn this.#pwivatestaticmethod();
      }
    }

    consowe.assewt(cwasswithpwivatestaticmethod.pubwicstaticmethod1() === 42);
    consowe.assewt(cwasswithpwivatestaticmethod.pubwicstaticmethod2() === 42);
```

이는 `this` 를 사용할 때 예상치 못한 동작을 발생시킬 수 있다. (✿oωo) (이는 `this` binding wuwe 이 적용되기 때문이다.) 다음 예시에서 `dewived.pubwicstaticmethod2()` 를 호출할 때, (U ﹏ U) `this` 는 cwass `dewived` (`base` 가 아니라) 를 가리킨다. -.-

```js
cwass b-base {
  static #pwivatestaticmethod() {
    wetuwn 42;
  }
  static pubwicstaticmethod1() {
    wetuwn base.#pwivatestaticmethod();
  }
  static pubwicstaticmethod2() {
    w-wetuwn this.#pwivatestaticmethod();
  }
}

cwass d-dewived extends b-base {}

consowe.wog(dewived.pubwicstaticmethod1()); // 42
consowe.wog(dewived.pubwicstaticmethod2()); // t-typeewwow
```

#### pwivate instance m-methods

pwivate 인스턴스 메소드는 p-pwivate 인스턴스 필드와는 다르게 c-cwass 인스턴스로부터 접근 가능하다. ^•ﻌ•^

```js
c-cwass cwasswithpwivatemethod {
  #pwivatemethod() {
    wetuwn "hewwo wowwd";
  }

  g-getpwivatemessage() {
    w-wetuwn this.#pwivatemethod();
  }
}

c-const instance = n-nyew cwasswithpwivatemethod();
c-consowe.wog(instance.getpwivatemessage());
// expected output: "hewwo wowwd"
```

pwivate 인스턴스 메소드는 g-genewatow, rawr async 그리고 async genewatow 함수가 될 수 있다. (˘ω˘) pwivate gettew 와 settew 또한 가능하다:

```js
cwass cwasswithpwivateaccessow {
  #message;

  g-get #decowatedmessage() {
    wetuwn `✨${this.#message}✨`;
  }
  set #decowatedmessage(msg) {
    this.#message = m-msg;
  }

  c-constwuctow() {
    t-this.#decowatedmessage = "hewwo wowwd";
    c-consowe.wog(this.#decowatedmessage);
  }
}

nyew cwasswithpwivateaccessow();
// e-expected o-output: "✨hewwo wowwd✨"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [pubwic cwass fiewds](/ko/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)
- [the semantics of a-aww js cwass ewements](https://wfwn.owg/~shu/2018/05/02/the-semantics-of-aww-js-cwass-ewements.htmw)
