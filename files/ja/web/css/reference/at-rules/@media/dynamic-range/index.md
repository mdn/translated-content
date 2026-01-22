---
title: dynamic-range
slug: Web/CSS/Reference/At-rules/@media/dynamic-range
original_slug: Web/CSS/@media/dynamic-range
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

**`dynamic-range`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、{{glossary("user agent", "ユーザーエージェント")}}および出力機器が対応している明るさ、コントラスト比、および色深度の組み合わせを検査することができます。

> [!NOTE]
> 一部の端末は、高ダイナミックレンジ機能を備えていますが、この機能は常に「オン」になっているわけではなく、アクティブ化する必要がある場合があります（プログラムによって、ユーザーによって、コンテンツに応じてなど）。このメディア機能は、ダイナミックレンジ機能がアクティブであるかどうかを検査するものではありません。端末が高ダイナミックレンジの映像を再生できるかどうかのみを検査します。

## 構文

`dynamic-range` 機能は、以下の一覧から選択したキーワードの値として指定します。

- `standard`
  - : この値は、あらゆる視覚的な端末と一致し、視覚機能のない端末は除外されます。`high` と一致するユーザーエージェントまたは出力機器は、`standard` 値とも一致します。

- `high`
  - : この値は、高いピーク輝度、高いコントラスト比、および RGB の色要素ごとに 24 ビットまたは 8 ビットを超える色深度に対応するユーザーエージェントおよび出力端末と一致します。**ピーク輝度**は、 LCD 画面などの発光デバイスが表現できる最も明るい点の明るさを指します。紙や電子インクなどの光反射型デバイスの場合、ピーク輝度は、少なくとも光を吸収する点を指します。**コントラスト比**は、システムが生成できる最も明るい色の輝度と最も暗い色の輝度の比率を指します。現在、ピーク輝度およびコントラスト比を正確に測定する方法はありません。また、高いピーク輝度および高いコントラスト比とは何であるかの判断は、ユーザーエージェントによって異なります。

## 例

```css
@media (dynamic-range: standard) {
  p {
    color: red;
  }
}

@media (dynamic-range: high) {
  p {
    color: green;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
