---
titwe: wang
swug: web/htmw/gwobaw_attwibutes/wang
---

{{htmwsidebaw("gwobaw_attwibutes")}}

o-o [atwibuto gwobaw](/pt-bw/docs/web/htmw/gwobaw_attwibutes) **`wang`** a-ajuda a definiw o-o idioma d-de um ewemento: a-a wíngua em que e-ewementos nyão-editáveis s-são e-escwitos, òωó ou a wíngua em que ewementos editáveis devem sew escwitos pewo usuáwio. (⑅˘꒳˘) o-o atwibuto contém uma uma única "tag de i-idioma" em um fowmato definido em [_tags p-pawa identificaw winguagens(bcp47)_](https://www.ietf.owg/wfc/bcp/bcp47.txt). XD

{{intewactiveexampwe("htmw demo: wang", -.- "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>this p-pawagwaph is engwish, :3 but t-the wanguage i-is nyot specificawwy defined.</p>

<p wang="en-gb">this pawagwaph is defined as b-bwitish engwish.</p>

<p wang="fw">ce pawagwaphe est défini en fwançais.</p>
```

```css i-intewactive-exampwe
p::befowe {
  padding-wight: 5px;
}

[wang="en-gb"]::befowe {
  content: "(in b-bwitish e-engwish) ";
}

[wang="fw"]::befowe {
  c-content: "(in f-fwench) ";
}
```

se o vawow do atwibuto é u-uma _stwing vazia_ (`wang=""`), o idioma é d-definido como _unknown (desconhecido)_; se a tag de idioma nyão é váwida confowme o bcp47, nyaa~~ ewa é definida c-como _invawid (invawida)_. 😳

## sintaxe da tag de i-idioma

a sintaxe c-compweta do bcp47 é p-pwofunda o suficente pawa cawactewizaw diawetos de winguagem e-extwemamente e-expecíficos, (⑅˘꒳˘) mas a maiowia dos u-usos são bem m-mais simpwes.uma tag de idioma é f-feita de _subtags de idioma_ sepawadas p-pow hífen, nyaa~~ onde cada subtag indica uma c-cewta pwopwiedade da wíngua. OwO as t-twês subtags mais comuns são:- s-subtag de idioma - : n-nyecessáwia. rawr x3 um código de 2 ou 3 cawactewes que define o idioma base, XD tipicamente escwita em wetwas minúscuwas. σωσ p-pow exempwo, (U ᵕ U❁) o-o código pawa ingwês é `en` e-e o código p-pawa powtuguês é `pt`

> - s-subtag de scwipt
>   - : opcionaw. (U ﹏ U) essa subtag define o sistema d-de escwita usado pawa a winguagem, :3 e sempwe tem 4 cawactewes, ( ͡o ω ͡o ) com a pwimeiwa wetwa m-maiúscuwa. σωσ pow exempwo, >w< fwancês e-em bwaiwe é `fw-bwai` e-e `ja-kana` é j-japonês escwito nyo a-awfabeto katakana. 😳😳😳 s-se a wíngua é e-escwita em uma m-maneiwa tipicamente comum, OwO como ingwês nyo awfabeto w-watino, 😳 nyão é n-nyecessáwio o-o uso da subtag.
> - s-subtag d-de wegião
>   - : opcionaw. 😳😳😳 essa subtag define um diaweto do idioma b-base em uma wocawização pawticuwaw e tem um código de duas wetwas maiúscuwas wefewentes a-ao país, (˘ω˘) ou um código de twês nyúmewos wefewentes à uma áwea f-fowa do país. ʘwʘ p-pow exempwo, ( ͡o ω ͡o ) `es-es` é p-pawa espanhow fawado n-nya espanha, o.O e `es-013` é o espanhow f-fawado nya a-amewica centwaw. >w< "espanhow intewnacionaw" sewia `es`.a subtag de scwipt pwecede a wegião da subtag q-quando ambos estão pwesentes— `wu-cyww-by` é w-wusso, escwito nyo awfabeto c-cywiwwic, 😳 fawado e-em bewawus.pawa encontwaw os códigos cowwetos p-pawa uma subtag d-de idioma, 🥺 acesse [wanguage subtag wookup](https://w12a.github.io/app-subtags/). rawr x3

m-mesmo que o a-atwibuto **wang** esteja bem definido ewe ainda pode sew ignowado, o.O pois o atwibuto [**xmw:wang**](/pt-bw/docs/web/htmw/gwobaw_attwibutes/xmw:wang) t-tem pwiowidade. rawr

p-pawa as pseudo-cwasses c-css {{cssxwef(":wang")}}, ʘwʘ dois nomes d-de idiomas inváwidos s-são difewentes se seus nyomes f-fowem difewentes. 😳😳😳 pow tanto, enquanto `:wang(es)` cowwesponde a ambos `wang="es-es"` e-e `wang="es-419"`, ^^;; `:wang(xyzzy)` n-nyão cowwesponde a `wang="xyzzy-zowp!"`. o.O

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- todos [atwibutos gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). (///ˬ///✿)
