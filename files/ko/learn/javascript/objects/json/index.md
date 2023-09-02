---
title: JSON으로 작업하기
slug: Learn/JavaScript/Objects/JSON
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

JavaScript Object Notation (JSON)은 Javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷입니다. 웹 어플리케이션에서 데이터를 전송할 때 일반적으로 사용합니다(서버에서 클라이언트로 데이터를 전송하여 표현하려거나 반대의 경우). 여기저기서 자주 보았을테니 여기선 JSON을 파싱, 데이터에 접근하고 JSON을 생성하는 등 Javascript로 JSON을 다루는 법에 대해 알아봅시다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전지식:</th>
      <td>
        컴퓨터 기초, HTML과 CSS에 대한 기본 지식, Javascript 기초 (<a
          href="/ko/docs/Learn/JavaScript/First_steps"
          >First steps</a
        >과
        <a href="/ko/docs/Learn/JavaScript/Building_blocks"
          >Building blocks</a
        >
        참조), OOJS 기초 (<a
          href="/ko/docs/Learn/JavaScript/Object-oriented/Introduction"
          >Introduction to objects</a
        >
        참조).
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        JSON에 담긴 데이터를 이용하는 법과 JSON 객체 생성하는 법에 대해
        알아보기.
      </td>
    </tr>
  </tbody>
</table>

## 아니, 대체 JSON이 뭐죠?

{{glossary("JSON")}} 는 [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford)가 널리 퍼뜨린 Javascript 객체 문법을 따르는 문자 기반의 데이터 포맷입니다. JSON이 Javascript 객체 문법과 매우 유사하지만 딱히 Javascript가 아니더라도 JSON을 읽고 쓸 수 있는 기능이 다수의 프로그래밍 환경에서 제공됩니다.

JSON은 문자열 형태로 존재합니다 — 네트워크를 통해 전송할 때 아주 유용하죠. 데이터에 접근하기 위해서는 네이티브 JSON 객체로 변환될 필요가 있습니다. 별로 큰 문제는 아닌 것이 Javascript는 [JSON](/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON) 전역 객체를 통해 문자열과 JSON 객체의 상호변환을 지원합니다.

> **참고:** 문자열에서 네이티브 객체로 변환하는 것은 파싱(Parsing)이라고 합니다. 네트워크를 통해 전달할 수 있게 객체를 문자열로 변환하는 과정은 문자열화(Stringification)이라고 합니다.

개별 JSON 객체를 `.json` 확장자를 가진 단순 텍스트 파일에 저장할 수 있습니다. {{glossary("MIME 타입")}}은 `application/json` 입니다.

### JSON 구조

위에서 설명했듯이 JSON은 Javascript 객체 리터럴 문법을 따르는 문자열입니다. JSON 안에는 마찬가지로 Javascript의 기본 데이터 타입인 문자열, 숫자, 배열, 불리언 그리고 다른 객체를 포함할 수 있습니다. 이런 방식으로 여러분은 데이터 계층을 구축할 수 있습니다, 아래 처럼요.

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

이 객체를 Javascript 프로그램에서 로드하고, 예를 들어 `superHeroes`라는 이름의 변수에 파싱하면 [JavaScript object basics](/ko/docs/Learn/JavaScript/Objects/Basics) 문서에서 보았던 것처럼 점/브라켓 표현법을 통해 객체 내 데이터에 접근할 수 있게 됩니다. 아래와 같이요:

```js
superHeroes.homeTown;
superHeroes["active"];
```

하위 계층의 데이터에 접근하려면, 간단하게 프로퍼티 이름과 배열 인덱스의 체인을 통해 접근하면 됩니다. 예를 들어 superHeroes의 두 번째 member의 세 번째 power에 접근하려면 아래와 같이 하면 됩니다.

```js
superHeroes["members"][1]["powers"][2];
```

