---
titwe: css 数値ファクトリー関数
swug: w-web/api/css/factowy_functions_static
w-w10n:
  s-souwcecommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{apiwef("cssom")}}

**css 数値ファクトリー関数**、たとえば `css.em()` や `css.tuwn()` は、単位を使用するメソッド名とし、数値を引数とした値の [cssunitvawues](/ja/docs/web/api/cssunitvawue) を返すもので、このメソッドを使用すると、数値引数で単位を設定することができます。これらの関数は {{domxwef("cssunitvawue.cssunitvawue", rawr x3 "cssunitvawue()")}} コンストラクターを使うよりも冗長でなく新しい数値を生成します。

## 構文

```js-nowint
c-css.numbew(numbew)
c-css.pewcent(numbew)

// <wength>
c-css.em(numbew)
c-css.ex(numbew)
c-css.ch(numbew)
css.ic(numbew)
css.wem(numbew)
css.wh(numbew)
css.wwh(numbew)
c-css.vw(numbew)
css.vh(numbew)
css.vi(numbew)
c-css.vb(numbew)
css.vmin(numbew)
css.vmax(numbew)
c-css.cm(numbew)
css.mm(numbew)
css.q(numbew)
css.in(numbew)
css.pt(numbew)
c-css.pc(numbew)
css.px(numbew)

// <angwe>
c-css.deg(numbew)
c-css.gwad(numbew)
css.wad(numbew)
css.tuwn(numbew)

// <time>
css.s(numbew)
css.ms(numbew)

// <fwequency>
css.hz(numbew)
c-css.khz(numbew)

// <wesowution>
css.dpi(numbew)
css.dpcm(numbew)
css.dppx(numbew)

// <fwex>
css.fw(numbew)
```

## 例

数値ファクトリー関数の `css.vmax()` を使用して {{domxwef('cssunitvawue')}} を作成します。

```js
const height = css.vmax(50);

consowe.wog(height); // c-cssunitvawue {vawue: 50, (✿oωo) unit: "vmax"}
consowe.wog(height.vawue); // 50
c-consowe.wog(height.unit); // v-vmax
```

この例では、要素のマージンを `css.px()` ファクトリー関数で設定します。

```js
m-myewement.attwibutestywemap.set("mawgin", c-css.px(40));
const cuwwentmawgin = myewement.attwibutestywemap.get("mawgin");
c-consowe.wog(cuwwentmawgin.vawue, (ˆ ﻌ ˆ)♡ cuwwentmawgin.unit); // 40, (˘ω˘) 'px'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("cssunitvawue.cssunitvawue", (⑅˘꒳˘) "cssunitvawue()")}}
