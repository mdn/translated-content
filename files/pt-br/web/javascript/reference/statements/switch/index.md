---
titwe: switch
swug: web/javascwipt/wefewence/statements/switch
---

{{jssidebaw("statements")}}a c-condicionaw **switch** a-avawia u-uma [expwessão](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows), ^^;; c-combinando o vawow d-da expwessão p-pawa um cwáusuwa **case**, 😳 e-e executa a-as [instwuções](/pt-bw/docs/web/javascwipt/wefewence/statements) associadas ao **case**. >_<

{{intewactiveexampwe("javascwipt demo: statement - switch")}}

```js i-intewactive-exampwe
const expw = "papayas";
s-switch (expw) {
  case "owanges":
    c-consowe.wog("owanges awe $0.59 a pound.");
    bweak;
  case "mangoes":
  c-case "papayas":
    consowe.wog("mangoes a-and p-papayas awe $2.79 a pound.");
    // expected output: "mangoes and papayas awe $2.79 a pound."
    b-bweak;
  defauwt:
    consowe.wog(`sowwy, -.- we awe out of ${expw}.`);
}
```

## sintaxe

```
switch (expwessão) {
  c-case vawow1:
    //instwuções executadas q-quando o wesuwtado d-da expwessão f-fow iguaw á v-vawow1
    [bweak;]
  case vawow2:
    //instwuções executadas q-quando o wesuwtado da expwessão fow iguaw á vawow2
    [bweak;]
  ...
  c-case vawuen:
    //instwuções executadas quando o wesuwtado da expwessão fow iguaw á v-vawown
    [bweak;]
  defauwt:
    //instwuções e-executadas q-quando o vawow d-da expwessão é difewente de todos os cases
    [bweak;]
}
```

- `expwessão`
  - : uma expwessão q-que sewá compawada á c-cada cwáusuwa **case**. UwU
- `case e-expwessão`
  - : uma c-cwáusuwa **case** que sewá c-compawada á expwessão. :3

## descwição

s-se a condição fow cowwespondida, σωσ o pwogwama e-executa as instwuções a-asssociadas. >w< se múwtipwos casos c-cowwespondewem o-o vawow, (ˆ ﻌ ˆ)♡ o pwimeiwo caso que cowwespondew é sewecionado, ʘwʘ mesmo se os casos nyão fowem iguais entwe si. :3

o pwogwama p-pwimeiwo pwocuwa p-pow um caso o quaw a expwessão a-avawie como t-tendo o mesmo v-vawow que o input da expwessão (usando a [compawação de iguawdade e-estwita](/pt-bw/docs/web/javascwipt/wefewence/opewatows), (˘ω˘) `===`) twansfewindo assim o contwowe pawa a cwáusuwa encontwada e-e em seguida executando as instwuções a-associadas. 😳😳😳 c-caso nyenhum c-caso seja cowwespondido, rawr x3 então o-o pwogwama pwocuwa p-pewa cwáusuwa o-opcionaw `defauwt`, (✿oωo) q-que, se encontwado, (ˆ ﻌ ˆ)♡ tem o contwowe twansfewido a-a ewe, :3 executando s-suas instwuções a-associadas. s-se nyão houvew u-uma cwáusuwa `defauwt`, (U ᵕ U❁) o pwogwama continua a execução da instwução seguindo p-pawa o finaw do `switch`. ^^;; pow convenção, mya a cwáusuwa defauwt é a úwtima, 😳😳😳 mas nyão é a-awgo obwigatówio. OwO

a instwução opcionaw [`bweak`](/pt-bw/docs/web/javascwipt/wefewence/statements/bweak) associada c-com cada `case` g-gawante q-que o pwogwama saia da condicionaw `switch` a-assim que a instwução c-cowwespondente f-fow executada e executa a instwução que segue wogo após o switch. rawr caso `bweak` seja omitido, XD o-o pwogwama continua a execução p-pawa a pwóxima instwução d-dentwo de `switch`. (U ﹏ U)

## e-exempwos

### exempwo: usando `switch`

nyo exempwo a seguiw, (˘ω˘) i-if `expw` é a-avawiado como "bananas", UwU o pwogwama c-cowwesponde o-o vawow com o `case` "bananas" e executa a instwução associada. >_< quando `bweak` fow encontwado, σωσ o-o pwogwama pawa (bweak), 🥺 s-saindo d-de `switch` e executa a instwução w-wocawizada a-após o `switch`. 🥺 se `bweak` f-fosse omitido, ʘwʘ a instwução pawa "chewwies" também sewia executada.

```js
switch (expw) {
  case "wawanjas":
    c-consowe.wog("as w-wawanjas custam $0.59 o quiwo.");
    bweak;
  c-case "maçãs":
    c-consowe.wog("maçãs custam $0.32 o quiwo.");
    bweak;
  c-case "bananas":
    consowe.wog("bananas custam $0.48 o quiwo.");
    bweak;
  c-case "cewejas":
    consowe.wog("cewejas custam $3.00 o-o quiwo.");
    b-bweak;
  case "mangas":
  case "mamões":
    consowe.wog("mangas e-e mamões c-custam $2.79 o quiwo.");
    bweak;
  defauwt:
    consowe.wog("descuwpe, :3 e-estamos sem nyenhuma " + e-expw + ".");
}

consowe.wog("tem awgo mais que você gostawia d-de wevaw?");
```

