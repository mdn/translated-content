---
title: AJAX
slug: Web/Guide/AJAX
---

## [はじめに](/ja/docs/Web/Guide/AJAX/Getting_Started)

**A**synchronous **J**avaScript **a**nd **X**ML (AJAX) はそれ自体がある種の技術というわけではありませんが、 Jesse James Garrett によって 2005 年に作られた言葉で、既存の技術同士を組み合わせた新しいアプローチを意味します。組み合わされる技術は、[HTML](/ja/docs/Web/HTML), [XHTML](/ja/docs/Glossary/XHTML), [CSS](/ja/docs/Web/CSS), [JavaScript](/ja/docs/Web/JavaScript), [DOM](/ja/docs/Web/API/Document_Object_Model), [XML](/ja/docs/Web/XML), [XSLT](/ja/docs/Web/XSLT), そして最も重要なものは {{domxref("XMLHttpRequest")}} オブジェクトです。
これらの技術が AJAX のモデルで組み合わされると、ウェブアプリケーションはより早く、表示されているページ全てを再読み込みすることなく、ユーザーインターフェイスを逐次更新できるようになります。そして、アプリケーションにより早い表示、より良い応答性をもたらします。

Ajax の X は XML を表していますが、 {{glossary("JSON")}} の方がより軽く JavaScript の一部であることなど数多くの利点があるため、今日では XML よりもよく使われています。 JSON と XML はどちらも Ajax モデルの情報をパッケージ化するために使用されます。

## ドキュメント

- [はじめに](/ja/docs/Web/Guide/AJAX/Getting_Started)
  - : この記事では AJAX の基本について説明し、始めるために 2 つの簡単な実例を紹介します。
- [`XMLHttpRequest` API の使用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

  - : {{domxref("XMLHttpRequest")}} API は、Ajax のコアです。この記事では、次のような Ajax 技術の使用方法について説明します。

    - [サーバーのレスポンスの分析と操作](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#handling_responses)
    - [リクエストの進捗のモニタリング](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#monitoring_progress)
    - [フォームの送信とバイナリーファイルのアップロード](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#submitting_forms_and_uploading_files) – _純粋な Ajax_、もしくは {{domxref("FormData")}} オブジェクトを使用します
    - [ウェブワーカー](/ja/docs/Web/API/Worker)内部における Ajax の使用

- [Fetch API](/ja/docs/Web/API/Fetch_API)
  - : Fetch API はリソースをフェッチするためのインターフェイスを提供します。 {{domxref("XMLHTTPRequest")}} を使用した人なら誰にでも馴染みのあるように見えますが、この API はより強力で柔軟な機能セットを提供します。
- [Server-sent イベント](/ja/docs/Web/API/Server-sent_events)
  - : 伝統的に、ウェブページは新しいデータを受信するためにサーバーにリクエストを送信しなければなりません。つまり、ページはサーバーにデータを要求します。サーバーが送信したイベントでは、サーバーがメッセージをウェブページにプッシュすることで、いつでもウェブページに新しいデータを送信することができます。これらの着信メッセージは、ウェブページ内の*[イベント](/ja/docs/Web/API/Event)+データ*として扱うことができます。[サーバー送信イベントの使用](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)を参照してください。
- [_純粋な Ajax_ ナビゲーションサンプル](/ja/docs/Web/API/History_API/Example)
  - : この記事では、_純粋な Ajax_ ウェブサイトの 3 つのページから構成された実用的な (最小限の) 例を提供します。
- [バイナリーデータの送信と受信](/ja/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)
  - : `XMLHttpRequest` オブジェクトの `responseType` プロパティを設定して、予想されるレスポンスタイプをサーバーから変更することができます。可能な値は空文字列 (デフォルト), `arraybuffer`, `blob`, `document`, `json`, `text` です。`response` のプロパティには、 `responseType` に従って `ArrayBuffer`, `Blob`, `Document`, `JSON`、または string のようなエンティティ本文が含まれます。この記事では、Ajax の I/O 技術をいくつか紹介します。
- [XML](/ja/docs/Web/XML)
  - : **Extensible Markup Language (XML)** は、特定の目的のマークアップ言語を作成する W3C 推奨の汎用マークアップ言語です。これは SGML の単純化されたサブセットであり、多くの異なる種類のデータを記述することができます。その主な目的は、異なるシステム、特にインターネットを介して接続されたシステム間でのデータの共有を容易にすることです。
- [XML の解釈とシリアライズ](/ja/docs/Web/Guide/Parsing_and_serializing_XML)
  - : 文字列、ファイル、または JavaScript を使用して XML 文書を解釈する方法、XML 文書を文字列、Javascript Object Tree (JXON) またはファイルにシリアル化する方法
- [XPath](/ja/docs/Web/XPath)
  - : XPath は **X**ML **Path** Language (XML パス言語) の略で、[XML](/ja/docs/Web/XML) 文書のさまざまな部分をアドレス指定する (指す) 柔軟な方法を提供する非 XML 構文を使用します。これと同様に、ドキュメント内のアドレス指定されたノードをテストしてパターンに一致するかどうかを判断することもできます。
- {{domxref("FileReader")}} API
  - : `FileReader` API を使用すると、ウェブアプリケーションがユーザーのコンピューターに格納されているファイル (または生データバッファ) の内容を非同期に読み取ることができ、読み取るファイルまたはデータを {{domxref("File")}} または {{domxref("Blob")}} オブジェクトで特定します。 File オブジェクトはユーザーが {{HTMLElement("input")}} 要素を使用して選択した結果として返される {{domxref("FileList")}} オブジェクト、ドラッグ＆ドロップ操作の {{domxref("DataTransfer")}} オブジェクト、 {{domxref("HTMLCanvasElement")}} の `mozGetAsFile()` API から取得することができます。
- [XMLHttpRequest における HTML](/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - : W3C の [XMLHttpRequest](https://xhr.spec.whatwg.org/) 仕様書では、もともと XML の解析のみに対応していた {{domxref("XMLHttpRequest")}} に HTML 解析の対応が追加されています。この機能を使用すると、ウェブアプリケーションは `XMLHttpRequest` を使用して解析された DOM として HTML リソースを取得できます。

## ツール

- [axios](https://github.com/axios/axios)
  - : {{jsxref("Promise")}} ベースの {{glossary("HTTP")}} クライアントで、内部的に `XMLHttpRequest` を使用しています。

## 関連情報

- [Ajax: ウェブアプリケーションへの新しいアプローチ](https://pdfs.semanticscholar.org/c440/ae765ff19ddd3deda24a92ac39cef9570f1e.pdf)
  - : Adaptive Path の Jesse James Garrett は 2005 年 2 月にこの記事を書いて、 Ajax とその関連概念を紹介しました。
- [XMLHttpRequest の仕様書](https://xhr.spec.whatwg.org/)
  - : WHATWG ライブ標準
