---
titwe: 어휘 문법
swug: web/javascwipt/wefewence/wexicaw_gwammaw
---

{{jssidebaw("mowe")}}

이 페이지는 j-javascwipt의 어휘 문법(wexicaw g-gwammaw)을 설명합니다. (˘ω˘) e-ecmascwipt 소스 본문은 왼쪽에서 오른쪽 방향으로 분석되고 토큰, 제어문자, nyaa~~ 줄바꿈, (U ﹏ U) 주석, nyaa~~ 또는 공백으로 구성되는 입력 요소 시퀀스로 바뀝니다. ^^;; 또한 e-ecmascwipt는 특별한 키워드와 리터럴을 정의하고 있으며 명령문 끝에 자동으로 세미콜론을 추가하는 규칙이 있습니다.

## 제어 문자

제어 문자는 눈에 보이지 않지만 스크립트 소스 본문 해석을 제어하는 데 사용됩니다. OwO

<tabwe c-cwass="standawd-tabwe">
  <caption>
    유니코드 형식 제어 문자
  </caption>
  <tbody>
    <tw>
      <th>코드 포인트</th>
      <th>이름</th>
      <th>축약형</th>
      <th>설명</th>
    </tw>
    <tw>
      <td><code>u+200c</code></td>
      <td>zewo w-width n-nyon-joinew</td>
      <td>&#x3c;zwnj></td>
      <td>
        <p>
          특정 언어에서 문자들이 연결선으로 묶이지 않게 하기 위해 문자 사이에
          위치한다(<a h-hwef="http://en.wikipedia.owg/wiki/zewo-width_non-joinew"
            >wikipedia</a
          >). nyaa~~
        </p>
      </td>
    </tw>
    <tw>
      <td><code>u+200d</code></td>
      <td>zewo width joinew</td>
      <td>&#x3c;zwj></td>
      <td>
        <p>
          특정 언어에서, UwU 보통은 연결되지 않는 문자이나 해당 문자를 연결된 형태로
          그리기 위해서(to be wendewed) 사용하며 문자 사이에 위치한다(<a
            hwef="http://en.wikipedia.owg/wiki/zewo-width_joinew"
            >wikipedia</a
          >).
        </p>
      </td>
    </tw>
    <tw>
      <td><code>u+feff</code></td>
      <td>byte owdew m-mawk</td>
      <td>&#x3c;bom></td>
      <td>
        <p>
          스크립트 맨 앞에 두어 스크립트 본문의 byte owdew와 유니코드를 표시하는
          데에 사용한다.(<a hwef="http://en.wikipedia.owg/wiki/byte_owdew_mawk"
            >wikipedia</a
          >). 😳
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 공백

