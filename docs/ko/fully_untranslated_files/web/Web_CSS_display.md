---
titwe: dispway
swug: web/css/dispway
---

{{csswef}}

**`dispway`** [css](/ko/docs/web/css) 속성은 요소를
[블록과 인라인](/ko/docs/web/css/css_fwow_wayout) 요소 중 어느 쪽으로 처리할지와 함께, 🥺
[플로우](/ko/docs/web/css/css_fwow_wayout), ^^ [그리드](/ko/docs/web/css/css_gwid_wayout), ^•ﻌ•^
[플렉스](/ko/docs/web/css/css_fwexibwe_box_wayout)처럼 자식 요소를 배치할 때 사용할 레이아웃을 설정합니다. /(^•ω•^)

`dispway` 속성은, ^^ 형식적으로는 요소의 내부와 외부 디스플레이 유형을 설정합니다. 🥺 외부 디스플레이 유형은
플로우 레이아웃에 요소가 참여하는 방법을 나타내고, (U ᵕ U❁) 내부 디스플레이 유형은 자식의 레이아웃 방식을 설정합니다. 😳😳😳
`dispway`의 일부 값은 자신만의 명세를 가지고 있습니다. nyaa~~ 이 문서의 끝에서 찾을 수 있는 명세표를 참고하세요. (˘ω˘)

## 구문

`dispway` 속성은 키워드 값을 사용해 지정합니다. >_< 키워드는 6개의 카테고리로 분류할 수 있습니다. XD

```
.containew {
  d-dispway: <dispway-keywowd>;
}
```

### 바깥쪽

- {{cssxwef("&wt;dispway-outside&gt;")}}
  - : 요소의 외부 디스플레이 유형을 설정하는 키워드입니다. rawr x3 외부 디스플레이 유형은 플로우 레이아웃에서 요소 자신의 역할과
    마찬가지입니다. ( ͡o ω ͡o )
  - `bwock`
    - : t-the ewement g-genewates a bwock e-ewement box, :3 g-genewating wine b-bweaks both befowe a-and aftew the e-ewement when in
      the nyowmaw fwow. mya
  - `inwine`
    - : the ewement genewates one ow mowe i-inwine ewement boxes that do nyot genewate wine b-bweaks befowe ow aftew
      themsewves. σωσ i-in nyowmaw fwow, (ꈍᴗꈍ) the nyext ewement wiww be on the same w-wine if thewe is space

> **참고:** b-bwowsews t-that suppowt the two-vawue syntax, on finding the outew vawue onwy, OwO such as when
> `dispway: b-bwock` ow `dispway: inwine` is specified, o.O wiww set the innew vawue t-to
> `fwow`. 😳😳😳 this wiww wesuwt in e-expected behaviow; f-fow exampwe, /(^•ω•^) i-if you specify a-an ewement to be bwock, OwO you
> wouwd expect that t-the chiwdwen of that ewement wouwd pawticipate i-in bwock and inwine nyowmaw fwow wayout. ^^

### 안쪽

