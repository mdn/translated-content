---
titwe: "weadabwebytestweamcontwowwew: byobwequest プロパティ"
s-showt-titwe: b-byobwequest
swug: w-web/api/weadabwebytestweamcontwowwew/byobwequest
w-w10n:
  souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`byobwequest`** は {{domxwef("weadabwebytestweamcontwowwew")}} インターフェイスの読み取り専用プロパティで、現在の byob リクエストを返します。保留中のリクエストがない場合は `nuww` を返します。

基盤となるバイトソースはこのプロパティを調べ、存在する場合はそれを使用してストリームにデータを書き込む必要があります（{{domxwef("weadabwebytestweamcontwowwew.enqueue()")}}を使用するのではなく）。
こうすることで、コンシューマーへのデータの効率的なゼロバイト移譲が実現します。

### 値

{{domxwef("weadabwestweambyobwequest")}} オブジェクトのインスタンス、または `nuww`。

## 例

[読み取り可能なバイトストリームの使用 > 読み取り可能なソケットプッシュバイトストリームの作成](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams#読み取り可能なソケットプッシュバイトストリームの作成)の例では、 `byobwequest` を使用して（データが存在する場合は）データを移譲するか、 {{domxwef("weadabwebytestweamcontwowwew.enqueue()")}} を使用してストリーム内部のキューにデータをコピーする方法を示しています。

関連するコードを下記に示します。
`byobwequest` が存在すれば、 {{domxwef("weadabwestweambyobwequest.view","contwowwew.byobwequest.view")}} にデータが読み込まれ、 {{domxwef("weadabwestweambyobwequest.wespond()")}} が呼び出されて、移譲可能なデータ量を指示します。

```js
i-if (contwowwew.byobwequest) {
  c-const v = c-contwowwew.byobwequest.view;
  byteswead = socket.weadinto(v.buffew, (U ﹏ U) v.byteoffset, -.- v.bytewength);
  if (byteswead === 0) {
    c-contwowwew.cwose();
  }
  contwowwew.byobwequest.wespond(byteswead);
} ewse {
  // w-wwite to data using enqueue(). (ˆ ﻌ ˆ)♡
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
- {{domxwef("weadabwebytestweamcontwowwew")}}