1. 우선 변수 이름은 — `superHeroes`입니다.
2. `members` 프로퍼티에 접근하려면, `["members"]`를 입력합니다.
3. `members`는 객체로 구성된 배열입니다. 두 번째 객체에 접근할 것이므로 `[1]`를 입력합니다.
4. 이 객체에서 `powers` 프로퍼티에 접근하려면 `["powers"]`를 입력합니다.
5. `powers` 프로퍼티 안에는 위에서 선택한 hero의 superpower들이 있습니다. 세 번째 것을 선택해야 하므로 `[2]`.

> **참고:** 위에서 볼 수 있듯 [JSONTest.html](http://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) 예제에서 JSON 내 변수([source code](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/JSONTest.html) 참고)를 만들었다. 당신 브라우저의 Javascript 콘솔을 통하여 이 코드를 로드하고 그 변수 안에 얻을 수 있는 데이터에 접근해보자.

### JSON에서의 배열

앞서 JSON 텍스트는 기본적으로 자바스크립트의 오브젝트와 비슷하게 생겼다고 언급하였습니다. 그리고 그것은 대부분 맞습니다. "대부분 맞다"라고 말한 이유는 자바스크립트의 배열 또한 JSON에서 유효하기 때문입니다.

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

위 예제는 완벽히 올바른 형태의 JSON입니다. 배열의 요소(파싱된 버전)에 접근하기 위해서는 배열의 인덱스를 사용하면 됩니다. `[0]["powers"][0]` 와 같이 말이죠.

### Other notes

- JSON은 순수히 데이터 포맷입니다. 오직 프로퍼티만 담을 수 있습니다. 메서드는 담을 수 없습니다.
- JSON은 문자열과 프로퍼티의 이름 작성시 큰 따옴표만을 사용해야 합니다. 작은 따옴표는 사용불가합니다.
- 콤마나 콜론을 잘못 배치하는 사소한 실수로 인해 JSON파일이 잘못되어 작동하지 않을 수 있습니다. [JSONLint](http://jsonlint.com/)같은 어플리케이션을 사용해 JSON 유효성 검사를 할 수 있습니다.
- JSON은 JSON내부에 포함할 수 있는 모든 형태의 데이터 타입을 취할 수 있습니다. 즉, 배열이나 오브젝트 외에도 단일 문자열이나 숫자또한 유효한 JSON 오브젝트가 됩니다.
- 자바스크립트에서 오브젝트 프로퍼티가 따옴표로 묶이지 않을 수도 있는 것과는 달리, JSON에서는 따옴표로 묶인 문자열만이 프로퍼티로 사용될 수 있습니다.

## 해보면서 배우기: JSON을 다뤄 보자

웹사이트에서 JSON 데이터를 어떻게 사용할 수 있는지 예제를 통해 살펴봅시다.

### 시작하기

우선 로컬 저장소에 [heroes.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes.html) 와 [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/style.css) 파일을 복사해주세요. style.css 파일은 페이지에 적용할 간단한 CSS를 담고 있으며, heros.html 파일은 간단한 body HTML을 담고 있습니다.

```html
<header></header>

<section></section>
```

자바스크립트 코드를 담기 위한{{HTMLElement("script")}} 요소를 추가해 주세요. 현재는 두 줄의 코드만 작성되어 있습니다. {{HTMLElement("header")}} 와 {{HTMLElement("section")}} 요소를 참조하여 변수에 담는 코드입니다. :

```js
var header = document.querySelector("header");
var section = document.querySelector("section");
```

JSON 데이터를 다음 깃허브 링크에서 가져올수 있습니다. <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

페이지에 JSON 데이터를 로딩하고 DOM 조작을 통해 아래와 같이 만들어 봅시다. :

![](json-superheroes.png)

### JSON 가져오기

JSON을 가져오기 위해서는, {{domxref("XMLHttpRequest")}} (때론 **XHR**)로 불리는 API를 사용하면 된다. 이것은 매우 유용한 JavaScript 오브젝트로 JavaScript (e.g. images, text, JSON, even HTML snippets)를 통해 우리가 서버로 부터 다양한 리소스를 가져오는 요청을 만들어 준다. 즉, 전체 페이지를 불러오지 않고도 필요한 부분만을 업데이트 할 수 있다. 이 기능은 좀 더 효과적으로 반응형 웹페이지을 다루는데 흥미로울 수 있으나, 아쉽게도 이 내용에 대한 자세한 부분은 여기서 다루지 않는다.

1. 일단, 변수로 둘 JSON의 URL을 가져와야 합니다. 아래의 코드를 당신의 JavaScript 코드 내에 추가해 주세요.

   ```js
   var requestURL =
     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
   ```

2. 요청을 만들기 위해, 우리는 `new` 키워드를 이용하여 `XMLHttpRequest` 생성자로부터 새로운 request 인스턴스를 생성해야 합니다. 아래의 코드를 추가해 주세요.

   ```js
   var request = new XMLHttpRequest();
   ```

3. 이제 [`open()`](/ko/docs/Web/API/XMLHttpRequest/open) 메소드를 사용해 새로운 요청을 만듭니다. 아래의 코드를 추가해 주세요.

   ```js
   request.open("GET", requestURL);
   ```

   이것은 최소 두 개의 매개변수를 가집니다. 다른 선택적 매개변수도 가능해요. 이건 단순 예제니깐 두 가지 필수 매개변수만 취할게요.

   - HTTP 메서드는 네트워크 요청을 만들 때 사용됩니다. 이 경우 [`GET`](/ko/docs/Web/HTTP/Methods/GET) 을 사용하는게 좋겠어요. 우린 그저 데이터를 가져오면 되니깐요.
   - URL은 요청을 보낼 곳을 지정합니다. 우리가 저장해 둔 JSON 파일의 URL로 지정할게요.

4. 다음으로, 아래의 두 줄을 추가해 주세요. [`responseType`](/ko/docs/Web/API/XMLHttpRequest/responseType) 을 JSON으로 설정했어요. XHR로 하여금 서버가 JSON 데이터를 반환할 것이며, 자바스크립트 객체로서 변환될 것이라는 걸 알게 하기 위해서죠. 이제 [`send()`](/ko/docs/Web/API/XMLHttpRequest/send) 메서드를 이용해 요청을 보냅시다.

   ```js
   request.responseType = "json";
   request.send();
   ```

5. 마지막 부분은 서버의 응답을 기다리고, 그것의 처리까지와 관련된 섹션입니다. 코드 아래에 다음의 코드를 추가해 주세요.

   ```js
   request.onload = function () {
     var superHeroes = request.response;
     populateHeader(superHeroes);
     showHeroes(superHeroes);
   };
   ```

우리는 요청에 대한 응답을 `superHeroes`라는 변수에 저장할 겁니다.([`response`](/ko/docs/Web/API/XMLHttpRequest/response) 프로퍼티로 가능) 이 변수는 이제 JSON 데이터에 기반한 자바스크립트 객체를 포함하게 됩니다! 두 개의 함수를 호출해 이 객체를 전달합시다. 하나는 <`header>` 를 적절한 데이터로 채울 것이고, 다른 하나는 팀의 각 히어로에 대한 정보 카드를 생성하여 `<section>`내에 집어넣을 겁니다.

우리는 로드 이벤트가 request 객체에 발생할 때에 작동하는 이벤트 핸들러 내에 코드를 넣었습니다. ([`onload`](/ko/docs/Web/API/XMLHttpRequestEventTarget/onload) 참고) 왜냐하면 응답이 성공적으로 돌아왔을 때만 로드 이벤트가 작동하기 때문입니다. 이러한 방식은 우리가 무언가를 시도하려고 할 때 `request.response` 가 확실히 가능하다는 것을 보장해 줍니다.

### 헤더 조작하기

우린 JSON 데이터를 가져왔고, 그것을 자바스크립트 객체로 변환했어요. 이제 우리가 위에서 언급한 두 개의 함수를 사용함으로써 이것을 활용해 봅시다. 우선, 이전 코드 아래에 다음 함수 정의를 추가해 주세요.

```js
function populateHeader(jsonObj) {
  var myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  var myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
  header.appendChild(myPara);
}
```

우리는 이 매개변수를 `jsonObj`라고 이름 붙였습니다. 여러분으로 하여금 이 자바스크립트 객체가 JSON으로 부터 생겨났다는 걸 상기시켜 주기 위해서죠. 첫번째로 [`createElement()`](/ko/docs/Web/API/Document/createElement)로 {HTMLElement("h1")}} 요소를 생성하고, 이것의 [`textContent`](/ko/docs/Web/API/Node/textContent)를 객체의 `squadName` 프로퍼티와 같도록 만들어 준 뒤, [`appendChild()`](/ko/docs/Web/API/Node/appendChild)를 사용해서 헤더에 붙이도록 했습니다. We then do a very similar 이와 비슷한 과정을 paragraph에도 적용했죠. 생성하고,그것의 text content를 설정하고 헤더에 붙이도록요. 차이점이라면 그것의 텍스트가 객체의 `homeTown` 과 `formed` 프로퍼티를 포함한 문자열로 설정된 거예요.

### 히어로 정보 카드 만들기

자, 다음으로 슈퍼히어로 카드를 생성하고 보여줄 함수를 코드의 마지막에 추가해 주세요.

```js
function showHeroes(jsonObj) {
  var heroes = jsonObj["members"];

  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement("article");
    var myH2 = document.createElement("h2");
    var myPara1 = document.createElement("p");
    var myPara2 = document.createElement("p");
    var myPara3 = document.createElement("p");
    var myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

우선, 새로운 변수 내의 자바스크립트 객체에 `members` 프로퍼티를 저장해 주세요. 이 배열은 각 히어로에 대한 정보를 가진 여러 개의 객체를 포함합니다.

다음으로, 우리는 [for loop](/ko/docs/Learn/JavaScript/Building_blocks/Looping_code#The_standard_for_loop)를 사용하여 배열 내의 각 객체에 반복 실행을 걸겁니다.

1. 몇 개의 새로운 요소를 생성해 주세요: `<article>`, `<h2>`, 3개의 `<p>`, 그리고 `<ul>`.
2. \<h2>가 히어로의 `name`을 가지도록 설정해 주세요.
3. 목록 내의 정보를 소개하기 위해 세 개의 paragraph 안에 그들의 `secretIdentity`, `age`, 그리고 "Superpowers:" 라는 문장을 넣어 주세요.
4. `superPowers` 라는 새로운 변수 안에 `powers`프로퍼티를 저장해 주세요. 이것은 현재 히어로의 초능력(superpower)을 열거한 배열을 포함합니다.
5. 현재 히어로의 초능력을 반복 실행할 또다른 `for` 반복문을 사용합니다. 하나의 객체씩 `<li>` 를 생성하고, 그 안에 초능력을 집어 넣고, `appendChild()`를 사용하여 '`myList'` 라는 `<ul>` 안에 `listItem` 을 집어 넣습니다.
6. 마지막으로 `<article>` (`myArticle`) 안에 `<h2>`, `<p>`, 그리고 `<ul>` 넣은 뒤, `<section>` 안에 `<article>`을 넣어 줍니다. 요소가 추가되어 지는 순서가 중요해요.왜냐하면 HTML 내에 보여질 거거든요.

> **참고:** 만약 실습에 문제를 겪고 있다면, [heroes-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished.html) 코드를 참조하세요. ([running live](http://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) 또한 보세요.)

> **참고:** 만약 우리가 주로 사용하는 JavaScript 객체에 접근하기 위한 점/괄호 표기법을 따르는데 문제를 겪고 있다면, 다른 탭이나 당신의 선호하는 텍스트 에디터에 [superheroes.json](http://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) 파일을 여는 것이 도움이 될 것이다. 또한 당신은 점/괄호 표기법에 대한 다른 정보를 위해 [JavaScript object basics](/ko/docs/Learn/JavaScript/Objects/Basics) 글을 다시 확인하는 것을 권합니다.

## 객체와 문자 사이의 변환

위의 예제는 자바스크립트 객체에 접근한다는 관점에서 단순한 편이었죠. 왜냐하면 자바스크립트 객체를 사용해 우리는 XHR 요청을 곧장 JSON 응답으로 변환했으니깐요.

```js
request.responseType = "json";
```

하지만 우리는 이따금 재수 없어요. 때때로 우리는 날것의 JSON 문자열을 받기도 하고, 그것을 우리 스스로가 객체로 변환시켜야 할 때도 생기거든요. 그리고 네트워크를 통해 자바스크립트 객체를 보내고 싶을 때도 우리는 전송 전에 그걸 JSON(문자열)로 변환시켜야 해요. 다행히도, 이 두가지 문제가 웹 개발에 있어서 매우 흔한 덕에 다음과 같은 두가지 방법을 포함한 JSON 내장 객체가 브라우저 내에서 이용 가능합니다.

- [`parse()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): JSON 문자열을 매개변수로서 수용하고, 일치하는 자바스크립트 객체로서 변환합니다.
- [`stringify()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): 객체를 매개변수로서 수용하고, JSON 문자열 형태로 변환합니다.

당신은 예제인 [heroes-finished-json-parse.html](http://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html)에서 첫번째 동작을 확인할 수 있습니다.(아래 코드 참고-[source code](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished-json-parse.html)) — JSON 텍스트를 반환하기 위한 추가한 XHR와 JavaScript 객체로 전환하기 위해 사용된 `parse()`제외하면 이 코드는 이전에 우리가 빌드한 것과 완전히 같은 코드입니다. 다음은중요한 코드의 일부입니다.:

```js
request.open("GET", requestURL);
request.responseType = "text"; // now we're getting a string!
request.send();

request.onload = function () {
  var superHeroesText = request.response; // get the string from the response
  var superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};
```

예상했겠지만, `stringify()` 는 반대의 방식으로 작용됩니다. 다음 나오는 코드 라인들을 당신의 브라우저 JavaScript 콘솔에 동작을 확인하면서 한 줄씩 입력해봅시다.:

```js
var myJSON = { name: "Chris", age: "38" };
myJSON;
var myString = JSON.stringify(myJSON);
myString;
```

이 페이지에서는 우리는 JavaScript 객체를 생성하고 있으며 이 객체가 무엇을 포함하고 있는지 확인하고 `stringify()` —반환된 값을 새로운 변수에 저장합니다—를 사용해서 JSON 문자열로 변환시켰습니다. 다시 한 번 더 확인해 봅시다.

## 실력을 시험해보자!

당신은 이 글의 끝에 도달했지만 가장 중요한 정보들을 기억하고 있습니까? 다음 단계를 가기 전 당신이 얼마나 이 정보를 습득하고 있는지 확인할 수 있는 테스트를 할 수 있습니다. — [Test your skills: JSON](/ko/docs/Learn/JavaScript/Objects/Test_your_skills:_JSON)

## 요약

이 글에서, 당신의 프로그램에서 JSON을 어떻게 생성하고 구성 요소를 파악할 수 있는지, 그리고 JSON 안에 묶여 있는 자료들에 어떻게 접근하는 방법을 포함한 JSON을 사용하기 위한 간단한 가이드를 제공했습니다. 다음 글에서는, 객체 지향적인 JavaScript에 대해 시작해 볼 것입니다.

## 참고

- [JSON object reference page](/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [XMLHttpRequest object reference page](/ko/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTTP request methods](/ko/docs/Web/HTTP/Methods)
- [Official JSON web site with link to ECMA standard](http://json.org)

{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}
