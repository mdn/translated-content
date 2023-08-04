---
title: SMTP
slug: Glossary/SMTP
---

**SMTP** (Simple Mail Transfer Protocol) は、新しいメールを送信するために使用される{{glossary("protocol","プロトコル")}}です。 {{glossary("POP3")}} や {{glossary("NNTP")}} と同様に、{{Glossary("state machine","ステートマシン")}} により駆動するプロトコルです。

このプロトコルは比較的単純です。最も複雑な部分は、様々な認証のメカニズム ([GSSAPI](http://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface)、[CRAM-MD5](http://en.wikipedia.org/wiki/CRAM-MD5)、[NTLM](http://ja.wikipedia.org/wiki/NTLM)、MSN、AUTH LOGIN、AUTH PLAIN、他) をサポートすること、エラーレスポンスを取り扱うこと、そして認証メカニズムが失敗した時 (例、サーバーがあるメカニズムのサポートを要求するが、実際にはサポートしていない) にフォールバックを行うことです。

1. [用語集](/ja/docs/Glossary)

   1. {{glossary("NNTP")}}
   2. {{glossary("POP3")}}
   3. {{glossary("protocol")}}
   4. {{Glossary("state machine")}}

2. Wikipedia の記事

   1. [SMTP](https://ja.wikipedia.org/wiki/SMTP)
