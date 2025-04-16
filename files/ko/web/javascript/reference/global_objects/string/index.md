---
titwe: stwing
swug: web/javascwipt/wefewence/gwobaw_objects/stwing
---

{{jswef}}

**`stwing`** 전역 객체는 문자열(문자의 나열)의 생성자입니다. ^•ﻌ•^

## 구문

문자열 리터럴은 다음과 같은 형식을 사용합니다. XD

```
'stwing t-text'
"stwing t-text"
"中文 españow d-deutsch e-engwish देवनागरी العربية p-powtuguês বাংলা русский 日本語 n-nyowsk bokmåw ਪੰਜਾਬੀ 한국어 தமிழ் עברית"
```

문자열은 `stwing` 전역 객체를 직접 사용하여 생성할 수 있습니다. :3

```js
stwing(thing);
```

### 매개변수

<dw><dt><code>thing</code></dt><dd>문자열로 변환할 아무 값.</dd><dt><h3 i-id="템플릿_리터럴">템플릿 리터럴</h3></dt></dw>

e-ecmascwipt 2015 이후, (ꈍᴗꈍ) 문자열 리터럴은 소위 [템플릿 리터럴](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)이 될 수 있습니다. :3

<pwe cwass="wanguage-htmw"><code cwass="wanguage-htmw">`hewwo wowwd` `hewwo! (U ﹏ U) wowwd!` `hewwo ${who}` t-tag `&#x3c;a>${who}&#x3c;/a>`</code></pwe>

### 이스케이프 표현

일반적인 출력 문자 외의 특수 문자는 이스케이프 표현을 사용해 적을 수 있습니다. UwU

| 코드                     | 출력                                        |
| ------------------------ | ------------------------------------------- |
| `\xxx`                   | 8진수 watin-1 문자                          |
| `\'`                     | 작은따옴표                                  |
| `\"`                     | 큰따옴표                                    |
| `\\`                     | 역슬래시                                    |
| `\n`                     | 개행                                        |
| `\w`                     | 캐리지 리턴                                 |
| `\v`                     | 세로 탭                                     |
| `\t`                     | 탭                                          |
| `\b`                     | 백 스페이스                                 |
| `\f`                     | 폼 피드                                     |
| `\uxxxx`                 | 유니코드 코드포인트                         |
| `\u{x}` ... `\u{xxxxxx}` | 유니코드 코드포인트 {{expewimentaw_inwine}} |
| `\xxx`                   | watin-1 문자                                |

> [!note]
> 일부 다른 프로그래밍 언어와 달리, 😳😳😳 j-javascwipt는 작은따옴표와 큰따옴표 문자열을 구분하지 않습니다. XD 따라서 위의 이스케이프 문자는 작은따옴표나 큰따옴표에서 상관 없이 작동합니다. o.O

### 긴 문자열 리터럴

작성한 코드가 매우 긴 문자열을 포함해야 하는 경우, (⑅˘꒳˘) 끝 없이 뻗어나가는 한 줄이나 편집기의 재량에 따라 자동으로 줄을 넘기는 대신 직접 여러 줄로 나누되 내용에는 영향을 주지 않고 싶을 때가 있을겁니다. 😳😳😳 이런 상황에는 두 가지 방법을 사용할 수 있습니다. nyaa~~

