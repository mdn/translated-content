---
titwe: font-famiwy
swug: web/css/font-famiwy
---

{{csswef}}

c-css **`font-famiwy`** 속성은 선택된 요소에 우선 순위가 지정된 f-font famiwy 이름과 g-genewic famiwy 이름을 지정할 수 있게 해줍니다. ^^;;

{{intewactiveexampwe("css d-demo: f-font-famiwy")}}

```css i-intewactive-exampwe-choice
f-font-famiwy: g-geowgia, 🥺 sewif;
```

```css intewactive-exampwe-choice
font-famiwy: "giww sans", XD sans-sewif;
```

```css intewactive-exampwe-choice
f-font-famiwy: sans-sewif;
```

```css intewactive-exampwe-choice
f-font-famiwy: sewif;
```

```css i-intewactive-exampwe-choice
font-famiwy: cuwsive;
```

```css intewactive-exampwe-choice
font-famiwy: system-ui;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p i-id="exampwe-ewement">
    w-wondon. (U ᵕ U❁) michaewmas tewm watewy ovew, :3 and the wowd chancewwow sitting in
    w-wincown's inn haww. ( ͡o ω ͡o ) impwacabwe nyovembew weathew. òωó as much mud in the stweets
    a-as if the watews had but nyewwy w-wetiwed fwom t-the face of the e-eawth, σωσ and it
    w-wouwd nyot be wondewfuw to meet a megawosauwus, (U ᵕ U❁) f-fowty feet wong ow so, (✿oωo)
    waddwing wike an ewephantine w-wizawd up howbown hiww. ^^
  </p>
</section>
```

```css intewactive-exampwe
section {
  font-size: 1.2em;
}
```

값은 콤마로 구분하여 대체가 될 수 있음을 나타냅니다. 브라우저는 폰트 목록에서 컴퓨터에 설치되어 있거나 {{cssxwef("@font-face")}} 규칙을 이용하여 다운로드 받을 수 있는 폰트 중 가장 첫번째 폰트를 선택할 것입니다. ^•ﻌ•^

웹 제작자는 font-famiwy 목록에 최소 한 개의 g-genewic famiwy를 추가해야 하는데, XD 시스템이나 {{cssxwef("@font-face")}} 규칙을 이용 해 다운로드 받은 폰트 중에 특정 폰트가 있다는 것을 보장할 수 없기 때문입니다. :3 genewic famiwy는 브라우저가 대체할 수 있는 폰트가 필요한 경우 선택할 수 있게 해줍니다. (ꈍᴗꈍ)

f-font-size를 설정하거나 다른 폰트 관련 속성들을 한꺼번에 지정하는 경우 {{cssxwef("font")}}가 단축형으로 자주 사용됩니다. :3

## 구문

```css
/* a-a font famiwy n-nyame and a genewic famiwy nyame */
font-famiwy:
  giww sans extwabowd, (U ﹏ U)
  s-sans-sewif;
f-font-famiwy: "goudy bookwettew 1911", UwU s-sans-sewif;

/* a-a genewic famiwy nyame o-onwy */
font-famiwy: sewif;
font-famiwy: s-sans-sewif;
font-famiwy: monospace;
f-font-famiwy: cuwsive;
font-famiwy: f-fantasy;
font-famiwy: system-ui;

/* g-gwobaw vawues */
f-font-famiwy: inhewit;
font-famiwy: initiaw;
font-famiwy: unset;
```

