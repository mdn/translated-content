---
title: asm.js
slug: Games/Tools/asm.js
tags:
  - JavaScript
  - asm.js
translation_of: Games/Tools/asm.js
---
<div>{{GamesSidebar}}</div><div>{{IncludeSubnav("/ja/docs/Games")}}</div>

<div class="summary">
<p><span class="seoSummary"><a href="http://asmjs.org/">asm.js</a> は 高度に最適化可能な JavaScript のサブセットを規定する仕様です。この文書では、asm.js で可能なこと、利点、利用方法、そして関連する情報と使用例を解説します。</span></p>
</div>

<h2 id="asm.js_とは">asm.js とは</h2>

<p>極めて小さく、厳密な JavaScript のサブセットです。while や if、数値型、トップレベルの名前付き関数といくつかの単純な生成物のみ利用可能です。オブジェクト、文字列、クロージャや、ヒープを必要とするものは利用できません。asm.js のコードは多くの点で C のそれと類似していますが、全ての JavaScript エンジンで動作します。JavaScript エンジンの最適化を助ける一方、<a href="https://github.com/kripken/emscripten">Emscripten</a> のようなコンパイラが出力するべきコードを明確に規定しています。asm.js のコードと、それがどのように動作するのか、そしてどのように利用できるかを解説します。</p>

<p>JavaScript のサブセットは Just-In-Time (JIT) コンパイラを持つ多くのエンジンで高度に最適化されています。しかし、明確な標準を定めることによって、この種のコードの最適化により取り組むことができ、また驚くほどの高速化が可能となります。議論と測定が容易になるため、複数の JS エンジンの間での協力がより簡単になります。この種のコードは全てのエンジンで高速に動作するべきで、そうでないのはバグであるべきです。そのためのエンジンが最適化するべき仕様となっています。</p>

<p>標準は Web 向けにハイパフォーマンスなコードを出力したいと考えるコンパイラ製作者たちも助けます。asm.js の仕様を参考ににでき、asm.js に忠実であれば高速に動作するということがわかるからです。C/C++ を JavaScript へコンパイルする <a href="https://github.com/kripken/emscripten">Emscripten</a> は asm.js を出力し、そのコードはいくつかのブラウザでネイティブと同等の速度で動作します。</p>

<p>またエンジンが asm.js のコードを識別べきする場合、さらなる最適化を行えます。現在のところ、それが可能なブラウザは Firefox のみとなっています。</p>

<h2 id="asm.js_言語のまとめ">asm.js 言語のまとめ</h2>

<p>asm.js は中間言語です。厳密に型づけされた整数および浮動小数点演算、関数呼び出しとヒープ領域へのアクセスのみが許されるため、パフォーマンスレートの予測が極めて容易です。通常の JavaScript と比べ、そのパフォーマンス特性はネイティブコードに近くなっています。主要なブラウザは既に asm.js をサポートしています。asm.js はブラウザ内で動作するため、ブラウザとハードウェアに大きく依存します。</p>
