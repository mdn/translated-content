---
title: Alpha (アルファチャンネル)
slug: Glossary/Alpha
tags:
  - Alpha
  - Alpha Channel
  - Drawing
  - Glossary
  - Graphics
  - Translucecncy
  - Translucent
  - Transparency
  - Transparent
  - WebGL
  - WebXR
  - channel
  - color
  - pixel
translation_of: Glossary/Alpha
---
コンピューター上では、色を数値の組であらわします。各数値は色のいずれかの構成要素の強さ、主に輝度を表します。それぞれの構成要素を**チャンネル**と呼びます。画像ファイルでは、ある色の色チャンネルによって、この色がどれくらいの強さの赤色・緑色・青色の光から構成されているかを表すのが一般的です。後ろ側が透けて見えるような色を表すために、4 番目に追加されるのが**アルファチャンネル**です。アルファチャンネルは、ある色が後ろ側にある色をどの程度覆い隠すかを表します。

具体例をみてみましょう。`#8921F2` (`rgb(137, 33, 242)` または `hsl(270, 89%, 54)` とも記述します) は紫色を表します。下の図では 2 個のボックスがテキストを含む段落の手前に描画されています。左上にあるボックスでは上で示した紫色を背景色に指定しています。右下のボックスは、_同じ_ 背景色ですがアルファチャンネルの値を 0.5 に指定しています。これは、50% の不透明度とも表せます。

![色をあらわすアルファチャンネルの効果を示す画像](https://mdn.mozillademos.org/files/17019/alpha-channel-example.png)

このように、ボックスの背景色にアルファチャンネルを明示的に指定しなかった場合、後ろ側のテキストは完全に覆い隠されます。一方、アルファチャンネルを指定した場合、後ろ側のコンテンツが透けて見えます。

## 関連項目

### 一般知識

- Wikipedia 上の記事「{{interwiki("wikipedia", "アルファチャンネル")}}」
- Wikipedia 上の記事「{{interwiki("wikipedia", "色空間#RGBA")}}」
- Wikipedia 上の記事「{{interwiki("wikipedia", "en:Channel (digital image)")}}」

### 技術リファレンス

- [CSS color](/ja/docs/Web/CSS/CSS_Color)
