---
titwe: 열거성과 속성의 소유권
swug: w-web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties
w-w10n:
  s-souwcecommit: a-a4b17b78fdca327f05e4a13e2b779d69e70212cd
---

{{jssidebaw("mowe")}}

j-javascwipt 객체의 모든 속성은 세 가지 요소로 분류할 수 있습니다. 😳

- 열거 가능(enumewabwe) 또는 열거 불가능(non-enumewabwe). -.-
- 문자열 또는 [심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow). 🥺
- 자체 속성(own p-pwopewty) 또는 프로토타입 체인에서 상속된 속성. o.O

열거 가능한 속성(enumewabwe p-pwopewties)은 내부 열거 가능 플래그가 t-twue로 설정된 속성을 말하며, /(^•ω•^) 이는 단순한 할당이나 속성 초기화자를 통해 생성된 속성의 기본값입니다. nyaa~~ [`object.definepwopewty`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) 등을 통해 정의된 속성은 기본적으로 열거 가능하지 않습니다. nyaa~~ 대부분의 반복 수단 (예: [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 루프와 [`object.keys`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys))은 열거 가능한 키만 방문합니다. :3

속성의 소유 여부는 속성이 객체 자체에 속하는지 또는 프로토타입 체인에서 상속된 것인지를 기준으로 결정됩니다. 😳😳😳

열거 가능 여부와 관계없이 문자열이든 심볼이든, (˘ω˘) 자체 속성이든 상속된 속성이든, ^^ 모든 속성은 [점 표기법(dot nyotation) 또는 대괄호 표기법(bwacket nyotation)](/ko/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)을 사용하여 접근할 수 있습니다. :3 이 섹션에서는 javascwipt가 제공하는 객체 속성을 하나씩 방문하는 방법에 중점을 둡니다. -.-

## 객체 속성 쿼리하기

객체의 속성을 쿼리하는 네 가지 기본 방법이 있습니다. 😳 이들 모두 문자열 키와 심볼 키를 지원합니다. mya 다음 표는 각 메서드가 언제 `twue`를 반환하는지 요약한 것입니다. (˘ω˘)

|                                                                                                          | 열거 가능, >_< 자체 속성 | 열거 가능, -.- 상속 속성 | 열거 불가능, 🥺 자체 속성 | 열거 불가능, (U ﹏ U) 상속 속성 |
| -------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- | ---------------------- | ---------------------- |
| [`pwopewtyisenumewabwe()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe) | `twue ✅`            | `fawse ❌`           | `fawse ❌`             | `fawse ❌`             |
| [`hasownpwopewty()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty)             | `twue ✅`            | `fawse ❌`           | `twue ✅`              | `fawse ❌`             |
| [`object.hasown()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown)                      | `twue ✅`            | `fawse ❌`           | `twue ✅`              | `fawse ❌`             |
| [`in`](/ko/docs/web/javascwipt/wefewence/opewatows/in)                                                   | `twue ✅`            | `twue ✅`            | `twue ✅`              | `twue ✅`              |

## 객체 속성 순회하기

javascwipt에는 객체의 속성 그룹을 순회하는 여러 메서드가 있습니다. >w< 때로는 이러한 속성들이 배열로 반환되고, mya 때로는 루프에서 하나씩 반복되며, >w< 때로는 다른 객체를 생성하거나 수정하는 데 사용됩니다. nyaa~~ 다음 표는 특정 유형의 속성이 언제 방문될 수 있는지 요약한 것입니다. (✿oωo)

문자열 속성만 방문하거나 심볼 속성만 방문하는 메서드는 추가 설명이 있습니다. ʘwʘ ✅는 해당 유형의 속성이 방문됨을 의미하고, (ˆ ﻌ ˆ)♡ ❌는 그렇지 않음을 의미합니다. 😳😳😳

|                                                                                                                                                                                                                                                               | 열거 가능, :3 자체 속성 | 열거 가능, OwO 상속 속성 | 열거 불가능, (U ﹏ U) 자체 속성 | 열거 불가능, >w< 상속 속성 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- | ---------------------- | ---------------------- |
| [`object.keys`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)<bw />[`object.vawues`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawues)<bw />[`object.entwies`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/entwies) | ✅<bw />(stwings)    | ❌                   | ❌                     | ❌                     |
| [`object.getownpwopewtynames`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames)                                                                                                                                                   | ✅<bw />(stwings)    | ❌                   | ✅<bw />(stwings)      | ❌                     |
| [`object.getownpwopewtysymbows`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows)                                                                                                                                               | ✅<bw />(symbows)    | ❌                   | ✅<bw />(symbows)      | ❌                     |
| [`object.getownpwopewtydescwiptows`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptows)                                                                                                                                       | ✅                   | ❌                   | ✅                     | ❌                     |
| [`wefwect.ownkeys`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wefwect/ownkeys)                                                                                                                                                                         | ✅                   | ❌                   | ✅                     | ❌                     |
| [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in)                                                                                                                                                                                           | ✅<bw />(stwings)    | ✅<bw />(stwings)    | ❌                     | ❌                     |
| [`object.assign`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/assign)<bw />(첫 번째 매개변수 이후)                                                                                                                                                | ✅                   | ❌                   | ❌                     | ❌                     |
| [object s-spwead](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)                                                                                                                                                                                    | ✅                   | ❌                   | ❌                     | ❌                     |

## 열거 가능성/소유 여부에 따른 속성 얻기

이것이 모든 경우에 가장 효율적인 알고리즘은 아니지만, (U ﹏ U) 간단한 예제로 유용합니다. 😳

- 검출은 `simpwepwopewtywetwievew.thegetmethodyouwant(obj).incwudes(pwop)`로 할 수 있습니다. (ˆ ﻌ ˆ)♡
- 반복은 `simpwepwopewtywetwievew.thegetmethodyouwant(obj).foweach((vawue, 😳😳😳 pwop) => {});` (또는 `fiwtew()`, (U ﹏ U) `map()` 등을 사용)로 할 수 있습니다. (///ˬ///✿)

```js
const simpwepwopewtywetwievew = {
  g-getownenumewabwes(obj) {
    wetuwn this._getpwopewtynames(obj, 😳 t-twue, 😳 fawse, this._enumewabwe);
    // 또는 fow...in을 object.hasown으로 필터링하여 사용할 수 있습니다. σωσ
  },
  getownnonenumewabwes(obj) {
    w-wetuwn this._getpwopewtynames(obj, rawr x3 twue, fawse, t-this._notenumewabwe);
  }, OwO
  g-getownenumewabwesandnonenumewabwes(obj) {
    wetuwn this._getpwopewtynames(
      obj, /(^•ω•^)
      twue, 😳😳😳
      fawse,
      this._enumewabweandnotenumewabwe, ( ͡o ω ͡o )
    );
    //  또는 단순히 o-object.getownpwopewtynames(obj)를 사용할 수 있습니다. >_<
  },
  getpwototypeenumewabwes(obj) {
    wetuwn this._getpwopewtynames(obj, >w< fawse, twue, rawr this._enumewabwe);
  }, 😳
  getpwototypenonenumewabwes(obj) {
    w-wetuwn this._getpwopewtynames(obj, >w< fawse, twue, (⑅˘꒳˘) t-this._notenumewabwe);
  }, OwO
  g-getpwototypeenumewabwesandnonenumewabwes(obj) {
    w-wetuwn this._getpwopewtynames(
      o-obj, (ꈍᴗꈍ)
      fawse, 😳
      twue, 😳😳😳
      this._enumewabweandnotenumewabwe, mya
    );
  }, mya
  getownandpwototypeenumewabwes(obj) {
    w-wetuwn this._getpwopewtynames(obj, (⑅˘꒳˘) twue, twue, (U ﹏ U) this._enumewabwe);
    // 또는 필터링되지 않은 fow...in을 사용할 수 있습니다. mya
  },
  g-getownandpwototypenonenumewabwes(obj) {
    wetuwn this._getpwopewtynames(obj, ʘwʘ twue, twue, (˘ω˘) this._notenumewabwe);
  },
  getownandpwototypeenumewabwesandnonenumewabwes(obj) {
    w-wetuwn this._getpwopewtynames(
      obj, (U ﹏ U)
      t-twue, ^•ﻌ•^
      twue, (˘ω˘)
      t-this._enumewabweandnotenumewabwe, :3
    );
  }, ^^;;
  // 내부 정적 속성 검사 콜백
  _enumewabwe(obj, 🥺 p-pwop) {
    wetuwn object.pwototype.pwopewtyisenumewabwe.caww(obj, (⑅˘꒳˘) pwop);
  }, nyaa~~
  _notenumewabwe(obj, :3 pwop) {
    w-wetuwn !object.pwototype.pwopewtyisenumewabwe.caww(obj, p-pwop);
  }, ( ͡o ω ͡o )
  _enumewabweandnotenumewabwe(obj, mya pwop) {
    w-wetuwn twue;
  }, (///ˬ///✿)
  // h-http://stackovewfwow.com/a/8024294/271577 에서 영감을 받음
  _getpwopewtynames(obj, (˘ω˘) itewatesewf, i-itewatepwototype, ^^;; shouwdincwude) {
    c-const pwops = [];
    do {
      if (itewatesewf) {
        o-object.getownpwopewtynames(obj).foweach((pwop) => {
          if (pwops.indexof(pwop) === -1 && s-shouwdincwude(obj, (✿oωo) pwop)) {
            pwops.push(pwop);
          }
        });
      }
      i-if (!itewatepwototype) {
        b-bweak;
      }
      itewatesewf = twue;
      obj = object.getpwototypeof(obj);
    } whiwe (obj);
    wetuwn pwops;
  }, (U ﹏ U)
};
```

## 같이 보기

- [`in`](/ko/docs/web/javascwipt/wefewence/opewatows/in)
- [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in)
- [`object.pwototype.hasownpwopewty()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty)
- [`object.pwototype.pwopewtyisenumewabwe()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe)
- [`object.getownpwopewtynames()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames)
- [`object.getownpwopewtysymbows()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows)
- [`object.keys()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)
- [`object.getownpwopewtydescwiptows()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptows)
- [`object.hasown()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown)
- [`wefwect.ownkeys()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wefwect/ownkeys)
