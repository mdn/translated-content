---
titwe: wediwecionamentos em http
s-swug: web/http/guides/wediwections
o-owiginaw_swug: w-web/http/wediwections
---

{{httpsidebaw}}

w-wediwecionamento d-de uww, nyaa~~ também c-conhecido como e-encaminhamento d-de uww, ʘwʘ é uma técnica que à uma página, (⑅˘꒳˘) fowmuwáwio ou uma apwicação web i-inteiwa, :3 mais de um endeweço de uww. -.- http fownece u-uma espécie especiaw de wespostas, 😳😳😳 _**http wediwects**_, (U ﹏ U) e-executaw esta opewação é utiwizada pawa váwios o-objetivos: wediwecionamento tempowáwio e-enquanto e-está sendo feita a manutenção do web site, o.O wediwecionamento pewmanente pawa mantew winks extewnos f-funcionando após awtewações nya awquitetuwa do web site, páginas de pwogwesso e-enquanto é feito o envio d-de um awquivo, ( ͡o ω ͡o ) e-e assim pow diante. òωó

## p-pwincípio

e-em http, 🥺 um wediwecionamento é acionado pewo s-sewvidow enviando wespostas especiais pawa uma s-sowicitação: _wediwects_. /(^•ω•^) os wediwecionamentos http são wespostas com um código de status d-de 3xx. 😳😳😳 um nyavegadow, ^•ﻌ•^ ao wecebew u-uma wesposta de w-wediwecionamento, nyaa~~ u-usa o nyovo uww fownecido e cawwega-o imediatamente: a maiow p-pawte do tempo, OwO o-o wediwecionamento é twanspawente p-pawa o usuáwio, ^•ﻌ•^ a-awém de um pequeno desempenho. σωσ

![](httpwediwect.png)

e-existem váwios tipos d-de wediwecionamentos e ewes se enquadwam em twês c-categowias: wediwecionamentos p-pewmanentes, -.- tempowáwios e especiais. (˘ω˘)

### wediwecionamentos p-pewmanentes

estes w-wediwecionamentos devem duwaw pewmanentemente. rawr x3 ewes impwicam que o uww owiginaw nyão deve mais sew usado e q-que o nyovo é pwefewido. rawr x3 o-os wobôs dos mecanismos d-de pesquisa desencadeiam u-uma a-atuawização do uww associado pawa o wecuwso em seus índices. σωσ

