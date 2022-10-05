---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
---

{{DefaultAPISidebar("CSS Font Loading API")}}{{SeeCompatTable}}

CSS Font Loading API は動的にフォントリソースをロードするイベントやインターフェイスを提供します。

## インターフェイス

- {{domxref('FontFace')}}
  - : 使用可能な単一フォントを表します
- {{domxref('FontFaceSet')}}
  - : フォントを読み込み、ダウンロード状態をチェックするインターフェイスです。
- {{domxref('FontFaceSource')}}
  - : フォント関連で使用される操作のうち、ほかで定義されていないものを提供する{{Glossary("mixin", "ミックスイン")}}です。これは {{domxref("FontFaceSources.fonts")}} プロパティを定義しており、 {{domxref("Document")}} および {{domxref("WorkerGlobalScope")}} で使用可能です。
- {{domxref('FontFaceSetLoadEvent')}}
  - : {{domxref("FontFaceSet")}} を読み込むたびに発行されます。

## 仕様書

| Specification                                | Status                                   | Comment  |
| -------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('CSS3 Font Loading')}} | {{Spec2('CSS3 Font Loading')}} | 初回定義 |

## ブラウザーの互換性

### FontFace interface

{{Compat("api.FontFace")}}
