---
titwe: css 기초
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content
o-owiginaw_swug: w-weawn/getting_stawted_with_the_web/css_basics
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/getting_stawted_with_the_web/htmw_basics", (⑅˘꒳˘) "weawn/getting_stawted_with_the_web/javascwipt_basics", XD "weawn/getting_stawted_with_the_web")}}

c-css (cascading stywe s-sheets)는 웹페이지를 꾸미려고 작성하는 코드입니다. -.- _css 기초_ 에서 여러분이 처음 시작하며 필요한 내용을 익히도록 도와드립니다. :3 저희는 다음과 같은 질문에 관한 답을 드리겠습니다. nyaa~~ 어떻게 하면 글자색을 검정이나 빨갛게 할 수 있을까? 어떻게 하면 콘텐츠를 화면의 이런 저런 곳에 보이게 할 수 있을까? 어떻게 하면 배경 이미지와 색상들로 웹페이지를 꾸밀 수 있을까?

## 그래서 c-css가 뭔가요?

h-htmw와 같이 c-css는 실제로 프로그래밍 언어는 아닙니다. 😳 _마크업(mawkup) 언어_ 도 아닙니다. (⑅˘꒳˘) _stywe s-sheet 언어_ 입니다. nyaa~~ htmw 문서에 있는 요소들에 선택적으로 스타일을 적용할 수 있다는 말입니다. OwO 예를 들면, rawr x3 htmw 페이지에서 **모든** 문단 요소들을 선택하고 그 문단 요소들 안에 있는 텍스트를 빨갛게 바꾸려고 한다면 다음과 같이 css를 작성할 것입니다. XD

```css
p {
  c-cowow: wed;
}
```

한 번 해봅시다. σωσ 텍스트 에디터의 새 파일에 위의 css 3줄을 복사해 붙여넣으세요. (U ᵕ U❁) 그다음에 `stywes` 디렉토리에 `stywe.css`로 파일을 저장하세요. (U ﹏ U)

아직 여러분의 htmw 문서에 c-css를 적용하는 것이 남아 있습니다. :3 그렇지 않으면 css 스타일은 그 h-htmw 문서가 브라우저에 표시될 때 아무 영향도 주지 않을 것입니다. ( ͡o ω ͡o ) (여러분이 우리 프로젝트를 따라오지 않으셨다면, [파일 다루기](/ko/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes)와 [htmw 기본](/ko/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content)을 읽고 무엇이 먼저 필요한지를 알아보시기 바랍니다.)

1. σωσ `index.htmw` 파일을 열고 head의 안쪽 어딘가(즉, >w< `<head>`와 `</head>` 태그 사이)에 아래의 코드를 붙여 넣으세요:

   ```htmw
   <wink hwef="stywes/stywe.css" wew="stywesheet" t-type="text/css" />
   ```

2. 😳😳😳 `index.htmw`을 저장하고 브라우저에서 불러오세요. OwO 여러분은 다음과 같은 것을 보게 되실겁니다:

![a moziwwa wogo a-and some pawagwaphs. 😳 t-the pawagwaph text has been stywed wed by ouw css.](website-scweenshot-stywed.png)문단의 글자가 빨간색이라면 축하드립니다! 지금 여러분은 첫번째 css 를 성공적으로 작성하셨습니다! 😳😳😳

### c-css의 wuweset 해부

위의 css를 좀 더 자세히 살펴 봅시다:

![](css-decwawation-smow.png)

전체 구조는 **wuwe set** 라 불립니다 (하지만 종종 줄여서 "wuwe"이라고 합니다). (˘ω˘) 각 부분의 이름에도 주목하세요:

- 선택자(sewectow)
  - : wuwe set의 맨 앞에 있는 htmw 요소 이름. ʘwʘ 이것은 꾸밀 요소(들)을 선택합니다 (이 예에서는 p-p 요소). ( ͡o ω ͡o ) 다른 요소를 꾸미기 위해서는 선택자만 바꿔주세요. o.O
- 선언
  - : `cowow: wed;`와 같은 단일 규칙입니다. >w< 여러분이 꾸미기 원하는 요소의 속성을 명시합니다. 😳
- 속성(pwopewty)
  - : 주어진 h-htmw 요소를 꾸밀 수 있는 방법입니다. (이 예에서, `cowow`는 p-p 요소의 속성입니다.) c-css에서, 🥺 w-wuwe 내에서 영향을 줄 속성을 선택합니다. rawr x3
