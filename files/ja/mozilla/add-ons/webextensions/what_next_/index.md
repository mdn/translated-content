---
title: 次にどうするのか？
slug: Mozilla/Add-ons/WebExtensions/What_next_
tags:
  - Beginner
  - Extensions
  - WebExtension
translation_of: Mozilla/Add-ons/WebExtensions/What_next_
---
<div>{{AddonSidebar}}</div>

<p>ブラウザー拡張機能のアイデアを実現化していく準備ができているでしょう。開発の旅に出る前に、いくつかの注意点を意識することはスムーズに旅をする上で価値があります。</p>

<h2 id="Your_development_environment" name="Your_development_environment">開発環境</h2>

<p>ブラウザー拡張機能を開発するためには、どんな特別な開発ツールや環境構築も必要ありません。テキストエディターだけで素晴らしいブラウザー拡張機能を作成することはいくらでも可能です。しかし、ウェブ用の開発で再利用したいツールと環境を持っている場合もあるでしょう。その場合は、いくつかのことを意識する必要があります。</p>

<p>圧縮や難読化ツールを使用して最終コードを提出する場合には、<a href="#The_review_process">AMO レビュープロセス</a>にソースコードを提供する必要があります。また、使用するツール (圧縮、難読化、ビルド用) は、オープンソース (または無期限の無料提供) かつレビュー担当者のコンピューター上 (Windows、Mac、Linux) で実行可能である必要があります。残念ながらレビュー担当者は有償ツール、またはウェブベースのツールでは作業することができません。</p>

<p><a href="/ja/Add-ons/Source_Code_Submission#About_build_tools">ビルドツールに関する詳細</a></p>

<h2 id="Third-party_libraries" name="Third-party_libraries">サードパーティライブラリー</h2>

<p>サードパーティライブラリーはブラウザー拡張機能に複雑な特徴や機能性を素早く追加するための優れた手段です。<a href="#The_review_process">AMO レビュープロセス</a>に拡張機能を提出する時、どんなサードパーティライブラリーが使用されているかも検討されます。効率的なレビューのため、サードパーティライブラリーは常に公式ウェブサイトやリポジトリーからダウンロードし、ライブラリーが圧縮されている場合はソースコードへのリンクを提供してください。サードパーティライブラリーはいかなる方法でも変更できないことに注意してください。</p>

<p><a href="/ja/Add-ons/Source_Code_Submission">ソースコードの提出に関する詳細</a></p>

<h2 id="The_Firefox_Add-on_Distribution_Agreement" name="The_Firefox_Add-on_Distribution_Agreement">Firefox アドオン配布同意事項</h2>

<p>Firefox のリリース版、またはベータ版にインストールを行うために、拡張機能に署名する必要があります。署名は、addons.mozilla.org (AMO) で行われ、Firefox アドオン配布同意事項の条件に従います。この契約の目的は、Firefox ユーザーに対し、Firefox での体験を強化するような、十分にサポートされた高品質のアドオンを提供することにあります。</p>

<p><a href="/Add-ons/AMO/Policy/Agreement">同意約内容を確認する</a></p>

<p><a href="/ja/Add-ons/WebExtensions/Distribution">署名に関する詳細</a></p>

<h2 id="The_review_process" name="The_review_process">レビュープロセス</h2>

<p>署名のためにブラウザー拡張機能が提出されると、自動審査の対象となります。また、自動審査においてマニュアル審査が必要と判定された場合には、マニュアル審査の対象となる場合もあります。ブラウザー拡張機能は自動審査を通過するまで署名は行われず、マニュアル審査を通過しなかった場合に署名が取り消されることがあります。この審査の過程は厳密なガイドラインに従っているため、審査で問題になりそうな点を確認して回避することは簡単です。</p>

<p><a href="/ja/Add-ons/AMO/Policy/Reviews">レビューポリシーとガイドラインに関する詳細</a></p>

<h2 id="AMO_featured_browser_extensions" name="AMO_featured_browser_extensions">AMO のおすすめブラウザー拡張機能</h2>

<p>AMO にブラウザー拡張機能を掲載することを選んだ場合、拡張機能は AMO のウェブサイト、Firefox ブラウザーのアドオンマネージャー、または Mozilla のウェブサイト上のいずれかの場所に表示されます。拡張機能がどのようにおすすめとして選ばれるかを取り上げたガイドラインの一覧を作成しました。これらのガイドラインに従うことで、拡張機能をおすすめされるための最高の機会を得ることになります。</p>

<p><a href="/ja/Add-ons/AMO/Policy/Featured">アドオンのおすすめに関する詳細</a></p>

<h2 id="Continue_your_learning_experience" name="Continue_your_learning_experience">学習体験を続ける</h2>

<p>これまでの内容を知ったところで、今度はブラウザー拡張機能の開発について詳しく説明します。以下のセクションを確認してください:</p>

<ul>
 <li>ブラウザー拡張機能の裏にある基本的なコンセプトについて、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Using_the_JavaScript_APIs">JavaScript API</a> の使い方の詳細から説明します。</li>
 <li>ブラウザー拡張機能で利用できる、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface">ユーザーインターフェイスコンポーネント</a> のガイド。</li>
 <li>拡張機能の主な課題を達成する方法や、JavaScript API の使用方法に関するガイドのまとめ。</li>
 <li>他のブラウザー拡張機能を Firefox に移行する方法に関する情報。</li>
 <li>ブラウザー拡張機能の開発で使用できる Firefox 特有のワークフローの詳細について。</li>
 <li>JavaScript API に関するリファレンスガイド。</li>
 <li>マニフェストキーに関するリファレンスガイド。</li>
</ul>
