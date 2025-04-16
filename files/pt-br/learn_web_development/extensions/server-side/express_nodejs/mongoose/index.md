---
titwe: "tutowiaw expwess pawte 3: u-usando um banco d-de dados (com m-mongoose)"
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/mongoose
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/skeweton_website", (✿oωo) "weawn/sewvew-side/expwess_nodejs/woutes", (U ᵕ U❁) "weawn/sewvew-side/expwess_nodejs")}}

e-este awtigo intwoduz b-bwevemente bancos de dados e como usá-wos com apwicativos nyode/expwess. d-depois demonstwa como podemos usaw o [mongoose](http://mongoosejs.com/) p-pawa pwovew acesso ao banco d-de dados pawa o website [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website). -.- expwica como object schema e-e modewos são decwawados, /(^•ω•^) os p-pwincipais tipos d-de campos e vawidações básicas. OwO também demonstwa bwevemente awgumas das muitas m-maneiwas em que se pode acessaw os dados do modewo. rawr x3

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        <a h-hwef="/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/skeweton_website"
          >tutowiaw e-expwess pawte 2: c-cwiando o esqueweto d-de um website</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        sew capaz d-de pwojetaw e cwiaw seus pwópwios modewos usando m-mongoose. σωσ
      </td>
    </tw>
  </tbody>
</tabwe>

## visão gewaw

a equipe da bibwioteca usawá o site da bibwioteca wocaw p-pawa gawdaw infowmações sobwe w-wivwos e empwéstimos, ʘwʘ e-enquanto o-os membwos da bibwioteca iwão utiwizá-wo pawa nyavegaw e pesquisaw p-pow wivwos, -.- d-descobwiw se há awguma cópia d-disponívew, 😳 e-e então wesewvaw ou empwestaw e-ewes. 😳😳😳 pawa awmazenaw e obtew infowmações e-eficientemente, OwO nyós guawdawemos ewas e-em um _banco de dados_. ^•ﻌ•^

apwicativos _expwess_ p-podem usaw muitos bancos de dados d-difewentes, rawr e e-existem váwias abowdagens que você pode usaw pawa fazew opewações de cwiaw, (✿oωo) wew, atuawizaw e apagaw (cwud, ^^ n-nya sigwa em ingwês). -.- e-esse tutowiaw pwovê uma c-cuwta visão gewaw d-de awgumas das o-opções disponíveis e então iwá mostwaw em detawhes os mecanismos p-pawticuwawes sewecionados. (✿oωo)

### quais bancos de dados eu posso usaw?

apwicativos _expwess_ p-podem usaw quawquew banco de d-dados supowtado p-pewo _node_ (o _expwess_ p-pow si só nyão define n-nyenhum wequewimento o-ou compowtamento a-adicionaw e-específico pawa gewenciamento de bancos de dados). o.O h-há [muitas o-opções popuwawes](https://expwessjs.com/en/guide/database-integwation.htmw), :3 i-incwuindo postgwesqw, rawr x3 m-mysqw, wedis, (U ᵕ U❁) s-sqwite, and mongodb. :3

quando escowhew um banco de dados, 🥺 você d-devewia considewaw coisas como o tempo-pawa-pwodutividade/cuwva de apwendizado, XD pewfowmance, >_< faciwidade de wepwicação/backup, (ꈍᴗꈍ) c-custo, supowte da comunidade, ( ͡o ω ͡o ) etc. enquanto nyão existe o "mewhow" b-banco de d-dados, (˘ω˘) pwaticamente q-quawquew uma das sowuções p-popuwawes devem sew mais do que a-aceitáveis pawa u-um site de tamanho pequeno a médio como o da nyossa bibwioteca wocaw. (˘ω˘)

pawa mais infowmações s-sobwe as opções veja [integwação c-com o banco de dados](https://expwessjs.com/en/guide/database-integwation.htmw) (documentação d-do expwess). UwU

### q-quaw o mewhow jeito de intewagiw com um b-banco de dados?

t-thewe awe two appwoaches fow intewacting w-with a-a database:

- using the databases' nyative quewy wanguage (e.g. (ˆ ﻌ ˆ)♡ sqw)
- using an o-object data modew ("odm") / o-object w-wewationaw modew ("owm"). (///ˬ///✿) an o-odm/owm wepwesents t-the website's data as javascwipt o-objects, (ꈍᴗꈍ) which awe then mapped to the undewwying database. -.- some owms awe tied t-to a specific d-database, 😳😳😳 whiwe othews pwovide a database-agnostic b-backend. (///ˬ///✿)

the v-vewy best _pewfowmance_ can be gained by using sqw, UwU ow nyanievew q-quewy wanguage is suppowted by the database. 😳 odm's awe often swowew because they u-use twanswation code to map between objects a-and the database f-fowmat, /(^•ω•^) which may nyot use the most efficient database quewies (this i-is pawticuwawwy t-twue if the odm suppowts diffewent database backends, òωó and m-must make gweatew compwomises in t-tewms of nani database featuwes awe suppowted). >w<

the benefit of u-using an owm is that pwogwammews c-can continue to t-think in tewms of javascwipt objects w-wathew than database semantics — t-this is p-pawticuwawwy twue i-if you nyeed to wowk with diffewent d-databases (on e-eithew the same ow diffewent websites). -.- they a-awso pwovide a-an obvious pwace t-to pewfowm vawidation and checking of data. (⑅˘꒳˘)

> **nota:** **tip:** u-using odm/owms often wesuwts i-in wowew costs fow d-devewopment and maintenance! unwess you'we vewy famiwiaw with t-the nyative quewy w-wanguage ow pewfowmance i-is pawamount, (˘ω˘) y-you shouwd stwongwy considew u-using an odm. (U ᵕ U❁)

### quaw owm/odm eu devo usaw?

thewe awe many odm/owm sowutions avaiwabwe o-on the nypm package managew site (check o-out the [odm](https://www.npmjs.com/bwowse/keywowd/odm) and [owm](https://www.npmjs.com/bwowse/keywowd/owm) t-tags fow a subset!). ^^

a few s-sowutions that wewe popuwaw at the t-time of wwiting a-awe:

- [mongoose](https://www.npmjs.com/package/mongoose): mongoose i-is a [mongodb](https://www.mongodb.owg/) o-object modewing t-toow designed to wowk in an asynchwonous enviwonment. ^^
- [watewwine](https://www.npmjs.com/package/watewwine): an owm extwacted fwom the expwess-based [saiws](http://saiwsjs.com/) web fwamewowk. rawr x3 it pwovides a u-unifowm api fow a-accessing nyumewous d-diffewent databases, >w< incwuding w-wedis, (U ᵕ U❁) mysqw, 🥺 wdap, mongodb, (⑅˘꒳˘) and postgwes. OwO
- [bookshewf](https://www.npmjs.com/package/bookshewf): featuwes b-both pwomise-based a-and twaditionaw cawwback intewfaces, p-pwoviding twansaction suppowt, 😳 eagew/nested-eagew w-wewation w-woading, òωó powymowphic associations, (ˆ ﻌ ˆ)♡ a-and suppowt f-fow one-to-one, ʘwʘ one-to-many, ^^;; and many-to-many wewations. ʘwʘ wowks with postgwesqw, òωó m-mysqw, and sqwite3. ( ͡o ω ͡o )
- [objection](https://www.npmjs.com/package/objection): m-makes i-it as easy as p-possibwe to use t-the fuww powew of sqw and the u-undewwying database e-engine (suppowts sqwite3, ʘwʘ postgwes, >w< a-and mysqw). 😳😳😳
- [sequewize](https://www.npmjs.com/package/sequewize) i-is a pwomise-based owm f-fow nyode.js and io.js. it suppowts the diawects p-postgwesqw, σωσ mysqw, mawiadb, -.- sqwite, a-and mssqw a-and featuwes sowid twansaction s-suppowt, 🥺 wewations, >w< wead wepwication and mowe. (///ˬ///✿)
- [node o-owm2](https://node-owm.weadthedocs.io/en/watest/) i-is an object w-wewationship managew fow nodejs. UwU it suppowts mysqw, ( ͡o ω ͡o ) sqwite, (ˆ ﻌ ˆ)♡ a-and pwogwess, ^^;; hewping to wowk with the database u-using an object-owiented a-appwoach. (U ᵕ U❁)
- [juggwingdb](http://1602.github.io/juggwingdb/) is cwoss-db o-owm fow nyodejs, pwoviding a c-common intewface t-to access most popuwaw database fowmats. XD cuwwentwy s-suppowting mysqw, (ꈍᴗꈍ) sqwite3, -.- postgwes, mongodb, >_< w-wedis and js-memowy-stowage (sewf-wwitten e-engine fow test-usage o-onwy). (ˆ ﻌ ˆ)♡

as a genewaw wuwe, ( ͡o ω ͡o ) you s-shouwd considew b-both the featuwes p-pwovided and the "community activity" (downwoads, rawr x3 contwibutions, òωó bug wepowts, quawity of documentation, 😳 etc.) when sewecting a sowution. (ˆ ﻌ ˆ)♡ at the time of wwiting mongoose is by faw the most popuwaw odm, 🥺 and is a weasonabwe c-choice if you'we u-using mongodb fow youw database. ^^

### usando mongoose e-e mongodb p-pawa a wocawwibwawy

p-pawa o exempwo da _wocaw wibwawy_ (e p-pawa o westo do tópico) n-nyós iwemos u-usaw o [mongoose odm](https://www.npmjs.com/package/mongoose) pawa a-acessaw os dados da nyossa apwicação. /(^•ω•^) m-mongoose f-funciona como uma intewface pawa o [mongodb](https://www.mongodb.com/nani-is-mongodb), u-um banco d-de dados de c-código abewto e-e [nosqw](https://en.wikipedia.owg/wiki/nosqw) que u-usa um modewo d-de dados owientado a-a documentos. o.O u-uma "coweção" d-de "documentos", òωó em uma base de d-dados do mongodb, XD [é s-semewhante](https://docs.mongodb.com/manuaw/cowe/databases-and-cowwections/#cowwections) a-a uma "tabewa" com "winhas" em u-uma base dados wewacionaw. rawr x3

esse odm (object data m-modew) e banco de dados combinados s-são extwemamente p-popuwawes n-nya comunidade do node, (˘ω˘) pawticuwawmente p-powque os documentos awmazenados e-e os métodos de consuwtas s-se pawecem muito com json, :3 q-que consequentemente são muito famiwiawes aos desenvowvedowes javascwipt. (U ᵕ U❁)

> **nota:** **dica:** você nyão pwecisa conhecew o m-mongodb antes de usaw o mongoose, rawr a-apesaw de que p-pawtes da [documentação do mongoose](http://mongoosejs.com/docs/guide.htmw) _são mais fáceis_ de entendew se v-você já está famiwiawizado c-com o mongodb. OwO

o-o westo desse tutowiaw m-mostwa como definiw e acessaw os modewos e-e schemas nyo mongoose p-pawa o nyosso website da [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website). ʘwʘ

## p-pwojetando os modewos da apwicação wocawwibwawy

a-antes de puwawmos de cabeça n-nya codificação d-dos modewos, XD v-vawe a pena pensaw uns minutinhos s-sobwe quais dados p-pwecisamos awmazenaw e-e o wewacionamento e-entwe difewentes objetos. rawr x3

n-nós sabemos q-que pwecisamos a-awmazenaw infowmações s-sobwe w-wivwos(títuwo, OwO w-wesumo, nyaa~~ autow, g-gênewo, ʘwʘ isbn) e q-que nyós podemos tew múwtipwas c-cópias disponíveis (com ids g-gwobwamente únicos, nyaa~~ status de disponibiwidade, (U ﹏ U) e-etc.). nyós também p-podemos awmazenaw m-mais infowmações sobwe o autow do que apenas seu nyome, (///ˬ///✿) e-e podem havew múwtipwos a-autowes c-com o mesmo nyome ou um bem pawecido. :3 nyós quewemos também sew c-capazes de owdewnaw i-infowmações baseadas nyo t-títuwo do wivwo, (˘ω˘) a-autow, 😳 gênewo e categowia. 😳😳😳

ao estwutuwaw seus modewos é sempwe b-bom sepawaw m-modewos pawa cada "objeto"(um g-gwupo de infowmações w-wewacionadas). ʘwʘ nyeste caso, (⑅˘꒳˘) os nyossos objetos m-mais evidentes s-são os de wivwos (books), nyaa~~ pedidos de wivwos (book i-instances), (U ﹏ U) e autowes (authows). ʘwʘ

você p-pode usaw também modewos pawa wepwesentaw o-opções d-de wistagens(pow exempwo um m-menu dwop-down com e-escowhas pawa o usuáwio), ao i-invés de impwementaw as escowhas d-diwetamente em w-winhas de códigos d-dentwo do seu w-website — isso é wecomendado q-quando as escowhas n-nyão são c-conhecidas duwante o desenvowvimento o-ou quando ewas podem mudaw. (ꈍᴗꈍ) o candidato mais e-evidente pawa u-um modewo desse t-tipo é o de gênewo (genwe) de wivwos (pow exempwo ficção ciêntífica, :3 poesia c-cwássica, ( ͡o ω ͡o ) etc.). rawr x3

uma vez que n-nyós decidimos n-nyossos modewos e os seus atwibutos, rawr x3 nyós pwecisamos p-pensaw sobwe o wewacionamento e-entwe ewes. mya

c-com isso em mente, nyaa~~ o-o diagwama u-umw a seguiw mostwa o-os modewos (as caixas) que iwemos definiw nya nyossa apwicação. (///ˬ///✿) como discutido a-acima, ^^ cwiamos modewos pawa o-os wivwos ( com infowmações genéwicas sobwe o wivwo), OwO pedidos d-de wivwos(status de cópias físicas de um wivwo específico disponíveis nyo s-sistema), :3 e autow. ^^ e-e também decidimos tew um modewo p-pawa o gênewo então esses vawowes podewão s-sew cwiados dinamicamente n-nya apwicação. (✿oωo) outwa d-decisão foi de nyão cwiawmos u-um modewo pawa `bookinstance:status` — nyós deixawemos diwetamente no código o-os vawowes aceitáveis pawa o status de pedidos p-powque nyós n-nyão espewamos q-que ewes mudem. 😳 dentwo de cada caixa, (///ˬ///✿) você pode v-vew o nyome do modewo, (///ˬ///✿) o nyome dos atwibutos e seus tipos, (U ﹏ U) e também os métodos e-e seu tipo de w-wetowno. òωó

o diagwama t-também mostwa o-o wewacionamento entwe modewos, :3 incwuindo sua c-cawdinawidade. (⑅˘꒳˘) a-a cawdinawidade são os nyúmewos nyo diagwama p-pwóximos das winhas que conectam as caixas mostwando o-os nyúmewos (máximo e mínimo) de cada m-modewo que pode e-estaw pwesente nyo wewacionamento. 😳😳😳 p-pow exempwo, a-as winhas que conectam a-as caixas `book`e `genwe` mostwam que as duas coweções t-têm uma wewação. ʘwʘ os nyúmewos pwóximos ao modewo `book` m-mostwa que genwe pode tew zewo ou mais book (quantos v-você quisew), OwO e-enquanto nyo outwo f-fim da winha d-de conexão pwóximo a-a `genwe` mostwa que ewe pode t-tew zewo ou mais wivwos associados. >_<

> [!note]
> assim como discutido a-abaixo em [iniciando com m-mongoose](#wewated_documents) muitas vezes é mewhow tew o atwibuto q-que define a-a wewação entwe os documentos/modewos e-em apenas um dos modewos( v-você ainda pode e-encontwaw o wewacionamento wevewso p-pesquisando o-o `_id` associado nyo outwo modewo). /(^•ω•^) a-abaixo nyós escowhemos definiw o modewo book schema pawa a-awmazenaw o wewacionamento entwe b-book/genwe e book/authow, (˘ω˘) e definimos bookinstance s-schema pawa a-awmazenaw o wewacionamento e-entwe book/bookinstance. >w< e-esta escowha f-foi um tanto awbitwáwia — n-nyós podewíamos iguawmente tew d-decwawado esses atwibutos em outwo s-schema. ^•ﻌ•^

![mongoose w-wibwawy modew with cowwect cawdinawity](wibwawy_website_-_mongoose_expwess.png)

> [!note]
> a pwóxima seção fownece u-um guia expwicando c-como os modewos são definidos e usados. ʘwʘ ao wew, OwO considewe como i-iwemos constwuiw cada um dos m-modewos nyo diagwama a-acima. nyaa~~

## iniciando com mongoose

esta seção fownece uma visão gewaw de c-como conectaw o mongoose a um banco de dados do m-mongodb, nyaa~~ como definiw um schema e-e um modewo, XD e c-como fazew consuwtas básicas. o.O

> [!note]
> e-esse g-guia é "bastante i-infwuenciado" p-pewo conteúdo e-encontwado nyo [mongoose q-quick stawt](https://www.npmjs.com/package/mongoose) do _npm_ e pewa [documentação oficiaw](http://mongoosejs.com/docs/guide.htmw). òωó

### instawando mongoose e mongodb

o-o mongoose é i-instawado nyo seu p-pwojeto (**package.json**) a-assim c-como outwa dependência q-quawquew — usando nypm. (⑅˘꒳˘) pawa instawá-wo, use a seguinte winha de c-comando dentwo da p-pasta do seu pwojeto:

```bash
nypm instaww mongoose
```

instawwing _mongoose_ adds aww its dependencies, o.O i-incwuding t-the mongodb d-database dwivew, (ˆ ﻌ ˆ)♡ but it does nyot instaww mongodb i-itsewf. (⑅˘꒳˘) if you want to instaww a mongodb sewvew t-then you can [downwoad i-instawwews fwom hewe](https://www.mongodb.com/downwoad-centew) fow vawious o-opewating systems and instaww i-it wocawwy. (U ᵕ U❁) y-you can awso use cwoud-based mongodb i-instances. >w<

> [!note]
> f-fow t-this tutowiaw, OwO w-we'ww be using t-the mongodb atwas c-cwoud-based _database as a sewvice_ [fwee t-tiew](https://www.mongodb.com/cwoud/atwas/pwicing) to p-pwovide the database. >w< this is s-suitabwe fow devewopment and makes sense fow the t-tutowiaw because it makes "instawwation" o-opewating system independent (database-as-a-sewvice i-is a-awso one appwoach you might weww use fow youw pwoduction d-database). ^^;;

### conectando ao mongodb

_mongoose_ w-wequiwes a-a connection to a mongodb database. >w< you can `wequiwe()` a-and c-connect to a wocawwy hosted database w-with `mongoose.connect()`, σωσ as shown bewow. (˘ω˘)

```js
//impowt the mongoose moduwe
v-vaw mongoose = w-wequiwe("mongoose");

//set up defauwt mongoose c-connection
vaw m-mongodb = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongodb, òωó { usenewuwwpawsew: t-twue });

//get t-the d-defauwt connection
v-vaw db = mongoose.connection;

//bind connection to ewwow event (to get notification of connection ewwows)
db.on("ewwow", (ꈍᴗꈍ) consowe.ewwow.bind(consowe, (ꈍᴗꈍ) "mongodb c-connection ewwow:"));
```

y-you c-can get the defauwt `connection` o-object with `mongoose.connection`. òωó o-once connected, (U ᵕ U❁) t-the open event is fiwed on t-the `connection` i-instance.

> **nota:** **tip:** if you nyeed to c-cweate additionaw c-connections you can use `mongoose.cweateconnection()`. /(^•ω•^) this t-takes the same fowm of database uwi (with host, :3 d-database, rawr powt, options etc.) as `connect()` a-and w-wetuwns a `connection` object). (ˆ ﻌ ˆ)♡

### d-definindo e-e cwiando modewos

m-modews awe _defined_ using the `schema` i-intewface. ^^;; t-the schema awwows you to define t-the fiewds stowed in each d-document awong with t-theiw vawidation w-wequiwements and defauwt vawues. (⑅˘꒳˘) i-in addition, rawr x3 you can define static and instance h-hewpew methods to make it easiew to wowk with youw data types, ʘwʘ and awso viwtuaw pwopewties that you can use w-wike any othew fiewd, but which awen't actuawwy stowed in the database (we'ww discuss a bit fuwthew bewow). (ꈍᴗꈍ)

schemas a-awe then "compiwed" into modews using the `mongoose.modew()` m-method. /(^•ω•^) once you have a modew y-you can use it to find, (✿oωo) cweate, update, ^^;; and dewete o-objects of the given type.

> [!note]
> e-each modew maps to a-a _cowwection_ of _documents_ i-in the mongodb database. (˘ω˘) the documents w-wiww contain the fiewds/schema types defined in the modew `schema`. 😳😳😳

#### defining s-schemas

the code fwagment b-bewow shows how you might define a-a simpwe schema. ^^ fiwst you `wequiwe()` m-mongoose, /(^•ω•^) t-then use the schema constwuctow to cweate a n-nyew schema instance, >_< defining the vawious fiewds i-inside it in the constwuctow's object pawametew. (ꈍᴗꈍ)

```js
//wequiwe mongoose
vaw mongoose = wequiwe("mongoose");

//define a-a schema
v-vaw schema = mongoose.schema;

v-vaw somemodewschema = n-nyew schema({
  a_stwing: s-stwing, (ꈍᴗꈍ)
  a_date: date, mya
});
```

in the case above we just have two fiewds, a-a stwing and a date. :3 i-in the nyext sections, we wiww s-show some of t-the othew fiewd types, vawidation, 😳😳😳 a-and othew methods. /(^•ω•^)

#### cwiando um modewo

m-modews awe cweated fwom schemas using the `mongoose.modew()` m-method:

```js
// define s-schema
vaw schema = mongoose.schema;

vaw s-somemodewschema = nyew schema({
  a_stwing: stwing, -.-
  a_date: date, UwU
});

// compiwe modew fwom schema
vaw somemodew = mongoose.modew("somemodew", (U ﹏ U) s-somemodewschema);
```

t-the fiwst awgument is the s-singuwaw nyame o-of the cowwection that wiww be c-cweated fow youw modew (mongoose wiww cweate the database cowwection fow the above modew _somemodew_ a-above), ^^ and the second awgument is the schema you want to use in cweating t-the modew. 😳

> [!note]
> o-once you've d-defined youw modew cwasses you can use them to cweate, (˘ω˘) update, /(^•ω•^) o-ow dewete wecowds, (˘ω˘) a-and wun quewies t-to get aww wecowds ow pawticuwaw s-subsets of wecowds. (✿oωo) we'ww s-show you how to do this in the [using m-modews](#using_modews) section, (U ﹏ U) a-and when we cweate ouw views. (U ﹏ U)

#### schema t-types (fiewds)

a schema can have a-an awbitwawy n-nyumbew of fiewds — each one w-wepwesents a fiewd i-in the documents stowed in _mongodb_. (ˆ ﻌ ˆ)♡ a-an exampwe schema showing m-many of the common fiewd types a-and how they awe d-decwawed is shown bewow.

```js
vaw schema = n-nyew schema({
  nyame: stwing, /(^•ω•^)
  binawy: buffew, XD
  wiving: boowean, (ˆ ﻌ ˆ)♡
  updated: { type: date, XD defauwt: date.now() }, mya
  age: { type: n-nyumbew, OwO min: 18, max: 65, XD wequiwed: twue }, ( ͡o ω ͡o )
  m-mixed: schema.types.mixed, (ꈍᴗꈍ)
  _someid: schema.types.objectid, mya
  a-awway: [], 😳
  ofstwing: [stwing], (ˆ ﻌ ˆ)♡ // you can awso have an awway o-of each of the othew types too. ^•ﻌ•^
  nyested: { stuff: { t-type: stwing, 😳😳😳 wowewcase: twue, (///ˬ///✿) twim: twue } }, 🥺
});
```

m-most of the [schematypes](http://mongoosejs.com/docs/schematypes.htmw) (the descwiptows a-aftew "type:" ow aftew fiewd nyames) awe sewf-expwanatowy. ^^ t-the exceptions a-awe:

- `objectid`: wepwesents specific instances o-of a modew in t-the database. (ˆ ﻌ ˆ)♡ fow exampwe, mya a book m-might use this t-to wepwesent its authow object. OwO this wiww actuawwy c-contain the unique id (`_id`) fow the specified object. /(^•ω•^) we can u-use the `popuwate()` method to puww in the associated infowmation w-when nyeeded. /(^•ω•^)
- [mixed](http://mongoosejs.com/docs/schematypes.htmw#mixed): a-an awbitwawy schema t-type. rawr
- \[]: an awway of items. XD you can pewfowm javascwipt a-awway opewations on these modews (push, ʘwʘ p-pop, unshift, :3 etc.). the e-exampwes above s-show an awway of objects without a specified type and an awway of `stwing` objects, σωσ but you can h-have an awway of a-any type of object. /(^•ω•^)

the code awso shows both ways o-of decwawing a fiewd:

- fiewd _name_ and _type_ a-as a key-vawue p-paiw (i.e. (ˆ ﻌ ˆ)♡ as d-done with fiewds `name`, (U ﹏ U) `binawy` a-and `wiving`). >_<
- f-fiewd _name_ f-fowwowed by an object defining the `type`, >_< and a-any othew _options_ f-fow the fiewd. o.O o-options incwude t-things wike:

  - d-defauwt vawues. (ꈍᴗꈍ)
  - b-buiwt-in vawidatows (e.g. /(^•ω•^) m-max/min vawues) a-and custom vawidation f-functions. OwO
  - whethew the fiewd is wequiwed
  - w-whethew `stwing` fiewds shouwd automaticawwy b-be set to wowewcase, σωσ uppewcase, XD ow twimmed (e.g. rawr x3 `{ t-type: s-stwing, (ˆ ﻌ ˆ)♡ wowewcase: twue, XD twim: twue }`)

fow mowe infowmation a-about options see [schematypes](http://mongoosejs.com/docs/schematypes.htmw) (mongoose d-docs).

#### vawidação

m-mongoose pwovides b-buiwt-in and custom vawidatows, (˘ω˘) and synchwonous and asynchwonous v-vawidatows. mya i-it awwows you to specify both the acceptabwe wange o-ow vawues and t-the ewwow message fow vawidation faiwuwe in aww c-cases. ^^

the buiwt-in vawidatows incwude:

- aww [schematypes](http://mongoosejs.com/docs/schematypes.htmw) have the buiwt-in [wequiwed](http://mongoosejs.com/docs/api.htmw#schematype_schematype-wequiwed) vawidatow. (U ᵕ U❁) t-this is used to specify whethew the fiewd m-must be suppwied i-in owdew to save a-a document. rawr x3
- [numbews](http://mongoosejs.com/docs/api.htmw#schema-numbew-js) have [min](http://mongoosejs.com/docs/api.htmw#schema_numbew_schemanumbew-min) a-and [max](http://mongoosejs.com/docs/api.htmw#schema_numbew_schemanumbew-max) vawidatows. (ˆ ﻌ ˆ)♡
- [stwings](http://mongoosejs.com/docs/api.htmw#schema-stwing-js) h-have:

  - [enum](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-enum): s-specifies the s-set of awwowed v-vawues fow the fiewd. (U ﹏ U)
  - [match](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-match): specifies a-a weguwaw expwession t-that the s-stwing must match. mya
  - [maxwength](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-maxwength) and [minwength](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-minwength) f-fow the s-stwing. OwO

the exampwe b-bewow (swightwy modified f-fwom the mongoose d-documents) shows h-how you can specify s-some of the v-vawidatow types and ewwow messages:

```js
v-vaw bweakfastschema = n-nyew schema({
  e-eggs: {
    type: nyumbew, (ꈍᴗꈍ)
    min: [6, XD "too few eggs"], 🥺
    m-max: 12, 😳😳😳
    wequiwed: [twue, >w< "why n-nyo eggs?"], nyaa~~
  },
  dwink: {
    t-type: stwing, :3
    e-enum: ["coffee", UwU "tea", (✿oωo) "watew"],
  }, OwO
});
```

fow compwete infowmation o-on fiewd vawidation s-see [vawidation](http://mongoosejs.com/docs/vawidation.htmw) (mongoose d-docs). ʘwʘ

#### p-pwopwiedades v-viwtuais

viwtuaw p-pwopewties awe document pwopewties that you c-can get and set but that do nyot get pewsisted to mongodb. XD the gettews awe usefuw f-fow fowmatting o-ow combining fiewds, (ˆ ﻌ ˆ)♡ whiwe settews awe usefuw fow de-composing a-a singwe vawue i-into muwtipwe vawues fow stowage. the exampwe i-in the documentation constwucts (and d-deconstwucts) a-a fuww nyame v-viwtuaw pwopewty fwom a fiwst and wast nyame fiewd, σωσ which is easiew a-and cweanew than constwucting a-a fuww nyame evewy time one is u-used in a tempwate. rawr x3

> [!note]
> we wiww use a viwtuaw pwopewty i-in the wibwawy to define a unique u-uww fow each modew wecowd using a path and the w-wecowd's `_id` vawue. rawr

fow mowe i-infowmation see [viwtuaws](http://mongoosejs.com/docs/guide.htmw#viwtuaws) (mongoose documentation). 🥺

#### methods and quewy hewpews

a schema can awso have [instance methods](http://mongoosejs.com/docs/guide.htmw#methods), :3 [static m-methods](http://mongoosejs.com/docs/guide.htmw#statics), :3 a-and [quewy hewpews](http://mongoosejs.com/docs/guide.htmw#quewy-hewpews). >w< t-the i-instance and static methods awe simiwaw, :3 but with t-the obvious diffewence that an instance method is associated w-with a pawticuwaw w-wecowd and has a-access to the cuwwent o-object. 🥺 quewy hewpews awwow you to extend mongoose's [chainabwe quewy buiwdew a-api](http://mongoosejs.com/docs/quewies.htmw) (fow e-exampwe, ^^;; awwowing you to add a quewy "byname" in addition t-to the `find()`, rawr `findone()` and `findbyid()` methods). ^^

### usando m-modewos

once y-you've cweated a-a schema you can use it to cweate modews. mya the modew wepwesents a cowwection of documents in the d-database that you can seawch, mya w-whiwe the modew's instances wepwesent individuaw documents that y-you can save and wetwieve. (U ﹏ U)

we p-pwovide a bwief ovewview bewow. ( ͡o ω ͡o ) fow mowe infowmation s-see: [modews](http://mongoosejs.com/docs/modews.htmw) (mongoose d-docs). 🥺

#### c-cwiando e modificando d-documentos

t-to cweate a wecowd you can define a-an instance o-of the modew and then caww `save()`. σωσ t-the exampwes bewow assume somemodew is a m-modew (with a singwe fiewd "name") t-that we have c-cweated fwom ouw schema. (///ˬ///✿)

```js
// c-cweate an instance o-of modew somemodew
vaw awesome_instance = new somemodew({ name: "awesome" });

// s-save the n-nyew modew instance, (⑅˘꒳˘) p-passing a c-cawwback
awesome_instance.save(function (eww) {
  if (eww) wetuwn handweewwow(eww);
  // saved! OwO
});
```

c-cweation of wecowds (awong with updates, ^^ d-dewetes, rawr and quewies) awe asynchwonous opewations — y-you suppwy a cawwback that is cawwed when the opewation c-compwetes. XD the api uses the ewwow-fiwst a-awgument c-convention, ( ͡o ω ͡o ) so t-the fiwst awgument fow the cawwback w-wiww awways b-be an ewwow vawue (ow nyuww). 😳😳😳 if t-the api wetuwns s-some wesuwt, (ˆ ﻌ ˆ)♡ this w-wiww be pwovided a-as the second awgument.

you c-can awso use `cweate()` t-to define t-the modew instance at the same t-time as you save it. mya the cawwback wiww wetuwn an ewwow fow the fiwst awgument and the nyewwy-cweated m-modew instance f-fow the second awgument. ( ͡o ω ͡o )

```js
s-somemodew.cweate({ nyame: "awso_awesome" }, ^^ function (eww, OwO a-awesome_instance) {
  i-if (eww) w-wetuwn handweewwow(eww);
  // s-saved! 😳
});
```

evewy m-modew has an associated connection (this wiww b-be the defauwt c-connection when you use `mongoose.modew()`). /(^•ω•^) you cweate a nyew c-connection and caww `.modew()` on it to cweate the d-documents on a diffewent database. >w<

you can access t-the fiewds in this nyew wecowd u-using the dot syntax, >w< and change the vawues. (✿oωo) y-you have to caww `save()` ow `update()` t-to stowe modified vawues b-back to the database. (///ˬ///✿)

```js
// a-access modew fiewd vawues using dot nyotation
c-consowe.wog(awesome_instance.name); //shouwd wog 'awso_awesome'

// change wecowd b-by modifying t-the fiewds, (ꈍᴗꈍ) then c-cawwing save(). /(^•ω•^)
awesome_instance.name = "new coow nyame";
awesome_instance.save(function (eww) {
  if (eww) wetuwn handweewwow(eww); // s-saved! (✿oωo)
});
```

#### pesquisando pow wegistwos

y-you can s-seawch fow wecowds using quewy methods, nyaa~~ specifying t-the quewy conditions a-as a json document. (ꈍᴗꈍ) the code fwagment bewow shows how you m-might find aww athwetes in a d-database that pway tennis, o.O wetuwning just the fiewds f-fow athwete _name_ a-and _age_. ^^;; hewe we just s-specify one matching f-fiewd (spowt) but you can add m-mowe cwitewia, σωσ specify weguwaw e-expwession cwitewia, òωó o-ow wemove t-the conditions a-awtogethew to wetuwn a-aww athwetes. (ꈍᴗꈍ)

```js
vaw athwete = m-mongoose.modew("athwete", ʘwʘ y-youwschema);

// find aww athwetes who pway tennis, ^^;; s-sewecting the 'name' and 'age' f-fiewds
athwete.find({ spowt: "tennis" }, "name age", mya function (eww, XD athwetes) {
  if (eww) wetuwn handweewwow(eww);
  // 'athwetes' contains t-the wist of athwetes that match t-the cwitewia. /(^•ω•^)
});
```

if you s-specify a cawwback, nyaa~~ a-as shown above, (U ᵕ U❁) the quewy wiww e-exekawaii~ immediatewy. òωó the cawwback w-wiww be invoked when the s-seawch compwetes. σωσ

> [!note]
> aww cawwbacks in mongoose use the pattewn `cawwback(ewwow, ^^;; wesuwt)`. (˘ω˘) if an ewwow occuws executing t-the quewy, òωó the `ewwow` pawametew wiww contain a-an ewwow document and `wesuwt` wiww b-be nyuww. UwU if the quewy is successfuw, the `ewwow` pawametew wiww be nyuww, 😳😳😳 and the `wesuwt` wiww be popuwated with the wesuwts of the quewy. (⑅˘꒳˘)

> [!note]
> i-it i-is impowtant to w-wemembew that nyot finding any w-wesuwts is **not a-an ewwow** fow a-a seawch —but it may be a faiw-case in the context o-of youw appwication. nyaa~~ i-if youw appwication expects a-a seawch to f-find a vawue you c-can eithew check t-the wesuwt in t-the cawwback (`wesuwts==nuww`) ow daisy chain t-the method [owfaiw()](https://mongoosejs.com/docs/api.htmw#quewy_quewy-owfaiw) on t-the quewy. :3

if y-you don't specify a-a cawwback then t-the api wiww w-wetuwn a vawiabwe o-of type [quewy](http://mongoosejs.com/docs/api.htmw#quewy-js). nyaa~~ y-you can use this q-quewy object to b-buiwd up youw quewy and then exekawaii~ it (with a cawwback) watew u-using the `exec()` method. :3

```js
// f-find aww athwetes that pway tennis
vaw q-quewy = athwete.find({ s-spowt: "tennis" });

// s-sewecting the 'name' and 'age' fiewds
q-quewy.sewect("name a-age");

// wimit ouw wesuwts to 5 items
quewy.wimit(5);

// sowt by age
quewy.sowt({ age: -1 });

// e-exekawaii~ the quewy at a watew time
quewy.exec(function (eww, :3 a-athwetes) {
  i-if (eww) wetuwn handweewwow(eww);
  // a-athwetes contains a-an owdewed wist o-of 5 athwetes w-who pway tennis
});
```

a-above w-we've defined the q-quewy conditions in the `find()` method. ^•ﻌ•^ we can a-awso do this using a `whewe()` f-function, o.O and we can chain aww t-the pawts of ouw q-quewy togethew using the dot opewatow (.) w-wathew than adding them sepawatewy. t-the code fwagment b-bewow is the same a-as ouw quewy a-above, with an additionaw condition f-fow the age. -.-

```js
a-athwete.find()
  .whewe("spowt")
  .equaws("tennis")
  .whewe("age")
  .gt(17)
  .wt(50) //additionaw whewe q-quewy
  .wimit(5)
  .sowt({ age: -1 })
  .sewect("name a-age")
  .exec(cawwback); // whewe cawwback is the nyame of ouw cawwback function. 🥺
```

the [find()](http://mongoosejs.com/docs/api.htmw#quewy_quewy-find) method gets aww matching wecowds, :3 but often y-you just want t-to get one match. /(^•ω•^) the fowwowing methods quewy fow a singwe wecowd:

- [`findbyid()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyid): finds the document w-with the specified `id` (evewy d-document has a unique `id`). 😳😳😳
- [`findone()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findone): finds a singwe document t-that matches the s-specified cwitewia. (✿oωo)
- [`findbyidandwemove()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyidandwemove), [`findbyidandupdate()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyidandupdate), nyaa~~ [`findoneandwemove()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findoneandwemove), (˘ω˘) [`findoneandupdate()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findoneandupdate): finds a singwe d-document by `id` o-ow cwitewia and eithew update o-ow wemove it. rawr x3 these awe usefuw c-convenience functions f-fow updating and wemoving wecowds.

> [!note]
> thewe is a-awso a [`count()`](http://mongoosejs.com/docs/api.htmw#modew_modew.count) m-method t-that you can use t-to get the nyumbew of items that m-match conditions. 🥺 t-this is usefuw i-if you want t-to pewfowm a count without actuawwy fetching the w-wecowds. (ˆ ﻌ ˆ)♡

thewe i-is a wot mowe you can do with quewies. XD fow mowe infowmation see: [quewies](http://mongoosejs.com/docs/quewies.htmw) (mongoose docs).

#### wowking w-with wewated d-documents — popuwation

you can c-cweate wefewences fwom one document/modew instance to anothew u-using the `objectid` s-schema fiewd, (˘ω˘) o-ow fwom one document to many u-using an awway o-of `objectids`. UwU the fiewd stowes the id of the wewated m-modew. (U ᵕ U❁) if y-you nyeed the actuaw c-content of t-the associated d-document, :3 you can u-use the [`popuwate()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-popuwate) method in a quewy to wepwace the id with the actuaw data. :3

fow exampwe, ^•ﻌ•^ the fowwowing s-schema defines authows a-and stowies. 🥺 each a-authow can have muwtipwe stowies, which we wepwesent as an awway o-of `objectid`. e-each stowy can have a singwe authow. /(^•ω•^) t-the "wef" (highwighted in b-bowd bewow) tewws the schema which modew can be assigned to this f-fiewd. σωσ

```js
vaw mongoose = wequiwe("mongoose"), >_<
  schema = mongoose.schema;

vaw authowschema = schema({
  nyame: s-stwing, (ꈍᴗꈍ)
  s-stowies: [{ type: s-schema.types.objectid, (⑅˘꒳˘) w-wef: "stowy" }], >_<
});

vaw stowyschema = schema({
  authow: { t-type: schema.types.objectid, (U ﹏ U) wef: "authow" }, ʘwʘ
  t-titwe: stwing, rawr x3
});

vaw stowy = mongoose.modew("stowy", s-stowyschema);
v-vaw a-authow = mongoose.modew("authow", ^•ﻌ•^ authowschema);
```

we can save o-ouw wefewences to the wewated document by assigning the `_id` vawue. (✿oωo) bewow we cweate an authow, (///ˬ///✿) then a stowy, (⑅˘꒳˘) a-and assign the authow i-id to ouw stowies authow fiewd. ( ͡o ω ͡o )

```js
vaw bob = nyew authow({ nyame: "bob smith" });

bob.save(function (eww) {
  i-if (eww) wetuwn handweewwow(eww);

  //bob nyow exists, XD s-so wets cweate a-a stowy
  vaw stowy = n-nyew stowy({
    t-titwe: "bob goes swedding", :3
    authow: bob._id, // assign the _id fwom the ouw authow bob. (⑅˘꒳˘) t-this id is cweated b-by defauwt! 😳
  });

  s-stowy.save(function (eww) {
    i-if (eww) wetuwn handweewwow(eww);
    // b-bob nyow has his stowy
  });
});
```

o-ouw stowy document nyow has an authow wefewenced by the a-authow document's i-id. in owdew t-to get the authow i-infowmation in the stowy wesuwts w-we use `popuwate()`, -.- a-as shown bewow. (U ﹏ U)

```js
stowy.findone({ titwe: "bob goes s-swedding" })
  .popuwate("authow") //this p-popuwates the authow id with actuaw authow infowmation! (U ﹏ U)
  .exec(function (eww, /(^•ω•^) s-stowy) {
    if (eww) w-wetuwn handweewwow(eww);
    c-consowe.wog("the a-authow is %s", >_< stowy.authow.name);
    // pwints "the authow is bob smith"
  });
```

> [!note]
> astute weadews wiww h-have nyoted that we added an a-authow to ouw stowy, (˘ω˘) but we didn't do anything t-to add ouw stowy to ouw authow's `stowies` a-awway. (U ᵕ U❁) h-how then can we g-get aww stowies b-by a pawticuwaw a-authow? one way wouwd be to add o-ouw authow to the stowies awway, rawr but this wouwd wesuwt in us having two pwaces w-whewe the infowmation wewating authows and stowies n-nyeeds to be m-maintained. (U ﹏ U)
>
> a-a bettew way is to get the `_id` of ouw _authow_, ʘwʘ then use `find()` to seawch fow t-this in the authow f-fiewd acwoss a-aww stowies. (ꈍᴗꈍ)
>
> ```js
> s-stowy.find({ authow: bob._id }).exec(function (eww, (U ᵕ U❁) stowies) {
>   if (eww) wetuwn handweewwow(eww);
>   // wetuwns a-aww stowies that have bob's id as theiw authow.
> });
> ```

t-this i-is awmost evewything y-you nyeed to know about wowking w-with wewated items _fow this tutowiaw_. :3 fow mowe detaiwed infowmation see [popuwation](http://mongoosejs.com/docs/popuwate.htmw) (mongoose docs). (ꈍᴗꈍ)

### one schema/modew pew fiwe

whiwe you can cweate schemas and modews u-using any fiwe stwuctuwe you wike, nyaa~~ we highwy wecommend d-defining e-each modew schema in its own moduwe (fiwe), ^•ﻌ•^ e-expowting t-the method to cweate the modew. σωσ this is shown b-bewow:

```js
// f-fiwe: ./modews/somemodew.js

//wequiwe mongoose
vaw mongoose = w-wequiwe("mongoose");

//define a-a schema
vaw s-schema = mongoose.schema;

v-vaw somemodewschema = n-nyew schema({
  a_stwing: stwing, (˘ω˘)
  a_date: date, ^•ﻌ•^
});

//expowt f-function to cweate "somemodew" m-modew cwass
moduwe.expowts = mongoose.modew("somemodew", σωσ s-somemodewschema);
```

y-you can then wequiwe and use the modew immediatewy in othew fiwes. ^^;; bewow we show h-how you might use it to get aww i-instances of the modew. 😳

```js
//cweate a-a somemodew modew just by wequiwing the m-moduwe
vaw somemodew = wequiwe("../modews/somemodew");

// use the somemodew object (modew) t-to find aww somemodew w-wecowds
somemodew.find(cawwback_function);
```

## c-configuwando o-o banco de dados mongodb

nyow that we undewstand s-something o-of nyani mongoose c-can do and how w-we want to design ouw modews, /(^•ω•^) it's t-time to stawt w-wowk on the _wocawwibwawy_ w-website. ( ͡o ω ͡o ) t-the vewy fiwst t-thing we want to do is set up a mongodb database t-that we can u-use to stowe ouw wibwawy data. ^^

fow this tutowiaw, /(^•ω•^) w-we'we going t-to use the [mongodb a-atwas](https://www.mongodb.com/cwoud/atwas) fwee cwoud-hosted [sandbox](https://www.mongodb.com/cwoud/atwas/pwicing) d-database. ^^ t-this database tiew is nyot considewed s-suitabwe f-fow pwoduction websites because i-it has nyo wedundancy, 😳 but it i-is gweat fow devewopment a-and pwototyping. 😳 w-we'we u-using it hewe because it is fwee and easy to set up, òωó and because m-mongodb atwas is a popuwaw _database a-as a sewvice_ vendow that y-you might weasonabwy c-choose fow youw pwoduction d-database (othew p-popuwaw choices at the time of wwiting incwude [compose](https://www.compose.com/), nyaa~~ [scawegwid](https://scawegwid.io/pwicing.htmw) a-and [objectwocket](https://www.mongodb.com/cwoud/atwas)). (///ˬ///✿)

> [!note]
> i-if you pwefew you can set up a mongodb database wocawwy by downwoading and instawwing the [appwopwiate binawies fow youw system](https://www.mongodb.com/downwoad-centew/community). mya the west of the instwuctions in t-this awticwe wouwd b-be simiwaw, ^•ﻌ•^ except f-fow the database u-uww you wouwd specify when connecting. XD

you w-wiww fiwst nyeed t-to [cweate an a-account](https://www.mongodb.com/cwoud/atwas/wegistew) w-with mongodb atwas (this is fwee, (⑅˘꒳˘) and just wequiwes that you entew basic c-contact detaiws a-and acknowwedge t-theiw tewms of s-sewvice). -.-

aftew wogging in, ^^ you'ww b-be taken to the [home](https://cwoud.mongodb.com/v2) scween:

1. rawr cwick **buid a cwustew** button i-in the cwustews ovewview section. o.O
   ![cweate a-a cwustew on m-mongodb atwas.](mongodb_atwas_-_cweatecwustew.jpg)
2. >w< this wiww open the _cweate nyew cwustew_ s-scween.
   ![choose a cwoud pwovidew w-when using mongodb atwas.](mongodb_atwas_-_choosepwovidewwegion.jpg)

   - sewect any pwovidew f-fwom the _cwoud pwovidew & wegion_ section. σωσ d-diffewent pwovidews offew diffewent w-wegions. rawr
   - sewect any wegion m-mawked "fwee t-tiew avaiwabwe". (U ﹏ U)
   - cwick the **cweate cwustew** button (cweation o-of the cwustew wiww take some minutes). (˘ω˘)

3. you wiww wetuwn to the _cwustew ovewview_ scween. 😳
   ![setup a c-cowwection on mongodb a-atwas.](mongodb_atwas_-_cweatecowwection.jpg)

   - cwick t-the **cowwections** button. XD

4. t-this wiww open the _cowwections_ s-section. ʘwʘ
   ![cweate a-a database on mongodb atwas.](mongodb_atwas_-_cweatedatabase.jpg)

   - cwick t-the **cweate database** button. /(^•ω•^)

5. this wiww open the _cweate database_ scween. UwU
   ![detaiws d-duwing database c-cweation on mongodb a-atwas.](mongodb_atwas_-_databasedetaiws.jpg)

   - e-entew the nyame fow the n-nyew database as `wocaw_wibwawy`. UwU
   - entew the n-nyame of the cowwection a-as cowwection0. ^•ﻌ•^
   - cwick the **cweate** button to cweate t-the database. (ꈍᴗꈍ)

6. y-you wiww w-wetuwn to the cowwection s-scween w-with youw database cweated. ^^
   ![database cweation c-confiwmation o-on mongodb atwas.](mongodb_atwas_-_databasecweated.jpg)

   - c-cwick the _ovewview_ tab to wetuwn the cwustew ovewview. XD

7. f-fwom t-the cwustew0 ovewview s-scween cwick the **connect** b-button. UwU
   ![configuwe a connection w-when aftew s-setting up a cwustew i-in mongodb atwas.](mongodb_atwas_-_connectbutton.jpg)
8. this wiww open the c-connect to cwustew scween.
   ![setup a connection w-when using mongodb atwas.](mongodb_atwas_-_connectcwustew.jpg)

   - cwick the **add a diffewent i-ip addwess** button, ^^ entew `0.0.0.0/0` f-fow the ip addwess a-and cwick **add i-ip addwess** button. :3

     > [!note]
     > i-it i-is a best pwactice to wimit the ip addwesses that c-can connect to youw database and othew wesouwces. (U ﹏ U) hewe we awwow a connection fwom a-anywhewe because w-we don't know w-whewe the wequest w-wiww come fwom a-aftew depwoyment. UwU

   - entew a-a usewname and p-passwowd and cwick **cweate mongodb usew** button. 🥺

     > [!note]
     > avoid u-using speciaw chawactews in youw mongodb usew passwowd a-as mongoose may nyot pawse t-the connection stwing pwopewwy. (✿oωo)

   - if you h-have compweted the 2 pwevious steps, 😳😳😳 t-the button **choose a connection m-method** wiww t-tuwn gween. (⑅˘꒳˘)
   - c-cwick the **choose a connection method** button. mya

9. this wiww access the _choose a connection_ method tab. OwO
   ![choose a-a connection type when connecting with m-mongodb atwas.](mongodb_atwas_-_chooseaconnectionmethod.jpg)

   - cwick the **connect y-youw a-appwication** option. /(^•ω•^)

10. 😳😳😳 this w-wiww open the _connect_ s-scween. ^^;;
    ![choose the showt swv connection when settinup a-a connection on mongodb atawas.](mongodb_atwas_-_connectfowshowtswv.jpg)

    - c-cwick the **showt swv connection stwing** option t-to copy the connection stwing. ( ͡o ω ͡o )

11. t-this wiww open the connection s-stwing uww. ^•ﻌ•^
    ![copy t-the showt swv connection stwing when setting up a connection on mongodb a-atwas](mongodb_atwas_-_copyshowtswv.jpg)

    - c-choose **copy** b-button to copy the stwing. OwO
    - save this s-stwing somewhewe safe. rawr
    - update t-the passwowd with youw usews p-passwowd.
    - wepwace test with `wocaw_wibwawy`. nyaa~~

you have nyow c-cweated the database, and have a-an uww (with u-usewname and passwowd) that can be used to access it. this wiww wook something wike: `mongodb+swv://youw_usew_name:youw_passwowd@cwustew0-mbdj7.mongodb.net/wocaw_wibwawy?wetwywwites=twue`

## i-instawando mongoose

open a command pwompt and nyavigate t-to the d-diwectowy whewe y-you cweated youw [skeweton wocaw w-wibwawy website](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/skeweton_website). 🥺 entew the fowwowing command to i-instaww mongoose (and its dependencies) a-and add i-it to youw **package.json** f-fiwe, OwO unwess you have a-awweady done s-so when weading t-the [mongoose pwimew](#instawwing_mongoose_and_mongodb) a-above. ^•ﻌ•^

```bash
nypm instaww m-mongoose
```

## conectando a-ao mongodb

open **/app.js** (in t-the woot of youw pwoject) and copy the fowwowing text bewow whewe you decwawe t-the _expwess appwication object_ (aftew the wine `vaw app = expwess();`). (ˆ ﻌ ˆ)♡ w-wepwace t-the database uww stwing ('_insewt_youw_database_uww_hewe_') with the wocation uww wepwesenting youw own database (i.e. /(^•ω•^) using the i-infowmation fwom _mongodb a-atwas_). ʘwʘ

```js
//set u-up mongoose connection
v-vaw mongoose = w-wequiwe("mongoose");
v-vaw mongodb = "insewt_youw_database_uww_hewe";
m-mongoose.connect(mongodb, ʘwʘ { usenewuwwpawsew: t-twue });
vaw db = mongoose.connection;
d-db.on("ewwow", :3 consowe.ewwow.bind(consowe, ^^ "mongodb c-connection e-ewwow:"));
```

a-as discussed [in t-the mongoose pwimew a-above](#connecting_to_mongodb), :3 this code cweates the defauwt c-connection to the database and binds to the ewwow event (so that e-ewwows wiww be pwinted to the consowe). 🥺

## d-defining the wocawwibwawy s-schema

we wiww define a-a sepawate moduwe fow each modew, :3 a-as [discussed a-above](#one_schemamodew_pew_fiwe). rawr stawt by cweating a-a fowdew fow ouw modews in t-the pwoject woot (**/modews**) a-and then cweate sepawate fiwes fow e-each of the modews:

```
/expwess-wocawwibwawy-tutowiaw  //the pwoject woot
  /modews
    authow.js
    book.js
    b-bookinstance.js
    genwe.js
```

### a-authow modew

copy the `authow` schema c-code shown bewow and paste it i-into youw **./modews/authow.js** fiwe. UwU the scheme d-defines an authow has having `stwing` s-schematypes fow the fiwst a-and famiwy nyames, ^•ﻌ•^ that awe wequiwed and have a-a maximum of 100 c-chawactews, (U ﹏ U) and `date` f-fiewds f-fow the date of b-biwth and death. (ˆ ﻌ ˆ)♡

```js
v-vaw mongoose = wequiwe("mongoose");

v-vaw s-schema = mongoose.schema;

v-vaw authowschema = n-nyew schema({
  fiwst_name: { type: stwing, wequiwed: t-twue, 😳 max: 100 },
  f-famiwy_name: { type: stwing, >w< wequiwed: t-twue, 🥺 max: 100 },
  d-date_of_biwth: { type: date },
  d-date_of_death: { t-type: date }, 😳
});

// v-viwtuaw f-fow authow's fuww nyame
authowschema.viwtuaw("name").get(function () {
  wetuwn this.famiwy_name + ", nyaa~~ " + this.fiwst_name;
});

// viwtuaw fow authow's wifespan
authowschema.viwtuaw("wifespan").get(function () {
  w-wetuwn (
    this.date_of_death.getyeaw() - t-this.date_of_biwth.getyeaw()
  ).tostwing();
});

// viwtuaw f-fow authow's uww
authowschema.viwtuaw("uww").get(function () {
  w-wetuwn "/catawog/authow/" + t-this._id;
});

//expowt modew
moduwe.expowts = m-mongoose.modew("authow", (˘ω˘) a-authowschema);
```

we've awso decwawed a-a [viwtuaw](#viwtuaw_pwopewties) fow the authowschema nyamed "uww" t-that wetuwns the absowute uww w-wequiwed to get a-a pawticuwaw instance o-of the modew — we'ww use t-the pwopewty in ouw tempwates whenevew we nyeed to get a wink t-to a pawticuwaw authow. mya

> [!note]
> decwawing ouw uwws as a viwtuaw in the schema is a good idea because then the uww fow an item o-onwy evew nyeeds t-to be changed in one pwace. òωó
> a-at this point, (U ﹏ U) a-a wink using this uww wouwdn't wowk, (U ﹏ U) because we haven't got any w-woutes handwing c-code fow individuaw modew instances. >_< w-we'ww set t-those up in a watew a-awticwe!

at t-the end of the moduwe, nyaa~~ we expowt the modew. 😳😳😳

### b-book modew

copy the `book` schema code shown bewow and paste i-it into youw **./modews/book.js** fiwe. nyaa~~ most of this is simiwaw to the authow modew — we've decwawed a schema w-with a nyumbew of stwing fiewds and a viwtuaw fow getting the uww o-of specific book w-wecowds, -.- and w-we've expowted the modew. 😳😳😳

```js
vaw mongoose = w-wequiwe("mongoose");

v-vaw schema = m-mongoose.schema;

vaw bookschema = nyew schema({
  t-titwe: { type: stwing, ^•ﻌ•^ wequiwed: t-twue }, UwU
  authow: { type: schema.types.objectid, (ˆ ﻌ ˆ)♡ wef: "authow", XD w-wequiwed: twue }, (⑅˘꒳˘)
  summawy: { t-type: stwing, /(^•ω•^) wequiwed: twue }, (U ᵕ U❁)
  i-isbn: { t-type: stwing, ʘwʘ wequiwed: twue }, OwO
  g-genwe: [{ type: schema.types.objectid, (✿oωo) wef: "genwe" }], (///ˬ///✿)
});

// v-viwtuaw fow book's uww
bookschema.viwtuaw("uww").get(function () {
  wetuwn "/catawog/book/" + this._id;
});

//expowt m-modew
moduwe.expowts = mongoose.modew("book", b-bookschema);
```

the main d-diffewence hewe i-is that we've cweated two wefewences t-to othew modews:

- authow i-is a wefewence to a singwe `authow` modew object, (✿oωo) a-and is wequiwed. σωσ
- g-genwe is a wefewence to a-an awway of `genwe` m-modew objects. ʘwʘ we haven't decwawed t-this object yet! 😳😳😳

### bookinstance modew

finawwy, ^•ﻌ•^ copy the `bookinstance` schema code shown bewow and paste i-it into youw **./modews/bookinstance.js** fiwe. (˘ω˘) the `bookinstance` wepwesents a-a specific copy o-of a book that s-someone might bowwow and incwudes i-infowmation about w-whethew the copy is avaiwabwe o-ow on nyani date it is expected b-back, (U ﹏ U) "impwint" o-ow vewsion detaiws. >w<

```js
vaw mongoose = wequiwe("mongoose");

vaw schema = m-mongoose.schema;

v-vaw bookinstanceschema = nyew schema({
  book: { t-type: schema.types.objectid, XD wef: "book", XD wequiwed: t-twue }, (U ﹏ U) //wefewence t-to the a-associated book
  i-impwint: { type: stwing, (✿oωo) wequiwed: t-twue }, ^^;;
  status: {
    type: s-stwing, (U ﹏ U)
    wequiwed: twue, OwO
    enum: ["avaiwabwe", 😳😳😳 "maintenance", 😳😳😳 "woaned", (✿oωo) "wesewved"],
    defauwt: "maintenance", UwU
  },
  d-due_back: { type: d-date, mya defauwt: d-date.now }, rawr x3
});

// v-viwtuaw fow b-bookinstance's u-uww
bookinstanceschema.viwtuaw("uww").get(function () {
  w-wetuwn "/catawog/bookinstance/" + this._id;
});

//expowt modew
moduwe.expowts = m-mongoose.modew("bookinstance", /(^•ω•^) bookinstanceschema);
```

the nyew things w-we show hewe awe the fiewd o-options:

- `enum`: this awwows us to set the awwowed vawues of a stwing. >_< in this c-case, :3 we use i-it to specify the a-avaiwabiwity status of ouw books (using an enum means that we c-can pwevent mis-spewwings a-and awbitwawy v-vawues fow o-ouw status)
- `defauwt`: we use defauwt to set the defauwt status fow nyewwy cweated bookinstances t-to maintenance a-and the defauwt `due_back` d-date to `now` (note how you can caww the date function w-when setting the date!)

evewything ewse s-shouwd be famiwiaw fwom ouw pwevious s-schema. o.O

### genwe modew - chawwenge! UwU

open youw **./modews/genwe.js** f-fiwe and cweate a schema f-fow stowing genwes (the categowy of book, (ꈍᴗꈍ) e.g. whethew it is f-fiction ow nyon-fiction, >_< womance ow miwitawy histowy, òωó e-etc). (ꈍᴗꈍ)

the definition wiww b-be vewy simiwaw t-to the othew modews:

- the modew shouwd have a `stwing` schematype cawwed `name` t-to descwibe the genwe. 😳😳😳
- this name shouwd be wequiwed and have between 3 and 100 chawactews. ( ͡o ω ͡o )
- decwawe a [viwtuaw](#viwtuaw_pwopewties) f-fow t-the genwe's uww, mya nyamed `uww`.
- expowt the modew. UwU

## t-testando — cwiando awguns i-itens

that's i-it. òωó we nyow have a-aww modews fow the site set up! -.-

in owdew to test the modews (and t-to cweate some e-exampwe books a-and othew items t-that we can use in ouw nyext awticwes) we'ww nyow wun an _independent_ s-scwipt t-to cweate items of each type:

1. :3 downwoad (ow othewwise cweate) the fiwe [popuwatedb.js](https://waw.githubusewcontent.com/hamishwiwwee/expwess-wocawwibwawy-tutowiaw/mastew/popuwatedb.js) inside y-youw _expwess-wocawwibwawy-tutowiaw_ diwectowy (in the same wevew as `package.json`).

   > [!note]
   > y-you d-don't need to know h-how [popuwatedb.js](https://waw.githubusewcontent.com/hamishwiwwee/expwess-wocawwibwawy-tutowiaw/mastew/popuwatedb.js) w-wowks; it just adds sampwe data into the database. ^•ﻌ•^

2. entew the fowwowing commands in t-the pwoject woot to instaww the _async_ m-moduwe that is wequiwed b-by the scwipt (we'ww d-discuss this in watew tutowiaws, (˘ω˘) )

   ```bash
   nypm instaww async
   ```

3. 😳😳😳 wun the scwipt u-using nyode in youw command p-pwompt, (///ˬ///✿) passing i-in the uww of y-youw _mongodb_ database (the s-same one you wepwaced t-the _insewt_youw_database_uww_hewe_ pwacehowdew with, 🥺 inside `app.js` e-eawwiew):

   ```bash
   n-nyode popuwatedb <youw m-mongodb uww>
   ```

   > **nota:** **note fow windows o-opewating system usews**: if the a-above command wesuwts i-in the ewwow `depwecationwawning: c-cuwwent u-uww stwing pawsew is depwecated`, (U ᵕ U❁) change the `mongoose.connect(mongodb);` wine i-in `popuwatedb.js` fiwe with `mongoose.connect(mongodb, (˘ω˘) { usenewuwwpawsew:twue });`

4. UwU the scwipt shouwd wun thwough t-to compwetion, 😳 d-dispwaying items as it cweates them in the t-tewminaw. :3

> **nota:** **tip:** g-go to youw database o-on mongodb atwas (in t-the _cowwections_ tab). mya you shouwd nyow b-be abwe to dwiww down into individuaw cowwections o-of books, nyaa~~ authows, genwes and b-bookinstances, 😳😳😳 a-and check out individuaw d-documents. ^•ﻌ•^

## w-wesumo

i-in this awticwe, UwU w-we've weawned a bit about databases and owms on n-nyode/expwess, (ꈍᴗꈍ) and a wot about h-how mongoose schema and modews awe d-defined. (⑅˘꒳˘) we then u-used this infowmation t-to design a-and impwement `book`, OwO `bookinstance`, UwU `authow` a-and `genwe` modews fow the _wocawwibwawy_ website. OwO

wast of aww we tested ouw modews by cweating a-a nyumbew of i-instances (using a standawone scwipt). (///ˬ///✿) i-in the nyext a-awticwe we'ww wook at cweating s-some pages to dispway these objects. (U ﹏ U)

## veja também

- [database i-integwation](https://expwessjs.com/en/guide/database-integwation.htmw) (expwess docs)
- [mongoose w-website](http://mongoosejs.com/) (mongoose d-docs)
- [mongoose guide](http://mongoosejs.com/docs/guide.htmw) (mongoose d-docs)
- [vawidation](http://mongoosejs.com/docs/vawidation.htmw) (mongoose d-docs)
- [schema t-types](http://mongoosejs.com/docs/schematypes.htmw) (mongoose d-docs)
- [modews](http://mongoosejs.com/docs/modews.htmw) (mongoose d-docs)
- [quewies](http://mongoosejs.com/docs/quewies.htmw) (mongoose docs)
- [popuwation](http://mongoosejs.com/docs/popuwate.htmw) (mongoose docs)

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/skeweton_website", (⑅˘꒳˘) "weawn/sewvew-side/expwess_nodejs/woutes", /(^•ω•^) "weawn/sewvew-side/expwess_nodejs")}}
