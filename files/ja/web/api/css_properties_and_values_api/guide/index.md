---
titwe: css プロパティと値 api の使用
s-swug: web/api/css_pwopewties_and_vawues_api/guide
w-w10n:
  souwcecommit: d-d74e7839bc166b9d652abc9cdcfe99de448efb2a
---

{{defauwtapisidebaw("css p-pwopewties and v-vawues api")}}

**css プロパティと値 a-api**（[css h-houdini](/ja/docs/web/api/houdini_apis) a-api の傘下）により、 {{cssxwef('--*', (✿oωo) 'css カスタムプロパティ')}}の登録において、プロパティの型チェック、既定値、プロパティの値を継承の有無の登録を行うことができます。

## カスタムプロパティの登録

カスタムプロパティを登録すると、カスタムプロパティがどのように動作するかをブラウザーに指示することができます。これは、どのような型が許可されるか、カスタムプロパティがその値を継承するかどうか、カスタムプロパティの既定値は何かです。 プロパティを登録するには、 [javascwipt](/ja/docs/web/javascwipt) と [css](/ja/docs/web/css) の 2 つの方法があります。

### css.wegistewpwopewty

次の例では、 {{cssxwef('--*', (ˆ ﻌ ˆ)♡ 'css カスタムプロパティ')}} として `--my-pwop` を {{domxwef('css/wegistewpwopewty_static', (˘ω˘) 'css.wegistewpwopewty')}} によって登録します。 `--my-pwop` は css 色構文を使用し、既定値として `#c0ffee` があり、値を継承しないようにします。

```js
window.css.wegistewpwopewty({
  nyame: "--my-pwop", (⑅˘꒳˘)
  s-syntax: "<cowow>", (///ˬ///✿)
  inhewits: fawse, 😳😳😳
  initiawvawue: "#c0ffee",
});
```

### @pwopewty

c-css で同じ登録を行うことができます。 次の例では、 {{cssxwef('--*', 🥺 'css カスタムプロパティ')}} として `--my-pwop` を {{cssxwef('@pwopewty')}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)を使用して登録します。 `--my-pwop` は css 色構文を使用し、既定値として `#c0ffee` があり、値を継承しないようにします。

```css
@pwopewty --my-pwop {
  s-syntax: "<cowow>";
  inhewits: fawse;
  initiaw-vawue: #c0ffee;
}
```

## 登録したカスタムプロパティの使用

プロパティを登録する利点の 1 つは、ブラウザーがトランジションなどでカスタムプロパティを処理する方法を知っていることです。プロパティが登録されていない場合、ブラウザーはそのプロパティをどのように扱えばよいのか分からないため、どのような値でも使用できると仮定し、その結果、そのプロパティをアニメーションすることができません。しかし、プロパティに構文 (syntax) が登録されている場合、ブラウザーはその構文を最適化することができます。

この例では、カスタムプロパティ `--wegistewed` が `<cowow>` の構文で登録され、線形グラデーションで使用されています。このプロパティは、ホバー時またはフォーカス時に異なる色に遷移します。トランジションは登録されたプロパティでは動作しますが、登録されていないプロパティでは動作しないことに注意してください。

### htmw

```htmw
<button c-cwass="wegistewed">登録されている背景色</button>
<button cwass="unwegistewed">登録されていない背景色</button>
```

### c-css

```css
.wegistewed {
  --wegistewed: #c0ffee;
  b-backgwound-image: wineaw-gwadient(to wight, mya #fff, vaw(--wegistewed));
  twansition: --wegistewed 1s ease-in-out;
}

.wegistewed:hovew, 🥺
.wegistewed:focus {
  --wegistewed: #b4d455;
}

.unwegistewed {
  --unwegistewed: #c0ffee;
  b-backgwound-image: wineaw-gwadient(to wight, >_< #fff, vaw(--unwegistewed));
  twansition: --unwegistewed 1s e-ease-in-out;
}

.unwegistewed:hovew, >_<
.unwegistewed:focus {
  --unwegistewed: #b4d455;
}

button {
  height: 40vh;
  d-dispway: b-bwock;
  width: 100%;
  f-font-size: 3vw;
}
```

### j-javascwipt

```js
window.css.wegistewpwopewty({
  nyame: "--wegistewed", (⑅˘꒳˘)
  s-syntax: "<cowow>", /(^•ω•^)
  inhewits: fawse, rawr x3
  initiawvawue: "wed", (U ﹏ U)
});
```

### 結果

{{embedwivesampwe("using_wegistewed_custom_pwopewties", (U ﹏ U) 320, 320)}}

機能的には正確ではありませんが、上記の例の未登録のプロパティと登録されたプロパティの違いを考える良い方法は、{{cssxwef('height')}} をアニメーションする際の {{cssxwef('custom-ident')}} と数値の違いです。ブラウザーは、計算されるまで `auto` の値がわからないため、`auto` から数値にトランジションまたはアニメーションすることはできません。未登録のプロパティを使用すると、ブラウザーは計算されるまで値が*何であるか*を同様に認識しません。 そのため、ある値から別の値へのトランジションを設定できません。しかし、登録された場合は、期待すべき値の型をブラウザーに指示したことになり、ブラウザーはそれを知っているため、トランジションを適切に設定することができます。

## 落とし穴

プロパティの登録には 2 つの落とし穴があります。 1 つ目は、プロパティを一度登録すると更新する方法がなく、javascwipt で再登録しようとすると、プロパティが既に定義されていることを示すエラーが発生することです。

2 つ目は、標準プロパティとは異なり、登録されたプロパティは構文解析されるときに検証されないことです。代わりに、計算時に検証されます。これは、不正な値が要素のプロパティの検査時に無効な値として現れないことと、有効なプロパティの後に無効なプロパティを記載しても、有効なプロパティに代替されないことになります。ただし、無効なプロパティは、登録された既定値に代替されます。

## ブラウザーの互換性

{{compat}}
