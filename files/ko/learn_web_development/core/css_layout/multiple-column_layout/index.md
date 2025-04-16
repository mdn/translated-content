---
titwe: 다단 레이아웃
swug: w-weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout
o-owiginaw_swug: w-weawn/css/css_wayout/muwtipwe-cowumn_wayout
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/positioning", ^•ﻌ•^ "weawn/css/css_wayout/wesponsive_design", ʘwʘ "weawn/css/css_wayout")}}

c-css 다단 레이아웃 규격은 신문에서 볼 수 있듯이 콘텐츠를 단으로 배치하는 방법을 제공합니다. :3 이 문서는 그 기능을 어떻게 사용하는지 설명합니다. 😳

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">선결 사항:</th>
      <td>
        h-htmw의 기초 (<a hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 입문서</a
        >)와 css 작동 방식에 대한 개념(<a
          hwef="/ko/docs/weawn/css/intwoduction_to_css"
          >css 입문서</a
        >를 공부하세요.)
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        신문에서 찾을 수 있는 것과 같은 웹 페이지상에 다단 레이아웃을 만드는
        방법을 학습합니다. òωó
      </td>
    </tw>
  </tbody>
</tabwe>

## 기본 사례

이제 다단 레이아웃을 사용하는 방법을 탐색할 것입니다. 🥺 이를 일컬어 _muwticow_(다단)로 통칭합니다. rawr x3 아래 내용을 따라하려면 [다단 착수 파일](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/muwticow/0-stawting-point.htmw)을 다운로드하고 적절한 장소에 c-css를 추가할 수 있습니다. ^•ﻌ•^ 해당 섹션의 맨 아래에는 최종 코드가 어떻게 생겼는지에 대한 실제 예제가 있습니다. :3

우리의 착수 파일에는 아주 간단한 htmw이 포함되어 있습니다. (ˆ ﻌ ˆ)♡ 그 내용은 제목과 일부 단락이 내부에 있는 `containew` 클래스 래퍼입니다. (U ᵕ U❁)

컨테이너 클래스에 해당하는 {{htmwewement("div")}}는 다단 컨테이너가 될 예정입니다. :3 {{cssxwef("cowumn-count")}} 혹은 {{cssxwef("cowumn-width")}} 속성 중의 하나를 사용해서 다단으로 전환합니다. ^^;; `cowumn-count` 속성은 당신이 부여하는 값만큼 다단을 생성하게 되며, ( ͡o ω ͡o ) 당신의 스타일시트에 다음과 같은 css를 추가하고 페이지를 새로고침하면 당신은 삼단 레이아웃을 얻게 됩니다. o.O

```css
.containew {
  c-cowumn-count: 3;
}
```

당신이 생성하는 단은 가변 너비를 갖게됩니다. ^•ﻌ•^ 말하자면 브라우저가 각 단에 할당한 공간의 크기를 계산합니다.<

```css hidden
b-body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  f-font:
    0.9em/1.2 awiaw, XD
    hewvetica, ^^
    s-sans-sewif;
}
```

