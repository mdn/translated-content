---
title: HTTPS RR(HTTPS リソースレコード)
slug: Glossary/HTTPS_RR
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

**HTTPS RR**（**_HTTPS リソースレコード_**）は、{{Glossary("HTTPS")}} を介してサービスにアクセスするための設定情報やパラメータを提供する DNS レコードの一種です。

_HTTPS RR_ を使用すると、 HTTPS を使用してサービスに接続するプロセスを最適化できます。
さらに、 _HTTPS RR_ の存在は、そのオリジン上の有用な {{Glossary("HTTP")}} リソースがすべて HTTPS 経由でアクセス可能であることを示しており、これはつまり、ブラウザーがそのドメインへの接続を HTTP から HTTPS へ安全にアップグレードできることを意味します。

## 関連情報

- {{RFC(9460, "Service Binding and Parameter Specification via the DNS (SVCB and HTTPS Resource Records)")}}
- [Strict Transport Security vs. HTTPS Resource Records: the showdown](https://emilymstark.com/2020/10/24/strict-transport-security-vs-https-resource-records-the-showdown.html) (Emily M. Stark blog)
- 関連用語:
  - {{glossary("TLS")}}
