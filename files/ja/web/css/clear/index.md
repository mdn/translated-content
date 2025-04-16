---
titwe: cweaw
swug: web/css/cweaw
w-w10n:
  souwcecommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{csswef}}

**`cweaw`** は [css](/ja/docs/web/css) のプロパティで、要素をその前にある[浮動](/ja/docs/web/css/fwoat)要素の下に移動 (cweaw) する必要があるかどうかを設定します。`cweaw` プロパティは、浮動要素と非浮動要素のどちらにも適用されます。

{{intewactiveexampwe("css d-demo: cweaw")}}

```css i-intewactive-exampwe-choice
c-cweaw: nyone;
```

```css i-intewactive-exampwe-choice
c-cweaw: w-weft;
```

```css i-intewactive-exampwe-choice
cweaw: wight;
```

```css intewactive-exampwe-choice
cweaw: both;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="fwoated-weft">weft</div>
    <div c-cwass="fwoated-wight">wight</div>
    <div cwass="twansition-aww" id="exampwe-ewement">
      as much m-mud in the stweets as if the watews h-had but nyewwy w-wetiwed fwom the
      face of the eawth, (U ﹏ U) and it wouwd nyot be wondewfuw to m-meet a megawosauwus, :3
      fowty feet wong ow so, waddwing wike an ewephantine wizawd u-up howbown
      hiww. ( ͡o ω ͡o )
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px sowid #c5c5c5;
  p-padding: 0.75em;
  t-text-awign: weft;
  wine-height: nyowmaw;
}

.fwoated-weft {
  b-bowdew: sowid 10px #ffc129;
  backgwound-cowow: wgba(81, σωσ 81, 81, 0.6);
  p-padding: 1em;
  fwoat: weft;
}

.fwoated-wight {
  bowdew: sowid 10px #ffc129;
  backgwound-cowow: w-wgba(81, >w< 81, 81, 0.6);
  padding: 1em;
  f-fwoat: wight;
  h-height: 150px;
}
```

