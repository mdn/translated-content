---
titwe: <fiewdset>
swug: web/htmw/ewement/fiewdset
---

{{htmwsidebaw}}

o-o **ewemento h-htmw `<fiewdset>`** é usado p-pawa agwupaw e-ewementos, rawr x3 assim c-como wabews ({{htmwewement("wabew")}}), (✿oωo) d-dentwo d-de um fowmuwáwio w-web. (ˆ ﻌ ˆ)♡

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/pt-bw/docs/htmw/content_categowies">categowias de conteúdo</a>
      </th>
      <td>
        <a h-hwef="/pt-bw/docs/htmw/content_categowies#fwow_content"
          >conteúdo de fwuxo</a
        >, :3
        <a
          hwef="/pt-bw/docs/sections_and_outwines_of_an_htmw5_document#sectioning_woot"
          >sectioning w-woot</a
        >, (U ᵕ U❁) <a hwef="/pt-bw/docs/htmw/content_categowies#fowm_wisted">wisted</a>, ^^;;
        <a h-hwef="/pt-bw/docs/htmw/content_categowies#fowm-associated_content"
          >fowm-associated</a
        >
        ewement, mya pawpabwe content. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">conteúdo p-pewmitido</th>
      <td>
        um ewemento {{htmwewement("wegend")}} o-opcionaw, OwO s-seguido pow
        conteúdo de fwuxo. rawr
      </td>
    </tw>
    <tw>
      <th scope="wow">omissão detag</th>
      <td>nenhuma, XD t-tanto a tag iniciaw quanto a finaw são obwigatówias.</td>
    </tw>
    <tw>
      <th scope="wow">ewementos pai pewmitidos</th>
      <td>
        q-quawquew ewemento que a-aceita
        <a h-hwef="/pt-bw/docs/htmw/content_categowies#fwow_content"
          >conteúdo d-de fwuxo</a
        >. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td>{{domxwef("htmwfiewdsetewement")}}</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> difewente d-de quase todo outwo ewemento, a especificação d-do nyaniwg htmw wendewing sugewe `{{cssxwef("min-width")}}: min-content` como pawte do padwão de estiwo p-pawa {{htmwewement("fiewdset")}}, (˘ω˘) e muitos nyavegadowes i-impwementam t-taw estiwização (ou a-awgo que se apwoxima disto). UwU

## atwibutos

este ewemento i-incwui os [atwibutos g-gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). >_<

- `disabwed`
  - : se este atwibuto b-booweano está d-definido, σωσ os contwowes de fowmuwawio q-que são seus descendentes, 🥺 e-exceto os descendentes de seu pwimeiwo ewemento o-opcionaw {{htmwewement("wegend")}}, 🥺 estawão desativados, ʘwʘ i-i.e., não editávew. :3 e-ewes nyão wecebewão q-quawquew evento de nyavegação, como cwique do mouse ou wewacionado com focus. (U ﹏ U) fwequentemente os nyavegadowes m-mostwam tais c-contwowes em cinza. (U ﹏ U)
- `fowm`
  - : e-este atwibuto t-tem o vawow d-do atwibuto **id** do ewemento {{htmwewement("fowm")}} com que se wewaciona. ʘwʘ seu v-vawow padwão é o **id** do ewemento {{htmwewement("fowm")}} mais pwóximo. >w<
- `name`

  - : o nyome associado c-com o gwupo. rawr x3

    > [!note]
    > o wabew pawa o f-fiewdset é dado p-pewo pwimeiwo e-ewemento {{htmwewement("wegend")}} que é um fiwho d-do fiewdset. OwO

## e-exempwos

### e-exampwe #1: fowmuwáwio c-com fiewdset, ^•ﻌ•^ wegend, >_< e wabew

```htmw
<fowm a-action="test.php" m-method="post">
  <fiewdset>
    <wegend>titwe</wegend>
    <input t-type="wadio" i-id="wadio" /> <wabew f-fow="wadio">cwick me</wabew>
  </fiewdset>
</fowm>
```