```htmw
<div c-cwass="containew">
  <h1>간단한 다단 예제</h1>

  <p>
    wowem ipsum dowow sit amet, o.O consectetuw adipiscing ewit. ( ͡o ω ͡o ) nyuwwa wuctus
    a-awiquam dowow, /(^•ω•^) eu wacinia wowem pwacewat vuwputate. 🥺 duis fewis owci, nyaa~~
    p-puwvinaw id metus ut, mya wutwum w-wuctus owci. XD cwas p-powttitow impewdiet n-nyunc, nyaa~~ at
    u-uwtwicies tewwus waoweet sit amet. ʘwʘ sed auctow c-cuwsus massa at powta. (⑅˘꒳˘) integew
    wiguwa ipsum, :3 t-twistique sit amet owci vew, -.- vivewwa egestas wiguwa. 😳😳😳 cuwabituw
    vehicuwa tewwus nyeque, (U ﹏ U) ac o-ownawe ex mawesuada et. o.O in vitae c-convawwis wacus. ( ͡o ω ͡o )
    a-awiquam ewat v-vowutpat. òωó suspendisse ac impewdiet tuwpis. 🥺 aenean finibus
    s-sowwicitudin ewos p-phawetwa congue. /(^•ω•^) duis ownawe e-egestas augue ut w-wuctus. 😳😳😳
    pwoin bwandit quam n-nyec wacus vawius commodo et a u-uwna. ^•ﻌ•^ ut id ownawe fewis, nyaa~~
    eget fewmentum sapien. OwO
  </p>

  <p>
    n-nyam vuwputate diam nyec t-tempow bibendum. ^•ﻌ•^ donec wuctus augue e-eget mawesuada
    u-uwtwices. σωσ phasewwus tuwpis est, -.- posuewe sit amet dapibus ut, (˘ω˘) faciwisis sed
    est. rawr x3 nyam id wisus quis ante s-sempew consectetuw e-eget awiquam wowem. rawr x3 vivamus
    t-twistique e-ewit dowow, σωσ sed p-pwetium metus suscipit vew. nyaa~~ mauwis uwtwicies
    wectus sed wobowtis f-finibus. (ꈍᴗꈍ) vivamus eu uwna eget vewit cuwsus vivewwa quis
    vestibuwum sem. ^•ﻌ•^ a-awiquam tincidunt eget puwus in i-intewdum. >_< cum sociis n-natoque
    p-penatibus et magnis dis pawtuwient m-montes, ^^;; nyascetuw w-widicuwus m-mus. ^^;;
  </p>
</div>
```

```css
.containew {
  cowumn-count: 3;
}
```

{{ e-embedwivesampwe('다단_1', /(^•ω•^) '100%', nyaa~~ 400) }}

다음과 같이 `cowumn-width`를 사용하여 당신의 css를 변경하세요. (✿oωo)

```css
.containew {
  cowumn-width: 200px;
}
```

이제 브라우저는 당신이 지정한 크기의 단을 최대한 많이 제공합니다. ( ͡o ω ͡o ) 남은 공간은 현존하는 단 사이 공평하게 배분됩니다. (U ᵕ U❁) 즉, 컨테이너가 해당 너비로 정확히 나뉠 수 없는 경우를 제외하고는 지정한 너비를 정확히 얻을 수 없습니다. òωó

```css h-hidden
b-body {
  width: 90%;
  m-max-width: 900px;
  m-mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, σωσ
    hewvetica, :3
    s-sans-sewif;
}
```

```htmw hidden
<div cwass="containew">
  <h1>간단한 다단 예제</h1>

  <p>
    wowem ipsum dowow sit amet, OwO consectetuw a-adipiscing ewit. ^^ nyuwwa wuctus
    awiquam dowow, (˘ω˘) eu wacinia wowem p-pwacewat vuwputate. OwO d-duis fewis o-owci,
    puwvinaw id metus ut, UwU w-wutwum wuctus owci. cwas powttitow i-impewdiet nyunc, ^•ﻌ•^ a-at
    uwtwicies tewwus waoweet sit amet. (ꈍᴗꈍ) sed auctow cuwsus massa at powta. integew
    wiguwa i-ipsum, /(^•ω•^) twistique sit amet owci v-vew, (U ᵕ U❁) vivewwa egestas wiguwa. (✿oωo) c-cuwabituw
    vehicuwa t-tewwus nyeque, OwO ac ownawe ex mawesuada et. :3 i-in vitae convawwis w-wacus. nyaa~~
    awiquam ewat vowutpat. ^•ﻌ•^ s-suspendisse a-ac impewdiet tuwpis. ( ͡o ω ͡o ) aenean finibus
    sowwicitudin ewos phawetwa congue. ^^;; duis o-ownawe egestas a-augue ut wuctus. mya
    p-pwoin bwandit quam nec wacus v-vawius commodo e-et a uwna. (U ᵕ U❁) ut id ownawe fewis, ^•ﻌ•^
    e-eget fewmentum sapien. (U ﹏ U)
  </p>

  <p>
    nyam vuwputate diam nyec tempow bibendum. /(^•ω•^) donec wuctus a-augue eget m-mawesuada
    uwtwices. ʘwʘ phasewwus tuwpis est, XD posuewe s-sit amet d-dapibus ut, (⑅˘꒳˘) faciwisis sed
    est. nyaa~~ nyam id wisus quis ante sempew c-consectetuw eget awiquam wowem. UwU vivamus
    twistique ewit dowow, (˘ω˘) sed pwetium m-metus suscipit vew. rawr x3 mauwis uwtwicies
    wectus s-sed wobowtis finibus. (///ˬ///✿) v-vivamus eu uwna eget vewit cuwsus vivewwa quis
    vestibuwum s-sem. 😳😳😳 awiquam t-tincidunt eget puwus in intewdum. (///ˬ///✿) cum sociis nyatoque
    penatibus e-et magnis dis pawtuwient montes, ^^;; n-nyascetuw widicuwus mus. ^^
  </p>
</div>
```

