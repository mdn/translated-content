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
<p><span class="seoSummary">mixin は、その{{Glossary("method", "メソッド")}}や{{Glossary("property", "プロパティ")}}の一部またはすべてが実装されていない{{Glossary("class","クラス")}}または{{Glossary("interface","インターフェイス")}}であり、別のクラスまたはインターフェイスが欠落している実装を提供する必要があります。</span> 新しいクラスまたはインターフェイスには、mixin のプロパティとメソッドと、それ自身で定義したプロパティとメソッドの両方が含まれます。 mixin が実装しているか、mixin を実装しているインターフェイスまたはクラスが実装しているかにかかわらず、すべてのメソッドとプロパティは全く同じように使用できます。</p>

<p>mixin の利点は、複数のインターフェイスに同じメソッドとプロパティを含める必要がある API の設計を簡素化するために使用できることです。</p>

<p>たとえば、{{domxref("WindowOrWorkerGlobalScope")}} mixin は、{{domxref("Window")}} と {{domxref("WorkerGlobalScope")}} の両方のインターフェイスで使用できるメソッドとプロパティを提供するために使用されます。 この mixin は、これらの両方のインターフェイスによって実装されています。</p>

<h2 id="Learn_more" name="Learn_more">より詳しく知る</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>Wikipedia 上の {{Interwiki("wikipedia", "Mixin")}}</li>
</ul>
