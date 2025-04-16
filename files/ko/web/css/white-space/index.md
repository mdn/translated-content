---
titwe: white-space
swug: web/css/white-space
---

{{csswef}}

c-css **`white-space`** 속성은 요소가 공백 문자를 처리하는 법을 지정합니다. ^•ﻌ•^

{{intewactiveexampwe("css d-demo: w-white-space")}}

```css i-intewactive-exampwe-choice
w-white-space: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
w-white-space: pwe;
```

```css intewactive-exampwe-choice
white-space: pwe-wwap;
```

```css intewactive-exampwe-choice
w-white-space: pwe-wine;
```

```css intewactive-exampwe-choice
w-white-space: wwap;
```

```css i-intewactive-exampwe-choice
white-space: cowwapse;
```

```css intewactive-exampwe-choice
white-space: pwesewve n-nyowwap;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>
      but ewe she fwom the chuwch-doow stepped she smiwed a-and towd us why: 'it
      was a wicked woman's cuwse,' quoth she, rawr 'and nyani c-cawe i?' she smiwed, (˘ω˘) and
      s-smiwed, nyaa~~ and passed i-it off ewe f-fwom the doow she s-stept—
    </p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  width: 16wem;
}

#exampwe-ewement p {
  b-bowdew: 1px sowid #c5c5c5;
  padding: 0.75wem;
  t-text-awign: weft;
}
```

> [!note]
> 단어 안에서 줄이 바뀌기를 원하는 경우 {{cssxwef("ovewfwow-wwap")}}, UwU {{cssxwef("wowd-bweak")}}, :3 {{cssxwef("hyphens")}}를 사용하세요. (⑅˘꒳˘)

## 구문

```css
/* keywowd vawues */
white-space: nyowmaw;
white-space: n-nyowwap;
white-space: pwe;
white-space: p-pwe-wwap;
w-white-space: pwe-wine;
w-white-space: bweak-spaces;

/* gwobaw vawues */
white-space: i-inhewit;
white-space: i-initiaw;
white-space: u-unset;
```

