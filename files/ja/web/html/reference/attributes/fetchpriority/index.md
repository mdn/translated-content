---
title: "HTML 属性: fetchpriority"
short-title: fetchpriority
slug: Web/HTML/Reference/Attributes/fetchpriority
l10n:
  sourceCommit: 1889aacdd5cb4dd3e6e5a5ef2f305fda0985c89b
---

**`fetchpriority`** 属性は、開発者が特定の画像を読み込みプロセスの早期に取得することで、ユーザー体験への影響を増加または減少させることを、ブラウザーが内部優先度を割り当てる際に行う合理的な推測の範囲を超えて、指定することができます。
これによりブラウザーは優先度を上げたり下げたりできるようになり、結果として画像を通常よりも早期に、あるいは遅れて読み込むことができます。

この属性は {{HTMLElement("img")}}、{{HTMLElement("link")}}、{{HTMLElement("script")}} の各要素に適用することができます。これには [SVG にも対応するもの](/ja/docs/Web/SVG/Reference/Attribute/fetchpriority)もあります。

読み取りの優先度は[事前読み込み](/ja/docs/Web/HTML/Reference/Attributes/rel/preload)を補完するために使用でき、開発者はデフォルト優先度が高いものの影響力の小さいリソースよりも優先度を高めることができます。
例えば、開発者が特定の画像がウェブサイトの {{glossary("Largest Contentful Paint")}} (LCP) に大きく影響してると把握している場合、その画像に [`<link rel="preload">`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) を追加し、さらに `fetchpriority` 属性を使って優先度をさらに高めることができます。

なお、読み取り操作の内部優先度と、`fetchpriority` が優先度に与える影響は、いずれも完全にブラウザーに依存します。

この属性は[列挙型](/ja/docs/Glossary/Enumerated)であり、以下のいずれかの値を取ります。

- `high`
  - : この外部リソースを、他の外部リソースに対して高い優先度で取得します。
- `low`
  - : この外部リソースを、他の外部リソースに対して低い優先度で取得します。
- `auto`
  - : フェッチ優先度の設定を行いません。
    値が設定されていない場合、または無効な値が設定された場合に使用されます。
    これがデフォルトです。

## 使用上のメモ

この属性は控えめに使用すべきです。過度に、または誤って優先順位をつけると、パフォーマンスを低下させる可能性があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の [`fetchpriority`](/ja/docs/Web/SVG/Reference/Attribute/fetchpriority) 属性
