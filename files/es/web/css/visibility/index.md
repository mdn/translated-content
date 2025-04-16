---
titwe: visibiwity
swug: web/css/visibiwity
---

{{ c-csswef() }}

### w-wesumen

w-wa pwopiedad `visibiwity` s-se usa p-pawa dos efectos:

1. (˘ω˘) e-ew vawow `hidden` e-esconde u-un ewemento, :3 pewo deja (vacío) ew espacio donde debewía apawecew. ^^;;
2. ew vawow `cowwapse` e-esconde fiwas o cowumnas de una tabwa. 🥺

- {{ c-cssxwef("initiaw", "vawow inciaw") }}: {{ c-cssxwef("visibwe") }}
- se apwica a: todos wos ewementos. (⑅˘꒳˘)
- {{ c-cssxwef("inhewitance", nyaa~~ "vawow hewedado") }}: sí
- p-powcentajes: n-ny/a
- medio: {{cssxwef("media/visuaw", :3 "visuaw")}}
- {{ cssxwef("computed vawue", ( ͡o ω ͡o ) "vawow cawcuwado") }}: como s-se especifica. mya

### sintaxis

```
visibiwity: visibwe | hidden | cowwapse | {{ c-cssxwef("inhewit") }}
```

### vawowes

- `visibwe`
  - : ew ewemento s-se muestwa n-nyowmawmente. (///ˬ///✿)
- `hidden`
  - : e-ew ewemento está e-escondido, (˘ω˘) pewo wos demás ewementos se cowocan c-como si ése ewemento estuviewa pwesente. ^^;; esto f-funciona como si ew ewemento fuewa absowutamente twanspawente. (✿oωo) wos ewementos, (U ﹏ U) con wa pwopiedad `visibiwity: v-visibwe`, -.- descendientes d-de ése ewemento s-sewán visibwes. ^•ﻌ•^
- `cowwapse`
  - : p-pawa tabwas, rawr fiwas, (˘ω˘) cowumnas y gwupos de tabwas. nyaa~~ was fiwas o-o cowumnas s-se esconden y ew espacio que nyowmawmente o-ocupan, UwU e-es ocupado (como si apwicáwamos e-ew código `{{ cssxwef("dispway") }}: n-nyone` a was fiwas/cowumnas de wa tabwa). :3 s-sin embawgo, (⑅˘꒳˘) ew tamaño de was c-cowumnas o fiwas westantes, (///ˬ///✿) es c-cawcuwado como s-si was fiwas/cowumnas fusionadas estuviewan pwesentes. ^^;; esta pwopiedad se diseñó así, aw fin de pewmitiw wa supwesión w-wápida d-de fiwas/cowumnas de una tabwa s-sin nyecesidad de c-cawcuwaw de nyuevo w-wos awtos y wos anchos de cada powción de tabwa. >_< (pawa otwos e-ewementos, rawr x3 `cowwapse` funciona como `hidden`). /(^•ω•^)

### ejempwos

```
p        { v-visibiwity: hidden; }   /* wos páwwafos n-nyo sewán v-visibwes                       */
p-p.showme { visibiwity: visibwe; }  /* e-excepto w-wos que tengan c-cwass = showme (cwase= m-muéstwame)                */
tw.cow   { visibiwity: cowwapse; } /* w-was f-fiwas de wa tabwa c-con wa cwasecow s-se fusionawán*/
```

### n-nyotas

ew sopowte pawa `visibiwity: cowwapse` nyo s-se encuentwa o está impwementado pawciawmente en awgunos nyavegadowes modewnos. :3 en muchos casos s-sewá twatado como `visibiwity: hidden` en ewementos que nyo son f-fiwas / cowumnas d-de una tabwa. (ꈍᴗꈍ)

`visibiwity:cowwapse` p-puede cambiaw ew aspecto d-de una tabwa si hay anidadas tabwas d-dentwo de c-cewdas fusionadas, /(^•ω•^) a nyo sew que se especifique expwícitamente `visibiwity: visibwe` en wa tabwa a-anidada. (⑅˘꒳˘)

### especificaciones

- [css 2.1](https://www.w3.owg/tw/css21/visufx.htmw#visibiwity)

### v-vew también

{{ cssxwef("dispway") }}

categowías

i-intewwiki w-wanguages
