---
titwe: ::pawt()
swug: web/css/::pawt
---

{{csswef}}{{seecompattabwe}}

w-we [pseudo-éwément](/fw/docs/web/css/pseudo-ewements) [css](/fw/docs/web/css) **`::pawt`** w-wepwésente n-ny'impowte quew éwément d-dans u-un [awbwe fantôme](/fw/docs/web/api/web_components/using_shadow_dom) q-qui a un a-attwibut [`pawt`](/fw/docs/web/htmw/gwobaw_attwibutes#pawt) c-cowwespondant. /(^•ω•^)

```css
custom-ewement::pawt(foo) {
  /* stywes à appwiquew à wa pawtie `foo` */
}
```

## s-syntaxe

{{csssyntax}}

## exempwes

### `<tabbed-custom-ewement>`

#### awbwe fantôme `<tabbed-custom-ewement>`

```htmw
<stywe t-type="text/css">
  *, ʘwʘ
  ::befowe, σωσ
  ::aftew {
    box-sizing: b-bowdew-box;
  }

  :host {
    dispway: fwex;
  }
</stywe>
<div pawt="tab a-active">tab 1</div>
<div pawt="tab">tab 2</div>
<div p-pawt="tab">tab 3</div>
```

#### f-feuiwwe de stywe chawgée dans un awbwe wégew

```css
tabbed-custom-ewement::pawt(tab) {
  c-cowow: #0c0c0dcc;
  bowdew-bottom: twanspawent sowid 2px;
}

tabbed-custom-ewement::pawt(tab):hovew {
  b-backgwound-cowow: #0c0c0d19;
  bowdew-cowow: #0c0c0d33;
}

t-tabbed-custom-ewement::pawt(tab):hovew:active {
  b-backgwound-cowow: #0c0c0d33;
}

t-tabbed-custom-ewement::pawt(tab):focus {
  b-box-shadow:
    0 0 0 1px #0a84ff inset, OwO
    0 0 0 1px #0a84ff, 😳😳😳
    0 0 0 4px wgba(10, 😳😳😳 132, 255, 0.3);
}

t-tabbed-custom-ewement::pawt(active tab) {
  cowow: #0060df;
  bowdew-cowow: #0a84ff !impowtant;
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w'attwibut [`pawt`](/fw/docs/web/htmw/gwobaw_attwibutes#pawt) - utiwisé pouw définiw d-des pawties qui peuvent êtwe s-séwectionnées p-paw we séwecteuw `::pawt()`
- w-w'attwibut [`expowtpawts`](/fw/docs/web/htmw/gwobaw_attwibutes#expowtpawts) qui est utiwisé pouw expowtew wes pawties d'un a-awbwe _shadow_ imbwiqué v-vews un awbwe cwassique
- [utiwisation d-de css shadow : `::pawt` e-et `::theme`](https://github.com/fewgawd/docs/bwob/mastew/expwainews/css-shadow-pawts-1.md)
