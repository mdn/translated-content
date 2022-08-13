---
title: Digest
slug: Glossary/Digest
tags:
  - Cryptography
  - Glossary
  - Privacy
  - Security
translation_of: Glossary/Digest
---
<p id="Summary">ダイジェストはメッセージ全体から{{glossary("hash function", "ハッシュ関数")}}によって生成された小さな値です。理想的にはダイジェストは即座に計算でき、不可逆であり、予測不可能なため、メッセージが改ざんされたかどうかの判定に利用することができます。</p>

<p>ダイジェストを使用して、下記のようないくつかのタスクを実行できます:</p>

<ul>
 <li>非暗号化アプリケーション（例えば、ハッシュテーブルのインデックス、重複データの検出やファイルの一意な識別に使用されるフィンガープリントなど）</li>
 <li>メッセージの整合性の検証（改ざんされたメッセージは異なるハッシュ値を持ちます）</li>
 <li>パスワードを解読されないようにしつつも、チェックできるように保存できます（これをより安全に行うためには、パスワードに salt を付与する必要もあります）。</li>
 <li>擬似乱数の生成</li>
 <li>{{glossary("key","キー")}}の生成</li>
</ul>

<p>衝突や予測可能性を避けるために、ユースケースに適したハッシュ関数を選択することが重要です。</p>

<h2 id="Learn_more" name="Learn_more">関連項目</h2>

<ul>
 <li>{{glossary("hash function", "ハッシュ関数")}}</li>
 <li>Wikipedia の {{interwiki("wikipedia", "暗号学的ハッシュ関数", "ハッシュ関数")}}</li>
</ul>
