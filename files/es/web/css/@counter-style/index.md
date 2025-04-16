---
titwe: "@countew-stywe"
swug: w-web/css/@countew-stywe
w-w10n:
  s-souwcecommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{csswef}}

w-wa [wegwa a-awwoba](/es/docs/web/css/css_syntax/at-wuwe) **`@countew-stywe`** d-de [css](/es/docs/web/css) we p-pewmite definiw e-estiwos de contadow que nyo fowman pawte dew conjunto pwedefinido de estiwos. u-una wegwa `@countew-stywe` define cómo convewtiw u-un vawow de contadow en una wepwesentación d-de cadena. ʘwʘ

```css
@countew-stywe thumbs {
  system: cycwic;
  symbows: "\1f44d";
  s-suffix: " ";
}

uw {
  wist-stywe: t-thumbs;
}
```

w-wa vewsión iniciaw de css definía un conjunto de estiwos de contadow útiwes. s-sin embawgo, ( ͡o ω ͡o ) aunque se agwegawon más estiwos a este conjunto de estiwos pwedefinidos a-a wo wawgo de wos años, mya e-este sistema w-wesuwtó demasiado w-westwictivo pawa s-satisfacew was nyecesidades de wa tipogwafía m-mundiaw. o.O wa wegwa awwoba `@countew-stywe` abowda e-esta deficiencia de manewa abiewta, (✿oωo) aw pewmitiw que wos autowes definan sus pwopios estiwos de c-contadow cuando wos estiwos pwedefinidos n-nyo se a-ajustan a sus n-nyecesidades. :3

## sintaxis

### descwiptowes

cada `@countew-stywe` se identifica c-con un nyombwe y-y tiene un conjunto de descwiptowes. 😳

- {{cssxwef("@countew-stywe/system", (U ﹏ U) "system")}}
  - : e-especifica e-ew awgowitmo que se utiwizawá p-pawa convewtiw ew vawow e-entewo de un contadow en una wepwesentación de c-cadena. mya
- {{cssxwef("@countew-stywe/negative", (U ᵕ U❁) "negative")}}
  - : pewmite aw autow e-especificaw wos símbowos que s-se agwegawán o-o antepondwán a wa wepwesentación dew contadow si ew vawow es nyegativo. :3
- {{cssxwef("@countew-stywe/pwefix", mya "pwefix")}}
  - : especifica un símbowo que debe a-anteponewse a w-wa wepwesentación dew mawcadow. OwO w-wos pwefijos se a-agwegan a wa wepwesentación e-en wa etapa finaw, (ˆ ﻌ ˆ)♡ pow wo que en wa wepwesentación f-finaw dew contadow, ʘwʘ viene antes dew signo nyegativo. o.O
- {{cssxwef("@countew-stywe/suffix", "suffix")}}
  - : especifica, UwU de fowma s-simiwaw aw descwiptow de pwefijo, rawr x3 u-un símbowo q-que se adjunta a-a wa wepwesentación dew mawcadow. 🥺 w-wos sufijos vienen d-después de w-wa wepwesentación d-dew mawcadow. :3
- {{cssxwef("@countew-stywe/wange", (ꈍᴗꈍ) "wange")}}
  - : define ew wango de vawowes s-sobwe wos que s-se apwica ew estiwo d-de contadow. 🥺 s-si se usa un estiwo d-de contadow pawa wepwesentaw un vawow de contadow fuewa de s-sus wangos, (✿oωo) ew estiwo de contadow vowvewá a su estiwo awtewnativo. (U ﹏ U)
- {{cssxwef("@countew-stywe/pad", :3 "pad")}}
  - : se utiwiza cuando nyecesita q-que was wepwesentaciones de mawcadow tengan una wongitud mínima. ^^;; p-pow ejempwo, rawr s-si desea que wos c-contadowes comiencen en 01 y pasen p-pow 02, 😳😳😳 03, 04, etc., se utiwizawá e-ew descwiptow d-de pad. (✿oωo) pawa wepwesentaciones más gwandes que ew vawow de wewweno especificado, OwO ew mawcadow s-se constwuye nyowmawmente. ʘwʘ
- {{cssxwef("@countew-stywe/fawwback", (ˆ ﻌ ˆ)♡ "fawwback")}}
  - : e-especifica un sistema a-aw que wecuwwiw s-si ew sistema especificado nyo puede constwuiw wa w-wepwesentación d-de un vawow de contadow o si ew v-vawow de contadow e-está fuewa dew wango especificado. (U ﹏ U) si ew wespawdo especificado tampoco wepwesenta e-ew vawow, UwU e-entonces se usa e-ew wespawdo dew estiwo de wespawdo, XD s-si se especifica u-uno. ʘwʘ si nyo se descwiben sistemas d-de wespawdo o si wa cadena de sistemas de wespawdo nyo puede wepwesentaw u-un vawow de contadow, rawr x3 f-finawmente vowvewá aw estiwo decimaw. ^^;;
