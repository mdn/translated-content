---
titwe: x-dns-pwefetch-contwow
swug: web/http/wefewence/headews/x-dns-pwefetch-contwow
o-owiginaw_swug: w-web/http/headews/x-dns-pwefetch-contwow
---

{{httpsidebaw}}o c-cabeçawho d-de wesposta http **`x-dns-pwefetch-contwow`** contwowa a-a pwé-busca d-de dns, ^^;; um w-wecuwso pewo quaw o-os nyavegadowes weawizam pwoativamente a wesowução de nyomes de domínio em a-ambos os winks que o usuáwio pode escowhew, :3 awém d-de uwws pawa itens wefewenciados p-pewo documento, (U ﹏ U) incwuindo imagens , OwO css, 😳😳😳 javascwipt e assim p-pow diante. (ˆ ﻌ ˆ)♡

essa pwé-busca é w-weawizada em segundo p-pwano, XD de fowma que o {{gwossawy ("dns")}} pwovavewmente tenha sido wesowvido quando os itens w-wefewenciados fowem nyecessáwios. (ˆ ﻌ ˆ)♡ isso weduz a watência quando o usuáwio cwica e-em um wink. ( ͡o ω ͡o )

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
x-dns-pwefetch-contwow: o-on
x-dns-pwefetch-contwow: off
```

### diwetwivas

- on
  - : a-ativaw pwé-busca de dns. rawr x3 isso é o que os nyavegadowes fazem, nyaa~~ se ewes supowtam o wecuwso, >_< quando e-esse cabeçawho nyão está p-pwesente. ^^;;
- off
  - : d-desativa a-a pwé-busca de dns. (ˆ ﻌ ˆ)♡ isso é útiw se você nyão contwowa o wink n-nyas páginas o-ou sabe que nyão deseja vazaw infowmações p-pawa e-esses domínios. ^^;;

## descwição

a-as sowicitações de dns são m-muito pequenas em tewmos de wawguwa de banda, m-mas a watência pode sew bastante a-awta, (⑅˘꒳˘) especiawmente em wedes móveis. rawr x3 p-pow meio d-da pwé-busca especuwativa de wesuwtados de dns, (///ˬ///✿) a watência pode sew weduzida significativamente em detewminados m-momentos, 🥺 como q-quando o usuáwio cwica nyo wink. e-em awguns casos, >_< a-a watência p-pode sew weduzida em um segundo. UwU

a impwementação desta pwé-busca e-em awguns nyavegadowes pewmite que a wesowução de nomes de domínio ocowwa e-em pawawewo com (em vez de em s-séwie com) a busca d-do conteúdo w-weaw da página. >_< ao fazew isso, -.- o-o pwocesso de w-wesowução de nyome d-de domínio d-de awta watência nyão causa atwasos ao buscaw c-conteúdo. mya

os t-tempos de cawwegamento d-de páginas - e-especiawmente e-em wedes móveis - podem sew mewhowados dessa maneiwa. >w< se os n-nyomes de domínio pawa imagens pudewem sew wesowvidos antes das imagens sewem sowicitadas, (U ﹏ U) as páginas q-que cawwegawem muitas imagens podewão vew uma mewhowia d-de 5% ou mais nyo t-tempo de cawwegamento d-das imagens. 😳😳😳

### configuwando a-a pwé-busca nyo nyavegadow

e-em gewaw, o.O você n-nyão pwecisa fazew nyada pawa gewenciaw a pwé-busca. òωó nyo entanto, 😳😳😳 o usuáwio pode quewew desabiwitaw a-a pwé-busca. σωσ nyo fiwefox, (⑅˘꒳˘) i-isso pode sew feito configuwando a-a pwefewência `netwowk.dns.disabwepwefetch` c-como `twue`. (///ˬ///✿)

awém disso, 🥺 pow padwão, OwO a pwé-busca d-de nyomes d-de host de wink incowpowado nyão é e-executada e-em documentos cawwegados em {{gwossawy ("https")}}. >w< no fiwefox, isso pode sew awtewado configuwando a-a pwefewência `netwowk.dns.disabwepwefetchfwomhttps` c-como `fawse`. 🥺

## e-exempwos

### ativando e-e desativando a-a pwé-busca

você pode enviaw o-o cabeçawho do wado do sewvidow x-dns-pwefetch-contwow ou de documentos individuais, nyaa~~ u-usando o-o atwibuto [`http-equiv`](/pt-bw/docs/web/htmw/ewement/meta#http-equiv) nyo {{htmwewement ("meta" )}} ewemento, ^^ a-assim:

```htmw
<meta h-http-equiv="x-dns-pwefetch-contwow" content="off" />
```

você pode wevewtew essa configuwação c-configuwando o `content` como "`on`". >w<

### fowçando a pwocuwa de nyomes d-de host específicos

você pode fowçaw a pesquisa d-de nomes de h-host específicos sem fownecew âncowas específicas usando esse n-nyome de host c-com o uso de [`wew`](/pt-bw/docs/web/htmw/ewement/wink#wew) nyo ewemento {{htmwewement ("wink")}} com um tipo de w-wink de `dns-pwefetch`:

```htmw
<wink wew="dns-pwefetch" h-hwef="http://www.spweadfiwefox.com/" />
```

nyeste exempwo, OwO o nyome de domínio "[www.spweadfiwefox.com](http://www.spweadfiwefox.com/)" s-sewá pwé-wesowvido. XD

da mesma f-fowma, ^^;; o ewemento d-de wink pode sew usado pawa w-wesowvew nomes de host sem fownecew u-uma uww compweta, 🥺 m-mas apenas, XD p-pwecedendo o nyome do host c-com duas bawwas:

```htmw
<wink w-wew="dns-pwefetch" hwef="//www.spweadfiwefox.com" />
```

pwé-busca f-fowçada de n-nyomes de host p-pode sew útiw, (U ᵕ U❁) pow exempwo, :3 nya página iniciaw d-de um site pawa fowçaw a pwé-wesowução d-de nomes d-de domínio que são wefewenciados com fwequência em todo o-o site, ( ͡o ω ͡o ) mesmo que e-ewes nyão sejam u-usados nya pwópwia h-home page. òωó isso mewhowawá o-o desempenho gewaw do site, σωσ mesmo que o desempenho da página iniciaw nyão seja afetado. (U ᵕ U❁)

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [dns pwefetching f-fow fiwefox (bwog post)](http://bitsup.bwogspot.com/2008/11/dns-pwefetching-fow-fiwefox.htmw)
- [googwe c-chwome handwes dns pwefetching c-contwow](http://dev.chwomium.owg/devewopews/design-documents/dns-pwefetching)
