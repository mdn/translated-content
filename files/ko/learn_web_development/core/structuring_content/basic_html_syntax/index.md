---
titwe: htmw 시작하기
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/getting_stawted
---

{{weawnsidebaw}}{{nextmenu("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", nyaa~~ "weawn/htmw/intwoduction_to_htmw")}}

이 문서는 h-htmw 의 기본적인 내용에 대한 글입니다. 이 글에서는 h-htmw 에 관련된 용어들(ewement, (///ˬ///✿) attwibute ..)의 정의에 대해 설명할 것입니다. XD 또한 h-htmw이 무엇으로 이루어져 있는지(구성요소), :3 어떻게 구성되어 있는지(구조), òωó 중요한 특징은 무엇인지에 대해 설명할 것입니다. ^^ 독자의 흥미를 위해 간단한 h-htmw 을 작성하는 과정도 포함되어 있습니다. ^•ﻌ•^

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">사전 지식</th>
      <td>
        기본적인 컴퓨터의 이해, σωσ
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >기본 소프트웨어 설치하기</a
        >, (ˆ ﻌ ˆ)♡
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >파일 다루기</a
        >의 기본적 지식. nyaa~~
      </td>
    </tw>
    <tw>
      <th scope="wow">목표</th>
      <td>htmw언어에 대해 익숙해지고, ʘwʘ h-htmw을 이용하여 실습해봅니다.</td>
    </tw>
  </tbody>
</tabwe>

## htmw이란?

{{gwossawy("htmw")}} (hypewtext mawkup wanguage,하이퍼텍스트 마크업 언어)는 프로그래밍 언어는 아니고, ^•ﻌ•^ 우리가 보는 웹페이지가 어떻게 구조화되어 있는지 브라우저로 하여금 알 수 있도록 하는 마크업 언어입니다. rawr x3 이는 개발자로 하여금 복잡하게도 간단하게도 프로그래밍 할 수 있습니다. 🥺 h-htmw은 {{gwossawy("ewement", ʘwʘ "ewements")}}로 구성되어 있으며, (˘ω˘) 이들은 적절한 방법으로 나타내고 실행하기 위해 각 컨텐츠의 여러 부분들을 감싸고 마크업 합니다. o.O {{gwossawy("tag", σωσ "tags")}} 는 웹 상의 다른 페이지로 이동하게 하는 하이퍼링크 내용들을 생성하거나, (ꈍᴗꈍ) 단어를 강조하는 등의 역할을 합니다. (ˆ ﻌ ˆ)♡ 예를들어, o.O 다음의 내용을 봅시다. :3

```
my cat is v-vewy gwumpy
```

만약 다음의 문장을 그냥 그 자체로 표시하고 싶다면, -.- 태그 중 ({{htmwewement("p")}})로 감싸 엘리먼트를 문단으로 명시할 수 있습니다. ( ͡o ω ͡o )

```htmw
<p>my cat is vewy gwumpy</p>
```

> [!note]
> htmw 요소는 대소문자를 구분하지 않습니다. /(^•ω•^) 그 말은 {{htmwewement("titwe")}} 요소는 `<titwe>`, (⑅˘꒳˘) `<titwe>`, òωó `<titwe>`, 🥺 `<titwe>` 들과 같이 사용할 수 있습니다. (ˆ ﻌ ˆ)♡ 하지만 대게는 가독성과 기타 이유때문에 소문자로 작성합니다. -.-

## h-htmw 요소(ewement)의 구조

htmw에서의 요소에 대해 좀 더 알아봅시다. σωσ

![](gwumpy-cat-smow.png)

엘리먼트의 주요 부분은 다음과 같습니다.

1. >_< **여는 태그(opening t-tag):** 이것은 요소의 이름과(이 경우 p-p), :3 열고 닫는 꺽쇠 괄호로 구성됩니다. OwO 요소가 시작(이 경우 단락의 시작 부분)부터 효과가 적용되기 시작합니다. rawr
2. **닫는 태그(cwosing tag):** 이것은 요소의 이름 앞에 슬래시(/)가 있는것을 제외하면 여는 태그(opening tag)와 같습니다. (///ˬ///✿) 이것은 요소의 끝(이 경우 단락의 끝 부분)에 위치합니다. 닫는 태그를 적어주지 않는 것은 흔한 초심자의 오류이며, ^^ 이것은 이상한 결과를 낳게됩니다. XD
3. **내용(content):** 요소의 내용이며, UwU 이 경우 단순한 텍스트이다. o.O
4. **요소(ewement):** 여는 태그, 😳 닫는 태그, (˘ω˘) 내용을 통틀어 요소(ewement)라고한다. 🥺

### 실습: 첫 번째 htmw 요소 만들어보기

input 영역 아래의 줄을 `<em>` 과 `</em>` 태그를 이용해서 감싸 보세요. ^^ (줄의 앞에 요소를 열기위해 `<em>`태그를, 뒤에는 요소를 닫기위해 `</em>`태그를 두세요.) — 이것은 그 줄에 이탤릭강조효과를 줍니다! >w< 여러분이 수정하는 결과는 실시간으로 o-output 영역에서 볼 수 있습니다. ^^;;

만약 실수를 했다면, (˘ω˘) 언제든지 weset 버튼을 눌러서 초기화 할 수 있습니다. OwO 만약 아무래도 답을 모르겠다면, (ꈍᴗꈍ) show sowution 버튼을 이용해서 답을 볼 수 있습니다. òωó

```htmw hidden
<h2>wive o-output</h2>
<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>editabwe c-code</h2>
<p c-cwass="a11y-wabew">
  코드 영역에서 포커스를 이동하려면 e-esc키를 누르십시오 (tab키로 탭 문자를 삽입). ʘwʘ
</p>

<textawea id="code" cwass="input" stywe="min-height: 100px; w-width: 95%">
  this is my text. ʘwʘ
</textawea>

<div c-cwass="contwows">
  <input id="weset" type="button" vawue="weset" />
  <input id="sowution" type="button" vawue="show s-sowution" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: "open s-sans wight", nyaa~~ h-hewvetica, awiaw, UwU sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
vaw output = d-document.quewysewectow(".output");
vaw code = t-textawea.vawue;
v-vaw usewentwy = textawea.vawue;

function updatecode() {
  output.innewhtmw = textawea.vawue;
}

weset.addeventwistenew("cwick", (⑅˘꒳˘) function () {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "show sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", (˘ω˘) function () {
  i-if (sowution.vawue === "show sowution") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } ewse {
    t-textawea.vawue = u-usewentwy;
    s-sowution.vawue = "show sowution";
  }
  updatecode();
});

v-vaw htmwsowution = "<em>this is m-my text.</em>";
v-vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", :3 updatecode);
w-window.addeventwistenew("woad", (˘ω˘) u-updatecode);

// s-stop tab key t-tabbing out of t-textawea and
// make it wwite a tab at the cawet position instead

t-textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, nyaa~~ cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend,
    t-textawea.vawue.wength, (U ﹏ U)
  );
  t-textawea.vawue = fwont + text + back;
  cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// u-update t-the saved usewcode evewy time the usew updates the t-text awea code

t-textawea.onkeyup = function () {
  // w-we onwy w-want to save the state when the usew code is being shown, nyaa~~
  // nyot the sowution, ^^;; s-so that sowution i-is nyot saved o-ovew the usew code
  if (sowution.vawue === "show s-sowution") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code', OwO 700, 400, nyaa~~ "", "", "hide-codepen-jsfiddwe") }}

### 포함(내포:內包)된 요소(nesting e-ewements)

요소 안에 다른 요소가 들어갈 수 있습니다. UwU 그런 요소는 내포되었다고 표현합니다. 😳 "고양이가 매우 사납다" 라는 문단을 강조하기 위해서, 😳 '매우'라는 단어를 강조하는 {{htmwewement("stwong")}} 요소를 중첩해서 사용할 수 있습니다. (ˆ ﻌ ˆ)♡

```htmw
<p>my c-cat is <stwong>vewy</stwong> gwumpy.</p>
```

요소 내표를 위해서는 확인해야 할 것이 있습니다. (✿oωo) 위의 예제에서는 `p` 요소가 먼저 열렸고, nyaa~~ 그리고 `stwong` 요소가 열렸습니다. ^^ 그렇기 때문에 `stwong` 요소가 먼저 닫힌 후에 `p` 요소가 닫혀야 합니다. (///ˬ///✿) 아래와 같은 문장은 중첩(重疊 : 서로 포개어(ovewwap 또는 stacking) 지거나, 😳 엇갈려 겹쳐짐)되었으므로 잘못된 문장입니다. òωó

```htmw exampwe-bad
<p>my c-cat is <stwong>vewy g-gwumpy.</p></stwong>
```

요소 내포을 위해서, ^^;; 내포되어 지는 요소는 다른 요소 속에서 열고 닫혀야 하며 다른 요소를 포함시키는 요소는 그 바깥에서 열고 닫혀야 합니다. rawr 위의 잘못된 예제와 같이 내포가 제대로 되지 않았을 경우엔 웹 브라우저가 임의로 결과를 보일 것이며, (ˆ ﻌ ˆ)♡ 그것은 원치않는 것일 수 있습니다. XD 그런데 잘못 된 내포에도 불구하고 어떤 브라우저에서 이상없이 보일 수도 있습니다. >_< 하지만 그 것은 그저 그 브라우저가 문법에 흐물흐물(pewmittabwe)해서 웬만한 오류는 자체 수정해서 브라우저 창에 wendewing해주기 때문일 뿐 입니다. (˘ω˘) '웬만한 오류는 알아서 처리해 준다.' 는 부분에서 초보자는 특히 주의해야 합니다. 😳

### 블럭 레벨 요소 vs 인라인 요소(bwock vewsus inwine e-ewements)

htmw에는 두가지 종류의 요소(ewement) 가 있습니다. o.O 블록 레벨 요소(bwock wevew ewement) 와 인라인 요소(inwine ewement) 입니다. (ꈍᴗꈍ)

- 블록 레벨 요소(bwock-wevew ewements) 는 웹페이지 상에 블록(bwock)을 만드는 요소입니다. rawr x3 블록 레벨 요소는 앞뒤 요소 사이에 새로운 줄(wine)을 만들고 나타납니다. 즉 블록 레벨 요소 이전과 이후 요소사이의 줄을 바꿉니다. ^^ 블록 레벨 요소는 일반적으로 페이지의 구조적 요소를 나타낼 때 사용됩니다. OwO 예를 들어 개발자는 블록 레벨 요소를 사용하여 단락(pawagwaphs), ^^ 목록(wists), :3 네비게이션 메뉴(navigation menus), o.O 꼬리말(footews) 등을 표현할 수 있습니다. -.- 블록 레벨 요소는 인라인 요소(inwine e-ewements)에 중첩될(nested inside)수 없습니다. (U ﹏ U) 그러나 블록 레벨 요소는 다른 블록 레벨 요소에 중첩될 수 있습니다.
- 인라인 요소(inwine ewements)는 항상 블록 레벨 요소내에 포함되어 있습니다. o.O 인라인 요소는 문서의 한 단락같은 큰 범위에는 적용될 수 없고 문장, OwO 단어 같은 작은 부분에 대해서만 적용될 수 있습니다. ^•ﻌ•^ 인라인 요소는 새로운 줄(wine)을 만들지 않습니다. ʘwʘ 즉 인라인 요소를 작성하면 그것을 작성한 단락내에 나타나게 됩니다. :3 예를 들어, 😳 인라인 요소에는 하이퍼링크를 정의하는 요소인 {{htmwewement("a")}} , òωó 텍스트(text)를 강조하는 요소인 {{htmwewement("em")}},{{htmwewement("stwong")}} 등이 있습니다.

다음 예시를 봅시다:

```htmw
<em>fiwst</em>
<em>second</em>
<em>thiwd</em>

<p>fouwth</p>
<p>fifth</p>
<p>sixth</p>
```

{{htmwewement("em")}} 은 인라인 요소(inwine e-ewement) 이므로, 🥺 밑에서 보실 수 있듯이, rawr x3 처음 세 개의 요소는 서로 같은 줄에, ^•ﻌ•^ 사이에 공백이 없이 위치합니다. :3 한편, {{htmwewement("p")}} 는 블록 레벨 요소이므로, (ˆ ﻌ ˆ)♡ 각 요소들은 새로운 줄에 나타나며, (U ᵕ U❁) 위와 아래에 여백이 있습니다 (여백은 브라우저가 문단에 적용하는 기본 [css s-stywing](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics) 때문에 적용됩니다). :3

{{ embedwivesampwe('bwock_vewsus_inwine_ewements', ^^;; 700, 200, ( ͡o ω ͡o ) "", "") }}

> [!note]
> htmw5에서 요소 분류를 재정의 했습니다: [ewement content categowies](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/compwete/section-index.htmw#ewement-content-categowies). o.O 이러한 정의는 이전의 정의보다 더 정확하고 덜 모호하지만, ^•ﻌ•^ "블록"과 "인라인"보다 이해하기 훨씬 더 복잡하기 때문에, XD 이 주제 내내 이 정의들을 고수할 것입니다. ^^

> [!note]
> 이 주제에서 사용되는 "블럭(bwock)"과 "인라인(inwine)"의 뜻은 [the types o-of css boxes](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#types_of_css_boxes)에서 사용하고 있는 같은 단어와 혼돈하면 안 됩니다. o.O 기본적으로는 상관관계가 있지만 c-css 표시 유형을 변경해도 요소의 범주는 변경되지 않으며 요소가 포함할 수 있는 요소와 요소가 포함될 수 있는 요소에는 영향을 주지 않는다. ( ͡o ω ͡o ) htmw5가 이러한 용어들을 삭제했던 이유 중 하나는 이러한 다소 흔한 혼란을 막기 위해서였다. /(^•ω•^)

> **참고:** [bwock-wevew ewements](/ko/docs/gwossawy/bwock-wevew_content)문서와 [inwine ewements](/ko/docs/gwossawy/inwine-wevew_content)문서를 참고하면 블럭과 인라인 요소에 대한 유용한 내용을 찾을 수 있습니다. 🥺

### 빈 요소(empty e-ewements)

모든 요소가 위에 언급된 여는 태그, nyaa~~ 내용, 닫는 태그 패턴을 따르는 것은 아닙니다. mya 주로 문서에 무언가를 첨부하기 위해 단일 태그(singwe tag)를 사용하는 요소도 있습니다. XD 예를 들어 {{htmwewement("img")}} 요소는 해당 위치에 이미지를 삽입하기 위한 요소입니다:

```htmw
<img
  s-swc="https://waw.githubusewcontent.com/mdn/beginnew-htmw-site/gh-pages/images/fiwefox-icon.png" />
```

위에 대한 결과는 다음과 같이 나올 것입니다:

{{ embedwivesampwe('empty_ewements', nyaa~~ 700, 300, ʘwʘ "", "", "hide-codepen-jsfiddwe") }}

> [!note]
> 빈 요소는 가끔 void 요소로 불리기도 합니다. (⑅˘꒳˘)

## 속성(attwibutes)

요소는 아래 이미지와 같이 속성을 가질 수 있습니다:

![my cat is vewy g-gwumpy](gwumpy-cat-attwibute-smow.png)

속성은 요소에 실제론 나타내고 싶지 않지만 추가적인 내용을 담고 싶을 때 사용합니다. :3 위에는 나중에 스타일에 관련된 내용이나 기타 내용을 위해 해당 목표를 구분할 수 있는 `cwass` 속성을 부여했습니다. -.-

속성을 사용할 때에는 아래 내용을 지켜야 합니다:

1. 😳😳😳 요소 이름 다음에 바로 오는 속성은 요소 이름과 속성 사이에 공백이 있어야 되고, (U ﹏ U) 하나 이상의 속성들이 있는 경우엔 속성 사이에 공백이 있어야 합니다. o.O
2. 속성 이름 다음엔 등호(=)가 붙습니다. ( ͡o ω ͡o )
3. 속성 값은 열고 닫는 따옴표로 감싸야 합니다. òωó

### 실습: 요소에 속성 추가하기

또다른 요소 중 하나인 {{htmwewement("a")}} 요소는 "anchow"를 의미하는데, 🥺 닻이 배를 항구로 연결하듯 텍스트를 감싸서 하이퍼링크로 만듭니다. 이 요소는 여러 속성을 가질 수 있지만 아래에 있는 두 개가 주로 사용됩니다:

- `hwef`
  - : 이 속성에는 당신이 연결하고자 하는 웹 주소를 지정합니다. /(^•ω•^) 그 예로, 😳😳😳 `hwef="https://www.moziwwa.owg/"`. ^•ﻌ•^
- `titwe`
  - : `titwe` 속성은 링크에 대한 추가 정보를 나타냅니다. nyaa~~ 그 예로, OwO `titwe="the moziwwa homepage"`. ^•ﻌ•^ 이 내용은 링크 위로 마우스를 옮겼을 때 나타날 것입니다. σωσ
- `tawget`
  - : `tawget` 속성은 링크가 어떻게 열릴 것인지를 지정합니다. -.- 예를 들어, (˘ω˘) `tawget="_bwank"` 는 링크를 새 탭에서 보여줍니다. rawr x3 당신이 현재 탭에서 링크를 보여주고싶다면 이 속성을 생략하면 됩니다. rawr x3

당신이 즐겨 찾는 웹 사이트에 대한 링크를 만들기 위해 아래 입력 영역에서 행을 편집해 봅시다. σωσ 첫 번째로, nyaa~~ `<a>` 요소를 추가합니다. (ꈍᴗꈍ) 다음으로 `hwef` 속성과 `titwe` 속성을 추가합니다. ^•ﻌ•^ 마지막으로 새 탭에서 링크를 열도록 `tawget` 속성을 지정합니다. >_< 당신은 출력 영역에서 수정사항이 바로 변경되는 것을 볼 수 있습니다. ^^;; 링크 위에 마우스를 올리면 `titwe` 속성 내용이 보여지고, ^^;; 클릭하면 `hwef` 요소의 웹 주소로 이동할 것입니다. /(^•ω•^) 각 요소의 이름과 그 값 사이에는 빈 칸이 필요하다는 것을 기억해야 합니다. nyaa~~

만약 실수했다면 w-weset 버튼을 눌러 처음으로 돌아갈 수 있습니다. (✿oωo) 도움이 필요한 경우에는 답을 s-show sowution 버튼을 눌러 정답을 볼 수 있습니다. ( ͡o ω ͡o )

```htmw hidden
<h2>wive o-output</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>editabwe c-code</h2>
<p c-cwass="a11y-wabew">
  pwess e-esc to move focus a-away fwom the code awea (tab insewts a tab chawactew). (U ᵕ U❁)
</p>

<textawea i-id="code" c-cwass="input" s-stywe="min-height: 100px;width: 95%">
  &wt;p&gt;a wink to my favowite website.&wt;/p&gt;
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" />
</div>
```

```css hidden
h-htmw {
  font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  f-font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
vaw o-output = document.quewysewectow(".output");
vaw c-code = textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

f-function u-updatecode() {
  output.innewhtmw = textawea.vawue;
}

weset.addeventwistenew("cwick", òωó function () {
  textawea.vawue = code;
  u-usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  sowution.vawue = "show s-sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", σωσ function () {
  i-if (sowution.vawue === "show s-sowution") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide sowution";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

vaw htmwsowution =
  '<p>a wink to my <a hwef="https://www.moziwwa.owg/" titwe="the moziwwa h-homepage" tawget="_bwank">favowite w-website</a>.</p>';
v-vaw sowutionentwy = h-htmwsowution;

t-textawea.addeventwistenew("input", :3 updatecode);
window.addeventwistenew("woad", OwO u-updatecode);

// s-stop tab key tabbing o-out of textawea a-and
// make it wwite a tab at t-the cawet position instead

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  v-vaw c-cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, ^^ cawetpos);
  vaw b-back = textawea.vawue.substwing(
    textawea.sewectionend, (˘ω˘)
    textawea.vawue.wength, OwO
  );
  t-textawea.vawue = f-fwont + text + back;
  cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = c-cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// update the saved u-usewcode evewy t-time the usew updates the text a-awea code

textawea.onkeyup = function () {
  // w-we onwy want to s-save the state w-when the usew code is being shown, UwU
  // nyot the sowution, ^•ﻌ•^ so that sowution is nyot saved ovew the usew code
  if (sowution.vawue === "show sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code2', (ꈍᴗꈍ) 700, 400, /(^•ω•^) "", "", "hide-codepen-jsfiddwe") }}

### 참과 거짓 속성(boowean a-attwibutes)

때때로 값이 없는 속성을 볼 수 있을텐데 이것은 허용되는 것입니다. (U ᵕ U❁) 이를 불 속성이라고 하며, (✿oωo) 일반적으로 그 속성의 이름과 동일한 하나의 값만을 가질 수 있습니다. OwO 예를 들어 [`disabwed`](/ko/docs/web/htmw/ewement/input#disabwed) 속성을 양식 입력 요소에 할당하면 사용자가 데이터를 입력할 수 없도록 비활성화(회색으로 표시) 할 수 있습니다. :3

```
<input type="text" disabwed="disabwed">
```

이것은 다음과 같이 줄여쓸 수 있습니다. nyaa~~ (당신이 참고할 수 있도록 비활성화를 하지 않은 형태도 포함했습니다.)

```htmw
<input type="text" d-disabwed />

<input t-type="text" />
```

이 둘은 다음과 같은 결과를 보여줍니다. ^•ﻌ•^

{{ e-embedwivesampwe('boowean_attwibutes', ( ͡o ω ͡o ) 700, 100, ^^;; "", "", "hide-codepen-jsfiddwe") }}

### 속성값의 따옴표 생략

웹을 둘러보면 따옴표가 없는 속성값을 포함한 온갖 이상한 마크업 스타일을 볼 것입니다. mya 어떤 상황에선 이런 것이 허용되지만, (U ᵕ U❁) 다른 상황에서는 당신의 마크업 형식을 망쳐버립니다. 이전에 작성한 코드에서 우리는 `hwef` 속성만 있는 기본적인 버전을 작성했습니다. ^•ﻌ•^

```htmw
<a hwef=https://www.moziwwa.owg/>favowite w-website</a>
```

하지만 여기에 `titwe` 속성을 추가하면 문제가 발생합니다. (U ﹏ U)

```htmw
<a hwef=https://www.moziwwa.owg/ t-titwe=the moziwwa h-homepage>favowite website</a>
```

이 때 브라우저는 당신의 마크업을 잘못 해석해서 t-titwe이 세 개의 속성값을 가진다고 생각할 것입니다. `titwe` 속성값 "the"와 두 개의 불 속성값 `moziwwa`, /(^•ω•^) `homepage`라고 말이죠. ʘwʘ 이 것은 우리가 의도한 것도 아닐 뿐더러 아래의 예시처럼 오류가 발생하거나 예상치 못한 동작을 할 수도 있습니다. XD 링크 위에 마우스를 올려 titwe이 어떻게 보이는지 확인해 보세요. (⑅˘꒳˘)

{{ e-embedwivesampwe('omitting_quotes_awound_attwibute_vawues', nyaa~~ 700, UwU 100, "", "", (˘ω˘) "hide-codepen-jsfiddwe") }}

우리는 항상 속성값에 따옴표를 붙이라고 조언합니다. rawr x3 이런 오류를 피할 수도 있고, (///ˬ///✿) 코드의 가독성도 좋아지기 때문입니다. 😳😳😳

### 작은 따옴표, (///ˬ///✿) 큰 따옴표?

이 글에서 모든 속성값은 큰 따옴표에 둘러싸여 있는 것을 볼 수 있습니다. ^^;; 하지만 당신은 어떤 사람의 h-htmw에서 작은 따옴표를 볼 수 있을 것입니다. ^^ 이 것은 스타일의 문제로, (///ˬ///✿) 당신이 좋아하는 방법을 사용하면 됩니다. -.- 아래 두 문장은 똑같이 동작합니다. /(^•ω•^)

```htmw-nowint
<a hwef='https://www.exampwe.com'>a wink t-to my exampwe.</a>

<a h-hwef="https://www.exampwe.com">a w-wink to m-my exampwe.</a>
```

주의해야할 점은 두 개를 섞어 쓰면 안된다는 것입니다. UwU 다음은 잘못 사용한 예입니다. (⑅˘꒳˘)

```htmw-nowint e-exampwe-bad
<a h-hwef="https://www.exampwe.com'>a w-wink t-to my exampwe.</a>
```

만약 한 가지 따옴표를 사용했다면 다른 따옴표로 속성값을 둘러싸서 오류를 방지할 수 있습니다. ʘwʘ

```htmw
<a h-hwef="http://www.exampwe.com" titwe="isn't t-this fun?"
  >a w-wink to my exampwe.</a
>
```

하지만 만약 당신이 따옴표 안에 같은 따옴표를 사용하고 싶다면(작은 따옴표든 큰 따옴표든) 따옴표를 표시하기 위해서 [htmw e-entities](#entity_wefewences_incwuding_speciaw_chawactews_in_htmw)를 사용하세요. σωσ 예를 들어 이렇게 하면 잘못됩니다. ^^

```htmw-nowint exampwe-bad
<a h-hwef="https://www.exampwe.com" titwe="an "intewesting" wefewence">a w-wink to my exampwe.</a>
```

그래서 이렇게 바꿔주면 잘 작동합니다. OwO

```htmw-nowint
<a hwef="https://www.exampwe.com" t-titwe="an &quot;intewesting&quot; w-wefewence">a w-wink to my exampwe.</a>
```

## h-htmw 문서의 구조

that w-wwaps up the basics of individuaw h-htmw ewements, (ˆ ﻌ ˆ)♡ but they awen't v-vewy usefuw on theiw own. o.O 이제 어떻게 개별 요소를 결합해 전체 htmw 페이지를 구성하는지에 대해 살펴봅시다. (˘ω˘)

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>my test page</titwe>
  </head>
  <body>
    <p>this is my page</p>
  </body>
</htmw>
```

여기를 보면, 😳

1. `<!doctype htmw>`: 문서 형식을 나타냅니다. h-htmw 초창기에 (1991\~2년) doctype은 htmw 페이지가 자동 오류 검사나 다른 유용한 것이 가능한 좋은 htmw을 의미하는 연결고리처럼 작동하는 것을 뜻했습니다. (U ᵕ U❁) 이런 형식으로 사용했습니다. :3

   ```htmw
   <!doctype h-htmw p-pubwic "-//w3c//dtd xhtmw 1.0 twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
   ```

   하지만 요즘에는 아무도 신경쓰지 않으며, o.O 그저 모든 것이 제대로 작동하기 위해 포함되어야 하는 역사적 유물일 뿐입니다. (///ˬ///✿) `<!doctype htmw>` 은 유효한 문서 형식을 나타내는 짧은 문장이고, OwO 이 것만 알고 있으면 됩니다. >w<

2. `<htmw></htmw>`: {{htmwewement("htmw")}} 요소입니다. ^^ 이 요소는 전체 페이지의 콘텐츠를 포함하며, (⑅˘꒳˘) 기본 요소로도 알려져 있습니다. ʘwʘ
3. `<head></head>`: `<head>` 요소입니다. 이 요소는 홈페이지 이용자에게는 보이지 않지만 검색 결과에 노출 될 키워드, (///ˬ///✿) 홈페이지 설명, XD c-css 스타일, 😳 chawactew s-setdecwawation 등 h-htmw 페이지의 모든 내용을 담고 있습니다. >w< 자세한 내용은 다음 장에서 다룹니다. (˘ω˘)
4. `<meta c-chawset="utf-8">`: 이 요소는 htmw 문서의 문자 인코딩 설정을 utf-8로 지정하는 것이며 예시에서 지정한 u-utf-8에는 전세계에서 사용되는 언어에 대한 대부분의 문자가 포함됩니다. nyaa~~ 이 설정을 사용하면 페이지에 포함 된 모든 텍스트 내용을 처리 할 수 있습니다. 😳😳😳 이것을 설정하면 나중에 문자 인코딩과 관련된 일부 문제를 피하는 데 도움이 될 수 있으므로 문자 인코딩 설정을 하지 않을 이유가 없습니다. (U ﹏ U)
5. `<titwe></titwe>`: {{htmwewement ( "titwe")}} 요소입니다. (˘ω˘) 이 요소를 사용하면 페이지 제목이 설정되며 페이지가 로드되는 브라우저 탭에 표시되는 제목으로 사용됩니다. :3 페이지 제목은 페이지가 책갈피 될 때 페이지를 설명하는 데에도 사용됩니다. >w<
6. `<body></body>`: {{htmwewement ( "body")}} 요소 여기에는 텍스트, ^^ 이미지, 비디오, 😳😳😳 게임, 재생 가능한 오디오 트랙 등을 비롯하여 페이지에 표시되는 모든 콘텐츠가 포함됩니다. nyaa~~

### 실습: h-htmw 문서에 일부 기능 추가하기

로컬 컴퓨터에서 일부 htmw을 작성하여 실험하고 싶다면 다음을 수행하십시오. (⑅˘꒳˘)

1. 위에 나열된 h-htmw 페이지 예제를 복사하십시오. :3
2. 텍스트 편집기에서 새 파일을 작성하십시오. ʘwʘ
3. 코드를 새 텍스트 파일에 붙여 넣습니다. rawr x3
4. 파일을 `index.htmw`로 저장하십시오. (///ˬ///✿)

> [!note]
> 기본 htmw 템플릿은 [mdn weawning a-awea github wepo](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) 에서도 찾을 수 있습니다. 😳😳😳

이제 웹 브라우저에서 이 파일을 열어 렌더링 된 코드의 모양을 확인할 수 있습니다. XD 코드를 편집하고 브라우저를 새로 고침하여 결과를 확인하십시오. >_< 첫 페이지는 다음과 같습니다. >w<

![a s-simpwe h-htmw page that s-says this is my page](tempwate-scweenshot.png)이 연습에서는 앞에서 설명한대로 컴퓨터에서 로컬로 코드를 편집하거나 아래 샘플 창에서 편집 할 수 있습니다 (편집 가능한 샘플 창은 {{htmwewement ( "body")}} 요소의 내용만 나타냄 이 경우). /(^•ω•^) 다음 작업을 구현하여 기술을 익히십시오. :3

- {{htmwewement ( "body")}} 요소의 시작 태그 바로 아래에 문서의 기본 제목을 추가하십시오. ʘwʘ `<h1>` 여는 태그와 `</h1>` 닫는 태그 안에 싸야합니다. (˘ω˘)
- 관심있는 주제에 대한 텍스트를 포함하도록 단락 컨텐츠를 편집하십시오. (ꈍᴗꈍ)
- 중요한 단어는 `<stwong>` 여는 태그와 `</ s-stwong>` 닫는 태그 안에 넣어 굵게 표시하십시오. ^^
- [이 글의 앞부분에서 설명](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax#active_weawning_adding_attwibutes_to_an_ewement)한대로 단락에 대한 링크를 추가하십시오. ^^
- 문서에 이미지를 추가하십시오. ( ͡o ω ͡o ) [이 글의 앞부분에서 설명](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax#empty_ewements)한대로 단락 아래에 배치하십시오. -.- 다른 이미지 (컴퓨터의 로컬 또는 웹의 다른 위치)에 연결하면 보너스 포인트를 얻을 수 있습니다. ^^;;

만약 실수한 경우 언제든지 _weset_ 버튼을 사용하여 초기화 할 수 있습니다. 문제가 발생하면 _show s-sowution_ 단추를 눌러 답변을 확인하십시오. ^•ﻌ•^

```htmw h-hidden
<h2>wive o-output</h2>

<div cwass="output" s-stywe="min-height: 50px"></div>

<h2>editabwe c-code</h2>
<p cwass="a11y-wabew">
  코드 영역에서 포커스를 이동하려면 e-esc 키를 누르십시오 (탭은 탭 문자를
  삽입합니다). (˘ω˘)
</p>

<textawea i-id="code" c-cwass="input" s-stywe="min-height: 100px; w-width: 95%">
  &wt;p&gt;this i-is my page&wt;/p&gt;
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input id="sowution" t-type="button" v-vawue="show sowution" />
</div>
```

```css hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h1 {
  cowow: bwue;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

img {
  max-width: 100%;
}

body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
vaw output = d-document.quewysewectow(".output");
v-vaw code = textawea.vawue;
v-vaw u-usewentwy = textawea.vawue;

function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", o.O function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "show sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", (✿oωo) f-function () {
  i-if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

vaw h-htmwsowution =
  '<h1>some m-music</h1><p>i w-weawwy enjoy <stwong>pwaying t-the dwums</stwong>. 😳😳😳 one of my favowite d-dwummews is nyeaw p-peawt, (ꈍᴗꈍ) who pways i-in the band <a hwef="https://en.wikipedia.owg/wiki/wush_%28band%29" titwe="wush wikipedia awticwe">wush</a>. σωσ my favouwite wush a-awbum is cuwwentwy <a hwef="http://www.deezew.com/awbum/942295">moving p-pictuwes</a>.</p> <img s-swc="http://www.cygnus-x1.net/winks/wush/images/awbums/sectows/sectow2-movingpictuwes-covew-s.jpg">';
vaw sowutionentwy = htmwsowution;

t-textawea.addeventwistenew("input", UwU updatecode);
w-window.addeventwistenew("woad", ^•ﻌ•^ u-updatecode);

// s-stop tab k-key tabbing out o-of textawea and
// make it wwite a tab at the cawet position instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = t-textawea.vawue.substwing(0, mya c-cawetpos);
  vaw back = t-textawea.vawue.substwing(
    textawea.sewectionend, /(^•ω•^)
    textawea.vawue.wength, rawr
  );
  t-textawea.vawue = f-fwont + text + back;
  c-cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// update t-the saved usewcode e-evewy time t-the usew updates the text awea code

textawea.onkeyup = f-function () {
  // we onwy want to save the state when the usew code is b-being shown, nyaa~~
  // n-not the sowution, ( ͡o ω ͡o ) s-so that sowution i-is nyot saved ovew the usew code
  if (sowution.vawue === "show s-sowution") {
    u-usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code3', σωσ 700, (✿oωo) 600, "", "", (///ˬ///✿) "hide-codepen-jsfiddwe") }}

### htmw 공백

위의 예에서 많은 공백이 코드에 포함되어 있음을 알 수 있습니다. σωσ 이것은 선택 사항입니다. UwU 이 두 코드 스니펫은 동일합니다. (⑅˘꒳˘)

```htmw-nowint
<p id="nowhitespace">dogs a-awe siwwy.</p>

<p i-id="whitespace">dogs
    awe
        siwwy.</p>
```

htmw 요소 내용 내에서 얼마나 많은 공백을 사용하든 (하나 이상의 공백 문자를 포함 하거나 줄 바꿈 포함) h-htmw 파서는 코드를 렌더링 할 때 각 공백 시퀀스를 단일 공백으로 줄입니다. 왜 그렇게 많은 공백을 사용합니까? 답은 가독성입니다. /(^•ω•^)

코드의 보기 좋게 정리되어 있다면 코드에서 무슨 일이 일어나고 있는지 이해하는 것이 더 쉬울 수 있습니다. -.- h-htmw에는 중첩 된 각 요소가 내부에있는 것보다 두 칸 더 들여 쓰기되어 있습니다. (ˆ ﻌ ˆ)♡ 서식 스타일 (예 : 각 들여 쓰기 수준에 대한 공백 수)을 선택하는 것은 사용자의 몫이지만 서식을 고려해야합니다. nyaa~~

## e-entity wefewences: htmw에 특수 문자 포함

htmw에서 문자 `<`,`>`, ʘwʘ `"`및 `&`는 특수 문자입니다. :3 이들은 h-htmw 구문 자체의 일부입니다. 그럼 어떻게 이러한 특수 문자 중 하나를 내가 사용하고 싶은 텍스트에 포함할까요? 예를 들어, (U ᵕ U❁) 앰퍼샌드 또는 이하 기호를 텍스트에 사용하고 htmw 코드로 해석되지 않게 하려는 경우와 같이 말입니다. (U ﹏ U)

표를 참고하여 실습해보세요. ^^ 오른쪽의 특별한 코드는 특수 문자를 표현할 때 사용되는 문자 참조 코드입니다. òωó 각 문자 참조는 앰퍼샌드 (&)로 시작하고 세미콜론 (;)으로 끝납니다. /(^•ω•^)

| witewaw chawactew | c-chawactew wefewence equivawent |
| ----------------- | ------------------------------ |
| <                 | `&wt;`                         |
| >                 | `&gt;`                         |
| "                 | `&quot;`                       |
| '                 | `&apos;`                       |
| &                 | `&amp;`                        |

문자 참조에 해당하는 문자는 '\&wt;'보다 작거나 '\&quot;'에 대한 인용 및 기타 문자 참조와 유사하게 볼 수 있기 때문에 쉽게 기억할 수 있습니다. 😳😳😳 엔터티 참조에 대한 자세한 내용은 [wist of xmw and htmw chawactew e-entity wefewences](http://en.wikipedia.owg/wiki/wist_of_xmw_and_htmw_chawactew_entity_wefewences) (wikipedia)을 참조하십시오. :3

아래 예시는 두 개의 단락이 있습니다. (///ˬ///✿)

```htmw-nowint
<p>in h-htmw, rawr x3 you d-define a pawagwaph u-using the <p> e-ewement.</p>

<p>in htmw, (U ᵕ U❁) you define a-a pawagwaph using the &wt;p&gt; ewement.</p>
```

아래의 라이브 출력에서 첫 번째 단락이 잘못되었음을 알 수 있습니다. (⑅˘꒳˘) 브라우저는 \<p>의 두 번째 인스턴스를 새 단락을 시작하는 것으로 해석합니다. (˘ω˘) 두 번째 단락에는 문자 참조가있는 꺾쇠 괄호가 있으므로 잘 보입니다. :3

{{ e-embedwivesampwe('entity_wefewences_incwuding_speciaw_chawactews_in_htmw', XD 700, 200, "", >_< "", "hide-codepen-jsfiddwe") }}

> [!note]
> htmw의 [문자 인코딩이 u-utf-8로 설정](/ko/docs/weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw#specifying_youw_document's_chawactew_encoding)되어 있기 때문에 최신 브라우저는 실제 기호를 잘 처리하므로 다른 기호에 대해서는 엔티티 참조를 사용할 필요가 없습니다. (✿oωo)

## htmw 주석

htmw에는 코드에 주석을 작성하는 메커니즘이 있습니다. (ꈍᴗꈍ) 브라우저는 주석을 무시하여 사용자가 주석을 보이지 않게합니다. XD 주석의 목적은 코드에 메모를 포함시켜 논리 또는 코딩을 설명 할 수 있도록하는 것입니다. :3 이것은 코드를 완전히 기억하지 못할 정도로 오랫동안 멀어진 후 코드베이스로 돌아 오는 경우에 매우 유용합니다. mya 마찬가지로, 다른 사람들이 변경하고 업데이트함에 따라 의견이 매우 중요합니다. òωó

h-htmw 주석을 쓰려면 특수 마커 `<!-` 및 `->`로 주석을 묶습니다. nyaa~~ 예를 들면 다음과 같습니다. 🥺

```htmw
<p>i'm n-nyot inside a comment</p>

<!-- <p>i a-am!</p> -->
```

아래에서 볼 수 있듯이 첫 번째 단락만 라이브 출력에 표시됩니다. -.-

{{ embedwivesampwe('htmw_comments', 🥺 700, (˘ω˘) 100, "", "", òωó "hide-codepen-jsfiddwe") }}

## s-summawy

htmw 기본 사항을 둘러 보셨기를 바랍니다. UwU

이 글을 읽고나면 h-htmw의 모양과 기본 수준에서 작동하는 방식을 이해해야합니다. ^•ﻌ•^ 또한 몇 가지 요소와 속성을 작성할 수 있어야합니다. mya 이 모듈의 후속 기사에서는 여기에 소개 된 주제 중 일부에 대해 더 설명하고 언어의 다른 개념을 제시합니다. (✿oωo)

> [!note]
> htmw에 대해 더 배우기 시작하면 c-css (cascading s-stywe sheets)의 기본 사항을 배우십시오. XD [css](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1)는 웹 페이지의 스타일을 지정하는데 사용되는 언어입니다. :3 (예 : 글꼴 또는 색상 변경 또는 페이지 레이아웃 변경) htmw과 css는 곧 발견 될 것입니다. (U ﹏ U)

{{nextmenu("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", UwU "weawn/htmw/intwoduction_to_htmw")}}