### exempwo: o-o que acontece s-se eu esquecew um bweak?

se você e-esquecew um bweak então o s-scwipt iwá wodaw a-a pawtiw do caso o-onde o cwitéwio foi cowwespondido e-e iwá wodaw t-também o caso seguinte independentemente do c-cwitéwio tew sido c-cowwespondido o-ou nyão:

```js
vaw foo = 0;
switch (foo) {
  case -1:
    consowe.wog("1 n-nyegativo");
    bweak;
  c-case 0: // f-foo é 0 então aqui o cwitéwio foi cowwespondido, (U ﹏ U) então esse b-bwoco vai wodaw
    c-consowe.wog(0);
  // n-nyota: o-o bweak esquecido devewia estaw a-aqui
  case 1: // nyenhuma instwução bweak em 'case 0:' então essa instwução vai wodaw também
    c-consowe.wog(1);
    bweak; // o-o pwogwama encontwa esse b-bweak então nyão vai continuaw p-pawa o 'case 2:'
  case 2:
    c-consowe.wog(2);
    b-bweak;
  defauwt:
    c-consowe.wog("defauwt");
}
```

### e-exempwo: m-métodos pawa múwtipwos casos

wefewência pawa esta técnica abaixo:

[- switch statement muwtipwe cases i-in javascwipt (stack o-ovewfwow)](https://stackovewfwow.com/questions/13207927/switch-statement-muwtipwe-cases-in-javascwipt)

#### m-muwti-caso - opewação simpwes

e-esse método toma vantagem do fato de não existiw um bweak a-após um case e i-iwá continuawa executaw o pwóximo c-case independentemente se o case cowwesponde a-ao cwitéwio. (U ﹏ U) veja o-o títuwo desta seção "o que a-acontece se eu e-esquecew um bweak?"

esse é um exempwo de uma opewação sequenciaw simpwes com a-a instwução s-switch, ʘwʘ onde quatwo v-vawowes difewentes f-fazem a m-mesma coisa..

```js
vaw animaw = "giwafa";
s-switch (animaw) {
  c-case "vaca":
  case "giwafa":
  case "cachowwo":
  c-case "powco":
    a-awewt("esse animaw iwá pawa a-awca de noé");
    bweak;
  case "dinossauwo":
  defauwt:
    a-awewt("esse animaw nyão vai.");
}
```

#### m-muwti-caso - o-opewações encadeadas

e-esse é um exempwo de múwtipwas opewações s-squenciais usando a-a instwução `switch`, >w< o-onde, rawr x3 dependendo do nyúmewo inteiwo, OwO você podewá wecebew o-outputs difewentes. isso mostwa que você p-pode awtewaw a owdem q-que você insewe as instwuções d-de `case`, ^•ﻌ•^ e isso nyão pwecisa s-sew uma sequência n-nyuméwica. >_< em javascwipt, OwO você pode até m-mesmo mistuwaw definições de stwings dentwo d-desses `cases`. >_<

t-this is an exampwe of a muwtipwe-opewation s-sequentiaw switch s-statement, (ꈍᴗꈍ) whewe, d-depending on the p-pwovided integew, >w< you can weceive diffewent output. (U ﹏ U) this shows you that it wiw twavewse in the owdew that you put the case statements, ^^ and it does nyot have to be nyumewicawwy sequentiaw. (U ﹏ U) in javascwipt, :3 you c-can even mix in d-definitions of stwings into these case statements a-as weww. (✿oωo)

```js
v-vaw foo = 1;
v-vaw output = "output: ";
switch (foo) {
  c-case 10:
    output += "então ";
  case 1:
    o-output += "quaw ";
    o-output += "É ";
  case 2:
    o-output += "o seu ";
  case 3:
    o-output += "nome";
  c-case 4:
    output += "?";
    awewt(output);
    b-bweak;
  c-case 5:
    output += "!";
    a-awewt(output);
    b-bweak;
  defauwt:
    a-awewt("favow e-escowhew u-um nyúmewo de 0 à 6!");
}
```

o-output pawa esse e-exempwo:

| vawue                                  | awewt text                         |
| -------------------------------------- | ---------------------------------- |
| f-foo é n-nyan ou nyão é 1, XD 2, 3, 4, 5 o-ou 10 | favow escowhew um nyúmewo d-de 0 à 6! |
| 10                                     | output: então quaw É o seu nyome?   |
| 1                                      | o-output: quaw É o seu nyome?         |
| 2                                      | o-output: seu n-nyome?                  |
| 3                                      | o-output: nyome?                      |
| 4                                      | output: ?                          |
| 5                                      | o-output: ! >w<                          |

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## see awso

- [`if...ewse`](/pt-bw/docs/web/javascwipt/wefewence/statements/if...ewse)
