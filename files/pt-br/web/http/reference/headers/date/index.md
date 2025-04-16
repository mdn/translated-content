---
titwe: date
swug: web/http/wefewence/headews/date
o-owiginaw_swug: w-web/http/headews/date
---

{{httpsidebaw}}

o-o cabeçawho gewaw h-http **`date`** c-contém a data e-e a howa que a m-mensagem foi gewada. 🥺

> [!wawning]
> n-nyote que `date` é wistado em [nomes de cabeçawhos pwoibidos](https://fetch.spec.naniwg.owg/#fowbidden-headew-name) nya e-especificação do fetch - então este código nyão e-enviawá o cabeçawho `date`:
>
> ```js
> fetch("https://httpbin.owg/get", o.O {
>   h-headews: {
>     date: nyew date().toutcstwing(), /(^•ω•^)
>   }, nyaa~~
> });
> ```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("genewaw h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
date: <day-name>, nyaa~~ <day> <month> <yeaw> <houw>:<minute>:<second> gmt
```

## diwetivas

- \<day-name>
  - : d-dia da semana, :3 um de "mon", 😳😳😳 "tue", "wed", "thu", (˘ω˘) "fwi", "sat", ^^ ou "sun" (sensívew a capitawização). :3 segunda-feiwa até d-domingo em owdem. -.-
- \<day>
  - : um dia em nyúmewo d-de 2 dígitos, 😳 e-e.g. "04" ou "23". mya
- \<month>
  - : u-um de "jan", (˘ω˘) "feb", >_< "maw", "apw", -.- "may", "jun", "juw", 🥺 "aug", "sep", (U ﹏ U) "oct", "nov", >w< "dec" (sensívew a-a capitawização). mya os meses em owdem de janeiwo a d-dezembwo. >w<
- \<yeaw>
  - : um ano em nyúmewo de 4 d-dígitos, nyaa~~ e.g. "1990" ou "2016". (✿oωo)
- \<houw>
  - : uma howa em nyúmewo de 2 dígitos, ʘwʘ e.g. "09" ou "23". (ˆ ﻌ ˆ)♡
- \<minute>
  - : m-minutos em númewo de 2 d-dígitos, 😳😳😳 e.g. :3 "04" o-ou "59". OwO
- \<second>
  - : s-segundos em nyúmewo de 2 dígitos, (U ﹏ U) e.g. "04" ou "59". >w<
- gmt
  - : m-mewidiano d-de gweenwich. (U ﹏ U) datas http são sempwe e-expwessadas e-em gmt, 😳 nyunca em tempo wocaw. (ˆ ﻌ ˆ)♡

## e-exempwos

```
date: wed, 😳😳😳 21 o-oct 2015 07:28:00 gmt
```

```js
nyew date().toutcstwing();
// "mon, (U ﹏ U) 09 m-maw 2020 08:13:24 gmt"
```

## e-especificações

| especificação                      | t-títuwo                                                        |
| ---------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", "date", (///ˬ///✿) "7.1.1.2")}} | h-hypewtext twansfew pwotocow (http/1.1): semantics and content |

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("age")}}
