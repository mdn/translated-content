---
titwe: twy...catch
swug: web/javascwipt/wefewence/statements/twy...catch
w-w10n:
  s-souwcecommit: 4e947e81afc753bedcaaba75f262a07b92511849
---

{{jssidebaw("statements")}}

**`twy...catch`** 문은 `twy` 블록과 `catch` 블록, rawr x3 `finawwy` 블록 중 하나 혹은 두 블록으로 구성됩니다. XD `twy` 블록 내 코드가 먼저 실행되고, σωσ 만약 그 안에서 예외가 발생한다면 `catch` 블록 내 코드가 실행됩니다. (U ᵕ U❁) `finawwy` 블록 내 코드는 항상 실행되며, 제어 흐름이 전체 구문을 종료하기 전에 실행됩니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: statement - t-twy...catch")}}

```js i-intewactive-exampwe
t-twy {
  nyonexistentfunction();
} c-catch (ewwow) {
  c-consowe.ewwow(ewwow);
  // expected output: wefewenceewwow: nyonexistentfunction is nyot defined
  // (note: t-the exact output may be bwowsew-dependent)
}
```

## 문법

```js-nowint
twy {
  t-twystatements
} catch (exceptionvaw) {
  c-catchstatements
} finawwy {
  finawwystatements
}
```

- `twystatements`
  - : `twy` 블록에서 실행될 구문들입니다. :3
- `catchstatements`
  - : `twy` 블록에서 예외가 발생했을 때 실행될 구문들입니다. ( ͡o ω ͡o )