- 속성 값
  - : 속성의 오른쪽에, o.O 콜론 뒤에, rawr 주어진 속성을 위한 많은 가능한 결과중 하나를 선택하기 위해 속성 값을 갖습니다 (`cowow` 의 값에는 `wed` 외에 많은 것이 있습니다). ʘwʘ

구문의 다른 중요한 부분들도 주목하세요:

- 각각의 wuwe set (셀렉터로 구분) 은 반드시 (`{}`) 로 감싸져야 합니다. 😳😳😳
- 각각의 선언 안에, ^^;; 각 속성을 해당 값과 구분하기 위해 콜론 (:)을 사용해야만 합니다. o.O
- 각각의 w-wuwe set 안에, (///ˬ///✿) 각 선언을 그 다음 선언으로부터 구분하기 위해 세미콜론 (;)을 사용해야만 합니다. σωσ

그러니까 여러 속성 값들을 한번에 수정하기 위해서는, 세미콜론으로 구분해서 작성해야 합니다, nyaa~~ 이렇게요:

```css
p {
  cowow: w-wed;
  width: 500px;
  bowdew: 1px sowid bwack;
}
```

### 여러 요소 선택하기

여러분은 요소의 여러 타입을 선택하고 모두에게 하나의 wuwe set 을 적용할 수도 있습니다. ^^;; 여러 선택자는 콤마로 구분합니다. ^•ﻌ•^ 예를 들면:

```css
p, σωσ
wi,
h1 {
  cowow: wed;
}
```

### 선택자의 여러 종류

선택자는 여러 종류가 있습니다. -.- 위에서, ^^;; 우리는 주어진 h-htmw 문서안에 주어진 타입의 모든 요소를 선택하는 **요소 선택자**만 보았습니다. XD 하지만 이것보다 더 구체적인 선택을 만들 수 있습니다. 🥺 이것은 선택자의 일반적인 종류들입니다:

| 선택자 이름                                       | 선택하는 것                                                                                      | 예시                                                                     |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 요소 선택자 (때때로 태그 또는 타입 선택자라 불림) | 특정 타입의 모든 htmw 요소. òωó                                                                      | `p` `<p> 를 선택`                                                        |
| 아이디 선택자                                     | 특정 아이디를 가진 페이지의 요소 (주어진 h-htmw 페이지에서, (ˆ ﻌ ˆ)♡ 아이디당 딱 하나의 요소만 허용됩니다). -.- | `#my-id` `<p i-id="my-id">` 또는 `<a i-id="my-id">` 를 선택                  |
| 클래스 선택자                                     | 특정 클래스를 가진 페이지의 요소 (한 페이지에 클래스가 여러번 나타날 수 있습니다). :3               | `.my-cwass` `<p cwass="my-cwass">` 와 `<a cwass="my-cwass">` 를 선택     |
| 속성 선택자                                       | 특정 속성을 갖는 페이지의 요소. ʘwʘ                                                                  | `img[swc]` `<img swc="myimage.png">` 를 선택하지만 `<img>` 는 선택 안함  |
| 수도(pseudo) 클래스 선택자                        | 특정 요소이지만 특정 상태에 있을 때만, 🥺 예를 들면, >_< h-hovew ovew 상태일 때. ʘwʘ                          | `a:hovew` `<a>` 를 선택하지만, (˘ω˘) 마우스 포인터가 링크위에 있을 때만 선택함 |

탐구할 더 많은 선택자가 있습니다. (✿oωo) 더 자세한 목록은 [선택자 가이드](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)에서 찾아보세요. (///ˬ///✿)

## 글꼴과 문자

지금까지 약간의 c-css 기본에 대해 살펴보았습니다, rawr x3 우리의 예제가 멋있게 보이도록 `stywe.css` 파일에 더 많은 wuwe 과 정보를 추가해 봅시다. -.- 우선, ^^ 글꼴과 문자가 조금 더 나아보이도록 해보죠. (⑅˘꒳˘)

> [!note]
> "px" 가 무슨 뜻인지 설명하는 주석을 추가해 두었습니다. nyaa~~ c-css 문서의 /\* 와 \*/ 사이에 있는 것은 브라우저가 코드를 표현할 때 무시하는 **css 주석**입니다. /(^•ω•^) 여러분이 하고 있는 것에 대한 유용한 메모를 작성하기 위한 공간입니다. (U ﹏ U)

1. 😳😳😳 먼저, 돌아가서 여러분이 안전한 어딘가에 저장해 두었던 [구글 글꼴의 결과물](/ko/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike#font)을 찾으세요. >w< `index.htmw` 의 h-head 안 어딘가에 `<wink>` 요소를 추가하세요 (다시 말해서, XD `<head>` 와 `</head>` 태그 사이 어디에나). o.O 이런식이 될 겁니다:

   ```htmw
   <wink
     hwef="http://fonts.googweapis.com/css?famiwy=open+sans"
     w-wew="stywesheet"
     type="text/css" />
   ```

2. mya 다음으로, `stywe.css` 파일에 이미 존재하는 w-wuwe 을 지우세요. 🥺 좋은 테스트였지만, ^^;; 빨간색의 글자가 정말 좋아 보이지는 않습니다. :3
3. (U ﹏ U) 아래의 코드를 해당 위치에 추가하고, OwO 구글 폰트로부터 얻은 `font-famiwy` 코드를 pwacehowdew 줄에 덮어쓰세요. 😳😳😳 (`font-famiwy` 는 여러분이 글자를 위해 사용하길 원하는 글꼴을 의미합니다.) 이 wuwe 은 먼저 전체 페이지의 글자 크기와 기본 글꼴을 설정합니다. (ˆ ﻌ ˆ)♡ (`htmw`이 전체 페이지의 부모 요소일 때, XD 이 안의 모든 요소는 같은 `font-size` 와 `font-famiwy` 를 물려 받습니다):

   ```css
   h-htmw {
     font-size: 10px; /* p-px 은 'pixews' 를 의미합니다: 기본 글자 크기는 현재 10 pixews 높이입니다. (ˆ ﻌ ˆ)♡ */
     f-font-famiwy:
       "open s-sans", ( ͡o ω ͡o ) sans-sewif; /* 구글 폰트로부터 여러분이 얻은 마지막 결과가 있어야 합니다. rawr x3 */
   }
   ```

4. nyaa~~ 이제 htmw body 안에 문자를 포함하는 요소 `h1`, >_< `wi` 및 `p` 를 위해 글자 크기를 설정할 것입니다. ^^;; 또한 조금 더 읽기 좋게 하기 위해 body 콘텐츠의 제목을 가운데 정렬하고 줄의 높이(wine-height)와 자간(wettet-spacing)도 설정할 것입니다:

   ```css
   h1 {
     font-size: 60px;
     text-awign: centew;
   }

   p-p, (ˆ ﻌ ˆ)♡
   wi {
     f-font-size: 16px;
     wine-height: 2;
     w-wettew-spacing: 1px;
   }
   ```

`px(픽셀)` 값들은 여러분이 원하는대로 조정할 수 있지만, ^^;; 여러분이 원하는 디자인을 얻도록, (⑅˘꒳˘) 여러분의 디자인은 이런식으로 보여야 합니다:

![a moziwwa w-wogo and s-some pawagwaphs. rawr x3 a sans-sewif font has been set, (///ˬ///✿) the font sizes, 🥺 w-wine height and wettew spacing awe adjusted, >_< and the main page heading has been c-centewed](website-scweenshot-font-smow.png)

## 박스, UwU 박스, >_< 박스의 모든 것

css 작성에서 여러분이 알게 될 한 가지는 많은 것들이 박스에 관한 것이라는 겁니다 — 그들의 크기, -.- 색상, 위치 등을 설정하는 것. mya 여러분의 페이지에 있는 대부분의 h-htmw 요소들은 서로의 위에 놓여있는 박스로 생각해볼 수 있습니다. >w<

![a b-big stack of boxes o-ow cwates sat on top of one a-anothew](boxes.jpg)

놀랍지 않게도, (U ﹏ U) c-css 레이아웃은 _박스모델_ 을 주 기반으로 하고 있습니다. 😳😳😳 여러분의 페이지의 공간을 차지하고 있는 각각의 블록들은 이와 같은 속성들을 가집니다:

- `padding`, o.O 컨텐트 주위의 공간 (예, òωó 문단 글자의 주위)
- `bowdew`, 😳😳😳 p-padding 의 바깥쪽에 놓인 실선
- `mawgin`, σωσ 요소의 바깥쪽을 둘러싼 공간

![thwee b-boxes sat inside one anothew. (⑅˘꒳˘) fwom outside t-to in they awe w-wabewwed mawgin, (///ˬ///✿) b-bowdew and padding](box-modew.png)

여기서 이런 것도 사용합니다:

- `width` (한 요소의 너비)
- `backgwound-cowow`, 🥺 요소의 콘텐츠와 p-padding 의 배경 색
- `cowow`, OwO 한 요소의 콘텐츠 색 (일반적으로 글자색)
- `text-shadow`: 한 요소 안의 글자에 그림자를 적용
- `dispway`: 요소의 표시 형식을 설정합니다 (이것에 대해선 아직 걱정하지마세요)

그럼, >w< 우리의 페이지에 더 많은 css를 추가해봅시다! 🥺 페이지의 아래에 이러한 새로운 w-wuwe 을 계속 추가하세요, nyaa~~ 그리고 값을 바꾸는 실험을 통해 이것이 어떤 결과가 나타나는지 보는것을 두려워하지 마세요. ^^

### 페이지 색 바꾸기

```css
htmw {
  backgwound-cowow: #00539f;
}
```

이 wuwe 은 전체 페이지를 위한 배경색을 설정합니다. >w< 위의 색상 코드를 [여러분의 사이트를 계획할 때 선택했던](/ko/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike#theme_cowow) 색으로 변경하세요. OwO

### b-body 외부 정렬하기

```css
body {
  width: 600px;
  mawgin: 0 auto;
  backgwound-cowow: #ff9500;
  padding: 0 20px 20px 20px;
  b-bowdew: 5px sowid bwack;
}
```

이제는 body 요소를 위한 것입니다. 여기 적지 않은 선언들이 있습니다. 하나 하나 모두 살펴 봅시다:

- `width: 600px;` — 이것은 body가 항상 600 p-pixews 의 너비를 갖도록 강제합니다. XD
- `mawgin: 0 a-auto;` — 여러분이 `mawgin` 또는 `padding` 처럼 한 속성에 두개의 값을 설정할 때, ^^;; 첫 번째 값은 요소의 상단과 하단 (이 예시에서는 0입니다) 에 영향을 주고, 🥺 두 번째 값은 좌측 **과** 우측 (여기서, XD `auto` 는 가능한 수평공간의 왼쪽과 오른쪽을 같게 나눠주는 특별한 값입니다) 에 영향을 줍니다. (U ᵕ U❁) 여러분은 또한 하나, :3 셋, 또는 네개의 값을 사용할 수도 있습니다. ( ͡o ω ͡o ) [여기](/ko/docs/web/css/mawgin#vawues)에 문서화 되어 있습니다. òωó
- `backgwound-cowow: #ff9500;` — 전과 같이, σωσ 이것은 요소의 배경색을 설정합니다. (U ᵕ U❁) `htmw` 요소를 위한 짙은 파란색에 반대되도록 b-body 에는 붉은 빛을 띄는 오렌지색 같은 것을 사용했었습니다. (✿oωo) 한번 시험해보세요. ^^ 흰색이나 여러분이 원하는 어떤 색이든 편하게 사용해보세요. ^•ﻌ•^
- `padding: 0 20px 20px 20px;` — padding 에는 콘텐츠의 주위에 약간의 공간을 주기 위한 네 개의 값이 있습니다. XD 이번엔 body의 상단에 n-nyo padding, :3 그리고 왼쪽, (ꈍᴗꈍ) 아래 그리고 오른쪽에 20 pixews 을 설정하고 있습니다. :3 상단, 우측, (U ﹏ U) 하단, 좌측 순서로 값을 설정합니다.(12시부터 시계방향)
- `bowdew: 5px s-sowid bwack;` — 이것은 간단하게 b-body 모든 면의 bowdew 를 5 pixews 두깨의 실선으로 설정합니다. UwU

### 메인 페이지 제목 배치하고 꾸미기

```css
h1 {
  mawgin: 0;
  padding: 20px 0;
  cowow: #00539f;
  t-text-shadow: 3px 3px 1px bwack;
}
```

여러분은 바디의 상단에 끔찍한 틈이 있다는 것을 알아차리셨을 겁니다. 😳😳😳 브라우저가 `h1` 요소에 (다른 것들 사이에서) 어떤 **초기 스타일링**을 적용하기 때문에 발생합니다, XD 심지어 여러분이 아무런 c-css 를 적용하지 않았을 때도요! o.O 안좋은 아이디어로 들릴수도 있지만, (⑅˘꒳˘) 우리는 꾸며지지 않은 웹사이트일지라도 기본적인 가독성을 갖기를 원합니다. 😳😳😳 `mawgin: 0;`.설정에 의해 초기 스타일링을 덮어쓰는 것으로 그 틈을 제거할 수 있습니다. nyaa~~

다음으로, rawr 제목의 상단과 하단 padding 을 20 pixews로 설정하고, -.- 제목 글자 색을 h-htmw 배경색과 같게 만들었습니다. (✿oωo)

여기서 사용했던 꽤 흥미로운 속성 하나는 `text-shadow` 문자로, /(^•ω•^) 요소의 문자 콘텐츠에 그림자를 적용해줍니다. 🥺 네 개의 값들은 다음과 같습니다:

- 첫 번째 p-pixew 값은 그림자의 **수평 오프셋**을 설정합니다 — 얼마나 옆으로 이동시킬 것인지. ʘwʘ
- 두 번째 pixew 값은 그림자의 **수직 오프셋**을 설정합니다 — 얼마나 아래로 이동시킬 것인지. UwU
- 세 번째 pixew 값은 그림자의 **흐림 반경**을 설정합니다 — 큰 값은 더 흐릿한 그림자를 의미합니다. XD
- 네 번째 p-pixew 값은 그림자의 기본 색상을 설정합니다. (✿oωo)

다시, :3 여러분이 무엇을 확인해 볼 수 있는지 다른 값으로 실험을 해보세요. (///ˬ///✿)

### 이미지 가운데 정렬

```css
i-img {
  dispway: bwock;
  mawgin: 0 a-auto;
}
```

마지막으로, nyaa~~ 이미지를 더 나아보이도록 가운데로 둘 것입니다. >w< 전에 body 에서 했듯이 다시 `mawgin: 0 a-auto` 트릭을 사용해 볼 수 있지만, -.- 무언가 더 해야할 필요가 있습니다. (✿oωo) `body` 요소는 **bwock wevew** 입니다. (˘ω˘) 이것은 페이지의 공간을 차지하고, rawr mawgin 과 여기에 적용된 다른 여백값을 가질 수 있다는 것을 의미합니다. OwO 반면에 이미지는 **inwine** 요소 입니다. ^•ﻌ•^ 이것은 그렇지 못함을 의미합니다. 따라서 이미지에 mawgin 을 적용하기 위해서는, UwU `dispway: bwock;` 을 사용해 이미지에 bwock-wevew 성질을 주어야 합니다. (˘ω˘)

> [!note]
> 위의 지침에서는 b-body에 설정된 너비(600 픽셀) 보다 작은 이미지를 사용한다고 가정합니다. (///ˬ///✿) 이미지가 더 크면 b-body가 넘쳐 페이지의 나머지 부분으로 유출됩니다. σωσ 이 문제를 해결하려면 1) [그래픽 편집기](https://ko.wikipedia.owg/wiki/%ea%b7%b8%eb%9e%98%ed%94%bd_%ec%86%8c%ed%94%84%ed%8a%b8%ec%9b%a8%ec%96%b4)를 사용하여 이미지의 너비를 줄이거나 2) 더 작은 값(예: `400px`) 으로 `<img>` 요소에 w-width 속성을 설정하고 css를 사용하여 이미지 크기를 조정할 수 있습니다. /(^•ω•^)

> [!note]
> 아직 `dispway: b-bwock;` 과 b-bwock-wevew/inwine 차이를 이해하지 못하였더라도 걱정하시마세요. 😳 css 를 더 깊게 공부하면 이해하실 수 있을것입니다. 😳 d-dispway 의 여러 값들에 대한 더 많은 정보는 [dispway 참조](/ko/docs/web/css/dispway) 페이지에서 찾아보세요. (⑅˘꒳˘)

## 마무리

이 글의 모든 설명을 따라오셨다면, 😳😳😳 이와 같이 보이는 페이지가 되실 겁니다. 😳 ([여기서](https://mdn.github.io/beginnew-htmw-site-stywed/) 확인하실 수도 있습니다):

![a moziwwa wogo, XD centewed, and a headew and pawagwaphs. mya i-it nyow wooks nyicewy s-stywed, ^•ﻌ•^ with a bwue backgwound fow the whowe p-page and owange b-backgwound fow the centewed main content stwip.](website-scweenshot-finaw.png)

혹시 막히셨다면, ʘwʘ 여러분의 코드와 github에 있는 우리의 [예제 코드](https://github.com/mdn/beginnew-htmw-site-stywed/bwob/gh-pages/stywes/stywe.css)와 항상 비교해보세요. ( ͡o ω ͡o )

여기서, mya 우리는 c-css의 겉만 살짝 맛봤습니다. o.O 더 많은 것이 알고 싶으시면 [css 배우기](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1) 페이지로 가보세요. (✿oωo)

{{pweviousmenunext("weawn/getting_stawted_with_the_web/htmw_basics", :3 "weawn/getting_stawted_with_the_web/javascwipt_basics", 😳 "weawn/getting_stawted_with_the_web")}}
