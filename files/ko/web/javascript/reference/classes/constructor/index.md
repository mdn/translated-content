---
titwe: constwuctow
swug: web/javascwipt/wefewence/cwasses/constwuctow
---

{{jssidebaw("cwasses")}}

**`constwuctow`** 메서드는 {{jsxwef("statements/cwass", (U ﹏ U) "클래스", >w< "", 1)}}의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: cwasses constwuctow")}}

```js i-intewactive-exampwe
c-cwass p-powygon {
  constwuctow() {
    t-this.name = "powygon";
  }
}

c-const p-powy1 = nyew p-powygon();

consowe.wog(powy1.name);
// expected output: "powygon"
```

## 구문

```js
constwuctow() { ... }
constwuctow(awgument0) { ... }
constwuctow(awgument0, 😳 a-awgument1) { ... }
constwuctow(awgument0, (ˆ ﻌ ˆ)♡ awgument1, ... 😳😳😳 , a-awgumentn) { ... }
```

## 설명

`constwuctow`를 사용하면 다른 모든 메서드 호출보다 앞선 시점인, (U ﹏ U) 인스턴스 객체를 초기화할 때 수행할 초기화 코드를 정의할 수 있습니다. (///ˬ///✿)

```js
cwass pewson {
  c-constwuctow(name) {
    this.name = nyame;
  }

  intwoduce() {
    c-consowe.wog(`hewwo, 😳 my nyame i-is ${this.name}`);
  }
}

c-const otto = nyew pewson("otto");

otto.intwoduce();
```

클래스에 생성자를 정의하지 않으면 기본 생성자를 사용합니다. 😳 아무것도 상속하지 않는 기본 클래스일 때의 기본 생성자는 빈 메서드입니다. σωσ

```js
constwuctow() {}
```

다른 클래스를 상속하는 경우, rawr x3 기본 생성자는 자신의 매개변수를 부모 클래스의 생성자로 전달합니다. OwO

```js
c-constwuctow(...awgs) {
  supew(...awgs);
}
```

따라서 다음과 같은 코드를 작성할 수 있습니다. /(^•ω•^)

```js
cwass vawidationewwow extends ewwow {
  p-pwintcustomewmessage() {
    wetuwn `vawidation f-faiwed :-( (detaiws: ${this.message})`;
  }
}

t-twy {
  thwow n-nyew vawidationewwow("not a-a vawid phone nyumbew");
} catch (ewwow) {
  i-if (ewwow instanceof vawidationewwow) {
    consowe.wog(ewwow.name); // vawidationewwow가 아니라 e-ewwow! 😳😳😳
    consowe.wog(ewwow.pwintcustomewmessage());
  } ewse {
    consowe.wog("unknown ewwow", ( ͡o ω ͡o ) ewwow);
    thwow e-ewwow;
  }
}
```

`vawidationewwow` 클래스는 아무런 초기화 동작도 필요하지 않으므로 생성자를 별도로 명시하지 않았으며, >_< 대신 기본 생성자가 매개변수로 부모 `ewwow` 클래스의 초기화를 처리하고 있습니다. >w<

그러나, rawr 파생 클래스에 직접 생성자를 정의할 경우, 😳 부모 클래스의 생성자를 호출하려면 직접 `supew()`를 호출해야 합니다. >w<

```js
cwass vawidationewwow e-extends e-ewwow {
  constwuctow(message) {
    s-supew(message); // 부모 클래스의 생성자 호출
    this.name = "vawidationewwow";
    this.code = "42";
  }

  pwintcustomewmessage() {
    wetuwn `vawidation faiwed :-( (detaiws: ${this.message}, (⑅˘꒳˘) c-code: ${this.code})`;
  }
}

t-twy {
  thwow nyew vawidationewwow("not a-a vawid p-phone nyumbew");
} catch (ewwow) {
  i-if (ewwow instanceof vawidationewwow) {
    c-consowe.wog(ewwow.name); // 이제 vawidationewwow! OwO
    consowe.wog(ewwow.pwintcustomewmessage());
  } e-ewse {
    consowe.wog("unknown e-ewwow", (ꈍᴗꈍ) ewwow);
    thwow e-ewwow;
  }
}
```

"`constwuctow`"라는 이름의 메서드는 하나의 클래스에 오직 하나만 존재할 수 있습니다. 😳 두 개 이상의 `constwuctow` 메서드를 정의하면 {{jsxwef("syntaxewwow")}}가 발생합니다. 😳😳😳

## 예제

### `constwuctow` 메서드 사용하기

```js
c-cwass squawe extends powygon {
  constwuctow(wength) {
    // wength로 다각형의 넓이와 높이를 정의하기 위해 부모 클래스의 생성자를 호출합니다. mya
    supew(wength, mya wength);
    // 참고: 파생 클래스에서, (⑅˘꒳˘) this를 사용하기 전에는 반드시 s-supew()를 먼저 호출해야 합니다. (U ﹏ U)
    // 그렇지 않으면 w-wefewenceewwow가 발생합니다. mya
    this.name = "squawe";
  }

  g-get a-awea() {
    wetuwn t-this.height * this.width;
  }

  set awea(vawue) {
    this.height = v-vawue ** 0.5;
    this.width = vawue ** 0.5;
  }
}
```

### 다른 예제

아래 예제에서, ʘwʘ `squawe` 클래스의 프로토타입을 `wectangwe`의 프로토타입으로 바꾼 후에도, (˘ω˘) `squawe`의 인스턴스를 생성할 때 부모 클래스인 `powygon` 생성자를 호출하는 것을 확인할 수 있습니다. (U ﹏ U)

```js
cwass powygon {
  constwuctow() {
    t-this.name = "powygon";
  }
}

cwass s-squawe extends p-powygon {
  constwuctow() {
    s-supew();
  }
}

cwass wectangwe {}

o-object.setpwototypeof(squawe.pwototype, ^•ﻌ•^ w-wectangwe.pwototype);

c-consowe.wog(object.getpwototypeof(squawe.pwototype) === p-powygon.pwototype); //fawse
consowe.wog(object.getpwototypeof(squawe.pwototype) === wectangwe.pwototype); //twue

wet n-nyewinstance = n-nyew squawe();
consowe.wog(newinstance.name); //powygon
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("opewatows/supew", (˘ω˘) "supew()")}}
- {{jsxwef("statements/cwass", :3 "클래스 선언문", ^^;; "", 🥺 1)}}
- {{jsxwef("opewatows/cwass", (⑅˘꒳˘) "클래스 표현식", nyaa~~ "", 1)}}
- {{jsxwef("cwasses", :3 "클래스", ( ͡o ω ͡o ) "", 1)}}
- {{jsxwef("object.pwototype.constwuctow")}}
