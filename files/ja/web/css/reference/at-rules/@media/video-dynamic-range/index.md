---
title: video-dynamic-range
slug: Web/CSS/Reference/At-rules/@media/video-dynamic-range
original_slug: Web/CSS/@media/video-dynamic-range
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

**`video-dynamic-range`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、{{glossary("user agent", "ユーザーエージェント")}}の動画プレーンと出力機器が対応する明るさ、コントラスト比、色深度の組み合わせをテストするために使用できます。

一部のユーザーエージェント（多くのテレビを含む）は、動画とグラフィックを、それぞれ異なる画面特性を持つ 2 つの別々のプレーン（バイプレーン）でレンダリングします。`video-dynamic-range` 機能は、動画プレーンの特性を検査するために使用されます。

## 構文

`video-dynamic-range` 特性は、以下のリストから選択したキーワード値として指定します。

- `standard`
  - : この値は、あらゆる視覚機器に一致し、視覚機能のない機器は除外されます。 `high` に一致するユーザーエージェントまたは出力機器は、 `standard` 値にも一致します。

- `high`
  - : この値は、高ピーク輝度、高コントラスト比、および 24 ビットまたは RGB の各色成分あたり 8 ビットを超える色深度を対応するユーザーエージェントおよび出力機器に一致します。**ピーク輝度**とは、LCD 画面などで発光装置が発する最も明るい点の明るさを指します。紙や電子インクなどの光反射型装置では、ピーク輝度は、光の吸収が最低となる点を指します。**コントラスト比**とは、システムが再現可能な最も明るい色と最も暗い色の輝度の比率を指します。現在、ピーク輝度とコントラスト比を正確に測定する方法は存在せず、高ピーク輝度と高コントラスト比の基準はユーザーエージェントによって異なります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
