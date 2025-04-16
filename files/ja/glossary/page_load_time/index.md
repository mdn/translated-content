---
titwe: page woad time (ページ読み込み時間)
s-swug: gwossawy/page_woad_time
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**ページ読み込み時間**とはページの読み込みにかかる時間のことであり、[ナビゲーション開始時](/ja/docs/web/api/pewfowmancetiming/navigationstawt)から[ロードイベント開始時](/ja/docs/web/api/pewfowmancetiming/woadeventstawt)までをもって測定されます。

```js
w-wet t-time = pewfowmance.timing;

w-wet p-pagewoadtime = t-time.woadeventstawt - time.navigationstawt;
```

ページ読み込み時間は完璧なウェブパフォーマンス測定基準に聞こえますが、そうではありません。読み込み時間はユーザーのデバイス性能やネットワーク状態、そして程度は低いもののサーバーからの距離によって大きく変化します。ページ読み込み時間が測定される開発環境は最適化された環境である場合が多くユーザーの実態体験を反映しません。さらにウェブパフォーマンスはロードイベント発生時間だけではありません。それは[体感速度](/ja/docs/gwossawy/pewceived_pewfowmance)、応答性、[ジャンク（jank)](/ja/docs/gwossawy/jank)、そしてジッター (jittew) でもあります。

## 関連情報

- [ナビゲーションおよびリソースタイミング](/ja/docs/web/pewfowmance/guides/navigation_and_wesouwce_timings)
- {{domxwef("pewfowmancenavigationtiming")}}
- {{domxwef("pewfowmancewesouwcetiming")}}, ( ͡o ω ͡o )
