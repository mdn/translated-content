---
title: 重ね合わせコンテキストの例 2
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2
tags:
  - 上級者
  - CSS
  - ガイド
  - Understanding_CSS_z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2
---
{{CSSRef}}

« [CSS](/ja/docs/Web/CSS) « [CSS の z-index を理解する](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index)

## 重ね合わせコンテキストの例 2

これはとても簡単な例ですが、*重ね合わせコンテキスト*の概念を理解するカギになります。前の例には同じ 4 つの DIV 要素がありましたが、今度は両方の階層構造で `z-index` プロパティが設定されています。

{{ EmbedLiveSample('Example_source_code', '352', '270') }}

DIV #2 (z-index: 2) が DIV #3 (z-index: 1) よりも上にあることがわかります。これは、どちらも同じ重ね合わせコンテキスト（ルートのもの）に属していて、z-index 値が要素の重なり方を決めているからです。

変に思えるかもしれないのは、`z-index` の値に関わらず、DIV #2 (z-index: 2) が DIV #4 (z-index: 10) よりも上にあることです。この理由は、これらの要素が同一の重ね合わせコンテキストに属していないためです。DIV #4 は DIV #3 によって作られた重ね合わせコンテキストに所属していて、以前の説明にあるように DIV #3 (とその内部にあるものすべて) は DIV #2 よりも下にあります。

状況をもっとよく理解するために、重ね合わせコンテキストの階層構造を示します。

- ルートの重ね合わせコンテキスト

  - DIV #2 (z-index 2)
  - DIV #3 (z-index 1)

    - DIV #4 (z-index 10)

> **Note:** 一般に、 HTML の階層構造と重ね合わせコンテキストの階層構造は異なるということを覚えておくと良いでしょう。重ね合わせコンテキストの階層構造では、重ね合わせコンテキストを作らない要素はその親要素に吸収されます。

<h2 id="Example_source_code">例のソースコード</h2>

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><style type="text/css">

div { font: 12px Arial; }

span.bold { font-weight: bold; }

#div2 { z-index: 2; }
#div3 { z-index: 1; }
#div4 { z-index: 10; }

#div1,#div3 {
   height: 80px;
   position: relative;
   border: 1px dashed #669966;
   background-color: #ccffcc;
   padding-left: 5px;
}

#div2 {
   opacity: 0.8;
   position: absolute;
   width: 150px;
   height: 200px;
   top: 20px;
   left: 170px;
   border: 1px dashed #990000;
   background-color: #ffdddd;
   text-align: center;
}

#div4 {
   opacity: 0.8;
   position: absolute;
   width: 200px;
   height: 70px;
   top: 65px;
   left: 50px;
   border: 1px dashed #000099;
   background-color: #ddddff;
   text-align: left;
   padding-left: 10px;
}

</style></head>

<body>

    <br />

    <div id="div1"><br />
        <span class="bold">DIV #1</span><br />
        position: relative;
        <div id="div2"><br />
            <span class="bold">DIV #2</span><br />
            position: absolute;<br />
            z-index: 2;
        </div>
    </div>

    <br />

    <div id="div3"><br />
        <span class="bold">DIV #3</span><br />
        position: relative;<br />
        z-index: 1;
        <div id="div4"><br />
            <span class="bold">DIV #4</span><br />
            position: absolute;<br />
            z-index: 10;
        </div>
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
- [重ね合わせコンテキストの例 3](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3 階層の HTML 構造、第 2 階層の z-index
