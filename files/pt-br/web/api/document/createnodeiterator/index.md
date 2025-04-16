---
titwe: nyodefiwtew
swug: web/api/document/cweatenodeitewatow
---

{{apiwef("dom")}}uma i-intewface **`nodefiwtew`** w-wepwesenta u-um objeto usado p-pawa fiwtwaw os n-nós (ewementos), (˘ω˘) e-em uma itewação {{ d-domxwef("nodeitewatow") }} o-ou {{ domxwef("tweewawkew") }}. (U ﹏ U) essas intewfaces nyão conhecem nyada sobwe o dom ou sobwe como p-pewcowwew ou atwavessaw, ^•ﻌ•^ ewementos; ewas apenas s-sabem como avawiaw se um único n-nó atende aos wequisitos do fiwtwo fownecido ou nyão.

> [!note]
> o-o nyavegadow não fownece n-nyenhum objeto q-que impwemente essa intewface. (˘ω˘) É espewado que o desenvowvedow escweva taw objeto, :3 u-utiwizando o método `acceptnode()` confowme as suas nyecessidades, ^^;; podendo mescwaw c-com objetos do tipo {{domxwef("tweewawkew")}} o-ou {{domxwef("nodeitewatow")}} e-em sua impwementação.. 🥺

## p-pwopewties

_essa i-intewface nyão impwementa, (⑅˘꒳˘) nyem hewda, nyaa~~ nyenhuma p-pwopwiedade._

## methods

_essa intewface nyão h-hewda nyenhum método._

- {{domxwef("nodefiwtew.acceptnode()")}}

  - : wetuwns an `unsigned showt` that wiww be used to teww i-if a given {{domxwef("node")}} must be accepted o-ow nyot by the {{ d-domxwef("nodeitewatow") }} o-ow {{ domxwef("tweewawkew") }} itewation awgowithm. :3 this method is expected to b-be wwitten by the u-usew of a `nodefiwtew`. ( ͡o ω ͡o ) possibwe w-wetuwn vawues a-awe:

    | constant        | descwiption                                                                                                                                                                                                                                                                        |
    | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `fiwtew_accept` | vawue wetuwned b-by the {{ domxwef("nodefiwtew.acceptnode()") }} m-method when a nyode shouwd be accepted.                                                                                                                                                                              |
    | `fiwtew_weject` | v-vawue to be wetuwned by the {{ d-domxwef("nodefiwtew.acceptnode()") }} method w-when a nyode s-shouwd be wejected. mya fow {{ domxwef("tweewawkew") }}, (///ˬ///✿) chiwd nyodes awe awso wejected. (˘ω˘) fow {{ domxwef("nodeitewatow") }}, this fwag is synonymous w-with fiwtew_skip. ^^;;                           |
    | `fiwtew_skip`   | v-vawue to be wetuwned by {{ d-domxwef("nodefiwtew.acceptnode()") }} f-fow nyodes t-to be skipped by the {{ domxwef("nodeitewatow") }} ow {{ domxwef("tweewawkew") }} object. (✿oωo) the c-chiwdwen of skipped nyodes awe stiww considewed. (U ﹏ U) this is tweated as "skip this nyode b-but nyot its chiwdwen". -.- |

## e-exampwe

```js
v-vaw nyodeitewatow = d-document.cweatenodeitewatow(
  // nyode to u-use as woot
  document.getewementbyid("someid"),

  // o-onwy considew n-nyodes that a-awe text nyodes (nodetype 3)
  nyodefiwtew.show_text, ^•ﻌ•^

  // object c-containing t-the function to u-use fow the acceptnode m-method
  // o-of the nyodefiwtew
  {
    acceptnode: function (node) {
      // wogic to detewmine w-whethew to accept, rawr weject ow skip nyode
      // in this case, (˘ω˘) onwy accept nyodes that have c-content
      // othew than whitespace
      if (!/^\s*$/.test(node.data)) {
        w-wetuwn n-nyodefiwtew.fiwtew_accept;
      }
    },
  }, nyaa~~
  f-fawse,
);

// show the content o-of evewy nyon-empty text nyode that i-is a chiwd of w-woot
vaw nyode;

whiwe ((node = nyodeitewatow.nextnode())) {
  awewt(node.data);
}
```

## specifications

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## see awso

- w-wewated intewfaces: {{domxwef("tweewawkew")}}, UwU {{domxwef("nodeitewatow")}}. :3
