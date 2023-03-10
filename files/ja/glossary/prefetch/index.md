---
title: プリフェッチ
slug: Glossary/Prefetch
---

プリフェッチは、コンテンツが要求される可能性が高いことを前提にして、ユーザーが要求したときにコンテンツを即座にロードできるようにします。コンテンツはユーザーが明示的にリクエストすることなくダウンロードされ、将来の使用を想定してキャッシュされます。

### DNS プリフェッチ

ドメインの解決は、携帯電話のネットワークでは遅延のために時間がかかることがあります。検索エンジンの結果のように、クリックされる可能性のある外部ウェブサイトへのリンクが多数ある場合、DNS プリフェッチはドメイン名を事前に解決するため、ドメイン解決に関連するリクエスト時間を短縮し、読み込み時間が短縮されます。

```
<link rel="dns-prefetch" href="https://example.com/">
```

### リンクのプリフェッチ

リンクのプリフェッチは、ユーザーがクリックする可能性の高いリンクを想定し、それらのリンクのコンテンツを予めダウンロードしておくことで、パフォーマンスを最適化するテクニックです。ユーザーがリンクをクリックすると、コンテンツはすでにダウンロードされているため、ページが即座にレンダリングされます。

プリフェッチヒントは HTTP ヘッダーで送信されます

```
Link: ; rel=dns-prefetch,
      ; as=script; rel=preload,
      ; rel=prerender,
      ; as=style; rel=preload
```

### 属性値のプリフェッチ

ブラウザーは、prefetch 属性値付きの [`<link>`](/ja/docs/Web/HTML/Element/link) タグが指示したコンテンツをプリフェッチするので、開発者はどのリソースをプリフェッチすべきかを制御することができます。

```
 <link rel="prefetch" href="https://www.example.com/solutions" />
```

## 関連情報

- defer
- async
- [preload](/ja/docs/Web/HTML/Preloading_content)
- [page prediction](/ja/docs/Glossary/Page_prediction)
- [lazy loading](/ja/docs/Learn/Performance/Lazy_loading)
