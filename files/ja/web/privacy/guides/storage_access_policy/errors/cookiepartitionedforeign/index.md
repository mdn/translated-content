---
title: "Partitioned: All third-party storage access requests"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookiePartitionedForeign
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

クッキーまたはストレージへのアクセスリクエストは、サードパーティー（異なるオリジン）から送信されたものであり、かつ[動的状態パーティショニング](/ja/docs/Web/Privacy/Guides/State_Partitioning#dynamic_partitioning)が有効になっているため、パーティショニングされました。

## メッセージ

Firefox:

```plain
CookiePartitionedForeign=Partitioned cookie
or storage access was provided to "<URL>" because it is loaded in the
third-party context and storage partitioning is enabled.
```

## 可能な対策

動的状態パーティショニングが有効になっている場合、Firefox は、各最上位ウェブサイトごとに別個のストレージバケットを埋め込みリソースに指定します。埋め込まれたサードパーティーは、[ストレージアクセス API](/ja/docs/Web/Privacy/Guides/State_Partitioning#storage_access_api) を通じて、最上位のストレージバケットへのアクセスをリクエストすることができます。同時に、`network.cookie.cookieBehavior` 設定を使用して、[動的状態パーティショニングを無効にする](/ja/docs/Web/Privacy/Guides/State_Partitioning#disable_dynamic_state_partitioning)ことも可能です。

## 関連情報

- [状態パーティショニング](/ja/docs/Web/Privacy/Guides/State_Partitioning)
