---
title: 用語集の項目を書いたり参照したりするには
slug: MDN/Contribute/Howto/Write_a_new_entry_in_the_Glossary
tags:
  - Contributing
  - Definition
  - Entry
  - Glossary
  - Guide
  - Howto
  - MDN Meta
  - Term
  - Word
  - define
translation_of: MDN/Contribute/Howto/Write_a_new_entry_in_the_Glossary
---
<div>{{MDNSidebar}}</div>

<div>{{IncludeSubnav("/en-US/docs/MDN")}}</div>

<p><span class="seoSummary">この記事では、 <a href="/ja/docs/Glossary">MDN Web Docs の用語集</a>に項目を追加したりリンクしたりする方法について説明します。また、用語集の項目のレイアウトと内容に関するガイドラインも提供します。</span>用語集には、ウェブやウェブ開発に関する MDN コンテンツを読む際に出くわすであろうすべての用語、専門用語、略語、頭字語の定義が記載されています。</p>

<p>ウェブは常に変化しているため、用語集が完全ではない可能性があります。新しいエントリを投稿したり、問題を修正したりすることで、用語集の更新やギャップを埋めることができます。</p>

<p>用語集に寄稿することは、誰にとってもウェブをより理解しやすくするための簡単な方法です。高度な技術的スキルは必要ありません。用語集の項目は、簡単で簡潔なものを意図しています。</p>

<h2 id="How_to_write_an_entry" name="How_to_write_an_entry">項目を執筆する方法</h2>

<p>用語集に項目が必要なトピックを探している場合は、<a href="/ja/docs/Glossary#Contribute_to_the_glossary">文書化されていない用語のリスト</a>が<a href="/ja/docs/Glossary">用語集のランディングページ</a>の最後にあるので確認してください。これらのリンクをクリックすると、クリックした項目の新しい用語ページが開きます。それから、次の手順に従ってください。</p>

<p>新たなトピックについての考えがあるならば、新しいタブで以下のボタンを開き、ボタンよりも下にある手順通りにしてください。</p>

<div class="align-center"><a class="button ignore-external mega positive" href="/ja/docs/new?parent=4391">用語集に新しい項目を書く</a></div>

<h3 id="Step_1_Select_a_term_to_explain" name="Step_1_Select_a_term_to_explain">ステップ1: 説明する用語を選ぶ</h3>

<p>用語集に追加する用語を選択します。どの用語の定義が必要かわからない場合は、<a href="/ja/docs/Glossary#Contribute_to_the_glossary">提案の一覧</a>を見ることができます。いずれかの用語をクリックすると、始めることができます。すでにログインしている場合は、用語をクリックすると MDN エディターが開きます。</p>

<h3 id="Step_2_Write_a_summary" name="Step_2_Write_a_summary">ステップ2: 要約を書く</h3>

<p>用語集ページの最初の段落は、その用語の簡潔で短い説明です。できれば、2文以内にしてください。説明を読めばどんな人であってもただちに理解できるような説明であるようにしてください。</p>

<div class="note">
<p><strong>注:</strong> インターネット上にある他の定義やコンテンツをコピー＆ペーストしないでください。 (特にウィキペディアは、ライセンスの版の幅が小さいため、 MDN とは互換性がありません。) 用語集の項目は独自の内容にしてください。</p>
</div>

<h4 id="Writing_a_good_glossary_entry" name="Writing_a_good_glossary_entry">良い用語集の項目を書く</h4>

<p>必要であれば多少は段落を追加しても良いのですが、気が付くと記事全体を書いてしまいがちです。記事を書くことはすばらしいのですが、用語集の中には作成しないでください。記事をどこに書けばよいのかわからない場合は、気軽に<a href="/ja/docs/MDN/Community#Join_our_mailing_lists">相談してください</a>。</p>

<p>より良い用語集の項目を書くために考慮すべき簡単なガイドラインがいくつかあります。</p>

<ul>
 <li>用語集の説明文で用語を使用するときや、略語を使用するときには、適切なリンクを作成してください。多くの場合、これは用語集の他のページへのリンクを作成するだけです。 (下記の <a href="#How_to_use_the_Glossary_macro">Glossary マクロの使い方</a>を参照してください。) 用語集の項目の用語に直接関連する用語については、 MDN Web Docs のメイン記事にリンクしてください。</li>
 <li>用語集の項目では、記事を追いかけるのが難しくせずにできるのであれば、適切な関連用語 (リンク付きで) を使用してください。関連した有用なリンクのネットワークを持つことで、ページ、または一連のページを使いやすくすることができます。</li>
 <li>このページを見つけたいと思ったときに、どのような検索用語を選ぶか考えてみてください。その用語を検索するために使用するすべての単語を使用してみてください。ただし、用語集の項目を無意味にしたり、長くしたり、読みにくくしたりしないようにしてください。</li>
</ul>

<h4 id="Specifying_the_tooltip" name="Specifying_the_tooltip">ツールチップの設定</h4>

<p>ほとんどの MDN リンクと同様に、用語集のリンクにカーソルを合わせると、ページの簡単な説明 (この場合、用語の定義の短い要約) が表示されます。既定ででは、ツールチップは用語集の項目の最初の段落全体のテキストを取ります。これはふつうは長すぎます。</p>

