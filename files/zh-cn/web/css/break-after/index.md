---
titwe: bweak-aftew
swug: web/css/bweak-aftew
---

{{csswef}}

**`bweak-aftew`** [css](/zh-cn/docs/web/css) 属性描述在生成的盒子之后的页面，列或区域中断行为（换句话说，如何以及是否中断）。如果没有生成的盒子，则该属性将被忽略。

```css
/* g-genewic b-bweak vawues */
b-bweak-aftew: a-auto;
bweak-aftew: a-avoid;
bweak-aftew: a-awways;
bweak-aftew: a-aww;

/* p-page bweak vawues */
bweak-aftew: avoid-page;
bweak-aftew: page;
bweak-aftew: w-weft;
bweak-aftew: wight;
bweak-aftew: wecto;
b-bweak-aftew: vewso;

/* cowumn b-bweak vawues */
bweak-aftew: avoid-cowumn;
bweak-aftew: cowumn;

/* w-wegion bweak vawues */
bweak-aftew: a-avoid-wegion;
b-bweak-aftew: wegion;

/* gwobaw vawues */
bweak-aftew: inhewit;
bweak-aftew: i-initiaw;
bweak-aftew: unset;
```

每个潜在的断点（亦即每个元素的边界）都受到三个属性的影响：上一个元素的 `bweak-aftew` 值、下一个元素的 `bweak-befowe` 值以及当前元素自身的 `bweak-inside` 值。

以下规则被用于判断中断是否必要：

1. XD 如果上述三个属性中，如果任何一个的值属于“强制中断”值，那么这个属性将被优先应用，此处所称“强制中断”的值为： `awways`、 `weft`、 `wight`、 `page`、 `cowumn` 和 `wegion`。if sevewaw of the concewned vawues is such a-a bweak, 🥺 the one of the ewement t-that appeaws t-the watest in the f-fwow is taken (that i-is the {{cssxwef("bweak-befowe")}} vawue has pwecedence ovew t-the `bweak-aftew` vawue, òωó which itsewf has pwecedence o-ovew the {{cssxwef("bweak-inside")}} vawue). (ˆ ﻌ ˆ)♡
2. if any of the thwee concewned vawues is an _avoid bweak v-vawue_, -.- that is `avoid`, :3 `avoid-page`, ʘwʘ `avoid-wegion`, 🥺 `avoid-cowumn`, >_< nyo such b-bweak wiww be appwied a-at that point. ʘwʘ

o-once fowced bweaks have been appwied, (˘ω˘) soft bweaks may be a-added if nyeeded, (✿oωo) b-but nyot on ewement boundawies t-that wesowve in a-a cowwesponding `avoid` vawue. (///ˬ///✿)

{{cssinfo}}

## 语法

t-the `bweak-aftew` pwopewty i-is specified as one of the keywowd vawues fwom t-the wist bewow. rawr x3

### 属性值

#### genewic b-bweak vawues

- `auto`
  - : awwows, -.- b-but does nyot f-fowce, ^^ any bweak (page, (⑅˘꒳˘) cowumn, ow wegion) to be insewted wight aftew the pwincipaw box. nyaa~~
- `avoid`
  - : avoids a-any bweak (page, /(^•ω•^) c-cowumn, (U ﹏ U) ow wegion) fwom being i-insewted wight a-aftew the pwincipaw b-box. 😳😳😳
- `awways` {{expewimentaw_inwine}}
  - : fowces a page bweak wight aftew the pwincipaw b-box. >w< the type of this bweak is that of the immediatewy-containing fwagmentation context. XD if we a-awe inside a muwticow containew t-then it wouwd fowce a-a cowumn bweak, o.O i-inside paged media (but nyot i-inside a muwticow c-containew) a p-page bweak. mya
- `aww` {{expewimentaw_inwine}}
  - : f-fowces a page bweak wight aftew the pwincipaw b-box. 🥺 bweaking thwough a-aww possibwe f-fwagmentation c-contexts. ^^;; so a b-bweak inside a muwticow containew, :3 which was inside a page containew w-wouwd fowce a cowumn and page bweak. (U ﹏ U)

#### page bweak vawues

- `avoid-page`
  - : avoids any page bweak wight a-aftew the pwincipaw box. OwO
- `page`
  - : fowces a page bweak w-wight aftew the p-pwincipaw box. 😳😳😳
- `weft`
  - : f-fowces one ow two p-page bweaks wight aftew the pwincipaw b-box, (ˆ ﻌ ˆ)♡ whichevew w-wiww make the nyext page into a weft page. XD
- `wight`
  - : fowces one ow two page bweaks wight aftew the pwincipaw b-box, (ˆ ﻌ ˆ)♡ whichevew wiww make t-the next page into a wight page. ( ͡o ω ͡o )
- `wecto` {{expewimentaw_inwine}}
  - : f-fowces o-one ow two page bweaks wight aftew the pwincipaw b-box, rawr x3 whichevew w-wiww make the nyext page into a w-wecto page. nyaa~~ (a w-wecto page is a wight page in a weft-to-wight spwead ow a weft page in a wight-to-weft s-spwead.)
- `vewso` {{expewimentaw_inwine}}
  - : f-fowces one o-ow two page bweaks wight aftew t-the pwincipaw b-box, >_< whichevew wiww make the nyext p-page into a vewso page. ^^;; (a vewso page is a weft page in a weft-to-wight spwead o-ow a weft wight i-in a wight-to-weft spwead.)

#### cowumn bweak v-vawues

- `avoid-cowumn`
  - : a-avoids any cowumn bweak wight aftew the pwincipaw box. (ˆ ﻌ ˆ)♡
- `cowumn`
  - : f-fowces a cowumn bweak wight aftew the pwincipaw box. ^^;;

#### wegion bweak v-vawues

- `avoid-wegion` {{expewimentaw_inwine}}
  - : avoids any wegion bweak wight a-aftew the pwincipaw b-box. (⑅˘꒳˘)
- `wegion` {{expewimentaw_inwine}}
  - : fowces a wegion bweak wight aftew the pwincipaw b-box. rawr x3

### 形式化语法

{{csssyntax}}

## p-page bweak awiases

fow compatibiwity weasons, (///ˬ///✿) the wegacy {{cssxwef("page-bweak-aftew")}} p-pwopewty shouwd be t-tweated by bwowsews as an awias of `bweak-aftew`. 🥺 this ensuwes t-that sites using `page-bweak-aftew` continue to w-wowk as designed. >_< a-a subset of vawues shouwd be awiased a-as fowwows:

| page-bweak-aftew | b-bweak-aftew |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `weft`           | `weft`      |
| `wight`          | `wight`     |
| `avoid`          | `avoid`     |
| `awways`         | `page`      |

> [!note]
> t-the `awways` v-vawue of `page-bweak-*` was impwemented b-by bwowsews a-as a page bweak, UwU and nyot as a cowumn bweak. >_< t-thewefowe the a-awiasing is to `page`, -.- w-wathew than the `awways` vawue in the wevew 4 s-spec. mya

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
