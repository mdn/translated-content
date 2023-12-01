---
title: 重ね合わせコンテキストの例 3
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3
---

{{CSSRef}}

« [CSS](/ja/docs/Web/CSS) « [CSS の z-index を理解する](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index)

## 重ね合わせコンテキストの例 3

この最後の例では、複数の階層を持つ HTML 構造内で、位置指定された要素を組み合わせたときと、 `z-index` がクラスセレクターを使って設定されたとき、発生する問題を示します。

位置指定された DIV 要素で作られた、3 階層の階層メニューを一例として見てみましょう。第 2 階層と第 3 階層の DIV 要素は、マウスが親要素をホバーしたり、クリックしたりすると現れます。通常この種類のメニューはクライアントサイドかサーバーサイドのどちらかでスクリプトにより生成されます。このためスタイルルールは id セレクターではなく、クラスセレクターで割り当てられます。

もし 3 つのメニュー階層が部分的に重なると、重なりの管理が問題になるかもしれません。

{{ EmbedLiveSample('Example_source_code', '320', '330') }}

第 1 階層のメニューは relative で位置指定されているだけなので、重ね合わせコンテキストは作られません。

第 2 階層のメニューは、親要素内で absolute で位置指定されています。これを第 1 階層のすべてのメニューより上に置くために、`z-index` が使われています。問題は第 2 階層のメニューそれぞれに重ね合わせコンテキストが作られることと、第 3 階層のメニューが自分の親要素に属していることです。

したがって第 3 階層のメニューは後ろにある第 2 階層のメニューより下に重なりますが、これは第 2 階層のメニューがすべて同一の `z-index` 値を持っていて、既定の重ね合わせ規則が適用されるからです。

状況をもっとよく理解できるよう、重ね合わせコンテキストの階層図を用意しました。

- ルートの重ね合わせコンテキスト

  - LEVEL #1

    - LEVEL #2 (z-index: 1)

      - LEVEL #3
      - ...
      - LEVEL #3

    - LEVEL #2 (z-index: 1)
    - ...
    - LEVEL #2 (z-index: 1)

  - LEVEL #1
  - ...
  - LEVEL #1

この問題を回避するには、異なるレベル間のメニューの重なりを取り除くか、独自 (で異なった) `z-index` 値を クラスセレクターではなく ID セレクターを通じて設定するか、 HTML の階層構造をなくすかしてください。

> **メモ:** ソースコードを見ると、absolute で位置指定されたコンテナーとなる要素内に、第二階層と第三階層のメニューを作る DIV があることがわかります。この方法は、一度にすべてをグループ化し、位置づけするのに便利です。

<h2 id="Example_source_code">例のソースコード</h2>

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <style type="text/css">
      div {
        font: 12px Arial;
      }

      span.bold {
        font-weight: bold;
      }

      div.lev1 {
        width: 250px;
        height: 70px;
        position: relative;
        border: 2px outset #669966;
        background-color: #ccffcc;
        padding-left: 5px;
      }

      #container1 {
        z-index: 1;
        position: absolute;
        top: 30px;
        left: 75px;
      }

      div.lev2 {
        opacity: 0.9;
        width: 200px;
        height: 60px;
        position: relative;
        border: 2px outset #990000;
        background-color: #ffdddd;
        padding-left: 5px;
      }

      #container2 {
        z-index: 1;
        position: absolute;
        top: 20px;
        left: 110px;
      }

      div.lev3 {
        z-index: 10;
        width: 100px;
        position: relative;
        border: 2px outset #000099;
        background-color: #ddddff;
        padding-left: 5px;
      }
    </style>
  </head>

  <body>
    <br />

    <div class="lev1">
      <span class="bold">LEVEL #1</span>

      <div id="container1">
        <div class="lev2">
          <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;

          <div id="container2">
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
          </div>
        </div>

        <div class="lev2">
          <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;
        </div>
      </div>
    </div>

    <div class="lev1">
      <span class="bold">LEVEL #1</span>
    </div>

    <div class="lev1">
      <span class="bold">LEVEL #1</span>
    </div>

    <div class="lev1">
      <span class="bold">LEVEL #1</span>
    </div>
  </body>
</html>
```

## 関連情報

- [`z-index` なしの重ね合わせ](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): 既定の重ね合わせ規則
- [浮動ブロックの重ね合わせ](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): 浮動要素が重ね合わせでどのように扱われるか
- [z-index の使用](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2 階層の HTML 構造で、最終階層の z-index
- [重ね合わせコンテキストの例 2](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2 階層の HTML 構造、全レベルの z-index

**Note**: 実は、サンプル画像は間違っているようです。第 2 階層の 2 つ目が第 3 階層に重複しているのは、第 2 階層が半透明であるため、新しい重ね合わせコンテキストが作成されるからです。基本的に、このサンプルページ全体が誤っており、誤解を招きます。