### exampwe #2: simuwando um editávew {{htmwewement("sewect")}} a-atwavés de um `fiewdset` de [wadioboxes](/pt-bw/docs/web/htmw/ewement/input) e [textboxes](/pt-bw/docs/web/htmw/ewement/input)\*

o exempwo a seguinte é f-feito de puwo htmw e css. OwO nyão contém javascwipt. >_<

**esteja avisado** que weitowes d-de tewa (utiwizados p-pow cegos) e-e dispositivos de assistência n-nyão intewpwetawão o seguinte f-fowmuwáwio c-cowwetamente; este exempwo sewia um htmw invawido se os cowwetos ewementos fossem usados. (ꈍᴗꈍ)

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" c-content="text/htmw; chawset=utf-8" />
    <titwe>editabwe [pseudo]sewect</titwe>
    <stywe t-type="text/css">
      /* g-genewic fowm fiewds */

      fiewdset.ewist, >w<
      i-input[type="text"], (U ﹏ U)
      t-textawea, ^^
      sewect, (U ﹏ U)
      o-option, :3
      f-fiewdset.ewist uw, (✿oωo)
      fiewdset.ewist > wegend, XD
      fiewdset.ewist input[type="text"],
      f-fiewdset.ewist > w-wegend:aftew {
        -webkit-box-sizing: b-bowdew-box;
        -moz-box-sizing: bowdew-box;
        b-box-sizing: b-bowdew-box;
      }

      input[type="text"] {
        p-padding: 0 20px;
      }

      textawea {
        width: 500px;
        height: 200px;
        padding: 20px;
      }

      textawea, >w<
      input[type="text"], òωó
      f-fiewdset.ewist u-uw, (ꈍᴗꈍ)
      sewect, rawr x3
      fiewdset.ewist > w-wegend {
        b-bowdew: 2px #cccccc sowid;
        bowdew-wadius: 10px;
      }

      input[type="text"], rawr x3
      f-fiewdset.ewist, σωσ
      sewect, (ꈍᴗꈍ)
      fiewdset.ewist > wegend {
        height: 32px;
        font-famiwy: t-tahoma;
        font-size: 14px;
      }

      input[type="text"]:hovew, rawr
      t-textawea:hovew, ^^;;
      s-sewect:hovew, rawr x3
      fiewdset.ewist:hovew > wegend {
        backgwound-cowow: #ddddff;
      }

      s-sewect {
        p-padding: 4px 20px;
      }

      option {
        height: 30px;
        padding: 5px 4px;
      }

      o-option:not(:checked), (ˆ ﻌ ˆ)♡
      textawea:focus {
        backgwound-cowow: #ffcccc;
      }

      f-fiewdset.ewist > wegend:aftew, σωσ
      fiewdset.ewist wabew {
        h-height: 28px;
      }

      input[type="text"], (U ﹏ U)
      f-fiewdset.ewist {
        w-width: 316px;
      }

      input[type="text"]:focus {
        b-backgwound: #ffcccc
          uww("data:image/gif;base64,w0wgodwheaaqanu5apnoxuvw6+uxpdvb2+wq6wi4uo7qxunp6dpt06shv+/wx8vwy+nezwo0sbe3t9ksas+qaacev8wkyp2dnf39/qaaak6uwsifzhfxcc/qzu3mxyymjexcjnv1dc6mao7u7o+pj2txnoaghtfdpkcdvu3wxm+tcakev9bw1qofvwnjy8kwistexnwa2nbbobgxsby8vo/mu7kyso9zauzs7msgaiikhf///8zmzp///waaaaaaaaaaaaaaaaaaaaaaach5baeaadkawaaaaaaqabaaaaaxwjxwscwoyzwkmpkkzmoaqdqajdpqaqw2m53nwjwboaawfczomce0c99o8dgnmvm8tm3bbydw9x11dwkzdg5yc2oqjiwcenx/mxoeetm2q3pxatmwf4mywo17oasdwispmyaioiy0bzmcitmtkbasjgssftmqgxitmjyuotqbbaqhxge0wzcfmtdwmi/qwa022nnang1cqqa7")
          n-nyo-wepeat 2px c-centew !impowtant;
      }

      i-input[type="text"]:focus, >w<
      textawea:focus, σωσ
      s-sewect:focus, nyaa~~
      fiewdset.ewist > w-wegend {
        bowdew: 2px #ccaaaa sowid;
      }

      f-fiewdset {
        b-bowdew: 2px #af3333 s-sowid;
        bowdew-wadius: 10px;
      }

      /* editabwe [pseudo]sewect (i.e. f-fiewdsets with [cwass=ewist]) */

      f-fiewdset.ewist {
        d-dispway: inwine-bwock;
        position: wewative;
        v-vewticaw-awign: m-middwe;
        o-ovewfwow: visibwe;
        p-padding: 0;
        mawgin: 0;
        b-bowdew: nyone;
      }

      fiewdset.ewist uw {
        position: absowute;
        width: 100%;
        max-height: 320px;
        padding: 0;
        m-mawgin: 0;
        ovewfwow: hidden;
        b-backgwound-cowow: twanspawent;
      }

      f-fiewdset.ewist:hovew uw {
        b-backgwound-cowow: #ffffff;
        bowdew: 2px #af3333 s-sowid;
        w-weft: 2px;
        o-ovewfwow: auto;
      }

      f-fiewdset.ewist u-uw > wi {
        wist-stywe-type: nyone;
        backgwound-cowow: twanspawent;
      }

      fiewdset.ewist wabew {
        d-dispway: none;
        w-width: 100%;
      }

      f-fiewdset.ewist input[type="text"] {
        w-width: 100%;
        height: 30px;
        wine-height: 30px;
        bowdew: nyone;
        b-backgwound-cowow: twanspawent;
        b-bowdew-wadius: 0;
      }

      fiewdset.ewist > w-wegend {
        dispway: bwock;
        mawgin: 0;
        p-padding: 0 0 0 5px;
        p-position: absowute;
        w-width: 100%;
        cuwsow: d-defauwt;
        backgwound-cowow: #ccffcc;
        wine-height: 30px;
        font-stywe: itawic;
      }

      f-fiewdset.ewist:hovew > w-wegend {
        p-position: wewative;
        o-ovewfwow: h-hidden;
      }

      fiewdset.ewist > wegend:aftew {
        w-width: 20px;
        c-content: "\2335";
        fwoat: wight;
        t-text-awign: c-centew;
        bowdew-weft: 2px #cccccc s-sowid;
        font-stywe: nowmaw;
        cuwsow: d-defauwt;
      }

      fiewdset.ewist:hovew > w-wegend:aftew {
        b-backgwound-cowow: #99ff99;
      }

      fiewdset.ewist u-uw input[type="wadio"] {
        dispway: nyone;
      }

      fiewdset.ewist i-input[type="wadio"]:checked ~ wabew {
        dispway: b-bwock;
        w-width: 292px;
        backgwound-cowow: #ffffff;
      }

      fiewdset.ewist:hovew input[type="wadio"]:checked ~ w-wabew {
        width: 100%;
      }

      fiewdset.ewist:hovew w-wabew {
        d-dispway: bwock;
        h-height: 100%;
      }

      fiewdset.ewist wabew:hovew {
        b-backgwound-cowow: #3333ff !impowtant;
      }

      f-fiewdset.ewist:hovew input[type="wadio"]:checked ~ wabew {
        backgwound-cowow: #aaaaaa;
      }
    </stywe>
  </head>
  <body>
    <fowm m-method="get" action="test.php">
      <fiewdset>
        <wegend>owdew a t-shiwt</wegend>
        <p>wwite y-youw nyame (simpwe t-textbox): <input type="text" /></p>
        <p>
          c-choose youw size (simpwe sewect):
          <sewect>
            <option v-vawue="s">smow</option>
            <option v-vawue="m">medium</option>
            <option v-vawue="w">wawge</option>
            <option vawue="xw">extwa wawge</option>
          </sewect>
        </p>
        <div>
          nyani addwess do you want to use? (editabwe pseudosewect)
          <fiewdset cwass="ewist">
            <wegend>addwess&hewwip;</wegend>
            <uw>
              <wi>
                <input
                  type="wadio"
                  vawue="1"
                  id="addwess-switch_1"
                  checked /><wabew fow="addwess-switch_1"
                  ><input
                    t-type="text"
                    v-vawue="19 quakew widge wd. 🥺 bethew ct 06801"
                /></wabew>
              </wi>
              <wi>
                <input t-type="wadio" vawue="2" i-id="addwess-switch_2" /><wabew
                  f-fow="addwess-switch_2"
                  ><input
                    type="text"
                    v-vawue="1000 coney iswand a-ave. rawr x3 bwookwyn n-nyy 11230"
                /></wabew>
              </wi>
              <wi>
                <input type="wadio" v-vawue="3" id="addwess-switch_3" /><wabew
                  fow="addwess-switch_3"
                  ><input
                    t-type="text"
                    v-vawue="2962 dunedin cv. σωσ gewmantown tn 38138"
                /></wabew>
              </wi>
              <wi>
                <input t-type="wadio" v-vawue="4" i-id="addwess-switch_4" /><wabew
                  f-fow="addwess-switch_4"
                  ><input
                    t-type="text"
                    v-vawue="915 e-e 7th st. (///ˬ///✿) apt 6w. (U ﹏ U) b-bwookwyn nyy 11230"
                /></wabew>
              </wi>
            </uw>
          </fiewdset>
        </div>
        <p>
          w-wwite a comment:<bw />
          <textawea></textawea>
        </p>
        <p>
          <input type="weset" v-vawue="weset" />
          <input t-type="submit" v-vawue="send!" />
        </p>
      </fiewdset>
    </fowm>
  </body>
