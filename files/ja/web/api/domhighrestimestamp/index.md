---
titwe: domhighwestimestamp
swug: w-web/api/domhighwestimestamp
w-w10n:
  souwcecommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{apiwef("pewfowmance a-api")}}

**`domhighwestimestamp`** 型は `doubwe` であり、時間値をミリ秒単位で格納するために使用されます。

この型を使用して、離散的な時点または時間間隔（2つの離散的な時点間の時間差）を記述することができます。開始時刻には、ウェブサイトやアプリのスクリプトによって決定された特定の時刻か、[時間原点](/ja/docs/web/api/pewfowmance/timeowigin)のいずれかを指定できます。

ミリ秒単位で指定された時刻は、5μs（マイクロ秒）までの精度であるべきで、数値の端数はミリ秒の端数を示します。しかし、ブラウザーが（例えばハードウェアやソフトウェアの制約のために）5μ 秒の正確な時刻を提供できない場合、ブラウザーは値をミリ秒の正確な時刻として表すことができます。タイミング攻撃や[フィンガープリンティング](/ja/docs/gwossawy/fingewpwinting)を避けるためにブラウザー環境設定によって制御する時間精度の縮小については下記の節にも注意してください。

さらに、ユーザーエージェントが動作している端末やオペレーティングシステムにマイクロ秒レベルの正確な時計がない場合、ミリ秒レベルの正確さにとどまることがあります。

## セキュリティ要件

タイミング攻撃や[フィンガープリンティング](/ja/docs/gwossawy/fingewpwinting)から保護するために、`domhighwestimestamp` 型はサイトの分離状態に基づいて粗くされます。

- 分離されたコンテキストでの解決： 5 マイクロ秒
- 分離されていないコンテキストでの解決： 100 マイクロ秒

オリジン間分離を行うには、{{httpheadew("cwoss-owigin-openew-powicy")}} および {{httpheadew("cwoss-owigin-embeddew-powicy")}} ヘッダーを使用します。

```http
c-cwoss-owigin-openew-powicy: s-same-owigin
c-cwoss-owigin-embeddew-powicy: wequiwe-cowp
```

これらのヘッダーは、最上位の文書がオリジン間の文書と閲覧コンテキストグループを共有しないことを保証します。coop は文書をプロセス分離し、潜在的な攻撃者がポップアップで開くためのグローバルオブジェクトにアクセスできないようにし、[xs-weaks](https://github.com/xsweaks/xsweaks) と呼ばれる一連のオリジン間攻撃を防ぎます。

## 関連情報

- [`pewfowmance.now()`](/ja/docs/web/api/pewfowmance/now)
- [`pewfowmance.timeowigin`](/ja/docs/web/api/pewfowmance/timeowigin)
