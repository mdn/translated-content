---
title: Introduction
slug: Web/API/XSLTProcessor/Introduction
translation_of: Web/API/XSLTProcessor/Introduction
---
<p>
</p>
<h2 id=".E5.BA.8F.E6.96.87"> 序文 </h2>
<p>W3C 標準で気付かされる流行の一つは、スタイルからコンテンツを分ける努力がなされていることです。これにより、同じスタイルを複数のコンテンツで再利用することができ、簡単なメンテナンスでコンテンツの外観を (一つのファイルの修正のみで) すばやく変更することができます。
</p><p>CSS (Cascade Style Sheets) は W3C によって最初に提唱された方法の一つでした。CSS は簡単な方法でスタイル規則を Web ドキュメントに適用します。これらのスタイル規則は、ドキュメント(その中のコンテンツ) のレイアウトを定義します。しかしながら、プログラミング構造や複雑なレイアウトモデルの作成能力に欠陥があるなどいくつかの制限があります。CSS はまた、要素の配置の変更のサポートも制限されています。
</p><p>XSL (Extensible Stylesheet Language) 変換は二つの部分で構成されています: XML ツリーを他のマークアップツリーおよび XPath へ変換可能にする XSL 要素、ツリーのための選択言語。XSLT は XML ドキュメント(そのコンテンツ) を取得し、XSL スタイルシートの規則によって新しいドキュメントを生成します。XSLT によって、オリジナルの XML ドキュメントから要素を追加、削除、再構成することができるため、結果的にドキュメント構造をより細かく制御することができます。
</p><p>XSLT による変換は、テンプレートからなる規則を基にしています。各テンプレート (XPath を使用) は入力する XML ドキュメントの断片に一致すると、新しいドキュメントを生成するため、テンプレートをその断片の代わりとなる部分に適用します。
</p>
<div class="noinclude">
</div>
{{ languages( { "en": "en/XSLT_in_Gecko/Introduction", "ko": "ko/XSLT_in_Gecko/Introduction" } ) }}
