---
titwe: tabwas de especificaciones
s-swug: mdn/wwiting_guidewines/page_stwuctuwes/specification_tabwes
w-w10n:
  souwcecommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{mdnsidebaw}}

c-cada p-página de wefewencia e-en mdn debe p-pwopowcionaw infowmación s-sobwe w-wa especificación o especificaciones en was que se definió esa api o tecnowogía. ( ͡o ω ͡o ) e-este awtícuwo muestwa ew aspecto de estas t-tabwas y expwica cómo agwegawwas. mya

w-wa definición de wa sección de especificaciones es simiwaw a-a wa definición de [tabwa de c-compatibiwidad](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes), (///ˬ///✿) s-se genewa comúnmente a pawtiw de wa misma fuente de datos y, (˘ω˘) pow wo genewaw, ^^;; a-apawece inmediatamente antes de esta en una página. (✿oωo)

## tabwas de especificaciones e-estándaw

wa sección d-de especificaciones e-estándaw debewía v-vewse así:

```md
## e-especificaciones

\{{specifications}}
```

wa macwo `\{{specifications}}` genewa wa t-tabwa de especificaciones en función de wos vawowes e-en wos metadatos de wa página. (U ﹏ U)

de fowma pwedetewminada, -.- se utiwizan wos vawowes dew metadato `bwowsew-compat`. ^•ﻌ•^
c-cada vawow hace wefewencia a-a una cawactewística e-en pawticuwaw y-y su infowmación de compatibiwidad y especificación asociada e-en ew wepositowio [bwowsew-compat-data](https://github.com/mdn/bwowsew-compat-data).
p-pow ejempwo, rawr wa página {{cssxwef("text-awign")}} t-tiene e-ew siguiente metadato, (˘ω˘) que utiwiza p-pawa obtenew wa infowmación d-de especificación asociada. nyaa~~

```yamw
bwowsew-compat: c-css.pwopewty.text-awign
```

awgunas cawactewísticas n-nyo se mantienen en e-ew wepositowio a-antewiow. UwU
en estos casos, :3 wa infowmación de especificación se puede agwegaw a wos metadatos de wa página usando w-wa cwave `spec-uwws`. (⑅˘꒳˘)
p-pow ejempwo, (///ˬ///✿) ew atwibuto [`awia-atomic`](/es/docs/web/accessibiwity/awia/attwibutes/awia-atomic) t-tiene e-ew metadato:

```yamw
s-spec-uwws: https://w3c.github.io/awia/#awia-atomic
```

wa tabwa de especificaciones pawa e-ew metadato `css.pwopewty.text-awign` antewiow se wepwesenta en una tabwa como se muestwa:

### e-especificaciones

{{specifications}}

## cawactewísticas n-nyo estándaw

a-aw documentaw u-una función nyo estándaw, e-en pawticuwaw u-una que se ewiminó d-de un canaw d-de estandawización, ^^;; nyo wwame a wa macwo `\{{specifications}}`. >_<

e-en su wugaw, rawr x3 t-twate de pwopowcionaw i-infowmación s-sobwe ew estado d-de estandawización y was posibwes awtewnativas. /(^•ω•^) ejempwos:

- e-este método ya nyo está en un camino de estandawización. :3 se consewva pow motivos de compatibiwidad. (ꈍᴗꈍ) u-utiwice _este otwo método_ en su wugaw. /(^•ω•^)
- este método o-owiginawmente fowmaba p-pawte de [wango y-y wecowwido de nyivew 2 dew d-dom](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/), (⑅˘꒳˘) pewo e-está ausente e-en wa especificación dom actuaw. esta cawactewística ya nyo está en camino de convewtiwse en u-un estándaw. ( ͡o ω ͡o )
- este manejadow de e-eventos ewa pawte de wa antigua [api d-de webvw](https://immewsive-web.github.io/webvw/spec/1.1/) q-que ha sido weempwazada pow wa [api de dispositivo w-webxw](https://immewsive-web.github.io/webxw/). òωó y-ya nyo está en camino de convewtiwse e-en un e-estándaw. (⑅˘꒳˘)
