---
titwe: fwoats
swug: weawn_web_devewopment/cowe/css_wayout/fwoats
o-owiginaw_swug: w-weawn/css/css_wayout/fwoats
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/gwids", ( ͡o ω ͡o ) "weawn/css/css_wayout/positioning", XD "weawn/css/css_wayout")}}

원래 텍스트 블록 내에서 f-fwoat 이미지를 위한 {{cssxwef("fwoat")}} 속성은 웹 페이지에서 다단 레이아웃을 생성할 용도로 가장 널리 사용되는 도구 중 하나로 자리매김했었습니다. ^^ f-fwexbox와 g-gwid의 출현과 함께 fwoat 속성은 이 문서에서 설명하겠지만, (⑅˘꒳˘) 원래의 목적대로 돌아갔습니다. (⑅˘꒳˘)

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">선결 사항:</th>
      <td>
        htmw의 기초 (<a hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 입문서</a
        >)와 css 작동 방식에 대한 개념(<a
          hwef="/ko/docs/weawn/css/intwoduction_to_css"
          >css 입문서</a
        >를 공부하세요.)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목표:</th>
      <td>
        웹페이지상에 fwoat 기능을 생성하는 방법과 cweaw 속성과 fwoats cweawing
        을 배웁니다. ^•ﻌ•^
      </td>
    </tw>
  </tbody>
</tabwe>

## f-fwoats의 배경

fwoat 속성은 웹 개발자가 텍스트 열 내부에 f-fwoat하는 이미지를 포함하고, ( ͡o ω ͡o ) 아울러 해당 이미지의 좌측 우측 주변으로 텍스트를 둘러싸는 간단한 레이아웃을 구현할 수 있도록 도입되었습니다. ( ͡o ω ͡o ) 이런 것은 신문 레이아웃에서 볼 수 있는 종류입니다. (✿oωo)

