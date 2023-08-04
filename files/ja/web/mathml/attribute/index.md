---
title: MathML 属性リファレンス
slug: Web/MathML/Attribute
---

{{MathMLRef}}

これは MathML 属性のアルファベット順リストです。それぞれの属性の詳細は、関連する[要素のページ](/ja/docs/Web/MathML/Element)および[グローバル属性ページ](/ja/docs/Web/MathML/Global_attributes)にあります。 MathML における値と単位についてのメモは[値](/ja/docs/Web/MathML/Attribute/Values)ページにあります。

> **メモ:** 主要な [MathML](/ja/docs/Web/MathML) ページで説明されているように、このドキュメントは言語のうちブラウザーに関連するサブセットに焦点を当てています。それ以外の MathML 属性の詳細については、 [MathML Full](https://w3c.github.io/mathml/) 仕様書を参照してください。

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
        {{ MathMLElement("mo") }}, {{ MathMLElement("mover") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
        論理値で、演算子がアクセント記号として扱われるべきか否かを指定します。
      </td>
    </tr>
    <tr>
      <td><code>accentunder</code></td>
      <td>
        {{ MathMLElement("munder") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
        論理値で、演算子がアクセント記号として扱われるべきか否かを指定します。
      </td>
    </tr>
    <tr>
      <td><code>actiontype</code></td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>文字列で、この要素で起こるアクションを指定します。</td>
    </tr>
    <tr>
      <td><code>align</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("mtable") }}<br />{{ MathMLElement("munder") }},
        {{ MathMLElement("mover") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
        いくつかの要素の揃える位置を指定します（詳細は要素のページを参照）。
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
      <td><code>bevelled</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>
        分数の表示方法を指定します。非推奨です。
        代わりに U+2044 （分数スラッシュ）を使用してください。
      </td>
    </tr>
    <tr>
      <td><code>close</code></td>
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
        深さを設定または増加します。
        <a href="/ja/docs/Web/MathML/Attribute/Values">length</a> を参照してください。
      </td>
    </tr>
    <tr>
      <td><code>dir</code></td>
      <td>
        {{ MathMLElement("math") }}, {{ MathMLElement("mi") }},
        {{ MathMLElement("mo") }}, {{ MathMLElement("mrow") }},
        {{ MathMLElement("ms") }}, {{ MathMLElement("mtext") }}
      </td>
      <td>
        テキストの方向です。可能な値は、 ltr （左から右）または rtl （右から左）です。
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
      <td><em>すべて</em></td>
      <td>
        <p>
          論理値で、表示される数式にもっと縦の空間を使用するか、 <code>false</code> に設定すると、よりコンパクトなレイアウトで数式を使用するかを指定します。
        </p>
        <p>
          <em
            >MathML 3 では、この属性は {{ MathMLElement("mstyle") }}, {{ MathMLElement("mtable") }}, および {{ MathMLElement("math") }} でのみ有効でした。</em
          >
        </p>
      </td>
    </tr>
    <tr>
      <td><code>fence</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        論理値で、演算子がフェンス（括弧など）であるかどうかを指定します。この属性には視覚的効果はありません。
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
        {{ MathMLElement("mtable") }} 全体の境界線を指定します。可能な値は <code>none</code>（既定値）、<code>solid</code>、<code>dashed</code> です。
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
        希望する高さを指定します。取りうる値は <a href="/ja/docs/Web/MathML/Attribute/Values#lengths">lengths</a> を参照してください。
      </td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td><em>すべて</em></td>
      <td>指定された URI へのハイパーリンクを設定するために使用します。</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td><em>すべて</em></td>
      <td>この要素に関連する一意の識別子を設定します。</td>
    </tr>
    <tr>
      <td><code>length</code></td>
      <td>{{ MathMLElement("msline") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>linethickness</code></td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>水平方向の分数線の太さです。</td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mpadded") }}
      </td>
      <td>
        演算子の前の空間の大きさです（数値や単位は<a href="/ja/docs/Web/MathML/Attribute/Values#lengths">length</a> を参照してください）。
      </td>
    </tr>
    <tr>
      <td><code>lquote</code></td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        内容を囲む開始引用文字（<code>dir</code> に依存）です。既定値は "<code>&#x26;quot;</code>" です。
      </td>
    </tr>
    <tr>
      <td><code>mathbackground</code></td>
      <td><em>すべて</em></td>
      <td>
        背景色です。 <code>#rgb</code>、<code>#rrggbb</code>、<a
          href="/ja/docs/Web/CSS/color_value#html.2fsvg.2fx11.c2.a0_color_keywords"
          >HTML 色名</a
        >を使用することができます。
      </td>
    </tr>
    <tr>
      <td><code>mathcolor</code></td>
      <td><em>すべて</em></td>
      <td>
        テキストの色です。 <code>#rgb</code>、<code>#rrggbb</code>、<a
          href="/ja/docs/Web/CSS/color_value#html.2fsvg.2fx11.c2.a0_color_keywords"
          >HTML 色名</a
        >を使用することができます。
      </td>
    </tr>
    <tr>
      <td><code>mathsize</code></td>
      <td>
        {{ MathMLElement("mi") }}, {{ MathMLElement("mn") }},
        {{ MathMLElement("mo") }}, {{ MathMLElement("ms") }},
        {{ MathMLElement("mtext") }}
      </td>
      <td>中身の大きさです。</td>
    </tr>
    <tr>
      <td><code>mathvariant</code></td>
      <td>
        {{ MathMLElement("mi") }}, {{ MathMLElement("mn") }},
        {{ MathMLElement("mo") }}, {{ MathMLElement("ms") }},
        {{ MathMLElement("mtext") }}
      </td>
      <td>識別子の論理クラスで、字体は様々です。</td>
    </tr>
    <tr>
      <td><code>maxsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>演算子の最大サイズ。</td>
    </tr>
    <tr>
      <td><code>minsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>演算子の最小サイズ。</td>
    </tr>
    <tr>
      <td><code>movablelimits</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        添字の下付き・上付きが、下付き・上付きに移動するかどうかを指定します。
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
      <td><code>open</code></td>
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
        セルが何行目に拡張されるかを示す非負の整数値。
      </td>
    </tr>
    <tr>
      <td><code>rspace</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>演算子の後の空間の大きさ。</td>
    </tr>
    <tr>
      <td><code>rquote</code></td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        内容を囲む引用符です（<code>dir</code> に依存）。既定値は "<code>&#x26;quot;</code>" です。
      </td>
    </tr>
    <tr>
      <td><code>scriptlevel</code></td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        主にフォントサイズを制御します。 <code>scriptlevel</code> が高いほど、フォントサイズは小さくなります。
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
      <td><code>selection</code></td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>アクションの対象となる子要素。</td>
    </tr>
    <tr>
      <td><code>separator</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        この属性には視覚的な効果はありませんが、演算子が区切り文字（カンマなど）であるかどうかを指定するものです。
      </td>
    </tr>
    <tr>
      <td><code>separators</code></td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>
        異なる区切り文字に使用する 0 文字以上の文字列です。
      </td>
    </tr>
    <tr>
      <td><code>stretchy</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        演算子を隣接する要素のサイズに引き伸ばすかどうかを指定する。
      </td>
    </tr>
    <tr>
      <td><code>subscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("mmultiscripts") }},
        {{ MathMLElement("msub") }},
        {{ MathMLElement("msubsup") }}
      </td>
      <td>
        式のベースラインより下に添字を移動させる最小の空間。
      </td>
    </tr>
    <tr>
      <td><code>supscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("mmultiscripts") }},
        {{ MathMLElement("msup") }},
        {{ MathMLElement("msubsup") }}
      </td>
      <td>
        式のベースライン上に上付き文字を移動させる最小限の空間です。
      </td>
    </tr>
    <tr>
      <td><code>symmetric</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        <code>stretchy</code> が <code>true</code> の場合、この属性は、演算子が虚数軸（中央の分数線）の周りに上下対称であるべきかを指定します。
      </td>
    </tr>
    <tr>
      <td><code>voffset</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>子コンテンツの縦方向の位置を設定します。</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>
        {{ MathMLElement("mpadded") }},
        {{ MathMLElement("mspace") }},
        {{ MathMLElement("mtable") }}
      </td>
      <td>
        希望する幅を指定します。取りうる値は
        <a href="/ja/docs/Web/MathML/Attribute/Values#lengths">lengths</a>
        を参照してください。
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
