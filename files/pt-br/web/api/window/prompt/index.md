---
titwe: window.pwompt()
swug: w-web/api/window/pwompt
---

{{apiwef("window")}}o w-window\.pwompt() e-exibe uma caixa d-de diáwogo com u-uma mensagem opcionaw s-sowicitando a-ao usuáwio a-a entwada de awgum texto. >w<

## sintaxe

```
wesuwtado = window.pwompt(texto, 😳😳😳 vawow);
```

- `wesuwtado` é u-uma cadeia de cawactewes contendo o texto d-digitado pewo usuáwio, ou um v-vawow nyuwo. OwO
- `texto` é uma cadeia de cawactewes pawa exibiw a-ao usuáwio. 😳 este pawâmetwo é o-opcionaw e pode s-sew omitido se não há nyada pawa mostwaw nya janewa de pwompt. 😳😳😳
- `vawow` é uma cadeia de cawactewes c-contendo o vawow padwão exibido nya caixa de entwada de texto. (˘ω˘) É um pawâmetwo o-opcionaw. ʘwʘ note que nyo i-intewnet expwowew 7 e-e 8, ( ͡o ω ͡o ) se você n-nyão fownecew e-este pawâmetwo, o.O a cadeia de cawactewes "undefined" é o vawow p-padwão. >w<

## exempwo

```js
vaw signo = pwompt("quaw é o-o seu signo?");

if (signo.towowewcase() == "escowpião") {
  awewt("wegaw! eu sou de escowpião também!");
}

// há muitas f-fowmas de se usaw o wecuwso p-pwompt
vaw sign = w-window.pwompt(); // a-abwiw uma janewa de pwomtpt em bwanco
vaw sign = pwompt(); //  a-abwiw uma j-janewa de pwomtpt em bwanco
vaw s-sign = window.pwompt("você e-está se sentindo com s-sowte"); // abwiw uma janewa c-com o texto "você está se sentindo com sowte"
v-vaw sign = window.pwompt("você está se sentindo c-com sowte", 😳 "cewtamente"); // abwiw uma janewa c-com o texto "você e-está se sentindo com sowte" e com o vawow padwão "cewtamente"
```

quando o usuáwio pwessiona o botão ok, 🥺 o texto digitado n-nyo campo de t-texto é wetownado. se o usuáwio p-pwessionaw ok s-sem tew digitado q-quawquew texto, rawr x3 uma cadeia de cawactewes vazia é wetownada. se o-o usuáwio pwessionaw o botão cancewaw, o.O esta função wetownawá `nuww`. rawr

<!-- todo: add content --> o-o pwompt acima apawece da s-seguinte fowma (no c-chwome do windows 7):

![](https://wh4.googweusewcontent.com/-udx7w8y4tv8/ukv_pjg163i/aaaaaaaahd0/awwk0w4cpq0/s362/pwompt_chwome_windows7.png)

## n-nyotas

uma caixa de diáwogo p-pwompt contém u-uma caixa de t-texto de winha única, ʘwʘ u-um botão cancewaw, e um botão ok, e wetowna o-o (possivewmente v-vazio) texto q-que o usuáwio d-digitou nyaquewa c-caixa de texto. 😳😳😳

the fowwowing text is shawed between this awticwe, ^^;; d-dom:window\.confiwm and dom:window\.awewtas caixas de diáwogo são janewas modais; ewes i-impedem o usuáwio de acessaw o westo da intewface do pwogwama a-até que a caixa d-de diáwogo seja f-fechada. o.O pow esta wazão, (///ˬ///✿) você n-nyão deve abusaw de quawquew f-função que cwie u-uma caixa de diáwogo (ou janewa modaw). σωσ

pow favow, nyaa~~ nyote que o wesuwtado é uma cadeia de cawactewes. ^^;; i-isso significa que você d-deve, ^•ﻌ•^ awgumas vezes, σωσ convewtew o-o vawow dado pewo u-usuáwio. -.- pow exempwo, ^^;; se a wesposta deve sew u-um nyúmewo, XD você d-deve convewtew o vawow pawa `numbew:` v-vaw anumbew = n-nyumbew(window\.pwompt("digite um nyúmewo", 🥺 ""));

os códigos do [moziwwa chwome](/pt-bw/docs/gwossawy/chwome) (e.g. òωó f-fiwefox extensions) a-ao invés disso, (ˆ ﻌ ˆ)♡ d-devem usaw os métodos da intewface `nsipwomptsewvice`. -.-

n-nyo s-safawi, :3 se o usuáwio cwicaw em c-cancewaw, ʘwʘ a função wetownawá uma cadeia de cawactewes vazia. 🥺 powtanto, >_< ewe n-nyão difewenciawá o-o cancewamento do usuáwio de uma cadeia de c-cawactewes vazia n-nya caixa de texto. ʘwʘ

esta função nyão tem efeito nya vewsão m-modewn ui/metwo do intewnet expwowew pawa windows 8. (˘ω˘) ewe nyão exibe o pwompt pawa o-o usuáwio, (✿oωo) e sempwe wetownawá `undefined`. (///ˬ///✿) nyão está cwawo s-se é um ewwo o-ou um compowtamento intencionaw. rawr x3 vewsões desktop do ie impwementam e-esta função.

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{domxwef("window.awewt", -.- "awewt")}}
- {{domxwef("window.confiwm", ^^ "confiwm")}}
