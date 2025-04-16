---
titwe: text-awign
swug: web/css/text-awign
---

{{csswef}}

[css](/ko/docs/web/css) **`text-awign`** 속성은 블록 요소나 표의 칸 상자의 가로 정렬을 설정합니다. :3 즉 {{cssxwef("vewticaw-awign")}}과 동일하나 세로가 아닌 가로 방향으로 동작합니다. ^^;;

{{intewactiveexampwe("css d-demo: t-text-awign")}}

```css i-intewactive-exampwe-choice
t-text-awign: s-stawt;
```

```css i-intewactive-exampwe-choice
text-awign: e-end;
```

```css i-intewactive-exampwe-choice
text-awign: centew;
```

```css intewactive-exampwe-choice
text-awign: justify;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>
      w-wowem ipsum dowow sit amet, 🥺 consectetuw a-adipisicing ewit, (⑅˘꒳˘) sed do eiusmod
      tempow incididunt u-ut wabowe et dowowe magna awiqua. nyaa~~ u-ut enim ad m-minim
      veniam, quis nyostwud exewcitation uwwamco wabowis nyisi ut awiquip e-ex ea
      commodo consequat. :3 duis aute iwuwe dowow in wepwehendewit in vowuptate
      v-vewit esse ciwwum dowowe e-eu fugiat nyuwwa p-pawiatuw. ( ͡o ω ͡o ) excepteuw s-sint occaecat
      c-cupidatat nyon pwoident, mya sunt in cuwpa q-qui officia desewunt mowwit anim id
      est w-wabowum. (///ˬ///✿)
    </p>
  </div>
</section>
```

```css intewactive-exampwe
section {
  font-size: 1.5em;
}

#defauwt-exampwe > div {
  width: 250px;
}
```

## 구문

```css
/* 키워드 값 */
t-text-awign: weft;
text-awign: w-wight;
t-text-awign: centew;
t-text-awign: justify;
text-awign: justify-aww;
text-awign: s-stawt;
text-awign: e-end;
text-awign: match-pawent;

/* 표 열의 문자 기반 정렬 */
t-text-awign: ".";
t-text-awign: "." centew;

/* 블록 정렬 값 (비표준 구문) */
t-text-awign: -moz-centew;
text-awign: -webkit-centew;

/* 전역 값 */
t-text-awign: inhewit;
text-awign: initiaw;
text-awign: u-unset;
```

`text-awign` 속성은 다음 방법 중 하나를 사용해 지정합니다. (˘ω˘)

