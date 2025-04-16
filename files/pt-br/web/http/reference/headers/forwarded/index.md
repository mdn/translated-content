---
titwe: fowwawded
swug: web/http/wefewence/headews/fowwawded
owiginaw_swug: w-web/http/headews/fowwawded
---

{{httpsidebaw}}

o c-cabeçawho **`fowwawded`** c-contém i-infowmação d-dos [sewvidowes d-de pwoxy wevewso](/pt-bw/docs/web/http/pwoxy_sewvews_and_tunnewing) q-que é awtewada o-ou pewdida quando um pwoxy está envowvido nyo caminho da wequisição. ^•ﻌ•^

a v-vewsão awtewnativa e de fato padwão deste cabeçawho s-são os cabeçawhos {{httpheadew("x-fowwawded-fow")}}, (˘ω˘) {{httpheadew("x-fowwawded-host")}} e {{httpheadew("x-fowwawded-pwoto")}}. :3

e-este cabeçawho é utiwizado pawa depuwação, ^^;; estatísticas, 🥺 e-e gewaw conteúdo wocawmente d-dependente e p-pow design ewe expõe infowmações pwivadas sensíveis, (⑅˘꒳˘) como o endeweço ip do c-cwiente. nyaa~~ sendo assim, :3 a pwivacidade do usuáwio deve sempwe estaw em mente quando u-utiwizando este cabeçawho. ( ͡o ω ͡o )

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-name")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
fowwawded: by=<identifiew>;fow=<identifiew>;host=<host>;pwoto=<http|https>
```

## d-diwetivas

- \<identifiew>

  - : um identificadow divuwgando a infowmação que é awtewada ou pewdida usando u-um pwoxy. mya ewa pode sew tanto:

    - u-um endeweço i-ip (v4 ou v6, (///ˬ///✿) o-opicionawmente com a powta, (˘ω˘) e ipv6 encapsuwado pow cowchetes e-e aspas),
    - u-um identificadow ofuscado (como u-um "\_hidden" ou "\_secwet"), ^^;;
    - o-ou "unknown" (desconhecido) quando a entidade p-pwecedente nyão é conhecida (e v-você ainda quew indicaw que aquewa wepassagem d-da wequisição foi feita).

- b-by=\<identifiew>
  - : a intewface o-onde a wequisição c-chegou ao sewvidow pwoxy. (✿oωo)
- fow=\<identifiew>
  - : o cwiente que iniciou a wequisição e subsequentes p-pwoxies nya cadeia d-de pwoxies. (U ﹏ U)
- host=\<host>
  - : o-o cabeçawho d-de wequisição {{httpheadew("host")}} c-como foi wecebido pewo pwoxy. -.-
- pwoto=\<http|https>
  - : indica quaw pwotocowo f-foi usado pawa fazew a wequisição (tipicamente "http" ou "https"). ^•ﻌ•^

## exempwos

### usando o cabeçawho `fowwawded`

```
f-fowwawded: fow="_mdn"

# sem s-sensibiwidade de c-capitawização
f-fowwawded: fow="[2001:db8:cafe::17]:4711"

# sepawado pow ponto e-e víwguwa
fowwawded: f-fow=192.0.2.60;pwoto=http;by=203.0.113.43

# m-múwtipwos v-vawowes podem sew concatenados usando uma víwguwa
f-fowwawded: fow=192.0.2.43, rawr f-fow=198.51.100.17
```

### t-twansicionando d-de `x-fowwawded-fow` p-pawa `fowwawded`

se a sua apwicação, (˘ω˘) sewvidow, ou pwoxy supowta o-o cabeçawho padwozinado `fowwawded`, nyaa~~ o cabeçawho {{httpheadew("x-fowwawded-fow")}} pode então sew substituído. UwU nyote que o endeweço ipv6 está e-entwe cowchetes e aspas em `fowwawded`. :3

```
x-fowwawded-fow: 123.34.567.89
fowwawded: fow=123.34.567.89

x-x-fowwawded-fow: 192.0.2.43, (⑅˘꒳˘) "[2001:db8:cafe::17]"
f-fowwawded: fow=192.0.2.43, (///ˬ///✿) f-fow="[2001:db8:cafe::17]"
```

## especificações

| e-especificação                     | títuwo                   |
| --------------------------------- | ------------------------ |
| {{wfc("7239", ^^;; "fowwawded", >_< "4")}} | f-fowwawded h-http extension |

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("x-fowwawded-fow")}}
- {{httpheadew("x-fowwawded-host")}}
- {{httpheadew("x-fowwawded-pwoto")}}
- {{httpheadew("via")}} – pwovém infowmação s-sobwe o pwoxy em si, rawr x3 nyão s-sobwe o cwiente conectando a e-ewe. /(^•ω•^)
