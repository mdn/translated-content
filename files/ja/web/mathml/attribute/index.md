---
title: 属性
slug: Web/MathML/Attribute
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

これは MathML 属性のアルファベット順リストです。それぞれの属性の詳細は、関連する [MathML 要素ページ](/ja/docs/Web/MathML/Element)および[グローバル属性ページ](/ja/docs/Web/MathML/Global_attributes)にあります。[値](/ja/docs/Web/MathML/Values)ページでは、 MathML 属性で使用される共通の値についての注意を説明しています。

> [!NOTE]
> 主要な [MathML](/ja/docs/Web/MathML) ページで説明されているように、 MDN は [MathML Core](https://w3c.github.io/mathml-core/) をリファレンス仕様書として使用しています。しかし、いくつかのブラウザーでまだ実装されている古い機能も文書化されています。これらの機能やその他の機能についての詳細は [MathML 4](https://w3c.github.io/mathml/) で見ることができます。

<table class="standard-table">
  <thead>
    <tr>
      <th>属性名</th>
      <th>この属性を取る要素</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>accent</code></td>
      <td>
        {{ MathMLElement("mo") }}
      </td>
      <td>
         <a href="/ja/docs/Web/MathML/Values#mathml_固有の型"><code>&lt;boolean&gt;</code></a> で、演算子を下付き文字または上付き文字として使用する際にアクセントとして扱うかどうかを示します。
      </td>
    </tr>
    <tr>
      <td><code>accent</code></td>
      <td>
        {{ MathMLElement("mover") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
        <a href="/ja/docs/Web/MathML/Values#mathml_固有の型"><code>&lt;boolean&gt;</code></a> で、演算子がアクセントとして扱われるべきか否かを指定します。
      </td>
    </tr>
    <tr>
      <td><code>accentunder</code></td>
      <td>
        {{ MathMLElement("munder") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
        <a href="/ja/docs/Web/MathML/Values#mathml_固有の型"><code>&lt;boolean&gt;</code></a> で、上付き文字がアクセントとして扱われるべきか否かを指定します。
      </td>
    </tr>
    <tr>
      <td><code>actiontype</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>文字列で、この要素で起こるアクションを指定します。</td>
    </tr>
    <tr>
      <td><code>align</code></td>
      <td>
        {{ MathMLElement("mtable") }}
      </td>
      <td>
        環境に対する表の垂直配置を指定します。
      </td>
    </tr>
    <tr>
      <td><code>background</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        代わりに CSS の <a href="/ja/docs/Web/CSS/background-color"><code>background-color</code></a> を使用してください。
      </td>
    </tr>
    <tr>
      <td><code>close</code>  {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>閉じ区切り文字列です。</td>
    </tr>
    <tr>
      <td><code>color</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        代わりに CSS の <a href="/ja/docs/Web/CSS/color"><code>color</code></a> を使用してください。
      </td>
    </tr>
    <tr>
      <td><code>columnalign</code></td>
      <td>
        {{ MathMLElement("mtable") }},
        {{ MathMLElement("mtd") }},
        {{ MathMLElement("mtr") }}
      </td>
      <td>表のセルの水平方向の配置を指定します。</td>
    </tr>
    <tr>
      <td><code>columnlines</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>表の列の境界線を指定します。</td>
    </tr>
    <tr>
      <td><code>columnspacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>表の列間の空間を指定します。</td>
    </tr>
    <tr>
      <td><code>columnspan</code></td>
      <td>{{ MathMLElement("mtd") }}</td>
      <td>
        非負の整数値で、セルが表の何列分に及ぶかを示します。
      </td>
    </tr>
    <tr>
      <td><code>denomalign</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>分数の下の分母の配置を示します。</td>
    </tr>
    <tr>
      <td><code>depth</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>
        {{cssxref("length-percentage")}} で、必要な深さ（ベースラインの下）を示します。
      </td>
    </tr>
    <tr>
      <td><code>dir</code></td>
      <td>
        <a href="/ja/docs/Web/MathML/Global_attributes">すべての MathML 要素</a>
      </td>
      <td>
        テキストの書字方向です。可能な値は、 <code>ltr</code> （左から右）または <code>rtl</code> （右から左）です。
      </td>
    </tr>
    <tr>
      <td><code>display</code></td>
      <td>{{ MathMLElement("math") }}</td>
      <td>
        レンダリングモードを指定します。指定できる値は <code>block</code> と <code>inline</code> です。
      </td>
    </tr>
    <tr>
      <td><code>displaystyle</code></td>
      <td><a href="/ja/docs/Web/MathML/Global_attributes">すべての MathML 要素</a></td>
      <td>
        <p>
        <a href="/ja/docs/Web/MathML/Values#mathml_固有の型"><code>&lt;boolean&gt;</code></a> で、 <a href="/ja/docs/Web/CSS/math-style">math-style</a> を <code>normal</code> （true の場合）と <code>compact</code> （それ以外の場合）のどちらに設定するかを指定します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>fence</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        <a href="/ja/docs/Web/MathML/Values#mathml_固有の型"><code>&lt;boolean&gt;</code></a> で、演算子がフェンス（括弧など）であるかどうかを指定します。この属性には視覚的効果はありません。
      </td>
    </tr>
    <tr>
      <td><code>fontfamily</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        代わりに CSS の <a href="/ja/docs/Web/CSS/font-family"><code>font-family</code></a> を使用してください。
      </td>
    </tr>
    <tr>
      <td><code>fontsize</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        代わりに CSS の <a href="/ja/docs/Web/CSS/font-size"><code>font-size</code></a> を使用してください。
      </td>
    </tr>
    <tr>
      <td><code>fontstyle</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        代わりに CSS の <a href="/ja/docs/Web/CSS/font-style"><code>font-style</code></a> を使用してください。
      </td>
    </tr>
    <tr>
      <td><code>fontweight</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        代わりに CSS の <a href="/ja/docs/Web/CSS/font-weight"><code>font-weight</code></a> を使用してください。
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>
        {{ MathMLElement("mtable") }} 全体の境界線を指定します。取りうる値は <code>none</code>（既定値）、<code>solid</code>、<code>dashed</code> です。
      </td>
    </tr>
    <tr>
      <td><code>framespacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>
        表と <code>frame</code> の間に追加される空間を指定します。
      </td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>
        {{ MathMLElement("mpadded") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td>
        {{cssxref("length-percentage")}} で、希望する（ベースライン上の）高さを指定します。
      </td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td><a href="/ja/docs/Web/MathML/Global_attributes">すべての MathML 要素</a></td>
      <td>指定された URI へのハイパーリンクを設定するために使用します。</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td><a href="/ja/docs/Web/MathML/Global_attributes">すべての MathML 要素</a></td>
      <td>この要素に関連する一意の識別子を設定します。</td>
    </tr>
    <tr>
      <td><code>linethickness</code></td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>{{cssxref("length-percentage")}} で、水平方向の分数線の太さです。</td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mo") }}
      </td>
      <td>
        {{cssxref("length-percentage")}} で、演算子の前の空間の量を示します。
      </td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mpadded") }}
      </td>
      <td>
        {{cssxref("length-percentage")}} で、要素の位置決め点に対する子コンテンツの位置決め点の水平方向の位置を示します。
      </td>
    </tr>
    <tr>
      <td><code>lquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        内容を囲む開始引用文字です。既定値は "<code>&amp;quot;</code>" です。
      </td>
    </tr>
    <tr>
      <td><code>mathbackground</code></td>
      <td><a href="/ja/docs/Web/MathML/Global_attributes">すべての MathML 要素</a></td>
      <td>
        要素の<a href="/ja/docs/Web/CSS/background-color">背景色</a>です。
      </td>
    </tr>
    <tr>
      <td><code>mathcolor</code></td>
      <td><a href="/ja/docs/Web/MathML/Global_attributes">すべての MathML 要素</a></td>
      <td>
        要素の<a href="/ja/docs/Web/CSS/color">色</a>です。
      </td>
    </tr>
    <tr>
      <td><code>mathsize</code></td>
      <td><a href="/ja/docs/Web/MathML/Global_attributes">すべての MathML 要素</a></td>
      <td>
        {{cssxref("length-percentage")}} で、この要素の <a href="/ja/docs/Web/CSS/font-size"><code>font-size</code></a> として使用されます。
      </td>
    </tr>
    <tr>
      <td><code>mathvariant</code></td>
      <td><a href="/ja/docs/Web/MathML/Global_attributes">すべての MathML 要素</a></td>
      <td>文字組版によって異なるトークン要素の論理クラスです。</td>
    </tr>
    <tr>
      <td><code>maxsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>{{cssxref("length-percentage")}} で、演算子が伸張したときの最大サイズを示します。</td>
    </tr>
    <tr>
      <td><code>minsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>{{cssxref("length-percentage")}} で、演算子が伸張したときの最小サイズを示します。</td>
    </tr>
    <tr>
      <td><code>movablelimits</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        <a href="/ja/docs/Web/MathML/Values#mathml_固有の型"><code>&lt;boolean&gt;</code></a> で、 <a href="/ja/docs/Web/CSS/math-style">math-style</a> が <code>compact</code> に設定されていた場合に上側・下側の文字が上付き・下付き文字に移動するかどうかを示します。
      </td>
    </tr>
    <tr>
      <td><code>notation</code></td>
      <td>{{ MathMLElement("menclose") }}</td>
      <td>
        子要素に適用する表記法のリスト。ホワイトスペースで区切られます。
      </td>
    </tr>
    <tr>
      <td><code>numalign</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>分数上の分子の配置を示します。</td>
    </tr>
    <tr>
      <td><code>open</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>開き区切り文字用の文字列。</td>
    </tr>
    <tr>
      <td><code>rowalign</code></td>
      <td>
        {{ MathMLElement("mtable") }},
        {{ MathMLElement("mtd") }},
        {{ MathMLElement("mtr") }}
      </td>
      <td>表セルの垂直方向の配置を指定します。</td>
    </tr>
    <tr>
      <td><code>rowlines</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>表の行の境界線を指定します。</td>
    </tr>
    <tr>
      <td><code>rowspacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>テーブルの行間の空間を指定します。</td>
    </tr>
    <tr>
      <td><code>rowspan</code></td>
      <td>{{ MathMLElement("mtd") }}</td>
      <td>
        セルが何行に拡張されるかを示す非負の整数値。
      </td>
    </tr>
    <tr>
      <td><code>rspace</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>{{cssxref("length-percentage")}} で、演算子の後の空間の大きさを示します。</td>
    </tr>
    <tr>
      <td><code>rquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        内容を囲む引用符です。既定値は <code>&amp;quot;</code> です。
      </td>
    </tr>
    <tr>
      <td><code>scriptlevel</code></td>
      <td><a href="/ja/docs/Web/MathML/Global_attributes">すべての MathML 要素</a></td>
      <td>
        この要素の <a href="/ja/docs/Web/CSS/math-depth">math-depth</a> を指定します。受け付ける値や対応は、 <a href="/ja/docs/Web/MathML/Global_attributes/scriptlevel#values">scriptlevel ページ</a>を参照してください。
      </td>
    </tr>
    <tr>
      <td><code>scriptminsize</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        <code>scriptlevel</code> の変更により許容される最小フォントサイズを指定します。
      </td>
    </tr>
    <tr>
      <td><code>scriptsizemultiplier</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        <code>scriptlevel</code> の変化によるフォントサイズの調整に使用する倍率を指定します。
      </td>
    </tr>
    <tr>
      <td><code>selection</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>目に見える子要素で、いくつかの <code>actiontype</code> 値に対してのみ考慮されます。</td>
    </tr>
    <tr>
      <td><code>separator</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
      <a href="/ja/docs/Web/MathML/Values#mathml_固有の型"><code>&lt;boolean&gt;</code></a> で、この属性には視覚的な効果はありませんが、演算子が区切り文字（カンマなど）であるかどうかを指定するものです。
      </td>
    </tr>
    <tr>
      <td><code>separators</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>
        異なる区切り文字に使用する 0 文字以上の文字列です。
      </td>
    </tr>
    <tr>
      <td><code>stretchy</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        <a href="/ja/docs/Web/MathML/Values#mathml_固有の型"><code>&lt;boolean&gt;</code></a> で、演算子を隣接する要素のサイズに引き伸ばすかどうかを指定します。
      </td>
    </tr>
    <tr>
      <td><code>subscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("msub") }},
        {{ MathMLElement("msubsup") }},
        {{ MathMLElement("mmultiscripts") }}
      </td>
      <td>
        {{cssxref("length-percentage")}} で、式のベースラインより下に添字を移動させる最小の空間。
      </td>
    </tr>
    <tr>
      <td><code>superscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("msup") }},
        {{ MathMLElement("msubsup") }},
        {{ MathMLElement("mmultiscripts") }}
      </td>
      <td>
        {{cssxref("length-percentage")}} で、式のベースライン上に上付き文字を移動させる最小限の空間です。
      </td>
    </tr>
    <tr>
      <td><code>symmetric</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        <a href="/ja/docs/Web/MathML/Values#mathml_固有の型"><code>&lt;boolean&gt;</code></a> で、演算子が伸張された場合、演算子が虚数軸（中央の分数線）の周りに上下対称であるべきかを指定します。
      </td>
    </tr>
    <tr>
      <td><code>voffset</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>{{cssxref("length-percentage")}} で、要素の位置決め点に対する子コンテンツの位置決め点の垂直方向の位置を示します。
</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>
        {{ MathMLElement("mpadded") }},
        {{ MathMLElement("mspace") }},
        {{ MathMLElement("mtable") }}
      </td>
      <td>
        {{cssxref("length-percentage")}} で、希望する幅を指定します。
      </td>
    </tr>
    <tr>
      <td><code>xmlns</code></td>
      <td>{{ MathMLElement("math") }}</td>
      <td>
        MathML 名前空間の URI を指定します。 (<code
          ><a href="https://www.w3.org/1998/Math/MathML"
            >http://www.w3.org/1998/Math/MathML</a
          ></code
        >)
      </td>
    </tr>
  </tbody>
</table>
