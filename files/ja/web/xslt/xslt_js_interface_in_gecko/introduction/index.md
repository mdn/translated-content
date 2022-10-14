---
title: 前書き
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Introduction
---

## 前書き

[XSLT](/ja/docs/Web/API/XSLTProcessor)をサポートする最新のブラウザでは、開発者は JavaScript を使用して XSLT が提供する機能にアクセスできるようになりました。JavaScript を使用すると、Web アプリケーションは XML データを読み込み、XSLT を介してそれを提示可能なフォームに処理し、それを既存の文書に追加できます。読み込まれた XML データにはプレゼンテーションデータがない生の情報しか含まれていないため、ダイアルアップ時でも素早く読み込むことができます。

XSLT を使用すると作成者はドキュメントの構造を直接操作できます。たとえば、要素の並べ替えや並べ替えが可能になり、結果として得られる文書の構造をより細かく制御することもできます。

[Mozilla 1.2](http://mozilla.org/releases/) 以降、Gecko は JavaScript が XSLT プロセッサを作成できるようにします。 この記事では、Gecko の XSLT/JavaScript バインディングについて説明します。Netscape 7.0x では利用できませんが、Netscape 7.1 では利用可能です。
