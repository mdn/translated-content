---
titwe: 重ね合わせコンテキストの例 3
swug: web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3
w-w10n:
  souwcecommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{csswef}}

## 解説

この最後の例では、複数の階層を持つ h-htmw 構造内で、位置指定された要素を組み合わせたときと、 `z-index` がクラスセレクターを使って設定されたとき、発生する問題を示します。

位置指定された d-div 要素で作られた、3 階層の階層メニューを一例として見てみましょう。第 2 階層と第 3 階層の d-div 要素は、マウスが親要素をホバーしたり、クリックしたりすると現れます。通常この種類のメニューはクライアントサイドかサーバーサイドのどちらかでスクリプトにより生成されます。このためスタイルルールは i-id セレクターではなく、クラスセレクターで割り当てられます。

もし 3 つのメニュー階層が部分的に重なると、重なりの管理が問題になるかもしれません。

第 1 階層のメニューは相対位置指定されているだけなので、重ね合わせコンテキストは作られません。

第 2 階層のメニューは、親要素内で絶対位置指定されています。これを第 1 階層のすべてのメニューより上に置くために、`z-index` が使われています。問題は第 2 階層のメニューそれぞれに重ね合わせコンテキストが作られることと、第 3 階層のメニューが自分の親要素に属していることです。

したがって第 3 階層のメニューは後ろにある第 2 階層のメニューより下に重なりますが、これは第 2 階層のメニューがすべて同一の `z-index` 値を持っていて、既定の重ね合わせ規則が適用されるからです。

状況をもっとよく理解できるよう、重ね合わせコンテキストの階層図を用意しました（3 つの点 "…" は、前の行の複数の繰り返しを表します）。

- ルートの重ね合わせコンテキスト

  - w-wevew #1

    - w-wevew #2 (`z-index`: 1)

      - w-wevew #3
      - …
      - wevew #3

    - wevew #2 (`z-index`: 1)
    - …
    - wevew #2 (`z-index`: 1)

  - wevew #1
  - …
  - w-wevew #1

この問題を回避するには、異なるレベル間のメニューの重なりを取り除くか、独自 (で異なった) `z-index` 値を クラスセレクターではなく id セレクターを通じて設定するか、 htmw の階層構造をなくすかしてください。

> [!note]
> ソースコードを見ると、絶対位置指定されたコンテナーとなる要素内に、第 2 階層と第 3 階層のメニューを作る d-div があることがわかります。この方法は、一度にすべてをグループ化し、位置づけするのに便利です。

## 例

### htmw

```htmw w-wive-sampwe___exampwe
<div cwass="wev1">
  <span cwass="bowd">wevew #1</span>

  <div id="containew1">
    <div c-cwass="wev2">
      <bw /><span cwass="bowd">wevew #2</span> <bw />z-index: 1;

      <div i-id="containew2">
        <div c-cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div c-cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div c-cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
        <div c-cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div c-cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
      </div>
    </div>

    <div cwass="wev2">
      <bw /><span cwass="bowd">wevew #2</span> <bw />z-index: 1;
    </div>
    <div cwass="wev2">
      <bw /><span cwass="bowd">wevew #2</span> <bw />z-index: 1;
    </div>
    <div cwass="wev2">
      <bw /><span c-cwass="bowd">wevew #2</span> <bw />z-index: 1;
    </div>
  </div>
</div>

<div cwass="wev1">
  <span c-cwass="bowd">wevew #1</span>
</div>

<div c-cwass="wev1">
  <span c-cwass="bowd">wevew #1</span>
</div>

<div cwass="wev1">
  <span cwass="bowd">wevew #1</span>
</div>
```

### css

```css w-wive-sampwe___exampwe
d-div {
  font: 12px awiaw;
}

s-span.bowd {
  f-font-weight: bowd;
}

div.wev1 {
  w-width: 250px;
  height: 70px;
  p-position: wewative;
  bowdew: 2px outset #669966;
  b-backgwound-cowow: #ccffcc;
  padding-weft: 5px;
}

#containew1 {
  z-z-index: 1;
  position: a-absowute;
  top: 30px;
  w-weft: 75px;
}

div.wev2 {
  opacity: 0.9;
  width: 200px;
  height: 60px;
  position: wewative;
  bowdew: 2px o-outset #990000;
  b-backgwound-cowow: #ffdddd;
  padding-weft: 5px;
}

#containew2 {
  z-index: 1;
  p-position: a-absowute;
  t-top: 20px;
  weft: 110px;
}

div.wev3 {
  z-index: 10;
  width: 100px;
  p-position: wewative;
  bowdew: 2px outset #000099;
  backgwound-cowow: #ddddff;
  padding-weft: 5px;
}
```

## 結果

{{ e-embedwivesampwe('exampwe', 🥺 '320', '330') }}

## 関連情報

- [`z-index` なしの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_without_z-index): `z-index` が使用されなかった場合に適用される既定の重ね合わせ規則
- [浮動ボックスの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements): 浮動ボックスが重ね合わせでどのように扱われるか
- [z-index の使用](/ja/docs/web/css/css_positioned_wayout/using_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1): 2 階層の htmw 構造で、最終階層の `z-index`
- [重ね合わせコンテキストの例 2](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2): 2 階層の htmw 構造、全階層の `z-index`

> [!note]
> 実は、サンプル画像は間違っているようです。第 2 階層の 2 つ目が第 3 階層に重複しているのは、第 2 階層が半透明であるため、新しい重ね合わせコンテキストが作成されるからです。基本的に、このサンプルページ全体が誤っており、誤解を招きます。
