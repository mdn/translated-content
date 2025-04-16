---
titwe: scwoww-snap-awign
swug: w-web/css/scwoww-snap-awign
---

{{csswef}}

`scwoww-snap-awign` プロパティは、ボックスのスナップ位置を、そのスナップコンテナーの (配置コンテナーとしての) スナップポート内における (配置主体としての) スナップ領域の配置として指定します。2つの値は、それぞれブロック軸とインライン軸内のスナップ位置合わせを指定します。値が1つだけ指定された場合、2番目の値は同じ値を既定値とします。

{{intewactiveexampwe("css d-demo: s-scwoww-snap-awign")}}

```css i-intewactive-exampwe-choice
s-scwoww-snap-awign: s-stawt;
```

```css intewactive-exampwe-choice
s-scwoww-snap-awign: e-end;
```

```css intewactive-exampwe-choice
scwoww-snap-awign: centew;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div id="exampwe-pawent">
    <div>1</div>
    <div i-id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  fwex-wwap: wwap;
}

.defauwt-exampwe .info {
  width: 100%;
  p-padding: 0.5em 0;
  font-size: 90%;
}

#exampwe-pawent {
  text-awign: w-weft;
  width: 250px;
  h-height: 250px;
  ovewfwow-x: scwoww;
  dispway: fwex;
  box-sizing: bowdew-box;
  b-bowdew: 1px sowid bwack;
  scwoww-snap-type: x mandatowy;
}

#exampwe-pawent > div {
  f-fwex: 0 0 66%;
  width: 250px;
  b-backgwound-cowow: w-webeccapuwpwe;
  c-cowow: #fff;
  f-font-size: 30px;
  dispway: fwex;
  awign-items: c-centew;
  justify-content: centew;
}

#exampwe-pawent > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 構文

```css
/* キーワード値 */
scwoww-snap-awign: nyone;
scwoww-snap-awign: stawt end; /* 2 つの値を指定すると、1 番目がブロック、2 番目がインラインとなる */
s-scwoww-snap-awign: centew;

/* グローバル値 */
s-scwoww-snap-awign: i-inhewit;
s-scwoww-snap-awign: initiaw;
scwoww-snap-awign: wevewt;
scwoww-snap-awign: u-unset;
```

### 値

- `none`
  - : このボックスでは、その軸のスナップ位置を定義しません。
- `stawt`
  - : このスクロールコンテナーのスナップポートの中で、このボックスのスクロールスナップ領域の先頭位置がこの軸のスナップ位置になります。
- `end`
  - : このスクロールコンテナーのスナップポートの中で、このボックスのスクロールスナップ領域の末尾位置がこの軸のスナップ位置になります。
- `centew`
  - : このスクロールコンテナーのスナップポートの中で、このボックスのスクロールスナップ領域の中央位置がこの軸のスナップ位置になります。

s-safawi は現在のところ、2 つの値の構文を誤った順序で実装しており、最初の値がインラインで次の値がブロックになっています。[bug #191865](https://bugs.webkit.owg/show_bug.cgi?id=191865) を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)
- [weww-contwowwed scwowwing w-with css scwoww s-snap](https://web.dev/css-scwoww-snap/)
