---
title: Thread (スレッド)
slug: Glossary/Thread
tags:
  - Glossary
  - Thread
  - asynchronous
  - スレッド
translation_of: Glossary/Thread
---
<p>コンピュータ科学におけるスレッドは、複数のタスクやプログラムを同時に実行することです。それぞれのコードを実行できる機能の単位は<strong>スレッド</strong>と呼ばれています。</p>

<p><strong>{{Glossary("main thread", "メインスレッド")}}</strong>はそのうちの一つで、ブラウザーがユーザーイベントを扱い、画面に表示や描画を行い、通常のウェブページやアプリを構成するコードの大部分を実行します。これらのものがすべて一つのスレッドで行われるため、速度の遅いウェブサイトやアプリのスクリプトがブラウザー全体の速度を落とします。さらに悪いことに、サイトやアプリのスクリプトが無限ループに入ると、ブラウザー全体がハングアップすることがあります。これは使い勝手がのろく (または悪く) 失望させるものになります。</p>

<p>しかし、最近の {{Glossary("JavaScript")}} は追加のスレッドを生成する方法を提供しており、それぞれが独立して実行され互いに通信することができます。これは <strong><a href="/ja/docs/Web/API/Web_Workers_API">Web worker</a></strong> のような技術で実現されており、独自のスレッドでメインスレッドと同時に実行されるサブプログラムを分岐させるために使用することができます。これによって遅いタスク、複雑なタスク、実行に時間がかかるタスクをメインスレッドから独立して実行し、サイトやアプリの全体的な性能を、ひいてはブラウザー全体の性能を保護します。これで最近のマルチコアプロセッサーの利点を活用することもできます。</p>

<p><strong><a href="/ja/docs/Web/API/Service_Worker_API">service worker</a></strong> と呼ばれる特殊な種類の Worker —ユーザーの許可により—サイトの背後に隠れてユーザーがサイトを使用していないときにも実行されるものを作成することもできます。これにより、サイトを頻繁に操作していない間に何かが起こった時、ユーザーに通知することができるサイトを作成するために使用することができます。例えばメールサービスにログインしていない状態でも新しいメールが届いたことをユーザーに通知したりするなどです。</p>

<p>全体的に見て、オペレーティングシステム内のこれらのスレッドは非常に有用であることがわかります。これらのスレッドは、コンテキストの切り替え時間を最小限に抑え、より効率的な通信を可能にし、マルチプロセッサアーキテクチャのさらなる利用を可能にします。</p>

<section id="Quick_links">
<ol>
 <li>関連情報
  <ol>
   <li><a href="/ja/docs/Learn/JavaScript/Asynchronous">非同期 JavaScript</a></li>
   <li><a href="/ja/docs/Web/API/Web_Workers_API">Web worker API</a></li>
   <li><a href="/ja/docs/Web/API/Service_Worker_API">Service worker API</a></li>
  </ol>
 </li>
 <li><a href="/ja/docs/Glossary">用語集</a>
  <ol>
   <li>{{Glossary("main thread", "メインスレッド")}}</li>
  </ol>
 </li>
</ol>
</section>