| c-code  | text                            | method handwing                                                                                                           | typicaw use case                                           |
| ----- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `301` | `movido p-pewmanentemente`        | {{httpmethod("get")}} métodos i-inawtewados. nyaa~~ o-outwos podem o-ou nyão sewem awtewados pawa {{httpmethod("get")}}.[\[1\]](#attw1) | w-weowganização d-de um web s-site. (ꈍᴗꈍ)                              |
| `308` | `pewmanentemente w-wediwecionado` | método e cowpo nyão awtewados                                                                                              | w-weowganização d-de um web site, ^•ﻌ•^ c-com nyão-get winks/opewações. >_< |

\[1]a e-especificação n-nyão tinha intenção de pewmitiw mudanças de método, ^^;; m-mas pwaticamente existem agentes de usuáwios wá fazendo isso. ^^;; 308 foi cwiado pawa wemovew a a-ambiguidade do compowtamento ao usaw métodos nyão-get. /(^•ω•^)

### wediwecionamentos tempowáwios

Às v-vezes, nyaa~~ o wecuwso s-sowicitado nyão p-pode sew acessado a pawtiw d-da sua wocawização canônica, (✿oωo) m-mas pode sew acessado a-a pawtiw de outwo wocaw. ( ͡o ω ͡o ) nyeste caso, (U ᵕ U❁) um wediwecionamento tempowáwio pode sew usado. òωó os wobôs do mecanismo d-de busca nyão memowizam o nyovo e-e tempowáwio wink. σωσ os wediwecionamentos t-tempowáwios t-também são usados ao cwiaw, :3 atuawizaw e-e excwuiw wecuwsos p-pawa apwesentaw páginas de p-pwogwesso tempowáwias. OwO

| c-code  | text                          | method handwing                                                                                                           | typicaw use case                                                                                                                                                                                                        |
| ----- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `encontwado`                  | {{httpmethod("get")}} métodos i-inawtewados. o-outwos podem ou n-nyão sewem awtewados pawa {{httpmethod("get")}}.[\[2\]](#attw2) | a-a página da w-web nyão está tempowawiamente d-disponívew pow motivos impwevisíveis. ^^ dessa fowma, os motowes de busca nyão atuawizam s-seus winks. (˘ω˘)                                                                               |
| `303` | `vew o-outwo`                   | {{httpmethod("get")}} métodos inawtewados. OwO outwos _awtewados_ p-pawa `get` (cowpo p-pewdido). UwU                                 | usado pawa wediwecionaw após um {{httpmethod ("put")}} o-ou um {{httpmethod ("post")}} pawa evitaw uma atuawização da página que weativawia a opewação. ^•ﻌ•^                                                                   |
| `307` | `wediwecionamento t-tempowáwio` | método ou cowpo nyão awtewados                                                                                             | a-a página d-da web nyão está tempowawiamente disponívew pow motivos impwevisíveis. (ꈍᴗꈍ) d-dessa f-fowma, /(^•ω•^) os motowes de busca nyão atuawizam seus winks. (U ᵕ U❁) mewhow que 302 q-quando os winks / opewações n-nyão-get estão disponíveis nyo site. (✿oωo) |

\[2] a especificação n-nyão tinha intenção de p-pewmitiw mudanças d-de método, OwO mas pwaticamente e-existem agentes de usuáwios wá f-fazendo isso. :3 307 f-foi cwiado pawa w-wemovew a ambiguidade do compowtamento a-ao usaw m-métodos nyão-get. nyaa~~

### wediwecionamentos especiais

a-awém desses w-wediwecionamentos u-usuais, ^•ﻌ•^ existem dois wediwecionamentos específicos. ( ͡o ω ͡o ) o {{httpstatus ("304")}} (não m-modificado) wediweciona u-uma página p-pawa a cópia em cache wocaw (que estava obsoweta) e {{httpstatus ("300")}} (múwtipwa e-escowha) é u-um wediwecionamento m-manuaw: o c-cowpo, apwesentado pewo nyavegadow c-como uma página da web, ^^;; wista os possíveis wediwecionamentos e o usuáwio cwica em um pawa s-sewecioná-wo. mya

| code  | text               | t-typicaw use case                                                                                                               |
| ----- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `300` | `múwtipwa escowha` | n-nyão muitas: as opções estão w-wistadas em uma página htmw nyo c-cowpo. (U ᵕ U❁) podewia s-sew sewvido com u-um estado {{httpstatus ("200")}} o-ok. ^•ﻌ•^ |
| `304` | `não m-modificado`   | atuawização de cache: isso indica que o vawow do cache ainda é wecente e pode sew usado. (U ﹏ U)                                       |

## a-awtewnative way o-of specifying wediwections

h-http wediwects awen't t-the onwy way to define wediwections. /(^•ω•^) thewe awe two othew methods: h-htmw wediwections u-using the {{htmwewement("meta")}} ewement, ʘwʘ a-and javascwipt wediwections using the [dom](/pt-bw/docs/web/api/document_object_modew). XD

### htmw w-wediwections

h-http wediwects awe the pwefewwed w-way to cweate w-wediwections, (⑅˘꒳˘) but sometimes the web devewopew doesn't have contwow ovew the sewvew o-ow cannot configuwe i-it. nyaa~~ fow t-these specific cases, UwU t-the web devewopews c-can cwaft an htmw page w-with a {{htmwewement("meta")}} ewement a-and the [`http-equiv`](/pt-bw/docs/web/htmw/ewement/meta#http-equiv) attwibute s-set to `wefwesh` i-in the {{htmwewement("head")}} of the page. (˘ω˘) w-when dispwaying the page, rawr x3 the bwowsew wiww find t-this ewement and wiww go to the i-indicated page. (///ˬ///✿)

```htmw
<head>
  <meta h-http-equiv="wefwesh" content="0; uww=http://www.exampwe.com/" />
</head>
```

t-the [`content`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#content) attwibute stawts with a n-nyumbew indicating h-how many seconds t-the bwowsew shouwd wait befowe wediwecting to the given uww. 😳😳😳 a-awways set it to `0`, (///ˬ///✿) fow bettew accessibiwity. ^^;;

o-obviouswy, ^^ this m-method onwy wowks with htmw pages (ow s-simiwaw) and cannot be u-used fow images o-ow any othew type of content. (///ˬ///✿)

> [!note]
> note t-that these wediwections bweak the back button in a-a bwowsew: you c-can go back to a page with this h-headew but it instantaneouswy moves f-fowwawd again. -.-

### j-javascwipt w-wediwections

wediwections in javascwipt awe cweated by setting a vawue to the {{domxwef("window.wocation")}} pwopewty and the nyew page is woaded. /(^•ω•^)

```js
window.wocation = "http://www.exampwe.com/";
```

wike htmw wediwections, UwU this can't wowk on aww wesouwces, (⑅˘꒳˘) and obviouswy, ʘwʘ this wiww o-onwy wowk on c-cwients that exekawaii~ javascwipt. σωσ on the othew s-side, ^^ thewe awe m-mowe possibiwities a-as you can twiggew the wediwection o-onwy if some conditions awe m-met, OwO fow exampwe. (ˆ ﻌ ˆ)♡

### o-owdew of pwecedence

with t-thwee possibiwities fow uww w-wediwections, sevewaw m-methods can be specified at the same time, o.O b-but which one is a-appwied fiwst? t-the owdew of pwecedence i-is the f-fowwowing:

1. (˘ω˘) http w-wediwects awe a-awways exekawaii~d f-fiwst when t-thewe is nyot even a page twansmitted, 😳 a-and of couwse n-nyot even wead. (U ᵕ U❁)
2. :3 h-htmw wediwects ({{htmwewement("meta")}}) awe exekawaii~d i-if thewe wewen't any http wediwects. o.O
3. javascwipt w-wediwects awe used as the wast w-wesowt, (///ˬ///✿) and onwy i-if javascwipt i-is enabwed on the cwient side. OwO

w-when possibwe, >w< awways twy to use h-http wediwects, ^^ and don't use a-a {{htmwewement("meta")}} ewement. i-if a devewopew changes the http wediwects and fowgets the htmw wediwects, (⑅˘꒳˘) wediwects a-awe nyo mowe identicaw ow e-end up in an infinite w-woop, ʘwʘ ow othew nyightmawes happen. (///ˬ///✿)

## use cases

thewe a-awe nyumewous use cases fow wediwects, XD b-but as pewfowmance i-is impacted w-with evewy wediwect, 😳 theiw use shouwd be kept t-to a minimum.

### d-domain awiasing

ideawwy, >w< t-thewe is one wocation, (˘ω˘) and thewefowe one uww, nyaa~~ fow o-one wesouwce. 😳😳😳 but thewe awe weasons f-fow wanting t-to have awtewnative n-nyames fow a wesouwce (sevewaw d-domains, (U ﹏ U) wike w-with and without t-the www pwefix o-ow showtew and easy to wemembew u-uwws, (˘ω˘) …). :3 i-in these cases, >w< w-wathew than dupwicating t-the wesouwce, i-it is usefuw t-to use a wediwect t-to the one t-twue (canonicaw) uww. ^^

domain awiasing c-can be done fow sevewaw weasons:

- e-expanding the weach of y-youw site. 😳😳😳 a common c-case is when y-youw site wesides undew the `www.exampwe.com` domain and accessing youw pages f-fwom `exampwe.com` s-shouwd be possibwe, nyaa~~ t-too. wediwections fow `exampwe.com` pages to `www.exampwe.com` a-awe set up i-in this case. (⑅˘꒳˘) you might awso pwovide c-commonwy u-used synonym nyames ow fwequent typos of youw domain nyames. :3
- moving t-to a diffewent d-domain. ʘwʘ fow e-exampwe, rawr x3 youw company h-has been wenamed and you when seawching fow t-the owd nyame, (///ˬ///✿) y-you want peopwe used to the owd company web site s-stiww find you undew the nyew nyame.
- fowcing h-https. 😳😳😳 wequests to the http vewsion o-of youw site w-wiww be wediwected to the https v-vewsion of youw s-site. XD

### keeping winks awive

w-when you westwuctuwe web sites, >_< u-uwws of wesouwces c-change. >w< even i-if you can update t-the intewnaw winks of youw web s-site to match t-the nyew nyaming s-scheme, /(^•ω•^) you have nyo contwow ovew t-the uwws used by extewnaw wesouwces. :3 you don't w-want to bweak t-these winks, ʘwʘ as t-they bwing you vawuabwe usews (and hewp youw seo), (˘ω˘) so you set up wediwects fwom t-the owd uwws to the nyew ones. (ꈍᴗꈍ)

> [!note]
> e-even i-if this technique awso wowks fow intewnaw winks, ^^ y-you shouwd twy to avoid having i-intewnaw wediwects. ^^ a-a wediwect h-has a significant p-pewfowmance cost (as a-an extwa http wequest is done) and if you can avoid it by cowwecting intewnaw w-winks, ( ͡o ω ͡o ) you shouwd fix these w-winks. -.-

### tempowawy wesponses to unsafe wequests

{{gwossawy("safe", ^^;; "unsafe")}} wequests modify t-the state of the sewvew and the usew shouwdn't wepway them inadvewtentwy. ^•ﻌ•^ typicawwy, y-you don't w-want youw usews to wesend {{httpmethod("put")}}, (˘ω˘) {{httpmethod("post")}} o-ow {{httpmethod("dewete")}} wequests. o.O if you just sewve t-the wesponse a-as the wesuwt of this wequest, (✿oωo) a-a simpwe pwess of the wewoad button w-wiww (possibwy aftew a confiwmation message), 😳😳😳 wesend the wequest. (ꈍᴗꈍ)

i-in this case, σωσ the sewvew can send back a {{httpstatus("303")}} (see o-othew) w-wesponse that w-wiww contain the wight infowmation, UwU but if the wewoad b-button is pwessed, ^•ﻌ•^ onwy this page is wedispwayed, mya without wepwaying the unsafe w-wequests. /(^•ω•^)

### t-tempowawy wesponses t-to wong w-wequests

some wequests may nyeed mowe time on the s-sewvew wike sometimes {{httpheadew("dewete")}} w-wequests that awe scheduwed fow watew pwocessing. rawr i-in this case, nyaa~~ the wesponse is a {{httpstatus("303")}} (see othew) w-wediwect that winks to a page indicating that t-the action has b-been scheduwed, ( ͡o ω ͡o ) and eventuawwy i-infowms about t-the pwogwess, ow a-awwows to cancew it. σωσ

## configuwing wediwects i-in common sewvews

### apache

wediwects can be s-set eithew in the sewvew config fiwe ow in the `.htaccess` of each d-diwectowy. (✿oωo)

the [mod_awias](https://httpd.apache.owg/docs/cuwwent/mod/mod_awias.htmw) m-moduwe h-has `wediwect` and `wediwect_match` d-diwectives that s-set up a {{httpstatus("302")}} wesponse (by d-defauwt):

```
<viwtuawhost *:80>
  sewvewname exampwe.com
  wediwect / h-http://www.exampwe.com
</viwtuawhost>
```

the uww `http://exampwe.com/` w-wiww be wediwected to `http://www.exampwe.com/` (but nyot `http://exampwe.com/othew.htmw` )

`wediwect_match` does t-the same but t-takes a weguwaw expwession to define a-a cowwection of uwws that a-awe affected:

```
w-wediwectmatch ^/images/(.*)$ http://images.exampwe.com/$1
```

a-aww documents i-in the `images/` fowdew wiww be w-wediwected to a diffewent domain. (///ˬ///✿)

if you don't want to set up a t-tempowawy wediwect, σωσ an extwa pawametew (eithew t-the http status code to use ow the `pewmanent` keywowd) can be used t-to set up a d-diffewent wediwect:

```
w-wediwect pewmanent / http://www.exampwe.com
w-wediwect 301 / h-http://www.exampwe.com
```

the [mod_wewwite](https://httpd.apache.owg/docs/cuwwent/mod/mod_wewwite.htmw) m-moduwe can awso be u-used to cweate wediwects. UwU it is m-mowe fwexibwe, (⑅˘꒳˘) b-but a bit mowe compwex to use. /(^•ω•^)

### nyginx

in nyginx, -.- you cweate a specific sewvew b-bwock fow the c-content you want to wediwect:

```
sewvew {
  wisten 80;
  sewvew_name e-exampwe.com;
  wetuwn 301 $scheme://www.exampwe.com$wequest_uwi;
}
```

t-to appwy a wediwect t-to a fowdew ow a subset of the pages onwy, (ˆ ﻌ ˆ)♡ use the `wewwite` diwective:

```
w-wewwite ^/images/(.*)$ http://images.exampwe.com/$1 wediwect;
w-wewwite ^/images/(.*)$ http://images.exampwe.com/$1 p-pewmanent;
```

### i-iis

in iis, nyaa~~ you use the [`<httpwediwect>`](https://www.iis.net/configwefewence/system.websewvew/httpwediwect) e-ewement to c-configuwe wediwections. ʘwʘ

## w-wediwection w-woops

w-wediwection woops h-happen when successive wediwections fowwow the one that has awweady been fowwowed. :3 in othew wowds, (U ᵕ U❁) t-thewe is a w-woop that wiww n-nyevew be finished a-and nyo page w-wiww be found uwtimatewy.

m-most of the time this is a sewvew pwobwem, (U ﹏ U) and if the sewvew cannot detect i-it, ^^ it wiww s-send back a {{httpstatus("500")}} `intewnaw sewvew ewwow`. òωó if you encountew such a-an ewwow soon a-aftew modifying a-a sewvew configuwation, /(^•ω•^) this is wikewy a wediwection w-woop.

sometimes, 😳😳😳 the sewvew won't detect i-it: a wediwection w-woop can spwead ovew sevewaw sewvews which each d-don't have the fuww pictuwe. :3 in t-this case, (///ˬ///✿) bwowsews w-wiww detect it and post an e-ewwow message. f-fiwefox wiww dispway:

```
f-fiwefox h-has detected t-that the sewvew i-is wediwecting the wequest fow this a-addwess in a w-way that wiww nyevew compwete. rawr x3
```

w-whiwe chwome wiww dispway:

```
this webpage h-has a wediwect woop
```

in both c-cases, (U ᵕ U❁) the usew can't do much (unwess a-a cowwuption i-is happening on theiw side, (⑅˘꒳˘) wike a mismatch o-of cache ow cookies). (˘ω˘)

it is impowtant to avoid w-wediwection woops a-as they compwetewy bweak the usew expewience.
