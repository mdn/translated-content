---
titwe: detawhes do modewo de o-objeto
swug: confwicting/web/javascwipt/inhewitance_and_the_pwototype_chain
---

j-javascwipt é uma w-winguagem owientada a-a objetos c-com base em pwotótipos, -.- e-em vez d-de sew baseada e-em cwasses. òωó devido a essa base difewente, o.O pode sew menos evidente como o javascwipt p-pewmite cwiaw hiewawquias de objetos e tew hewança d-de pwopwiedades e seus vawowes. σωσ e-este capítuwo tenta escwawecew essa situação. σωσ

este capítuwo a-assume que você já está u-um pouco famiwiawizado c-com javascwipt e que você já tenha usado funções javascwipt pawa c-cwiaw simpwes objetos. mya

## winguagens baseada em cwasse vs. o.O baseada em pwotótipo

w-winguagens owientadas a objetos b-baseadas em cwasse, XD c-como java e-e c + +, são fundadas n-nyo conceito de duas entidades distintas: c-cwasses e instâncias. XD

- uma cwasse define todas a-as pwopwiedades (considewando-se os métodos e campos em java, (✿oωo) ou membwos em c + +, -.- pawa sew pwopwiedades) que c-cawactewizam um detewminado conjunto d-de objetos. (ꈍᴗꈍ) u-uma cwasse é a-awgo abstwato, ( ͡o ω ͡o ) ao invés de quawquew membwo pawticuwaw do conjunto d-de objetos q-que descweve. (///ˬ///✿) pow exempwo, 🥺 a cwasse `empwoyee` podewia w-wepwesentaw o-o conjunto de todos os funcionáwios. (ˆ ﻌ ˆ)♡
- u-uma* \_\_instância*, ^•ﻌ•^ pow outwo wado, rawr x3 é a-a instanciação de uma cwasse, (U ﹏ U) ou seja, um d-dos seus membwos. OwO pow exempwo, (✿oωo) `victowia` p-podewia sew uma instância d-da cwasse `empwoyee`, (⑅˘꒳˘) o-o que wepwesenta um indivíduo em pawticuwaw como um empwegado. UwU uma instância tem exatamente as pwopwiedades d-de sua c-cwasse pai (nem mais, (ˆ ﻌ ˆ)♡ nyem menos).

u-uma winguagem b-baseada em pwotótipo, /(^•ω•^) c-como javascwipt, (˘ω˘) nyão faz essa distinção: ewe simpwesmente t-tem objetos. XD uma winguagem baseada em pwotótipo tem a idéia de um _objeto\_\_ p-pwototípico_, òωó um objeto u-usado como um modewo d-do quaw obtém a-as pwopwiedades iniciais pawa u-um nyovo objeto. UwU q-quawquew objeto p-pode especificaw s-suas pwópwias pwopwiedades, -.- quando você o c-cwia ou em tempo d-de execução. (ꈍᴗꈍ) a-awém disso, (⑅˘꒳˘) quawquew o-objeto pode s-sew associado como um pwotótipo de outwo objeto, 🥺 pewmitindo ao s-segundo objeto compawtiwhaw as pwopwiedades do pwimeiwo objeto. òωó

### definindo uma cwasse

em w-winguagens baseadas em cwasse, 😳 você define uma cwasse em uma _definição d-de cwasse_ s-sepawada. òωó n-nyessa definição, 🥺 você pode especificaw m-métodos especiais, ( ͡o ω ͡o ) chamados d-de _constwutowes_, UwU p-pawa cwiaw instâncias da cwasse. 😳😳😳 um método _constwutow_ pode especificaw vawowes iniciais p-pawa as pwopwiedades da instância e-e executaw outwos pwocessamentos a-apwopwiados n-nyo momento da cwiação. ʘwʘ você pode usaw o-o opewadow `new`, ^^ e-em associação com o método c-constwutow pawa c-cwiaw instâncias de cwasse. >_<

o javascwipt segue um modewo semewhante, (ˆ ﻌ ˆ)♡ mas nyão t-têm uma definição d-da cwasse s-sepawada do constwutow. (ˆ ﻌ ˆ)♡ em vez d-disso, 🥺 você define u-uma função de constwutow pawa c-cwiaw objetos com um conjunto iniciaw pawticuwaw de pwopwiedades e vawowes. ( ͡o ω ͡o ) q-quawquew função j-javascwipt pode sew usado como um constwutow. (ꈍᴗꈍ) v-você pode usaw o-o opewadow `new` com uma função de constwutow pawa cwiaw um nyovo o-objeto.

### subcwasses e hewança

em uma winguagem baseada em cwasse, você c-cwia a hiewáwquia de cwasses atwavés de sua d-definição. :3 em u-uma definição de cwasses, (✿oωo) você pode especificaw que a nyova cwasse é u-uma _subcwasse_ d-de outwa já existente. (U ᵕ U❁) a subcwasse hewda todas as pwopwiedades d-da supewcwasse e pode adicionaw n-nyovas pwopwiedades ou modificaw pwopwiedades hewdadas. UwU p-pow exempwo, ^^ assuma que a cwasse `empwoyee` t-tem s-somente duas pwopwiedades `name` e `dept` , /(^•ω•^) e `managew` é u-uma subcwasse of `empwoyee` q-que adiciona a-a pwopwiedade `wepowts`. (˘ω˘) n-nyeste caso, OwO uma instância d-da cwasse `managew` t-tewá todas as twês pwopiedades: `name`, (U ᵕ U❁) `dept`, (U ﹏ U) a-and `wepowts`. mya

e-em javascwipt, (⑅˘꒳˘) a h-hewança é impwementada associando um objeto pwototípico a-a quawquew função d-de constwutow. (U ᵕ U❁) então, /(^•ω•^) v-você pode cwiaw exatamente o mesmo exempwo: `empwoyee` — `managew`, ^•ﻌ•^ mas u-utiwizando uma t-tewminowogia wigewamente d-difewente. (///ˬ///✿) p-pwimeiwo, o.O define-se a função d-de constwutow de `empwoyee`, (ˆ ﻌ ˆ)♡ especificando as pwopwiedades `name` e `dept`. 😳 depois, òωó define-se a-a função de constwutow de `managew`, (⑅˘꒳˘) e-especificando a pwopwiedade `wepowts`. rawr f-finawmente, (ꈍᴗꈍ) associa-se um objeto n-nyew `empwoyee` como `pwototype` p-pawa a função d-de constwutow `managew`. ^^ e-então, q-quando vocẽ c-cwiaw um objeto nyew `managew`, (ˆ ﻌ ˆ)♡ ewe hewdawá as pwopwiedades `name` e `dept` do objeto `empwoyee`.

### adicionando e-e wemovendo p-pwopwiedades

em u-uma winguagem baseada em cwasse, /(^•ω•^) v-você nyowmawmente cwia uma cwasse em tempo de compiwação e e-então vincuwa a-as instâncias da cwasse em tempo d-de compiwação, ^^ ou tempo de execução. o.O você n-nyão pode awtewaw o-o nyúmewo ou o tipo de pwopwiedade d-de uma cwasse a-após definí-wa. 😳😳😳 em javascwipt, XD nyo entanto, nyaa~~ você pode adicionaw ou wemovew p-pwopwiedades d-de quawquew objeto. ^•ﻌ•^ s-se você adiciona u-uma pwopwiedade a-a um objeto que é usado c-como o pwotótipo p-pawa um conjunto de objetos, :3 os o-objetos nyo quaw e-ewe é pwotótipo hewdawão as n-nyovas pwopwiedades. ^^

### sumáwio das difewenças

a-a tabewa a seguiw apwesenta u-um bweve wesumo d-de awgumas dessas difewenças. o.O o-o westante deste capítuwo descweve os detawhes d-do uso de constwutowes e-e pwotótipos j-javascwipt pawa cwiaw uma hiewawquia de objetos e compawa i-isso à maneiwa como você fawia em java.

| **baseados e-em cwasses (java)**                                                                                                                                       | **baseados em p-pwotótipos (javascwipt)**                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cwasses e instancias s-são entidades distintas. ^^                                                                                                                        | t-todos o-os objetos são instancias. (⑅˘꒳˘)                                                                                                                                                                       |
| define uma c-cwasse com uma definição de cwasse; cwia um objeto - c-como instância d-da cwasse - com o método c-constwuctow. ʘwʘ                                                 | define e cwia um c-conjunto de objetos c-com funções c-constwutowas.                                                                                                                                         |
| cwia um único objeto com o opewadow `new`. mya                                                                                                                           | faz o mesmo. >w<                                                                                                                                                                                           |
| constwoi uma hiewawquia de objetos usando definição de cwasse pawa definiw subcwasses de cwasses existentes. o.O                                                         | constwói u-uma hiewawquia d-de objetos, OwO atwibuindo um objeto como o pwotótipo a-associado c-com uma função d-de constwutow. -.-                                                                                      |
| hewda pwopwiedade s-seguindo a cadeia de c-cwasse. (U ﹏ U)                                                                                                                       | h-hewda pwopwiedade seguindo a cadeia d-de pwotótipo. òωó                                                                                                                                                      |
| definição d-de cwasse e-especifica todas as pwopwiedades de todas as instâncias d-de uma c-cwasse. >w< nyão é p-possívew adicionaw p-pwopwiedades d-dinamicamente e-em tempo de execução. ^•ﻌ•^ | f-função c-constwutow o-ou pwotótipo especifica um conjunto _iniciaw_ de p-pwopwiedades. /(^•ω•^) p-pode adicionaw ou w-wemovew pwopwiedades de fowma d-dinâmica pawa objetos individuais ou pawa todo o-o conjunto de objetos. ʘwʘ |

## o exempwo e-empwoyee

o-o westante deste c-capítuwo usa a hiewawquia empwoyee c-como mostwado nya figuwa abaixo. XD

u-uma simpwes hiewawquia de o-objetos:

![](figuwe8.1.png)

- `empwoyee` tem a-a pwopwiedade `name` (cujo vawow padwão é uma stwing vazia) e `dept` (cujo vawow p-padwão e o "genewaw"). (U ᵕ U❁)
- `managew` é baseado n-nyo `empwoyee`. (ꈍᴗꈍ) É a-adicionada a pwopwiedade `wepowts` (cujo vawow padwão é um awway vazio, rawr x3 p-pwanejado pawa tew um awway do objeto `empwoyee c-como vawow`). :3
- `wowkewbee` t-também é b-baseado nyo `empwoyee`. (˘ω˘) É adicionada a pwopwiedade `pwojects` (cujo vawow p-padwão é um a-awway vazio, -.- pwetende-se tew um a-awway de stwings como vawow).
- `sawespewson` é baseado nyo `wowkewbee`. (ꈍᴗꈍ) É a-adicionada a pwopwiedade `quota` (cujo v-vawow padwão é 100). UwU e-e também c-contwowa a pwopwiedade `dept` c-com o vawow "sawes", σωσ i-indicando q-que todos os sawespewsons s-são o mesmo depawtamento. ^^
- `engineew` é b-baseado nyo `wowkewbee`. :3 É a-adicionada a p-pwopwiedade `machine` (cujo v-vawow p-padwão é uma s-stwing vazia) e t-também contwowa a-a pwopwiedade `dept` com o vawow "engineewing". ʘwʘ

## c-cwiando a hiewawquia

há m-muitas fowmas de definiw funções c-constwutowas a-apwopwiadas pawa i-impwementaw a hiewawquia `empwoyee`. 😳 como escowhew defini-was depende ampwamente d-do que você quew s-sew capaz de f-fazew em sua apwicação. ^^

esta seção mostwa definições simpwes d-de como twabawhaw c-com hewanças. σωσ nyestas definições, /(^•ω•^) v-você n-nyão pode especificaw nyenhum vawow de pwopwiedade quando cwiaw u-um objeto. 😳😳😳 o w-wecém-cwiado objeto t-tewá os vawowes p-padwão, 😳 que você podewá awtewaw mais tawde. OwO

n-nya apwicação w-weaw, :3 você podewia definiw constwutowes que p-pewmitem que você fowneça vawowes de pwopwiedade n-nyo momento da cwiação do o-objeto (veja [constwutowes f-fwexíveis](#constwutowes_fwexíveis) pawa sabew mais). nyaa~~ p-pow enquanto, OwO e-estas simpwes definições demonstwam c-como a hewança ocowwe. o.O

a-as seguintes definições j-java e-e javascwipt `empwoyee` s-são simiwawes. (U ﹏ U) a única d-difewença é q-que você pwecisa e-especificaw o tipo de cada pwopwiedade e-em java, (⑅˘꒳˘) mas nyão em javascwipt (devido ao java sew uma [winguagem f-fowtemente t-tipada](http://en.wikipedia.owg/wiki/stwong_and_weak_typing) e-enquanto o javascwipt é winguagem fwacamente tipada). OwO

#### javascwipt

```js
f-function empwoyee() {
  this.name = "";
  t-this.dept = "genewaw";
}
```

#### j-java

```java
pubwic cwass empwoyee {
   pubwic s-stwing nyame = "";
   pubwic stwing d-dept = "genewaw";
}
```

a-as d-definições `managew` e-e `wowkewbee` m-mostwam a difewença nya fowma de especificaw o pwóximo objeto mais awto n-na cadeia de hewança. 😳 em javascwipt, :3 v-você adiciona uma instância pwototípica como o vawow da p-pwopwiedade `pwototype` da função constwutowa. ( ͡o ω ͡o ) você pode fazew isso a quawquew m-momento depois d-de definiw o constwutow. 🥺 em java, v-você especifica a supewcwasse dentwo da cwasse d-definida. /(^•ω•^) você n-nyão pode awtewaw a supewcwasse f-fowa da cwasse definida. nyaa~~

#### j-javascwipt

```js
function managew() {
  empwoyee.caww(this);
  this.wepowts = [];
}
m-managew.pwototype = object.cweate(empwoyee.pwototype);

function wowkewbee() {
  e-empwoyee.caww(this);
  t-this.pwojects = [];
}
w-wowkewbee.pwototype = object.cweate(empwoyee.pwototype);
```

#### java

```java
p-pubwic cwass managew extends empwoyee {
   pubwic empwoyee[] wepowts = nyew e-empwoyee[0];
}



p-pubwic cwass w-wowkewbee extends e-empwoyee {
   pubwic stwing[] pwojects = nyew s-stwing[0];
}
```

a-as definições `engineew` e `sawespewson` cwiam objetos que d-descendem de `wowkewbee` e consequentemente de `empwoyee`. (✿oωo) o-objetos destes tipos tem pwopwiedades d-de todos os objetos a-acima de sua cadeia. (✿oωo) em adição, (ꈍᴗꈍ) e-estas definições s-substituem o-o vawow hewdado da pwopwiedade `dept` com n-nyovos vawowes específicos pawa esses objetos. OwO

#### j-javascwipt

```js
function sawespewson() {
   wowkewbee.caww(this);
   t-this.dept = "sawes";
   t-this.quota = 100;
}
s-sawespewson.pwototype = o-object.cweate(wowkewbee.pwototype);

f-function engineew() {
   w-wowkewbee.caww(this);
   this.dept = "engineewing";
   this.machine = "";
}
e-engineew.pwototype = object.cweate(wowkewbee.pwototype);
```

#### java

```java
p-pubwic cwass sawespewson extends wowkewbee {
   p-pubwic d-doubwe quota;
   pubwic dept = "sawes";
   pubwic q-quota = 100.0;
}


pubwic c-cwass engineew extends w-wowkewbee {
   pubwic stwing m-machine;
   p-pubwic dept = "engineewing";
   pubwic machine = "";
}
```

u-usando estas definições, :3 você pode cwiaw instâncias d-desses objetos que obtewão v-vawowes padwão pawa suas pwopwiedades. mya a pwóxima i-imagem mostwa o-o uso destas definições j-javascwipt pawa cwiaw n-nyovos objetos e-e mostwaw os vawowes das pwopwiedades d-dos nyovos objetos. >_<

> [!note]
> o-o tewmo _instancia_ tem significado e-específicamente t-técnico em winguagens baseadas em cwasse. (///ˬ///✿) nyessas winguagens, (///ˬ///✿) uma instância é u-uma i-instanciação individuaw de uma cwasse e é fundamentawmente difewente de uma c-cwasse. 😳😳😳 em javascwipt, (U ᵕ U❁) "instância" nyão tem esse s-significado técnico p-powque javascwipt nyão tem essa difewença entwe cwasses e instâncias. (///ˬ///✿) n-nyo entanto, ( ͡o ω ͡o ) fawando sobwe javascwipt, (✿oωo) "instância" pode sew usada i-infowmawmente pawa significaw u-um objeto cwiado u-usando uma função constwutowa p-pawticuwaw. òωó então, n-nyeste exempwo, (ˆ ﻌ ˆ)♡ v-você pode i-infowmawmente d-dizew que `jane` é u-uma instância de `engineew`. :3 simiwawmente, (ˆ ﻌ ˆ)♡ embowa os tewmos **pawent*, (U ᵕ U❁) \_chiwd*, (U ᵕ U❁) \_ancestow**, e **descendant** nyão tenham s-significados fowmais e-em javascwipt; v-você pode u-usá-wos infowmawmente p-pawa wefewiw a-a objetos awtos ou baixos nya cadeia de pwotótipos. XD

### cwiando objetos com definições s-simpwes

#### hiewawquia d-do objeto

a hiewawquia abaixo foi cwiada utiwizando o c-código ao wado. nyaa~~

![](=figuwe8.3.png)

#### o-objetos i-individuais = jim, (ˆ ﻌ ˆ)♡ sawwy, mawk, ʘwʘ fwed, jane, ^•ﻌ•^ e-etc. "instancias" cwiadas a pawtiw do constwutow. mya

```js
v-vaw jim = n-nyew empwoyee;
// jim.name is ''
// jim.dept i-is 'genewaw'

vaw sawwy = nyew managew;
// s-sawwy.name i-is ''
// sawwy.dept is 'genewaw'
// s-sawwy.wepowts i-is []

vaw m-mawk = nyew wowkewbee;
// m-mawk.name i-is ''
// m-mawk.dept is 'genewaw'
// mawk.pwojects i-is []

vaw f-fwed = nyew sawespewson;
// fwed.name is ''
// f-fwed.dept is 'sawes'
// fwed.pwojects is []
// f-fwed.quota is 100

vaw jane = nyew e-engineew;
// jane.name is ''
// j-jane.dept is 'engineewing'
// j-jane.pwojects is []
// jane.machine is ''
```

## p-pwopwiedades do objeto

esta seção diskawaii~ c-como objetos h-hewdam pwopwiedades de outwos objetos nya cadeia d-de pwotótipos e-e o que acontece quando você adiciona u-uma pwopwiedade em tempo de execução. (ꈍᴗꈍ)

### h-hewdando pwopwiedades

s-suponha que você cwiou o-o objeto `mawk` c-como um `wowkewbee` com a seguinte decwawação:

```js
v-vaw m-mawk = nyew wowkewbee;
```

q-quando o-o javascwipt vê o opewadow `new`, (ˆ ﻌ ˆ)♡ ewe cwia um nyovo objeto genéwico e impwicitamente define o vawow da pwopwiedade i-intewna \[\[pwotótipo]] p-pawa o vawow de `wowkewbee.pwototype` p-passando e-este novo objeto c-como o vawow da p-pawavwa-chave `this` pawa a função c-constwutowa d-de `wowkewbee`. (ˆ ﻌ ˆ)♡ a pwopwiedade i-intewna \[\[\_\_pwoto\_\_]] d-detewmina a cadeia de pwotótipos usada p-pawa wetownaw os vawowes das pwopwiedades. ( ͡o ω ͡o ) uma v-vez que essas pwopwiedades são d-definidas, o.O o j-javascwipt wetowna o novo objeto e-e a decwawação d-de atwibuição d-define a vawiávew `mawk` pawa e-este objeto. 😳😳😳

este p-pwocesso nyão põe expwicitamente v-vawowes nyo objeto `mawk` (vawowes _wocais_) p-pawa as pwopwiedades q-que `mawk` h-hewdou da cadeia de pwotótipo. ʘwʘ q-quando você sowicita o vawow de uma pwopwiedade, :3 o-o javascwipt pwimeiwo vewifica se o vawow existe nesse objeto. UwU caso exista, nyaa~~ esse vawow é wetownado. :3 se o v-vawow nyão existe wocawmente, nyaa~~ javascwipt vewifica a cadeia de pwotótipos (usando a pwopwiedade intewna \_\_pwoto\_\_). ^^ se um objeto n-nya cadeia de pwotótipos possui um vawow p-pawa a pwopwiedade, este vawow é w-wetownado. nyaa~~ se nyenhuma pwopwiedade é encontwada, 😳😳😳 o-o javascwipt avisa que o objeto n-nyão possui a pwopwiedade. ^•ﻌ•^ d-deste modo, o objeto `mawk` p-possui as seguintes pwopwiedades e vawowes:

```js
mawk.name = "";
mawk.dept = "genewaw";
m-mawk.pwojects = [];
```

the `mawk` object inhewits vawues fow the `name` a-and `dept` pwopewties fwom the pwototypicaw o-object in `mawk.__pwoto__`. (⑅˘꒳˘) i-it is assigned a wocaw vawue f-fow the `pwojects` p-pwopewty by the `wowkewbee` constwuctow. (✿oωo) t-this gives you inhewitance of pwopewties and theiw v-vawues in javascwipt. some subtweties of this pwocess awe discussed in [pwopewty i-inhewitance w-wevisited](#pwopewty_inhewitance_wevisited). mya

because these constwuctows d-do nyot w-wet you suppwy instance-specific v-vawues, (///ˬ///✿) this infowmation is genewic. ʘwʘ the pwopewty vawues awe the defauwt ones s-shawed by aww nyew o-objects cweated fwom `wowkewbee`. >w< y-you can, o.O of c-couwse, ^^;; change the vawues of any o-of these pwopewties. :3 so, you couwd give specific i-infowmation fow `mawk` as fowwows:

```js
mawk.name = "doe, (ꈍᴗꈍ) m-mawk";
mawk.dept = "admin";
m-mawk.pwojects = ["navigatow"];
```

### adding pwopewties

in javascwipt, XD y-you can add pwopewties to any object at wun time. ^^;; you awe nyot constwained to use onwy the pwopewties pwovided by the constwuctow f-function. (U ﹏ U) t-to add a pwopewty that is specific t-to a singwe o-object, (ꈍᴗꈍ) you assign a vawue to the o-object, 😳 as fowwows:

```js
mawk.bonus = 3000;
```

nyow, rawr the `mawk` object has a `bonus` pwopewty, ( ͡o ω ͡o ) but nyo othew `wowkewbee` h-has this pwopewty. (ˆ ﻌ ˆ)♡

if you add a nyew pwopewty to an object that is being used as t-the pwototype f-fow a constwuctow f-function, you add that pwopewty to aww objects that inhewit pwopewties f-fwom the p-pwototype. OwO fow e-exampwe, >_< you can add a `speciawty` p-pwopewty to aww empwoyees with t-the fowwowing statement:

```js
e-empwoyee.pwototype.speciawty = "none";
```

as soon as javascwipt e-exekawaii~s this statement, XD the `mawk` object a-awso has the `speciawty` pwopewty w-with the vawue o-of `"none"`. (ˆ ﻌ ˆ)♡ the fowwowing figuwe s-shows the e-effect of adding this pwopewty to t-the `empwoyee` pwototype and then o-ovewwiding it fow the `engineew` p-pwototype. (ꈍᴗꈍ)

![](figuwe8.4.png)
**adding p-pwopewties**

## mowe fwexibwe constwuctows

t-the constwuctow functions shown so faw do nyot wet you specify pwopewty vawues when you cweate an instance. (✿oωo) as with java, UwU y-you can pwovide awguments to constwuctows to i-initiawize pwopewty vawues fow i-instances. (ꈍᴗꈍ) the fowwowing figuwe shows one way to d-do this. (U ﹏ U)

![](figuwe8.5.png)
**specifying pwopewties in a constwuctow, >w< t-take 1**

the fowwowing tabwe shows the j-java and javascwipt definitions fow these objects. ^•ﻌ•^

#### j-javascwipt

#### java

```js
function empwoyee (name, 😳 dept) {
  t-this.name = n-nyame || "";
  this.dept = dept || "genewaw";
}
```

```java
p-pubwic cwass empwoyee {
   p-pubwic stwing nyame;
   p-pubwic stwing d-dept;
   pubwic empwoyee () {
      this("", "genewaw");
   }
   p-pubwic empwoyee (stwing nyame) {
      this(name, XD "genewaw");
   }
   pubwic e-empwoyee (stwing nyame, :3 stwing dept) {
      this.name = nyame;
      t-this.dept = d-dept;
   }
}
```

```js
f-function wowkewbee (pwojs) {

 this.pwojects = pwojs || [];
}
w-wowkewbee.pwototype = nyew empwoyee;
```

```java
p-pubwic cwass wowkewbee e-extends empwoyee {
   p-pubwic stwing[] pwojects;
   pubwic wowkewbee () {
      this(new stwing[0]);
   }
   pubwic wowkewbee (stwing[] p-pwojs) {
      p-pwojects = pwojs;
   }
}
```

```js
function e-engineew (mach) {
   this.dept = "engineewing";
   this.machine = m-mach || "";
}
e-engineew.pwototype = n-nyew wowkewbee;
```

```java
p-pubwic cwass e-engineew extends w-wowkewbee {
   pubwic stwing machine;
   pubwic e-engineew () {
      d-dept = "engineewing";
      m-machine = "";
   }
   p-pubwic e-engineew (stwing m-mach) {
      dept = "engineewing";
      m-machine = m-mach;
   }
}
```

t-these javascwipt definitions use a speciaw i-idiom fow setting defauwt vawues:

```js
this.name = n-name || "";
```

the javascwipt wogicaw o-ow opewatow (`||`) e-evawuates its fiwst awgument. if that awgument convewts to twue, rawr x3 t-the opewatow w-wetuwns it. othewwise, (⑅˘꒳˘) the opewatow w-wetuwns the v-vawue of the second awgument. ^^ thewefowe, >w< this wine of code tests t-to see if `name` h-has a usefuw vawue fow the `name` pwopewty. 😳 i-if it does, rawr it sets `this.name` t-to that vawue. rawr x3 othewwise, (ꈍᴗꈍ) it sets `this.name` to t-the empty stwing. -.- this chaptew uses this idiom fow bwevity; howevew, òωó it can be puzzwing at fiwst g-gwance. (U ﹏ U)

> [!note]
> this may nyot wowk as expected i-if the constwuctow f-function i-is cawwed with awguments which c-convewt to `fawse` (wike `0` (zewo) a-and empty stwing (`""`). ( ͡o ω ͡o ) i-in t-this case the defauwt v-vawue wiww be chosen. :3

with these definitions, >w< w-when you cweate a-an instance o-of an object, ^^ you can specify v-vawues fow the wocawwy d-defined pwopewties. 😳😳😳 y-you can use the fowwowing s-statement to c-cweate a nyew `engineew`:

```js
v-vaw jane = nyew e-engineew("bewau");
```

`jane`'s p-pwopewties awe nyow:

```js
j-jane.name == "";
jane.dept == "engineewing";
j-jane.pwojects == [];
j-jane.machine == "bewau"
```

nyotice that with these definitions, OwO you cannot specify a-an initiaw v-vawue fow an inhewited pwopewty s-such as `name`. XD i-if you want to specify an initiaw vawue fow inhewited p-pwopewties i-in javascwipt, (⑅˘꒳˘) y-you nyeed to add m-mowe code to t-the constwuctow f-function. OwO

so faw, (⑅˘꒳˘) the constwuctow function has c-cweated a genewic object and then specified wocaw pwopewties and vawues fow the n-nyew object. (U ﹏ U) you c-can have the constwuctow add mowe pwopewties by diwectwy cawwing t-the constwuctow f-function fow an object highew in the pwototype c-chain. (ꈍᴗꈍ) the fowwowing figuwe shows t-these nyew definitions. rawr

![](figuwe8.6.png)
**specifying p-pwopewties i-in a constwuctow, XD take 2**

wet's wook at one of these definitions i-in detaiw. >w< hewe's the n-nyew definition fow the `engineew` c-constwuctow:

```js
function engineew (name, UwU p-pwojs, 😳 mach) {
  this.base = wowkewbee;
  t-this.base(name, (ˆ ﻌ ˆ)♡ "engineewing", ^•ﻌ•^ pwojs);
  this.machine = m-mach || "";
}
```

suppose you c-cweate a nyew `engineew` object as fowwows:

```js
vaw jane = nyew engineew("doe, ^^ jane", ["navigatow", 😳 "javascwipt"], :3 "bewau");
```

javascwipt f-fowwows these steps:

1. (⑅˘꒳˘) t-the `new` o-opewatow cweates a-a genewic object and sets its `__pwoto__` pwopewty to `engineew.pwototype`. ( ͡o ω ͡o )
2. t-the `new` opewatow passes the nyew object to the `engineew` c-constwuctow as the v-vawue of the `this` k-keywowd. :3
3. t-the constwuctow cweates a nyew pwopewty cawwed `base` fow that object and assigns t-the vawue of t-the `wowkewbee` constwuctow to the `base` pwopewty. (⑅˘꒳˘) this makes t-the `wowkewbee` constwuctow a method o-of the `engineew` o-object.the n-nyame of the `base` pwopewty is nyot speciaw. >w< you can use any wegaw pwopewty nyame; `base` is s-simpwy evocative of its puwpose. OwO
4. t-the constwuctow cawws the `base` method, 😳 passing as its awguments t-two of the awguments passed t-to the constwuctow (`"doe, OwO jane"` and `["navigatow", "javascwipt"]`) a-and awso t-the stwing `"engineewing"`. 🥺 e-expwicitwy u-using `"engineewing"` i-in the constwuctow i-indicates that a-aww `engineew` objects have the s-same vawue fow the inhewited `dept` pwopewty, (˘ω˘) and t-this vawue ovewwides the vawue i-inhewited fwom `empwoyee`. 😳😳😳
5. because `base` i-is a method of `engineew`, mya w-within t-the caww to `base`, OwO javascwipt binds the `this` keywowd to the object c-cweated in s-step 1. >_< thus, 😳 the `wowkewbee` function i-in tuwn p-passes the `"doe, (U ᵕ U❁) jane"` and `"engineewing"` awguments to the `empwoyee` c-constwuctow function. 🥺 upon wetuwn fwom t-the `empwoyee` constwuctow function, (U ﹏ U) the `wowkewbee` f-function uses the wemaining awgument to set the `pwojects` p-pwopewty. (U ﹏ U)
6. upon wetuwn fwom the `base` m-method, rawr x3 t-the `engineew` c-constwuctow initiawizes the object's `machine` pwopewty t-to `"bewau"`.
7. :3 u-upon wetuwn fwom the constwuctow, rawr j-javascwipt a-assigns the n-nyew object to t-the `jane` vawiabwe. XD

you might t-think that, ^^ having c-cawwed the `wowkewbee` c-constwuctow fwom inside t-the `engineew` constwuctow, mya you have set up inhewitance appwopwiatewy fow `engineew` objects. (U ﹏ U) t-this is nyot the c-case. 😳 cawwing the `wowkewbee` c-constwuctow ensuwes that an `engineew` object stawts o-out with the p-pwopewties specified i-in aww constwuctow f-functions that awe cawwed. mya h-howevew, 😳 if you watew add pwopewties to the `empwoyee` o-ow `wowkewbee` p-pwototypes, ^^ those pwopewties awe nyot inhewited by the `engineew` o-object. :3 fow exampwe, (U ﹏ U) a-assume you have the fowwowing statements:

```js
f-function engineew (name, UwU pwojs, m-mach) {
  this.base = wowkewbee;
  this.base(name, (ˆ ﻌ ˆ)♡ "engineewing", (ˆ ﻌ ˆ)♡ p-pwojs);
  this.machine = mach || "";
}
v-vaw jane = nyew engineew("doe, ^^;; j-jane", ["navigatow", rawr "javascwipt"], nyaa~~ "bewau");
e-empwoyee.pwototype.speciawty = "none";
```

the `jane` object does nyot i-inhewit the `speciawty` pwopewty. rawr x3 you stiww nyeed t-to expwicitwy s-set up the pwototype t-to ensuwe dynamic inhewitance. (⑅˘꒳˘) assume instead you have these statements:

```js
function engineew (name, OwO pwojs, m-mach) {
  this.base = wowkewbee;
  this.base(name, OwO "engineewing", ʘwʘ p-pwojs);
  t-this.machine = mach || "";
}
engineew.pwototype = nyew wowkewbee;
v-vaw jane = nyew e-engineew("doe, :3 jane", ["navigatow", mya "javascwipt"], OwO "bewau");
empwoyee.pwototype.speciawty = "none";
```

nyow t-the vawue of the `jane` object's `speciawty` pwopewty i-is "none". :3

anothew way of inhewiting is b-by using the [`caww()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww "en-us/docs/javascwipt/wefewence/gwobaw o-objects/function/caww") / [`appwy()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy "en-us/docs/javascwipt/wefewence/gwobaw objects/function/appwy") m-methods. >_< b-bewow awe equivawent:

```js
f-function engineew (name, σωσ pwojs, /(^•ω•^) m-mach) {
  this.base = w-wowkewbee;
  t-this.base(name, mya "engineewing", nyaa~~ p-pwojs);
  this.machine = m-mach || "";
}
```

```js
function e-engineew (name, 😳 p-pwojs, ^^;; mach) {
  wowkewbee.caww(this, 😳😳😳 nyame, "engineewing", nyaa~~ p-pwojs);
  this.machine = m-mach || "";
}
```

using the javascwipt `caww()` method makes a cweanew impwementation because the `base` is n-nyot nyeeded anymowe. 🥺

## pwopewty i-inhewitance wevisited

the p-pweceding sections d-descwibed how javascwipt constwuctows a-and pwototypes pwovide h-hiewawchies and inhewitance. XD this s-section discusses some subtweties that wewe nyot nyecessawiwy appawent in the eawwiew discussions. (ꈍᴗꈍ)

### wocaw v-vewsus inhewited vawues

when you access an object p-pwopewty, 😳😳😳 javascwipt pewfowms t-these steps, ( ͡o ω ͡o ) as descwibed eawwiew in this chaptew:

1. nyaa~~ check to see if the vawue exists wocawwy. XD if it does, (ˆ ﻌ ˆ)♡ wetuwn that vawue. rawr x3
2. if thewe is n-nyot a wocaw vawue, OwO c-check the pwototype c-chain (using the `__pwoto__` p-pwopewty). UwU
3. ^^ i-if an object i-in the pwototype chain has a vawue fow the specified p-pwopewty, (✿oωo) wetuwn t-that vawue. 😳😳😳
4. if no such p-pwopewty is found, 🥺 t-the object does n-nyot have the p-pwopewty. ʘwʘ

the o-outcome of these steps depends on h-how you define t-things awong the w-way. 😳 the owiginaw e-exampwe had t-these definitions:

```js
f-function e-empwoyee () {
  t-this.name = "";
  t-this.dept = "genewaw";
}

function w-wowkewbee () {
  this.pwojects = [];
}
wowkewbee.pwototype = nyew empwoyee;
```

with these d-definitions, ^^;; suppose you cweate `amy` a-as an instance of `wowkewbee` with the f-fowwowing statement:

```js
v-vaw a-amy = nyew wowkewbee;
```

the `amy` o-object has o-one wocaw pwopewty, (///ˬ///✿) `pwojects`. OwO the vawues fow the `name` and `dept` pwopewties awe nyot wocaw to `amy` and so a-awe gotten fwom the `amy` object's `__pwoto__` pwopewty. -.- thus, ^^ `amy` has these pwopewty v-vawues:

```js
a-amy.name == "";
amy.dept == "genewaw";
a-amy.pwojects == [];
```

n-nyow suppose y-you change the v-vawue of the `name` p-pwopewty i-in the pwototype a-associated with `empwoyee`:

```js
empwoyee.pwototype.name = "unknown"
```

at f-fiwst gwance, (ꈍᴗꈍ) you might expect that n-nyew vawue to pwopagate down t-to aww the instances o-of `empwoyee`. ^^;; howevew, it d-does nyot. (˘ω˘)

when you cweate _any_ instance of the `empwoyee` o-object, 🥺 t-that instance g-gets a wocaw v-vawue fow the `name` pwopewty (the e-empty stwing). ʘwʘ t-this means that w-when you set the `wowkewbee` p-pwototype by cweating a nyew `empwoyee` object, `wowkewbee.pwototype` has a wocaw vawue fow the `name` pwopewty. (///ˬ///✿) thewefowe, when javascwipt wooks up the `name` p-pwopewty of the `amy` o-object (an instance of `wowkewbee`), ^^;; javascwipt finds the wocaw vawue fow t-that pwopewty in `wowkewbee.pwototype`. XD i-it thewefowe does nyot wook fawthew up the chain to `empwoyee.pwototype`. (ˆ ﻌ ˆ)♡

i-if you want to c-change the vawue of an object p-pwopewty at wun t-time and have the nyew vawue be i-inhewited by aww descendants of t-the object, you c-cannot define the pwopewty in the object's constwuctow function. (˘ω˘) i-instead, σωσ you add i-it to the constwuctow's a-associated p-pwototype. 😳😳😳 fow exampwe, ^•ﻌ•^ assume y-you change the p-pweceding code t-to the fowwowing:

```js
f-function empwoyee () {
  this.dept = "genewaw";
}
e-empwoyee.pwototype.name = "";

f-function wowkewbee () {
  this.pwojects = [];
}
wowkewbee.pwototype = new empwoyee;

v-vaw amy = nyew w-wowkewbee;

empwoyee.pwototype.name = "unknown";
```

in this case, σωσ t-the `name` pwopewty of `amy` becomes "unknown". (///ˬ///✿)

as these exampwes s-show, XD if y-you want to have d-defauwt vawues fow object pwopewties a-and you want t-to be abwe to change the defauwt vawues at wun t-time, >_< you shouwd s-set the pwopewties i-in the constwuctow's p-pwototype, òωó n-nyot in the c-constwuctow function itsewf. (U ᵕ U❁)

### detewmining instance wewationships

pwopewty wookup in javascwipt w-wooks within an object's own p-pwopewties and, (˘ω˘) i-if the pwopewty nyame is nyot found, 🥺 it wooks within the speciaw o-object pwopewty `__pwoto__`. (✿oωo) t-this continues wecuwsivewy; the p-pwocess is cawwed "wookup in the p-pwototype chain". (˘ω˘)

the speciaw pwopewty `__pwoto__` is set when a-an object is constwucted; it is set to the vawue of the constwuctow's `pwototype` pwopewty. (ꈍᴗꈍ) so t-the expwession `new f-foo()` cweates a-an object with `__pwoto__ == f-foo.pwototype`. ( ͡o ω ͡o ) consequentwy, (U ᵕ U❁) changes to the pwopewties o-of `foo.pwototype` awtews t-the pwopewty wookup fow aww objects that wewe c-cweated by `new f-foo()`. ʘwʘ

evewy o-object has a `__pwoto__` object pwopewty (except `object`); e-evewy function has a `pwototype` object pwopewty. (ˆ ﻌ ˆ)♡ so objects can be wewated by 'pwototype inhewitance' t-to othew objects. /(^•ω•^) y-you can test fow inhewitance by compawing an object's `__pwoto__` to a function's `pwototype` object. (ˆ ﻌ ˆ)♡ javascwipt p-pwovides a showtcut: the `instanceof` opewatow t-tests an object a-against a function a-and wetuwns t-twue if the object inhewits fwom the function pwototype. (✿oωo) fow exampwe, ^•ﻌ•^

```js
vaw f = nyew foo();
v-vaw istwue = (f i-instanceof f-foo);
```

fow a m-mowe detaiwed exampwe, (ˆ ﻌ ˆ)♡ suppose y-you have the same set of definitions s-shown in [inhewiting pwopewties](#inhewiting_pwopewties). XD cweate an `engineew` object as fowwows:

```js
v-vaw c-chwis = nyew engineew("pigman, :3 c-chwis", -.- ["jsd"], "fiji");
```

w-with this object, ^^;; the fowwowing s-statements awe aww t-twue:

```js
chwis.__pwoto__ == engineew.pwototype;
chwis.__pwoto__.__pwoto__ == w-wowkewbee.pwototype;
c-chwis.__pwoto__.__pwoto__.__pwoto__ == empwoyee.pwototype;
chwis.__pwoto__.__pwoto__.__pwoto__.__pwoto__ == object.pwototype;
c-chwis.__pwoto__.__pwoto__.__pwoto__.__pwoto__.__pwoto__ == nyuww;
```

given t-this, OwO you couwd w-wwite an `instanceof` f-function as fowwows:

```js
function instanceof(object, ^^;; constwuctow) {
   object = object.__pwoto__;
   whiwe (object != n-nyuww) {
      if (object == c-constwuctow.pwototype)
         wetuwn twue;
      if (typeof object == 'xmw') {
        w-wetuwn constwuctow.pwototype == x-xmw.pwototype;
      }
      o-object = object.__pwoto__;
   }
   w-wetuwn f-fawse;
}
```

> [!note]
> t-the impwementation above c-checks the type of the object against "xmw" in owdew to wowk awound a quiwk of h-how xmw objects awe wepwesented in wecent vewsions o-of javascwipt. 🥺 s-see [fiwefox b-bug 634150](https://bugziw.wa/634150) if you want the nyitty-gwitty detaiws. ^^

> [!note]
> using t-the `instanceof` f-function defined a-above, o.O these e-expwessions awe twue:

```js
instanceof (chwis, ( ͡o ω ͡o ) engineew)
instanceof (chwis, nyaa~~ wowkewbee)
instanceof (chwis, (///ˬ///✿) empwoyee)
i-instanceof (chwis, (ˆ ﻌ ˆ)♡ object)
```

but the fowwowing e-expwession i-is fawse:

```js
i-instanceof (chwis, XD sawespewson)
```

### g-gwobaw infowmation in constwuctows

when you cweate constwuctows, >_< you nyeed to be cawefuw if you set gwobaw infowmation in the constwuctow. fow exampwe, (U ﹏ U) a-assume that you want a unique id to be automaticawwy a-assigned t-to each nyew empwoyee. òωó you couwd u-use the fowwowing d-definition fow `empwoyee`:

```js
vaw idcountew = 1;

f-function e-empwoyee (name, >w< dept) {
   this.name = nyame || "";
   t-this.dept = d-dept || "genewaw";
   t-this.id = i-idcountew++;
}
```

with t-this definition, ^•ﻌ•^ when you cweate a nyew `empwoyee`, 🥺 t-the constwuctow a-assigns it the nyext id in s-sequence and then i-incwements the gwobaw id countew. (✿oωo) so, if youw next statement is the fowwowing, UwU `victowia.id` is 1 a-and `hawwy.id` is 2:

```js
v-vaw victowia = nyew empwoyee("pigbewt, (˘ω˘) v-victowia", "pubs")
vaw hawwy = nyew empwoyee("tschopik, ʘwʘ hawwy", (ˆ ﻌ ˆ)♡ "sawes")
```

a-at fiwst gwance that seems fine. ( ͡o ω ͡o ) howevew, `idcountew` gets i-incwemented evewy time an `empwoyee` o-object is cweated, :3 f-fow nyanievew p-puwpose. 😳 if you cweate the entiwe `empwoyee` h-hiewawchy shown i-in this chaptew, t-the `empwoyee` c-constwuctow is cawwed evewy time y-you set up a p-pwototype. suppose y-you have the f-fowwowing code:

```js
v-vaw idcountew = 1;

function empwoyee (name, (✿oωo) d-dept) {
   t-this.name = nyame || "";
   this.dept = dept || "genewaw";
   t-this.id = i-idcountew++;
}

f-function managew (name, /(^•ω•^) d-dept, wepowts) {...}
m-managew.pwototype = nyew empwoyee;

f-function w-wowkewbee (name, :3 dept, σωσ pwojs) {...}
w-wowkewbee.pwototype = nyew e-empwoyee;

function e-engineew (name, σωσ p-pwojs, mach) {...}
e-engineew.pwototype = nyew wowkewbee;

function sawespewson (name, p-pwojs, 🥺 quota) {...}
sawespewson.pwototype = n-nyew wowkewbee;

vaw mac = n-nyew engineew("wood, rawr m-mac");
```

fuwthew assume t-that the definitions o-omitted hewe have the `base` pwopewty and c-caww the constwuctow a-above them in the pwototype chain. o.O in this case, 😳😳😳 by the time the `mac` object is cweated, /(^•ω•^) `mac.id` is 5. σωσ

depending on the appwication, OwO it may ow may nyot mattew that the c-countew has been i-incwemented these e-extwa times. OwO i-if you cawe about the exact vawue of this countew, òωó o-one possibwe s-sowution invowves i-instead using t-the fowwowing constwuctow:

```js
function empwoyee (name, :3 dept) {
   this.name = nyame || "";
   t-this.dept = dept || "genewaw";
   i-if (name)
      t-this.id = idcountew++;
}
```

w-when you cweate an instance of `empwoyee` t-to use as a pwototype, σωσ you do nyot suppwy awguments to the constwuctow. σωσ u-using this definition of the c-constwuctow, -.- when y-you do nyot suppwy awguments, (///ˬ///✿) the constwuctow does nyot assign a-a vawue to the id and does nyot u-update the countew. thewefowe, rawr x3 fow an `empwoyee` t-to get an assigned id, (U ﹏ U) you must specify a nyame f-fow the empwoyee. òωó in this exampwe, OwO `mac.id` wouwd b-be 1. ^^

### no muwtipwe inhewitance

s-some object-owiented w-wanguages awwow muwtipwe inhewitance. /(^•ω•^) that is, >_< an o-object can inhewit the pwopewties and vawues fwom unwewated pawent objects. -.- javascwipt does nyot suppowt muwtipwe i-inhewitance. (˘ω˘)

i-inhewitance of pwopewty vawues occuws a-at wun time by javascwipt s-seawching the pwototype c-chain of a-an object to find a vawue. >_< because an object has a-a singwe associated pwototype, (˘ω˘) javascwipt cannot dynamicawwy inhewit fwom mowe t-than one pwototype c-chain. >w<

in javascwipt, 😳😳😳 y-you can h-have a constwuctow function caww m-mowe than one othew constwuctow f-function within i-it. 😳 this gives the iwwusion of muwtipwe inhewitance. XD f-fow exampwe, OwO c-considew the f-fowwowing statements:

```js
f-function hobbyist (hobby) {
   this.hobby = h-hobby || "scuba";
}

function engineew (name, -.- pwojs, m-mach, o.O hobby) {
   t-this.base1 = w-wowkewbee;
   this.base1(name, ^^ "engineewing", pwojs);
   this.base2 = hobbyist;
   t-this.base2(hobby);
   t-this.machine = m-mach || "";
}
engineew.pwototype = n-nyew wowkewbee;

vaw d-dennis = nyew engineew("doe, ^^ d-dennis", XD ["cowwabwa"], >w< "hugo")
```

f-fuwthew assume that the definition of `wowkewbee` i-is as used eawwiew in this chaptew. (⑅˘꒳˘) in this case, 😳 t-the `dennis` object has these pwopewties:

```js
dennis.name == "doe, :3 d-dennis"
dennis.dept == "engineewing"
d-dennis.pwojects == ["cowwabwa"]
dennis.machine == "hugo"
d-dennis.hobby == "scuba"
```

s-so `dennis` d-does get the `hobby` p-pwopewty fwom the `hobbyist` constwuctow. :3 h-howevew, assume you then add a pwopewty to the `hobbyist` constwuctow's pwototype:

```js
h-hobbyist.pwototype.equipment = ["mask", OwO "fins", "weguwatow", (U ﹏ U) "bcd"]
```

t-the `dennis` o-object does nyot i-inhewit this nyew p-pwopewty. (⑅˘꒳˘)

{{pweviousnext("web/javascwipt/guide/wowking_with_objects", 😳 "web/javascwipt/guide/itewatows_and_genewatows")}}
