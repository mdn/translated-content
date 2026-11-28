---
title: "Window: originAgentCluster プロパティ"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
l10n:
  sourceCommit: 43bd841296433b2c1adb8fa9d819212f86b37358
---

{{APIRef("HTML DOM")}}

**`originAgentCluster`** は {{domxref("Window")}} インターフェイスの読み取り専用プロパティで、このウィンドウがオリジンキー付き[エージェントクラスター](/ja/docs/Web/JavaScript/Reference/Execution_model#エージェントクラスターとメモリー共有)に属している場合は `true` を返します。これは、オペレーティングシステムがこのウィンドウのオリジンに専用リソース（例えばオペレーティングシステムプロセス）を割り当て、ほかのオリジンのウィンドウと共有しないことを意味します。

それ以外の場合、このプロパティは `false` を返します。

オリジンキー付きエージェントクラスターに属するウィンドウには、属していないウィンドウにはない追加の制限があります。特に、次の操作はできません。

- {{domxref("Document.domain")}} を設定すること。これは、通常、同一サイトかつオリジンをまたぐページが互いの DOM に同期的にアクセスできるようにする従来の機能です。
- [`WebAssembly.Module`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module) オブジェクトを、{{domxref("Window.postMessage()")}} を介して、ほかの同一サイトかつオリジンをまたぐページへ送信すること。
- {{jsxref("SharedArrayBuffer")}} オブジェクトまたは [`WebAssembly.Memory`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory) オブジェクトを、ほかの同一サイトかつオリジンをまたぐページへ送信すること。

ブラウザーにこのウィンドウをオリジンキー付きエージェントクラスターへ割り当てるようリクエストするには、{{httpheader("Origin-Agent-Cluster")}} レスポンスヘッダーを使用します。

オリジンキー付きエージェントクラスター機能は、保護されたコンテキストでのみ対応しています。サイトが保護されたコンテキストでない場合、`window.originAgentCluster` は常に `false` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{httpheader("Origin-Agent-Cluster")}} HTTP レスポンスヘッダー
- [Origin-Agent-Cluster ヘッダーによるパフォーマンス分離のリクエスト](https://web.dev/articles/origin-agent-cluster)<sup>(英語)</sup>
