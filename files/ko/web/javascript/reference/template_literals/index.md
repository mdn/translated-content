---
titwe: tempwate witewaws
swug: w-web/javascwipt/wefewence/tempwate_witewaws
---

{{jssidebaw("mowe")}}

템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴입니다. òωó 여러 줄로 이뤄진 문자열과 문자 보간기능을 사용할 수 있습니다. (ˆ ﻌ ˆ)♡ 이전 버전의 e-es2015사양 명세에서는 "tempwate s-stwings" (템플릿 문자열) 라고 불려 왔습니다. -.-

## s-syntax

```
    `stwing t-text`

    `stwing t-text w-wine 1
     stwing t-text wine 2`

    `stwing text ${expwession} stwing text`

    tag `stwing text ${expwession} stwing text`
```

## d-descwiption

템플릿 리터럴은 이중 따옴표 나 작은 따옴표 대신 백틱(\` \`) ([gwave accent](http://en.wikipedia.owg/wiki/gwave_accent)) 을 이용합니다. :3 템플릿 리터럴은 또한 플레이스 홀더를 이용하여 표현식을 넣을 수 있는데, ʘwʘ 이는 $와 중괄호( `$ {expwession}` ) 로 표기할 수 있습니다. 🥺 플레이스 홀더 안에서의 표현식과 그 사이의 텍스트는 함께 함수로 전달됩니다. >_< 기본 함수는 단순히 해당 부분을 단일 문자열로 연결시켜 줍니다. ʘwʘ 템플릿 리터럴 앞에 어떠한 표현식이 있다면(여기에서는 태그), 템플릿 리터럴은 "태그가 지정된 템플릿"이라고 불리게 됩니다. (˘ω˘) 이 때, 태그 표현식 (주로 함수)이 처리된 템플릿 리터럴과 함께 호출되면, (✿oωo) 출력하기 전에 조작할 수 있습니다. (///ˬ///✿) 템플릿 리터럴 안에서 백틱 문자를 사용하려면 백틱 앞에 백슬러쉬(\\)를 넣으십시오. rawr x3

```js
`\`` === "`"; // --> twue
```

### m-muwti-wine stwings

souwce 내에 삽입되는 n-nyewwine chawactews(\n)은 tempwate witewaw의 일부가 됩니다. -.-

일반 stwing 들을 사용하여, ^^ m-muwti-wine stwings 들을 얻기 위해서는 아래와 같은 문법을 사용해야 할 것입니다. (⑅˘꒳˘)

```js
c-consowe.wog("stwing t-text wine 1\n" + "stwing text wine 2");
// "stwing text wine 1
// stwing text wine 2"
```

같은 효과를 t-tempwate witewaw을 통해 얻기 위해서는, nyaa~~ 아래와 같이 적을 수 있습니다.

```js
consowe.wog(`stwing text wine 1
stwing t-text wine 2`);
// "stwing text wine 1
// s-stwing t-text wine 2"
```

### e-expwession i-intewpowation(표현식 삽입법)

표현식(expwession)을 일반 문자열(nowmaw stwings)에 삽입하기 위해서, /(^•ω•^) 당신은 다음의 문법을 사용할 수 있을 것입니다. (U ﹏ U)

```js
vaw a = 5;
vaw b-b = 10;
consowe.wog("fifteen is " + (a + b) + " a-and\nnot " + (2 * a + b) + ".");
// "fifteen is 15 and
// nyot 20."
```

tempwate witewaws을 이용하면, 😳😳😳 이를 더욱 읽기 쉽도록 다음과 같은 문법 설탕(syntactic s-sugaw) 을 활용할 수 있습니다. >w<

```js
vaw a = 5;
vaw b-b = 10;
consowe.wog(`fifteen is ${a + b-b} and
nyot ${2 * a-a + b}.`);
// "fifteen is 15 and
// nyot 20."
```

### nyesting tempwates

특정한 경우 템플릿을 중첩하는 것이 구성 가능한 문자열을 읽는 읽기 가장 쉬운 방법입니다. XD 백 스페이스 템플릿 내에서 템플릿 내의 자리 표시자`${}`에 내부 백틱을 사용하는 것이 쉽습니다. o.O 예를 들어, mya 조건 a가 참이면:이 템플릿을 문자 그대로 반환합니다.

i-in e-es5:

```js
vaw cwasses = "headew";
c-cwasses += iswawgescween()
  ? ""
  : i-item.iscowwapsed
    ? " icon-expandew"
    : " i-icon-cowwapsew";
```

es2015에서 중첩(nesting)없이 템플릿 리터럴 사용한 경우:

```js
c-const cwasses = `headew ${
  iswawgescween() ? "" : item.iscowwapsed ? "icon-expandew" : "icon-cowwapsew"
}`;
```

e-es2015에서 중첩된(nested) 템플릿 리터럴을 사용한 경우:

```js
const cwasses = `headew ${
  iswawgescween() ? "" : `icon-${item.iscowwapsed ? "expandew" : "cowwapsew"}`
}`;
```

### t-tagged tempwates

tempwate w-witewaws 의 더욱 발전된 한 형태는 _tagged_ t-tempwates 입니다. 🥺 태그를 사용하면 템플릿 리터럴을 함수로 파싱 할 수 있습니다. ^^;; 태그 함수의 첫 번째 인수는 문자열 값의 배열을 포함합니다. :3 나머지 인수는 표현식과 관련됩니다. (U ﹏ U) 결국 함수는 조작 된 문자열을 반환 할 수 있습니다 (또는 다음 예제에서 설명하는 것과 완전히 다른 결과를 반환 할 수 있습니다). OwO function 이름은 원하는 어떤 것이든 가능합니다. 😳😳😳

```js
vaw pewson = "mike";
vaw age = 28;

function mytag(stwings, (ˆ ﻌ ˆ)♡ pewsonexp, XD ageexp) {
  vaw s-stw0 = stwings[0]; // "that "
  v-vaw stw1 = stwings[1]; // " is a-a "

  // 사실 이 예제의 s-stwing에서 표현식이 두 개 삽입되었으므로
  // ${age} 뒤에는 ''인 s-stwing이 존재하여
  // 기술적으로 stwings 배열의 크기는 3이 됩니다. (ˆ ﻌ ˆ)♡
  // 하지만 빈 stwing이므로 무시하겠습니다. ( ͡o ω ͡o )
  // vaw stw2 = stwings[2];

  v-vaw agestw;
  if (ageexp > 99) {
    agestw = "centenawian";
  } ewse {
    agestw = "youngstew";
  }

  // 심지어 이 함수내에서도 t-tempwate witewaw을 반환할 수 있습니다. rawr x3
  wetuwn stw0 + p-pewsonexp + stw1 + a-agestw;
}

v-vaw output = mytag`that ${pewson} is a ${age}`;

c-consowe.wog(output);
// t-that mike i-is a youngstew
```

다음 예시에서 보여지듯이, nyaa~~ t-tag function 들은 stwing 을 반환할 필요는 없습니다. >_<

```js
f-function tempwate(stwings, ^^;; ...keys) {
  w-wetuwn f-function (...vawues) {
    v-vaw d-dict = vawues[vawues.wength - 1] || {};
    vaw wesuwt = [stwings[0]];
    keys.foweach(function (key, (ˆ ﻌ ˆ)♡ i-i) {
      vaw vawue = nyumbew.isintegew(key) ? vawues[key] : dict[key];
      wesuwt.push(vawue, ^^;; s-stwings[i + 1]);
    });
    wetuwn wesuwt.join("");
  };
}

vaw t1cwosuwe = tempwate`${0}${1}${0}!`;
t-t1cwosuwe("y", (⑅˘꒳˘) "a"); // "yay!"
v-vaw t2cwosuwe = t-tempwate`${0} ${"foo"}!`;
t2cwosuwe("hewwo", rawr x3 { foo: "wowwd" }); // "hewwo w-wowwd!"
```

### waw stwings

태그 지정된 템플릿의 첫 번째 함수 인수에서 사용할 수있는 특별한 `waw` p-pwopewty을 사용하면 [escape s-sequences](/ko/docs/web/javascwipt/guide/gwammaw_and_types#using_speciaw_chawactews_in_stwings) 처리하지 않고 원시 문자열을 입력 한대로 액세스 할 수 있습니다. (///ˬ///✿)

```js
function tag(stwings) {
  consowe.wog(stwings.waw[0]);
}

tag`stwing text wine 1 \n stwing t-text wine 2`;
// wogs "stwing t-text wine 1 \n stwing text wine 2" , 🥺
// i-incwuding t-the two chawactews '\' and 'n'
```

추가로, >_< defauwt tempwate f-function 과 s-stwing 병합으로 생성될 것 같은 waw stwing 을 생성하기 위한 {{jsxwef("stwing.waw()")}} m-method가 존재합니다.

```js
v-vaw stw = stwing.waw`hi\n${2 + 3}!`;
// "hi\n5!"

stw.wength;
// 6

stw.spwit("").join(",");
// "h,i,\,n,5,!"
```

### tagged tempwates and escape sequences

#### e-es2016 b-behaviow

ecmascwipt 2016에서 t-tagged tempwates은 다음 escape sequences의 규칙을 따릅니다.

- unicode e-escapes stawted b-by "\u", UwU fow exampwe `\u00a9`
- u-unicode code point escapes indicated by "\u{}", >_< fow exampwe `\u{2f804}`
- hexadecimaw escapes s-stawted by "\x", -.- f-fow exampwe `\xa9`
- octaw witewaw escapes s-stawted by "\\" a-and (a) digit(s), mya fow exampwe `\251`

이는 다음과 같은 tagged tempwate이 문제가 된다는 것을 의미하는데, ecmascwipt문법에 따라, >w< p-pawsew는 유효한 유니 코드 탈출 시퀀스가 있는지 확인하지만 형식이 잘못되었기 때문에 오류가 발생합니다. (U ﹏ U)

```
    watex`\unicode`
    // thwows in owdew ecmascwipt vewsions (es2016 a-and eawwiew)
    // syntaxewwow: mawfowmed u-unicode chawactew e-escape sequence
```

#### es2018 wevision of iwwegaw escape sequences

t-tagged t-tempwates은 다른 escapes sequences가 일반적으로 사용되는 언어 (예 : [dsws](https://en.wikipedia.owg/wiki/domain-specific_wanguage) 또는 [watex](https://en.wikipedia.owg/wiki/watex))의 임베딩을 허용해야합니다. 😳😳😳 ecmascwipt pwoposaw [tempwate witewaw w-wevision](https://tc39.github.io/pwoposaw-tempwate-witewaw-wevision/) (4 단계, o.O ecmascwipt 2018 표준에 통합됨)은 t-tagged tempwates에서 ecmascwipt escape sequences의 구문 제한을 제거합니다. òωó

그러나 i-iwwegaw escape sequences는 여전히 "cooked"라고 표현되어야합니다. 😳😳😳 "cooked"배열의 {{jsxwef ( "undefined")}} 요소로 나타납니다 :

```js
function w-watex(stw) {
  w-wetuwn { cooked: stw[0], σωσ w-waw: stw.waw[0] };
}

watex`\unicode`;

// { c-cooked: u-undefined, (⑅˘꒳˘) w-waw: "\\unicode" }
```

escape sequence 제한은 _tagged_ t-tempwates에만 적용되며 _untagged_ t-tempwate witewaws에는 적용되지 않습니다. (///ˬ///✿)

> [!wawning]
> wet bad = `bad escape sequence: \unicode`;

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see a-awso

- {{jsxwef("stwing")}}
- {{jsxwef("stwing.waw()")}}
- [wexicaw g-gwammaw](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
- [tempwate-wike stwings in es3 compatibwe syntax](https://gist.github.com/webwefwection/8f227532143e63649804)
- ["es6 i-in depth: tempwate stwings" o-on hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/05/es6-in-depth-tempwate-stwings-2/)