<p>別の方法として、テキストの一部区間をページの概要として割り当てることもできます (これがツールチップのテキストにもなります)。用語の定義を要約する1～2文を選択し、選択されたテキストに <em>SEO Summary</em> スタイルを追加してください。これでツールチップのテキストが定義されます。また、これはページの内容の要約として検索エンジンに送信されるテキストに割り当てられます。そのため、ページの要約を具体的に選択することで、あなたの仕事が検索結果でより目に付くようになります。</p>

<div class="note">
<p><strong>注:</strong> できれば、 <em>SEO summary</em> で選択する文字列は 150-160 文字にしてください。多いよりは少ない方がいいことです。</p>
</div>

<h3 id="Step_3_Expand_with_links" name="Step_3_Expand_with_links">ステップ3:リンクで拡張する</h3>

<p>用語集の項目は常に<em>詳細情報</em>の節で終わらせてください。この節では、読者が先へ進むための手助けとなるリンクを含むようにしてください。例えば、さらなる詳細がわかるようになるもの、関連した技術を学ぶことができるものなどです。</p>

<p>リンクは少なくとも以下の3つのグループに分けることをおすすめします。</p>

<dl>
 <dt>一般知識</dt>
 <dd>その用語や主題についてのより高水準な情報を提供するリンク群です。例えば、関連する <a href="http://wikipedia.org/">Wikipedia</a> ページへのリンクです。</dd>
 <dt>技術情報</dt>
 <dd>MDN Web Docs もしくは外部サイトにある、より詳細な技術情報へのリンク群です。</dd>
 <dt>学習素材</dt>
 <dd>読者がその用語の背景にある技術の利用方法を学ぶことを支援する、チュートリアルや演習問題、その他の素材へのリンク群です。</dd>
</dl>

<h2 id="Dealing_with_disambiguation" name="Dealing_with_disambiguation">曖昧な言葉の扱い</h2>

<p>言葉によっては、文脈によって複数の意味を持つことがあります。曖昧さを解決するために、以下のガイドラインに従ってください。</p>

<ul>
 <li>用語の主ページは、 {{TemplateLink("GlossaryDisambiguation")}} マクロを含む曖昧さを表すページでなければなりません。</li>
 <li>それぞれの文脈に応じた用語を定義する副ページを設置します。</li>
</ul>

<p>例を用いて説明します。 <em>signature</em> という用語は、セキュリティ、関数、メールなど3種類以上の文脈で異なる意味持ちます。</p>

<ol>
 <li><a href="/ja/docs/Glossary/Signature">Glossary/Signature</a> のページは {{TemplateLink("GlossaryDisambiguation")}} マクロを含む曖昧さを表すページです。</li>
 <li><a href="/ja/docs/Glossary/Signature/Security">Glossary/Signature/Security</a> ページはセキュリティの文脈における署名を定義しているページです。</li>
 <li><a href="/ja/docs/Glossary/Signature/Function">Glossary/Signature/Function</a> ページは関数シグネチャを定義しているページです。</li>
 <li><a href="/ja/docs/Glossary/Signature/Email">Glossary/Signature/Email</a> ページはメールの署名を定義しているページです。</li>
</ol>

<h2 id="How_to_use_the_Glossary_macro" name="How_to_use_the_Glossary_macro">\{{Glossary}} マクロの使い方</h2>

<p>用語集は、人々が他の文書からそこから移動することなしに定義にアクセスできると、より役立ちます。そこで、いつでも用語集にリンクできる {{TemplateLink("Glossary")}} マクロを使うことをおすすめします。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">マクロ</th>
   <th scope="col">結果</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>\{{Glossary("browser")}}</td>
   <td>{{Glossary("browser")}}</td>
   <td>テキストが定義されている用語に一致する場合は、マクロをそのまま使います。 (大文字小文字を区別しません。)</td>
  </tr>
  <tr>
   <td>\{{Glossary("browser", "Web browser")}}</td>
   <td>{{Glossary("browser","Web browser")}}</td>
   <td>他のテキストを表示する場合は、第二引数に代わりのテキストを指定してください。</td>
  </tr>
  <tr>
   <td>\{{Glossary("browser", "Web browser", 1)}}</td>
   <td>{{Glossary("browser","Web browser",1)}}</td>
   <td>オプションの第三引数に <code>1</code> を指定すると、下線付きヒントではなく、通常のリンクとしてリンクを表示します。</td>
  </tr>
 </tbody>
</table>

<p>\{{Glossary}} マクロを用いて作成されたリンクは、用語集の項目における要約の段落、または <em>SEO summary</em> (前述の <a href="#Specifying_the_tooltip">ツールチップの設定</a> の節で解説) として定義されたテキストを含むツールチップを表示します。</p>

<h3 id="Using_the_macro_wisely" name="Using_the_macro_wisely">マクロの賢い使用</h3>

<p>多くの場合、 MDN のあらゆる場所でこのマクロを用いるのはまったく問題がありません。 \{{Glossary}} マクロを使用するには以下のガイドラインを考慮してください。</p>

<ul>
 <li>ある用語に既に MDN の適切なページへのリンクが設定されている場合は、用語集のリンクに<strong>置き換えないでください</strong>。</li>
 <li><strong>記事の1つの節の中では、 \{{Glossary}} マクロは同じ用語に対して1度しか使わないでください。</strong>記事の節は常にタイトルから始まるので、見分けることができます。</li>
</ul>
