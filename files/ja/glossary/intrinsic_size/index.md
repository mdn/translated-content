---
title: Intrinsic size (内在サイズ)
slug: Glossary/Intrinsic_Size
---

CSS における要素の*内在サイズ* とは、外部要因が働いていない場合に、その内容に基づく大きさです。例えば、インライン要素は内在的にサイズ変更されます。 `width`、`height`、および垂直方向の余白とパディングは影響を与えませんが、水平方向の余白とパディングには影響を与えます。

内在サイズの計算方法は、 [CSS Intrinsic and Extrinsic Sizing Specification](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes) で定義されています。

内在サイズは要素の `min-content` と `max-content` を考慮します。テキストの場合、`min-content` のサイズは、テキストがオーバーフローを起こさずインライン方向にできるだけ小さく折り返される場合に、可能な限り自動の折り返しを行います。テキスト文字列を含むボックスの場合、`min-content` のサイズは最長の単語によって定まります。 {{cssxref("width")}} プロパティの `min-content` のキーワード値は、`min-content` のサイズに従い要素のサイズを変更します。

`max-content` のサイズはその反対です。— テキストの場合、これは可能な限り広くテキストを表示し、オーバーフローが起こったとしても自動折り返しを行いません。`max-content` のキーワード値はこの動作をみせます。