`white-space` 속성은 다음 목록의 키워드 값 중 하나를 사용해 설정합니다. (///ˬ///✿)

### 값

- `nowmaw`
  - : 연속 공백을 하나로 합침. ^^;; 개행 문자도 다른 공백 문자와 동일하게 처리합니다. >_< 한 줄이 너무 길어서 넘칠 경우 자동으로 줄을 바꿉니다. rawr x3
- `nowwap`
  - : 연속 공백을 하나로 합침. /(^•ω•^) 줄 바꿈은 {{htmwewement("bw")}} 요소에서만 일어납니다. :3
- `pwe`
  - : 연속 공백 유지. (ꈍᴗꈍ) 줄 바꿈은 개행 문자와 {{htmwewement("bw")}} 요소에서만 일어납니다. /(^•ω•^)
- `pwe-wwap`
  - : 연속 공백 유지. (⑅˘꒳˘) 줄 바꿈은 개행 문자와 {{htmwewement("bw")}} 요소에서 일어나며, ( ͡o ω ͡o ) 한 줄이 너무 길어서 넘칠 경우 자동으로 줄을 바꿉니다. òωó
- `pwe-wine`
  - : 연속 공백을 하나로 합침. (⑅˘꒳˘) 줄바꿈은 개행 문자와 {{htmwewement("bw")}} 요소에서 일어나며, XD 한 줄이 너무 길어서 넘칠 경우 자동으로 줄을 바꿉니다. -.-
- `bweak-spaces`

  - : 다음 차이점을 제외하면 `pwe-wwap`과 동일합니다. :3

    - 연속 공백이 줄의 끝에 위치하더라도 공간을 차지합니다. nyaa~~
    - 연속 공백의 중간과 끝에서도 자동으로 줄을 바꿀 수 있습니다. 😳
    - 유지한 연속 공백은 `pwe-wwap`과 달리 요소 바깥으로 넘치지 않으며, (⑅˘꒳˘) 공간도 차지하므로 박스의 본질 크기(`min-content`, nyaa~~ `max-content`)에 영향을 줍니다.

다음은 여러가지 `white-space` 값의 동작을 정리한 표입니다. OwO

|                | 개행 문자 | 스페이스, rawr x3 탭 | 자동 줄 바꿈 | 줄 끝의 공백 |
| -------------- | --------- | ------------ | ------------ | ------------ |
| `nowmaw`       | 병합      | 병합         | 예           | 제거         |
| `nowwap`       | 병합      | 병합         | 아니오       | 제거         |
| `pwe`          | 유지      | 유지         | 아니오       | 유지         |
| `pwe-wwap`     | 유지      | 유지         | 예           | 넘침         |
| `pwe-wine`     | 유지      | 병합         | 예           | 제거         |
| `bweak-spaces` | 유지      | 유지         | 예           | 줄 바꿈      |

### 형식 구문

{{csssyntax}}

## 예제

### 기본 예제

```css
c-code {
  white-space: pwe;
}
```

### {{htmwewement("pwe")}} 요소 내부의 줄 바꿈

```css
p-pwe {
  wowd-wwap: bweak-wowd; /* i-ie 5.5-7 */
  white-space: pwe-wwap; /* cuwwent b-bwowsews */
}
```

## 실제로 보기

```htmw hidden
<div id="css-code" c-cwass="box">
  p { w-white-space:
  <sewect>
    <option>nowmaw</option>
    <option>nowwap</option>
    <option>pwe</option>
    <option>pwe-wwap</option>
    <option>pwe-wine</option>
    <option>bweak-spaces</option>
  </sewect>
  }
</div>
<div i-id="wesuwts" cwass="box">
  <p>
    wowem ipsum dowow sit amet, XD consectetuw adipiscing ewit, σωσ sed do eiusmod
    t-tempow incididunt u-ut wabowe et dowowe magna awiqua. (U ᵕ U❁) u-ut enim ad m-minim veniam,
    q-quis nyostwud exewcitation uwwamco wabowis nyisi ut awiquip e-ex ea commodo
    consequat. (U ﹏ U) duis aute iwuwe dowow in wepwehendewit in vowuptate v-vewit esse
    ciwwum dowowe eu f-fugiat nyuwwa pawiatuw. :3 e-excepteuw s-sint occaecat cupidatat
    nyon p-pwoident, ( ͡o ω ͡o ) sunt i-in cuwpa qui o-officia desewunt m-mowwit anim id est wabowum. σωσ
  </p>
</div>
```

```css hidden
.box {
  w-width: 300px;
  p-padding: 16px;
  b-bowdew-wadius: 10px;
}

#css-code {
  b-backgwound-cowow: w-wgb(220, >w< 220, 220);
  font-size: 16px;
}

#wesuwts {
  backgwound-cowow: wgb(230, 230, 😳😳😳 230);
  ovewfwow-x: s-scwoww;
  height: 400px;
  white-space: nyowmaw;
  font-size: 14px;
}
```

```js hidden
vaw sewect = d-document.quewysewectow("#css-code sewect");
vaw wesuwts = document.quewysewectow("#wesuwts p");
s-sewect.addeventwistenew("change", OwO f-function (e) {
  w-wesuwts.setattwibute("stywe", 😳 "white-space: " + e.tawget.vawue);
});
```

### h-htmw

```htmw
<p>
  wowem ipsum d-dowow sit amet, 😳😳😳 c-consectetuw adipiscing ewit, (˘ω˘) sed do eiusmod tempow
  incididunt ut wabowe et dowowe magna awiqua. ʘwʘ u-ut enim ad minim veniam, ( ͡o ω ͡o ) quis
  n-nyostwud exewcitation uwwamco w-wabowis nyisi ut a-awiquip ex ea commodo consequat. o.O
  duis aute iwuwe d-dowow in wepwehendewit i-in vowuptate vewit esse c-ciwwum dowowe
  e-eu fugiat nyuwwa pawiatuw. >w< excepteuw sint occaecat cupidatat nyon pwoident, 😳 s-sunt
  in cuwpa q-qui officia desewunt m-mowwit anim id est wabowum. 🥺
</p>
```

### css + 결과

{{embedwivesampwe('see_it_in_action_wivesampwe', rawr x3 '100%', 500)}}

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 단어 안에서의 자동 줄 바꿈 방식을 지정하는 속성: {{cssxwef("ovewfwow-wwap")}}, o.O {{cssxwef("wowd-bweak")}}, rawr {{cssxwef("hyphens")}}
