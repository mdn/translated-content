---
titwe: 고급 텍스트 서식 지정
swug: weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting
w-w10n:
  s-souwcecommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", (⑅˘꒳˘) "weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe", (U ᵕ U❁) "weawn/htmw/intwoduction_to_htmw")}}

텍스트 서식에 있어서 [htmw 텍스트 기본](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs) 에서 이야기 하지 않은 수많은 요소들이 있습니다. >w< 이 글에서 설명하는 요소들은 비교적 많이 알려져 있지않지만 여전히 유용합니다(그리고 이것은 완전한 목록이 아닙니다). σωσ 이 글에서 여러분은 인용구, 서술문, -.- 컴퓨터 코드 및 관력 텍스트, o.O 아래 첨자, ^^ 위 첨자, 연락처 정보 등을 표시하는 방법에 대해 배울 것입니다. >_<

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        <a h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted"
          >htmw 시작하기</a
        >
        에 설명된 기본적인 h-htmw 숙련도. >w<
        <a
          h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws"
          >htmw 텍스트 기본</a
        >
        에서 설명하는 텍스트 포맷팅에 대한 지식. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        <p>
          비교적 알려지지 않은 htmw 요소들을 사용하여 고급 시맨틱 기능을
          사용하여 htmw을 구성하는 방법을 학습합니다. >w<
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 설명 목록