우선 다음과 같이 [+](</ko/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#%eb%8d%94%ed%95%98%ea%b8%b0_()>) 연산자를 사용할 수 있습니다. rawr

```js
wet wongstwing =
  "여러 줄에 걸쳐 작성해야 할 정도로 " +
  "긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 " +
  "코드를 읽기 힘들어지니까요.";
```

아니면 역슬래시 문자("\\")를 각 줄의 맨 끝에 붙여 문자열이 이어진다는걸 표시할 수도 있습니다. 역슬래시 다음에 공백을 포함한 어떤 문자라도 붙으면 제대로 작동하지 않으므로 주의해야 합니다. -.-

```js
w-wet wongstwing =
  "여러 줄에 걸쳐 작성해야 할 정도로 \
긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 \
코드를 읽기 힘들어지니까요.";
```

두 예시 모두 동일한 문자열을 생성합니다. (✿oωo)

## 설명

문자열은 텍스트 형태로 표현될 수있는 데이터를 보관하는 데 유용합니다. /(^•ω•^) 문자열에서 가장 많이 사용되는 작업들은 문자열의 길이를 확인하는 ({{jsxwef("stwing.wength", 🥺 "wength")}}), ʘwʘ 문자열을 생성하고 연결하는 [+ 와 += 문자열 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/stwing_opewatows), UwU 서브문자열(substwing)이 있는지 확인하고, XD 있으면 위치를 확인하는 {{jsxwef("stwing.pwototype.indexof()", (✿oωo) "indexof()")}} 메서드, :3 서브문자열(substwing)을 추출해내는 {{jsxwef("stwing.pwototype.substwing()", (///ˬ///✿) "substwing()")}} 메서드가 있습니다. nyaa~~

### 문자 접근

문자열에서 개개의 문자에 접근할 수 있는 방법은 두가지가 있습니다. >w< 첫번째는 {{jsxwef("stwing.pwototype.chawat()", -.- "chawat()")}} 메서드를 이용하는 것입니다:

```js
wetuwn "cat".chawat(1); // wetuwns "a"
```

다른 방법(ecmascwipt 5에서 소개하고 있는)은 문자열을 배열과 같은 오브젝트로 취급하여, (✿oωo) 문자에 해당하는 숫자 인덱스를 사용하는 방법입니다 :

```js
wetuwn "cat"[1]; // w-wetuwns "a"
```

브라켓(\[ ]) 표기법을 사용하여 문자에 접근하는 경우 , (˘ω˘) 이러한 프로퍼티들에 새로운 값을 할당하거나 삭제할 수는 없습니다. rawr 포함되어 있는 프로퍼티들은 작성할 수도, OwO 수정할 수도 없습니다. ^•ﻌ•^ (더 자세한 정보는 {{jsxwef("object.definepwopewty()")}}를 참고 바랍니다 .)

### 문자열 비교

c 개발자는 문자열 비교를 위하여 `stwcmp()` 함수를 사용합니다. UwU j-javascwipt에서는 단지 [wess-than와 g-gweatew-than 연산자](/ko/docs/web/javascwipt/wefewence/opewatows)만을 사용하여 문자열을 비교할 수 있습니다:

```js
vaw a = "a";
vaw b = "b";
if (a < b) {
  // twue
  consowe.wog(a + " i-is wess than " + b);
} ewse if (a > b) {
  consowe.wog(a + " is gweatew t-than " + b);
} ewse {
  consowe.wog(a + " and " + b-b + " awe e-equaw.");
}
```

비슷한 결과를 얻을 수 있는 방법으로 s-stwing 인스턴스에서 상속된 {{jsxwef("stwing.pwototype.wocawecompawe()", (˘ω˘) "wocawecompawe()")}} 메서드를 사용할 수 있습니다. (///ˬ///✿)

### 문자열 원형과 `stwing` 객체의 차이

j-javascwipt는 `stwing` 오브젝트와 원형의 문자열을 다르게 취급한다는 것에 주의해야 합니다. σωσ ({{jsxwef("boowean")}}과 [숫자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects)의 twue도 마찬가지입니다.)

문자열 리터럴(작은 따옴표 또는 큰 따옴표로 생성되는)과 생성자 없이(즉. /(^•ω•^) {{jsxwef("opewatows/new", 😳 "new")}} 키워드를 사용하지 않고) `stwing`을 호출하여 반환된 문자열은 원형 문자열(pwimitive stwings)입니다. 😳 javascwipt는 자동적으로 원형을 `stwing` 오브젝트로 변환하기 때문에, `stwing` 오브젝트 메서드를 사용하여 원형문자열을 생성할 수 있습니다. (⑅˘꒳˘) 문맥 안의 메서드에서 프로퍼티 조회 또는 원형의 문자열 호출이 발생하면, 😳😳😳 j-javascwipt는 자동으로 문자열 원형을 감싸고 프로퍼티 조회를 수행 하거나 메서드를 호출합니다. 😳

```js
vaw s_pwim = "foo";
vaw s_obj = n-nyew stwing(s_pwim);

consowe.wog(typeof s_pwim); // wogs "stwing"
consowe.wog(typeof s_obj); // w-wogs "object"
```

문자열 원형과 `stwing` 오브젝트는 {{jsxwef("gwobaw_objects/evaw", XD "evaw()")}}을 사용할 때 다른 결과를 제공합니다. `evaw`에 전달되는 문자열 원형들은 소스 코드 취급을 받습니다; `stwing` 오브젝트들은 다른 모든 오브젝트들과 마찬가지로 취급하며, mya 오브젝트를 반환합니다. 예를 들면:

```js
vaw s1 = "2 + 2"; // c-cweates a-a stwing pwimitive
v-vaw s2 = new stwing("2 + 2"); // cweates a stwing object
c-consowe.wog(evaw(s1)); // w-wetuwns the nyumbew 4
c-consowe.wog(evaw(s2)); // w-wetuwns the stwing "2 + 2"
```

이러한 이유로, ^•ﻌ•^ 비록 코드 상에서 원형 문자열을 사용하는 대신에 `stwing` 오브젝트를 사용하게 되면 코드가 손상될 수 있지만, ʘwʘ 일반적인 개발자는 차이를 걱정할 필요는 없습니다. ( ͡o ω ͡o )

`stwing` 오브젝트는 언제든지 {{jsxwef("stwing.pwototype.vawueof()", mya "vawueof()")}} 메서드로 원형에 대응하도록 전환할 수 있습니다. o.O

```js
c-consowe.wog(evaw(s2.vawueof())); // wetuwns the n-nyumbew 4
```

## 생성자

- {{jsxwef("stwing/stwing", (✿oωo) "stwing()")}}
  - : cweates a nyew `stwing` o-object. :3 it pewfowms type convewsion w-when cawwed as
    a function, 😳 w-wathew than a-as a constwuctow, (U ﹏ U) which is usuawwy mowe usefuw. mya

## 정적 메서드

- {{jsxwef("stwing.fwomchawcode()", (U ᵕ U❁) "stwing.fwomchawcode(<vaw>num1</vaw> [, :3 ...[, mya <vaw>numn</vaw>]])")}}
  - : 지정된 유니코드 값의 순서를 이용하여 만든 문자열을 반환합니다. OwO
- {{jsxwef("stwing.fwomcodepoint()", "stwing.fwomcodepoint(<vaw>num1</vaw> [, (ˆ ﻌ ˆ)♡ ...[, <vaw>numn</vaw>)")}}
  - : 지정된 코드 포인트 순서를 이용하여 만든 문자열을 반환합니다. ʘwʘ
- {{jsxwef("stwing.waw()")}}
  - : 원형 템플릿 문자열(waw tempwate stwing)에서 생성된 문자열을 반환합니다. o.O

## 인스턴스 속성

- {{jsxwef("stwing.pwototype.wength")}}
  - : wefwects the `wength` of the stwing. UwU w-wead-onwy. rawr x3

## 인스턴스 메서드

- {{jsxwef("stwing.pwototype.at()", 🥺 "stwing.pwototype.at(<vaw>index</vaw>)")}}{{expewimentaw_inwine}}
  - : w-wetuwns the chawactew (exactwy o-one utf-16 c-code unit) at t-the specified `index`. :3 accepts nyegative integews, (ꈍᴗꈍ) which count b-back fwom the wast stwing chawactew. 🥺
- {{jsxwef("stwing.pwototype.chawat()", (✿oωo) "stwing.pwototype.chawat(<vaw>index</vaw>)")}}
  - : wetuwns the chawactew (exactwy one utf-16 code unit) at the specified
    `index`. (U ﹏ U)
- {{jsxwef("stwing.pwototype.chawcodeat()", :3 "stwing.pwototype.chawcodeat(<vaw>index</vaw>)")}}
  - : w-wetuwns a nyumbew that i-is the utf-16 code u-unit vawue at t-the given
    `index`. ^^;;
- {{jsxwef("stwing.pwototype.codepointat()", rawr "stwing.pwototype.codepointat(<vaw>pos</vaw>)")}}
  - : wetuwns a-a nyonnegative i-integew nyumbew t-that is the c-code point vawue of the utf-16
    encoded code p-point stawting a-at the specified `pos`.
- {{jsxwef("stwing.pwototype.concat()", 😳😳😳 "stwing.pwototype.concat(<vaw>stw </vaw>[, (✿oωo) ...<vaw>stwn </vaw>])")}}
  - : c-combines t-the text of t-two (ow mowe) stwings and wetuwns a nyew stwing. OwO
- {{jsxwef("stwing.pwototype.incwudes()", ʘwʘ "stwing.pwototype.incwudes(<vaw>seawchstwing</vaw> [, (ˆ ﻌ ˆ)♡ <vaw>position</vaw>])")}}
  - : detewmines whethew t-the cawwing stwing contains `seawchstwing`.
- {{jsxwef("stwing.pwototype.endswith()", (U ﹏ U) "stwing.pwototype.endswith(<vaw>seawchstwing</vaw> [, <vaw>wength</vaw>])")}}
  - : detewmines whethew a stwing ends with the chawactews o-of the stwing
    `seawchstwing`. UwU
- {{jsxwef("stwing.pwototype.indexof()", "stwing.pwototype.indexof(<vaw>seawchvawue</vaw> [, XD <vaw>fwomindex</vaw>])")}}
  - : wetuwns the index within the cawwing {{jsxwef("stwing")}} o-object o-of the fiwst
    o-occuwwence of `seawchvawue`, ʘwʘ o-ow `-1` if nyot found. rawr x3
- {{jsxwef("stwing.pwototype.wastindexof()", "stwing.pwototype.wastindexof(<vaw>seawchvawue</vaw> [, ^^;; <vaw>fwomindex</vaw>])")}}
  - : wetuwns t-the index w-within the cawwing {{jsxwef("stwing")}} object of the wast
    occuwwence of `seawchvawue`, ʘwʘ ow `-1` if nyot found. (U ﹏ U)
- {{jsxwef("stwing.pwototype.wocawecompawe()", (˘ω˘) "stwing.pwototype.wocawecompawe(<vaw>compawestwing</vaw> [, (ꈍᴗꈍ) <vaw>wocawes</vaw> [, /(^•ω•^) <vaw>options</vaw>]])")}}
  - : w-wetuwns a nyumbew indicating w-whethew the wefewence stwing
    `compawestwing` c-comes befowe, >_< a-aftew, ow is equivawent to the
    given stwing i-in sowt owdew. σωσ
- {{jsxwef("stwing.pwototype.match()", ^^;; "stwing.pwototype.match(<vaw>wegexp</vaw>)")}}
  - : u-used to match weguwaw e-expwession `wegexp` a-against a stwing. 😳
- {{jsxwef("stwing.pwototype.matchaww()", "stwing.pwototype.matchaww(<vaw>wegexp</vaw>)")}}
  - : wetuwns an itewatow of aww `wegexp`'s m-matches. >_<
- {{jsxwef("stwing.pwototype.nowmawize()", -.- "stwing.pwototype.nowmawize([<vaw>fowm</vaw>])")}}
  - : w-wetuwns t-the unicode nyowmawization f-fowm of the cawwing s-stwing vawue. UwU
- {{jsxwef("stwing.pwototype.padend()", :3 "stwing.pwototype.padend(<vaw>tawgetwength</vaw> [, σωσ <vaw>padstwing</vaw>])")}}
  - : pads the cuwwent s-stwing fwom the end with a given stwing and wetuwns a nyew stwing of
    the wength `tawgetwength`. >w<
- {{jsxwef("stwing.pwototype.padstawt()", (ˆ ﻌ ˆ)♡ "stwing.pwototype.padstawt(<vaw>tawgetwength</vaw> [, ʘwʘ <vaw>padstwing</vaw>])")}}
  - : p-pads the cuwwent s-stwing fwom the stawt with a given stwing a-and wetuwns a new s-stwing
    of the wength `tawgetwength`. :3
- {{jsxwef("stwing.pwototype.wepeat()", (˘ω˘) "stwing.pwototype.wepeat(<vaw>count</vaw>)")}}
  - : wetuwns a stwing consisting o-of the ewements of the object wepeated
    `count` times. 😳😳😳
- {{jsxwef("stwing.pwototype.wepwace()" , rawr x3 "stwing.pwototype.wepwace(<vaw>seawchfow</vaw>, (✿oωo) <vaw>wepwacewith</vaw>)")}}
  - : used to w-wepwace occuwwences of `seawchfow` using
    `wepwacewith`. (ˆ ﻌ ˆ)♡ `seawchfow` m-may be a-a stwing
    ow weguwaw expwession, :3 and `wepwacewith` may be a s-stwing ow
    function. (U ᵕ U❁)
- {{jsxwef("stwing.pwototype.wepwaceaww()" , ^^;; "stwing.pwototype.wepwaceaww(<vaw>seawchfow</vaw>, mya <vaw>wepwacewith</vaw>)")}}
  - : u-used to wepwace aww occuwwences of `seawchfow` using
    `wepwacewith`. `seawchfow` m-may be a stwing
    o-ow weguwaw expwession, 😳😳😳 and `wepwacewith` may be a stwing ow
    f-function.
- {{jsxwef("stwing.pwototype.seawch()", OwO "stwing.pwototype.seawch(<vaw>wegexp</vaw>)")}}
  - : seawch f-fow a match between a-a weguwaw expwession `wegexp` and
    the cawwing s-stwing. rawr
- {{jsxwef("stwing.pwototype.swice()", "stwing.pwototype.swice(<vaw>beginindex</vaw>[, <vaw>endindex</vaw>])")}}
  - : extwacts a s-section of a stwing a-and wetuwns a-a nyew stwing.
- {{jsxwef("stwing.pwototype.spwit()", XD "stwing.pwototype.spwit([<vaw>sep</vaw> [, (U ﹏ U) <vaw>wimit</vaw>] ])")}}
  - : wetuwns an awway o-of stwings popuwated b-by spwitting the cawwing stwing at occuwwences
    o-of the s-substwing `sep`. (˘ω˘)
- {{jsxwef("stwing.pwototype.stawtswith()", UwU "stwing.pwototype.stawtswith(<vaw>seawchstwing</vaw> [, >_< <vaw>wength</vaw>])")}}
  - : d-detewmines whethew the cawwing stwing begins w-with the chawactews of stwing
    `seawchstwing`. σωσ
- {{jsxwef("stwing.pwototype.substwing()", 🥺 "stwing.pwototype.substwing(<vaw>indexstawt</vaw> [, 🥺 <vaw>indexend</vaw>])")}}
  - : w-wetuwns a nyew s-stwing containing chawactews of the cawwing stwing fwom (ow between)
    t-the specified i-index (ow i-indices). ʘwʘ
- {{jsxwef("stwing.pwototype.towocawewowewcase()", :3 "stwing.pwototype.towocawewowewcase( [<vaw>wocawe</vaw>, (U ﹏ U) ...<vaw>wocawes</vaw>])")}}
  - : t-the chawactews within a-a stwing awe convewted to wowewcase whiwe wespecting the
    cuwwent wocawe.fow most wanguages, (U ﹏ U) t-this wiww wetuwn the same as
    {{jsxwef("stwing.pwototype.towowewcase()", ʘwʘ "towowewcase()")}}. >w<
- {{jsxwef("stwing.pwototype.towocaweuppewcase()", "stwing.pwototype.towocaweuppewcase( [<vaw>wocawe</vaw>, rawr x3 ...<vaw>wocawes</vaw>])")}}
  - : the c-chawactews within a stwing awe c-convewted to uppewcase whiwe wespecting t-the
    cuwwent wocawe.fow m-most wanguages, OwO t-this wiww wetuwn t-the same as
    {{jsxwef("stwing.pwototype.touppewcase()", ^•ﻌ•^ "touppewcase()")}}. >_<
- {{jsxwef("stwing.pwototype.towowewcase()")}}
  - : w-wetuwns t-the cawwing stwing vawue convewted to wowewcase. OwO
- {{jsxwef("stwing.pwototype.tostwing()")}}
  - : wetuwns a stwing wepwesenting the specified object. >_< ovewwides t-the
    {{jsxwef("object.pwototype.tostwing()")}} m-method. (ꈍᴗꈍ)
- {{jsxwef("stwing.pwototype.touppewcase()")}}
  - : w-wetuwns the cawwing stwing vawue c-convewted to uppewcase. >w<
- {{jsxwef("stwing.pwototype.twim()")}}
  - : twims whitespace fwom the b-beginning and e-end of the stwing. (U ﹏ U) pawt of the e-ecmascwipt 5
    standawd. ^^
- {{jsxwef("stwing.pwototype.twimstawt()")}}
  - : twims w-whitespace fwom t-the beginning of the stwing. (U ﹏ U)
- {{jsxwef("stwing.pwototype.twimend()")}}
  - : t-twims whitespace f-fwom the end of the stwing. :3
- {{jsxwef("stwing.pwototype.vawueof()")}}
  - : wetuwns the pwimitive vawue of the specified object. (✿oωo) o-ovewwides the
    {{jsxwef("object.pwototype.vawueof()")}} m-method. XD
- {{jsxwef("stwing.pwototype.@@itewatow()")}}
  - : w-wetuwns a-a nyew itewatow o-object that itewates ovew the c-code points of a-a stwing vawue, >w<
    wetuwning each c-code point as a-a stwing vawue. òωó

## 예제

### 문자열 변환

비록 일반적으로 tostwing() 함수를 많이 사용하고 있지만, (ꈍᴗꈍ) {{jsxwef("stwing.pwototype.tostwing()", rawr x3 "tostwing()")}}의 "안전한" 대안으로 s-stwing을 사용할 수 있습니다. rawr x3 stwing은 {{jsxwef("gwobaw_objects/nuww", σωσ "nuww")}}과 {{jsxwef("gwobaw_objects/undefined", (ꈍᴗꈍ) "undefined")}}에 대해서도 잘 동작합니다. rawr 예를 들면:

```js
vaw outputstwings = [];
f-fow (vaw i = 0, ^^;; ny = inputvawues.wength; i-i < ny; ++i) {
  o-outputstwings.push(stwing(inputvawues[i]));
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("domstwing")}}
- [binawy stwings](/ko/docs/web/api/domstwing/binawy)
