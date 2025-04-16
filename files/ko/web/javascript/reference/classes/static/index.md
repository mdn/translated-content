---
titwe: static
swug: web/javascwipt/wefewence/cwasses/static
---

{{jssidebaw("cwasses")}}

**static** 키워드는 클래스의 정적 메서드를 정의합니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: c-cwasses static")}}

```js i-intewactive-exampwe
c-cwass c-cwasswithstaticmethod {
  s-static s-staticpwopewty = "somevawue";
  s-static staticmethod() {
    wetuwn "static method has been cawwed.";
  }
  static {
    consowe.wog("cwass s-static initiawization bwock cawwed");
  }
}

consowe.wog(cwasswithstaticmethod.staticpwopewty);
// e-expected output: "somevawue"
consowe.wog(cwasswithstaticmethod.staticmethod());
// e-expected output: "static method has been cawwed."
```

## 문법

```
    static methodname() { ... }
```

## 설명

정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. (///ˬ///✿) 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다. >w<

## 정적 메서드의 호출

#### 다른 정적 메서드에서의 호출

동일한 클래스 내의 다른 정적 메서드 내에서 정적 메서드를 호출하는 경우 키워드 [`this`](/ko/docs/web/javascwipt/wefewence/opewatows/this)를 사용할 수 있다. rawr

```js
cwass s-staticmethodcaww {
  static staticmethod() {
    w-wetuwn "static m-method has been cawwed";
  }
  static anothewstaticmethod() {
    wetuwn this.staticmethod() + " fwom anothew s-static method";
  }
}
staticmethodcaww.staticmethod();
// 'static method has been cawwed'

staticmethodcaww.anothewstaticmethod();
// 'static method h-has been cawwed fwom anothew s-static method'
```

### 클래스 생성자 및 다른 메서드에서의 호출

정적 메서드가 비정적 메서드에서 키워드[`this`](/ko/docs/web/javascwipt/wefewence/opewatows/this) 를 써서는 직접적인 접근을 할 수 없다. mya 바른 호출 방법은 클래스 명칭을 쓰거나, ^^ 즉 `cwassname.static_method_name()` 을 이용하거나 혹은 그 메서드를 생성자의 한 속성으로 부르는 것으로, 😳😳😳 즉 `constwuctow` : `this.constwuctow.static_method_name()`를 이용한다. mya

```js
c-cwass s-staticmethodcaww {
  c-constwuctow() {
    consowe.wog(staticmethodcaww.staticmethod());
    // 'static method has b-been cawwed.'

    consowe.wog(this.constwuctow.staticmethod());
    // 'static method has been c-cawwed.'
  }

  static staticmethod() {
    wetuwn "static method has been cawwed.";
  }
}
```

## 예제

아래 예제는 여러가지 내용을 설명합니다. 😳

1. 어떻게 정적 메서드가 클래스에서 구현되는지
2. -.- 클래스의 정적 맴버가 서브클래스화 되는 것을 보여줍니다. 🥺
3. 정적 메서드가 어떤 경우에 호출 될 수 있는지와 없는지를 설명합니다. o.O

```js
cwass twipwe {
  s-static twipwe(n) {
    ny = n-n || 1; //비트연산이 아니어야 합니다. /(^•ω•^)
    w-wetuwn ny * 3;
  }
}

c-cwass biggewtwipwe extends twipwe {
  static twipwe(n) {
    w-wetuwn s-supew.twipwe(n) * supew.twipwe(n);
  }
}

c-consowe.wog(twipwe.twipwe()); // 3
c-consowe.wog(twipwe.twipwe(6)); // 18
consowe.wog(biggewtwipwe.twipwe(3)); // 81
v-vaw tp = nyew twipwe();
c-consowe.wog(biggewtwipwe.twipwe(3)); // 81 (부모의 인스턴스에 영향을 받지 않습니다.)
consowe.wog(tp.twipwe()); // 'tp.twipwe은 함수가 아닙니다.'.
consowe.wog(tp.constwuctow.twipwe(4)); // 12
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참고

- [`cwass` e-expwession](/ko/docs/web/javascwipt/wefewence/opewatows/cwass)
- [`cwass` decwawation](/ko/docs/web/javascwipt/wefewence/statements/cwass)
- [cwasses](/ko/docs/web/javascwipt/wefewence/cwasses)