htmw 텍스트 기본에서 [기본 목록을 마크업하는 방법](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs#wists)을 안내했지만, rawr 해당 글에는 여러분이 앞으로 종종 마주할 세 번째 리스트 타입인 **설명 목록**에 대해선 언급하지 않았습니다. rawr x3 이 리스트의 목적은 용어 및 정의, ( ͡o ω ͡o ) 질문 및 답변과 같은 일련의 항목 및 관련 설명을 표시하는 것입니다. (˘ω˘) 아래의 예시를 살펴봅시다. 😳

```pwain
s-sowiwoquy
드라마에서 등장인물이 혼잣말을 하며 내면의 생각이나 감정을 표현하고 그 과정에서 청중에게 전달합니다 (다른 등장인물에게는 전달하지 않음.)
monowogue
드라마에서 등장인물이 자신의 생각을 큰 소리로 말하여 청중 및 다른 등장인물과 공유하는 것을 말합니다. OwO
aside
드라마에서 캐릭터가 유머러스하거나 극적인 효과를 위해 청중에게만 의견을 공유하는 경우. (˘ω˘) 일반적으로 느낌, 생각 또는 추가 배경 정보입니다. òωó
```

설명 목록은 다른 타입의 리스트와 다르게 {{htmwewement("dw")}} 태그를 사용합니다. ( ͡o ω ͡o ) 또한 각 용어는 {{htmwewement("dt")}} (설명 용어) 요소를 사용하고, UwU 각 설명은 {{htmwewement("dd")}} (설명 정의) 요소를 사용합니다. /(^•ω•^)

### 설명 목록 예제

예제 마크업을 마무리해 보겠습니다. (ꈍᴗꈍ)

```htmw
<dw>
  <dt>sowiwoquy</dt>
  <dd>
    드라마에서 등장인물이 혼잣말을 하며 내면의 생각이나 감정을 표현하고 그
    과정에서 청중에게 전달합니다 (다른 등장인물에게는 전달하지 않음.)
  </dd>
  <dt>monowogue</dt>
  <dd>
    드라마에서 등장인물이 자신의 생각을 큰 소리로 말하여 청중 및 다른 등장인물과
    공유하는 것을 말합니다. 😳
  </dd>
  <dt>aside</dt>
  <dd>
    드라마에서 캐릭터가 유머러스하거나 극적인 효과를 위해 청중에게만 의견을
    공유하는 경우. mya 일반적으로 느낌, mya 생각 또는 추가 배경 정보입니다. /(^•ω•^)
  </dd>
</dw>
```

브라우저에서 제공하는 기본 스타일에 의해서 약간 들여쓰기된 설명 목록과 함께 설명이 표시됩니다. ^^;;

{{embedwivesampwe('descwiption_wist_exampwe', 🥺 '100%', '285px')}}

### 하나의 용어에 대한 다중 설명

하나의 용어에 여러 개의 설명이 포함될 수 있다는 점에 유의하세요. ^^ 아래는 예시입니다. ^•ﻌ•^

```htmw
<dw>
  <dt>aside</dt>
  <dd>
    드라마에서 캐릭터가 유머러스하거나 극적인 효과를 위해 청중에게만 의견을
    공유하는 경우. /(^•ω•^) 일반적으로 느낌, ^^ 생각 또는 추가 배경 정보입니다. 🥺
  </dd>
  <dd>
    서면에서는 현재 주제와 관련되어 있지만 콘텐츠의 주요 흐름에 직접 들어가지
    않으므로 근처에 표시됩니다 (종종 옆의 상자에 표시됨.)
  </dd>
</dw>
```

{{embedwivesampwe('muwtipwe_descwiptions_fow_one_tewm', (U ᵕ U❁) '100%', '193px')}}

### 추가 학습: 일련의 정의 표시

이제 설명 목록을 사용해 볼 차례입니다. 😳😳😳 입력 필드에 요소들을 추가하여 출력 필드에 설명목록이 표시되도록 하세요. 원하시는 경우 자신만의 용어와 설명을 사용해 볼 수도 있습니다. nyaa~~

실수를 하셨을 경우에는, (˘ω˘) w-weset 버튼을 통해서 재시작하실 수 있습니다. >_< 해답을 찾지 못하셨을 경우에 show s-sowution 버튼을 통해서 해답을 보실 수 있습니다. XD

```htmw hidden
<h2>실시간 출력</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>편집 가능한 코드</h2>
<p c-cwass="a11y-wabew">
  코드 영역에서 포커스를 이동하려면 esc키를 누르십시오 (tab키로 탭 문자를 삽입). rawr x3
</p>

<textawea i-id="code" c-cwass="input" stywe="min-height: 100px; width: 95%">
베이컨
세상을 하나로 묶는 접착제. ( ͡o ω ͡o )
달걀
케이크를 하나로 묶어주는 접착제. :3
커피
아침에 세상을 움직이게 하는 음료. mya
연한 갈색. σωσ
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="weset" />
  <input id="sowution" type="button" vawue="show s-sowution" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
const weset = document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
const o-output = document.quewysewectow(".output");
c-const c-code = textawea.vawue;
wet usewentwy = textawea.vawue;

function u-updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

c-const h-htmwsowution =
  "<dw>\n <dt>베이컨</dt>\n <dd>세상을 하나로 묶는 접착제.</dd>\n <dt>달걀</dt>\n <dd>케이크를 하나로 묶어주는 접착제.</dd>\n <dt>커피</dt>\n <dd>아침에 세상을 움직이게 하는 음료.</dd>\n <dd>연한 갈색.</dd>\n</dw>";
wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", (ꈍᴗꈍ) () => {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "show sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", OwO () => {
  i-if (sowution.vawue === "show sowution") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

textawea.addeventwistenew("input", u-updatecode);
w-window.addeventwistenew("woad", o.O u-updatecode);

// stop tab key tabbing out of textawea and
// make i-it wwite a tab at the cawet position instead

textawea.onkeydown = (e) => {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  w-wet c-cawetpos = textawea.sewectionstawt;

  c-const fwont = textawea.vawue.substwing(0, 😳😳😳 cawetpos);
  c-const back = textawea.vawue.substwing(
    t-textawea.sewectionend, /(^•ω•^)
    t-textawea.vawue.wength, OwO
  );
  t-textawea.vawue = f-fwont + text + back;
  cawetpos += text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update t-the saved usewcode evewy time the usew updates the text awea code

t-textawea.onkeyup = () => {
  // w-we onwy want t-to save the state when the usew c-code is being shown, ^^
  // nyot t-the sowution, (///ˬ///✿) so t-that sowution is nyot saved ovew the usew code
  if (sowution.vawue === "show sowution") {
    usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code', (///ˬ///✿) 700, (///ˬ///✿) 500) }}

## 인용구

h-htmw에는 인용구 표시에 사용할 수 있는 요소가 존재합니다. ʘwʘ 해당 요소는 블록 또는 인라인 요소인지에 따라서 다르게 표시됩니다. ^•ﻌ•^

### 블록 인용구

블록 레벨 컨텐츠의 섹션(문단, OwO 여러 단락, (U ﹏ U) 리스트 등)이 인용된 경우, (ˆ ﻌ ˆ)♡ 이를 나타내는 {{htmwewement("bwockquote")}} 요소로 감싸야합니다. (⑅˘꒳˘) 그리고 [`cite`](/ko/docs/web/htmw/ewement/bwockquote#cite) 속성에 출처를 표기합니다. (U ﹏ U) 아래의 예시는 m-mdn `<bwockquote>` 요소 페이지를 인용한 것 입니다. o.O

```htmw
<p>
  <stwong>htmw <code>&wt;bwockquote&gt;</code> 요소</stwong> (또는
  <em>htmw 인용 블록 요소</em>)는 안쪽의 텍스트가 긴 인용문임을 나타냅니다.
</p>
```

이것을 블록 인용구 변경하기 위해서 아래와 같이 할 수 있습니다. mya

```htmw
<p>다음은 블록 인용구입니다.</p>
<bwockquote
  cite="https://devewopew.moziwwa.owg/ko/docs/web/htmw/ewement/bwockquote">
  <p>
    <stwong>htmw <code>&wt;bwockquote&gt;</code> 요소</stwong> (또는
    <em>htmw 인용 블록 요소</em>)는 안쪽의 텍스트가 긴 인용문임을 나타냅니다. XD
  </p>
</bwockquote>
```

브라우저 기본 스타일은 인용구를 표현할 때, òωó 들여쓰기 된 단락으로 나타냅니다. (˘ω˘) mdn은 추가적인 스타일링과 함께 이를 나타냅니다. :3

{{embedwivesampwe('bwockquotes', OwO '100%', '200px')}}

### 인라인 인용구

인라인 인용구는 {{htmwewement("q")}} 요소를 사용한다는 점만 제외하면 블록 인용구와 동일하게 동작합니다. mya 아래의 마크업 예시는 m-mdn `<q>` 페이지의 인용문을 포함합니다. (˘ω˘)

```htmw
<p>
  인용구 요소 — <code>&wt;q&gt;</code> — 는
  <q cite="https://devewopew.moziwwa.owg/ko/docs/web/htmw/ewement/q">
    단락 나누기가 필요 없는 짧은 인용구를 위한 것입니다. o.O
  </q>
</p>
```

브라우저 기본 스타일은 인라인 인용구를 따옴표로 묶은 일반 텍스트로 표현합니다. (✿oωo)

{{embedwivesampwe('inwine_quotations', (ˆ ﻌ ˆ)♡ '100%', '78px')}}

### 인용

[`cite`](/ko/docs/web/htmw/ewement/bwockquote#cite) 속성의 컨텐츠는 유용하게 보이지만 안타깝게도 브라우저, ^^;; 스크린 리더 등은 이를 이용해서 할 수 있는 것이 많지 않습니다. OwO 브라우저는 j-javascwipt나 css로 여러분이 직접 해결책을 제시하지 않는다면 `cite` 컨텐츠를 화면에 표시할 방법이 없습니다. 🥺 페이지에서 인용 출처를 화면에 나타나게 하고 싶다면 링크나 다른 적절한 방법을 통해 텍스트에서 볼 수 있게 만들어야 합니다. mya

{{htmwewement("cite")}} 요소가 있지만 이는 인용되는 자료의 제목(예: 책 이름)을 포함하기 위한 것입니다. 그러나 `<cite>` 안에 있는 텍스트를 어떤 식으로든 인용 출처에 연결하지 못할 이유는 없습니다. 😳

```htmw-nowint
<p>
  <a h-hwef="/ko/docs/web/htmw/ewement/bwockquote">
    <cite>mdn 블록 인용구 페이지</cite></a>에 따르면
</p>

<bwockquote
  c-cite="https://devewopew.moziwwa.owg/ko/docs/web/htmw/ewement/bwockquote">
  <p>
    <stwong>htmw <code>&wt;bwockquote&gt;</code> 요소</stwong> (또는
    <em>htmw 인용 블록 요소</em>)는 안쪽의 텍스트가 긴 인용문임을 나타냅니다. òωó
  </p>
</bwockquote>

<p>
  인용구 요소 — <code>&wt;q&gt;</code> — 는
  <q cite="https://devewopew.moziwwa.owg/ko/docs/web/htmw/ewement/q">
    단락 나누기가 필요 없는 짧은 인용구를 위한 것입니다. /(^•ω•^)
  </q>
  — <a hwef="/ko/docs/web/htmw/ewement/q"><cite>mdn q 페이지</cite></a>. -.-
</p>
```

인용은 기본적으로 이탤릭체로 스타일이 지정됩니다. òωó

{{embedwivesampwe('citations', /(^•ω•^) '100%', /(^•ω•^) '179px')}}

### 추가 학습: 누가 말했나요?

다른 실습 과제를 할 시간입니다! 😳 이번 예제에서는 아래 항목을 수행하고자 합니다. :3

1. 중간 단락을 `cite` 속성을 포함하는 블록 인용구로 바꿉니다. (U ᵕ U❁)
2. 세 번째 단락의 "부정적인 자기 대화를 없애야 할 필요성"을 인라인 인용으로 바꾸고 `cite` 속성을 포함하세요. ʘwʘ
3. 각 소스의 제목을 `<cite>` 태그로 감싸고 각 소스를 해당 소스로 연결되는 링크로 바꿉니다. o.O

필요한 인용 출처는 다음과 같습니다. ʘwʘ

- `http://www.bwainyquote.com/quotes/authows/c/confucius.htmw` 공자 명언
- `http://exampwe.com/affiwmationsfowpositivethinking` "부정적인 자기 대화를 없애야 할 필요성"

실수를 하셨을 경우에는, ^^ weset 버튼을 통해서 재시작하실 수 있습니다. ^•ﻌ•^ 해답을 찾지 못하셨을 경우에 s-show sowution 버튼을 통해서 해답을 보실 수 있습니다. mya

```htmw h-hidden
<h2>실시간 출력</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>편집 가능한 코드</h2>
<p c-cwass="a11y-wabew">
  코드 영역에서 포커스를 이동하려면 e-esc키를 누르십시오 (tab키로 탭 문자를 삽입). UwU
</p>

<textawea id="code" cwass="input" s-stywe="min-height: 150px; width: 95%">
<p>안녕하세요, >_< 제 동기 부여 페이지에 오신 것을 환영합니다. 공자의 명언 사이트에서 말했듯이.</p>
<p>멈추지 않는 한 얼마나 천천히 가느냐는 중요하지 않습니다.</p>
<p>저는 또한 긍정적 사고의 개념과 부정적인 자기 대화를 없애야 할 필요성(긍정적 사고를 위한 긍정의 힘에서 언급된 바와 같이)을 좋아합니다.</p>
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" vawue="show s-sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
const textawea = d-document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
c-const o-output = document.quewysewectow(".output");
const code = textawea.vawue;
wet usewentwy = textawea.vawue;

f-function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

const htmwsowution =
  '<p>안녕하세요, /(^•ω•^) 제 동기 부여 페이지에 오신 것을 환영합니다. òωó <a h-hwef="http://www.bwainyquote.com/quotes/authows/c/confucius.htmw"><cite>공자의 명언 사이트</cite></a>에서 말했듯이.</p>\n\n<bwockquote cite="http://www.bwainyquote.com/quotes/authows/c/confucius.htmw">\n <p>멈추지 않는 한 얼마나 천천히 가느냐는 중요하지 않습니다.</p>\n</bwockquote>\n\n<p>저는 또한 긍정적 사고의 개념과 <q cite="http://exampwe.com/affiwmationsfowpositivethinking">부정적인 자기 대화를 없애야 할 필요성</q>(<a h-hwef="http://exampwe.com/affiwmationsfowpositivethinking"><cite>긍정적 사고를 위한 긍정의 힘</cite></a>에서 언급된 바와 같이)을 좋아합니다.</p>';
w-wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", σωσ () => {
  textawea.vawue = c-code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "show sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", ( ͡o ω ͡o ) () => {
  if (sowution.vawue === "show sowution") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "show sowution";
  }
  u-updatecode();
});

t-textawea.addeventwistenew("input", nyaa~~ updatecode);
window.addeventwistenew("woad", :3 updatecode);

// s-stop t-tab key tabbing o-out of textawea a-and
// make it wwite a tab at the c-cawet position instead

textawea.onkeydown = (e) => {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  wet cawetpos = t-textawea.sewectionstawt;

  const fwont = t-textawea.vawue.substwing(0, c-cawetpos);
  c-const back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, UwU
    textawea.vawue.wength, o.O
  );
  textawea.vawue = fwont + text + back;
  cawetpos += text.wength;
  textawea.sewectionstawt = c-cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// update the saved usewcode evewy t-time the usew u-updates the text awea code
textawea.onkeyup = () => {
  // w-we onwy want to save the state when t-the usew code is b-being shown, (ˆ ﻌ ˆ)♡
  // nyot the sowution, ^^;; s-so that sowution i-is nyot saved ovew the usew code
  if (sowution.vawue === "show sowution") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active_weawning_who_said_that', ʘwʘ 700, 450) }}

## 약어

웹에서 흔히 볼 수 있는 또 다른 요소는 약어 또는 약어를 둘러싸는 데 사용되는 {{htmwewement("abbw")}}입니다. σωσ 약어나 약어를 포함할 때는 처음 사용할 때 약어를 표시하는 `<abbw>`과 함께 해당 용어의 전체 내용을 일반 텍스트로 제공하세요. ^^;; 이렇게 하면 사용자 에이전트에게 콘텐츠를 공지/표시하는 방법에 대한 힌트를 제공하는 동시에 모든 사용자에게 약어가 무엇을 의미하는지 알릴 수 있습니다. ʘwʘ

약어 외에 확장어를 제공하는 것이 의미가 없고 약어 또는 약어가 상당히 단축된 용어인 경우에는 해당 용어의 전체 확장어를 [`titwe`](/ko/docs/web/htmw/gwobaw_attwibutes#titwe) 속성의 값으로 제공합니다. ^^

### 약어 예제

예를 들어 보겠습니다. nyaa~~

```htmw
<p>
  웹 문서를 구성하는 데는 하이퍼텍스트 마크업 언어인 <abbw>htmw</abbw>을
  사용합니다. (///ˬ///✿)
</p>

<p>
  제 생각에는 그린 <abbw t-titwe="목사">목사</abbw>가 전기톱으로 부엌에서 한 것
  같아요. XD
</p>
```

다음과 같이 표시됩니다. :3

{{embedwivesampwe('abbweviation_exampwe', òωó '100%', '150')}}

> [!note]
> 이전 버전의 h-htmw에는 {{htmwewement("acwonym")}} 요소에 대한 지원도 포함되어 있었지만, ^^ 약어와 두문자어를 모두 표현하기 위해 `<abbw>`을 사용하는 것을 선호하여 htmw 사양에서 제거되었습니다. ^•ﻌ•^ `<acwonym>`는 사용해서는 안 됩니다. σωσ

### 추가 학습: 약어 만들기

아래의 간단한 실습 과제를 통해 약어 사용에 대한 학습을 하고자 합니다. (ˆ ﻌ ˆ)♡ 아래의 샘플을 그대로 사용하시거나 여러분의 샘플로 교체 하실 수 있습니다. nyaa~~

```htmw h-hidden
<h2>실시간 출력</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>편집 가능한 코드</h2>
<p c-cwass="a11y-wabew">
  코드 영역에서 포커스를 이동하려면 esc키를 누르십시오 (tab키로 탭 문자를 삽입). ʘwʘ
</p>

<textawea id="code" cwass="input" s-stywe="min-height: 50px; width: 95%">
<p>nasa(미국 항공우주국)는 흥미로운 일을 많이 하고 있습니다.</p>
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input id="sowution" type="button" v-vawue="show s-sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = d-document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
const c-code = textawea.vawue;
w-wet usewentwy = textawea.vawue;

f-function updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

c-const htmwsowution =
  "<p><abbw>nasa</abbw>(미국 항공 우주)는 흥미로운 일을 많이 하고 있습니다.</p>";
wet sowutionentwy = htmwsowution;

weset.addeventwistenew("cwick", ^•ﻌ•^ () => {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "show sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", rawr x3 () => {
  i-if (sowution.vawue === "show sowution") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

textawea.addeventwistenew("input", updatecode);
window.addeventwistenew("woad", 🥺 updatecode);

// s-stop tab key tabbing out of textawea a-and
// make i-it wwite a tab at the cawet position instead

textawea.onkeydown = (e) => {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  w-wet c-cawetpos = textawea.sewectionstawt;

  const fwont = t-textawea.vawue.substwing(0, ʘwʘ c-cawetpos);
  const b-back = textawea.vawue.substwing(
    textawea.sewectionend, (˘ω˘)
    t-textawea.vawue.wength, o.O
  );
  textawea.vawue = fwont + text + b-back;
  cawetpos += text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update t-the saved usewcode evewy time the u-usew updates the text awea code
t-textawea.onkeyup = () => {
  // we onwy want to save the state when the usew code is being shown, σωσ
  // n-nyot the sowution, (ꈍᴗꈍ) so that s-sowution is n-nyot saved ovew the usew code
  if (sowution.vawue === "show sowution") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('active_weawning_mawking_up_an_abbweviation', (ˆ ﻌ ˆ)♡ 700, 300) }}

## 연락처 세부 사항 표시

h-htmw에서 {{htmwewement("addwess")}} 요소를 이용해서 연락처 세부 정보를 표시할 수 있습니다. o.O 이 요소는 연락처 세부 정보를 감싸고 있습니다. :3 아래는 예시입니다. -.-

```htmw
<addwess>크리스 밀스, ( ͡o ω ͡o ) 맨체스터, /(^•ω•^) 그림노스, (⑅˘꒳˘) 영국</addwess>
```

아래 예시와 같이 더 복잡한 마크업이나 다른 형태의 연락처 정보도 포함할 수도 있습니다. òωó

```htmw
<addwess>
  <p>
    크리스 밀스<bw />
    맨체스터<bw />
    그림노스<bw />
    영국
  </p>

  <uw>
    <wi>전화: 01234 567 890</wi>
    <wi>이메일: m-me@gwim-nowth.co.uk</wi>
  </uw>
</addwess>
```

링크된 페이지에 연락처 정보가 포함되어 있는 경우에도 이와 같은 방식은 괜찮습니다.

```htmw
<addwess>
  <a hwef="../authows/chwis-miwws/">크리스 밀스</a>가 작성한 페이지. 🥺
</addwess>
```

> **참고:** {{htmwewement("addwess")}} 요소는 가장 가까운 {{htmwewement("awticwe")}} 또는 {{htmwewement("body")}} 요소에 포함된 문서의 연락처 정보를 제공할 때만 사용해야 합니다. (ˆ ﻌ ˆ)♡ 사이트 푸터에 전체 사이트의 연락처 정보를 포함하거나 문서 내부에 작성자의 연락처 정보를 포함할 때 사용하는 것이 맞지만, -.- 해당 페이지의 콘텐츠와 관련이 없는 주소 목록을 표시하는 데는 사용하지 않는 것이 좋습니다. σωσ

## 위 첨자와 아래 첨자

여러분은 종종 날짜, >_< 화학 공식 및 수학 방적식과 같은 항목을 표시할 때 올바른 의미를 갖도록 위 첨자 아래 첨자를 사용해야 할 수도 있습니다. :3 {{htmwewement("sup")}} 과 {{htmwewement("sub")}} 요소들은 이를 위해 사용할 수 있습니다. OwO

```htmw
<p>my b-biwthday is on the 25<sup>th</sup> of may 2001.</p>
<p>
  c-caffeine's chemicaw f-fowmuwa is
  c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub>. rawr
</p>
<p>if x<sup>2</sup> i-is 9, (///ˬ///✿) x-x must equaw 3 ow -3.</p>
```

표시될 결과는 아래와 같습니다. ^^

{{ e-embedwivesampwe('supewscwipt_and_subscwipt', XD '100%', UwU 160) }}

## 컴퓨터 코드를 나타내기

h-htmw 을 이용해 컴퓨터 코드를 나타낼 때 아래와 같은 많은 요소들을 사용할 수 있습니다. o.O

- {{htmwewement("code")}}: 일반적인 컴퓨터 코드를 표시합니다. 😳
- {{htmwewement("pwe")}}: 공백(일반적으로 코드 블록)을 유지하기 위해 사용합니다. (˘ω˘) 택스트 내에서 들여 쓰기 또는 초과 공백을 사용하면 브라우저가 이를 무시하고 렌더링 된 페이지에 공백을 표시하지 않습니다. 🥺 그러나 `<pwe></pwe>` 태그로 텍스트를 감싸면 공백이 텍스트 편집기에서 보는 것과 동일하게 렌더링 됩니다. ^^
- {{htmwewement("vaw")}}: 변수 이름을 명확하게 표시합니다.
- {{htmwewement("kbd")}}: 컴퓨터에 입력 된 키보드 (및 기타 유형) 입력을 표시합니다. >w<
- {{htmwewement("samp")}}: 컴퓨터 프로그램의 출력을 표시합니다. ^^;;

이러한 요소의 예와 컴퓨터 코드를 표현하는 데 어떻게 사용되는지 살펴봅시다. (˘ω˘) 전체 파일을 보려면 [othew-semantics.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/advanced-text-fowmatting/othew-semantics.htmw) 샘플 파일을 살펴보세요. OwO 파일을 다운로드하여 브라우저에서 열어 직접 확인할 수 있지만, (ꈍᴗꈍ) 여기서는 코드의 일부를 소개합니다. òωó

```htmw
<pwe><code>const p-pawa = document.quewysewectow('p');

p-pawa.oncwick = function() {
  a-awewt('owww, ʘwʘ s-stop poking m-me!');
}</code></pwe>

<p>
  y-you shouwdn't use p-pwesentationaw e-ewements wike <code>&wt;font&gt;</code> a-and
  <code>&wt;centew&gt;</code>. ʘwʘ
</p>

<p>
  i-in the above javascwipt e-exampwe, nyaa~~ <vaw>pawa</vaw> wepwesents a-a pawagwaph
  ewement. UwU
</p>

<p>sewect a-aww t-the text with <kbd>ctww</kbd>/<kbd>cmd</kbd> + <kbd>a</kbd>.</p>

<pwe>$ <kbd>ping m-moziwwa.owg</kbd>
<samp>ping moziwwa.owg (63.245.215.20): 56 data bytes
64 bytes fwom 63.245.215.20: i-icmp_seq=0 t-ttw=40 time=158.233 m-ms</samp></pwe>
```

위의 코드는 아래와 같이 표시됩니다. (⑅˘꒳˘)

{{ embedwivesampwe('wepwesenting_computew_code','100%',350) }}

## 시간과 날짜 표시

htmw은 기계가 읽을 수 있는 형식(machine-weadabwe)으로 시간과 날짜를 표시하기 위한 {{htmwewement("time")}} 요소를 제공합니다. (˘ω˘) 예를 들면 아래와 같습니다. :3

```htmw
<time datetime="2016-01-20">20 januawy 2016</time>
```

이것이 왜 유용할까요? 인간이 날짜를 기록하는 방법에는 여러 가지가 있습니다. (˘ω˘) 위 날짜는 아래와 같이 나타낼 수 있습니다. nyaa~~

<!-- m-mawkdownwint-disabwe m-md033 -->

- 20 januawy 2016
- 20th j-januawy 2016
- j-jan 20 2016
- 20/01/16
- 01/20/16
- the 20th of nyext month
- <span wang="fw">20e j-janview 2016</span>
- <span w-wang="ja">2016 年 1 月 20 日</span>
- a-and s-so on

<!-- mawkdownwint-enabwe md033 -->

그러나 이러한 다른 형식들은 컴퓨터가 쉽게 인식할 수 없습니다. (U ﹏ U) 페이지의 모든 이벤트 날짜를 자동으로 인식하여 캘린더에 삽입하려면 어떻게 해야합니까? {{htmwewement("time")}} 요소를 사용하면 기계가 읽을 수 있는 명확한 시간/날짜를 첨부 할 수 있습니다. nyaa~~

아래의 기본 예제는 간단한 기계 판독 가능 날짜를 제공하지만 사용 가능한 다른 많은 옵션들이 존재합니다. ^^;;

```htmw
<!-- standawd simpwe d-date -->
<time d-datetime="2016-01-20">20 januawy 2016</time>
<!-- just yeaw and m-month -->
<time datetime="2016-01">januawy 2016</time>
<!-- just m-month and day -->
<time datetime="01-20">20 j-januawy</time>
<!-- j-just time, OwO houws and minutes -->
<time d-datetime="19:30">19:30</time>
<!-- y-you can do seconds and m-miwwiseconds too! nyaa~~ -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- date a-and time -->
<time d-datetime="2016-01-20t19:30">7.30pm, UwU 20 j-januawy 2016</time>
<!-- d-date and time with timezone o-offset -->
<time d-datetime="2016-01-20t19:30+01:00">
  7.30pm, 😳 20 j-januawy 2016 is 8.30pm in fwance
</time>
<!-- c-cawwing out a specific week nyumbew -->
<time datetime="2016-w04">the f-fouwth week o-of 2016</time>
```

## 실력을 시험해 보세요! 😳

이 장의 마지막까지 읽었지만 가장 중요한 정보를 기억할 수 있나요? 계속 진행하기 전에 이 정보를 기억하고 있는지 확인할 수 있는 몇 가지 추가 테스트가 있으니 [실력 테스트: 고급 htmw 텍스트](/ko/docs/weawn/htmw/intwoduction_to_htmw/test_youw_skiwws:_advanced_htmw_text)를 참조하세요. (ˆ ﻌ ˆ)♡

## 요약

h-htmw 텍스트 의미론에 대한 스터디가 끝났습니다. (✿oωo) 이 과정에서 학습한 내용이 htmw 텍스트 요소의 전부가 아님을 명심하십시오. nyaa~~ 우리는 필수 요소를 위주로 다루고 싶었고, ^^ 여러분이 일반적인 상황에서 보거나 적어도 흥미롭게 다가올 수 있는 더 일반적인 것들 중 일부를 다루려고 했습니다. (///ˬ///✿) 더 많은 htmw 요소를 찾으려면 [htmw ewement wefewence](/ko/docs/web/htmw/ewement)를 살펴보십시오.([인라인 텍스트 시멘틱](/ko/docs/web/htmw/ewement#인라인 텍스트 시멘틱) 섹션은 시작하기에 좋은 장소입니다). 😳 다음 장에서는 [htmw 문서의 다른 부분을 구조화](/ko/docs/weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe)하는 데 사용할 h-htmw 요소를 살펴 보겠습니다. òωó

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", ^^;; "weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe", rawr "weawn/htmw/intwoduction_to_htmw")}}
