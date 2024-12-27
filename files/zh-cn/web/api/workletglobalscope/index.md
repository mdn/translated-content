---
title: WorkletGlobalScope
slug: Web/API/WorkletGlobalScope
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}{{SecureContext_Header}}

**`WorkletGlobalScope`** 接口是一个抽象类，特定的 worklet 作用域类从该类继承。每个 `WorkletGlobalScope` 都定义了一个新的全局环境。

> [!NOTE]
> 通常情况下，你不需要与此接口进行交互。它是一个基础接口，旨在被子类化。你将在 {{domxref("AudioWorklet")}} 对象中遇到子类 {{domxref("AudioWorkletGlobalScope")}}，或在 CSS 绘制 {{domxref("Worklet")}} 对象中遇到子类 {{domxref("PaintWorkletGlobalScope")}}。

## 实例属性

无。

## 实例方法

无。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("AudioWorkletGlobalScope")}}
- {{domxref("PaintWorkletGlobalScope")}}
