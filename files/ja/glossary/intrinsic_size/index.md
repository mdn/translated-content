---
title: Intrinsic size (内在サイズ)
slug: Glossary/Intrinsic_Size
tags:
  - CSS
  - Glossary
  - Intrinsic size
translation_of: Glossary/Intrinsic_Size
---
<p>CSS における要素の<em>内在サイズ</em> とは、外部要因が働いていない場合に、その内容に基づく大きさです。例えば、インライン要素は内在的にサイズ変更されます。 <code>width</code>、<code>height</code>、および垂直方向の余白とパディングは影響を与えませんが、水平方向の余白とパディングには影響を与えます。</p>

<p>内在サイズの計算方法は、 <a href="https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes">CSS Intrinsic and Extrinsic Sizing Specification</a> で定義されています。</p>

<p>内在サイズは要素の <code>min-content</code> と <code>max-content</code> を考慮します。テキストの場合、<code>min-content</code> のサイズは、テキストがオーバーフローを起こさずインライン方向にできるだけ小さく折り返される場合に、可能な限り自動の折り返しを行います。テキスト文字列を含むボックスの場合、<code>min-content</code> のサイズは最長の単語によって定まります。 {{cssxref("width")}} プロパティの <code>min-content</code> のキーワード値は、<code>min-content</code> のサイズに従い要素のサイズを変更します。</p>

<p><code>max-content</code> のサイズはその反対です。— テキストの場合、これは可能な限り広くテキストを表示し、オーバーフローが起こったとしても自動折り返しを行いません。<code>max-content</code> のキーワード値はこの動作をみせます。</p>