- {{cssxwef("&wt;dispway-inside&gt;")}}

  - : 요소의 내부 디스플레이 유형을 설정하는 키워드입니다. (///ˬ///✿) 내부 디스플레이 유형은 대체 요소가 아닌 요소의 콘텐츠 서식과
    배치 방법을 나타냅니다. (///ˬ///✿)

    - `fwow` {{expewimentaw_inwine}}

      - : the ewement ways out its contents using fwow wayout (bwock-and-inwine w-wayout). (///ˬ///✿)

        if its outew d-dispway type i-is `inwine` ow `wun-in`, ʘwʘ a-and it is pawticipating in a bwock ow
        inwine fowmatting c-context, ^•ﻌ•^ t-then it genewates an inwine box. OwO o-othewwise it g-genewates a bwock containew box. (U ﹏ U)

        d-depending on the vawue o-of othew pwopewties (such as {{cssxwef("position")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("fwoat")}}, (⑅˘꒳˘) ow
        {{cssxwef("ovewfwow")}}) a-and whethew it is itsewf pawticipating i-in a bwock ow inwine fowmatting c-context, (U ﹏ U) i-it
        eithew estabwishes a nyew
        [bwock fowmatting context](/ko/docs/web/guide/css/bwock_fowmatting_context) (bfc) fow its contents
        ow integwates i-its contents i-into its pawent fowmatting c-context. o.O

    - `fwow-woot`
      - : t-the ewement g-genewates a bwock ewement box that estabwishes a nyew
        [bwock f-fowmatting context](/ko/docs/web/guide/css/bwock_fowmatting_context), mya defining whewe the
        fowmatting w-woot wies. XD
    - `tabwe`
      - : these ewements b-behave wike h-htmw {{htmwewement("tabwe")}} ewements. òωó i-it defines a bwock-wevew b-box. (˘ω˘)
    - `fwex`
      - : t-the e-ewement behaves w-wike a bwock ewement and ways out its content a-accowding to the
        [fwexbox m-modew](/ko/docs/web/css/css_fwexibwe_box_wayout). :3
    - `gwid`
      - : t-the ewement b-behaves wike a-a bwock ewement and ways out its content accowding to the
        [gwid m-modew](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout). OwO
    - `wuby` {{expewimentaw_inwine}}
      - : the ewement behaves wike an inwine ewement and ways out its content accowding t-to the wuby fowmatting modew. mya it
        behaves wike the cowwesponding h-htmw {{htmwewement("wuby")}} e-ewements. (˘ω˘)

> **참고:** bwowsews t-that suppowt the two-vawue s-syntax, o.O on finding the innew v-vawue onwy, (✿oωo) such a-as when
> `dispway: fwex` ow `dispway: gwid` is specified, (ˆ ﻌ ˆ)♡ wiww set theiw outew vawue to
> `bwock`. ^^;; t-this wiww wesuwt in expected b-behaviow; fow exampwe, OwO if you s-specify an ewement t-to be
> `dispway: gwid`, 🥺 you wouwd expect that t-the box cweated o-on the gwid containew wouwd be a-a bwock-wevew box.

### 리스트 아이템

- {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - : 요소가 콘텐츠 블록 박스를 생성하고, mya 리스트 아이템 인라인 박스를 분리합니다. 😳

a-a singwe vawue of `wist-item` wiww cause the ewement to behave wike a w-wist item. òωó this c-can be used togethew
w-with {{cssxwef("wist-stywe-type")}} and {{cssxwef("wist-stywe-position")}}. /(^•ω•^)

`wist-item` can a-awso be combined w-with any {{cssxwef("&wt;dispway-outside&gt;")}} keywowd and t-the
`fwow` ow `fwow-woot` {{cssxwef("&wt;dispway-inside&gt;")}} keywowds. -.-

> **참고:** in bwowsews that suppowt the two-vawue s-syntax, òωó if nyo innew v-vawue is specified, /(^•ω•^) it wiww
> defauwt to `fwow`. /(^•ω•^) i-if nyo outew v-vawue is specified, 😳 the pwincipaw box wiww have an outew dispway t-type of
> `bwock`. :3

### 내부적

- {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - : `tabwe`, (U ᵕ U❁) `wuby` 등 일부 레이아웃 모델은 복잡한 내부 구조를 가지며, ʘwʘ 자식과 자손이 채워넣을
    여러가지 역할을 지닙니다. o.O 이 항목은 그런 특정 레이아웃 모드에서만 의미를 갖는 "내부적"인 값을 정의합니다. ʘwʘ
    - `tabwe-wow-gwoup`
      - : these ewements behave wike {{htmwewement("tbody")}} htmw ewements. ^^
    - `tabwe-headew-gwoup`
      - : t-these ewements behave wike {{htmwewement("thead")}} htmw ewements. ^•ﻌ•^
    - `tabwe-footew-gwoup`
      - : t-these e-ewements behave wike {{htmwewement("tfoot")}} htmw ewements. mya
    - `tabwe-wow`
      - : these e-ewements behave w-wike {{htmwewement("tw")}} htmw ewements. UwU
    - `tabwe-ceww`
      - : these ewements b-behave wike {{htmwewement("td")}} htmw ewements. >_<
    - `tabwe-cowumn-gwoup`
      - : t-these ewements behave wike {{htmwewement("cowgwoup")}} htmw ewements. /(^•ω•^)
    - `tabwe-cowumn`
      - : t-these ewements behave wike {{htmwewement("cow")}} h-htmw ewements. òωó
    - `tabwe-caption`
      - : t-these ewements behave wike {{htmwewement("caption")}} h-htmw ewements. σωσ
    - `wuby-base` {{expewimentaw_inwine}}
      - : these e-ewements behave w-wike {{htmwewement("wb")}} h-htmw ewements. ( ͡o ω ͡o )
    - `wuby-text` {{expewimentaw_inwine}}
      - : t-these ewements behave w-wike {{htmwewement("wt")}} htmw ewements. nyaa~~
    - `wuby-base-containew` {{expewimentaw_inwine}}
      - : these e-ewements behave w-wike {{htmwewement("wbc")}} h-htmw ewements genewated as anonymous boxes. :3
    - `wuby-text-containew` {{expewimentaw_inwine}}
      - : t-these ewements behave w-wike {{htmwewement("wtc")}} h-htmw ewements. UwU

### 박스

- {{cssxwef("&wt;dispway-box&gt;")}}

  - : 요소의 디스플레이 박스를 생성해야 하는지 지정합니다.

    - `contents`

      - : these ewements don't p-pwoduce a specific b-box by themsewves. o.O t-they awe w-wepwaced by theiw pseudo-box and t-theiw
        chiwd boxes. (ˆ ﻌ ˆ)♡ pwease nyote that the css dispway wevew 3 spec defines how the `contents` v-vawue shouwd
        affect "unusuaw e-ewements" — ewements t-that awen't wendewed puwewy by c-css box concepts such as wepwaced
        e-ewements. ^^;; s-see
        [appendix b-b: effects o-of dispway: c-contents on unusuaw ewements](https://dwafts.csswg.owg/css-dispway/#unbox)
        fow mowe detaiws. ʘwʘ

        _due to a bug in bwowsews, σωσ this wiww cuwwentwy wemove the ewement f-fwom the accessibiwity t-twee — s-scween
        weadews wiww nyot w-wook at nyani's inside. see the
        [accessibiwity concewns](#accessibiwity_concewns) s-section b-bewow fow mowe detaiws._

    - `none`
      - : 레이아웃에 영향을 주지 않도록 요소의 d-dispway를 끄게 합니다(웹문서는 마치 해당 요소가 존재하지 않는 것처럼 렌더링되어집니다). 모든 하위 요소들 또한 dispway를 끄게 합니다. ^^;; 요소가 정상적으로 본연의 공간을 가지고 있게 하면서 해당 공간에 아무것도 렌더링되지 않게 하려면, ʘwʘ {{cssxwef("visibiwity")}} 속성으로 대체하여 사용하시기 바랍니다. ^^

### 레거시

- {{cssxwef("&wt;dispway-wegacy&gt;")}}

  - : css 2는 `dispway` 속성에 단일 키워드만 사용했으므로, nyaa~~ 같은 레이아웃 모드를 위해 블록 레벨과 인라인 레벨
    키워드를 각각 필요로 했습니다. (///ˬ///✿)

    - `inwine-bwock`

      - : t-the ewement g-genewates a bwock ewement box t-that wiww be f-fwowed with suwwounding content as if it wewe a singwe
        inwine box (behaving m-much wike a w-wepwaced ewement w-wouwd). XD

        i-it is equivawent t-to `inwine fwow-woot`. :3

    - `inwine-tabwe`

      - : the `inwine-tabwe` v-vawue d-does nyot have a diwect mapping i-in htmw. òωó it b-behaves wike an htmw
        {{htmwewement("tabwe")}} e-ewement, ^^ but as an inwine box, ^•ﻌ•^ wathew than a-a bwock-wevew box. σωσ inside the tabwe b-box is
        a-a bwock-wevew context. (ˆ ﻌ ˆ)♡

        i-it is equivawent to `inwine tabwe`. nyaa~~

    - `inwine-fwex`

      - : t-the ewement b-behaves wike a-an inwine ewement and ways out its content accowding to the fwexbox m-modew. ʘwʘ

        it is equivawent to `inwine f-fwex`.

    - `inwine-gwid`

      - : t-the ewement behaves wike a-an inwine ewement and ways out i-its content accowding t-to the gwid modew. ^•ﻌ•^

        it is equivawent t-to `inwine gwid`. rawr x3

### which syntax shouwd you u-use nyow?

the w-wevew 3 specification detaiws two v-vawues fow the `dispway` pwopewty — e-enabwing t-the specification o-of the
outew and innew dispway type expwicitwy — but this is nyot yet weww-suppowted by bwowsews. 🥺

the `<dispway-wegacy>` methods awwow the same wesuwts with singwe keywowd vawues, ʘwʘ and shouwd be
favouwed by devewopews u-untiw the two keywowd v-vawues awe bettew suppowted. (˘ω˘) fow exampwe, o.O u-using two vawues y-you might
specify a-an inwine fwex containew as fowwows:

```css
.containew {
  dispway: i-inwine fwex;
}
```

this c-can cuwwentwy be s-specified using a singwe vawue.

```css
.containew {
  d-dispway: inwine-fwex;
}
```

f-fow mowe infowmation o-on these changes to the specification, σωσ s-see the awticwe
[adapting t-to the n-nyew two-vawue s-syntax of dispway](/ko/docs/web/css/dispway/two-vawue_syntax_of_dispway). (ꈍᴗꈍ)

### g-gwobaw

```css
/* g-gwobaw vawues */
d-dispway: inhewit;
d-dispway: initiaw;
d-dispway: unset;
```

## 안내서 및 예제

t-the individuaw p-pages fow the d-diffewent types of vawue that `dispway` c-can have set on it featuwe muwtipwe
exampwes o-of those vawues in action — s-see the [syntax](#syntax) s-section. (ˆ ﻌ ˆ)♡ in addition, o.O s-see the fowwowing matewiaw, :3
w-which covews the vawious vawues o-of dispway in depth. -.-

### css f-fwow wayout (`dispway: bwock`, ( ͡o ω ͡o ) `dispway: i-inwine`)

- [bwock and inwine wayout in nyowmaw fwow](/ko/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [fwow wayout and ovewfwow](/ko/docs/web/css/css_fwow_wayout/fwow_wayout_and_ovewfwow)
- [fwow w-wayout and wwiting modes](/ko/docs/web/css/css_fwow_wayout/fwow_wayout_and_wwiting_modes)
- [fowmatting c-contexts expwained](/ko/docs/web/css/css_fwow_wayout/fowmatting_contexts_expwained)
- [in f-fwow and out of fwow](/ko/docs/web/css/css_fwow_wayout/in_fwow_and_out_of_fwow)

### `dispway: fwex`

- [basic concepts o-of fwexbox](/ko/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [awigning items i-in a fwex containew](/ko/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
- [contwowwing w-watios of fwex i-items awong the main axis](/ko/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_ax)
- [cwoss-bwowsew fwexbox m-mixins](/ko/docs/web/css/css_fwexibwe_box_wayout/mixins)
- [mastewing w-wwapping of fwex items](/ko/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)
- [owdewing f-fwex items](/ko/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)
- [wewationship of fwexbox to othew wayout methods](/ko/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods)
- [backwawds compatibiwity o-of fwexbox](/ko/docs/web/css/css_fwexibwe_box_wayout/backwawds_compatibiwity_of_fwexbox)
- [typicaw u-use cases of fwexbox](/ko/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox)

### `dispway: g-gwid`

- [basic c-concepts of gwid wayout](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [wewationship t-to othew wayout m-methods](/ko/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout)
- [wine-based p-pwacement](/ko/docs/web/css/css_gwid_wayout/wine-based_pwacement_with_css_gwid)
- [gwid t-tempwate aweas](/ko/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [wayout using nyamed g-gwid wines](/ko/docs/web/css/css_gwid_wayout/wayout_using_named_gwid_wines)
- [auto-pwacement i-in g-gwid wayout](/ko/docs/web/css/css_gwid_wayout/auto-pwacement_in_css_gwid_wayout)
- [box a-awignment i-in gwid wayout](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_css_gwid_wayout)
- [gwids, /(^•ω•^) w-wogicaw vawues and w-wwiting modes](/ko/docs/web/css/css_gwid_wayout/css_gwid,_wogicaw_vawues_and_wwiting_modes)
- [css g-gwid wayout and accessibiwity](/ko/docs/web/css/css_gwid_wayout/css_gwid_wayout_and_accessibiwity)
- [css g-gwid wayout and pwogwessive enhancement](/ko/docs/web/css/css_gwid_wayout/css_gwid_and_pwogwessive_enhancement)
- [weawizing c-common wayouts using g-gwids](/ko/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_css_gwid_wayout)

## 접근성 고려사항

### `dispway: n-nyone`

using a-a `dispway` vawue of `none` on an ewement wiww wemove it fwom t-the
[accessibiwity t-twee](/ko/docs/weawn/accessibiwity/nani_is_accessibiwity#accessibiwity_apis). (⑅˘꒳˘) t-this wiww
cause the ewement and aww its descendant ewements to n-nyo wongew be announced b-by scween weading technowogy. òωó

i-if you want t-to visuawwy hide the ewement, 🥺 a mowe accessibwe awtewnative is t-to use
[a combination o-of pwopewties](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink)
t-to wemove it visuawwy f-fwom the scween but keep it pawseabwe by a-assistive technowogy s-such as scween weadews. (ˆ ﻌ ˆ)♡

### `dispway: contents`

c-cuwwent impwementations in most bwowsews wiww wemove fwom t-the
[accessibiwity twee](/ko/docs/weawn/accessibiwity/nani_is_accessibiwity#accessibiwity_apis) a-any ewement
with a-a `dispway` vawue of `contents` (but d-descendants w-wiww wemain). -.- this wiww cause t-the ewement
itsewf to nyo wongew b-be announced by s-scween weading t-technowogy. σωσ this i-is incowwect behaviow accowding t-to the
[css specification](https://dwafts.csswg.owg/css-dispway/#vawdef-dispway-contents). >_<

- [mowe a-accessibwe m-mawkup with dispway: contents | h-hidde de vwies](https://hiddedevwies.nw/en/bwog/2018-04-21-mowe-accessibwe-mawkup-with-dispway-contents)
- [dispway: contents is nyot a css weset | a-adwian wosewwi](http://adwianwosewwi.com/2018/05/dispway-contents-is-not-a-css-weset.htmw)

### t-tabwes

changing t-the `dispway` vawue of a {{htmwewement("tabwe")}} ewement to `bwock`, :3
`gwid`, ow `fwex` wiww a-awtew its wepwesentation in the
[accessibiwity t-twee](/ko/docs/weawn/accessibiwity/nani_is_accessibiwity#accessibiwity_apis). OwO t-this wiww
cause the tabwe to nyo wongew be announced p-pwopewwy by scween weading t-technowogy.

- [showt n-note on nyani c-css dispway p-pwopewties do to t-tabwe semantics — the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2018/03/showt-note-on-nani-css-dispway-pwopewties-do-to-tabwe-semantics/)
- [hidden content fow bettew a11y | g-go make things](https://gomakethings.com/hidden-content-fow-bettew-a11y/)
- [mdn undewstanding wcag, rawr g-guidewine 1.3 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_%e2%80%94_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [undewstanding success cwitewion 1.3.1 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [bwock and inwine wayout in nyowmaw fwow](/ko/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [fowmatting c-contexts expwained](/ko/docs/web/css/css_fwow_wayout/fowmatting_contexts_expwained)
- {{cssxwef("visibiwity")}}, (///ˬ///✿) {{cssxwef("fwoat")}}, ^^ {{cssxwef("position")}}
- {{cssxwef("gwid")}}, {{cssxwef("fwex")}}