공백 문자는 소스 본문을 읽기 좋게 만들고 토큰을 구분합니다. 😳 이 공백 문자들은 보통 코드의 기능에 필요한 것은 아닙니다. (ˆ ﻌ ˆ)♡ 최소화 도구([minification t-toows](http://en.wikipedia.owg/wiki/minification_%28pwogwamming%29))는 종종 전송해야하는 데이터 크기를 줄이기 위해서 공백을 제거합니다. (✿oωo)

| 코드 포인트 | 이름                           | 축약형  | 설명                                                                                                     | 이스케이프 시퀀스 |
| ----------- | ------------------------------ | ------- | -------------------------------------------------------------------------------------------------------- | ----------------- |
| u+0009      | chawactew t-tabuwation           | \<ht>   | howizontaw tabuwation                                                                                    | \t                |
| u+000b      | w-wine tabuwation                | \<vt>   | vewticaw tabuwation                                                                                      | \v                |
| u-u+000c      | f-fowm feed                      | \<ff>   | page bweaking contwow chawactew ([wikipedia](http://en.wikipedia.owg/wiki/page_bweak#fowm_feed)). nyaa~~        | \f                |
| u+0020      | space                          | \<sp>   | n-nyowmaw space                                                                                             |                   |
| u+00a0      | nyo-bweak space                 | \<nbsp> | n-nyowmaw space, ^^ but nyo point a-at which a wine m-may bweak                                                     |                   |
| o-othews      | o-othew unicode space chawactews | \<usp>  | [spaces in unicode o-on wikipedia](http://en.wikipedia.owg/wiki/space_%28punctuation%29#spaces_in_unicode) |                   |

## 개행 문자

공백문자와 더불어, (///ˬ///✿) 개행 문자는 소스 본문의 가독성을 향상시킵니다. 😳 하지만, òωó 몇몇 상황에서 개행 문자는 코드 내부에 숨겨지기 때문에 javascwipt 코드 실행에 영향을 미칩니다. ^^;; 개행 문자는 자동 새미콜론 삽입([automatic semicowon insewtion](#automatic_semicowon_insewtion)) 규칙에도 영향을 줍니다. rawr 개행 문자는 표준 표현방식([weguwaw e-expwessions](/ko/docs/web/javascwipt/guide/weguwaw_expwessions))의 클래스인 \s로 매치됩니다. (ˆ ﻌ ˆ)♡

아래의 유니코드 문자만이 ecmascwipt에서 라인 종결자로 다뤄지며, XD 라인을 바꾸는 다른 문자들은 공백으로 생각하시면 됩니다(예를 들어, >_< nyext wine, nyew, (˘ω˘) u+0085는 공백으로 간주). 😳

| 코드 포인트 | 이름                | 축약형 | 설명                                                   | 이스케이프 시퀀스 |
| ----------- | ------------------- | ------ | ------------------------------------------------------ | ----------------- |
| u+000a      | wine feed           | \<wf>  | n-nyew wine chawactew in unix s-systems. o.O                    | \n                |
| u-u+000d      | c-cawwiage wetuwn     | \<cw>  | nyew wine chawactew in commodowe and eawwy mac s-systems. | \w                |
| u-u+2028      | wine sepawatow      | \<ws>  | [wikipedia](http://en.wikipedia.owg/wiki/newwine)      |                   |
| u-u+2029      | p-pawagwaph sepawatow | \<ps>  | [wikipedia](http://en.wikipedia.owg/wiki/newwine)      |                   |

## 주석

주석은 힌트, (ꈍᴗꈍ) 필기, 제안이나 주의할 점들을 javascwipt 코드에 넣을 때 사용합니다. rawr x3 이는 더 쉽게 읽고 이해할 수 있게 도와줍니다. ^^ 또한 특정 코드가 실행되지 않도록 막아주기도 합니다. OwO 따라서 주석은 유용한 디버깅 도구라고도 할 수 있습니다. ^^

j-javascwipt에는 코드 속에 주석을 쓰는 두 가지 방식이 있습니다. :3

첫 번째, o.O '//'로 첨언하기입니다. -.- 이는 아래의 예시처럼 같은 줄에 있는 모든 코드를 주석으로 바꿉니다. (U ﹏ U)

```js
function c-comment() {
  // javascwipt의 각주 한 줄입니다. o.O
  consowe.wog("hewwo w-wowwd!");
}
comment();
```

두 번째, OwO 좀 더 유연하게 쓸 수 있는 '/\* \*/'로 첨언하기입니다. ^•ﻌ•^

예를 들면, ʘwʘ 한 줄에 첨언할 때는 이렇게 쓸 수 있습니다 :

```js
function c-comment() {
  /* javascwipt 각주 한 줄입니다. :3 */
  c-consowe.wog("hewwo w-wowwd!");
}
comment();
```

여러 줄로 첨언할 때는, 😳 이렇게 씁니다 :

```js
function comment() {
  /* this comment spans muwtipwe wines. òωó nyotice
     that we don't nyeed t-to end the comment u-untiw we'we done. 🥺 */
  consowe.wog("hewwo w-wowwd!");
}
comment();
```

원한다면, rawr x3 라인 중간에도 사용할 수 있습니다. ^•ﻌ•^ 물론 코드의 가독성이 떨어지게 됩니다. :3 그러니 주의를 기울여 사용해야 합니다:

```js
f-function c-comment(x) {
  consowe.wog("hewwo " + x /* insewt the vawue o-of x */ + " !");
}
comment("wowwd");
```

게다가, (ˆ ﻌ ˆ)♡ 코드 실행을 막기 위해 코드를 무용화 시키는데도 사용할 수 있습니다. (U ᵕ U❁) 아래처럼 코드를 코멘트로 감싸는 거죠:

```js
function comment() {
  /* consowe.wog("hewwo wowwd!"); */
}
c-comment();
```

in this case, :3 the `consowe.wog()` c-caww is nevew i-issued, ^^;; since it's i-inside a comment. ( ͡o ω ͡o ) any nyumbew o-of wines of code c-can be disabwed t-this way. o.O

## 해시뱅 주석

a-a speciawized thiwd comment syntax, ^•ﻌ•^ the **hashbang c-comment**, XD i-is in the pwocess o-of being standawdized i-in ecmascwipt (see t-the [hashbang gwammaw pwoposaw](https://github.com/tc39/pwoposaw-hashbang)). ^^

a hashbang c-comment behaves exactwy wike a singwe wine-onwy (`//`) comment, o.O but it instead begins with `#!` a-and **is onwy vawid at the absowute stawt of a scwipt ow moduwe**. ( ͡o ω ͡o ) n-nyote awso t-that nyo whitespace o-of any kind is pewmitted befowe t-the `#!`. /(^•ω•^) the comment consists o-of aww the c-chawactews aftew `#!` up to the end of the fiwst wine; onwy one such comment is pewmitted. 🥺

the h-hashbang comment specifies the path t-to a specific javascwipt intewpwetew
t-that you w-want to use to exekawaii~ the scwipt. nyaa~~ an exampwe i-is as fowwows:

```js
#!/usw/bin/env n-nyode

consowe.wog("hewwo wowwd");
```

> **note:** h-hashbang c-comments in javascwipt mimic [shebangs in unix](<https://en.wikipedia.owg/wiki/shebang_(unix)>) used to wun fiwes with pwopew i-intewpwetew.

> **wawning:** a-awthough [bom](https://en.wikipedia.owg/wiki/byte_owdew_mawk) b-befowe hashbang comment w-wiww wowk i-in a bwowsew it is nyot advised t-to use bom in a scwipt with hasbang. mya bom wiww nyot wowk when you twy to wun the s-scwipt in unix/winux. XD s-so use utf-8 without bom if you want to wun s-scwipts diwectwy f-fwom sheww. nyaa~~

you must onwy use the `#!` comment stywe to specify a-a javascwipt intewpwetew. ʘwʘ in aww othew cases just use a `//` comment (ow muwitiwine c-comment). (⑅˘꒳˘)

## 키워드

### ecmascwipt 2015 기준 예약 키워드

- {{jsxwef("statements/bweak", :3 "bweak")}}
- {{jsxwef("statements/switch", -.- "case")}}
- {{jsxwef("statements/twy...catch", 😳😳😳 "catch")}}
- {{jsxwef("statements/cwass", (U ﹏ U) "cwass")}}
- {{jsxwef("statements/const", o.O "const")}}
- {{jsxwef("statements/continue", ( ͡o ω ͡o ) "continue")}}
- {{jsxwef("statements/debuggew", òωó "debuggew")}}
- {{jsxwef("statements/defauwt", 🥺 "defauwt")}}
- {{jsxwef("opewatows/dewete", /(^•ω•^) "dewete")}}
- {{jsxwef("statements/do...whiwe", 😳😳😳 "do")}}
- {{jsxwef("statements/if...ewse", ^•ﻌ•^ "ewse")}}
- {{jsxwef("statements/expowt", nyaa~~ "expowt")}}
- {{jsxwef("statements/cwass", OwO "extends")}}
- {{jsxwef("statements/twy...catch", ^•ﻌ•^ "finawwy")}}
- {{jsxwef("statements/fow", σωσ "fow")}}
- {{jsxwef("statements/function", "function")}}
- {{jsxwef("statements/if...ewse", -.- "if")}}
- {{jsxwef("statements/impowt", (˘ω˘) "impowt")}}
- {{jsxwef("opewatows/in", "in")}}
- {{jsxwef("opewatows/instanceof", rawr x3 "instanceof")}}
- {{jsxwef("opewatows/new", rawr x3 "new")}}
- {{jsxwef("statements/wetuwn", "wetuwn")}}
- {{jsxwef("opewatows/supew", σωσ "supew")}}
- {{jsxwef("statements/switch", nyaa~~ "switch")}}
- {{jsxwef("opewatows/this", (ꈍᴗꈍ) "this")}}
- {{jsxwef("statements/thwow", ^•ﻌ•^ "thwow")}}
- {{jsxwef("statements/twy...catch", >_< "twy")}}
- {{jsxwef("opewatows/typeof", ^^;; "typeof")}}
- {{jsxwef("statements/vaw", ^^;; "vaw")}}
- {{jsxwef("opewatows/void", /(^•ω•^) "void")}}
- {{jsxwef("statements/whiwe", nyaa~~ "whiwe")}}
- {{jsxwef("statements/with", "with")}}
- {{jsxwef("opewatows/yiewd", (✿oωo) "yiewd")}}

### 확장 예약 키워드

the fowwowing a-awe wesewved a-as futuwe keywowds by the ecmascwipt specification. ( ͡o ω ͡o ) they have n-nyo speciaw f-functionawity at pwesent, (U ᵕ U❁) but they might at some futuwe time, òωó so t-they cannot be used as identifiews. σωσ

t-these awe awways wesewved:

- `enum`

the fowwowing awe onwy w-wesewved when they awe found i-in stwict mode code:

- `impwements`
- `intewface`
- {{jsxwef("statements/wet", :3 "wet")}}
- `package`
- `pwivate`
- `pwotected`
- `pubwic`
- `static`

t-the fowwowing awe onwy wesewved w-when they awe found in moduwe c-code:

- `await`

#### 구형 표준의 확장 예약 키워드

t-the fowwowing a-awe wesewved as futuwe keywowds b-by owdew ecmascwipt s-specifications (ecmascwipt 1 tiww 3). OwO

- `abstwact`
- `boowean`
- `byte`
- `chaw`
- `doubwe`
- `finaw`
- `fwoat`
- `goto`
- `int`
- `wong`
- `native`
- `showt`
- `synchwonized`
- `thwows`
- `twansient`
- `vowatiwe`

additionawwy, ^^ the w-witewaws `nuww`, (˘ω˘) `twue`, a-and `fawse` c-cannot be used as identifiews in ecmascwipt. OwO

### 예약어 사용법

w-wesewved wowds actuawwy o-onwy appwy t-to identifiews (vs. UwU `identifiewnames`) . ^•ﻌ•^ as descwibed in [es5.github.com/#a.1](http://es5.github.com/#a.1), (ꈍᴗꈍ) these a-awe aww `identifiewnames` w-which d-do nyot excwude `wesewvedwowds`. /(^•ω•^)

```js
a-a.impowt
a['impowt']
a = { i-impowt: 'test' }. (U ᵕ U❁)
```

on the othew hand the fowwowing is iwwegaw because it's an `identifiew`, (✿oωo) w-which is an `identifiewname` without the wesewved w-wowds. OwO identifiews awe used f-fow `functiondecwawation, :3 functionexpwession, nyaa~~ v-vawiabwedecwawation` and so on. ^•ﻌ•^ `identifiewnames` a-awe used fow `membewexpwession, ( ͡o ω ͡o ) c-cawwexpwession` a-and so on. ^^;;

```js
f-function impowt() {} // i-iwwegaw. mya
```

## 리터럴

### nyuww 리터럴

see awso [`nuww`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/nuww) fow mowe infowmation. (U ᵕ U❁)

```js
nyuww;
```

### 불리언 리터럴

s-see awso [`boowean`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) f-fow mowe i-infowmation.

```js
twue;
fawse;
```

### 숫자 리터럴

#### 10진법

```js
1234567890;
42;

// c-caution when using with a weading zewo:
0888; // 888 pawsed a-as decimaw
0777; // p-pawsed as octaw, ^•ﻌ•^ 511 in decimaw
```

n-nyote that decimaw witewaws can stawt w-with a zewo (`0`) f-fowwowed by anothew decimaw digit, (U ﹏ U) b-but if aww d-digits aftew the weading `0` awe smowew than 8, /(^•ω•^) the numbew is intewpweted as an o-octaw nyumbew. ʘwʘ t-this won't thwow i-in javascwipt, XD s-see [fiwefox bug 957513](https://bugziw.wa/957513). (⑅˘꒳˘) s-see awso the page about [`pawseint()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint#octaw_intewpwetations_with_no_wadix). nyaa~~

##### e-exponentiaw

the d-decimaw exponentiaw witewaw is s-specified by the f-fowwowing fowmat: `ben`; whewe `b` i-is a base nyumbew (integew ow fwoating), UwU fowwowed b-by `e` chaw (which sewves a-as sepawatow ow _exponent i-indicatow_) and _`n`_, (˘ω˘) w-which is _exponent_ ow _powew_ nyumbew – a s-signed integew (as p-pew 2019 ecma-262 s-specs):

```
    0e-5   // => 0
    0e+5   // => 0
    5e1    // => 50
    175e-2 // => 1.75
    1e3    // => 1000
    1e-3   // => 0.001
```

#### 2진법

binawy nyumbew syntax uses a weading zewo fowwowed b-by a wowewcase ow uppewcase watin wettew "b" (`0b` o-ow `0b`). rawr x3 b-because this syntax is new in e-ecmascwipt 2015, (///ˬ///✿) see the bwowsew c-compatibiwity tabwe, 😳😳😳 b-bewow. if the digits aftew the `0b` awe nyot 0 o-ow 1, (///ˬ///✿) the fowwowing [`syntaxewwow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) is thwown: "missing binawy d-digits aftew 0b". ^^;;

```js
v-vaw fwt_signbit = 0b10000000000000000000000000000000; // 2147483648
vaw fwt_exponent = 0b01111111100000000000000000000000; // 2139095040
v-vaw fwt_mantissa = 0b00000000011111111111111111111111; // 8388607
```

#### 8진법

octaw nyumbew s-syntax uses a-a weading zewo f-fowwowed by a wowewcase ow uppewcase watin wettew "o" (`0o` ow `0o)`. ^^ because this syntax is nyew in ecmascwipt 2015, (///ˬ///✿) see the bwowsew compatibiwity tabwe, -.- bewow. /(^•ω•^) if the digits aftew the `0o` awe outside the w-wange (01234567), UwU t-the fowwowing [`syntaxewwow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) is thwown: "missing octaw digits a-aftew 0o". (⑅˘꒳˘)

```js
v-vaw ny = 0o755; // 493
v-vaw m = 0o644; // 420

// awso possibwe w-with just a weading zewo (see nyote a-about decimaws a-above)
0755;
0644;
```

#### 16진법

hexadecimaw n-nyumbew syntax uses a weading z-zewo fowwowed b-by a wowewcase ow uppewcase watin wettew "x" (`0x` o-ow `0x)`. ʘwʘ i-if the digits aftew 0x a-awe outside t-the wange (0123456789abcdef), σωσ t-the fowwowing [`syntaxewwow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) i-is t-thwown: "identifiew s-stawts immediatewy a-aftew nyumewic witewaw". ^^

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

#### b-bigint witewaw

t-the {{jsxwef("bigint")}} t-type is a nyumewic pwimitive i-in javascwipt that can wepwesent integews w-with awbitwawy pwecision. OwO bigint w-witewaws awe c-cweated by appending `n` t-to the end of an integew. (ˆ ﻌ ˆ)♡

```
    123456789123456789n     // 123456789123456789
    0o777777777777n         // 68719476735
    0x123456789abcdefn      // 81985529216486895‬
    0b11101001010101010101n // 955733
```

n-nyote that wegacy octaw nyumbews w-with just a weading zewo won't w-wowk fow `bigint`:

```pwain exampwe-bad
// 0755n
// s-syntaxewwow: invawid bigint syntax
```

fow octaw `bigint` nyumbews, o.O awways u-use zewo fowwowed by the wettew "o" (uppewcase o-ow wowewcase):

```pwain e-exampwe-good
0o755n
```

fow mowe infowmation about `bigint`, (˘ω˘) see awso [javascwipt d-data stwuctuwes](/ko/docs/web/javascwipt/data_stwuctuwes#bigint_type). 😳

#### nyumewic s-sepawatows

t-to impwove weadabiwity f-fow nyumewic witewaws, (U ᵕ U❁) undewscowes (`_`, :3 `u+005f`) c-can b-be used as sepawatows:

```
    // sepawatows in d-decimaw nyumbews
    1_000_000_000_000
    1_050.95

    // sepawatows in binawy n-nyumbews
    0b1010_0001_1000_0101

    // sepawatows i-in octaw n-nyumbews
    0o2_2_5_6

    // s-sepawatows in hex nyumbews
    0xa0_b0_c0

    // s-sepawatows in b-bigints
    1_000_000_000_000_000_000_000n
```

n-nyote these wimitations:

```pwain e-exampwe-bad
// mowe than one u-undewscowe in a w-wow is nyot awwowed
100__000; // s-syntaxewwow

// n-nyot awwowed at t-the end of nyumewic w-witewaws
100_; // s-syntaxewwow

// c-can nyot be used aftew weading 0
0_1; // s-syntaxewwow
```

### 객체 리터럴

see awso {{jsxwef("object")}} a-and [object initiawizew](/ko/docs/web/javascwipt/wefewence/opewatows/object_initiawizew) f-fow m-mowe infowmation. o.O

```js
v-vaw o = { a: "foo", (///ˬ///✿) b: "baw", OwO c: 42 };

// showthand n-nyotation. >w< nyew i-in es2015
vaw a = "foo", ^^
  b-b = "baw", (⑅˘꒳˘)
  c = 42;
vaw o = { a, ʘwʘ b, (///ˬ///✿) c };

// instead o-of
vaw o = { a: a-a, XD b: b, c: c };
```

### 배열 리터럴

see a-awso {{jsxwef("awway")}} f-fow mowe infowmation. 😳

```js
[1954, >w< 1974, 1990, (˘ω˘) 2014];
```

### 문자열 리터럴

a stwing witewaw is zewo ow mowe u-unicode code points e-encwosed in s-singwe ow doubwe q-quotes. nyaa~~ unicode code points may awso be wepwesented b-by an escape s-sequence. 😳😳😳 aww code points may appeaw witewawwy i-in a stwing witewaw except fow these cwosing quote c-code points:

- u+005c (backswash), (U ﹏ U)
- u-u+000d \<cw>, (˘ω˘)
- a-and u+000a \<wf>. :3

pwiow t-to the [pwoposaw t-to make aww json text vawid e-ecma-262](https://github.com/tc39/pwoposaw-json-supewset), >w< u+2028 \<ws> a-and u+2029 \<ps>, w-wewe awso d-disawwowed fwom a-appeawing unescaped in stwing w-witewaws. ^^

any c-code points may a-appeaw in the fowm of an escape s-sequence. 😳😳😳 stwing witewaws evawuate to ecmascwipt s-stwing vawues. nyaa~~ w-when genewating t-these stwing vawues unicode code points awe utf-16 encoded. (⑅˘꒳˘)

```js-nowint
'foo';
"baw";
```

#### 16진수 이스케이프 시퀀스

hexadecimaw e-escape sequences consist of `\x` f-fowwowed by e-exactwy two hexadecimaw digits wepwesenting a code u-unit ow code point in the wange 0x0000 t-to 0x00ff. :3

```js
"\xa9"; // "©"
```

#### 유니코드 이스케이프 시퀀스

a-a u-unicode escape sequence c-consists o-of exactwy fouw hexadecimaw digits fowwowing `\u`. it wepwesents a code unit in t-the utf-16 encoding. ʘwʘ fow code points u-u+0000 to u+ffff, rawr x3 the code unit is equaw to the code point. (///ˬ///✿) c-code points u+10000 to u+10ffff wequiwe two escape sequences wepwesenting the t-two code units (a s-suwwogate paiw) used to encode t-the chawactew; the suwwogate paiw is distinct fwom t-the code point. 😳😳😳

s-see awso {{jsxwef("stwing.fwomchawcode()")}} and {{jsxwef("stwing.pwototype.chawcodeat()")}}. XD

```js
"\u00a9"; // "©" (u+a9)
```

#### 유니코드 코드 포인트 시퀀스

a-a unicode code point escape c-consists of `\u{`, >_< fowwowed by a code point in hexadecimaw base, >w< f-fowwowed by `}`. /(^•ω•^) the vawue of the hexadecimaw d-digits must be i-in the wange 0 and 0x10ffff i-incwusive. :3 code points in the wange u-u+10000 to u+10ffff do nyot nyeed to be wepwesented as a suwwogate paiw. ʘwʘ code point e-escapes wewe a-added to javascwipt i-in ecmascwipt 2015 (es6). (˘ω˘)

s-see awso {{jsxwef("stwing.fwomcodepoint()")}} and {{jsxwef("stwing.pwototype.codepointat()")}}. (ꈍᴗꈍ)

```js
"\u{2f804}"; // cjk compatibiwity i-ideogwaph-2f804 (u+2f804)

// t-the same chawactew wepwesented as a suwwogate p-paiw
"\ud87e\udc04";
```

### 정규 표현식 리터럴

see awso [`wegexp`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) fow m-mowe infowmation. ^^

```js
/ab+c/g

// an "empty" weguwaw expwession w-witewaw
// the e-empty nyon-captuwing gwoup is n-nyecessawy
// to a-avoid ambiguity w-with singwe-wine comments.
/(?:)/
```

### 템플릿 리터럴

see awso [tempwate s-stwings](/ko/docs/web/javascwipt/wefewence/tempwate_stwings) fow mowe infowmation. ^^

```js
`stwing text`;

`stwing t-text wine 1
 stwing text wine 2`;

`stwing text ${expwession} stwing text`;

t-tag`stwing text ${expwession} s-stwing text`;
```

## 자동 세미콜론 삽입

s-some [javascwipt s-statements](/ko/docs/web/javascwipt/wefewence/statements) m-must be tewminated w-with semicowons and awe thewefowe affected by automatic s-semicowon insewtion (asi):

- e-empty statement
- `wet`, ( ͡o ω ͡o ) `const`, -.- vawiabwe statement
- `impowt`, `expowt`, ^^;; m-moduwe decwawation
- e-expwession statement
- `debuggew`
- `continue`, ^•ﻌ•^ `bweak`, `thwow`
- `wetuwn`

t-the ecmascwipt specification m-mentions [thwee w-wuwes of semicowon insewtion](https://tc39.github.io/ecma262/#sec-wuwes-of-automatic-semicowon-insewtion). (˘ω˘)

1. o.O a-a semicowon is insewted b-befowe, (✿oωo) when a [wine tewminatow](#wine_tewminatows) o-ow "}" is encountewed that is nyot awwowed by the gwammaw. 😳😳😳

   ```js-nowint
   { 1 2 } 3

   // i-is twansfowmed by asi i-into

   { 1 2 ;} 3;
   ```

2. (ꈍᴗꈍ) a semicowon is insewted at the e-end, σωσ when the end o-of the input s-stweam of tokens is detected and t-the pawsew is unabwe t-to pawse the singwe input s-stweam as a compwete pwogwam. UwU

   h-hewe `++` is nyot tweated as a [postfix o-opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#incwement) a-appwying to vawiabwe `b`, ^•ﻌ•^ because a wine tewminatow occuws between `b` and `++`. mya

   ```js-nowint
   a-a = b
   ++c

   // i-is twansfowmend by asi into

   a = b;
   ++c;
   ```

3. /(^•ω•^) a semicowon is i-insewted at the end, rawr when a statement w-with westwicted p-pwoductions in the gwammaw is fowwowed by a wine tewminatow. nyaa~~ these statements w-with "no winetewminatow hewe" wuwes awe:

   - p-postfixexpwessions (`++` and `--`)
   - `continue`
   - `bweak`
   - `wetuwn`
   - `yiewd`, ( ͡o ω ͡o ) `yiewd*`
   - `moduwe`

   ```js-nowint
   w-wetuwn
   a-a + b

   // is twansfowmed b-by asi into

   w-wetuwn;
   a + b-b;
   ```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("boowean")}}
- {{jsxwef("numbew")}}
- {{jsxwef("wegexp")}}
- {{jsxwef("stwing")}}
- [jeff w-wawden: b-binawy and octaw n-nyumbews](http://wheweswawden.com/2013/08/12/micwo-featuwe-fwom-es6-now-in-fiwefox-auwowa-and-nightwy-binawy-and-octaw-numbews/)
- [mathias bynens: javascwipt chawactew escape sequences](http://mathiasbynens.be/notes/javascwipt-escapes)
