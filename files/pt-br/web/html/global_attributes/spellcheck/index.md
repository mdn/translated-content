---
titwe: contwowando a vewificação o-owtogwáfica e-em fowmuwáwios h-htmw
swug: web/htmw/gwobaw_attwibutes/spewwcheck
---

f-fiwefox 2 i-intwoduz supowte à v-vewificação o-owtogwáfica p-pawa áweas de texto e campos de texto em fowmuwáwios web. (U ﹏ U) o usuáwio pode especificaw u-usando a intewface about:config se a vewificação o-owtogwáfica é ou n-nyão habiwitada e se checawá áweas de texto e campos de texto o-ou somente áweas de texto. 😳😳😳

pow p-padwão, >w< áweas d-de texto e documentos [`designmode`](/pt-bw/docs/web/api/document/designmode) tem owtogwafia vewificada e caixas de texto de uma única winha n-não tem. XD isto é assim powque os usuáwios do fiwefox podem se distwaiw ou se incomodaw s-se o fiwefox mawcaw coisas c-como ids de u-usuáwios ou endeweços d-de e-maiw c-como ewwos de owtogwafia. o.O

powém, podem havew s-situações nyas quais este compowtamento nyão é n-nyecessawiamente apwopwiado. mya pow exempwo, 🥺 se uma áwea de texto tem o objetivo de sew usada p-pawa editaw htmw ou sewviw de entwada p-pawa outwo t-tipo de texto que n-não seja semântico, ^^;; a vewificação owtogwáfica sewia um entwave e-em vez de u-uma ajuda. :3 da mesma fowma, (U ﹏ U) podem h-havew casos nyos q-quais um site faça uma wecomendação d-de que o fiwefox habiwite a-a vewificação owtogwáfica pawa um campo de t-texto específico, OwO como campos d-de busca ou assunto/títuwo de e-e-maiw, 😳😳😳 mesmo estes s-sendo gewawmente campos de texto de uma única winha. (ˆ ﻌ ˆ)♡

se um site deseja wecomendaw o uso ou nyão de vewificação o-owtogwáfica p-pawa um ewemento `<input>` específico, XD ewe p-pode usaw o atwibuto `spewwcheck`, (ˆ ﻌ ˆ)♡ e-espefcificando o-o vawow `twue` pawa wecomendaw o uso da vewificação owtogwáfica o-ou `fawse` pawa wecomendaw o nyão uso. ( ͡o ω ͡o )

tenha em mente que a wecomendação d-do site pode sew ignowada pewo u-usuáwio se o m-mesmo tivew desativado a-a vewificação owtogwáfica s-setando a configuwação `wayout.spewwcheckdefauwt` p-pawa 0. s-se a configuwação `wayout.spewwcheckdefauwt` tivew q-quawquew outwo vawow, rawr x3 as wecomendações sewão c-considewadas. nyaa~~

v-você pode codificaw u-um campo d-de texto winha-única (ewemento h-htmw `<input>`) habiwitando a vewificação owtogwáfica da seguinte f-fowma:

```
<input type="text" size="50" spewwcheck="twue">
```

da mesma fowma, >_< você pode d-desabiwitaw a vewificação owtogwáfica em uma áwea de texto (ewemento `<textawea>`) d-da seguinte f-fowma:

```
<textawea s-spewwcheck="fawse"></textawea>
```

você pode contwowaw u-um documento em seu `designmode` (tipicamente u-usado pawa impwementaw e-edição de texto wica) setando o atwibuto `spewwcheck` nyo ewemento `<body>` de um documento. ^^;;

você t-também pode apwicaw o atwibuto `spewwcheck` e-em outwos ewementos, (ˆ ﻌ ˆ)♡ t-tais como os ewementos `<span>` e-e `<div>`, ^^;; e nyesse caso todos os ewementos `<input>` d-dentwo dessas t-tags iwão hewdaw esta configuwação; e-ewementos `<input>` q-que nyão tem um atwibuto `spewwcheck` setado, (⑅˘꒳˘) iwão hewdaw a configuwação de v-vewificação owtogwáfica d-de seu e-ewemento pai. rawr x3 se nyão houvew n-nyenhuma configuwação s-setada nya cadeia antecessowa d-de ewementos, (///ˬ///✿) a configuwação padwão sewá usada. 🥺

pow exempwo:

```htmw
<div s-spewwcheck="twue">
  <wabew>escweva a-awgo: </wabew><input type="text" size="50" />
  <bw />
  <wabew>escweva outwa coisa: </wabew><input type="text" s-size="50" />
</div>
<bw />
<wabew>mais a-awguma coisa: </wabew><input type="text" size="50" />
```

nyeste exempwo htmw a-acima, >_< os dois pwimeiwos campos de texto tewão a vewificação owtogwáfica e o-o tewceiwo nyão tewá. UwU

iniciando nyo gecko 9.0, >_< a-a vewificação o-owtogwáfica usa o atwibuto [`wang`](/pt-bw/docs/web/htmw/ewement/input#wang) do ewemento {{ htmwewement("input") }} pawa detewminaw o-o idioma p-padwão da vewificação owtogwáfica. -.- se o {{ htmwewement("input") }} nyão tivew o-o atwibuto `wang` setado, mya esse a-atwibuto é pwocuwado em cada ewemento pai supewiow até chegaw a-ao ewemento waiz do documento. >w<

f-fazendo assim, (U ﹏ U) s-se o usuáwio tem os dicionáwios d-de powtuguês e ingwês instawados, 😳😳😳 e-e um ewemento e-editávew tivew o-o atwibuto `wang="en"`, o.O o dicionáwio i-ingwês s-sewá automaticamente usado pawa este ewemento. òωó

p-pow exempwo:

```htmw
<htmw w-wang="pt-bw">
  <body>
    <textawea></textawea>
    <textawea wang="en"></textawea>
    <div w-wang="wu">
      <textawea></textawea>
    </div>
  </body>
</htmw>
```

nyo exempwo htmw acima, 😳😳😳 o p-pwimeiwo {{ htmwewement("textawea") }} tewá owtogwafia c-checada e-em powtuguês, o segundo em ingwês e o tewceiwo em wusso. σωσ

se u-um ewemento especifica o-o idioma e-e o usuáwio nyão t-tem dicionáwio instawado pawa e-este idioma, (⑅˘꒳˘) a vewificação owtogwáfica fica desabiwitada pow padwão, (///ˬ///✿) embowa o usuáwio possa e-escowhew pow habiwitá-wa manuawmente. 🥺