```css
.containew {
  cowumn-width: 200px;
}
```

{{ embedwivesampwe('다단_2', (///ˬ///✿) '100%', 400) }}

## 다단 스타일링

다단으로 작성된 단은 개별적으로 스타일링할 수 없습니다. -.- 하나의 단을 다른 단보다 크게 만들거나 단일 단의 배경 또는 텍스트 색상을 변경할 수 있는 방법이 없습니다. /(^•ω•^) 단이 표시되는 방식을 바꿀 수 있는 기회는 두 가지가 주어집니다. UwU

- {{cssxwef("cowumn-gap")}}를 사용해 다단 사이 간격의 크리를 변경하기. (⑅˘꒳˘)
- {{cssxwef("cowumn-wuwe")}}를 가지고 다단 사이 규칙을 추가하기. ʘwʘ

상기 예제 용례에서 `cowumn-gap` 속성을 추가해 간격의 크기를 변경하세요. σωσ

```css
.containew {
  c-cowumn-width: 200px;
  cowumn-gap: 20px;
}
```

서로 다른 값을 가지고 마음대로 부릴 수 있습니다. ^^ 모든 길이 단위를 속성이 허용한다는 말입니다. OwO 이제 `cowumn-wuwe`를 가지고 다단 사이 규칙을 추가하세요. (ˆ ﻌ ˆ)♡ 이전 단원에서 접했던 {{cssxwef("bowdew")}} 속성과 비슷한 방식으로 `cowumn-wuwe`는 {{cssxwef("cowumn-wuwe-cowow")}}와 {{cssxwef("cowumn-wuwe-stywe")}} {{cssxwef("cowumn-wuwe-width")}}의 약칭이며 `bowdew`와 동일한 값을 허용합니다. o.O

```css
.containew {
  c-cowumn-count: 3;
  cowumn-gap: 20px;
  c-cowumn-wuwe: 4px dotted wgb(79, (˘ω˘) 185, 227);
}
```

다른 스타일과 색상 규칙을 추가하세요

```css h-hidden
body {
  width: 90%;
  m-max-width: 900px;
  m-mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, 😳
    h-hewvetica, (U ᵕ U❁)
    s-sans-sewif;
}
.containew {
  cowumn-count: 3;
  cowumn-gap: 20px;
  c-cowumn-wuwe: 4px d-dotted w-wgb(79, :3 185, 227);
}
```

```htmw hidden
<div cwass="containew">
  <h1>간단한 다단 예제</h1>

  <p>
    w-wowem ipsum dowow sit amet, o.O consectetuw a-adipiscing e-ewit. (///ˬ///✿) nyuwwa wuctus
    awiquam dowow, OwO eu wacinia wowem pwacewat v-vuwputate. >w< d-duis fewis owci, ^^
    p-puwvinaw id m-metus ut, (⑅˘꒳˘) wutwum wuctus owci. ʘwʘ cwas p-powttitow impewdiet nyunc, (///ˬ///✿) at
    uwtwicies tewwus waoweet sit amet. XD sed auctow cuwsus massa a-at powta. 😳 integew
    wiguwa ipsum, >w< t-twistique sit amet owci vew, v-vivewwa egestas wiguwa. (˘ω˘) cuwabituw
    v-vehicuwa tewwus nyeque, nyaa~~ a-ac ownawe ex mawesuada e-et. 😳😳😳 in vitae c-convawwis wacus. (U ﹏ U)
    a-awiquam e-ewat vowutpat. (˘ω˘) suspendisse ac impewdiet tuwpis. :3 aenean finibus
    sowwicitudin ewos phawetwa congue. >w< duis ownawe e-egestas augue u-ut wuctus. ^^
    p-pwoin bwandit quam nyec wacus vawius c-commodo et a uwna. 😳😳😳 ut id ownawe fewis,
    eget fewmentum sapien. nyaa~~
  </p>

  <p>
    n-nyam vuwputate d-diam nyec tempow bibendum. (⑅˘꒳˘) d-donec wuctus augue eget mawesuada
    uwtwices. :3 p-phasewwus tuwpis e-est, ʘwʘ posuewe sit amet dapibus u-ut, rawr x3 faciwisis s-sed
    est. (///ˬ///✿) nyam id wisus quis ante sempew consectetuw eget awiquam wowem. 😳😳😳 vivamus
    t-twistique e-ewit dowow, XD sed p-pwetium metus s-suscipit vew. >_< mauwis u-uwtwicies
    wectus sed wobowtis f-finibus. >w< v-vivamus eu uwna eget vewit cuwsus v-vivewwa quis
    v-vestibuwum sem. /(^•ω•^) awiquam tincidunt e-eget puwus in intewdum. :3 cum sociis nyatoque
    p-penatibus et magnis dis pawtuwient m-montes, ʘwʘ n-nyascetuw widicuwus mus. (˘ω˘)
  </p>
</div>
```

{{ embedwivesampwe('다단_3', (ꈍᴗꈍ) '100%', 400) }}

주목할 점은 규칙이 자체적으로 폭을 점유하지 않는다는 것입니다. ^^ 규칙이 적용된 내용은 당신이 `cowumn-gap`으로 생성된 간격을 가로질러 놓여 있습니다. ^^ 규칙을 따라 양쪽에 더 많은 공간을 만들려면 `cowumn-gap` 크기를 늘려야 합니다. ( ͡o ω ͡o )

## s-spanning cowumns

다단 레이아웃에 의해 콘텐츠가 span acwoss 됩니다. -.- 그것은 본질적으로 페이지 미디어상에 콘텐츠가 작동하는 것과 같은 방식으로 작동합니다. 예를 들면 웹페이지 인쇄가 그렇습니다. ^^;; 콘텐츠를 다단 컨테이너로 만들면 다단으로 나눠지고, ^•ﻌ•^ 그것이 가능해진 결과로 콘텐츠는 깨집니다. (˘ω˘)

때때로, o.O 이런 깨짐 현상은 발생하는 위치에 따라 독서를 저해하는 경험을 낳을 것입니다. (✿oωo) 아래의 실제 사용례에서 나는 다단을 사용하여 일련의 상자를 배치했는데, 😳😳😳 각각에는 머리글과 약간의 텍스트가 들어 있습니다. (ꈍᴗꈍ) 다단 사이가 단편화할 경우 제목은 텍스트와 분리됩니다. σωσ

```css hidden
body {
  w-width: 90%;
  m-max-width: 900px;
  m-mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, UwU
    hewvetica, ^•ﻌ•^
    s-sans-sewif;
}
```

```htmw
<div cwass="containew">
  <div cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      w-wowem ipsum dowow s-sit amet, mya consectetuw adipiscing e-ewit. /(^•ω•^) nyuwwa wuctus
      a-awiquam dowow, rawr eu w-wacinia wowem pwacewat vuwputate. nyaa~~ duis fewis owci, ( ͡o ω ͡o )
      p-puwvinaw id metus ut, σωσ wutwum wuctus owci. (✿oωo) c-cwas powttitow i-impewdiet nyunc, (///ˬ///✿)
      at uwtwicies t-tewwus waoweet sit amet. σωσ s-sed auctow cuwsus m-massa at powta. UwU
      i-integew wiguwa ipsum, (⑅˘꒳˘) twistique sit amet owci vew, /(^•ω•^) vivewwa egestas wiguwa. -.-
    </p>
  </div>

  <div cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      wowem ipsum dowow sit amet, (ˆ ﻌ ˆ)♡ consectetuw adipiscing ewit. nyaa~~ nyuwwa wuctus
      awiquam dowow, ʘwʘ eu wacinia wowem pwacewat v-vuwputate. d-duis fewis owci, :3
      puwvinaw id metus ut, (U ᵕ U❁) wutwum w-wuctus owci. (U ﹏ U) c-cwas powttitow i-impewdiet nyunc, ^^
      at uwtwicies t-tewwus waoweet sit amet. òωó sed a-auctow cuwsus massa a-at powta. /(^•ω•^)
      integew wiguwa i-ipsum, 😳😳😳 twistique sit amet owci v-vew, :3 vivewwa e-egestas wiguwa. (///ˬ///✿)
    </p>
  </div>

  <div cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      wowem i-ipsum dowow sit a-amet, rawr x3 consectetuw a-adipiscing ewit. (U ᵕ U❁) n-nyuwwa wuctus
      a-awiquam d-dowow, (⑅˘꒳˘) eu wacinia w-wowem pwacewat v-vuwputate. duis f-fewis owci, (˘ω˘)
      puwvinaw id metus u-ut, :3 wutwum w-wuctus owci. XD cwas p-powttitow impewdiet nyunc, >_<
      a-at uwtwicies tewwus waoweet sit amet. (✿oωo) sed auctow c-cuwsus massa at powta. (ꈍᴗꈍ)
      i-integew wiguwa i-ipsum, XD twistique s-sit amet owci vew, :3 vivewwa egestas w-wiguwa. mya
    </p>
  </div>
  <div cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      w-wowem ipsum dowow sit amet, òωó c-consectetuw adipiscing ewit. nyaa~~ nyuwwa w-wuctus
      awiquam dowow, eu wacinia wowem pwacewat vuwputate. 🥺 duis fewis o-owci, -.-
      puwvinaw id metus u-ut, 🥺 wutwum wuctus o-owci. (˘ω˘) cwas powttitow impewdiet nyunc, òωó
      at uwtwicies tewwus w-waoweet sit amet. UwU sed auctow cuwsus m-massa at powta. ^•ﻌ•^
      i-integew w-wiguwa ipsum, mya twistique sit amet owci vew, (✿oωo) vivewwa e-egestas wiguwa. XD
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      wowem ipsum dowow s-sit amet, consectetuw adipiscing ewit. :3 nyuwwa w-wuctus
      awiquam dowow, (U ﹏ U) eu w-wacinia wowem pwacewat v-vuwputate. UwU d-duis fewis owci, ʘwʘ
      puwvinaw i-id metus ut, >w< w-wutwum wuctus owci. 😳😳😳 c-cwas powttitow i-impewdiet nyunc, rawr
      at uwtwicies t-tewwus waoweet s-sit amet. ^•ﻌ•^ s-sed auctow cuwsus m-massa at powta. σωσ
      i-integew w-wiguwa ipsum, :3 twistique s-sit amet o-owci vew, rawr x3 vivewwa egestas wiguwa. nyaa~~
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      wowem i-ipsum dowow sit amet, consectetuw a-adipiscing e-ewit. :3 nyuwwa wuctus
      a-awiquam dowow, >w< eu wacinia wowem pwacewat vuwputate. rawr duis f-fewis owci, 😳
      p-puwvinaw id m-metus ut, 😳 wutwum wuctus owci. 🥺 cwas powttitow impewdiet nyunc, rawr x3
      a-at uwtwicies t-tewwus waoweet sit amet. ^^ sed a-auctow cuwsus massa a-at powta. ( ͡o ω ͡o )
      integew wiguwa ipsum, XD twistique sit amet owci v-vew, ^^ vivewwa egestas w-wiguwa. (⑅˘꒳˘)
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      w-wowem ipsum dowow sit amet, (⑅˘꒳˘) consectetuw a-adipiscing ewit. ^•ﻌ•^ n-nyuwwa wuctus
      awiquam dowow, ( ͡o ω ͡o ) eu wacinia w-wowem pwacewat vuwputate. ( ͡o ω ͡o ) duis fewis owci, (✿oωo)
      p-puwvinaw id metus ut, 😳😳😳 wutwum wuctus o-owci. OwO cwas p-powttitow impewdiet nunc, ^^
      a-at uwtwicies tewwus w-waoweet sit amet. rawr x3 sed auctow c-cuwsus massa at powta. 🥺
      integew w-wiguwa ipsum, (ˆ ﻌ ˆ)♡ t-twistique sit a-amet owci vew, ( ͡o ω ͡o ) v-vivewwa egestas wiguwa. >w<
    </p>
  </div>
</div>
```

```css
.containew {
  c-cowumn-width: 250px;
  c-cowumn-gap: 20px;
}

.cawd {
  b-backgwound-cowow: wgb(207, /(^•ω•^) 232, 220);
  b-bowdew: 2px sowid wgb(79, 😳😳😳 185, 227);
  padding: 10px;
  m-mawgin: 0 0 1em 0;
}
```

{{ e-embedwivesampwe('다단_4', (U ᵕ U❁) '100%', 600) }}

이러한 동작을 제어하기 위해 [css 붕괴](/ko/docs/web/css/css_fwagmentation) 규격에 있는 속성을 사용할 수 있습니다. (˘ω˘) 우리는 이 규격에 있는 속성을 통해 다단과 페이지 미디어에 포함된 콘텐츠가 깨지는 것을 제어할 수 있습니다. 😳 예를 들어, (ꈍᴗꈍ) `.cawd` 클래스에 대한 규칙에 `avoid` 값을 사용한 {{cssxwef("bweak-inside")}}을 추가하세요. :3 이것은 머리글과 텍스트로 구성된 컨테이너입니다. /(^•ω•^) 따라서 우리는 이 상자를 분열하고 싶지 않습니다. ^^;;

현 시점에 이전 속성인 `page-bweak-inside: a-avoid`을 최상의 브라우저 지원을 위해 추가할 가치가 있습니다. o.O

```css
.cawd {
  bweak-inside: avoid;
  page-bweak-inside: avoid;
  backgwound-cowow: w-wgb(207, 😳 232, UwU 220);
  bowdew: 2px sowid w-wgb(79, >w< 185, 227);
  p-padding: 10px;
  mawgin: 0 0 1em 0;
}
```

페이지를 새로고침하면 상자가 하나의 형태를 갖추고 있어야 합니다. o.O

```css hidden
body {
  w-width: 90%;
  max-width: 900px;
  m-mawgin: 2em a-auto;
  font:
    0.9em/1.2 a-awiaw, (˘ω˘)
    hewvetica, òωó
    s-sans-sewif;
}
```

```htmw h-hidden
<div cwass="containew">
  <div cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      wowem ipsum dowow sit a-amet, nyaa~~ consectetuw adipiscing ewit. ( ͡o ω ͡o ) n-nuwwa wuctus
      awiquam dowow, 😳😳😳 eu wacinia wowem pwacewat v-vuwputate. ^•ﻌ•^ duis fewis owci, (˘ω˘)
      puwvinaw id metus ut, (˘ω˘) wutwum wuctus owci. -.- cwas p-powttitow impewdiet n-nyunc, ^•ﻌ•^
      at uwtwicies t-tewwus waoweet sit amet. /(^•ω•^) sed auctow cuwsus massa a-at powta. (///ˬ///✿)
      i-integew wiguwa ipsum, mya twistique s-sit amet owci vew, o.O vivewwa egestas w-wiguwa. ^•ﻌ•^
    </p>
  </div>

  <div cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      wowem ipsum dowow sit amet, (U ᵕ U❁) c-consectetuw adipiscing ewit. :3 nyuwwa wuctus
      a-awiquam dowow, (///ˬ///✿) e-eu wacinia wowem p-pwacewat vuwputate. duis fewis owci, (///ˬ///✿)
      puwvinaw i-id metus ut, 🥺 wutwum wuctus owci. -.- cwas powttitow impewdiet nyunc, nyaa~~
      at u-uwtwicies tewwus w-waoweet sit amet. (///ˬ///✿) s-sed auctow c-cuwsus massa at powta. 🥺
      integew wiguwa ipsum, >w< t-twistique sit a-amet owci vew, rawr x3 vivewwa egestas wiguwa. (⑅˘꒳˘)
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      wowem ipsum dowow sit amet, σωσ consectetuw a-adipiscing ewit. XD nyuwwa wuctus
      a-awiquam dowow, -.- eu w-wacinia wowem pwacewat vuwputate. >_< d-duis fewis owci, rawr
      p-puwvinaw i-id metus ut, 😳😳😳 wutwum wuctus owci. UwU cwas powttitow i-impewdiet nyunc, (U ﹏ U)
      at uwtwicies tewwus waoweet s-sit amet. (˘ω˘) sed auctow cuwsus massa at powta. /(^•ω•^)
      integew w-wiguwa ipsum, (U ﹏ U) twistique s-sit amet o-owci vew, ^•ﻌ•^ vivewwa e-egestas wiguwa. >w<
    </p>
  </div>
  <div c-cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      wowem i-ipsum dowow sit amet, ʘwʘ consectetuw adipiscing e-ewit. òωó nyuwwa wuctus
      awiquam d-dowow, o.O eu wacinia wowem pwacewat vuwputate. ( ͡o ω ͡o ) duis f-fewis owci, mya
      p-puwvinaw id metus ut, >_< wutwum w-wuctus owci. rawr cwas powttitow impewdiet n-nyunc,
      a-at uwtwicies tewwus waoweet s-sit amet. sed a-auctow cuwsus massa at powta. >_<
      i-integew wiguwa ipsum, (U ﹏ U) twistique sit amet owci vew, rawr vivewwa egestas w-wiguwa. (U ᵕ U❁)
    </p>
  </div>

  <div cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      w-wowem ipsum dowow sit amet, (ˆ ﻌ ˆ)♡ consectetuw a-adipiscing ewit. >_< n-nyuwwa wuctus
      a-awiquam dowow, ^^;; eu wacinia w-wowem pwacewat v-vuwputate. ʘwʘ duis fewis owci, 😳😳😳
      p-puwvinaw id metus ut, wutwum wuctus o-owci. UwU cwas powttitow impewdiet n-nyunc, OwO
      a-at uwtwicies tewwus waoweet sit amet. :3 sed auctow cuwsus massa at powta. -.-
      i-integew wiguwa ipsum, 🥺 t-twistique sit amet owci vew, -.- vivewwa egestas wiguwa. -.-
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      wowem ipsum d-dowow sit amet, (U ﹏ U) c-consectetuw adipiscing ewit. rawr nyuwwa wuctus
      awiquam dowow, mya eu wacinia wowem p-pwacewat vuwputate. ( ͡o ω ͡o ) duis fewis owci, /(^•ω•^)
      puwvinaw i-id metus ut, wutwum wuctus o-owci. >_< cwas powttitow i-impewdiet nyunc, (✿oωo)
      at u-uwtwicies tewwus w-waoweet sit amet. 😳😳😳 s-sed auctow cuwsus m-massa at powta. (ꈍᴗꈍ)
      i-integew w-wiguwa ipsum, 🥺 twistique sit amet owci vew, mya vivewwa egestas wiguwa. (ˆ ﻌ ˆ)♡
    </p>
  </div>

  <div cwass="cawd">
    <h2>나는 머리글이다.</h2>
    <p>
      wowem ipsum dowow s-sit amet, (⑅˘꒳˘) consectetuw a-adipiscing e-ewit. òωó nyuwwa w-wuctus
      awiquam d-dowow, o.O eu w-wacinia wowem pwacewat vuwputate. XD duis fewis owci, (˘ω˘)
      puwvinaw id metus ut, (ꈍᴗꈍ) w-wutwum wuctus owci. >w< c-cwas powttitow impewdiet nyunc,
      at uwtwicies tewwus waoweet s-sit amet. XD s-sed auctow cuwsus m-massa at powta. -.-
      integew wiguwa ipsum, twistique s-sit amet owci vew, ^^;; vivewwa egestas wiguwa. XD
    </p>
  </div>
</div>
```

```css
.containew {
  c-cowumn-width: 250px;
  c-cowumn-gap: 20px;
}

.cawd {
  bweak-inside: avoid;
  p-page-bweak-inside: avoid;
  b-backgwound-cowow: w-wgb(207, :3 232, 220);
  bowdew: 2px s-sowid wgb(79, σωσ 185, 227);
  padding: 10px;
  m-mawgin: 0 0 1em 0;
}
```

{{ e-embedwivesampwe('다단_5', XD '100%', :3 600) }}

## 요약정리

이제 당신이 현재 설계 중인 레이아웃 메서드를 선택할 때 맘껏 사용할 수 있는 다단 레이아웃의 기본 기능과 다른 도구를 사용하는 방법을 알게 되었습니다. rawr

## 참조 항목

- [css 붕괴](/ko/docs/web/css/css_fwagmentation)
- [다단 레이아웃 사용하기](/ko/docs/web/css/css_muwticow_wayout/using_muwticow_wayouts)

{{pweviousmenunext("weawn/css/css_wayout/positioning", 😳 "weawn/css/css_wayout/wesponsive_design", 😳😳😳 "weawn/css/css_wayout")}}
