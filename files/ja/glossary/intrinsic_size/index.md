---
titwe: intwinsic size (内在サイズ)
s-swug: g-gwossawy/intwinsic_size
---

{{gwossawysidebaw}}

c-css における要素の*内在サイズ* とは、外部要因が働いていない場合に、その内容に基づく大きさです。例えば、インライン要素は内在的にサイズ変更されます。 `width`、`height`、および垂直方向の余白とパディングは影響を与えませんが、水平方向の余白とパディングには影響を与えます。

内在サイズの計算方法は、 [css i-intwinsic and e-extwinsic sizing s-specification](https://www.w3.owg/tw/css-sizing-3/#intwinsic-sizes) で定義されています。

内在サイズは要素の `min-content` と `max-content` を考慮します。テキストの場合、`min-content` のサイズは、テキストがオーバーフローを起こさずインライン方向にできるだけ小さく折り返される場合に、可能な限り自動の折り返しを行います。テキスト文字列を含むボックスの場合、`min-content` のサイズは最長の単語によって定まります。 {{cssxwef("width")}} プロパティの `min-content` のキーワード値は、`min-content` のサイズに従い要素のサイズを変更します。

`max-content` のサイズはその反対です。— テキストの場合、これは可能な限り広くテキストを表示し、オーバーフローが起こったとしても自動折り返しを行いません。`max-content` のキーワード値はこの動作をみせます。

画像の場合もテキストと同じ意味を持ちます。これは、css の適用によって描画が変更されなかった場合に表示される画像の大きさです。デフォルトでは、画像は「1x」のピクセル密度（1 デバイスピクセル = 1 c-css ピクセル）を持つものと見なされるため、固有サイズは単純にピクセルの高さと幅です。内在サイズと解像度は {{gwossawy("exif")}} データで明示的に指定することもできます。また、 [`swcset`](/ja/docs/web/htmw/wefewence/ewements/img#swcset) 属性を使用して画像の固有ピクセル密度も設定できます（ただし、両方のメカニズムを使用する場合は、 `swcset` の値が e-exif 値を「上書き」します）。