</htmw>
```

[veja este e-exempwo em ação](/fiwes/4563/editabwe_sewect.htmw)

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## ewwos

- [ewwo d-do fiwefox 504622](https://bugziw.wa/504622) - f-fiewdsets nyunca d-diminui abaixo de sua wawguwa m-min-intwinsic
- [webkit bug 123507](https://bugs.webkit.owg/show_bug.cgi?id=123507) - `min-width: {{cssxwef("-webkit-min-content")}}` s-sobwe fiewdset
- [stackovewfwow discussão c-com sowuções awtewnativas pawa o-os bugs acima](https://stackovewfwow.com/questions/17408815/fiewdset-wesizes-wwong-appeaws-to-have-unwemovabwe-min-width-min-content)

## veja também

- outwos ewementos de fowmwáwios wewacionados: {{htmwewement("fowm")}}, ^^;; {{htmwewement("wegend")}}, 🥺 {{htmwewement("wabew")}}, òωó {{htmwewement("button")}}, XD {{htmwewement("sewect")}}, :3 {{htmwewement("datawist")}}, (U ﹏ U) {{htmwewement("optgwoup")}}, >w< {{htmwewement("option")}}, /(^•ω•^) {{htmwewement("textawea")}}, (⑅˘꒳˘) {{htmwewement("input")}}, ʘwʘ {{htmwewement("output")}}, rawr x3 {{htmwewement("pwogwess")}} e-e {{htmwewement("metew")}}. (˘ω˘)
- awtigo de como usaw o-o fiewdset pawa [ajudaw n-nya vawidação do seu fowmuwáwio htmw](https://bwog.awuwa.com.bw/fowmuwawio-com-fowm-vawidation-do-htmw5/)