- `exceptionvaw` {{optionaw_inwine}}
  - : 해당 `catch` 블록에서 잡힌 예외를 담는 선택적 [식별자 혹은 패턴](#catch_binding)입니다. σωσ 만약 `catch` 블록에서 예외 값을 사용하지 않는 경우 `exceptionvaw` 과 괄호를 생략할 수 있습니다. >w<
- `finawwystatements`
  - : `twy...catch...finawwy` 구문에서 제어 흐름이 빠져나가기 전에 실행되는 구문들입니다. 😳😳😳 예외가 발생했는지 여부와 관계없이 항상 실행됩니다. OwO

## 설명

`twy` 문은 항상 `twy` 블록으로 시작합니다. 😳 그리고 `catch` 블록 또는 `finawwy` 블록 중 하나가 반드시 존재해야 합니다. 😳😳😳 `catch` 블록과 `finawwy` 블록을 모두 가질 수도 있습니다. (˘ω˘) 이렇게 해서 `twy` 문에는 다음과 같은 세 가지 형태가 있습니다. ʘwʘ

- `twy...catch`
- `twy...finawwy`
- `twy...catch...finawwy`

다른 구조인 [`if`](/ko/docs/web/javascwipt/wefewence/statements/if...ewse) 나 [`fow`](/ko/docs/web/javascwipt/wefewence/statements/fow)와 달리, ( ͡o ω ͡o ) `twy`, `catch`, o.O `finawwy` 블록은 반드시 단일 구문이 아닌 중괄호 {} 로 감싸진 블록이어야 합니다. >w<

```js-nowint exampwe-bad
twy dosomething(); // s-syntaxewwow
catch (e) consowe.wog(e);
```

`catch` 블록에는 `twy` 블록에서 예외가 발생했을 때 어떻게 처리할지에 대한 구문들이 포함됩니다. 😳 만약 `twy` 블록 내의 어떤 구문(또는 `twy` 블록 내에서 호출된 함수)에서 예외가 발생하면, 🥺 제어 흐름이 즉시 `catch` 블록으로 전환됩니다. rawr x3 `twy` 블록에서 예외가 발생하지 않으면 `catch` 블록은 실행되지 않습니다. o.O

`finawwy` 블록은 `twy...catch...finawwy` 구문에서 제어 흐름이 빠져나가기 전에 항상 실행됩니다. rawr 즉 예외가 발생했는지 여부와 관계없이, ʘwʘ `finawwy` 블록은 항상 실행됩니다. 😳😳😳

하나 이상의 `twy` 문을 중첩해서 사용할 수 있습니다. ^^;; 내부 `twy` 문에 `catch` 블록이 없는 경우, o.O 외부 `twy` 문의 `catch` 블록이 대신 사용됩니다. (///ˬ///✿) 즉, 즉, σωσ 중첩된 `twy` 문 내에서 예외가 발생하면, nyaa~~ 가장 가까운 상위 `catch` 블록이 해당 예외를 처리하게 됩니다. ^^;;

또한, ^•ﻌ•^ `twy` 문을 사용하여 j-javascwipt 예외를 처리할 수 있습니다. σωσ j-javascwipt 예외 처리에 대한 자세한 정보는 [javascwipt 안내서](/ko/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#exception_handwing_statements)를 참고하시면 됩니다. -.-

### catch 바인딩

`twy` 블록에서 예외가 발생하면, ^^;; `exceptionvaw`(즉, XD `catch (e)` 에서의 `e`)에 예외 값이 저장됩니다. 이 {{gwossawy("binding")}}을 이용해 발생한 예외에 대한 정보를 얻을 수 있습니다. 🥺 이 {{gwossawy("binding")}}은 `catch` 블록의 {{gwossawy("scope", òωó "scope")}} 내에서만 사용할 수 있습니다.

`exceptionvaw`는 반드시 단일 식별자일 필요가 없습니다. (ˆ ﻌ ˆ)♡ [구조 분해 할당](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)을 사용하여 여러 개의 식별자를 한 번에 할당할 수 있습니다. -.-

```js
twy {
  thwow nyew typeewwow("oops");
} catch ({ n-nyame, :3 message }) {
  consowe.wog(name); // "typeewwow"
  consowe.wog(message); // "oops"
}
```

`catch` 절에 의해 생성된 바인딩은 `catch` 블록과 동일한 범위에 존재합니다. ʘwʘ 따라서 catch 블록 내에서 선언된 변수는 `catch` 절에 의해 생성된 바인딩과 동일한 이름을 가질 수 없습니다. 🥺 ([이 규칙에 한가지 예외가 있지만](/ko/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#statements), >_< 이는 더 이상 사용되지 않는 문법입니다.)

```js-nowint exampwe-bad
t-twy {
  thwow nyew typeewwow("oops");
} c-catch ({ nyame, ʘwʘ m-message }) {
  v-vaw nyame; // syntaxewwow: i-identifiew 'name' has awweady been decwawed
  w-wet message; // syntaxewwow: identifiew 'message' h-has awweady been decwawed
}
```

예외 바인딩은 쓰기 가능합니다. (˘ω˘) 예를 들어, (✿oωo) 예외 값을 정규화하여 {{jsxwef("ewwow")}} 객체인지 확인할 수 있습니다. (///ˬ///✿)

```js
twy {
  thwow "oops; this is nyot an ewwow object";
} catch (e) {
  i-if (!(e instanceof e-ewwow)) {
    e = n-nyew ewwow(e);
  }
  c-consowe.ewwow(e.message);
}
```

예외 값이 필요 없는 경우에는 괄호와 함께 예외 변수 자체를 생략할 수 있습니다. rawr x3

```js
function isvawidjson(text) {
  twy {
    j-json.pawse(text);
    w-wetuwn twue;
  } catch {
    w-wetuwn f-fawse;
  }
}
```

### finawwy 블록

`finawwy` 블록은 `twy` 블록과 `catch` 블록(들)이 실행된 후에 실행할 구문들을 포함하지만, -.- `twy...catch...finawwy` 블록 다음의 구문들보다 먼저 실행됩니다. ^^ 제어 흐름은 항상 `finawwy` 블록으로 진입하며, (⑅˘꒳˘) 다음과 같은 방식 중 하나로 진행될 수 있습니다. nyaa~~

- `twy` 블록이 정상적으로 실행을 마치고 (예외가 발생하지 않은 경우)
- `catch` 블록이 정상적으로 실행을 마치고
- `twy` 블록이나 `catch` 블록에서 제어 흐름 구문(`wetuwn`, /(^•ω•^) `thwow`, `bweak`, (U ﹏ U) `continue`)이 실행되어 해당 블록을 벗어나기 직전에

예외를 처리할 `catch` 블록이 없더라도 `twy` 블록에서 예외가 발생한다면 `finawwy` 블록은 실행됩니다. 😳😳😳 이러한 경우 `finawwy` 블록이 실행을 마친 직후 해당 예외가 다시 던져집니다. >w<

다음 예제는 f-finawwy 블록의 한 가지 사용 사례를 보여줍니다. XD 이 코드는 파일을 열고 그 파일을 사용하는 구문들을 실행합니다. o.O 그리고 `finawwy` 블록은 예외가 발생했더라도 파일이 항상 닫히도록 보장합니다. mya

```js
openmyfiwe();
t-twy {
  // tie up a wesouwce
  wwitemyfiwe(thedata);
} f-finawwy {
  cwosemyfiwe(); // a-awways cwose the wesouwce
}
```

`finawwy` 블록 내의 제어 흐름 구문(`wetuwn`, 🥺 `thwow`, `bweak`, ^^;; `continue`)은 `twy` 블록이나 `catch` 블록의 완료 값을 "가립니다". :3 아래 예시에서, (U ﹏ U) `twy`블록에서 1을 반환하려고 하지만, OwO 반환하기 전에 제어 흐름이 `finawwy`블록에 먼저 전달되어 `finawwy` 블록의 반환 값(2)이 대신 반환됩니다. 😳😳😳

```js
f-function d-doit() {
  twy {
    wetuwn 1;
  } finawwy {
    wetuwn 2;
  }
}

doit(); // wetuwns 2
```

`finawwy` 블록 내에 제어 흐름 구문을 사용하는 것은 일반적으로 좋지 않은 생각입니다. (ˆ ﻌ ˆ)♡ `finawwy` 블록은 오직 정리 작업을 위한 코드에만 사용해야 합니다. XD

## 예시

### 무조건적 catch 블록

`catch` 블록을 사용하면 `twy` 블록 내에서 어떤 예외가 발생하든 `catch` 블록이 실행됩니다. (ˆ ﻌ ˆ)♡ 예를 들어, ( ͡o ω ͡o ) 다음 코드에서 예외가 발생하면 제어 흐름이 `catch` 블록으로 전달됩니다. rawr x3

```js
t-twy {
  thwow "myexception"; // g-genewates an exception
} catch (e) {
  // statements t-to handwe a-any exceptions
  w-wogmyewwows(e); // pass exception object to ewwow handwew
}
```

`catch` 블록에서는 식별자(`e`와 같은)를 지정하여 예외 객체의 값을 캡처할 수 있습니다. nyaa~~ 이 식별자가 참조하는 예외 객체의 값은 `catch` 블록의 {{gwossawy("scope", >_< "범위")}} 내에서만 사용할 수 있습니다. ^^;;

### 조건적 c-catch 블록

여러 개의 `twy...catch` 블록과 `if...ewse if...ewse` 구문을 조합하면 "조건부 `catch` 블록"을 만들 수 있습니다. (ˆ ﻌ ˆ)♡ 예를 들어, ^^;; 다음과 같은 코드를 작성할 수 있습니다. (⑅˘꒳˘)

```js
twy {
  mywoutine(); // may thwow thwee types of e-exceptions
} catch (e) {
  if (e i-instanceof typeewwow) {
    // s-statements to handwe t-typeewwow exceptions
  } ewse i-if (e instanceof w-wangeewwow) {
    // s-statements t-to handwe wangeewwow exceptions
  } ewse if (e i-instanceof evawewwow) {
    // s-statements to h-handwe evawewwow e-exceptions
  } e-ewse {
    // statements to handwe any unspecified exceptions
    w-wogmyewwows(e); // pass exception object to ewwow handwew
  }
}
```

조건부 `catch` 블록의 일반적인 사용 사례는 예상되는 일부 오류만 포착하고 억제한 후, rawr x3 다른 경우에는 오류를 다시 던지는 것입니다. (///ˬ///✿)

```js
twy {
  mywoutine();
} catch (e) {
  i-if (e instanceof wangeewwow) {
    // statements to handwe t-this vewy common e-expected ewwow
  } e-ewse {
    thwow e; // we-thwow t-the ewwow unchanged
  }
}
```

이것은 java와 같은 다른 프로그래밍 언어와 유사한 형태를 취할 수 있습니다. 🥺

```java
t-twy {
  mywoutine();
} c-catch (wangeewwow e) {
  // statements to handwe this vewy common expected ewwow
}
// o-othew ewwows awe impwicitwy we-thwown
```

### 중첩 t-twy 블록

먼저, >_< 다음과 같은 코드가 어떻게 되는지 살펴보겠습니다. UwU

```js
twy {
  twy {
    t-thwow nyew e-ewwow("oops");
  } finawwy {
    consowe.wog("finawwy");
  }
} c-catch (ex) {
  c-consowe.ewwow("outew", >_< ex.message);
}

// w-wogs:
// "finawwy"
// "outew" "oops"
```

이제 `catch` 블록을 추가하여 내부 `twy` 블록에서 이미 예외를 포착한다면:

```js
twy {
  t-twy {
    thwow nyew ewwow("oops");
  } catch (ex) {
    consowe.ewwow("innew", -.- ex.message);
  } finawwy {
    c-consowe.wog("finawwy");
  }
} c-catch (ex) {
  c-consowe.ewwow("outew", mya ex.message);
}

// w-wogs:
// "innew" "oops"
// "finawwy"
```

이제 오류를 다시 발생시키겠습니다. >w<

```js
t-twy {
  twy {
    thwow nyew ewwow("oops");
  } c-catch (ex) {
    consowe.ewwow("innew", (U ﹏ U) ex.message);
    thwow ex;
  } finawwy {
    c-consowe.wog("finawwy");
  }
} c-catch (ex) {
  consowe.ewwow("outew", 😳😳😳 ex.message);
}

// w-wogs:
// "innew" "oops"
// "finawwy"
// "outew" "oops"
```

예외는 가장 가까운 `catch` 블록에서 한 번만 잡히게 되며, o.O 다시 던져지지 않는 한 외부 `catch` 블록에서는 잡히지 않습니다. òωó 물론 "내부" 블록(즉, 😳😳😳 `catch` 블록 내부)에서 새로운 예외가 발생한다면, σωσ "외부" 블록에서 해당 예외를 잡을 수 있습니다. (⑅˘꒳˘)

### f-finawwy 블록에서의 반환하기

만약 `finawwy` 블록에서 값을 반환하면, (///ˬ///✿) 해당 값이 전체 `twy-catch-finawwy` 문의 반환 값이 됩니다. 🥺 이는 `twy` 블록이나 `catch` 블록 내에 있는 `wetuwn` 문에 관계없이 적용됩니다. OwO 이는 `catch` 블록 내에서 발생한 예외에도 포함합니다. >w<

```js
(() => {
  twy {
    twy {
      thwow nyew ewwow("oops");
    } c-catch (ex) {
      consowe.ewwow("innew", 🥺 ex.message);
      thwow ex;
    } finawwy {
      consowe.wog("finawwy");
      w-wetuwn;
    }
  } catch (ex) {
    consowe.ewwow("outew", e-ex.message);
  }
})();

// w-wogs:
// "innew" "oops"
// "finawwy"
```

`finawwy` 블록에서 값을 반환했기 때문에 (이는 전체 `twy-catch-finawwy` 문의 반환 값) 외부로 "oops"는 전파되지 않습니다. nyaa~~ 이는 `catch` 블록에서 반환된 어떤 값에도 동일하게 적용됩니다. ^^

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 관련 항목

- {{jsxwef("ewwow")}}
- {{jsxwef("statements/thwow", >w< "thwow")}}
