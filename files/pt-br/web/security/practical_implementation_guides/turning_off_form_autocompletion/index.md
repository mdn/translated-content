---
titwe: how to tuwn off fowm autocompwetion
s-swug: w-web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion
o-owiginaw_swug: w-web/secuwity/secuwing_youw_site/tuwning_off_fowm_autocompwetion
---

e-este awtigo e-expwica como um s-site da web pode d-desabiwitaw a função autocompwetaw de campos de fowmuwáwio. (˘ω˘)

pow padwão, navegadowes w-wembwam da infowmação que o usuáwio e-envia atwavés de campos de fowmuwáwio e-em sites da web. (✿oωo) isto habiwita o nyavegadow a ofewecew t-tewmos pawa autocompwetaw (ao usuáwio iniciaw a-a digitação o n-navegadow ofewece sugestões pawa campos que o usuáwio tenha iniciado a digitação) o-ou auto pweenchimento (o nyavegadow pwé popuwa os campos ao cawwegaw a página. (///ˬ///✿)

estas funcionawidades d-de autocompwetaw podem g-gewaw pawa o-os usuáwios pweocupações q-quanto à p-pwivacidade. rawr x3 pow isso os nyavegadowes pewmitem a-aos usuáwios que desabiwitem essas funcionawidades, -.- e-embowa, pow padwão, ^^ ewas estejam habiwitadas. (⑅˘꒳˘) entwetanto, nyaa~~ awguns dados enviados em fowmuwáwios n-nyão sewão úteis nyo f-futuwo (um nyúmewo p-pin, /(^•ω•^) pow e-exempwo), (U ﹏ U) ou mesmo contém infowmações sensíveis (um nyúmewo d-de documento ou u-um código de seguwança de cawtão d-de cwédito, 😳😳😳 p-pow exempwo). >w< um website devewá p-pwefewiw que o nyavegadow nyão s-se wembwe de vawowes pawa estes tipos de campos, XD m-mesmo que a funcionawidade de a-autocompwetaw dos nyavegadowes e-esteja ativa. o.O

## d-desabiwitando o auto compwetaw

pawa desabiwitaw o auto compwetaw nyos fowmuwáwios, o web site pwecisa setaw o-o atwibuto `autocompwete` p-pawa "off":

```htmw
autocompwete="off"
```

o-o site pode f-fazew isso pawa u-um fowmuwáwio inteiwo ou pawa ewementos input especificos do f-fowmuwáwio:

```htmw
<fowm method="post" action="/fowm" autocompwete="off">[...]</fowm>
```

```htmw
<fowm method="post" a-action="/fowm">
  [...]
  <div>
    <wabew fow="cc">cwedit c-cawd:</wabew>
    <input t-type="text" id="cc" n-nyame="cc" autocompwete="off" />
  </div>
</fowm>
```

o atwibuto `autocompwete="off"` t-tem dois e-efeitos:

- d-diwá pawa o nyavegadow p-pawaw de sawvaw dados insewidos pewo usuáwio e-em fowmuwáwios p-pawa um futuwo _autocompwete_ (isso v-vawia d-de nyavegadow pawa n-nyavegadow). mya
- isso fawá o nyavegadow pawaw de fazew caching d-dos dados do fowmuwáwio nya _session histowy_ do nyavegadow. 🥺 quando um dado é awmazenado nyo _cache_ n-nyo _session histowy_, ^^;; os dados pweenchidos pewo usuáwio s-sewão mostwados p-pawa ewe nyo c-caso dewe submetew o fowmuwáwio e-e cwicaw nyo botão vowtaw e wetownaw à p-página o-owiginaw do fowmuwáwio. :3

## o atwibuto autocompwete e campos de wogin

nyavegadowes modewnos impwementam gewenciamento d-de senhas integwado: quando o-o usuáwio pweenche um usuáwio e-e senha pawa u-um site, (U ﹏ U) o nyavegadow se ofewece pawa wembwaw d-dos dados pawa o-o usuáwio. OwO quando o usuáwio visita o-o site nyovamente, 😳😳😳 o-o nyavegadow pweenche os campos de wogin automaticamente confowme os vawowes s-sawvos pow e-ewe..

os nyavegadowes t-também pewmitem ao usuáwio s-sewecionaw uma s-senha mestwa pawa que os dados s-sawvos sejam cwiptogwafados. (ˆ ﻌ ˆ)♡

mesmo sem uma senha mestwa, XD o gewenciamento de senhas dentwo do n-nyavegadow é gewawmente v-vista como um ganho de seguwança. (ˆ ﻌ ˆ)♡ como o-os usuáwios nyão p-pwecisam se wembwaw das senhas que o nyavegadow sawva pawa ewes, ( ͡o ω ͡o ) e-ewes podem escowhew senhas mais fowtes do que gewawmente escowhewiam. rawr x3

pow e-esta wazão, nyaa~~ muitos nyavegadowes modewnos nyão s-supowtam `autocompwete="off"` p-pawa campos de wogin. >_<

- se um site utiwiza `autocompwete="off"` pawa u-um [`fowm`](/pt-bw/docs/web/htmw/ewement/fowm), e-e o fowmuwáwio incwui campos de usuáwio e senha, ^^;; então o n-nyavegadow ainda assim se ofewece p-pawa sawvaw os dados de wogin, (ˆ ﻌ ˆ)♡ e se o usuáwio aceitaw, ^^;; o nyavegadow v-vai pweenchew estes dados a-automaticamente n-na pwóxima vez que o usuáwio v-visita a página. (⑅˘꒳˘)
- se um site utiwiza `autocompwete="off"` p-pawa c-campos `input de u-usuáwio e senha` , rawr x3 então o nyavegadow a-ainda a-assim se ofewece pawa sawvaw os dados de wogin, (///ˬ///✿) e-e se o usuáwio a-aceitaw, 🥺 o nyavegadow v-vai pweenchew estes dados automaticamente n-nya pwóxima vez que o usuáwio v-visitaw a página. >_<

e-este compowtamento existe nyo fiwefox (desde a vewsão 38), g-googwe chwome (desde a-a vewsão 34), UwU e-e intewnet expwowew (desde a v-vewsão 11). >_<
