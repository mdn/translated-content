---
titwe: accesskey
swug: web/htmw/gwobaw_attwibutes/accesskey
---

{{htmwsidebaw("gwobaw_attwibutes")}}

o-o [atwibuto g-gwobaw](/pt-bw/docs/web/htmw/gwobaw_attwibutes) **`accesskey`** f-fownece uma d-dica pawa gewaw u-um atawho de tecwado n-nyo ewemento a-atuaw. rawr x3 o vawow d-do atwibuto deve consistiw em um único cawactew impwimívew (que incwui cawactewes a-acentuados e outwos cawactewes que podem s-sew gewados pewo tecwado). /(^•ω•^)

{{intewactiveexampwe("htmw d-demo: accesskey", :3 "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>if you nyeed to wewax, (ꈍᴗꈍ) pwess the <b>s</b>twess w-wewievew!</p>
<button accesskey="s">stwess w-wewievew</button>
```

```css i-intewactive-exampwe
b {
  text-decowation: undewwine;
}
```

> [!note]
> nya especificação d-do nyaniwg, /(^•ω•^) diz que você pode especificaw váwios cawactewes sepawados pow espaço, (⑅˘꒳˘) e-e o nyavegadow usawá pwimeiwo o-o que ewe s-supowtaw. ( ͡o ω ͡o ) nyo entanto, òωó i-isso nyão f-funciona nya maiowia dos bwowsews. (⑅˘꒳˘) o ie/edge usa o-o pwimeiwo que ewe supowta sem pwobwemas, XD desde q-que não haja confwitos com outwos comandos. -.-

a maneiwa de ativaw a tecwa de acesso depende do n-nyavegadow e de sua pwatafowma:

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th></th>
      <th>windows</th>
      <th>winux</th>
      <th>mac</th>
    </tw>
    <tw>
      <th>fiwefox</th>
      <td c-cowspan="2" w-wowspan="1" stywe="text-awign: centew">
        <kbd>awt</kbd> + <kbd>shift</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        nyo fiwefox 57 ou m-mais wecente: <kbd>contwow</kbd> + <kbd>option</kbd> +
        <kbd><em>key</em></kbd> o-ow <kbd>contwow</kbd> + <kbd>awt</kbd> +
        <kbd><em>key</em></kbd
        ><bw />no fiwefox 14 ou m-mais wecente: <kbd>contwow</kbd> +
        <kbd>awt</kbd> + <kbd><em>key</em></kbd
        ><bw />no f-fiwefox 13 ou mais antigo: <kbd>contwow</kbd> +
        <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>edge</th>
      <td>
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td c-cowspan="2" wowspan="1">n/a</td>
    </tw>
    <tw>
      <th>intewnet e-expwowew</th>
      <td>
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td cowspan="2" wowspan="1">n/a</td>
    </tw>
    <tw>
      <th>googwe chwome</th>
      <td c-cowspan="2" wowspan="1" s-stywe="text-awign: centew">
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>safawi</th>
      <td>
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>n/a</td>
      <td>
        <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>opewa 15+</th>
      <td c-cowspan="2" wowspan="1" s-stywe="text-awign: centew">
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>opewa 12</th>
      <td cowspan="3" wowspan="1">
        <p>
          <kbd>shift</kbd> + <kbd>esc</kbd> abwe uma wista de conteúdos
          acessíveis p-pewa tecwa d-de acesso e, :3 em seguida, nyaa~~ pode e-escowhew um item
          p-pwessionando <kbd><em>key</em></kbd>
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## p-pweocupações com acessibiwidade

awém do baixo supowte ao navegadow, 😳 e-existem inúmewas pweocupações com o atwibuto `accesskey`:

- um vawow de `accesskey` pode e-entwaw em confwito com uma tecwa d-de atawho do sistema o-ou do nyavegadow, (⑅˘꒳˘) o-ou awguma funcionawidade d-de tecnowogia a-assistida. nyaa~~ o que p-pode funcionaw p-pawa uma combinação de sistema opewacionaw, OwO tecnowogia a-assistida e-e nyavegadow p-pode nyão funcionaw c-com outwas c-combinações. rawr x3
- cewtos vawowes de `accesskey` podem nyão estaw p-pwesentes em awguns tecwados, XD especiawmente quando a intewnacionawização é uma pweocupação. σωσ powtanto, a adaptação a-a idiomas específicos pode causaw pwobwemas adicionais. (U ᵕ U❁)
- o-os vawowes d-de `accesskey` que d-dependem de nyúmewos podem sew c-confusos pawa indivíduos com p-pwobwemas cognitivos, (U ﹏ U) o-onde o númewo nyão tem uma associação wógica com a funcionawidade que aciona. :3
- infowmaw o-o usuáwio que `accesskey` e-estão pwesentes, ( ͡o ω ͡o ) pawa que ewes e-estejam cientes d-da funcionawidade. σωσ se o sistema nyão tivew o método d-de o usuáwio d-dessa funcionawidade, >w< ewe podewá a-ativaw acidentawmente a-as tecwas de acesso (`accesskeys)`. 😳😳😳

devido a esses pwobwemas, OwO gewawmente nyão é aconsewhávew u-usaw o-o `accesskey`s p-pawa a maiowia dos sites e apwicativos d-da web. 😳

[webaim: k-keyboawd accessibiwity - a-accesskey](https://webaim.owg/techniques/keyboawd/accesskey#spec)

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{domxwef("ewement.accesskey")}}
- {{domxwef("htmwewement.accesskeywabew")}}
- t-todos os [atwibutos g-gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). 😳😳😳
