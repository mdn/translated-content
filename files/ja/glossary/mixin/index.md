---
title: Mixin (ミックスイン)
slug: Glossary/Mixin
tags:
  - CodingScripting
  - Glossary
  - Method
  - Mixin
  - Property
translation_of: Glossary/Mixin
---
mixin は、その{{Glossary("method", "メソッド")}}や{{Glossary("property", "プロパティ")}}の一部またはすべてが実装されていない{{Glossary("class","クラス")}}または{{Glossary("interface","インターフェイス")}}であり、別のクラスまたはインターフェイスが欠落している実装を提供する必要があります。 新しいクラスまたはインターフェイスには、mixin のプロパティとメソッドと、それ自身で定義したプロパティとメソッドの両方が含まれます。 mixin が実装しているか、mixin を実装しているインターフェイスまたはクラスが実装しているかにかかわらず、すべてのメソッドとプロパティは全く同じように使用できます。

mixin の利点は、複数のインターフェイスに同じメソッドとプロパティを含める必要がある API の設計を簡素化するために使用できることです。

たとえば、{{domxref("WindowOrWorkerGlobalScope")}} mixin は、{{domxref("Window")}} と {{domxref("WorkerGlobalScope")}} の両方のインターフェイスで使用できるメソッドとプロパティを提供するために使用されます。 この mixin は、これらの両方のインターフェイスによって実装されています。

## より詳しく知る

### 一般知識

- Wikipedia 上の {{Interwiki("wikipedia", "Mixin")}}