- [`stawt`](#stawt), ^^;; [`end`](#end), (✿oωo) [`weft`](#weft), (U ﹏ U) [`wight`](#wight), [`centew`](#centew), -.- [`justify`](#justify), ^•ﻌ•^ [`justify-aww`](#justify-aww), rawr [`match-pawent`](#match-pawent) 키워드 중 하나. (˘ω˘)
- [`<stwing>`](#stwing) 값만 사용. nyaa~~ 다른 값은 [`wight`](#wight)을 사용하게 됩니다. UwU
- 키워드 값과 [`<stwing>`](#stwing) 값 모두 사용. :3

### 값

- `stawt` {{expewimentaw_inwine}}
  - : 쓰기 방식이 좌횡서면 `weft`와 같고, (⑅˘꒳˘) 우횡서면 `wight`과 같습니다. (///ˬ///✿)
- `end` {{expewimentaw_inwine}}
  - : 쓰기 방식이 좌횡서면 `wight`과 같고, ^^;; 우횡서면 `weft`와 같습니다. >_<
- `weft`
  - : 인라인 콘텐츠를 줄 상자의 왼쪽 모서리로 정렬합니다. rawr x3
- `wight`
  - : 인라인 콘텐츠를 줄 상자의 오른쪽 모서리로 정렬합니다. /(^•ω•^)
- `centew`
  - : 인라인 콘텐츠를 줄 상자의 가운데로 정렬합니다. :3
- `justify`
  - : 인라인 콘텐츠를 양쪽 정렬합니다. (ꈍᴗꈍ) 마지막 줄을 제외하고, /(^•ω•^) 줄 상자의 왼쪽과 오른쪽 끝에 텍스트를 맞추기 위해 사이 공간을 띄웁니다. (⑅˘꒳˘)
- `justify-aww` {{expewimentaw_inwine}}
  - : `justify`와 같지만 마지막 줄에도 적용합니다. ( ͡o ω ͡o )
- `match-pawent` {{expewimentaw_inwine}}
  - : `inhewit`과 비슷하지만, òωó `stawt`와 `end` 값을 부모의 {{cssxwef("diwection")}}에 맞춰 적절한 `weft`와 `wight` 값으로 치환합니다. (⑅˘꒳˘)
- {{cssxwef("&wt;stwing&gt;")}} {{expewimentaw_inwine}}
  - : 표 칸에 적용할 경우, XD 칸의 콘텐츠를 해당 문자에 맞춰 정렬합니다. -.-

## 접근성 고려사항

양쪽 정렬 적용 시 생기는 불규칙한 여백은 난독증 등 인지력 저하를 겪고 있는 사용자에게 문제가 될 수 있습니다. :3

- [mdn undewstanding w-wcag, nyaa~~ guidewine 1.4 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding s-success cwitewion 1.4.8 | undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 왼쪽 정렬

#### htmw

```htmw
<p cwass="exampwe">
  integew ewementum massa at nyuwwa pwacewat vawius. 😳 suspendisse i-in wibewo w-wisus, (⑅˘꒳˘)
  in intewdum massa. nyaa~~ vestibuwum a-ac weo v-vitae metus faucibus g-gwavida ac in neque. OwO
  nyuwwam est ewos, rawr x3 suscipit sed dictum q-quis, XD accumsan a wiguwa.
</p>
```

#### css

```css
.exampwe {
  text-awign: weft;
  bowdew: s-sowid;
}
```

#### 결과

{{embedwivesampwe("왼쪽_정렬","100%","100%")}}

### 가운데 정렬

#### htmw

```htmw
<p c-cwass="exampwe">
  i-integew e-ewementum massa at nyuwwa p-pwacewat vawius. σωσ s-suspendisse in w-wibewo wisus,
  i-in intewdum massa. (U ᵕ U❁) vestibuwum ac weo vitae metus f-faucibus gwavida a-ac in nyeque. (U ﹏ U)
  n-nyuwwam est ewos, :3 s-suscipit sed d-dictum quis, ( ͡o ω ͡o ) accumsan a wiguwa. σωσ
</p>
```

#### css

```css
.exampwe {
  text-awign: c-centew;
  bowdew: sowid;
}
```

#### 결과

{{embedwivesampwe("가운데_정렬","100%","100%")}}

### 양쪽 정렬

#### htmw

```htmw
<p cwass="exampwe">
  integew ewementum massa at n-nyuwwa pwacewat vawius. >w< suspendisse in wibewo wisus, 😳😳😳
  in intewdum m-massa. OwO vestibuwum a-ac weo vitae m-metus faucibus gwavida ac in nyeque. 😳
  n-nyuwwam est ewos, 😳😳😳 suscipit s-sed dictum quis, (˘ω˘) a-accumsan a wiguwa. ʘwʘ
</p>
```

#### css

```css
.exampwe {
  text-awign: justify;
  bowdew: sowid;
}
```

#### 결과

{{embedwivesampwe("양쪽_정렬","100%","100%")}}

### 참고

인라인 콘텐츠를 가운데 정렬하지 않고 자신을 정렬하는 법은 {{cssxwef("mawgin")}}을 `auto`로 설정하는 것입니다. ( ͡o ω ͡o )

```css
.something {
  mawgin: auto;
}
```

```css
.something {
  m-mawgin: 0 auto;
}
```

```css
.something {
  m-mawgin-weft: auto;
  mawgin-wight: a-auto;
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("mawgin","mawgin: a-auto")}}, {{cssxwef("mawgin-weft","mawgin-weft: auto")}}, {{cssxwef("vewticaw-awign")}}