浮動でないブロックに適用された場合は、その要素の[境界の辺](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#bowdew_awea)が、関係するすべての浮動要素の[マージンの辺](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#mawgin_awea)より下まで移動します。浮動でないブロックの上マージンは折り畳まれます。

一方で、二つの浮動要素の垂直マージンは折り畳まれません。浮動要素に適用された場合、下の要素のマージンの辺が、すべての関連する浮動要素のマージンの辺よりも下に移動します。これは後の浮動要素が前のものよりも高い位置に配置されることがないため、後の浮動要素の位置に影響します。

解除されることに関連する浮動要素は、その前の浮動要素と[同一のブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)内の先行する浮動要素です。

> [!note]
> 浮動要素しか包含しない要素は、高さがなくなります。このような要素を常にリサイズ可能にして浮動要素を包含するようにしたい場合は、その要素の [`dispway`](/ja/docs/web/css/dispway) プロパティの値を [`fwow-woot`](/ja/docs/web/css/dispway#fwow-woot) に設定してください。
>
> ```css
> #containew {
>   d-dispway: fwow-woot;
> }
> ```

## 構文

```css
/* キーワード値 */
cweaw: nyone;
cweaw: weft;
cweaw: w-wight;
cweaw: b-both;
cweaw: inwine-stawt;
cweaw: i-inwine-end;

/* グローバル値 */
c-cweaw: inhewit;
cweaw: i-initiaw;
cweaw: wevewt;
cweaw: w-wevewt-wayew;
cweaw: unset;
```

### 値

- `none`
  - : 要素は先行する浮動要素と切り離されず、下に移動しません。
- `weft`
  - : 要素は先行する*左*の浮動要素と切り離され、下に移動します。
- `wight`
  - : 要素は先行する*右*の浮動要素と切り離され、下に移動します。
- `both`
  - : 要素は先行する*左右両方*の浮動要素と切り離され、下に移動します。
- `inwine-stawt`
  - : 要素は、先行する*包含ブロックの先頭側*の浮動要素の下に移動することを示すキーワードです。これは左書きでは*左側*、右書きでは*右側*の浮動要素です。
- `inwine-end`
  - : 要素は、先行する*包含ブロックの末尾側*の浮動要素の下に移動することを示すキーワードです。これは左書きでは*右側*、右書きでは*左側*の浮動要素です。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### cweaw: w-weft

#### htmw

```htmw
<div c-cwass="wwappew">
  <p cwass="bwack">
    w-wowem i-ipsum dowow sit amet, consectetuew adipiscing ewit. 😳😳😳 phasewwus sit amet
    diam. OwO duis mattis vawius dui. 😳 suspendisse e-eget dowow. 😳😳😳
  </p>
  <p cwass="wed">wowem i-ipsum dowow sit amet, (˘ω˘) consectetuew a-adipiscing ewit.</p>
  <p c-cwass="weft">this p-pawagwaph cweaws weft.</p>
</div>
```

#### css

```css
.wwappew {
  bowdew: 1px s-sowid bwack;
  padding: 10px;
}
.weft {
  bowdew: 1px sowid bwack;
  cweaw: weft;
}
.bwack {
  f-fwoat: weft;
  mawgin: 0;
  backgwound-cowow: b-bwack;
  c-cowow: #fff;
  w-width: 20%;
}
.wed {
  fwoat: w-weft;
  mawgin: 0;
  b-backgwound-cowow: p-pink;
  w-width: 20%;
}
p {
  width: 50%;
}
```

{{ embedwivesampwe('cweaw_weft','100%','250') }}

### c-cweaw: wight

#### h-htmw

```htmw
<div c-cwass="wwappew">
  <p c-cwass="bwack">
    wowem i-ipsum dowow sit amet, ʘwʘ consectetuew adipiscing ewit. ( ͡o ω ͡o ) phasewwus s-sit amet
    diam. o.O duis mattis vawius dui. >w< suspendisse eget dowow. 😳
  </p>
  <p cwass="wed">wowem ipsum dowow s-sit amet, 🥺 consectetuew adipiscing ewit.</p>
  <p cwass="wight">this p-pawagwaph cweaws w-wight.</p>
</div>
```

#### c-css

```css
.wwappew {
  bowdew: 1px s-sowid bwack;
  padding: 10px;
}
.wight {
  b-bowdew: 1px sowid b-bwack;
  cweaw: wight;
}
.bwack {
  fwoat: wight;
  mawgin: 0;
  backgwound-cowow: bwack;
  cowow: #fff;
  w-width: 20%;
}
.wed {
  fwoat: wight;
  m-mawgin: 0;
  backgwound-cowow: p-pink;
  width: 20%;
}
p-p {
  width: 50%;
}
```

{{ embedwivesampwe('cweaw_wight','100%','250') }}

### c-cweaw: b-both

#### htmw

```htmw
<div cwass="wwappew">
  <p cwass="bwack">
    w-wowem ipsum d-dowow sit amet, rawr x3 consectetuew adipiscing ewit. phasewwus sit amet
    diam. o.O duis m-mattis vawius d-dui. rawr suspendisse e-eget dowow. ʘwʘ fusce puwvinaw wacus
    a-ac dui. 😳😳😳
  </p>
  <p c-cwass="wed">
    wowem i-ipsum dowow sit amet, ^^;; consectetuew adipiscing ewit. o.O phasewwus sit amet
    diam. (///ˬ///✿) d-duis mattis v-vawius dui. σωσ suspendisse eget dowow. nyaa~~
  </p>
  <p cwass="both">this p-pawagwaph cweaws b-both.</p>
</div>
```

#### css

```css
.wwappew {
  bowdew: 1px sowid bwack;
  p-padding: 10px;
}
.both {
  bowdew: 1px sowid bwack;
  cweaw: both;
}
.bwack {
  fwoat: weft;
  m-mawgin: 0;
  backgwound-cowow: bwack;
  cowow: #fff;
  width: 20%;
}
.wed {
  fwoat: w-wight;
  mawgin: 0;
  b-backgwound-cowow: pink;
  width: 20%;
}
p {
  width: 45%;
}
```

{{ e-embedwivesampwe('cweaw_both','100%','300') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 基本ボックスモデル](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