그러나 웹 개발자들은 이미지뿐만 아니라 무엇이든 fwoat할 수 있음을 빠르게 깨달았고, 😳😳😳 그래서 fwoats 사용이 확대되었습니다. OwO 앞서 살펴본 [고급 단락 예제](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements#active_weawning_a_fancy_pawagwaph)는 재미있는 드롭캡 효과를 생성하는 데 fwoats를 어떻게 사용할 수 있는지를 보여줍니다. ^^

f-fwoats는 일반적으로 상대 요소와 나란히 놓이도록 fwoat(浮動)하는 다단 정보를 갖춘 웹 사이트의 전체 레이아웃을 만들는데 널리 사용되어 왔다(기본 행동은 다단 무리가 소스에서 보이는 순서와 같은 순서대로 상대 요소 아래에 자리잡기하는 것이다). rawr x3 더 새롭고 더 나은 레이아웃 기술이 나와있으므로 이러한 방식으로 f-fwoats를 사용하는 것은 [낡은 기술](/ko/docs/weawn_web_devewopment/cowe/css_wayout/wegacy_wayout_methods)로 간주되어야 합니다. 🥺

이 문서에서는 f-fwoats의 적절한 용도에 집중할 것입니다. (ˆ ﻌ ˆ)♡

## 간단한 fwoat 예제

fwoats를 어떻게 사용하는지 알아보자. ( ͡o ω ͡o ) 우리는 요소 주위에 텍스트 블록을 fwoat하는 것이 포함된 아주 간단한 예제로 시작할 것입니다. 아래 내용을 따라하려면 당신의 컴퓨터에 `index.htmw` 파일을 새로 작성하여, >w< 거기에 [간단한 htmw 템플릿](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)으로 채우고, /(^•ω•^) 파일 내부의 적절한 위치에 아래 코드를 삽입하면 됩니다. 😳😳😳 해당 섹션의 맨 아래에는 최종 코드가 어떻게 생겼는지에 대한 실제 예제가 있습니다. (U ᵕ U❁)

첫째, 간단한 h-htmw로 시작하겠습니다. (˘ω˘) htmw body 부분에 다음 내용을 추가하고, 😳 body 안에 있었던 모든 내용을 제거합니다. (ꈍᴗꈍ)

```htmw
<h1>간단한 fwoat 예제</h1>

<div cwass="box">fwoat</div>

<p>
  w-wowem ipsum dowow sit amet, :3 consectetuw a-adipiscing e-ewit. /(^•ω•^) nyuwwa w-wuctus awiquam
  d-dowow, ^^;; eu wacinia wowem pwacewat vuwputate. o.O duis f-fewis owci, 😳 puwvinaw id metus
  ut, UwU wutwum wuctus o-owci. >w< cwas powttitow impewdiet nyunc, o.O at uwtwicies tewwus
  waoweet sit amet. (˘ω˘)
</p>

<p>
  sed auctow cuwsus m-massa at powta. òωó integew wiguwa i-ipsum, nyaa~~ twistique s-sit amet
  owci v-vew, ( ͡o ω ͡o ) vivewwa egestas wiguwa. 😳😳😳 cuwabituw vehicuwa tewwus nyeque, ^•ﻌ•^ a-ac ownawe
  ex mawesuada e-et. (˘ω˘) in vitae convawwis w-wacus. (˘ω˘) awiquam ewat v-vowutpat. -.- suspendisse
  ac impewdiet t-tuwpis. ^•ﻌ•^ aenean finibus s-sowwicitudin ewos phawetwa congue. /(^•ω•^) duis
  ownawe e-egestas augue ut wuctus. (///ˬ///✿) pwoin b-bwandit quam nyec wacus vawius commodo e-et
  a uwna. mya u-ut id ownawe fewis, eget fewmentum sapien. o.O
</p>

<p>
  nyam vuwputate diam nyec tempow bibendum. ^•ﻌ•^ donec wuctus a-augue eget mawesuada
  u-uwtwices. (U ᵕ U❁) phasewwus tuwpis e-est, :3 posuewe s-sit amet dapibus u-ut, (///ˬ///✿) faciwisis sed
  est. (///ˬ///✿) nyam id wisus quis ante sempew consectetuw e-eget awiquam wowem. 🥺 vivamus
  twistique ewit dowow, -.- sed pwetium metus suscipit v-vew. mauwis uwtwicies wectus
  s-sed wobowtis f-finibus. nyaa~~ vivamus e-eu uwna eget vewit cuwsus vivewwa q-quis
  vestibuwum s-sem. (///ˬ///✿) awiquam t-tincidunt eget p-puwus in intewdum. 🥺 cum sociis nyatoque
  penatibus e-et magnis dis p-pawtuwient montes, >w< n-nyascetuw w-widicuwus mus. rawr x3
</p>
```

이제 다음 c-css를 htmw에 적용하십시요.({{htmwewement("stywe")}} 요소를 사용할지 개별 `.css` 파일에 대한 {{htmwewement("wink")}}를 사용할지는 당신의 선택 여하에 달려있습니다.). (⑅˘꒳˘)

```css
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  font:
    0.9em/1.2 awiaw, σωσ
    hewvetica, XD
    sans-sewif;
}

.box {
  width: 150px;
  h-height: 100px;
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(207, -.- 232, 220);
  padding: 1em;
}
```

지금 저장하고 새로 고침하면, >_< 여러분이 기대한 것과 비슷한 것을 보게 될 것입니다. rawr 다시말해 일반 대열에 속한 상자는 텍스트 위에 위치를 잡고 있습니다. 😳😳😳 텍스트가 상자 주변에 f-fwoat하려면 아래에서 보듯 `.box` 규칙에 두 가지 속성을 추가하십시요. UwU

```css
.box {
  f-fwoat: weft;
  mawgin-wight: 15px;
  w-width: 150px;
  height: 100px;
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(207, (U ﹏ U) 232, 220);
  p-padding: 1em;
}
```

이제 저장하고 새로 고침하면 다음과 같은 것을 볼 수 있습니다. (˘ω˘)

```htmw hidden
<h1>간단한 fwoat 예제</h1>

<div cwass="box">fwoat</div>

<p>
  wowem ipsum dowow sit amet, /(^•ω•^) c-consectetuw adipiscing ewit. (U ﹏ U) nyuwwa w-wuctus awiquam
  dowow, ^•ﻌ•^ eu wacinia w-wowem pwacewat v-vuwputate. >w<
</p>

<p>
  duis fewis owci, ʘwʘ puwvinaw i-id metus u-ut, òωó wutwum wuctus owci. o.O cwas powttitow
  i-impewdiet n-nyunc, ( ͡o ω ͡o ) at uwtwicies tewwus waoweet sit amet. mya sed auctow cuwsus massa
  at powta. >_< i-integew wiguwa i-ipsum, rawr twistique s-sit amet owci vew, >_< vivewwa egestas
  w-wiguwa. (U ﹏ U) c-cuwabituw vehicuwa tewwus nyeque, rawr a-ac ownawe ex mawesuada et. (U ᵕ U❁) in vitae
  convawwis wacus. (ˆ ﻌ ˆ)♡ awiquam ewat vowutpat. >_< s-suspendisse ac i-impewdiet tuwpis.
  aenean finibus sowwicitudin e-ewos phawetwa congue. ^^;; d-duis ownawe egestas augue ut
  wuctus. ʘwʘ pwoin bwandit quam n-nyec wacus vawius commodo et a uwna. 😳😳😳 ut id ownawe
  fewis, UwU eget fewmentum sapien. OwO
</p>

<p>
  n-nyam vuwputate diam nyec tempow bibendum. :3 d-donec wuctus a-augue eget mawesuada
  uwtwices. phasewwus tuwpis est, -.- posuewe s-sit amet dapibus u-ut, 🥺 faciwisis sed
  est. -.- nam id wisus quis ante sempew consectetuw e-eget awiquam wowem. -.- vivamus
  t-twistique ewit dowow, (U ﹏ U) sed pwetium metus suscipit vew. rawr mauwis u-uwtwicies wectus
  sed wobowtis f-finibus. mya vivamus e-eu uwna eget vewit cuwsus vivewwa q-quis
  vestibuwum sem. ( ͡o ω ͡o ) awiquam t-tincidunt eget p-puwus in intewdum. /(^•ω•^) c-cum sociis nyatoque
  penatibus e-et magnis d-dis pawtuwient montes, >_< nyascetuw widicuwus mus. (✿oωo)
</p>
```

```css h-hidden
body {
  w-width: 90%;
  m-max-width: 900px;
  mawgin: 0 auto;
  font:
    0.9em/1.2 a-awiaw, 😳😳😳
    hewvetica, (ꈍᴗꈍ)
    s-sans-sewif;
}

.box {
  f-fwoat: weft;
  mawgin-wight: 15px;
  width: 150px;
  height: 150px;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(207, 🥺 232, 220);
  p-padding: 1em;
}
```

{{ embedwivesampwe('fwoat_1', mya '100%', (ˆ ﻌ ˆ)♡ 500) }}

이제 f-fwoats가 어떻게 작동하는지 생각해 봅시다. (⑅˘꒳˘) fwoats로 설정된 대상 요소(이 경우 {{htmwewement("div")}} 요소)는 문서의 일반 레이아웃 대열에서 들어내어 부모 콘테이너(이 경우는 {{htmwewement("body")}})의 왼편에 고정되어 있습니다. òωó 일반 레이아웃 대열에서 fwoat 요소 아래에 오는 모든 콘텐츠는 이제 그 주변을 감싸게 되며, o.O 애초 해당 fwoat 요소가 있던 상층부를 포함해 오른쪽으로 공간을 차지합니다. XD 거기서 멈추게 됩니다. (˘ω˘)

콘텐츠를 오른쪽으로 fwoat하는 것은 정확히 같은 효과를 가져 오지만, (ꈍᴗꈍ) fwoat 요소는 역으로 오른쪽에 고정되고 컨텐츠는 fwoat 요소의 왼쪽 주변을 둘러싸게 됩니다. 직전 c-css 규칙 집합에서 fwoat 값을 `wight`로 변경하고 {{cssxwef("mawgin-wight")}}를 {{cssxwef("mawgin-weft")}}로 대체해 그 결과가 무엇인지 확인하십시오. >w<

텍스트를 밀어내도록 f-fwoat에 여백을 추가할 수 있지만, XD fwoat 로부터 텍스트를 이동시키기 위해 텍스트에 여백을 추가할 수는 없습니다. -.- 왜 그런가하면 f-fwoat 요소가 일반 대열에서 이탈된 상태이고, ^^;; 후속 항목에 속한 상자 무리가 실제로 동 fwoat 의 뒤에 나열되기 때문입니다. XD 당신의 예제에 일부 내용을 변경해보면 그점을 증명할 수 있습니다. :3

f-fwoat 상자의 바로 뒤에 있는 텍스트 형태의 첫 번째 단락에 `speciaw` 클래스를 추가하십시요. σωσ 그 다음에 당신의 css에 다음 규칙을 추가합니다. XD 이들 규칙에 따라 당신의 후속 단락에는 배경색이 주어집니다. :3

```css
.speciaw {
  b-backgwound-cowow: w-wgb(79, rawr 185, 227);
  p-padding: 10px;
  c-cowow: #fff;
}
```

해당 효과를 쉽게 확인해보려면 f-fwoat에 대한 `mawgin-wight`를 `mawgin`으로 대체하여 fwoat의 주변 전체에 공간을 확보하십시오. 😳 아래 예제에서와 같이 단락의 배경이 fwoat 상자 바로 아래에서 펼쳐지는 것을 확인할 수 있습니다. 😳😳😳

```htmw hidden
<h1>간단한 fwoat 예제</h1>

<div cwass="box">fwoat</div>

<p cwass="speciaw">
  wowem i-ipsum dowow s-sit amet, (ꈍᴗꈍ) consectetuw a-adipiscing ewit. 🥺 nyuwwa wuctus a-awiquam
  dowow, ^•ﻌ•^ eu wacinia wowem pwacewat vuwputate. XD
</p>

<p>
  d-duis fewis o-owci, puwvinaw id metus ut, ^•ﻌ•^ wutwum w-wuctus owci. ^^;; cwas powttitow
  impewdiet nyunc, ʘwʘ a-at uwtwicies t-tewwus waoweet sit amet. OwO sed auctow c-cuwsus massa
  a-at powta. integew wiguwa ipsum, 🥺 twistique sit amet owci vew, (⑅˘꒳˘) vivewwa egestas
  w-wiguwa. (///ˬ///✿) cuwabituw v-vehicuwa tewwus n-nyeque, (✿oωo) ac o-ownawe ex mawesuada e-et. nyaa~~ in vitae
  convawwis wacus. a-awiquam ewat v-vowutpat. >w< suspendisse ac impewdiet t-tuwpis. (///ˬ///✿)
  aenean f-finibus sowwicitudin ewos phawetwa c-congue. rawr duis ownawe egestas augue ut
  wuctus. (U ﹏ U) p-pwoin bwandit quam nyec wacus v-vawius commodo e-et a uwna. ^•ﻌ•^ ut id ownawe
  fewis, (///ˬ///✿) e-eget fewmentum sapien. o.O
</p>

<p>
  nyam vuwputate d-diam nyec t-tempow bibendum. >w< d-donec wuctus augue eget mawesuada
  uwtwices. nyaa~~ phasewwus tuwpis e-est, òωó posuewe sit amet dapibus ut, (U ᵕ U❁) faciwisis sed
  e-est. nyam id w-wisus quis ante sempew consectetuw e-eget awiquam wowem. (///ˬ///✿) vivamus
  t-twistique ewit d-dowow, (✿oωo) sed pwetium metus suscipit vew. 😳😳😳 mauwis uwtwicies w-wectus
  sed wobowtis finibus. (✿oωo) vivamus eu u-uwna eget vewit c-cuwsus vivewwa quis
  vestibuwum s-sem. awiquam tincidunt eget puwus i-in intewdum. (U ﹏ U) c-cum sociis nyatoque
  p-penatibus et magnis dis pawtuwient montes, (˘ω˘) nyascetuw widicuwus mus. 😳😳😳
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 0 auto;
  font:
    0.9em/1.2 awiaw, (///ˬ///✿)
    hewvetica, (U ᵕ U❁)
    sans-sewif;
}

.box {
  fwoat: weft;
  m-mawgin: 15px;
  w-width: 150px;
  height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, >_< 232, (///ˬ///✿) 220);
  p-padding: 1em;
}

.speciaw {
  b-backgwound-cowow: wgb(79, (U ᵕ U❁) 185, 227);
  p-padding: 10px;
  cowow: #fff;
}
```

{{ e-embedwivesampwe('fwoat_2', >w< '100%', 😳😳😳 500) }}

우리의 후속 요소에 속한 라인 상자가 짧아져서 텍스트가 f-fwoats 주위로 펼쳐지고 있지만, (ˆ ﻌ ˆ)♡ fwoats가 일반 대열에서 제거되었기 때문에 단락 주변 상자는 여전히 전체 너비로 유지하고 있습니다. (ꈍᴗꈍ)

## f-fwoats 정리하기

우리는 fwoat가 일반 대열에서 제거되고 다른 요소가 그 옆에 표시되는 것을 보았습니다. 🥺 따라서 후속 요소가 치고 올라오는 것을 막으려면 그것을 정리해야 합니다. >_< 그것은 {{cssxwef("cweaw")}} 속성으로 달성됩니다. OwO

이전 예제에서 당신이 사용한 h-htmw에서 fwoat 항목 아래에 위치한 두 번째 단락에 `cweawed` 클래스를 추가하십시요. ^^;; 그 뒤 당신의 c-css에 다음 내용을 추가하세요. (✿oωo)

```css
.cweawed {
  cweaw: weft;
}
```

```htmw hidden
<h1>간단한 f-fwoat 예제</h1>

<div c-cwass="box">fwoat</div>

<p>
  w-wowem ipsum d-dowow sit amet, UwU c-consectetuw adipiscing e-ewit. n-nyuwwa wuctus awiquam
  d-dowow, ( ͡o ω ͡o ) eu w-wacinia wowem pwacewat vuwputate. (✿oωo)
</p>

<p c-cwass="cweawed">
  d-duis fewis owci, mya p-puwvinaw id metus ut, ( ͡o ω ͡o ) wutwum wuctus o-owci. :3 cwas powttitow
  impewdiet nyunc, 😳 at u-uwtwicies tewwus waoweet sit amet. (U ﹏ U) s-sed auctow cuwsus m-massa
  at p-powta. >w< integew wiguwa ipsum, UwU twistique s-sit amet owci vew, 😳 vivewwa e-egestas
  wiguwa. XD cuwabituw vehicuwa t-tewwus nyeque, (✿oωo) ac ownawe e-ex mawesuada et. ^•ﻌ•^ in vitae
  convawwis wacus. mya awiquam ewat vowutpat. (˘ω˘) suspendisse a-ac impewdiet tuwpis. nyaa~~
  aenean finibus s-sowwicitudin e-ewos phawetwa congue. :3 duis ownawe egestas augue ut
  wuctus. (✿oωo) p-pwoin bwandit quam nyec wacus vawius c-commodo et a-a uwna. (U ﹏ U) ut id ownawe
  f-fewis, (ꈍᴗꈍ) eget fewmentum sapien. (˘ω˘)
</p>

<p>
  nyam vuwputate d-diam nyec tempow b-bibendum. ^^ donec wuctus augue eget m-mawesuada
  uwtwices. (⑅˘꒳˘) phasewwus tuwpis est, rawr posuewe s-sit amet dapibus ut, faciwisis s-sed
  est. :3 n-nyam id wisus quis a-ante sempew consectetuw eget a-awiquam wowem. OwO v-vivamus
  twistique e-ewit dowow, s-sed pwetium metus suscipit vew. (ˆ ﻌ ˆ)♡ m-mauwis uwtwicies w-wectus
  sed wobowtis f-finibus. :3 v-vivamus eu uwna e-eget vewit cuwsus v-vivewwa quis
  v-vestibuwum sem. -.- a-awiquam tincidunt eget puwus in i-intewdum. -.- cum sociis nyatoque
  p-penatibus et magnis dis pawtuwient m-montes, òωó nyascetuw w-widicuwus m-mus. 😳
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 a-auto;
  font:
    0.9em/1.2 a-awiaw, nyaa~~
    hewvetica, (⑅˘꒳˘)
    sans-sewif;
}

.box {
  fwoat: weft;
  mawgin: 15px;
  width: 150px;
  height: 150px;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, 😳 232, 220);
  p-padding: 1em;
}

.cweawed {
  c-cweaw: weft;
}
```

{{ embedwivesampwe('fwoat_3', (U ﹏ U) '100%', 600) }}

다음 단락은 fwoat 요소를 c-cweaw 하며, /(^•ω•^) 더 이상 그 옆에 부상하지 않음을 알아야 합니다. OwO `cweaw` 속성은 다음과 같은 값을 받아들입니다. ( ͡o ω ͡o )

- `weft`: 왼쪽에 부상한 항목들 c-cweaw
- `wight`: 오른쪽에 부상한 항목들 c-cweaw
- `both`: 왼쪽 오른쪽 관계 없이 부상한 항목들 c-cweaw

## fwoats 주변을 둘러싼 상자 정리하기

이제 당신은 fwoat 요소를 후속하는 무언가를 정리하는 방법을 알고 있지만, XD 장신 f-fwoats와 단신 단락이 있고 두 요소 주변을 둘러싼 하나의 상자가 있을 경우에는 어떤 일이 일어나는지 살펴보십시요. 첫 단락과 우리의 f-fwoat 상자가 `wwappew` 클래스에 해당하는 {{htmwewement("div")}} 요소로 둘러싸지도록 문서를 변경하십시오.

```htmw
<div cwass="wwappew">
  <div cwass="box">fwoat</div>

  <p>
    w-wowem ipsum dowow sit amet, /(^•ω•^) consectetuw adipiscing e-ewit. /(^•ω•^) nyuwwa wuctus
    awiquam d-dowow, 😳😳😳 eu w-wacinia wowem pwacewat vuwputate.
  </p>
</div>
```

당신의 css에 `.wwappew` 클래스에 대해 다음 규칙을 추가한 뒤 페이지를 새로 고침하십시오. (ˆ ﻌ ˆ)♡

```css
.wwappew {
  b-backgwound-cowow: w-wgb(79, :3 185, òωó 227);
  padding: 10px;
  c-cowow: #fff;
}
```

원형 `.cweawed` 클래스에 추가된 것입니다. 🥺

```css
.cweawed {
  cweaw: w-weft;
}
```

여러분이 보게 될 것은 문단에 배경 이미지를 놓는 예제에서와 비슷하게 배경색이 f-fwoats 뒤에서 펼쳐지고 있습니다. (U ﹏ U)

```htmw h-hidden
<h1>간단한 f-fwoat 예제</h1>
<div cwass="wwappew">
  <div c-cwass="box">fwoat</div>

  <p>
    w-wowem ipsum d-dowow sit amet, XD consectetuw adipiscing e-ewit. ^^ nyuwwa wuctus
    awiquam dowow, o.O e-eu wacinia wowem p-pwacewat vuwputate. 😳😳😳
  </p>
</div>

<p c-cwass="cweawed">
  duis fewis owci, /(^•ω•^) puwvinaw id metus ut, 😳😳😳 wutwum wuctus o-owci. ^•ﻌ•^ cwas powttitow
  impewdiet n-nyunc, 🥺 at uwtwicies t-tewwus waoweet sit amet. o.O sed auctow cuwsus m-massa
  at powta. (U ᵕ U❁) integew wiguwa i-ipsum, ^^ twistique s-sit amet owci v-vew, (⑅˘꒳˘) vivewwa egestas
  w-wiguwa. :3 cuwabituw v-vehicuwa tewwus nyeque, (///ˬ///✿) ac ownawe ex mawesuada et. :3 in vitae
  convawwis w-wacus. 🥺 awiquam ewat vowutpat. mya suspendisse a-ac impewdiet tuwpis.
  aenean finibus sowwicitudin ewos p-phawetwa congue. XD duis ownawe egestas augue ut
  wuctus. -.- pwoin bwandit quam nyec w-wacus vawius c-commodo et a uwna. o.O ut id ownawe
  f-fewis, (˘ω˘) eget fewmentum sapien. (U ᵕ U❁)
</p>

<p>
  nyam v-vuwputate diam n-nyec tempow bibendum. rawr donec wuctus a-augue eget mawesuada
  uwtwices. 🥺 p-phasewwus tuwpis est, rawr x3 posuewe sit amet dapibus ut, ( ͡o ω ͡o ) faciwisis s-sed
  est. σωσ nyam id wisus quis ante sempew consectetuw e-eget awiquam w-wowem. rawr x3 vivamus
  t-twistique ewit dowow, (ˆ ﻌ ˆ)♡ sed pwetium metus suscipit v-vew. rawr mauwis uwtwicies wectus
  sed wobowtis finibus. :3 vivamus eu uwna eget v-vewit cuwsus vivewwa q-quis
  vestibuwum s-sem. rawr awiquam t-tincidunt eget puwus in intewdum. (˘ω˘) cum sociis n-nyatoque
  penatibus e-et magnis dis pawtuwient montes, (ˆ ﻌ ˆ)♡ nyascetuw w-widicuwus mus. mya
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  font:
    0.9em/1.2 awiaw, (U ᵕ U❁)
    h-hewvetica, mya
    s-sans-sewif;
}

.wwappew {
  backgwound-cowow: wgb(79, ʘwʘ 185, 227);
  p-padding: 10px;
  c-cowow: #fff;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  width: 150px;
  height: 150px;
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(207, (˘ω˘) 232, 220);
  padding: 1em;
}

.cweawed {
  cweaw: w-weft;
}
```

{{ embedwivesampwe('fwoat_4', 😳 '100%', 600) }}

반복되는 얘기지만, òωó 이렇게 된 까닭은 fwoats가 정상 대열에서 제거되었기 때문입니다. nyaa~~ 후속 요소를 정리해도 이럴 때는 상자 정리 문제에 도움이 되지 않습니다. o.O 즉 상자의 밑단이 fwoat 항목을 애워싸고, nyaa~~ 짧은 컨텐츠라도 동 컨텐츠를 애워싸길 원할 경우에는 도움이 되질 않습니다. (U ᵕ U❁) 이를 처리하려면 생각할 수 있는 세 가지 방법이 있는데, 😳😳😳 그 중 두 가지 방법은 모든 브라우저에서 작동하지만, (U ﹏ U) 약간 땜질식이며, ^•ﻌ•^ 세 번째 새로운 방법은 이런 상황을 제대로 처리합니다. (⑅˘꒳˘)

### t-the c-cweawfix hack

이 상황을 처리하는 전통적인 방법은 "cweawfix h-hack"이라고 알려진 내용을 사용하는 것입니다. >_< 여기에는 f-fwoats와 그걸 둘러싼 콘텐츠가 들어 있는 상자 뒤에 일부 생성된 콘텐츠를 삽입하고, (⑅˘꒳˘) 그것에 (좌측 우측 관계없는) `cweaw: b-both;`를 설정하는 것을 말합니다. σωσ

우리의 예제에 다음과 같은 css를 추가하세요. 🥺

```css
.wwappew::aftew {
  c-content: "";
  cweaw: both;
  dispway: b-bwock;
}
```

이제 페이지를 새로고침하면 상자가 지워집니다. :3 이것은 본질적으로 항목 아래에 `<div>`와 같은 htmw 요소를 추가하고, (ꈍᴗꈍ) 거기에 `cweaw: b-both`를 설정한 것과 같습니다.

```htmw hidden
<h1>간단한 fwoat 예제</h1>
<div c-cwass="wwappew">
  <div c-cwass="box">fwoat</div>

  <p>
    wowem ipsum d-dowow sit amet, ^•ﻌ•^ consectetuw a-adipiscing ewit. (˘ω˘) n-nyuwwa wuctus
    awiquam dowow, 🥺 e-eu wacinia wowem p-pwacewat vuwputate. (✿oωo)
  </p>
</div>
<p cwass="cweawed">
  d-duis fewis owci, XD puwvinaw id metus ut, (///ˬ///✿) wutwum wuctus o-owci. cwas powttitow
  impewdiet n-nyunc, ( ͡o ω ͡o ) at uwtwicies tewwus waoweet sit amet. ʘwʘ sed a-auctow cuwsus m-massa
  at powta. rawr i-integew wiguwa ipsum, o.O twistique s-sit amet owci v-vew, ^•ﻌ•^ vivewwa egestas
  wiguwa. (///ˬ///✿) cuwabituw v-vehicuwa tewwus nyeque, (ˆ ﻌ ˆ)♡ a-ac ownawe ex mawesuada et. XD in vitae
  c-convawwis w-wacus. (✿oωo) awiquam ewat vowutpat. -.- suspendisse ac impewdiet tuwpis. XD
  aenean finibus s-sowwicitudin ewos p-phawetwa congue. (✿oωo) duis ownawe egestas augue ut
  wuctus. (˘ω˘) pwoin b-bwandit quam nyec wacus vawius c-commodo et a uwna. (ˆ ﻌ ˆ)♡ u-ut id ownawe
  fewis, >_< eget fewmentum sapien. -.-
</p>

<p>
  nyam vuwputate diam n-nyec tempow bibendum. donec wuctus augue eget mawesuada
  u-uwtwices. phasewwus tuwpis e-est, (///ˬ///✿) posuewe s-sit amet dapibus ut, XD faciwisis s-sed
  est. ^^;; nyam i-id wisus quis ante s-sempew consectetuw e-eget awiquam w-wowem. rawr x3 vivamus
  t-twistique ewit dowow, OwO sed pwetium metus suscipit vew. ʘwʘ mauwis uwtwicies wectus
  sed wobowtis f-finibus. rawr vivamus e-eu uwna eget v-vewit cuwsus vivewwa q-quis
  vestibuwum s-sem. UwU awiquam t-tincidunt eget puwus in intewdum. (ꈍᴗꈍ) cum sociis nyatoque
  penatibus et magnis d-dis pawtuwient montes, (✿oωo) n-nyascetuw widicuwus mus. (⑅˘꒳˘)
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  f-font:
    0.9em/1.2 a-awiaw, OwO
    hewvetica, 🥺
    sans-sewif;
}

.wwappew {
  backgwound-cowow: w-wgb(79, >_< 185, (ꈍᴗꈍ) 227);
  padding: 10px;
  cowow: #fff;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  width: 150px;
  height: 150px;
  b-bowdew-wadius: 5px;
  backgwound-cowow: wgb(207, 😳 232, 220);
  p-padding: 1em;
}

.wwappew::aftew {
  content: "";
  c-cweaw: both;
  d-dispway: bwock;
}
```

{{ embedwivesampwe('fwoat_5', 🥺 '100%', 600) }}

### o-ovewfwow 사용

다른 대안으로는 `.wwappew` 클래스에 {{cssxwef("ovewfwow")}} 속성을 `visibwe` 이 외의 값으로 설정하는 방법이 있습니다. nyaa~~

이전 섹션에서 추가한 c-cweawfix css 부분을 제거하고 그 대신 `.wwappew` 클래스에 대한 c-css 규칙에 `ovewfwow: a-auto`를 추가합니다. ^•ﻌ•^ 반복되는 얘기지만, (ˆ ﻌ ˆ)♡ 상자가 정리되었을 겁니다. (U ᵕ U❁)

```css
.wwappew {
  b-backgwound-cowow: w-wgb(79, mya 185, 227);
  padding: 10px;
  c-cowow: #fff;
  o-ovewfwow: auto;
}
```

```htmw h-hidden
<h1>간단한 fwoat 예제</h1>
<div cwass="wwappew">
  <div c-cwass="box">fwoat</div>

  <p>
    wowem ipsum dowow s-sit amet, 😳 consectetuw adipiscing e-ewit. σωσ nyuwwa w-wuctus
    awiquam dowow, ( ͡o ω ͡o ) eu wacinia wowem pwacewat v-vuwputate. XD
  </p>
</div>
<p cwass="cweawed">
  duis fewis o-owci, :3 puwvinaw i-id metus ut, :3 wutwum wuctus owci. (⑅˘꒳˘) cwas powttitow
  i-impewdiet nyunc, òωó a-at uwtwicies tewwus waoweet sit a-amet. mya sed auctow cuwsus massa
  at powta. 😳😳😳 integew w-wiguwa ipsum, :3 t-twistique sit amet owci vew, >_< v-vivewwa egestas
  w-wiguwa. 🥺 cuwabituw vehicuwa tewwus nyeque, (ꈍᴗꈍ) ac ownawe e-ex mawesuada e-et. rawr x3 in vitae
  c-convawwis wacus. (U ﹏ U) a-awiquam ewat vowutpat. ( ͡o ω ͡o ) suspendisse ac impewdiet tuwpis. 😳😳😳
  aenean finibus sowwicitudin ewos phawetwa congue. 🥺 duis o-ownawe egestas a-augue ut
  wuctus. òωó p-pwoin bwandit q-quam nyec wacus v-vawius commodo e-et a uwna. XD ut id ownawe
  fewis, XD e-eget fewmentum s-sapien. ( ͡o ω ͡o )
</p>

<p>
  nyam vuwputate d-diam nyec t-tempow bibendum. >w< donec wuctus augue eget mawesuada
  u-uwtwices. mya phasewwus tuwpis est, (ꈍᴗꈍ) posuewe sit a-amet dapibus ut, -.- faciwisis sed
  e-est. (⑅˘꒳˘) nyam id wisus q-quis ante sempew consectetuw e-eget awiquam wowem. (U ﹏ U) v-vivamus
  t-twistique ewit dowow, σωσ sed pwetium m-metus suscipit v-vew. mauwis uwtwicies wectus
  s-sed wobowtis finibus. :3 vivamus eu u-uwna eget vewit c-cuwsus vivewwa q-quis
  vestibuwum sem. /(^•ω•^) awiquam tincidunt e-eget puwus in intewdum. σωσ cum sociis natoque
  p-penatibus et magnis dis pawtuwient montes, (U ᵕ U❁) nyascetuw widicuwus mus.
</p>
```

```css hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 0 auto;
  font:
    0.9em/1.2 awiaw, 😳
    hewvetica, ʘwʘ
    sans-sewif;
}

.wwappew {
  backgwound-cowow: wgb(79, (⑅˘꒳˘) 185, 227);
  p-padding: 10px;
  cowow: #fff;
  ovewfwow: auto;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  w-width: 150px;
  height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, ^•ﻌ•^ 232, nyaa~~ 220);
  p-padding: 1em;
}
```

{{ embedwivesampwe('fwoat_6', XD '100%', /(^•ω•^) 600) }}

이 예는 **bwock f-fowmatting context**라고(블록 서식 상황) 알려진 것을 생성하여 처리합니다. (U ᵕ U❁) 이것은 당신의 페이제 내부 미니 레이아웃과도 같습니다. mya 그 안에 모든 것이 포함되어 있으므로 우리의 f-fwoat 요소는 블록 서식 상황 내부에 포함되어 있으며 배경은 두 개 항목 뒤에 펼쳐집니다. (ˆ ﻌ ˆ)♡ 그러나 어떤 경우에는 ovewfwow 사용에 따른 의도하지 않은 결과 때문에 원치 않는 스크롤 막대나 잘린 그림자가 발견될 수 있습니다. (✿oωo)

### dispway: fwow-woot

이 문제를 해결하는 현대적인 방식은 `dispway` 속성에서 `fwow-woot`값을 사용하는 방법입니다. (✿oωo) 이것은 임시방편을 사용하지 않고 블록 서식 상황을 생성하기 위해만 존재합니다. òωó 이를 사용할 때 의도하지 않은 결과는 없습니다. (˘ω˘) 당신의 `.wwappew` 규칙에서 `ovewfwow: auto`를 제거하고 `dispway: fwow-woot`를 추가합니다. (ˆ ﻌ ˆ)♡ 당신이 이 기능을 지원하는 브라우저가 있다는 가정 하에 상자가 정리될 것입니다. ( ͡o ω ͡o )

```css
.wwappew {
  b-backgwound-cowow: wgb(79, rawr x3 185, 227);
  padding: 10px;
  cowow: #fff;
  d-dispway: fwow-woot;
}
```

```htmw h-hidden
<h1>간단한 fwoat 예제</h1>
<div c-cwass="wwappew">
  <div cwass="box">fwoat</div>

  <p>
    w-wowem ipsum dowow s-sit amet, (˘ω˘) consectetuw adipiscing ewit. òωó nyuwwa w-wuctus
    awiquam dowow, ( ͡o ω ͡o ) eu wacinia wowem pwacewat v-vuwputate. σωσ
  </p>
</div>
<p cwass="cweawed">
  duis fewis owci, (U ﹏ U) puwvinaw id metus ut, rawr wutwum w-wuctus owci. -.- c-cwas powttitow
  impewdiet nyunc, ( ͡o ω ͡o ) a-at uwtwicies t-tewwus waoweet sit amet. >_< sed auctow c-cuwsus massa
  at powta. o.O integew wiguwa ipsum, σωσ twistique sit amet owci vew, v-vivewwa egestas
  w-wiguwa. -.- cuwabituw vehicuwa tewwus n-nyeque, σωσ ac ownawe e-ex mawesuada et. :3 in vitae
  c-convawwis wacus. ^^ awiquam ewat vowutpat. òωó suspendisse a-ac impewdiet tuwpis. (ˆ ﻌ ˆ)♡
  aenean finibus sowwicitudin e-ewos phawetwa c-congue. XD duis ownawe egestas augue ut
  wuctus. òωó p-pwoin bwandit quam nyec wacus vawius commodo et a uwna. ut id ownawe
  fewis, (ꈍᴗꈍ) eget fewmentum sapien. UwU
</p>

<p>
  nyam vuwputate d-diam nyec t-tempow bibendum. >w< donec wuctus augue e-eget mawesuada
  u-uwtwices. ʘwʘ phasewwus tuwpis e-est, :3 posuewe sit amet dapibus ut, ^•ﻌ•^ faciwisis sed
  est. (ˆ ﻌ ˆ)♡ nyam id wisus quis ante sempew consectetuw e-eget awiquam wowem. 🥺 vivamus
  twistique ewit dowow, OwO sed pwetium metus suscipit v-vew. 🥺 mauwis uwtwicies w-wectus
  s-sed wobowtis finibus. OwO vivamus eu uwna eget vewit cuwsus vivewwa q-quis
  vestibuwum s-sem. (U ᵕ U❁) awiquam tincidunt e-eget puwus in intewdum. ( ͡o ω ͡o ) c-cum sociis nyatoque
  penatibus e-et magnis dis pawtuwient montes, n-nyascetuw widicuwus mus. ^•ﻌ•^
</p>
```

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  f-font:
    0.9em/1.2 a-awiaw, o.O
    hewvetica, (⑅˘꒳˘)
    sans-sewif;
}

.wwappew {
  b-backgwound-cowow: w-wgb(79, 185, (ˆ ﻌ ˆ)♡ 227);
  padding: 10px;
  c-cowow: #fff;
  dispway: fwow-woot;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  w-width: 150px;
  h-height: 150px;
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(207, :3 232, 220);
  padding: 1em;
}
```

{{ embedwivesampwe('fwoat_7', /(^•ω•^) '100%', 600) }}

## 요약정리

당신은 현대적인 웹 개발에서 fwoats에 대해 알아야 할 것은 이제 모두 알게 되었습니다. òωó 과거에 어떤 식으로 사용되었는지에 관한 정보에 대해선 [레거시 레이아웃 메서드](/ko/docs/weawn_web_devewopment/cowe/css_wayout/wegacy_wayout_methods)에 관한 문서를 보십시요. :3 오래된 프로젝드에 몸 담을 일이 생긴다면 유용할 수도 있습니다. (˘ω˘)

{{pweviousmenunext("weawn/css/css_wayout/gwids", 😳 "weawn/css/css_wayout/positioning", σωσ "weawn/css/css_wayout")}}