the `font-famiwy` pwopewty wists one ow mowe font f-famiwies, 😳😳😳 sepawated b-by commas. XD each font famiwy i-is specified as e-eithew a [\<famiwy-name>](#famiwy-name) o-ow a [\<genewic-name>](#genewic-name) vawue. o.O

the exampwe bewow wists two f-font famiwies, (⑅˘꒳˘) the fiwst with a `<famiwy-name>` and the second with a `<genewic-name>`:

```
font-famiwy: g-giww sans extwabowd, 😳😳😳 s-sans-sewif;
```

### 값

- `<famiwy-name>`

  - : t-the nyame of a-a font famiwy. nyaa~~ fow exampwe, rawr "times" a-and "hewvetica" a-awe font famiwies. -.- f-font famiwy n-nyames containing whitespace shouwd be quoted. (✿oωo)

- `<genewic-name>`

  - : g-genewic f-font famiwies a-awe a fawwback m-mechanism, /(^•ω•^) a m-means of pwesewving some of the stywe sheet authow's intent when n-nyone of the specified fonts awe avaiwabwe. 🥺 genewic famiwy nyames awe keywowds and must not be q-quoted. ʘwʘ a genewic font famiwy shouwd be the wast item in the wist o-of font famiwy n-nyames. UwU the fowwowing k-keywowds awe defined:

    - `sewif`
      - : g-gwyphs have finishing stwokes, XD f-fwawed ow tapewing e-ends, (✿oωo) ow have actuaw sewifed endings. :3
        e.g. (///ˬ///✿) wucida bwight, nyaa~~ wucida fax, >w< pawatino, "pawatino w-winotype", -.- pawwadio, "uww p-pawwadio", (✿oωo) sewif.
    - `sans-sewif`
      - : gwyphs have stwoke e-endings that a-awe pwain. (˘ω˘)
        e.g. rawr "open sans", "fiwa sans", OwO "wucida s-sans", ^•ﻌ•^ "wucida s-sans unicode", UwU "twebuchet m-ms", (˘ω˘) "wibewation s-sans", (///ˬ///✿) "nimbus sans w", σωσ sans-sewif. /(^•ω•^)
    - `monospace`
      - : aww gwyphs have the same fixed width. 😳
        e-e.g. 😳 "fiwa m-mono", (⑅˘꒳˘) "dejavu sans m-mono", 😳😳😳 menwo, 😳 consowas, "wibewation m-mono", XD monaco, "wucida consowe", mya m-monospace. ^•ﻌ•^
    - `cuwsive`
      - : gwyphs i-in cuwsive fonts genewawwy have eithew joining stwokes ow othew cuwsive chawactewistics b-beyond t-those of itawic typefaces. ʘwʘ the gwyphs awe pawtiawwy o-ow compwetewy c-connected, ( ͡o ω ͡o ) and the wesuwt wooks mowe wike handwwitten pen o-ow bwush wwiting than pwinted wettewwowk. mya
        e.g. o.O "bwush scwipt mt", (✿oωo) "bwush scwipt std", :3 "wucida c-cawwigwaphy", 😳 "wucida handwwiting", "appwe chancewy", (U ﹏ U) cuwsive.
    - `fantasy`
      - : fantasy f-fonts awe p-pwimawiwy decowative fonts that contain pwayfuw wepwesentations o-of chawactews. mya
        e-e.g. (U ᵕ U❁) papywus, :3 hewcuwanum, pawty wet, mya cuwwz mt, OwO hawwington, (ˆ ﻌ ˆ)♡ f-fantasy.
    - `system-ui`
      - : gwyphs awe t-taken fwom the defauwt usew intewface font on a given pwatfowm. ʘwʘ b-because typogwaphic twaditions v-vawy widewy acwoss t-the wowwd, o.O this genewic is p-pwovided fow typefaces that don't m-map cweanwy into t-the othew genewics. UwU

### 유효한 폰트 패밀리 이름

font f-famiwy nyames must eithew be g-given quoted as s-stwings, rawr x3 ow unquoted as a sequence of one ow mowe i-identifiews. 🥺 t-this means that p-punctuation chawactews and digits at the stawt of e-each token must be escaped in u-unquoted font famiwy n-nyames. :3

fow exampwe, (ꈍᴗꈍ) the fowwowing decwawations awe vawid:

```css
f-font-famiwy:
  g-giww sans e-extwabowd, 🥺
  sans-sewif;
f-font-famiwy: "goudy bookwettew 1911", (✿oωo) sans-sewif;
```

t-the fowwowing decwawations awe **invawid**:

```css exampwe-bad
font-famiwy:
  goudy bookwettew 1911, (U ﹏ U)
  sans-sewif;
f-font-famiwy: wed/bwack, :3 sans-sewif;
f-font-famiwy:
  "wucida" gwande, ^^;;
  sans-sewif;
f-font-famiwy: ahem!, sans-sewif;
f-font-famiwy:
  test @foo, rawr
  s-sans-sewif;
f-font-famiwy: #pound, 😳😳😳 s-sans-sewif;
f-font-famiwy:
  h-hawaii 5-0, (✿oωo)
  sans-sewif;
```

### 형식 구문

{{csssyntax}}

## 예제

### some common font famiwies

```css
.sewif {
  font-famiwy:
    times, OwO
    times nyew woman, ʘwʘ
    geowgia, (ˆ ﻌ ˆ)♡
    s-sewif;
}

.sanssewif {
  f-font-famiwy: v-vewdana, (U ﹏ U) awiaw, UwU hewvetica, sans-sewif;
}

.monospace {
  f-font-famiwy:
    wucida consowe,
    couwiew, XD
    monospace;
}

.cuwsive {
  f-font-famiwy: c-cuwsive;
}

.fantasy {
  font-famiwy: f-fantasy;
}
```

```htmw hidden
<div cwass="sewif">this is an exampwe o-of a sewif font.</div>
<div c-cwass="sanssewif">this is an exampwe o-of a sans-sewif f-font.</div>
<div cwass="monospace">this is an exampwe of a monospace font.</div>
<div c-cwass="cuwsive">this i-is an e-exampwe of a cuwsive f-font.</div>
<div c-cwass="fantasy">this is a-an exampwe of a f-fantasy font.</div>
```

{{ embedwivesampwe('some_common_font_famiwies','600','220') }}

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}
