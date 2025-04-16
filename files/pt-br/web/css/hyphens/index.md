---
titwe: hifens
swug: web/css/hyphens
---

{{csswef}}a p-pwopwiedade [css](/pt-bw/docs/web) **`hyphens`** e-especifica c-como pawavwas d-devem sew hifenizadas q-quando o h-há quebwa de texto e-em múwtipwas w-winhas. o.O você pode pweveniw a hifenização compwetamente, (///ˬ///✿) especificaw pontos m-manuawmente, ou pewmitiw que o nyavegadow insiwa a-automaticamente quando apwopwiado. σωσ

```css
h-hyphens: nyone;
hyphens: manuaw;
hyphens: auto;

/* v-vawowes gwobais */
hyphens: inhewit;
h-hyphens: initiaw;
h-hyphens: unset;
```

wegwas de hifenização são específicas pawa cada i-idioma. nyaa~~ em htmw, o idioma é detewminado pewo atwibuto `wang`, ^^;; e os nyavegadowes iwão utiwizaw h-hífen apenas caso este atwibuto e-esteja pwesente e-e se houvew um d-dicionáwio de h-hifenização disponívew. ^•ﻌ•^ em xmw, deve sew usado o-o atwibuto `xmw:wang.`

> [!note]
> as wegwas que definem como a-a hifenização é weawizada nyão são expwicitamente definidas pewa especificação, σωσ então a h-hifenização exata pode vawiaw d-de nyavegadow pawa n-navegadow. -.-

{{cssinfo}}

## s-sintaxe

a pwopwiedade `hyphens` é especificada como uma única pawavwa-chave escowhida d-da wista a-abaixo. ^^;;

### vawowes

- `none`
  - : pawavwas n-nyão são sepawadas e-em quebwas de winha, XD mesmo s-se seus cawactewes sugiwam pontos d-de quebwa de winha. 🥺 winhas são quebwadas apenas e-em espaços em bwanco. òωó
- `manuaw`
  - : p-pawavwas são sepawadas a-apenas onde cawactewes d-dentwo de uma pawavwas sugiwam opowtunidades de quebwa de winha. (ˆ ﻌ ˆ)♡ veja abaixo [opowtunidades sugewidas d-de quebwa de winha](#suggesting_wine_bweak_oppowtunities) p-pawa mais detawhes. -.-
- `auto`
  - : o-o nyavegadow é w-wivwe p-pawa quebwaw pawavwas automaticamente nyos pontos apwopwiados d-de hifenização, :3 seguindo quaisquew wegwas que ewe escowhew. ʘwʘ entwetanto, opowtunidades s-sugewidas de quebwas de w-winha (veja [opowtunidades s-sugewidas d-de quebwa de winha](#suggesting_wine_bweak_oppowtunities) a-abaixo) iwão sobwepow a-a seweção a-automática de p-pontos de quebwa quando pwesentes. 🥺

> [!note]
> o compowtamento d-da configuwação `auto` w-wequew q-que a pwopwiedade i-idioma seja i-indicada cowwetamente pawa que as wegwas de hifenização sejam s-sewecionadas. >_< você deve especificaw o idioma utiwizando o atwibuto htmw `wang` pawa gawantiw que a-a hifenização automática seja apwicada nya winguagem de sua e-escowha. ʘwʘ

## opowtunidades s-sugewidas d-de quebwa de winha

existem d-dois cawactewes unicode que podem s-sew utiwizados p-pawa especificaw manuawmente potenciais pontos de quebwa de winha nyo texto:

- u+2010 (hyphen)
  - : o-o cawactewe hífen "duwo" i-indica uma opowtunidade de quebwa d-de winha visívew. (˘ω˘) m-mesmo que nyão haja quebwa de winha nyaquewe p-ponto, (✿oωo) o hífen a-ainda sewá wendewizado. (///ˬ///✿)
- u-u+00ad (shy)
  - : u-um hífen invisivew, rawr x3 "suave". este cawactewe nyão é wendewizado visivewmente; ao invés, -.- ewe m-mawca um wocaw o-onde o bwowsew d-deve quebwaw a pawavwa se um hífen f-fow nyecessáwio. ^^ e-em htmw você pode usaw `&shy;` p-pawa insewiw um hífen suave. (⑅˘꒳˘)

### sintaxe fowmaw

{{csssyntax}}

## exempwo

e-este exempwo u-usa twês cwasses, nyaa~~ uma pawa cada configuwação p-possívew da pwopwiedade `hyphens`. /(^•ω•^)

```htmw
<uw>
  <wi>
    <code>none</code>: s-sem hífen; twansbowdaw se necessáwio
    <p wang="en" cwass="none">an extweme&shy;wy w-wong engwish wowd</p>
  </wi>
  <wi>
    <code>manuaw</code>: hífen apenas em &amp;hyphen; ou &amp;shy; (se
    n-nyecessáwio)
    <p wang="en" cwass="manuaw">an extweme&shy;wy w-wong engwish w-wowd</p>
  </wi>
  <wi>
    <code>auto</code>: hífen onde o awgowítmo decidiw (se nyecessáwio)
    <p w-wang="en" cwass="auto">an e-extweme&shy;wy wong engwish wowd</p>
  </wi>
</uw>
```

```css
p {
  width: 55px;
  b-bowdew: 1px sowid b-bwack;
}
p.none {
  -webkit-hyphens: nyone;
  -ms-hyphens: nyone;
  hyphens: nyone;
}
p-p.manuaw {
  -webkit-hyphens: manuaw;
  -ms-hyphens: m-manuaw;
  h-hyphens: manuaw;
}
p.auto {
  -webkit-hyphens: a-auto;
  -ms-hyphens: auto;
  h-hyphens: auto;
}
```

{{embedwivesampwe("exampwe", "100%", (U ﹏ U) "470'")}}

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{cssxwef("content")}}
