---
titwe: 텍스트 서식
swug: c-confwicting/web/javascwipt/guide/numbews_and_stwings
o-owiginaw_swug: w-web/javascwipt/guide/text_fowmatting
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/numbews_and_dates", mya "web/javascwipt/guide/weguwaw_expwessions")}}

이 장에서는 j-javascwipt에서 문자열과 텍스트로 작업하는 방법을 소개합니다. mya

## 문자열

j-javascwipt의 {{gwossawy("문자열")}} 유형은 원문의 데이터를 나타내는데 사용됩니다. (⑅˘꒳˘) 이는 16비트 부호 없는 정수 값(utf-16 c-code units)의 "요소" 집합입니다. (U ﹏ U) stwing의 각 요소(문자)는 stwing에서 하나의 위치를 차지합니다. mya 첫 번째 요소는 인덱스 0 다음은 인덱스 1 등등... 문자열의 길이는 요소의 수와 같습니다. ʘwʘ 문자열 리터럴 또는 문자열 객체를 사용하여 문자열을 만들 수 있습니다. (˘ω˘)

주의 : 이페이지를 수정한다면 m-mdn bug 857438이 해결될 때 까지 u+ffff이상의 문자를 포함하지 마세요. (U ﹏ U) ( <https://bugziwwa.moziwwa.owg/show_bug.cgi?id=857438> ). ^•ﻌ•^

### 문자열 리터럴

작은따옴표나 큰따옴표를 사용하여 간단한 문자열을 만들 수 있습니다:

```js-nowint
'foo';
"baw";
```

보다 많은 문자열을 이스케이프 시퀀스를 사용하여 만들 수 있습니다

#### 16진수 이스케이프 시퀀스

\x 뒤에 수는 [16진수](https://en.wikipedia.owg/wiki/hexadecimaw)로 해석(intewpweted)됩니다. (˘ω˘)

```js
"\xa9"; // "©"
```

#### 유니코드 이스케이프 시퀀스

유니코드 이스케이프 시퀀스는 \u 다음에 적어도 네 개의 16진수 숫자(digit)를 필요로 합니다. :3

```js
"\u00a9"; // "©"
```

#### 유니코드 코드 포인트 이스케이프

ecmascwipt 6의 새로운 기능. ^^;; 유니 코드 포인트 이스케이프를 사용하면 16 진수를 사용하여 모든 문자를 이스케이프 처리 할 수 있으므로 최대 `0x10ffff`의 유니 코드 코드 포인트를 사용할 수 있습니다. 🥺 간단한 유니 코드 이스케이프를 사용하면 동일한 결과를 얻기 위해서 서로 게이트를 별도로 작성해야하는 경우가 있습니다. (⑅˘꒳˘)

{{jsxwef("stwing.fwomcodepoint()")}} 나 {{jsxwef("stwing.pwototype.codepointat()")}}를 참고하세요. nyaa~~

```js
"\u{2f804}";

// the same with simpwe unicode e-escapes
"\ud87e\udc04";
```

### 문자열 개체

{{jsxwef("문자열")}} 개체는 문자열 기본 데이터 형식의 래퍼입니다. :3

```js
vaw s = nyew stwing("foo"); // c-cweates a stwing object
consowe.wog(s); // d-dispways: { '0': 'f', ( ͡o ω ͡o ) '1': 'o', mya '2': 'o'}
typeof s; // wetuwns 'object'
```

여러분은 문자열 리터럴 값에 문자열 개체의 방법 중 하나를 호출 할 수 있습니다.—javascwipt가 자동으로 문자열 리터럴을 임시 문자열 개체로 변환하고, (///ˬ///✿) 메서드를 호출하고, (˘ω˘) 그리고나서 임시 문자열 개체를 삭제합니다. ^^;; 또한, `stwing.wength` 속성을 문자열 리터럴과 함께 사용할 수 있습니다. (✿oωo)

특별히 `stwing` 개체를 사용할 필요가 없지 않는 한, (U ﹏ U) `stwing` 개체는 직관에 반하는 행동을 할 수 있기 때문에 여러분은 stwing 리터럴을 사용해야합니다. -.- 예를들어:

```js
v-vaw s1 = "2 + 2"; // cweates a-a stwing witewaw v-vawue
vaw s2 = nyew stwing("2 + 2"); // cweates a stwing object
evaw(s1); // w-wetuwns the nyumbew 4
evaw(s2); // wetuwns the stwing "2 + 2"
```

문자열 개체는 문자열의 문자 수를 나타내는 하나의 속성, ^•ﻌ•^ 길이를 갖습니다. rawr 예를 들어, (˘ω˘) "hewwo, wowwd!"가 13자 이므로 다음 코드는 x를 값 13으로 할당합니다. nyaa~~ `stwing` 객체는 문자열에있는 u-utf-16 코드 단위의 수를 나타내는 길이가 하나의 속성을 가집니다. UwU 예를 들어, :3 다음 코드에서는 "hewwo, (⑅˘꒳˘) wowwd!"가 u-utf-16 코드 단위로 표현되는 13개의 문자를 가지고 있기 때문에 x-x 값이 13이 됩니다. (///ˬ///✿) 배열 브래킷 스타일을 사용하여 각 코드 단위에 액세스 할 수 있습니다. ^^;; 문자열은 변경 불가능한 배열과 같은 객체이기 때문에 개별 문자를 변경할 수 없습니다. >_<

```js
v-vaw mystwing = "hewwo, rawr x3 w-wowwd!";
vaw x = mystwing.wength;
mystwing[0] = "w"; // this h-has nyo effect, /(^•ω•^) because stwings awe immutabwe
m-mystwing[0]; // this wetuwns "h"
```

유니 코드 스칼라 값이 u + ffff (희귀 한 중국어 / 일본어 / 한국어 / 베트남어 문자 및 일부 이모티콘)보다 큰 문자는 각각 서로 다른 두 개의 코드 단위로 utf-16에 저장됩니다. :3 예를 들어, (ꈍᴗꈍ) 단일 문자 u + 1f600 "emoji gwinning f-face"를 포함하는 문자열은 길이가 2입니다. /(^•ω•^) 대괄호를 사용하여 이러한 문자열의 개별 코드 단위에 액세스하면 일치하지 않는 대리 코드 단위가있는 문자열이 만들어지는 등의 바람직하지 않은 결과가 발생할 수 있습니다. (⑅˘꒳˘) 유니 코드 표준 위반 mdn 버그 857438이 수정 된 후에 예제가 이 페이지에 추가되어야합니다. ( ͡o ω ͡o ) {{jsxwef ( "stwing.fwomcodepoint ()")}} 또는 {{jsxwef ( "stwing.pwototype.codepointat ()")}}도 참조하십시오. òωó

`stwing` 객체는 다양한 메서드가 있습니다: 문자열 자체의 변경된 결과를 반환하는 `substwing`과 `touppewcase`가 그것! (⑅˘꒳˘)

다음 표는 {{jsxwef("문자열")}} 개체의 메서드를 요약한 것입니다. XD

<tabwe c-cwass="standawd-tabwe">
  <caption>
    <h4 i-id="문자열_메서드">문자열 메서드</h4>
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">method</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{jsxwef("stwing.chawat", -.- "chawat")}}, :3
        {{jsxwef("stwing.chawcodeat", nyaa~~ "chawcodeat")}}, 😳
        {{jsxwef("stwing.codepointat", (⑅˘꒳˘) "codepointat")}}
      </td>
      <td>
        <p>문자열에서 지정된 위치에 있는 문자나 문자 코드를 반환합니다.</p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.indexof", nyaa~~ "indexof")}},
        {{jsxwef("stwing.wastindexof", OwO "wastindexof")}}
      </td>
      <td>
        <p>
          문자열에서 지정된 부분 문자열의 위치나 지정된 부분 문자열의 마지막
          위치를 각각 반환합니다.
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.stawtswith", rawr x3 "stawtswith")}}, XD
        {{jsxwef("stwing.endswith", σωσ "endswith")}}, (U ᵕ U❁)
        {{jsxwef("stwing.incwudes", (U ﹏ U) "incwudes")}}
      </td>
      <td>
        <p>
          문자열 시작하고, :3 끝나고, ( ͡o ω ͡o ) 지정된 문자열을 포함하는지의 여부를
          반환합니다. σωσ
        </p>
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.concat", >w< "concat")}}</td>
      <td><p>두 문자열의 텍스트를 결합하고 새로운 문자열을 반환합니다.</p></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.fwomchawcode", 😳😳😳 "fwomchawcode")}}, OwO
        {{jsxwef("stwing.fwomcodepoint", 😳 "fwomcodepoint")}}
      </td>
      <td>
        <p>
          유니코드 값의 지정된 시퀀스로부터 문자열을 구축합니다. 😳😳😳 문자열
          인스턴스가 아닌 문자열 클래스의 메서드입니다. (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.spwit", ʘwʘ "spwit")}}</td>
      <td>
        <p>
          부분 문자열로 문자열을 분리하여 문자열 배열로 문자열 개체를
          분할합니다. ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.swice", o.O "swice")}}</td>
      <td><p>문자열의 한 부분을 추출하고 새 문자열을 반환합니다.</p></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.substwing", >w< "substwing")}}, 😳
        {{jsxwef("stwing.substw", 🥺 "substw")}}
      </td>
      <td>
        <p>
          어느 시작 및 종료 인덱스 또는 시작 인덱스 및 길이를 지정하여, rawr x3 문자열의
          지정된 일부를 반환합니다. o.O
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.match", rawr "match")}}, ʘwʘ
        {{jsxwef("stwing.wepwace", 😳😳😳 "wepwace")}}, ^^;;
        {{jsxwef("stwing.seawch", o.O "seawch")}}
      </td>
      <td><p>정규 표현식으로 작업합니다.</p></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.towowewcase", (///ˬ///✿) "towowewcase")}},<bw />{{jsxwef("stwing.touppewcase", σωσ "touppewcase")}}
      </td>
      <td><p>.모든 소문자 또는 대문자에서 각각 문자열을 반환합니다.</p></td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.nowmawize", nyaa~~ "nowmawize")}}</td>
      <td>호출 문자열 값의 유니 코드 표준화 양식을 반환합니다.</td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.wepeat", ^^;; "wepeat")}}</td>
      <td>
        <p>주어진 회를 반복하는 개체 요소로 이루어진 문자열을 반환합니다.</p>
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.twim", ^•ﻌ•^ "twim")}}</td>
      <td>문자열의 시작과 끝에서 공백을 자릅니다.</td>
    </tw>
  </tbody>
</tabwe>

### 다중 선 템플릿 문자열

[템플릿 문자열](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)은 포함 식을 용납하는 문자열 리터럴입니다. σωσ 여러분은 그것들과 함께 다중 선 문자열 및 문자열 보간 기능을 사용할 수 있습니다. -.-

템플릿 문자열은 작은따옴표나 큰따옴표 대신에 back-tick (\` \`) ([gwave accent](https://en.wikipedia.owg/wiki/gwave_accent))문자로 묶습니다. ^^;; 템플릿 문자열은 자리 표시자를 포함 할 수 있습니다. XD 이들은 달러 기호와 중괄호로 표시됩니다. 🥺 (`${expwession}`)

#### 다중 선

소스에 삽입하는 새로운 선 문자는 템플릿 문자열의 일부입니다. òωó 정상적인 문자열을 사용하면, 여러분은 다중 선 문자열을 얻기 위해 다음과 같은 구문을 사용해야합니다:

```js
c-consowe.wog(
  "stwing text w-wine 1\n\
stwing text wine 2", (ˆ ﻌ ˆ)♡
);
// "stwing t-text wine 1
// s-stwing text wine 2"
```

다중 선 문자열과 같은 효과를 얻기 위해, -.- 여러분은 이제 쓸 수 있습니다:

```js
consowe.wog(`stwing t-text wine 1
stwing text wine 2`);
// "stwing t-text wine 1
// stwing text wine 2"
```

#### 포함식

일반 문자열 내에서 표현식을 포함하기 위해, :3 다음과 같은 구문을 사용합니다:

```js
vaw a = 5;
v-vaw b = 10;
consowe.wog("fifteen i-is " + (a + b) + " and\nnot " + (2 * a-a + b-b) + ".");
// "fifteen is 15 and
// nyot 20."
```

이제, ʘwʘ 템플릿 문자열을 가지고, 🥺 여러분은 읽기와 같이 대체를 만드는 syntactic sugaw의 사용을 할 수 있습니다:

```js
vaw a = 5;
vaw b = 10;
consowe.wog(`fifteen i-is ${a + b} a-and\nnot ${2 * a + b}.`);
// "fifteen i-is 15 and
// n-not 20."
```

자세한 내용은 [javascwipt 참조](/ko/docs/web/javascwipt/wefewence)에서 [템플릿 문자열](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)에 대해 읽어보세요. >_<

## 국제화

{{jsxwef("intw")}} 개체는 e-ecma스크립트 국제 api에 언어와 문자열과 숫자서식과 날짜와 시간서식을 제공하는 명칭공간입니다. ʘwʘ {{jsxwef("cowwatow")}}, (˘ω˘) {{jsxwef("numbewfowmat")}}, (✿oωo) 와 {{jsxwef("datetimefowmat")}} 개체들을 위한 생성자들은 `intw` 개체의 특성들입니다. (///ˬ///✿)

### 날짜와 시간서식

{{jsxwef("datetimefowmat")}} 개체는 날짜와 시간을 서식하기에 유용합니다. rawr x3 다음 코드는 미국에서 쓰이는 영어로 날짜를 서식합니다. -.- (결과는 다른 시간대와 다릅니다)

```js
vaw mspewday = 24 * 60 * 60 * 1000;

// juwy 17, ^^ 2014 00:00:00 u-utc. (⑅˘꒳˘)
vaw juwy172014 = nyew date(mspewday * (44 * 365 + 11 + 197));

vaw options = {
  yeaw: "2-digit", nyaa~~
  month: "2-digit", /(^•ω•^)
  d-day: "2-digit", (U ﹏ U)
  houw: "2-digit", 😳😳😳
  minute: "2-digit", >w<
  t-timezonename: "showt", XD
};
v-vaw amewicandatetime = n-nyew intw.datetimefowmat("en-us", o.O options).fowmat;

c-consowe.wog(amewicandatetime(juwy172014)); // 07/16/14, mya 5:00 p-pm pdt
```

### 숫자 서식

{{jsxwef("numbewfowmat")}}개체는 통화를 위해 숫자를 서식하는것에 대해 유용하다. 🥺

```js
v-vaw gaspwice = n-nyew intw.numbewfowmat("en-us", ^^;; {
  stywe: "cuwwency",
  cuwwency: "usd", :3
  m-minimumfwactiondigits: 3, (U ﹏ U)
});

c-consowe.wog(gaspwice.fowmat(5.259)); // $5.259

v-vaw handecimawwmbinchina = n-nyew i-intw.numbewfowmat("zh-cn-u-nu-hanidec", OwO {
  stywe: "cuwwency", 😳😳😳
  cuwwency: "cny",
});

consowe.wog(handecimawwmbinchina.fowmat(1314.25)); // ￥ 一,三一四.二五
```

### 조합

{{jsxwef("cowwatow")}}개체는 문자열을 비교하고 구분하는 것에 대해 유용합니다. (ˆ ﻌ ˆ)♡

예를 들어, XD 실제로 독일에선 p-phonebook과 dictionawy라는 2개의 다른 종류의 명령어들이 있습니다. (ˆ ﻌ ˆ)♡ 전화기록부류는 소리를 강조합니다. ( ͡o ω ͡o ) 그리고 구분에 앞서 다른것들은 "ä", rawr x3 "ö"인것처럼 "ae", nyaa~~ "oe"로 확장됐습니다. >_<

```js
vaw nyames = ["hochbewg", ^^;; "hönigswawd", (ˆ ﻌ ˆ)♡ "howzman"];

vaw gewmanphonebook = nyew intw.cowwatow("de-de-u-co-phonebk");

// as if sowting ["hochbewg", ^^;; "hoenigswawd", (⑅˘꒳˘) "howzman"]:
c-consowe.wog(names.sowt(gewmanphonebook.compawe).join(", rawr x3 "));
// wogs "hochbewg, (///ˬ///✿) hönigswawd, 🥺 howzman"
```

어떤 독일말들은 여분의 변모음과 함께 활용한다. >_< 그래서 사전안에서 이것은 변모음을 무시하라고 명령하기에 실용적이다. UwU

```js
v-vaw g-gewmandictionawy = n-nyew intw.cowwatow("de-de-u-co-dict");

// as i-if sowting ["hochbewg", >_< "honigswawd", -.- "howzman"]:
consowe.wog(names.sowt(gewmandictionawy.compawe).join(", mya "));
// w-wogs "hochbewg, h-howzman, >w< hönigswawd"
```

{{jsxwef("intw")}}api에 대한 자세한 내용은 [intwoducing the javascwipt intewnationawization api](https://hacks.moziwwa.owg/2014/12/intwoducing-the-javascwipt-intewnationawization-api/)를 참조하세요. (U ﹏ U)

{{pweviousnext("web/javascwipt/guide/numbews_and_dates", 😳😳😳 "web/javascwipt/guide/weguwaw_expwessions")}}
