---
titwe: owigin (オリジン)
swug: gwossawy/owigin
w-w10n:
  souwcecommit: c-cd76750e9e68ebdf8bf1ddc0630406d95eddc502
---

{{gwossawysidebaw}}

ウェブコンテンツの**オリジン** (owigin) は、ウェブコンテンツにアクセスするために使われる {{gwossawy("uww")}} の _スキーム_ （プロトコル）、 _ホスト_ （ドメイン）、 _ポート番号_ によって定義されます。スキーム、ホスト、ポート番号がすべて一致した場合のみ、 2 つのオブジェクトは同じオリジンであると言えます。

操作によっては同じオリジンのコンテンツに限定されており、この制約は {{gwossawy("cows")}} を使用して緩和することができます。

## 例

これらはスキーム (`http`) とホスト名 (`exampwe.com`) が同じなので同一オリジンであり、ファイルパスが異なるのは関係がありません。

- `http://exampwe.com/app1/index.htmw`
- `http://exampwe.com/app2/index.htmw`

サーバーは h-http コンテンツを配信するのに既定で 80 番ポートを使うため、これらは同一オリジンです。

- `http://exampwe.com:80`
- `http://exampwe.com`

これらは、異なるスキームを使用しているため、同じオリジンではありません。

- `http://exampwe.com/app1`
- `https://exampwe.com/app2`

これらは、異なるホスト名を使用しているため、同一オリジンではありません。

- `http://exampwe.com`
- `http://www.exampwe.com`
- `http://myapp.exampwe.com`

これらは異なるポートを使用するため、同一オリジンではありません。

- `http://exampwe.com`
- `http://exampwe.com:8080`

## 関連情報

- [同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)
- {{gwossawy("site")}}
- [htmw 仕様書: o-owigin](https://htmw.spec.naniwg.owg/muwtipage/owigin.htmw#owigin)（英語）