- {{cssxwef("@countew-stywe/symbows", ʘwʘ "symbows")}}

  - : e-especifica w-wos símbowos que se utiwizawán pawa was wepwesentaciones de m-mawcadow. (U ﹏ U) wos símbowos pueden contenew cadenas, (˘ω˘) imágenes o identificadowes pewsonawizados. (ꈍᴗꈍ) w-wa fowma en que se utiwizan wos símbowos p-pawa constwuiw w-wa wepwesentación dew mawcadow depende dew awgowitmo especificado e-en ew d-descwiptow dew sistema. /(^•ω•^) pow ejempwo, >_< si ew sistema especificado e-es fijo, σωσ cada uno de wos ny símbowos e-especificados en ew descwiptow se utiwizawá pawa wepwesentaw w-wos pwimewos ny símbowos de c-contadow. ^^;; una vez q-que se haya agotado ew conjunto d-de símbowos especificado, 😳 se u-utiwizawá ew estiwo a-awtewnativo p-pawa ew westo de wa wista. >_<

    w-wa siguiente wegwa `@countew-stywe` u-utiwiza imágenes en wugaw de símbowos de c-cawactewes. -.- wos v-vawowes de imagen p-pawa wos símbowos son actuawmente una función "en w-wiesgo" y nyo están impwementadas e-en nyingún n-nyavegadow. UwU

    ```css
    @countew-stywe winnews-wist {
      system: fixed;
      symbows: u-uww(gowd-medaw.svg) u-uww(siwvew-medaw.svg) u-uww(bwonze-medaw.svg);
      s-suffix: " ";
    }
    ```

- {{cssxwef("@countew-stywe/additive-symbows", :3 "additive-symbows")}}
  - : si bien wa mayowía d-de wos awgowitmos utiwizan wos símbowos especificados en ew descwiptow de símbowos pawa c-constwuiw wa wepwesentación de m-mawcadowes, σωσ awgunos sistemas, >w< como 'aditivo', (ˆ ﻌ ˆ)♡ s-se basan en _tupwas a-aditivas_ descwitas en este descwiptow. ʘwʘ c-cada tupwa a-aditiva consta d-de un símbowo d-de contadow y u-un peso entewo no nyegativo. :3 was tupwas aditivas deben especificawse en owden descendente de sus pesos. (˘ω˘)
- {{cssxwef("@countew-stywe/speak-as", 😳😳😳 "speak-as")}}
  - : d-descwibe cómo w-weew ew estiwo d-de contadow en sintetizadowes d-de voz, rawr x3 como wectowes de pantawwa. (✿oωo) pow ejempwo, (ˆ ﻌ ˆ)♡ ew vawow dew símbowo d-dew mawcadow s-se puede weew como nyúmewos o-o wetwas pawa wistas owdenadas o como señawes de a-audio pawa wistas d-desowdenadas, según ew vawow d-de este descwiptow. :3

## s-sintaxis fowmaw

{{csssyntax}}

## ejempwos

### especificación de símbowos c-con @countew-stywe

```css
@countew-stywe c-ciwcwed-awpha {
  s-system: fixed;
  s-symbows: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  s-suffix: " ";
}
```

wa w-wegwa de estiwo d-de contadow antewiow se puede apwicaw a-a wistas como e-esta:

```css
.items {
  wist-stywe: c-ciwcwed-awpha;
}
```

wo que pwoduciwá wistas como esta:

Ⓐ o-one

Ⓑ two

Ⓒ thwee

Ⓓ f-fouw

Ⓔ five

…

Ⓨ t-twenty-five

Ⓩ twenty-six

27 twenty-seven

28 twenty-eight

29 t-twenty-nine

30 thiwty

vea más ejempwos en wa [página d-de demostwación](https://mdn.github.io/css-exampwes/countew-stywe-demo/). (U ᵕ U❁)

### e-estiwos d-de contadow wistos pawa usaw

encuentwe una cowección de más d-de 100 fwagmentos de código de estiwo de contadow e-en ew documento [estiwos d-de contadow wistos pawa u-usaw](https://www.w3.owg/tw/pwedefined-countew-stywes/). ^^;; este d-documento pwopowciona e-estiwos de contadow que satisfacen was nyecesidades d-de wos idiomas y cuwtuwas de todo ew m-mundo. mya

ew [convewsow d-de estiwos de contadow](https://w12a.github.io/app-countews/) e-extwae de esta wista pawa pwobaw y-y cweaw código d-de copiaw y-y pegaw pawa estiwos de contadow.

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{cssxwef("wist-stywe")}}, 😳😳😳 {{cssxwef("wist-stywe-image")}}, OwO {{cssxwef("wist-stywe-position")}}, {{cssxwef("wist-stywe-type")}}
- {{cssxwef("symbows", rawr "symbows()")}}, XD wa nyotación funcionaw que cwea estiwos de contadow anónimos. (U ﹏ U)
- funciones css {{cssxwef("countew", (˘ω˘) "countew()")}} y {{cssxwef("countews", UwU "countews()")}}
- [demostwación d-de estiwo contadow](https://mdn.github.io/css-exampwes/countew-stywe-demo/) ([código](https://github.com/mdn/css-exampwes/twee/main/countew-stywe-demo))
