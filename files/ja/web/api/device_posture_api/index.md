---
title: 端末形態 API
slug: Web/API/Device_Posture_API
l10n:
  sourceCommit: 142dfee579b161c487fd438599a7d8506e2cdbed
---

{{DefaultAPISidebar("Device Posture API")}}{{seecompattable}}

**端末形態 API** (Device Posture API) は、開発者が折り曲げ可能な端末の形態に適応し、形態の変化に対応するインターフェースを作成することができるようにします。

## 概念と使用法

折り曲げ式端末は、開発者にとって独特の設計上の課題が存在します。通常の平らな画面として、あるいは本のように使用できます。さらに、単一の折り曲げ式画面を備えた機種もあれば、中央に蝶番で接続された 2 つの画面を備えた機種もあります。物理的な接続部分によってコンテンツが隠れたり、中央の折り目付近に近接しているため読みづらくなったりしないよう、注意を払う必要があります。

端末形態 API は、端末の現在の物理的な折り曲げ状態を示す**形態**を定義します。現在利用できる形態は以下の通りです。

- `continuous`
  - : 平らな画面状態を示します。折り曲げ可能な端末は、完全に開いた状態または完全に閉じられた状態など、平らな状態にある間は常に`continuous`です。折り曲げ可能でない端末は平らな状態と見なされ、常に`continuous`です。これには継ぎ目のない曲面ディスプレイや、標準的なデスクトップ、ノートパソコン、タブレット、モバイル端末の画面があります。
    ![スマートフォンやタブレットを含む平らな画面の製品群と、継ぎ目のない曲面ディスプレイ](continuous-screens.png)
- `folded`
  - : 折り曲げられた状態を示します。折り曲げ可能な端末は、ブックモードやラップトップモードで使用している間、`folded` 状態になります。
    ![折り曲げた画面各種。折り曲げ可能な端末やタブレット（ブック型・ノートパソコン型）を含む](folded-screens.png)

端末形態 API には、現在の端末の形態や形態の変化に応じて、スクリプトを実行したりレイアウトを変更したりすることができる機能が含まれています。

## CSS の機能

- {{cssxref("@media/device-posture", "device-posture")}} `@media` 特性
  - : 端末の現在の形態を検出します。

## インターフェイス

- {{domxref("DevicePosture")}}
  - : 端末の形態を表し、現在の形態を表す `type` へのアクセスと、形態変更時に発生する `change` イベントを提供します。

### 他のインターフェイスへの拡張

- {{domxref("Navigator.devicePosture")}}
  - : 端末形態 API のエントリーポイントである、ブラウザーの `DevicePosture` オブジェクトを返します。

## 例

すべての機能が動作している完全な例は、[Device Posture API デモ](https://mdn.github.io/dom-examples/device-posture-api/)でご覧いただけます。

可能な限り、折り曲げ可能な端末でご覧ください。現在のブラウザー開発者ツールでは折り曲げ可能な端末のエミュレーションができるものの、半開き状態の端末のエミュレーションは含まれていません（完全に開いた状態か閉じられた状態のみ）。そのため、常に`continuous`を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビューポートセグメント API](/ja/docs/Web/API/Viewport_segments_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) - developer.chrome.com (2024)
